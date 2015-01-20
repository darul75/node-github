"use strict";

var Fs = require("fs");
var error = require("./error");
var Util = require("./util");
var util = require("util");
var Url = require("url");
var Router = require("./lib/core/router");

/** section: linked
 * class Client
 *
 *  Copyright 2014.
 *
 *  Author: Julien Valéry <darul75@gmail.com>
 *
 *  [[Client]] load version 1 of the [[linkedin]] client API, with the
 *  requirement that a valid routes.json definition file is present in the
 *  `api/[VERSION]` directory and that the routes found in this file are
 *  implemented as well.
 *
 *  Upon instantiation of the [[Client]] class, the routes.json file is loaded
 *  from the API version specified in the configuration and, parsed and from it
 *  the routes for HTTP requests are extracted. For each HTTP endpoint to the
 *  HTTP server, a method is generated which accepts a Javascript Object
 *  with parameters and an optional callback to be invoked when the API request
 *  returns from the server or when the parameters could not be validated.
 *
 *  When an HTTP endpoint is processed and a method is generated as described
 *  above, [[Client]] also sets up parameter validation with the rules as
 *  defined in the routes.json. A full example that illustrates how this works
 *  is shown below:
 *
 *  ##### Example
 *
 *  First, we look at a listing of a sample routes.json routes definition file:
 *
 *      {
 *          "defines": {
 *              "constants": {
 *                  "name": "Linked",
 *                  "description": "A Node.JS module, which provides an object oriented wrapper for the Linked API.",
 *                  "protocol": "https",
 *                  "host": "api.linkedin.com",
 *                  "port": 443,
 *                  "dateFormat": "YYYY-MM-DDTHH:MM:SSZ",
 *                  "requestFormat": "json"
 *              },
 *              "response-headers": [
 *                  "X-RateLimit-Limit",
 *                  "X-RateLimit-Remaining",
 *                  "Link"
 *              ],
 *              "params": {
 *                  "url-field-selector": {
 *                     "type": "String",
 *                     "required": false,
 *                     "validation": "",
 *                     "invalidmsg": "",
 *                     "description": "Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors"
 *                   },
 *                   "secure-urls": {
 *                     "type": "Boolean",
 *                     "required": false,
 *                     "validation": "",
 *                     "invalidmsg": "",
 *                     "description": "Indicate that you want the URLs in your response to be HTTPS."
 *                   }
 *              }
 *          },
 *          "people": {
 *             "get-current": {            
 *               "url": "/people/~",
 *               "doc-url": "https://developer.linkedin.com/documents/profile-api",
 *               "method": "GET",
 *               "params": {
 *                 "$url-field-selector": null,
 *                 "$secure-urls": null
 *               }
 *             },
 *             "get-member": {
 *               "url": "/people/",
 *               "doc-url": "https://developer.linkedin.com/documents/profile-api",
 *               "method": "GET",
 *               "params": {
 *                 "$id": null,
 *                 "$url": null,
 *                 "$url-field-selector": null,
 *                 "$secure-urls": null
 *               }
 *             }
 *          }   
 *       }
 *    }
 *
 *  You probably noticed that the definition is quite verbose and the decision
 *  for its design was made to be verbose whilst still allowing for basic variable
 *  definitions and substitions for request parameters.
 *
 *  There are two sections; 'defines' and 'gists' in this example.
 *
 *  The `defines` section contains a list of `constants` that will be used by the
 *  [[Client]] to make requests to the right URL that hosts the API.
 *  The `gists` section defines the endpoints for calls to the API server, for
 *  gists specifically in this example, but the other API sections are defined in
 *  the exact same way.
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *  there is one endpoint defined: .
 *  In this example, the endpoint `gists/get-from-user` will be exposed as a member
 *  on the [[Client]] object and may be invoked with
 *
 *      client.getFromUser({
 *          "user": "bob"
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *      // or to fetch a specfic page:
 *      client.getFromUser({
 *          "user": "bob",
 *          "page": 2,
 *          "per_page": 100
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *  All the parameters as specified in the Object that is passed to the function
 *  as first argument, will be validated according to the rules in the `params`
 *  block of the route definition.
 *  Thus, in the case of the `user` parameter, according to the definition in
 *  the `params` block, it's a variable that first needs to be looked up in the
 *  `params` block of the `defines` section (at the top of the JSON file). Params
 *  that start with a `$` sign will be substituted with the param with the same
 *  name from the `defines/params` section.
 *  There we see that it is a required parameter (needs to hold a value). In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 *
 *  Implementation Notes: the `method` is NOT case sensitive, whereas `url` is.
 *  The `url` parameter also supports denoting parameters inside it as follows:
 *
 *      "get-from-user": {
 *          "url": ":user/gists",
 *          "method": "GET"
 *          ...
 *      }
 **/
function Client(config) {
  this.config = config;
  this.debug = Util.isTrue(config.debug);

  this.version = config.version;
  this[this.version] = JSON.parse(Fs.readFileSync(__dirname + "/api/v" + this.version + "/routes.json", "utf8"));

  var pathPrefix = "";
  
  // Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
  if (typeof config.pathPrefix == "string" && config.pathPrefix.length > 0) {
    pathPrefix = "/" + config.pathPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
    this.config.pathPrefix = pathPrefix;
  }

  Router.call(this, config);
};

util.inherits(Client, Router);

Client.prototype.authenticate = function(options) {
  if (!options) {
    this.auth = false;
    return;
  }
  if (!options.type || "oauth".indexOf(options.type) === -1)
    throw new Error("Invalid authentication type, must be 'oauth'");    
  if (options.type == "oauth") {
    if (!options.token && !(options.key && options.secret))
      throw new Error("OAuth2 authentication requires a token or key & secret to be set");
  }

  this.auth = options;
};

function getPageLinks(link) {
  if (typeof link == "object" && (link.link || link.meta.link))
    link = link.link || link.meta.link;

  var links = {};
  if (typeof link != "string")
    return links;

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)\"/g, function(m, uri, type) {
    links[type] = uri;
  });
  return links;
}

Client.prototype.hasNextPage = function(link) {
  return getPageLinks(link).next;
};

Client.prototype.hasPreviousPage = function(link) {
  return getPageLinks(link).prev;
};

Client.prototype.hasLastPage = function(link) {
  return getPageLinks(link).last;
};

Client.prototype.hasFirstPage = function(link) {
  return getPageLinks(link).first;
};

function getPage(link, which, callback) {
  var url = getPageLinks(link)[which];
  if (!url)
    return callback(new error.NotFound("No " + which + " page found"));

  var parsedUrl = Url.parse(url, true);
  var block = {
    url: parsedUrl.pathname,
    method: "GET",
    params: parsedUrl.query
  };
  var self = this;
  this.httpSend(parsedUrl.query, block, function(err, res) {
    if (err)
      return self.sendError(err, null, parsedUrl.query, callback);

    var ret;
    try {
      ret = res.data && JSON.parse(res.data);
    }
    catch (ex) {
      if (callback)
        callback(new error.InternalServerError(ex.message), res);
      return;
    }

    if (!ret)
      ret = {};
    if (!ret.meta)
      ret.meta = {};
    self.responseHeaders.forEach(function(header) {
      if (res.headers[header])
        ret.meta[header] = res.headers[header];
    });

    if (callback)
      callback(null, ret);
  });
}

Client.prototype.getNextPage = function(link, callback) {
  getPage.call(this, link, "next", callback);
};

Client.prototype.getPreviousPage = function(link, callback) {
  getPage.call(this, link, "prev", callback);
};

Client.prototype.getLastPage = function(link, callback) {
  getPage.call(this, link, "last", callback);
};

Client.prototype.getFirstPage = function(link, callback) {
  getPage.call(this, link, "first", callback);
};

module.exports = Client;

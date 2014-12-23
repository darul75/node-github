"use strict";

var Fs = require("fs");
var error = require("./error");
var Util = require("./util");
var Url = require("url");

function Http() {
};

function getQueryAndUrl(msg, def, format, config) {
  var url = def.url;
  if (config.pathPrefix) {
    url = config.pathPrefix + def.url;
  }
  var ret = {
    query: format == "json" ? {} : []
  };
  if (!def || !def.params) {
    ret.url = url;
    return ret;
  }

  Object.keys(def.params).forEach(function(paramName) {
    paramName = paramName.replace(/^[$]+/, "");
    if (!(paramName in msg))
      return;

    if (paramName === 'url-field-selector')
      return;

    var isUrlParam = url.indexOf(":" + paramName) !== -1;
    var isUrlFieldSelector = paramName === 'url-field-selector';    
    var valFormat = isUrlParam || format != "json" ? "query" : format;
    var val;
    if (valFormat != "json" && typeof msg[paramName] == "object") {
      try {
        msg[paramName] = JSON.stringify(msg[paramName]);
        val = encodeURIComponent(msg[paramName]);
      }
      catch (ex) {
        return Util.log("httpSend: Error while converting object to JSON: "
          + (ex.message || ex), "error");
      }
    }
    else
      val = valFormat == "json" ? msg[paramName] : encodeURIComponent(msg[paramName]);

    if (isUrlParam) {
      url = url.replace(":" + paramName, val);
    }
    else {
      if (format == "json")
        ret.query[paramName] = val;
      else
        ret.query.push(paramName + "=" + val);
    }

    if (isUrlFieldSelector)
      url += val;
  });

  ret.url = url;
  return ret;
}

Http.prototype.httpSend = function(msg, block, callback) {
  var self = this;
  var method = block.method.toLowerCase();
  // var hasBody = ("head|get|delete".indexOf(method) === -1);
  var hasBody = ("head|get|delete".indexOf(method) === -1);
  var format = hasBody && this.constants.requestFormat
  ? this.constants.requestFormat
  : "query";
  var obj = getQueryAndUrl(msg, block, format, self.config);
  var query = obj.query;
  var url = this.config.url ? this.config.url + obj.url : obj.url;
  if (msg['url-field-selector'])
    url+= msg['url-field-selector'];

  console.log(url);

  var path = url;
  var protocol = this.config.protocol || this.constants.protocol || "http";
  var host = this.config.host || this.constants.host;
  var port = this.config.port || this.constants.port || (protocol == "https" ? 443 : 80);
  
  var proxyUrl;
  if (this.config.proxy !== undefined) {
    proxyUrl = this.config.proxy;
  } else {
    proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
  }
  if (proxyUrl) {
    path = Url.format({
      protocol: protocol,
      hostname: host,
      port: port,
      pathname: path
    });

    if (!/^(http|https):\/\//.test(proxyUrl))
      proxyUrl = "https://" + proxyUrl;

    var parsedUrl = Url.parse(proxyUrl);
    protocol = parsedUrl.protocol.replace(":", "");
    host = parsedUrl.hostname;
    port = parsedUrl.port || (protocol == "https" ? 443 : 80);
  }

  if (!hasBody && query.length)
    path += "?" + query.join("&");

  var headers = {
    "host": host,
    "content-length": "0"
  };

  if (hasBody) {
    if (format == "json")
      query = JSON.stringify(query);
    else
      query = query.join("&");
    headers["content-length"] = Buffer.byteLength(query, "utf8");
    headers["content-type"] = format == "json"
    ? "application/json; charset=utf-8"
    : "application/x-www-form-urlencoded; charset=utf-8";
    headers["x-li-format"] = "json";
  }

  headers["x-li-format"] = "json";

  if (this.auth) {
    var basic;
    switch (this.auth.type) {
      case "oauth":
      if (this.auth.token) {
        headers["Authorization"] = "Bearer " + this.auth.token;                        
        // path += (path.indexOf("?") === -1 ? "?" : "&") +
        //     "oauth2_access_token=" + encodeURIComponent(this.auth.token);
      }
      break;
      // case "token":
      // basic = new Buffer(this.auth.username + "/token:" + this.auth.token, "ascii").toString("base64");
      // headers.authorization = "Basic " + basic;
      // break;
      default:
      break;
    }
  }

  if (!msg.headers)
    msg.headers = {};
  Object.keys(msg.headers).forEach(function(header) {
    var headerLC = header.toLowerCase();
    if (self.requestHeaders.indexOf(headerLC) == -1)
      return;
    headers[headerLC] = msg.headers[header];
  });
  if (!headers["user-agent"])
    headers["user-agent"] = "NodeJS HTTP Client";

  var options = {
    host: host,
    port: port,
    path: path,
    method: method,
    headers: headers
  };

  if (this.debug)
    console.log("REQUEST: ", options);

  var callbackCalled = false

  var req = require(protocol).request(options, function(res) {
    if (self.debug) {
      console.log("STATUS: " + res.statusCode);
      console.log("HEADERS: " + JSON.stringify(res.headers));
    }
    res.setEncoding("utf8");
    var data = "";
    res.on("data", function(chunk) {
      data += chunk;
    });
    res.on("error", function(err) {
      if (!callbackCalled) {
       callbackCalled = true;   
       callback(err); 
     }
    });
    res.on("end", function() {
      if (callbackCalled)
        return;

      callbackCalled = true;
      if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
        callback(new error.HttpError(data, res.statusCode));
      } else {
        res.data = data;
        callback(null, res);
      }
    });
  });

  if (this.config.timeout) {
    req.setTimeout(this.config.timeout);
  }

  req.on("error", function(e) {
    if (self.debug)
      console.log("problem with request: " + e.message);
    if (!callbackCalled) {
      callbackCalled = true;
      callback(e.message);
    }
  });

  req.on("timeout", function() {
    if (self.debug)
      console.log("problem with request: timed out");
    if (!callbackCalled) {
      callbackCalled = true;
      callback(new error.GatewayTimeout());
    }
  });

  // write data to request body
  if (hasBody && query.length) {
    if (self.debug)
      console.log("REQUEST BODY: " + query + "\n");
    req.write(query + "\n");
  }
  req.end();
};

Http.prototype.sendError = function(err, block, msg, callback) {
  if (this.debug)
    Util.log(err, block, msg.user, "error");
  if (typeof err == "string")
    err = new error.InternalServerError(err);
  if (callback)
    callback(err);
};

Http.prototype.handler = function(msg, block, callback) {
  var self = this;
  this.httpSend(msg, block, function(err, res) {
    if (err)
      return self.sendError(err, msg, null, callback);

    var ret;
    try {
      ret = res.data && JSON.parse(res.data);
    }
    catch (ex) {
      if (callback)
        callback(new error.InternalServerError(ex.message), res);
      return;
    }

    if (!ret) {
      ret = {};
    }
    ret.meta = {};
    self.responseHeaders.forEach(function(header) {
      if (res.headers[header]) {
        ret.meta[header] = res.headers[header];
      }
    });

    if (callback)
      callback(null, ret);
  });
};

module.exports = Http;
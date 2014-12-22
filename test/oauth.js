var http = require("http");
var Url = require("url");
var querystring = require("querystring");

var Client = require("../index");
var OAuth2 = require("oauth").OAuth2;

var github = new Client({
  version: "1",
  pathPrefix:"v1"
});

var clientId = "7782fkexleri0s";
var secret = "29X0lbFr6GvoJM8S";
var oauth = new OAuth2(clientId, secret, "https://www.linkedin.com/", "uas/oauth2/authorization", "uas/oauth2/accessToken");

// for demo purposes use one global access token
// in production this has to be stored in a user session
var accessToken = "";

http.createServer(function(req, res) {
  var url = Url.parse(req.url);
  var path = url.pathname;
  var query = querystring.parse(url.query);

  if (path == "/" || path.match(/^\/user\/?$/)) {
    // redirect to github if there is no access token
    if (!accessToken) {
      res.writeHead(303, {
        Location: oauth.getAuthorizeUrl({ 
          redirect_uri: 'http://localhost:3000/linked-callback',
          client_id:clientId,
          scope:'r_fullprofile',
          response_type:'code',
          state:'DCEEFWF45453sdffef424'
        })
      });
      res.end();
      return;
    }

    return;
  } 
  // URL called by github after authenticating
  else if (path.match(/^\/linked-callback\/?$/)) {
    console.log();
    // upgrade the code to an access token
    oauth.getOAuthAccessToken(query.code, {            
      grant_type:'authorization_code',
      code:query.code,
      redirect_uri: 'http://localhost:3000/linked-callback',
      client_id:clientId,                                           
      client_secret:secret
    }, function (err, access_token, refresh_token) {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end(err + "");
        return;
      }

      accessToken = access_token;

      console.log(accessToken);
      // authenticate github API
      github.authenticate({
        type: "oauth",
        token: accessToken
      });

      // use github API            
      github.people.getCurrent({"url-field-selector": ':(id,first-name,last-name,industry,connections,group-memberships,educations,date-of-birth,positions)'}, function(err, user) {
        if (err) {
          res.writeHead(err.code);
          res.end(err + "");
          return;
        }
        console.log(user);
        // res.writeHead(200, {
        //   Location: "/toto"
        // });
        res.end(user);
      });

          
    });
    return;
  }

  res.writeHead(404);
  res.end("404 - Not found");
}).listen(3000);

console.log("listening at http://localhost:3000");

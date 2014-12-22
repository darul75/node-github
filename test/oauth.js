var http = require("http");
var Url = require("url");
var querystring = require("querystring");
var queue = require("queue-async");

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
var accessToken = undefined;

var express = require('express');
var app = express();

var server = app.listen(3000, function() {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.redirect(oauth.getAuthorizeUrl({ 
    redirect_uri: 'http://localhost:3000/linked-callback',
    client_id:clientId,
    scope:'r_fullprofile',
    response_type:'code',
    state:'DCEEFWF45453sdffef424'
  }));
});

app.get(/^\/linked-callback\/?$/, function (req, res) {
  if (accessToken) {
    res.send(200);
    return;
  }

  oauth.getOAuthAccessToken(
    req.query.code, 
    { 
      grant_type:'authorization_code',
      code:req.query.code,
      redirect_uri: 'http://localhost:3000/linked-callback',
      client_id:clientId,                                           
      client_secret:secret
    }, 
    function (err, access_token, refresh_token) {
      if (err) {        
        res.status(500);
        res.end(err + "");
        return;
      }

      accessToken = access_token;

      // authenticate github API
      github.authenticate({
        type: "oauth",
        token: accessToken
      });
      res.send(200);    
    });
});

app.get('/people', function (req, res) {

  var q = queue(1);
  
  // use github API            
  q.defer(github.people.getCurrent, {"url-field-selector": ':(id,first-name,last-name,industry,connections,group-memberships,educations,date-of-birth,positions)'});
  q.defer(github.people.getCurrent, {"url-field-selector": ':(id,first-name,last-name,industry,connections,group-memberships,educations,date-of-birth,positions)'});
  // q.defer(github.people.getCurrentConnections, {});
  // q.defer(github.groups.getMemberShips, {});  
  q.awaitAll(function(error, results) {     
    res.json(results);
  });

  
});

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

// var github = new Client({
//   version: "1",
//   pathPrefix:"v1",
//   proxy: {
//     host: '10.115.100.103',
//     port: 8080
//   }
// });

var clientId = "7782fkexleri0s";
var secret = "29X0lbFr6GvoJM8S";
var oauth = new OAuth2(clientId, secret, "https://www.linkedin.com/", "uas/oauth2/authorization", "uas/oauth2/accessToken");
// oauth.setTunnel({
//   proxy: {
//     host: '10.115.100.103',
//     port: 8080
//   }
// });

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

  var ignoreError = function (task, callback) {
    task(function(error, result) {
      return callback(null, result); // ignore error
    });
  };

  var peopleCurrent = function(callback) {
    github.people.getCurrent({"url-field-selector": ':(id,first-name,last-name,industry,connections,group-memberships,educations,date-of-birth,positions,public-profile-url)'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.get';
      callback(null, result);
    });    
  };

  var peopleMemberByUrl = function(callback) {
    github.people.getMember({"url": 'https://www.linkedin.com/pub/julien-valery/70/624/b54', 'secure-urls': true, "url-field-selector": ':(headline,first-name,last-name)'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.get';
      callback(null, result);
    });    
  };

  var peopleMemberById = function(callback) {
    github.people.getMember({"id": '2JVl6yrion', 'secure-urls': true,"url-field-selector": ':(headline,first-name,last-name)'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.getMember';
      callback(null, result);
    });    
  };

  var peopleCurrentConnections = function(callback) {
    github.people.getCurrentConnections({"url-field-selector": ':(headline,first-name,last-name)'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.getCurrentConnections';
      callback(null, result);
    });    
  };  

  var peopleMemberConnectionsById = function(callback) {
    github.people.getMemberConnections({
      "idOrUrl": '2JVl6yrion',
      "start": 0,
      "count": 5
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.peopleMemberConnectionsById';
      callback(null, result);
    });    
  };

  var peopleMemberConnectionsByUrl = function(callback) {
    github.people.getMemberConnections({
      "idOrUrl": 'https://www.linkedin.com/pub/julien-valery/70/624/b54',
      "modified":"new",
      "modified-since":1267401600000,
      "start": 0,
      "count": 5
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.people.peopleMemberConnectionsByUrl';
      callback(null, result);
    });    
  };

  var groupsCurrentMembership = function(callback) {
    github.groups.getMemberships({
      "membership-state": "owner",
      "start": 0,
      "count": 5,
      "url-field-selector": ":(group:(id,name,posts;count=5,site-group-url))"
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.groups.getMemberships';            
      callback(null, result);
    });
  };

  var groupsCurrentMembershipSettings = function(callback) {
    github.groups.getMembershipsDetails({
      "group-id": "12435",          
      "url-field-selector": ":(show-group-logo-in-profile,email-digest-frequency,email-announcements-from-managers,allow-messages-from-members,email-for-every-new-post)"
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.groups.getMemberships';            
      callback(null, result);
    });
  };

  var groupsOne = function(callback) {
    github.groups.getDetails({
      "group-id": "12435",
      "url-field-selector": ":(id,name,site-group-url,posts:(id,summary,creator))"      
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.groups.one';            
      callback(null, result);
    });
  };

  // use github API            
  q.defer(ignoreError, peopleCurrent);
  q.defer(ignoreError, peopleMemberById);
  q.defer(ignoreError, peopleMemberByUrl);
  q.defer(ignoreError, peopleCurrentConnections);  
  q.defer(ignoreError, peopleMemberConnectionsById);
  q.defer(ignoreError, peopleMemberConnectionsByUrl);
  q.defer(ignoreError, groupsCurrentMembership);
  q.defer(ignoreError, groupsCurrentMembershipSettings);  
  q.defer(ignoreError, groupsOne);
  
  // q.defer(github.groups.getMemberships, {});  
  q.awaitAll(function(error, results) {     
    if (error)
      res.json(error);
    res.json(results);
  });

  
});

app.get('/company', function (req, res) {

  var q = queue(1);

  var ignoreError = function (task, callback) {
    task(function(error, result) {
      return callback(null, result); // ignore error
    });
  };
  
  var companyCurrent = function(callback) {
    github.company.all({}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.all';
      callback(null, result);
    });
  };

  var companyOneAndFields = function(callback) {
    github.company.one({
      'company-id': 1337,
      'url-field-selector': ':(id,name)'
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.companyOneAndFields';
      callback(null, result);
    });
  };

  var companyOne = function(callback) {
    github.company.one({"company-id": 162479}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.one';
      callback(null, result);
    });
  };

  var companyUniversalName = function(callback) {
    github.company.oneByUniversalName({"universal-name": 'linkedin'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.oneByUniversalName';
      callback(null, result);
    });
  };

  var companyEmailDomain = function(callback) {
    github.company.oneByEmailDomain({"email-domain": 'linkedin.com'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.companyEmailDomain';
      callback(null, result);
    });
  };

  var companyCurrentIsAdmin = function(callback) {
    github.company.all({'is-company-admin': true}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.all';
      callback(null, result);
    });
  };

  var companyMixed = function(callback) {
    github.company.all({'url-field-selector': '::(162479,universal-name=linkedin)'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.all';
      callback(null, result);
    });
  };

  var companyOneUpdate = function(callback) {
    github.company.oneUpdate({"company-id": 162479}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.oneUpdate';
      callback(null, result);
    });
  };

  var companyOneUpdatePagination = function(callback) {
    github.company.oneUpdate({"company-id": 162479, "start":0, "count":5}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.companyOneUpdatePagination';
      callback(null, result);
    });
  };

  var companyOneUpdateEventType = function(callback) {
    github.company.oneUpdate({"company-id": 162479, 'event-type': 'status-update'}, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.oneUpdateEventType';
      callback(null, result);
    });
  };

  var companyOneUpdateComments = function(callback) {
    github.company.oneUpdateComments({"company-id": 162479, 
      'company-update-key': 'UPDATE-c162479-5953413562058702849',
      'event-type': 'CMPY'
    }, function(err, result) {
      if (err)
        result = {"error" : err};
      result['_NAME'] = 'github.company.companyOneUpdateComments';
      callback(null, result);
    });
  };
  
  // use github API
  q.defer(ignoreError, companyCurrent);
  q.defer(ignoreError, companyOne);
  q.defer(ignoreError, companyOneAndFields);
  q.defer(ignoreError, companyOneUpdate);
  q.defer(ignoreError, companyOneUpdateEventType);
  q.defer(ignoreError, companyOneUpdatePagination);  
  q.defer(ignoreError, companyOneUpdateComments);  
  q.defer(ignoreError, companyUniversalName);
  q.defer(ignoreError, companyEmailDomain);
  q.defer(ignoreError, companyCurrentIsAdmin);
  q.defer(ignoreError, companyMixed);

  
  // q.defer(github.groups.getMemberships, {});  
  q.awaitAll(function(error, results) {     
    if (error)
      res.json(error);
    res.json(results);
  });

  
});
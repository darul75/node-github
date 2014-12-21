var connect = require('../'), 
    expect = require('expect.js'),
    express = require('express'),
    client = require('../index'),    
    http = require("http"),
    Url = require("url"),
    request = require('supertest'),
    querystring = require("querystring"),
    Client = require("../index"),
    OAuth2 = require("oauth").OAuth2;

var github = new Client({
  version: "1",
  pathPrefix:"v1"
});

var clientId = "7782fkexleri0s";
var secret = "29X0lbFr6GvoJM8S";
var oauth = new OAuth2(clientId, secret, "https://www.linkedin.com/", "uas/oauth2/authorization", "uas/oauth2/accessToken");    

    var app = express({debug:true});

    // opts = {
    //   debug: true
    // };

    // app.get('/nocompile/example', function(req, res){
    //   res.render('nocompile/example');
    // });

    // app.get('/nocompile/simple', function(req, res){
    //   res.render('nocompile/simple');
    // });

    // app.use(function(req, res){
    //   res.statusCode = 404;
    //   res.end('sorry!');
    // });

    //var server = http.createServer(app);

    app.listen(3000);

    //var server = http.createServer(app, done);

    app.on('connection', function () {
      console.log('toto');
      done();
    });

describe('i18next.server.spec', function() {

  describe('test1', function(){

    describe('with a malformed URL', function(){
      it('should respond with 404', function(done){
       request(app)
        .get('/zoubida/lala/')      
        .expect(404, done);
      });
    });

  });

});


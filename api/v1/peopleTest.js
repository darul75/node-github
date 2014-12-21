/*
 * Copyright 2012 Cloud9 IDE, Inc.
 *
 * This product includes software developed by
 * Cloud9 IDE, Inc (http://c9.io).
 *
 * Author: Mike de Boer <info@mikedeboer.nl>
 */

"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[people]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client({
            version: "1.0"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

    it("should successfully execute GET /people/~ (getCurrent)",  function(next) {
        client.people.getCurrent(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /people/ (getMember)",  function(next) {
        client.people.getMember(
            {
                id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /people/ (getMemberPublic)",  function(next) {
        client.people.getMemberPublic(
            {
                url: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /people/~/connections (getCurrentConnections)",  function(next) {
        client.people.getCurrentConnections(
            {
                start: "Number",
                count: "Number",
                modified: "Boolean",
                modified-since: "Date"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /people/:id/connections (getMemberConnections)",  function(next) {
        client.people.getMemberConnections(
            {
                id: "String",
                start: "Number",
                count: "Number",
                modified: "Boolean",
                modified-since: "Date"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /people/ (getMemberPublicConnections)",  function(next) {
        client.people.getMemberPublicConnections(
            {
                url: "String",
                start: "Number",
                count: "Number",
                modified: "Boolean",
                modified-since: "Date"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});

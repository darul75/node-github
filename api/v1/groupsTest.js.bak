"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[groups]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client({
            version: "1"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

it("should successfully execute GET /groups/:id (one)",  function(next) {
    client.groups.one(
        {
                url: "String",
                start: "Number",
                count: "Number",
                modified: "Boolean",
                modified-since: "Date",
                url-field-selector: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships (getMemberships)",  function(next) {
    client.groups.getMemberships(
        {
                membership-state: "Array",
                start: "Number",
                count: "Number",
                url-field-selector: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships/:group-id (getSettings)",  function(next) {
    client.groups.getSettings(
        {
                membership-state: "Array",
                group-id: "String",
                start: "Number",
                count: "Number"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /people/~/group-memberships/:group-id (settings)",  function(next) {
    client.groups.settings(
        {
                group-id: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/group-memberships (addGroup)",  function(next) {
    client.groups.addGroup(
        {},
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /people/~/group-memberships (removeGroup)",  function(next) {
    client.groups.removeGroup(
        {
                group-id: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /groups/{group-id}/posts (getPosts)",  function(next) {
    client.groups.getPosts(
        {
                group-id: "String",
                start: "Number",
                count: "Number",
                role: "Array",
                category: "Array",
                url-field-selector: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships/{group-id}/posts (getMembershipsPosts)",  function(next) {
    client.groups.getMembershipsPosts(
        {
                group-id: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships/{group-id}/posts (getSuggestionsPosts)",  function(next) {
    client.groups.getSuggestionsPosts(
        {
                group-id: "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});
});

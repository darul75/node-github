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

describe("[company]", function() {
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

    it("should successfully execute GET /companies (current)",  function(next) {
        client.company.current(
            {
                url-field-selector: "String",
                is-company-admin: "Boolean",
                start: "Number",
                end: "Number"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id (one)",  function(next) {
        client.company.one(
            {
                company-id: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:universal-name (oneByUniversalName)",  function(next) {
        client.company.oneByUniversalName(
            {
                universal-name: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies (oneByEmailDomain)",  function(next) {
        client.company.oneByEmailDomain(
            {
                email-domain: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id/updates (oneUpdate)",  function(next) {
        client.company.oneUpdate(
            {
                event-type: "String",
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

    it("should successfully execute GET /companies/:company-id/updates/key=:company-update-key/update-comments (oneUpdateComments)",  function(next) {
        client.company.oneUpdateComments(
            {
                event-type: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id/updates/key=:company-update-key/likes (oneUpdateCommentsLike)",  function(next) {
        client.company.oneUpdateCommentsLike(
            {
                event-type: "String"
            },
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id/shares (oneShares)",  function(next) {
        client.company.oneShares(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id/is-company-share-enabled (oneShareEnabled)",  function(next) {
        client.company.oneShareEnabled(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });

    it("should successfully execute GET /companies/:company-id/relation-to-viewer/is-company-share-enabled (currentShareEnabled)",  function(next) {
        client.company.currentShareEnabled(
            {},
            function(err, res) {
                Assert.equal(err, null);
                // other assertions go here
                next();
            }
        );
    });
});

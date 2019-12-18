// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const rot13 = require("./rot13.js");

describe("Rot13", function() {

	it("doesn't do anything with an empty string", function() {
		assert.equal(rot13.transform(""), "");
	});

	it("doesn't encode non-alphabetical characters", function() {
		assert.equal(rot13.transform("!@#$%^"), "!@#$%^");
	});

	it("encodes lower-case characters", function() {
		assert.equal(rot13.transform("abcdefghijklmnopqrstuvwxyz"), "nopqrstuvwxyzabcdefghijklm");
	});
	
	it("encodes upper-case characters", function() {
		assert.equal(rot13.transform("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "NOPQRSTUVWXYZABCDEFGHIJKLM");
	});

});

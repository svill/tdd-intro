// Copyright (c) 2014-2018 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// ****
// An assertion library that works the way *I* want it to. <oldmanvoice>Get off my lawn!</oldmanvoice>
// ****

var chai = require("chai").assert;

exports.fail = function(message) {
	chai.fail(null, null, message);
};

exports.todo = function() {
	exports.fail("TO DO");
};

exports.defined = function(actual, message) {
	message = message ? message + ": " : "";
	if (actual === undefined) exports.fail(message + "expected value, but was undefined");
};

exports.isUndefined = function(actual, message) {
	chai.isUndefined(actual, message);
};

exports.isTrue = function(actual, message) {
	chai.isTrue(actual, message);
};

exports.isFalse = function(actual, message) {
	chai.isFalse(actual, message);
};

exports.isNull = function(actual, message) {
	chai.isNull(actual, message);
};

exports.isNotNull = function(actual, message) {
	chai.isNotNull(actual, message);
};

exports.equal = function(actual, expected, message) {
	checkExpected(expected);
	chai.strictEqual(actual, expected, message);
};

exports.notEqual = function(actual, expected, message) {
	checkExpected(expected);
	chai.notStrictEqual(actual, expected, message);
};

exports.deepEqual = function(actual, expected, message) {
	checkExpected(expected);
	if (message) message += " expected deep equality";
	chai.deepEqual(actual, expected, message);
};

exports.objEqual = function(actual, expected, message) {
	checkExpected(expected);

	message = message ? message + ": " : "";
	exports.defined(actual, message);
	if (actual.equals === undefined) exports.fail(message + "does not have equals() method");
	exports.isTrue(actual.equals(expected), message + "object equality expected '" + expected + "', but got '" + actual + "'");
};

exports.objNotEqual = function(actual, expected, message) {
	checkExpected(expected);

	message = message ? message + ": " : "";
	exports.defined(actual, message);
	if (actual.equals === undefined) exports.fail(message + "does not have equals() method");
	exports.isFalse(actual.equals(expected), message + "expected '" + expected + "' and '" + actual + "' to be not be equal(), but they were");
};

exports.between = function(value, min, max, message) {
	exports.defined(value, message);
	message = message ? message + ": " : "";
	if (value < min || value > max) {
		exports.fail(message + "expected value between " + min + " and " + max + " (inclusive), but was " + value);
	}
};

exports.matches = function(actual, expectedRegex, message) {
	chai.match(actual, expectedRegex, message);
};

exports.noException = function(fn, message) {
	chai.doesNotThrow(fn, message);
};

exports.exception = function(fn, expected, message) {
	chai.throws(fn, expected, undefined, message);
};

exports.exceptionAsync = async function(fn, expectedRegexOrExactString, message) {
	message = message ? `${message}: ` : "";
	try {
		await fn();
	}
	catch (err) {
		if (expectedRegexOrExactString === undefined) return;
		if (typeof expectedRegexOrExactString === "string") {
			exports.equal(err.message, expectedRegexOrExactString, message);
		}
		else {
			exports.matches(err.message, expectedRegexOrExactString, message);
		}
		return;
	}
	exports.fail(`${message}Expected exception: ${expectedRegexOrExactString}`);
};

function checkExpected(expected) {
	if (expected === undefined) exports.fail("'undefined' provided as expected value in assertion");
}
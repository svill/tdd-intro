// Copyright (c) 2012-2018 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
"use strict";

const eslint = require("eslint");
const linter = new (eslint).Linter();
const fs = require("fs");
const promisify = require("util").promisify;

exports.validateSource = function(sourceCode, options, description) {
	description = description ? description + " " : "";

	var messages = linter.verify(sourceCode, options);
	var pass = (messages.length === 0);

	if (pass) {
		process.stdout.write(".");
	}
	else {
		console.log("\n" + description + "failed");
		messages.forEach(function(error) {
			var code = eslint.SourceCode.splitLines(sourceCode)[error.line - 1];
			console.log(error.line + ": " + code.trim());
			console.log("   " + error.message);
		});
	}
	return pass;
};

exports.validateFileAsync = async function(filename, options) {
	var sourceCode = await promisify(fs.readFile)(filename, "utf8");
	return exports.validateSource(sourceCode, options, filename);
};

"use strict";
const ROTATE = 13;

exports.transform = function(input) {
  return input.split("").map(transformChar).join("");
};

function transformChar(char) {
  const code = codeFor(char);
  if (code >= codeFor("a") && code <= codeFor("m")) {
    return transformLeft(char);
  }
  if (code >= codeFor("n") && code <= codeFor("z")) {
    return transformRight(char);
  }
  if (code >= codeFor("A") && code <= codeFor("M")) {
    return transformLeft(char);
  }
  if (code >= codeFor("N") && code <= codeFor("Z")) {
    return transformRight(char);
  }
  return char;
}

function transformLeft(char) {
  return String.fromCharCode(codeFor(char) + ROTATE);
}

function transformRight(char) {
  return String.fromCharCode(codeFor(char) - ROTATE);
}

function codeFor(char) {
  return char.charCodeAt(0);
}

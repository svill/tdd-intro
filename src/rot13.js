"use strict";

exports.transform = function(input) {
  let str = "";
  for (var i = 0; i < input.length; i++) {
    str += transformChar(input.charAt(i));
  }
  return str;
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
  const newCode = codeFor(char) + 13;
  return String.fromCharCode(newCode);
}

function transformRight(char) {
  const newCode = codeFor(char) - 13;
  return String.fromCharCode(newCode);
}

function codeFor(char) {
  return char.charCodeAt(0);
}

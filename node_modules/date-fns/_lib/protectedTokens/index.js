'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProtectedToken = isProtectedToken;
exports.throwProtectedError = throwProtectedError;
var protectedTokens = exports.protectedTokens = ['D', 'DD', 'YY', 'YYYY'];

function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1;
}

function throwProtectedError(token) {
  throw new RangeError('`options.awareOfUnicodeTokens` must be set to `true` to use `' + token + '` token; see: https://git.io/fxCyr');
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSameUTCWeek;

var _index = require('../startOfUTCWeek/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  if (arguments.length < 2) {
    throw new TypeError('2 argument required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfWeek = (0, _index2.default)(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0, _index2.default)(dirtyDateRight, options);

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
module.exports = exports['default'];
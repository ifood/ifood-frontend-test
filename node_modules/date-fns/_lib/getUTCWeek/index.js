'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUTCWeek;

var _index = require('../../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfUTCWeek/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../startOfUTCWeekYear/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate);
  var diff = (0, _index4.default)(date, options).getTime() - (0, _index6.default)(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
module.exports = exports['default'];
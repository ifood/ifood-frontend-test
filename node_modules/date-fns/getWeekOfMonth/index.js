'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeekOfMonth;

var _index = require('../_lib/toInteger/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../getDate/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../startOfMonth/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../getDay/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
function getWeekOfMonth(date, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index2.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index2.default)(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var startWeekDay = (0, _index8.default)((0, _index6.default)(date));
  var currentWeekDay = (0, _index8.default)(date);

  var startWeekDayWithOptions = startWeekDay < weekStartsOn ? 7 - weekStartsOn : startWeekDay;
  var diff = startWeekDayWithOptions > currentWeekDay ? 7 - weekStartsOn : 0;

  return Math.ceil(((0, _index4.default)(date) + diff) / 7);
}
module.exports = exports['default'];
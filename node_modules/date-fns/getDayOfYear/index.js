'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDayOfYear;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfYear/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../differenceInCalendarDays/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = (0, _index2.default)(dirtyDate);
  var diff = (0, _index6.default)(date, (0, _index4.default)(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}
module.exports = exports['default'];
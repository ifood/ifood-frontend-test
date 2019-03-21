'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachWeekendOfYear;

var _index = require('../eachWeekendOfInterval/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../startOfYear/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../endOfYear/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|Number} date - the given year
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
function eachWeekendOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 arguments required, but only ' + arguments.length + ' present');
  }

  var startDate = (0, _index4.default)(dirtyDate);
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid');

  var endDate = (0, _index6.default)(dirtyDate);
  return (0, _index2.default)({ start: startDate, end: endDate });
}
module.exports = exports['default'];
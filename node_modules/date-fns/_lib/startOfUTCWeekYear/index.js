'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startOfUTCWeekYear;

var _index = require('../toInteger/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../getUTCWeekYear/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../startOfUTCWeek/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index2.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index2.default)(options.firstWeekContainsDate);

  var year = (0, _index4.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0, _index6.default)(firstWeek, dirtyOptions);
  return date;
}
module.exports = exports['default'];
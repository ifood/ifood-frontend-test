'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildMatchFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildParseFn/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../_lib/buildMatchPatternFn/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../../../_lib/parseDecimal/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(ne|po|ut|sr|če|pe|su)/i,
  short: /^(ned|pon|uto|sri|čet|pet|sub)/i,
  long: /^(nedjelja|ponedjeljak|utorak|srijeda|četvrtak|petak|subota)/i
};

var parseWeekdayPatterns = {
  any: [/^ne/i, /^po/i, /^ut/i, /^sr/i, /^če/i, /^pe/i, /^su/i]
};

var matchMonthsPatterns = {
  short: /^(sij|velj|ožu|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
  long: /^(siječanj|veljača|ožujak|travanj|svibanj|lipanj|srpanj|kolovoz|rujan|listopad|studeni|prosinac)/i
};

var parseMonthPatterns = {
  any: [/^si/i, /^v/i, /^ožu/i, /^tr/i, /^svi/i, /^lip/i, /^srp/i, /^ko/i, /^r/i, /^l/i, /^s/i, /^p/i]
};

var matchTimesOfDayPatterns = {
  long: /^(ujutro|popodne)/i
};

var parseTimeOfDayPatterns = {
  any: [/^u/i, /^p/i]
};

var match = {
  ordinalNumbers: (0, _index6.default)(matchOrdinalNumbersPattern),
  ordinalNumber: _index8.default,
  weekdays: (0, _index2.default)(matchWeekdaysPatterns, 'long'),
  weekday: (0, _index4.default)(parseWeekdayPatterns, 'any'),
  months: (0, _index2.default)(matchMonthsPatterns, 'long'),
  month: (0, _index4.default)(parseMonthPatterns, 'any'),
  timesOfDay: (0, _index2.default)(matchTimesOfDayPatterns, 'long'),
  timeOfDay: (0, _index4.default)(parseTimeOfDayPatterns, 'any')
};

exports.default = match;
module.exports = exports['default'];
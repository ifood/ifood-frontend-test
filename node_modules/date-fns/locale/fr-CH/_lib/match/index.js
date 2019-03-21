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

var matchOrdinalNumbersPattern = /^(\d+)(e|er|ère|ème|ième)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(di|lu|ma|me|je|ve|sa)/i,
  short: /^(dim|lun|mar|mer|jeu|ven|sam)/i,
  long: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};

var parseWeekdayPatterns = {
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^j/i, /^v/i, /^s/i]
};

var matchMonthsPatterns = {
  short: /^(jan|fév|mar|avr|mai|juin|juil|aoû|sep|oct|nov|déc)/i,
  long: /^('janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre')/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^mai$/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
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
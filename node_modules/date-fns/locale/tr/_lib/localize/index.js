'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: in Turkish, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
  short: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
  long: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
};

var monthValues = {
  short: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  long: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
};

var timeOfDayValues = {
  uppercase: ['ÖÖ', 'ÖS'],
  lowercase: ['öö', 'ös'],
  long: ['ö.ö.', 'ö.s.']
};

var ordinalNumberSuffixes = {
  1: "'inci",
  2: "'inci",
  3: "'üncü",
  4: "'üncü",
  5: "'inci",
  6: "'ıncı",
  7: "'inci",
  8: "'inci",
  9: "'uncu",
  10: "'uncu",
  20: "'inci",
  30: "'uncu",
  50: "'inci",
  60: "'ıncı",
  70: "'inci",
  80: "'inci",
  90: "'ıncı",
  100: "'üncü"
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);

  if (number === 0) {
    return "0'ıncı";
  }

  var x = number % 10;
  var y = number % 100 - x;
  var z = number >= 100 ? 100 : null;

  return number + (ordinalNumberSuffixes[x] || ordinalNumberSuffixes[y] || ordinalNumberSuffixes[z] || '');
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function (hours) {
    return hours / 12 >= 1 ? 1 : 0;
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
};

exports.default = localize;
module.exports = exports['default'];
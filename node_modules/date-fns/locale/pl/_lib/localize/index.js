'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weekdayValues = {
  narrow: ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'],
  short: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.'],
  long: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
};

var monthValues = {
  short: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  long: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
};

var timeOfDayValues = {
  long: ['w nocy', 'rano', 'po południu', 'wieczorem']
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return String(number);
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function (hours) {
    if (hours >= 17) {
      return 3;
    } else if (hours >= 12) {
      return 2;
    } else if (hours >= 4) {
      return 1;
    } else {
      return 0;
    }
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
};

exports.default = localize;
module.exports = exports['default'];
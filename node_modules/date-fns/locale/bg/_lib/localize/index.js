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
  narrow: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  short: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  long: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
};

var monthValues = {
  short: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
  long: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
};

var timeOfDayValues = {
  long: ['сутринта', 'на обяд', 'следобед', 'вечерта']
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви';
      case 2:
        return number + '-ри';
    }
  }
  return number + '-и';
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
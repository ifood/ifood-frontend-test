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
  narrow: ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa'],
  short: ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab'],
  long: ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
};

var monthValues = {
  short: ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis'],
  long: ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
};

var timeOfDayValues = {
  uppercase: ['NU', 'NT', 'NH', 'NG'],
  lowercase: ['nu', 'nt', 'nh', 'ng'],
  long: ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return 'ika-' + number;
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function (hours) {
    if (hours > 12) {
      var modulo = hours % 12;
      if (modulo < 6) {
        return 2;
      } else {
        return 3;
      }
    } else if (hours < 12) {
      return 0;
    } else {
      return 1;
    }
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
};

exports.default = localize;
module.exports = exports['default'];
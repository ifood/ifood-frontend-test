'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'eeee d. MMMM y',
  long: 'd. MMMM y',
  medium: 'd. MMM y',
  short: 'd.M.y'
};

var timeFormats = {
  full: 'HH.mm.ss zzzz',
  long: 'HH.mm.ss z',
  medium: 'HH.mm.ss',
  short: 'HH.mm'
};

var dateTimeFormats = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
};

var formatLong = {
  date: (0, _index2.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: (0, _index2.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: (0, _index2.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

exports.default = formatLong;
module.exports = exports['default'];
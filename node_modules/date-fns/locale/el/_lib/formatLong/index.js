'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'EEEE, d MMMM y',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'd/M/yy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: '{{date}} - {{time}}',
  long: '{{date}} - {{time}}',
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
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
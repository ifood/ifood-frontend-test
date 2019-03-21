'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildFormatLongFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: "EEEE, do 'de' MMMM y",
  long: 'y-MMMM-dd',
  medium: 'y-MMM-dd',
  short: 'yyyy-MM-dd'
};

var timeFormats = {
  full: "Ho 'horo kaj' m:ss zzzz",
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};

var dateTimeFormats = {
  any: '{{date}} {{time}}'
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
    defaultWidth: 'any'
  })
};

exports.default = formatLong;
module.exports = exports['default'];
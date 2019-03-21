"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../../../_lib/buildFormatLongFn/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: 'yyyy-MM-dd',
  short: 'yy-MM-dd'
};

var timeFormats = {
  full: 'zzzz a h:mm:ss',
  long: 'z a h:mm:ss',
  medium: 'a h:mm:ss',
  short: 'a h:mm'
};

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
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
module.exports = exports["default"];
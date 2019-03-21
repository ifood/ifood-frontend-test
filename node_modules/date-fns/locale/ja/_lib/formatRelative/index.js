'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '前のeeeeのp',
  yesterday: '昨日のp',
  today: '今日のp',
  tomorrow: '明日のp',
  nextWeek: '次のeeeeのp',
  other: 'P'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];
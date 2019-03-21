'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[posljednji] dddd [u] LT',
  yesterday: '[jučer u] LT',
  today: '[danas u] LT',
  tomorrow: '[sutra u] LT',
  nextWeek: 'dddd [u] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];
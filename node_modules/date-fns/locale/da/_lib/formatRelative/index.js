'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[sidste] dddd [kl.] LT',
  yesterday: '[i går kl.] LT',
  today: '[i dag kl.] LT',
  tomorrow: '[i morgen kl.] LT',
  nextWeek: '[på] dddd [kl.] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];
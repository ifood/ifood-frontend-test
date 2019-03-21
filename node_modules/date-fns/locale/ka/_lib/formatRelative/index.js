'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[წინა] dddd LT[-ზე]',
  yesterday: '[გუშინ] LT[-ზე]',
  today: '[დღეს] LT[-ზე]',
  tomorrow: '[ხვალ] LT[-ზე]',
  nextWeek: '[შემდეგი] dddd LT[-ზე]',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];
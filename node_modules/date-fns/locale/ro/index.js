'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./_lib/formatDistance/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./_lib/formatLong/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./_lib/formatRelative/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./_lib/localize/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./_lib/match/index.js');

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary Romanian locale.
 * @language Romanian
 * @iso-639-2 ron
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 * @author Adrian Ocneanu [@aocneanu]{@link https://github.com/aocneanu}
 * @author Mihai Ocneanu [@gandesc]{@link https://github.com/gandesc}
 */
var locale = {
  formatDistance: _index2.default,
  formatLong: _index4.default,
  formatRelative: _index6.default,
  localize: _index8.default,
  match: _index10.default,
  options: {
    weekStartsOn: 1 /* Monday */
    , firstWeekContainsDate: 1
  }
};

exports.default = locale;
module.exports = exports['default'];
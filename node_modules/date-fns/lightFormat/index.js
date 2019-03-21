'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lightFormat;

var _index = require('../toDate/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../_lib/format/lightFormatters/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../_lib/getTimezoneOffsetInMilliseconds/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../isValid/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../subMilliseconds/index.js');

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |
 * |                                 | XX      | -0800, +0530, Z                   |
 * |                                 | XXX     | -08:00, +05:30, Z                 |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |
 * |                                 | xx      | -0800, +0530, +0000               |
 * |                                 | xxx     | -08:00, +05:30, +00:00            |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * var result = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '1987-02-11'
 */
function lightFormat(dirtyDate, dirtyFormatStr) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);

  var originalDate = (0, _index2.default)(dirtyDate);

  if (!(0, _index8.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0, _index6.default)(originalDate);
  var utcDate = (0, _index10.default)(originalDate, timezoneOffset);

  var result = formatStr.match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _index4.default[firstCharacter];
    if (formatter) {
      return formatter(utcDate, substring, null, {});
    }

    return substring;
  }).join('');

  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
module.exports = exports['default'];
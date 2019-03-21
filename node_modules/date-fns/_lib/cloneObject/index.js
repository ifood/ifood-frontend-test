'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneObject;

var _index = require('../assign/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneObject(dirtyObject) {
  return (0, _index2.default)({}, dirtyObject);
}
module.exports = exports['default'];
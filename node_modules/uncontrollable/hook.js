"use strict";

exports.__esModule = true;
exports.default = useUncontrolled;

var _react = require("react");

var Utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var defaultValue = result[Utils.defaultKey(fieldName)],
        propsValue = result[fieldName],
        rest = _objectWithoutPropertiesLoose(result, [Utils.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];
    var prevProps = (0, _react.useRef)({});

    var _useState = (0, _react.useState)(defaultValue),
        stateValue = _useState[0],
        setState = _useState[1];

    var isProp = Utils.isProp(props, fieldName);
    var wasProp = Utils.isProp(prevProps.current, fieldName);
    prevProps.current = props;
    /**
     * If a prop switches from controlled to Uncontrolled
     * reset its value to the defaultValue
     */

    if (!isProp && wasProp) {
      setState(defaultValue);
    }

    var propsHandler = props[handlerName];
    var handler = (0, _react.useCallback)(function (value) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (propsHandler) propsHandler.apply(void 0, [value].concat(args));
      setState(value);
    }, [setState, propsHandler]);
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = isProp ? propsValue : stateValue, _extends2[handlerName] = handler, _extends2));
  }, props);
}

module.exports = exports["default"];
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(t,e,n){__NEXT_REGISTER_PAGE("/components/Startup",function(){return t.exports=n(24),{page:t.exports.default}})},24:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);n(87),n(88);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,a(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"logo-spotifood"},r.a.createElement("span",{className:"logo-spotifood__first"},"Spoti"),r.a.createElement("span",{className:"logo-spotifood__last"},"food"))}}])&&u(n.prototype,o),i&&u(n,i),e}();n(89);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var m=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=y(e).call(this,t))||"object"!==s(r)&&"function"!=typeof r?h(o):r).handleClick=n.handleClick.bind(h(h(n))),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,r.a.Component),n=e,(o=[{key:"handleClick",value:function(t){t.preventDefault(),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=["button"];return"lg"===this.props.size&&t.push("button--size-lg"),r.a.createElement("button",{className:t.join(" "),onClick:this.handleClick},this.props.text)}}])&&p(n.prototype,o),i&&p(n,i),e}(),v=n(1);function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,o=[{key:"connect",value:function(){return new Promise(function(t){setTimeout(t,2e3)})}}],(n=null)&&d(e.prototype,n),o&&d(e,o),t}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"default",function(){return C});var C=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=g(e).call(this,t))||"object"!==O(r)&&"function"!=typeof r?S(o):r).state=v.default.getState(),n.connectClick=n.connectClick.bind(S(S(n))),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,r.a.Component),n=e,(o=[{key:"componentDidMount",value:function(){var t=this;v.default.on("change",function(e){return t.setState(v.default.getState())})}},{key:"connectClick",value:function(t){v.default.spotifyStatus="CONNECTING",w.connect().then(function(){v.default.spotifyStatus="CONNECTED"})}},{key:"render",value:function(){var t=["startup"];return t.push("CONNECTED"===this.state.spotifyStatus?"startup--hidden":"startup--show"),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:"startup__div"},r.a.createElement(l,null),r.a.createElement(m,{text:"Connect",size:"lg",onClick:this.connectClick})))}}])&&_(n.prototype,o),i&&_(n,i),e}()}},[[232,1,0,2]]]);
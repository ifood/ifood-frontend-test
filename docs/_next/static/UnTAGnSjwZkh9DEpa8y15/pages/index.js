(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{23:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var r=n(0),o=n.n(r),a=(n(86),n(1));function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,f(e).call(this,t))).state=a.default.getState(),n}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;a.default.on("change",function(e){return t.setState(a.default.getState())})}},{key:"render",value:function(){var t=["main"];return t.push("CONNECTED"===this.state.spotifyStatus?"main--show":"main--hidden"),o.a.createElement("div",{className:t.join(" ")},o.a.createElement("h1",null,"Connected"))}}])&&i(n.prototype,r),u&&i(n,u),e}()},238:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(90),{page:t.exports.default}})},24:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);n(87),n(88);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,c(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,o.a.Component),n=e,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"logo-spotifood"},o.a.createElement("span",{className:"logo-spotifood__first"},"Spoti"),o.a.createElement("span",{className:"logo-spotifood__last"},"food"))}}])&&u(n.prototype,r),a&&u(n,a),e}();n(89);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var b=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=y(e).call(this,t))||"object"!==s(o)&&"function"!=typeof o?h(r):o).handleClick=n.handleClick.bind(h(h(n))),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,o.a.Component),n=e,(r=[{key:"handleClick",value:function(t){t.preventDefault(),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=["button"];return"lg"===this.props.size&&t.push("button--size-lg"),o.a.createElement("button",{className:t.join(" "),onClick:this.handleClick},this.props.text)}}])&&p(n.prototype,r),a&&p(n,a),e}(),m=n(1);function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"connect",value:function(){return new Promise(function(t){setTimeout(t,2e3)})}}],(n=null)&&v(e.prototype,n),r&&v(e,r),t}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"default",function(){return k});var k=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=E(e).call(this,t))||"object"!==g(o)&&"function"!=typeof o?_(r):o).state=m.default.getState(),n.connectClick=n.connectClick.bind(_(_(n))),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;m.default.on("change",function(e){return t.setState(m.default.getState())})}},{key:"connectClick",value:function(t){m.default.spotifyStatus="CONNECTING",w.connect().then(function(){m.default.spotifyStatus="CONNECTED"})}},{key:"render",value:function(){var t=["startup"];return t.push("CONNECTED"===this.state.spotifyStatus?"startup--hidden":"startup--show"),o.a.createElement("div",{className:t.join(" ")},o.a.createElement("div",{className:"startup__div"},o.a.createElement(l,null),o.a.createElement(b,{text:"Connect",size:"lg",onClick:this.connectClick})))}}])&&O(n.prototype,r),a&&O(n,a),e}()},61:function(t,e,n){"use strict";var r=n(3);Object.defineProperty(e,"__esModule",{value:!0}),e.defaultHead=b,e.default=void 0;var o=r(n(22)),a=r(n(5)),u=r(n(6)),i=r(n(14)),c=r(n(15)),f=r(n(16)),l=r(n(9)),s=r(n(0)),p=r(n(31)),y=r(n(62)),d=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(0,c.default)(e).apply(this,arguments))}return(0,f.default)(e,t),(0,u.default)(e,[{key:"render",value:function(){return null}}]),e}(s.default.Component);(0,l.default)(d,"contextTypes",{headManager:p.default.object});var h="next-head";function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:t})]}var m=["name","httpEquiv","charSet","itemProp","property"],v=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var w=(0,y.default)(function(t){return t.map(function(t){return s.default.Children.toArray(t.props.children)}).reduce(function(t,e){return t.concat(e)},[]).reduce(function(t,e){return s.default.Fragment&&e.type===s.default.Fragment?t.concat(s.default.Children.toArray(e.props.children)):t.concat(e)},[]).reverse().concat(b("")).filter(Boolean).filter((e=new o.default,n=new o.default,r=new o.default,a={},function(t){if(t.key&&0===t.key.indexOf(".$")){if(e.has(t.key))return!1;e.add(t.key)}switch(t.type){case"title":case"base":if(n.has(t.type))return!1;n.add(t.type);break;case"meta":for(var u=0,i=m.length;u<i;u++){var c=m[u];if(t.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var f=t.props[c],l=a[c]||new o.default;if(l.has(f)&&-1===v.indexOf(f))return!1;l.add(f),a[c]=l}}}return!0})).reverse().map(function(t,e){var n=(t.props&&t.props.className?t.props.className+" ":"")+h,r=t.key||e;return s.default.cloneElement(t,{key:r,className:n})});var e,n,r,a},function(t){this.context&&this.context.headManager&&this.context.headManager.updateHead(t)},function(t){return t})(d);e.default=w},62:function(t,e,n){"use strict";var r=n(25),o=n(3);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,b=new y.default;function m(r){o=t((0,p.default)(b)),v.canUseDOM?e.call(r,o):n&&(o=n(o))}var v=function(t){function e(t){var n;return(0,a.default)(this,e),n=(0,u.default)(this,(0,i.default)(e).call(this,t)),e.canUseDOM||(b.add((0,l.default)((0,l.default)(n))),m((0,l.default)((0,l.default)(n)))),n}return(0,f.default)(e,t),(0,c.default)(e,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=o;return o=void 0,b.clear(),t}}]),(0,c.default)(e,[{key:"componentDidMount",value:function(){b.add(this),m(this)}},{key:"componentDidUpdate",value:function(){m(this)}},{key:"componentWillUnmount",value:function(){b.delete(this),m(this)}},{key:"render",value:function(){return d.default.createElement(r,null,this.props.children)}}]),e}(d.Component);return(0,s.default)(v,"canUseDOM","undefined"!=typeof window),(0,s.default)(v,"contextTypes",r.contextTypes),(0,s.default)(v,"displayName","SideEffect(".concat((0,h.getDisplayName)(r),")")),v}};var a=o(n(5)),u=o(n(14)),i=o(n(15)),c=o(n(6)),f=o(n(16)),l=o(n(59)),s=o(n(9)),p=o(n(63)),y=o(n(22)),d=r(n(0)),h=n(18)},63:function(t,e,n){var r=n(64),o=n(65),a=n(73);t.exports=function(t){return r(t)||o(t)||a()}},64:function(t,e,n){var r=n(45);t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},65:function(t,e,n){var r=n(66),o=n(70);t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},66:function(t,e,n){t.exports=n(67)},67:function(t,e,n){n(13),n(68),t.exports=n(2).Array.from},68:function(t,e,n){"use strict";var r=n(17),o=n(4),a=n(21),u=n(81),i=n(82),c=n(40),f=n(69),l=n(43);o(o.S+o.F*!n(83)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,s,p=a(t),y="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,b=void 0!==h,m=0,v=l(p);if(b&&(h=r(h,d>2?arguments[2]:void 0,2)),null==v||y==Array&&i(v))for(n=new y(e=c(p.length));e>m;m++)f(n,m,b?h(p[m],m):p[m]);else for(s=v.call(p),n=new y;!(o=s.next()).done;m++)f(n,m,b?u(s,h,[o.value,m],!0):o.value);return n.length=m,n}})},69:function(t,e,n){"use strict";var r=n(11),o=n(34);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},70:function(t,e,n){t.exports=n(71)},71:function(t,e,n){n(27),n(13),t.exports=n(72)},72:function(t,e,n){var r=n(42),o=n(8)("iterator"),a=n(30);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||a.hasOwnProperty(r(e))}},73:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},74:function(t,e,n){t.exports=n(61)},90:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var r=n(0),o=n.n(r),a=n(74),u=n.n(a),i=n(24),c=n(23),f=n(1);n(159);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,y(e).call(this,t))).state=f.default.getState(),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;f.default.on("change",function(e){return t.setState(f.default.getState())})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(u.a,null,o.a.createElement("title",null,"Spotifood")),o.a.createElement("div",{className:"app__bg"}),o.a.createElement(c.default,null),o.a.createElement(i.default,null))}}])&&s(n.prototype,r),a&&s(n,a),e}()}},[[238,1,0,2]]]);
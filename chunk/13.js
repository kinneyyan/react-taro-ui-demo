/*! For license information please see 13.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"117":function(e,t,r){"use strict";e.exports=r(126)},"118":function(e,t,r){"use strict";r.d(t,"s",(function(){return S})),r.d(t,"q",(function(){return E})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return A})),r.d(t,"d",(function(){return M})),r.d(t,"e",(function(){return I})),r.d(t,"i",(function(){return T})),r.d(t,"j",(function(){return R})),r.d(t,"k",(function(){return C})),r.d(t,"m",(function(){return N})),r.d(t,"p",(function(){return D})),r.d(t,"r",(function(){return L})),r.d(t,"f",(function(){return H})),r.d(t,"g",(function(){return U})),r.d(t,"l",(function(){return F})),r.d(t,"n",(function(){return K})),r.d(t,"o",(function(){return W})),r.d(t,"c",(function(){return B})),r.d(t,"h",(function(){return $}));var o=r(17),n=r.n(o),a=r(29),c=r.n(a),i=r(127),s=r.n(i),u=r(34),f=r.n(u),p=r(30),l=r.n(p),d=r(31),y=r.n(d),b=r(131),v=r.n(b),x=r(133),_=r.n(x),m=r(135),h=r.n(m),O=r(136),g=r.n(O);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return _()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=c;return"taro-scroll-view-core"===t&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof i)a.style.cssText="";else for(var f in i)updateStyle(a,f,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat(g()(c),g()(a))).join(" ")}(a,o,n):c}var w=function reactifyWebComponent(e){var t=function(t){v()(Index,t);var r=_createSuper(Index);function Index(e){var t;return l()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return y()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===f()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,a={"ref":this.ref};return n&&(a.dangerouslySetInnerHTML=n),Object(o.createElement)(e,a,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=w("taro-input-core"),P=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(j,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=w("taro-view-core"),E=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),k=w("taro-button-core"),A=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),M=P,I=w("taro-label-core"),T=w("taro-picker-core"),R=w("taro-picker-view-core"),C=w("taro-picker-view-column-core"),N=(w("taro-radio-core"),w("taro-radio-group-core"),w("taro-slider-core")),D=w("taro-switch-core"),L=(w("taro-cover-image-core"),w("taro-textarea-core")),H=(w("taro-cover-view-core"),w("taro-movable-area-core")),U=w("taro-movable-view-core"),F=w("taro-scroll-view-core"),K=w("taro-swiper-core"),W=w("taro-swiper-item-core"),B=(w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core")),$=(w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"));w("taro-web-view-core"),w("taro-navigation-bar-core"),o.Fragment,w("taro-custom-wrapper-core")},"119":function(e,t,r){"use strict";r.d(t,"a",(function(){return getPrefixCls})),r.d(t,"b",(function(){return uuid}));function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"121":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(8),n=r(124);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=Object(o.a)(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=classNames.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)t.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(n.a);var a=n.a.exports},"122":function(e,t,r){var o=r(123);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"123":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o={"exports":{}}},"126":function(e,t,r){"use strict";r(36);var o=r(17),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},u=null,f=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":u,"ref":f,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"127":function(e,t,r){var o=r(128),n=r(129),a=r(122),c=r(130);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){var o=r(132);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t,r){var o=r(34).default,n=r(134);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t,r){var o=r(137),n=r(138),a=r(122),c=r(139);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t,r){var o=r(123);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"188":function(e,t,r){},"275":function(e,t,r){"use strict";r.r(t);r(188);var o=r(117),n=r(119),a=r(118),c=r(121),i=Object(n.a)("tags");function isString(e){return"string"==typeof e}function Tags(e){var t=e.tags,r=e.color,n=void 0===r?"#fd3c42":r,s=e.backgroundColor,u=void 0===s?"rgb(255 59 48 / 8%)":s,f=e.className;return Object(o.jsx)(a.s,Object.assign({"className":Object(c.a)(i,f)},{"children":null==t?void 0:t.map((function(e){var t=isString(e)?n:e.color||n,r=isString(e)?u:e.backgroundColor||u;return Object(o.jsx)(a.s,Object.assign({"className":"tag-item","style":{"color":t,"backgroundColor":r}},{"children":isString(e)?e:e.text}))}))}))}r(17),t.default=function(){return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(Tags,{"tags":["text1","text2"]}),Object(o.jsx)(Tags,{"tags":[{"text":"text1","color":"white","backgroundColor":"blue"},{"text":"text2"}]})]})}}}]);
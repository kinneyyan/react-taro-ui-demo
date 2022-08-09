/*! For license information please see 9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"117":function(e,t,r){"use strict";e.exports=r(126)},"118":function(e,t,r){"use strict";r.d(t,"s",(function(){return P})),r.d(t,"q",(function(){return k})),r.d(t,"a",(function(){return C})),r.d(t,"b",(function(){return E})),r.d(t,"d",(function(){return A})),r.d(t,"e",(function(){return M})),r.d(t,"i",(function(){return I})),r.d(t,"j",(function(){return N})),r.d(t,"k",(function(){return T})),r.d(t,"m",(function(){return R})),r.d(t,"p",(function(){return D})),r.d(t,"r",(function(){return L})),r.d(t,"f",(function(){return H})),r.d(t,"g",(function(){return F})),r.d(t,"l",(function(){return U})),r.d(t,"n",(function(){return z})),r.d(t,"o",(function(){return W})),r.d(t,"c",(function(){return K})),r.d(t,"h",(function(){return B}));var n=r(17),o=r.n(n),c=r(29),a=r.n(c),i=r(127),s=r.n(i),u=r(34),l=r.n(u),f=r(30),p=r.n(f),d=r(31),b=r.n(d),v=r(131),y=r.n(v),O=r(133),h=r.n(O),j=r(135),m=r.n(j),g=r(136),x=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=m()(e);if(t){var o=m()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat(x()(a),x()(c))).join(" ")}(c,n,o):a}var w=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return b()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===l()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),Object(n.createElement)(e,c,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=w("taro-input-core"),S=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(_,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),P=w("taro-view-core"),k=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),C=w("taro-button-core"),E=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),A=S,M=w("taro-label-core"),I=w("taro-picker-core"),N=w("taro-picker-view-core"),T=w("taro-picker-view-column-core"),R=(w("taro-radio-core"),w("taro-radio-group-core"),w("taro-slider-core")),D=w("taro-switch-core"),L=(w("taro-cover-image-core"),w("taro-textarea-core")),H=(w("taro-cover-view-core"),w("taro-movable-area-core")),F=w("taro-movable-view-core"),U=w("taro-scroll-view-core"),z=w("taro-swiper-core"),W=w("taro-swiper-item-core"),K=(w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core")),B=(w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"));w("taro-web-view-core"),w("taro-navigation-bar-core"),n.Fragment,w("taro-custom-wrapper-core")},"119":function(e,t,r){"use strict";r.d(t,"a",(function(){return getPrefixCls})),r.d(t,"b",(function(){return uuid}));function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"121":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(8),o=r(124);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var c=Object(n.a)(o);if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)){if(o.length){var a=classNames.apply(null,o);a&&e.push(a)}}else if("object"===c)if(o.toString===Object.prototype.toString)for(var i in o)t.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(o.a);var c=o.a.exports},"122":function(e,t,r){var n=r(123);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"123":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={"exports":{}}},"126":function(e,t,r){"use strict";r(36);var n=r(17),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"127":function(e,t,r){var n=r(128),o=r(129),c=r(122),a=r(130);e.exports=function _slicedToArray(e,t){return n(e)||o(e,t)||c(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){var n=r(132);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t,r){var n=r(34).default,o=r(134);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t,r){var n=r(137),o=r(138),c=r(122),a=r(139);e.exports=function _toConsumableArray(e){return n(e)||o(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t,r){var n=r(123);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"169":function(e,t,r){},"258":function(e,t,r){"use strict";r.r(t);r(169);var n=r(15),o=r(117),c=r(17);var a=r(119),i=r(118),s=r(116),u=r(121),l=new(r(23).a.Events);function trigger(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return l.trigger.apply(l,[e].concat(r))}function on(e,t){return l.on(e,t)}function off(e,t){return l.off(e,t)}var f=function open(e){trigger("open",Object.assign(Object.assign({},e),{"isOpened":!0}))},p=function close(){trigger("close")},d=Object(a.a)("image-preview"),b=function ImagePreview(e){var t=Object(c.useState)({"isOpened":!1}),r=Object(n.a)(t,2),a=r[0],l=r[1],f=a.isOpened,p=a.imageUrls,b=void 0===p?[]:p,v=a.current,y=void 0===v?0:v,O=Object(c.useState)((function(){if(null==b?void 0:b.length)return b[y]})),h=Object(n.a)(O,2),j=h[0],m=h[1],g=Object(c.useState)(1),x=Object(n.a)(g,2),w=x[0],_=x[1],S=Object(c.useState)({"x":0,"y":0}),P=Object(n.a)(S,2),k=P[0],C=P[1],E=function useDoubleClick(e){var t=e.onDoubleClick,r=e.onSingleClick,n=e.interval,o=void 0===n?300:n,a=Object(c.useRef)(0),i=Object(c.useRef)(null);return{"catchClick":Object(c.useCallback)((function(e){var n=a.current,c=e.timeStamp;c-n<o?(clearTimeout(i.current),t(e)):i.current=setTimeout((function(){null==r||r(e)}),o),a.current=c}),[])}}({"onDoubleClick":function handleOnImageDoubleClick(){_((function(e){return 1===e?3:1})),C((function(e){return e.x?{"x":0,"y":0}:{"x":"50%","y":"50%"}}))}}).catchClick;Object(c.useEffect)((function(){l((function(t){return Object.assign(Object.assign({},t),e)}))}),[e]),Object(c.useEffect)((function(){_(1),C({"x":0,"y":0})}),[a.current]),Object(c.useEffect)((function(){if(void 0!==e.isOpened)return function(){return null};return on("open",(function openFn(e){l((function(t){return Object.assign(Object.assign({},t),e)}))})),on("close",(function closeFn(){M()})),function(){off("open"),off("close")}}),[]);var A=Object(c.useMemo)((function(){return(null==b?void 0:b.length)>1||!1}),[b]),M=Object(c.useCallback)((function(){l((function(e){return Object.assign(Object.assign({},e),{"isOpened":!1})})),Object(s.a)((function(){var t;null===(t=null==e?void 0:e.onClose)||void 0===t||t.call(e)}))}),[]),I=function handleOnClickImage(e){e.stopPropagation(),E(e)};var N=function handleOnScale(e){_(e.detail.scale)};return Object(o.jsxs)(i.s,Object.assign({"className":Object(u.a)(d,{"show":f}),"onClick":function handleOnClickMask(){M()}},{"children":[Object(o.jsxs)(i.s,Object.assign({"className":"".concat(d,"-image-container")},{"children":[Object(o.jsx)(i.n,Object.assign({"className":"swiper","current":y,"disableTouch":w>1,"onChange":function handleOnSwiperChange(e){var t=e.detail.current;l((function(e){return Object.assign(Object.assign({},e),{"current":t})})),m(b[t])}},{"children":b.map((function(e,t){return Object(o.jsx)(i.o,Object.assign({"className":"swiper-item"},{"children":Object(o.jsx)(i.f,Object.assign({"className":"movable-area","scaleArea":!0},{"children":Object(o.jsx)(i.g,Object.assign({"className":"movable-view","direction":w>1?"all":"none","x":k.x,"y":k.y,"scale":!0,"scaleValue":w,"scaleMin":1,"scaleMax":3,"onScale":N},{"children":Object(o.jsx)(i.c,{"className":"image-item","src":e,"lazyLoad":!0,"mode":"aspectFit","onClick":I})}))}))}),t)}))})),A&&Object(o.jsxs)(i.s,Object.assign({"className":"indicator"},{"children":[y+1,"/",b.length]}))]})),Object(o.jsx)(i.l,Object.assign({"className":"".concat(d,"-thumb-scroll-view"),"scrollX":!0,"scrollWithAnimation":!0,"scrollIntoView":j},{"children":A&&b.map((function(e,t){return Object(o.jsx)(i.s,Object.assign({"id":e,"onClick":function onClick(e){return e.stopPropagation()}},{"children":Object(o.jsx)(i.c,{"className":Object(u.a)("thumb-item",{"current":y===t}),"src":e,"lazyLoad":!0,"mode":"aspectFill","onClick":function onClick(e){return function handleOnClickThumb(e,t){e.stopPropagation(),l((function(e){return Object.assign(Object.assign({},e),{"current":t})}))}(e,t)}})}),t)}))}))]}))};b.open=function(e){f(e)},b.close=function(){p()};t.default=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),r=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(i.a,{"onClick":function onClick(){b.open({"imageUrls":["https://w.wallhaven.cc/full/9m/wallhaven-9myy38.png","https://w.wallhaven.cc/full/q2/wallhaven-q2xerq.jpg","https://w.wallhaven.cc/full/g7/wallhaven-g7e2r7.png","https://w.wallhaven.cc/full/3z/wallhaven-3z1r1d.png","https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"current":1})},"children":"预览（函数调用，小程序不支持）"}),Object(o.jsx)(i.a,{"onClick":function onClick(){return a(!0)},"children":"预览"}),Object(o.jsx)(b,{"isOpened":r,"imageUrls":["https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"onClose":function onClose(){return a(!1)}}),Object(o.jsx)(b,{})]})}}}]);
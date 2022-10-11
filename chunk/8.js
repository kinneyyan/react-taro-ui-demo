/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"116":function(e,t,r){"use strict";e.exports=r(145)},"118":function(e,t,r){"use strict";r.d(t,"s",(function(){return S})),r.d(t,"q",(function(){return k})),r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return M})),r.d(t,"d",(function(){return A})),r.d(t,"e",(function(){return I})),r.d(t,"i",(function(){return T})),r.d(t,"j",(function(){return R})),r.d(t,"k",(function(){return C})),r.d(t,"m",(function(){return L})),r.d(t,"p",(function(){return D})),r.d(t,"r",(function(){return N})),r.d(t,"f",(function(){return H})),r.d(t,"g",(function(){return V})),r.d(t,"l",(function(){return B})),r.d(t,"n",(function(){return F})),r.d(t,"o",(function(){return U})),r.d(t,"c",(function(){return W})),r.d(t,"h",(function(){return K}));var o=r(17),n=r.n(o),a=r(30),i=r.n(a),c=r(146),s=r.n(c),p=r(35),u=r.n(p),l=r(31),f=r.n(l),d=r(32),m=r.n(d),x=r(150),y=r.n(x),b=r(152),h=r.n(b),v=r(154),g=r.n(v),_=r(155),w=r.n(_);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=g()(e);if(t){var n=g()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return h()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var a=e.ref.current,i=n[r],c=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,i),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=i);if("scrollLeft"===r)return void(a.mpScrollLeft=i);if("scrollIntoView"===r)return void(a.mpScrollIntoView=i)}if("function"==typeof i&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),p=i;return"taro-scroll-view-core"===t&&"scroll"===s&&(p=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,p]),a.addEventListener(s,p)}return"string"==typeof i||"number"==typeof i?(a.setAttribute(r,i),void(a[r]=i)):"boolean"==typeof i?i?(a[r]=!0,a.setAttribute(r,i)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=i)}if("string"==typeof i)return void a.setAttribute(r,i);if(!i)return void a.removeAttribute(r);if(o)if("string"==typeof c)a.style.cssText="";else for(var u in c)updateStyle(a,u,"");for(var l in i)updateStyle(a,l,i[l])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),i=[];return o.forEach((function(e){a.indexOf(e)>-1?(i.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&i.push(e)})),(i=[].concat(w()(i),w()(a))).join(" ")}(a,o,n):i}var O=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return m()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,a={"ref":this.ref};return n&&(a.dangerouslySetInnerHTML=n),Object(o.createElement)(e,a,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=O("taro-input-core"),P=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(j,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=O("taro-view-core"),k=(O("taro-icon-core"),O("taro-progress-core"),O("taro-rich-text-core"),O("taro-text-core")),E=O("taro-button-core"),M=(O("taro-checkbox-core"),O("taro-checkbox-group-core"),O("taro-editor-core"),O("taro-form-core")),A=P,I=O("taro-label-core"),T=O("taro-picker-core"),R=O("taro-picker-view-core"),C=O("taro-picker-view-column-core"),L=(O("taro-radio-core"),O("taro-radio-group-core"),O("taro-slider-core")),D=O("taro-switch-core"),N=(O("taro-cover-image-core"),O("taro-textarea-core")),H=(O("taro-cover-view-core"),O("taro-movable-area-core")),V=O("taro-movable-view-core"),B=O("taro-scroll-view-core"),F=O("taro-swiper-core"),U=O("taro-swiper-item-core"),W=(O("taro-functional-page-navigator-core"),O("taro-navigator-core"),O("taro-audio-core"),O("taro-camera-core"),O("taro-image-core")),K=(O("taro-live-player-core"),O("taro-video-core"),O("taro-map-core"),O("taro-canvas-core"),O("taro-ad-core"),O("taro-official-account-core"),O("taro-open-data-core"));O("taro-web-view-core"),O("taro-navigation-bar-core"),o.Fragment,O("taro-custom-wrapper-core")},"136":function(e,t,r){var o=r(137);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"145":function(e,t,r){"use strict";r(36);var o=r(17),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},p=null,u=null;for(o in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":p,"ref":u,"props":a,"_owner":i.current}}t.jsx=q,t.jsxs=q},"146":function(e,t,r){var o=r(147),n=r(148),a=r(136),i=r(149);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},"147":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"148":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){c=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t,r){var o=r(151);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"151":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"152":function(e,t,r){var o=r(35).default,n=r(153);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"153":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"154":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"155":function(e,t,r){var o=r(156),n=r(157),a=r(136),i=r(158);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},"156":function(e,t,r){var o=r(137);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"157":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"158":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"180":function(e,t,r){e.exports={"page-index":"index-module__page-index___2J2l9","list-item":"index-module__list-item___2MLPH"}},"272":function(e,t,r){"use strict";r.r(t);var o=r(118),n=r(16),a=(r(17),r(180)),i=r.n(a),c=r(116),s=[{"name":"Affix 吸顶/底容器","path":"/pages/affix/index"},{"name":"Button 按钮","path":"/pages/button/index"},{"name":"Card 卡片","path":"/pages/card/index"},{"name":"FloatView 可拖拽的浮动View","path":"/pages/float-view/index"},{"name":"ListFooter 底部加载更多","path":"/pages/list-footer/index"},{"name":"ScrollView 加载更多的ScrollView","path":"/pages/scroll-view/index"},{"name":"PowerScrollView 下拉刷新&加载更多的ScrollView","path":"/pages/power-scroll-view/index"},{"name":"SearchBar 搜索框","path":"/pages/search-bar/index"},{"name":"SortableItem 排序列表项","path":"/pages/sortable-item/index"},{"name":"SwipeAction 滑动操作","path":"/pages/swipe-action/index"},{"name":"Tabs 顶部tab","path":"/pages/tabs/index"}],p=[{"name":"Checkbox 多选框","path":"/pages/checkbox/index"},{"name":"EditableList 可新增、删除的动态列表","path":"/pages/editable-list/index"},{"name":"Input 输入框","path":"/pages/input/index"},{"name":"ListItem 列表项","path":"/pages/list-item/index"},{"name":"Radio 单选框","path":"/pages/radio/index"},{"name":"SwitchWeekDay 周天选择器","path":"/pages/switch-week-day/index"},{"name":"Switch 开关","path":"/pages/switch/index"}],u=[{"name":"Cascader 级联选择器","path":"/pages/cascader/index"},{"name":"Dialog 弹框","path":"/pages/dialog/index"},{"name":"Modal 顶部/底部弹框","path":"/pages/modal/index"},{"name":"ModalPicker Picker","path":"/pages/modal-picker/index"},{"name":"ModalCalendar 日历弹框","path":"/pages/modal-calendar/index"},{"name":"ModalSearchPicker 带搜索、分页的底部Picker","path":"/pages/modal-search-picker/index"},{"name":"ModalYearMonth 年月选择器","path":"/pages/modal-year-month/index"},{"name":"TreeRadio 树形单选","path":"/pages/tree-radio/index"},{"name":"TreeSelect 树形多选","path":"/pages/tree-select/index"}],l=[{"name":"Badge 徽标","path":"/pages/badge/index"},{"name":"Calendar 日历","path":"/pages/calendar/index"},{"name":"EmptyView 空内容","path":"/pages/empty-view/index"},{"name":"ExpandableCard 可展开/折叠的卡片","path":"/pages/expandable-card/index"},{"name":"ExpandableList 可展开/折叠的列表","path":"/pages/expandable-list/index"},{"name":"ImagePreview 图片预览","path":"/pages/image-preview/index"},{"name":"Table 表格","path":"/pages/table/index"},{"name":"NestedTable 合并单元格的表格","path":"/pages/nested-table/index"},{"name":"Steps 步骤条","path":"/pages/steps/index"},{"name":"Tags 标签","path":"/pages/tags/index"},{"name":"Timeline 时间轴","path":"/pages/timeline/index"}],f=[{"name":"DialogAddProduct 添加商品dialog","path":"/pages/bc/dialog-add-product/index"}];t.default=function(){var e=function renderCompList(e){return e.map((function(e,t){return Object(c.jsx)(o.s,{"className":i.a["list-item"],"onClick":function onClick(){Object(n.e)({"url":e.path})},"children":e.name},t)}))};return Object(c.jsxs)(o.s,{"className":i.a["page-index"],"children":[Object(c.jsx)(o.s,{"className":"title","children":"@bud-fe/react-taro-ui"}),Object(c.jsx)(o.s,{"className":"desc","children":"百威前端 React Taro 组件库"}),Object(c.jsx)(o.s,{"className":"group-title","children":"基础组件"}),e(s),Object(c.jsx)(o.s,{"className":"group-title","children":"表单组件"}),e(p),Object(c.jsx)(o.s,{"className":"group-title","children":"反馈组件"}),e(u),Object(c.jsx)(o.s,{"className":"group-title","children":"展示组件"}),e(l),Object(c.jsx)(o.s,{"className":"group-title","children":"业务组件"}),e(f)]})}}}]);
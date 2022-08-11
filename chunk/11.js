/*! For license information please see 11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var r=n(246),i=n(262),o=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){o&&e(o),Object(r.a)().then((function(t){e(o=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(i.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(i,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r.throw(e))}catch(e){o(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(8),i=n(122);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=Object(r.a)(i);if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var c=classNames.apply(null,i);c&&e.push(c)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var a in i)t.call(i,a)&&i[a]&&e.push(a);else e.push(i.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(i.a);var o=i.a.exports},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"exports":{}}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(8),i=n(127),o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,l="object"==Object(r.a)(i.a)&&i.a&&i.a.Object===Object&&i.a,f="object"==("undefined"==typeof self?"undefined":Object(r.a)(self))&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),b=Object.prototype.toString,j=Math.max,O=Math.min,p=function now(){return d.Date.now()};function isObject(e){var t=Object(r.a)(e);return!!e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"==Object(r.a)(e)||function isObjectLike(e){return!!e&&"object"==Object(r.a)(e)}(e)&&"[object Symbol]"==b.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NaN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):c.test(e)?NaN:+e}var m=function debounce(e,t,n){var r,i,o,c,a,s,u=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=r,o=i;return r=i=void 0,u=t,c=e.apply(o,n)}function leadingEdge(e){return u=e,a=setTimeout(timerExpired,t),l?invokeFunc(e):c}function shouldInvoke(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=o}function timerExpired(){var e=p();if(shouldInvoke(e))return trailingEdge(e);a=setTimeout(timerExpired,function remainingWait(e){var n=t-(e-s);return f?O(n,o-(e-u)):n}(e))}function trailingEdge(e){return a=void 0,d&&r?invokeFunc(e):(r=i=void 0,c)}function debounced(){var e=p(),n=shouldInvoke(e);if(r=arguments,i=this,s=e,n){if(void 0===a)return leadingEdge(s);if(f)return a=setTimeout(timerExpired,t),invokeFunc(s)}return void 0===a&&(a=setTimeout(timerExpired,t)),c}return t=toNumber(t)||0,isObject(n)&&(l=!!n.leading,o=(f="maxWait"in n)?j(toNumber(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==a&&clearTimeout(a),u=0,r=s=i=a=void 0},debounced.flush=function flush(){return void 0===a?c:trailingEdge(p())},debounced}},"127":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}}).call(this,n(34))},"136":function(e,t,n){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,i=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return _objectWithoutProperties}))},"137":function(e,t,n){"use strict";n.d(t,"a",(function(){return ListFooter}));var r=n(117),i=n(118),o=n(119),c=n(17),a=Object(i.a)("list-footer");function ListFooter(e){var t=e.loading,n=void 0!==t&&t,i=e.isFinished,s=void 0!==i&&i,u=e.error,l=void 0!==u&&u,f=e.onErrorItemClick,d=Object(c.useMemo)((function(){return Object(r.jsx)(o.s,Object.assign({"className":a},{"children":"努力加载中……"}))}),[]),b=Object(c.useMemo)((function(){return Object(r.jsx)(o.s,Object.assign({"className":a},{"children":"没有更多了"}))}),[]),j=Object(c.useMemo)((function(){return Object(r.jsx)(o.s,Object.assign({"className":a,"onClick":f},{"children":"加载失败，点击重试"}))}),[f]);return n?d:l?j:s?b:null}},"138":function(e,t,n){},"139":function(e,t,n){"use strict";n.d(t,"a",(function(){return EmptyView}));var r=n(117),i=n(118),o=n(119),c=Object(i.a)("empty-view");function EmptyView(){return Object(r.jsxs)(o.s,Object.assign({"className":c},{"children":[Object(r.jsx)(o.c,{"src":"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/isales/img_empty.svg","className":"icon","mode":"aspectFit"}),Object(r.jsx)(o.q,Object.assign({"className":"text"},{"children":"这里还没有内容"}))]}))}},"160":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(4),i=n(12),o=n(15),c=n(21),a=n.n(c),s=n(120),u=n(126),l=n(17),f=n.n(l);var d=n(117),b=n(118),j=n(119),O=n(121),p=n(139),m=n(137),g=Object(b.a)("scroll-view"),h=f.a.memo((function(e){var t=e.className,n=e.renderListItem,r=e.customEmptyView,i=e.defaultView,o=e.dataList,c=e._loadData,a=e.reloadWithError,s=e.loading,u=e.isFinished,b=e.error,h=e.header,v=e.footer,y=e.scrollViewClass,x=void 0===y?"":y,w=e.scrollViewProps,N=Object(l.useMemo)((function(){return r||Object(d.jsx)(p.a,{})}),[r]),P=Object(O.a)(g,t);return Object(d.jsxs)(j.s,Object.assign({"className":P},{"children":[h&&Object(d.jsx)(j.s,Object.assign({"className":"custom-header"},{"children":h})),Object(d.jsxs)(j.l,Object.assign({"className":Object(O.a)("custom-scroll-view",x),"scrollY":!0,"onScrollToLower":function onScrollToLower(){return c({})}},w,{"children":[(o||[]).map((function(e,t){return Object(d.jsx)(f.a.Fragment,{"children":n(e,t)},t)})),o.length<=0&&i,o.length<=0&&u&&N,Object(d.jsx)(m.a,{"loading":s,"isFinished":o.length>0&&u,"error":b,"onErrorItemClick":a})]})),v&&Object(d.jsx)(j.s,Object.assign({"className":"custom-footer"},{"children":v}))]}))})),v=(n(138),h);v.useListHook=function useListHook(e){var t=this,n=e.loadData,c=e.queryProps,f=e.autoLoad,d=void 0!==f&&f,b=e.pageNoProps,j=void 0===b?"pageNo":b,O=e.pageSizeProps,p=void 0===O?"pageSize":O,m=e.successGroups,g=void 0===m?[200,2e5]:m,h=e.disablePaging,v=void 0!==h&&h,y=Object(l.useState)(!1),x=Object(o.a)(y,2),w=x[0],N=x[1],P=Object(l.useState)(!1),E=Object(o.a)(P,2),S=E[0],_=E[1],k=Object(l.useState)(!1),L=Object(o.a)(k,2),D=L[0],F=L[1],I=Object(l.useState)([]),W=Object(o.a)(I,2),T=W[0],C=W[1],M=Object(l.useState)(c||{}),V=Object(o.a)(M,2),$=V[0],A=V[1],q=Object(l.useState)(!1),z=Object(o.a)(q,2),H=z[0],R=z[1],J=Object(l.useMemo)((function(){return Object(u.a)((function(e){return Object(s.a)(t,void 0,void 0,a.a.mark((function _callee(){var t,o,c;return a.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(!w){a.next=2;break}return a.abrupt("return");case 2:return F(!1),_(!0),t=Object.assign(Object.assign({},$),e),a.next=7,n(t).catch((function(){return null}));case 7:o=a.sent,_(!1),o&&g.includes(o.code)?(T.length<=0?Array.isArray(o.data)&&C(o.data):(c=[].concat(Object(i.a)(T),Object(i.a)(o.data)),C(c)),A((function(e){return Object.assign(Object.assign({},e),Object(r.a)({},j,e[j]+1))})),(v||!o.data||o.data.length<=0||o.data.length<t[p])&&N(!0)):F(!0);case 10:case"end":return a.stop()}}),_callee)})))}),500)}),[w,T,$]);return Object(l.useEffect)((function(){H&&!w&&T.length<=0&&(R(!1),J($))}),[H,T,w,$]),Object(l.useEffect)((function(){d&&J($)}),[]),{"dataList":T,"_loadData":J,"reLoadDataWithProps":function reLoadDataWithProps(e){N(!1),C([]),A(e),R(!0)},"reloadWithError":function reloadWithError(){J({})},"loading":S,"isFinished":w,"error":D,"setDisablePaging":function setDisablePaging(){v=!0}}}},"255":function(e,t,n){"use strict";n.r(t);var r=n(18),i=n(29),o=(n(138),n(160)),c=n(136),a=n(15),s=n(21),u=n.n(s),l=n(119),f=n(17),d=n(117),b=["reLoadDataWithProps"];t.default=function(){var e=Object(f.useState)({"pageNo":1,"pageSize":10}),t=Object(a.a)(e,2),n=t[0],s=(t[1],o.a.useListHook({"loadData":function loadData(e){return _loadData.apply(this,arguments)},"queryProps":n})),j=s.reLoadDataWithProps,O=Object(c.a)(s,b);function _loadData(){return(_loadData=Object(i.a)(u.a.mark((function _callee(e){return u.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loadData ---\x3e ",e),setTimeout((function(){return null}),2e3),t.abrupt("return",{"code":200,"data":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});case 3:case"end":return t.stop()}}),_callee)})))).apply(this,arguments)}return Object(f.useEffect)((function(){j(n)}),[n]),Object(d.jsx)(d.Fragment,{"children":Object(d.jsx)(o.a,Object(r.a)(Object(r.a)({},O),{},{"renderListItem":function renderListItem(e,t){return Object(d.jsx)(l.s,{"style":{"padding":"20px","borderTop":"1px solid #333"},"children":"".concat(e,"-").concat(t)})},"header":Object(d.jsx)(l.s,{"children":"我是头部"}),"footer":Object(d.jsx)(l.s,{"children":"我是尾部"})}))})}}}]);
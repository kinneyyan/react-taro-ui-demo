/*! For license information please see 11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var r=n(269),o=n(290),c=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){c&&e(c),Object(r.a)().then((function(t){e(c=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(o.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(o,c){function fulfilled(e){try{step(r.next(e))}catch(e){c(e)}}function rejected(e){try{step(r.throw(e))}catch(e){c(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(7),o=n(121);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var c=Object(r.a)(o);if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)){if(o.length){var a=classNames.apply(null,o);a&&e.push(a)}}else if("object"===c)if(o.toString===Object.prototype.toString)for(var i in o)t.call(o,i)&&o[i]&&e.push(i);else e.push(o.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(o.a);var c=o.a.exports},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"exports":{}}},"127":function(e,t,n){"use strict";n.d(t,"a",(function(){return useDebounceFn}));var r=n(17);function useLatest(e){var t=Object(r.useRef)(e);return t.current=e,t}var o=function useUnmount(e){var t=useLatest(e);Object(r.useEffect)((function(){return function(){t.current()}}),[])};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(130);function root_typeof(e){return(root_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a="object"===("undefined"==typeof globalThis?"undefined":root_typeof(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,i="object"===("undefined"==typeof self?"undefined":root_typeof(self))&&null!==self&&self.Object===Object&&self,s=a||c.a||i||Function("return this")();function debounce(e,t,n){var r,o,c,a,i,u,l=0,f=!1,b=!1,d=!0,j=!t&&0!==t&&"function"==typeof s.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=r,c=o;return r=o=void 0,l=t,a=e.apply(c,n)}function startTimer(e,t){return j?(s.cancelAnimationFrame(i),s.requestAnimationFrame(e)):setTimeout(e,t)}function leadingEdge(e){return l=e,i=startTimer(timerExpired,t),f?invokeFunc(e):a}function shouldInvoke(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-l>=c}function timerExpired(){var e=Date.now();if(shouldInvoke(e))return trailingEdge(e);i=startTimer(timerExpired,function remainingWait(e){var n=e-l,r=t-(e-u);return b?Math.min(r,c-n):r}(e))}function trailingEdge(e){return i=void 0,d&&r?invokeFunc(e):(r=o=void 0,a)}function debounced(){for(var e=Date.now(),n=shouldInvoke(e),c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];if(r=s,o=this,u=e,n){if(void 0===i)return leadingEdge(u);if(b)return i=startTimer(timerExpired,t),invokeFunc(u)}return void 0===i&&(i=startTimer(timerExpired,t)),a}return t=+t||0,function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(n)&&(f=!!n.leading,c=(b="maxWait"in n)?Math.max(+n.maxWait||0,t):c,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==i&&function cancelTimer(e){if(j)return s.cancelAnimationFrame(e);clearTimeout(e)}(i),l=0,r=u=o=i=void 0},debounced.flush=function flush(){return void 0===i?a:trailingEdge(Date.now())},debounced.pending=function pending(){return void 0!==i},debounced}function useDebounceFn(e,t){var n;var c=useLatest(e),a=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,i=Object(r.useMemo)((function(){return debounce((function(){return c.current.apply(c,arguments)}),a,t)}),[]);return o((function(){i.cancel()})),{"run":i,"cancel":i.cancel,"flush":i.flush}}},"130":function(e,t,n){"use strict";(function(e){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}));var r="object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.Object===Object&&e}).call(this,n(34))},"134":function(e,t,n){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return _objectWithoutProperties}))},"138":function(e,t,n){"use strict";n.d(t,"a",(function(){return EmptyView}));var r=n(116),o=n(118),c=n(117),a=n(120),i=Object(o.a)("empty-view");function EmptyView(e){var t=e.imageUrl,n=void 0===t?"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/isales/img_empty.svg":t,o=e.imageClass,s=e.text,u=void 0===s?"这里还没有内容":s;return Object(r.jsxs)(c.s,Object.assign({"className":i},{"children":[Object(r.jsx)(c.c,{"src":n,"className":Object(a.a)("icon",o),"mode":"aspectFit"}),"string"==typeof u?Object(r.jsx)(c.q,Object.assign({"className":"text"},{"children":u})):u]}))}},"140":function(e,t,n){"use strict";n.d(t,"a",(function(){return ListFooter}));var r=n(116),o=n(118),c=n(117),a=n(17),i=Object(o.a)("list-footer");function ListFooter(e){var t=e.loading,n=void 0!==t&&t,o=e.isFinished,s=void 0!==o&&o,u=e.error,l=void 0!==u&&u,f=e.onErrorItemClick,b=Object(a.useMemo)((function(){return Object(r.jsx)(c.s,Object.assign({"className":i},{"children":"努力加载中……"}))}),[]),d=Object(a.useMemo)((function(){return Object(r.jsx)(c.s,Object.assign({"className":i},{"children":"没有更多了"}))}),[]),j=Object(a.useMemo)((function(){return Object(r.jsx)(c.s,Object.assign({"className":i,"onClick":f},{"children":"加载失败，点击重试"}))}),[f]);return n?b:l?j:s?d:null}},"141":function(e,t,n){},"161":function(e,t,n){},"165":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(21),o=n(4),c=n(12),a=n(15),i=n(119),s=n(17),u=n.n(s),l=n(127);var f=n(116),b=n(118),d=n(117),j=n(120),p=n(138),m=n(140),O=Object(b.a)("scroll-view"),y=u.a.memo((function(e){var t=e.className,n=e.renderListItem,r=e.customEmptyView,o=e.defaultView,c=e.dataList,a=e._loadData,i=e.reloadWithError,l=e.loading,b=e.isFinished,y=e.error,v=e.header,g=e.footer,h=e.scrollViewClass,x=void 0===h?"":h,w=e.scrollViewProps,S=Object(s.useMemo)((function(){return r||Object(f.jsx)(p.a,{})}),[r]),_=Object(j.a)(O,t);return Object(f.jsxs)(d.s,Object.assign({"className":_},{"children":[v&&Object(f.jsx)(d.s,Object.assign({"className":"custom-header"},{"children":v})),Object(f.jsxs)(d.l,Object.assign({"className":Object(j.a)("custom-scroll-view",x),"scrollY":!0,"onScrollToLower":function onScrollToLower(){return a({})}},w,{"children":[(c||[]).map((function(e,t){return Object(f.jsx)(u.a.Fragment,{"children":n(e,t)},t)})),(c||[]).length<=0&&o,(c||[]).length<=0&&b&&S,Object(f.jsx)(m.a,{"loading":l,"isFinished":c.length>0&&b,"error":y,"onErrorItemClick":i})]})),g&&Object(f.jsx)(d.s,Object.assign({"className":"custom-footer"},{"children":g}))]}))})),v=(n(141),y);v.useListHook=function useListHook(e){var t=this,n=e.loadData,u=e.queryProps,f=e.autoLoad,b=void 0!==f&&f,d=e.pageNoProps,j=void 0===d?"pageNo":d,p=e.pageSizeProps,m=void 0===p?"pageSize":p,O=e.successGroups,y=void 0===O?[200,2e5]:O,v=e.disablePaging,g=void 0!==v&&v,h=Object(s.useState)(!1),x=Object(a.a)(h,2),w=x[0],S=x[1],_=Object(s.useState)(!1),N=Object(a.a)(_,2),E=N[0],P=N[1],k=Object(s.useState)(!1),L=Object(a.a)(k,2),D=L[0],F=L[1],T=Object(s.useState)([]),C=Object(a.a)(T,2),W=C[0],I=C[1],A=Object(s.useState)(u||{}),M=Object(a.a)(A,2),q=M[0],V=M[1],R=Object(s.useState)(!1),z=Object(a.a)(R,2),H=z[0],J=z[1],Q=Object(l.a)((function(e){return Object(i.a)(t,void 0,void 0,Object(r.a)().mark((function _callee(){var t,a,i;return Object(r.a)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(!w){r.next=2;break}return r.abrupt("return");case 2:return F(!1),P(!0),t=Object.assign(Object.assign({},q),e),r.next=7,n(t).catch((function(){return null}));case 7:a=r.sent,P(!1),a&&y.includes(a.code)?(W.length<=0?Array.isArray(a.data)&&I(a.data):(i=[].concat(Object(c.a)(W),Object(c.a)(a.data)),I(i)),V((function(e){return Object.assign(Object.assign({},e),Object(o.a)({},j,e[j]+1))})),(g||!a.data||a.data.length<=0||a.data.length<t[m])&&S(!0)):F(!0);case 10:case"end":return r.stop()}}),_callee)})))}),{"wait":500}).run;return Object(s.useEffect)((function(){H&&!w&&W.length<=0&&(J(!1),Q(q))}),[H,W,w,q]),Object(s.useEffect)((function(){b&&Q(q)}),[]),{"dataList":W,"_loadData":Q,"reLoadDataWithProps":function reLoadDataWithProps(e){S(!1),I([]),V(e),J(!0)},"reloadWithError":function reloadWithError(){Q({})},"loading":E,"isFinished":w,"error":D,"setDisablePaging":function setDisablePaging(){g=!0}}}},"207":function(e,t,n){"use strict";n.d(t,"a",(function(){return Tabs}));var r=n(119),o=n(116),c=n(118),a=n(117),i=n(120),s=Object(c.a)("tabs");function Tabs(e){var t=e.tabs,n=e.current,c=e.onChange,u=e.className,l=Object(r.b)(e,["tabs","current","onChange","className"]);return Object(o.jsx)(a.s,Object.assign({"className":Object(i.a)(s,u)},l,{"children":t.map((function(e){return Object(o.jsx)(a.s,Object.assign({"className":"item","onClick":function onClick(){return c&&c(e.value)}},{"children":Object(o.jsxs)(a.s,Object.assign({"className":"relative"},{"children":[Object(o.jsx)(a.q,Object.assign({"className":Object(i.a)("name",{"selected":n===e.value})},{"children":e.label})),n===e.value&&Object(o.jsx)(a.s,{"className":"select-line"})]}))}),e.value)}))}))}},"280":function(e,t,n){"use strict";n.r(t);var r=n(21),o=n(18),c=(n(161),n(207)),a=n(29),i=(n(141),n(165)),s=n(134),u=n(15),l=n(117),f=n(17),b=n(116),d=["reLoadDataWithProps"];t.default=function(){var e=Object(f.useState)({"pageNo":1,"pageSize":10}),t=Object(u.a)(e,2),n=t[0],j=(t[1],i.a.useListHook({"loadData":function loadData(e){return _loadData.apply(this,arguments)},"queryProps":n})),p=j.reLoadDataWithProps,m=Object(s.a)(j,d);function _loadData(){return(_loadData=Object(a.a)(Object(r.a)().mark((function _callee(e){return Object(r.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loadData ---\x3e ",e),setTimeout((function(){return null}),2e3),t.abrupt("return",{"code":200,"data":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});case 3:case"end":return t.stop()}}),_callee)})))).apply(this,arguments)}return Object(f.useEffect)((function(){p(n)}),[n]),Object(b.jsx)(b.Fragment,{"children":Object(b.jsx)(i.a,Object(o.a)(Object(o.a)({},m),{},{"renderListItem":function renderListItem(e,t){return Object(b.jsx)(l.s,{"style":{"padding":"20px","borderTop":"1px solid #333"},"children":"".concat(e,"-").concat(t)})},"header":Object(b.jsx)(c.a,{"current":1,"tabs":[{"label":"aaa","value":1},{"label":"bbb","value":2},{"label":"ccc","value":3}]}),"footer":Object(b.jsx)(l.s,{"children":"我是尾部"})}))})}}}]);
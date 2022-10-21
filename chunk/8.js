/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return getPrefixCls})),n.d(t,"c",(function(){return getSystemInfo})),n.d(t,"d",(function(){return isString})),n.d(t,"e",(function(){return selectorQueryClientRect}));var c=n(269),o=n(290),r=null,i=500;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,t){r&&e(r),Object(c.a)().then((function(t){e(r=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(o.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(e);o<c.length;o++)t.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(e,c[o])&&(n[c[o]]=e[c[o]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(o,r){function fulfilled(e){try{step(c.next(e))}catch(e){r(e)}}function rejected(e){try{step(c.throw(e))}catch(e){r(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),o=n(116),r=n(120),i=n(17),a=n.n(i),s=n(123);function Iconfont(e){var t=e.type,n=e.onClick,i=e.className,a=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(s.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(r.a)(t,i),"customStyle":Object.assign({},a,{"fontSize":"16px"}),"onClick":n},l))}var l=a.a.memo(Iconfont)},"125":function(e,t,n){"use strict";function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)e[c]=n[c]}return e}n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return uuid})),n.d(t,"c",(function(){return o})),function init(e,t){function set(n,c,o){if("undefined"!=typeof document){"number"==typeof(o=assign({},t,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var i in o)o[i]&&(r+="; "+i,!0!==o[i]&&(r+="="+o[i].split(";")[0]));return document.cookie=n+"="+e.write(c,n)+r}}return Object.create({"set":set,"get":function get(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],c={},o=0;o<n.length;o++){var r=n[o].split("="),i=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(c[a]=e.read(i,a),t===a)break}catch(e){}}return t?c[t]:c}},"remove":function remove(e,t){set(e,"",assign({},t,{"expires":-1}))},"withAttributes":function withAttributes(e){return init(this.converter,assign({},this.attributes,e))},"withConverter":function withConverter(e){return init(assign({},this.converter,e),this.attributes)}},{"attributes":{"value":Object.freeze(t)},"converter":{"value":Object.freeze(e)}})}({"read":function read(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},"write":function write(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{"path":"/"});var c={"convertToDate":function convertToDate(e){var t;if(isNaN(new Date(e).getTime()))throw new Error("".concat(e," 不是一个有效的时间"));return e instanceof Date||(t=new Date(e)),t},"formatDate":function formatDate(e,t){var n=(t||{}).format,o=(t||{}).type,r=void 0===o?"YMDHMS":o;if(!(null==n?void 0:n.trim()))switch(r){case"YMDHMS":n="yyyy-MM-dd hh:mm:ss";break;case"YMD":n="yyyy-MM-dd";break;case"YM":n="yyyy-MM";break;case"HM":n="hh:mm";break;case"HMS":n="hh:mm:ss";break;case"年月日":n="yyyy年MM月dd日";break;default:n="yyyy-MM-dd hh:mm:ss"}var i=c.convertToDate(e),a={"y+":i.getFullYear(),"Y+":i.getFullYear(),"M+":i.getMonth()+1,"d+":i.getDate(),"D+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds()};for(var s in a)new RegExp("(".concat(s,")")).test(n)&&(n=n.replace(RegExp.$1,1===RegExp.$1.length?a[s]:"0".concat(a[s]).substr(-RegExp.$1.length)));return n}};"undefined"!=typeof window&&n.e(100).then(n.bind(null,131)).then((function(e){}));var o={"isNull":function isNull(e){return null==e||""===e||"{}"===e||Object.is(e,NaN)||Array.isArray(e)&&e.filter((function(e){return e})).length<=0},"isMobile":function isMobile(e){return/^1[3-9]\d{9}$/.test(e)},"isNumber":function isNumber(e){return/^[0-9]+.?[0-9]*$/.test(e)}};function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&+e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var c=n(119),o=n(116),r=n(117),i=n(118),a=n(120),s=Object(r.b)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,l=e.children,u=e.className,f=e.plain,b=e.disabled,d=e.size,j=void 0===d?"default":d,m=e.onClick,p=Object(c.b)(e,["type","children","className","plain","disabled","size","onClick"]),O=Object(a.a)(s,u,n,"size-".concat(j),{"plain":f,"disabled":b});return Object(o.jsx)(i.a,Object.assign({"className":O,"type":n,"onClick":b?void 0:m,"disabled":b,"size":j},p,{"children":Object(r.d)(l)?Object(o.jsx)(i.q,Object.assign({"className":"".concat(s,"__text")},{"children":l})):l}))}},"127":function(e,t,n){"use strict";n.d(t,"a",(function(){return Affix}));var c=n(4),o=n(119),r=n(116),i=n(117),a=n(118),s=n(120),l=n(126),u=Object(i.b)("affix"),f={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},b={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(e){var t,n=e.children,i=e.layout,d=void 0===i?"center":i,j=e.postion,m=e.position,p=e.mode,O=e.cancelText,g=void 0===O?"取消":O,h=e.confirmText,v=void 0===h?"确定":h,y=e.confirmDisable,x=void 0!==y&&y,C=e.cancelDisable,w=void 0!==C&&C,N=e.safeAreaInsetBottom,S=e.className,k=e.onCancel,D=e.onConfirm,E=Object(o.b)(e,["children","layout","postion","position","mode","cancelText","confirmText","confirmDisable","cancelDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),T=m||j||"bottom",_=null!=N?N:"bottom"===T,M=Object(s.a)(u,b[T],(t={},Object(c.a)(t,f[d],!p),Object(c.a)(t,"safe-area-inset-bottom",_),Object(c.a)(t,"same-width",!!p),t),S);return Object(r.jsxs)(r.Fragment,{"children":["bottom"===T&&Object(r.jsx)(a.s,{"className":Object(s.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":_})}),Object(r.jsx)(a.s,Object.assign({"className":M},E,{"children":p?"singleBtn"===p?Object(r.jsx)(l.a,Object.assign({"type":"primary","disabled":x,"onClick":D},{"children":v})):Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(l.a,Object.assign({"type":"default","disabled":w,"onClick":k,"plain":!0},{"children":g})),Object(r.jsx)(l.a,Object.assign({"type":"primary","disabled":x,"onClick":D},{"children":v}))]}):n}))]})}},"128":function(e,t,n){"use strict";n.d(t,"a",(function(){return useDebounceFn}));var c=n(17);function useLatest(e){var t=Object(c.useRef)(e);return t.current=e,t}var o=function useUnmount(e){var t=useLatest(e);Object(c.useEffect)((function(){return function(){t.current()}}),[])};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=n(130);function root_typeof(e){return(root_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i="object"===("undefined"==typeof globalThis?"undefined":root_typeof(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,a="object"===("undefined"==typeof self?"undefined":root_typeof(self))&&null!==self&&self.Object===Object&&self,s=i||r.a||a||Function("return this")();function debounce(e,t,n){var c,o,r,i,a,l,u=0,f=!1,b=!1,d=!0,j=!t&&0!==t&&"function"==typeof s.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=c,r=o;return c=o=void 0,u=t,i=e.apply(r,n)}function startTimer(e,t){return j?(s.cancelAnimationFrame(a),s.requestAnimationFrame(e)):setTimeout(e,t)}function leadingEdge(e){return u=e,a=startTimer(timerExpired,t),f?invokeFunc(e):i}function shouldInvoke(e){var n=e-l;return void 0===l||n>=t||n<0||b&&e-u>=r}function timerExpired(){var e=Date.now();if(shouldInvoke(e))return trailingEdge(e);a=startTimer(timerExpired,function remainingWait(e){var n=e-u,c=t-(e-l);return b?Math.min(c,r-n):c}(e))}function trailingEdge(e){return a=void 0,d&&c?invokeFunc(e):(c=o=void 0,i)}function debounced(){for(var e=Date.now(),n=shouldInvoke(e),r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];if(c=s,o=this,l=e,n){if(void 0===a)return leadingEdge(l);if(b)return a=startTimer(timerExpired,t),invokeFunc(l)}return void 0===a&&(a=startTimer(timerExpired,t)),i}return t=+t||0,function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(n)&&(f=!!n.leading,r=(b="maxWait"in n)?Math.max(+n.maxWait||0,t):r,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==a&&function cancelTimer(e){if(j)return s.cancelAnimationFrame(e);clearTimeout(e)}(a),u=0,c=l=o=a=void 0},debounced.flush=function flush(){return void 0===a?i:trailingEdge(Date.now())},debounced.pending=function pending(){return void 0!==a},debounced}function useDebounceFn(e,t){var n;var r=useLatest(e),i=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,a=Object(c.useMemo)((function(){return debounce((function(){return r.current.apply(r,arguments)}),i,t)}),[]);return o((function(){a.cancel()})),{"run":a,"cancel":a.cancel,"flush":a.flush}}},"130":function(e,t,n){"use strict";(function(e){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var c="object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.Object===Object&&e}).call(this,n(34))},"133":function(e,t,n){"use strict";n.d(t,"a",(function(){return Modal}));var c=n(119),o=n(116),r=n(117),i=n(118),a=n(120),s=n(123),l=n(127),u=Object(r.b)("modal"),f={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(e){var t=e.isOpened,n=void 0!==t&&t,b=e.title,d=e.titleSplit,j=void 0!==d&&d,m=e.postion,p=e.position,O=e.children,g=e.actionConfig,h=e.onClose,v=e.slotRight,y=e.className,x=Object(c.b)(e,["isOpened","title","titleSplit","postion","position","children","actionConfig","onClose","slotRight","className"]),C=p||m||"bottom",w=Object(a.a)(u,f[C],y);return Object(o.jsxs)(s.b,Object.assign({"className":w,"isOpened":n,"onClose":h},x,{"children":[Object(r.d)(b)?Object(o.jsxs)(i.s,Object.assign({"className":Object(a.a)("header",{"header-split":j})},{"children":[Object(o.jsx)(i.q,Object.assign({"className":"title"},{"children":b})),Object(o.jsx)(i.q,Object.assign({"className":"slot-right"},{"children":v}))]})):b,n&&Object(o.jsx)(i.s,Object.assign({"className":Object(a.a)({"content-no-title":!b})},{"children":O})),g&&Object(o.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===C},g))]}))}},"139":function(e,t,n){"use strict";n.d(t,"a",(function(){return EmptyView}));var c=n(116),o=n(117),r=n(118),i=n(120),a=Object(o.b)("empty-view");function EmptyView(e){var t=e.imageUrl,n=void 0===t?"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/isales/img_empty.svg":t,o=e.imageClass,s=e.text,l=void 0===s?"这里还没有内容":s;return Object(c.jsxs)(r.s,Object.assign({"className":a},{"children":[Object(c.jsx)(r.c,{"src":n,"className":Object(i.a)("icon",o),"mode":"aspectFit"}),"string"==typeof l?Object(c.jsx)(r.q,Object.assign({"className":"text"},{"children":l})):l]}))}},"141":function(e,t,n){"use strict";n.d(t,"a",(function(){return ListFooter}));var c=n(116),o=n(117),r=n(118),i=n(17),a=Object(o.b)("list-footer");function ListFooter(e){var t=e.loading,n=void 0!==t&&t,o=e.isFinished,s=void 0!==o&&o,l=e.error,u=void 0!==l&&l,f=e.onErrorItemClick,b=Object(i.useMemo)((function(){return Object(c.jsx)(r.s,Object.assign({"className":a},{"children":"努力加载中……"}))}),[]),d=Object(i.useMemo)((function(){return Object(c.jsx)(r.s,Object.assign({"className":a},{"children":"没有更多了"}))}),[]),j=Object(i.useMemo)((function(){return Object(c.jsx)(r.s,Object.assign({"className":a,"onClick":f},{"children":"加载失败，点击重试"}))}),[f]);return n?b:u?j:s?d:null}},"142":function(e,t,n){},"166":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(21),o=n(4),r=n(12),i=n(15),a=n(119),s=n(17),l=n.n(s),u=n(128);var f=n(116),b=n(117),d=n(118),j=n(120),m=n(139),p=n(141),O=Object(b.b)("scroll-view"),g=l.a.memo((function(e){var t=e.className,n=e.renderListItem,c=e.customEmptyView,o=e.defaultView,r=e.dataList,i=e._loadData,a=e.reloadWithError,u=e.loading,b=e.isFinished,g=e.error,h=e.header,v=e.footer,y=e.scrollViewClass,x=void 0===y?"":y,C=e.scrollViewProps,w=Object(s.useMemo)((function(){return c||Object(f.jsx)(m.a,{})}),[c]),N=Object(j.a)(O,t);return Object(f.jsxs)(d.s,Object.assign({"className":N},{"children":[h&&Object(f.jsx)(d.s,Object.assign({"className":"custom-header"},{"children":h})),Object(f.jsxs)(d.l,Object.assign({"className":Object(j.a)("custom-scroll-view",x),"scrollY":!0,"onScrollToLower":function onScrollToLower(){return i({})}},C,{"children":[(r||[]).map((function(e,t){return Object(f.jsx)(l.a.Fragment,{"children":n(e,t)},t)})),(r||[]).length<=0&&o,(r||[]).length<=0&&b&&w,Object(f.jsx)(p.a,{"loading":u,"isFinished":r.length>0&&b,"error":g,"onErrorItemClick":a})]})),v&&Object(f.jsx)(d.s,Object.assign({"className":"custom-footer"},{"children":v}))]}))})),h=(n(142),g);h.useListHook=function useListHook(e){var t=this,n=e.loadData,l=e.queryProps,f=e.autoLoad,b=void 0!==f&&f,d=e.pageNoProps,j=void 0===d?"pageNo":d,m=e.pageSizeProps,p=void 0===m?"pageSize":m,O=e.successGroups,g=void 0===O?[200,2e5]:O,h=e.disablePaging,v=void 0!==h&&h,y=Object(s.useState)(!1),x=Object(i.a)(y,2),C=x[0],w=x[1],N=Object(s.useState)(!1),S=Object(i.a)(N,2),k=S[0],D=S[1],E=Object(s.useState)(!1),T=Object(i.a)(E,2),_=T[0],M=T[1],F=Object(s.useState)([]),A=Object(i.a)(F,2),I=A[0],P=A[1],L=Object(s.useState)(l||{}),B=Object(i.a)(L,2),R=B[0],q=B[1],z=Object(s.useState)(!1),U=Object(i.a)(z,2),W=U[0],$=U[1],H=Object(u.a)((function(e){return Object(a.a)(t,void 0,void 0,Object(c.a)().mark((function _callee(){var t,i,a;return Object(c.a)().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(!C){c.next=2;break}return c.abrupt("return");case 2:return M(!1),D(!0),t=Object.assign(Object.assign({},R),e),c.next=7,n(t).catch((function(){return null}));case 7:i=c.sent,D(!1),i&&g.includes(i.code)?(I.length<=0?Array.isArray(i.data)&&P(i.data):(a=[].concat(Object(r.a)(I),Object(r.a)(i.data)),P(a)),q((function(e){return Object.assign(Object.assign({},e),Object(o.a)({},j,e[j]+1))})),(v||!i.data||i.data.length<=0||i.data.length<t[p])&&w(!0)):M(!0);case 10:case"end":return c.stop()}}),_callee)})))}),{"wait":500}).run;return Object(s.useEffect)((function(){W&&!C&&I.length<=0&&($(!1),H(R))}),[W,I,C,R]),Object(s.useEffect)((function(){b&&H(R)}),[]),{"dataList":I,"_loadData":H,"reLoadDataWithProps":function reLoadDataWithProps(e){w(!1),P([]),q(e),$(!0)},"reloadWithError":function reloadWithError(){H({})},"loading":k,"isFinished":C,"error":_,"setDisablePaging":function setDisablePaging(){v=!0}}}},"168":function(e,t,n){"use strict";n.d(t,"a",(function(){return SearchBar}));var c=n(119),o=n(116),r=n(117),i=n(122),a=n(118),s=n(120),l=n(128),u=Object(r.b)("search-bar");function SearchBar(e){var t=e.rightSlot,n=e.disableDebounce,f=void 0!==n&&n,b=e.debounceTime,d=void 0===b?r.a:b,j=e.className,m=e.onChange,p=e.onClick,O=Object(c.b)(e,["rightSlot","disableDebounce","debounceTime","className","onChange","onClick"]),g=Object(l.a)((function(e){null==m||m(e)}),{"wait":d}).run;return Object(o.jsxs)(a.s,Object.assign({"className":Object(s.a)(u,j)},{"children":[Object(o.jsxs)(a.s,Object.assign({"className":"search-bar","onClick":p},{"children":[Object(o.jsx)(i.a,{"type":"icon-sousuo","className":"icon"}),Object(o.jsx)(a.d,Object.assign({},O,{"className":"input","placeholderClass":"input-placeholder","onInput":function _onChange(e){var t=e.detail.value.trim();f?null==m||m(t):g(t)}}))]})),t&&Object(o.jsx)(a.s,Object.assign({"className":"right-slot"},{"children":t}))]}))}},"198":function(e,t,n){},"305":function(e,t,n){"use strict";n.r(t);n(198);var c=n(21),o=n(15),r=n(119),i=n(116),a=n(117),s=n(122),l=n(125),u=n(118),f=n(120),b=n(17),d=n.n(b),j=n(139),m=n(133),p=n(166),O=n(168),g=Object(a.b)("modal-search-picker"),h=d.a.memo((function(e){var t=this,n=e.isOpened,d=void 0!==n&&n,h=e.title,v=void 0===h?"请选择":h,y=e.options,x=e.params,C=e.id,w=e.value,N=e.fieldNames,S=void 0===N?{"label":"label","value":"value"}:N,k=e.placeholder,D=e.header,E=e.confirmDisable,T=e.cancelDisable,_=e.cancelText,M=e.confirmText,F=e.debounceTime,A=void 0===F?a.a:F,I=e.request,P=e.onConfirm,L=e.onCancel,B=e.onClose,R=Object(r.b)(e,["isOpened","title","options","params","id","value","fieldNames","placeholder","header","confirmDisable","cancelDisable","cancelText","confirmText","debounceTime","request","onConfirm","onCancel","onClose"]),q=Object(b.useState)(),z=Object(o.a)(q,2),U=z[0],W=z[1],$=Object(b.useState)({"pageNo":1,"pageSize":10}),H=Object(o.a)($,2),Y=H[0],V=H[1];Object(b.useEffect)((function(){V(d?function(e){var t=Object.assign(Object.assign({},e),x);return Q(t),t}:{"pageNo":1,"pageSize":10})}),[d,y,x]);var J=p.a.useListHook({"loadData":function loadData(e){return Object(r.a)(t,void 0,void 0,Object(c.a)().mark((function _callee(){var t,n;return Object(c.a)().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(c.t0=y,c.t0){c.next=5;break}return c.next=4,null==I?void 0:I(e).catch((function(){return null}));case 4:c.t0=c.sent;case 5:return t=c.t0,l.c.isNull(w)?W(void 0):(n=(t||[]).find((function(e){return e[S.value]===w})))&&W(Object.assign({},n)),c.abrupt("return",{"code":200,"data":t});case 8:case"end":return c.stop()}}),_callee)})))},"queryProps":Y,"disablePaging":!!y}),Q=J.reLoadDataWithProps,G=Object(r.b)(J,["reLoadDataWithProps"]),K=Object(b.useMemo)((function(){return void 0!==E?E:!U}),[E,U]),X=Object(b.useMemo)((function(){return{"mode":"doubleBtn","confirmDisable":K,"cancelDisable":T,"cancelText":_,"confirmText":M,"onCancel":L,"onConfirm":function onConfirm(){U&&(null==P||P(U,C))}}}),[K,T,_,M,L,U,P,C]);return Object(i.jsx)(m.a,Object.assign({"className":g,"isOpened":d,"title":v,"onClose":null!=B?B:L,"actionConfig":X},R,{"children":Object(i.jsx)(u.s,Object.assign({"className":Object(f.a)("content",{"no-footer":!!y})},{"children":Object(i.jsx)(p.a,Object.assign({},G,{"customEmptyView":Object(i.jsx)(j.a,{"imageUrl":"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/middle-platform/20220826/ic_%E6%9A%82%E6%97%A0%E9%A1%B9%E7%9B%AE%402x.png","text":"未搜索到相关内容"}),"renderListItem":function renderListItem(e){var t=(null==U?void 0:U.value)===e[S.value];return Object(i.jsxs)(u.s,Object.assign({"className":Object(f.a)("list-item",{"selected":t}),"onClick":function onClick(){W(Object.assign({"label":e[S.label],"value":e[S.value]},e))}},{"children":[Object(i.jsx)(u.q,Object.assign({"className":"text-content"},{"children":e[S.label]})),t&&Object(i.jsx)(s.a,{"type":"icon-radio-on","className":"icon-selected"})]}))},"header":D||Object(i.jsx)(O.a,{"placeholder":k,"debounceTime":A,"onChange":function handleOnSearchBarChange(e){V((function(t){var n=Object.assign(Object.assign({},t),{"searchText":e});return Q(n),n}))}})}))}))}))})),v=n(29);t.default=function(){var e=Object(b.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(b.useState)(!1),s=Object(o.a)(a,2),l=s[0],f=s[1],d=Object(b.useState)(!1),j=Object(o.a)(d,2),m=j[0],p=j[1];return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return r(!0)},"children":"基础用法"}),Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return f(!0)},"children":"options + confirmDisable=true"}),Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return p(!0)},"children":"自定义头部（会替换掉默认的searchBar）"}),Object(i.jsx)(h,{"isOpened":n,"title":"选择商品","placeholder":"请输入商品名称","params":{"test":"a"},"request":function(){var e=Object(v.a)(Object(c.a)().mark((function _callee(e){return Object(c.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request params",e),t.abrupt("return",Array.from({"length":20},(function(e,t){return{"label":"百威纯生 500ml 大听(".concat(t,")"),"value":t}})));case 2:case"end":return t.stop()}}),_callee)})));return function(t){return e.apply(this,arguments)}}(),"onCancel":function onCancel(){console.log("onCancel"),r(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),r(!1)}}),Object(i.jsx)(h,{"isOpened":l,"title":"选择商品","placeholder":"请输入商品名称","value":3,"options":[{"label":"111","value":1},{"label":"222","value":2},{"label":"333","value":3}],"confirmDisable":!0,"onCancel":function onCancel(){console.log("onCancel"),f(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),f(!1)}}),Object(i.jsx)(h,{"isOpened":m,"title":"选择商品","placeholder":"请输入商品名称","value":2,"header":Object(i.jsx)(u.s,{"children":"以下为完美门店联系人列表，可选择一位成为BEES项目关键人"}),"request":function(){var e=Object(v.a)(Object(c.a)().mark((function _callee2(e){return Object(c.a)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request params",e),t.abrupt("return",Array.from({"length":20},(function(e,t){return{"label":"百威纯生 500ml 大听(".concat(t,")"),"value":t}})));case 2:case"end":return t.stop()}}),_callee2)})));return function(t){return e.apply(this,arguments)}}(),"onCancel":function onCancel(){console.log("onCancel"),p(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),p(!1)}})]})}}}]);
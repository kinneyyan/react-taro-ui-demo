/*! For license information please see 13.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return isString})),n.d(t,"d",(function(){return selectorQueryClientRect}));var r=n(274),o=n(295),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(r.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(o.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(o,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(7),o=n(121);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=Object(r.a)(o);if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var u=classNames.apply(null,o);u&&e.push(u)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var c in o)t.call(o,c)&&o[c]&&e.push(c);else e.push(o.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(o.a);var i=o.a.exports},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"exports":{}}},"125":function(e,t,n){"use strict";function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return uuid})),n.d(t,"c",(function(){return o})),function init(e,t){function set(n,r,o){if("undefined"!=typeof document){"number"==typeof(o=assign({},t,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var u in o)o[u]&&(i+="; "+u,!0!==o[u]&&(i+="="+o[u].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+i}}return Object.create({"set":set,"get":function get(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),u=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=e.read(u,c),t===c)break}catch(e){}}return t?r[t]:r}},"remove":function remove(e,t){set(e,"",assign({},t,{"expires":-1}))},"withAttributes":function withAttributes(e){return init(this.converter,assign({},this.attributes,e))},"withConverter":function withConverter(e){return init(assign({},this.converter,e),this.attributes)}},{"attributes":{"value":Object.freeze(t)},"converter":{"value":Object.freeze(e)}})}({"read":function read(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},"write":function write(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{"path":"/"});var r={"convertToDate":function convertToDate(e){var t;if(isNaN(new Date(e).getTime()))throw new Error("".concat(e," 不是一个有效的时间"));return e instanceof Date||(t=new Date(e)),t},"formatDate":function formatDate(e,t){var n=(t||{}).format,o=void 0===n?"yyyy-MM-dd hh:mm:ss":n,i=(t||{}).type,u=void 0===i?"YMDHMS":i;if(!(null==o?void 0:o.trim()))switch(u){case"YMDHMS":o="yyyy-MM-dd hh:mm:ss";break;case"YMD":o="yyyy-MM-dd";break;case"YM":o="yyyy-MM";break;case"HM":o="hh:mm";break;case"HMS":o="hh:mm:ss";break;case"年月日":o="yyyy年MM月dd日"}var c=r.convertToDate(e),a={"y+":c.getFullYear(),"Y+":c.getFullYear(),"M+":c.getMonth()+1,"d+":c.getDate(),"D+":c.getDate(),"h+":c.getHours(),"m+":c.getMinutes(),"s+":c.getSeconds()};for(var s in a)new RegExp("(".concat(s,")")).test(o)&&(o=o.replace(RegExp.$1,1===RegExp.$1.length?a[s]:"0".concat(a[s]).substr(-RegExp.$1.length)));return o}};"undefined"!=typeof window&&n.e(100).then(n.bind(null,131)).then((function(e){}));var o={"isNull":function isNull(e){return null==e||""===e||"{}"===e||Object.is(e,NaN)||Array.isArray(e)&&e.filter((function(e){return e})).length<=0},"isMobile":function isMobile(e){return/^1[3-9]\d{9}$/.test(e)},"isNumber":function isNumber(e){return/^[0-9]+.?[0-9]*$/.test(e)}};function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&+e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"128":function(e,t,n){"use strict";n.d(t,"a",(function(){return useDebounceFn}));var r=n(17);function useLatest(e){var t=Object(r.useRef)(e);return t.current=e,t}var o=function useUnmount(e){var t=useLatest(e);Object(r.useEffect)((function(){return function(){t.current()}}),[])};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=n(130);function root_typeof(e){return(root_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u="object"===("undefined"==typeof globalThis?"undefined":root_typeof(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,c="object"===("undefined"==typeof self?"undefined":root_typeof(self))&&null!==self&&self.Object===Object&&self,a=u||i.a||c||Function("return this")();function debounce(e,t,n){var r,o,i,u,c,s,l=0,f=!1,d=!1,b=!0,p=!t&&0!==t&&"function"==typeof a.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function startTimer(e,t){return p?(a.cancelAnimationFrame(c),a.requestAnimationFrame(e)):setTimeout(e,t)}function leadingEdge(e){return l=e,c=startTimer(timerExpired,t),f?invokeFunc(e):u}function shouldInvoke(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=i}function timerExpired(){var e=Date.now();if(shouldInvoke(e))return trailingEdge(e);c=startTimer(timerExpired,function remainingWait(e){var n=e-l,r=t-(e-s);return d?Math.min(r,i-n):r}(e))}function trailingEdge(e){return c=void 0,b&&r?invokeFunc(e):(r=o=void 0,u)}function debounced(){for(var e=Date.now(),n=shouldInvoke(e),i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];if(r=a,o=this,s=e,n){if(void 0===c)return leadingEdge(s);if(d)return c=startTimer(timerExpired,t),invokeFunc(s)}return void 0===c&&(c=startTimer(timerExpired,t)),u}return t=+t||0,function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(n)&&(f=!!n.leading,i=(d="maxWait"in n)?Math.max(+n.maxWait||0,t):i,b="trailing"in n?!!n.trailing:b),debounced.cancel=function cancel(){void 0!==c&&function cancelTimer(e){if(p)return a.cancelAnimationFrame(e);clearTimeout(e)}(c),l=0,r=s=o=c=void 0},debounced.flush=function flush(){return void 0===c?u:trailingEdge(Date.now())},debounced.pending=function pending(){return void 0!==c},debounced}function useDebounceFn(e,t){var n;var i=useLatest(e),u=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,c=Object(r.useMemo)((function(){return debounce((function(){return i.current.apply(i,arguments)}),u,t)}),[]);return o((function(){c.cancel()})),{"run":c,"cancel":c.cancel,"flush":c.flush}}},"130":function(e,t,n){"use strict";(function(e){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}));var r="object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.Object===Object&&e}).call(this,n(34))},"166":function(e,t,n){},"228":function(e,t,n){"use strict";n.d(t,"a",(function(){return Input}));var r=n(4),o=n(15),i=n(119),u=n(116),c=n(117),a=n(125),s=n(118),l=n(115),f=n(120),d=n(17),b=n(128),p=Object(c.a)("input");function Input(e){var t=e.required,n=e.label,c=e.value,m=e.onChange,y=e.disableDebounce,v=e.formKey,g=e.changeFormData,h=e.addVerify,j=e.verifyFunc,O=e.bordered,x=void 0===O||O,w=e.disabled,N=e.min,S=e.max,D=e.className,M=e.type,C=Object(i.b)(e,["required","label","value","onChange","disableDebounce","formKey","changeFormData","addVerify","verifyFunc","bordered","disabled","min","max","className","type"]),E=Object(d.useState)(""),F=Object(o.a)(E,2),k=F[0],T=F[1],_=Object(d.useRef)("");Object(d.useEffect)((function(){T(a.c.isNull(c)?"":"".concat(c)),R()}),[c]),Object(d.useEffect)((function(){v&&j&&h&&h(v,j)}),[]),Object(d.useEffect)((function(){v&&k&&g&&g(v,k)}),[k]);var I=Object(b.a)((function(e){null==m||m(e)}),{"wait":500}).run,R=Object(b.a)((function(){Object(l.a)((function(){T((function(e){var t=+e;if("number"===M&&(null==e?void 0:e.trim())&&!isNaN(t)&&(void 0!==N&&t<N||void 0!==S&&t>S)){var n=_.current;return null==m||m(n),v&&g&&g(v,n),n}return _.current=e,e}))}))}),{"wait":500}).run,A=Object(d.useCallback)((function(e){var t=+e;return"number"===M&&(null==e?void 0:e.trim())&&!isNaN(t)&&(void 0!==N&&t<N||void 0!==S&&t>S)?{"inputValue":k,"intercept":!0}:{"inputValue":e,"intercept":!1}}),[M,N,S]);return Object(u.jsxs)(s.s,Object.assign({"className":Object(f.a)(p,D,Object(r.a)({},"".concat(p,"-bordered"),x))},{"children":[Object(u.jsxs)(s.s,{"children":[t&&Object(u.jsx)(s.q,{"className":"require-icon"}),n&&Object(u.jsx)(s.q,Object.assign({"className":"label"},{"children":n}))]}),w?Object(u.jsx)(s.q,Object.assign({"className":"disabled"},{"children":k})):Object(u.jsx)(s.d,Object.assign({"className":"input","placeholderClass":"placeholder","onInput":function handleOnInput(e){T(e.detail.value.trim()),R();var t=A(e.detail.value.trim()),n=t.inputValue;t.intercept||(y?null==m||m(n):I(n),v&&g&&g(v,n))},"value":k,"type":M},C))]}))}},"230":function(e,t,n){},"290":function(e,t,n){"use strict";n.r(t);n(166);var r=n(228),o=n(118),i=(n(17),n(230),n(116));t.default=function(){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(o.s,{"className":"group-title","children":"基础用法"}),Object(i.jsx)(r.a,{"maxlength":50,"required":!0,"label":"标题","placeholder":"请输入","onChange":function onChange(e){console.log("onChange",e)}}),Object(i.jsx)(o.s,{"className":"group-title","children":"type=number; min=5"}),Object(i.jsx)(r.a,{"required":!0,"type":"number","min":5,"label":"标题","placeholder":"请输入","onChange":function onChange(e){console.log("onChange",e)}}),Object(i.jsx)(o.s,{"className":"group-title","children":"禁用模式-支持禁用样式覆写"}),Object(i.jsx)(r.a,{"disableDebounce":!0,"maxlength":50,"required":!0,"label":"标题","placeholder":"请输入","value":"禁用","disabled":!0})]})}}}]);
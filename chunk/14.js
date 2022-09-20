(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(119),o=n(116),c=n(120),i=n(17),a=n.n(i),u=n(123);function Iconfont(e){var t=e.type,n=e.onClick,i=e.className,a=e.style,l=Object(r.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(u.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(c.a)(t,i),"customStyle":Object.assign({},a,{"fontSize":"16px"}),"onClick":n},l))}var l=a.a.memo(Iconfont)},"127":function(e,t,n){"use strict";n.d(t,"a",(function(){return useDebounceFn}));var r=n(17);function useLatest(e){var t=Object(r.useRef)(e);return t.current=e,t}var o=function useUnmount(e){var t=useLatest(e);Object(r.useEffect)((function(){return function(){t.current()}}),[])};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=n(130);function root_typeof(e){return(root_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i="object"===("undefined"==typeof globalThis?"undefined":root_typeof(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,a="object"===("undefined"==typeof self?"undefined":root_typeof(self))&&null!==self&&self.Object===Object&&self,u=i||c.a||a||Function("return this")();function debounce(e,t,n){var r,o,c,i,a,l,s=0,f=!1,b=!1,d=!0,j=!t&&0!==t&&"function"==typeof u.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=r,c=o;return r=o=void 0,s=t,i=e.apply(c,n)}function startTimer(e,t){return j?(u.cancelAnimationFrame(a),u.requestAnimationFrame(e)):setTimeout(e,t)}function leadingEdge(e){return s=e,a=startTimer(timerExpired,t),f?invokeFunc(e):i}function shouldInvoke(e){var n=e-l;return void 0===l||n>=t||n<0||b&&e-s>=c}function timerExpired(){var e=Date.now();if(shouldInvoke(e))return trailingEdge(e);a=startTimer(timerExpired,function remainingWait(e){var n=e-s,r=t-(e-l);return b?Math.min(r,c-n):r}(e))}function trailingEdge(e){return a=void 0,d&&r?invokeFunc(e):(r=o=void 0,i)}function debounced(){for(var e=Date.now(),n=shouldInvoke(e),c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];if(r=u,o=this,l=e,n){if(void 0===a)return leadingEdge(l);if(b)return a=startTimer(timerExpired,t),invokeFunc(l)}return void 0===a&&(a=startTimer(timerExpired,t)),i}return t=+t||0,function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(n)&&(f=!!n.leading,c=(b="maxWait"in n)?Math.max(+n.maxWait||0,t):c,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==a&&function cancelTimer(e){if(j)return u.cancelAnimationFrame(e);clearTimeout(e)}(a),s=0,r=l=o=a=void 0},debounced.flush=function flush(){return void 0===a?i:trailingEdge(Date.now())},debounced.pending=function pending(){return void 0!==a},debounced}function useDebounceFn(e,t){var n;var c=useLatest(e),i=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,a=Object(r.useMemo)((function(){return debounce((function(){return c.current.apply(c,arguments)}),i,t)}),[]);return o((function(){a.cancel()})),{"run":a,"cancel":a.cancel,"flush":a.flush}}},"130":function(e,t,n){"use strict";(function(e){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}));var r="object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.Object===Object&&e}).call(this,n(34))},"131":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=n(129),o=n(292),c=function checkNotNull(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"数据不能为空",n=!r.c.isNull(e);return n||Object(o.a)({"title":t}),n},i=function checkIsMobile(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"手机号码格式错误",n=r.c.isMobile(e);return n||Object(o.a)({"title":t}),n},a=function checkIsNumber(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"数字格式错误",n=r.c.isNumber(e);return n||Object(o.a)({"title":t}),n}},"134":function(e,t,n){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return _objectWithoutProperties}))},"137":function(e,t,n){},"142":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(4),o=n(15),c=n(17);var i=n(119),a=n(116),u=n(118),l=n(122),s=n(129),f=n(117),b=n(120),d=Object(u.a)("list-item");n(137);var j=function InternalListItem(e){var t=e.label,n=e.placeholder,r=e.value,o=e.required,u=e.arrow,j=e.slotRight,m=e.onClick,y=e.disable,p=e.formKey,O=e.verifyFunc,v=e.addVerify,h=e.changeFormData,g=e.className,x=Object(i.b)(e,["label","placeholder","value","required","arrow","slotRight","onClick","disable","formKey","verifyFunc","addVerify","changeFormData","className"]);return Object(c.useEffect)((function(){v&&p&&O&&v(p,O)}),[]),Object(c.useEffect)((function(){p&&h&&r&&h(p,r)}),[r]),Object(a.jsxs)(f.s,Object.assign({"className":Object(b.a)(d,g),"onClick":y?void 0:m},x,{"children":[Object(a.jsxs)(f.s,Object.assign({"className":"left-wrap"},{"children":[o&&Object(a.jsx)(f.s,{"className":"require-icon"}),"string"==typeof t?Object(a.jsx)(f.q,Object.assign({"className":"label"},{"children":t})):t]})),Object(a.jsxs)(f.s,Object.assign({"className":"right-wrap"},{"children":[j||(s.c.isNull(r)?Object(a.jsx)(f.q,Object.assign({"className":"placeholder"},{"children":n})):Object(a.jsx)(f.q,Object.assign({"className":y?"placeholder":"value"},{"children":r}))),u&&!y&&Object(a.jsx)(l.a,{"type":"icon-youjiantou","className":"icon"})]}))]}))};j.useForm=function useForm(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)({}),u=Object(o.a)(a,2),l=u[0],s=u[1];return{"verify":function verify(){for(var e=!0,t=Object.keys(l),r=0;r<t.length;r++){if(!(e=(0,l[t[r]])(n[t[r]])))return e}return e},"addVerify":function addVerify(e,t){s((function(n){return Object.assign(Object.assign({},n),Object(r.a)({},e,t))}))},"changeFormData":function changeFormData(e,t){i((function(n){return Object.assign(Object.assign({},n),Object(r.a)({},e,t))}))},"formData":n,"verifyList":l}}},"184":function(e,t,n){},"298":function(e,t,n){"use strict";n.r(t);var r=n(18),o=(n(184),n(119)),c=n(116),i=n(118),a=n(117),u=n(17),l=n(127),s=Object(i.a)("list-item-input");function ListItemInput(e){var t=e.placeholder,n=e.value,r=e.onChange,i=e.disableDebounce,f=e.formKey,b=e.changeFormData,d=e.addVerify,j=e.verifyFunc,m=Object(o.b)(e,["placeholder","value","onChange","disableDebounce","formKey","changeFormData","addVerify","verifyFunc"]);Object(u.useEffect)((function(){f&&j&&d&&d(f,j)}),[]),Object(u.useEffect)((function(){f&&n&&b&&b(f,n)}),[n]);var y=Object(l.a)((function(e){null==r||r(e)}),{"wait":500}).run;return Object(c.jsx)(a.d,Object.assign({"className":s,"placeholderClass":"list-item-input-placeholder","placeholder":t,"value":n,"onInput":function onInput(e){var t=e.detail.value.trim();return i?null==r||r(t):y(t),f&&b&&b(f,t),t}},m))}var f=n(15),b=(n(137),n(142)),d=n(134),j=n(131),m=n(292),y=["verify","formData","verifyList"];t.default=function(){var e=b.a.useForm(),t=e.verify,n=e.formData,o=e.verifyList,i=Object(d.a)(e,y),l=Object(u.useState)(),s=Object(f.a)(l,2),p=s[0],O=s[1];return Object(u.useEffect)((function(){console.log("formdata ===> ",n)}),[n]),Object(u.useEffect)((function(){console.log("verifyList ===> ",o)}),[o]),Object(c.jsxs)(c.Fragment,{"children":[Object(c.jsx)(a.s,{"className":"group-title","children":"基础用法"}),Object(c.jsx)(b.a,{"label":"售点名称","required":!0,"value":"家乐福"}),Object(c.jsx)(b.a,{"style":{"background":"#FFF","borderRadius":8},"label":"带箭头","arrow":!0}),Object(c.jsx)(a.s,{"className":"group-title","children":"带slotRight"}),Object(c.jsx)(b.a,{"style":{"background":"#FFF","borderRadius":8},"label":"月销量","slotRight":Object(c.jsx)(ListItemInput,{"disableDebounce":!0,"maxlength":50,"placeholder":"请输入"})}),Object(c.jsx)(a.s,{"className":"group-title","children":"配合 BfListItem.useForm"}),Object(c.jsx)(b.a,{"label":"test1","slotRight":Object(c.jsx)(ListItemInput,Object(r.a)(Object(r.a)({"placeholder":"数字测试"},i),{},{"verifyFunc":function verifyFunc(e){return Object(j.b)(e,"测试啊")},"formKey":"number"}))}),Object(c.jsx)(b.a,{"label":"test2","slotRight":Object(c.jsx)(ListItemInput,Object(r.a)(Object(r.a)({"placeholder":"手机号码测试"},i),{},{"verifyFunc":j.a,"formKey":"mobile","maxlength":11}))}),Object(c.jsx)(b.a,{"label":"test3","slotRight":Object(c.jsx)(ListItemInput,Object(r.a)(Object(r.a)({"placeholder":"空数据测试"},i),{},{"verifyFunc":j.c,"formKey":"test"}))}),Object(c.jsx)(a.i,{"mode":"time","value":p||"","onChange":function onChange(e){O(e.detail.value)},"children":Object(c.jsx)(b.a,Object(r.a)(Object(r.a)({"label":"test4","value":p},i),{},{"formKey":"date","verifyFunc":function verifyFunc(e){return!!e||(Object(m.a)({"title":"测试为空了"}),!1)}}))}),Object(c.jsx)(a.a,{"onClick":function onClick(){console.log("校验",t())},"children":"校验"})]})}}}]);
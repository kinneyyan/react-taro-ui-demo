/*! For license information please see 13.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var r=n(246),i=n(262),c=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){c&&e(c),Object(r.a)().then((function(t){e(c=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(i.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(i,c){function fulfilled(e){try{step(r.next(e))}catch(e){c(e)}}function rejected(e){try{step(r.throw(e))}catch(e){c(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8),i=n(122);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var c=Object(r.a)(i);if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)){if(i.length){var o=classNames.apply(null,i);o&&e.push(o)}}else if("object"===c)if(i.toString===Object.prototype.toString)for(var u in i)t.call(i,u)&&i[u]&&e.push(u);else e.push(i.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(i.a);var c=i.a.exports},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"exports":{}}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(8),i=n(127),c=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l="object"==Object(r.a)(i.a)&&i.a&&i.a.Object===Object&&i.a,f="object"==("undefined"==typeof self?"undefined":Object(r.a)(self))&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),b=Object.prototype.toString,p=Math.max,j=Math.min,v=function now(){return d.Date.now()};function isObject(e){var t=Object(r.a)(e);return!!e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"==Object(r.a)(e)||function isObjectLike(e){return!!e&&"object"==Object(r.a)(e)}(e)&&"[object Symbol]"==b.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NaN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=u.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):o.test(e)?NaN:+e}var m=function debounce(e,t,n){var r,i,c,o,u,a,s=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=r,c=i;return r=i=void 0,s=t,o=e.apply(c,n)}function leadingEdge(e){return s=e,u=setTimeout(timerExpired,t),l?invokeFunc(e):o}function shouldInvoke(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-s>=c}function timerExpired(){var e=v();if(shouldInvoke(e))return trailingEdge(e);u=setTimeout(timerExpired,function remainingWait(e){var n=t-(e-a);return f?j(n,c-(e-s)):n}(e))}function trailingEdge(e){return u=void 0,d&&r?invokeFunc(e):(r=i=void 0,o)}function debounced(){var e=v(),n=shouldInvoke(e);if(r=arguments,i=this,a=e,n){if(void 0===u)return leadingEdge(a);if(f)return u=setTimeout(timerExpired,t),invokeFunc(a)}return void 0===u&&(u=setTimeout(timerExpired,t)),o}return t=toNumber(t)||0,isObject(n)&&(l=!!n.leading,c=(f="maxWait"in n)?p(toNumber(n.maxWait)||0,t):c,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==u&&clearTimeout(u),s=0,r=a=i=u=void 0},debounced.flush=function flush(){return void 0===u?o:trailingEdge(v())},debounced}},"127":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}}).call(this,n(34))},"158":function(e,t,n){},"208":function(e,t,n){"use strict";n.d(t,"a",(function(){return Input}));var r=n(120),i=n(117),c=n(119),o=n(118),u=n(126),a=n(121),s=n(17),l=Object(c.a)("input");function Input(e){var t=e.className,n=e.required,c=e.label,f=e.value,d=e.onChange,b=e.disableDebounce,p=e.formKey,j=e.changeFormData,v=e.addVerify,m=e.verifyFunc,O=e.border,g=void 0===O||O,h=e.disabled,y=Object(r.b)(e,["className","required","label","value","onChange","disableDebounce","formKey","changeFormData","addVerify","verifyFunc","border","disabled"]),x=Object(s.useMemo)((function(){return Object(u.a)((function(e){null==d||d(e)}),500)}),[]);return Object(s.useEffect)((function(){p&&m&&v&&v(p,m)}),[]),Object(s.useEffect)((function(){p&&f&&j&&j(p,f)}),[f]),Object(i.jsxs)(o.s,Object.assign({"className":Object(a.a)(l,t,g?"".concat(l,"-border"):"")},{"children":[Object(i.jsxs)(o.s,{"children":[n&&Object(i.jsx)(o.q,{"className":"require-icon"}),c&&Object(i.jsx)(o.q,Object.assign({"className":"label"},{"children":c}))]}),h?Object(i.jsx)(o.q,Object.assign({"className":"disabled"},{"children":f})):Object(i.jsx)(o.d,Object.assign({"className":"input","placeholderClass":"placeholder","onInput":function onInput(e){var t=e.detail.value.trim();return b?null==d||d(t):x(t),p&&j&&j(p,t),t},"value":f},y))]}))}},"258":function(e,t,n){"use strict";n.r(t);n(158);var r=n(208),i=n(118),c=(n(17),n(117));t.default=function(){return Object(c.jsxs)(c.Fragment,{"children":[Object(c.jsx)(i.s,{"className":"group-title","children":"基础用法"}),Object(c.jsx)(r.a,{"disableDebounce":!0,"maxlength":50,"required":!0,"label":"标题","placeholder":"请输入","value":""}),Object(c.jsx)(i.s,{"className":"group-title","children":"禁用模式-支持禁用样式覆写"}),Object(c.jsx)(r.a,{"disableDebounce":!0,"maxlength":50,"required":!0,"label":"标题","placeholder":"请输入","value":"禁用","disabled":!0})]})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(120),c=n(117),a=n(121),r=n(17),o=n.n(r),s=n(141);function Iconfont(e){var t=e.type,n=e.onClick,r=e.className,o=e.style,u=Object(i.b)(e,["type","onClick","className","style"]);return Object(c.jsx)(s.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(a.a)(t,r),"customStyle":Object.assign({},o,{"fontSize":"16px"}),"onClick":n},u))}var u=o.a.memo(Iconfont)},"143":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(8),c=n(144),a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,l="object"==Object(i.a)(c.a)&&c.a&&c.a.Object===Object&&c.a,f="object"==("undefined"==typeof self?"undefined":Object(i.a)(self))&&self&&self.Object===Object&&self,b=l||f||Function("return this")(),d=Object.prototype.toString,j=Math.max,O=Math.min,m=function now(){return b.Date.now()};function isObject(e){var t=Object(i.a)(e);return!!e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"==Object(i.a)(e)||function isObjectLike(e){return!!e&&"object"==Object(i.a)(e)}(e)&&"[object Symbol]"==d.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NaN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}var v=function debounce(e,t,n){var i,c,a,r,o,s,u=0,l=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=i,a=c;return i=c=void 0,u=t,r=e.apply(a,n)}function leadingEdge(e){return u=e,o=setTimeout(timerExpired,t),l?invokeFunc(e):r}function shouldInvoke(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=a}function timerExpired(){var e=m();if(shouldInvoke(e))return trailingEdge(e);o=setTimeout(timerExpired,function remainingWait(e){var n=t-(e-s);return f?O(n,a-(e-u)):n}(e))}function trailingEdge(e){return o=void 0,b&&i?invokeFunc(e):(i=c=void 0,r)}function debounced(){var e=m(),n=shouldInvoke(e);if(i=arguments,c=this,s=e,n){if(void 0===o)return leadingEdge(s);if(f)return o=setTimeout(timerExpired,t),invokeFunc(s)}return void 0===o&&(o=setTimeout(timerExpired,t)),r}return t=toNumber(t)||0,isObject(n)&&(l=!!n.leading,a=(f="maxWait"in n)?j(toNumber(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),debounced.cancel=function cancel(){void 0!==o&&clearTimeout(o),u=0,i=s=c=o=void 0},debounced.flush=function flush(){return void 0===o?r:trailingEdge(m())},debounced}},"144":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}}).call(this,n(35))},"148":function(e,t,n){},"155":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(4),c=n(15),a=n(17);var r=n(120),o=n(117),s=n(119),u=n(125),l=n(149),f=n(118),b=n(121),d=Object(s.a)("list-item");n(148);var j=function InternalListItem(e){var t=e.label,n=e.placeholder,i=e.value,c=e.required,s=e.arrow,j=e.slotRight,O=e.onClick,m=e.disable,v=e.formKey,p=e.verifyFunc,g=e.addVerify,h=e.changeFormData,y=e.className,x=Object(r.b)(e,["label","placeholder","value","required","arrow","slotRight","onClick","disable","formKey","verifyFunc","addVerify","changeFormData","className"]);return Object(a.useEffect)((function(){g&&v&&p&&g(v,p)}),[]),Object(a.useEffect)((function(){v&&h&&i&&h(v,i)}),[i]),Object(o.jsxs)(f.s,Object.assign({"className":Object(b.a)(d,y),"onClick":m?void 0:O},x,{"children":[Object(o.jsxs)(f.s,Object.assign({"className":"left-wrap"},{"children":[c&&Object(o.jsx)(f.s,{"className":"require-icon"}),"string"==typeof t?Object(o.jsx)(f.q,Object.assign({"className":"label"},{"children":t})):t]})),Object(o.jsxs)(f.s,Object.assign({"className":"right-wrap"},{"children":[j||(l.b.isNull(i)?Object(o.jsx)(f.q,Object.assign({"className":"placeholder"},{"children":n})):Object(o.jsx)(f.q,Object.assign({"className":m?"placeholder":"value"},{"children":i}))),s&&!m&&Object(o.jsx)(u.a,{"type":"icon-youjiantou","className":"icon"})]}))]}))};j.useForm=function useForm(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)({}),s=Object(c.a)(o,2),u=s[0],l=s[1];return{"verify":function verify(){for(var e=!0,t=Object.keys(u),i=0;i<t.length;i++){if(!(e=(0,u[t[i]])(n[t[i]])))return e}return e},"addVerify":function addVerify(e,t){l((function(n){return Object.assign(Object.assign({},n),Object(i.a)({},e,t))}))},"changeFormData":function changeFormData(e,t){r((function(n){return Object.assign(Object.assign({},n),Object(i.a)({},e,t))}))},"formData":n,"verifyList":u}}},"169":function(e,t,n){},"260":function(e,t,n){"use strict";n.r(t);n(169);var i=n(120),c=n(117),a=n(119),r=n(118),o=n(143),s=n(17),u=Object(a.a)("list-item-input");function ListItemInput(e){var t=e.placeholder,n=e.value,a=e.onChange,l=e.disableDebounce,f=e.formKey,b=e.changeFormData,d=e.addVerify,j=e.verifyFunc,O=Object(i.b)(e,["placeholder","value","onChange","disableDebounce","formKey","changeFormData","addVerify","verifyFunc"]),m=Object(s.useMemo)((function(){return Object(o.a)((function(e){null==a||a(e)}),500)}),[]);return Object(s.useEffect)((function(){f&&j&&d&&d(f,j)}),[]),Object(s.useEffect)((function(){f&&n&&b&&b(f,n)}),[n]),Object(c.jsx)(r.d,Object.assign({"className":u,"placeholderClass":"list-item-input-placeholder","placeholder":t,"value":n,"onInput":function onInput(e){var t=e.detail.value.trim();return l?null==a||a(t):m(t),f&&b&&b(f,t),t}},O))}n(148);var l=n(155);t.default=function(){return Object(c.jsxs)(c.Fragment,{"children":[Object(c.jsx)(r.s,{"children":"BfListItem - 基础用法"}),Object(c.jsx)(l.a,{"label":"售点名称","required":!0,"value":"家乐福"}),Object(c.jsx)(l.a,{"style":{"background":"#FFF","borderRadius":8},"label":"带箭头","arrow":!0}),Object(c.jsx)(r.s,{"children":"BfListItem - 带slotRight"}),Object(c.jsx)(l.a,{"style":{"background":"#FFF","borderRadius":8},"label":"月销量","slotRight":Object(c.jsx)(ListItemInput,{"disableDebounce":!0,"maxlength":50,"placeholder":"请输入"})}),Object(c.jsx)(r.s,{"children":"BfListItemInput - 基础用法"}),Object(c.jsx)(ListItemInput,{"disableDebounce":!0,"maxlength":50,"placeholder":"请输入"})]})}}}]);
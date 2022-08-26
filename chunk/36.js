/*! For license information please see 36.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var c=n(259),s=n(280),r=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){r&&e(r),Object(c.a)().then((function(t){e(r=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(s.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(7),s=n(121);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var r=Object(c.a)(s);if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var i=classNames.apply(null,s);i&&e.push(i)}}else if("object"===r)if(s.toString===Object.prototype.toString)for(var a in s)t.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(s.a);var r=s.a.exports},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"157":function(e,t,n){},"182":function(e,t,n){"use strict";n.d(t,"a",(function(){return Switch}));var c=n(116),s=n(118),r=n(117),i=n(120),a=Object(s.a)("switch");function Switch(e){var t=e.checked,n=e.onChange,s=e.disabled,o=void 0!==s&&s,u=e.yesText,l=void 0===u?"是":u,f=e.noText,d=void 0===f?"否":f;return Object(c.jsxs)(r.s,Object.assign({"className":Object(i.a)(a,{"switch-disabled":o}),"onClick":function onClick(){o||null==n||n(!t)}},{"children":[Object(c.jsx)(r.s,Object.assign({"className":Object(i.a)("switch",{"switch-checked":t})},{"children":Object(c.jsx)(r.s,{})})),t?Object(c.jsx)(r.q,Object.assign({"className":"text-checked"},{"children":l})):Object(c.jsx)(r.q,Object.assign({"className":"text"},{"children":d}))]}))}},"264":function(e,t,n){"use strict";n.r(t);n(157);var c=n(182),s=n(15),r=n(117),i=n(17),a=n(116);t.default=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(r.s,{"className":"group-title","children":"基础用法"}),Object(a.jsx)(c.a,{"checked":n,"onChange":function onChange(e){return o(e)}}),Object(a.jsx)(r.s,{"className":"group-title","children":"自定义文案"}),Object(a.jsx)(c.a,{"checked":!0,"yesText":"好"}),Object(a.jsx)(c.a,{"noText":"坏"})]})}}}]);
/*! For license information please see 38.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var c=n(256),s=n(275),r=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){r&&e(r),Object(c.a)().then((function(t){e(r=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(s.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(8),s=n(122);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var r=Object(c.a)(s);if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var i=classNames.apply(null,s);i&&e.push(i)}}else if("object"===r)if(s.toString===Object.prototype.toString)for(var a in s)t.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(s.a);var r=s.a.exports},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"180":function(e,t,n){},"284":function(e,t,n){"use strict";n.r(t);n(180);var c=n(117),s=n(119),r=n(118),i=n(121),a=Object(s.a)("switch");function Switch(e){var t=e.checked,n=e.onChange,s=e.disabled,o=void 0!==s&&s,u=e.yesText,l=void 0===u?"是":u,f=e.noText,j=void 0===f?"否":f;return Object(c.jsxs)(r.s,Object.assign({"className":Object(i.a)(a,{"switch-disabled":o}),"onClick":function onClick(){o||null==n||n(!t)}},{"children":[Object(c.jsx)(r.s,Object.assign({"className":Object(i.a)("switch",{"switch-checked":t})},{"children":Object(c.jsx)(r.s,{})})),t?Object(c.jsx)(r.q,Object.assign({"className":"text-checked"},{"children":l})):Object(c.jsx)(r.q,Object.assign({"className":"text"},{"children":j}))]}))}var o=n(15),u=n(17);t.default=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)(c.Fragment,{"children":[Object(c.jsx)(r.s,{"className":"group-title","children":"基础用法"}),Object(c.jsx)(Switch,{"checked":n,"onChange":function onChange(e){return s(e)}}),Object(c.jsx)(r.s,{"className":"group-title","children":"自定义文案"}),Object(c.jsx)(Switch,{"checked":!0,"yesText":"好"}),Object(c.jsx)(Switch,{"noText":"坏"})]})}}}]);
/*! For license information please see 42.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"118":function(t,n,e){"use strict";e.d(n,"a",(function(){return getPrefixCls})),e.d(n,"b",(function(){return getSystemInfo})),e.d(n,"c",(function(){return selectorQueryClientRect}));var r=e(268),s=e(289),c=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function getSystemInfo(){return new Promise((function(t,n){c&&t(c),Object(r.a)().then((function(n){t(c=n)})).catch((function(t){return n(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(n){Object(s.a)().select(t).boundingClientRect().exec((function(t){n(t)}))}))}},"120":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(7),s=e(121);!function(t){!function(){var n={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var c=Object(r.a)(s);if("string"===c||"number"===c)t.push(s);else if(Array.isArray(s)){if(s.length){var o=classNames.apply(null,s);o&&t.push(o)}}else if("object"===c)if(s.toString===Object.prototype.toString)for(var i in s)n.call(s,i)&&s[i]&&t.push(i);else t.push(s.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(s.a);var c=s.a.exports},"121":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={"exports":{}}},"204":function(t,n,e){},"307":function(t,n,e){"use strict";e.r(n);e(204);var r=e(116),s=e(118),c=e(117),o=e(120),i=Object(s.a)("tags");function isString(t){return"string"==typeof t}function Tags(t){var n=t.tags,e=t.color,s=void 0===e?"#fd3c42":e,a=t.backgroundColor,u=void 0===a?"rgb(255 59 48 / 8%)":a,l=t.className;return Object(r.jsx)(c.s,Object.assign({"className":Object(o.a)(i,l)},{"children":null==n?void 0:n.map((function(t,n){var e=isString(t)?s:t.color||s,o=isString(t)?u:t.backgroundColor||u;return Object(r.jsx)(c.s,Object.assign({"className":"tag-item","style":{"color":e,"backgroundColor":o}},{"children":isString(t)?t:t.text}),n)}))}))}e(17),n.default=function(){return Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(Tags,{"tags":["text1","text2"]}),Object(r.jsx)(Tags,{"tags":[{"text":"text1","color":"white","backgroundColor":"blue"},{"text":"text2"}]})]})}}}]);
/*! For license information please see 42.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"118":function(t,e,s){"use strict";s.d(e,"a",(function(){return getPrefixCls})),s.d(e,"b",(function(){return getSystemInfo})),s.d(e,"c",(function(){return selectorQueryClientRect}));var n=s(269),r=s(290),c=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function getSystemInfo(){return new Promise((function(t,e){c&&t(c),Object(n.a)().then((function(e){t(c=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(r.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"120":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var n=s(7),r=s(121);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],s=0;s<arguments.length;s++){var r=arguments[s];if(r){var c=Object(n.a)(r);if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)){if(r.length){var i=classNames.apply(null,r);i&&t.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)e.call(r,a)&&r[a]&&t.push(a);else t.push(r.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(r.a);var c=r.a.exports},"121":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var n={"exports":{}}},"205":function(t,e,s){},"308":function(t,e,s){"use strict";s.r(e);s(205);var n=s(116),r=s(118),c=s(117),i=s(120),a=Object(r.a)("tags");function isString(t){return"string"==typeof t}function Tags(t){var e=t.tags,s=t.color,r=void 0===s?"#fd3c42":s,o=t.backgroundColor,l=void 0===o?"rgb(255 59 48 / 8%)":o,u=t.style,g=t.className;return Object(n.jsx)(c.s,Object.assign({"className":Object(i.a)(a,g)},{"children":null==e?void 0:e.map((function(t,e){return isString(t)?Object(n.jsx)(c.s,Object.assign({"className":"tag-item","style":isString(u)?u:Object.assign({"color":r,"backgroundColor":l},u)},{"children":t}),e):Object(n.jsx)(c.s,Object.assign({"className":"tag-item","style":isString(t.style)?t.style:Object.assign(Object.assign({"color":t.color||r,"backgroundColor":t.backgroundColor||l},isString(u)?{}:u),t.style)},{"children":t.text}),e)}))}))}s(17),e.default=function(){return Object(n.jsxs)(n.Fragment,{"children":[Object(n.jsx)(c.s,{"className":"group-title","children":"基础用法"}),Object(n.jsx)(Tags,{"tags":["text1","text2"]}),Object(n.jsx)(c.s,{"className":"group-title","children":"自定义样式"}),Object(n.jsx)(Tags,{"tags":["text1","text2"],"style":{"fontSize":32,"height":48,"border":"1px solid cyan"}}),Object(n.jsx)(c.s,{"className":"group-title","children":"自定义单个tag样式"}),Object(n.jsx)(Tags,{"tags":[{"text":"text1","style":{"color":"white","backgroundColor":"blue"}},{"text":"text2"}]})]})}}}]);
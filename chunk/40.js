/*! For license information please see 40.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"118":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return selectorQueryClientRect}));var s=n(269),r=n(290),c=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function getSystemInfo(){return new Promise((function(t,e){c&&t(c),Object(s.a)().then((function(e){t(c=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(r.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"120":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n(7),r=n(121);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=Object(s.a)(r);if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)){if(r.length){var o=classNames.apply(null,r);o&&t.push(o)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)e.call(r,i)&&r[i]&&t.push(i);else t.push(r.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(r.a);var c=r.a.exports},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={"exports":{}}},"205":function(t,e,n){},"308":function(t,e,n){"use strict";n.r(e);n(205);var s=n(116),r=n(118),c=n(117),o=n(120),i=Object(r.a)("tags");function isString(t){return"string"==typeof t}function Tags(t){var e=t.tags,n=t.color,r=void 0===n?"#fd3c42":n,a=t.backgroundColor,l=void 0===a?"rgb(255 59 48 / 8%)":a,u=t.style,g=t.className;return Object(s.jsx)(c.s,Object.assign({"className":Object(o.a)(i,g)},{"children":null==e?void 0:e.map((function(t,e){return isString(t)?Object(s.jsx)(c.s,Object.assign({"className":"tag-item","style":isString(u)?u:Object.assign({"color":r,"backgroundColor":l},u)},{"children":t}),e):Object(s.jsx)(c.s,Object.assign({"className":"tag-item","style":isString(null==t?void 0:t.style)?t.style:Object.assign(Object.assign({"color":(null==t?void 0:t.color)||r,"backgroundColor":(null==t?void 0:t.backgroundColor)||l},isString(u)?{}:u),null==t?void 0:t.style)},{"children":null==t?void 0:t.text}),e)}))}))}n(17),e.default=function(){return Object(s.jsxs)(s.Fragment,{"children":[Object(s.jsx)(c.s,{"className":"group-title","children":"基础用法"}),Object(s.jsx)(Tags,{"tags":["text1","text2"]}),Object(s.jsx)(c.s,{"className":"group-title","children":"自定义样式"}),Object(s.jsx)(Tags,{"tags":["text1","text2"],"style":{"fontSize":32,"height":48,"border":"1px solid cyan"}}),Object(s.jsx)(c.s,{"className":"group-title","children":"自定义单个tag样式"}),Object(s.jsx)(Tags,{"tags":[{"text":"text1","style":{"color":"white","backgroundColor":"blue"}},"text2",{"text":"text3","style":{"color":"purple","backgroundColor":"gray"}},"text4"]})]})}}}]);
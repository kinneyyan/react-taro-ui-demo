/*! For license information please see 42.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"118":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return isString})),n.d(e,"d",(function(){return selectorQueryClientRect}));var s=n(274),c=n(295),r=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function isString(t){return"string"==typeof t}function getSystemInfo(){return new Promise((function(t,e){r&&t(r),Object(s.a)().then((function(e){t(r=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(c.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"120":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(7),c=n(121);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=Object(s.a)(c);if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var o=classNames.apply(null,c);o&&t.push(o)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var a in c)e.call(c,a)&&c[a]&&t.push(a);else t.push(c.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(c.a);var r=c.a.exports},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={"exports":{}}},"208":function(t,e,n){},"314":function(t,e,n){"use strict";n.r(e);n(208);var s=n(116),c=n(118),r=n(117),o=n(120),a=Object(c.a)("tags");function Tags(t){var e=t.tags,n=t.color,i=void 0===n?"#fd3c42":n,l=t.backgroundColor,u=void 0===l?"rgb(255 59 48 / 8%)":l,g=t.style,f=t.className;return Object(s.jsx)(r.s,Object.assign({"className":Object(o.a)(a,f)},{"children":null==e?void 0:e.map((function(t,e){return Object(c.c)(t)?Object(s.jsx)(r.s,Object.assign({"className":"tag-item","style":Object(c.c)(g)?g:Object.assign({"color":i,"backgroundColor":u},g)},{"children":t}),e):Object(s.jsx)(r.s,Object.assign({"className":"tag-item","style":Object(c.c)(null==t?void 0:t.style)?t.style:Object.assign(Object.assign({"color":(null==t?void 0:t.color)||i,"backgroundColor":(null==t?void 0:t.backgroundColor)||u},Object(c.c)(g)?{}:g),null==t?void 0:t.style)},{"children":null==t?void 0:t.text}),e)}))}))}n(17),e.default=function(){return Object(s.jsxs)(s.Fragment,{"children":[Object(s.jsx)(r.s,{"className":"group-title","children":"基础用法"}),Object(s.jsx)(Tags,{"tags":["text1","text2"]}),Object(s.jsx)(r.s,{"className":"group-title","children":"自定义样式"}),Object(s.jsx)(Tags,{"tags":["text1","text2"],"style":{"fontSize":32,"height":48,"border":"1px solid cyan"}}),Object(s.jsx)(r.s,{"className":"group-title","children":"自定义单个tag样式"}),Object(s.jsx)(Tags,{"tags":[{"text":"text1","style":{"color":"white","backgroundColor":"blue"}},"text2",{"text":"text3","style":{"color":"purple","backgroundColor":"gray"}},"text4","text4","text4","text4","text4","text4","text4","text4","text4"]})]})}}}]);
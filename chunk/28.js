/*! For license information please see 28.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var c=n(271),r=n(292),a=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){a&&e(a),Object(c.a)().then((function(t){e(a=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(r.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(7),r=n(121);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=Object(c.a)(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=classNames.apply(null,r);s&&e.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)t.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(r.a);var a=r.a.exports},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(r,a){function fulfilled(e){try{step(c.next(e))}catch(e){a(e)}}function rejected(e){try{step(c.throw(e))}catch(e){a(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"180":function(e,t,n){},"298":function(e,t,n){"use strict";n.r(t);n(180);var c=n(120),r=n(116),a=n(118),s=n(117),l=n(119),o=n(17),i=Object(a.a)("badge");function Badge(e){var t=e.dot,n=void 0!==t&&t,a=e.value,u=void 0===a?"":a,j=e.maxValue,d=void 0===j?99:j,b=e.color,f=e.content,O=e.className,h=e.children,x=Object(c.b)(e,["dot","value","maxValue","color","content","className","children"]),p=Object(o.useMemo)((function(){if(!u)return"";var e=+u;return Number.isNaN(e)?u:e>d?"".concat(d,"+"):e}),[u,d]),g=Object(l.a)(i,{"independent":null==h},O);return Object(r.jsxs)(s.s,Object.assign({"className":g},x,{"children":[h,f?Object(r.jsx)(s.s,Object.assign({"className":"".concat(i,"__num"),"style":b?"background: ".concat(b):""},{"children":f})):n?Object(r.jsx)(s.s,{"className":"".concat(i,"__dot"),"style":b?"background: ".concat(b):""}):""!==p&&Object(r.jsx)(s.s,Object.assign({"className":Object(l.a)("".concat(i,"__num"),{"round":1==="".concat(p).length}),"style":b?"background: ".concat(b):""},{"children":p}))]}))}t.default=function(){return Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(s.s,{"className":"group-title","children":"基础用法"}),Object(r.jsx)(Badge,{"value":5,"children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(Badge,{"value":10,"children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(Badge,{"value":"hot","children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(s.s,{"className":"group-title","children":"小红点"}),Object(r.jsx)(Badge,{"dot":!0,"children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(s.s,{"className":"group-title","children":"最大值"}),Object(r.jsx)(Badge,{"value":50,"maxValue":20,"children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(s.s,{"className":"group-title","children":"自定义颜色"}),Object(r.jsx)(Badge,{"value":76,"color":"blue","children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(Badge,{"value":"NEW","color":"blue","children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(s.s,{"className":"group-title","children":"自定义内容"}),Object(r.jsx)(Badge,{"color":"black","content":Object(r.jsx)(s.q,{"style":{"color":"cyan"},"children":"123"}),"children":Object(r.jsx)(s.a,{"children":"按钮"})}),Object(r.jsx)(s.s,{"className":"group-title","children":"独立展示"}),Object(r.jsx)(Badge,{"value":5}),Object(r.jsx)(Badge,{"value":100,"maxValue":99}),Object(r.jsx)(Badge,{"value":"NEW"})]})}}}]);
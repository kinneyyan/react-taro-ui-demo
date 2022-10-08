/*! For license information please see 16.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"117":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return isString})),n.d(e,"d",(function(){return selectorQueryClientRect}));var c=n(274),i=n(295),r=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function isString(t){return"string"==typeof t}function getSystemInfo(){return new Promise((function(t,e){r&&t(r),Object(c.a)().then((function(e){t(r=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(i.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"119":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(t);i<c.length;i++)e.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(t,c[i])&&(n[c[i]]=t[c[i]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(i,r){function fulfilled(t){try{step(c.next(t))}catch(t){r(t)}}function rejected(t){try{step(c.throw(t))}catch(t){r(t)}}function step(t){t.done?i(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"120":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(7),i=n(121);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var r=Object(c.a)(i);if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var a=classNames.apply(null,i);a&&t.push(a)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var o in i)e.call(i,o)&&i[o]&&t.push(o);else t.push(i.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(i.a);var r=i.a.exports},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"126":function(t,e,n){"use strict";n.d(e,"a",(function(){return Button}));var c=n(119),i=n(116),r=n(117),a=n(118),o=n(120),s=Object(r.a)("button");function Button(t){var e=t.type,n=void 0===e?"default":e,r=t.children,l=t.className,u=t.plain,f=t.disabled,d=t.size,b=t.onClick,p=Object(c.b)(t,["type","children","className","plain","disabled","size","onClick"]),j=Object(o.a)(s,l,n,d,{"plain":u,"disabled":f});return Object(i.jsx)(a.a,Object.assign({"type":n,"className":j,"onClick":f?void 0:b,"disabled":f,"size":d},p,{"children":r}))}},"127":function(t,e,n){"use strict";n.d(e,"a",(function(){return Affix}));var c=n(4),i=n(119),r=n(116),a=n(117),o=n(118),s=n(120),l=n(126),u=Object(a.a)("affix"),f={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},d={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(t){var e,n=t.children,a=t.layout,b=void 0===a?"center":a,p=t.postion,j=t.position,m=t.mode,O=t.cancelText,y=void 0===O?"取消":O,h=t.confirmText,x=void 0===h?"确定":h,g=t.confirmDisable,v=void 0!==g&&g,w=t.cancelDisable,C=void 0!==w&&w,N=t.safeAreaInsetBottom,P=t.className,S=t.onCancel,k=t.onConfirm,_=Object(i.b)(t,["children","layout","postion","position","mode","cancelText","confirmText","confirmDisable","cancelDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),A=j||p||"bottom",B=null!=N?N:"bottom"===A,I=Object(s.a)(u,d[A],(e={},Object(c.a)(e,f[b],!m),Object(c.a)(e,"safe-area-inset-bottom",B),e),P);return Object(r.jsxs)(r.Fragment,{"children":["bottom"===A&&Object(r.jsx)(o.s,{"className":Object(s.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":B})}),Object(r.jsx)(o.s,Object.assign({"className":I},_,{"children":m?"singleBtn"===m?Object(r.jsx)(l.a,Object.assign({"type":"primary","disabled":v,"onClick":k},{"children":x})):Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(l.a,Object.assign({"type":"default","disabled":C,"onClick":S,"plain":!0},{"children":y})),Object(r.jsx)(l.a,Object.assign({"type":"primary","disabled":v,"onClick":k},{"children":x}))]}):n}))]})}},"159":function(t,e,n){},"181":function(t,e,n){},"273":function(t,e,n){"use strict";n.r(e);n(159);var c=n(126),i=(n(181),n(127)),r=(n(17),n(116));e.default=function(){return Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(i.a,{"mode":"doubleBtn","confirmText":"OK"}),Object(r.jsxs)(i.a,{"position":"top","children":[Object(r.jsx)(c.a,{"type":"primary","children":"自定义按钮1"}),Object(r.jsx)(c.a,{"type":"default","plain":!0,"children":"自定义按钮2"}),Object(r.jsx)(c.a,{"type":"primary","children":"自定义按钮3"})]})]})}}}]);
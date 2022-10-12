/*! For license information please see 13.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"117":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return isString})),n.d(e,"d",(function(){return selectorQueryClientRect}));var c=n(275),a=n(296),i=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function isString(t){return"string"==typeof t}function getSystemInfo(){return new Promise((function(t,e){i&&t(i),Object(c.a)().then((function(e){t(i=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(a.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"119":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(t);a<c.length;a++)e.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(t,c[a])&&(n[c[a]]=t[c[a]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(a,i){function fulfilled(t){try{step(c.next(t))}catch(t){i(t)}}function rejected(t){try{step(c.throw(t))}catch(t){i(t)}}function step(t){t.done?a(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"120":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(7),a=n(121);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=Object(c.a)(a);if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)){if(a.length){var r=classNames.apply(null,a);r&&t.push(r)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var o in a)e.call(a,o)&&a[o]&&t.push(o);else t.push(a.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(a.a);var i=a.a.exports},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"126":function(t,e,n){"use strict";n.d(e,"a",(function(){return Button}));var c=n(119),a=n(116),i=n(117),r=n(118),o=n(120),s=Object(i.a)("button");function Button(t){var e=t.type,n=void 0===e?"default":e,l=t.children,u=t.className,f=t.plain,b=t.disabled,d=t.size,p=void 0===d?"default":d,j=t.onClick,m=Object(c.b)(t,["type","children","className","plain","disabled","size","onClick"]),O=Object(o.a)(s,u,n,"size-".concat(p),{"plain":f,"disabled":b});return Object(a.jsx)(r.a,Object.assign({"className":O,"type":n,"onClick":b?void 0:j,"disabled":b,"size":p},m,{"children":Object(i.c)(l)?Object(a.jsx)(r.q,Object.assign({"className":"".concat(s,"__text")},{"children":l})):l}))}},"127":function(t,e,n){"use strict";n.d(e,"a",(function(){return Affix}));var c=n(4),a=n(119),i=n(116),r=n(117),o=n(118),s=n(120),l=n(126),u=Object(r.a)("affix"),f={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},b={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(t){var e,n=t.children,r=t.layout,d=void 0===r?"center":r,p=t.postion,j=t.position,m=t.mode,O=t.cancelText,y=void 0===O?"取消":O,h=t.confirmText,x=void 0===h?"确定":h,g=t.confirmDisable,v=void 0!==g&&g,w=t.cancelDisable,N=void 0!==w&&w,C=t.safeAreaInsetBottom,_=t.className,P=t.onCancel,S=t.onConfirm,k=Object(a.b)(t,["children","layout","postion","position","mode","cancelText","confirmText","confirmDisable","cancelDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),A=j||p||"bottom",B=null!=C?C:"bottom"===A,z=Object(s.a)(u,b[A],(e={},Object(c.a)(e,f[d],!m),Object(c.a)(e,"safe-area-inset-bottom",B),Object(c.a)(e,"same-width",!!m),e),_);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===A&&Object(i.jsx)(o.s,{"className":Object(s.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":B})}),Object(i.jsx)(o.s,Object.assign({"className":z},k,{"children":m?"singleBtn"===m?Object(i.jsx)(l.a,Object.assign({"type":"primary","disabled":v,"onClick":S},{"children":x})):Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(l.a,Object.assign({"type":"default","disabled":N,"onClick":P,"plain":!0},{"children":y})),Object(i.jsx)(l.a,Object.assign({"type":"primary","disabled":v,"onClick":S},{"children":x}))]}):n}))]})}},"159":function(t,e,n){},"181":function(t,e,n){},"182":function(t,e,n){t.exports={"four-btn-container":"index-module__four-btn-container___2afQz"}},"274":function(t,e,n){"use strict";n.r(e);n(159);var c=n(126),a=(n(181),n(127)),i=(n(17),n(182)),r=n.n(i),o=n(116);e.default=function(){return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(a.a,{"mode":"doubleBtn","confirmText":"OK"}),Object(o.jsxs)(a.a,{"position":"top","className":r.a["four-btn-container"],"children":[Object(o.jsx)(c.a,{"type":"primary","children":"按钮1"}),Object(o.jsx)(c.a,{"type":"default","plain":!0,"children":"按钮2"}),Object(o.jsx)(c.a,{"type":"primary","children":"按钮3"}),Object(o.jsx)(c.a,{"type":"primary","plain":!0,"children":"按钮4"})]})]})}}}]);
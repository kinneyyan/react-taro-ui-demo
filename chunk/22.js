(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"118":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return selectorQueryClientRect})),n.d(e,"d",(function(){return uuid}));var c=n(259),o=n(280),i=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function uuid(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substring(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}function getSystemInfo(){return new Promise((function(t,e){i&&t(i),Object(c.a)().then((function(e){t(i=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(o.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"119":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(o,i){function fulfilled(t){try{step(c.next(t))}catch(t){i(t)}}function rejected(t){try{step(c.throw(t))}catch(t){i(t)}}function step(t){t.done?o(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"125":function(t,e,n){"use strict";n.d(e,"a",(function(){return Button}));var c=n(119),o=n(116),i=n(118),s=n(117),a=n(120),r=Object(i.a)("button");function Button(t){var e=t.type,n=void 0===e?"default":e,i=t.children,l=t.className,u=t.plain,b=t.disabled,d=t.size,f=t.onClick,j=Object(c.b)(t,["type","children","className","plain","disabled","size","onClick"]),O=Object(a.a)(r,l,n,d,{"plain":u,"disabled":b});return Object(o.jsx)(s.a,Object.assign({"type":n,"className":O,"onClick":b?void 0:f,"disabled":b,"size":d},j,{"children":i}))}},"126":function(t,e,n){"use strict";n.d(e,"a",(function(){return Affix}));var c=n(4),o=n(119),i=n(116),s=n(118),a=n(117),r=n(120),l=n(125),u=Object(s.a)("affix"),b={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},d={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(t){var e,n=t.children,s=t.layout,f=void 0===s?"center":s,j=t.postion,O=void 0===j?"bottom":j,p=t.mode,m=t.cancelText,h=void 0===m?"取消":m,g=t.confirmText,x=void 0===g?"确定":g,C=t.confirmDisable,y=void 0!==C&&C,v=t.safeAreaInsetBottom,N=void 0===v||v,w=t.className,k=t.onCancel,P=t.onConfirm,S=Object(o.b)(t,["children","layout","postion","mode","cancelText","confirmText","confirmDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),_=Object(r.a)(u,d[O],(e={},Object(c.a)(e,b[f],!p),Object(c.a)(e,"safe-area-inset-bottom",N),e),w);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===O&&Object(i.jsx)(a.s,{"className":Object(r.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":N})}),Object(i.jsx)(a.s,Object.assign({"className":_},S,{"children":p?"singleBtn"===p?Object(i.jsx)(l.a,Object.assign({"type":"primary","className":"mode-single-btn","onClick":P},{"children":x})):Object(i.jsxs)(a.s,Object.assign({"className":"mode-double-btn"},{"children":[Object(i.jsx)(l.a,Object.assign({"type":"default","onClick":k,"plain":!0},{"children":h})),Object(i.jsx)(l.a,Object.assign({"type":"primary","className":Object(r.a)({"bf-button-disabled":y}),"disabled":y,"onClick":P},{"children":x}))]})):n}))]})}},"132":function(t,e,n){"use strict";n.d(e,"a",(function(){return Modal}));var c=n(119),o=n(116),i=n(118),s=n(117),a=n(120),r=n(123),l=n(126),u=Object(i.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(t){var e=t.isOpened,n=void 0!==e&&e,i=t.title,d=t.titleSplit,f=void 0!==d&&d,j=t.postion,O=void 0===j?"bottom":j,p=t.children,m=t.actionConfig,h=t.onClose,g=t.slotRight,x=t.className,C=Object(c.b)(t,["isOpened","title","titleSplit","postion","children","actionConfig","onClose","slotRight","className"]),y=Object(a.a)(u,b[O],x);return Object(o.jsxs)(r.b,Object.assign({"className":y,"isOpened":n,"onClose":h},C,{"children":["string"==typeof i?Object(o.jsxs)(s.s,Object.assign({"className":Object(a.a)("header",{"header-split":f})},{"children":[Object(o.jsx)(s.q,Object.assign({"className":"title"},{"children":i})),Object(o.jsx)(s.q,Object.assign({"className":"slot-right"},{"children":g}))]})):i,n&&Object(o.jsx)(s.s,Object.assign({"className":Object(a.a)({"content-no-title":!i})},{"children":p})),m&&Object(o.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===O},m))]}))}},"188":function(t,e,n){},"265":function(t,e,n){"use strict";n.r(e);n(188);var c=n(132),o=n(15),i=n(117),s=n(17),a=n(116);e.default=function(){var t=Object(s.useState)(!1),e=Object(o.a)(t,2),n=e[0],r=e[1],l=Object(s.useState)(!1),u=Object(o.a)(l,2),b=u[0],d=u[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return r(!0)},"children":"基本用法"}),Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return d(!0)},"children":'postion="top"'}),Object(a.jsx)(c.a,{"isOpened":n,"title":"标题","slotRight":Object(a.jsx)(i.s,{"style":{"color":"red"},"children":"custom"}),"onClose":function onClose(){console.log("onClose"),r(!1)},"actionConfig":{"mode":"doubleBtn","onCancel":function onCancel(){console.log("onCancel"),r(!1)},"onConfirm":function onConfirm(){console.log("onConfirm"),r(!1)}},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})}),Object(a.jsx)(c.a,{"isOpened":b,"title":"标题","postion":"top","onClose":function onClose(){return d(!1)},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})})]})}}}]);
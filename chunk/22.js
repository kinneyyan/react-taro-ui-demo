(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var c=n(265),o=n(286),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(c.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(o.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(e);o<c.length;o++)t.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(e,c[o])&&(n[c[o]]=e[c[o]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(o,i){function fulfilled(e){try{step(c.next(e))}catch(e){i(e)}}function rejected(e){try{step(c.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var c=n(119),o=n(116),i=n(118),s=n(117),a=n(120),r=Object(i.a)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,i=e.children,l=e.className,u=e.plain,b=e.disabled,d=e.size,f=e.onClick,j=Object(c.b)(e,["type","children","className","plain","disabled","size","onClick"]),O=Object(a.a)(r,l,n,d,{"plain":u,"disabled":b});return Object(o.jsx)(s.a,Object.assign({"type":n,"className":O,"onClick":b?void 0:f,"disabled":b,"size":d},j,{"children":i}))}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Affix}));var c=n(4),o=n(119),i=n(116),s=n(118),a=n(117),r=n(120),l=n(125),u=Object(s.a)("affix"),b={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},d={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(e){var t,n=e.children,s=e.layout,f=void 0===s?"center":s,j=e.postion,O=void 0===j?"bottom":j,p=e.mode,m=e.cancelText,h=void 0===m?"取消":m,g=e.confirmText,x=void 0===g?"确定":g,C=e.confirmDisable,y=void 0!==C&&C,v=e.safeAreaInsetBottom,w=void 0===v||v,N=e.className,k=e.onCancel,P=e.onConfirm,S=Object(o.b)(e,["children","layout","postion","mode","cancelText","confirmText","confirmDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),_=Object(r.a)(u,d[O],(t={},Object(c.a)(t,b[f],!p),Object(c.a)(t,"safe-area-inset-bottom",w),t),N);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===O&&Object(i.jsx)(a.s,{"className":Object(r.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":w})}),Object(i.jsx)(a.s,Object.assign({"className":_},S,{"children":p?"singleBtn"===p?Object(i.jsx)(l.a,Object.assign({"type":"primary","className":"mode-single-btn","disabled":y,"onClick":P},{"children":x})):Object(i.jsxs)(a.s,Object.assign({"className":"mode-double-btn"},{"children":[Object(i.jsx)(l.a,Object.assign({"type":"default","onClick":k,"plain":!0},{"children":h})),Object(i.jsx)(l.a,Object.assign({"type":"primary","disabled":y,"onClick":P},{"children":x}))]})):n}))]})}},"132":function(e,t,n){"use strict";n.d(t,"a",(function(){return Modal}));var c=n(119),o=n(116),i=n(118),s=n(117),a=n(120),r=n(123),l=n(126),u=Object(i.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(e){var t=e.isOpened,n=void 0!==t&&t,i=e.title,d=e.titleSplit,f=void 0!==d&&d,j=e.postion,O=void 0===j?"bottom":j,p=e.children,m=e.actionConfig,h=e.onClose,g=e.slotRight,x=e.className,C=Object(c.b)(e,["isOpened","title","titleSplit","postion","children","actionConfig","onClose","slotRight","className"]),y=Object(a.a)(u,b[O],x);return Object(o.jsxs)(r.b,Object.assign({"className":y,"isOpened":n,"onClose":h},C,{"children":["string"==typeof i?Object(o.jsxs)(s.s,Object.assign({"className":Object(a.a)("header",{"header-split":f})},{"children":[Object(o.jsx)(s.q,Object.assign({"className":"title"},{"children":i})),Object(o.jsx)(s.q,Object.assign({"className":"slot-right"},{"children":g}))]})):i,n&&Object(o.jsx)(s.s,Object.assign({"className":Object(a.a)({"content-no-title":!i})},{"children":p})),m&&Object(o.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===O},m))]}))}},"191":function(e,t,n){},"271":function(e,t,n){"use strict";n.r(t);n(191);var c=n(132),o=n(15),i=n(117),s=n(17),a=n(116);t.default=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(s.useState)(!1),u=Object(o.a)(l,2),b=u[0],d=u[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return r(!0)},"children":"基本用法"}),Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return d(!0)},"children":'postion="top"'}),Object(a.jsx)(c.a,{"isOpened":n,"title":"标题","slotRight":Object(a.jsx)(i.s,{"style":{"color":"red"},"children":"custom"}),"onClose":function onClose(){console.log("onClose"),r(!1)},"actionConfig":{"mode":"doubleBtn","onCancel":function onCancel(){console.log("onCancel"),r(!1)},"onConfirm":function onConfirm(){console.log("onConfirm"),r(!1)}},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})}),Object(a.jsx)(c.a,{"isOpened":b,"title":"标题","postion":"top","onClose":function onClose(){return d(!1)},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})})]})}}}]);
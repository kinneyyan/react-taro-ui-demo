(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"117":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return isString})),n.d(e,"d",(function(){return selectorQueryClientRect}));var c=n(275),o=n(296),i=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function isString(t){return"string"==typeof t}function getSystemInfo(){return new Promise((function(t,e){i&&t(i),Object(c.a)().then((function(e){t(i=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(o.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"119":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(o,i){function fulfilled(t){try{step(c.next(t))}catch(t){i(t)}}function rejected(t){try{step(c.throw(t))}catch(t){i(t)}}function step(t){t.done?o(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"126":function(t,e,n){"use strict";n.d(e,"a",(function(){return Button}));var c=n(119),o=n(116),i=n(117),s=n(118),a=n(120),r=Object(i.a)("button");function Button(t){var e=t.type,n=void 0===e?"default":e,l=t.children,u=t.className,b=t.plain,d=t.disabled,f=t.size,j=void 0===f?"default":f,O=t.onClick,p=Object(c.b)(t,["type","children","className","plain","disabled","size","onClick"]),m=Object(a.a)(r,u,n,"size-".concat(j),{"plain":b,"disabled":d});return Object(o.jsx)(s.a,Object.assign({"className":m,"type":n,"onClick":d?void 0:O,"disabled":d,"size":j},p,{"children":Object(i.c)(l)?Object(o.jsx)(s.q,Object.assign({"className":"".concat(r,"__text")},{"children":l})):l}))}},"127":function(t,e,n){"use strict";n.d(e,"a",(function(){return Affix}));var c=n(4),o=n(119),i=n(116),s=n(117),a=n(118),r=n(120),l=n(126),u=Object(s.a)("affix"),b={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},d={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(t){var e,n=t.children,s=t.layout,f=void 0===s?"center":s,j=t.postion,O=t.position,p=t.mode,m=t.cancelText,h=void 0===m?"取消":m,g=t.confirmText,x=void 0===g?"确定":g,C=t.confirmDisable,y=void 0!==C&&C,v=t.cancelDisable,w=void 0!==v&&v,N=t.safeAreaInsetBottom,k=t.className,S=t.onCancel,_=t.onConfirm,P=Object(o.b)(t,["children","layout","postion","position","mode","cancelText","confirmText","confirmDisable","cancelDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),B=O||j||"bottom",I=null!=N?N:"bottom"===B,R=Object(r.a)(u,d[B],(e={},Object(c.a)(e,b[f],!p),Object(c.a)(e,"safe-area-inset-bottom",I),Object(c.a)(e,"same-width",!!p),e),k);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===B&&Object(i.jsx)(a.s,{"className":Object(r.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":I})}),Object(i.jsx)(a.s,Object.assign({"className":R},P,{"children":p?"singleBtn"===p?Object(i.jsx)(l.a,Object.assign({"type":"primary","disabled":y,"onClick":_},{"children":x})):Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(l.a,Object.assign({"type":"default","disabled":w,"onClick":S,"plain":!0},{"children":h})),Object(i.jsx)(l.a,Object.assign({"type":"primary","disabled":y,"onClick":_},{"children":x}))]}):n}))]})}},"133":function(t,e,n){"use strict";n.d(e,"a",(function(){return Modal}));var c=n(119),o=n(116),i=n(117),s=n(118),a=n(120),r=n(123),l=n(127),u=Object(i.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(t){var e=t.isOpened,n=void 0!==e&&e,d=t.title,f=t.titleSplit,j=void 0!==f&&f,O=t.postion,p=t.position,m=t.children,h=t.actionConfig,g=t.onClose,x=t.slotRight,C=t.className,y=Object(c.b)(t,["isOpened","title","titleSplit","postion","position","children","actionConfig","onClose","slotRight","className"]),v=p||O||"bottom",w=Object(a.a)(u,b[v],C);return Object(o.jsxs)(r.b,Object.assign({"className":w,"isOpened":n,"onClose":g},y,{"children":[Object(i.c)(d)?Object(o.jsxs)(s.s,Object.assign({"className":Object(a.a)("header",{"header-split":j})},{"children":[Object(o.jsx)(s.q,Object.assign({"className":"title"},{"children":d})),Object(o.jsx)(s.q,Object.assign({"className":"slot-right"},{"children":x}))]})):d,n&&Object(o.jsx)(s.s,Object.assign({"className":Object(a.a)({"content-no-title":!d})},{"children":m})),h&&Object(o.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===v},h))]}))}},"197":function(t,e,n){},"281":function(t,e,n){"use strict";n.r(e);n(197);var c=n(133),o=n(15),i=n(118),s=n(17),a=n(116);e.default=function(){var t=Object(s.useState)(!1),e=Object(o.a)(t,2),n=e[0],r=e[1],l=Object(s.useState)(!1),u=Object(o.a)(l,2),b=u[0],d=u[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return r(!0)},"children":"基本用法"}),Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return d(!0)},"children":'postion="top"'}),Object(a.jsx)(c.a,{"isOpened":n,"title":"标题","slotRight":Object(a.jsx)(i.s,{"style":{"color":"red"},"children":"custom"}),"onClose":function onClose(){console.log("onClose"),r(!1)},"actionConfig":{"mode":"doubleBtn","onCancel":function onCancel(){console.log("onCancel"),r(!1)},"onConfirm":function onConfirm(){console.log("onConfirm"),r(!1)}},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})}),Object(a.jsx)(c.a,{"isOpened":b,"title":"标题","postion":"top","onClose":function onClose(){return d(!1)},"children":Object(a.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})})]})}}}]);
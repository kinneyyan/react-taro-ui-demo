(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"119":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return uuid}));function getPrefixCls(t){return"".concat("bf","-").concat(t)}function uuid(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substring(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}},"120":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(o,i){function fulfilled(t){try{step(c.next(t))}catch(t){i(t)}}function rejected(t){try{step(c.throw(t))}catch(t){i(t)}}function step(t){t.done?o(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"124":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"142":function(t,e,n){"use strict";n.d(e,"a",(function(){return Affix}));var c=n(4),o=n(120),i=n(117),a=n(119),s=n(118),r=n(121),l=Object(a.a)("affix"),u={"left":"".concat(l,"-left"),"center":"".concat(l,"-center"),"right":"".concat(l,"-right"),"space-between":"".concat(l,"-space-between"),"space-around":"".concat(l,"-space-around")},b={"top":"".concat(l,"-top"),"bottom":"".concat(l,"-bottom")};function Affix(t){var e=t.className,n=t.children,a=t.layout,d=void 0===a?"center":a,f=t.postion,j=void 0===f?"bottom":f,O=t.mode,p=t.onCancel,m=t.onConfirm,h=t.cancelText,x=void 0===h?"取消":h,g=t.confirmText,C=void 0===g?"确定":g,v=Object(o.b)(t,["className","children","layout","postion","mode","onCancel","onConfirm","cancelText","confirmText"]),y=Object(r.a)(l,Object(c.a)({},u[d],!O),b[j],e);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===j&&Object(i.jsx)(s.s,{"className":"".concat(l,"-placeholder")}),Object(i.jsx)(s.s,Object.assign({"className":y},v,{"children":O?"singleBtn"===O?Object(i.jsx)(s.a,Object.assign({"className":Object(r.a)("mode-single-btn","button-primary"),"onClick":m},{"children":C})):Object(i.jsxs)(s.s,Object.assign({"className":"mode-double-btn"},{"children":[Object(i.jsx)(s.a,Object.assign({"className":"button-default","onClick":p},{"children":x})),Object(i.jsx)(s.a,Object.assign({"className":"button-primary","onClick":m},{"children":C}))]})):n}))]})}},"147":function(t,e,n){"use strict";n.d(e,"a",(function(){return Modal}));var c=n(120),o=n(117),i=n(119),a=n(118),s=n(121),r=n(141),l=n(142),u=Object(i.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(t){var e=t.className,n=t.isOpened,i=void 0!==n&&n,d=t.title,f=void 0===d?"":d,j=t.titleSplit,O=void 0!==j&&j,p=t.postion,m=void 0===p?"bottom":p,h=t.children,x=t.actionConfig,g=t.onCancel,C=Object(c.b)(t,["className","isOpened","title","titleSplit","postion","children","actionConfig","onCancel"]),v=Object(s.a)(u,b[m],e);return Object(o.jsxs)(r.b,Object.assign({"className":v,"isOpened":i,"onClose":g},C,{"children":[f&&Object(o.jsx)(a.s,Object.assign({"className":Object(s.a)("header",{"header-split":O})},{"children":Object(o.jsx)(a.q,Object.assign({"className":"title"},{"children":f}))})),i&&Object(o.jsx)(a.s,Object.assign({"className":Object(s.a)({"content-no-title":!f})},{"children":h})),x&&Object(o.jsx)(l.a,Object.assign({},x))]}))}},"176":function(t,e,n){},"242":function(t,e,n){"use strict";n.r(e);n(176);var c=n(147),o=n(15),i=n(118),a=n(17),s=n(117);e.default=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],r=e[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),b=u[0],d=u[1];return Object(s.jsxs)(s.Fragment,{"children":[Object(s.jsx)(i.a,{"onClick":function onClick(){return r(!0)},"children":"基本用法"}),Object(s.jsx)(i.a,{"onClick":function onClick(){return d(!0)},"children":'postion="top"'}),Object(s.jsx)(c.a,{"isOpened":n,"title":"标题","onCancel":function onCancel(){return r(!1)},"actionConfig":{"mode":"doubleBtn","onCancel":function onCancel(){console.log("onCancel"),r(!1)},"onConfirm":function onConfirm(){console.log("onConfirm")}},"children":Object(s.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})}),Object(s.jsx)(c.a,{"isOpened":b,"title":"标题","postion":"top","onCancel":function onCancel(){return d(!1)},"children":Object(s.jsx)(i.s,{"style":{"height":200},"children":"这里是内容"})})]})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"119":function(n,e,t){"use strict";t.d(e,"a",(function(){return getPrefixCls})),t.d(e,"b",(function(){return uuid}));function getPrefixCls(n){return"".concat("bf","-").concat(n)}function uuid(){for(var n=[],e=0;e<36;e++)n[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return n[14]="4",n[19]="0123456789abcdef".substring(3&n[19]|8,1),n[8]=n[13]=n[18]=n[23]="-",n.join("")}},"120":function(n,e,t){"use strict";function __rest(n,e){var t={};for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&e.indexOf(c)<0&&(t[c]=n[c]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(n);i<c.length;i++)e.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(n,c[i])&&(t[c[i]]=n[c[i]])}return t}function __awaiter(n,e,t,c){return new(t||(t=Promise))((function(i,o){function fulfilled(n){try{step(c.next(n))}catch(n){o(n)}}function rejected(n){try{step(c.throw(n))}catch(n){o(n)}}function step(n){n.done?i(n.value):function adopt(n){return n instanceof t?n:new t((function(e){e(n)}))}(n.value).then(fulfilled,rejected)}step((c=c.apply(n,e||[])).next())}))}t.d(e,"a",(function(){return __awaiter})),t.d(e,"b",(function(){return __rest}))},"124":function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c={"exports":{}}},"125":function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var c=t(120),i=t(117),o=t(121),s=t(17),a=t.n(s),l=t(141);function Iconfont(n){var e=n.type,t=n.onClick,s=n.className,a=n.style,r=Object(c.b)(n,["type","onClick","className","style"]);return Object(i.jsx)(l.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(o.a)(e,s),"customStyle":Object.assign({},a,{"fontSize":"16px"}),"onClick":t},r))}var r=a.a.memo(Iconfont)},"173":function(n,e,t){},"262":function(n,e,t){"use strict";t.r(e);t(173);var c=t(4),i=t(120),o=t(117),s=t(119),a=t(125),l=t(118),r=t(121),b=t(141),j=Object(s.a)("dialog");function Dialog(n){var e=n.isOpened,t=void 0!==e&&e,s=n.title,u=n.content,O=n.contentClass,d=n.showActions,f=void 0===d||d,p=n.actionMode,x=void 0===p?"doubleBtn":p,C=n.actionTip,h=n.styleMode,g=void 0===h?"bf":h,m=n.showCloseIcon,y=void 0===m||m,k=n.cancelText,v=void 0===k?"取消":k,w=n.confirmText,N=void 0===w?"确定":w,T=n.confirmDisable,M=void 0!==T&&T,D=n.onCancel,S=n.onConfirm,_=n.onTipClick,B=Object(i.b)(n,["isOpened","title","content","contentClass","showActions","actionMode","actionTip","styleMode","showCloseIcon","cancelText","confirmText","confirmDisable","onCancel","onConfirm","onTipClick"]),P=Object(r.a)(j,Object(c.a)({},"".concat(j,"-style"),"bf"===g));return Object(o.jsx)(l.s,Object.assign({"className":P},{"children":Object(o.jsxs)(b.e,Object.assign({"isOpened":t,"onClose":D},B,{"children":["base"===g?Object(o.jsxs)(o.Fragment,{"children":[s&&Object(o.jsx)(b.h,{"children":s}),u&&Object(o.jsx)(b.g,{"children":u}),f&&Object(o.jsxs)(b.f,{"children":["doubleBtn"===x&&Object(o.jsx)(l.a,Object.assign({"onClick":D},{"children":v})),Object(o.jsx)(l.a,Object.assign({"onClick":S},{"children":N}))]})]}):u&&Object(o.jsx)(o.Fragment,{"children":Object(o.jsxs)(b.g,{"children":[Object(o.jsxs)(l.s,Object.assign({"className":Object(r.a)("content-layout",{"contains-action":f},O)},{"children":[s&&Object(o.jsx)(l.s,Object.assign({"className":"title"},{"children":s})),Object(o.jsx)(l.s,Object.assign({"className":"content"},{"children":u})),f&&Object(o.jsx)(l.s,{"className":Object(r.a)("action-layout-placeholder",{"tip":!!C})})]})),f&&Object(o.jsxs)(l.s,Object.assign({"className":Object(r.a)("action-layout",{"tip":!!C})},{"children":[Object(o.jsxs)(l.s,Object.assign({"className":"action"},{"children":["doubleBtn"===x&&Object(o.jsx)(l.a,Object.assign({"className":"button-default","onClick":D},{"children":v})),Object(o.jsx)(l.a,Object.assign({"className":Object(r.a)("button-primary","singleBtn"===x?"button-confirm-single-width":"",M?"button-confirm-disable":""),"onClick":M?null:S},{"children":N}))]})),C&&Object(o.jsx)(l.s,Object.assign({"className":"tip","onClick":_},{"children":C}))]}))]})}),t&&"bf"===g&&y&&Object(o.jsx)(a.a,{"onClick":D,"type":"icon-guanbitanchuang","className":"close-icon"})]}))}))}var u=t(15),O=t(253),d=t(17);e.default=function(){var n=Object(d.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=e[1],i=Object(d.useState)(!1),s=Object(u.a)(i,2),a=s[0],r=s[1],b=Object(d.useState)(!1),j=Object(u.a)(b,2),f=j[0],p=j[1],x=Object(d.useState)(!1),C=Object(u.a)(x,2),h=C[0],g=C[1];return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(l.a,{"onClick":function onClick(){return c(!0)},"children":"基础用法"}),Object(o.jsx)(l.a,{"onClick":function onClick(){return g(!0)},"children":"confirmDisable=true"}),Object(o.jsx)(l.a,{"onClick":function onClick(){return r(!0)},"children":'actionMode="singleBtn"'}),Object(o.jsx)(l.a,{"onClick":function onClick(){return p(!0)},"children":'styleMode="base"'}),Object(o.jsx)(Dialog,{"actionTip":"操作提示","isOpened":t,"title":"标题","content":"内容","actionMode":"singleBtn","onCancel":function onCancel(){return c(!1)},"onTipClick":function onTipClick(){return Object(O.a)({"title":"操作提示"})}}),Object(o.jsx)(Dialog,{"confirmDisable":!0,"actionTip":"操作提示","isOpened":h,"title":"标题","content":"内容","onCancel":function onCancel(){return g(!1)},"onTipClick":function onTipClick(){return Object(O.a)({"title":"操作提示"})}}),Object(o.jsx)(Dialog,{"isOpened":a,"title":"标题","content":"内容","actionMode":"singleBtn","onCancel":function onCancel(){return r(!1)}}),Object(o.jsx)(Dialog,{"isOpened":f,"title":"标题","content":"内容","styleMode":"base","onCancel":function onCancel(){return p(!1)}})]})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return isString})),n.d(t,"d",(function(){return selectorQueryClientRect}));var c=n(274),i=n(295),s=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,t){s&&e(s),Object(c.a)().then((function(t){e(s=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(i.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(e);i<c.length;i++)t.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(e,c[i])&&(n[c[i]]=e[c[i]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(i,s){function fulfilled(e){try{step(c.next(e))}catch(e){s(e)}}function rejected(e){try{step(c.throw(e))}catch(e){s(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),i=n(116),s=n(120),o=n(17),a=n.n(o),r=n(123);function Iconfont(e){var t=e.type,n=e.onClick,o=e.className,a=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(i.jsx)(r.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(s.a)(t,o),"customStyle":Object.assign({},a,{"fontSize":"16px"}),"onClick":n},l))}var l=a.a.memo(Iconfont)},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var c=n(119),i=n(116),s=n(117),o=n(118),a=n(120),r=Object(s.a)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,l=e.children,u=e.className,b=e.plain,j=e.disabled,d=e.size,O=void 0===d?"default":d,f=e.onClick,p=Object(c.b)(e,["type","children","className","plain","disabled","size","onClick"]),h=Object(a.a)(r,u,n,"size-".concat(O),{"plain":b,"disabled":j});return Object(i.jsx)(o.a,Object.assign({"className":h,"type":n,"onClick":j?void 0:f,"disabled":j,"size":O},p,{"children":Object(s.c)(l)?Object(i.jsx)(o.q,Object.assign({"className":"".concat(r,"__text")},{"children":l})):l}))}},"193":function(e,t,n){},"306":function(e,t,n){"use strict";n.r(t);n(193);var c=n(21),i=n(4),s=n(15),o=n(119),a=n(116),r=n(117),l=n(122),u=n(118),b=n(115),j=n(120),d=n(17),O=n(123),f=n(126),p=Object(r.a)("dialog");function Dialog(e){var t=e.isOpened,n=void 0!==t&&t,h=e.title,x=e.content,m=e.contentClass,g=e.showActions,C=void 0===g||g,v=e.actionMode,y=void 0===v?"doubleBtn":v,w=e.actionTip,k=e.styleMode,N=void 0===k?"bf":k,S=e.showCloseIcon,T=void 0===S||S,_=e.cancelText,D=void 0===_?"取消":_,P=e.confirmText,I=void 0===P?"确定":P,A=e.confirmDisable,B=void 0!==A&&A,z=e.cancelDisable,F=void 0!==z&&z,M=e.showActionShadow,R=e.onCancel,E=e.onConfirm,J=e.onTipClick,Q=Object(o.b)(e,["isOpened","title","content","contentClass","showActions","actionMode","actionTip","styleMode","showCloseIcon","cancelText","confirmText","confirmDisable","cancelDisable","showActionShadow","onCancel","onConfirm","onTipClick"]),q=Object(d.useState)(!1),H=Object(s.a)(q,2),L=H[0],Y=H[1],$=Object(d.useRef)(0),G=Object(j.a)(p,Object(i.a)({},"".concat(p,"-style"),"bf"===N));Object(d.useEffect)((function(){n&&Object(b.a)((function(){!function processShadow(){return Object(o.a)(this,void 0,void 0,Object(c.a)().mark((function _callee(){var e,t,n,i,s;return Object(c.a)().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(r.b)();case 2:if(e=c.sent,t=(e||{}).windowHeight){c.next=6;break}return c.abrupt("return");case 6:return c.next=8,Object(r.d)(".at-modal--active .".concat(p,"-content"));case 8:if(n=c.sent,!(Array.isArray(n)&&n.length>0)){c.next=14;break}if(i=n[0]||{},void 0!==(s=i.height)){c.next=13;break}return c.abrupt("return");case 13:s.toFixed(1)>=.9*t&&Y(!0);case 14:case"end":return c.stop()}}),_callee)})))}()}))}),[n]);var K=Object(d.useCallback)((function(e){var t=e.detail.scrollTop;$.current>t&&Y(!0),$.current=t}),[]),U=Object(d.useCallback)((function(){Y(!1)}),[]);return Object(a.jsx)(O.e,Object.assign({"className":G,"isOpened":n,"onClose":R},Q,{"children":"base"===N?Object(a.jsxs)(a.Fragment,{"children":[h&&Object(a.jsx)(O.h,{"children":h}),x&&Object(a.jsx)(O.g,{"children":x}),C&&Object(a.jsxs)(O.f,{"children":["doubleBtn"===y&&Object(a.jsx)(u.a,Object.assign({"onClick":R},{"children":D})),Object(a.jsx)(u.a,Object.assign({"onClick":E},{"children":I}))]})]}):Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsxs)(u.s,Object.assign({"className":"".concat(p,"-content")},{"children":[h&&Object(a.jsx)(u.s,Object.assign({"className":"title-layout"},{"children":h})),Object(a.jsxs)(u.l,Object.assign({"className":"scroll-view","scrollY":!0,"onScroll":K,"onScrollToLower":U},{"children":[Object(a.jsx)(u.s,Object.assign({"className":Object(j.a)("content-layout",{"contains-action":C,"plain-text":Object(r.c)(x)},m)},{"children":x})),C&&Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(u.s,{"className":Object(j.a)("action-layout-placeholder",{"tip":!!w})}),Object(a.jsxs)(u.s,Object.assign({"className":Object(j.a)("action-layout",{"tip":!!w,"shadow":void 0!==M?M:L})},{"children":[Object(a.jsxs)(u.s,Object.assign({"className":"action"},{"children":["doubleBtn"===y&&Object(a.jsx)(f.a,Object.assign({"type":"default","disabled":F,"plain":!0,"onClick":R},{"children":D})),Object(a.jsx)(f.a,Object.assign({"type":"primary","disabled":B,"className":Object(j.a)({"button-confirm-single-width":"singleBtn"===y}),"onClick":E},{"children":I}))]})),w&&Object(a.jsx)(u.s,Object.assign({"className":"tip","onClick":J},{"children":w}))]}))]})]}))]})),T&&Object(a.jsx)(l.a,{"type":"icon-guanbitanchuang","className":"icon-close","onClick":R})]})}))}var h=n(297);t.default=function(){var e=Object(d.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(d.useState)(!1),o=Object(s.a)(i,2),r=o[0],l=o[1],b=Object(d.useState)(!1),j=Object(s.a)(b,2),O=j[0],f=j[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return c(!0)},"children":"基础用法"}),Object(a.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return f(!0)},"children":"confirmDisable=true"}),Object(a.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return l(!0)},"children":"自定义渲染 content"}),Object(a.jsx)(Dialog,{"actionTip":"操作提示","isOpened":n,"title":"提醒","content":"业务台账修改需要您的上级审批，若您正在执行拜访任务，不会造成影响。","onCancel":function onCancel(){return c(!1)},"onTipClick":function onTipClick(){return Object(h.a)({"title":"操作提示"})}}),Object(a.jsx)(Dialog,{"confirmDisable":!0,"actionTip":"操作提示","isOpened":O,"title":"标题","content":"内容","onCancel":function onCancel(){return f(!1)},"onTipClick":function onTipClick(){return Object(h.a)({"title":"操作提示"})}}),Object(a.jsx)(Dialog,{"isOpened":r,"title":"标题","content":Object(a.jsxs)(u.s,{"children":[Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"}),Object(a.jsx)(u.s,{"children":"123"})]}),"onCancel":function onCancel(){return l(!1)}})]})}}}]);
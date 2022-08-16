(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var c=n(252),i=n(270),o=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){o&&e(o),Object(c.a)().then((function(t){e(o=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(i.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(c=Object.getOwnPropertySymbols(e);i<c.length;i++)t.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(e,c[i])&&(n[c[i]]=e[c[i]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(i,o){function fulfilled(e){try{step(c.next(e))}catch(e){o(e)}}function rejected(e){try{step(c.throw(e))}catch(e){o(e)}}function step(e){e.done?i(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"123":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(120),i=n(117),o=n(121),a=n(17),s=n.n(a),r=n(124);function Iconfont(e){var t=e.type,n=e.onClick,a=e.className,s=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(i.jsx)(r.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(o.a)(t,a),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},l))}var l=s.a.memo(Iconfont)},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var c=n(120),i=n(117),o=n(119),a=n(118),s=n(121),r=Object(o.a)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,o=e.children,l=e.className,u=e.plain,b=e.disabled,j=e.size,d=e.onClick,f=Object(c.b)(e,["type","children","className","plain","disabled","size","onClick"]),O=Object(s.a)(r,l,n,j,{"plain":u,"disabled":b});return Object(i.jsx)(a.a,Object.assign({"type":n,"className":O,"onClick":b?void 0:d,"disabled":b,"size":j},f,{"children":o}))}},"182":function(e,t,n){},"282":function(e,t,n){"use strict";n.r(t);n(182);var c=n(4),i=n(15),o=n(21),a=n.n(o),s=n(120),r=n(117),l=n(119),u=n(123),b=n(118),j=n(116),d=n(121),f=n(17),O=n(124),p=n(126),h=Object(l.a)("dialog");function Dialog(e){var t=e.isOpened,n=void 0!==t&&t,o=e.title,x=e.content,g=e.contentClass,m=e.showActions,C=void 0===m||m,v=e.actionMode,y=void 0===v?"doubleBtn":v,k=e.actionTip,w=e.styleMode,N=void 0===w?"bf":w,T=e.showCloseIcon,S=void 0===T||T,_=e.cancelText,B=void 0===_?"取消":_,M=e.confirmText,D=void 0===M?"确定":M,P=e.confirmDisable,I=void 0!==P&&P,F=e.onCancel,z=e.onConfirm,A=e.onTipClick,R=Object(s.b)(e,["isOpened","title","content","contentClass","showActions","actionMode","actionTip","styleMode","showCloseIcon","cancelText","confirmText","confirmDisable","onCancel","onConfirm","onTipClick"]),E=Object(f.useState)(!1),J=Object(i.a)(E,2),Q=J[0],H=J[1],L=Object(f.useRef)(0),Y=Object(d.a)(h,Object(c.a)({},"".concat(h,"-style"),"bf"===N));Object(f.useEffect)((function(){n&&Object(j.a)((function(){!function processShadow(){return Object(s.a)(this,void 0,void 0,a.a.mark((function _callee(){var e,t,n,c,i;return a.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(l.b)();case 2:if(e=o.sent,t=(e||{}).windowHeight){o.next=6;break}return o.abrupt("return");case 6:return o.next=8,Object(l.c)(".at-modal--active .".concat(h,"-content"));case 8:if(n=o.sent,!(Array.isArray(n)&&n.length>0)){o.next=14;break}if(c=n[0]||{},void 0!==(i=c.height)){o.next=13;break}return o.abrupt("return");case 13:i.toFixed(1)>=.9*t&&H(!0);case 14:case"end":return o.stop()}}),_callee)})))}()}))}),[n]);var $=Object(f.useCallback)((function(e){var t=e.detail.scrollTop;L.current>t&&H(!0),L.current=t}),[]),q=Object(f.useCallback)((function(){H(!1)}),[]);return Object(r.jsx)(O.e,Object.assign({"className":Y,"isOpened":n,"onClose":F},R,{"children":"base"===N?Object(r.jsxs)(r.Fragment,{"children":[o&&Object(r.jsx)(O.h,{"children":o}),x&&Object(r.jsx)(O.g,{"children":x}),C&&Object(r.jsxs)(O.f,{"children":["doubleBtn"===y&&Object(r.jsx)(b.a,Object.assign({"onClick":F},{"children":B})),Object(r.jsx)(b.a,Object.assign({"onClick":z},{"children":D}))]})]}):Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsxs)(b.s,Object.assign({"className":"".concat(h,"-content")},{"children":[o&&Object(r.jsx)(b.s,Object.assign({"className":"title-layout"},{"children":o})),Object(r.jsxs)(b.l,Object.assign({"className":"scroll-view","scrollY":!0,"onScroll":$,"onScrollToLower":q},{"children":[Object(r.jsx)(b.s,Object.assign({"className":Object(d.a)("content-layout",{"contains-action":C},g)},{"children":x})),C&&Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(b.s,{"className":Object(d.a)("action-layout-placeholder",{"tip":!!k})}),Object(r.jsxs)(b.s,Object.assign({"className":Object(d.a)("action-layout",{"tip":!!k,"shadow":Q})},{"children":[Object(r.jsxs)(b.s,Object.assign({"className":"action"},{"children":["doubleBtn"===y&&Object(r.jsx)(p.a,Object.assign({"type":"default","plain":!0,"onClick":F},{"children":B})),Object(r.jsx)(p.a,Object.assign({"type":"primary","disabled":I,"className":Object(d.a)({"button-confirm-single-width":"singleBtn"===y}),"onClick":z},{"children":D}))]})),k&&Object(r.jsx)(b.s,Object.assign({"className":"tip","onClick":A},{"children":k}))]}))]})]}))]})),S&&Object(r.jsx)(u.a,{"type":"icon-guanbitanchuang","className":"icon-close","onClick":F})]})}))}var x=n(273);t.default=function(){var e=Object(f.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(f.useState)(!1),a=Object(i.a)(o,2),s=a[0],l=a[1],u=Object(f.useState)(!1),j=Object(i.a)(u,2),d=j[0],O=j[1];return Object(r.jsxs)(r.Fragment,{"children":[Object(r.jsx)(b.a,{"className":"group-title","onClick":function onClick(){return c(!0)},"children":"基础用法"}),Object(r.jsx)(b.a,{"className":"group-title","onClick":function onClick(){return O(!0)},"children":"confirmDisable=true"}),Object(r.jsx)(b.a,{"className":"group-title","onClick":function onClick(){return l(!0)},"children":'actionMode="singleBtn"'}),Object(r.jsx)(Dialog,{"actionTip":"操作提示","isOpened":n,"title":"标题","content":"内容","actionMode":"singleBtn","onCancel":function onCancel(){return c(!1)},"onTipClick":function onTipClick(){return Object(x.a)({"title":"操作提示"})}}),Object(r.jsx)(Dialog,{"confirmDisable":!0,"actionTip":"操作提示","isOpened":d,"title":"标题","content":"内容","onCancel":function onCancel(){return O(!1)},"onTipClick":function onTipClick(){return Object(x.a)({"title":"操作提示"})}}),Object(r.jsx)(Dialog,{"isOpened":s,"title":"标题","content":"内容","actionMode":"singleBtn","onCancel":function onCancel(){return l(!1)}})]})}}}]);
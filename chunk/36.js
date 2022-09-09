/*! For license information please see 36.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var o=n(268),c=n(289),r=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){r&&e(r),Object(o.a)().then((function(t){e(r=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(c.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]])}return n}function __awaiter(e,t,n,o){return new(n||(n=Promise))((function(c,r){function fulfilled(e){try{step(o.next(e))}catch(e){r(e)}}function rejected(e){try{step(o.throw(e))}catch(e){r(e)}}function step(e){e.done?c(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((o=o.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"120":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(7),c=n(121);!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=Object(o.a)(c);if("string"===r||"number"===r)e.push(c);else if(Array.isArray(c)){if(c.length){var i=classNames.apply(null,c);i&&e.push(i)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var a in c)t.call(c,a)&&c[a]&&e.push(a);else e.push(c.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(c.a);var r=c.a.exports},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={"exports":{}}},"216":function(e,t,n){},"310":function(e,t,n){"use strict";n.r(t);n(216);var o=n(15),c=n(119),r=n(116),i=n(118),a=n(117),s=n(23),l=n(120),u=n(17),f=Object(i.a)("swipe-action");function SwipeAction(e){var t=e.height,n=void 0===t?120:t,i=e.content,d=e.operation,b=e.operationWidth,h=e.onContentClick,p=e.disabled,j=void 0!==p&&p,O=e.autoClose,m=void 0!==O&&O,g=e.renderOperationItem,v=e.isOpened,y=void 0!==v&&v,x=e.onOpenChange,C=e.className,w=Object(c.b)(e,["height","content","operation","operationWidth","onContentClick","disabled","autoClose","renderOperationItem","isOpened","onOpenChange","className"]),k=Object(u.useRef)(),N=Object(u.useState)(!1),S=Object(o.a)(N,2),T=S[0],P=S[1];Object(u.useEffect)((function(){y!==T&&x&&x(T)}),[T,x]),Object(u.useEffect)((function(){P(y)}),[y]);var A=function handleTouchMove(e){var t,n;if(!j){var o=null===(t=k.current)||void 0===t?void 0:t.startX,c=null===(n=k.current)||void 0===n?void 0:n.startY,r=e.changedTouches[0].clientX,i=function calcAngle(e,t){var n=t.x-e.x,o=t.y-e.y;return 360*Math.atan(o/n)/(2*Math.PI)}({"x":o,"y":c},{"x":r,"y":e.changedTouches[0].clientY});Math.abs(i)>30||P(!(r>o))}},M=Object(u.useMemo)((function(){return s.a.pxTransform(b)}),[b]),_=Object(u.useMemo)((function(){return s.a.pxTransform(n)}),[n]),I=Object(l.a)(f,C);return Object(r.jsx)(a.s,Object.assign({"className":I},w,{"children":Object(r.jsx)(a.f,Object.assign({"className":"movable-area","style":{"height":_}},{"children":Object(r.jsx)(a.g,Object.assign({"direction":"horizontal","className":"movable-view"},{"children":Object(r.jsxs)(a.s,Object.assign({"className":Object(l.a)("movable-item",{"touch-move-active":T}),"onTouchStart":function onTouchStart(e){return function handleTouchStart(e){j||(k.current={"startX":e.changedTouches[0].clientX,"startY":e.changedTouches[0].clientY})}(e)},"onTouchMove":function onTouchMove(e){return A(e)}},{"children":[Object(r.jsx)(a.s,Object.assign({"className":"content","onClick":h,"style":{"transform":"translateX(".concat(M,")"),"marginLeft":"-".concat(M)}},{"children":i})),Object(r.jsx)(a.s,Object.assign({"className":"operation","style":{"width":"".concat(M),"transform":"translateX(".concat(M,")")}},{"children":Array.isArray(d)&&d.map((function(e,t){var n=e.text,o=e.onClick,c=e.style;return Object(r.jsx)(a.s,Object.assign({"className":"operation-item-wrap","onClick":function onClick(){o&&o(),m&&P(!1)}},{"children":g?g(e):Object(r.jsx)(a.s,Object.assign({"className":"operation-item","style":c},{"children":n}),t)}),t)}))}))]}))}))}))}))}var d=n(12);t.default=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(u.useState)([{"id":1,"name":"3333"},{"id":2,"name":"4444"},{"id":3,"name":"5555"},{"id":4,"name":"6666"}]),s=Object(o.a)(i,2),l=s[0],f=s[1];return Object(r.jsx)(r.Fragment,{"children":Object(r.jsxs)(a.s,{"style":{"display":"flex","flexDirection":"column"},"children":[l.map((function(e,t){return Object(r.jsx)(a.s,{"children":Object(r.jsx)(SwipeAction,{"content":Object(r.jsxs)(a.s,{"children":[e.id,"~",e.name]}),"operation":[{"text":"删除","key":e.name+"1","style":{"color":"#ffffff","backgroundColor":"#FD3C42"},"onClick":function onClick(){f((function(e){var n=Object(d.a)(e);return n.splice(t,1),n}))}},{"text":"预览","key":e.name+"2","style":"color: #ffffff;background-color: #85673d"}],"operationWidth":270,"onContentClick":function onContentClick(){return console.log(22222222)}},e.name)},e.name)})),Object(r.jsx)(SwipeAction,{"content":Object(r.jsx)(a.s,{"children":"这是奥迪姐我奥is的及附加爱睡觉"}),"height":640,"operation":[{"text":"删除","style":{"color":"#ffffff","backgroundColor":"#FD3C42"},"onClick":function onClick(){return console.log(1111111)}},{"text":"预览","style":{"color":"#ffffff","backgroundColor":"#85673d"}}],"operationWidth":350,"onContentClick":function onContentClick(){return console.log(22222222)},"autoClose":!0,"isOpened":n,"onOpenChange":function onOpenChange(e){console.log("BfSwipeAction ====> ",e),c(e)}},6666)]})})}}}]);
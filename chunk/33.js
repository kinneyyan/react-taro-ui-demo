/*! For license information please see 33.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"119":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return selectorQueryClientRect})),n.d(e,"d",(function(){return uuid}));var o=n(256),c=n(275),r=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function uuid(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substring(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}function getSystemInfo(){return new Promise((function(t,e){r&&t(r),Object(o.a)().then((function(e){t(r=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(c.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"120":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(t);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(t,o[c])&&(n[o[c]]=t[o[c]])}return n}function __awaiter(t,e,n,o){return new(n||(n=Promise))((function(c,r){function fulfilled(t){try{step(o.next(t))}catch(t){r(t)}}function rejected(t){try{step(o.throw(t))}catch(t){r(t)}}function step(t){t.done?c(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(8),c=n(122);!function(t){!function(){var e={}.hasOwnProperty;function classNames(){for(var t=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=Object(o.a)(c);if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var i=classNames.apply(null,c);i&&t.push(i)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var a in c)e.call(c,a)&&c[a]&&t.push(a);else t.push(c.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}(c.a);var r=c.a.exports},"122":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={"exports":{}}},"207":function(t,e,n){},"296":function(t,e,n){"use strict";n.r(e);n(207);var o=n(15),c=n(120),r=n(117),i=n(119),a=n(118),s=n(23),u=n(121),l=n(17),f=Object(i.a)("swipe-action");function SwipeAction(t){var e=t.height,n=void 0===e?120:e,i=t.content,d=t.operation,b=t.operationWidth,h=t.onContentClick,p=t.disabled,j=void 0!==p&&p,O=t.autoClose,g=void 0!==O&&O,m=t.renderOperationItem,v=t.isOpened,x=void 0!==v&&v,y=t.onOpenChange,C=t.className,w=Object(c.b)(t,["height","content","operation","operationWidth","onContentClick","disabled","autoClose","renderOperationItem","isOpened","onOpenChange","className"]),k=Object(l.useRef)(),N=Object(l.useState)(!1),S=Object(o.a)(N,2),T=S[0],M=S[1];Object(l.useEffect)((function(){x!==T&&y&&y(T)}),[T,y]),Object(l.useEffect)((function(){M(x)}),[x]);var P=function handleTouchMove(t){var e,n;if(!j){var o=null===(e=k.current)||void 0===e?void 0:e.startX,c=null===(n=k.current)||void 0===n?void 0:n.startY,r=t.changedTouches[0].clientX,i=function calcAngle(t,e){var n=e.x-t.x,o=e.y-t.y;return 360*Math.atan(o/n)/(2*Math.PI)}({"x":o,"y":c},{"x":r,"y":t.changedTouches[0].clientY});Math.abs(i)>30||M(!(r>o))}},A=Object(l.useMemo)((function(){return s.a.pxTransform(b)}),[b]),_=Object(l.useMemo)((function(){return s.a.pxTransform(n)}),[n]),I=Object(u.a)(f,C);return Object(r.jsx)(a.s,Object.assign({"className":I},w,{"children":Object(r.jsx)(a.f,Object.assign({"className":"movable-area","style":{"height":_}},{"children":Object(r.jsx)(a.g,Object.assign({"direction":"horizontal","className":"movable-view"},{"children":Object(r.jsxs)(a.s,Object.assign({"className":Object(u.a)("movable-item",{"touch-move-active":T}),"onTouchStart":function onTouchStart(t){return function handleTouchStart(t){j||(k.current={"startX":t.changedTouches[0].clientX,"startY":t.changedTouches[0].clientY})}(t)},"onTouchMove":function onTouchMove(t){return P(t)}},{"children":[Object(r.jsx)(a.s,Object.assign({"className":"content","onClick":h,"style":{"transform":"translateX(".concat(A,")"),"marginLeft":"-".concat(A)}},{"children":i})),Object(r.jsx)(a.s,Object.assign({"className":"operation","style":{"width":"".concat(A),"transform":"translateX(".concat(A,")")}},{"children":Array.isArray(d)&&d.map((function(t,e){var n=t.text,o=t.onClick,c=t.style;return Object(r.jsx)(a.s,Object.assign({"className":"operation-item-wrap","onClick":function onClick(){o&&o(),g&&M(!1)}},{"children":m?m(t):Object(r.jsx)(a.s,Object.assign({"className":"operation-item","style":c},{"children":n}),e)}),e)}))}))]}))}))}))}))}e.default=function(){var t=Object(l.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(r.jsx)(r.Fragment,{"children":Object(r.jsxs)(a.s,{"style":{"display":"flex","flexDirection":"column"},"children":[Object(r.jsx)(SwipeAction,{"content":Object(r.jsx)(a.s,{"children":"这是奥迪姐我奥is的及附加爱睡觉"}),"operation":[{"text":"删除","style":{"color":"#ffffff","backgroundColor":"#FD3C42"},"onClick":function onClick(){return console.log(1111111)}},{"text":"预览","style":"color: #ffffff;background-color: #85673d"}],"operationWidth":270,"onContentClick":function onContentClick(){return console.log(22222222)},"autoClose":!0}),Object(r.jsx)(SwipeAction,{"content":Object(r.jsx)(a.s,{"children":"这是奥迪姐我奥is的及附加爱睡觉"}),"height":640,"operation":[{"text":"删除","style":{"color":"#ffffff","backgroundColor":"#FD3C42"},"onClick":function onClick(){return console.log(1111111)}},{"text":"预览","style":{"color":"#ffffff","backgroundColor":"#85673d"}}],"operationWidth":350,"onContentClick":function onContentClick(){return console.log(22222222)},"autoClose":!0,"isOpened":n,"onOpenChange":function onOpenChange(t){console.log("BfSwipeAction ====> ",t),c(t)}})]})})}}}]);
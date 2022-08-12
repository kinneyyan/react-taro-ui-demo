/*! For license information please see 32.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"119":function(n,e,t){"use strict";t.d(e,"a",(function(){return getPrefixCls})),t.d(e,"b",(function(){return getSystemInfo})),t.d(e,"c",(function(){return selectorQueryClientRect})),t.d(e,"d",(function(){return uuid}));var c=t(246),a=t(262),l=null;function getPrefixCls(n){return"".concat("bf","-").concat(n)}function uuid(){for(var n=[],e=0;e<36;e++)n[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return n[14]="4",n[19]="0123456789abcdef".substring(3&n[19]|8,1),n[8]=n[13]=n[18]=n[23]="-",n.join("")}function getSystemInfo(){return new Promise((function(n,e){l&&n(l),Object(c.a)().then((function(e){n(l=e)})).catch((function(n){return e(n)}))}))}function selectorQueryClientRect(n){return new Promise((function(e){Object(a.a)().select(n).boundingClientRect().exec((function(n){e(n)}))}))}},"121":function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var c=t(8),a=t(122);!function(n){!function(){var e={}.hasOwnProperty;function classNames(){for(var n=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=Object(c.a)(a);if("string"===l||"number"===l)n.push(a);else if(Array.isArray(a)){if(a.length){var s=classNames.apply(null,a);s&&n.push(s)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var i in a)e.call(a,i)&&a[i]&&n.push(i);else n.push(a.toString())}}return n.join(" ")}n.exports?(classNames.default=classNames,n.exports=classNames):window.classNames=classNames}()}(a.a);var l=a.a.exports},"122":function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c={"exports":{}}},"172":function(n,e,t){},"261":function(n,e,t){"use strict";t.r(e);t(172);var c=t(15),a=t(117),l=t(17);var s=t(119),i=t(118),r=t(116),o=t(121),u=new(t(23).a.Events);function trigger(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),c=1;c<e;c++)t[c-1]=arguments[c];return u.trigger.apply(u,[n].concat(t))}function on(n,e){return u.on(n,e)}function off(n,e){return u.off(n,e)}var f=function open(n){trigger("open",Object.assign(Object.assign({},n),{"isOpened":!0}))},j=function close(){trigger("close")},b=Object(s.a)("image-preview"),g=function ImagePreview(n){var e=Object(l.useState)({"isOpened":!1}),t=Object(c.a)(e,2),s=t[0],u=t[1],f=s.isOpened,j=s.imageUrls,g=void 0===j?[]:j,O=s.current,h=void 0===O?0:O,p=Object(l.useState)((function(){if(null==g?void 0:g.length)return g[h]})),v=Object(c.a)(p,2),d=v[0],w=v[1],m=Object(l.useState)(1),x=Object(c.a)(m,2),C=x[0],k=x[1],y=Object(l.useState)({"x":0,"y":0}),N=Object(c.a)(y,2),S=N[0],q=N[1],P=function useDoubleClick(n){var e=n.onDoubleClick,t=n.onSingleClick,c=n.interval,a=void 0===c?300:c,s=Object(l.useRef)(0),i=Object(l.useRef)(null);return{"catchClick":Object(l.useCallback)((function(n){var c=s.current,l=n.timeStamp;l-c<a?(clearTimeout(i.current),e(n)):i.current=setTimeout((function(){null==t||t(n)}),a),s.current=l}),[])}}({"onDoubleClick":function handleOnImageDoubleClick(){k((function(n){return 1===n?3:1})),q((function(n){return n.x?{"x":0,"y":0}:{"x":"50%","y":"50%"}}))}}).catchClick;Object(l.useEffect)((function(){u((function(e){return Object.assign(Object.assign({},e),n)}))}),[n]),Object(l.useEffect)((function(){k(1),q({"x":0,"y":0})}),[s.current]),Object(l.useEffect)((function(){if(void 0!==n.isOpened)return function(){return null};return on("open",(function openFn(n){u((function(e){return Object.assign(Object.assign({},e),n)}))})),on("close",(function closeFn(){I()})),function(){off("open"),off("close")}}),[]);var z=Object(l.useMemo)((function(){return(null==g?void 0:g.length)>1||!1}),[g]),I=Object(l.useCallback)((function(){u((function(n){return Object.assign(Object.assign({},n),{"isOpened":!1})})),Object(r.a)((function(){var e;null===(e=null==n?void 0:n.onClose)||void 0===e||e.call(n)}))}),[]),M=function handleOnClickImage(n){n.stopPropagation(),P(n)};var A=function handleOnScale(n){k(n.detail.scale)};return Object(a.jsxs)(i.s,Object.assign({"className":Object(o.a)(b,{"show":f}),"onClick":function handleOnClickMask(){I()}},{"children":[Object(a.jsxs)(i.s,Object.assign({"className":"".concat(b,"-image-container")},{"children":[Object(a.jsx)(i.n,Object.assign({"className":"swiper","current":h,"disableTouch":C>1,"onChange":function handleOnSwiperChange(n){var e=n.detail.current;u((function(n){return Object.assign(Object.assign({},n),{"current":e})})),w(g[e])}},{"children":g.map((function(n,e){return Object(a.jsx)(i.o,Object.assign({"className":"swiper-item"},{"children":Object(a.jsx)(i.f,Object.assign({"className":"movable-area","scaleArea":!0},{"children":Object(a.jsx)(i.g,Object.assign({"className":"movable-view","direction":C>1?"all":"none","x":S.x,"y":S.y,"scale":!0,"scaleValue":C,"scaleMin":1,"scaleMax":3,"onScale":A},{"children":Object(a.jsx)(i.c,{"className":"image-item","src":n,"lazyLoad":!0,"mode":"aspectFit","onClick":M})}))}))}),e)}))})),z&&Object(a.jsxs)(i.s,Object.assign({"className":"indicator"},{"children":[h+1,"/",g.length]}))]})),Object(a.jsx)(i.l,Object.assign({"className":"".concat(b,"-thumb-scroll-view"),"scrollX":!0,"scrollWithAnimation":!0,"scrollIntoView":d},{"children":z&&g.map((function(n,e){return Object(a.jsx)(i.s,Object.assign({"id":n,"onClick":function onClick(n){return n.stopPropagation()}},{"children":Object(a.jsx)(i.c,{"className":Object(o.a)("thumb-item",{"current":h===e}),"src":n,"lazyLoad":!0,"mode":"aspectFill","onClick":function onClick(n){return function handleOnClickThumb(n,e){n.stopPropagation(),u((function(n){return Object.assign(Object.assign({},n),{"current":e})}))}(n,e)}})}),e)}))}))]}))};g.open=function(n){f(n)},g.close=function(){j()};e.default=function(){var n=Object(l.useState)(!1),e=Object(c.a)(n,2),t=e[0],s=e[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){g.open({"imageUrls":["https://w.wallhaven.cc/full/9m/wallhaven-9myy38.png","https://w.wallhaven.cc/full/q2/wallhaven-q2xerq.jpg","https://w.wallhaven.cc/full/g7/wallhaven-g7e2r7.png","https://w.wallhaven.cc/full/3z/wallhaven-3z1r1d.png","https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"current":1})},"children":"预览（函数调用，小程序不支持）"}),Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return s(!0)},"children":"预览"}),Object(a.jsx)(g,{"isOpened":t,"imageUrls":["https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"onClose":function onClose(){return s(!1)}}),Object(a.jsx)(g,{})]})}}}]);
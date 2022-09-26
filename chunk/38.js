/*! For license information please see 38.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"118":function(n,e,t){"use strict";t.d(e,"a",(function(){return getPrefixCls})),t.d(e,"b",(function(){return getSystemInfo})),t.d(e,"c",(function(){return selectorQueryClientRect}));var c=t(271),a=t(292),s=null;function getPrefixCls(n){return"".concat("bf","-").concat(n)}function getSystemInfo(){return new Promise((function(n,e){s&&n(s),Object(c.a)().then((function(e){n(s=e)})).catch((function(n){return e(n)}))}))}function selectorQueryClientRect(n){return new Promise((function(e){Object(a.a)().select(n).boundingClientRect().exec((function(n){e(n)}))}))}},"119":function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var c=t(7),a=t(121);!function(n){!function(){var e={}.hasOwnProperty;function classNames(){for(var n=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=Object(c.a)(a);if("string"===s||"number"===s)n.push(a);else if(Array.isArray(a)){if(a.length){var l=classNames.apply(null,a);l&&n.push(l)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var i in a)e.call(a,i)&&a[i]&&n.push(i);else n.push(a.toString())}}return n.join(" ")}n.exports?(classNames.default=classNames,n.exports=classNames):window.classNames=classNames}()}(a.a);var s=a.a.exports},"121":function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c={"exports":{}}},"183":function(n,e,t){},"291":function(n,e,t){"use strict";t.r(e);t(183);var c=t(15),a=t(116),s=t(17);var l=t(118),i=t(117),r=t(115),o=t(294),u=t(119),f=new(t(23).a.Events);function trigger(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),c=1;c<e;c++)t[c-1]=arguments[c];return f.trigger.apply(f,[n].concat(t))}function on(n,e){return f.on(n,e)}function off(n,e){return f.off(n,e)}var j=function open(n){trigger("open",Object.assign(Object.assign({},n),{"isOpened":!0}))},b=function close(){trigger("close")},g=Object(l.a)("image-preview"),O=function ImagePreview(n){var e=Object(s.useState)({"isOpened":!1}),t=Object(c.a)(e,2),l=t[0],f=t[1],j=l.isOpened,b=l.imageUrls,O=void 0===b?[]:b,h=l.current,p=void 0===h?0:h,v=Object(s.useState)((function(){if(null==O?void 0:O.length)return O[p]})),d=Object(c.a)(v,2),w=d[0],m=d[1],x=Object(s.useState)(1),C=Object(c.a)(x,2),k=C[0],y=C[1],N=Object(s.useState)({"x":0,"y":0}),S=Object(c.a)(N,2),q=S[0],P=S[1],I=n.canDownload,z=void 0===I||I,A=function useDoubleClick(n){var e=n.onDoubleClick,t=n.onSingleClick,c=n.interval,a=void 0===c?300:c,l=Object(s.useRef)(0),i=Object(s.useRef)(null);return{"catchClick":Object(s.useCallback)((function(n){var c=l.current,s=n.timeStamp;s-c<a?(clearTimeout(i.current),e(n)):i.current=setTimeout((function(){null==t||t(n)}),a),l.current=s}),[a,e,t])}}({"onDoubleClick":function handleOnImageDoubleClick(){y((function(n){return 1===n?3:1})),P((function(n){return n.x?{"x":0,"y":0}:{"x":"50%","y":"50%"}}))}}).catchClick;Object(s.useEffect)((function(){f((function(e){return Object.assign(Object.assign({},e),n)}))}),[n]),Object(s.useEffect)((function(){y(1),P({"x":0,"y":0})}),[l.current]),Object(s.useEffect)((function(){if(void 0!==n.isOpened)return function(){return null};return on("open",(function openFn(n){f((function(e){return Object.assign(Object.assign({},e),n)}))})),on("close",(function closeFn(){D()})),function(){off("open"),off("close")}}),[]);var T=Object(s.useMemo)((function(){return(null==O?void 0:O.length)>1||!1}),[O]),D=Object(s.useCallback)((function(){f((function(n){return Object.assign(Object.assign({},n),{"isOpened":!1})})),Object(r.a)((function(){var e;null===(e=null==n?void 0:n.onClose)||void 0===e||e.call(n)}))}),[]),F=function handleOnClickImage(n){n.stopPropagation(),A(n)};var R=function handleOnScale(n){y(n.detail.scale)};return Object(a.jsxs)(i.s,Object.assign({"className":Object(u.a)(g,{"show":j}),"onClick":function handleOnClickMask(){D()}},{"children":[Object(a.jsxs)(i.s,Object.assign({"className":"".concat(g,"-image-container")},{"children":[Object(a.jsx)(i.n,Object.assign({"className":"swiper","current":p,"disableTouch":k>1,"onChange":function handleOnSwiperChange(n){var e=n.detail.current;f((function(n){return Object.assign(Object.assign({},n),{"current":e})})),m(O[e])}},{"children":O.map((function(n,e){return Object(a.jsx)(i.o,Object.assign({"className":"swiper-item"},{"children":Object(a.jsx)(i.f,Object.assign({"className":"movable-area","scaleArea":!0},{"children":Object(a.jsx)(i.g,Object.assign({"className":"movable-view","direction":k>1?"all":"none","x":q.x,"y":q.y,"scale":!0,"scaleValue":k,"scaleMin":1,"scaleMax":3,"onScale":R},{"children":Object(a.jsx)(i.c,{"className":"image-item","src":n,"lazyLoad":!0,"mode":"aspectFit","onClick":F,"onLongTap":z?function(){return function handleOnLongPressImage(n){dd.showActionSheet({"items":["保存图片"],"cancelButtonText":"取消","success":function success(e){0===e.index&&dd.saveImage({"url":n,"success":function success(){Object(o.a)({"title":"已保存到相册","icon":"none"})}})}})}(n)}:void 0})}))}))}),e)}))})),T&&Object(a.jsxs)(i.s,Object.assign({"className":"indicator"},{"children":[p+1,"/",O.length]}))]})),Object(a.jsx)(i.l,Object.assign({"className":"".concat(g,"-thumb-scroll-view"),"scrollX":!0,"scrollWithAnimation":!0,"scrollIntoView":w},{"children":T&&O.map((function(n,e){return Object(a.jsx)(i.s,Object.assign({"id":n,"onClick":function onClick(n){return n.stopPropagation()}},{"children":Object(a.jsx)(i.c,{"className":Object(u.a)("thumb-item",{"current":p===e}),"src":n,"lazyLoad":!0,"mode":"aspectFill","onClick":function onClick(n){return function handleOnClickThumb(n,e){n.stopPropagation(),f((function(n){return Object.assign(Object.assign({},n),{"current":e})}))}(n,e)}})}),e)}))}))]}))};O.open=function(n){j(n)},O.close=function(){b()};e.default=function(){var n=Object(s.useState)(!1),e=Object(c.a)(n,2),t=e[0],l=e[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){O.open({"imageUrls":["https://w.wallhaven.cc/full/9m/wallhaven-9myy38.png","https://w.wallhaven.cc/full/q2/wallhaven-q2xerq.jpg","https://w.wallhaven.cc/full/g7/wallhaven-g7e2r7.png","https://w.wallhaven.cc/full/3z/wallhaven-3z1r1d.png","https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"current":1})},"children":"预览（函数调用，小程序不支持）"}),Object(a.jsx)(i.a,{"className":"group-title","onClick":function onClick(){return l(!0)},"children":"预览"}),Object(a.jsx)(O,{"isOpened":t,"imageUrls":["https://w.wallhaven.cc/full/wq/wallhaven-wq7m77.jpg","https://w.wallhaven.cc/full/v9/wallhaven-v9lpxp.jpg","https://w.wallhaven.cc/full/q2/wallhaven-q2qzw7.jpg"],"onClose":function onClose(){return l(!1)}}),Object(a.jsx)(O,{})]})}}}]);
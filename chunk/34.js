(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var r=n(258),c=n(278),s=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){s&&e(s),Object(r.a)().then((function(t){e(s=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(c.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(c,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r.throw(e))}catch(e){s(e)}}function step(e){e.done?c(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"200":function(e,t,n){},"201":function(e,t,n){},"279":function(e,t,n){"use strict";n.r(t);n(200);var r=n(21),c=n(15),s=n(119),o=n(116),a=n(118),i=n(117),u=n(17);var l=n(12);n(278);function scrollOffset(e){return new Promise((function(t){var n=e||document.documentElement||document.body;return t({"scrollLeft":n.scrollLeft,"scrollTop":n.scrollTop})}))}var f=["pulling","loosing","success"],b=function sleep(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},d=Object(a.a)("power-scroll-view");function PowerScrollView(e){var t,n,a=this,j=e.minTriggerTopDistance,h=void 0===j?150:j,p=e.headHeight,O=void 0===p?50:p,v=e.successDuration,g=void 0===v?500:v,x=e.animationDuration,m=void 0===x?300:x,w=e.pullDistance,T=void 0===w?e.refresherThreshold||e.pullDistance:w,_=e.renderHead,k=e.successText,S=void 0===k?"刷新成功":k,y=e.children,L=e.loadingText,C=void 0===L?"加载中...":L,R=e.loosingText,M=void 0===R?"释放即可刷新...":R,P=e.pullingText,D=void 0===P?"下拉即可刷新...":P,N=e.onScroll,Y=e.scrollTop,E=e.finishedText,H=void 0===E?"没有更多了":E,$=e.renderFinished,z=e.renderLoading,F=e.finished,X=e.renderError,V=e.errorText,U=e.total,q=e.current,I=e.pageSize,A=void 0===I?20:I,J=(e.upperThreshold,e.lowerThreshold),Q=void 0===J?e.lowerThreshold||250:J,B=e.refresherEnabled,G=void 0===B?null===(t=e.refresherEnabled)||void 0===t||t:B,K=e.onScrollToLower,W=void 0===K?e.onScrollToLower:K,Z=e.onScrollToUpper,ee=void 0===Z?e.onScrollToUpper:Z,te=e.scrollY,ne=void 0===te?null===(n=e.scrollY)||void 0===n||n:te,re=e.className,ce=e.header,se=e.footer,oe=Object(s.b)(e,["minTriggerTopDistance","headHeight","successDuration","animationDuration","pullDistance","renderHead","successText","children","loadingText","loosingText","pullingText","onScroll","scrollTop","finishedText","renderFinished","renderLoading","finished","renderError","errorText","total","current","pageSize","upperThreshold","lowerThreshold","refresherEnabled","onScrollToLower","onScrollToUpper","scrollY","className","header","footer"]),ae=Object(u.useRef)(0),ie=Object(u.useRef)(!0),ue=Object(u.useRef)({"page":0,"pageSize":A}),le=Object(u.useState)(0),fe=Object(c.a)(le,2),be=fe[0],de=fe[1],je=Object(u.useState)(0),he=Object(c.a)(je,2),pe=he[0],Oe=he[1],ve=Object(u.useState)(!1),ge=Object(c.a)(ve,2),xe=ge[0],me=ge[1],we=Object(u.useState)(F||!1),Te=Object(c.a)(we,2),_e=Te[0],ke=Te[1],Se=Object(u.useState)("normal"),ye=Object(c.a)(Se,2),Le=ye[0],Ce=ye[1],Re=null!=q?q:Array.from(y).length,Me=function useTouch(){var e=Object(u.useRef)(0),t=Object(u.useRef)(0),n=Object(u.useRef)(0),r=Object(u.useRef)(0),c=Object(u.useRef)(0),s=Object(u.useRef)(0),o=Object(u.useRef)(""),a=function reset(){n.current=0,r.current=0,c.current=0,s.current=0,o.current=""};return{"move":function move(a){var i=a.touches[0];n.current=i.clientX<0?0:i.clientX-e.current,r.current=i.clientY-t.current,c.current=Math.abs(n.current),s.current=Math.abs(r.current),o.current||(o.current=function getDirection(e,t){return e>t&&e>10?"horizontal":t>e&&t>10?"vertical":""}(c.current,s.current))},"start":function start(n){a(),e.current=n.touches[0].clientX,t.current=n.touches[0].clientY},"reset":a,"startX":e,"startY":t,"deltaX":n,"deltaY":r,"offsetX":c,"offsetY":s,"direction":o,"isVertical":function isVertical(){return"vertical"===o.current},"isHorizontal":function isHorizontal(){return"horizontal"===o.current}}}(),Pe=Object(u.useRef)(),De=Object(u.useRef)(!1),Ne=Object(u.useRef)(!1),Ye=Object(u.useRef)(0);Object(u.useEffect)((function(){var e=ue.current.pageSize;if(Re<=e&&(ue.current.page=1,ke(!1)),void 0===F){if(void 0===U){var t=Re-Ye.current;return(0===Re||0!==Ye.current&&t>-1&&t<ue.current.pageSize)&&ke(!0),void(Ye.current=Re)}ke(Re>=U)}else ke(F)}),[U,Re,F]);var Ee=Object(u.useCallback)((function(){return"loading"!==Le&&"success"!==Le&&G&&!De.current}),[G,Le]),He=Object(u.useCallback)((function(e){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee(){return Object(r.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:ie.current&&(Oe(0),Me.start(e));case 1:case"end":return t.stop()}}),_callee)})))}),[Me]),$e=Object(u.useMemo)((function(){return{"transitionDuration":"".concat(pe,"ms"),"transform":be?"translate3d(0,".concat(be,"px, 0)"):""}}),[be,pe]),ze=Object(u.useCallback)((function(){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee2(){var e,t;return Object(r.a)().wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,scrollOffset(Pe.current);case 2:return e=n.sent,t=e.scrollTop,n.abrupt("return",t);case 5:case"end":return n.stop()}}),_callee2)})))}),[]),Fe=Object(u.useCallback)((function(e){var t=+(T||O);return e>t&&(e=e<2*t?t+(e-t)/2:1.5*t+(e-2*t)/4),Math.round(e)}),[O,T]),Xe=Object(u.useCallback)((function(e,t){var n=+(T||O);de(e),t?(Ce("loading"),De.current=!0):Ce(0===e?"normal":e<n?"pulling":"loosing")}),[O,T]),Ve=Object(u.useCallback)((function(){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee3(){return Object(r.a)().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return Ce("success"),e.next=3,b(+g);case 3:case"end":return e.stop()}}),_callee3)})))}),[g]),Ue=Object(u.useCallback)((function(){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee4(){var e;return Object(r.a)().wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Ne.current=!1,Xe(+O,!0),me(!1),ue.current.page=1,e=void 0===U?0:ue.current,t.next=8,null==ee?void 0:ee(e);case 8:if(Oe(+m),!S&&!(null==_?void 0:_({"status":"success","distance":be}))){t.next=12;break}return t.next=12,Ve().catch((function(e){return null}));case 12:return t.prev=12,Xe(0,!1),De.current=!1,t.finish(12);case 16:case"end":return t.stop()}}),_callee4,null,[[0,,12,16]])})))}),[m,be,O,ee,_,Xe,Ve,S,U]),qe=Object(u.useCallback)((function(e){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee5(){var t;return Object(r.a)().wrap((function _callee5$(n){for(;;)switch(n.prev=n.next){case 0:if(!Ee()){n.next=6;break}return n.next=3,ze().catch((function(e){return 0}));case 3:t=n.sent,ae.current=t,He(e);case 6:case"end":return n.stop()}}),_callee5)})))}),[He,ze,Ee]),Ie=Object(u.useCallback)((function(e){if(Ee()&&ae.current<h){var t=Me.deltaY;Me.move(e),ie.current&&t.current>=0&&Me.isVertical()&&(!function preventDefault(e,t){e.preventDefault(),t&&function stopPropagation(e){e.stopPropagation()}(e)}(e,!0),Xe(Fe(t.current)))}}),[Fe,Ee,h,Xe,Me]),Ae=Object(u.useCallback)((function(){ie.current&&Me.deltaY.current&&Ee()?(Oe(+m),"loosing"===Le?Ue():Xe(0)):Xe(0)}),[Ue,Ee,m,Xe,Le,Me.deltaY]),Je=Object(u.useMemo)((function(){return function debounce(e,t){var n=0,r=null,c=function ret(){for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];r=s,clearTimeout(n),n=setTimeout((function(){r=null,e.apply(void 0,s)}),t)};return c.flush=function(){if(clearTimeout(n),r){var t=r;return r=null,e.apply(void 0,Object(l.a)(t))}},c}((function _getScrollTop(){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee6(){var e;return Object(r.a)().wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ze();case 2:return e=t.sent,ie.current=e<=0,t.abrupt("return",e);case 5:case"end":return t.stop()}}),_callee6)})))}),200)}),[ze]),Qe=Object(u.useCallback)((function(e){null==N||N(e),Je()}),[Je,N]),Be=Object(u.useCallback)((function(){return _e||"normal"!==Le||De.current||Ne.current}),[_e,Le]),Ge=Object(u.useCallback)((function(){return Object(s.a)(a,void 0,void 0,Object(r.a)().mark((function _callee7(){var e;return Object(r.a)().wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:if(!Be()){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,De.current=!0,ue.current.page+=1,e=void 0===U?Re:ue.current,t.next=8,null==W?void 0:W(e);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),ue.current.page-=1,Ne.current=!0,me(!0);case 15:return t.prev=15,De.current=!1,t.finish(15);case 18:case"end":return t.stop()}}),_callee7,null,[[2,10,15,18]])})))}),[Re,Be,W,U]),Ke=Object(u.useMemo)((function(){return 50!==O?{"height":"".concat(O,"px")}:""}),[O]),We=Object(u.useMemo)((function(){return"loading"===Le?C:"loosing"===Le?M:"pulling"===Le?D:"success"===Le?S:""}),[C,M,D,Le,S]),Ze=Object(u.useMemo)((function(){if(_e){var e=$||H;if(e)return Object(o.jsx)(i.s,Object.assign({"className":"finished-text"},{"children":e}))}return null}),[_e,$,H]),et=Object(u.useCallback)((function(){me(!1),Ne.current=!1,Ge()}),[Ge]),tt=Object(u.useMemo)((function(){if(xe){var e=X||V;if(e)return Object(o.jsx)(i.s,Object.assign({"className":"error-text","onClick":et},{"children":e}))}return null}),[et,xe,V,X]),nt=Object(u.useMemo)((function(){return!_e&&ne&&W?Object(o.jsx)(i.s,Object.assign({"className":"loading"},{"children":z||Object(o.jsx)(i.s,{"children":C})})):null}),[_e,C,ne,z]),rt=Object(u.useMemo)((function(){return _e&&0===Re?Object(o.jsx)(i.s,Object.assign({"className":"text"},{"children":"没有内容"})):xe?tt:_e?Ze:nt}),[_e,Re,xe,nt,tt,Ze]),ct=Object(u.useMemo)((function(){var e=null==_?void 0:_({"status":Le,"distance":be});return e||(f.includes(Le)?Object(o.jsx)(i.s,Object.assign({"className":"text"},{"children":We})):"loading"===Le?Object(o.jsx)(i.s,Object.assign({"className":"loading"},{"children":We})):"")}),[be,We,Le,_]),st=Object(o.jsx)(i.s,Object.assign({"className":"head","style":Ke},{"children":ct}));return Object(o.jsxs)(i.s,Object.assign({"className":d},{"children":[ce&&Object(o.jsx)(i.s,Object.assign({"className":"custom-header"},{"children":ce})),Object(o.jsx)(i.l,Object.assign({"ref":Pe,"lowerThreshold":Q,"onScroll":Qe,"scrollTop":Y,"onScrollToLower":Ge,"scrollY":ne,"className":"custom-content ".concat(re||"")},oe,{"children":Object(o.jsxs)(i.s,Object.assign({"style":$e,"onTouchMove":Ie,"onTouchEnd":Ae,"onTouchCancel":Ae,"onTouchStart":qe},{"children":[st,y,Object(o.jsx)(i.s,{"style":{"height":0,"pointerEvents":"none"}}),rt]}))})),se&&Object(o.jsx)(i.s,Object.assign({"className":"custom-footer"},{"children":se}))]}))}var j=n(18),h=n(29),p=(n(201),function(){var e=Object(h.a)(Object(r.a)().mark((function _callee(e,t,n){var c,s,o,a;return Object(r.a)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(c=function sleep(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},100,s=e,t&&(s=0),!(s>=100)){r.next=6;break}return r.abrupt("return",[]);case 6:return console.log("".concat(n,":请求~"),"isRefresh:",t),r.next=9,c(1200);case 9:for(o=[],a=0;a<20;a++)o.push("".concat(n,":"));return r.abrupt("return",o);case 12:case"end":return r.stop()}}),_callee)})));return function mockRequest(t,n,r){return e.apply(this,arguments)}}());t.default=function(){var e=Object(u.useState)({"basicsList":[],"basicsFinished":!1}),t=Object(c.a)(e,2),n=t[0],s=t[1],a=function setState(e){s(Object(j.a)(Object(j.a)({},n),e))},f=function(){var e=Object(h.a)(Object(r.a)().mark((function _callee2(){var e,t=arguments;return Object(r.a)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:0,r.next=3,p(n.basicsList.length,!0,"基础用法");case 3:e=r.sent,a({"basicsList":e.map((function(e,t){return Object(o.jsxs)(i.s,{"style":{"height":"40px","lineHeight":"40px"},"children":[e,Object(o.jsx)(i.q,{"children":"index:".concat(n.basicsList.length+t+1)})]},"".concat(n.basicsList.length+t,"append"))})),"basicsFinished":0===e.length});case 5:case"end":return r.stop()}}),_callee2)})));return function basicsDoRefresh(){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(Object(r.a)().mark((function _callee3(){var e,t,c=arguments;return Object(r.a)().wrap((function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:return c.length>0&&void 0!==c[0]?c[0]:0,e=c.length>1&&void 0!==c[1]&&c[1],r.next=4,p(n.basicsList.length,e,"基础用法");case 4:t=(t=r.sent).map((function(e,t){return Object(o.jsxs)(i.s,{"style":{"height":"40px","lineHeight":"40px"},"children":[e,Object(o.jsx)(i.q,{"children":"index:".concat(n.basicsList.length+t+1)})]},"".concat(n.basicsList.length+t,"append"))})),a({"basicsList":[].concat(Object(l.a)(n.basicsList),Object(l.a)(t)),"basicsFinished":0===t.length});case 7:case"end":return r.stop()}}),_callee3)})));return function basicsLoadMore(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){b()}),[]),Object(o.jsx)(o.Fragment,{"children":Object(o.jsx)(PowerScrollView,{"finishedText":"没有更多了","successText":"刷新成功","onScrollToUpper":f,"onScrollToLower":b,"current":n.basicsList.length,"finished":n.basicsFinished,"header":Object(o.jsx)(i.s,{"style":{"lineHeight":"50px"},"children":"Head"}),"footer":Object(o.jsx)(i.s,{"style":{"lineHeight":"50px"},"children":"Footer"}),"lowerThreshold":300,"children":n.basicsList.map((function(e,t){return Object(o.jsx)(i.s,{"children":e},t)}))})})}}}]);
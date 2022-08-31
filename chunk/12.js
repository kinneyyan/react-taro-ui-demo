(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),a=n(116),o=n(120),i=n(17),r=n.n(i),s=n(123);function Iconfont(e){var t=e.type,n=e.onClick,i=e.className,r=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(s.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(o.a)(t,i),"customStyle":Object.assign({},r,{"fontSize":"16px"}),"onClick":n},l))}var l=r.a.memo(Iconfont)},"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var c=n(119),a=n(116),o=n(118),i=n(117),r=n(120),s=Object(o.a)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,o=e.children,l=e.className,u=e.plain,b=e.disabled,f=e.size,d=e.onClick,j=Object(c.b)(e,["type","children","className","plain","disabled","size","onClick"]),m=Object(r.a)(s,l,n,f,{"plain":u,"disabled":b});return Object(a.jsx)(i.a,Object.assign({"type":n,"className":m,"onClick":b?void 0:d,"disabled":b,"size":f},j,{"children":o}))}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Affix}));var c=n(4),a=n(119),o=n(116),i=n(118),r=n(117),s=n(120),l=n(125),u=Object(i.a)("affix"),b={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},f={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(e){var t,n=e.children,i=e.layout,d=void 0===i?"center":i,j=e.postion,m=void 0===j?"bottom":j,O=e.mode,p=e.cancelText,h=void 0===p?"取消":p,g=e.confirmText,v=void 0===g?"确定":g,y=e.confirmDisable,x=void 0!==y&&y,C=e.safeAreaInsetBottom,N=void 0===C||C,S=e.className,k=e.onCancel,w=e.onConfirm,E=Object(a.b)(e,["children","layout","postion","mode","cancelText","confirmText","confirmDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),_=Object(s.a)(u,f[m],(t={},Object(c.a)(t,b[d],!O),Object(c.a)(t,"safe-area-inset-bottom",N),t),S);return Object(o.jsxs)(o.Fragment,{"children":["bottom"===m&&Object(o.jsx)(r.s,{"className":Object(s.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":N})}),Object(o.jsx)(r.s,Object.assign({"className":_},E,{"children":O?"singleBtn"===O?Object(o.jsx)(l.a,Object.assign({"type":"primary","className":"mode-single-btn","disabled":x,"onClick":w},{"children":v})):Object(o.jsxs)(r.s,Object.assign({"className":"mode-double-btn"},{"children":[Object(o.jsx)(l.a,Object.assign({"type":"default","onClick":k,"plain":!0},{"children":h})),Object(o.jsx)(l.a,Object.assign({"type":"primary","disabled":x,"onClick":w},{"children":v}))]})):n}))]})}},"127":function(e,t,n){"use strict";n.d(t,"a",(function(){return useDebounceFn}));var c=n(17);function useLatest(e){var t=Object(c.useRef)(e);return t.current=e,t}var a=function useUnmount(e){var t=useLatest(e);Object(c.useEffect)((function(){return function(){t.current()}}),[])};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(129);function root_typeof(e){return(root_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i="object"===("undefined"==typeof globalThis?"undefined":root_typeof(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,r="object"===("undefined"==typeof self?"undefined":root_typeof(self))&&null!==self&&self.Object===Object&&self,s=i||o.a||r||Function("return this")();function debounce(e,t,n){var c,a,o,i,r,l,u=0,b=!1,f=!1,d=!0,j=!t&&0!==t&&"function"==typeof s.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=c,o=a;return c=a=void 0,u=t,i=e.apply(o,n)}function startTimer(e,t){return j?(s.cancelAnimationFrame(r),s.requestAnimationFrame(e)):setTimeout(e,t)}function leadingEdge(e){return u=e,r=startTimer(timerExpired,t),b?invokeFunc(e):i}function shouldInvoke(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=o}function timerExpired(){var e=Date.now();if(shouldInvoke(e))return trailingEdge(e);r=startTimer(timerExpired,function remainingWait(e){var n=e-u,c=t-(e-l);return f?Math.min(c,o-n):c}(e))}function trailingEdge(e){return r=void 0,d&&c?invokeFunc(e):(c=a=void 0,i)}function debounced(){for(var e=Date.now(),n=shouldInvoke(e),o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];if(c=s,a=this,l=e,n){if(void 0===r)return leadingEdge(l);if(f)return r=startTimer(timerExpired,t),invokeFunc(l)}return void 0===r&&(r=startTimer(timerExpired,t)),i}return t=+t||0,function isObject(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(n)&&(b=!!n.leading,o=(f="maxWait"in n)?Math.max(+n.maxWait||0,t):o,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==r&&function cancelTimer(e){if(j)return s.cancelAnimationFrame(e);clearTimeout(e)}(r),u=0,c=l=a=r=void 0},debounced.flush=function flush(){return void 0===r?i:trailingEdge(Date.now())},debounced.pending=function pending(){return void 0!==r},debounced}function useDebounceFn(e,t){var n;var o=useLatest(e),i=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,r=Object(c.useMemo)((function(){return debounce((function(){return o.current.apply(o,arguments)}),i,t)}),[]);return a((function(){r.cancel()})),{"run":r,"cancel":r.cancel,"flush":r.flush}}},"129":function(e,t,n){"use strict";(function(e){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var c="object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.Object===Object&&e}).call(this,n(34))},"132":function(e,t,n){"use strict";n.d(t,"a",(function(){return Modal}));var c=n(119),a=n(116),o=n(118),i=n(117),r=n(120),s=n(123),l=n(126),u=Object(o.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(e){var t=e.isOpened,n=void 0!==t&&t,o=e.title,f=e.titleSplit,d=void 0!==f&&f,j=e.postion,m=void 0===j?"bottom":j,O=e.children,p=e.actionConfig,h=e.onClose,g=e.slotRight,v=e.className,y=Object(c.b)(e,["isOpened","title","titleSplit","postion","children","actionConfig","onClose","slotRight","className"]),x=Object(r.a)(u,b[m],v);return Object(a.jsxs)(s.b,Object.assign({"className":x,"isOpened":n,"onClose":h},y,{"children":["string"==typeof o?Object(a.jsxs)(i.s,Object.assign({"className":Object(r.a)("header",{"header-split":d})},{"children":[Object(a.jsx)(i.q,Object.assign({"className":"title"},{"children":o})),Object(a.jsx)(i.q,Object.assign({"className":"slot-right"},{"children":g}))]})):o,n&&Object(a.jsx)(i.s,Object.assign({"className":Object(r.a)({"content-no-title":!o})},{"children":O})),p&&Object(a.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===m},p))]}))}},"138":function(e,t,n){"use strict";n.d(t,"a",(function(){return EmptyView}));var c=n(116),a=n(118),o=n(117),i=n(120),r=Object(a.a)("empty-view");function EmptyView(e){var t=e.imageUrl,n=void 0===t?"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/isales/img_empty.svg":t,a=e.imageClass,s=e.text,l=void 0===s?"这里还没有内容":s;return Object(c.jsxs)(o.s,Object.assign({"className":r},{"children":[Object(c.jsx)(o.c,{"src":n,"className":Object(i.a)("icon",a),"mode":"aspectFit"}),"string"==typeof l?Object(c.jsx)(o.q,Object.assign({"className":"text"},{"children":l})):l]}))}},"140":function(e,t,n){"use strict";n.d(t,"a",(function(){return ListFooter}));var c=n(116),a=n(118),o=n(117),i=n(17),r=Object(a.a)("list-footer");function ListFooter(e){var t=e.loading,n=void 0!==t&&t,a=e.isFinished,s=void 0!==a&&a,l=e.error,u=void 0!==l&&l,b=e.onErrorItemClick,f=Object(i.useMemo)((function(){return Object(c.jsx)(o.s,Object.assign({"className":r},{"children":"努力加载中……"}))}),[]),d=Object(i.useMemo)((function(){return Object(c.jsx)(o.s,Object.assign({"className":r},{"children":"没有更多了"}))}),[]),j=Object(i.useMemo)((function(){return Object(c.jsx)(o.s,Object.assign({"className":r,"onClick":b},{"children":"加载失败，点击重试"}))}),[b]);return n?f:u?j:s?d:null}},"141":function(e,t,n){},"164":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n(21),a=n(4),o=n(12),i=n(15),r=n(119),s=n(17),l=n.n(s),u=n(127);var b=n(116),f=n(118),d=n(117),j=n(120),m=n(138),O=n(140),p=Object(f.a)("scroll-view"),h=l.a.memo((function(e){var t=e.className,n=e.renderListItem,c=e.customEmptyView,a=e.defaultView,o=e.dataList,i=e._loadData,r=e.reloadWithError,u=e.loading,f=e.isFinished,h=e.error,g=e.header,v=e.footer,y=e.scrollViewClass,x=void 0===y?"":y,C=e.scrollViewProps,N=Object(s.useMemo)((function(){return c||Object(b.jsx)(m.a,{})}),[c]),S=Object(j.a)(p,t);return Object(b.jsxs)(d.s,Object.assign({"className":S},{"children":[g&&Object(b.jsx)(d.s,Object.assign({"className":"custom-header"},{"children":g})),Object(b.jsxs)(d.l,Object.assign({"className":Object(j.a)("custom-scroll-view",x),"scrollY":!0,"onScrollToLower":function onScrollToLower(){return i({})}},C,{"children":[(o||[]).map((function(e,t){return Object(b.jsx)(l.a.Fragment,{"children":n(e,t)},t)})),(o||[]).length<=0&&a,(o||[]).length<=0&&f&&N,Object(b.jsx)(O.a,{"loading":u,"isFinished":o.length>0&&f,"error":h,"onErrorItemClick":r})]})),v&&Object(b.jsx)(d.s,Object.assign({"className":"custom-footer"},{"children":v}))]}))})),g=(n(141),h);g.useListHook=function useListHook(e){var t=this,n=e.loadData,l=e.queryProps,b=e.autoLoad,f=void 0!==b&&b,d=e.pageNoProps,j=void 0===d?"pageNo":d,m=e.pageSizeProps,O=void 0===m?"pageSize":m,p=e.successGroups,h=void 0===p?[200,2e5]:p,g=e.disablePaging,v=void 0!==g&&g,y=Object(s.useState)(!1),x=Object(i.a)(y,2),C=x[0],N=x[1],S=Object(s.useState)(!1),k=Object(i.a)(S,2),w=k[0],E=k[1],_=Object(s.useState)(!1),D=Object(i.a)(_,2),T=D[0],F=D[1],L=Object(s.useState)([]),A=Object(i.a)(L,2),B=A[0],I=A[1],q=Object(s.useState)(l||{}),P=Object(i.a)(q,2),M=P[0],W=P[1],z=Object(s.useState)(!1),V=Object(i.a)(z,2),$=V[0],H=V[1],R=Object(u.a)((function(e){return Object(r.a)(t,void 0,void 0,Object(c.a)().mark((function _callee(){var t,i,r;return Object(c.a)().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(!C){c.next=2;break}return c.abrupt("return");case 2:return F(!1),E(!0),t=Object.assign(Object.assign({},M),e),c.next=7,n(t).catch((function(){return null}));case 7:i=c.sent,E(!1),i&&h.includes(i.code)?(B.length<=0?Array.isArray(i.data)&&I(i.data):(r=[].concat(Object(o.a)(B),Object(o.a)(i.data)),I(r)),W((function(e){return Object.assign(Object.assign({},e),Object(a.a)({},j,e[j]+1))})),(v||!i.data||i.data.length<=0||i.data.length<t[O])&&N(!0)):F(!0);case 10:case"end":return c.stop()}}),_callee)})))}),{"wait":500}).run;return Object(s.useEffect)((function(){$&&!C&&B.length<=0&&(H(!1),R(M))}),[$,B,C,M]),Object(s.useEffect)((function(){f&&R(M)}),[]),{"dataList":B,"_loadData":R,"reLoadDataWithProps":function reLoadDataWithProps(e){N(!1),I([]),W(e),H(!0)},"reloadWithError":function reloadWithError(){R({})},"loading":w,"isFinished":C,"error":T,"setDisablePaging":function setDisablePaging(){v=!0}}}},"166":function(e,t,n){"use strict";n.d(t,"a",(function(){return SearchBar}));var c=n(119),a=n(116),o=n(118),i=n(122),r=n(117),s=n(120),l=n(127),u=Object(o.a)("search-bar");function SearchBar(e){var t=e.rightSlot,n=e.onChange,o=e.className,b=e.disableDebounce,f=void 0!==b&&b,d=Object(c.b)(e,["rightSlot","onChange","className","disableDebounce"]),j=Object(l.a)((function(e){null==n||n(e)}),{"wait":500}).run;return Object(a.jsxs)(r.s,Object.assign({"className":Object(s.a)(u,o)},{"children":[Object(a.jsxs)(r.s,Object.assign({"className":"search-bar"},{"children":[Object(a.jsx)(i.a,{"type":"icon-sousuo","className":"icon"}),Object(a.jsx)(r.d,Object.assign({},d,{"className":"input","placeholderClass":"input-placeholder","onInput":function _onChange(e){var t=e.detail.value.trim();f?null==n||n(t):j(t)}}))]})),t&&Object(a.jsx)(r.s,Object.assign({"className":"right-slot"},{"children":t}))]}))}},"194":function(e,t,n){},"300":function(e,t,n){"use strict";n.r(t);n(194);var c=n(21),a=n(15),o=n(119),i=n(116),r=n(118),s=n(122),l=n(130),u=n(117),b=n(120),f=n(17),d=n.n(f),j=n(138),m=n(132),O=n(164),p=n(166),h=Object(r.a)("modal-search-picker"),g=d.a.memo((function(e){var t=this,n=e.isOpened,r=void 0!==n&&n,d=e.title,g=void 0===d?"请选择":d,v=e.options,y=e.request,x=e.params,C=e.id,N=e.value,S=e.fieldNames,k=void 0===S?{"label":"label","value":"value"}:S,w=e.placeholder,E=e.header,_=e.confirmDisable,D=e.onConfirm,T=e.onCancel,F=e.onClose,L=Object(f.useState)(),A=Object(a.a)(L,2),B=A[0],I=A[1],q=Object(f.useState)({"pageNo":1,"pageSize":10}),P=Object(a.a)(q,2),M=P[0],W=P[1];Object(f.useEffect)((function(){r&&W((function(e){var t=Object.assign({"pageNo":1,"pageSize":10},x);return e.searchText&&(t.searchText=e.searchText),V(t),t}))}),[r,v,x]);var z=O.a.useListHook({"loadData":function loadData(e){return Object(o.a)(t,void 0,void 0,Object(c.a)().mark((function _callee(){var t,n;return Object(c.a)().wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(null==v){c.next=4;break}c.t0=v,c.next=7;break;case 4:return c.next=6,y(e).catch((function(){return null}));case 6:c.t0=c.sent;case 7:return t=c.t0,l.b.isNull(N)?I(void 0):(n=(t||[]).find((function(e){return e[k.value]===N})))&&I(Object.assign({},n)),c.abrupt("return",{"code":200,"data":t});case 10:case"end":return c.stop()}}),_callee)})))},"queryProps":M,"disablePaging":!!v}),V=z.reLoadDataWithProps,$=Object(o.b)(z,["reLoadDataWithProps"]),H=Object(f.useMemo)((function(){return void 0!==_?_:!B}),[_,B]),R=Object(f.useMemo)((function(){return{"mode":"doubleBtn","confirmDisable":H,"onCancel":T,"onConfirm":function onConfirm(){B&&(null==D||D(B,C))}}}),[C,B,H]);return Object(i.jsx)(m.a,Object.assign({"className":h,"isOpened":r,"title":g,"onClose":null!=F?F:T,"actionConfig":R},{"children":Object(i.jsx)(u.s,Object.assign({"className":Object(b.a)("content",{"no-footer":!!v})},{"children":Object(i.jsx)(O.a,Object.assign({},$,{"customEmptyView":Object(i.jsx)(j.a,{"imageUrl":"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/middle-platform/20220826/ic_%E6%9A%82%E6%97%A0%E9%A1%B9%E7%9B%AE%402x.png","text":"未搜索到相关内容"}),"renderListItem":function renderListItem(e){var t=(null==B?void 0:B.value)===e[k.value];return Object(i.jsxs)(u.s,Object.assign({"className":Object(b.a)("list-item",{"selected":t}),"onClick":function onClick(){I(Object.assign({"label":e[k.label],"value":e[k.value]},e))}},{"children":[Object(i.jsx)(u.q,Object.assign({"className":"text-content"},{"children":e[k.label]})),t&&Object(i.jsx)(s.a,{"type":"icon-radio-on","className":"icon-selected"})]}))},"header":E||Object(i.jsx)(p.a,{"placeholder":w,"onChange":function handleOnSearchBarChange(e){W((function(t){var n=Object.assign(Object.assign({},t),{"searchText":e});return V(n),n}))}})}))}))}))})),v=n(29);t.default=function(){var e=Object(f.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(f.useState)(!1),s=Object(a.a)(r,2),l=s[0],b=s[1],d=Object(f.useState)(!1),j=Object(a.a)(d,2),m=j[0],O=j[1];return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return o(!0)},"children":"基础用法"}),Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return b(!0)},"children":"options + confirmDisable=true"}),Object(i.jsx)(u.a,{"className":"group-title","onClick":function onClick(){return O(!0)},"children":"自定义头部（会替换掉默认的searchBar）"}),Object(i.jsx)(g,{"isOpened":n,"title":"选择商品","placeholder":"请输入商品名称","params":{"test":"a"},"request":function(){var e=Object(v.a)(Object(c.a)().mark((function _callee(e){return Object(c.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request params",e),t.abrupt("return",Array.from({"length":20},(function(e,t){return{"label":"百威纯生 500ml 大听(".concat(t,")"),"value":t}})));case 2:case"end":return t.stop()}}),_callee)})));return function(t){return e.apply(this,arguments)}}(),"onCancel":function onCancel(){console.log("onCancel"),o(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),o(!1)}}),Object(i.jsx)(g,{"isOpened":l,"title":"选择商品","placeholder":"请输入商品名称","value":3,"options":[{"label":"111","value":1},{"label":"222","value":2},{"label":"333","value":3}],"confirmDisable":!0,"onCancel":function onCancel(){console.log("onCancel"),b(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),b(!1)}}),Object(i.jsx)(g,{"isOpened":m,"title":"选择商品","placeholder":"请输入商品名称","value":2,"header":Object(i.jsx)(u.s,{"children":"以下为完美门店联系人列表，可选择一位成为BEES项目关键人"}),"request":function(){var e=Object(v.a)(Object(c.a)().mark((function _callee2(e){return Object(c.a)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request params",e),t.abrupt("return",Array.from({"length":20},(function(e,t){return{"label":"百威纯生 500ml 大听(".concat(t,")"),"value":t}})));case 2:case"end":return t.stop()}}),_callee2)})));return function(t){return e.apply(this,arguments)}}(),"onCancel":function onCancel(){console.log("onCancel"),O(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e),O(!1)}})]})}}}]);
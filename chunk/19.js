(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(120),a=n(117),i=n(121),s=n(17),o=n.n(s),r=n(141);function Iconfont(e){var t=e.type,n=e.onClick,s=e.className,o=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(r.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(t,s),"customStyle":Object.assign({},o,{"fontSize":"16px"}),"onClick":n},l))}var l=o.a.memo(Iconfont)},"142":function(e,t,n){"use strict";n.d(t,"a",(function(){return Affix}));var c=n(4),a=n(120),i=n(117),s=n(119),o=n(118),r=n(121),l=Object(s.a)("affix"),u={"left":"".concat(l,"-left"),"center":"".concat(l,"-center"),"right":"".concat(l,"-right"),"space-between":"".concat(l,"-space-between"),"space-around":"".concat(l,"-space-around")},b={"top":"".concat(l,"-top"),"bottom":"".concat(l,"-bottom")};function Affix(e){var t=e.className,n=e.children,s=e.layout,d=void 0===s?"center":s,j=e.postion,f=void 0===j?"bottom":j,O=e.mode,m=e.onCancel,p=e.onConfirm,h=e.cancelText,g=void 0===h?"取消":h,v=e.confirmText,x=void 0===v?"确定":v,N=Object(a.b)(e,["className","children","layout","postion","mode","onCancel","onConfirm","cancelText","confirmText"]),C=Object(r.a)(l,Object(c.a)({},u[d],!O),b[f],t);return Object(i.jsxs)(i.Fragment,{"children":["bottom"===f&&Object(i.jsx)(o.s,{"className":"".concat(l,"-placeholder")}),Object(i.jsx)(o.s,Object.assign({"className":C},N,{"children":O?"singleBtn"===O?Object(i.jsx)(o.a,Object.assign({"className":Object(r.a)("mode-single-btn","button-primary"),"onClick":p},{"children":x})):Object(i.jsxs)(o.s,Object.assign({"className":"mode-double-btn"},{"children":[Object(i.jsx)(o.a,Object.assign({"className":"button-default","onClick":m},{"children":g})),Object(i.jsx)(o.a,Object.assign({"className":"button-primary","onClick":p},{"children":x}))]})):n}))]})}},"143":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(8),a=n(144),i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,u="object"==Object(c.a)(a.a)&&a.a&&a.a.Object===Object&&a.a,b="object"==("undefined"==typeof self?"undefined":Object(c.a)(self))&&self&&self.Object===Object&&self,d=u||b||Function("return this")(),j=Object.prototype.toString,f=Math.max,O=Math.min,m=function now(){return d.Date.now()};function isObject(e){var t=Object(c.a)(e);return!!e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"==Object(c.a)(e)||function isObjectLike(e){return!!e&&"object"==Object(c.a)(e)}(e)&&"[object Symbol]"==j.call(e)}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NaN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||r.test(e)?l(e.slice(2),n?2:8):s.test(e)?NaN:+e}var p=function debounce(e,t,n){var c,a,i,s,o,r,l=0,u=!1,b=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function invokeFunc(t){var n=c,i=a;return c=a=void 0,l=t,s=e.apply(i,n)}function leadingEdge(e){return l=e,o=setTimeout(timerExpired,t),u?invokeFunc(e):s}function shouldInvoke(e){var n=e-r;return void 0===r||n>=t||n<0||b&&e-l>=i}function timerExpired(){var e=m();if(shouldInvoke(e))return trailingEdge(e);o=setTimeout(timerExpired,function remainingWait(e){var n=t-(e-r);return b?O(n,i-(e-l)):n}(e))}function trailingEdge(e){return o=void 0,d&&c?invokeFunc(e):(c=a=void 0,s)}function debounced(){var e=m(),n=shouldInvoke(e);if(c=arguments,a=this,r=e,n){if(void 0===o)return leadingEdge(r);if(b)return o=setTimeout(timerExpired,t),invokeFunc(r)}return void 0===o&&(o=setTimeout(timerExpired,t)),s}return t=toNumber(t)||0,isObject(n)&&(u=!!n.leading,i=(b="maxWait"in n)?f(toNumber(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),debounced.cancel=function cancel(){void 0!==o&&clearTimeout(o),l=0,c=r=a=o=void 0},debounced.flush=function flush(){return void 0===o?s:trailingEdge(m())},debounced}},"144":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}}).call(this,n(35))},"147":function(e,t,n){"use strict";n.d(t,"a",(function(){return Modal}));var c=n(120),a=n(117),i=n(119),s=n(118),o=n(121),r=n(141),l=n(142),u=Object(i.a)("modal"),b={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(e){var t=e.className,n=e.isOpened,i=void 0!==n&&n,d=e.title,j=void 0===d?"":d,f=e.titleSplit,O=void 0!==f&&f,m=e.postion,p=void 0===m?"bottom":m,h=e.children,g=e.actionConfig,v=e.onCancel,x=Object(c.b)(e,["className","isOpened","title","titleSplit","postion","children","actionConfig","onCancel"]),N=Object(o.a)(u,b[p],t);return Object(a.jsxs)(r.b,Object.assign({"className":N,"isOpened":i,"onClose":v},x,{"children":[j&&Object(a.jsx)(s.s,Object.assign({"className":Object(o.a)("header",{"header-split":O})},{"children":Object(a.jsx)(s.q,Object.assign({"className":"title"},{"children":j}))})),i&&Object(a.jsx)(s.s,Object.assign({"className":Object(o.a)({"content-no-title":!j})},{"children":h})),g&&Object(a.jsx)(l.a,Object.assign({},g))]}))}},"150":function(e,t,n){"use strict";n.d(t,"a",(function(){return ListFooter}));var c=n(117),a=n(119),i=n(118),s=n(17),o=Object(a.a)("list-footer");function ListFooter(e){var t=e.loading,n=void 0!==t&&t,a=e.isFinished,r=void 0!==a&&a,l=e.error,u=void 0!==l&&l,b=e.onErrorItemClick,d=Object(s.useMemo)((function(){return Object(c.jsx)(i.s,Object.assign({"className":o},{"children":"努力加载中……"}))}),[]),j=Object(s.useMemo)((function(){return Object(c.jsx)(i.s,Object.assign({"className":o},{"children":"没有更多了"}))}),[]),f=Object(s.useMemo)((function(){return Object(c.jsx)(i.s,Object.assign({"className":o,"onClick":b},{"children":"加载失败，点击重试"}))}),[b]);return n?d:u?f:r?j:null}},"151":function(e,t,n){},"152":function(e,t,n){"use strict";n.d(t,"a",(function(){return EmptyView}));var c=n(117),a=n(119),i=n(118),s=Object(a.a)("empty-view");function EmptyView(){return Object(c.jsxs)(i.s,Object.assign({"className":s},{"children":[Object(c.jsx)(i.c,{"src":"https://abi-static-resource.oss-cn-shanghai.aliyuncs.com/isales/img_empty.svg","className":"icon","mode":"aspectFit"}),Object(c.jsx)(i.q,Object.assign({"className":"text"},{"children":"这里还没有内容"}))]}))}},"156":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(4),a=n(12),i=n(15),s=n(21),o=n.n(s),r=n(120),l=n(143),u=n(17),b=n.n(u);var d=n(117),j=n(119),f=n(118),O=n(121),m=n(152),p=n(150),h=Object(j.a)("scroll-view"),g=b.a.memo((function(e){var t=e.className,n=e.renderListItem,c=e.customEmptyView,a=e.defaultView,i=e.dataList,s=e._loadData,o=e.reloadWithError,r=e.loading,l=e.isFinished,j=e.error,g=e.header,v=e.footer,x=e.scrollViewClass,N=void 0===x?"":x,C=e.scrollViewProps,y=Object(u.useMemo)((function(){return c||Object(d.jsx)(m.a,{})}),[c]),w=Object(O.a)(h,t);return Object(d.jsxs)(f.s,Object.assign({"className":w},{"children":[g&&Object(d.jsx)(f.s,Object.assign({"className":"custom-header"},{"children":g})),Object(d.jsxs)(f.l,Object.assign({"className":Object(O.a)("custom-scroll-view",N),"scrollY":!0,"onScrollToLower":function onScrollToLower(){return s({})}},C,{"children":[(i||[]).map((function(e,t){return Object(d.jsx)(b.a.Fragment,{"children":n(e,t)},t)})),i.length<=0&&a,i.length<=0&&l&&y,Object(d.jsx)(p.a,{"loading":r,"isFinished":i.length>0&&l,"error":j,"onErrorItemClick":o})]})),v&&Object(d.jsx)(f.s,Object.assign({"className":"custom-footer"},{"children":v}))]}))})),v=(n(151),g);v.useListHook=function useListHook(e){var t=this,n=e.loadData,s=e.queryProps,b=e.autoLoad,d=void 0!==b&&b,j=e.pageNoProps,f=void 0===j?"pageNo":j,O=e.pageSizeProps,m=void 0===O?"pageSize":O,p=e.successGroups,h=void 0===p?[200,2e5]:p,g=e.disablePaging,v=void 0!==g&&g,x=Object(u.useState)(!1),N=Object(i.a)(x,2),C=N[0],y=N[1],w=Object(u.useState)(!1),k=Object(i.a)(w,2),S=k[0],E=k[1],L=Object(u.useState)(!1),T=Object(i.a)(L,2),F=T[0],D=T[1],I=Object(u.useState)([]),P=Object(i.a)(I,2),_=P[0],M=P[1],W=Object(u.useState)(s||{}),q=Object(i.a)(W,2),$=q[0],V=q[1],z=Object(u.useState)(!1),A=Object(i.a)(z,2),B=A[0],H=A[1],J=Object(u.useMemo)((function(){return Object(l.a)((function(e){return Object(r.a)(t,void 0,void 0,o.a.mark((function _callee(){var t,i,s;return o.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(!C){o.next=2;break}return o.abrupt("return");case 2:return D(!1),E(!0),t=Object.assign(Object.assign({},$),e),o.next=7,n(t).catch((function(){return null}));case 7:i=o.sent,E(!1),i&&h.includes(i.code)?(_.length<=0?Array.isArray(i.data)&&M(i.data):(s=[].concat(Object(a.a)(_),Object(a.a)(i.data)),M(s)),V((function(e){return Object.assign(Object.assign({},e),Object(c.a)({},f,e[f]+1))})),(v||!i.data||i.data.length<=0||i.data.length<t[m])&&y(!0)):D(!0);case 10:case"end":return o.stop()}}),_callee)})))}),500)}),[C,_,$]);return Object(u.useEffect)((function(){B&&!C&&_.length<=0&&(H(!1),J($))}),[B,_,C,$]),Object(u.useEffect)((function(){d&&J($)}),[]),{"dataList":_,"_loadData":J,"reLoadDataWithProps":function reLoadDataWithProps(e){y(!1),M([]),V(e),H(!0)},"reloadWithError":function reloadWithError(){J({})},"loading":S,"isFinished":C,"error":F,"setDisablePaging":function setDisablePaging(){v=!0}}}},"158":function(e,t,n){"use strict";n.d(t,"a",(function(){return SearchBar}));var c=n(120),a=n(117),i=n(119),s=n(125),o=n(118),r=n(121),l=n(143),u=n(17),b=Object(i.a)("search-bar");function SearchBar(e){var t=e.rightSlot,n=e.onChange,i=e.className,d=Object(c.b)(e,["rightSlot","onChange","className"]),j=Object(u.useMemo)((function(){return Object(l.a)((function(e){null==n||n(e.detail.value.trim())}),500)}),[]);return Object(a.jsxs)(o.s,Object.assign({"className":Object(r.a)(b,i)},{"children":[Object(a.jsxs)(o.s,Object.assign({"className":"search-wrap"},{"children":[Object(a.jsx)(s.a,{"type":"icon-sousuo","className":"icon"}),Object(a.jsx)(o.d,Object.assign({"className":"input"},d,{"placeholderClass":"input-placeholder","onInput":j}))]})),t&&Object(a.jsx)(o.s,Object.assign({"className":"slot-right"},{"children":t}))]}))}},"179":function(e,t,n){},"270":function(e,t,n){"use strict";n.r(t);n(179);var c=n(15),a=n(21),i=n.n(a),s=n(120),o=n(117),r=n(119),l=n(125),u=n(149),b=n(118),d=n(121),j=n(17),f=n.n(j),O=n(147),m=n(156),p=n(158),h=Object(r.a)("modal-search-picker"),g=f.a.memo((function(e){var t=this,n=e.isOpened,a=void 0!==n&&n,r=e.title,f=void 0===r?"请选择":r,g=e.request,v=e.params,x=e.id,N=e.value,C=e.fieldNames,y=void 0===C?{"label":"label","value":"value"}:C,w=e.placeholder,k=e.onCancel,S=e.onConfirm,E=Object(j.useState)(),L=Object(c.a)(E,2),T=L[0],F=L[1],D=Object(j.useState)({"pageNo":1,"pageSize":10}),I=Object(c.a)(D,2),P=I[0],_=I[1];Object(j.useEffect)((function(){a&&_((function(e){var t=Object.assign({"pageNo":1,"pageSize":10,"searchText":e.searchText},v);return W(t),t}))}),[a,v]);var M=m.a.useListHook({"loadData":function loadData(e){return Object(s.a)(t,void 0,void 0,i.a.mark((function _callee(){var t,n;return i.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,g(e).catch((function(){return null}));case 2:return t=c.sent,u.b.isNull(N)?F(void 0):(n=(t||[]).find((function(e){return e[y.value]===N})))&&F(Object.assign({},n)),c.abrupt("return",{"code":200,"data":t});case 5:case"end":return c.stop()}}),_callee)})))},"queryProps":P}),W=M.reLoadDataWithProps,q=Object(s.b)(M,["reLoadDataWithProps"]),$=Object(j.useMemo)((function(){return{"mode":"doubleBtn","onCancel":k,"onConfirm":function onConfirm(){T&&(null==S||S(T,x))}}}),[x,T]);return Object(o.jsx)(O.a,Object.assign({"className":h,"isOpened":a,"title":f,"onCancel":k,"actionConfig":$},{"children":Object(o.jsx)(b.s,Object.assign({"className":"content"},{"children":Object(o.jsx)(m.a,Object.assign({},q,{"renderListItem":function renderListItem(e){var t=(null==T?void 0:T.value)===e[y.value];return Object(o.jsxs)(b.s,Object.assign({"className":Object(d.a)("list-item",{"selected":t}),"onClick":function onClick(){F(Object.assign({"label":e[y.label],"value":e[y.value]},e))}},{"children":[Object(o.jsx)(b.q,{"children":e[y.label]}),t&&Object(o.jsx)(l.a,{"type":"icon-radio-on","className":"icon-selected"})]}))},"header":Object(o.jsx)(p.a,{"placeholder":w,"onChange":function handleOnSearchBarChange(e){_((function(t){var n=Object.assign(Object.assign({},t),{"searchText":e});return W(n),n}))}})}))}))}))})),v=n(32);t.default=function(){var e=Object(j.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(b.a,{"onClick":function onClick(){return a(!0)},"children":"open"}),Object(o.jsx)(g,{"isOpened":n,"title":"选择商品","placeholder":"请输入商品名称","value":2,"params":{"test":"a"},"request":function(){var e=Object(v.a)(i.a.mark((function _callee(e){return i.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request params",e),t.abrupt("return",Array.from({"length":20},(function(e,t){return{"label":"百威纯生 500ml 大听(".concat(t,")"),"value":t}})));case 2:case"end":return t.stop()}}),_callee)})));return function(t){return e.apply(this,arguments)}}(),"onCancel":function onCancel(){return a(!1)},"onConfirm":function onConfirm(e){console.log("onConfirm",e)}})]})}}}]);
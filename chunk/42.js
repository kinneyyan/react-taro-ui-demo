(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"172":function(e,n,t){},"259":function(e,n,t){"use strict";t.r(n);t(172);var c=t(4),l=t(12),a=t(15),i=t(21),s=t.n(i),o=t(120),u=t(117),r=t(119),d=t(149),b=t(118),j=t(251),v=t(121),O=t(17),f=t(141),m=Object(r.a)("cascader");function Cascader(e){var n=this,t=e.title,i=void 0===t?"请选择":t,r=e.breadcrumbPlaceholder,h=void 0===r?"请选择":r,g=e.toast,p=void 0===g?"请先完成选择":g,x=e.visible,k=void 0!==x&&x,C=e.onOk,N=e.onCancel,L=e.onInitFinished,w=e.values,_=void 0===w?[]:w,S=e.data,y=e.maxLevel,I=e.fieldNames,q=void 0===I?{"name":"name","code":"code","level":"level","subList":"subList"}:I,B=Object(O.useState)(1),E=Object(a.a)(B,2),F=E[0],J=E[1],$=Object(O.useState)([]),P=Object(a.a)($,2),V=P[0],Y=P[1],z=Object(O.useState)(),A=Object(a.a)(z,2),D=A[0],G=A[1],H=Object(O.useState)([]),K=Object(a.a)(H,2),M=K[0],Q=K[1];Object(O.useEffect)((function(){(null==S?void 0:S.length)&&R()}),[S]);var R=function init(){return Object(o.a)(n,void 0,void 0,s.a.mark((function _callee(){var e,n,t;return s.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(!(null==_?void 0:_.length)){c.next=9;break}if(t=null==_?void 0:_.reduce((function(e,n){var t;return 0===e.length?[].concat(Object(l.a)(e),[null==S?void 0:S.find((function(e){return e[q.code]===n||e[q.name]===n}))]):[].concat(Object(l.a)(e),[((null===(t=e[e.length-1])||void 0===t?void 0:t[q.subList])||[]).find((function(e){return e[q.code]===n||e[q.name]===n}))])}),[]),console.log("nValues:",t),!t||!t.length){c.next=9;break}return T(t),G(t[t.length-1]),t.length===y?Y(null===(e=t[t.length-2])||void 0===e?void 0:e[q.subList]):Y(null===(n=t[t.length-1])||void 0===n?void 0:n[q.subList]),L&&L(S,t),c.abrupt("return");case 9:T([]),Y(S);case 11:case"end":return c.stop()}}),_callee)})))};Object(O.useEffect)((function(){var e;(null===(e=null==D?void 0:D[q.subList])||void 0===e?void 0:e.length)&&Y(D[q.subList])}),[D]);var T=function updateBreadcrumb(e){var n=e.findIndex((function(e){return d.b.isNull(e)}));(e=e.slice(0,-1===n?e.length:n)).length===y?J(e.length):J(e.length+1);for(var t=e.length;t<y;t++)e.push(Object(c.a)({},q.name,h));Q(e)};return Object(u.jsx)(f.b,Object.assign({"isOpened":k,"className":m,"onClose":N},{"children":Object(u.jsxs)(b.s,Object.assign({"className":"content-wrap"},{"children":[i&&Object(u.jsx)(b.s,Object.assign({"className":"title"},{"children":i})),Object(u.jsx)(b.s,Object.assign({"className":"level-titles-layout"},{"children":M.map((function(e,n){return Object(u.jsxs)(b.s,Object.assign({"className":"title-layout","onClick":function onClick(){return function handleBreadcrumbClick(e,n){var t;e[q.code]&&(T(M.slice(0,n)),Y(0===n?S:null===(t=M[n-1])||void 0===t?void 0:t[q.subList]),G(null))}(e,n)}},{"children":[Object(u.jsx)(b.q,Object.assign({"className":Object(v.a)("title",{"selected":(null==e?void 0:e[q.name])!==h})},{"children":null==e?void 0:e[q.name]})),F===n+1&&Object(u.jsx)(b.s,{"className":"indicator"})]}),n)}))})),Object(u.jsx)(b.l,Object.assign({"scrollY":!0,"className":"org-list"},{"children":null==V?void 0:V.map((function(e,t){return Object(u.jsx)(b.s,Object.assign({"className":"item","onClick":function onClick(){return function handleClickLevelItem(e){return Object(o.a)(n,void 0,void 0,s.a.mark((function _callee2(){var n;return s.a.wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:G(e),n=M.filter((function(e){return(null==e?void 0:e[q.name])!==h})),e[q.level]===(null==D?void 0:D[q.level])?n[n.length-1]=e:n.push(e),T(Object(l.a)(n));case 4:case"end":return t.stop()}}),_callee2)})))}(e)}},{"children":Object(u.jsx)(b.q,Object.assign({"className":Object(v.a)({"item-select":e[q.code]===(null==D?void 0:D[q.code])})},{"children":null==e?void 0:e[q.name]}))}),t)}))})),Object(u.jsxs)(b.s,Object.assign({"className":"button-wrap"},{"children":[Object(u.jsx)(b.a,Object.assign({"onClick":function onClick(){R(),null==N||N()},"className":"button-default"},{"children":"取消"})),Object(u.jsx)(b.a,Object.assign({"onClick":function handleSubmit(){M.filter((function(e){return e[q.code]})).length<y?Object(j.a)({"title":p,"icon":"none"}):null==C||C(M)},"className":"button-primary"},{"children":"确定"}))]}))]}))}))}var h=[{"name":"中国","code":"1","level":1,"subList":[{"name":"北京","code":"11","level":2,"parentCode":"1"},{"name":"上海","code":"12","level":2,"parentCode":"1","subList":[{"name":"黄浦区","code":"121","level":3,"parentCode":"12"}]}]}];n.default=function(){return Object(u.jsx)(u.Fragment,{"children":Object(u.jsx)(Cascader,{"visible":!0,"maxLevel":3,"title":"请选择省市区","data":h,"onOk":function onOk(e){console.log("onOk",e)},"onCancel":function onCancel(){console.log("onCancel")}})})}}}]);
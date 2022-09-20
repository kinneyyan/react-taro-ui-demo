(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(119),i=n(116),r=n(120),c=n(17),d=n.n(c),s=n(123);function Iconfont(e){var t=e.type,n=e.onClick,c=e.className,d=e.style,o=Object(a.b)(e,["type","onClick","className","style"]);return Object(i.jsx)(s.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(r.a)(t,c),"customStyle":Object.assign({},d,{"fontSize":"16px"}),"onClick":n},o))}var o=d.a.memo(Iconfont)},"169":function(e,t,n){"use strict";n.d(t,"a",(function(){return Table}));var a=n(21),i=n(4),r=n(12),c=n(7),d=n(15),s=n(119),o=n(116),l=n(118),u=n(122),b=n(129),f=n(117),j=n(23),x=n(120),O=n(17),p=n(123),v=Object(l.a)("table");function Table(e){var t=this,n=e.onColumnEdit,l=e.editingColumn,h=e.columns,g=e.dataSource,m=e.rowKey,y=e.showHeader,w=void 0===y||y,k=e.showNestedHeader,I=void 0!==k&&k,C=e.bordered,N=void 0!==C&&C,S=e.plain,E=void 0!==S&&S,T=e.reverseBg,_=void 0!==T&&T,K=e.fixedPadding,R=void 0!==K&&K,B=Object(O.useState)(g),z=Object(d.a)(B,2),F=z[0],H=z[1],J=function renderWidth(e){switch(Object(c.a)(e)){case"number":return j.a.pxTransform(Number(e));case"string":return e;default:return"auto"}},$=function renderColumnStyle(e){var t=e.fixed&&(null==h?void 0:h.findIndex((function(t){return t.dataIndex===e.dataIndex}))),n=0;if(t){var a=null==h?void 0:h.filter((function(e,n){return n<t}));n=(null==a?void 0:a.reduce((function(e,t){return e+Number(t.width)}),0))||0}return{"width":J(e.width),"position":e.fixed?"sticky":"initial","zIndex":e.fixed?1:0,"left":n?j.a.pxTransform(n):0}},q=function handleColumnEdit(e){n&&n(e);var t=F.map((function(t){var n=t.isEditing;return n["".concat(e.dataIndex)]=!0,Object.assign(Object.assign({},t),{"isEditing":n})}));H(t)};return Object(O.useEffect)((function(){var e=h.filter((function(e){return e.editable}));if(e.length){var t={};e.forEach((function(e){t["".concat(e.dataIndex)]=!1}));var n=g.map((function(e){return Object.assign(Object.assign({},e),{"isEditing":t})}));H(n)}else H(g)}),[g]),Object(O.useEffect)((function(){l&&q(l)}),[l]),Object(o.jsx)(f.s,Object.assign({"className":v},{"children":Object(o.jsxs)(f.s,Object.assign({"style":function renderTableStyle(){var e,t=null==h?void 0:h.every((function(e){return"number"==typeof e.width}));return t&&(e=null==h?void 0:h.reduce((function(e,t){return e+Number(t.width)}),0)),{"width":t?j.a.pxTransform(e):"auto"}}(),"className":"table"},{"children":[w&&Object(o.jsx)(f.s,Object.assign({"className":"table-row"},{"children":null==h?void 0:h.map((function(e,t){var n,a;return Object(o.jsxs)(f.s,Object.assign({"style":Object.assign(Object.assign({},$(e)),{"backgroundColor":_||E?"#ffffff":"#fff8f8"}),"className":Object(x.a)("table-cell","th",{"bordered":N||e.borderRight,"nested-th":I,"edit":e.editable,"plain":E}),"onClick":function onClick(){return q(e)}},{"children":[e.editable&&Object(o.jsx)(u.a,{"type":"icon-wodeshenqing","className":"icon"}),e.title]}),null!==(a=null!==(n=e.dataIndex)&&void 0!==n?n:e.key)&&void 0!==a?a:t)}))})),null==F?void 0:F.map((function(e,n){return Object(o.jsx)(f.s,Object.assign({"className":"table-row"},{"children":null==h?void 0:h.map((function(c,d){var l,u,j,O;return Object(o.jsx)(f.s,Object.assign({"style":Object.assign(Object.assign({},$(c)),{"backgroundColor":E?"#ffffff":n%2==(_?0:1)?"#fff8f8":"#ffffff"}),"className":Object(x.a)("table-cell",{"bordered":N||c.borderRight,"fixed-padding":R,"plain":E})},{"children":c.editable&&(null===(l=e.isEditing)||void 0===l?void 0:l[c.dataIndex])?Object(o.jsx)(p.d,{"type":c.editType,"name":null!==(u=c.dataIndex)&&void 0!==u?u:"","value":e[c.dataIndex],"onBlur":function onBlur(d){return Object(s.a)(t,void 0,void 0,Object(a.a)().mark((function _callee(){var t;return Object(a.a)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(!c.handleSave){a.next=5;break}return a.next=3,c.handleSave(e,d,n);case 3:a.sent&&((t=Object(r.a)(F)).forEach((function(t){(t[m]||t.key)===(e[m]||e.key)&&(t[c.dataIndex]=d,t.isEditing=Object.assign(Object.assign({},t.isEditing),Object(i.a)({},c.dataIndex,!1)))})),H(t));case 5:case"end":return a.stop()}}),_callee)})))},"onChange":function onChange(){return null},"border":!1}):c.render?c.render(e[c.dataIndex],e,n):b.c.isNull(e[c.dataIndex])?"-":e[c.dataIndex]}),null!==(O=null!==(j=c.dataIndex)&&void 0!==j?j:c.key)&&void 0!==O?O:d)}))}),m?e[m]:e.key||n)}))]}))}))}},"203":function(e,t,n){},"279":function(e,t,n){"use strict";n.r(t);n(203);var a=n(169),i=n(21),r=n(12),c=n(29),d=n(15),s=n(117),o=n(17),l=n(116),u=[{"id":1,"type":"店内执行","progress":"未完成","time":"22-07-12","object":Object(l.jsxs)(s.s,{"children":["共 ",Object(l.jsx)("text",{"style":{"color":"#FD3C42"},"children":"10"})," 个对象"]})},{"id":2,"type":"卖进","progress":"已完成","time":"22-07-12"},{"id":3,"type":"先锋购","progress":"已完成","time":"22-07-12"}];t.default=function(){var e,t=Object(o.useState)(),n=Object(d.a)(t,2),b=n[0],f=n[1],j=Object(o.useState)(u),x=Object(d.a)(j,2),O=x[0],p=x[1],v=[{"title":"分类","dataIndex":"type","key":"type","width":176,"fixed":!0,"borderRight":!0},{"title":"进度","dataIndex":"progress","key":"progress","width":152},{"title":"截止时间","dataIndex":"time","key":"time","width":192},{"title":"对象","dataIndex":"object","key":"object","width":256}],h=[{"title":"分类","dataIndex":"type","key":"type","width":176,"fixed":!0,"borderRight":!0},{"title":"进度","dataIndex":"progress","key":"progress","width":152},{"title":"截止时间","dataIndex":"time","key":"time","width":200,"editable":!0,"editType":"text","handleSave":(e=Object(c.a)(Object(i.a)().mark((function _callee(e,t,n){return Object(i.a)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return console.log("handleSave",{"record":e,"value":t,"index":n}),f(void 0),p((function(t){return t[n]=e,Object(r.a)(t)})),a.abrupt("return",!0);case 4:case"end":return a.stop()}}),_callee)}))),function handleSave(t,n,a){return e.apply(this,arguments)})},{"title":"对象","dataIndex":"object","key":"object","width":256}];return Object(l.jsxs)(l.Fragment,{"children":[Object(l.jsx)(s.s,{"className":"group-title","children":"基础用法"}),Object(l.jsx)(a.a,{"rowKey":"id","columns":v,"dataSource":u}),Object(l.jsx)(s.s,{"className":"group-title","children":"plain"}),Object(l.jsx)(a.a,{"rowKey":"id","plain":!0,"columns":v,"dataSource":u}),Object(l.jsx)(s.s,{"className":"group-title","children":"可编辑&带边框"}),Object(l.jsx)(a.a,{"rowKey":"id","bordered":!0,"columns":h,"dataSource":O,"editingColumn":b,"onColumnEdit":function onColumnEdit(e){return f(e)}})]})}}}]);
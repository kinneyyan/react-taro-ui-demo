(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var a=n(268),r=n(289),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(a.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(r.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function __awaiter(e,t,n,a){return new(n||(n=Promise))((function(r,i){function fulfilled(e){try{step(a.next(e))}catch(e){i(e)}}function rejected(e){try{step(a.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((a=a.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(119),r=n(116),i=n(120),c=n(17),s=n.n(c),d=n(123);function Iconfont(e){var t=e.type,n=e.onClick,c=e.className,s=e.style,l=Object(a.b)(e,["type","onClick","className","style"]);return Object(r.jsx)(d.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(t,c),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},l))}var l=s.a.memo(Iconfont)},"168":function(e,t,n){"use strict";n.d(t,"a",(function(){return Table}));var a=n(21),r=n(4),i=n(12),c=n(7),s=n(15),d=n(119),l=n(116),o=n(118),u=n(122),f=n(117),b=n(23),j=n(120),h=n(17),g=n(123),m=Object(o.a)("table");function Table(e){var t=this,n=e.onColumnEdit,o=e.editingColumn,O=e.columns,x=e.dataSource,y=e.rowKey,w=e.showHeader,p=void 0===w||w,v=e.showNestedHeader,k=void 0!==v&&v,N=e.bordered,I=void 0!==N&&N,C=e.plain,T=void 0!==C&&C,S=e.reverseBg,E=void 0!==S&&S,P=e.fixedPadding,_=void 0!==P&&P,K=Object(h.useState)(x),B=Object(s.a)(K,2),H=B[0],R=B[1],z=function renderWidth(e){switch(Object(c.a)(e)){case"number":return b.a.pxTransform(Number(e));case"string":return e;default:return"auto"}},J=function renderColumnStyle(e){var t=e.fixed&&(null==O?void 0:O.findIndex((function(t){return t.dataIndex===e.dataIndex}))),n=0;if(t){var a=null==O?void 0:O.filter((function(e,n){return n<t}));n=(null==a?void 0:a.reduce((function(e,t){return e+Number(t.width)}),0))||0}return{"width":z(e.width),"position":e.fixed?"sticky":"initial","zIndex":e.fixed?1:0,"left":n?b.a.pxTransform(n):0}},Q=function handleColumnEdit(e){n&&n(e);var t=H.map((function(t){var n=t.isEditing;return n["".concat(e.dataIndex)]=!0,Object.assign(Object.assign({},t),{"isEditing":n})}));R(t)};return Object(h.useEffect)((function(){var e=O.filter((function(e){return e.editable}));if(e.length){var t={};e.forEach((function(e){t["".concat(e.dataIndex)]=!1}));var n=x.map((function(e){return Object.assign(Object.assign({},e),{"isEditing":t})}));R(n)}else R(x)}),[x]),Object(h.useEffect)((function(){o&&Q(o)}),[o]),Object(l.jsx)(f.s,Object.assign({"className":m},{"children":Object(l.jsxs)(f.s,Object.assign({"style":function renderTableStyle(){var e,t=null==O?void 0:O.every((function(e){return"number"==typeof e.width}));return t&&(e=null==O?void 0:O.reduce((function(e,t){return e+Number(t.width)}),0)),{"width":t?b.a.pxTransform(e):"auto"}}(),"className":"table"},{"children":[p&&Object(l.jsx)(f.s,Object.assign({"className":"table-row"},{"children":null==O?void 0:O.map((function(e,t){return Object(l.jsxs)(f.s,Object.assign({"style":Object.assign(Object.assign({},J(e)),{"backgroundColor":E||T?"#ffffff":"#fff8f8"}),"className":Object(j.a)("table-cell","th",{"bordered":I||e.borderRight,"nested-th":k,"edit":e.editable,"plain":T}),"onClick":function onClick(){return Q(e)}},{"children":[e.editable&&Object(l.jsx)(u.a,{"type":"icon-wodeshenqing","className":"icon"}),e.title]}),e.dataIndex||e.key||t)}))})),null==H?void 0:H.map((function(e,n){return Object(l.jsx)(f.s,Object.assign({"className":"table-row"},{"children":null==O?void 0:O.map((function(c,s){var o;return Object(l.jsx)(f.s,Object.assign({"style":Object.assign(Object.assign({},J(c)),{"backgroundColor":T?"#ffffff":n%2==(E?0:1)?"#fff8f8":"#ffffff"}),"className":Object(j.a)("table-cell",{"bordered":I||c.borderRight,"fixed-padding":_,"plain":T})},{"children":c.editable&&(null===(o=e.isEditing)||void 0===o?void 0:o[c.dataIndex||""])?Object(l.jsx)(g.d,{"type":c.editType,"name":c.dataIndex||"","value":e[c.dataIndex||""],"onBlur":function onBlur(s){return Object(d.a)(t,void 0,void 0,Object(a.a)().mark((function _callee(){var t;return Object(a.a)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(!c.handleSave){a.next=5;break}return a.next=3,c.handleSave(e,s,n);case 3:a.sent&&((t=Object(i.a)(H)).forEach((function(t){(t[y]||t.key)===(e[y]||e.key)&&(t[c.dataIndex||""]=s,t.isEditing=Object.assign(Object.assign({},t.isEditing),Object(r.a)({},c.dataIndex||"",!1)))})),R(t));case 5:case"end":return a.stop()}}),_callee)})))},"onChange":function onChange(){return null},"border":!1}):c.render?c.render(e[c.dataIndex||""],e,n):e[c.dataIndex||""]||"-"}),c.dataIndex||c.key||s)}))}),y?e[y]:e.key||n)}))]}))}))}},"203":function(e,t,n){},"306":function(e,t,n){"use strict";n.r(t);n(203);var a=n(4),r=n(15),i=n(116),c=n(118),s=n(117),d=n(23),l=n(120),o=n(17),u=n(168),f=Object(c.a)("nested-table");function NestedTable(e){var t,n=e.rowKey,c=e.category,b=e.subCategory,j=e.columns,h=e.dataSource,g=e.bordered,m=void 0!==g&&g,O=j.some((function(e){var t;return!!(null===(t=e.children)||void 0===t?void 0:t.length)})),x=j.map((function(e){return{"key":e.key,"title":e.title,"dataIndex":e.key,"width":d.a.pxTransform(e.width)}})),y=j.reduce((function(e,t){return e+t.width}),0),w=null===(t=null==j?void 0:j.map((function(e){return null==e?void 0:e.children})))||void 0===t?void 0:t.flat(),p=Object(o.useState)(),v=Object(r.a)(p,2),k=v[0],N=v[1];return Object(i.jsx)(s.s,Object.assign({"className":f},{"children":Object(i.jsxs)(s.s,Object.assign({"style":{"width":d.a.pxTransform(c.width+b.width+y)},"className":"table"},{"children":[O&&Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,{"style":{"width":d.a.pxTransform(c.width),"left":0},"className":Object(l.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(s.s,{"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(c.width)},"className":Object(l.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(s.s,Object.assign({"style":{"width":d.a.pxTransform(y)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showNestedHeader":!0,"columns":x,"rowKey":"","dataSource":[],"bordered":m})}))]})),Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,{"style":{"width":d.a.pxTransform(c.width),"left":0},"className":Object(l.a)("table-cell","bordered","fixed",{"bg":!O})}),Object(i.jsx)(s.s,{"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(c.width)},"className":Object(l.a)("table-cell","fixed",{"bordered":m,"bg":!O})}),Object(i.jsx)(s.s,Object.assign({"style":{"width":d.a.pxTransform(y)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"columns":O?w:j,"rowKey":"","dataSource":[],"bordered":m,"onColumnEdit":function onColumnEdit(e){return N(Object.assign(Object.assign({},e),{"timestamp":+new Date}))},"reverseBg":O})}))]})),h.map((function(e,t){return Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,Object.assign({"style":{"width":d.a.pxTransform(c.width),"left":0},"className":Object(l.a)("table-cell","category-cell","fixed","bordered",{"bg":t%2!=(O?1:0)})},{"children":e.category})),Object(i.jsx)(s.s,Object.assign({"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(c.width)},"className":Object(l.a)("table-cell","fixed")},{"children":Object(i.jsx)(u.a,{"columns":[{"dataIndex":b.key,"title":"","width":d.a.pxTransform(b.width)}],"rowKey":"","dataSource":e.data.map((function(e,t){return Object(a.a)({"key":e.key||t},b.key,e[b.key])})),"showHeader":!1,"bordered":m,"reverseBg":O||!O&&t%2==1,"fixedPadding":!0})})),Object(i.jsx)(s.s,Object.assign({"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showHeader":!1,"dataSource":e.data,"editingColumn":k,"columns":O?w:j,"bordered":m,"rowKey":n,"reverseBg":O||!O&&t%2==1,"fixedPadding":!0})}))]}),e.key||e[c.key]||t)}))]}))}))}t.default=function(){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(s.s,{"className":"group-title","children":"基础用法"}),Object(i.jsx)(NestedTable,{"rowKey":"key","category":{"key":"id","width":124},"subCategory":{"key":"name","width":204},"columns":[{"key":"numbers","title":"门店数","width":276,"children":[{"title":"目标","dataIndex":"target","key":"target","width":152},{"title":"实际","dataIndex":"real","key":"real","width":124}]},{"key":"sales","title":"销量 (本月)","width":540,"children":[{"title":"总签约","dataIndex":"total","key":"total","width":148},{"title":"签约高端","dataIndex":"high","key":"high","width":180},{"title":"签约超高端","dataIndex":"super","key":"super","width":208}]}],"dataSource":[{"key":"1","category":"总签约门店","data":[{"id":"1","name":"汇总","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"2","name":"专营签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"3","name":"专促签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"4","name":"混场包量","target":34,"real":43,"total":36,"high":954,"super":4284}]},{"key":"2","category":"新增签约门店","data":[{"id":"1","name":"汇总","target":334,"real":443,"total":136,"high":9554,"super":42284},{"id":"2","name":"专营签约","target":364,"real":433,"total":3236,"high":9554,"super":46284},{"id":"3","name":"专促签约","target":374,"real":413,"total":436,"high":9564,"super":41284},{"id":"4","name":"混场包量","target":434,"real":463,"total":736,"high":9254,"super":41284}]}],"bordered":!0})]})}}}]);
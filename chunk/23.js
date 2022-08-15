(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect})),n.d(t,"d",(function(){return uuid}));var a=n(250),r=n(267),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(a.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(r.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function __awaiter(e,t,n,a){return new(n||(n=Promise))((function(r,i){function fulfilled(e){try{step(a.next(e))}catch(e){i(e)}}function rejected(e){try{step(a.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((a=a.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={"exports":{}}},"123":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(120),r=n(117),i=n(121),s=n(17),c=n.n(s),d=n(124);function Iconfont(e){var t=e.type,n=e.onClick,s=e.className,c=e.style,o=Object(a.b)(e,["type","onClick","className","style"]);return Object(r.jsx)(d.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(t,s),"customStyle":Object.assign({},c,{"fontSize":"16px"}),"onClick":n},o))}var o=c.a.memo(Iconfont)},"165":function(e,t,n){"use strict";n.d(t,"a",(function(){return Table}));var a=n(4),r=n(12),i=n(8),s=n(15),c=n(21),d=n.n(c),o=n(120),l=n(117),u=n(119),f=n(123),b=n(118),j=n(23),h=n(121),g=n(17),m=n(124),x=Object(u.a)("table");function Table(e){var t=this,n=e.onColumnEdit,c=e.editingColumn,u=e.columns,O=e.dataSource,y=e.rowKey,w=e.showHeader,p=void 0===w||w,v=e.showNestedHeader,k=void 0!==v&&v,N=e.bordered,I=void 0!==N&&N,C=e.plain,T=void 0!==C&&C,S=e.reverseBg,E=void 0!==S&&S,P=e.fixedPadding,_=void 0!==P&&P,K=Object(g.useState)(O),B=Object(s.a)(K,2),H=B[0],R=B[1],z=function renderWidth(e){switch(Object(i.a)(e)){case"number":return j.a.pxTransform(Number(e));case"string":return e;default:return"auto"}},J=function renderColumnStyle(e){var t=e.fixed&&(null==u?void 0:u.findIndex((function(t){return t.dataIndex===e.dataIndex}))),n=0;if(t){var a=null==u?void 0:u.filter((function(e,n){return n<t}));n=(null==a?void 0:a.reduce((function(e,t){return e+Number(t.width)}),0))||0}return{"width":z(e.width),"position":e.fixed?"sticky":"initial","zIndex":e.fixed?1:0,"left":n?j.a.pxTransform(n):0}},M=function handleColumnEdit(e){n&&n(e);var t=H.map((function(t){var n=t.isEditing;return n["".concat(e.dataIndex)]=!0,Object.assign(Object.assign({},t),{"isEditing":n})}));R(t)};return Object(g.useEffect)((function(){var e=u.filter((function(e){return e.editable}));if(e.length){var t={};e.forEach((function(e){t["".concat(e.dataIndex)]=!1}));var n=O.map((function(e){return Object.assign(Object.assign({},e),{"isEditing":t})}));R(n)}else R(O)}),[O]),Object(g.useEffect)((function(){c&&M(c)}),[c]),Object(l.jsx)(b.s,Object.assign({"className":x},{"children":Object(l.jsxs)(b.s,Object.assign({"style":function renderTableStyle(){var e,t=null==u?void 0:u.every((function(e){return"number"==typeof e.width}));return t&&(e=null==u?void 0:u.reduce((function(e,t){return e+Number(t.width)}),0)),{"width":t?j.a.pxTransform(e):"auto"}}(),"className":"table"},{"children":[p&&Object(l.jsx)(b.s,Object.assign({"className":"table-row"},{"children":null==u?void 0:u.map((function(e,t){return Object(l.jsxs)(b.s,Object.assign({"style":Object.assign(Object.assign({},J(e)),{"backgroundColor":E||T?"#ffffff":"#fff8f8"}),"className":Object(h.a)("table-cell","th",{"bordered":I||e.borderRight,"nested-th":k,"edit":e.editable,"plain":T}),"onClick":function onClick(){return M(e)}},{"children":[e.editable&&Object(l.jsx)(f.a,{"type":"icon-wodeshenqing","className":"icon"}),e.title]}),e.dataIndex||e.key||t)}))})),null==H?void 0:H.map((function(e,n){return Object(l.jsx)(b.s,Object.assign({"className":"table-row"},{"children":null==u?void 0:u.map((function(i,s){var c;return Object(l.jsx)(b.s,Object.assign({"style":Object.assign(Object.assign({},J(i)),{"backgroundColor":T?"#ffffff":n%2==(E?0:1)?"#fff8f8":"#ffffff"}),"className":Object(h.a)("table-cell",{"bordered":I||i.borderRight,"fixed-padding":_,"plain":T})},{"children":i.editable&&(null===(c=e.isEditing)||void 0===c?void 0:c[i.dataIndex||""])?Object(l.jsx)(m.d,{"type":i.editType,"name":i.dataIndex||"","value":e[i.dataIndex||""],"onBlur":function onBlur(s){return Object(o.a)(t,void 0,void 0,d.a.mark((function _callee(){var t;return d.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(!i.handleSave){c.next=5;break}return c.next=3,i.handleSave(e,s,n);case 3:c.sent&&((t=Object(r.a)(H)).forEach((function(t){(t[y]||t.key)===(e[y]||e.key)&&(t[i.dataIndex||""]=s,t.isEditing=Object.assign(Object.assign({},t.isEditing),Object(a.a)({},i.dataIndex||"",!1)))})),R(t));case 5:case"end":return c.stop()}}),_callee)})))},"onChange":function onChange(){return null},"border":!1}):i.render?i.render(e[i.dataIndex||""],e,n):e[i.dataIndex||""]||"-"}),i.dataIndex||i.key||s)}))}),y?e[y]:e.key||n)}))]}))}))}},"193":function(e,t,n){},"285":function(e,t,n){"use strict";n.r(t);n(193);var a=n(4),r=n(15),i=n(117),s=n(119),c=n(118),d=n(23),o=n(121),l=n(17),u=n(165),f=Object(s.a)("nested-table");function NestedTable(e){var t,n=e.rowKey,s=e.category,b=e.subCategory,j=e.columns,h=e.dataSource,g=e.bordered,m=void 0!==g&&g,x=j.some((function(e){var t;return!!(null===(t=e.children)||void 0===t?void 0:t.length)})),O=j.map((function(e){return{"key":e.key,"title":e.title,"dataIndex":e.key,"width":d.a.pxTransform(e.width)}})),y=j.reduce((function(e,t){return e+t.width}),0),w=null===(t=null==j?void 0:j.map((function(e){return null==e?void 0:e.children})))||void 0===t?void 0:t.flat(),p=Object(l.useState)(),v=Object(r.a)(p,2),k=v[0],N=v[1];return Object(i.jsx)(c.s,Object.assign({"className":f},{"children":Object(i.jsxs)(c.s,Object.assign({"style":{"width":d.a.pxTransform(s.width+b.width+y)},"className":"table"},{"children":[x&&Object(i.jsxs)(c.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(c.s,{"style":{"width":d.a.pxTransform(s.width),"left":0},"className":Object(o.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(c.s,{"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(s.width)},"className":Object(o.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(c.s,Object.assign({"style":{"width":d.a.pxTransform(y)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showNestedHeader":!0,"columns":O,"rowKey":"","dataSource":[],"bordered":m})}))]})),Object(i.jsxs)(c.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(c.s,{"style":{"width":d.a.pxTransform(s.width),"left":0},"className":Object(o.a)("table-cell","bordered","fixed",{"bg":!x})}),Object(i.jsx)(c.s,{"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(s.width)},"className":Object(o.a)("table-cell","fixed",{"bordered":m,"bg":!x})}),Object(i.jsx)(c.s,Object.assign({"style":{"width":d.a.pxTransform(y)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"columns":x?w:j,"rowKey":"","dataSource":[],"bordered":m,"onColumnEdit":function onColumnEdit(e){return N(Object.assign(Object.assign({},e),{"timestamp":+new Date}))},"reverseBg":x})}))]})),h.map((function(e,t){return Object(i.jsxs)(c.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(c.s,Object.assign({"style":{"width":d.a.pxTransform(s.width),"left":0},"className":Object(o.a)("table-cell","category-cell","fixed","bordered",{"bg":t%2!=(x?1:0)})},{"children":e.category})),Object(i.jsx)(c.s,Object.assign({"style":{"width":d.a.pxTransform(b.width),"left":d.a.pxTransform(s.width)},"className":Object(o.a)("table-cell","fixed")},{"children":Object(i.jsx)(u.a,{"columns":[{"dataIndex":b.key,"title":"","width":d.a.pxTransform(b.width)}],"rowKey":"","dataSource":e.data.map((function(e,t){return Object(a.a)({"key":e.key||t},b.key,e[b.key])})),"showHeader":!1,"bordered":m,"reverseBg":x||!x&&t%2==1,"fixedPadding":!0})})),Object(i.jsx)(c.s,Object.assign({"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showHeader":!1,"dataSource":e.data,"editingColumn":k,"columns":x?w:j,"bordered":m,"rowKey":n,"reverseBg":x||!x&&t%2==1,"fixedPadding":!0})}))]}),e.key||e[s.key]||t)}))]}))}))}t.default=function(){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(c.s,{"className":"group-title","children":"基础用法"}),Object(i.jsx)(NestedTable,{"rowKey":"key","category":{"key":"id","width":124},"subCategory":{"key":"name","width":204},"columns":[{"key":"numbers","title":"门店数","width":276,"children":[{"title":"目标","dataIndex":"target","key":"target","width":152},{"title":"实际","dataIndex":"real","key":"real","width":124}]},{"key":"sales","title":"销量 (本月)","width":540,"children":[{"title":"总签约","dataIndex":"total","key":"total","width":148},{"title":"签约高端","dataIndex":"high","key":"high","width":180},{"title":"签约超高端","dataIndex":"super","key":"super","width":208}]}],"dataSource":[{"key":"1","category":"总签约门店","data":[{"id":"1","name":"汇总","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"2","name":"专营签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"3","name":"专促签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"4","name":"混场包量","target":34,"real":43,"total":36,"high":954,"super":4284}]},{"key":"2","category":"新增签约门店","data":[{"id":"1","name":"汇总","target":334,"real":443,"total":136,"high":9554,"super":42284},{"id":"2","name":"专营签约","target":364,"real":433,"total":3236,"high":9554,"super":46284},{"id":"3","name":"专促签约","target":374,"real":413,"total":436,"high":9564,"super":41284},{"id":"4","name":"混场包量","target":434,"real":463,"total":736,"high":9254,"super":41284}]}],"bordered":!0})]})}}}]);
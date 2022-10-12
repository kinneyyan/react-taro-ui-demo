/*! For license information please see 24.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return isString})),n.d(t,"d",(function(){return selectorQueryClientRect}));var r=n(275),a=n(296),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(r.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(a.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function __awaiter(e,t,n,r){return new(n||(n=Promise))((function(a,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r.throw(e))}catch(e){i(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(119),a=n(116),i=n(120),c=n(17),s=n.n(c),o=n(123);function Iconfont(e){var t=e.type,n=e.onClick,c=e.className,s=e.style,d=Object(r.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(t,c),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},d))}var d=s.a.memo(Iconfont)},"125":function(e,t,n){"use strict";function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return uuid})),n.d(t,"c",(function(){return a})),function init(e,t){function set(n,r,a){if("undefined"!=typeof document){"number"==typeof(a=assign({},t,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in a)a[c]&&(i+="; "+c,!0!==a[c]&&(i+="="+a[c].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+i}}return Object.create({"set":set,"get":function get(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var i=n[a].split("="),c=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(r[s]=e.read(c,s),t===s)break}catch(e){}}return t?r[t]:r}},"remove":function remove(e,t){set(e,"",assign({},t,{"expires":-1}))},"withAttributes":function withAttributes(e){return init(this.converter,assign({},this.attributes,e))},"withConverter":function withConverter(e){return init(assign({},this.converter,e),this.attributes)}},{"attributes":{"value":Object.freeze(t)},"converter":{"value":Object.freeze(e)}})}({"read":function read(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},"write":function write(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{"path":"/"});var r={"convertToDate":function convertToDate(e){var t;if(isNaN(new Date(e).getTime()))throw new Error("".concat(e," 不是一个有效的时间"));return e instanceof Date||(t=new Date(e)),t},"formatDate":function formatDate(e,t){var n=(t||{}).format,a=void 0===n?"yyyy-MM-dd hh:mm:ss":n,i=(t||{}).type,c=void 0===i?"YMDHMS":i;if(!(null==a?void 0:a.trim()))switch(c){case"YMDHMS":a="yyyy-MM-dd hh:mm:ss";break;case"YMD":a="yyyy-MM-dd";break;case"YM":a="yyyy-MM";break;case"HM":a="hh:mm";break;case"HMS":a="hh:mm:ss";break;case"年月日":a="yyyy年MM月dd日"}var s=r.convertToDate(e),o={"y+":s.getFullYear(),"Y+":s.getFullYear(),"M+":s.getMonth()+1,"d+":s.getDate(),"D+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds()};for(var d in o)new RegExp("(".concat(d,")")).test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?o[d]:"0".concat(o[d]).substr(-RegExp.$1.length)));return a}};"undefined"!=typeof window&&n.e(100).then(n.bind(null,131)).then((function(e){}));var a={"isNull":function isNull(e){return null==e||""===e||"{}"===e||Object.is(e,NaN)||Array.isArray(e)&&e.filter((function(e){return e})).length<=0},"isMobile":function isMobile(e){return/^1[3-9]\d{9}$/.test(e)},"isNumber":function isNumber(e){return/^[0-9]+.?[0-9]*$/.test(e)}};function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&+e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"172":function(e,t,n){"use strict";n.d(t,"a",(function(){return Table}));var r=n(21),a=n(4),i=n(12),c=n(7),s=n(15),o=n(119),d=n(116),l=n(117),u=n(122),f=n(125),b=n(118),h=n(23),g=n(120),j=n(17),m=n(123),y=Object(l.a)("table");function Table(e){var t=this,n=e.onColumnEdit,l=e.editingColumn,p=e.columns,x=e.dataSource,O=e.rowKey,v=e.showHeader,w=void 0===v||v,k=e.showNestedHeader,N=void 0!==k&&k,C=e.bordered,I=void 0!==C&&C,T=e.plain,S=void 0!==T&&T,M=e.reverseBg,E=void 0!==M&&M,D=e.fixedPadding,R=void 0!==D&&D,P=Object(j.useState)(x),_=Object(s.a)(P,2),B=_[0],H=_[1],K=function renderWidth(e){switch(Object(c.a)(e)){case"number":return h.a.pxTransform(Number(e));case"string":return e;default:return"auto"}},U=function renderColumnStyle(e){var t=e.fixed&&(null==p?void 0:p.findIndex((function(t){return t.dataIndex===e.dataIndex}))),n=0;if(t){var r=null==p?void 0:p.filter((function(e,n){return n<t}));n=(null==r?void 0:r.reduce((function(e,t){return e+Number(t.width)}),0))||0}return{"width":K(e.width),"position":e.fixed?"sticky":"initial","zIndex":e.fixed?1:0,"left":n?h.a.pxTransform(n):0}},Y=function handleColumnEdit(e){n&&n(e);var t=B.map((function(t){var n=t.isEditing;return n["".concat(e.dataIndex)]=!0,Object.assign(Object.assign({},t),{"isEditing":n})}));H(t)};return Object(j.useEffect)((function(){var e=p.filter((function(e){return e.editable}));if(e.length){var t={};e.forEach((function(e){t["".concat(e.dataIndex)]=!1}));var n=x.map((function(e){return Object.assign(Object.assign({},e),{"isEditing":t})}));H(n)}else H(x)}),[x]),Object(j.useEffect)((function(){l&&Y(l)}),[l]),Object(d.jsx)(b.s,Object.assign({"className":y},{"children":Object(d.jsxs)(b.s,Object.assign({"style":function renderTableStyle(){var e,t=null==p?void 0:p.every((function(e){return"number"==typeof e.width}));return t&&(e=null==p?void 0:p.reduce((function(e,t){return e+Number(t.width)}),0)),{"width":t?h.a.pxTransform(e):"auto"}}(),"className":"table"},{"children":[w&&Object(d.jsx)(b.s,Object.assign({"className":"table-row"},{"children":null==p?void 0:p.map((function(e,t){var n,r;return Object(d.jsxs)(b.s,Object.assign({"style":Object.assign(Object.assign({},U(e)),{"backgroundColor":E||S?"#ffffff":"#fff8f8"}),"className":Object(g.a)("table-cell","th",{"bordered":I||e.borderRight,"nested-th":N,"edit":e.editable,"plain":S}),"onClick":function onClick(){return Y(e)}},{"children":[e.editable&&Object(d.jsx)(u.a,{"type":"icon-wodeshenqing","className":"icon"}),e.title]}),null!==(r=null!==(n=e.dataIndex)&&void 0!==n?n:e.key)&&void 0!==r?r:t)}))})),null==B?void 0:B.map((function(e,n){return Object(d.jsx)(b.s,Object.assign({"className":"table-row"},{"children":null==p?void 0:p.map((function(c,s){var l,u,h,j;return Object(d.jsx)(b.s,Object.assign({"style":Object.assign(Object.assign({},U(c)),{"backgroundColor":S?"#ffffff":n%2==(E?0:1)?"#fff8f8":"#ffffff"}),"className":Object(g.a)("table-cell",{"bordered":I||c.borderRight,"fixed-padding":R,"plain":S})},{"children":c.editable&&(null===(l=e.isEditing)||void 0===l?void 0:l[c.dataIndex||""])?Object(d.jsx)(m.d,{"type":c.editType,"name":null!==(u=c.dataIndex)&&void 0!==u?u:"","value":e[c.dataIndex||""],"onBlur":function onBlur(s){return Object(o.a)(t,void 0,void 0,Object(r.a)().mark((function _callee(){var t;return Object(r.a)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(!c.handleSave){r.next=5;break}return r.next=3,c.handleSave(e,s,n);case 3:r.sent&&((t=Object(i.a)(B)).forEach((function(t){(t[O]||t.key)===(e[O]||e.key)&&(t[c.dataIndex||""]=s,t.isEditing=Object.assign(Object.assign({},t.isEditing),Object(a.a)({},c.dataIndex||"",!1)))})),H(t));case 5:case"end":return r.stop()}}),_callee)})))},"onChange":function onChange(){return null},"border":!1}):c.render?c.render(e[c.dataIndex||""],e,n):f.c.isNull(e[c.dataIndex||""])?"-":e[c.dataIndex||""]}),null!==(j=null!==(h=c.dataIndex)&&void 0!==h?h:c.key)&&void 0!==j?j:s)}))}),O?e[O]:e.key||n)}))]}))}))}},"210":function(e,t,n){},"314":function(e,t,n){"use strict";n.r(t);n(210);var r=n(4),a=n(15),i=n(116),c=n(117),s=n(118),o=n(23),d=n(120),l=n(17),u=n(172),f=Object(c.a)("nested-table");function NestedTable(e){var t,n=e.rowKey,c=e.category,b=e.subCategory,h=e.columns,g=e.dataSource,j=e.bordered,m=void 0!==j&&j,y=h.some((function(e){var t;return!!(null===(t=e.children)||void 0===t?void 0:t.length)})),p=h.map((function(e){return{"key":e.key,"title":e.title,"dataIndex":e.key,"width":o.a.pxTransform(e.width)}})),x=h.reduce((function(e,t){return e+t.width}),0),O=null===(t=null==h?void 0:h.map((function(e){return null==e?void 0:e.children})))||void 0===t?void 0:t.flat(),v=Object(l.useState)(),w=Object(a.a)(v,2),k=w[0],N=w[1];return Object(i.jsx)(s.s,Object.assign({"className":f},{"children":Object(i.jsxs)(s.s,Object.assign({"style":{"width":o.a.pxTransform(c.width+b.width+x)},"className":"table"},{"children":[y&&Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,{"style":{"width":o.a.pxTransform(c.width),"left":0},"className":Object(d.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(s.s,{"style":{"width":o.a.pxTransform(b.width),"left":o.a.pxTransform(c.width)},"className":Object(d.a)("table-cell","bg","fixed",{"bordered":m})}),Object(i.jsx)(s.s,Object.assign({"style":{"width":o.a.pxTransform(x)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showNestedHeader":!0,"columns":p,"rowKey":"","dataSource":[],"bordered":m})}))]})),Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,{"style":{"width":o.a.pxTransform(c.width),"left":0},"className":Object(d.a)("table-cell","bordered","fixed",{"bg":!y})}),Object(i.jsx)(s.s,{"style":{"width":o.a.pxTransform(b.width),"left":o.a.pxTransform(c.width)},"className":Object(d.a)("table-cell","fixed",{"bordered":m,"bg":!y})}),Object(i.jsx)(s.s,Object.assign({"style":{"width":o.a.pxTransform(x)},"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"columns":y?O:h,"rowKey":"","dataSource":[],"bordered":m,"onColumnEdit":function onColumnEdit(e){return N(Object.assign(Object.assign({},e),{"timestamp":+new Date}))},"reverseBg":y})}))]})),g.map((function(e,t){return Object(i.jsxs)(s.s,Object.assign({"className":"table-row"},{"children":[Object(i.jsx)(s.s,Object.assign({"style":{"width":o.a.pxTransform(c.width),"left":0},"className":Object(d.a)("table-cell","category-cell","fixed","bordered",{"bg":t%2!=(y?1:0)})},{"children":e.category})),Object(i.jsx)(s.s,Object.assign({"style":{"width":o.a.pxTransform(b.width),"left":o.a.pxTransform(c.width)},"className":Object(d.a)("table-cell","fixed")},{"children":Object(i.jsx)(u.a,{"columns":[{"dataIndex":b.key,"title":"","width":o.a.pxTransform(b.width)}],"rowKey":"","dataSource":e.data.map((function(e,t){return Object(r.a)({"key":e.key||t},b.key,e[b.key])})),"showHeader":!1,"bordered":m,"reverseBg":y||!y&&t%2==1,"fixedPadding":!0})})),Object(i.jsx)(s.s,Object.assign({"className":"table-cell"},{"children":Object(i.jsx)(u.a,{"showHeader":!1,"dataSource":e.data,"editingColumn":k,"columns":y?O:h,"bordered":m,"rowKey":n,"reverseBg":y||!y&&t%2==1,"fixedPadding":!0})}))]}),e.key||e[c.key]||t)}))]}))}))}t.default=function(){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(s.s,{"className":"group-title","children":"基础用法"}),Object(i.jsx)(NestedTable,{"rowKey":"key","category":{"key":"id","width":124},"subCategory":{"key":"name","width":204},"columns":[{"key":"numbers","title":"门店数","width":276,"children":[{"title":"目标","dataIndex":"target","key":"target","width":152},{"title":"实际","dataIndex":"real","key":"real","width":124}]},{"key":"sales","title":"销量 (本月)","width":540,"children":[{"title":"总签约","dataIndex":"total","key":"total","width":148},{"title":"签约高端","dataIndex":"high","key":"high","width":180},{"title":"签约超高端","dataIndex":"super","key":"super","width":208}]}],"dataSource":[{"key":"1","category":"总签约门店","data":[{"id":"1","name":"汇总","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"2","name":"专营签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"3","name":"专促签约","target":34,"real":43,"total":36,"high":954,"super":4284},{"id":"4","name":"混场包量","target":34,"real":43,"total":36,"high":954,"super":4284}]},{"key":"2","category":"新增签约门店","data":[{"id":"1","name":"汇总","target":334,"real":443,"total":136,"high":9554,"super":42284},{"id":"2","name":"专营签约","target":364,"real":433,"total":3236,"high":9554,"super":46284},{"id":"3","name":"专促签约","target":374,"real":413,"total":436,"high":9564,"super":41284},{"id":"4","name":"混场包量","target":434,"real":463,"total":736,"high":9254,"super":41284}]}],"bordered":!0})]})}}}]);
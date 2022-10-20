/*! For license information please see 16.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"117":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return getPrefixCls})),n.d(t,"c",(function(){return getSystemInfo})),n.d(t,"d",(function(){return isString})),n.d(t,"e",(function(){return selectorQueryClientRect}));var i=n(269),c=n(290),o=null,a=500;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,t){o&&e(o),Object(i.a)().then((function(t){e(o=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(c.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(i=Object.getOwnPropertySymbols(e);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(n[i[c]]=e[i[c]])}return n}function __awaiter(e,t,n,i){return new(n||(n=Promise))((function(c,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i.throw(e))}catch(e){o(e)}}function step(e){e.done?c(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={"exports":{}}},"125":function(e,t,n){"use strict";function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return uuid})),n.d(t,"c",(function(){return c})),function init(e,t){function set(n,i,c){if("undefined"!=typeof document){"number"==typeof(c=assign({},t,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var a in c)c[a]&&(o+="; "+a,!0!==c[a]&&(o+="="+c[a].split(";")[0]));return document.cookie=n+"="+e.write(i,n)+o}}return Object.create({"set":set,"get":function get(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],i={},c=0;c<n.length;c++){var o=n[c].split("="),a=o.slice(1).join("=");try{var r=decodeURIComponent(o[0]);if(i[r]=e.read(a,r),t===r)break}catch(e){}}return t?i[t]:i}},"remove":function remove(e,t){set(e,"",assign({},t,{"expires":-1}))},"withAttributes":function withAttributes(e){return init(this.converter,assign({},this.attributes,e))},"withConverter":function withConverter(e){return init(assign({},this.converter,e),this.attributes)}},{"attributes":{"value":Object.freeze(t)},"converter":{"value":Object.freeze(e)}})}({"read":function read(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},"write":function write(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{"path":"/"});var i={"convertToDate":function convertToDate(e){var t;if(isNaN(new Date(e).getTime()))throw new Error("".concat(e," 不是一个有效的时间"));return e instanceof Date||(t=new Date(e)),t},"formatDate":function formatDate(e,t){var n=(t||{}).format,c=void 0===n?"yyyy-MM-dd hh:mm:ss":n,o=(t||{}).type,a=void 0===o?"YMDHMS":o;if(!(null==c?void 0:c.trim()))switch(a){case"YMDHMS":c="yyyy-MM-dd hh:mm:ss";break;case"YMD":c="yyyy-MM-dd";break;case"YM":c="yyyy-MM";break;case"HM":c="hh:mm";break;case"HMS":c="hh:mm:ss";break;case"年月日":c="yyyy年MM月dd日"}var r=i.convertToDate(e),s={"y+":r.getFullYear(),"Y+":r.getFullYear(),"M+":r.getMonth()+1,"d+":r.getDate(),"D+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds()};for(var l in s)new RegExp("(".concat(l,")")).test(c)&&(c=c.replace(RegExp.$1,1===RegExp.$1.length?s[l]:"0".concat(s[l]).substr(-RegExp.$1.length)));return c}};"undefined"!=typeof window&&n.e(100).then(n.bind(null,131)).then((function(e){}));var c={"isNull":function isNull(e){return null==e||""===e||"{}"===e||Object.is(e,NaN)||Array.isArray(e)&&e.filter((function(e){return e})).length<=0},"isMobile":function isMobile(e){return/^1[3-9]\d{9}$/.test(e)},"isNumber":function isNumber(e){return/^[0-9]+.?[0-9]*$/.test(e)}};function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&+e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"126":function(e,t,n){"use strict";n.d(t,"a",(function(){return Button}));var i=n(119),c=n(116),o=n(117),a=n(118),r=n(120),s=Object(o.b)("button");function Button(e){var t=e.type,n=void 0===t?"default":t,l=e.children,u=e.className,d=e.plain,f=e.disabled,b=e.size,m=void 0===b?"default":b,j=e.onClick,p=Object(i.b)(e,["type","children","className","plain","disabled","size","onClick"]),O=Object(r.a)(s,u,n,"size-".concat(m),{"plain":d,"disabled":f});return Object(c.jsx)(a.a,Object.assign({"className":O,"type":n,"onClick":f?void 0:j,"disabled":f,"size":m},p,{"children":Object(o.d)(l)?Object(c.jsx)(a.q,Object.assign({"className":"".concat(s,"__text")},{"children":l})):l}))}},"127":function(e,t,n){"use strict";n.d(t,"a",(function(){return Affix}));var i=n(4),c=n(119),o=n(116),a=n(117),r=n(118),s=n(120),l=n(126),u=Object(a.b)("affix"),d={"left":"".concat(u,"-left"),"center":"".concat(u,"-center"),"right":"".concat(u,"-right"),"space-between":"".concat(u,"-space-between"),"space-around":"".concat(u,"-space-around")},f={"top":"".concat(u,"-top"),"bottom":"".concat(u,"-bottom")};function Affix(e){var t,n=e.children,a=e.layout,b=void 0===a?"center":a,m=e.postion,j=e.position,p=e.mode,O=e.cancelText,v=void 0===O?"取消":O,g=e.confirmText,h=void 0===g?"确定":g,C=e.confirmDisable,x=void 0!==C&&C,y=e.cancelDisable,N=void 0!==y&&y,w=e.safeAreaInsetBottom,k=e.className,M=e.onCancel,D=e.onConfirm,S=Object(c.b)(e,["children","layout","postion","position","mode","cancelText","confirmText","confirmDisable","cancelDisable","safeAreaInsetBottom","className","onCancel","onConfirm"]),_=j||m||"bottom",I=null!=w?w:"bottom"===_,T=Object(s.a)(u,f[_],(t={},Object(i.a)(t,d[b],!p),Object(i.a)(t,"safe-area-inset-bottom",I),Object(i.a)(t,"same-width",!!p),t),k);return Object(o.jsxs)(o.Fragment,{"children":["bottom"===_&&Object(o.jsx)(r.s,{"className":Object(s.a)("".concat(u,"-placeholder"),{"safe-area-inset-bottom":I})}),Object(o.jsx)(r.s,Object.assign({"className":T},S,{"children":p?"singleBtn"===p?Object(o.jsx)(l.a,Object.assign({"type":"primary","disabled":x,"onClick":D},{"children":h})):Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(l.a,Object.assign({"type":"default","disabled":N,"onClick":M,"plain":!0},{"children":v})),Object(o.jsx)(l.a,Object.assign({"type":"primary","disabled":x,"onClick":D},{"children":h}))]}):n}))]})}},"133":function(e,t,n){"use strict";n.d(t,"a",(function(){return Modal}));var i=n(119),c=n(116),o=n(117),a=n(118),r=n(120),s=n(123),l=n(127),u=Object(o.b)("modal"),d={"top":"bf-modal-top","bottom":"bf-modal"};function Modal(e){var t=e.isOpened,n=void 0!==t&&t,f=e.title,b=e.titleSplit,m=void 0!==b&&b,j=e.postion,p=e.position,O=e.children,v=e.actionConfig,g=e.onClose,h=e.slotRight,C=e.className,x=Object(i.b)(e,["isOpened","title","titleSplit","postion","position","children","actionConfig","onClose","slotRight","className"]),y=p||j||"bottom",N=Object(r.a)(u,d[y],C);return Object(c.jsxs)(s.b,Object.assign({"className":N,"isOpened":n,"onClose":g},x,{"children":[Object(o.d)(f)?Object(c.jsxs)(a.s,Object.assign({"className":Object(r.a)("header",{"header-split":m})},{"children":[Object(c.jsx)(a.q,Object.assign({"className":"title"},{"children":f})),Object(c.jsx)(a.q,Object.assign({"className":"slot-right"},{"children":h}))]})):f,n&&Object(c.jsx)(a.s,Object.assign({"className":Object(r.a)({"content-no-title":!f})},{"children":O})),v&&Object(c.jsx)(l.a,Object.assign({"safeAreaInsetBottom":"bottom"===y},v))]}))}},"196":function(e,t,n){},"197":function(e,t,n){e.exports={"indicatorClass":"index-module__indicatorClass___3xEUj","selected2":"index-module__selected2___g9OND"}},"304":function(e,t,n){"use strict";n.r(t);n(196);var i=n(15),c=n(119),o=n(116),a=n(117),r=n(125),s=n(118),l=n(23),u=n(120),d=n(17),f=n(133),b=Object(a.b)("modal-picker");function ModalPicker(e){var t=e.id,n=void 0===t?"":t,a=e.isOpened,m=void 0!==a&&a,j=e.title,p=void 0===j?"请选择":j,O=e.value,v=e.data,g=void 0===v?[]:v,h=e.fieldNames,C=void 0===h?{"label":"label","value":"value"}:h,x=e.confirmDisable,y=e.cancelDisable,N=e.confirmText,w=e.cancelText,k=e.onClose,M=e.onConfirm,D=e.onCancel,S=e.renderItem,_=e.indicatorClass,I=Object(c.b)(e,["id","isOpened","title","value","data","fieldNames","confirmDisable","cancelDisable","confirmText","cancelText","onClose","onConfirm","onCancel","renderItem","indicatorClass"]),T=Object(d.useState)(),E=Object(i.a)(T,2),R=E[0],B=E[1],P=Object(d.useState)(g[0]),A=Object(i.a)(P,2),F=A[0],U=A[1],Y=Object(d.useState)([0]),z=Object(i.a)(Y,2),H=z[0],$=z[1],J=Object(d.useState)({}),q=Object(i.a)(J,2),Q=q[0],V=q[1];Object(d.useEffect)((function(){l.a.getEnv()===l.a.ENV_TYPE.WEB&&(V({"visibility":"visible","opacity":0}),setTimeout((function(){V({})}),500))}),[]),Object(d.useEffect)((function(){(null==g?void 0:g.length)&&JSON.stringify(g)!=JSON.stringify(R)&&(U(g[0]),$([0]),B(g))}),[g]),Object(d.useEffect)((function(){(null==g?void 0:g.length)&&(r.c.isNull(O)?(U(g[0]),$([0])):(U(g.find((function(e){return e[C.value]==O}))||{}),$([g.findIndex((function(e){return e[C.value]==O}))])))}),[O,n]);var W=Object(d.useMemo)((function(){return{"mode":"doubleBtn","confirmDisable":x,"cancelDisable":y,"confirmText":N,"cancelText":w,"onCancel":D,"onConfirm":function onConfirm(){return null==M?void 0:M(n,F)}}}),[x,y,N,w,D,M,n,F]);return Object(o.jsx)(f.a,Object.assign({"style":Q,"className":b,"isOpened":m,"title":p,"titleSplit":!1,"onClose":null!=k?k:D,"actionConfig":W},I,{"children":Object(o.jsx)(s.j,Object.assign({"className":"picker-view","indicatorClass":Object(u.a)("indicator",_),"onChange":function onChange(e){var t=e.detail.value;U(g[t]),$(t)},"value":H},{"children":Object(o.jsx)(s.k,{"children":null==g?void 0:g.map((function(e){return S?Object(o.jsx)(s.s,Object.assign({"className":"picker-item"},{"children":S(e,(null==F?void 0:F[C.value])===e[C.value])}),e[C.value]):Object(o.jsx)(s.s,Object.assign({"className":Object(u.a)("picker-item",{"selected":(null==F?void 0:F[C.value])===e[C.value]})},{"children":e[C.label]}),e[C.value])}))})}))}))}var m=n(197),j=n.n(m),p=[{"label":"选项1","value":1},{"label":"选项2","value":2},{"label":"选项3","value":3},{"label":"选项4","value":4},{"label":"选项5","value":5}],O=[{"name":"选项1","code":1},{"name":"选项2","code":2},{"name":"选项3","code":3},{"name":"选项4","code":4}];t.default=function(){var e=Object(d.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(d.useState)(!1),r=Object(i.a)(a,2),l=r[0],u=r[1];return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(s.a,{"className":"group-title","onClick":function onClick(){return c(!0)},"children":"基础用法"}),Object(o.jsx)(ModalPicker,{"isOpened":n,"data":p,"onCancel":function onCancel(){console.log("onCancel"),c(!1)},"onConfirm":function onConfirm(e,t){console.log("onConfirm",{"key":e,"value":t}),c(!1)}}),Object(o.jsx)(s.a,{"className":"group-title","onClick":function onClick(){return u(!0)},"children":"自定义渲染"}),Object(o.jsx)(ModalPicker,{"isOpened":l,"data":O,"fieldNames":{"label":"name","value":"code"},"indicatorClass":j.a.indicatorClass,"onCancel":function onCancel(){console.log("onCancel"),u(!1)},"onConfirm":function onConfirm(e,t){console.log("onConfirm",{"key":e,"value":t}),u(!1)},"renderItem":function renderItem(e,t){return Object(o.jsxs)(s.s,{"className":t?j.a.selected2:"","children":["你好 ",e.label]},e.value)}})]})}}}]);
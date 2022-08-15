(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"119":function(e,n,t){"use strict";t.d(n,"a",(function(){return getPrefixCls})),t.d(n,"b",(function(){return getSystemInfo})),t.d(n,"c",(function(){return selectorQueryClientRect})),t.d(n,"d",(function(){return uuid}));var c=t(246),o=t(262),a=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],n=0;n<36;n++)e[n]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function getSystemInfo(){return new Promise((function(e,n){a&&e(a),Object(c.a)().then((function(n){e(a=n)})).catch((function(e){return n(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(n){Object(o.a)().select(e).boundingClientRect().exec((function(e){n(e)}))}))}},"120":function(e,n,t){"use strict";function __rest(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(e);o<c.length;o++)n.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(e,c[o])&&(t[c[o]]=e[c[o]])}return t}function __awaiter(e,n,t,c){return new(t||(t=Promise))((function(o,a){function fulfilled(e){try{step(c.next(e))}catch(e){a(e)}}function rejected(e){try{step(c.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof t?e:new t((function(n){n(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,n||[])).next())}))}t.d(n,"a",(function(){return __awaiter})),t.d(n,"b",(function(){return __rest}))},"122":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c={"exports":{}}},"123":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var c=t(120),o=t(117),a=t(121),l=t(17),r=t.n(l),u=t(124);function Iconfont(e){var n=e.type,t=e.onClick,l=e.className,r=e.style,i=Object(c.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(u.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(a.a)(n,l),"customStyle":Object.assign({},r,{"fontSize":"16px"}),"onClick":t},i))}var i=r.a.memo(Iconfont)},"203":function(e,n,t){},"204":function(e,n,t){},"268":function(e,n,t){"use strict";t.r(n);t(203);var c=t(12),o=t(120),a=t(117),l=t(17),r=t(119),u=t(118),i=t(121),s=t(123),b=Object(r.a)("checkbox"),f={"square":{"DEFAULT":"icon-checkbox","CHECKED":"icon-checkbox-on"},"circle":{"DEFAULT":"icon-radio","CHECKED":"icon-shenpichenggong"}};function Checkbox(e){var n=e.label,t=e.value,c=e.checked,r=void 0!==c&&c,d=e.disabled,j=void 0!==d&&d,h=e.iconClass,O=e.iconStyle,x=void 0===O?"square":O,p=e.onChange,C=e.className,v=Object(o.b)(e,["label","value","checked","disabled","iconClass","iconStyle","onChange","className"]),g=Object(i.a)(b,C,{"disabled":j}),k=Object(l.useCallback)((function(){null==p||p(t)}),[p]);return Object(a.jsxs)(u.s,Object.assign({"className":g,"onClick":k},v,{"children":[Object(a.jsx)(s.a,{"type":"".concat(r?f[x].CHECKED:f[x].DEFAULT),"className":Object(i.a)("checkbox-default",{"checkbox-checked":r},h)}),Object(a.jsx)(u.q,Object.assign({"className":"text"},{"children":n}))]}))}var d=Object(r.a)("checkbox-group"),j="horizontal";function CheckboxGroup(e){var n=e.groups,t=e.values,r=e.iconStyle,s=void 0===r?"square":r,b=e.layout,f=void 0===b?j:b,h=e.disabled,O=void 0!==h&&h,x=e.onChange,p=e.className,C=Object(o.b)(e,["groups","values","iconStyle","layout","disabled","onChange","className"]),v=function handleOnChange(e){(null==t?void 0:t.includes(e))?null==x||x(t.filter((function(n){return n!==e}))):null==x||x([].concat(Object(c.a)(t),[e]))},g=Object(i.a)(d,p,f);return Object(a.jsx)(u.s,Object.assign({"className":g},C,{"children":(n||[]).map((function(e){return Object(l.createElement)(Checkbox,Object.assign({"iconStyle":s,"disabled":O},e,{"key":e.value,"checked":null==t?void 0:t.includes(e.value),"onChange":v}))}))}))}t(204);var h=t(15);n.default=function(){var e=Object(l.useState)(!0),n=Object(h.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)(!0),r=Object(h.a)(o,2),i=r[0],s=r[1],b=Object(l.useState)(["1"]),f=Object(h.a)(b,2),d=f[0],j=f[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(u.s,{"className":"group-title","children":"BfCheckbox - 基本用法"}),Object(a.jsx)(Checkbox,{"label":"选项1","value":"1","checked":t,"onChange":function onChange(){c((function(e){return!e}))}}),Object(a.jsx)(u.s,{"className":"group-title","children":"BfCheckbox - disabled=true"}),Object(a.jsx)(Checkbox,{"disabled":!0,"label":"选项1","value":"1","checked":t}),Object(a.jsx)(u.s,{"className":"group-title","children":'BfCheckbox - iconStyle="circle"'}),Object(a.jsx)(Checkbox,{"label":"选项2","value":"2","iconStyle":"circle","checked":i,"onChange":function onChange(){s((function(e){return!e}))}}),Object(a.jsx)(u.s,{"className":"group-title","children":"BfCheckboxGroup - 基本用法"}),Object(a.jsx)(CheckboxGroup,{"values":d,"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"}],"onChange":function onChange(e){j(e)}}),Object(a.jsx)(u.s,{"className":"group-title","children":"BfCheckboxGroup - 垂直布局"}),Object(a.jsx)(CheckboxGroup,{"iconStyle":"circle","values":["2"],"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"},{"label":"选项3","value":"3"}],"layout":"vertical"})]})}}}]);
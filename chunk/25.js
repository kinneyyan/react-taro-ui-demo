(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"119":function(e,n,c){"use strict";c.d(n,"a",(function(){return getPrefixCls})),c.d(n,"b",(function(){return uuid}));function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],n=0;n<36;n++)e[n]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"120":function(e,n,c){"use strict";function __rest(e,n){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(c[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(c[t[o]]=e[t[o]])}return c}function __awaiter(e,n,c,t){return new(c||(c=Promise))((function(o,a){function fulfilled(e){try{step(t.next(e))}catch(e){a(e)}}function rejected(e){try{step(t.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof c?e:new c((function(n){n(e)}))}(e.value).then(fulfilled,rejected)}step((t=t.apply(e,n||[])).next())}))}c.d(n,"a",(function(){return __awaiter})),c.d(n,"b",(function(){return __rest}))},"124":function(e,n,c){"use strict";c.d(n,"a",(function(){return t}));var t={"exports":{}}},"140":function(e,n,c){"use strict";c.d(n,"a",(function(){return u}));var t=c(120),o=c(117),a=c(121),r=c(17),s=c.n(r),i=c(141);function Iconfont(e){var n=e.type,c=e.onClick,r=e.className,s=e.style,u=Object(t.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(i.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(a.a)(n,r),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":c},u))}var u=s.a.memo(Iconfont)},"192":function(e,n,c){},"193":function(e,n,c){},"254":function(e,n,c){"use strict";c.r(n);c(192);var t=c(12),o=c(120),a=c(117),r=c(119),s=c(118),i=c(121),u=c(140),l=Object(r.a)("checkbox"),b={"square":{"DEFAULT":"icon-checkbox","CHECKED":"icon-checkbox-on"},"circle":{"DEFAULT":"icon-radio","CHECKED":"icon-radio-on"}};function Checkbox(e){var n=e.label,c=e.value,t=e.checked,r=void 0!==t&&t,f=e.iconClass,j=e.iconStyle,h=void 0===j?"square":j,d=e.onChange,O=e.className,x=Object(o.b)(e,["label","value","checked","iconClass","iconStyle","onChange","className"]),C=Object(i.a)(l,O);return Object(a.jsxs)(s.s,Object.assign({"className":C,"onClick":function onClick(){return null==d?void 0:d(c)}},x,{"children":[Object(a.jsx)(u.a,{"type":"".concat(r?b[h].CHECKED:b[h].DEFAULT),"className":Object(i.a)(f,"checkbox-default",{"checkbox-checked":r})}),Object(a.jsx)(s.q,Object.assign({"className":"text"},{"children":n}))]}),c)}var f=Object(r.a)("checkbox-group");function CheckboxGroup(e){var n=e.groups,c=e.values,r=e.onChange,u=e.className,l=Object(o.b)(e,["groups","values","onChange","className"]),b=function handleCheckBox(e){(null==c?void 0:c.includes(e))?r&&r(c.filter((function(n){return n!==e}))):r&&r([].concat(Object(t.a)(c||[]),[e]))};return Object(a.jsx)(s.s,Object.assign({"className":Object(i.a)(f,u)},l,{"children":Array.isArray(n)&&n.map((function(e){return Object(a.jsx)(Checkbox,Object.assign({},e,{"checked":null==c?void 0:c.includes(e.value),"onChange":b}))}))}))}c(193);var j=c(15),h=c(17);n.default=function(){var e=Object(h.useState)(!0),n=Object(j.a)(e,2),c=n[0],t=n[1],o=Object(h.useState)(!0),r=Object(j.a)(o,2),i=r[0],u=r[1],l=Object(h.useState)(["1"]),b=Object(j.a)(l,2),f=b[0],d=b[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(s.s,{"children":"BfCheckbox - 基本用法"}),Object(a.jsx)(Checkbox,{"label":"选项1","value":"1","checked":c,"onChange":function onChange(){t((function(e){return!e}))}}),Object(a.jsx)(s.s,{"children":'BfCheckbox - iconStyle="circle"'}),Object(a.jsx)(Checkbox,{"label":"选项2","value":"2","iconStyle":"circle","checked":i,"onChange":function onChange(){u((function(e){return!e}))}}),Object(a.jsx)(s.s,{"children":"BfCheckboxGroup - 基本用法"}),Object(a.jsx)(CheckboxGroup,{"values":f,"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"}],"onChange":function onChange(e){d(e)}})]})}}}]);
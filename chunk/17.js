(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"118":function(e,n,c){"use strict";c.d(n,"a",(function(){return getPrefixCls})),c.d(n,"b",(function(){return getSystemInfo})),c.d(n,"c",(function(){return selectorQueryClientRect}));var t=c(265),o=c(286),a=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,n){a&&e(a),Object(t.a)().then((function(n){e(a=n)})).catch((function(e){return n(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(n){Object(o.a)().select(e).boundingClientRect().exec((function(e){n(e)}))}))}},"119":function(e,n,c){"use strict";function __rest(e,n){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(c[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(c[t[o]]=e[t[o]])}return c}function __awaiter(e,n,c,t){return new(c||(c=Promise))((function(o,a){function fulfilled(e){try{step(t.next(e))}catch(e){a(e)}}function rejected(e){try{step(t.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof c?e:new c((function(n){n(e)}))}(e.value).then(fulfilled,rejected)}step((t=t.apply(e,n||[])).next())}))}c.d(n,"a",(function(){return __awaiter})),c.d(n,"b",(function(){return __rest}))},"121":function(e,n,c){"use strict";c.d(n,"a",(function(){return t}));var t={"exports":{}}},"122":function(e,n,c){"use strict";c.d(n,"a",(function(){return r}));var t=c(119),o=c(116),a=c(120),l=c(17),s=c.n(l),i=c(123);function Iconfont(e){var n=e.type,c=e.onClick,l=e.className,s=e.style,r=Object(t.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(i.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(a.a)(n,l),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":c},r))}var r=s.a.memo(Iconfont)},"215":function(e,n,c){},"216":function(e,n,c){},"291":function(e,n,c){"use strict";c.r(n);c(215);var t=c(12),o=c(119),a=c(116),l=c(17),s=c(118),i=c(117),r=c(120),u=c(122),b=Object(s.a)("checkbox"),f={"square":{"DEFAULT":"icon-checkbox","CHECKED":"icon-checkbox-on"},"circle":{"DEFAULT":"icon-radio","CHECKED":"icon-shenpichenggong"}};function Checkbox(e){var n=e.label,c=e.value,t=e.checked,s=void 0!==t&&t,d=e.disabled,j=void 0!==d&&d,h=e.iconClass,O=e.iconStyle,x=void 0===O?"square":O,p=e.onChange,C=e.className,v=Object(o.b)(e,["label","value","checked","disabled","iconClass","iconStyle","onChange","className"]),g=Object(r.a)(b,C,{"disabled":j}),k=Object(l.useCallback)((function(){null==p||p(c)}),[p]);return Object(a.jsxs)(i.s,Object.assign({"className":g,"onClick":k},v,{"children":[Object(a.jsx)(u.a,{"type":"".concat(s?f[x].CHECKED:f[x].DEFAULT),"className":Object(r.a)("checkbox-default",{"checkbox-checked":s},h)}),Object(a.jsx)(i.q,Object.assign({"className":"text"},{"children":n}))]}))}var d=Object(s.a)("checkbox-group"),j="horizontal";function CheckboxGroup(e){var n=e.groups,c=e.values,s=e.iconStyle,u=void 0===s?"square":s,b=e.layout,f=void 0===b?j:b,h=e.disabled,O=void 0!==h&&h,x=e.onChange,p=e.className,C=Object(o.b)(e,["groups","values","iconStyle","layout","disabled","onChange","className"]),v=function handleOnChange(e){(null==c?void 0:c.includes(e))?null==x||x(c.filter((function(n){return n!==e}))):null==x||x([].concat(Object(t.a)(c||[]),[e]))},g=Object(r.a)(d,p,f);return Object(a.jsx)(i.s,Object.assign({"className":g},C,{"children":(n||[]).map((function(e){return Object(l.createElement)(Checkbox,Object.assign({"iconStyle":u,"disabled":O},e,{"key":e.value,"checked":null==c?void 0:c.includes(e.value),"onChange":v}))}))}))}c(216);var h=c(15);n.default=function(){var e=Object(l.useState)(!0),n=Object(h.a)(e,2),c=n[0],t=n[1],o=Object(l.useState)(!0),s=Object(h.a)(o,2),r=s[0],u=s[1],b=Object(l.useState)(["1"]),f=Object(h.a)(b,2),d=f[0],j=f[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(i.s,{"className":"group-title","children":"BfCheckbox - 基本用法"}),Object(a.jsx)(Checkbox,{"label":"选项1","value":"1","checked":c,"onChange":function onChange(){t((function(e){return!e}))}}),Object(a.jsx)(i.s,{"className":"group-title","children":"BfCheckbox - disabled=true"}),Object(a.jsx)(Checkbox,{"disabled":!0,"label":"选项1","value":"1","checked":!0}),Object(a.jsx)(i.s,{"className":"group-title","children":'BfCheckbox - iconStyle="circle"'}),Object(a.jsx)(Checkbox,{"label":"选项2","value":"2","iconStyle":"circle","checked":r,"onChange":function onChange(){u((function(e){return!e}))}}),Object(a.jsx)(i.s,{"className":"group-title","children":"BfCheckboxGroup - 基本用法"}),Object(a.jsx)(CheckboxGroup,{"values":d,"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"}],"onChange":function onChange(e){j(e)}}),Object(a.jsx)(i.s,{"className":"group-title","children":"BfCheckboxGroup - 垂直布局"}),Object(a.jsx)(CheckboxGroup,{"iconStyle":"circle","values":["2"],"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"},{"label":"选项3","value":"3"}],"layout":"vertical"})]})}}}]);
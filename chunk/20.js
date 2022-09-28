(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"118":function(e,n,t){"use strict";t.d(n,"a",(function(){return getPrefixCls})),t.d(n,"b",(function(){return getSystemInfo})),t.d(n,"c",(function(){return isString})),t.d(n,"d",(function(){return selectorQueryClientRect}));var c=t(274),o=t(295),a=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function isString(e){return"string"==typeof e}function getSystemInfo(){return new Promise((function(e,n){a&&e(a),Object(c.a)().then((function(n){e(a=n)})).catch((function(e){return n(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(n){Object(o.a)().select(e).boundingClientRect().exec((function(e){n(e)}))}))}},"119":function(e,n,t){"use strict";function __rest(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(e);o<c.length;o++)n.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(e,c[o])&&(t[c[o]]=e[c[o]])}return t}function __awaiter(e,n,t,c){return new(t||(t=Promise))((function(o,a){function fulfilled(e){try{step(c.next(e))}catch(e){a(e)}}function rejected(e){try{step(c.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof t?e:new t((function(n){n(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,n||[])).next())}))}t.d(n,"a",(function(){return __awaiter})),t.d(n,"b",(function(){return __rest}))},"121":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c={"exports":{}}},"122":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(119),o=t(116),a=t(120),l=t(17),i=t.n(l),r=t(123);function Iconfont(e){var n=e.type,t=e.onClick,l=e.className,i=e.style,s=Object(c.b)(e,["type","onClick","className","style"]);return Object(o.jsx)(r.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(a.a)(n,l),"customStyle":Object.assign({},i,{"fontSize":"16px"}),"onClick":t},s))}var s=i.a.memo(Iconfont)},"221":function(e,n,t){},"222":function(e,n,t){},"300":function(e,n,t){"use strict";t.r(n);t(221);var c=t(12),o=t(119),a=t(116),l=t(17),i=t(118),r=t(117),s=t(120),u=t(122),b=Object(i.a)("checkbox"),f={"square":{"DEFAULT":"icon-checkbox","CHECKED":"icon-checkbox-on"},"circle":{"DEFAULT":"icon-radio","CHECKED":"icon-shenpichenggong"}};function Checkbox(e){var n=e.label,t=e.value,c=e.checked,i=void 0!==c&&c,d=e.disabled,j=void 0!==d&&d,h=e.iconClass,O=e.iconStyle,p=void 0===O?"square":O,x=e.onChange,C=e.className,g=Object(o.b)(e,["label","value","checked","disabled","iconClass","iconStyle","onChange","className"]),v=Object(s.a)(b,C,{"disabled":j}),y=Object(l.useCallback)((function(){null==x||x(t)}),[x]);return Object(a.jsxs)(r.s,Object.assign({"className":v,"onClick":y},g,{"children":[Object(a.jsx)(u.a,{"type":"".concat(i?f[p].CHECKED:f[p].DEFAULT),"className":Object(s.a)("checkbox-default",{"checkbox-checked":i},h)}),Object(a.jsx)(r.q,Object.assign({"className":"text"},{"children":n}))]}))}var d=Object(i.a)("checkbox-group"),j="horizontal";function CheckboxGroup(e){var n=e.groups,t=e.values,i=e.iconStyle,u=void 0===i?"square":i,b=e.layout,f=void 0===b?j:b,h=e.disabled,O=void 0!==h&&h,p=e.onChange,x=e.className,C=Object(o.b)(e,["groups","values","iconStyle","layout","disabled","onChange","className"]),g=function handleOnChange(e){(null==t?void 0:t.includes(e))?null==p||p(t.filter((function(n){return n!==e}))):null==p||p([].concat(Object(c.a)(t||[]),[e]))},v=Object(s.a)(d,x,f);return Object(a.jsx)(r.s,Object.assign({"className":v},C,{"children":(n||[]).map((function(e){return Object(l.createElement)(Checkbox,Object.assign({"iconStyle":u,"disabled":O},e,{"key":e.value,"checked":null==t?void 0:t.includes(e.value),"onChange":g}))}))}))}t(222);var h=t(15);n.default=function(){var e=Object(l.useState)(!0),n=Object(h.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)(!0),i=Object(h.a)(o,2),s=i[0],u=i[1],b=Object(l.useState)(["1"]),f=Object(h.a)(b,2),d=f[0],j=f[1];return Object(a.jsxs)(a.Fragment,{"children":[Object(a.jsx)(r.s,{"className":"group-title","children":"BfCheckbox - 基本用法"}),Object(a.jsx)(Checkbox,{"label":"选项1","value":"1","checked":t,"onChange":function onChange(){c((function(e){return!e}))}}),Object(a.jsx)(r.s,{"className":"group-title","children":"BfCheckbox - disabled=true"}),Object(a.jsx)(Checkbox,{"disabled":!0,"label":"选项1","value":"1","checked":!0}),Object(a.jsx)(r.s,{"className":"group-title","children":'BfCheckbox - iconStyle="circle"'}),Object(a.jsx)(Checkbox,{"label":"选项2","value":"2","iconStyle":"circle","checked":s,"onChange":function onChange(){u((function(e){return!e}))}}),Object(a.jsx)(r.s,{"className":"group-title","children":"BfCheckboxGroup - 基本用法"}),Object(a.jsx)(CheckboxGroup,{"values":d,"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"}],"onChange":function onChange(e){j(e)}}),Object(a.jsx)(r.s,{"className":"group-title","children":"BfCheckboxGroup - 垂直布局"}),Object(a.jsx)(CheckboxGroup,{"iconStyle":"circle","values":["2"],"groups":[{"label":"选项1","value":"1"},{"label":"选项2","value":"2"},{"label":"选项3","value":"3"}],"layout":"vertical"})]})}}}]);
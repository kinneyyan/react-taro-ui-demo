(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return uuid}));function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(a,s){function fulfilled(e){try{step(c.next(e))}catch(e){s(e)}}function rejected(e){try{step(c.throw(e))}catch(e){s(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(120),a=n(117),s=n(121),r=n(17),i=n.n(r),o=n(141);function Iconfont(e){var t=e.type,n=e.onClick,r=e.className,i=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(s.a)(t,r),"customStyle":Object.assign({},i,{"fontSize":"16px"}),"onClick":n},l))}var l=i.a.memo(Iconfont)},"185":function(e,t,n){},"186":function(e,t,n){e.exports={"aa":"index-module__aa___-mBA2"}},"276":function(e,t,n){"use strict";n.r(t);n(185);var c=n(15),a=n(120),s=n(117),r=n(119),i=n(125),o=n(118),l=n(23),u=n(17),f=Object(r.a)("expandable-card");function ExpandableCard(e){var t=e.children,n=e.heightDisplay,r=Object(a.b)(e,["children","heightDisplay"]),j=Object(u.useState)(!1),b=Object(c.a)(j,2),d=b[0],h=b[1],p=Object(u.useMemo)((function(){return d?{"maxHeight":"none","overflow":"auto"}:{"maxHeight":"number"==typeof n?l.a.pxTransform(n):n,"overflow":"hidden"}}),[d]),x=Object(u.useMemo)((function(){return d?Object(s.jsxs)(s.Fragment,{"children":["收起 ",Object(s.jsx)(i.a,{"type":"icon-shangjiantou"})]}):Object(s.jsxs)(s.Fragment,{"children":["展开 ",Object(s.jsx)(i.a,{"type":"icon-xiajiantou"})]})}),[d]);return Object(s.jsxs)(o.s,Object.assign({"className":f},r,{"children":[Object(s.jsx)(o.s,Object.assign({"style":p,"className":"expand-content"},{"children":t})),Object(s.jsx)(o.s,Object.assign({"className":"expand-btn","onClick":function onClick(){h(!d)}},{"children":x}))]}))}var j=n(186),b=n.n(j);t.default=function(){return Object(s.jsxs)(s.Fragment,{"children":[Object(s.jsxs)(ExpandableCard,{"heightDisplay":40,"style":{"background":" #fff","marginBottom":"30px"},"children":[Object(s.jsx)(o.s,{"className":b.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":b.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":b.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":b.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":b.a.aa,"children":"AAAAAAAAAAAA"}),Object(s.jsx)(o.s,{"className":b.a.aa,"children":"AAAAAAAAAAAA"})]}),Object(s.jsxs)(ExpandableCard,{"heightDisplay":"20px","style":{"border":"1px solid #fff"},"children":[Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"AAAAAAAAAAAA"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"BBBBBBBBBBBB"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"CCCCCCCCCCCC"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"DDDDDDDDDDDD"})]})]})}}}]);
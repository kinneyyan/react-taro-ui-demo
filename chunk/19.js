(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var c=n(269),a=n(290),s=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){s&&e(s),Object(c.a)().then((function(t){e(s=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(a.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(a,s){function fulfilled(e){try{step(c.next(e))}catch(e){s(e)}}function rejected(e){try{step(c.throw(e))}catch(e){s(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),a=n(116),s=n(120),r=n(17),i=n.n(r),o=n(123);function Iconfont(e){var t=e.type,n=e.onClick,r=e.className,i=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(s.a)(t,r),"customStyle":Object.assign({},i,{"fontSize":"16px"}),"onClick":n},l))}var l=i.a.memo(Iconfont)},"199":function(e,t,n){},"200":function(e,t,n){e.exports={"aa":"index-module__aa___-mBA2"}},"305":function(e,t,n){"use strict";n.r(t);n(199);var c=n(15),a=n(119),s=n(116),r=n(118),i=n(122),o=n(117),l=n(23),u=n(120),f=n(17),j=Object(r.a)("expandable-card");function ExpandableCard(e){var t=e.children,n=e.heightDisplay,r=e.className,b=Object(a.b)(e,["children","heightDisplay","className"]),d=Object(f.useState)(!1),p=Object(c.a)(d,2),x=p[0],h=p[1],O=Object(f.useMemo)((function(){return x?{"maxHeight":"none","overflow":"auto"}:{"maxHeight":"number"==typeof n?l.a.pxTransform(n):n,"overflow":"hidden"}}),[x]),m=Object(f.useMemo)((function(){return x?Object(s.jsxs)(s.Fragment,{"children":["收起 ",Object(s.jsx)(i.a,{"type":"icon-shangjiantou","className":"icon-arrow"})]}):Object(s.jsxs)(s.Fragment,{"children":["展开 ",Object(s.jsx)(i.a,{"type":"icon-xiajiantou","className":"icon-arrow"})]})}),[x]),A=Object(u.a)(j,r);return Object(s.jsxs)(o.s,Object.assign({"className":A},b,{"children":[Object(s.jsx)(o.s,Object.assign({"style":O,"className":"expand-content"},{"children":t})),Object(s.jsx)(o.s,Object.assign({"className":"expand-btn","onClick":function onClick(e){e.stopPropagation(),h(!x)}},{"children":m}))]}))}var b=n(200),d=n.n(b);t.default=function(){return Object(s.jsxs)(s.Fragment,{"children":[Object(s.jsxs)(ExpandableCard,{"heightDisplay":40,"style":{"background":" #fff","marginBottom":"30px"},"onClick":function onClick(){console.log("outer onClick")},"children":[Object(s.jsx)(o.s,{"className":d.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":d.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":d.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":d.a.aa,"children":"丰富的股份回购"}),Object(s.jsx)(o.s,{"className":d.a.aa,"children":"AAAAAAAAAAAA"}),Object(s.jsx)(o.s,{"className":d.a.aa,"children":"AAAAAAAAAAAA"})]}),Object(s.jsxs)(ExpandableCard,{"heightDisplay":"20px","style":{"border":"1px solid #fff"},"children":[Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"AAAAAAAAAAAA"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"BBBBBBBBBBBB"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"CCCCCCCCCCCC"}),Object(s.jsx)(o.s,{"style":{"height":"20px"},"children":"DDDDDDDDDDDD"})]})]})}}}]);
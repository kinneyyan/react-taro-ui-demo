(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"118":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return getSystemInfo})),n.d(t,"c",(function(){return selectorQueryClientRect}));var c=n(269),a=n(290),i=null;function getPrefixCls(e){return"".concat("bf","-").concat(e)}function getSystemInfo(){return new Promise((function(e,t){i&&e(i),Object(c.a)().then((function(t){e(i=t)})).catch((function(e){return t(e)}))}))}function selectorQueryClientRect(e){return new Promise((function(t){Object(a.a)().select(e).boundingClientRect().exec((function(e){t(e)}))}))}},"119":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(a,i){function fulfilled(e){try{step(c.next(e))}catch(e){i(e)}}function rejected(e){try{step(c.throw(e))}catch(e){i(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"121":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(119),a=n(116),i=n(120),r=n(17),s=n.n(r),o=n(123);function Iconfont(e){var t=e.type,n=e.onClick,r=e.className,s=e.style,u=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(t,r),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},u))}var u=s.a.memo(Iconfont)},"201":function(e,t,n){},"202":function(e,t,n){e.exports={"list-container":"index-module__list-container___1h7Vw","list-item":"index-module__list-item___3zL8C"}},"306":function(e,t,n){"use strict";n.r(t);n(201);var c=n(15),a=n(119),i=n(116),r=n(118),s=n(122),o=n(117),u=n(120),l=n(17),f=Object(r.a)("expandable-list");function ExpandableList(e){var t=e.data,n=e.maxCount,r=e.itemRender,m=e.className,b=Object(a.b)(e,["data","maxCount","itemRender","className"]),j=Object(l.useState)(!1),d=Object(c.a)(j,2),O=d[0],p=d[1],x=Object(u.a)(f,m),g=Object(l.useMemo)((function(){var e=!n||n<0?t.length:n;return O?t:t.slice(0,e)}),[t,n,O]),y=Object(l.useMemo)((function(){return O?Object(i.jsxs)(i.Fragment,{"children":["收起 ",Object(i.jsx)(s.a,{"type":"icon-shangjiantou","className":"icon-arrow"})]}):Object(i.jsxs)(i.Fragment,{"children":["展开 ",Object(i.jsx)(s.a,{"type":"icon-xiajiantou","className":"icon-arrow"})]})}),[O]),h=Object(l.useMemo)((function(){return!(t.length<=n)}),[t.length,n]);return Object(i.jsxs)(o.s,Object.assign({"className":x},b,{"children":[g.map((function(e,t){return r(e,t)})),h&&Object(i.jsx)(o.s,Object.assign({"className":"btn-expand","onClick":function onClick(e){e.stopPropagation(),p((function(e){return!e}))}},{"children":y}))]}))}var m=n(202),b=n.n(m);t.default=function(){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(ExpandableList,{"className":b.a["list-container"],"data":[{"name":"热苏斯","age":25},{"name":"萨卡","age":21},{"name":"马丁内利","age":21},{"name":"厄德高","age":25},{"name":"史密斯罗","age":21},{"name":"托马斯","age":25}],"maxCount":3,"itemRender":function itemRender(e,t){return Object(i.jsxs)(o.s,{"className":b.a["list-item"],"children":[t,": ",JSON.stringify(e)]})}}),Object(i.jsx)(ExpandableList,{"className":b.a["list-container"],"data":[{"name":"热苏斯","age":25},{"name":"萨卡","age":21}],"maxCount":2,"itemRender":function itemRender(e,t){return Object(i.jsxs)(o.s,{"className":b.a["list-item"],"children":[t,": ",JSON.stringify(e)]})}})]})}}}]);
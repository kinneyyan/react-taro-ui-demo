(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"118":function(t,e,n){"use strict";n.d(e,"a",(function(){return getPrefixCls})),n.d(e,"b",(function(){return getSystemInfo})),n.d(e,"c",(function(){return selectorQueryClientRect})),n.d(e,"d",(function(){return uuid}));var c=n(259),s=n(280),i=null;function getPrefixCls(t){return"".concat("bf","-").concat(t)}function uuid(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substring(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}function getSystemInfo(){return new Promise((function(t,e){i&&t(i),Object(c.a)().then((function(e){t(i=e)})).catch((function(t){return e(t)}))}))}function selectorQueryClientRect(t){return new Promise((function(e){Object(s.a)().select(t).boundingClientRect().exec((function(t){e(t)}))}))}},"119":function(t,e,n){"use strict";function __rest(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(c=Object.getOwnPropertySymbols(t);s<c.length;s++)e.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(t,c[s])&&(n[c[s]]=t[c[s]])}return n}function __awaiter(t,e,n,c){return new(n||(n=Promise))((function(s,i){function fulfilled(t){try{step(c.next(t))}catch(t){i(t)}}function rejected(t){try{step(c.throw(t))}catch(t){i(t)}}function step(t){t.done?s(t.value):function adopt(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(fulfilled,rejected)}step((c=c.apply(t,e||[])).next())}))}n.d(e,"a",(function(){return __awaiter})),n.d(e,"b",(function(){return __rest}))},"121":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={"exports":{}}},"122":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(119),s=n(116),i=n(120),r=n(17),o=n.n(r),a=n(123);function Iconfont(t){var e=t.type,n=t.onClick,r=t.className,o=t.style,l=Object(c.b)(t,["type","onClick","className","style"]);return Object(s.jsx)(a.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(i.a)(e,r),"customStyle":Object.assign({},o,{"fontSize":"16px"}),"onClick":n},l))}var l=o.a.memo(Iconfont)},"200":function(t,e,n){},"298":function(t,e,n){"use strict";n.r(e);n(200);var c=n(119),s=n(116),i=n(118),r=n(122),o=n(117),a=n(120),l=Object(i.a)("timeline");function Timeline(t){var e=t.title,n=t.data,i=t.className,u=Object(c.b)(t,["title","data","className"]),f=function renderIcon(t){switch(t.icon){case"success":return Object(s.jsx)(r.a,{"type":"icon-shenpichenggong","className":"icon-success"});case"error":return Object(s.jsx)(r.a,{"type":"icon-guanbi","className":"icon-reject"});case"processing":return Object(s.jsx)(r.a,{"type":"icon-wait","className":"icon-wait"});case"recall":return Object(s.jsx)(r.a,{"type":"icon-sp_ch","className":"icon-recall"});default:return void 0===t.icon?Object(s.jsx)(o.s,{"className":"icon-default"}):t.icon}},j=Object(a.a)(l,i);return Object(s.jsxs)(o.s,Object.assign({"className":j},u,{"children":[e&&"string"==typeof e?Object(s.jsx)(o.s,Object.assign({"className":"title"},{"children":e})):e,!!(null==n?void 0:n.length)&&Object(s.jsx)(o.s,Object.assign({"className":"content"},{"children":n.map((function(t,e){return Object(s.jsxs)(o.s,Object.assign({"className":"node-item"},{"children":[Object(s.jsxs)(o.s,Object.assign({"className":"left-container"},{"children":[f(t),Object(s.jsx)(o.s,{"className":Object(a.a)("vertical-line",{"hidden":e===(null==n?void 0:n.length)-1})})]})),Object(s.jsxs)(o.s,Object.assign({"className":"right-container"},{"children":["string"==typeof t.title?Object(s.jsx)(o.s,Object.assign({"className":"node-title"},{"children":t.title})):t.title,"string"==typeof t.content?Object(s.jsx)(o.s,Object.assign({"className":"node-content"},{"children":t.content})):t.content]}))]}),e)}))}))]}))}n(17),e.default=function(){return Object(s.jsx)(s.Fragment,{"children":Object(s.jsx)(Timeline,{"title":"审批流","data":[{"icon":"success","title":"我是标题","content":"我是内容"},{"icon":"error","title":"我是标题","content":"我是内容"},{"icon":"processing","title":"我是标题","content":"我是内容"},{"icon":"recall","title":"我是标题","content":"我是内容"},{"title":"我是标题","content":"我是内容"}]})})}}}]);
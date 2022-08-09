(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"119":function(e,t,n){"use strict";n.d(t,"a",(function(){return getPrefixCls})),n.d(t,"b",(function(){return uuid}));function getPrefixCls(e){return"".concat("bf","-").concat(e)}function uuid(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substring(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substring(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}},"120":function(e,t,n){"use strict";function __rest(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}function __awaiter(e,t,n,c){return new(n||(n=Promise))((function(a,r){function fulfilled(e){try{step(c.next(e))}catch(e){r(e)}}function rejected(e){try{step(c.throw(e))}catch(e){r(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((c=c.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return __awaiter})),n.d(t,"b",(function(){return __rest}))},"124":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={"exports":{}}},"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(120),a=n(117),r=n(121),i=n(17),s=n.n(i),o=n(141);function Iconfont(e){var t=e.type,n=e.onClick,i=e.className,s=e.style,l=Object(c.b)(e,["type","onClick","className","style"]);return Object(a.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(r.a)(t,i),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},l))}var l=s.a.memo(Iconfont)},"182":function(e,t,n){},"260":function(e,t,n){"use strict";n.r(t);n(182);var c=n(4),a=n(12),r=n(15),i=n(120),s=n(117),o=n(119),l=n(125),u=n(118),d=n(121),f=n(17);function SelectAll(e){var t=e.selectAll,n=e.onChange,c=e.checked,a=e.partChecked,r=function onCheckBoxChange(e){e.stopPropagation(),n&&n(!c)};return Object(s.jsxs)(u.s,Object.assign({"className":Object(d.a)("check-box-wrapper",{"padding":t})},{"children":[function renderCheckBox(){return c?Object(s.jsx)(u.s,Object.assign({"className":"checked","onClick":r},{"children":Object(s.jsx)(l.a,{"type":"icon-checkbox-on","className":"icon"})})):a?Object(s.jsx)(u.s,Object.assign({"className":"part-checked","onClick":r},{"children":Object(s.jsx)(l.a,{"type":"icon-checkbox-part","className":"icon"})})):c?null:Object(s.jsx)(u.s,Object.assign({"className":"unchecked","onClick":r},{"children":Object(s.jsx)(l.a,{"type":"icon-checkbox","className":"icon"})}))}(),t&&Object(s.jsx)(u.s,Object.assign({"className":"check-text"},{"children":"全选"}))]}))}function TitleNode(e){var t=e.grade;return Object(s.jsx)(u.s,Object.assign({"className":"grade"},{"children":t}))}var j=Object(o.a)("tree-select");function TreeSelect(e){var t=this,n=e.className,o=e.treeData,h=e.onChange,b=e.titles,p=e.checkedCodesVal,O=e.code,g=void 0===O?"code":O,v=e.name,m=void 0===v?"name":v,C=e.level,x=void 0===C?"level":C,N=e.parentCode,k=void 0===N?"parentCode":N,S=e.subList,y=void 0===S?"subList":S,w=Object(i.b)(e,["className","treeData","onChange","titles","checkedCodesVal","code","name","level","parentCode","subList"]),A=Object(d.a)(j,n),L=Object(f.useState)([]),T=Object(r.a)(L,2),P=T[0],I=T[1],_=Object(f.useState)({"1":o}),D=Object(r.a)(_,2),E=D[0],F=D[1],B=Object(f.useState)(""),J=Object(r.a)(B,2),V=J[0],G=J[1],H=Object(f.useState)(1),M=Object(r.a)(H,2),W=M[0],z=M[1],R=Object(f.useState)([]),U=Object(r.a)(R,2),q=U[0],K=U[1],Q=Object(f.useState)([!1,!1,!1,!1]),X=Object(r.a)(Q,2),Y=X[0],Z=X[1],$=Object(f.useState)([]),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ce=Object(f.useState)([]),ae=Object(r.a)(ce,2),re=ae[0],ie=ae[1];Object(f.useEffect)((function(){F({"1":o});var e=[];le(o,e),ne(e)}),[o]),Object(f.useEffect)((function(){o&&o.length>0&&Array.isArray(p)&&p.length>=0&&ue(p)}),[p,o]);var se=function getFinalCodes(e){return te.filter((function(t){return new Set(Object(a.a)(e)).has(t)}))},oe=function getAllCodes(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return e.map((function(e){e[y]&&e[y].length>0&&getAllCodes(e[y],t),t.push(e[g])})),t},le=function findLastLevelCodes(e,t){return e.map((function(e){(!e[y]||e[y].length<1)&&(t.push(e[g]),e[x]=Number(e[x])),e[y]&&e[y].length>0&&(findLastLevelCodes(e[y],t),e[x]=Number(e[x]))})),t},ue=function calcStatus(e){if(!(e.length>0&&e.every((function(e){return P.includes(e)})))){e&&0===e.length&&(G(""),K([]));var t=Object(a.a)(e),n=Object(a.a)(re),c=Object(a.a)(Y);e.map((function(a){(fe(o,a)||[]).map((function(a){if(a[y].every((function(e){return t.includes(e[g])}))){t.push(a[g]),c[a[x]]=!0;var r=n.findIndex((function(e){return e===a[g]}));r>-1&&n.splice(r,1)}var i=a[y].map((function(e){return e[g]}));i.filter((function(t){return new Set(e).has(t)})).length<i.length&&re.indexOf(a[g])<0&&n.push(a[g])}))})),0===e.length&&(n=[],c.fill(!1,0)),ie(n),Z(c),I(t||[])}},de=function onSelectAll(e,t){console.log(t,e,"clickedColIdx-====9090==");var n=[],c=t-1,r=new Array(4),i=E[t][0],s=[];if(1!==t){var l=fe(o,i[g]);l.length>0&&oe(l[0][y],s)}var u=Object(a.a)(re);if(e){if(1===t){var d=[];oe(o,d),n=[].concat(d),I(n),u=[],r.fill(!0,0)}1!==t&&(n=[].concat(Object(a.a)(P),[],s,[i[k]]),be(i,n,e,r,u),I(n)),r=Object(a.a)(r).fill(!0,c)}if(!e){if(1===t&&I(n=[]),1!==t){var f=new Set([].concat(s,[i[k]]));n=Object(a.a)(P).filter((function(e){return!f.has(e)})),be(i,n,e,r,u),I(n)}r.fill(!1,0)}console.log(r,"gradeCheckStatus==="),Z(r),ie(u),h(se(n))},fe=function findParentsData(e,t){if(0!=e.length)for(var n=0;n<e.length;n++){if(e[n][g]==t)return[];if(e[n][y]){var c=findParentsData(e[n][y],t);if(void 0!==c)return c.concat(e[n])}}},je=function getRenderData(e,t){var n=t;1===t&&V!==e[g]&&F({"1":o});var r=function findParentsCodes(e,t){if(0!=e.length)for(var n=0;n<e.length;n++){if(e[n][g]==t)return[];if(e[n][y]){var c=findParentsCodes(e[n][y],t);if(void 0!==c)return c.concat(e[n][g])}}}(o,e[g]);K(r),G(e[g]),t++;var i=[];e[y]&&e[y].length>0&&(i=e[y]),z(t),F((function(e){return Object.assign(Object.assign({},e),Object(c.a)({},t,i))}));var s=i.map((function(e){return e[g]})),l=s.filter((function(e){return new Set(Object(a.a)(P)).has(e)})).length===s.length;Z((function(e){var t=Object(a.a)(e);return t[n]=l,t}))},he=function isChecked(e){var t=!1;return P&&P.length>0&&P.indexOf(e[g])>-1&&(t=!0),t},be=function findAllCheckPcode(e,t,n,c,a){var r=fe(o,e[g]);if(0===r.length){var i=a.findIndex((function(t){return t===e[g]}));i>-1&&a.splice(i,1)}return r.map((function(e){if(n){if(e[y].every((function(e){return t.includes(e[g])}))){t.push(e[g]),c[e[x]]=!0;var r=a.findIndex((function(t){return t===e[g]}));r>-1&&a.splice(r,1)}var i=e[y].map((function(e){return e[g]}));i.filter((function(e){return new Set(t).has(e)})).length<i.length&&re.indexOf(e[g])<0&&a.push(e[g])}if(!n){if(e[y].some((function(e){return!t.includes(e[g])}))){var s=t.findIndex((function(t){return t===e[g]}));s>-1&&(t.splice(s,1),c[e[x]]=!1)}var o=e[y].map((function(e){return e[g]})),l=o.filter((function(e){return new Set(t).has(e)}));if(l.length<o.length&&l.length>0&&a.indexOf(e[g])<0&&a.push(e[g]),l.lengh===o.length||0===l.length){var u=a.findIndex((function(t){return t===e[g]}));u>-1&&a.splice(u,1)}if(1===e[x]){var d=[];if(oe(e[y],d),d.some((function(e){return new Set(t).has(e)})))a.push(e[g]);else{var f=a.findIndex((function(t){return t===e[g]}));f>-1&&a.splice(f,1)}}}})),t},pe=function onItemCheck(e,t){var n=new Array(4),c=Object(a.a)(re),r=function getCheckedCodes(e,t,n,c){var r=t[y]?t[y]:[],i=[],s=[],o=[],l=[];if(oe(r,l),e&&(i.push(t[g]),o=[].concat(Object(a.a)(P),i,l),s=be(t,o,e,n,c)),!e){var u=new Set([].concat(l,[t[g]]));o=Object(a.a)(P).filter((function(e){return!u.has(e)})),s=be(t,o,e,n,c)}return s}(e,t,n,c);if(I(r),1===t[x]){var i=E[t[x]].map((function(e){return e[g]}));if(e)if(i.every((function(e){return r.includes(e)}))){n.fill(!0,t[x]-1);var s=re.findIndex((function(e){return e[g]===t[g]}));s>-1&&c.splice(s,1)}else n.fill(!0,t[x])}if(1!==t[x]){var o=!!e,l=E[t[x]].map((function(e){return e[g]})).every((function(e){return new Set(r).has(e)}))?t[x]-1:t[x];n.fill(o,l)}Z(n),ie(c),h(se(r))},Oe=function isPartChecked(e){return re.indexOf(e)>-1},ge=function gradePartChecked(e){var t=!1;if(0===P.length)return!1;var n=E[e].map((function(e){return e[g]})),c=Object(a.a)(n).filter((function(e){return new Set(P).has(e)}));return c.length<n.length&&(t=!0),0===c.length&&4===e&&(t=!1),1===e&&P.length>0&&(t=!0),t},ve=function renderItems(e){return(E[e]||[]).map((function(n){return Object(s.jsxs)(u.s,Object.assign({"className":"select-item","onClick":je.bind(t,n,n[x])},{"children":[Object(s.jsx)(SelectAll,{"onChange":function onChange(e){pe(e,n)},"checked":he(n),"partChecked":Oe(n[g])}),Object(s.jsx)(u.s,Object.assign({"className":Object(d.a)("check-text",{"select":q.includes(n[g])||V===n[g]})},{"children":n[m]})),4!==e&&Object(s.jsx)(l.a,{"type":"icon-youjiantou","className":q.includes(n[g])||V===n[g]?" youjiantou  select":" youjiantou"})]}),n[g])}))};return Object(s.jsxs)(u.s,Object.assign({"className":A},w,{"children":[Object(s.jsxs)(u.s,Object.assign({"className":"select-title"},{"children":[Object(s.jsx)(TitleNode,{"grade":b[0]}),Object(s.jsx)(SelectAll,{"selectAll":!0,"checked":Y[0],"partChecked":ge(1),"onChange":function onChange(e){return de(e,1)}}),Object(s.jsx)(u.s,Object.assign({"className":"select-item-wrapper"},{"children":ve(1)}))]})),Object(s.jsxs)(u.s,Object.assign({"className":"select-title"},{"children":[Object(s.jsx)(TitleNode,{"grade":b[1]}),W>=2&&Object(s.jsxs)(s.Fragment,{"children":[E[2]&&E[2].length>0&&Object(s.jsx)(SelectAll,{"selectAll":!0,"checked":Y[1],"partChecked":ge(2),"onChange":function onChange(e){return de(e,2)}}),Object(s.jsx)(u.s,Object.assign({"className":"select-item-wrapper"},{"children":ve(2)}))]})]})),Object(s.jsxs)(u.s,Object.assign({"className":"select-title"},{"children":[Object(s.jsx)(TitleNode,{"grade":b[2]}),W>=3&&Object(s.jsxs)(s.Fragment,{"children":[E[3]&&E[3].length>0&&Object(s.jsx)(SelectAll,{"selectAll":!0,"checked":Y[2],"partChecked":ge(3),"onChange":function onChange(e){return de(e,3)}}),Object(s.jsx)(u.s,Object.assign({"className":"select-item-wrapper"},{"children":ve(3)}))]})]})),Object(s.jsxs)(u.s,Object.assign({"className":"select-title"},{"children":[Object(s.jsx)(TitleNode,{"grade":b[3]}),W>=4&&Object(s.jsxs)(s.Fragment,{"children":[E[4]&&E[4].length>0&&Object(s.jsx)(SelectAll,{"selectAll":!0,"checked":Y[3],"partChecked":ge(4),"onChange":function onChange(e){return de(e,4)}}),Object(s.jsx)(u.s,Object.assign({"className":"select-item-wrapper"},{"children":ve(4)}))]})]}))]}))}var h=[{"code":"0000100004","name":"东南区|BU_SE","parentCode":"0000100000","level":1,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000100026","name":"江西北部|Jiangxi_North","parentCode":"0000100004","level":2,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105970","name":"高安|Gaoan","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105559","name":"高安|Gaoan","parentCode":"0000105970","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000105972","name":"武宁|Wuning","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105527","name":"武宁|Wuning","parentCode":"0000105972","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000105571","name":"萍乡|Pingxiang","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105561","name":"萍乡|Pingxiang","parentCode":"0000105571","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000106032","name":"黄山|Huangshan","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105529","name":"黄山|Huangshan","parentCode":"0000106032","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]}]}]}];t.default=function(){var e=Object(f.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(f.useEffect)((function(){console.log(n)}),[n]),Object(s.jsx)(s.Fragment,{"children":Object(s.jsx)(TreeSelect,{"titles":["大渠道","小渠道","业态","子业态"],"treeData":h,"checkedCodesVal":n,"onChange":function onChange(e){return c(e)}})})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"141":function(e,a,t){"use strict";t.d(a,"a",(function(){return Radio}));var n=t(119),c=t(116),s=t(118),i=t(122),o=t(117),r=t(120),d=t(17),u=Object(s.a)("radio"),l="icon-radio",b="icon-radio-on";function Radio(e){var a=e.label,t=e.value,s=e.checked,j=void 0!==s&&s,m=e.iconClass,v=e.disable,p=void 0!==v&&v,O=e.disabled,f=void 0!==O&&O,g=e.onChange,C=e.className,h=Object(n.b)(e,["label","value","checked","iconClass","disable","disabled","onChange","className"]),N=Object(d.useMemo)((function(){return void 0!==f?f:p}),[p,f]),x=Object(r.a)(u,C,{"disabled":N});return Object(c.jsxs)(o.s,Object.assign({"className":x,"onClick":N?void 0:function(){return null==g?void 0:g(t)}},h,{"children":[Object(c.jsx)(i.a,{"type":"".concat(j?b:l),"className":Object(r.a)(m,"radio-defalut",{"radio-checked":j})}),a&&Object(c.jsx)(o.q,Object.assign({"className":"text"},{"children":a}))]}),t)}},"230":function(e,a,t){},"318":function(e,a,t){"use strict";t.r(a);t(230);var n=t(4),c=t(12),s=t(15),i=t(119),o=t(116),r=t(118),d=t(122),u=t(117),l=t(120),b=t(17),j=t(141),m=t(235),v=t(170),p=Object(r.a)("tree-radio");function TreeRadio(e){var a=e.className,t=e.treeData,r=e.onChange,O=e.titles,f=e.checkedCodeVal,g=e.fieldNames,C=e.sameWidth,h=void 0!==C&&C,N=Object(i.b)(e,["className","treeData","onChange","titles","checkedCodeVal","fieldNames","sameWidth"]),x=Object.assign(Object.assign({},m.a),g),k=x.code,T=x.name,L=x.level,w=x.subList,S=Object(b.useState)(1),D=Object(s.a)(S,2),y=D[0],E=D[1],P=Object(b.useState)([]),R=Object(s.a)(P,2),W=R[0],H=R[1],J=Object(b.useState)({}),V=Object(s.a)(J,2),G=V[0],I=V[1],_=Object(b.useState)(),q=Object(s.a)(_,2),B=q[0],F=q[1];Object(b.useEffect)((function(){I({"0":t})}),[]),Object(b.useEffect)((function(){t&&t.length>0&&M(f)}),[f,t]);var M=function calcStatus(e){if(e!==B){void 0!==e&&""!==e||(F(""),H([]),E(0));var a=function findParentsData(e,a){if(0!=e.length)for(var t=0;t<e.length;t++){if(e[t][k]==a)return[];if(e[t][w]){var n=findParentsData(e[t][w],a);if(void 0!==n)return n.concat(e[t])}}}(t,e);if(a.length>0){E(a[0][L]+1);var n={},c=[];a.forEach((function(e){c.push(e[k]),n[e[L]]=e[w]})),I((function(e){return Object.assign(Object.assign({},e),n)})),H(c.reverse())}}},U=function clickItem(e,a,t){var s=Object(c.a)(W);s.splice(a,1,e),H(s),E(a+2),I((function(e){return Object.assign(Object.assign({},e),Object(n.a)({},a+1,t))}))},z=function renderItems(e){return(G[e]||[]).map((function(a){return Object(o.jsxs)(u.s,Object.assign({"className":"select-item"},{"children":[Object(o.jsx)(j.a,{"iconClass":"radio-left","onChange":function onChange(e){F(e),r(e,a)},"value":a[k],"checked":f===a[k]}),Object(o.jsx)(u.s,Object.assign({"className":Object(l.a)("text-radio",{"selected":W.includes(a[k])}),"onClick":function onClick(){return U(a[k],e,a[w])}},{"children":a[T]})),e!==O.length-1&&Object(o.jsx)(d.a,{"type":"icon-youjiantou","className":Object(l.a)("icon-arrow-right",{"selected":W.includes(a[k])}),"onClick":function onClick(){return U(a[k],e,a[w])}})]}),a[k])}))};return Object(o.jsx)(u.s,Object.assign({"className":Object(l.a)(p,a)},N,{"children":O.map((function(e,a){return Object(o.jsxs)(u.s,Object.assign({"className":Object(l.a)("select-panel",{"same-width":h})},{"children":[Object(o.jsx)(v.a,{"grade":e}),y>a&&Object(o.jsx)(u.s,Object.assign({"className":"select-item-wrapper"},{"children":z(a)}))]}),a)}))}))}var O=[{"code":"0000100004","name":"东南区|BU_SE","parentCode":"0000100000","level":1,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000100026","name":"江西北部|Jiangxi_North","parentCode":"0000100004","level":2,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105970","name":"高安|Gaoan","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105559","name":"高安|Gaoan","parentCode":"0000105970","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000105972","name":"武宁|Wuning","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105527","name":"武宁|Wuning","parentCode":"0000105972","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000105571","name":"萍乡|Pingxiang","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105561","name":"萍乡|Pingxiang","parentCode":"0000105571","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]},{"code":"0000106032","name":"黄山|Huangshan","parentCode":"0000100026","level":3,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[{"code":"0000105529","name":"黄山|Huangshan","parentCode":"0000106032","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]},{"code":"0000105530","name":"黄山2|Huangshan2","parentCode":"0000106032","level":4,"provinceCode":"","provinceName":"","status":1,"updateTime":"2022-05-128","subList":[]}]}]}]}];a.default=function(){var e=Object(b.useState)("0000105530"),a=Object(s.a)(e,2),t=a[0],n=a[1];return Object(o.jsxs)(o.Fragment,{"children":[Object(o.jsx)(u.s,{"className":"group-title","children":"基础用法"}),Object(o.jsx)(TreeRadio,{"style":{"backgroundColor":"white"},"titles":["大渠道","小渠道","业态","子业态"],"treeData":O,"checkedCodeVal":t,"onChange":function onChange(e,a){n(e),console.log("value: ",e,a)}})]})}}}]);
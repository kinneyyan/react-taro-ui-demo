(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(120),c=n(117),r=n(121),i=n(17),s=n.n(i),o=n(141);function Iconfont(e){var t=e.type,n=e.onClick,i=e.className,s=e.style,l=Object(a.b)(e,["type","onClick","className","style"]);return Object(c.jsx)(o.c,Object.assign({"prefixClass":"iconfont","value":"","className":Object(r.a)(t,i),"customStyle":Object.assign({},s,{"fontSize":"16px"}),"onClick":n},l))}var l=s.a.memo(Iconfont)},"148":function(e,t,n){},"155":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(4),c=n(15),r=n(17);var i=n(120),s=n(117),o=n(119),l=n(125),b=n(149),j=n(118),u=n(121),d=Object(o.a)("list-item");n(148);var O=function InternalListItem(e){var t=e.label,n=e.placeholder,a=e.value,c=e.required,o=e.arrow,O=e.slotRight,f=e.onClick,m=e.disable,g=e.formKey,h=e.verifyFunc,x=e.addVerify,v=e.changeFormData,p=e.className,y=Object(i.b)(e,["label","placeholder","value","required","arrow","slotRight","onClick","disable","formKey","verifyFunc","addVerify","changeFormData","className"]);return Object(r.useEffect)((function(){x&&g&&h&&x(g,h)}),[]),Object(r.useEffect)((function(){g&&v&&a&&v(g,a)}),[a]),Object(s.jsxs)(j.s,Object.assign({"className":Object(u.a)(d,p),"onClick":m?void 0:f},y,{"children":[Object(s.jsxs)(j.s,Object.assign({"className":"left-wrap"},{"children":[c&&Object(s.jsx)(j.s,{"className":"require-icon"}),"string"==typeof t?Object(s.jsx)(j.q,Object.assign({"className":"label"},{"children":t})):t]})),Object(s.jsxs)(j.s,Object.assign({"className":"right-wrap"},{"children":[O||(b.b.isNull(a)?Object(s.jsx)(j.q,Object.assign({"className":"placeholder"},{"children":n})):Object(s.jsx)(j.q,Object.assign({"className":m?"placeholder":"value"},{"children":a}))),o&&!m&&Object(s.jsx)(l.a,{"type":"icon-youjiantou","className":"icon"})]}))]}))};O.useForm=function useForm(){var e=Object(r.useState)({}),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)({}),o=Object(c.a)(s,2),l=o[0],b=o[1];return{"verify":function verify(){for(var e=!0,t=Object.keys(l),a=0;a<t.length;a++){if(!(e=(0,l[t[a]])(n[t[a]])))return e}return e},"addVerify":function addVerify(e,t){b((function(n){return Object.assign(Object.assign({},n),Object(a.a)({},e,t))}))},"changeFormData":function changeFormData(e,t){i((function(n){return Object.assign(Object.assign({},n),Object(a.a)({},e,t))}))},"formData":n,"verifyList":l}}},"174":function(e,t,n){},"175":function(e,t,n){},"264":function(e,t,n){"use strict";n.r(t);n(174);var a=n(12),c=n(15),r=n(120),i=n(117),s=n(119),o=n(125),l=n(118),b=n(121),j=n(17),u=Object(s.a)("editable-list");function EditableList(e){var t=e.min,n=void 0===t?1:t,d=e.max,O=e.creatorRecord,f=e.data,m=e.creatorButton,g=void 0===m?"添加":m,h=e.onDataChange,x=e.children,v=e.hideRemoveIcon,p=void 0!==v&&v,y=e.className,N=Object(r.b)(e,["min","max","creatorRecord","data","creatorButton","onDataChange","children","hideRemoveIcon","className"]),C=Object(j.useState)((function(){return Array.from(Array(n),(function(){return generateNewItem()}))})),k=Object(c.a)(C,2),F=k[0],w=k[1];Object(j.useEffect)((function(){void 0!==f&&w(f.map((function(e){return Object.assign(Object.assign({},e),{"_id":Object(s.b)()})})))}),[f]);var I=function handleOnItemAdd(){var e=[].concat(Object(a.a)(F),[generateNewItem()]);f||w(e),null==h||h(e.map((function(e){return delete e._id,e})))},R=function handleOnItemDelete(e){var t=F.filter((function(t){return t._id!==e}));f||w(t),null==h||h(t.map((function(e){return delete e._id,e})))};function generateNewItem(){return Object.assign(Object.assign({},O),{"_id":Object(s.b)()})}var D=Object(b.a)(u,y);return Object(i.jsxs)(l.s,Object.assign({"className":D},N,{"children":[F.map((function(e,t){var a=e._id,c=Object(r.b)(e,["_id"]);return Object(i.jsxs)(l.s,Object.assign({"className":"card-container"},{"children":[null==x?void 0:x(c,t,a,{"add":I,"remove":R}),!p&&F.length>n&&Object(i.jsx)(o.a,{"type":"icon-shanshu","className":"icon-delete","onClick":function onClick(){return R(a)}})]}),a)})),(void 0===d||F.length<d)&&Object(i.jsx)(i.Fragment,{"children":"string"==typeof g?Object(i.jsxs)(l.s,Object.assign({"className":"btn-add","onClick":I},{"children":[Object(i.jsx)(o.a,{"type":"icon-tianjia","className":"icon-add"}),Object(i.jsx)(l.q,Object.assign({"className":"text-add"},{"children":g}))]})):g})]}))}n(148);var d=n(155);n(175),t.default=function(){var e=Object(j.useState)([{"name":"aaa","age":1},{"name":"bbb","age":2}]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(j.useState)([{"name":"ccc","age":1},{"name":"ddd","age":2}]),o=Object(c.a)(s,2),b=o[0],u=o[1];return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(l.s,{"children":"基础用法"}),Object(i.jsx)(EditableList,{"creatorRecord":{"name":"张三","age":30},"max":3,"creatorButton":"添加人员","data":n,"onDataChange":function onDataChange(e){return r(e)},"children":function children(e,t){return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsx)(d.a,{"label":e.name}),Object(i.jsx)(d.a,{"style":{"marginTop":10,"background":"#FFF","borderRadius":8},"label":e.age,"arrow":!0,"onClick":function onClick(){r((function(e){return e[t].age=Math.random(),Object(a.a)(e)}))}})]})}}),Object(i.jsx)(l.s,{"style":{"marginTop":20},"children":"自定义删除按钮"}),Object(i.jsx)(EditableList,{"creatorRecord":{"name":"李四","age":20},"max":4,"creatorButton":"添加人员","data":b,"hideRemoveIcon":!0,"onDataChange":function onDataChange(e){return u(e)},"children":function children(e,t,n,c){var r=c.remove;return Object(i.jsxs)(i.Fragment,{"children":[Object(i.jsxs)(l.s,{"style":{"display":"flex","alignItems":"center"},"children":[Object(i.jsx)(l.s,{"style":{"textAlign":"center","width":"15px","height":"15px","lineHeight":"15px","borderRadius":"50%","color":"#fff","backgroundColor":"#000","marginRight":"10px"},"onClick":function onClick(){return r(n)},"children":"-"}),Object(i.jsx)(l.q,{"children":e.name})]}),Object(i.jsx)(d.a,{"style":{"marginTop":10,"background":"#FFF","borderRadius":8},"label":e.age,"arrow":!0,"onClick":function onClick(){u((function(e){return e[t].age=Math.random(),Object(a.a)(e)}))}})]})}})]})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"72":function(t,n,o){"use strict";o.r(n),o.d(n,"taro_checkbox_core",(function(){return r})),o.d(n,"taro_checkbox_group_core",(function(){return a}));var i=o(28),r=function(){function e(t){var n=this;Object(i.g)(this,t),this.onChange=Object(i.c)(this,"checkboxchange",7),this.value="",this.checked=!1,this.disabled=!1,this.nativeProps={},this.isWillLoadCalled=!1,this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":n.value})}}return e.prototype.watchId=function(t){this.isWillLoadCalled&&t&&this.inputEl.setAttribute("id",t)},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0},e.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")},e.prototype.render=function(){var t=this,n=this,o=n.checked,r=n.name,a=n.color,c=n.value,l=n.disabled,u=n.nativeProps;return Object(i.e)(i.a,{"className":"weui-cells_checkbox"},Object(i.e)("input",Object.assign({"ref":function(n){n&&(t.inputEl=n,t.id&&n.setAttribute("id",t.id))},"type":"checkbox","value":c,"name":r,"class":"taro-checkbox_checked","style":{"color":a},"checked":o,"disabled":l,"onChange":this.handleChange},u)),Object(i.e)("slot",null))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"id":["watchId"]}},"enumerable":!1,"configurable":!0}),e}();r.style='@charset "UTF-8";.taro-checkbox{display:inline-block;position:relative}.taro-checkbox_checked{display:inline-block;position:relative;top:5px;border:1px solid #d1d1d1;border-radius:3px;width:23px;height:23px;min-height:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background-color:#fff;vertical-align:0;font-size:23px;color:#1aad19}.taro-checkbox_checked:checked::before{display:inline-block;position:absolute;left:50%;top:50%;vertical-align:middle;text-decoration:inherit;text-align:center;text-transform:none;font-family:weui;font-style:normal;font-weight:normal;font-variant:normal;font-size:inherit;color:inherit;content:"";-webkit-transform:translate(-50%, -48%) scale(0.73);transform:translate(-50%, -48%) scale(0.73);speak:none}';var a=function(){function e(t){Object(i.g)(this,t),this.onChange=Object(i.c)(this,"change",7),this.uniqueName=Date.now().toString(36)}return e.prototype.function=function(t){if(t.stopPropagation(),"TARO-CHECKBOX-CORE"===t.target.tagName){var n=this.el.querySelectorAll("taro-checkbox-core");this.value=this.getValues(n),this.onChange.emit({"value":this.value})}},e.prototype.componentDidLoad=function(){var t=this;this.el.querySelectorAll("taro-checkbox-core").forEach((function(n){n.setAttribute("name",t.name||t.uniqueName)})),Object.defineProperty(this.el,"value",{"get":function(){if(!t.value){var n=t.el.querySelectorAll("taro-checkbox-core");t.value=t.getValues(n)}return t.value},"configurable":!0})},e.prototype.getValues=function(t){return Array.from(t).filter((function(t){var n=t.querySelector("input");return null==n?void 0:n.checked})).map((function(t){return t.value}))},e.prototype.render=function(){return Object(i.e)(i.a,null)},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),e}()}}]);
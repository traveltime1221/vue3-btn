(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".transition-1[data-v-6b6b0a44]{transition:.3s}.relative[data-v-6b6b0a44]{position:relative}.absolute[data-v-6b6b0a44]{position:absolute}.left-0[data-v-6b6b0a44]{left:0}.right-0[data-v-6b6b0a44]{right:0}.opacity-0[data-v-6b6b0a44]{opacity:0}.btn[data-v-6b6b0a44]{background:#434343;border:0;outline:0;padding:8px 16px;border-radius:4px;color:#fff;transition:.3s;cursor:pointer}.btn[data-v-6b6b0a44]:hover{transition:.3s;filter:brightness(1.2)}.btn[data-v-6b6b0a44]:disabled{opacity:.5;pointer-events:none}.btn[data-v-6b6b0a44]:disabled:hover{transition:.3s;filter:brightness(1)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.vue3CustomeBtn=n(e.Vue))})(this,function(e){"use strict";const n=(t,a)=>{const i=t.__vccOpts||t;for(const[s,o]of a)i[s]=o;return i},l=["disabled"];return n({__name:"Button",props:{disabled:{type:Boolean,default:!1},spinner:{type:Boolean,default:!1},name:{type:String,default:""},icon:{type:String,default:""},iconSpinner:{type:String,default:"fa fa-spinner fa-spin"},btnClass:{type:String,default:""}},emits:["click"],setup(t){return(a,i)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["btn relative",t.btnClass]),disabled:t.spinner||t.disabled,onClick:i[0]||(i[0]=s=>a.$emit("click"))},[e.createElementVNode("span",{class:e.normalizeClass(["absolute left-0 right-0 transition-1",{"opacity-0 transition-1":!t.spinner}])},[e.createElementVNode("i",{class:e.normalizeClass(t.iconSpinner),"aria-hidden":"true"},null,2)],2),e.createElementVNode("span",{class:e.normalizeClass(["transition-1",{"opacity-0 transition-1":t.spinner}])},[e.createElementVNode("i",{class:e.normalizeClass(t.icon)},null,2),e.createTextVNode(" "+e.toDisplayString(t.name),1)],2)],10,l))}},[["__scopeId","data-v-6b6b0a44"]])});

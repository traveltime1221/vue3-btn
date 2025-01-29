(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".transition-1[data-v-6b6b0a44]{transition:.3s}.relative[data-v-6b6b0a44]{position:relative}.absolute[data-v-6b6b0a44]{position:absolute}.left-0[data-v-6b6b0a44]{left:0}.right-0[data-v-6b6b0a44]{right:0}.opacity-0[data-v-6b6b0a44]{opacity:0}.btn[data-v-6b6b0a44]{background:#434343;border:0;outline:0;padding:8px 16px;border-radius:4px;color:#fff;transition:.3s;cursor:pointer}.btn[data-v-6b6b0a44]:hover{transition:.3s;filter:brightness(1.2)}.btn[data-v-6b6b0a44]:disabled{opacity:.5;pointer-events:none}.btn[data-v-6b6b0a44]:disabled:hover{transition:.3s;filter:brightness(1)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as o, createElementBlock as r, normalizeClass as n, createElementVNode as a, createTextVNode as c, toDisplayString as d } from "vue";
const u = (t, i) => {
  const e = t.__vccOpts || t;
  for (const [s, l] of i)
    e[s] = l;
  return e;
}, f = ["disabled"], p = {
  __name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    spinner: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconSpinner: {
      type: String,
      default: "fa fa-spinner fa-spin"
    },
    btnClass: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(t) {
    return (i, e) => (o(), r("button", {
      class: n(["btn relative", t.btnClass]),
      disabled: t.spinner || t.disabled,
      onClick: e[0] || (e[0] = (s) => i.$emit("click"))
    }, [
      a("span", {
        class: n(["absolute left-0 right-0 transition-1", { "opacity-0 transition-1": !t.spinner }])
      }, [
        a("i", {
          class: n(t.iconSpinner),
          "aria-hidden": "true"
        }, null, 2)
      ], 2),
      a("span", {
        class: n(["transition-1", { "opacity-0 transition-1": t.spinner }])
      }, [
        a("i", {
          class: n(t.icon)
        }, null, 2),
        c(" " + d(t.name), 1)
      ], 2)
    ], 10, f));
  }
}, m = /* @__PURE__ */ u(p, [["__scopeId", "data-v-6b6b0a44"]]);
export {
  m as default
};

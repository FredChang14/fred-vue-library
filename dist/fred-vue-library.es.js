import { openBlock as u, createElementBlock as a, normalizeClass as c, renderSlot as d, ref as r, onMounted as i, onUnmounted as l } from "vue";
const f = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, s] of n)
    e[o] = s;
  return e;
}, p = {
  name: "FButton",
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
function _(t, n, e, o, s, y) {
  return u(), a("button", {
    class: c(["fred-btn", [e.size, e.type]])
  }, [
    d(t.$slots, "default")
  ], 2);
}
const m = /* @__PURE__ */ f(p, [["render", _]]);
function x() {
  const t = r(0), n = r(0);
  function e(o) {
    t.value = o.pageX, n.value = o.pageY;
  }
  return i(() => window.addEventListener("mousemove", e)), l(() => window.removeEventListener("mousemove", e)), { x: t, y: n };
}
const v = [m], B = {
  install: function(t, n = {}) {
    v.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  m as FButton,
  B as default,
  x as useMouse
};

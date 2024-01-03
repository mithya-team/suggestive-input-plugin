import "./index.css";
import Ie, { useState as I, useRef as sr, useEffect as fr } from "react";
var le = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function lr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Ie, m = Symbol.for("react.element"), S = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), U = Symbol.iterator, N = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[N];
      return typeof r == "function" ? r : null;
    }
    var x = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        B("error", e, t);
      }
    }
    function B(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var X = !1, Z = !1, Q = !1, L = !1, ee = !1, g;
    g = Symbol.for("react.module.reference");
    function D(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === C || ee || e === O || e === j || e === c || L || e === w || X || Z || Q || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === y || e.$$typeof === T || e.$$typeof === R || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === g || e.getModuleId !== void 0));
    }
    function re(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case S:
          return "Portal";
        case C:
          return "Profiler";
        case O:
          return "StrictMode";
        case j:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ce(r) + ".Consumer";
          case T:
            var t = e;
            return ce(t._context) + ".Provider";
          case f:
            return re(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case p: {
            var u = e, s = u._payload, o = u._init;
            try {
              return P(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, de, ve, ge, pe, he, me, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ne() {
      {
        if (W === 0) {
          de = console.log, ve = console.info, ge = console.warn, pe = console.error, he = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Le() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: de
            }),
            info: F({}, e, {
              value: ve
            }),
            warn: F({}, e, {
              value: ge
            }),
            error: F({}, e, {
              value: pe
            }),
            group: F({}, e, {
              value: he
            }),
            groupCollapsed: F({}, e, {
              value: me
            }),
            groupEnd: F({}, e, {
              value: ye
            })
          });
        }
        W < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = x.ReactCurrentDispatcher, ne;
    function q(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, J;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      J = new We();
    }
    function be(e, r) {
      if (!e || ae)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = te.current, te.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (k) {
              n = k;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (k) {
              n = k;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            n = k;
          }
          e();
        }
      } catch (k) {
        if (k && n && typeof k.stack == "string") {
          for (var i = k.stack.split(`
`), h = n.stack.split(`
`), d = i.length - 1, v = h.length - 1; d >= 1 && v >= 0 && i[d] !== h[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (i[d] !== h[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || i[d] !== h[v]) {
                    var E = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, E), E;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = s, Le(), Error.prepareStackTrace = u;
      }
      var $ = e ? e.displayName || e.name : "", Fe = $ ? q($) : "";
      return typeof e == "function" && J.set(e, Fe), Fe;
    }
    function Ye(e, r, t) {
      return be(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Me(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case j:
          return q("Suspense");
        case c:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ye(e.render);
          case y:
            return G(e.type, r, t);
          case p: {
            var n = e, u = n._payload, s = n._init;
            try {
              return G(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Re = {}, _e = x.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, u) {
      {
        var s = Function.call.bind(K);
        for (var o in e)
          if (s(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (z(u), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), z(null)), i instanceof Error && !(i.message in Re) && (Re[i.message] = !0, z(u), l("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var Ue = Array.isArray;
    function ie(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Te(e) {
      if (qe(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Se(e);
    }
    var Y = x.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Oe, oe;
    oe = {};
    function Ge(e) {
      if (K.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = P(Y.current.type);
        oe[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Y.current.type), e.ref), oe[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          we || (we = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, u, s, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function Qe(e, r, t, n, u) {
      {
        var s, o = {}, i = null, h = null;
        t !== void 0 && (Te(t), i = "" + t), Ke(r) && (Te(r.key), i = "" + r.key), Ge(r) && (h = r.ref, ze(r, u));
        for (s in r)
          K.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (s in d)
            o[s] === void 0 && (o[s] = d[s]);
        }
        if (i || h) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && He(o, v), h && Xe(o, v);
        }
        return Ze(e, i, h, u, n, Y.current, o);
      }
    }
    var ue = x.ReactCurrentOwner, Ce = x.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function je() {
      {
        if (ue.current) {
          var e = P(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function rr(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ue.current && (n = " It was passed a child from " + P(e._owner.type) + "."), A(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            fe(n) && Pe(n, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = H(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), o; !(o = s.next()).done; )
              fe(o.value) && Pe(o.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var u = P(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function De(e, r, t, n, u, s) {
      {
        var o = D(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = er(u);
          h ? i += h : i += je();
          var d;
          e === null ? d = "null" : ie(e) ? d = "array" : e !== void 0 && e.$$typeof === m ? (d = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var v = Qe(e, r, t, u, s);
        if (v == null)
          return v;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ie(E)) {
                for (var $ = 0; $ < E.length; $++)
                  ke(E[$], e);
                Object.freeze && Object.freeze(E);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(E, e);
        }
        return e === a ? nr(v) : tr(v), v;
      }
    }
    function ar(e, r, t) {
      return De(e, r, t, !0);
    }
    function ir(e, r, t) {
      return De(e, r, t, !1);
    }
    var or = ir, ur = ar;
    M.Fragment = a, M.jsx = or, M.jsxs = ur;
  }()), M;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function cr() {
  if ($e)
    return V;
  $e = 1;
  var _ = Ie, m = Symbol.for("react.element"), S = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, O = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(R, f, j) {
    var c, y = {}, p = null, w = null;
    j !== void 0 && (p = "" + j), f.key !== void 0 && (p = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (c in f)
      a.call(f, c) && !C.hasOwnProperty(c) && (y[c] = f[c]);
    if (R && R.defaultProps)
      for (c in f = R.defaultProps, f)
        y[c] === void 0 && (y[c] = f[c]);
    return { $$typeof: m, type: R, key: p, ref: w, props: y, _owner: O.current };
  }
  return V.Fragment = S, V.jsx = T, V.jsxs = T, V;
}
process.env.NODE_ENV === "production" ? le.exports = cr() : le.exports = lr();
var b = le.exports;
const dr = ({
  pattern: _,
  text: m,
  classes: S
}) => {
  if (!_)
    return m;
  const a = m.toLowerCase().indexOf(_.toLowerCase()), O = a + _.length;
  if (a === -1)
    return m;
  const C = m.slice(0, a), T = m.slice(a, O), R = m.slice(O);
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    C,
    /* @__PURE__ */ b.jsx("span", { className: S == null ? void 0 : S.highlighted, children: T }),
    R
  ] });
}, pr = ({
  fetchSuggestions: _,
  onSelection: m,
  debounceTime: S = 300,
  classes: a,
  defaultValue: O = "",
  loadingComponent: C = /* @__PURE__ */ b.jsx("span", { children: "Loading..." }),
  noSuggestionsComponent: T = /* @__PURE__ */ b.jsx("span", { children: "No matches found" }),
  allowStrictSelection: R = !0
}) => {
  const [f, j] = I(O), [c, y] = I([]), [p, w] = I(-1), [U, N] = I(!1), [H, x] = I(!1), [l, B] = I(!1), X = sr(null);
  fr(() => {
    const g = setTimeout(() => {
      f && H ? (B(!0), (async () => {
        const re = await _(f);
        y(re), B(!1);
      })(), N(!0)) : (y([]), N(!1));
    }, S);
    return () => {
      clearTimeout(g), x(!0);
    };
  }, [f, _, S]);
  const Z = (g) => {
    g.key === "ArrowDown" && p < c.length - 1 ? w(p + 1) : g.key === "ArrowUp" && p > 0 ? w(p - 1) : g.key === "Enter" && (g.preventDefault(), R || p > -1 ? L(c[p]) : L(f));
  }, Q = (g) => {
    L(c[g]);
  }, L = (g) => {
    m(g), j(g), x(!1), y([]), N(!1), w(-1);
  }, ee = U && (l && C || !l && c.length === 0 && T || !l && c.length > 0);
  return /* @__PURE__ */ b.jsxs("div", { className: `suggestive-input--root ${a == null ? void 0 : a.root}`, children: [
    /* @__PURE__ */ b.jsx(
      "input",
      {
        type: "text",
        ref: X,
        className: `suggestive-input--input ${a == null ? void 0 : a.input}`,
        value: f,
        onChange: (g) => j(g.target.value),
        onKeyDown: Z,
        "aria-autocomplete": "list",
        "aria-controls": "suggestions",
        "aria-activedescendant": `suggestion-${p}`
      }
    ),
    ee && /* @__PURE__ */ b.jsxs(
      "ul",
      {
        id: "suggestions",
        role: "listbox",
        className: `suggestive-input--list ${a == null ? void 0 : a.suggestionList}`,
        onMouseLeave: () => w(-1),
        children: [
          l && /* @__PURE__ */ b.jsx("li", { className: `suggestive-input--loading ${a == null ? void 0 : a.loading}`, children: C }),
          !l && c.length === 0 && /* @__PURE__ */ b.jsx(
            "li",
            {
              className: `suggestive-input--no-suggestion ${a == null ? void 0 : a.noSuggestions}`,
              children: T
            }
          ),
          !l && c.map((g, D) => /* @__PURE__ */ b.jsx(
            "li",
            {
              style: { listStyle: "none" },
              id: `suggestion-${D}`,
              role: "option",
              "aria-selected": D === p,
              className: `suggestive-input--item ${a == null ? void 0 : a.suggestionItem} ${D === p ? `suggestive-input-item--active ${a == null ? void 0 : a.activeSuggestion}` : ""}`,
              onMouseDown: () => Q(D),
              onMouseEnter: () => w(D),
              children: /* @__PURE__ */ b.jsx(
                dr,
                {
                  pattern: f,
                  text: g,
                  classes: {
                    highlighted: `suggestive-input--highlighted ${a == null ? void 0 : a.highlighted}`
                  }
                }
              )
            },
            g
          ))
        ]
      }
    )
  ] });
};
export {
  pr as SuggestiveInput
};

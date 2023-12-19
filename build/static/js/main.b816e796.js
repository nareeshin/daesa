/*! For license information please see main.b816e796.js.LICENSE.txt */
(() => {
  var e = {
      618: (e, t, r) => {
        var n;
        !(function () {
          "use strict";
          var a = !(
              "undefined" === typeof window ||
              !window.document ||
              !window.document.createElement
            ),
            i = {
              canUseDOM: a,
              canUseWorkers: "undefined" !== typeof Worker,
              canUseEventListeners:
                a && !(!window.addEventListener && !window.attachEvent),
              canUseViewport: a && !!window.screen,
            };
          void 0 ===
            (n = function () {
              return i;
            }.call(t, r, t, e)) || (e.exports = n);
        })();
      },
      888: (e, t, r) => {
        "use strict";
        var n = r(47);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, r, a, i, o) {
              if (o !== n) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var r = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (r.PropTypes = r), r;
          });
      },
      7: (e, t, r) => {
        e.exports = r(888)();
      },
      47: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: (e, t, r) => {
        "use strict";
        var n = r(791),
          a = r(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function c(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function y(e, t, r, n, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = a),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new y(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new y(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new y(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new y(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new y(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new y(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, r, n) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : n ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, r, n) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, a, n) && (r = null),
            n || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === r ? 3 !== a.type && "" : r)
              : ((t = a.attributeName),
                (n = a.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r =
                      3 === (a = a.type) || (4 === a && !0 === r)
                        ? ""
                        : "" + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, v);
            g[t] = new y(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, v);
              g[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, v);
            g[t] = new y(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new y(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          L = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          F = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          A = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          _ = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function P(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (j && e[j]) || e["@@iterator"])
            ? e
            : null;
        }
        var U,
          M = Object.assign;
        function z(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (r) {
              var t = r.stack.trim().match(/\n( *(at )?)/);
              U = (t && t[1]) || "";
            }
          return "\n" + U + e;
        }
        var D = !1;
        function I(e, t) {
          if (!e || D) return "";
          D = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var n = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  n = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e();
            }
          } catch (u) {
            if (u && n && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = n.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var c = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = r);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case w:
              return "Portal";
            case x:
              return "Profiler";
            case L:
              return "StrictMode";
            case N:
              return "Suspense";
            case _:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case F:
                return (e._context.displayName || "Context") + ".Provider";
              case A:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (r) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === L ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof r &&
                "function" === typeof r.get &&
                "function" === typeof r.set
              ) {
                var a = r.get,
                  i = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = "";
          return (
            e && (n = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var r = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = $(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var r = $(t.value),
            n = t.type;
          if (null != r)
            "number" === n
              ? ((0 === r && "" === e.value) || e.value != r) &&
                (e.value = "" + r)
              : e.value !== "" + r && (e.value = "" + r);
          else if ("submit" === n || "reset" === n)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, r)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (
              !(
                ("submit" !== n && "reset" !== n) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (r = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== r && (e.name = r);
        }
        function ee(e, t, r) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == r
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
        }
        var te = Array.isArray;
        function re(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
            for (r = 0; r < e.length; r++)
              (a = t.hasOwnProperty("$" + e[r].value)),
                e[r].selected !== a && (e[r].selected = a),
                a && n && (e[r].defaultSelected = !0);
          } else {
            for (r = "" + $(r), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === r)
                return (
                  (e[a].selected = !0), void (n && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ne(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.children), (t = t.defaultValue), null != r)) {
              if (null != t) throw Error(i(92));
              if (te(r)) {
                if (1 < r.length) throw Error(i(93));
                r = r[0];
              }
              t = r;
            }
            null == t && (t = ""), (r = t);
          }
          e._wrapperState = { initialValue: $(r) };
        }
        function ie(e, t) {
          var r = $(t.value),
            n = $(t.defaultValue);
          null != r &&
            ((r = "" + r) !== e.value && (e.value = r),
            null == t.defaultValue &&
              e.defaultValue !== r &&
              (e.defaultValue = r)),
            null != n && (e.defaultValue = "" + n);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ce(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          se,
          de =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function fe(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType)
              return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ye(e, t, r) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : r ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf("--"),
                a = ye(r, t[r], n);
              "float" === r && (r = "cssFloat"),
                n ? e.setProperty(r, a) : (e[r] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var me = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Se = null;
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Le = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof we) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Ea(t)), we(e.stateNode, e.type, t));
          }
        }
        function Fe(e) {
          ke ? (Le ? Le.push(e) : (Le = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Le;
            if (((Le = ke = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Ae(e, t) {
          return e(t);
        }
        function Ne() {}
        var _e = !1;
        function Te(e, t, r) {
          if (_e) return e(t, r);
          _e = !0;
          try {
            return Ae(e, t, r);
          } finally {
            (_e = !1), (null !== ke || null !== Le) && (Ne(), Ce());
          }
        }
        function Re(e, t) {
          var r = e.stateNode;
          if (null === r) return null;
          var n = Ea(r);
          if (null === n) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" !== typeof r) throw Error(i(231, t, typeof r));
          return r;
        }
        var Oe = !1;
        if (s)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (se) {
            Oe = !1;
          }
        function Pe(e, t, r, n, a, i, o, l, c) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (s) {
            this.onError(s);
          }
        }
        var Ue = !1,
          Me = null,
          ze = !1,
          De = null,
          Ie = {
            onError: function (e) {
              (Ue = !0), (Me = e);
            },
          };
        function We(e, t, r, n, a, i, o, l, c) {
          (Ue = !1), (Me = null), Pe.apply(Ie, arguments);
        }
        function Be(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var a = r.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (n = a.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === r) return $e(a), e;
                    if (o === n) return $e(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (r.return !== n.return) (r = a), (n = o);
                else {
                  for (var l = !1, c = a.child; c; ) {
                    if (c === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    if (c === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!l) {
                    for (c = o.child; c; ) {
                      if (c === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      if (c === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (r.alternate !== n) throw Error(i(190));
              }
              if (3 !== r.tag) throw Error(i(188));
              return r.stateNode.current === r ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          rt = a.unstable_LowPriority,
          nt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ct) | 0)) | 0;
              },
          lt = Math.log,
          ct = Math.LN2;
        var ut = 64,
          st = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var n = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & r;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (n = dt(l)) : 0 !== (i &= o) && (n = dt(i));
          } else 0 !== (o = r & ~a) ? (n = dt(o)) : 0 !== i && (n = dt(i));
          if (0 === n) return 0;
          if (
            0 !== t &&
            t !== n &&
            0 === (t & a) &&
            ((a = n & -n) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= n; 0 < t; )
              (a = 1 << (r = 31 - ot(t))), (n |= e[r]), (t &= ~a);
          return n;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function yt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e);
          return t;
        }
        function mt(e, t, r) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = r);
        }
        function vt(e, t) {
          var r = (e.entangledLanes |= t);
          for (e = e.entanglements; r; ) {
            var n = 31 - ot(r),
              a = 1 << n;
            (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Et,
          wt,
          kt,
          Lt,
          xt,
          Ft = !1,
          Ct = [],
          At = null,
          Nt = null,
          _t = null,
          Tt = new Map(),
          Rt = new Map(),
          Ot = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Pt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              At = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              _t = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Ut(e, t, r, n, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= n),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = va(e.target);
          if (null !== t) {
            var r = Be(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = He(r)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      kt(r);
                    })
                  );
              } else if (
                3 === t &&
                r.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== r)
              return null !== (t = ba(r)) && wt(t), (e.blockedOn = r), !1;
            var n = new (r = e.nativeEvent).constructor(r.type, r);
            (Se = n), r.target.dispatchEvent(n), (Se = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, r) {
          zt(e) && r.delete(t);
        }
        function It() {
          (Ft = !1),
            null !== At && zt(At) && (At = null),
            null !== Nt && zt(Nt) && (Nt = null),
            null !== _t && zt(_t) && (_t = null),
            Tt.forEach(Dt),
            Rt.forEach(Dt);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ft ||
              ((Ft = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Bt(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Ct.length) {
            Wt(Ct[0], e);
            for (var r = 1; r < Ct.length; r++) {
              var n = Ct[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== At && Wt(At, e),
              null !== Nt && Wt(Nt, e),
              null !== _t && Wt(_t, e),
              Tt.forEach(t),
              Rt.forEach(t),
              r = 0;
            r < Ot.length;
            r++
          )
            (n = Ot[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < Ot.length && null === (r = Ot[0]).blockedOn; )
            Mt(r), null === r.blockedOn && Ot.shift();
        }
        var Ht = S.ReactCurrentBatchConfig,
          $t = !0;
        function Vt(e, t, r, n) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, r, n);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function Qt(e, t, r, n) {
          var a = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, r, n);
          } finally {
            (bt = a), (Ht.transition = i);
          }
        }
        function qt(e, t, r, n) {
          if ($t) {
            var a = Yt(e, t, r, n);
            if (null === a) $n(e, t, n, Kt, r), Pt(e, n);
            else if (
              (function (e, t, r, n, a) {
                switch (t) {
                  case "focusin":
                    return (At = Ut(At, e, t, r, n, a)), !0;
                  case "dragenter":
                    return (Nt = Ut(Nt, e, t, r, n, a)), !0;
                  case "mouseover":
                    return (_t = Ut(_t, e, t, r, n, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Tt.set(i, Ut(Tt.get(i) || null, e, t, r, n, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Rt.set(i, Ut(Rt.get(i) || null, e, t, r, n, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, r, n)
            )
              n.stopPropagation();
            else if ((Pt(e, n), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && Et(i),
                  null === (i = Yt(e, t, r, n)) && $n(e, t, n, Kt, r),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && n.stopPropagation();
            } else $n(e, t, n, null, r);
          }
        }
        var Kt = null;
        function Yt(e, t, r, n) {
          if (((Kt = null), null !== (e = va((e = Ee(n))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (r = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === r) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case rt:
                  return 16;
                case nt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function er() {
          if (Zt) return Zt;
          var e,
            t,
            r = Jt,
            n = r.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            i = a.length;
          for (e = 0; e < n && r[e] === a[e]; e++);
          var o = n - e;
          for (t = 1; t <= o && r[n - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tr(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rr() {
          return !0;
        }
        function nr() {
          return !1;
        }
        function ar(e) {
          function t(t, r, n, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rr
                : nr),
              (this.isPropagationStopped = nr),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rr));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rr));
              },
              persist: function () {},
              isPersistent: rr,
            }),
            t
          );
        }
        var ir,
          or,
          lr,
          cr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ur = ar(cr),
          sr = M({}, cr, { view: 0, detail: 0 }),
          dr = ar(sr),
          fr = M({}, sr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Lr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== lr &&
                    (lr && "mousemove" === e.type
                      ? ((ir = e.screenX - lr.screenX),
                        (or = e.screenY - lr.screenY))
                      : (or = ir = 0),
                    (lr = e)),
                  ir);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : or;
            },
          }),
          pr = ar(fr),
          hr = ar(M({}, fr, { dataTransfer: 0 })),
          yr = ar(M({}, sr, { relatedTarget: 0 })),
          gr = ar(
            M({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          mr = M({}, cr, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vr = ar(mr),
          br = ar(M({}, cr, { data: 0 })),
          Sr = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Er = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          wr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kr(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wr[e]) && !!t[e];
        }
        function Lr() {
          return kr;
        }
        var xr = M({}, sr, {
            key: function (e) {
              if (e.key) {
                var t = Sr[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tr(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Er[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Lr,
            charCode: function (e) {
              return "keypress" === e.type ? tr(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tr(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Fr = ar(xr),
          Cr = ar(
            M({}, fr, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ar = ar(
            M({}, sr, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Lr,
            })
          ),
          Nr = ar(
            M({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _r = M({}, fr, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tr = ar(_r),
          Rr = [9, 13, 27, 32],
          Or = s && "CompositionEvent" in window,
          jr = null;
        s && "documentMode" in document && (jr = document.documentMode);
        var Pr = s && "TextEvent" in window && !jr,
          Ur = s && (!Or || (jr && 8 < jr && 11 >= jr)),
          Mr = String.fromCharCode(32),
          zr = !1;
        function Dr(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rr.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Ir(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wr = !1;
        var Br = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Br[e.type] : "textarea" === t;
        }
        function $r(e, t, r, n) {
          Fe(n),
            0 < (t = Qn(t, "onChange")).length &&
              ((r = new ur("onChange", "change", null, r, n)),
              e.push({ event: r, listeners: t }));
        }
        var Vr = null,
          Qr = null;
        function qr(e) {
          zn(e, 0);
        }
        function Kr(e) {
          if (q(Sa(e))) return e;
        }
        function Yr(e, t) {
          if ("change" === e) return t;
        }
        var Gr = !1;
        if (s) {
          var Xr;
          if (s) {
            var Jr = "oninput" in document;
            if (!Jr) {
              var Zr = document.createElement("div");
              Zr.setAttribute("oninput", "return;"),
                (Jr = "function" === typeof Zr.oninput);
            }
            Xr = Jr;
          } else Xr = !1;
          Gr = Xr && (!document.documentMode || 9 < document.documentMode);
        }
        function en() {
          Vr && (Vr.detachEvent("onpropertychange", tn), (Qr = Vr = null));
        }
        function tn(e) {
          if ("value" === e.propertyName && Kr(Qr)) {
            var t = [];
            $r(t, Qr, e, Ee(e)), Te(qr, t);
          }
        }
        function rn(e, t, r) {
          "focusin" === e
            ? (en(), (Qr = r), (Vr = t).attachEvent("onpropertychange", tn))
            : "focusout" === e && en();
        }
        function nn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kr(Qr);
        }
        function an(e, t) {
          if ("click" === e) return Kr(t);
        }
        function on(e, t) {
          if ("input" === e || "change" === e) return Kr(t);
        }
        var ln =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function cn(e, t) {
          if (ln(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++) {
            var a = r[n];
            if (!d.call(t, a) || !ln(e[a], t[a])) return !1;
          }
          return !0;
        }
        function un(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sn(e, t) {
          var r,
            n = un(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = un(n);
          }
        }
        function dn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fn() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = "string" === typeof t.contentWindow.location.href;
            } catch (n) {
              r = !1;
            }
            if (!r) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hn(e) {
          var t = fn(),
            r = e.focusedElem,
            n = e.selectionRange;
          if (
            t !== r &&
            r &&
            r.ownerDocument &&
            dn(r.ownerDocument.documentElement, r)
          ) {
            if (null !== n && pn(r))
              if (
                ((t = n.start),
                void 0 === (e = n.end) && (e = t),
                "selectionStart" in r)
              )
                (r.selectionStart = t),
                  (r.selectionEnd = Math.min(e, r.value.length));
              else if (
                (e =
                  ((t = r.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = r.textContent.length,
                  i = Math.min(n.start, a);
                (n = void 0 === n.end ? i : Math.min(n.end, a)),
                  !e.extend && i > n && ((a = n), (n = i), (i = a)),
                  (a = sn(r, i));
                var o = sn(r, n);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > n
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = r; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof r.focus && r.focus(), r = 0;
              r < t.length;
              r++
            )
              ((e = t[r]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var yn = s && "documentMode" in document && 11 >= document.documentMode,
          gn = null,
          mn = null,
          vn = null,
          bn = !1;
        function Sn(e, t, r) {
          var n =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
          bn ||
            null == gn ||
            gn !== K(n) ||
            ("selectionStart" in (n = gn) && pn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            (vn && cn(vn, n)) ||
              ((vn = n),
              0 < (n = Qn(mn, "onSelect")).length &&
                ((t = new ur("onSelect", "select", null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = gn))));
        }
        function En(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r["Webkit" + e] = "webkit" + t),
            (r["Moz" + e] = "moz" + t),
            r
          );
        }
        var wn = {
            animationend: En("Animation", "AnimationEnd"),
            animationiteration: En("Animation", "AnimationIteration"),
            animationstart: En("Animation", "AnimationStart"),
            transitionend: En("Transition", "TransitionEnd"),
          },
          kn = {},
          Ln = {};
        function xn(e) {
          if (kn[e]) return kn[e];
          if (!wn[e]) return e;
          var t,
            r = wn[e];
          for (t in r)
            if (r.hasOwnProperty(t) && t in Ln) return (kn[e] = r[t]);
          return e;
        }
        s &&
          ((Ln = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wn.animationend.animation,
            delete wn.animationiteration.animation,
            delete wn.animationstart.animation),
          "TransitionEvent" in window || delete wn.transitionend.transition);
        var Fn = xn("animationend"),
          Cn = xn("animationiteration"),
          An = xn("animationstart"),
          Nn = xn("transitionend"),
          _n = new Map(),
          Tn =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rn(e, t) {
          _n.set(e, t), c(t, [e]);
        }
        for (var On = 0; On < Tn.length; On++) {
          var jn = Tn[On];
          Rn(jn.toLowerCase(), "on" + (jn[0].toUpperCase() + jn.slice(1)));
        }
        Rn(Fn, "onAnimationEnd"),
          Rn(Cn, "onAnimationIteration"),
          Rn(An, "onAnimationStart"),
          Rn("dblclick", "onDoubleClick"),
          Rn("focusin", "onFocus"),
          Rn("focusout", "onBlur"),
          Rn(Nn, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Pn =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Un = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Pn)
          );
        function Mn(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = r),
            (function (e, t, r, n, a, o, l, c, u) {
              if ((We.apply(this, arguments), Ue)) {
                if (!Ue) throw Error(i(198));
                var s = Me;
                (Ue = !1), (Me = null), ze || ((ze = !0), (De = s));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function zn(e, t) {
          t = 0 !== (4 & t);
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              a = n.event;
            n = n.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = n.length - 1; 0 <= o; o--) {
                  var l = n[o],
                    c = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), c !== i && a.isPropagationStopped()))
                    break e;
                  Mn(a, l, u), (i = c);
                }
              else
                for (o = 0; o < n.length; o++) {
                  if (
                    ((c = (l = n[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    c !== i && a.isPropagationStopped())
                  )
                    break e;
                  Mn(a, l, u), (i = c);
                }
            }
          }
          if (ze) throw ((e = De), (ze = !1), (De = null), e);
        }
        function Dn(e, t) {
          var r = t[ya];
          void 0 === r && (r = t[ya] = new Set());
          var n = e + "__bubble";
          r.has(n) || (Hn(t, e, 2, !1), r.add(n));
        }
        function In(e, t, r) {
          var n = 0;
          t && (n |= 4), Hn(r, e, n, t);
        }
        var Wn = "_reactListening" + Math.random().toString(36).slice(2);
        function Bn(e) {
          if (!e[Wn]) {
            (e[Wn] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Un.has(t) || In(t, !1, e), In(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wn] || ((t[Wn] = !0), In("selectionchange", !1, t));
          }
        }
        function Hn(e, t, r, n) {
          switch (Gt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (r = a.bind(null, t, r, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            n
              ? void 0 !== a
                ? e.addEventListener(t, r, { capture: !0, passive: a })
                : e.addEventListener(t, r, !0)
              : void 0 !== a
              ? e.addEventListener(t, r, { passive: a })
              : e.addEventListener(t, r, !1);
        }
        function $n(e, t, r, n, a) {
          var i = n;
          if (0 === (1 & t) && 0 === (2 & t) && null !== n)
            e: for (;;) {
              if (null === n) return;
              var o = n.tag;
              if (3 === o || 4 === o) {
                var l = n.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = n.return; null !== o; ) {
                    var c = o.tag;
                    if (
                      (3 === c || 4 === c) &&
                      ((c = o.stateNode.containerInfo) === a ||
                        (8 === c.nodeType && c.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = va(l))) return;
                  if (5 === (c = o.tag) || 6 === c) {
                    n = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              n = n.return;
            }
          Te(function () {
            var n = i,
              a = Ee(r),
              o = [];
            e: {
              var l = _n.get(e);
              if (void 0 !== l) {
                var c = ur,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tr(r)) break e;
                  case "keydown":
                  case "keyup":
                    c = Fr;
                    break;
                  case "focusin":
                    (u = "focus"), (c = yr);
                    break;
                  case "focusout":
                    (u = "blur"), (c = yr);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = yr;
                    break;
                  case "click":
                    if (2 === r.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = pr;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = hr;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = Ar;
                    break;
                  case Fn:
                  case Cn:
                  case An:
                    c = gr;
                    break;
                  case Nn:
                    c = Nr;
                    break;
                  case "scroll":
                    c = dr;
                    break;
                  case "wheel":
                    c = Tr;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = vr;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = Cr;
                }
                var s = 0 !== (4 & t),
                  d = !s && "scroll" === e,
                  f = s ? (null !== l ? l + "Capture" : null) : l;
                s = [];
                for (var p, h = n; null !== h; ) {
                  var y = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== y &&
                      ((p = y),
                      null !== f &&
                        null != (y = Re(h, f)) &&
                        s.push(Vn(h, y, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((l = new c(l, u, null, r, a)),
                  o.push({ event: l, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  r === Se ||
                  !(u = r.relatedTarget || r.fromElement) ||
                  (!va(u) && !u[ha])) &&
                  (c || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  c
                    ? ((c = n),
                      null !==
                        (u = (u = r.relatedTarget || r.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((c = null), (u = n)),
                  c !== u))
              ) {
                if (
                  ((s = pr),
                  (y = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Cr),
                    (y = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == c ? l : Sa(c)),
                  (p = null == u ? l : Sa(u)),
                  ((l = new s(y, h + "leave", c, r, a)).target = d),
                  (l.relatedTarget = p),
                  (y = null),
                  va(a) === n &&
                    (((s = new s(f, h + "enter", u, r, a)).target = p),
                    (s.relatedTarget = d),
                    (y = s)),
                  (d = y),
                  c && u)
                )
                  e: {
                    for (f = u, h = 0, p = s = c; p; p = qn(p)) h++;
                    for (p = 0, y = f; y; y = qn(y)) p++;
                    for (; 0 < h - p; ) (s = qn(s)), h--;
                    for (; 0 < p - h; ) (f = qn(f)), p--;
                    for (; h--; ) {
                      if (s === f || (null !== f && s === f.alternate)) break e;
                      (s = qn(s)), (f = qn(f));
                    }
                    s = null;
                  }
                else s = null;
                null !== c && Kn(o, l, c, s, !1),
                  null !== u && null !== d && Kn(o, d, u, s, !0);
              }
              if (
                "select" ===
                  (c =
                    (l = n ? Sa(n) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === c && "file" === l.type)
              )
                var g = Yr;
              else if (Hr(l))
                if (Gr) g = on;
                else {
                  g = nn;
                  var m = rn;
                }
              else
                (c = l.nodeName) &&
                  "input" === c.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = an);
              switch (
                (g && (g = g(e, n))
                  ? $r(o, g, r, a)
                  : (m && m(e, l, n),
                    "focusout" === e &&
                      (m = l._wrapperState) &&
                      m.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (m = n ? Sa(n) : window),
                e)
              ) {
                case "focusin":
                  (Hr(m) || "true" === m.contentEditable) &&
                    ((gn = m), (mn = n), (vn = null));
                  break;
                case "focusout":
                  vn = mn = gn = null;
                  break;
                case "mousedown":
                  bn = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (bn = !1), Sn(o, r, a);
                  break;
                case "selectionchange":
                  if (yn) break;
                case "keydown":
                case "keyup":
                  Sn(o, r, a);
              }
              var v;
              if (Or)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wr
                  ? Dr(e, r) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === r.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ur &&
                  "ko" !== r.locale &&
                  (Wr || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wr && (v = er())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Wr = !0))),
                0 < (m = Qn(n, b)).length &&
                  ((b = new br(b, e, null, r, a)),
                  o.push({ event: b, listeners: m }),
                  v ? (b.data = v) : null !== (v = Ir(r)) && (b.data = v))),
                (v = Pr
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Ir(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zr = !0), Mr);
                        case "textInput":
                          return (e = t.data) === Mr && zr ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Wr)
                        return "compositionend" === e || (!Or && Dr(e, t))
                          ? ((e = er()), (Zt = Jt = Xt = null), (Wr = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ur && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, r)) &&
                  0 < (n = Qn(n, "onBeforeInput")).length &&
                  ((a = new br("onBeforeInput", "beforeinput", null, r, a)),
                  o.push({ event: a, listeners: n }),
                  (a.data = v));
            }
            zn(o, t);
          });
        }
        function Vn(e, t, r) {
          return { instance: e, listener: t, currentTarget: r };
        }
        function Qn(e, t) {
          for (var r = t + "Capture", n = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Re(e, r)) && n.unshift(Vn(e, i, a)),
              null != (i = Re(e, t)) && n.push(Vn(e, i, a))),
              (e = e.return);
          }
          return n;
        }
        function qn(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kn(e, t, r, n, a) {
          for (var i = t._reactName, o = []; null !== r && r !== n; ) {
            var l = r,
              c = l.alternate,
              u = l.stateNode;
            if (null !== c && c === n) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (c = Re(r, i)) && o.unshift(Vn(r, c, l))
                : a || (null != (c = Re(r, i)) && o.push(Vn(r, c, l)))),
              (r = r.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yn = /\r\n?/g,
          Gn = /\u0000|\uFFFD/g;
        function Xn(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yn, "\n")
            .replace(Gn, "");
        }
        function Jn(e, t, r) {
          if (((t = Xn(t)), Xn(e) !== t && r)) throw Error(i(425));
        }
        function Zn() {}
        var ea = null,
          ta = null;
        function ra(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var na = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : na;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ca(e, t) {
          var r = t,
            n = 0;
          do {
            var a = r.nextSibling;
            if ((e.removeChild(r), a && 8 === a.nodeType))
              if ("/$" === (r = a.data)) {
                if (0 === n) return e.removeChild(a), void Bt(t);
                n--;
              } else ("$" !== r && "$?" !== r && "$!" !== r) || n++;
            r = a;
          } while (r);
          Bt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if ("$" === r || "$!" === r || "$?" === r) {
                if (0 === t) return e;
                t--;
              } else "/$" === r && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ya = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ma = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[ha] || r[fa])) {
              if (
                ((r = t.alternate),
                null !== t.child || (null !== r && null !== r.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((r = e[fa])) return r;
                  e = sa(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Ea(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function La(e) {
          return { current: e };
        }
        function xa(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function Fa(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Ca = {},
          Aa = La(Ca),
          Na = La(!1),
          _a = Ca;
        function Ta(e, t) {
          var r = e.type.contextTypes;
          if (!r) return Ca;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in r) i[a] = t[a];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          xa(Na), xa(Aa);
        }
        function ja(e, t, r) {
          if (Aa.current !== Ca) throw Error(i(168));
          Fa(Aa, t), Fa(Na, r);
        }
        function Pa(e, t, r) {
          var n = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof n.getChildContext)
          )
            return r;
          for (var a in (n = n.getChildContext()))
            if (!(a in t)) throw Error(i(108, H(e) || "Unknown", a));
          return M({}, r, n);
        }
        function Ua(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (_a = Aa.current),
            Fa(Aa, e),
            Fa(Na, Na.current),
            !0
          );
        }
        function Ma(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(i(169));
          r
            ? ((e = Pa(e, t, _a)),
              (n.__reactInternalMemoizedMergedChildContext = e),
              xa(Na),
              xa(Aa),
              Fa(Aa, e))
            : xa(Na),
            Fa(Na, r);
        }
        var za = null,
          Da = !1,
          Ia = !1;
        function Wa(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ba() {
          if (!Ia && null !== za) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var r = za;
              for (bt = 1; e < r.length; e++) {
                var n = r[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
              (za = null), (Da = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Ze, Ba), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Ha = [],
          $a = 0,
          Va = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Ga = 1,
          Xa = "";
        function Ja(e, t) {
          (Ha[$a++] = Qa), (Ha[$a++] = Va), (Va = e), (Qa = t);
        }
        function Za(e, t, r) {
          (qa[Ka++] = Ga), (qa[Ka++] = Xa), (qa[Ka++] = Ya), (Ya = e);
          var n = Ga;
          e = Xa;
          var a = 32 - ot(n) - 1;
          (n &= ~(1 << a)), (r += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (n & ((1 << o) - 1)).toString(32)),
              (n >>= o),
              (a -= o),
              (Ga = (1 << (32 - ot(t) + a)) | (r << a) | n),
              (Xa = i + e);
          } else (Ga = (1 << i) | (r << a) | n), (Xa = e);
        }
        function ei(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Va; )
            (Va = Ha[--$a]), (Ha[$a] = null), (Qa = Ha[--$a]), (Ha[$a] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null);
        }
        var ri = null,
          ni = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var r = Ru(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.stateNode = t),
            (r.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [r]), (e.flags |= 16))
              : t.push(r);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ri = e), (ni = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (ni = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((r = null !== Ya ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                ((r = Ru(18, null, null, 0)).stateNode = t),
                (r.return = e),
                (e.child = r),
                (ri = e),
                (ni = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ci(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ni;
            if (t) {
              var r = t;
              if (!li(e, t)) {
                if (ci(e)) throw Error(i(418));
                t = ua(r.nextSibling);
                var n = ri;
                t && li(e, t)
                  ? oi(n, r)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ri = e));
              }
            } else {
              if (ci(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ri = e);
            }
          }
        }
        function si(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ri = e;
        }
        function di(e) {
          if (e !== ri) return !1;
          if (!ai) return si(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ra(e.type, e.memoizedProps)),
            t && (t = ni))
          ) {
            if (ci(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((si(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if ("/$" === r) {
                    if (0 === t) {
                      ni = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
                }
                e = e.nextSibling;
              }
              ni = null;
            }
          } else ni = ri ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ni; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ni = ri = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var yi = S.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var r in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          return t;
        }
        var mi = La(null),
          vi = null,
          bi = null,
          Si = null;
        function Ei() {
          Si = bi = vi = null;
        }
        function wi(e) {
          var t = mi.current;
          xa(mi), (e._currentValue = t);
        }
        function ki(e, t, r) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
                : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t),
              e === r)
            )
              break;
            e = e.return;
          }
        }
        function Li(e, t) {
          (vi = e),
            (Si = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Sl = !0), (e.firstContext = null));
        }
        function xi(e) {
          var t = e._currentValue;
          if (Si !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === vi) throw Error(i(308));
              (bi = e), (vi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Fi = null;
        function Ci(e) {
          null === Fi ? (Fi = [e]) : Fi.push(e);
        }
        function Ai(e, t, r, n) {
          var a = t.interleaved;
          return (
            null === a
              ? ((r.next = r), Ci(t))
              : ((r.next = a.next), (a.next = r)),
            (t.interleaved = r),
            Ni(e, n)
          );
        }
        function Ni(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (r = e.alternate) && (r.childLanes |= t),
              (r = e),
              (e = e.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        var _i = !1;
        function Ti(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ri(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Oi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ji(e, t, r) {
          var n = e.updateQueue;
          if (null === n) return null;
          if (((n = n.shared), 0 !== (2 & Nc))) {
            var a = n.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (n.pending = t),
              Ni(e, r)
            );
          }
          return (
            null === (a = n.interleaved)
              ? ((t.next = t), Ci(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            Ni(e, r)
          );
        }
        function Pi(e, t, r) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & r))
          ) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), vt(e, r);
          }
        }
        function Ui(e, t) {
          var r = e.updateQueue,
            n = e.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (r = r.next);
              } while (null !== r);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (r = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: n.shared,
                effects: n.effects,
              }),
              void (e.updateQueue = r)
            );
          }
          null === (e = r.lastBaseUpdate)
            ? (r.firstBaseUpdate = t)
            : (e.next = t),
            (r.lastBaseUpdate = t);
        }
        function Mi(e, t, r, n) {
          var a = e.updateQueue;
          _i = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var c = l,
              u = c.next;
            (c.next = null), null === o ? (i = u) : (o.next = u), (o = c);
            var s = e.alternate;
            null !== s &&
              (l = (s = s.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (s.firstBaseUpdate = u) : (l.next = u),
              (s.lastBaseUpdate = c));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, s = u = c = null, l = i; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((n & f) === f) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    y = l;
                  switch (((f = t), (p = r), y.tag)) {
                    case 1:
                      if ("function" === typeof (h = y.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = y.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      _i = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === s ? ((u = s = p), (c = d)) : (s = s.next = p),
                  (o |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (c = d),
              (a.baseState = c),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Mc |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function zi(e, t, r) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var n = e[t],
                a = n.callback;
              if (null !== a) {
                if (((n.callback = null), (n = r), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(n);
              }
            }
        }
        var Di = new n.Component().refs;
        function Ii(e, t, r, n) {
          (r =
            null === (r = r(n, (t = e.memoizedState))) || void 0 === r
              ? t
              : M({}, t, r)),
            (e.memoizedState = r),
            0 === e.lanes && (e.updateQueue.baseState = r);
        }
        var Wi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              a = ru(e),
              i = Oi(n, a);
            (i.payload = t),
              void 0 !== r && null !== r && (i.callback = r),
              null !== (t = ji(e, i, a)) && (nu(t, e, a, n), Pi(t, e, a));
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              a = ru(e),
              i = Oi(n, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== r && null !== r && (i.callback = r),
              null !== (t = ji(e, i, a)) && (nu(t, e, a, n), Pi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = tu(),
              n = ru(e),
              a = Oi(r, n);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = ji(e, a, n)) && (nu(t, e, n, r), Pi(t, e, n));
          },
        };
        function Bi(e, t, r, n, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !cn(r, n) ||
                !cn(a, i);
        }
        function Hi(e, t, r) {
          var n = !1,
            a = Ca,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = xi(i))
              : ((a = Ra(t) ? _a : Aa.current),
                (i = (n = null !== (n = t.contextTypes) && void 0 !== n)
                  ? Ta(e, a)
                  : Ca)),
            (t = new t(r, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wi),
            (e.stateNode = t),
            (t._reactInternals = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function $i(e, t, r, n) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(r, n),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && Wi.enqueueReplaceState(t, t.state, null);
        }
        function Vi(e, t, r, n) {
          var a = e.stateNode;
          (a.props = r), (a.state = e.memoizedState), (a.refs = Di), Ti(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = xi(i))
            : ((i = Ra(t) ? _a : Aa.current), (a.context = Ta(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Ii(e, t, i, r), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wi.enqueueReplaceState(a, a.state, null),
              Mi(e, r, a, n),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qi(e, t, r) {
          if (
            null !== (e = r.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(i(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(i(147, e));
              var a = n,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Di && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!r._owner) throw Error(i(290, e));
          }
          return e;
        }
        function qi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ki(e) {
          return (0, e._init)(e._payload);
        }
        function Yi(e) {
          function t(t, r) {
            if (e) {
              var n = t.deletions;
              null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = ju(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags |= 2), r)
                    : n
                  : ((t.flags |= 2), r)
                : ((t.flags |= 1048576), r)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function c(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = zu(r, e.mode, n)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function u(e, t, r, n) {
            var i = r.type;
            return i === k
              ? d(e, t, r.props.children, n, r.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    Ki(i) === t.type))
              ? (((n = a(t, r.props)).ref = Qi(e, t, r)), (n.return = e), n)
              : (((n = Pu(r.type, r.key, r.props, null, e.mode, n)).ref = Qi(
                  e,
                  t,
                  r
                )),
                (n.return = e),
                n);
          }
          function s(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = Du(r, e.mode, n)).return = e), t)
              : (((t = a(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, i) {
            return null === t || 7 !== t.tag
              ? (((t = Uu(r, e.mode, n, i)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function f(e, t, r) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = zu("" + t, e.mode, r)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((r = Pu(t.type, t.key, t.props, null, e.mode, r)).ref = Qi(
                      e,
                      null,
                      t
                    )),
                    (r.return = e),
                    r
                  );
                case w:
                  return ((t = Du(t, e.mode, r)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), r);
              }
              if (te(t) || P(t))
                return ((t = Uu(t, e.mode, r, null)).return = e), t;
              qi(e, t);
            }
            return null;
          }
          function p(e, t, r, n) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return null !== a ? null : c(e, t, "" + r, n);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return r.key === a ? u(e, t, r, n) : null;
                case w:
                  return r.key === a ? s(e, t, r, n) : null;
                case R:
                  return p(e, t, (a = r._init)(r._payload), n);
              }
              if (te(r) || P(r)) return null !== a ? null : d(e, t, r, n, null);
              qi(e, r);
            }
            return null;
          }
          function h(e, t, r, n, a) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return c(t, (e = e.get(r) || null), "" + n, a);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return u(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    a
                  );
                case w:
                  return s(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    a
                  );
                case R:
                  return h(e, t, r, (0, n._init)(n._payload), a);
              }
              if (te(n) || P(n))
                return d(t, (e = e.get(r) || null), n, a, null);
              qi(t, n);
            }
            return null;
          }
          function y(a, i, l, c) {
            for (
              var u = null, s = null, d = i, y = (i = 0), g = null;
              null !== d && y < l.length;
              y++
            ) {
              d.index > y ? ((g = d), (d = null)) : (g = d.sibling);
              var m = p(a, d, l[y], c);
              if (null === m) {
                null === d && (d = g);
                break;
              }
              e && d && null === m.alternate && t(a, d),
                (i = o(m, i, y)),
                null === s ? (u = m) : (s.sibling = m),
                (s = m),
                (d = g);
            }
            if (y === l.length) return r(a, d), ai && Ja(a, y), u;
            if (null === d) {
              for (; y < l.length; y++)
                null !== (d = f(a, l[y], c)) &&
                  ((i = o(d, i, y)),
                  null === s ? (u = d) : (s.sibling = d),
                  (s = d));
              return ai && Ja(a, y), u;
            }
            for (d = n(a, d); y < l.length; y++)
              null !== (g = h(d, a, y, l[y], c)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? y : g.key),
                (i = o(g, i, y)),
                null === s ? (u = g) : (s.sibling = g),
                (s = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, y),
              u
            );
          }
          function g(a, l, c, u) {
            var s = P(c);
            if ("function" !== typeof s) throw Error(i(150));
            if (null == (c = s.call(c))) throw Error(i(151));
            for (
              var d = (s = null), y = l, g = (l = 0), m = null, v = c.next();
              null !== y && !v.done;
              g++, v = c.next()
            ) {
              y.index > g ? ((m = y), (y = null)) : (m = y.sibling);
              var b = p(a, y, v.value, u);
              if (null === b) {
                null === y && (y = m);
                break;
              }
              e && y && null === b.alternate && t(a, y),
                (l = o(b, l, g)),
                null === d ? (s = b) : (d.sibling = b),
                (d = b),
                (y = m);
            }
            if (v.done) return r(a, y), ai && Ja(a, g), s;
            if (null === y) {
              for (; !v.done; g++, v = c.next())
                null !== (v = f(a, v.value, u)) &&
                  ((l = o(v, l, g)),
                  null === d ? (s = v) : (d.sibling = v),
                  (d = v));
              return ai && Ja(a, g), s;
            }
            for (y = n(a, y); !v.done; g++, v = c.next())
              null !== (v = h(y, a, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  y.delete(null === v.key ? g : v.key),
                (l = o(v, l, g)),
                null === d ? (s = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                y.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, g),
              s
            );
          }
          return function e(n, i, o, c) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case E:
                  e: {
                    for (var u = o.key, s = i; null !== s; ) {
                      if (s.key === u) {
                        if ((u = o.type) === k) {
                          if (7 === s.tag) {
                            r(n, s.sibling),
                              ((i = a(s, o.props.children)).return = n),
                              (n = i);
                            break e;
                          }
                        } else if (
                          s.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Ki(u) === s.type)
                        ) {
                          r(n, s.sibling),
                            ((i = a(s, o.props)).ref = Qi(n, s, o)),
                            (i.return = n),
                            (n = i);
                          break e;
                        }
                        r(n, s);
                        break;
                      }
                      t(n, s), (s = s.sibling);
                    }
                    o.type === k
                      ? (((i = Uu(o.props.children, n.mode, c, o.key)).return =
                          n),
                        (n = i))
                      : (((c = Pu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          n.mode,
                          c
                        )).ref = Qi(n, i, o)),
                        (c.return = n),
                        (n = c));
                  }
                  return l(n);
                case w:
                  e: {
                    for (s = o.key; null !== i; ) {
                      if (i.key === s) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          r(n, i.sibling),
                            ((i = a(i, o.children || [])).return = n),
                            (n = i);
                          break e;
                        }
                        r(n, i);
                        break;
                      }
                      t(n, i), (i = i.sibling);
                    }
                    ((i = Du(o, n.mode, c)).return = n), (n = i);
                  }
                  return l(n);
                case R:
                  return e(n, i, (s = o._init)(o._payload), c);
              }
              if (te(o)) return y(n, i, o, c);
              if (P(o)) return g(n, i, o, c);
              qi(n, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (r(n, i.sibling), ((i = a(i, o)).return = n), (n = i))
                  : (r(n, i), ((i = zu(o, n.mode, c)).return = n), (n = i)),
                l(n))
              : r(n, i);
          };
        }
        var Gi = Yi(!0),
          Xi = Yi(!1),
          Ji = {},
          Zi = La(Ji),
          eo = La(Ji),
          to = La(Ji);
        function ro(e) {
          if (e === Ji) throw Error(i(174));
          return e;
        }
        function no(e, t) {
          switch ((Fa(to, t), Fa(eo, e), Fa(Zi, Ji), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ce(null, "");
              break;
            default:
              t = ce(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa(Zi), Fa(Zi, t);
        }
        function ao() {
          xa(Zi), xa(eo), xa(to);
        }
        function io(e) {
          ro(to.current);
          var t = ro(Zi.current),
            r = ce(t, e.type);
          t !== r && (Fa(eo, e), Fa(Zi, r));
        }
        function oo(e) {
          eo.current === e && (xa(Zi), xa(eo));
        }
        var lo = La(0);
        function co(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (
                null !== r &&
                (null === (r = r.dehydrated) ||
                  "$?" === r.data ||
                  "$!" === r.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function so() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = S.ReactCurrentDispatcher,
          po = S.ReactCurrentBatchConfig,
          ho = 0,
          yo = null,
          go = null,
          mo = null,
          vo = !1,
          bo = !1,
          So = 0,
          Eo = 0;
        function wo() {
          throw Error(i(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++)
            if (!ln(e[r], t[r])) return !1;
          return !0;
        }
        function Lo(e, t, r, n, a, o) {
          if (
            ((ho = o),
            (yo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : cl),
            (e = r(n, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (So = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (mo = go = null),
                (t.updateQueue = null),
                (fo.current = ul),
                (e = r(n, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== go && null !== go.next),
            (ho = 0),
            (mo = go = yo = null),
            (vo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function xo() {
          var e = 0 !== So;
          return (So = 0), e;
        }
        function Fo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === mo ? (yo.memoizedState = mo = e) : (mo = mo.next = e), mo
          );
        }
        function Co() {
          if (null === go) {
            var e = yo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === mo ? yo.memoizedState : mo.next;
          if (null !== t) (mo = t), (go = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === mo ? (yo.memoizedState = mo = e) : (mo = mo.next = e);
          }
          return mo;
        }
        function Ao(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function No(e) {
          var t = Co(),
            r = t.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = e;
          var n = go,
            a = n.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (n.baseQueue = a = o), (r.pending = null);
          }
          if (null !== a) {
            (o = a.next), (n = n.baseState);
            var c = (l = null),
              u = null,
              s = o;
            do {
              var d = s.lane;
              if ((ho & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (n = s.hasEagerState ? s.eagerState : e(n, s.action));
              else {
                var f = {
                  lane: d,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((c = u = f), (l = n)) : (u = u.next = f),
                  (yo.lanes |= d),
                  (Mc |= d);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === u ? (l = n) : (u.next = c),
              ln(n, t.memoizedState) || (Sl = !0),
              (t.memoizedState = n),
              (t.baseState = l),
              (t.baseQueue = u),
              (r.lastRenderedState = n);
          }
          if (null !== (e = r.interleaved)) {
            a = e;
            do {
              (o = a.lane), (yo.lanes |= o), (Mc |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function _o(e) {
          var t = Co(),
            r = t.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = e;
          var n = r.dispatch,
            a = r.pending,
            o = t.memoizedState;
          if (null !== a) {
            r.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            ln(o, t.memoizedState) || (Sl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (r.lastRenderedState = o);
          }
          return [o, n];
        }
        function To() {}
        function Ro(e, t) {
          var r = yo,
            n = Co(),
            a = t(),
            o = !ln(n.memoizedState, a);
          if (
            (o && ((n.memoizedState = a), (Sl = !0)),
            (n = n.queue),
            $o(Po.bind(null, r, n, e), [e]),
            n.getSnapshot !== t ||
              o ||
              (null !== mo && 1 & mo.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Do(9, jo.bind(null, r, n, a, t), void 0, null),
              null === _c)
            )
              throw Error(i(349));
            0 !== (30 & ho) || Oo(r, t, a);
          }
          return a;
        }
        function Oo(e, t, r) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: r }),
            null === (t = yo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (yo.updateQueue = t),
                (t.stores = [e]))
              : null === (r = t.stores)
              ? (t.stores = [e])
              : r.push(e);
        }
        function jo(e, t, r, n) {
          (t.value = r), (t.getSnapshot = n), Uo(t) && Mo(e);
        }
        function Po(e, t, r) {
          return r(function () {
            Uo(t) && Mo(e);
          });
        }
        function Uo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !ln(e, r);
          } catch (n) {
            return !0;
          }
        }
        function Mo(e) {
          var t = Ni(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function zo(e) {
          var t = Fo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ao,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = rl.bind(null, yo, e)),
            [t.memoizedState, e]
          );
        }
        function Do(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === (t = yo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (yo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (r = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
            e
          );
        }
        function Io() {
          return Co().memoizedState;
        }
        function Wo(e, t, r, n) {
          var a = Fo();
          (yo.flags |= e),
            (a.memoizedState = Do(1 | t, r, void 0, void 0 === n ? null : n));
        }
        function Bo(e, t, r, n) {
          var a = Co();
          n = void 0 === n ? null : n;
          var i = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((i = o.destroy), null !== n && ko(n, o.deps)))
              return void (a.memoizedState = Do(t, r, i, n));
          }
          (yo.flags |= e), (a.memoizedState = Do(1 | t, r, i, n));
        }
        function Ho(e, t) {
          return Wo(8390656, 8, e, t);
        }
        function $o(e, t) {
          return Bo(2048, 8, e, t);
        }
        function Vo(e, t) {
          return Bo(4, 2, e, t);
        }
        function Qo(e, t) {
          return Bo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, r) {
          return (
            (r = null !== r && void 0 !== r ? r.concat([e]) : null),
            Bo(4, 4, qo.bind(null, t, e), r)
          );
        }
        function Yo() {}
        function Go(e, t) {
          var r = Co();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && ko(t, n[1])
            ? n[0]
            : ((r.memoizedState = [e, t]), e);
        }
        function Xo(e, t) {
          var r = Co();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && ko(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        }
        function Jo(e, t, r) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (Sl = !0)),
              (e.memoizedState = r))
            : (ln(r, t) ||
                ((r = yt()), (yo.lanes |= r), (Mc |= r), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var r = bt;
          (bt = 0 !== r && 4 > r ? r : 4), e(!0);
          var n = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = r), (po.transition = n);
          }
        }
        function el() {
          return Co().memoizedState;
        }
        function tl(e, t, r) {
          var n = ru(e);
          if (
            ((r = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            nl(e))
          )
            al(t, r);
          else if (null !== (r = Ai(e, t, r, n))) {
            nu(r, e, n, tu()), il(r, t, n);
          }
        }
        function rl(e, t, r) {
          var n = ru(e),
            a = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (nl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, r);
                if (((a.hasEagerState = !0), (a.eagerState = l), ln(l, o))) {
                  var c = t.interleaved;
                  return (
                    null === c
                      ? ((a.next = a), Ci(t))
                      : ((a.next = c.next), (c.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (r = Ai(e, t, a, n)) &&
              (nu(r, e, n, (a = tu())), il(r, t, n));
          }
        }
        function nl(e) {
          var t = e.alternate;
          return e === yo || (null !== t && t === yo);
        }
        function al(e, t) {
          bo = vo = !0;
          var r = e.pending;
          null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
            (e.pending = t);
        }
        function il(e, t, r) {
          if (0 !== (4194240 & r)) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), vt(e, r);
          }
        }
        var ol = {
            readContext: xi,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: xi,
            useCallback: function (e, t) {
              return (Fo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xi,
            useEffect: Ho,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null !== r && void 0 !== r ? r.concat([e]) : null),
                Wo(4194308, 4, qo.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return Wo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Wo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var r = Fo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, r) {
              var n = Fo();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (n.queue = e),
                (e = e.dispatch = tl.bind(null, yo, e)),
                [n.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Fo().memoizedState = e);
            },
            useState: zo,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (Fo().memoizedState = e);
            },
            useTransition: function () {
              var e = zo(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Fo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, r) {
              var n = yo,
                a = Fo();
              if (ai) {
                if (void 0 === r) throw Error(i(407));
                r = r();
              } else {
                if (((r = t()), null === _c)) throw Error(i(349));
                0 !== (30 & ho) || Oo(n, t, r);
              }
              a.memoizedState = r;
              var o = { value: r, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(Po.bind(null, n, o, e), [e]),
                (n.flags |= 2048),
                Do(9, jo.bind(null, n, o, r, t), void 0, null),
                r
              );
            },
            useId: function () {
              var e = Fo(),
                t = _c.identifierPrefix;
              if (ai) {
                var r = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (r = (Ga & ~(1 << (32 - ot(Ga) - 1))).toString(32) + r)),
                  0 < (r = So++) && (t += "H" + r.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (r = Eo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: xi,
            useCallback: Go,
            useContext: xi,
            useEffect: $o,
            useImperativeHandle: Ko,
            useInsertionEffect: Vo,
            useLayoutEffect: Qo,
            useMemo: Xo,
            useReducer: No,
            useRef: Io,
            useState: function () {
              return No(Ao);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Jo(Co(), go.memoizedState, e);
            },
            useTransition: function () {
              return [No(Ao)[0], Co().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Ro,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: xi,
            useCallback: Go,
            useContext: xi,
            useEffect: $o,
            useImperativeHandle: Ko,
            useInsertionEffect: Vo,
            useLayoutEffect: Qo,
            useMemo: Xo,
            useReducer: _o,
            useRef: Io,
            useState: function () {
              return _o(Ao);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var t = Co();
              return null === go
                ? (t.memoizedState = e)
                : Jo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [_o(Ao)[0], Co().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Ro,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function sl(e, t) {
          try {
            var r = "",
              n = t;
            do {
              (r += W(n)), (n = n.return);
            } while (n);
            var a = r;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function dl(e, t, r) {
          return {
            value: e,
            source: null,
            stack: null != r ? r : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, r) {
          ((r = Oi(-1, r)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              Vc || ((Vc = !0), (Qc = n)), fl(0, t);
            }),
            r
          );
        }
        function yl(e, t, r) {
          (r = Oi(-1, r)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ("function" === typeof n) {
            var a = t.value;
            (r.payload = function () {
              return n(a);
            }),
              (r.callback = function () {
                fl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (r.callback = function () {
                fl(0, t),
                  "function" !== typeof n &&
                    (null === qc ? (qc = new Set([this])) : qc.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            r
          );
        }
        function gl(e, t, r) {
          var n = e.pingCache;
          if (null === n) {
            n = e.pingCache = new pl();
            var a = new Set();
            n.set(t, a);
          } else void 0 === (a = n.get(t)) && ((a = new Set()), n.set(t, a));
          a.has(r) || (a.add(r), (e = Fu.bind(null, e, t, r)), t.then(e, e));
        }
        function ml(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, r, n, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (r.flags |= 131072),
                  (r.flags &= -52805),
                  1 === r.tag &&
                    (null === r.alternate
                      ? (r.tag = 17)
                      : (((t = Oi(-1, 1)).tag = 2), ji(r, t, 1))),
                  (r.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = S.ReactCurrentOwner,
          Sl = !1;
        function El(e, t, r, n) {
          t.child = null === e ? Xi(t, null, r, n) : Gi(t, e.child, r, n);
        }
        function wl(e, t, r, n, a) {
          r = r.render;
          var i = t.ref;
          return (
            Li(t, a),
            (n = Lo(e, t, r, n, i, a)),
            (r = xo()),
            null === e || Sl
              ? (ai && r && ei(t), (t.flags |= 1), El(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function kl(e, t, r, n, a) {
          if (null === e) {
            var i = r.type;
            return "function" !== typeof i ||
              Ou(i) ||
              void 0 !== i.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = Pu(r.type, null, n, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ll(e, t, i, n, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (r = null !== (r = r.compare) ? r : cn)(o, n) &&
              e.ref === t.ref
            )
              return Vl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = ju(i, n)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ll(e, t, r, n, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (cn(i, n) && e.ref === t.ref) {
              if (((Sl = !1), (t.pendingProps = n = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vl(e, t, a);
              0 !== (131072 & e.flags) && (Sl = !0);
            }
          }
          return Cl(e, t, r, n, a);
        }
        function xl(e, t, r) {
          var n = t.pendingProps,
            a = n.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === n.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Fa(jc, Oc),
                (Oc |= r);
            else {
              if (0 === (1073741824 & r))
                return (
                  (e = null !== i ? i.baseLanes | r : r),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Fa(jc, Oc),
                  (Oc |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (n = null !== i ? i.baseLanes : r),
                Fa(jc, Oc),
                (Oc |= n);
            }
          else
            null !== i
              ? ((n = i.baseLanes | r), (t.memoizedState = null))
              : (n = r),
              Fa(jc, Oc),
              (Oc |= n);
          return El(e, t, a, r), t.child;
        }
        function Fl(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, r, n, a) {
          var i = Ra(r) ? _a : Aa.current;
          return (
            (i = Ta(t, i)),
            Li(t, a),
            (r = Lo(e, t, r, n, i, a)),
            (n = xo()),
            null === e || Sl
              ? (ai && n && ei(t), (t.flags |= 1), El(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Vl(e, t, a))
          );
        }
        function Al(e, t, r, n, a) {
          if (Ra(r)) {
            var i = !0;
            Ua(t);
          } else i = !1;
          if ((Li(t, a), null === t.stateNode))
            $l(e, t), Hi(t, r, n), Vi(t, r, n, a), (n = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var c = o.context,
              u = r.contextType;
            "object" === typeof u && null !== u
              ? (u = xi(u))
              : (u = Ta(t, (u = Ra(r) ? _a : Aa.current)));
            var s = r.getDerivedStateFromProps,
              d =
                "function" === typeof s ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== n || c !== u) && $i(t, o, n, u)),
              (_i = !1);
            var f = t.memoizedState;
            (o.state = f),
              Mi(t, n, o, a),
              (c = t.memoizedState),
              l !== n || f !== c || Na.current || _i
                ? ("function" === typeof s &&
                    (Ii(t, r, s, n), (c = t.memoizedState)),
                  (l = _i || Bi(t, r, l, n, f, c, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = n),
                      (t.memoizedState = c)),
                  (o.props = n),
                  (o.state = c),
                  (o.context = u),
                  (n = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (n = !1));
          } else {
            (o = t.stateNode),
              Ri(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : gi(t.type, l)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (c = r.contextType) && null !== c
                ? (c = xi(c))
                : (c = Ta(t, (c = Ra(r) ? _a : Aa.current)));
            var p = r.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== c) && $i(t, o, n, c)),
              (_i = !1),
              (f = t.memoizedState),
              (o.state = f),
              Mi(t, n, o, a);
            var h = t.memoizedState;
            l !== d || f !== h || Na.current || _i
              ? ("function" === typeof p &&
                  (Ii(t, r, p, n), (h = t.memoizedState)),
                (u = _i || Bi(t, r, u, n, f, h, c) || !1)
                  ? (s ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(n, h, c),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(n, h, c)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = n),
                    (t.memoizedState = h)),
                (o.props = n),
                (o.state = h),
                (o.context = c),
                (n = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (n = !1));
          }
          return Nl(e, t, r, n, i, a);
        }
        function Nl(e, t, r, n, a, i) {
          Fl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!n && !o) return a && Ma(t, r, !1), Vl(e, t, i);
          (n = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Gi(t, e.child, null, i)),
                (t.child = Gi(t, null, l, i)))
              : El(e, t, l, i),
            (t.memoizedState = n.state),
            a && Ma(t, r, !0),
            t.child
          );
        }
        function _l(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ja(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ja(0, t.context, !1),
            no(e, t.containerInfo);
        }
        function Tl(e, t, r, n, a) {
          return pi(), hi(a), (t.flags |= 256), El(e, t, r, n), t.child;
        }
        var Rl,
          Ol,
          jl,
          Pl,
          Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ml(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zl(e, t, r) {
          var n,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            c = 0 !== (128 & t.flags);
          if (
            ((n = c) ||
              (n = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            n
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Fa(lo, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((c = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (c = { mode: "hidden", children: c }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = c))
                        : (l = Mu(c, a, 0, null)),
                      (e = Uu(e, a, r, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ml(r)),
                      (t.memoizedState = Ul),
                      e)
                    : Dl(t, c))
            );
          if (null !== (o = e.memoizedState) && null !== (n = o.dehydrated))
            return (function (e, t, r, n, a, o, l) {
              if (r)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (n = dl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = n.fallback),
                    (a = t.mode),
                    (n = Mu(
                      { mode: "visible", children: n.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Uu(o, a, l, null)).flags |= 2),
                    (n.return = t),
                    (o.return = t),
                    (n.sibling = o),
                    (t.child = n),
                    0 !== (1 & t.mode) && Gi(t, e.child, null, l),
                    (t.child.memoizedState = Ml(l)),
                    (t.memoizedState = Ul),
                    o);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === a.data) {
                if ((n = a.nextSibling && a.nextSibling.dataset))
                  var c = n.dgst;
                return (
                  (n = c), Il(e, t, l, (n = dl((o = Error(i(419))), n, void 0)))
                );
              }
              if (((c = 0 !== (l & e.childLanes)), Sl || c)) {
                if (null !== (n = _c)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (n.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ni(e, a), nu(n, e, a, -1));
                }
                return gu(), Il(e, t, l, (n = dl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Au.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ni = ua(a.nextSibling)),
                  (ri = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (qa[Ka++] = Ya),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = Dl(t, n.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, c, a, n, o, r);
          if (l) {
            (l = a.fallback), (c = t.mode), (n = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & c) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = ju(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== n
                ? (l = ju(n, l))
                : ((l = Uu(l, c, r, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (c =
                null === (c = e.child.memoizedState)
                  ? Ml(r)
                  : {
                      baseLanes: c.baseLanes | r,
                      cachePool: null,
                      transitions: c.transitions,
                    }),
              (l.memoizedState = c),
              (l.childLanes = e.childLanes & ~r),
              (t.memoizedState = Ul),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = ju(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = r),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Dl(e, t) {
          return (
            ((t = Mu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, r, n) {
          return (
            null !== n && hi(n),
            Gi(t, e.child, null, r),
            ((e = Dl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Wl(e, t, r) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ki(e.return, t, r);
        }
        function Bl(e, t, r, n, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = n),
              (i.tail = r),
              (i.tailMode = a));
        }
        function Hl(e, t, r) {
          var n = t.pendingProps,
            a = n.revealOrder,
            i = n.tail;
          if ((El(e, t, n.children, r), 0 !== (2 & (n = lo.current))))
            (n = (1 & n) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Wl(e, r, t);
                else if (19 === e.tag) Wl(e, r, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((Fa(lo, n), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (r = t.child, a = null; null !== r; )
                  null !== (e = r.alternate) && null === co(e) && (a = r),
                    (r = r.sibling);
                null === (r = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = r.sibling), (r.sibling = null)),
                  Bl(t, !1, a, r, i);
                break;
              case "backwards":
                for (r = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === co(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = r), (r = a), (a = e);
                }
                Bl(t, !0, r, null, i);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, r) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mc |= t.lanes),
            0 === (r & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              r = ju((e = t.child), e.pendingProps), t.child = r, r.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((r = r.sibling = ju(e, e.pendingProps)).return = t);
            r.sibling = null;
          }
          return t.child;
        }
        function Ql(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r ? (e.tail = null) : (r.sibling = null);
                break;
              case "collapsed":
                r = e.tail;
                for (var n = null; null !== r; )
                  null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            r = 0,
            n = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (r |= a.lanes | a.childLanes),
                (n |= 14680064 & a.subtreeFlags),
                (n |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (r |= a.lanes | a.childLanes),
                (n |= a.subtreeFlags),
                (n |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= n), (e.childLanes = r), t;
        }
        function Kl(e, t, r) {
          var n = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Oa(), ql(t), null;
            case 3:
              return (
                (n = t.stateNode),
                ao(),
                xa(Na),
                xa(Aa),
                so(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (lu(ii), (ii = null)))),
                Ol(e, t),
                ql(t),
                null
              );
            case 5:
              oo(t);
              var a = ro(to.current);
              if (((r = t.type), null !== e && null != t.stateNode))
                jl(e, t, r, n, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!n) {
                  if (null === t.stateNode) throw Error(i(166));
                  return ql(t), null;
                }
                if (((e = ro(Zi.current)), di(t))) {
                  (n = t.stateNode), (r = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((n[fa] = t), (n[pa] = o), (e = 0 !== (1 & t.mode)), r)
                  ) {
                    case "dialog":
                      Dn("cancel", n), Dn("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dn("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Pn.length; a++) Dn(Pn[a], n);
                      break;
                    case "source":
                      Dn("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dn("error", n), Dn("load", n);
                      break;
                    case "details":
                      Dn("toggle", n);
                      break;
                    case "input":
                      G(n, o), Dn("invalid", n);
                      break;
                    case "select":
                      (n._wrapperState = { wasMultiple: !!o.multiple }),
                        Dn("invalid", n);
                      break;
                    case "textarea":
                      ae(n, o), Dn("invalid", n);
                  }
                  for (var c in (ve(r, o), (a = null), o))
                    if (o.hasOwnProperty(c)) {
                      var u = o[c];
                      "children" === c
                        ? "string" === typeof u
                          ? n.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jn(n.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            n.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jn(n.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(c) &&
                          null != u &&
                          "onScroll" === c &&
                          Dn("scroll", n);
                    }
                  switch (r) {
                    case "input":
                      Q(n), Z(n, o, !0);
                      break;
                    case "textarea":
                      Q(n), oe(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (n.onclick = Zn);
                  }
                  (n = a), (t.updateQueue = n), null !== n && (t.flags |= 4);
                } else {
                  (c = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(r)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === r
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof n.is
                        ? (e = c.createElement(r, { is: n.is }))
                        : ((e = c.createElement(r)),
                          "select" === r &&
                            ((c = e),
                            n.multiple
                              ? (c.multiple = !0)
                              : n.size && (c.size = n.size)))
                      : (e = c.createElementNS(e, r)),
                    (e[fa] = t),
                    (e[pa] = n),
                    Rl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((c = be(r, n)), r)) {
                      case "dialog":
                        Dn("cancel", e), Dn("close", e), (a = n);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dn("load", e), (a = n);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Pn.length; a++) Dn(Pn[a], e);
                        a = n;
                        break;
                      case "source":
                        Dn("error", e), (a = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dn("error", e), Dn("load", e), (a = n);
                        break;
                      case "details":
                        Dn("toggle", e), (a = n);
                        break;
                      case "input":
                        G(e, n), (a = Y(e, n)), Dn("invalid", e);
                        break;
                      case "option":
                      default:
                        a = n;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!n.multiple }),
                          (a = M({}, n, { value: void 0 })),
                          Dn("invalid", e);
                        break;
                      case "textarea":
                        ae(e, n), (a = ne(e, n)), Dn("invalid", e);
                    }
                    for (o in (ve(r, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var s = u[o];
                        "style" === o
                          ? ge(e, s)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (s = s ? s.__html : void 0) && de(e, s)
                          : "children" === o
                          ? "string" === typeof s
                            ? ("textarea" !== r || "" !== s) && fe(e, s)
                            : "number" === typeof s && fe(e, "" + s)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != s && "onScroll" === o && Dn("scroll", e)
                              : null != s && b(e, o, s, c));
                      }
                    switch (r) {
                      case "input":
                        Q(e), Z(e, n, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != n.value &&
                          e.setAttribute("value", "" + $(n.value));
                        break;
                      case "select":
                        (e.multiple = !!n.multiple),
                          null != (o = n.value)
                            ? re(e, !!n.multiple, o, !1)
                            : null != n.defaultValue &&
                              re(e, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zn);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = !0;
                        break e;
                      default:
                        n = !1;
                    }
                  }
                  n && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Pl(e, t, e.memoizedProps, n);
              else {
                if ("string" !== typeof n && null === t.stateNode)
                  throw Error(i(166));
                if (((r = ro(to.current)), ro(Zi.current), di(t))) {
                  if (
                    ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[fa] = t),
                    (o = n.nodeValue !== r) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                    n
                  ))[fa] = t),
                    (t.stateNode = n);
              }
              return ql(t), null;
            case 13:
              if (
                (xa(lo),
                (n = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ni &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== n && null !== n.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (o = !1);
                } else null !== ii && (lu(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = r), t)
                : ((n = null !== n) !==
                    (null !== e && null !== e.memoizedState) &&
                    n &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === Pc && (Pc = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                ao(),
                Ol(e, t),
                null === e && Bn(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return wi(t.type._context), ql(t), null;
            case 19:
              if ((xa(lo), null === (o = t.memoizedState))) return ql(t), null;
              if (((n = 0 !== (128 & t.flags)), null === (c = o.rendering)))
                if (n) Ql(o, !1);
                else {
                  if (0 !== Pc || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = co(e))) {
                        for (
                          t.flags |= 128,
                            Ql(o, !1),
                            null !== (n = c.updateQueue) &&
                              ((t.updateQueue = n), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child;
                          null !== r;

                        )
                          (e = n),
                            ((o = r).flags &= 14680066),
                            null === (c = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = c.childLanes),
                                (o.lanes = c.lanes),
                                (o.child = c.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = c.memoizedProps),
                                (o.memoizedState = c.memoizedState),
                                (o.updateQueue = c.updateQueue),
                                (o.type = c.type),
                                (e = c.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (r = r.sibling);
                        return Fa(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Hc &&
                    ((t.flags |= 128),
                    (n = !0),
                    Ql(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!n)
                  if (null !== (e = co(c))) {
                    if (
                      ((t.flags |= 128),
                      (n = !0),
                      null !== (r = e.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      Ql(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !c.alternate &&
                        !ai)
                    )
                      return ql(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Hc &&
                      1073741824 !== r &&
                      ((t.flags |= 128),
                      (n = !0),
                      Ql(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (r = o.last) ? (r.sibling = c) : (t.child = c),
                    (o.last = c));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (r = lo.current),
                  Fa(lo, n ? (1 & r) | 2 : 1 & r),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (n = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== n &&
                  (t.flags |= 8192),
                n && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Oc) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Yl(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                xa(Na),
                xa(Aa),
                so(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (xa(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return wi(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (Ol = function () {}),
          (jl = function (e, t, r, n) {
            var a = e.memoizedProps;
            if (a !== n) {
              (e = t.stateNode), ro(Zi.current);
              var i,
                o = null;
              switch (r) {
                case "input":
                  (a = Y(e, a)), (n = Y(e, n)), (o = []);
                  break;
                case "select":
                  (a = M({}, a, { value: void 0 })),
                    (n = M({}, n, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = ne(e, a)), (n = ne(e, n)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof n.onClick &&
                    (e.onclick = Zn);
              }
              for (s in (ve(r, n), (r = null), a))
                if (!n.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var c = a[s];
                    for (i in c)
                      c.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (l.hasOwnProperty(s)
                        ? o || (o = [])
                        : (o = o || []).push(s, null));
              for (s in n) {
                var u = n[s];
                if (
                  ((c = null != a ? a[s] : void 0),
                  n.hasOwnProperty(s) && u !== c && (null != u || null != c))
                )
                  if ("style" === s)
                    if (c) {
                      for (i in c)
                        !c.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (r || (r = {}), (r[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          c[i] !== u[i] &&
                          (r || (r = {}), (r[i] = u[i]));
                    } else r || (o || (o = []), o.push(s, r)), (r = u);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((u = u ? u.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != u && c !== u && (o = o || []).push(s, u))
                      : "children" === s
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(s, "" + u)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (l.hasOwnProperty(s)
                          ? (null != u && "onScroll" === s && Dn("scroll", e),
                            o || c === u || (o = []))
                          : (o = o || []).push(s, u));
              }
              r && (o = o || []).push("style", r);
              var s = o;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Pl = function (e, t, r, n) {
            r !== n && (t.flags |= 4);
          });
        var Gl = !1,
          Xl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function ec(e, t) {
          var r = e.ref;
          if (null !== r)
            if ("function" === typeof r)
              try {
                r(null);
              } catch (n) {
                xu(e, t, n);
              }
            else r.current = null;
        }
        function tc(e, t, r) {
          try {
            r();
          } catch (n) {
            xu(e, t, n);
          }
        }
        var rc = !1;
        function nc(e, t, r) {
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var a = (n = n.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && tc(t, r, i);
              }
              a = a.next;
            } while (a !== n);
          }
        }
        function ac(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var r = (t = t.next);
            do {
              if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function ic(e) {
          var t = e.ref;
          if (null !== t) {
            var r = e.stateNode;
            e.tag, (e = r), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function oc(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), oc(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ya],
              delete t[ga],
              delete t[ma]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lc(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function cc(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lc(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uc(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode),
              t
                ? 8 === r.nodeType
                  ? r.parentNode.insertBefore(e, t)
                  : r.insertBefore(e, t)
                : (8 === r.nodeType
                    ? (t = r.parentNode).insertBefore(e, r)
                    : (t = r).appendChild(e),
                  (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                    null !== t.onclick ||
                    (t.onclick = Zn));
          else if (4 !== n && null !== (e = e.child))
            for (uc(e, t, r), e = e.sibling; null !== e; )
              uc(e, t, r), (e = e.sibling);
        }
        function sc(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
          else if (4 !== n && null !== (e = e.child))
            for (sc(e, t, r), e = e.sibling; null !== e; )
              sc(e, t, r), (e = e.sibling);
        }
        var dc = null,
          fc = !1;
        function pc(e, t, r) {
          for (r = r.child; null !== r; ) hc(e, t, r), (r = r.sibling);
        }
        function hc(e, t, r) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, r);
            } catch (l) {}
          switch (r.tag) {
            case 5:
              Xl || ec(r, t);
            case 6:
              var n = dc,
                a = fc;
              (dc = null),
                pc(e, t, r),
                (fc = a),
                null !== (dc = n) &&
                  (fc
                    ? ((e = dc),
                      (r = r.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r))
                    : dc.removeChild(r.stateNode));
              break;
            case 18:
              null !== dc &&
                (fc
                  ? ((e = dc),
                    (r = r.stateNode),
                    8 === e.nodeType
                      ? ca(e.parentNode, r)
                      : 1 === e.nodeType && ca(e, r),
                    Bt(e))
                  : ca(dc, r.stateNode));
              break;
            case 4:
              (n = dc),
                (a = fc),
                (dc = r.stateNode.containerInfo),
                (fc = !0),
                pc(e, t, r),
                (dc = n),
                (fc = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (n = r.updateQueue) &&
                null !== (n = n.lastEffect)
              ) {
                a = n = n.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      tc(r, t, o),
                    (a = a.next);
                } while (a !== n);
              }
              pc(e, t, r);
              break;
            case 1:
              if (
                !Xl &&
                (ec(r, t),
                "function" === typeof (n = r.stateNode).componentWillUnmount)
              )
                try {
                  (n.props = r.memoizedProps),
                    (n.state = r.memoizedState),
                    n.componentWillUnmount();
                } catch (l) {
                  xu(r, t, l);
                }
              pc(e, t, r);
              break;
            case 21:
              pc(e, t, r);
              break;
            case 22:
              1 & r.mode
                ? ((Xl = (n = Xl) || null !== r.memoizedState),
                  pc(e, t, r),
                  (Xl = n))
                : pc(e, t, r);
              break;
            default:
              pc(e, t, r);
          }
        }
        function yc(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var n = Nu.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        function gc(e, t) {
          var r = t.deletions;
          if (null !== r)
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              try {
                var o = e,
                  l = t,
                  c = l;
                e: for (; null !== c; ) {
                  switch (c.tag) {
                    case 5:
                      (dc = c.stateNode), (fc = !1);
                      break e;
                    case 3:
                    case 4:
                      (dc = c.stateNode.containerInfo), (fc = !0);
                      break e;
                  }
                  c = c.return;
                }
                if (null === dc) throw Error(i(160));
                hc(o, l, a), (dc = null), (fc = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (s) {
                xu(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mc(t, e), (t = t.sibling);
        }
        function mc(e, t) {
          var r = e.alternate,
            n = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gc(t, e), vc(e), 4 & n)) {
                try {
                  nc(3, e, e.return), ac(3, e);
                } catch (g) {
                  xu(e, e.return, g);
                }
                try {
                  nc(5, e, e.return);
                } catch (g) {
                  xu(e, e.return, g);
                }
              }
              break;
            case 1:
              gc(t, e), vc(e), 512 & n && null !== r && ec(r, r.return);
              break;
            case 5:
              if (
                (gc(t, e),
                vc(e),
                512 & n && null !== r && ec(r, r.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  xu(e, e.return, g);
                }
              }
              if (4 & n && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== r ? r.memoizedProps : o,
                  c = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === c &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(c, l);
                    var s = be(c, o);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, s);
                    }
                    switch (c) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? re(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? re(a, !!o.multiple, o.defaultValue, !0)
                              : re(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (g) {
                    xu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gc(t, e), vc(e), 4 & n)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (g) {
                  xu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gc(t, e),
                vc(e),
                4 & n && null !== r && r.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (g) {
                  xu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gc(t, e), vc(e);
              break;
            case 13:
              gc(t, e),
                vc(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bc = Xe())),
                4 & n && yc(e);
              break;
            case 22:
              if (
                ((d = null !== r && null !== r.memoizedState),
                1 & e.mode
                  ? ((Xl = (s = Xl) || d), gc(t, e), (Xl = s))
                  : gc(t, e),
                vc(e),
                8192 & n)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nc(4, p, p.return);
                          break;
                        case 1:
                          ec(p, p.return);
                          var y = p.stateNode;
                          if ("function" === typeof y.componentWillUnmount) {
                            (n = p), (r = p.return);
                            try {
                              (t = n),
                                (y.props = t.memoizedProps),
                                (y.state = t.memoizedState),
                                y.componentWillUnmount();
                            } catch (g) {
                              xu(n, r, g);
                            }
                          }
                          break;
                        case 5:
                          ec(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wc(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : wc(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          s
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((c = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (c.style.display = ye("display", l)));
                      } catch (g) {
                        xu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                      } catch (g) {
                        xu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gc(t, e), vc(e), 4 & n && yc(e);
            case 21:
          }
        }
        function vc(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var r = e.return; null !== r; ) {
                  if (lc(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error(i(160));
              }
              switch (n.tag) {
                case 5:
                  var a = n.stateNode;
                  32 & n.flags && (fe(a, ""), (n.flags &= -33)),
                    sc(e, cc(e), a);
                  break;
                case 3:
                case 4:
                  var o = n.stateNode.containerInfo;
                  uc(e, cc(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              xu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bc(e, t, r) {
          (Zl = e), Sc(e, t, r);
        }
        function Sc(e, t, r) {
          for (var n = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              i = a.child;
            if (22 === a.tag && n) {
              var o = null !== a.memoizedState || Gl;
              if (!o) {
                var l = a.alternate,
                  c = (null !== l && null !== l.memoizedState) || Xl;
                l = Gl;
                var u = Xl;
                if (((Gl = o), (Xl = c) && !u))
                  for (Zl = a; null !== Zl; )
                    (c = (o = Zl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? kc(a)
                        : null !== c
                        ? ((c.return = o), (Zl = c))
                        : kc(a);
                for (; null !== i; ) (Zl = i), Sc(i, t, r), (i = i.sibling);
                (Zl = a), (Gl = l), (Xl = u);
              }
              Ec(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Zl = i))
                : Ec(e);
          }
        }
        function Ec(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var r = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || ac(5, t);
                      break;
                    case 1:
                      var n = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === r) n.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? r.memoizedProps
                              : gi(t.type, r.memoizedProps);
                          n.componentDidUpdate(
                            a,
                            r.memoizedState,
                            n.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && zi(t, o, n);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((r = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              r = t.child.stateNode;
                          }
                        zi(t, l, r);
                      }
                      break;
                    case 5:
                      var c = t.stateNode;
                      if (null === r && 4 & t.flags) {
                        r = c;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && r.focus();
                            break;
                          case "img":
                            u.src && (r.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var d = s.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xl || (512 & t.flags && ic(t));
              } catch (p) {
                xu(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (r = t.sibling)) {
              (r.return = t.return), (Zl = r);
              break;
            }
            Zl = t.return;
          }
        }
        function wc(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var r = t.sibling;
            if (null !== r) {
              (r.return = t.return), (Zl = r);
              break;
            }
            Zl = t.return;
          }
        }
        function kc(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    ac(4, t);
                  } catch (c) {
                    xu(t, r, c);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if ("function" === typeof n.componentDidMount) {
                    var a = t.return;
                    try {
                      n.componentDidMount();
                    } catch (c) {
                      xu(t, a, c);
                    }
                  }
                  var i = t.return;
                  try {
                    ic(t);
                  } catch (c) {
                    xu(t, i, c);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ic(t);
                  } catch (c) {
                    xu(t, o, c);
                  }
              }
            } catch (c) {
              xu(t, t.return, c);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Lc,
          xc = Math.ceil,
          Fc = S.ReactCurrentDispatcher,
          Cc = S.ReactCurrentOwner,
          Ac = S.ReactCurrentBatchConfig,
          Nc = 0,
          _c = null,
          Tc = null,
          Rc = 0,
          Oc = 0,
          jc = La(0),
          Pc = 0,
          Uc = null,
          Mc = 0,
          zc = 0,
          Dc = 0,
          Ic = null,
          Wc = null,
          Bc = 0,
          Hc = 1 / 0,
          $c = null,
          Vc = !1,
          Qc = null,
          qc = null,
          Kc = !1,
          Yc = null,
          Gc = 0,
          Xc = 0,
          Jc = null,
          Zc = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Nc) ? Xe() : -1 !== Zc ? Zc : (Zc = Xe());
        }
        function ru(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nc) && 0 !== Rc
            ? Rc & -Rc
            : null !== yi.transition
            ? (0 === eu && (eu = yt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, r, n) {
          if (50 < Xc) throw ((Xc = 0), (Jc = null), Error(i(185)));
          mt(e, r, n),
            (0 !== (2 & Nc) && e === _c) ||
              (e === _c && (0 === (2 & Nc) && (zc |= r), 4 === Pc && cu(e, Rc)),
              au(e, n),
              1 === r &&
                0 === Nc &&
                0 === (1 & t.mode) &&
                ((Hc = Xe() + 500), Da && Ba()));
        }
        function au(e, t) {
          var r = e.callbackNode;
          !(function (e, t) {
            for (
              var r = e.suspendedLanes,
                n = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                c = a[o];
              -1 === c
                ? (0 !== (l & r) && 0 === (l & n)) || (a[o] = pt(l, t))
                : c <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var n = ft(e, e === _c ? Rc : 0);
          if (0 === n)
            null !== r && Ke(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = n & -n), e.callbackPriority !== t)) {
            if ((null != r && Ke(r), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Wa(e);
                  })(uu.bind(null, e))
                : Wa(uu.bind(null, e)),
                oa(function () {
                  0 === (6 & Nc) && Ba();
                }),
                (r = null);
            else {
              switch (St(n)) {
                case 1:
                  r = Ze;
                  break;
                case 4:
                  r = et;
                  break;
                case 16:
                default:
                  r = tt;
                  break;
                case 536870912:
                  r = nt;
              }
              r = _u(r, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
          }
        }
        function iu(e, t) {
          if (((Zc = -1), (eu = 0), 0 !== (6 & Nc))) throw Error(i(327));
          var r = e.callbackNode;
          if (ku() && e.callbackNode !== r) return null;
          var n = ft(e, e === _c ? Rc : 0);
          if (0 === n) return null;
          if (0 !== (30 & n) || 0 !== (n & e.expiredLanes) || t) t = mu(e, n);
          else {
            t = n;
            var a = Nc;
            Nc |= 2;
            var o = yu();
            for (
              (_c === e && Rc === t) ||
              (($c = null), (Hc = Xe() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (c) {
                hu(e, c);
              }
            Ei(),
              (Fc.current = o),
              (Nc = a),
              null !== Tc ? (t = 0) : ((_c = null), (Rc = 0), (t = Pc));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((n = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((r = Uc), pu(e, 0), cu(e, n), au(e, Xe()), r);
            if (6 === t) cu(e, n);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & n) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var r = t.updateQueue;
                        if (null !== r && null !== (r = r.stores))
                          for (var n = 0; n < r.length; n++) {
                            var a = r[n],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ln(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
                        (r.return = t), (t = r);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, n)) &&
                    0 !== (o = ht(e)) &&
                    ((n = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((r = Uc), pu(e, 0), cu(e, n), au(e, Xe()), r);
              switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  wu(e, Wc, $c);
                  break;
                case 3:
                  if (
                    (cu(e, n),
                    (130023424 & n) === n && 10 < (t = Bc + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & n) !== n) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = na(wu.bind(null, e, Wc, $c), t);
                    break;
                  }
                  wu(e, Wc, $c);
                  break;
                case 4:
                  if ((cu(e, n), (4194240 & n) === n)) break;
                  for (t = e.eventTimes, a = -1; 0 < n; ) {
                    var l = 31 - ot(n);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (n &= ~o);
                  }
                  if (
                    ((n = a),
                    10 <
                      (n =
                        (120 > (n = Xe() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * xc(n / 1960)) - n))
                  ) {
                    e.timeoutHandle = na(wu.bind(null, e, Wc, $c), n);
                    break;
                  }
                  wu(e, Wc, $c);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return au(e, Xe()), e.callbackNode === r ? iu.bind(null, e) : null;
        }
        function ou(e, t) {
          var r = Ic;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Wc), (Wc = r), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Wc ? (Wc = e) : Wc.push.apply(Wc, e);
        }
        function cu(e, t) {
          for (
            t &= ~Dc,
              t &= ~zc,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var r = 31 - ot(t),
              n = 1 << r;
            (e[r] = -1), (t &= ~n);
          }
        }
        function uu(e) {
          if (0 !== (6 & Nc)) throw Error(i(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Xe()), null;
          var r = mu(e, t);
          if (0 !== e.tag && 2 === r) {
            var n = ht(e);
            0 !== n && ((t = n), (r = ou(e, n)));
          }
          if (1 === r) throw ((r = Uc), pu(e, 0), cu(e, t), au(e, Xe()), r);
          if (6 === r) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Wc, $c),
            au(e, Xe()),
            null
          );
        }
        function su(e, t) {
          var r = Nc;
          Nc |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nc = r) && ((Hc = Xe() + 500), Da && Ba());
          }
        }
        function du(e) {
          null !== Yc && 0 === Yc.tag && 0 === (6 & Nc) && ku();
          var t = Nc;
          Nc |= 1;
          var r = Ac.transition,
            n = bt;
          try {
            if (((Ac.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = n), (Ac.transition = r), 0 === (6 & (Nc = t)) && Ba();
          }
        }
        function fu() {
          (Oc = jc.current), xa(jc);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), aa(r)), null !== Tc))
            for (r = Tc.return; null !== r; ) {
              var n = r;
              switch ((ti(n), n.tag)) {
                case 1:
                  null !== (n = n.type.childContextTypes) &&
                    void 0 !== n &&
                    Oa();
                  break;
                case 3:
                  ao(), xa(Na), xa(Aa), so();
                  break;
                case 5:
                  oo(n);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  xa(lo);
                  break;
                case 10:
                  wi(n.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              r = r.return;
            }
          if (
            ((_c = e),
            (Tc = e = ju(e.current, null)),
            (Rc = Oc = t),
            (Pc = 0),
            (Uc = null),
            (Dc = zc = Mc = 0),
            (Wc = Ic = null),
            null !== Fi)
          ) {
            for (t = 0; t < Fi.length; t++)
              if (null !== (n = (r = Fi[t]).interleaved)) {
                r.interleaved = null;
                var a = n.next,
                  i = r.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (n.next = o);
                }
                r.pending = n;
              }
            Fi = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var r = Tc;
            try {
              if ((Ei(), (fo.current = ol), vo)) {
                for (var n = yo.memoizedState; null !== n; ) {
                  var a = n.queue;
                  null !== a && (a.pending = null), (n = n.next);
                }
                vo = !1;
              }
              if (
                ((ho = 0),
                (mo = go = yo = null),
                (bo = !1),
                (So = 0),
                (Cc.current = null),
                null === r || null === r.return)
              ) {
                (Pc = 1), (Uc = t), (Tc = null);
                break;
              }
              e: {
                var o = e,
                  l = r.return,
                  c = r,
                  u = t;
                if (
                  ((t = Rc),
                  (c.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u,
                    d = c,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = ml(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, c, 0, t),
                      1 & h.mode && gl(o, s, t),
                      (u = s);
                    var y = (t = h).updateQueue;
                    if (null === y) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else y.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(o, s, t), gu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & c.mode) {
                  var m = ml(l);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      vl(m, l, c, 0, t),
                      hi(sl(u, c));
                    break e;
                  }
                }
                (o = u = sl(u, c)),
                  4 !== Pc && (Pc = 2),
                  null === Ic ? (Ic = [o]) : Ic.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ui(o, hl(0, u, t));
                      break e;
                    case 1:
                      c = u;
                      var v = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qc || !qc.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ui(o, yl(o, c, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              Eu(r);
            } catch (S) {
              (t = S), Tc === r && null !== r && (Tc = r = r.return);
              continue;
            }
            break;
          }
        }
        function yu() {
          var e = Fc.current;
          return (Fc.current = ol), null === e ? ol : e;
        }
        function gu() {
          (0 !== Pc && 3 !== Pc && 2 !== Pc) || (Pc = 4),
            null === _c ||
              (0 === (268435455 & Mc) && 0 === (268435455 & zc)) ||
              cu(_c, Rc);
        }
        function mu(e, t) {
          var r = Nc;
          Nc |= 2;
          var n = yu();
          for ((_c === e && Rc === t) || (($c = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((Ei(), (Nc = r), (Fc.current = n), null !== Tc))
            throw Error(i(261));
          return (_c = null), (Rc = 0), Pc;
        }
        function vu() {
          for (; null !== Tc; ) Su(Tc);
        }
        function bu() {
          for (; null !== Tc && !Ye(); ) Su(Tc);
        }
        function Su(e) {
          var t = Lc(e.alternate, e, Oc);
          (e.memoizedProps = e.pendingProps),
            null === t ? Eu(e) : (Tc = t),
            (Cc.current = null);
        }
        function Eu(e) {
          var t = e;
          do {
            var r = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (r = Kl(r, t, Oc))) return void (Tc = r);
            } else {
              if (null !== (r = Yl(r, t)))
                return (r.flags &= 32767), void (Tc = r);
              if (null === e) return (Pc = 6), void (Tc = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Tc = t);
            Tc = t = e;
          } while (null !== t);
          0 === Pc && (Pc = 5);
        }
        function wu(e, t, r) {
          var n = bt,
            a = Ac.transition;
          try {
            (Ac.transition = null),
              (bt = 1),
              (function (e, t, r, n) {
                do {
                  ku();
                } while (null !== Yc);
                if (0 !== (6 & Nc)) throw Error(i(327));
                r = e.finishedWork;
                var a = e.finishedLanes;
                if (null === r) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  r === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = r.lanes | r.childLanes;
                if (
                  ((function (e, t) {
                    var r = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var n = e.eventTimes;
                    for (e = e.expirationTimes; 0 < r; ) {
                      var a = 31 - ot(r),
                        i = 1 << a;
                      (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~i);
                    }
                  })(e, o),
                  e === _c && ((Tc = _c = null), (Rc = 0)),
                  (0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags)) ||
                    Kc ||
                    ((Kc = !0),
                    _u(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & r.flags)),
                  0 !== (15990 & r.subtreeFlags) || o)
                ) {
                  (o = Ac.transition), (Ac.transition = null);
                  var l = bt;
                  bt = 1;
                  var c = Nc;
                  (Nc |= 4),
                    (Cc.current = null),
                    (function (e, t) {
                      if (((ea = $t), pn((e = fn())))) {
                        if ("selectionStart" in e)
                          var r = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var n =
                              (r =
                                ((r = e.ownerDocument) && r.defaultView) ||
                                window).getSelection && r.getSelection();
                            if (n && 0 !== n.rangeCount) {
                              r = n.anchorNode;
                              var a = n.anchorOffset,
                                o = n.focusNode;
                              n = n.focusOffset;
                              try {
                                r.nodeType, o.nodeType;
                              } catch (E) {
                                r = null;
                                break e;
                              }
                              var l = 0,
                                c = -1,
                                u = -1,
                                s = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== r ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (c = l + a),
                                    f !== o ||
                                      (0 !== n && 3 !== f.nodeType) ||
                                      (u = l + n),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === r && ++s === a && (c = l),
                                    p === o && ++d === n && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              r =
                                -1 === c || -1 === u
                                  ? null
                                  : { start: c, end: u };
                            } else r = null;
                          }
                        r = r || { start: 0, end: 0 };
                      } else r = null;
                      for (
                        ta = { focusedElem: e, selectionRange: r },
                          $t = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var y = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== y) {
                                      var g = y.memoizedProps,
                                        m = y.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gi(t.type, g),
                                          m
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var S = t.stateNode.containerInfo;
                                    1 === S.nodeType
                                      ? (S.textContent = "")
                                      : 9 === S.nodeType &&
                                        S.documentElement &&
                                        S.removeChild(S.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (E) {
                              xu(t, t.return, E);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (y = rc), (rc = !1);
                    })(e, r),
                    mc(r, e),
                    hn(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = r),
                    bc(r, e, a),
                    Ge(),
                    (Nc = c),
                    (bt = l),
                    (Ac.transition = o);
                } else e.current = r;
                if (
                  (Kc && ((Kc = !1), (Yc = e), (Gc = a)),
                  (o = e.pendingLanes),
                  0 === o && (qc = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(r.stateNode),
                  au(e, Xe()),
                  null !== t)
                )
                  for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                    (a = t[r]),
                      n(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vc) throw ((Vc = !1), (e = Qc), (Qc = null), e);
                0 !== (1 & Gc) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Jc
                      ? Xc++
                      : ((Xc = 0), (Jc = e))
                    : (Xc = 0),
                  Ba();
              })(e, t, r, n);
          } finally {
            (Ac.transition = a), (bt = n);
          }
          return null;
        }
        function ku() {
          if (null !== Yc) {
            var e = St(Gc),
              t = Ac.transition,
              r = bt;
            try {
              if (((Ac.transition = null), (bt = 16 > e ? 16 : e), null === Yc))
                var n = !1;
              else {
                if (((e = Yc), (Yc = null), (Gc = 0), 0 !== (6 & Nc)))
                  throw Error(i(331));
                var a = Nc;
                for (Nc |= 4, Zl = e.current; null !== Zl; ) {
                  var o = Zl,
                    l = o.child;
                  if (0 !== (16 & Zl.flags)) {
                    var c = o.deletions;
                    if (null !== c) {
                      for (var u = 0; u < c.length; u++) {
                        var s = c[u];
                        for (Zl = s; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nc(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var p = (d = Zl).sibling,
                                h = d.return;
                              if ((oc(d), d === s)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var y = o.alternate;
                      if (null !== y) {
                        var g = y.child;
                        if (null !== g) {
                          y.child = null;
                          do {
                            var m = g.sibling;
                            (g.sibling = null), (g = m);
                          } while (null !== g);
                        }
                      }
                      Zl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (o = Zl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nc(9, o, o.return);
                        }
                      var v = o.sibling;
                      if (null !== v) {
                        (v.return = o.return), (Zl = v);
                        break e;
                      }
                      Zl = o.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var S = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== S)
                    (S.return = l), (Zl = S);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (c = Zl).flags))
                        try {
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ac(9, c);
                          }
                        } catch (w) {
                          xu(c, c.return, w);
                        }
                      if (c === l) {
                        Zl = null;
                        break e;
                      }
                      var E = c.sibling;
                      if (null !== E) {
                        (E.return = c.return), (Zl = E);
                        break e;
                      }
                      Zl = c.return;
                    }
                }
                if (
                  ((Nc = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                n = !0;
              }
              return n;
            } finally {
              (bt = r), (Ac.transition = t);
            }
          }
          return !1;
        }
        function Lu(e, t, r) {
          (e = ji(e, (t = hl(0, (t = sl(r, t)), 1)), 1)),
            (t = tu()),
            null !== e && (mt(e, 1, t), au(e, t));
        }
        function xu(e, t, r) {
          if (3 === e.tag) Lu(e, e, r);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Lu(t, e, r);
                break;
              }
              if (1 === t.tag) {
                var n = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof n.componentDidCatch &&
                    (null === qc || !qc.has(n)))
                ) {
                  (t = ji(t, (e = yl(t, (e = sl(r, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (mt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Fu(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & r),
            _c === e &&
              (Rc & r) === r &&
              (4 === Pc ||
              (3 === Pc && (130023424 & Rc) === Rc && 500 > Xe() - Bc)
                ? pu(e, 0)
                : (Dc |= r)),
            au(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var r = tu();
          null !== (e = Ni(e, t)) && (mt(e, t, r), au(e, r));
        }
        function Au(e) {
          var t = e.memoizedState,
            r = 0;
          null !== t && (r = t.retryLane), Cu(e, r);
        }
        function Nu(e, t) {
          var r = 0;
          switch (e.tag) {
            case 13:
              var n = e.stateNode,
                a = e.memoizedState;
              null !== a && (r = a.retryLane);
              break;
            case 19:
              n = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== n && n.delete(t), Cu(e, r);
        }
        function _u(e, t) {
          return qe(e, t);
        }
        function Tu(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, r, n) {
          return new Tu(e, t, r, n);
        }
        function Ou(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ju(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.type = e.type),
                (r.flags = 0),
                (r.subtreeFlags = 0),
                (r.deletions = null)),
            (r.flags = 14680064 & e.flags),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function Pu(e, t, r, n, a, o) {
          var l = 2;
          if (((n = e), "function" === typeof e)) Ou(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Uu(r.children, a, o, t);
              case L:
                (l = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = Ru(12, r, t, 2 | a)).elementType = x), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Ru(13, r, t, a)).elementType = N), (e.lanes = o), e
                );
              case _:
                return (
                  ((e = Ru(19, r, t, a)).elementType = _), (e.lanes = o), e
                );
              case O:
                return Mu(r, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case F:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case A:
                      l = 11;
                      break e;
                    case T:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (n = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(l, r, t, a)).elementType = e),
            (t.type = n),
            (t.lanes = o),
            t
          );
        }
        function Uu(e, t, r, n) {
          return ((e = Ru(7, e, n, t)).lanes = r), e;
        }
        function Mu(e, t, r, n) {
          return (
            ((e = Ru(22, e, n, t)).elementType = O),
            (e.lanes = r),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zu(e, t, r) {
          return ((e = Ru(6, e, null, t)).lanes = r), e;
        }
        function Du(e, t, r) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Iu(e, t, r, n, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = n),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Wu(e, t, r, n, a, i, o, l, c) {
          return (
            (e = new Iu(e, t, r, l, c)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ru(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: n,
              isDehydrated: r,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ti(i),
            e
          );
        }
        function Bu(e) {
          if (!e) return Ca;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var r = e.type;
            if (Ra(r)) return Pa(e, r, t);
          }
          return t;
        }
        function Hu(e, t, r, n, a, i, o, l, c) {
          return (
            ((e = Wu(r, n, !0, e, 0, i, 0, l, c)).context = Bu(null)),
            (r = e.current),
            ((i = Oi((n = tu()), (a = ru(r)))).callback =
              void 0 !== t && null !== t ? t : null),
            ji(r, i, a),
            (e.current.lanes = a),
            mt(e, a, n),
            au(e, n),
            e
          );
        }
        function $u(e, t, r, n) {
          var a = t.current,
            i = tu(),
            o = ru(a);
          return (
            (r = Bu(r)),
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = Oi(i, o)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            null !== (e = ji(a, t, o)) && (nu(e, a, o, i), Pi(e, a, o)),
            o
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var r = e.retryLane;
            e.retryLane = 0 !== r && r < t ? r : t;
          }
        }
        function qu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Lc = function (e, t, r) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) Sl = !0;
            else {
              if (0 === (e.lanes & r) && 0 === (128 & t.flags))
                return (
                  (Sl = !1),
                  (function (e, t, r) {
                    switch (t.tag) {
                      case 3:
                        _l(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Ra(t.type) && Ua(t);
                        break;
                      case 4:
                        no(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var n = t.type._context,
                          a = t.memoizedProps.value;
                        Fa(mi, n._currentValue), (n._currentValue = a);
                        break;
                      case 13:
                        if (null !== (n = t.memoizedState))
                          return null !== n.dehydrated
                            ? (Fa(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (r & t.child.childLanes)
                            ? zl(e, t, r)
                            : (Fa(lo, 1 & lo.current),
                              null !== (e = Vl(e, t, r)) ? e.sibling : null);
                        Fa(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((n = 0 !== (r & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (n) return Hl(e, t, r);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Fa(lo, lo.current),
                          n)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xl(e, t, r);
                    }
                    return Vl(e, t, r);
                  })(e, t, r)
                );
              Sl = 0 !== (131072 & e.flags);
            }
          else (Sl = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var n = t.type;
              $l(e, t), (e = t.pendingProps);
              var a = Ta(t, Aa.current);
              Li(t, r), (a = Lo(null, t, n, e, a, r));
              var o = xo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(n) ? ((o = !0), Ua(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ti(t),
                    (a.updater = Wi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Vi(t, n, e, r),
                    (t = Nl(null, t, n, !0, o, r)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    El(null, t, a, r),
                    (t = t.child)),
                t
              );
            case 16:
              n = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (n = (a = n._init)(n._payload)),
                  (t.type = n),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ou(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === A) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(n)),
                  (e = gi(n, e)),
                  a)
                ) {
                  case 0:
                    t = Cl(null, t, n, e, r);
                    break e;
                  case 1:
                    t = Al(null, t, n, e, r);
                    break e;
                  case 11:
                    t = wl(null, t, n, e, r);
                    break e;
                  case 14:
                    t = kl(null, t, n, gi(n.type, e), r);
                    break e;
                }
                throw Error(i(306, n, ""));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Cl(e, t, n, (a = t.elementType === n ? a : gi(n, a)), r)
              );
            case 1:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Al(e, t, n, (a = t.elementType === n ? a : gi(n, a)), r)
              );
            case 3:
              e: {
                if ((_l(t), null === e)) throw Error(i(387));
                (n = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ri(e, t),
                  Mi(t, n, null, r);
                var l = t.memoizedState;
                if (((n = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: n,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Tl(e, t, n, r, (a = sl(Error(i(423)), t)));
                    break e;
                  }
                  if (n !== a) {
                    t = Tl(e, t, n, r, (a = sl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ni = ua(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ai = !0,
                      ii = null,
                      r = Xi(t, null, n, r),
                      t.child = r;
                    r;

                  )
                    (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
                } else {
                  if ((pi(), n === a)) {
                    t = Vl(e, t, r);
                    break e;
                  }
                  El(e, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (n = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                ra(n, a)
                  ? (l = null)
                  : null !== o && ra(n, o) && (t.flags |= 32),
                Fl(e, t),
                El(e, t, l, r),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return zl(e, t, r);
            case 4:
              return (
                no(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Gi(t, null, n, r)) : El(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (a = t.pendingProps),
                wl(e, t, n, (a = t.elementType === n ? a : gi(n, a)), r)
              );
            case 7:
              return El(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return El(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (
                  ((n = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Fa(mi, n._currentValue),
                  (n._currentValue = l),
                  null !== o)
                )
                  if (ln(o.value, l)) {
                    if (o.children === a.children && !Na.current) {
                      t = Vl(e, t, r);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var c = o.dependencies;
                      if (null !== c) {
                        l = o.child;
                        for (var u = c.firstContext; null !== u; ) {
                          if (u.context === n) {
                            if (1 === o.tag) {
                              (u = Oi(-1, r & -r)).tag = 2;
                              var s = o.updateQueue;
                              if (null !== s) {
                                var d = (s = s.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (s.pending = u);
                              }
                            }
                            (o.lanes |= r),
                              null !== (u = o.alternate) && (u.lanes |= r),
                              ki(o.return, r, t),
                              (c.lanes |= r);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= r),
                          null !== (c = l.alternate) && (c.lanes |= r),
                          ki(l, r, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                El(e, t, a.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (n = t.pendingProps.children),
                Li(t, r),
                (n = n((a = xi(a)))),
                (t.flags |= 1),
                El(e, t, n, r),
                t.child
              );
            case 14:
              return (
                (a = gi((n = t.type), t.pendingProps)),
                kl(e, t, n, (a = gi(n.type, a)), r)
              );
            case 15:
              return Ll(e, t, t.type, t.pendingProps, r);
            case 17:
              return (
                (n = t.type),
                (a = t.pendingProps),
                (a = t.elementType === n ? a : gi(n, a)),
                $l(e, t),
                (t.tag = 1),
                Ra(n) ? ((e = !0), Ua(t)) : (e = !1),
                Li(t, r),
                Hi(t, n, a),
                Vi(t, n, a, r),
                Nl(null, t, n, !0, e, r)
              );
            case 19:
              return Hl(e, t, r);
            case 22:
              return xl(e, t, r);
          }
          throw Error(i(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function es(e, t, r, n, a) {
          var i = r._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Vu(o);
                l.call(e);
              };
            }
            $u(t, o, e, a);
          } else
            o = (function (e, t, r, n, a) {
              if (a) {
                if ("function" === typeof n) {
                  var i = n;
                  n = function () {
                    var e = Vu(o);
                    i.call(e);
                  };
                }
                var o = Hu(t, n, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Bn(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof n) {
                var l = n;
                n = function () {
                  var e = Vu(c);
                  l.call(e);
                };
              }
              var c = Wu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = c),
                (e[ha] = c.current),
                Bn(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  $u(t, c, r, n);
                }),
                c
              );
            })(r, t, e, a, n);
          return Vu(o);
        }
        (Gu.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            $u(e, t, null, null);
          }),
          (Gu.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  $u(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Gu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Lt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var r = 0;
                r < Ot.length && 0 !== t && t < Ot[r].priority;
                r++
              );
              Ot.splice(r, 0, e), 0 === r && Mt(e);
            }
          }),
          (Et = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var r = dt(t.pendingLanes);
                  0 !== r &&
                    (vt(t, 1 | r),
                    au(t, Xe()),
                    0 === (6 & Nc) && ((Hc = Xe() + 500), Ba()));
                }
                break;
              case 13:
                du(function () {
                  var t = Ni(e, 1);
                  if (null !== t) {
                    var r = tu();
                    nu(t, e, 1, r);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Ni(e, 134217728);
              if (null !== t) nu(t, e, 134217728, tu());
              qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ru(e),
                r = Ni(e, t);
              if (null !== r) nu(r, e, t, tu());
              qu(e, t);
            }
          }),
          (Lt = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var r = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = r;
            }
          }),
          (we = function (e, t, r) {
            switch (t) {
              case "input":
                if ((J(e, r), (t = r.name), "radio" === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var a = Ea(n);
                      if (!a) throw Error(i(90));
                      q(n), J(n, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, r);
                break;
              case "select":
                null != (t = r.value) && re(e, !!r.multiple, t, !1);
            }
          }),
          (Ae = su),
          (Ne = du);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, Sa, Ea, Fe, Ce, su],
          },
          rs = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ns = {
            bundleType: rs.bundleType,
            version: rs.version,
            rendererPackageName: rs.rendererPackageName,
            rendererConfig: rs.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: S.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              rs.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(ns)), (it = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(i(200));
            return (function (e, t, r) {
              var n =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == n ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r,
              };
            })(e, t, null, r);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(i(299));
            var r = !1,
              n = "",
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (r = !0),
                void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Wu(e, 1, !1, null, 0, r, 0, n, a)),
              (e[ha] = t.current),
              Bn(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, r) {
            if (!Ju(t)) throw Error(i(200));
            return es(null, e, t, !0, r);
          }),
          (t.hydrateRoot = function (e, t, r) {
            if (!Xu(e)) throw Error(i(405));
            var n = (null != r && r.hydratedSources) || null,
              a = !1,
              o = "",
              l = Ku;
            if (
              (null !== r &&
                void 0 !== r &&
                (!0 === r.unstable_strictMode && (a = !0),
                void 0 !== r.identifierPrefix && (o = r.identifierPrefix),
                void 0 !== r.onRecoverableError && (l = r.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != r ? r : null, a, 0, o, l)),
              (e[ha] = t.current),
              Bn(e),
              n)
            )
              for (e = 0; e < n.length; e++)
                (a = (a = (r = n[e])._getVersion)(r._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [r, a])
                    : t.mutableSourceEagerHydrationData.push(r, a);
            return new Gu(t);
          }),
          (t.render = function (e, t, r) {
            if (!Ju(t)) throw Error(i(200));
            return es(null, e, t, !1, r);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = su),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
            if (!Ju(r)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return es(e, t, r, !1, n);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: (e, t, r) => {
        "use strict";
        var n = r(164);
        (t.createRoot = n.createRoot), (t.hydrateRoot = n.hydrateRoot);
      },
      164: (e, t, r) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = r(463));
      },
      688: (e, t, r) => {
        "use strict";
        function n() {
          var e = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state
          );
          null !== e && void 0 !== e && this.setState(e);
        }
        function a(e) {
          this.setState(
            function (t) {
              var r = this.constructor.getDerivedStateFromProps(e, t);
              return null !== r && void 0 !== r ? r : null;
            }.bind(this)
          );
        }
        function i(e, t) {
          try {
            var r = this.props,
              n = this.state;
            (this.props = e),
              (this.state = t),
              (this.__reactInternalSnapshotFlag = !0),
              (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
                r,
                n
              ));
          } finally {
            (this.props = r), (this.state = n);
          }
        }
        function o(e) {
          var t = e.prototype;
          if (!t || !t.isReactComponent)
            throw new Error("Can only polyfill class components");
          if (
            "function" !== typeof e.getDerivedStateFromProps &&
            "function" !== typeof t.getSnapshotBeforeUpdate
          )
            return e;
          var r = null,
            o = null,
            l = null;
          if (
            ("function" === typeof t.componentWillMount
              ? (r = "componentWillMount")
              : "function" === typeof t.UNSAFE_componentWillMount &&
                (r = "UNSAFE_componentWillMount"),
            "function" === typeof t.componentWillReceiveProps
              ? (o = "componentWillReceiveProps")
              : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
                (o = "UNSAFE_componentWillReceiveProps"),
            "function" === typeof t.componentWillUpdate
              ? (l = "componentWillUpdate")
              : "function" === typeof t.UNSAFE_componentWillUpdate &&
                (l = "UNSAFE_componentWillUpdate"),
            null !== r || null !== o || null !== l)
          ) {
            var c = e.displayName || e.name,
              u =
                "function" === typeof e.getDerivedStateFromProps
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            throw Error(
              "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                c +
                " uses " +
                u +
                " but also contains the following legacy lifecycles:" +
                (null !== r ? "\n  " + r : "") +
                (null !== o ? "\n  " + o : "") +
                (null !== l ? "\n  " + l : "") +
                "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
            );
          }
          if (
            ("function" === typeof e.getDerivedStateFromProps &&
              ((t.componentWillMount = n), (t.componentWillReceiveProps = a)),
            "function" === typeof t.getSnapshotBeforeUpdate)
          ) {
            if ("function" !== typeof t.componentDidUpdate)
              throw new Error(
                "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
              );
            t.componentWillUpdate = i;
            var s = t.componentDidUpdate;
            t.componentDidUpdate = function (e, t, r) {
              var n = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : r;
              s.call(this, e, t, n);
            };
          }
          return e;
        }
        r.r(t),
          r.d(t, { polyfill: () => o }),
          (n.__suppressDeprecationWarning = !0),
          (a.__suppressDeprecationWarning = !0),
          (i.__suppressDeprecationWarning = !0);
      },
      240: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.bodyOpenClassName = t.portalClassName = void 0);
        var n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          a = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })(),
          i = r(791),
          o = h(i),
          l = h(r(164)),
          c = h(r(7)),
          u = h(r(334)),
          s = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          })(r(858)),
          d = r(663),
          f = h(d),
          p = r(688);
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        var g = (t.portalClassName = "ReactModalPortal"),
          m = (t.bodyOpenClassName = "ReactModal__Body--open"),
          v = d.canUseDOM && void 0 !== l.default.createPortal,
          b = function (e) {
            return document.createElement(e);
          },
          S = function () {
            return v
              ? l.default.createPortal
              : l.default.unstable_renderSubtreeIntoContainer;
          };
        function E(e) {
          return e();
        }
        var w = (function (e) {
          function t() {
            var e, r, a;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var i = arguments.length, c = Array(i), s = 0; s < i; s++)
              c[s] = arguments[s];
            return (
              (r = a =
                y(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(c)
                  )
                )),
              (a.removePortal = function () {
                !v && l.default.unmountComponentAtNode(a.node);
                var e = E(a.props.parentSelector);
                e && e.contains(a.node)
                  ? e.removeChild(a.node)
                  : console.warn(
                      'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
                    );
              }),
              (a.portalRef = function (e) {
                a.portal = e;
              }),
              (a.renderPortal = function (e) {
                var r = S()(
                  a,
                  o.default.createElement(
                    u.default,
                    n({ defaultStyles: t.defaultStyles }, e)
                  ),
                  a.node
                );
                a.portalRef(r);
              }),
              y(a, r)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    d.canUseDOM &&
                      (v || (this.node = b("div")),
                      (this.node.className = this.props.portalClassName),
                      E(this.props.parentSelector).appendChild(this.node),
                      !v && this.renderPortal(this.props));
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (e) {
                    return {
                      prevParent: E(e.parentSelector),
                      nextParent: E(this.props.parentSelector),
                    };
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t, r) {
                    if (d.canUseDOM) {
                      var n = this.props,
                        a = n.isOpen,
                        i = n.portalClassName;
                      e.portalClassName !== i && (this.node.className = i);
                      var o = r.prevParent,
                        l = r.nextParent;
                      l !== o &&
                        (o.removeChild(this.node), l.appendChild(this.node)),
                        (e.isOpen || a) && !v && this.renderPortal(this.props);
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if (d.canUseDOM && this.node && this.portal) {
                      var e = this.portal.state,
                        t = Date.now(),
                        r =
                          e.isOpen &&
                          this.props.closeTimeoutMS &&
                          (e.closesAt || t + this.props.closeTimeoutMS);
                      r
                        ? (e.beforeClose || this.portal.closeWithTimeout(),
                          setTimeout(this.removePortal, r - t))
                        : this.removePortal();
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return d.canUseDOM && v
                      ? (!this.node && v && (this.node = b("div")),
                        S()(
                          o.default.createElement(
                            u.default,
                            n(
                              {
                                ref: this.portalRef,
                                defaultStyles: t.defaultStyles,
                              },
                              this.props
                            )
                          ),
                          this.node
                        ))
                      : null;
                  },
                },
              ],
              [
                {
                  key: "setAppElement",
                  value: function (e) {
                    s.setElement(e);
                  },
                },
              ]
            ),
            t
          );
        })(i.Component);
        (w.propTypes = {
          isOpen: c.default.bool.isRequired,
          style: c.default.shape({
            content: c.default.object,
            overlay: c.default.object,
          }),
          portalClassName: c.default.string,
          bodyOpenClassName: c.default.string,
          htmlOpenClassName: c.default.string,
          className: c.default.oneOfType([
            c.default.string,
            c.default.shape({
              base: c.default.string.isRequired,
              afterOpen: c.default.string.isRequired,
              beforeClose: c.default.string.isRequired,
            }),
          ]),
          overlayClassName: c.default.oneOfType([
            c.default.string,
            c.default.shape({
              base: c.default.string.isRequired,
              afterOpen: c.default.string.isRequired,
              beforeClose: c.default.string.isRequired,
            }),
          ]),
          appElement: c.default.oneOfType([
            c.default.instanceOf(f.default),
            c.default.instanceOf(d.SafeHTMLCollection),
            c.default.instanceOf(d.SafeNodeList),
            c.default.arrayOf(c.default.instanceOf(f.default)),
          ]),
          onAfterOpen: c.default.func,
          onRequestClose: c.default.func,
          closeTimeoutMS: c.default.number,
          ariaHideApp: c.default.bool,
          shouldFocusAfterRender: c.default.bool,
          shouldCloseOnOverlayClick: c.default.bool,
          shouldReturnFocusAfterClose: c.default.bool,
          preventScroll: c.default.bool,
          parentSelector: c.default.func,
          aria: c.default.object,
          data: c.default.object,
          role: c.default.string,
          contentLabel: c.default.string,
          shouldCloseOnEsc: c.default.bool,
          overlayRef: c.default.func,
          contentRef: c.default.func,
          id: c.default.string,
          overlayElement: c.default.func,
          contentElement: c.default.func,
        }),
          (w.defaultProps = {
            isOpen: !1,
            portalClassName: g,
            bodyOpenClassName: m,
            role: "dialog",
            ariaHideApp: !0,
            closeTimeoutMS: 0,
            shouldFocusAfterRender: !0,
            shouldCloseOnEsc: !0,
            shouldCloseOnOverlayClick: !0,
            shouldReturnFocusAfterClose: !0,
            preventScroll: !1,
            parentSelector: function () {
              return document.body;
            },
            overlayElement: function (e, t) {
              return o.default.createElement("div", e, t);
            },
            contentElement: function (e, t) {
              return o.default.createElement("div", e, t);
            },
          }),
          (w.defaultStyles = {
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }),
          (0, p.polyfill)(w),
          (t.default = w);
      },
      334: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          a =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          i = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })(),
          o = r(791),
          l = g(r(7)),
          c = y(r(844)),
          u = g(r(870)),
          s = y(r(858)),
          d = y(r(942)),
          f = r(663),
          p = g(f),
          h = g(r(484));
        function y(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        }
        function g(e) {
          return e && e.__esModule ? e : { default: e };
        }
        r(670);
        var m = {
            overlay: "ReactModal__Overlay",
            content: "ReactModal__Content",
          },
          v = 0,
          b = (function (e) {
            function t(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              var r = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" !== typeof t && "function" !== typeof t)
                  ? e
                  : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
              return (
                (r.setOverlayRef = function (e) {
                  (r.overlay = e), r.props.overlayRef && r.props.overlayRef(e);
                }),
                (r.setContentRef = function (e) {
                  (r.content = e), r.props.contentRef && r.props.contentRef(e);
                }),
                (r.afterClose = function () {
                  var e = r.props,
                    t = e.appElement,
                    n = e.ariaHideApp,
                    a = e.htmlOpenClassName,
                    i = e.bodyOpenClassName,
                    o = e.parentSelector,
                    l = (o && o().ownerDocument) || document;
                  i && d.remove(l.body, i),
                    a && d.remove(l.getElementsByTagName("html")[0], a),
                    n && v > 0 && 0 === (v -= 1) && s.show(t),
                    r.props.shouldFocusAfterRender &&
                      (r.props.shouldReturnFocusAfterClose
                        ? (c.returnFocus(r.props.preventScroll),
                          c.teardownScopedFocus())
                        : c.popWithoutFocus()),
                    r.props.onAfterClose && r.props.onAfterClose(),
                    h.default.deregister(r);
                }),
                (r.open = function () {
                  r.beforeOpen(),
                    r.state.afterOpen && r.state.beforeClose
                      ? (clearTimeout(r.closeTimer),
                        r.setState({ beforeClose: !1 }))
                      : (r.props.shouldFocusAfterRender &&
                          (c.setupScopedFocus(r.node), c.markForFocusLater()),
                        r.setState({ isOpen: !0 }, function () {
                          r.openAnimationFrame = requestAnimationFrame(
                            function () {
                              r.setState({ afterOpen: !0 }),
                                r.props.isOpen &&
                                  r.props.onAfterOpen &&
                                  r.props.onAfterOpen({
                                    overlayEl: r.overlay,
                                    contentEl: r.content,
                                  });
                            }
                          );
                        }));
                }),
                (r.close = function () {
                  r.props.closeTimeoutMS > 0
                    ? r.closeWithTimeout()
                    : r.closeWithoutTimeout();
                }),
                (r.focusContent = function () {
                  return (
                    r.content &&
                    !r.contentHasFocus() &&
                    r.content.focus({ preventScroll: !0 })
                  );
                }),
                (r.closeWithTimeout = function () {
                  var e = Date.now() + r.props.closeTimeoutMS;
                  r.setState({ beforeClose: !0, closesAt: e }, function () {
                    r.closeTimer = setTimeout(
                      r.closeWithoutTimeout,
                      r.state.closesAt - Date.now()
                    );
                  });
                }),
                (r.closeWithoutTimeout = function () {
                  r.setState(
                    {
                      beforeClose: !1,
                      isOpen: !1,
                      afterOpen: !1,
                      closesAt: null,
                    },
                    r.afterClose
                  );
                }),
                (r.handleKeyDown = function (e) {
                  (function (e) {
                    return "Tab" === e.code || 9 === e.keyCode;
                  })(e) && (0, u.default)(r.content, e),
                    r.props.shouldCloseOnEsc &&
                      (function (e) {
                        return "Escape" === e.code || 27 === e.keyCode;
                      })(e) &&
                      (e.stopPropagation(), r.requestClose(e));
                }),
                (r.handleOverlayOnClick = function (e) {
                  null === r.shouldClose && (r.shouldClose = !0),
                    r.shouldClose &&
                      r.props.shouldCloseOnOverlayClick &&
                      (r.ownerHandlesClose()
                        ? r.requestClose(e)
                        : r.focusContent()),
                    (r.shouldClose = null);
                }),
                (r.handleContentOnMouseUp = function () {
                  r.shouldClose = !1;
                }),
                (r.handleOverlayOnMouseDown = function (e) {
                  r.props.shouldCloseOnOverlayClick ||
                    e.target != r.overlay ||
                    e.preventDefault();
                }),
                (r.handleContentOnClick = function () {
                  r.shouldClose = !1;
                }),
                (r.handleContentOnMouseDown = function () {
                  r.shouldClose = !1;
                }),
                (r.requestClose = function (e) {
                  return r.ownerHandlesClose() && r.props.onRequestClose(e);
                }),
                (r.ownerHandlesClose = function () {
                  return r.props.onRequestClose;
                }),
                (r.shouldBeClosed = function () {
                  return !r.state.isOpen && !r.state.beforeClose;
                }),
                (r.contentHasFocus = function () {
                  return (
                    document.activeElement === r.content ||
                    r.content.contains(document.activeElement)
                  );
                }),
                (r.buildClassName = function (e, t) {
                  var n =
                      "object" ===
                      ("undefined" === typeof t ? "undefined" : a(t))
                        ? t
                        : {
                            base: m[e],
                            afterOpen: m[e] + "--after-open",
                            beforeClose: m[e] + "--before-close",
                          },
                    i = n.base;
                  return (
                    r.state.afterOpen && (i = i + " " + n.afterOpen),
                    r.state.beforeClose && (i = i + " " + n.beforeClose),
                    "string" === typeof t && t ? i + " " + t : i
                  );
                }),
                (r.attributesFromObject = function (e, t) {
                  return Object.keys(t).reduce(function (r, n) {
                    return (r[e + "-" + n] = t[n]), r;
                  }, {});
                }),
                (r.state = { afterOpen: !1, beforeClose: !1 }),
                (r.shouldClose = null),
                (r.moveFromContentToOverlay = null),
                r
              );
            }
            return (
              (function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              i(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.isOpen && this.open();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    this.props.isOpen && !e.isOpen
                      ? this.open()
                      : !this.props.isOpen && e.isOpen && this.close(),
                      this.props.shouldFocusAfterRender &&
                        this.state.isOpen &&
                        !t.isOpen &&
                        this.focusContent();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.isOpen && this.afterClose(),
                      clearTimeout(this.closeTimer),
                      cancelAnimationFrame(this.openAnimationFrame);
                  },
                },
                {
                  key: "beforeOpen",
                  value: function () {
                    var e = this.props,
                      t = e.appElement,
                      r = e.ariaHideApp,
                      n = e.htmlOpenClassName,
                      a = e.bodyOpenClassName,
                      i = e.parentSelector,
                      o = (i && i().ownerDocument) || document;
                    a && d.add(o.body, a),
                      n && d.add(o.getElementsByTagName("html")[0], n),
                      r && ((v += 1), s.hide(t)),
                      h.default.register(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.id,
                      r = e.className,
                      a = e.overlayClassName,
                      i = e.defaultStyles,
                      o = e.children,
                      l = r ? {} : i.content,
                      c = a ? {} : i.overlay;
                    if (this.shouldBeClosed()) return null;
                    var u = {
                        ref: this.setOverlayRef,
                        className: this.buildClassName("overlay", a),
                        style: n({}, c, this.props.style.overlay),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown,
                      },
                      s = n(
                        {
                          id: t,
                          ref: this.setContentRef,
                          style: n({}, l, this.props.style.content),
                          className: this.buildClassName("content", r),
                          tabIndex: "-1",
                          onKeyDown: this.handleKeyDown,
                          onMouseDown: this.handleContentOnMouseDown,
                          onMouseUp: this.handleContentOnMouseUp,
                          onClick: this.handleContentOnClick,
                          role: this.props.role,
                          "aria-label": this.props.contentLabel,
                        },
                        this.attributesFromObject(
                          "aria",
                          n({ modal: !0 }, this.props.aria)
                        ),
                        this.attributesFromObject(
                          "data",
                          this.props.data || {}
                        ),
                        { "data-testid": this.props.testId }
                      ),
                      d = this.props.contentElement(s, o);
                    return this.props.overlayElement(u, d);
                  },
                },
              ]),
              t
            );
          })(o.Component);
        (b.defaultProps = {
          style: { overlay: {}, content: {} },
          defaultStyles: {},
        }),
          (b.propTypes = {
            isOpen: l.default.bool.isRequired,
            defaultStyles: l.default.shape({
              content: l.default.object,
              overlay: l.default.object,
            }),
            style: l.default.shape({
              content: l.default.object,
              overlay: l.default.object,
            }),
            className: l.default.oneOfType([
              l.default.string,
              l.default.object,
            ]),
            overlayClassName: l.default.oneOfType([
              l.default.string,
              l.default.object,
            ]),
            parentSelector: l.default.func,
            bodyOpenClassName: l.default.string,
            htmlOpenClassName: l.default.string,
            ariaHideApp: l.default.bool,
            appElement: l.default.oneOfType([
              l.default.instanceOf(p.default),
              l.default.instanceOf(f.SafeHTMLCollection),
              l.default.instanceOf(f.SafeNodeList),
              l.default.arrayOf(l.default.instanceOf(p.default)),
            ]),
            onAfterOpen: l.default.func,
            onAfterClose: l.default.func,
            onRequestClose: l.default.func,
            closeTimeoutMS: l.default.number,
            shouldFocusAfterRender: l.default.bool,
            shouldCloseOnOverlayClick: l.default.bool,
            shouldReturnFocusAfterClose: l.default.bool,
            preventScroll: l.default.bool,
            role: l.default.string,
            contentLabel: l.default.string,
            aria: l.default.object,
            data: l.default.object,
            children: l.default.node,
            shouldCloseOnEsc: l.default.bool,
            overlayRef: l.default.func,
            contentRef: l.default.func,
            id: l.default.string,
            overlayElement: l.default.func,
            contentElement: l.default.func,
            testId: l.default.string,
          }),
          (t.default = b),
          (e.exports = t.default);
      },
      858: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            l &&
              (l.removeAttribute
                ? l.removeAttribute("aria-hidden")
                : null != l.length
                ? l.forEach(function (e) {
                    return e.removeAttribute("aria-hidden");
                  })
                : document.querySelectorAll(l).forEach(function (e) {
                    return e.removeAttribute("aria-hidden");
                  }));
            l = null;
          }),
          (t.log = function () {
            0;
          }),
          (t.assertNodeList = c),
          (t.setElement = function (e) {
            var t = e;
            if ("string" === typeof t && o.canUseDOM) {
              var r = document.querySelectorAll(t);
              c(r, t), (t = r);
            }
            return (l = t || l);
          }),
          (t.validateElement = u),
          (t.hide = function (e) {
            var t = !0,
              r = !1,
              n = void 0;
            try {
              for (
                var a, i = u(e)[Symbol.iterator]();
                !(t = (a = i.next()).done);
                t = !0
              ) {
                a.value.setAttribute("aria-hidden", "true");
              }
            } catch (o) {
              (r = !0), (n = o);
            } finally {
              try {
                !t && i.return && i.return();
              } finally {
                if (r) throw n;
              }
            }
          }),
          (t.show = function (e) {
            var t = !0,
              r = !1,
              n = void 0;
            try {
              for (
                var a, i = u(e)[Symbol.iterator]();
                !(t = (a = i.next()).done);
                t = !0
              ) {
                a.value.removeAttribute("aria-hidden");
              }
            } catch (o) {
              (r = !0), (n = o);
            } finally {
              try {
                !t && i.return && i.return();
              } finally {
                if (r) throw n;
              }
            }
          }),
          (t.documentNotReadyOrSSRTesting = function () {
            l = null;
          });
        var n,
          a = r(391),
          i = (n = a) && n.__esModule ? n : { default: n },
          o = r(663);
        var l = null;
        function c(e, t) {
          if (!e || !e.length)
            throw new Error(
              "react-modal: No elements were found for selector " + t + "."
            );
        }
        function u(e) {
          var t = e || l;
          return t
            ? Array.isArray(t) ||
              t instanceof HTMLCollection ||
              t instanceof NodeList
              ? t
              : [t]
            : ((0, i.default)(
                !1,
                [
                  "react-modal: App element is not defined.",
                  "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
                  "This is needed so screen readers don't see main content",
                  "when modal is opened. It is not recommended, but you can opt-out",
                  "by setting `ariaHideApp={false}`.",
                ].join(" ")
              ),
              []);
        }
      },
      670: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            for (var e = [o, l], t = 0; t < e.length; t++) {
              var r = e[t];
              r && r.parentNode && r.parentNode.removeChild(r);
            }
            (o = l = null), (c = []);
          }),
          (t.log = function () {
            console.log("bodyTrap ----------"), console.log(c.length);
            for (var e = [o, l], t = 0; t < e.length; t++) {
              var r = e[t] || {};
              console.log(r.nodeName, r.className, r.id);
            }
            console.log("edn bodyTrap ----------");
          });
        var n,
          a = r(484),
          i = (n = a) && n.__esModule ? n : { default: n };
        var o = void 0,
          l = void 0,
          c = [];
        function u() {
          0 !== c.length && c[c.length - 1].focusContent();
        }
        i.default.subscribe(function (e, t) {
          o ||
            l ||
            ((o = document.createElement("div")).setAttribute(
              "data-react-modal-body-trap",
              ""
            ),
            (o.style.position = "absolute"),
            (o.style.opacity = "0"),
            o.setAttribute("tabindex", "0"),
            o.addEventListener("focus", u),
            (l = o.cloneNode()).addEventListener("focus", u)),
            (c = t).length > 0
              ? (document.body.firstChild !== o &&
                  document.body.insertBefore(o, document.body.firstChild),
                document.body.lastChild !== l && document.body.appendChild(l))
              : (o.parentElement && o.parentElement.removeChild(o),
                l.parentElement && l.parentElement.removeChild(l));
        });
      },
      942: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            var e = document.getElementsByTagName("html")[0];
            for (var t in r) a(e, r[t]);
            var i = document.body;
            for (var o in n) a(i, n[o]);
            (r = {}), (n = {});
          }),
          (t.log = function () {
            0;
          });
        var r = {},
          n = {};
        function a(e, t) {
          e.classList.remove(t);
        }
        (t.add = function (e, t) {
          return (
            (a = e.classList),
            (i = "html" == e.nodeName.toLowerCase() ? r : n),
            void t.split(" ").forEach(function (e) {
              !(function (e, t) {
                e[t] || (e[t] = 0), (e[t] += 1);
              })(i, e),
                a.add(e);
            })
          );
          var a, i;
        }),
          (t.remove = function (e, t) {
            return (
              (a = e.classList),
              (i = "html" == e.nodeName.toLowerCase() ? r : n),
              void t.split(" ").forEach(function (e) {
                !(function (e, t) {
                  e[t] && (e[t] -= 1);
                })(i, e),
                  0 === i[e] && a.remove(e);
              })
            );
            var a, i;
          });
      },
      844: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.resetState = function () {
            o = [];
          }),
          (t.log = function () {
            0;
          }),
          (t.handleBlur = u),
          (t.handleFocus = s),
          (t.markForFocusLater = function () {
            o.push(document.activeElement);
          }),
          (t.returnFocus = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = null;
            try {
              return void (
                0 !== o.length && (t = o.pop()).focus({ preventScroll: e })
              );
            } catch (r) {
              console.warn(
                [
                  "You tried to return focus to",
                  t,
                  "but it is not in the DOM anymore",
                ].join(" ")
              );
            }
          }),
          (t.popWithoutFocus = function () {
            o.length > 0 && o.pop();
          }),
          (t.setupScopedFocus = function (e) {
            (l = e),
              window.addEventListener
                ? (window.addEventListener("blur", u, !1),
                  document.addEventListener("focus", s, !0))
                : (window.attachEvent("onBlur", u),
                  document.attachEvent("onFocus", s));
          }),
          (t.teardownScopedFocus = function () {
            (l = null),
              window.addEventListener
                ? (window.removeEventListener("blur", u),
                  document.removeEventListener("focus", s))
                : (window.detachEvent("onBlur", u),
                  document.detachEvent("onFocus", s));
          });
        var n,
          a = r(750),
          i = (n = a) && n.__esModule ? n : { default: n };
        var o = [],
          l = null,
          c = !1;
        function u() {
          c = !0;
        }
        function s() {
          if (c) {
            if (((c = !1), !l)) return;
            setTimeout(function () {
              l.contains(document.activeElement) ||
                ((0, i.default)(l)[0] || l).focus();
            }, 0);
          }
        }
      },
      484: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.log = function () {
            console.log("portalOpenInstances ----------"),
              console.log(n.openInstances.length),
              n.openInstances.forEach(function (e) {
                return console.log(e);
              }),
              console.log("end portalOpenInstances ----------");
          }),
          (t.resetState = function () {
            n = new r();
          });
        var r = function e() {
            var t = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.register = function (e) {
                -1 === t.openInstances.indexOf(e) &&
                  (t.openInstances.push(e), t.emit("register"));
              }),
              (this.deregister = function (e) {
                var r = t.openInstances.indexOf(e);
                -1 !== r &&
                  (t.openInstances.splice(r, 1), t.emit("deregister"));
              }),
              (this.subscribe = function (e) {
                t.subscribers.push(e);
              }),
              (this.emit = function (e) {
                t.subscribers.forEach(function (r) {
                  return r(e, t.openInstances.slice());
                });
              }),
              (this.openInstances = []),
              (this.subscribers = []);
          },
          n = new r();
        t.default = n;
      },
      663: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0);
        var n,
          a = r(618);
        var i = ((n = a) && n.__esModule ? n : { default: n }).default,
          o = i.canUseDOM ? window.HTMLElement : {};
        (t.SafeHTMLCollection = i.canUseDOM ? window.HTMLCollection : {}),
          (t.SafeNodeList = i.canUseDOM ? window.NodeList : {}),
          (t.canUseDOM = i.canUseDOM);
        t.default = o;
      },
      870: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            var r = (0, i.default)(e);
            if (!r.length) return void t.preventDefault();
            var n = void 0,
              a = t.shiftKey,
              l = r[0],
              c = r[r.length - 1],
              u = o();
            if (e === u) {
              if (!a) return;
              n = c;
            }
            c !== u || a || (n = l);
            l === u && a && (n = c);
            if (n) return t.preventDefault(), void n.focus();
            var s = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
            if (
              null == s ||
              "Chrome" == s[1] ||
              null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
            )
              return;
            var d = r.indexOf(u);
            d > -1 && (d += a ? -1 : 1);
            if ("undefined" === typeof (n = r[d]))
              return t.preventDefault(), void (n = a ? c : l).focus();
            t.preventDefault(), n.focus();
          });
        var n,
          a = r(750),
          i = (n = a) && n.__esModule ? n : { default: n };
        function o() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document;
          return e.activeElement.shadowRoot
            ? o(e.activeElement.shadowRoot)
            : e.activeElement;
        }
        e.exports = t.default;
      },
      750: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function e(t) {
            var r = [].slice
              .call(t.querySelectorAll("*"), 0)
              .reduce(function (t, r) {
                return t.concat(r.shadowRoot ? e(r.shadowRoot) : [r]);
              }, []);
            return r.filter(l);
          });
        var r = "none",
          n = "contents",
          a = /input|select|textarea|button|object|iframe/;
        function i(e) {
          var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
          if (t && !e.innerHTML) return !0;
          try {
            var a = window.getComputedStyle(e),
              i = a.getPropertyValue("display");
            return t
              ? i !== n &&
                  (function (e, t) {
                    return (
                      "visible" !== t.getPropertyValue("overflow") ||
                      (e.scrollWidth <= 0 && e.scrollHeight <= 0)
                    );
                  })(e, a)
              : i === r;
          } catch (o) {
            return console.warn("Failed to inspect element style"), !1;
          }
        }
        function o(e, t) {
          var r = e.nodeName.toLowerCase();
          return (
            ((a.test(r) && !e.disabled) || ("a" === r && e.href) || t) &&
            (function (e) {
              for (
                var t = e, r = e.getRootNode && e.getRootNode();
                t && t !== document.body;

              ) {
                if ((r && t === r && (t = r.host.parentNode), i(t))) return !1;
                t = t.parentNode;
              }
              return !0;
            })(e)
          );
        }
        function l(e) {
          var t = e.getAttribute("tabindex");
          null === t && (t = void 0);
          var r = isNaN(t);
          return (r || t >= 0) && o(e, !r);
        }
        e.exports = t.default;
      },
      948: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n,
          a = r(240),
          i = (n = a) && n.__esModule ? n : { default: n };
        (t.default = i.default), (e.exports = t.default);
      },
      374: (e, t, r) => {
        "use strict";
        var n = r(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          c = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, r) {
          var n,
            i = {},
            u = null,
            s = null;
          for (n in (void 0 !== r && (u = "" + r),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            o.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
          if (e && e.defaultProps)
            for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: s,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: (e, t) => {
        "use strict";
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          y = Object.assign,
          g = {};
        function m(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = r || h);
        }
        function v() {}
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = r || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = m.prototype);
        var S = (b.prototype = new v());
        (S.constructor = b), y(S, m.prototype), (S.isPureReactComponent = !0);
        var E = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          L = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !L.hasOwnProperty(a) && (i[a] = t[a]);
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            for (var u = Array(c), s = 0; s < c; s++) u[s] = arguments[s + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (c = e.defaultProps)) void 0 === i[a] && (i[a] = c[a]);
          return {
            $$typeof: r,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: k.current,
          };
        }
        function F(e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }
        var C = /\/+/g;
        function A(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    c = !0;
                }
            }
          if (c)
            return (
              (o = o((c = e))),
              (e = "" === i ? "." + A(c, 0) : i),
              E(o)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (F(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (c && c.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((c = 0), (i = "" === i ? "." : i + ":"), E(e)))
            for (var u = 0; u < e.length; u++) {
              var s = i + A((l = e[u]), u);
              c += N(l, t, a, s, o);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), u = 0; !(l = e.next()).done; )
              c += N((l = l.value), t, a, (s = i + A(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return c;
        }
        function _(e, t, r) {
          if (null == e) return e;
          var n = [],
            a = 0;
          return (
            N(e, n, "", "", function (e) {
              return t.call(r, e, a++);
            }),
            n
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          O = { transition: null },
          j = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: _,
          forEach: function (e, t, r) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              r
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!F(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = y({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !L.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = n;
            else if (1 < u) {
              c = Array(u);
              for (var s = 0; s < u; s++) c[s] = arguments[s + 2];
              a.children = c;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = F),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return R.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return R.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return R.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: (e, t, r) => {
        "use strict";
        e.exports = r(117);
      },
      184: (e, t, r) => {
        "use strict";
        e.exports = r(374);
      },
      813: (e, t) => {
        "use strict";
        function r(e, t) {
          var r = e.length;
          e.push(t);
          e: for (; 0 < r; ) {
            var n = (r - 1) >>> 1,
              a = e[n];
            if (!(0 < i(a, t))) break e;
            (e[n] = t), (e[r] = a), (r = n);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            r = e.pop();
          if (r !== t) {
            e[0] = r;
            e: for (var n = 0, a = e.length, o = a >>> 1; n < o; ) {
              var l = 2 * (n + 1) - 1,
                c = e[l],
                u = l + 1,
                s = e[u];
              if (0 > i(c, r))
                u < a && 0 > i(s, c)
                  ? ((e[n] = s), (e[u] = r), (n = u))
                  : ((e[n] = c), (e[l] = r), (n = l));
              else {
                if (!(u < a && 0 > i(s, r))) break e;
                (e[n] = s), (e[u] = r), (n = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            c = l.now();
          t.unstable_now = function () {
            return l.now() - c;
          };
        }
        var u = [],
          s = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          y = !1,
          g = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = n(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), r(u, t);
            }
            t = n(s);
          }
        }
        function E(e) {
          if (((g = !1), S(e), !y))
            if (null !== n(u)) (y = !0), O(w);
            else {
              var t = n(s);
              null !== t && j(E, t.startTime - e);
            }
        }
        function w(e, r) {
          (y = !1), g && ((g = !1), v(F), (F = -1)), (h = !0);
          var i = p;
          try {
            for (
              S(r), f = n(u);
              null !== f && (!(f.expirationTime > r) || (e && !N()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var l = o(f.expirationTime <= r);
                (r = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === n(u) && a(u),
                  S(r);
              } else a(u);
              f = n(u);
            }
            if (null !== f) var c = !0;
            else {
              var d = n(s);
              null !== d && j(E, d.startTime - r), (c = !1);
            }
            return c;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          L = !1,
          x = null,
          F = -1,
          C = 5,
          A = -1;
        function N() {
          return !(t.unstable_now() - A < C);
        }
        function _() {
          if (null !== x) {
            var e = t.unstable_now();
            A = e;
            var r = !0;
            try {
              r = x(!0, e);
            } finally {
              r ? k() : ((L = !1), (x = null));
            }
          } else L = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(_);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            R = T.port2;
          (T.port1.onmessage = _),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            m(_, 0);
          };
        function O(e) {
          (x = e), L || ((L = !0), k());
        }
        function j(e, r) {
          F = m(function () {
            e(t.unstable_now());
          }, r);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            y || h || ((y = !0), O(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return n(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var r = p;
            p = t;
            try {
              return e();
            } finally {
              p = r;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = p;
            p = e;
            try {
              return t();
            } finally {
              p = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  r(s, e),
                  null === n(u) &&
                    e === n(s) &&
                    (g ? (v(F), (F = -1)) : (g = !0), j(E, i - o)))
                : ((e.sortIndex = l), r(u, e), y || h || ((y = !0), O(w))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var r = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = r;
              }
            };
          });
      },
      296: (e, t, r) => {
        "use strict";
        e.exports = r(813);
      },
      391: (e) => {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.m = e),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (n, a) {
        if ((1 & a && (n = this(n)), 8 & a)) return n;
        if ("object" === typeof n && n) {
          if (4 & a && n.__esModule) return n;
          if (16 & a && "function" === typeof n.then) return n;
        }
        var i = Object.create(null);
        r.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && n;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (o[e] = () => n[e]));
        return (o.default = () => n), r.d(i, o), i;
      };
    })(),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
    (r.u = (e) => "static/js/" + e + ".db39e3ea.chunk.js"),
    (r.miniCssF = (e) => {}),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "231212:";
      r.l = (n, a, i, o) => {
        if (e[n]) e[n].push(a);
        else {
          var l, c;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), s = 0;
              s < u.length;
              s++
            ) {
              var d = u[s];
              if (
                d.getAttribute("src") == n ||
                d.getAttribute("data-webpack") == t + i
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((c = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            r.nc && l.setAttribute("nonce", r.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = n)),
            (e[n] = [a]);
          var f = (t, r) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[n];
              if (
                (delete e[n],
                l.parentNode && l.parentNode.removeChild(l),
                a && a.forEach((e) => e(r)),
                t)
              )
                return t(r);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            c && document.head.appendChild(l);
        }
      };
    })(),
    (r.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.p = "./"),
    (() => {
      var e = { 179: 0 };
      r.f.j = (t, n) => {
        var a = r.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else {
            var i = new Promise((r, n) => (a = e[t] = [r, n]));
            n.push((a[2] = i));
            var o = r.p + r.u(t),
              l = new Error();
            r.l(
              o,
              (n) => {
                if (r.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = o),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var a,
            i,
            o = n[0],
            l = n[1],
            c = n[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in l) r.o(l, a) && (r.m[a] = l[a]);
            if (c) c(r);
          }
          for (t && t(n); u < o.length; u++)
            (i = o[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.webpackChunk_231212 = self.webpackChunk_231212 || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      "use strict";
      var e,
        t = r(791),
        n = r.t(t, 2),
        a = r(250),
        i = r(164),
        o = r.t(i, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      const c = "popstate";
      function u(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function s(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (r) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, r, n) {
        return (
          void 0 === r && (r = null),
          l(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? h(t) : t,
            {
              state: r,
              key: (t && t.key) || n || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: r = "", hash: n = "" } = e;
        return (
          r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r),
          n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n),
          t
        );
      }
      function h(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      function y(t, r, n, a) {
        void 0 === a && (a = {});
        let { window: i = document.defaultView, v5Compat: o = !1 } = a,
          s = i.history,
          h = e.Pop,
          y = null,
          g = m();
        function m() {
          return (s.state || { idx: null }).idx;
        }
        function v() {
          h = e.Pop;
          let t = m(),
            r = null == t ? null : t - g;
          (g = t), y && y({ action: h, location: S.location, delta: r });
        }
        function b(e) {
          let t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            r = "string" === typeof e ? e : p(e);
          return (
            u(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                r
            ),
            new URL(r, t)
          );
        }
        null == g && ((g = 0), s.replaceState(l({}, s.state, { idx: g }), ""));
        let S = {
          get action() {
            return h;
          },
          get location() {
            return t(i, s);
          },
          listen(e) {
            if (y)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(c, v),
              (y = e),
              () => {
                i.removeEventListener(c, v), (y = null);
              }
            );
          },
          createHref: (e) => r(i, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, r) {
            h = e.Push;
            let a = f(S.location, t, r);
            n && n(a, t), (g = m() + 1);
            let l = d(a, g),
              c = S.createHref(a);
            try {
              s.pushState(l, "", c);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              i.location.assign(c);
            }
            o && y && y({ action: h, location: S.location, delta: 1 });
          },
          replace: function (t, r) {
            h = e.Replace;
            let a = f(S.location, t, r);
            n && n(a, t), (g = m());
            let i = d(a, g),
              l = S.createHref(a);
            s.replaceState(i, "", l),
              o && y && y({ action: h, location: S.location, delta: 0 });
          },
          go: (e) => s.go(e),
        };
        return S;
      }
      var g;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(g || (g = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function m(e, t, r) {
        void 0 === r && (r = "/");
        let n = T(("string" === typeof t ? h(t) : t).pathname || "/", r);
        if (null == n) return null;
        let a = v(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let r =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, r) => e === t[r]);
                  return r ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let i = null;
        for (let o = 0; null == i && o < a.length; ++o) i = A(a[o], _(n));
        return i;
      }
      function v(e, t, r, n) {
        void 0 === t && (t = []),
          void 0 === r && (r = []),
          void 0 === n && (n = "");
        let a = (e, a, i) => {
          let o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (u(
              o.relativePath.startsWith(n),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                n +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(n.length)));
          let l = U([n, o.relativePath]),
            c = r.concat(o);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            v(e.children, t, c, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: C(l, e.index), routesMeta: c });
        };
        return (
          e.forEach((e, t) => {
            var r;
            if ("" !== e.path && null != (r = e.path) && r.includes("?"))
              for (let n of b(e.path)) a(e, t, n);
            else a(e, t);
          }),
          t
        );
      }
      function b(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t,
          a = r.endsWith("?"),
          i = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [i, ""] : [i];
        let o = b(n.join("/")),
          l = [];
        return (
          l.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
          a && l.push(...o),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const S = /^:\w+$/,
        E = 3,
        w = 2,
        k = 1,
        L = 10,
        x = -2,
        F = (e) => "*" === e;
      function C(e, t) {
        let r = e.split("/"),
          n = r.length;
        return (
          r.some(F) && (n += x),
          t && (n += w),
          r
            .filter((e) => !F(e))
            .reduce((e, t) => e + (S.test(t) ? E : "" === t ? k : L), n)
        );
      }
      function A(e, t) {
        let { routesMeta: r } = e,
          n = {},
          a = "/",
          i = [];
        for (let o = 0; o < r.length; ++o) {
          let e = r[o],
            l = o === r.length - 1,
            c = "/" === a ? t : t.slice(a.length) || "/",
            u = N(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              c
            );
          if (!u) return null;
          Object.assign(n, u.params);
          let s = e.route;
          i.push({
            params: n,
            pathname: U([a, u.pathname]),
            pathnameBase: M(U([a, u.pathnameBase])),
            route: s,
          }),
            "/" !== u.pathnameBase && (a = U([a, u.pathnameBase]));
        }
        return i;
      }
      function N(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [r, n] = (function (e, t, r) {
            void 0 === t && (t = !1);
            void 0 === r && (r = !0);
            s(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let n = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:(\w+)(\?)?/g,
                    (e, t, r) => (
                      n.push({ paramName: t, isOptional: null != r }),
                      r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (n.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : r
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let i = new RegExp(a, t ? void 0 : "i");
            return [i, n];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(r);
        if (!a) return null;
        let i = a[0],
          o = i.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: n.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
              let e = l[r] || "";
              o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const c = l[r];
            return (
              (e[n] =
                a && !c
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (r) {
                        return (
                          s(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              r +
                              ")."
                          ),
                          e
                        );
                      }
                    })(c || "", n)),
              e
            );
          }, {}),
          pathname: i,
          pathnameBase: o,
          pattern: e,
        };
      }
      function _(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            s(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function T(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/";
      }
      function R(e, t, r, n) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(n) +
          "].  Please separate it out to the `to." +
          r +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function O(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function j(e, t) {
        let r = O(e);
        return t
          ? r.map((t, r) => (r === e.length - 1 ? t.pathname : t.pathnameBase))
          : r.map((e) => e.pathnameBase);
      }
      function P(e, t, r, n) {
        let a;
        void 0 === n && (n = !1),
          "string" === typeof e
            ? (a = h(e))
            : ((a = l({}, e)),
              u(
                !a.pathname || !a.pathname.includes("?"),
                R("?", "pathname", "search", a)
              ),
              u(
                !a.pathname || !a.pathname.includes("#"),
                R("#", "pathname", "hash", a)
              ),
              u(
                !a.search || !a.search.includes("#"),
                R("#", "search", "hash", a)
              ));
        let i,
          o = "" === e || "" === a.pathname,
          c = o ? "/" : a.pathname;
        if (null == c) i = r;
        else if (n) {
          let e =
            0 === t.length ? [] : t[t.length - 1].replace(/^\//, "").split("/");
          if (c.startsWith("..")) {
            let t = c.split("/");
            for (; ".." === t[0]; ) t.shift(), e.pop();
            a.pathname = t.join("/");
          }
          i = "/" + e.join("/");
        } else {
          let e = t.length - 1;
          if (c.startsWith("..")) {
            let t = c.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          i = e >= 0 ? t[e] : "/";
        }
        let s = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: r,
                search: n = "",
                hash: a = "",
              } = "string" === typeof e ? h(e) : e,
              i = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      let r = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? r.length > 1 && r.pop()
                            : "." !== e && r.push(e);
                        }),
                        r.length > 1 ? r.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: i, search: z(n), hash: D(a) };
          })(a, i),
          d = c && "/" !== c && c.endsWith("/"),
          f = (o || "." === c) && r.endsWith("/");
        return s.pathname.endsWith("/") || (!d && !f) || (s.pathname += "/"), s;
      }
      const U = (e) => e.join("/").replace(/\/\/+/g, "/"),
        M = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        z = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        D = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function I(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        B = (new Set(W), ["get", ...W]);
      new Set(B), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function H() {
        return (
          (H = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          H.apply(this, arguments)
        );
      }
      const $ = t.createContext(null);
      const V = t.createContext(null);
      const Q = t.createContext(null);
      const q = t.createContext(null);
      const K = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Y = t.createContext(null);
      function G() {
        return null != t.useContext(q);
      }
      function X() {
        return G() || u(!1), t.useContext(q).location;
      }
      function J(e) {
        t.useContext(Q).static || t.useLayoutEffect(e);
      }
      function Z() {
        let { isDataRoute: e } = t.useContext(K);
        return e
          ? (function () {
              let { router: e } = ue(le.UseNavigateStable),
                r = de(ce.UseNavigateStable),
                n = t.useRef(!1);
              return (
                J(() => {
                  n.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, H({ fromRouteId: r }, a)));
                  },
                  [e, r]
                )
              );
            })()
          : (function () {
              G() || u(!1);
              let e = t.useContext($),
                { basename: r, future: n, navigator: a } = t.useContext(Q),
                { matches: i } = t.useContext(K),
                { pathname: o } = X(),
                l = JSON.stringify(j(i, n.v7_relativeSplatPath)),
                c = t.useRef(!1);
              return (
                J(() => {
                  c.current = !0;
                }),
                t.useCallback(
                  function (t, n) {
                    if ((void 0 === n && (n = {}), !c.current)) return;
                    if ("number" === typeof t) return void a.go(t);
                    let i = P(t, JSON.parse(l), o, "path" === n.relative);
                    null == e &&
                      "/" !== r &&
                      (i.pathname =
                        "/" === i.pathname ? r : U([r, i.pathname])),
                      (n.replace ? a.replace : a.push)(i, n.state, n);
                  },
                  [r, a, l, o, e]
                )
              );
            })();
      }
      function ee(e, r) {
        let { relative: n } = void 0 === r ? {} : r,
          { future: a } = t.useContext(Q),
          { matches: i } = t.useContext(K),
          { pathname: o } = X(),
          l = JSON.stringify(j(i, a.v7_relativeSplatPath));
        return t.useMemo(
          () => P(e, JSON.parse(l), o, "path" === n),
          [e, l, o, n]
        );
      }
      function te(r, n, a, i) {
        G() || u(!1);
        let { navigator: o } = t.useContext(Q),
          { matches: l } = t.useContext(K),
          c = l[l.length - 1],
          s = c ? c.params : {},
          d = (c && c.pathname, c ? c.pathnameBase : "/");
        c && c.route;
        let f,
          p = X();
        if (n) {
          var y;
          let e = "string" === typeof n ? h(n) : n;
          "/" === d ||
            (null == (y = e.pathname) ? void 0 : y.startsWith(d)) ||
            u(!1),
            (f = e);
        } else f = p;
        let g = f.pathname || "/",
          v = m(r, { pathname: "/" === d ? g : g.slice(d.length) || "/" });
        let b = oe(
          v &&
            v.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: U([
                  d,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? d
                    : U([
                        d,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          l,
          a,
          i
        );
        return n && b
          ? t.createElement(
              q.Provider,
              {
                value: {
                  location: H(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    f
                  ),
                  navigationType: e.Pop,
                },
              },
              b
            )
          : b;
      }
      function re() {
        let e = (function () {
            var e;
            let r = t.useContext(Y),
              n = se(ce.UseRouteError),
              a = de(ce.UseRouteError);
            if (void 0 !== r) return r;
            return null == (e = n.errors) ? void 0 : e[a];
          })(),
          r = I(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, r),
          n ? t.createElement("pre", { style: i }, n) : null,
          null
        );
      }
      const ne = t.createElement(re, null);
      class ae extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                K.Provider,
                { value: this.props.routeContext },
                t.createElement(Y.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: r, match: n, children: a } = e,
          i = t.useContext($);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
          t.createElement(K.Provider, { value: r }, a)
        );
      }
      function oe(e, r, n, a) {
        var i;
        if (
          (void 0 === r && (r = []),
          void 0 === n && (n = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var o;
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let l = e,
          c = null == (i = n) ? void 0 : i.errors;
        if (null != c) {
          let e = l.findIndex(
            (e) => e.route.id && (null == c ? void 0 : c[e.route.id])
          );
          e >= 0 || u(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let s = !1,
          d = -1;
        if (n && a && a.v7_partialHydration)
          for (let t = 0; t < l.length; t++) {
            let e = l[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (d = t),
              e.route.loader &&
                e.route.id &&
                void 0 === n.loaderData[e.route.id] &&
                (!n.errors || void 0 === n.errors[e.route.id]))
            ) {
              (s = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
              break;
            }
          }
        return l.reduceRight((e, a, i) => {
          let o,
            u = !1,
            f = null,
            p = null;
          var h;
          n &&
            ((o = c && a.route.id ? c[a.route.id] : void 0),
            (f = a.route.errorElement || ne),
            s &&
              (d < 0 && 0 === i
                ? ((h = "route-fallback"),
                  !1 || fe[h] || (fe[h] = !0),
                  (u = !0),
                  (p = null))
                : d === i &&
                  ((u = !0), (p = a.route.hydrateFallbackElement || null))));
          let y = r.concat(l.slice(0, i + 1)),
            g = () => {
              let r;
              return (
                (r = o
                  ? f
                  : u
                  ? p
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(ie, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: y,
                    isDataRoute: null != n,
                  },
                  children: r,
                })
              );
            };
          return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === i)
            ? t.createElement(ae, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: o,
                children: g(),
                routeContext: { outlet: null, matches: y, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var le = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(le || {}),
        ce = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ce || {});
      function ue(e) {
        let r = t.useContext($);
        return r || u(!1), r;
      }
      function se(e) {
        let r = t.useContext(V);
        return r || u(!1), r;
      }
      function de(e) {
        let r = (function (e) {
            let r = t.useContext(K);
            return r || u(!1), r;
          })(),
          n = r.matches[r.matches.length - 1];
        return n.route.id || u(!1), n.route.id;
      }
      const fe = {};
      n.startTransition;
      function pe(e) {
        u(!1);
      }
      function he(r) {
        let {
          basename: n = "/",
          children: a = null,
          location: i,
          navigationType: o = e.Pop,
          navigator: l,
          static: c = !1,
          future: s,
        } = r;
        G() && u(!1);
        let d = n.replace(/^\/*/, "/"),
          f = t.useMemo(
            () => ({
              basename: d,
              navigator: l,
              static: c,
              future: H({ v7_relativeSplatPath: !1 }, s),
            }),
            [d, s, l, c]
          );
        "string" === typeof i && (i = h(i));
        let {
            pathname: p = "/",
            search: y = "",
            hash: g = "",
            state: m = null,
            key: v = "default",
          } = i,
          b = t.useMemo(() => {
            let e = T(p, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: y,
                    hash: g,
                    state: m,
                    key: v,
                  },
                  navigationType: o,
                };
          }, [d, p, y, g, m, v, o]);
        return null == b
          ? null
          : t.createElement(
              Q.Provider,
              { value: f },
              t.createElement(q.Provider, { children: a, value: b })
            );
      }
      function ye(e) {
        let { children: t, location: r } = e;
        return te(ge(t), r);
      }
      new Promise(() => {});
      t.Component;
      function ge(e, r) {
        void 0 === r && (r = []);
        let n = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let i = [...r, a];
            if (e.type === t.Fragment)
              return void n.push.apply(n, ge(e.props.children, i));
            e.type !== pe && u(!1), e.props.index && e.props.children && u(!1);
            let o = {
              id: e.props.id || i.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (o.children = ge(e.props.children, i)),
              n.push(o);
          }),
          n
        );
      }
      function me() {
        return (
          (me = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          me.apply(this, arguments)
        );
      }
      function ve(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const be = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      new Map();
      const Se = n.startTransition;
      o.flushSync;
      function Ee(e) {
        let { basename: r, children: n, future: a, window: i } = e,
          o = t.useRef();
        var l;
        null == o.current &&
          (o.current =
            (void 0 === (l = { window: i, v5Compat: !0 }) && (l = {}),
            y(
              function (e, t) {
                let { pathname: r, search: n, hash: a } = e.location;
                return f(
                  "",
                  { pathname: r, search: n, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : p(t);
              },
              null,
              l
            )));
        let c = o.current,
          [u, s] = t.useState({ action: c.action, location: c.location }),
          { v7_startTransition: d } = a || {},
          h = t.useCallback(
            (e) => {
              d && Se ? Se(() => s(e)) : s(e);
            },
            [s, d]
          );
        return (
          t.useLayoutEffect(() => c.listen(h), [c, h]),
          t.createElement(he, {
            basename: r,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: c,
            future: a,
          })
        );
      }
      const we =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Le = t.forwardRef(function (e, r) {
          let n,
            {
              onClick: a,
              relative: i,
              reloadDocument: o,
              replace: l,
              state: c,
              target: s,
              to: d,
              preventScrollReset: f,
              unstable_viewTransition: h,
            } = e,
            y = ve(e, be),
            { basename: g } = t.useContext(Q),
            m = !1;
          if ("string" === typeof d && ke.test(d) && ((n = d), we))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                r = T(t.pathname, g);
              t.origin === e.origin && null != r
                ? (d = r + t.search + t.hash)
                : (m = !0);
            } catch (S) {}
          let v = (function (e, r) {
              let { relative: n } = void 0 === r ? {} : r;
              G() || u(!1);
              let { basename: a, navigator: i } = t.useContext(Q),
                { hash: o, pathname: l, search: c } = ee(e, { relative: n }),
                s = l;
              return (
                "/" !== a && (s = "/" === l ? a : U([a, l])),
                i.createHref({ pathname: s, search: c, hash: o })
              );
            })(d, { relative: i }),
            b = (function (e, r) {
              let {
                  target: n,
                  replace: a,
                  state: i,
                  preventScrollReset: o,
                  relative: l,
                  unstable_viewTransition: c,
                } = void 0 === r ? {} : r,
                u = Z(),
                s = X(),
                d = ee(e, { relative: l });
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let r = void 0 !== a ? a : p(s) === p(d);
                    u(e, {
                      replace: r,
                      state: i,
                      preventScrollReset: o,
                      relative: l,
                      unstable_viewTransition: c,
                    });
                  }
                },
                [s, u, d, a, i, n, e, o, l, c]
              );
            })(d, {
              replace: l,
              state: c,
              target: s,
              preventScrollReset: f,
              relative: i,
              unstable_viewTransition: h,
            });
          return t.createElement(
            "a",
            me({}, y, {
              href: n || v,
              onClick:
                m || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: r,
              target: s,
            })
          );
        });
      var xe, Fe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(xe || (xe = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Fe || (Fe = {}));
      var Ce = r(184);
      const Ae = (e) => {
          let { filters: t, onFilterChange: r } = e;
          return (0, Ce.jsx)("div", {
            className: "DecadeWrap",
            children: t.map((e, t) =>
              (0, Ce.jsx)(
                "div",
                {
                  className: "DecadeWrapInner",
                  children: (0, Ce.jsxs)("div", {
                    className: "Decade",
                    children: [
                      (0, Ce.jsxs)("label", {
                        className: "switch",
                        htmlFor: "DecadeInput_".concat(t),
                        children: [
                          (0, Ce.jsx)("input", {
                            className: "DecadeInput",
                            id: "DecadeInput_".concat(t),
                            type: "checkbox",
                            value: e,
                            onChange: (t) => r(e, t.target.checked),
                          }),
                          " ",
                          (0, Ce.jsxs)("div", {
                            className: "button",
                            children: [
                              (0, Ce.jsx)("div", { className: "light" }),
                              (0, Ce.jsx)("div", { className: "dots" }),
                              (0, Ce.jsx)("div", { className: "characters" }),
                              (0, Ce.jsx)("div", { className: "shine" }),
                              (0, Ce.jsx)("div", { className: "shadow" }),
                            ],
                          }),
                        ],
                      }),
                      (0, Ce.jsx)("span", { className: "Param", children: e }),
                    ],
                  }),
                },
                e
              )
            ),
          });
        },
        Ne = (e) => {
          let { filters: t, onFilterChange: r } = e;
          return (0, Ce.jsx)("div", {
            className: "CharacterWrap",
            children: t.map((e, t) =>
              (0, Ce.jsxs)(
                "div",
                {
                  className: "Character",
                  children: [
                    (0, Ce.jsx)("input", {
                      className: "CharacterInput",
                      id: "CharacterInput_".concat(t),
                      type: "checkbox",
                      value: e,
                      onChange: (t) => r(e, t.target.checked),
                    }),
                    (0, Ce.jsx)("label", {
                      className: "CharacterLabel",
                      htmlFor: "CharacterInput_".concat(t),
                    }),
                    (0, Ce.jsx)("span", { className: "Param", children: e }),
                  ],
                },
                e
              )
            ),
          });
        },
        _e = (e) => {
          let { filters: t, onFilterChange: r } = e;
          return (0, Ce.jsx)("div", {
            className: "KeywordWrap",
            children: t.map((e, t) =>
              (0, Ce.jsxs)(
                "div",
                {
                  className: "Keyword",
                  children: [
                    (0, Ce.jsx)("span", { className: "Scope", children: "ON" }),
                    (0, Ce.jsx)("input", {
                      className: "KeywordInput",
                      id: "KeywordInput".concat(t),
                      type: "checkbox",
                      value: e,
                      onChange: (t) => r(e, t.target.checked),
                    }),
                    (0, Ce.jsx)("label", {
                      className: "KeywordLabel",
                      htmlFor: "KeywordInput".concat(t),
                    }),
                    (0, Ce.jsx)("span", { className: "Param", children: e }),
                  ],
                },
                e
              )
            ),
          });
        },
        Te = (e) => {
          let { filters: r, onFilterChange: n } = e;
          const [a, i] = (0, t.useState)([]);
          return (0, Ce.jsxs)("div", {
            className: "FilterDirector",
            children: [
              (0, Ce.jsx)("h3", {
                className: "subtitle",
                children: "DIRECTOR",
              }),
              (0, Ce.jsx)("div", {
                className: "carousel-container",
                id: "containerDirector",
                children: (0, Ce.jsx)("div", {
                  id: "carouselDirector",
                  className: "carousel",
                  children: r.map((e, t) =>
                    (0, Ce.jsx)(
                      "div",
                      {
                        className: "carousel-item ".concat(
                          a.includes(e) ? "selected" : ""
                        ),
                        children: (0, Ce.jsxs)("label", {
                          className: "DirectorLabel ".concat(
                            a.includes(e) ? "selected" : ""
                          ),
                          htmlFor: "DirectorInput".concat(t),
                          children: [
                            (0, Ce.jsx)("input", {
                              type: "checkbox",
                              value: e,
                              onChange: (t) =>
                                ((e, t) => {
                                  i(t ? [...a, e] : a.filter((t) => t !== e)),
                                    n(e, t);
                                })(e, t.target.checked),
                              id: "DirectorInput".concat(t),
                            }),
                            (0, Ce.jsx)("span", {
                              style: {
                                color: a.includes(e) ? "black" : "inherit",
                              },
                              children: e,
                            }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Re = (e) => {
          let { filters: r, onFilterChange: n } = e;
          const [a, i] = (0, t.useState)([]);
          return (0, Ce.jsxs)("div", {
            className: "FilterActor",
            children: [
              (0, Ce.jsx)("h3", { className: "subtitle", children: "ACTOR" }),
              (0, Ce.jsx)("div", {
                className: "carousel-container",
                id: "containerActor",
                children: (0, Ce.jsx)("div", {
                  id: "carouselActor",
                  className: "carousel",
                  children: r.map((e, t) =>
                    (0, Ce.jsx)(
                      "div",
                      {
                        className: "carousel-item ".concat(
                          a.includes(e) ? "selected" : ""
                        ),
                        children: (0, Ce.jsxs)("label", {
                          className: "ActorLabel ".concat(
                            a.includes(e) ? "selected" : ""
                          ),
                          htmlFor: "ActorInput".concat(t),
                          children: [
                            (0, Ce.jsx)("input", {
                              type: "checkbox",
                              value: e,
                              onChange: (t) =>
                                ((e, t) => {
                                  i(t ? [...a, e] : a.filter((t) => t !== e)),
                                    n(e, t);
                                })(e, t.target.checked),
                              id: "ActorInput".concat(t),
                            }),
                            (0, Ce.jsx)("span", {
                              style: {
                                color: a.includes(e) ? "black" : "inherit",
                              },
                              children: e,
                            }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Oe = (e) => {
          let { filters: r, onFilterChange: n } = e;
          const [a, i] = (0, t.useState)([]);
          return (0, Ce.jsxs)("div", {
            className: "FilterSource",
            children: [
              (0, Ce.jsx)("h3", { className: "subtitle", children: "SOURCE" }),
              (0, Ce.jsx)("div", {
                className: "carousel-container",
                id: "containerSource",
                children: (0, Ce.jsx)("div", {
                  id: "carouselSource",
                  className: "carousel",
                  children: r.map((e, t) =>
                    (0, Ce.jsx)(
                      "div",
                      {
                        className: "carousel-item ".concat(
                          a.includes(e) ? "selected" : ""
                        ),
                        children: (0, Ce.jsxs)("label", {
                          className: "SourceLabel ".concat(
                            a.includes(e) ? "selected" : ""
                          ),
                          htmlFor: "SourceInput".concat(t),
                          children: [
                            (0, Ce.jsx)("input", {
                              type: "checkbox",
                              value: e,
                              onChange: (t) =>
                                ((e, t) => {
                                  i(t ? [...a, e] : a.filter((t) => t !== e)),
                                    n(e, t);
                                })(e, t.target.checked),
                              id: "SourceInput".concat(t),
                            }),
                            (0, Ce.jsx)("span", {
                              style: {
                                color: a.includes(e) ? "black" : "inherit",
                              },
                              children: e,
                            }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        },
        je = (e) => {
          let { filters: r, onFilterChange: n } = e;
          const [a, i] = (0, t.useState)([]);
          return (0, Ce.jsxs)("div", {
            className: "FilterScenario",
            children: [
              (0, Ce.jsx)("h3", {
                className: "subtitle",
                children: "SCENARIO",
              }),
              (0, Ce.jsx)("div", {
                className: "carousel-container",
                id: "containerScenario",
                children: (0, Ce.jsx)("div", {
                  id: "carouselScenario",
                  className: "carousel",
                  children: r.map((e, t) =>
                    (0, Ce.jsx)(
                      "div",
                      {
                        className: "carousel-item ".concat(
                          a.includes(e) ? "selected" : ""
                        ),
                        children: (0, Ce.jsxs)("label", {
                          className: "ScenarioLabel ".concat(
                            a.includes(e) ? "selected" : ""
                          ),
                          htmlFor: "ScenarioInput".concat(t),
                          children: [
                            (0, Ce.jsx)("input", {
                              type: "checkbox",
                              value: e,
                              onChange: (t) =>
                                ((e, t) => {
                                  i(t ? [...a, e] : a.filter((t) => t !== e)),
                                    n(e, t);
                                })(e, t.target.checked),
                              id: "ScenarioInput".concat(t),
                            }),
                            (0, Ce.jsx)("span", {
                              style: {
                                color: a.includes(e) ? "black" : "inherit",
                              },
                              children: e,
                            }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Pe = (e) => {
          let { filters: r, onFilterChange: n } = e;
          const [a, i] = (0, t.useState)([]);
          return (0, Ce.jsxs)("div", {
            className: "FilterAdaptation",
            children: [
              (0, Ce.jsx)("h3", {
                className: "subtitle",
                children: "ADAPTATION",
              }),
              (0, Ce.jsx)("div", {
                className: "carousel-container",
                id: "containerAdaptation",
                children: (0, Ce.jsx)("div", {
                  id: "carouselAdaptation",
                  className: "carousel",
                  children: r.map((e, t) =>
                    (0, Ce.jsx)(
                      "div",
                      {
                        className: "carousel-item ".concat(
                          a.includes(e) ? "selected" : ""
                        ),
                        children: (0, Ce.jsxs)("label", {
                          className: "AdaptationLabel ".concat(
                            a.includes(e) ? "selected" : ""
                          ),
                          htmlFor: "AdaptationInput".concat(t),
                          children: [
                            (0, Ce.jsx)("input", {
                              type: "checkbox",
                              value: e,
                              onChange: (t) =>
                                ((e, t) => {
                                  i(t ? [...a, e] : a.filter((t) => t !== e)),
                                    n(e, t);
                                })(e, t.target.checked),
                              id: "AdaptationInput".concat(t),
                            }),
                            (0, Ce.jsx)("span", {
                              style: {
                                color: a.includes(e) ? "black" : "inherit",
                              },
                              children: e,
                            }),
                          ],
                        }),
                      },
                      e
                    )
                  ),
                }),
              }),
            ],
          });
        },
        Ue = (e) => {
          let {
            decades: t,
            characters: r,
            keywords: n,
            actors: a,
            directors: i,
            sources: o,
            scenarios: l,
            adaptations: c,
            activeFilters: u,
            handleFilterChange: s,
            handleReset: d,
            handleSizeChange: f,
            textSize: p,
            style1Checked: h,
            style2Checked: y,
            style3Checked: g,
            style4Checked: m,
            style5Checked: v,
            style6Checked: b,
            handleStyle1Change: S,
            handleStyle2Change: E,
            handleStyle3Change: w,
            handleStyle4Change: k,
            handleStyle5Change: L,
            handleStyle6Change: x,
          } = e;
          return (0, Ce.jsx)("section", {
            className: "Controller",
            children: (0, Ce.jsxs)("section", {
              className: "ContainerCtr",
              children: [
                (0, Ce.jsxs)("section", {
                  className: "CtrA",
                  children: [
                    (0, Ce.jsxs)("div", {
                      className: "DecadeSection",
                      children: [
                        (0, Ce.jsxs)("h3", {
                          className: "subtitle",
                          children: [
                            "DECADE",
                            (0, Ce.jsx)("br", {}),
                            "\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999",
                          ],
                        }),
                        (0, Ce.jsx)("div", {
                          className: "Decades filter-section",
                          children: (0, Ce.jsx)(Ae, {
                            filters: ["All", ...t],
                            onFilterChange: (e, t) => s("decade", e, t),
                          }),
                        }),
                      ],
                    }),
                    (0, Ce.jsx)("div", {
                      className: "CharacterSection",
                      children: (0, Ce.jsxs)("div", {
                        className: "filter-section",
                        children: [
                          (0, Ce.jsx)("h3", {
                            className: "subtitle",
                            children:
                              "CHARACTER \u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999",
                          }),
                          (0, Ce.jsx)(Ne, {
                            filters: r,
                            onFilterChange: (e, t) => s("character", e, t),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, Ce.jsx)("section", {
                  className: "CtrB",
                  children: (0, Ce.jsx)("div", {
                    className: "KeywordSection",
                    children: (0, Ce.jsxs)("div", {
                      className: "filter-section",
                      children: [
                        (0, Ce.jsx)("h3", {
                          className: "subtitle",
                          children:
                            "KEYWORD \u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999",
                        }),
                        (0, Ce.jsx)(_e, {
                          filters: n,
                          onFilterChange: (e, t) => s("keyword", e, t),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, Ce.jsxs)("section", {
                  className: "CtrC",
                  children: [
                    (0, Ce.jsx)("div", {
                      className: "filter-section",
                      children: (0, Ce.jsx)(Re, {
                        filters: a,
                        onFilterChange: (e, t) => s("actor", e, t),
                      }),
                    }),
                    (0, Ce.jsx)("div", {
                      className: "filter-section",
                      children: (0, Ce.jsx)(Te, {
                        filters: i,
                        onFilterChange: (e, t) => s("director", e, t),
                      }),
                    }),
                    (0, Ce.jsx)("div", {
                      className: "filter-section",
                      children: (0, Ce.jsx)(Oe, {
                        filters: o,
                        onFilterChange: (e, t) => s("source", e, t),
                      }),
                    }),
                    (0, Ce.jsx)("div", {
                      className: "filter-section",
                      children: (0, Ce.jsx)(je, {
                        filters: l,
                        onFilterChange: (e, t) => s("scenario", e, t),
                      }),
                    }),
                    (0, Ce.jsx)("div", {
                      className: "filter-section",
                      children: (0, Ce.jsx)(Pe, {
                        filters: c,
                        onFilterChange: (e, t) => s("adaptation", e, t),
                      }),
                    }),
                  ],
                }),
                (0, Ce.jsxs)("section", {
                  className: "CtrD",
                  children: [
                    (0, Ce.jsx)("div", {
                      className: "SwitchOuter",
                      children: (0, Ce.jsxs)("button", {
                        className: "BtnReset",
                        onClick: d,
                        children: [
                          (0, Ce.jsx)("div", {
                            className: "ResetIcon",
                            children: (0, Ce.jsx)("svg", {
                              width: "39",
                              height: "36",
                              viewBox: "0 0 149 126",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, Ce.jsx)("path", {
                                d: "M88.3592 0C72.3642 0.0197584 57.0298 6.38122 45.7178 17.6896C34.4059 28.9981 28.0397 44.3306 28.015 60.3256V88.3592L14.0075 74.3517L0 88.3592L37.2693 125.255L74.7066 88.3592L60.6991 74.3517L46.6916 88.3592V60.3443C46.6916 37.372 65.3776 18.6767 88.3592 18.6767C111.341 18.6767 130.027 37.3626 130.027 60.3443C130.022 66.142 128.808 71.875 126.464 77.1777C124.12 82.4803 120.696 87.2362 116.412 91.1421L129 104.953C135.201 99.293 140.155 92.4033 143.547 84.723C146.94 77.0428 148.696 68.7403 148.704 60.3443C148.684 44.346 142.32 29.0087 131.007 17.6963C119.695 6.3838 104.357 0.0197692 88.3592 0Z",
                                fill: "#888888",
                              }),
                            }),
                          }),
                          " ",
                          (0, Ce.jsx)("div", {
                            className: "ResetText",
                            children: "RESET",
                          }),
                        ],
                      }),
                    }),
                    (0, Ce.jsx)("div", {
                      className: "DesignEditor",
                      children: (0, Ce.jsxs)("div", {
                        className: "Editors",
                        children: [
                          (0, Ce.jsx)("h3", {
                            className: "subtitle",
                            children:
                              "Design Editor \u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999\u2999",
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: p,
                              }),
                              (0, Ce.jsx)("input", {
                                type: "range",
                                className: "EditorInput",
                                min: "20",
                                max: "200",
                                step: "1",
                                value: p,
                                onChange: f,
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: "0",
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Param",
                                children: "Size",
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: p,
                              }),
                              (0, Ce.jsx)("input", {
                                type: "range",
                                className: "EditorInput",
                                min: "20",
                                max: "200",
                                step: "1",
                                value: p,
                                onChange: f,
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: "0",
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Param",
                                children: "Size",
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: p,
                              }),
                              (0, Ce.jsx)("input", {
                                type: "range",
                                className: "EditorInput",
                                min: "20",
                                max: "200",
                                step: "1",
                                value: p,
                                onChange: f,
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: "0",
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Param",
                                children: "Size",
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: p,
                              }),
                              (0, Ce.jsx)("input", {
                                type: "range",
                                className: "EditorInput",
                                min: "20",
                                max: "200",
                                step: "1",
                                value: p,
                                onChange: f,
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Scope",
                                children: "0",
                              }),
                              (0, Ce.jsx)("span", {
                                className: "Param",
                                children: "Size",
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "\uba85\uc870\uccb4",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: h,
                                onChange: () => S(),
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "Style 2",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: y,
                                onChange: () => E(),
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "Style 3",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: g,
                                onChange: () => w(),
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "Style 4",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: m,
                                onChange: () => k(),
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "Style 5",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: v,
                                onChange: () => L(),
                              }),
                            ],
                          }),
                          (0, Ce.jsxs)("div", {
                            className: "Editor",
                            children: [
                              "Style 6",
                              " ",
                              (0, Ce.jsx)("input", {
                                type: "radio",
                                name: "fontStyle",
                                checked: b,
                                onChange: () => x(),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var Me = r(948),
        ze = r.n(Me);
      const De = (e) => {
          let {
            movies: r,
            textSize: n,
            style1Checked: a,
            style2Checked: i,
            style3Checked: o,
            style4Checked: l,
            style5Checked: c,
            style6Checked: u,
          } = e;
          const [s, d] = (0, t.useState)(0),
            [f, p] = (0, t.useState)(null),
            [h, y] = (0, t.useState)(!1);
          (0, t.useEffect)(() => {
            g();
          }, [r]);
          const g = () => {
              const e = document.querySelector(".TBodyTable");
              if (e) {
                const t = e.querySelectorAll("tr").length;
                d(t);
              }
            },
            m = () => {
              y(!1);
            },
            v = () => {
              let e = "";
              return (
                a
                  ? (e = "style-1")
                  : i
                  ? (e = "style-2")
                  : o
                  ? (e = "style-3")
                  : l
                  ? (e = "style-4")
                  : c
                  ? (e = "style-5")
                  : u && (e = "style-6"),
                "".concat("ListData Dialogue", " ").concat(e)
              );
            },
            b = async () => {
              let e = "<style>";
              return (
                (e +=
                  '\n    @font-face {\n      font-family: "Neutronic";\n      src: url("./print/NeutronicHangeul-Regularv0.3.woff2") format("woff2");\n    }\n    #printable-modal-content{\n      font-size: 100px;\n    }\n  '),
                a &&
                  (e +=
                    "\n      .style-1 p{\n        color: #ff0000; \n        font-family: 'Grandiflora One', cursive;\n\n      }\n    "),
                i &&
                  (e +=
                    "\n      .style-2 {\n        color: #00ff00;\n        font-family: 'Neutronic', san-serif;\n      }\n    "),
                o &&
                  (e +=
                    "\n      .style-3 p{\n        color: blue; \n        font-family: 'Grandiflora One', cursive;\n\n      }\n    "),
                a &&
                  (e +=
                    "\n      .style-4 p{\n        color: purple; \n        font-family: 'Grandiflora One', cursive;\n\n      }\n    "),
                a &&
                  (e +=
                    "\n      .style-5 p{\n        color: tomato; \n        font-family: 'Grandiflora One', cursive;\n\n      }\n    "),
                a &&
                  (e +=
                    "\n      .style-6 p{\n        color: navy;\n        font-family: 'Grandiflora One', cursive;\n\n      }\n    "),
                (e += "</style>"),
                e
              );
            };
          return (0, Ce.jsxs)("div", {
            className: "TableContainer",
            children: [
              (0, Ce.jsx)("table", {
                className: "TheadTable",
                children: (0, Ce.jsx)("thead", {
                  children: (0, Ce.jsxs)("tr", {
                    className: "indexContainer",
                    children: [
                      (0, Ce.jsx)("th", {
                        id: "indexYear",
                        className: "index",
                        children: "\uc5f0\ub3c4",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexMovie",
                        className: "index",
                        children: "\uc601\ud654\uc81c\ubaa9",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexDialogue",
                        className: "index",
                        children: "\ub300\uc0ac",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexActor",
                        className: "index",
                        children: "\ubc30\uc6b0",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexDirector",
                        className: "index",
                        children: "\uac10\ub3c5",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexSource",
                        className: "index",
                        children: "\uc6d0\uc791",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexScenario",
                        className: "index",
                        children: "\uac01\ubcf8",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexAdaptation",
                        className: "index",
                        children: "\uac01\uc0c9",
                      }),
                      (0, Ce.jsx)("th", {
                        id: "indexClip",
                        className: "index",
                        children: "\ud074\ub9bd\uc601\uc0c1",
                      }),
                    ],
                  }),
                }),
              }),
              (0, Ce.jsx)("table", {
                className: "TBodyTable",
                children: (0, Ce.jsx)("tbody", {
                  className: "ListContainer",
                  children: r.map((e) =>
                    (0, Ce.jsxs)(
                      "tr",
                      {
                        onClick: () =>
                          ((e) => {
                            p(e), y(!0);
                          })(e),
                        children: [
                          (0, Ce.jsx)("td", {
                            className: "ListData Year",
                            children: e.year,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Movie",
                            children: e.title,
                          }),
                          (0, Ce.jsx)("td", {
                            className: v(),
                            style: { fontSize: "".concat(n, "px") },
                            children: e.dialogue,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Actor",
                            children: e.actor,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Director",
                            children: e.director,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Source",
                            children: e.source,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Scenario",
                            children: e.scenario,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Adaptation",
                            children: e.adaptation,
                          }),
                          (0, Ce.jsx)("td", {
                            className: "ListData Clip",
                            children: e.clip,
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              }),
              0 === s &&
                (0, Ce.jsx)("p", {
                  className: "DataResult",
                  children:
                    "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
                }),
              s > 0 &&
                (0, Ce.jsxs)("p", {
                  className: "DataResult",
                  children: [
                    "\uac80\uc0c9 \uacb0\uacfc: ",
                    s,
                    " \uac1c\uc758 \ub370\uc774\ud130",
                  ],
                }),
              (0, Ce.jsxs)(ze(), {
                isOpen: h,
                onRequestClose: m,
                contentLabel: "Movie Detail Modal",
                style: {
                  content: {
                    background: "black",
                    width: "50vw",
                    height: "60vh",
                    margin: "auto",
                    zIndex: 1e6,
                  },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 999,
                  },
                },
                children: [
                  (0, Ce.jsx)("button", {
                    className: "CloseButton",
                    onClick: m,
                    children: "Close",
                  }),
                  f &&
                    (0, Ce.jsx)("div", {
                      id: "printable-modal-content",
                      children: (0, Ce.jsxs)(
                        Le,
                        {
                          to: "/",
                          children: [
                            (0, Ce.jsx)("h2", {
                              className: "ModalTitle",
                              children: f.title,
                            }),
                            (0, Ce.jsxs)("p", {
                              className: "ModalText",
                              children: ["Year: ", f.year],
                            }),
                            (0, Ce.jsx)("p", {
                              style: { fontSize: "40px" },
                              className: v(),
                              children: f.dialogue,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.actor,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.director,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.source,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.scenario,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.adaptation,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.clip,
                            }),
                            (0, Ce.jsx)("p", {
                              className: "ModalText",
                              children: f.commentary,
                            }),
                          ],
                        },
                        f.id
                      ),
                    }),
                  (0, Ce.jsx)("button", {
                    className: "PrintButton",
                    onClick: async () => {
                      if (document.getElementById("printable-modal-content")) {
                        const e = window.open("", "_blank");
                        e.document.write(
                          '<link rel="stylesheet" href="/print/Print.css" type="text/css" />'
                        );
                        const t = await b();
                        if (
                          (e.document.write("<html><head><title>Print</title>"),
                          e.document.write(t),
                          e.document.write(
                            " <link rel='preconnect' href='https://fonts.googleapis.com'>"
                          ),
                          e.document.write(
                            "    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>"
                          ),
                          e.document.write(
                            " <link href='https://fonts.googleapis.com/css2?family=Grandiflora+One&display=swap' rel='stylesheet'>"
                          ),
                          e.document.write(
                            "  <link rel='stylesheet' href='./NectoMono-Regular.woff2' type='font/woff2' />"
                          ),
                          e.document.write("</head><body>"),
                          f)
                        ) {
                          const t = a
                            ? "style-1"
                            : i
                            ? "style-2"
                            : o
                            ? "style-3"
                            : l
                            ? "style-4"
                            : c || c
                            ? "style-6"
                            : "";
                          e.document.write(
                            '<div id="printable-modal-content" class="'.concat(
                              t,
                              '">'
                            )
                          ),
                            e.document.write(
                              '<p style="font-size: 40px;">'.concat(
                                f.dialogue,
                                "</p>"
                              )
                            ),
                            e.document.write("</div>");
                        }
                        e.document.write("</body></html>"),
                          e.document.close(),
                          window.setTimeout(() => {
                            e.print();
                          }, 500);
                      }
                    },
                    children: "Print Modal Content",
                  }),
                ],
              }),
            ],
          });
        },
        Ie = (e) => {
          let {
            decades: t,
            characters: r,
            keywords: n,
            actors: a,
            directors: i,
            sources: o,
            scenarios: l,
            adaptations: c,
            commentary: u,
            activeFilters: s,
            handleFilterChange: d,
            handleReset: f,
            handleSizeChange: p,
            textSize: h,
            movies: y,
            style1Checked: g,
            style2Checked: m,
            style3Checked: v,
            style4Checked: b,
            style5Checked: S,
            style6Checked: E,
            handleStyle1Change: w,
            handleStyle2Change: k,
            handleStyle3Change: L,
            handleStyle4Change: x,
            handleStyle5Change: F,
            handleStyle6Change: C,
          } = e;
          return (0, Ce.jsxs)(Ce.Fragment, {
            children: [
              (0, Ce.jsx)(Ue, {
                decades: t,
                characters: r,
                keywords: n,
                actors: a,
                directors: i,
                sources: o,
                scenarios: l,
                adaptations: c,
                commentary: u,
                activeFilters: s,
                handleFilterChange: d,
                handleReset: f,
                handleSizeChange: p,
                textSize: h,
                style1Checked: g,
                style2Checked: m,
                style3Checked: v,
                style4Checked: b,
                style5Checked: S,
                style6Checked: E,
                handleStyle1Change: w,
                handleStyle2Change: k,
                handleStyle3Change: L,
                handleStyle4Change: x,
                handleStyle5Change: F,
                handleStyle6Change: C,
              }),
              (0, Ce.jsx)("section", {
                className: "List",
                children: (0, Ce.jsx)("div", {
                  children: (0, Ce.jsx)(De, {
                    movies: y,
                    textSize: h,
                    style1Checked: g,
                    style2Checked: m,
                    style3Checked: v,
                    style4Checked: b,
                    style5Checked: S,
                    style6Checked: E,
                    handleStyle1Change: w,
                    handleStyle2Change: k,
                    handleStyle3Change: L,
                    handleStyle4Change: x,
                    handleStyle5Change: F,
                    handleStyle6Change: C,
                  }),
                }),
              }),
            ],
          });
        },
        We = [
          {
            id: 1,
            year: 1954,
            title: "\uc6b4\uba85\uc758 \uc190",
            dialogue:
              "\u201c\uc120\uc0dd\ub2d8\uc740 \uc81c \ub9c8\uc220\uc5d0 \uac78\ub9b0 \uac70\uc608\uc694.\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\uc724\uc778\uc790",
            director: "\ud55c\ud615\ubaa8",
            scenario: "\uae40\uc131\ubbfc",
            clip: "TRUE",
            commentary: "\ud14c\uc2a4\ud2b8 \ud574\uc124 \uc785\ub2c8\ub2e4.",
          },
          {
            id: 2,
            year: 1956,
            title: "\uc790\uc720\ubd80\uc778",
            dialogue:
              "\u201c\ubb50\ub4e0\uc9c0 \ucd5c\uace0\uae09\ud488\uc73c\ub85c \uc801\ub2f9\ud788 \uc8fc\uc2ed\uc2dc\uc624... \ucd5c\uace0\uae09\ud488\uc785\ub2c8\uae4c?\u201d",
            keyword: "\ud5c8\uc138 \uc138\ud0dc",
            actor: "\uc8fc\uc120\ud0dc",
            director: "\ud55c\ud615\ubaa8",
            source: "\uc815\ube44\uc11d",
            adaptation: "\uae40\uc131\ubbfc, \uc774\uccad\uae30",
            clip: "TRUE",
          },
          {
            id: 3,
            year: 1958,
            title: "\uc9c0\uc625\ud654",
            dialogue:
              "\u201c\ub3d9\uc2dd \uc528, \uc800 \uac19\uc740 \uac83\ub3c4 \uc2dc\uace8 \uac00\uc11c \uc0b4 \uc218 \uc788\uc744\uae4c\uc694.\u201d",
            character: "\uc9c1\uc5c5 \uc5ec\uc131",
            actor: "\uac15\uc120\ud76c",
            director: "\uc2e0\uc0c1\uc625",
            scenario: "\uc774\uc815\uc120",
            clip: "TRUE",
          },
          {
            id: 4,
            year: 1960,
            title: "\ubc15\uc11c\ubc29",
            dialogue:
              "\u201c\uc790\uc2dd, \uc138\ub3c4 \uc88b\ub2e4. \uc9d6\uc5b4\ub77c \uc784\ub9c8! \ub108\ub3c4 \uba85\ubb38\uc758 \uc790\uc2dd\uc774\ub0d0?\u201d",
            keyword: "\uc138\ud0dc",
            actor: "\uae40\uc2b9\ud638",
            director: "\uac15\ub300\uc9c4",
            source: "\uae40\uc601\uc218",
            adaptation: "\uc870\ub0a8\uc0ac",
            clip: "TRUE",
          },
          {
            id: 5,
            year: 1960,
            title: "\ud558\ub140",
            dialogue:
              "\u201c\uc774 \uc9d1 \ub0a8\uc790\ub294 \uc560\ub97c \ubc30\uac8c \ud558\uace0, \uc774 \uc9d1 \uc5ec\uc790\ub294 \uc560\ub97c \ub5bc\uac8c \ud558\uace0, \ub0b4 \ubab8\uc740 \uc7a5\ub09c\uac10\ucc98\ub7fc \ubb58 \ud574\ub3c4 \uc88b\uc544\uc694?\u201d",
            character: "\uc2dd\ubaa8",
            keyword: "\uacc4\uae09 \uac00\uc815",
            actor: "\uc774\uc740\uc2ec",
            director: "\uae40\uae30\uc601",
            scenario: "\uae40\uae30\uc601",
            clip: "TRUE",
          },
          {
            id: 6,
            year: 1961,
            title: "\ub9c8\ubd80",
            dialogue:
              "\u201c\uc774 \uc138\uc0c1\uc5d0 \ub9d0\uc5c6\uc774 \ub0a8\uc744 \ub3c4\uc640\uc8fc\ub294 \uc0ac\ub78c\ub3c4 \uc788\ub124? \uc624 \uc798 \uc654\ub2e4. \uc5b4, \uc6a9\uc544! \ub0b4 \uc774\uc81c, \ub108\ub97c \ub193\uce58\uc9c0 \uc54a\uc544.\u201d",
            character: "\uac00\uc7a5",
            actor: "\uae40\uc2b9\ud638",
            director: "\uac15\ub300\uc9c4",
            scenario: "\uc784\ud76c\uc7ac",
            clip: "TRUE",
          },
          {
            id: 7,
            year: 1961,
            title: "\uc0ac\ub791\ubc29 \uc190\ub2d8\uacfc \uc5b4\uba38\ub2c8",
            dialogue:
              "\u201c\uc120\uc0dd\ub2d8, \uba54\ub9c8\ub978 \ub098\ubb34\uc5d0 \ubd88\uc744 \uc9c0\ub974\uc9c0 \ub9c8\uc138\uc694. \uac77\uc7a1\uc744 \uc218 \uc5c6\uc774 \ud0c0\ub294 \ub0a0\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ub418\uaca0\uc5b4\uc694. \uc0dd\uac01\ub9cc \ud574\ub3c4 \ubb34\uc11c\uc6cc\uc694. \uc81c\uac90 \ub2e4\ub9cc \uc625\ud76c\uac00 \uc788\uc744 \ubfd0\uc785\ub2c8\ub2e4.\u201d",
            character: "\uacfc\ubd80",
            keyword: "\uc695\ub9dd",
            actor: "\ucd5c\uc740\ud76c",
            director: "\uc2e0\uc0c1\uc625",
            source: "\uc8fc\uc694\uc12d",
            adaptation: "\uc784\ud76c\uc7ac",
            clip: "TRUE",
          },
          {
            id: 8,
            year: 1961,
            title: "\uc624\ubc1c\ud0c4",
            dialogue: "\u201c\uac00\uc790... \uac00\uc790!\u201d",
            character: "\uac00\uc7a5",
            keyword: "    \ubd84\ub2e8",
            actor: "\ub178\uc7ac\uc2e0",
            director: "\uc720\ud604\ubaa9",
            source: "\uc774\ubc94\uc120",
            adaptation: "\uc774\uc885\uae30, \uc774\uc774\ub839",
            clip: "TRUE",
          },
          {
            id: 9,
            year: 1961,
            title: "\uc624\ubc1c\ud0c4",
            dialogue:
              "\u201c\uac00\uc790! \uae00\uc384 \uac00\uc81c\ub450. \uc544\ub4e4 \uad6c\uc2e4, \ub0a8\ud3b8 \uad6c\uc2e4, \uc560\ube44 \uad6c\uc2e4, \ud615 \uad6c\uc2e4, \uc624\ube60 \uad6c\uc2e4, \ub610 \uc0ac\ubb34\uc2e4 \uc11c\uae30 \uad6c\uc2e4, \ud574\uc57c \ud560 \uc77c\uc774 \ub108\ubb34 \ub9ce\uad6c\ub098. \uadf8\ub798 \ub09c \ub124 \ub9d0\ub300\ub85c \uc544\ub9c8 \uc870\ubb3c\uc8fc\uc758 \uc624\ubc1c\ud0c4\uc77c\uc9c0\ub3c4 \ubaa8\ub978\ub2e4.\u201d",
            keyword: " ",
            actor: "\uae40\uc9c4\uaddc",
            director: "\uc720\ud604\ubaa9",
            source: "\uc774\ubc94\uc120",
            adaptation: "\uc774\uc885\uae30, \uc774\uc774\ub839",
            clip: "FALSE",
          },
          {
            id: 10,
            year: 1961,
            title: "\uc0bc\ub4f1\uacfc\uc7a5",
            dialogue:
              "\u201c\uac00\uc871\uc774\ub780 \ud569\uc2b9 \ud0dd\uc2dc\uc5d0 \ud0c0\uace0 \uc788\ub294 \uc190\ub2d8 \uac19\uc740 \uac70\uc57c.\u201d",
            keyword: "\uac00\uc871",
            actor: "\uae40\uc2b9\ud638",
            director: "\uc774\ubd09\ub798",
            scenario: "\uc804\ubc94\uc131",
            clip: "FALSE",
          },
          {
            id: 11,
            year: 1962,
            title: "\uc5ec\ud310\uc0ac",
            dialogue:
              "\u201c\uc5ec\uc131\uc73c\ub85c\uc11c   \ud65c\ub3d9\uc744 \ud560 \uacbd\uc6b0, \uc798\ubabb\ud558\uba74 \uc18c\ud640\ud558\uae30 \uc26c\uc6b4 \uac00\uc815\uc0dd\ud65c \uac19\uc740 \uac83\ub3c4 \uc911\uc694\ud558\uac8c \ub2e4\ub8e8\uc5b4\uc838\uc57c \ud560 \uac83\ub3c4 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4.\u201d",
            keyword: "\uc5ec\uc131 \uc131\uc5ed\ud560 \uac00\uc815",
            actor: "\ubb38\uc815\uc219",
            director: "\ud64d\uc740\uc6d0",
            scenario: "\ucd94\uc2dd",
            clip: "TRUE",
          },
          {
            id: 12,
            year: 1963,
            title: "\ub3cc\uc544\uc624\uc9c0 \uc54a\ub294 \ud574\ubcd1",
            dialogue:
              "\u201c\ub0b4\uac00 \uc5c6\uc73c\uba74 \ub204\uac00 \uc6c3\uaca8\uc8fc\ub2c8? \ub0b4\uac00 \uc6c3\uc73c\uba74... \uc774\ub807\uac8c \ub9d0\uc774\uc57c.\u201d",
            character: "\ubcd1\uc0ac",
            keyword: "\uc720\uc5b8 \uc804\uc7c1",
            actor: "\uad6c\ubd09\uc11c",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\uc7a5\uad6d\uc9c4",
            adaptation: "\uc720\ud55c\ucca0, \ud55c\uc6b0\uc815",
            clip: "TRUE",
          },
          {
            id: 13,
            year: 1963,
            title: "\ub610\uc21c\uc774: \ud589\ubcf5\uc758 \ud0c4\uc0dd",
            dialogue:
              "\u201c\ubd05\uc138, \uc6b0\ub9ac \ub458\uc774 \ud611\ub825\ud574\uc11c \uc0c8\ub098\ub77c \ucc28\ub97c \uc0ac\ubcf4\uc9c0 \uc544\ub2c8\ud558\uaca0\uc18c?\u201d",
            keyword: "\uc5ec\uc131 \uc131\uc5ed\ud560 \uc0ac\ud22c\ub9ac",
            actor: "\ub3c4\uae08\ubd09",
            director: "\ubc15\uc0c1\ud638",
            source: "\uae40\ud76c\ucc3d",
            scenario: "\uc720\uc77c\uc218",
            clip: "TRUE",
          },
          {
            id: 14,
            year: 1963,
            title: "\ub3cc\uc544\uc624\uc9c0 \uc54a\ub294 \ud574\ubcd1",
            dialogue:
              "\u201c\uc804\uc7a5\uc5d0\ub3c4 \uc591\uc9c0\ub294 \uc788\uad6c\ub098.\u201d",
            character: "\uad70\uc778",
            keyword: "\uc804\uc7c1",
            actor: "\uad6c\ubd09\uc11c",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\uc7a5\uad6d\uc9c4",
            adaptation: "\uc720\ud55c\ucca0, \ud55c\uc6b0\uc815",
            clip: "FALSE",
          },
          {
            id: 15,
            year: 1963,
            title: "\ub3cc\uc544\uc624\uc9c0 \uc54a\ub294 \ud574\ubcd1",
            dialogue:
              "\u201c\ub0b4\uac00 \uc798 \uc2f8\uc6b4\ub2e4\uba74 \uadf8\uac74 \uc0b4\uae30 \uc704\ud574\uc11c\ub2e4.\u201d",
            character: "\uad70\uc778",
            keyword: "\uc804\uc7c1",
            actor: "\uc7a5\ub3d9\ud718",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\uc7a5\uad6d\uc9c4",
            adaptation: "\uc720\ud55c\ucca0, \ud55c\uc6b0\uc815",
            clip: "FALSE",
          },
          {
            id: 16,
            year: 1964,
            title: "\uac80\uc740 \uba38\ub9ac",
            dialogue:
              "\u201c\uc545\uc740 \ub0b4\uac00 \uc120\ud0dd\ud55c \uac83\uc774 \uc544\ub2c8\uc57c. \ub0b4\uac8c \uc8fc\uc5b4\uc9c4 \uac70\uc57c.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\ubc94\uc8c4",
            actor: "\uc7a5\ub3d9\ud718",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\ucd94\ub0a8, \ud55c\uacbd\ud604",
            clip: "TRUE",
          },
          {
            id: 17,
            year: 1965,
            title: "\uac2f\ub9c8\uc744",
            dialogue:
              "\u201c\uc5ec\uae30\uc11c \uc0b4\ub798\uc608, \uc131\ub2d8\ub4e4\uacfc \uac19\uc774 \uc5ec\uae30\uc11c \uc0b4\ub78d\ub2c8\ub354.\u201d",
            character: "\uacfc\ubd80",
            keyword: "\uc5ec\uc131 \uc0ac\ud22c\ub9ac",
            actor: "\uace0\uc740\uc544",
            director: "\uae40\uc218\uc6a9",
            source: "\uc624\uc601\uc218",
            scenario: "\uc2e0\ubd09\uc2b9",
            clip: "TRUE",
          },
          {
            id: 18,
            year: 1966,
            title: "\ub9d0\ub760\uc2e0\ubd80",
            dialogue:
              "\u201c\uc6b0\ub9ac\ub4e4\uc740 \uac00\ub2a5\ud558\ub2e4\uba74 \uc194\uc120\ud574\uc11c \ub538\uc744 \ub0b3\uc558\uc73c\uba74 \ud558\ub294\ub370\uc694.\u201d",
            keyword: "\uc5ec\uc131 \uac00\uc815",
            actor: "\ud669\uc815\uc21c",
            director: "\uae40\uae30\ub355",
            scenario:
              "\uc774\ud615\ud45c, \uacfd\uc77c\ub85c, \uc11c\uc724\uc131",
            clip: "TRUE",
          },
          {
            id: 19,
            year: 1967,
            title: "\uc0b0\ubd88",
            dialogue:
              "\u201c\ub0b4\uac00 \ub300\ubc2d\uc5d0 \uac00\ub294 \ub0a0\uc740 \uc810\ub840 \ub2c8\ub294 \uc9d1\uc5d0 \uc788\uac70\ub77c, \uc774?\u201d",
            character: "\uacfc\ubd80",
            keyword: "\uc695\ub9dd \uc804\uc7c1 \uc5ec\uc131",
            actor: "\ub3c4\uae08\ubd09",
            director: "\uae40\uc218\uc6a9",
            source: "\ucc28\ubc94\uc11d",
            scenario: "\uc2e0\ubd09\uc2b9",
            clip: "TRUE",
          },
          {
            id: 20,
            year: 1967,
            title: "\uc5b4\ub290 \uc5ec\ubc30\uc6b0\uc758 \uace0\ubc31",
            dialogue:
              "\u201c\uc544\ubb34\ub9ac \uae30\ub2e4\ub9bc\uc758 \uc608\uc220\uc774\ub77c\uace0 \ud558\uc9c0\ub9cc \uc774\uac70 \uc548 \ub429\ub2c8\ub2e4. \uc2e0\uc778\uc774 \ub098\uc640\uc57c \ud574\uc694. \uc2e0\uc778\uc774 \ud64d\uc218\uac19\uc774 \ub098\uc640\uc57c \ub41c\ub2e4\uad6c\uc694.\u201d",
            keyword: "\uc601\ud654",
            actor: "\ud5c8\uc7a5\uac15",
            director: "\uae40\uc218\uc6a9",
            source: "\uc724\uc11d\uc8fc",
            scenario: "\uc2e0\ubd09\uc2b9",
            clip: "FALSE",
          },
          {
            id: 21,
            year: 1968,
            title: "\uc7a5\uad70\uc758 \uc218\uc5fc",
            dialogue:
              "\u201c\ub098\ub294 \ubc94\uc778\uc744 \ubcf4\uc558\ub2e4. \uadf8\ub294 \uc218\uac11\uc744 \ucc44\uc6b8 \uc218\ub3c4 \uc5c6\uace0 \ubc95\uc815\uc758 \ud53c\uace0\uc11d\uc5d0 \uc549\ud790 \uc218\ub3c4 \uc5c6\ub2e4. \uace0\ub3c5\uc774\ub77c\ub294 \ub188. \uadf8\ub188\uc740 \uac11\uc790\uae30 \ud749\uae30\ub97c \ub4e4\uace0 \uc0ac\ub78c\uc744 \ucc0c\ub978\ub2e4.\u201d",
            character: "\ud615\uc0ac",
            keyword: "\uace0\ub3c5",
            actor: "\uae40\uc2b9\ud638",
            director: "\uc774\uc131\uad6c",
            source: "\uc774\uc5b4\ub839",
            adaptation: "\uae40\uc2b9\uc625",
            clip: "TRUE",
          },
          {
            id: 22,
            year: 1968,
            title: "\ud734\uc77c",
            dialogue:
              "\u201c... \uc774\uc81c \uace7 \ub0a0\uc774 \ubc1d\uaca0\uc9c0, \uc0c8\ubcbd\uc774 \uc624\uaca0\uc9c0, \uac70\ub9ac\ub85c \ub098\uac08\uae4c? \uc0ac\ub78c\ub4e4\uc744 \ub9cc\ub0a0\uae4c? \ucee4\ud53c\ub97c \ub9c8\uc2e4\uae4c? \uc544\ub2c8 \uc774\ubc1c\uad00\uc744 \uac00\uc57c\uc9c0, \uba38\ub9ac\ubd80\ud130 \uae4e\uc544\uc57c\uc9c0, \uba38\ub9ac\ubd80\ud130 \uae4e\uc544\uc57c\uc9c0.\u201d",
            keyword: "\uace0\ub3c5",
            actor: "\uc2e0\uc131\uc77c",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\ubc31\uacb0",
            clip: "TRUE",
          },
          {
            id: 23,
            year: 1971,
            title: "\ud654\ub140",
            dialogue:
              "\u201c31\uce35? \ub5a8\uc5b4\uc838 \uc8fd\uae30 \ud3b8\ub9ac\ud558\uaca0\ub2e4.\u201d",
            character: "\uc2dd\ubaa8",
            actor: "\uc724\uc5ec\uc815",
            director: "\uae40\uae30\uc601",
            scenario: "\uae40\uae30\uc601",
            clip: "TRUE",
          },
          {
            id: 24,
            year: 1972,
            title: "04:00-1950-",
            dialogue:
              "\u201c\uae34\uc7a5\uc740 \ub124\uac00 \ud558\uace0 \uc788\uc5b4. \ub098\ub294 \ub2e4\ub9cc \uc870\uc6a9\ud560 \ubfd0\uc774\uc57c.\u201d",
            character: "\uad70\uc778",
            keyword: "\uc804\uc7c1",
            actor: "\uae40\uc131\uc625",
            director: "\uc774\ub9cc\ud76c",
            scenario: "\uc774\ub9cc\ud76c",
            adaptation: "\uc774\ud76c\uc6b0",
            clip: "FALSE",
          },
          {
            id: 25,
            year: 1974,
            title: "\ubcc4\ub4e4\uc758 \uace0\ud5a5",
            dialogue:
              "\u201c\uc624\ub79c\ub9cc\uc5d0 \uac19\uc774 \ub204\uc6cc\ubcf4\ub294\uad70.\u201d",
            keyword: "\ubc08",
            actor: "\uc2e0\uc131\uc77c",
            director: "\uc774\uc7a5\ud638",
            source: "\ucd5c\uc778\ud638",
            adaptation: "\uc774\ud76c\uc6b0",
            clip: "TRUE",
          },
          {
            id: 26,
            year: 1975,
            title: "\ubc14\ubcf4\ub4e4\uc758 \ud589\uc9c4",
            dialogue:
              "\u201c\uc9c0\uae08\ubd80\ud130 \uad50\ub0b4 \ubc29\uc1a1\uc744 \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud558\ub098 \ub458 \uc14b \ub137, \ub4e4\ub9bd\ub2c8\uae4c? \ub4e4\ub9bd\ub2c8\uae4c? \ub4e4\ub9bd\ub2c8\uae4c! \ub4e4\ub9bd\ub2c8\uae4c!\u201d",
            keyword: "  \ub0b4\ub808\uc774\uc158",
            actor: "\uc724\ubb38\uc12d",
            director: "\ud558\uae38\uc885",
            source: "\ucd5c\uc778\ud638",
            scenario: "\ucd5c\uc778\ud638",
            clip: "TRUE",
          },
          {
            id: 27,
            year: 1975,
            title: "\uc0bc\ud3ec \uac00\ub294 \uae38",
            dialogue:
              "\u201c\uc0ac\uc2e4\uc740 \ub098, \ub0a8\uc790\ub4e4 \ub9ce\uc774 \uac70\uce58\uc9c0 \uc54a\uc558\ub2e8 \ub9d0\uc774\uc57c. \uba87 \uba85 \uc548 \ub3fc.\u201d",
            character: "\uc9c1\uc5c5 \uc5ec\uc131",
            actor: "\ubb38\uc219",
            director: "\uc774\ub9cc\ud76c",
            source: "\ud669\uc11d\uc601",
            scenario: "\uc720\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 28,
            year: 1976,
            title: "\ub85c\ubcf4\ud2b8 \ud0dc\uad8c V",
            dialogue:
              "\u201c\uc6b0\ub9b0 \ud601\uba85\uc744 \uc77c\uc73c\ud0a4\uae30 \uc704\ud574\uc11c \ub85c\ubcf4\ud2b8\ub97c \uac1c\ubc1c\ud558\ub294 \uac8c \uc544\ub2c8\uc57c!\u201d",
            director: "\uae40\uccad\uae30",
            scenario: "\uc9c0\uc0c1\ud559",
            clip: "TRUE",
          },
          {
            id: 29,
            year: 1977,
            title: "\uace0\uad50\uc584\uac1c",
            dialogue:
              "\u201c\uc544\uae30\ub2e4\ub9ac \uace0\uae30\ub2e4\ub9ac \ub358\ub370\uc774\ud2b8!\u201d",
            character: "\ud559\uc0dd",
            keyword: "\ubc08 \uc5b8\uc5b4\uc720\ud76c",
            actor: "\uc774\uc2b9\ud604",
            director: "\uc11d\ub798\uba85",
            source: "\uc870\ud754\ud30c",
            adaptation: "\uc724\uc0bc\uc721",
            clip: "TRUE",
          },
          {
            id: 30,
            year: 1978,
            title: "\uc0b4\uc778\ub098\ube44\ub97c \ucad3\ub294 \uc5ec\uc790",
            dialogue:
              "\u201c\uc548 \uc8fd\ub294\ub2e4. \ub09c \uc548 \uc8fd\uc5b4. \uc758\uc9c0\ub2e4. \uc758\uc9c0\ub2e4! \uc758\uc9c0\uc57c!\u201d",
            actor: "\uc5ec\ud3ec",
            director: "\uae40\uae30\uc601",
            scenario: "\uc774\ubb38\uc6c5",
            clip: "TRUE",
          },
          {
            id: 31,
            year: 1981,
            title: "\uc5b4\ub460\uc758 \uc790\uc2dd\ub4e4",
            dialogue:
              "\u201c\uce74\uc218\uc57c, \uc190\ub2d8 \ubc1b\uc544\ub77c!\u201d",
            character: "\uc9c1\uc5c5 \uc5ec\uc131",
            actor: "\ubcf4\uc774\uc2a4\uc624\ubc84",
            director: "\uc774\uc7a5\ud638",
            source: "\ud669\uc11d\uc601",
            scenario: "\uc774\uc7a5\ud638",
            clip: "FALSE",
          },
          {
            id: 32,
            year: 1982,
            title: "\uc560\ub9c8\ubd80\uc778",
            dialogue: "\u201c\uc774\ud63c\ud574 \uc8fc\uc138\uc694.\u201d",
            character: "\ubd80\uc778",
            keyword: "\uac00\uc815 \uc695\ub9dd",
            actor: "\uc548\uc18c\uc601",
            director: "\uc815\uc778\uc5fd",
            scenario: "\uc774\ubb38\uc6c5",
            clip: "TRUE",
          },
          {
            id: 33,
            year: 1982,
            title: "\uaf2c\ubc29\ub3d9\ub124 \uc0ac\ub78c\ub4e4",
            dialogue:
              "\u201c\uc65c \uc774\ub798\uc694? \ub2f9\uc2e0\ub124 \ub0a8\uc790\ub4e4 \uc65c \uc774\ub7ec\ub294 \uac70\uc608\uc694. \ub0b4 \uc544\uc774\ub97c \uac00\uc9c0\uace0 \ubb34\uc2a8 \uad8c\ub9ac\ub85c \ub2f9\uc2e0\ub124 \ub9d8\ub300\ub85c \ud558\ub294 \uac70\uc608\uc694?\u201d",
            keyword: "\uc5ec\uc131",
            actor: "\uae40\ubcf4\uc5f0",
            director: "\ubc30\ucc3d\ud638",
            source: "\uc774\ub3d9\ucca0",
            scenario: "\ubc30\ucc3d\ud638",
            clip: "FALSE",
          },
          {
            id: 34,
            year: 1983,
            title: "\ubc14\ubcf4\uc120\uc5b8",
            dialogue:
              "\u201c\ubaa8\ub450\ub4e4 \uc2a4\ud3ec\uce20\uc5d0\ub9cc \uad00\uc2ec\uc774 \ub9ce\uc558\uc2b5\ub2c8\ub2e4. \uc601\ud654\uac10\ub3c5\uc740 \ud63c\uc790\uc11c \uc8fd\uc5b4\ubc84\ub838\uc2b5\ub2c8\ub2e4.\u201d",
            keyword: "  \uc601\ud654 \ub0b4\ub808\uc774\uc158",
            director: "\uc774\uc7a5\ud638",
            source: "\uc774\ub3d9\ucca0",
            scenario: "\uc724\uc2dc\ubaac",
            clip: "TRUE",
          },
          {
            id: 35,
            year: 1984,
            title: "\uace0\ub798\uc0ac\ub0e5",
            dialogue:
              "\u201c\uace0\ub798\ub294 \ub0b4 \ub9c8\uc74c\uc18d\uc5d0 \uc788\uc5c8\uc5b4\uc694.\u201d",
            actor: "\uae40\uc218\ucca0",
            director: "\ubc30\ucc3d\ud638",
            source: "\ucd5c\uc778\ud638",
            scenario: "\ucd5c\uc778\ud638",
            clip: "TRUE",
          },
          {
            id: 36,
            year: 1985,
            title: "\uae4a\uace0 \ud478\ub978 \ubc24",
            dialogue:
              "\u201c\ub2f9\uc2e0\uc740 \ub0b4 \ub9c8\uc9c0\ub9c9 \ub0a8\ud3b8\uc774 \ub420 \uac70\uc608\uc694.\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\uc7a5\ubbf8\ud76c",
            director: "\ubc30\ucc3d\ud638",
            source: "\ucd5c\uc778\ud638",
            scenario: "\ucd5c\uc778\ud638",
            clip: "TRUE",
          },
          {
            id: 37,
            year: 1986,
            title: "\uc774\uc7a5\ud638\uc758 \uc678\uc778\uad6c\ub2e8",
            dialogue:
              "\u201c\ub09c \ub2c8\uac00 \uae30\ubed0\ud558\ub294 \uc77c\uc774\ub77c\uba74 \ubb34\uc5c7\uc774\ub4e0\uc9c0 \ud55c\ub2e4.\u201d",
            keyword: "\uc0ac\ub791 \uc21c\uc560\ubcf4",
            actor: "\ucd5c\uc7ac\uc131",
            director: "\uc774\uc7a5\ud638",
            source: "\uc774\ud604\uc138",
            scenario: "\uc9c0\uc0c1\ud559",
            clip: "TRUE",
          },
          {
            id: 38,
            year: 1987,
            title: "\uae30\uc05c \uc6b0\ub9ac \uc80a\uc740 \ub0a0",
            dialogue:
              "\u201c\uc5b4\ub514\uac00 \uadf8\ub807\uac8c \uc88b\uc73c\uc138\uc694?\u201d \u201c\uc804\ubd80 \ub2e4\uc694.\u201d",
            keyword: "\uc0ac\ub791 \uc21c\uc560\ubcf4",
            actor: "\ud669\uc2e0\ud61c, \uc548\uc131\uae30",
            director: "\ubc30\ucc3d\ud638",
            scenario: "\ubc30\ucc3d\ud638, \uc774\uba85\uc138",
            clip: "TRUE",
          },
          {
            id: 39,
            year: 1988,
            title: "\uac1c\uadf8\ub9e8",
            dialogue:
              "\u201c... \ud558\ub098\ubc16\uc5d0 \uc5c6\ub294 \ub0b4 \ub3d9\uc0dd \uc625\ud76c\ub97c \ud658\ub77d\uac00\uc5d0 \ud314\uc544 \ub118\uae34 \uac83\ub3c4 \uc6a9\uc11c\ud560 \uc218 \uc788\uc5c8\ub2e4. \uadf8\ub7ec\ub098, \uc0ac\ub098\uc774\uc758 \uad73\uc740 \uc758\ub9ac\ub97c \ubc30\ubc18\ud55c \uac83\ub9cc\ud07c\uc740 \uc6a9\uc11c\ud560 \uc218 \uc5c6\uc5c8\ub2e4. \uc0c1\ud558\uc774 \ubc15! \uc5b4\uc11c \uce7c\uc744 \ube7c\ub77c!\u201d",
            keyword: "\uc601\ud654",
            actor: "\ubc30\ucc3d\ud638",
            director: "\uc774\uba85\uc138",
            scenario: "\uc774\uba85\uc138, \ubc30\ucc3d\ud638",
            clip: "TRUE",
          },
          {
            id: 40,
            year: 1988,
            title: "\uce60\uc218\uc640 \ub9cc\uc218",
            dialogue:
              "\u201c\uc0ac\ub78c\uc740 \uc54c\uace0 \ubcf4\uba74 \uc548 \ub3fc. \ubcf4\uace0 \uc54c\uc544\uc57c\uc9c0.\u201d",
            keyword: "   ",
            actor: "\uc548\uc131\uae30",
            director: "\ubc15\uad11\uc218",
            source: "\uc624\uc885\uc6b0",
            scenario: "\ucd5c\uc778\uc11d",
            adaptation: "\uc9c0\uc0c1\ud559, \uc774\uc0c1\uc6b0",
            clip: "TRUE",
          },
          {
            id: 41,
            year: 1989,
            title: "\uc601\uad6c\uc640 \ub561\uce60\uc774",
            dialogue:
              "\u201c\uc5b4\ub9b0\uc774 \uc5ec\ub7ec\ubd84, \uc6b0\ub9ac \ubaa8\ub450 \uc601\uad6c\ub97c \ubd88\ub7ec\ubd05\uc2dc\ub2e4. \ud558\ub098 \ub458 \uc14b, \uc601\uad6c\uc57c!\u201d",
            director: "\ub0a8\uae30\ub0a8",
            scenario: "\uc7a5\ub355\uade0",
            clip: "TRUE",
          },
          {
            id: 42,
            year: 1989,
            title:
              "\ud589\ubcf5\uc740 \uc131\uc801\uc21c\uc774 \uc544\ub2c8\uc796\uc544\uc694",
            dialogue:
              "\u201c\ud589\ubcf5\uc740 \uacb0\ucf54 \uc131\uc801\uc21c\uc774 \uc544\ub2c8\uc796\uc544\uc694?\u201d",
            character: "\ud559\uc0dd",
            keyword: "  \uc720\uc5b8 \uad50\uc721 \ud559\uad50 \ubc18\ubb38",
            actor: "\uc774\ubbf8\uc5f0",
            director: "\uac15\uc6b0\uc11d",
            scenario: "\uae40\uc131\ud64d",
            clip: "TRUE",
          },
          {
            id: 43,
            year: 1990,
            title: "\uc6b0\ubb35\ubc30\ubbf8\uc758 \uc0ac\ub791",
            dialogue:
              "\u201c\uc88b\uc740 \ub0a8\uc790\ub791 \uc606\uc5d0 \uc788\ub294\ub370, \ub9de\uc544 \uc8fd\uc73c\uba74 \uc5b4\ub54c\uc694. \uadf8 \uc815\ub3c4 \uac01\uc624\ub294 \ud588\uc5b4\uc694\u201d",
            keyword: "\uc678\ub3c4",
            actor: "\ucd5c\uba85\uae38",
            director: "\uc7a5\uc120\uc6b0",
            source: "\ubc15\uc601\ud55c",
            scenario: "\uc7a5\uc120\uc6b0, \uc784\uc885\uc7ac",
            clip: "FALSE",
          },
          {
            id: 44,
            year: 1991,
            title: "\uacbd\ub9c8\uc7a5 \uac00\ub294 \uae38",
            dialogue:
              "\u201c\ub108\uc758 \uc774\ub7ec\ud55c \ud589\ub3d9\uc758 \uc774\ub370\uc62c\ub85c\uae30\ub294 \ubb50\ub0d0?\u201d",
            keyword: "  \uc139\uc2a4",
            actor: "\ubb38\uc131\uadfc",
            director: "\uc7a5\uc120\uc6b0",
            source: "\ud558\uc77c\uc9c0",
            adaptation: "\ud558\uc77c\uc9c0",
            clip: "TRUE",
          },
          {
            id: 45,
            year: 1992,
            title:
              "\uc6b0\ub9ac\ub4e4\uc758 \uc77c\uadf8\ub7ec\uc9c4 \uc601\uc6c5",
            dialogue:
              "\u201c\ub108\ud76c\ub4e4\uc740 \ub2f9\uc5f0\ud55c \ub108\ud76c \ubaab\uc744 \ube8f\uae30\uace0\ub3c4 \ubd84\ud55c \uc904 \ubab0\ub790\uace0, \ub610 \ubd88\uc758 \uc55e\uc5d0 \uad74\ubcf5\ud558\uace0\ub3c4 \ubd80\ub044\ub7ec\uc6b4 \uc904 \ubab0\ub790\uc5b4. \uadf8\ub7f0 \ub108\ud76c\ub4e4\uc774 \uc55e\uc73c\ub85c \uc5b4\ub978\uc774 \ub3fc\uc11c \ub9cc\ub4e4 \uc138\uc0c1\uc740 \uc0c1\uc0c1\ub9cc \ud574\ub3c4 \ub054\ucc0d\ud574.\u201d",
            keyword: " ",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\ubc15\uc885\uc6d0",
            source: "\uc774\ubb38\uc5f4",
            scenario: "\uc7a5\ud604\uc218, \ubc15\uc885\uc6d0",
            clip: "FALSE",
          },
          {
            id: 46,
            year: 1993,
            title: "\ud22c\uce85\uc2a4",
            dialogue:
              "\u201c\uc790\ub124\uac00 \uc9c0\uae08\uae4c\uc9c0 \uc0b4\uc544\uc624\uba74\uc11c \ud558\ub298\uc744 \uc6b0\ub7ec\ub7ec \ud55c \uc810\uc758 \ubd80\ub044\ub7ec\uc6c0\uc774 \uc5c6\uac70\ub4e0 \ub098\ub97c \uccd0\ub77c.\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc548\uc131\uae30",
            director: "\uac15\uc6b0\uc11d",
            scenario: "\uae40\uc131\ud64d",
            clip: "TRUE",
          },
          {
            id: 47,
            year: 1994,
            title: "\uac8c\uc784\uc758 \ubc95\uce59",
            dialogue:
              "\u201c\uadf8 \ub2f4\uc5d0 \uc2f9 \uc2f8\uc774\ud310\uc73c\ub85c \ub728\ub294 \uac70\uc57c... \ud55c \ubc29\uc5d0 \ud06c\ub294 \uac70\uc57c, \uc81c\ub300\ub85c \ud55c \ubc29\uc5d0. \uc57c, \uc6b0\ub9ac\ub3c4 \ud3fc\ub098\uac8c \ud55c\ubc88 \uc0b4\uc544\ubcf4\uc790 \uc528\ubc1c, \ubca4\uce20 \ub531 \ub04c\uace0. \uc774\uac8c \uc9c4\uc9dc \uc2f8\ub098\uc774 \uc0ac\ub294 \uae38\uc57c.\u201d",
            character: "\uc870\ud3ed",
            actor: "\ubc15\uc911\ud6c8",
            director: "\uc7a5\ud604\uc218",
            scenario: "\uac15\uc81c\uaddc, \uc7a5\ud604\uc218",
            clip: "FALSE",
          },
          {
            id: 48,
            year: 1996,
            title: "\uc9c4\uc9dc \uc0ac\ub098\uc774",
            dialogue:
              "\u201c\ub098. \uac15\ucca0\ubcf4\ub2e4 \ub2e8\ub2e8\ud558\uace0 \ud654\uc0b0\ubcf4\ub2e4 \ub354 \ub728\uac70\uc6b4, \uc808\ub300\ub85c, \uc808\ub300\ub85c \uc774 \ub545\uc5d0 \uc18d\ud558\uc9c0 \uc54a\uc740 \ucd5c\ud6c4\uc758 \ucd94\uc7a5 \uac19\uc740 \ub098. \uc9c4\uc9dc \uc0ac\ub098\uc774.\u201d",
            actor: "\uad8c\ud574\ud6a8",
            director: "\ubc15\ud5cc\uc218",
            scenario: "\ubc15\ud5cc\uc218",
            clip: "TRUE",
          },
          {
            id: 49,
            year: 1997,
            title: "\ub118\ubc843",
            dialogue:
              "\u201c\ub2c8\uac00 \uc55e\uc73c\ub85c \ubb58 \ud558\ub4e0 \ud558\uc9c0 \ub9c8\ub77c.\u201d",
            character: "\uac80\uc0ac",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uc1a1\ub2a5\ud55c",
            scenario: "\uc1a1\ub2a5\ud55c",
            clip: "TRUE",
          },
          {
            id: 50,
            year: 1997,
            title: "\ube44\ud2b8",
            dialogue:
              "\u201c\ub098\uc5d0\uac90 \uafc8\uc774 \uc5c6\uc5c8\ub2e4.\u201d",
            character: "\uccad\ucd98",
            keyword: "\ub3c5\ubc31",
            actor: "\uc815\uc6b0\uc131",
            director: "\uae40\uc131\uc218",
            source: "\ud5c8\uc601\ub9cc, \ubc15\ud558",
            scenario: "\uc2ec\uc0b0",
            clip: "TRUE",
          },
          {
            id: 51,
            year: 1997,
            title: "\ucd08\ub85d\ubb3c\uace0\uae30",
            dialogue:
              "\u201c\ud070\uc131 \uadf8\ub54c \uc0dd\uac01\ub098? \uadf8\ub54c \uc0dd\uac01\ub098?\u201d",
            actor: "\ud55c\uc11d\uaddc",
            director: "\uc774\ucc3d\ub3d9",
            scenario: "\uc774\ucc3d\ub3d9, \uc624\uc2b9\uc6b1",
            clip: "TRUE",
          },
          {
            id: 52,
            year: 1997,
            title: "\uc811\uc18d",
            dialogue:
              "\u201c\uce5c\uad6c\ub85c \ub9cc\ub098\ub294 \uac8c \ubb34\uc2a8 \uc758\ubbf8\uac00 \uc788\uc8e0? \uc0ac\ub791\ubc1b\uae38 \uc6d0\ud55c \uac70 \uc544\ub2cc\uac00\uc694?\u201d",
            actor: "\ud55c\uc11d\uaddc",
            director: "\uc7a5\uc724\ud604",
            scenario:
              "\uc870\uba85\uc8fc, \uc7a5\uc724\ud604, \uae40\uc740\uc815",
            clip: "FALSE",
          },
          {
            id: 53,
            year: 1998,
            title: "8\uc6d4\uc758 \ud06c\ub9ac\uc2a4\ub9c8\uc2a4",
            dialogue:
              "\u201c\uc544\uc800\uc528\ub294 \uc65c \ub098\ub9cc \ubcf4\uba74 \uc6c3\uc5b4\uc694?\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\uc2ec\uc740\ud558",
            director: "\ud5c8\uc9c4\ud638",
            scenario:
              "\uc624\uc2b9\uc6b1, \uc2e0\ub3d9\ud658, \ud5c8\uc9c4\ud638",
            clip: "TRUE",
          },
          {
            id: 54,
            year: 1998,
            title: "\ucc98\ub140\ub4e4\uc758 \uc800\ub141\uc2dd\uc0ac",
            dialogue:
              "\u201c\uc544\ub2c8 \ub3c4\ub300\uccb4 \uc5b8\uc81c\ubd80\ud130 \ud615\uc0ac\ub791 \uac80\uc0ac\ub4e4\uc774 \ub0b4 \uc544\ub7ab\ub3c4\ub9ac\ub97c \uad00\ub9ac\ud574\uc628 \uac70\ub2c8?\u201d",
            keyword: "\uc5ec\uc131   \uc139\uc2a4 \ubc18\ubb38",
            actor: "\uac15\uc218\uc5f0",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "TRUE",
          },
          {
            id: 55,
            year: 1999,
            title: "\uc778\uc815\uc0ac\uc815 \ubcfc \uac83 \uc5c6\ub2e4",
            dialogue:
              "\u201c\ud310\ub2e8\uc740 \ud310\uc0ac\uac00 \ud558\uace0, \ubcc0\uba85\uc740 \ubcc0\ud638\uc0ac\uac00 \ud558\uace0, \uc6a9\uc11c\ub294 \ubaa9\uc0ac\uac00 \ud558\uace0, \ud615\uc0ac\ub294 \ubb34\uc870\uac74 \uc7a1\ub294 \uac70\uc57c.\u201d",
            character: "\ud615\uc0ac",
            keyword: "\uc9c1\uc5c5",
            actor: "\ubc15\uc911\ud6c8",
            director: "\uc774\uba85\uc138",
            scenario: "\uc774\uba85\uc138",
            clip: "TRUE",
          },
          {
            id: 56,
            year: 2e3,
            title: "\uacf5\ub3d9\uacbd\ube44\uad6c\uc5ed JSA",
            dialogue:
              "\u201c\uc138\uc0c1\uc5d0\ub294 \ub450 \uc885\ub958\uc758 \uc778\uac04\uc774 \uc788\uc5b4. \ube84\uac31\uc774, \uadf8\ub9ac\uace0 \ube68\uac31\uc774\ub4e4\uc758 \uc801. \uc5ec\uae30 \uc911\ub9bd \uc124 \uc790\ub9ac \uc5c6\uc5b4.\u201d",
            character: "\ubcd1\uc0ac",
            keyword: "  \ubd84\ub2e8",
            actor: "\uae30\uc8fc\ubd09",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\ubc15\uc0c1\uc5f0",
            scenario: "\uae40\ud604\uc11d",
            clip: "FALSE",
          },
          {
            id: 57,
            year: 2e3,
            title: "\uacf5\ub3d9\uacbd\ube44\uad6c\uc5ed JSA",
            dialogue:
              "\u201c\uc57c, \uc57c, \uc57c... \uadf8\ub9bc\uc790 \ub118\uc5b4\uc654\uc5b4. \uc870\uc2ec\ud558\ub77c\uc6b0.\u201d",
            character: "\ubd81\ud55c\uad70",
            keyword: "  \ubd84\ub2e8",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\ubc15\uc0c1\uc5f0",
            scenario: "\uae40\ud604\uc11d",
            clip: "TRUE",
          },
          {
            id: 58,
            year: 2e3,
            title: "\uacf5\ub3d9\uacbd\ube44\uad6c\uc5ed JSA",
            dialogue:
              "\u201c\uc2e4\uc804\uc5d0\uc11c\ub294 \ub9d0\uc774\uc57c. \ubf51\ub294 \uc18d\ub3c4 \uac19\uc740 \uac74 \uc911\uc694\ud558\uc9c0 \uc54a\uc544. \uc804\ud22c \uae30\uc220? \uae30\ub7f0 \uac70 \uc5c6\uc5b4. \uc5bc\ub9c8\ub098 \uce68\ucc29\ud55c\uac00. \uc5bc\ub9c8\ub098 \ube68\ub9ac \ud310\ub2e8\ud558\uace0 \ub300\ub2f4\ud558\uac8c \ud589\ub3d9\ud558\ub290\ub0d0. \uae30\uac8c \ub2e4\uc57c, \uae30\uac8c.\u201d",
            character: "\ubd81\ud55c\uad70",
            keyword: " ",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\ubc15\uc0c1\uc5f0",
            scenario: "\uae40\ud604\uc11d",
            clip: "FALSE",
          },
          {
            id: 59,
            year: 2e3,
            title: "\uacf5\ub3d9\uacbd\ube44\uad6c\uc5ed JSA",
            dialogue:
              "\u201c\uadf8\ub7f0\ub370 \uad11\uc11d\uc778 \uc65c \uadf8\ub807\uac8c \uc77c\ucc0d \uc8fd\uc5c8\ub300\ub2c8? \uc57c! \uc57c! \uc6b0\ub9ac \uad11\uc11d\uc774\ub97c \uc704\ud574\uc11c \ub531 \ud55c \uc794\ub9cc \ud558\uc790\uc6b0.\u201d",
            character: "\ubd81\ud55c\uad70",
            keyword: "  \ubd84\ub2e8",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\ubc15\uc0c1\uc5f0",
            scenario: "\uae40\ud604\uc11d",
            clip: "FALSE",
          },
          {
            id: 60,
            year: 2e3,
            title: "\ub2e4\ucc0c\ub9c8\uc640 \ub9ac",
            dialogue:
              "\u201c\uc624\ub298 \ub124\ub188\ud55c\ud14c \uc624\ub3d9\ub098\ubb34 \ucf54\ud2b8\ub97c \uc785\ud600\uc8fc\ub9c8!\u201d",
            character: "\uc591\uc544\uce58",
            keyword: "\ud5c8\uc138",
            actor: "\uc548\uae38\uac15",
            director: "\ub958\uc2b9\uc644",
            scenario: "\uc774\uc6d0\ud615, \ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 61,
            year: 2e3,
            title: "\ubc15\ud558\uc0ac\ud0d5",
            dialogue:
              "\u201c\ub098 \ub2e4\uc2dc \ub3cc\uc544\uac08\ub798!\u201d",
            keyword: "\uc2dc\uac04",
            actor: "\uc124\uacbd\uad6c",
            director: "\uc774\ucc3d\ub3d9",
            clip: "TRUE",
          },
          {
            id: 62,
            year: 2e3,
            title: "\ubc15\ud558\uc0ac\ud0d5",
            dialogue:
              "\u201c\uc601\ud638 \uc528, \uadf8 \uafc8\uc774\uc694. \uc88b\uc740 \uafc8\uc774\uba74 \uc88b\uaca0\uc5b4\uc694.\u201d",
            keyword: "\uc0ac\ub791 \uc21c\uc560\ubcf4",
            actor: "\ubb38\uc18c\ub9ac",
            director: "\uc774\ucc3d\ub3d9",
            scenario: "\uc774\ucc3d\ub3d9",
            clip: "FALSE",
          },
          {
            id: 63,
            year: 2e3,
            title: "\ubc18\uce59\uc655",
            dialogue:
              "\u201c\ube60\uc838\ub098\uc640 \ubd10, \ubabb \ube60\uc838\ub098\uc624\uaca0\uc9c0? \uc138\uc0c1\uc774 \uc774\ub798. \uc815\uae00\uc774\uc57c \uc815\uae00. \ud798 \uc5c6\uc73c\uba74 \ubabb \ube60\uc838\ub098\uc640, \uc54c\uc558\uc5b4?\u201d",
            keyword: "  \uc138\ud0dc",
            actor: "\uc1a1\uc601\ucc3d",
            director: "\uae40\uc9c0\uc6b4",
            source: "\uae40\ub300\uc6b0",
            scenario: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 64,
            year: 2e3,
            title: "\uc624! \uc218\uc815",
            dialogue:
              "\u201c\ub108 \ube64\uc4f0\uae4c\uc9c0 \ubcb3\uae34 \uac70\ub2e4. \ube64\uc4f0\uae4c\uc9c0 \ubeff\uae30\uad6c \ud560 \uc218 \uc788\ub294\ub370 \uc548 \ud55c \uac70\ub2e4. \uc54c\uc558\uc9c0?\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            keyword: "\uc139\uc2a4",
            actor: "\ubb38\uc131\uadfc",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "TRUE",
          },
          {
            id: 65,
            year: 2e3,
            title: "\uc8fd\uac70\ub098 \ud639\uc740 \ub098\uc058\uac70\ub098",
            dialogue:
              "\u201c\ub0b4\uac00 \uc544\ubb34\ub9ac \uc138\uc0c1\uc5d0 \ub9de\ucd94\ub824\uace0 \ud574\ub3c4 \uc548 \ub3fc. \uadf8\ub7ec\ub290\ub2c8 \ucc28\ub77c\ub9ac \uc138\uc0c1\uc744 \ub098\ud55c\ud14c \ub9de\ucd94\ub294 \uac8c \ud3b8\ud558\uc9c0.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\uc138\ud0dc",
            actor: "\ubc30\uc911\uc2dd",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "TRUE",
          },
          {
            id: 66,
            year: 2e3,
            title: "\ud50c\ub780\ub2e4\uc2a4\uc758 \uac1c",
            dialogue:
              "\u201c\uc815\ub9d0 \uac1c \uac19\uc740 \uacbd\uc6b0\uc8e0.\u201d",
            actor: "\uc774\uc131\uc7ac",
            director: "\ubd09\uc900\ud638",
            scenario:
              "\uc1a1\uc9c0\ud638, \uc190\ud0dc\uc6c5, \ubd09\uc900\ud638",
            clip: "FALSE",
          },
          {
            id: 67,
            year: 2001,
            title: "\uace0\uc591\uc774\ub97c \ubd80\ud0c1\ud574",
            dialogue:
              "\u201c\ub204\uad70\uac00\uac00 \ub110 \ub5a0\ub09c\ub2e4\uace0 \ud574\uc11c, \ub110 \uc88b\uc544\ud558\uc9c0 \uc54a\ub294 \uac74 \uc544\ub2c8\uc57c.\u201d",
            character: "\uccad\ucd98",
            actor: "\ubc30\ub450\ub098",
            director: "\uc815\uc7ac\uc740",
            scenario: "\uc815\uc7ac\uc740, \ubc15\uc9c0\uc131",
            clip: "TRUE",
          },
          {
            id: 68,
            year: 2001,
            title: "\ubc88\uc9c0\uc810\ud504\ub97c \ud558\ub2e4",
            dialogue:
              "\u201c\uc0ac\ub791\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0ac\ub791\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc0ac\ub791\ud560 \uc218\ubc16\uc5d0 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ub2f9\uc2e0\uc744 \uc0ac\ub791\ud569\ub2c8\ub2e4.\u201d",
            keyword:
              "\uc0ac\ub791 \uc2dc\uac04 \uc720\uc5b8 \ub0b4\ub808\uc774\uc158",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\ub300\uc2b9",
            scenario: "\uace0\uc740\ub2d8",
            clip: "FALSE",
          },
          {
            id: 69,
            year: 2001,
            title: "\ubd04\ub0a0\uc740 \uac04\ub2e4",
            dialogue:
              "\u201c\ub108, \ub098 \uc0ac\ub791\ud558\ub2c8? \uc5b4\ub5bb\uac8c \uc0ac\ub791\uc774 \ubcc0\ud558\ub2c8?\u201d",
            keyword: "\uc0ac\ub791 \uc5f0\uc560 \uc774\ubcc4",
            actor: "\uc720\uc9c0\ud0dc",
            director: "\ud5c8\uc9c4\ud638",
            scenario:
              "\ub958\uc7a5\ud558, \uc774\uc219\uc5f0, \uc2e0\uc900\ud638, \ud5c8\uc9c4\ud638",
            clip: "TRUE",
          },
          {
            id: 70,
            year: 2001,
            title: "\ubd04\ub0a0\uc740 \uac04\ub2e4",
            dialogue: "\u201c\ub77c\uba74 \uba39\uc744\ub798\uc694?\u201d",
            keyword: "\uc0ac\ub791 \uc5f0\uc560",
            actor: "\uc774\uc601\uc560",
            director: "\ud5c8\uc9c4\ud638",
            scenario:
              "\ub958\uc7a5\ud558, \uc774\uc219\uc5f0, \uc2e0\uc900\ud638, \ud5c8\uc9c4\ud638",
            clip: "FALSE",
          },
          {
            id: 71,
            year: 2001,
            title: "\uc120\ubb3c",
            dialogue:
              "\u201c\ub09c, \ub2f9\uc2e0\uc774 \uc5b4\ub824\uc6c0\uc774 \uc788\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c\ub3c4 \ub530\ub73b\ud55c \uc6c3\uc74c\uc744 \uc8fc\ub294 \uc0ac\ub78c\uc774\uc5c8\uc73c\uba74 \uc88b\uaca0\uc5b4. \uadfc\ub370 \uadf8\ub7ec\ub824\uba74 \ub208\ubb3c\uc744 \uba3c\uc800 \uc54c\uc544\uc57c \ud55c\ub300. \ub0b4\uac00 \uc6a9\uae30 \uc528 \ub450\uace0 \uac00\ub294 \uac70 \uc57c\uc18d\ud558\uaca0\uc9c0\ub9cc \uc774\ub7f0 \uc544\ud514\uae4c\uc9c0\ub3c4 \ub2f9\uc2e0 \uc6c3\uc74c\uc744 \uc704\ud55c \uc120\ubb3c\uc774\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4. \uc774 \uc138\uc0c1\uc774 \ub0b4\uac8c \uc900 \uac00\uc7a5 \ud070 \uc120\ubb3c\uc774 \ub2f9\uc2e0\uc778 \uac83\ucc98\ub7fc.\u201d",
            keyword: "\uc720\uc5b8 \uc0ac\ub791",
            actor: "\uc774\uc601\uc560",
            director: "\uc624\uae30\ud658",
            scenario: "\ubc15\uc815\uc6b0",
            adaptation: "\uc624\uae30\ud658",
            clip: "FALSE",
          },
          {
            id: 72,
            year: 2001,
            title: "\uc5fd\uae30\uc801\uc778 \uadf8\ub140",
            dialogue:
              "\u201c\uacac\uc6b0\uc57c! \ubbf8\uc548\ud574... \ub098\ub3c4 \uc5b4\uca54 \uc218 \uc5c6\ub098\ubd10. \ub09c \ub2e4\ub974\ub2e4\uace0 \uc0dd\uac01\ud588\ub294\ub370. \ub098\ub3c4 \uc5b4\uca54 \uc218 \uc5c6\ub294 \uc5ec\uc794\uac00\ubd10.\u201d",
            keyword: "\uc0ac\ub791 \uc5f0\uc560 \uace0\ubc31",
            actor: "\uc804\uc9c0\ud604",
            director: "\uacfd\uc7ac\uc6a9",
            source: "\uae40\ud638\uc2dd",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 73,
            year: 2001,
            title: "\uc5fd\uae30\uc801\uc778 \uadf8\ub140",
            dialogue:
              "\u201c\uc6b4\uba85\uc774\ub780 \ub9d0\uc774\uc57c. \ub178\ub825\ud558\ub294 \uc0ac\ub78c\ud55c\ud14c\ub294 \uc6b0\uc5f0\uc774\ub780 \ub2e4\ub9ac\ub97c \ub193\uc544\uc8fc\ub294 \uac70\uc57c.\u201d",
            character: "\ub178\uc778",
            keyword: "\uc9c0\ud61c",
            actor: "\uc720\uc21c\ucca0",
            director: "\uacfd\uc7ac\uc6a9",
            source: "\uae40\ud638\uc2dd",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 74,
            year: 2001,
            title: "\uc5fd\uae30\uc801\uc778 \uadf8\ub140",
            dialogue:
              "\u201c\uc220\uc740 \uc808\ub300 \uc138 \uc794 \uc774\uc0c1 \uba39\uc774\uba74 \uc548 \ub418\uad6c\uc694, \uc544\ubb34\ub098 \ud328\uac70\ub4e0\uc694... \uac00\ub054 \ub54c\ub9ac\uba74, \uc548 \uc544\ud30c\ub3c4 \uc544\ud508 \ucc99 \ud558\uac70\ub098, \uc544\ud30c\ub3c4 \uc548 \uc544\ud508 \ucc99 \ud558\ub294 \uac70 \uc88b\uc544\ud574\uc694.\u201d",
            keyword: "\uc0ac\ub791 \ub2f9\ubd80",
            actor: "\ucc28\ud0dc\ud604",
            director: "\uacfd\uc7ac\uc6a9",
            source: "\uae40\ud638\uc2dd",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 75,
            year: 2001,
            title: "\uc5fd\uae30\uc801\uc778 \uadf8\ub140",
            dialogue:
              "\u201c\uc0ac\ub791\uc774 \ubb54\uc9c0 \ub354 \uc54c\ub824\uba74 \uc6b0\ub9ac \ubaa8\ub450 \ub354 \uc0b4\uc544\ubd10\uc57c \ub41c\ub2e4\uad6c\uc694.\u201d",
            keyword: "\uc0ac\ub791 \uc124\ub4dd",
            actor: "\uc804\uc9c0\ud604",
            director: "\uacfd\uc7ac\uc6a9",
            source: "\uae40\ud638\uc2dd",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 76,
            year: 2001,
            title: "\uc640\ub2c8\uc640 \uc900\ud558",
            dialogue:
              "\u201c\uc11c\ub85c \ub208\uc744 \ubcf4\uace0... \uc9c4\uc2ec\uc744 \uc598\uae30\ud558\ub294 \uac8c... \uc911\uc694\ud558\ub2e4\ub294 \uac78 \uc54c\uc558\uc5b4. \uc0ac\ub78c \ub9c8\uc74c, \ucc38 \uc54c\uae30 \uc5b4\ub835\uc796\uc544.\u201d",
            keyword: "\uc5f0\uc560 \uace0\ubc31",
            actor: "\uae40\ud76c\uc120",
            director: "\uae40\uc6a9\uade0",
            scenario: "\uae40\uc6a9\uade0",
            adaptation:
              "\uc11c\uc2e0\ud61c, \uc11c\uc6a9\ud638, \uc724\uc21c\uc6a9",
            clip: "FALSE",
          },
          {
            id: 77,
            year: 2001,
            title: "\uc640\uc774\ud0a4\ud0a4 \ube0c\ub77c\ub354\uc2a4",
            dialogue:
              "\u201c\ud589\ubcf5\ud558\ub2c8? \uc6b0\ub9ac\ub4e4 \uc911\uc5d0 \uc9c0 \ud558\uace0 \uc2f6\uc740 \uc77c \ud558\uba74\uc11c \uc0ac\ub294 \ub188 \ub108\ubc16\uc5d0 \uc5c6\uc796\uc544.\u201d",
            actor: "\uc2e0\ud604\uc885",
            director: "\uc784\uc21c\ub840",
            scenario: "\uc784\uc21c\ub840",
            clip: "TRUE",
          },
          {
            id: 78,
            year: 2001,
            title: "\uce5c\uad6c",
            dialogue:
              "\u201c\ub2c8\uac00 \uac00\ub77c \ud558\uc640\uc774.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\uc0ac\ud22c\ub9ac \ubc08",
            actor: "\uc7a5\ub3d9\uac74",
            director: "\uacfd\uacbd\ud0dd",
            scenario: "\uacfd\uacbd\ud0dd",
            clip: "TRUE",
          },
          {
            id: 79,
            year: 2001,
            title: "\ud30c\uc774\ub780",
            dialogue:
              "\u201c\ubaa8\ub450 \uce5c\uc808\ud558\uc9c0\ub9cc \uac15\uc7ac \uc528\uac00 \uc81c\uc77c \uce5c\uc808\ud569\ub2c8\ub2e4. \ub098\uc640 \uacb0\ud63c\ud574 \uc8fc\uc168\uc73c\ub2c8\uae4c\uc694.\u201d",
            actor: "\uc7a5\ubc31\uc9c0",
            director: "\uc1a1\ud574\uc131",
            source: "\uc544\uc0ac\ub2e4 \uc9c0\ub85c",
            scenario:
              "\uc548\uc0c1\ud6c8, \uc1a1\ud574\uc131, \uae40\ud574\uace4",
            clip: "FALSE",
          },
          {
            id: 80,
            year: 2001,
            title: "\ud30c\uc774\ub780",
            dialogue:
              "\u201c\ub2f9\uc2e0\uc758 \uc544\ub0b4\ub85c \uc8fd\ub294\ub2e4\ub294 \uac83. \uad1c\ucc2e\uc2b5\ub2c8\uae4c? \uc751\uc11d \ubd80\ub824\uc11c \uc8c4\uc1a1\ud569\ub2c8\ub2e4.\u201d",
            keyword: "\uc720\uc5b8",
            actor: "\uc7a5\ubc31\uc9c0",
            director: "\uc1a1\ud574\uc131",
            source: "\uc544\uc0ac\ub2e4 \uc9c0\ub85c",
            scenario:
              "\uc548\uc0c1\ud6c8, \uc1a1\ud574\uc131, \uae40\ud574\uace4",
            clip: "FALSE",
          },
          {
            id: 81,
            year: 2001,
            title: "\ud30c\uc774\ub780",
            dialogue:
              "\u201c\uadf8\ub798, \ub098 \ud638\uad6c\uc57c. \uc61b\ub0a0\uc5d0\ub3c4 \ud638\uad6c\uace0, \uc9c0\uae08\ub3c4 \ud638\uad6c\uace0, \uad6d\uac00\ub300\ud45c \ud638\uad6c\ub2e4, \uc774 \uc528\ubc1c\ub188\uc544. \uadfc\ub370 \ubcd1\uc6d0\uc5d0\uc11c \ub098\uc790\ube60\uc838 \uc8fd\uc740 \ub144, \uadfc\ub370 \uadf8 \ub144\uc740 \ub0b4\uac00 \uc138\uc0c1\uc5d0\uc11c \uc81c\uc77c\ub85c \uce5c\uc808\ud558\uace0 \uace0\ub9d9\ub304\ub2e4. \ub098 \ubcf4\uace0 \uc5b4\ub5a1\ud558\ub77c\uace0! \uc1a1\uc7a5\uc73c\ub85c \ub098\ud0c0\ub098\uc11c \ub098\ubcf4\uace0 \uc5b4\ub5a1\ud558\ub77c\uace0!\u201d",
            keyword: "\ud56d\ubcc0 \uc220\uc8fc\uc815",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uc1a1\ud574\uc131",
            source: "\uc544\uc0ac\ub2e4 \uc9c0\ub85c",
            scenario:
              "\uc548\uc0c1\ud6c8, \uc1a1\ud574\uc131, \uae40\ud574\uace4",
            clip: "FALSE",
          },
          {
            id: 82,
            year: 2002,
            title: "YMCA\uc57c\uad6c\ub2e8",
            dialogue:
              "\u201c\ub098 4\ubc88 \ud558\uae30 \uc2eb\uc18c. \uc7ac\uc218 \uc5c6\uc18c. \uc8fd\uc744 \uc0ac.\u201d \u201c\uc81c\uc77c\ub8e8 \uc798 \uce58\ub294 \uc774\uac00 4\ubc88\uc744 \ub9e1\ub294 \uac70\ub78d\ub2c8\ub2e4.\u201d \u201c\uc120\ube44 \uc0ac.\u201d",
            actor: "\uc1a1\uac15\ud638, \uae40\ud61c\uc218",
            director: "\uae40\ud604\uc11d",
            scenario: "\uae40\ud604\uc11d",
            clip: "FALSE",
          },
          {
            id: 83,
            year: 2002,
            title: "YMCA\uc57c\uad6c\ub2e8",
            dialogue:
              "\u201c\uc544\ubc84\uc9c0, \uc774\ub7f0 \ub9d0\uc500 \ub4dc\ub9ac\uae30 \uc678\ub78c\ub418\uc635\ub2c8\ub2e4\ub9cc. \uc81c \ube44\ub85d \uc720\uc0dd\uc73c\ub85c\ub294 \uc774\ub984\uc744 \ub110\ub9ac \uc54c\ub9ac\uc9c0 \ubabb\ud55c \ub728\ub0b4\uae30 \uc120\ube44\uc77c \ubfd0\uc774\uc624\ub098 \ubca0\uc4f0\ubcfc \uc120\uc218\ub85c\uc11c\ub294 \uc870\uc120\uc5d0\uc11c \uba87 \uc190\uac00\ub77d \uc548\uc5d0 \ub4ed\ub2c8\ub2e4. \uadf8 \uc720\uc0dd\uc73c\ub85c \uce58\uba74 \ud1f4\uacc4 \uc774\ud669 \uc120\uc0dd\uc774\ub098 \uc11c\uc560 \uc720\uc131\ub8e1 \uc120\uc0dd\uae09 \uc815\ub3c4 \ub41c\ub2e4\uace0...\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\uae40\ud604\uc11d",
            scenario: "\uae40\ud604\uc11d",
            clip: "FALSE",
          },
          {
            id: 84,
            year: 2002,
            title: "\uacb0\ud63c\uc740, \ubbf8\uce5c\uc9d3\uc774\ub2e4",
            dialogue:
              "\u201c\ub09c \uc790\uc2e0 \uc788\uc5b4. \uc808\ub300\ub85c \ub4e4\ud0a4\uc9c0 \uc54a\uc744 \uc790\uc2e0.\u201d",
            keyword: "\uc678\ub3c4 \uacb0\ud63c",
            actor: "\uc5c4\uc815\ud654",
            director: "\uc720\ud558",
            source: "\uc774\ub9cc\uad50",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 85,
            year: 2002,
            title: "\uacb0\ud63c\uc740, \ubbf8\uce5c\uc9d3\uc774\ub2e4",
            dialogue:
              "\u201c\uc654\ub2e4 \uac14\ub2e4 \ud0dd\uc2dc\ube44 \ud558\uba74 \uc5ec\uad00\ube44\uac00 \ub354 \uc300 \uac83 \uac19\uc740\ub370\uc694?\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uae40\uc6b0\uc131",
            director: "\uc720\ud558",
            source: "\uc774\ub9cc\uad50",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 86,
            year: 2002,
            title: "\uacb0\ud63c\uc740, \ubbf8\uce5c\uc9d3\uc774\ub2e4",
            dialogue:
              "\u201c\uacb0\ud63c\ud55c \uce5c\uad6c\ub4e4 \ubcf4\uba74 \ub2e4 \ube44\uc2b7\ud558\ub354\ub77c. \uac71\uc815\ub3c4 \uace0\ub9cc\uace0\ub9cc, \ud589\ubcf5\ub3c4 \uace0\ub9cc\uace0\ub9cc. \ubb34\uc2a8 \uccb4\uc778\uc810 \ucc28\ub9b0 \uac83 \uac19\uc544.\u201d",
            keyword: "\uacb0\ud63c",
            actor: "\uc5c4\uc815\ud654",
            director: "\uc720\ud558",
            source: "\uc774\ub9cc\uad50",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 87,
            year: 2002,
            title: "\uacf5\uacf5\uc758 \uc801",
            dialogue:
              "\u201c... \uc5b4\ub5a4 \uc0c8\ub07c\ub294 \uc5bc\uad74\uc774 \uae30\ubd84 \ub098\ubed0 \uadf8\ub798\uc11c \ud328\uace0, \uadf8\ub807\uac8c \ud615\ud55c\ud14c \ub9de\uc740 \uc560\ub4e4\uc774 4\uc5f4 \uc885\ub300 \uc549\uc544 \ubc88\ud638\ub85c \uc5f0\ubcd1\uc7a5 \ub450 \ubc14\ud034\ub2e4. ... \uadf8\ub2c8\uae4c \uc870\uc6a9\ud788 \uc53b\uace0 \uac00\ub77c.\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc124\uacbd\uad6c",
            director: "\uac15\uc6b0\uc11d",
            source: "\uad6c\ubcf8\ud55c",
            scenario:
              "\ubc31\uc2b9\uc7ac, \uc815\uc724\uc12d, \uae40\ud604\uc815, \ucc44\uc724\uc11d",
            clip: "TRUE",
          },
          {
            id: 88,
            year: 2002,
            title: "\ubcf5\uc218\ub294 \ub098\uc758 \uac83",
            dialogue:
              "\u201c\uac19\uc740 \ub3c8\uc774\ub77c\ub3c4 \uadf8 \uc778\uac04\ud55c\ud14c\ub294 \uaecc\uac12\uc774\uc9c0\ub9cc \uc6b0\ub9ac\ud55c\ud14c\ub294 \ubaa9\uc228\uc774 \ub2ec\ub9b0 \uac70\uc57c. \uadf8\ub7f0 \uc790\ubcf8\uc758 \uc774\ub3d9\uc740 \ud654\ud3d0\uc758 \uac00\uce58\ub97c \uc874\ub098\uac8c \uadf9\ub300\ud654\ud558\ub294 \uae38\uc774\uace0 \uadf8\uac74 \uc886\ub3c4 \uc8c4 \uc544\ub2c8\uc57c, \uc548 \uadf8\ub798?\u201d",
            keyword: "  \uacc4\uae09",
            actor: "\ubc30\ub450\ub098",
            director: "\ubc15\ucc2c\uc6b1",
            scenario:
              "\uc774\uc885\uc6a9, \uc774\uc7ac\uc21c, \ubc15\ub9ac\ub2e4\ub9e4",
            clip: "FALSE",
          },
          {
            id: 89,
            year: 2002,
            title: "\ubcf5\uc218\ub294 \ub098\uc758 \uac83",
            dialogue:
              "\u201c\uc138\uc0c1\uc5d0\ub294 \ub9d0\uc774\uc57c. \uc88b\uc740 \uc720\uad34\uac00 \uc788\uace0 \ub098\uc05c \uc720\uad34\uac00 \uc788\uc5b4.\u201d",
            actor: "\ubc30\ub450\ub098",
            director: "\ubc15\ucc2c\uc6b1",
            scenario:
              "\uc774\uc885\uc6a9, \uc774\uc7ac\uc21c, \ubc15\ub9ac\ub2e4\ub9e4",
            clip: "FALSE",
          },
          {
            id: 90,
            year: 2002,
            title: "\ubcf5\uc218\ub294 \ub098\uc758 \uac83",
            dialogue:
              "\u201c\ub098\ub984\ub300\ub85c, \ucc29\ud558\uac8c \uc0b4\uc558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\u201d",
            keyword: "\uace0\ubc31",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            scenario:
              "\uc774\uc885\uc6a9, \uc774\uc7ac\uc21c, \ubc15\ub9ac\ub2e4\ub9e4",
            clip: "FALSE",
          },
          {
            id: 91,
            year: 2002,
            title: "\ubcf5\uc218\ub294 \ub098\uc758 \uac83",
            dialogue:
              "\u201c\ub108... \ucc29\ud55c \ub188\uc778 \uac70 \uc548\ub2e4. \uadf8\ub7ec\ub2c8\uae4c \ub0b4\uac00 \ub108 \uc8fd\uc774\ub294 \uac70... \uc774\ud574\ud558\uc9c0? \uadf8\ub807\uc9c0?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            scenario:
              "\uc774\uc885\uc6a9, \uc774\uc7ac\uc21c, \ubc15\ub9ac\ub2e4\ub9e4",
            clip: "FALSE",
          },
          {
            id: 92,
            year: 2002,
            title: "\uc0dd\ud65c\uc758 \ubc1c\uacac",
            dialogue:
              "\u201c\uacbd\uc218\uc57c, \uc6b0\ub9ac \uc0ac\ub78c \ub418\ub294 \uac70 \ud798\ub4e4\uc5b4. \ud798\ub4e4\uc9c0\ub9cc, \uc6b0\ub9ac \uad34\ubb3c\uc740 \ub418\uc9c0 \ub9d0\uace0 \uc0b4\uc790.\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            keyword: "\ubc08",
            actor: "\uc548\uae38\uac15",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "TRUE",
          },
          {
            id: 93,
            year: 2002,
            title: "\uc0dd\ud65c\uc758 \ubc1c\uacac",
            dialogue:
              "\u201c\uce94 \uc720 \uc2a4\ud53c\ud06c \uc789\uae00\ub9ac\uc2dc?\u201d",
            keyword: "\uc678\uad6d\uc5b4",
            actor: "\uae40\uc0c1\uacbd",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 94,
            year: 2002,
            title: "\uc9d1\uc73c\ub85c...",
            dialogue:
              "\u201c\ub0b4\uac00 \ucf04\ud130\ud0a4 \uce58\ud0a8, \uce58\ud0a8\uc774\ub77c\uace0 \ud588\uc796\uc544. \ud504\ub77c\uc774\ub4dc. \ub204\uac00 \ubb3c\uc5d0 \ube60\ub728\ub9ac\ub798? \uc5b4? \uadf8\uac83\ub3c4 \ubaa8\ub974\uba74\uc11c... \ubab0\ub77c! \ucf04\ud130\ud0a4 \uce58\ud0a8.\u201d",
            actor: "\uc720\uc2b9\ud638",
            director: "\uc774\uc815\ud5a5",
            scenario: "\uc774\uc815\ud5a5",
            clip: "FALSE",
          },
          {
            id: 95,
            year: 2002,
            title: "\uc9d1\uc73c\ub85c...",
            dialogue:
              "\u201c\ud560\uba38\ub2c8, \ub9ce\uc774 \uc544\ud504\uba74 \uadf8\ub0e5 \uc544\ubb34\uac83\ub3c4 \uc4f0\uc9c0 \ub9d0\uace0 \ubcf4\ub0b4. \uadf8\ub7fc \uc0c1\uc6b0\uac00 \ud560\uba38\ub2c8\uac00 \ubcf4\ub0b8 \uc904 \uc54c\uace0 \uae08\ubc29 \ub2ec\ub824\uc62c\uac8c. \uc751? \uc54c\uc558\uc9c0?\u201d",
            actor: "\uc720\uc2b9\ud638",
            director: "\uc774\uc815\ud5a5",
            scenario: "\uc774\uc815\ud5a5",
            clip: "FALSE",
          },
          {
            id: 96,
            year: 2002,
            title: "\ud488\ud589\uc81c\ub85c",
            dialogue:
              "\u201c\uccab \ud0a4\uc2a4\ub97c \ud558\uba74 \uadc0\uc5d0\uc11c \uc885\uc18c\ub9ac\uac00 \uc6b8\ub9b0\ub300.\u201d",
            character: "\ud559\uc0dd",
            keyword: "\uc5f0\uc560",
            actor: "\uc784\uc740\uacbd",
            director: "\uc870\uadfc\uc2dd",
            source:
              "\uc774\uc9c0\ud615(\uc6d0\uc548), \uc870\uadfc\uc2dd(\uc6d0\uc548)",
            scenario:
              "\uc815\uc9c4\uc644, \uc774\uc9c0\ud615, \uc774\ud574\uc601, \uc774\ud574\uc900",
            clip: "FALSE",
          },
          {
            id: 97,
            year: 2003,
            title: "\ub3d9\uac11\ub0b4\uae30 \uacfc\uc678\ud558\uae30",
            dialogue:
              "\u201c\ub09c \uc120\uc0dd\uc774\uace0 \ub10c \uc81c\uc790\uc57c.\u201d",
            actor: "\uae40\ud558\ub298",
            director: "\uae40\uacbd\ud615",
            scenario: "\ubc15\uc5f0\uc120",
            adaptation: "\uae40\uacbd\ud615",
            clip: "FALSE",
          },
          {
            id: 98,
            year: 2003,
            title: "\ubc14\ub78c\ub09c \uac00\uc871",
            dialogue:
              "\u201c\ub0b4\uac00 \ub9d8 \ubcc0\ud588\ub2e8 \uc598\uae30\ub294 \uc218\uc5c6\uc774 \ub4e4\uc5c8\uc5b4\ub3c4 \ubab8 \ubcc0\ud588\ub2e8 \uc598\uae34 \ucc98\uc74c\uc774\ub2e4.\u201d",
            actor: "\ubb38\uc18c\ub9ac",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 99,
            year: 2003,
            title: "\ubc14\ub78c\ub09c \uac00\uc871",
            dialogue:
              "\u201c\uc598, \uc778\uc0dd\uc740 \uc194\uc9c1\ud558\uac8c \uc0b4\uc544\uc57c \ub418\ub294 \uac70\ub354\ub77c. \uc194\uc9c1\ud558\uac8c. \ub0b4 \ub290\ub08c\ub300\ub85c. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uadf8\uac8c \uc0ac\ub294 \uac8c \uc544\ub2c8\uc57c. \ud558\ub8e8\ub97c \uc0b4\uc544\ub3c4 \uc0ac\ub294 \uac70\uac19\uc774 \uc0b4\uc544\uc57c\uc9c0.\u201d",
            character: "\ub178\uc778",
            keyword: "\uc778\uc0dd",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 100,
            year: 2003,
            title: "\ubc14\ub78c\ub09c \uac00\uc871",
            dialogue:
              "\u201c\uc544\ubb34\ub9ac \uc5ec\uc790 \uc778\uc0dd\uc774 \ud33d\ud33d\ud55c \uac00\uc2b4\uc73c\ub85c \uc654\ub2e4\uac00 \ucb48\uadf8\ub7ec\uc9c4 \uac00\uc2b4\uc73c\ub85c \uac00\ub294 \uac70\ub77c\uc9c0\ub9cc, \ub098\ub294 \uc9c0\uae08 \uc774\ub7f0 \ub0b4\uac00 \uc544\uc8fc \uc88b\uc544. \uc544\uc8fc \ubfcc\ub4ef\ud574.\u201d",
            character: "\ub178\uc778",
            keyword: "\uc5ec\uc131 \uc695\ub9dd",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 101,
            year: 2003,
            title: "\ubc14\ub78c\ub09c \uac00\uc871",
            dialogue:
              "\u201c\ud55c\ubc88 \ubcf4\uc8e0. \uad50\uc721\uc801\uc73c\ub85c\ub2e4.\u201d",
            keyword: "\uc5f0\uc560 \uc678\ub3c4",
            actor: "\ubd09\ud0dc\uaddc",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 102,
            year: 2003,
            title: "\uc0b4\uc778\uc758 \ucd94\uc5b5",
            dialogue:
              "\u201c\uc5ec\uae30\uac00 \ucf69\ubc2d\uc774\ub0d0, \uc5b4? \uc5ec\uae30 \uac15\uac04\uc758 \uc655\uad6d\uc774\uc57c?\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            source: "\uae40\uad11\ub9bc",
            scenario: "\ubd09\uc900\ud638, \uc2ec\uc131\ubcf4",
            clip: "FALSE",
          },
          {
            id: 103,
            year: 2003,
            title: "\uc0b4\uc778\uc758 \ucd94\uc5b5",
            dialogue:
              "\u201c\uc774\uac74 \ub2e8\uc21c \uc2e4\uc885\uc774 \uc544\ub2d9\ub2c8\ub2e4, \ubc18\uc7a5\ub2d8. \uc11c\ub958\ub4e4\ub9cc \uc790\uc138\ud788 \ud6d1\uc5b4\ubd10\ub3c4 \uc54c \uc218 \uc788\uc8e0. \uc11c\ub958\ub294 \uc808\ub300 \uac70\uc9d3\ub9d0 \uc548 \ud558\uac70\ub4e0.\u201d",
            character: "\ud615\uc0ac",
            actor: "\uae40\uc0c1\uacbd",
            director: "\ubd09\uc900\ud638",
            source: "\uae40\uad11\ub9bc",
            scenario: "\ubd09\uc900\ud638, \uc2ec\uc131\ubcf4",
            clip: "FALSE",
          },
          {
            id: 104,
            year: 2003,
            title: "\uc0b4\uc778\uc758 \ucd94\uc5b5",
            dialogue:
              "\u201c\ubc25\uc740 \uba39\uace0 \ub2e4\ub2c8\ub0d0?\u201d",
            character: "\ud615\uc0ac",
            keyword: "\ubc08 \ubc18\ubb38",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            source: "\uae40\uad11\ub9bc",
            scenario: "\ubd09\uc900\ud638, \uc2ec\uc131\ubcf4",
            clip: "TRUE",
          },
          {
            id: 105,
            year: 2003,
            title: "\uc0b4\uc778\uc758 \ucd94\uc5b5",
            dialogue:
              "\u201c\uc9c0\ub784\ub4e4 \ud558\uace0 \uc788\ub124. \ub17c\ub450\ub801\uc5d0 \uafc0 \uccd0\ubc1c\ub77c\ub1a8\ub0d0.\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            source: "\uae40\uad11\ub9bc",
            scenario: "\ubd09\uc900\ud638, \uc2ec\uc131\ubcf4",
            clip: "FALSE",
          },
          {
            id: 106,
            year: 2003,
            title: "\uc2f1\uae00\uc988",
            dialogue:
              "\u201c\ud558\uc9c0\ub9cc \ud55c \uac00\uc9c0 \ubd84\uba85\ud55c \uac74 \uc544\uc9c1 \uc544\ubb34 \uc77c\ub3c4 \uc548 \uc77c\uc5b4\ub0ac\ub2e4\ub294 \uac83\uc774\uba70 \uc77c\uc5b4\ub098 \ubd24\uc790 \uc9c0\uac00 \ubb38\uc81c\uc77c \uac83\uc774\uace0 \ubb38\uc81c\uc5d4 \ubc18\ub4dc\uc2dc \ud574\ub2f5\uc774 \uc788\uae30 \ub9c8\ub828\uc774\ub77c\ub294 \uac83\uc774\ub2e4.\u201d",
            keyword: "\uc5ec\uc131",
            actor: "\uc7a5\uc9c4\uc601",
            director: "\uad8c\uce60\uc778",
            scenario:
              "\ubc15\ud5cc\uc218, \ub178\ud61c\uc601, \uc131\uae30\uc601",
            clip: "FALSE",
          },
          {
            id: 107,
            year: 2003,
            title: "\uc62c\ub4dc\ubcf4\uc774",
            dialogue:
              "\u201c\uc6c3\uc5b4\ub77c, \uc628 \uc138\uc0c1\uc774 \ub108\uc640 \ud568\uaed8 \uc6c3\uc744 \uac83\uc774\ub2e4. \uc6b8\uc5b4\ub77c, \ub108 \ud63c\uc790\ub9cc \uc6b8\uac8c \ub420 \uac83\uc774\ub2e4.\u201d",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\ubc15\ucc2c\uc6b1",
            source:
              "\uce20\uc774\uc57c \uac00\ub871, \ubbf8\ub124\uae30\uc2dc \ub178\ubd80\uc57c\ud0a4",
            scenario:
              "\ud669\uc870\uc724, \uc784\uc900\ud615, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 108,
            year: 2003,
            title: "\uc62c\ub4dc\ubcf4\uc774",
            dialogue: "\u201c\ub108 \ub204\uad6c\ub0d0?\u201d",
            keyword: "\ubc08",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\ubc15\ucc2c\uc6b1",
            source:
              "\uce20\uc774\uc57c \uac00\ub871, \ubbf8\ub124\uae30\uc2dc \ub178\ubd80\uc57c\ud0a4",
            scenario:
              "\ud669\uc870\uc724, \uc784\uc900\ud615, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 109,
            year: 2003,
            title: "\uc62c\ub4dc\ubcf4\uc774",
            dialogue:
              "\u201c\uba85\uc2ec\ud574\uc694. \ubaa8\ub798\uc54c\uc774\ub4e0 \ubc14\uc704\ub369\uc5b4\ub9ac\ub4e0 \uac00\ub77c\uc549\uae30\ub294 \ub9c8\ucc2c\uac00\uc9c0\uc608\uc694.\u201d",
            actor: "\uc720\uc9c0\ud0dc",
            director: "\ubc15\ucc2c\uc6b1",
            source:
              "\uce20\uc774\uc57c \uac00\ub871, \ubbf8\ub124\uae30\uc2dc \ub178\ubd80\uc57c\ud0a4",
            scenario:
              "\ud669\uc870\uc724, \uc784\uc900\ud615, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 110,
            year: 2003,
            title: "\uc62c\ub4dc\ubcf4\uc774",
            dialogue:
              "\u201c\uc788\uc796\uc544. \uc0ac\ub78c\uc740 \ub9d0\uc774\uc57c. \uc0c1\uc0c1\ub825\uc774 \uc788\uc5b4\uc11c \ube44\uac81\ud574\uc9c0\ub294 \uac70\ub798. \uadf8\ub7ec\ub2c8\uae4c \uc0c1\uc0c1\uc744 \ud558\uc9c0 \ub9d0\uc544\ubd10. \uc874\ub098 \uc6a9\uac10\ud574\uc9c8 \uc218 \uc788\uc5b4.\u201d",
            character: "\uc870\ud3ed",
            actor: "\uc624\ub2ec\uc218",
            director: "\ubc15\ucc2c\uc6b1",
            source:
              "\uce20\uc774\uc57c \uac00\ub871, \ubbf8\ub124\uae30\uc2dc \ub178\ubd80\uc57c\ud0a4",
            scenario:
              "\ud669\uc870\uc724, \uc784\uc900\ud615, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 111,
            year: 2003,
            title: "\uc7a5\ud654, \ud64d\ub828",
            dialogue:
              "\u201c\ub108... \uc9c4\uc9dc \ubb34\uc11c\uc6b4 \uac8c \ubb54 \uc904 \uc54c\uc544? \ubb54\uac00 \uc78a\uace0 \uc2f6\uc740 \uac8c \uc788\ub294\ub370, \uae68\ub057\ud558\uac8c \uc9c0\uc6cc\ubc84\ub9ac\uace0 \uc2f6\uc740 \uac8c \uc788\ub294\ub370, \ub3c4\uc800\ud788 \uc78a\uc9c0\ub3c4 \ubabb\ud558\uace0, \uc9c0\uc6cc\uc9c0\uc9c0\ub3c4 \uc54a\ub294 \uac70 \uc788\uc9c0. \uadfc\ub370 \uadf8\uac8c \ud3c9\uc0dd \ubd99\uc5b4 \ub2e4\ub140. \uc720\ub839\ucc98\ub7fc.\u201d",
            actor: "\uc5fc\uc815\uc544",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uae40\uc9c0\uc6b4",
            clip: "TRUE",
          },
          {
            id: 112,
            year: 2003,
            title: "\uc9c0\uad6c\ub97c \uc9c0\ucf1c\ub77c!",
            dialogue:
              "\u201c\uc800, \ud639\uc2dc \uace0\ud5a5\uc774 \uc548\ub4dc\ub85c\uba54\ub2e4 \uc544\ub2c8\uc2ed\ub2c8\uae4c?\u201d",
            actor: "\uc2e0\ud558\uade0",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 113,
            year: 2003,
            title: "\uc9c0\uad6c\ub97c \uc9c0\ucf1c\ub77c!",
            dialogue:
              "\u201c\ud558\ud06c \ud06c\uc0b0 \ud558\uc9c0\uc9c0\ud06c \ud30c\ud0a4.\u201d",
            keyword: "\uc678\uad6d\uc5b4",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 114,
            year: 2003,
            title: "\uc9c0\uad6c\ub97c \uc9c0\ucf1c\ub77c!",
            dialogue:
              "\u201c\uace0\ud1b5\uc774\ub77c\ub294 \uac74 \uc808\ub300\ub85c \uc775\uc219\ud574\uc9c8 \uc218\uac00 \uc5c6\uac70\ub4e0.\u201d",
            actor: "\uc2e0\ud558\uade0",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 115,
            year: 2003,
            title: "\uc9c0\uad6c\ub97c \uc9c0\ucf1c\ub77c!",
            dialogue:
              "\u201c\uc5ec\uae30 \ub4e4\uc5b4 \uc788\ub294 \ub9d0\ub808\uc778\uc0b0\ud074\ub85c\ub85c\ud398\ub2c8\ub77c\ubbfc\uc774 \ubab8\uc18d\uc5d0 \uce68\ud22c\ud558\uac8c \ub418\uba74 \uc800\ub188\ub4e4 \uc2e0\uacbd \uc804\ub2ec \ubb3c\uc9c8\uc778 \ud2b8\ub780\uc2a4\ud06c\ub9ac\uc0b0\ud14c\uba54\uc774\ud2b8\uc5d0 \ud611\ucc29\ud558\uac8c \ub418\uace0, \ud2b8\ub780\uc2a4\ud06c\ub9ac\uc0b0\ud14c\uba54\uc774\ud2b8\ub294 \ud2b8\ub784\ud2b8\ub9b0\uacfc \uba54\uc4f0\uba54\ud2b8\ub9b0, \uc774 \ub450 \uac00\uc9c0 \ubb3c\uc9c8\ub85c \ud30c\uad34\ub418\uac70\ub4e0. \uadf8\ub7fc, \uc800\ub188\uc740 \uc544\ubb34\ub7f0 \ud798\ub3c4 \ubabb \uc4f0\uac8c \ub418\ub294 \uac70\uc9c0.\u201d",
            actor: "\uc2e0\ud558\uade0",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uc7a5\uc900\ud658",
            clip: "TRUE",
          },
          {
            id: 116,
            year: 2003,
            title: "\uc9c0\uad6c\ub97c \uc9c0\ucf1c\ub77c!",
            dialogue:
              "\u201c\uc774\uc81c \uc5c4\ub9c8\ud55c\ud14c \uac08 \uc218 \uc788\uc5b4. \uadf8\ub7f0\ub370 \uc774\uc81c \uc9c0\uad6c\ub294 \ub204\uac00 \uc9c0\ud0a4\uc9c0?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uc2e0\ud558\uade0",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 117,
            year: 2003,
            title: "\uc9c8\ud22c\ub294 \ub098\uc758 \ud798",
            dialogue:
              "\u201c\ub204\ub098, \uadf8 \uc0ac\ub78c\uc774\ub791 \uc790\uc9c0 \ub9c8\uc694. \uaf2d \uc790\uc57c \ub41c\ub2e4\uba74 \ub098\ub791 \uc790\uc694. \ub098\ub3c4 \uc798\ud574\uc694.\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\ubc15\ud574\uc77c",
            director: "\ubc15\ucc2c\uc625",
            scenario: "\ubc15\ucc2c\uc625",
            clip: "TRUE",
          },
          {
            id: 118,
            year: 2003,
            title: "\ud074\ub798\uc2dd",
            dialogue:
              "\u201c\uc0ac\uc2e4, \ub09c \ud55c \uc5ec\uc790\ub9cc \uc88b\uc544\ud558\uc790\ub294 \uc8fc\uc758\ub294 \uc544\ub2c8\uc9c0\ub9cc \uadf8 \uc560\ud55c\ud150 \uc798\ud574\ubcfc \uc791\uc815\uc774\ub2e4.\u201d",
            character: "\ud559\uc0dd",
            keyword: "\uc5f0\uc560",
            actor: "\uc774\uae30\uc6b0",
            director: "\uacfd\uc7ac\uc6a9",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 119,
            year: 2003,
            title: "\ud074\ub798\uc2dd",
            dialogue:
              "\u201c\uc6b0\uc0b0 \uc788\ub294\ub370 \ube44\ub97c \ub9de\ub294 \uc0ac\ub78c\uc774 \uc5b4\ub514 \uc800 \ud558\ub098\ubfd0\uc774\uc5d0\uc694?\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uc190\uc608\uc9c4",
            director: "\uacfd\uc7ac\uc6a9",
            scenario: "\uacfd\uc7ac\uc6a9",
            clip: "FALSE",
          },
          {
            id: 120,
            year: 2003,
            title: "\ud669\uc0b0\ubc8c",
            dialogue:
              "\u201c\ub108\uac70\ub4e4 \ub300\uac08\ube61\uc5d0 \uae43\ubc1c\uc744 \ud655 \uaf3d\uc544\ubc84\ub824. \uadf8\ub7ec\uba74 \uc2dc\ubed8\uac74 \uc120\uc9c0\ud558\uace0 \uc0c8\ud558\uc580 \uace8\uc218\ub4e4\uc774 \uc6cc\ub9e4 \uc88b\uc740 \uac70 \ud558\uba70 \ud30d\ud30d \ud280\uc5b4\ubd88 \uac83\uc774\uc5ec, \uc774 \uc528\ubc8c\ub118\ub4e4\uc544.\u201d",
            keyword: "\uc695\uc124 \uc0ac\ud22c\ub9ac",
            actor: "\uae40\ud0c4\ud604",
            director: "\uc774\uc900\uc775",
            scenario: "\ucd5c\uc11d\ud658, \uc870\ucca0\ud604",
            clip: "FALSE",
          },
          {
            id: 121,
            year: 2004,
            title: "\ub0b4 \uba38\ub9ac \uc18d\uc758 \uc9c0\uc6b0\uac1c",
            dialogue:
              "\u201c\uc774\uac70 \ub9c8\uc2dc\uba74 \uc6b0\ub9ac \uc0ac\uadc0\ub294 \uac70\ub2e4.\u201d",
            keyword: "\uc5f0\uc560 \ubc08",
            actor: "\uc815\uc6b0\uc131",
            director: "\uc774\uc7ac\ud55c",
            scenario: "\uc774\uc7ac\ud55c",
            adaptation: "\uae40\uc601\ud558",
            clip: "FALSE",
          },
          {
            id: 122,
            year: 2004,
            title: "\ub291\ub300\uc758 \uc720\ud639",
            dialogue:
              "\u201c\uc5ec\uae30\uc11c \ub108\ud76c \uc9d1\uae4c\uc9c0 \ub531 5\ubd84 \uac78\ub9b0\ub2e4. \uadf8 \uc548\uc5d0 \ub300\ub2f5\ud574\ub77c. \ub098\ub791 \uc0ac\uadc8\ub798, \uc548 \uc0ac\uadc8\ub798?\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uc870\ud55c\uc120",
            director: "\uae40\ud0dc\uade0",
            source: "\uadc0\uc5ec\ub2c8",
            scenario: "\uae40\ud0dc\uade0",
            adaptation:
              "\uae40\uc815\uace4, \uac15\uac74\ud5a5, \uae40\uc778\uc131, \uac15\uc720\uc120, \uc774\uc778\uc131",
            clip: "FALSE",
          },
          {
            id: 123,
            year: 2004,
            title: "\ub9d0\uc8fd\uac70\ub9ac \uc794\ud639\uc0ac",
            dialogue:
              "\u201c\ub300\ud55c\ubbfc\uad6d \ud559\uad50 \uc886\uae4c\ub77c \uadf8\ub798!\u201d",
            character: "\ud559\uc0dd",
            keyword: "\ud559\uad50 \uc695\uc124  ",
            actor: "\uad8c\uc0c1\uc6b0",
            director: "\uc720\ud558",
            scenario: "\uc720\ud558",
            clip: "TRUE",
          },
          {
            id: 124,
            year: 2004,
            title: "\ub9d0\uc8fd\uac70\ub9ac \uc794\ud639\uc0ac",
            dialogue:
              "\u201c\uadf8\ub798, \uaf2d \uace0\ub4f1\ud559\uad50 \ub098\uc640\uc57c \ub300\ud559 \uac00\ub0d0? \uadfc\ub370 \uc774\uc18c\ub8e1\uc774\ub294 \ub300\ud559 \ub098\uc654\ub0d0?\u201d",
            actor: "\ucc9c\ud638\uc9c4",
            director: "\uc720\ud558",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 125,
            year: 2004,
            title: "\ubaa9\ud3ec\ub294 \ud56d\uad6c\ub2e4",
            dialogue:
              "\u201c\uc26d\uc26d, \uc774\uac83\uc740 \uc785\uc5d0\uc11c \ub098\ub294 \uc18c\ub9ac\uac00 \uc544\ub2c8\uc5ec. \uc26d~ \uc785\uc740 \uac00\ub9cc \uc788\uc796\ub140~\u201d",
            keyword: "\uc0ac\ud22c\ub9ac",
            actor: "\ubc15\ucca0\ubbfc",
            director: "\uae40\uc9c0\ud6c8",
            scenario: "\ud55c\uae30\ud604, \ub098\ud604, \uae40\uc9c0\ud6c8",
            adaptation:
              "\uc2e0\ubbf8\ud61c, \uc774\uae30\uc131, \uc774\uc131\ud638",
            clip: "FALSE",
          },
          {
            id: 126,
            year: 2004,
            title: "\ubc94\uc8c4\uc758 \uc7ac\uad6c\uc131",
            dialogue:
              "\u201c\uc778\uc0dd \ubb50 \uc788\uc5b4\uc694? \ubd80\uc870\ub9ac.\u201d",
            actor: "\uc774\ubb38\uc2dd",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 127,
            year: 2004,
            title: "\ubc94\uc8c4\uc758 \uc7ac\uad6c\uc131",
            dialogue:
              "\u201c\uc0ac\uae30\ub77c\ub294 \uac8c \ud138\uc5b4\uba39\uc744 \ub188\uc774 \ud14c\uc774\ube14\uc5d0 \uc549\uc544 \uc788\ub2e4? \uadf8\ub7fc \ub05d\ub09c \uac70\uc608\uc694. \ubb38\uc81c\ub294 \ud14c\uc774\ube14\uc5d0 \uc549\ud788\uae30 \uc704\ud574\uc11c \uc6b0\ub9ac\uac00 \uc5bc\ub9e4\ub098 \uacf5\uc744 \ub4e4\uc774\ub290\ub0d0.\u201d",
            actor: "\uc774\ubb38\uc2dd",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 128,
            year: 2004,
            title: "\ubc94\uc8c4\uc758 \uc7ac\uad6c\uc131",
            dialogue:
              "\u201c\uccad\uc9c4\uae30 \ub300\ubcf4\ub2c8\uae4c \uc9c4\ub2e8\uc774 \ub531 \ub098\uc628\ub2e4. \uc2dc\ucd94\uc5d0\uc774\uc158\uc774 \uc88b\uc544.\u201d",
            actor: "\ubc31\uc724\uc2dd",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 129,
            year: 2004,
            title: "\uc544\ub294 \uc5ec\uc790",
            dialogue:
              "\u201c\ub09c \uc624\ub298 \ub0a8\ub4e4\uc5d0\uac90 \ub2e4 \uc788\ub294\ub370 \ub0b4\uac8c \uc5c6\ub358 \uc138 \uac00\uc9c0\uac00 \uc0dd\uacbc\ub2e4. \ub09c \ub0b4\ub144\uc774 \uc0dd\uacbc\uace0, \ub09c \uc8fc\uc0ac\uac00 \uc0dd\uacbc\uace0, \ub09c... \uccab\uc0ac\ub791\uc774 \uc0dd\uacbc\ub2e4.\u201d",
            keyword: "\uc5f0\uc560 \ub3c5\ubc31",
            actor: "\uc815\uc7ac\uc601",
            director: "\uc7a5\uc9c4",
            scenario: "\uc7a5\uc9c4",
            clip: "FALSE",
          },
          {
            id: 130,
            year: 2004,
            title: "\ud6a8\uc790\ub3d9 \uc774\ubc1c\uc0ac",
            dialogue:
              "\u201c\uac01\ud558\uaed8\uc11c\ub3c4 \ucc38 \uc624\ub798 \ud558\uc2ed\ub2c8\ub2e4.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc784\ucc2c\uc0c1",
            scenario: "\uc784\ucc2c\uc0c1",
            adaptation: "\uc7a5\ubbfc\ud601, \uc7a5\ubbfc\uc11d",
            clip: "FALSE",
          },
          {
            id: 131,
            year: 2005,
            title: "\uadf8\ub54c \uadf8 \uc0ac\ub78c\ub4e4",
            dialogue:
              "\u201c\uc0c1\ud669\uc740 \ubcc0\ud558\ub294 \uac70\uc57c. \uc778\uc0dd\ub3c4 \uc138\uc0c1\ub3c4 \ub2e4 \ubcc0\ud574. \uc624\ub298 \ubcc0\ud55c\ub2e4.\u201d",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 132,
            year: 2005,
            title: "\uadf8\ub54c \uadf8 \uc0ac\ub78c\ub4e4",
            dialogue:
              "\u201c\uc5b4\ub54c\uc694, \uc800 \uc0ac\ub78c? \ud601\uba85\uc801 \ubbfc\uc8fc\ud22c\uc0ac\ub85c \ubcf4\uc785\ub2c8\uae4c? \uc544\ub2c8\uba74 \uacfc\ub300\ub9dd\uc0c1\uc5d0 \ube60\uc9c4 \ub3c8\ud0a4\ud638\ud14c\uc600\uc744\uae4c\uc694? \ubbfc\uc8fc\uc8fc\uc758\uc5d0 \ub300\ud55c \uc5f4\ub9dd\uc744 \ub2f4\uc740 \uc800 \uc0ac\ub0b4\uc758 \ubc95\uc815 \ucd5c\ud6c4\uc9c4\uc220\uc740 \uac10\ub3d9\uc801\uc774\uae30\uae4c\uc9c0 \ud558\ub2e4\ub294 \uc124\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uae00\uc384, \uad00\uc2ec \uc788\ub294 \ubd84\uc740 \ucc3e\uc544\uc11c \uc77d\uc5b4\ubcf4\uc2dc\ub3c4\ub85d.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "TRUE",
          },
          {
            id: 133,
            year: 2005,
            title: "\uadf9\uc7a5\uc804",
            dialogue:
              "\u201c\uc6b0\ub9ac \uc9c4\uc9dc \uc8fd\uc5b4\ubc84\ub9b4\ub798\uc694? \uc8fd\uc744 \ub9d8\ub9cc \uc788\uc73c\uba74, \ubc18 \ub144\ucbe4 \uc0b4\ub2e4 \uc8fd\uc744\ub798\uc694? \uadf8\ub7fc \uc9c4\uc9dc \uc0ac\ub791\ud560 \uc218 \uc788\uc744 \uac83 \uac19\uc740\ub370.\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            actor: "\uae40\uc0c1\uacbd",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 134,
            year: 2005,
            title: "\uadf9\uc7a5\uc804",
            dialogue:
              "\u201c\uc0dd\uac01\uc744 \ub354 \ud574\uc57c \ub3fc. \uc0dd\uac01\ub9cc\uc774 \ub098\ub97c \uc0b4\ub9b4 \uc218 \uc788\uc5b4. \uc8fd\uc9c0 \uc54a\uac8c \uc624\ub798 \uc0b4 \uc218 \uc788\ub3c4\ub85d.\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            actor: "\uae40\uc0c1\uacbd",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 135,
            year: 2005,
            title: "\ub2ec\ucf64\ud55c \uc778\uc0dd",
            dialogue:
              "\u201c\ub10c \ub098\uc5d0\uac8c \ubaa8\uc695\uac10\uc744 \uc92c\uc5b4.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\ubc08",
            actor: "\uae40\uc601\ucca0",
            director: "\uae40\uc9c0\uc6b4",
            source: "\uae40\uc9c0\uc6b4",
            scenario: "\uae40\uc9c0\uc6b4",
            clip: "TRUE",
          },
          {
            id: 136,
            year: 2005,
            title: "\ub9d0\uc544\ud1a4",
            dialogue:
              "\u201c\ucd08\uc6d0\uc774 \ub2e4\ub9ac\ub294\u201d \u201c\ubc31\ub9cc \ubd88\uc9dc\ub9ac \ub2e4\ub9ac.\u201d",
            actor: "\uc870\uc2b9\uc6b0, \uae40\ubbf8\uc219",
            director: "\uc815\uc724\ucca0",
            scenario:
              "\uc724\uc9c4\ud638, \uc1a1\uc608\uc9c4, \uc815\uc724\ucca0",
            clip: "FALSE",
          },
          {
            id: 137,
            year: 2005,
            title: "\ubc15\uc218\uce60 \ub54c \ub5a0\ub098\ub77c",
            dialogue:
              "\u201c\ub2c8 \ub204\uc774, \uc8fd\uae30 \uc804\uc5d0 \uc6b8\uace0 \uc788\uc5c8\ub2e4\ub354\ub77c. \ubc15\uc218 \ubc1b\uc73c\uba70 \uac00\uace0 \uc2f6\uc5b4 \ud588\uaca0\uc9c0\ub9cc \uadf8 \uc5ec\uc794 \uc6b8\ub2e4\uac00 \uc8fd\uc5c8\ub2e4\ub354\ub77c. \uc6b4\uc774 \uc5c6\ub294 \ub0a8\ub9e4\uc57c, \ubd88\uc30d\ud55c \ub0a8\ub9e4\uc9c0. \uc8fd\uc73c\uba74\uc11c \uc6b8\uace0, \uc8fd\uc774\uc9c0 \ubabb\ud574 \ub610 \uc6b8\uace0.\u201d",
            character: "\uac80\uc0ac",
            actor: "\ucc28\uc2b9\uc6d0",
            director: "\uc7a5\uc9c4",
            source: "\uc7a5\uc9c4",
            scenario: "\uc7a5\uc9c4",
            clip: "FALSE",
          },
          {
            id: 138,
            year: 2005,
            title: "\uc655\uc758 \ub0a8\uc790",
            dialogue:
              "\u201c\uc544, \ub098 \uc5ec\uae30 \uc788\uace0 \ub108 \uac70\uae30 \uc788\uc9c0.\u201d",
            character: "\uad11\ub300",
            actor: "\uc774\uc900\uae30",
            director: "\uc774\uc900\uc775",
            source: "\uae40\ud0dc\uc6c5",
            scenario: "\ucd5c\uc11d\ud658",
            clip: "FALSE",
          },
          {
            id: 139,
            year: 2005,
            title: "\uc655\uc758 \ub0a8\uc790",
            dialogue:
              "\u201c\uc9d5\ud55c \ub188\uc758 \uc774 \uc138\uc0c1. \ud55c\ud310 \uc2e0\ub098\uac8c \ub180\ub2e4\uac00\uba74 \uadf8\ubfd0. \uad11\ub300\ub85c \ub2e4\uc2dc \ub9cc\ub098 \uc81c\ub300\ub85c \ud55c\ubc88 \ub9de\ucdb0\ubcf4\uc790!\u201d",
            character: "\uad11\ub300",
            actor: "\uac10\uc6b0\uc131",
            director: "\uc774\uc900\uc775",
            source: "\uae40\ud0dc\uc6c5",
            scenario: "\ucd5c\uc11d\ud658",
            clip: "TRUE",
          },
          {
            id: 140,
            year: 2005,
            title: "\uc6f0\ucef4 \ud22c \ub3d9\ub9c9\uace8",
            dialogue:
              "\u201c\uc5ec\uac00 \ub728\uac70\uc640. \uc5ec \ubc30\uac00 \ub728\uac70\uc640. \ub9c8\uc774 \uc544\ud30c.\u201d",
            keyword: "\uc0ac\ud22c\ub9ac",
            actor: "\uac15\ud61c\uc815",
            director: "\ubc15\uad11\ud604",
            source: "\uc7a5\uc9c4",
            scenario: "\uc7a5\uc9c4, \ubc15\uad11\ud604, \uae40\uc911",
            clip: "FALSE",
          },
          {
            id: 141,
            year: 2005,
            title: "\uc6f0\ucef4 \ud22c \ub3d9\ub9c9\uace8",
            dialogue:
              "\u201c\uadfc\ub370\uc694, \uc6b0\ub9ac\ub3c4! \uc5f0\ud569\uad70\uc785\ub2c8\uae4c? \uc9c0\uae08 \uc6b0\ub9ac\ub3c4 \ubd81\ub0a8 \ud569\uc791 \ubd80\ub300 \uc544\uc785\ub2c8\uae4c? \ub0b4 \ub9d0\uc774 \ud2c0\ub9ac\uc624?\u201d",
            character: "\ubd81\ud55c\uad70",
            keyword: " ",
            actor: "\ub958\ub355\ud658",
            director: "\ubc15\uad11\ud604",
            source: "\uc7a5\uc9c4",
            scenario: "\uc7a5\uc9c4, \ubc15\uad11\ud604, \uae40\uc911",
            clip: "FALSE",
          },
          {
            id: 142,
            year: 2005,
            title: "\uc6f0\ucef4 \ud22c \ub3d9\ub9c9\uace8",
            dialogue:
              "\u201c\uc774\ub807\uac8c \ub9d0\uace0 \ub2e4\ub978 \ub370\uc11c \ub2e4\ub974\uac8c \ub9cc\ub0ac\uc73c\uba74 \uc6b0\ub9ac \uc9c4\uc9dc \uc7ac\ubc0c\uc5c8\uc744 \ud150\ub370, \uc548 \uadf8\ub798\uc694?\u201d",
            keyword: "  \uc804\uc7c1",
            actor: "\uc2e0\ud558\uade0",
            director: "\ubc15\uad11\ud604",
            source: "\uc7a5\uc9c4",
            scenario: "\uc7a5\uc9c4, \ubc15\uad11\ud604, \uae40\uc911",
            clip: "FALSE",
          },
          {
            id: 143,
            year: 2005,
            title: "\uce5c\uc808\ud55c \uae08\uc790\uc528",
            dialogue: "\u201c\ub108\ub098 \uc798\ud558\uc138\uc694.\u201d",
            keyword: "\ubc08",
            actor: "\uc774\uc601\uc560",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 144,
            year: 2005,
            title: "\uce5c\uc808\ud55c \uae08\uc790\uc528",
            dialogue:
              "\u201c\uae30\ub3c4\ub294 \uc774\ud0dc\ub9ac\ud0c0\uc6d4\uc774\uc57c. \uaecd\uc9c8\uc774 \ubc97\uaca8\uc9c0\ub3c4\ub85d \ube61\ube61 \ubc00\uc5b4\uc11c \uc8c4\ub97c \ubc97\uaca8\ub0b4. \uadf8\ub7fc \uc560\uae30 \uc18d\uc0b4\ub85c \ubcc0\ud574. \uc54c\uc558\uc9c0?\u201d",
            actor: "\uc774\uc601\uc560",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 145,
            year: 2005,
            title: "\uce5c\uc808\ud55c \uae08\uc790\uc528",
            dialogue:
              "\u201c\uce5c\uc808\ud574 \ubcf4\uc77c\uae4c\ubd10.\u201d",
            actor: "\uc774\uc601\uc560",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 146,
            year: 2005,
            title: "\uce5c\uc808\ud55c \uae08\uc790\uc528",
            dialogue:
              "\u201c\uc608\ubed0\uc57c \ub3fc, \ubb50\ub4e0\uc9c0 \uc608\uc05c \uac8c \uc88b\uc544.\u201d",
            actor: "\uc774\uc601\uc560",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 147,
            year: 2006,
            title: "\uac00\uc871\uc758 \ud0c4\uc0dd",
            dialogue:
              "\u201c\ud5e4\ud508 \uac70 \ub098\uc05c \uac70\uc57c?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uc815\uc720\ubbf8",
            director: "\uae40\ud0dc\uc6a9",
            scenario: "\uc131\uae30\uc601, \uae40\ud0dc\uc6a9",
            clip: "TRUE",
          },
          {
            id: 148,
            year: 2006,
            title: "\uac00\uc871\uc758 \ud0c4\uc0dd",
            dialogue:
              "\u201c\uadf8\uae5f \uc5f0\uc560\uac00 \ubb50\ub77c\uace0 \uc774\ub807\uac8c\ub4e4 \ub098\uc058\uac8c \uc0b4\uc544\uc694?\u201d",
            keyword: "\uc5f0\uc560 \uc678\ub3c4",
            actor: "\uacf5\ud6a8\uc9c4",
            director: "\uae40\ud0dc\uc6a9",
            scenario: "\uc131\uae30\uc601, \uae40\ud0dc\uc6a9",
            clip: "FALSE",
          },
          {
            id: 149,
            year: 2006,
            title: "\uad34\ubb3c",
            dialogue:
              "\u201c\ub2c8\ub4e4, \uadf8 \ub0c4\uc0c8 \ub9e1\uc544\ubcf8 \uc801 \uc788\uc5b4? \uc0c8\ub07c \uc783\uc740 \ubd80\ubaa8 \uc18d \ub0c4\uc0c8\ub97c \ub9e1\uc544\ubcf8 \uc801\uc774 \uc788\ub0d0, \uc774 \ub9d0\uc774\uc5ec. \ubd80\ubaa8 \uc18d\uc774 \ud55c \ubc88 \uc369\uc5b4 \ubb38\ub4dc\ub7ec\uc9c0\uba74 \uadf8 \ub0c4\uc0c8\uac00 \uc2ed \ub9ac \ubc16\uae4c\uc9c0 \uc9c4\ub3d9\ud558\ub294 \uac70\uc5ec.\u201d",
            actor: "\ubcc0\ud76c\ubd09",
            director: "\ubd09\uc900\ud638",
            scenario:
              "\ud558\uc900\uc6d0, \ubd09\uc900\ud638, \ubc31\ucca0\ud604",
            clip: "FALSE",
          },
          {
            id: 150,
            year: 2006,
            title: "\uad34\ubb3c",
            dialogue:
              "\u201c\uc0ac\ub9dd\uc794\ub370\uc694, \uc0ac\ub9dd\uc744 \uc548 \ud588\uc5b4\uc694.\u201d",
            keyword: "\uc5b8\uc5b4\uc720\ud76c",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            scenario:
              "\ud558\uc900\uc6d0, \ubd09\uc900\ud638, \ubc31\ucca0\ud604",
            clip: "FALSE",
          },
          {
            id: 151,
            year: 2006,
            title: "\uad34\ubb3c",
            dialogue:
              "\u201c\ub2ac\ub4e4 \ubc29\uae08 \ubd24\ub0d0? \ubc11\uc5d0 \ub9d0\uc774\uc57c\u2026 \ubb3c\uc18d\uc5d0\u2026 \ubb50, \ucee4\ub2e4\ub797\uace0 \uc2dc\ucee4\uba3c \uac8c \ubb3c\uc18d\uc5d0\u2026 \uc815\ub9d0 \ubabb \ubd24\uc5b4?\u201d",
            keyword: "\uc720\uc5b8",
            actor: "\uc870\uc5f0",
            director: "\ubd09\uc900\ud638",
            scenario:
              "\ud558\uc900\uc6d0, \ubd09\uc900\ud638, \ubc31\ucca0\ud604",
            clip: "FALSE",
          },
          {
            id: 152,
            year: 2006,
            title: "\ub2ec\ucf64, \uc0b4\ubc8c\ud55c \uc5f0\uc778",
            dialogue:
              "\u201c\uc5b4\uc81c\ub294 \uc464\uc2dc\uace0, \uc624\ub298\uc740 \uc370\uace0. \ub9db\uc788\uc5b4?\u201d",
            actor: "\uc870\uc740\uc9c0",
            director: "\uc190\uc7ac\uace4",
            scenario: "\uc190\uc7ac\uace4",
            clip: "FALSE",
          },
          {
            id: 153,
            year: 2006,
            title: "\ub2ec\ucf64, \uc0b4\ubc8c\ud55c \uc5f0\uc778",
            dialogue:
              "\u201c\ud558\uace0\uc790 \ud558\ub294 \uc758\uc9c0\ub9cc \uc788\uc73c\uba74 \ubb50\ub97c \ubabb \ud558\ub294\ub370!\u201d",
            character: "\uc870\ud3ed",
            actor: "\uc815\uacbd\ud638",
            director: "\uc190\uc7ac\uace4",
            scenario: "\uc190\uc7ac\uace4",
            clip: "FALSE",
          },
          {
            id: 154,
            year: 2006,
            title: "\ub77c\ub514\uc624 \uc2a4\ud0c0",
            dialogue:
              "\u201c\ub178\ub798 \ud558\uace0 \uc2f6\uc5b4\uc9c8\uae4c \ubd10.\u201d",
            actor: "\ubc15\uc911\ud6c8",
            director: "\uc774\uc900\uc775",
            scenario: "\ucd5c\uc11d\ud658",
            clip: "FALSE",
          },
          {
            id: 155,
            year: 2006,
            title: "\ub77c\ub514\uc624\uc2a4\ud0c0",
            dialogue:
              "\u201c\ucc9c\ubb38\ub300\uc5d0\uc11c \ubcc4 \ubcfc \ub54c \ud615\uc774 \uadf8\ub7ac\uc9c0? \uc790\uae30 \ud63c\uc790 \ube5b\ub098\ub294 \ubcc4 \uc5c6\ub2e4\uace0. \uc640\uc11c \uc880 \ube44\ucdb0 \uc8fc\ub77c... \ud615, \ub0b4 \ub9d0 \ub4e3\uace0 \uc788\uc5b4? \ub4e3\uace0 \uc788\uc73c\uba74 \ub3cc\uc544\uc640.\u201d",
            actor: "\ubc15\uc911\ud6c8",
            director: "\uc774\uc900\uc775",
            scenario: "\ucd5c\uc11d\ud658",
            clip: "FALSE",
          },
          {
            id: 156,
            year: 2006,
            title: "\ubbf8\ub140\ub294 \uad34\ub85c\uc6cc",
            dialogue:
              "\u201c\ub0a8\uc790\ud55c\ud14c \uc5ec\uc790\ub294 \ub531 \uc138 \uc885\ub958\ubfd0\uc774\uc57c. \uc5b4? \ubd10\ubd10. \uc774\uc05c \uc5ec\uc790, \uba85\ud488\uc774\uc9c0? \ud3c9\ubc94\ud55c \uc5ec\uc790, \uc9c4\ud488\uc774\uace0. \ub108? \ubc14\ub85c \ubc18\ud488\uc774\uc57c, \uc54c\uc5b4?\u201d",
            actor: "\uae40\ud604\uc219",
            director: "\uae40\uc6a9\ud654",
            scenario: "\uae40\uc6a9\ud654",
            adaptation: "\ub178\ud61c\uc601",
            clip: "FALSE",
          },
          {
            id: 157,
            year: 2006,
            title: "\ubbf8\ub140\ub294 \uad34\ub85c\uc6cc",
            dialogue:
              "\u201c\uac00\uc2b4\uc744 \ucc22\uc5b4\ub193\uace0 \ud734\uc9c0\ub85c \ub418\uaca0\uc5b4\uc694?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uae40\uc544\uc911",
            director: "\uae40\uc6a9\ud654",
            scenario: "\uae40\uc6a9\ud654",
            adaptation: "\ub178\ud61c\uc601",
            clip: "FALSE",
          },
          {
            id: 158,
            year: 2006,
            title: "\ube44\uc5f4\ud55c \uac70\ub9ac",
            dialogue:
              "\u201c\uac74\ub2ec\uc740 \ub9d0\uc774\uc5ec... \uad76\uc5b4 \ub4a4\uc838\ub3c4 \uc790\uc874\uc2ec \ud558\ub098\ub85c \uac00\ub294 \uac70\uc5ec. \uc790\uc874\uc2ec \ubc84\ub9ac\ub294 \uc21c\uac04 \ubb50\ub2e4? \uc591\uc544\uce58\ub2e4.\u201d",
            character: "\uc870\ud3ed",
            actor: "\uc870\uc778\uc131",
            director: "\uc720\ud558",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 159,
            year: 2006,
            title: "\ube44\uc5f4\ud55c \uac70\ub9ac",
            dialogue:
              "\u201c\uc55e\uc73c\ub85c \uc8fc\uba39\uc73c\ub85c \ud574\uacb0\ud558\ub824\uace0 \ud558\uc9c0 \ub9c8\ub77c. \uc9c0\uae08 \uc138\uc0c1\uc774 \uc5b4\ub290 \ub550\ub370 \uc804\uc7c1\uc774\ub0d0. \uc774\uc81c \uc0ac\uc2dc\ubbf8\ub85c \ud558\uba74 \ub2e4 \ub9dd\ud574\uc694. \uacc4\uc0b0\uae30\ub85c \ud574\uc57c\uc9c0.\u201d",
            character: "\uc870\ud3ed",
            actor: "\ucc9c\ud638\uc9c4",
            director: "\uc720\ud558",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 160,
            year: 2006,
            title: "\ube44\uc5f4\ud55c \uac70\ub9ac",
            dialogue:
              "\u201c\ubcd1\ub450\uc57c, \uc138\uc0c1\uc5d0\uc11c \uc131\uacf5\ud558\ub824\uba74 \ub531 \ub450 \uac00\uc9c0\ub9cc \uc54c\uba74 \ub3fc. \ub098\ud55c\ud14c \ud544\uc694\ud55c \uc0ac\ub78c\uc774 \ub204\uad70\uc9c0, \uadf8 \uc0ac\ub78c\uc774 \ubb58 \ud544\uc694\ub85c \ud558\ub294\uc9c0.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\uc138\ud0dc",
            actor: "\ucc9c\ud638\uc9c4",
            director: "\uc720\ud558",
            scenario: "\uc720\ud558",
            clip: "FALSE",
          },
          {
            id: 161,
            year: 2006,
            title: "\uc0ac\uc0dd\uacb0\ub2e8",
            dialogue:
              "\u201c\uc138\uc0c1\uc740 \ub2aa\uc774\ub2e4. \ub204\uad70\uac00\ub294 \ubc18\ub4dc\uc2dc \uc545\uc5b4\uac00 \ub418\uace0 \ub204\uad70\uac00\ub294 \ubc18\ub4dc\uc2dc \uc545\uc5b4\uc0c8\uac00 \ub41c\ub2e4. \ub2aa\uc744 \uac74\ub108\uace0 \ub610 \uac74\ub108\ubbc4 \uc5b8\uc820\uac00\ub294 \ub0b4\ub3c4 \uc545\uc5b4\uac00 \ub41c\ub2e4.\u201d",
            character: "\uc870\ud3ed",
            actor: "\ub958\uc2b9\ubc94",
            director: "\ucd5c\ud638",
            scenario: "\uc724\ub355\uc6d0, \ucd5c\ud638",
            clip: "FALSE",
          },
          {
            id: 162,
            year: 2006,
            title: "\uc2f8\uc6c0\uc758 \uae30\uc220",
            dialogue:
              "\u201c\ub108, \ub0b4 \ubab8\uc5d0 \ud55c\ubc88\ub9cc \ub354 \uc190\ub300\uba74 \uadf8\ub550 \ud53c\ub625 \uc2fc\ub2e4.\u201d",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc2e0\ud55c\uc194",
            scenario:
              "\uc2e0\ud55c\uc194, \ubbfc\ub3d9\ud604, \ubcc0\uc2b9\ud604, \ud5c8\uc778\uc11d, \uc0ac\ubb34\uc5d8",
            clip: "FALSE",
          },
          {
            id: 163,
            year: 2006,
            title: "\uc2f8\uc6c0\uc758 \uae30\uc220",
            dialogue:
              "\u201c\ub450\ub824\uc6c0, \ub9de\uc544 \ubcf8 \uc790\uc758 \ub450\ub824\uc6c0 \ub9d0\uc774\ub2e4. \uadf8\uac78 \ub0a0\ub824 \ubcf4\ub0b4\uc57c \ub3fc.\u201d",
            keyword: "\ub2f9\ubd80",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc2e0\ud55c\uc194",
            scenario:
              "\uc2e0\ud55c\uc194, \ubbfc\ub3d9\ud604, \ubcc0\uc2b9\ud604, \ud5c8\uc778\uc11d, \uc0ac\ubb34\uc5d8",
            clip: "FALSE",
          },
          {
            id: 164,
            year: 2006,
            title: "\uc2f8\uc6c0\uc758 \uae30\uc220",
            dialogue:
              "\u201c\ub9c8\uc74c\uc774 \uc8fd\uc73c\uba74 \ubab8\ub3c4 \uc8fd\ub294 \uac70\uc57c.\u201d",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc2e0\ud55c\uc194",
            scenario:
              "\uc2e0\ud55c\uc194, \ubbfc\ub3d9\ud604, \ubcc0\uc2b9\ud604, \ud5c8\uc778\uc11d, \uc0ac\ubb34\uc5d8",
            clip: "FALSE",
          },
          {
            id: 165,
            year: 2006,
            title: "\uc2f8\uc774\ubcf4\uadf8\uc9c0\ub9cc \uad1c\ucc2e\uc544",
            dialogue:
              "\u201c\ud76c\ub9dd\uc744 \ubc84\ub824. \uadf8\ub9ac\uace0 \ud798\ub0b4.\u201d",
            actor: "\uc774\uc601\ubbf8",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 166,
            year: 2006,
            title: "\uc6b0\ub9ac\ub4e4\uc758 \ud589\ubcf5\ud55c \uc2dc\uac04",
            dialogue:
              "\u201c\ubb34\uc11c\uc6cc\uc694. \uc560\uad6d\uac00\ub97c \ubd88\ub800\ub294\ub370\ub3c4 \ubb34\uc11c\uc6cc\uc694.\u201d",
            keyword: "\uc720\uc5b8",
            actor: "\uac15\ub3d9\uc6d0",
            director: "\uc1a1\ud574\uc131",
            source: "\uacf5\uc9c0\uc601",
            scenario: "\uc7a5\ubbfc\uc11d, \ubc15\uc740\uc601",
            clip: "FALSE",
          },
          {
            id: 167,
            year: 2006,
            title: "\uc9dd\ud328",
            dialogue:
              "\u201c\uac15\ud55c \ub188\uc774 \uc624\ub798\uac00\ub294 \uac8c \uc544\ub2c8\ub77c, \uc624\ub798 \uac00\ub294 \ub188\uc774 \uac15\ud55c \uac70\ub354\ub77c.\u201d",
            actor: "\uc774\ubc94\uc218",
            director: "\ub958\uc2b9\uc644",
            scenario:
              "\uc774\uc6d0\uc7ac, \ub958\uc2b9\uc644, \uae40\uc815\ubbfc",
            clip: "TRUE",
          },
          {
            id: 168,
            year: 2006,
            title: "\ucc9c\ud558\uc7a5\uc0ac \ub9c8\ub3c8\ub098",
            dialogue:
              "\u201c\uc54c\uc544. \ubd84\uba85\ud788 \ub098, \uc544\uc8fc \ubabb\uc0dd\uae34 \uc5ec\uc790\uac00 \ub420 \uac70\uc57c.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\ub958\ub355\ud658",
            director: "\uc774\ud574\uc900, \uc774\ud574\uc601",
            adaptation: "\uc774\ud574\uc601, \uc774\ud574\uc900",
            clip: "TRUE",
          },
          {
            id: 169,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue:
              "\u201c\uc190\uc740 \ub208\ubcf4\ub2e4 \ube60\ub974\ub2e4.\u201d",
            keyword: "\ub3c4\ubc15 \uc138\uacc4",
            actor: "\ubc31\uc724\uc2dd",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            adaptation: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 170,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue:
              "\u201c\ub098 \uc774\ub300 \ub098\uc628 \uc5ec\uc790\uc57c!\u201d",
            keyword: "\ubc08",
            actor: "\uae40\ud61c\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            adaptation: "\ucd5c\ub3d9\ud6c8",
            clip: "TRUE",
          },
          {
            id: 171,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue:
              "\u201c\ud654\ub780\uc544, \ub098\ub3c4 \uc21c\uc815\uc774 \uc788\ub2e4. \ub124\uac00 \uc774\ub7f0 \uc2dd\uc73c\ub85c \ub0b4 \uc21c\uc815\uc744 \uc9d3\ubc1f\uc73c\uba74\uc740 \uc778\ub9c8! \uadf8\ub54c\ub294 \uae61\ud328\uac00 \ub418\ub294 \uac70\uc57c!\u201d",
            character: "\uc870\ud3ed",
            actor: "\uae40\uc751\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 172,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue: "\u201c\ubb3b\uace0 \ub354\ube14\ub85c \uac00.\u201d",
            keyword: "\ub3c4\ubc15 \uc138\uacc4 \ubc08",
            actor: "\uae40\uc751\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 173,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue:
              "\u201c\ub9c8\ud3ec\ub300\uad50\ub294 \ubb34\ub108\uc84c\ub0d0, \uc774 \uc0c8\ub07c\uc57c?\u201d",
            keyword: "\ubc08",
            actor: "\uae40\uc751\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 174,
            year: 2006,
            title: "\ud0c0\uc9dc",
            dialogue:
              "\u201c\ud654\ud22c\ub294 \uc190\uc774 \uc544\ub2c8\uc57c, \ub9c8\uc74c\uc73c\ub85c \uce58\ub294 \uae30\uc9c0.\u201d",
            keyword: "\ub3c4\ubc15 \uc138\uacc4",
            actor: "\uc8fc\uc9c4\ubaa8",
            director: "\ucd5c\ub3d9\ud6c8",
            source: "\uae40\uc138\uc601, \ud5c8\uc601\ub9cc",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 175,
            year: 2007,
            title: "\ubc00\uc591",
            dialogue:
              "\u201c\uadf8 \uc778\uac04 \uc774\ubbf8 \uc6a9\uc11c\ubc1b\uc558\ub300 \ud558\ub098\ub2d8\ud55c\ud14c. \uadf8\ub798\uc11c \ub9c8\uc74c\uc758 \ud3c9\ud654\ub97c \uc5bb\uc5c8\ub300\uc694... \ub09c \uc774\ub807\uac8c \uad34\ub85c\uc6b4\ub370, \uadf8 \uc778\uac04\uc740 \ud558\ub098\ub2d8\uc758 \uc0ac\ub791\uc73c\ub85c \uc6a9\uc11c\ubc1b\uace0 \uad6c\uc6d0 \ubc1b\uc558\uc5b4\uc694. \uc5b4\ub5bb\uac8c \uadf8\ub7ec\uc2e4 \uc218 \uc788\uc5b4\uc694? \uc65c, \uc65c!\u201d",
            keyword: "\uc885\uad50 \ubc18\ubb38",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\uc774\ucc3d\ub3d9",
            source: "\uc774\uccad\uc900",
            scenario: "\uc774\ucc3d\ub3d9",
            clip: "TRUE",
          },
          {
            id: 176,
            year: 2007,
            title: "\ubc00\uc591",
            dialogue:
              "\u201c\ub611\uac19\uc544\uc608, \uc0ac\ub78c \uac00\ub294 \uac8c \ub2e4 \ub611\uac19\uc9c0\uc608.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc774\ucc3d\ub3d9",
            source: "\uc774\uccad\uc900",
            scenario: "\uc774\ucc3d\ub3d9",
            clip: "FALSE",
          },
          {
            id: 177,
            year: 2008,
            title: "\uacfc\uc18d\uc2a4\uce94\ub4e4",
            dialogue:
              "\u201c\ub108 \uc560\uae4c\uc9c0 \uc788\ub294 \uc560\uac00 \uc560 \uad50\uc721\uc5d0 \uc560\ub97c \uc368\uc57c\uc9c0.\u201d",
            keyword: "\uc5b8\uc5b4\uc720\ud76c",
            actor: "\ucc28\ud0dc\ud604",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 178,
            year: 2008,
            title: "\uacfc\uc18d\uc2a4\uce94\ub4e4",
            dialogue:
              "\u201c\ubbf8\ud63c\ubaa8\ub3c4 \ud558\uace0 \uc2f6\uc740 \uac70 \ub9ce\uc544\uc694.\u201d",
            actor: "\ubc15\ubcf4\uc601",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 179,
            year: 2008,
            title: "\ubbf8\uc4f0 \ud64d\ub2f9\ubb34",
            dialogue:
              "\u201c\uc0ac\ub78c\uc774 \uadf8\ub7f0 \ube44\uc0c1\uc2dd\uc801\uc778 \ud589\ub3d9\uc744 \ud560 \ub54c\ub294 \uadf8\ub7f4 \ub9cc\ud55c \uc774\uc720\uac00 \uc788\ub294 \uac70\uaca0\uc9c0. \uc591\uc591\ub3c4 \uc0ac\ub78c\uc778\ub370!\u201d",
            actor: "\ubc29\uc740\uc9c4",
            director: "\uc774\uacbd\ubbf8",
            scenario:
              "\uc774\uacbd\ubbf8, \ubc15\uc740\uad50, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 180,
            year: 2008,
            title: "\ubbf8\uc4f0 \ud64d\ub2f9\ubb34",
            dialogue:
              "\u201c\ub098\ub3c4 \uc54c\uc544! \ub0b4\uac00 \ubcc4\ub85c\ub77c\ub294 \uac70! \ub0b4\uac00 \ub0b4\uac00 \uc544\ub2c8\uc5c8\uc73c\uba74, \ub2e4\ub4e4 \uc774\ub807\uac8c \ub098\ud55c\ud14c \uc548 \ud588\uc744 \uac70\uba74\uc11c!\u201d",
            keyword: "\uc5f0\uc560 \ud56d\ubcc0",
            actor: "\uacf5\ud6a8\uc9c4",
            director: "\uc774\uacbd\ubbf8",
            scenario:
              "\uc774\uacbd\ubbf8, \ubc15\uc740\uad50, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 181,
            year: 2008,
            title: "\ubbf8\uc4f0 \ud64d\ub2f9\ubb34",
            dialogue:
              "\u201c\uc544\ub2c8, \uc138\ucee8\ub4dc\uba74 \ub410\uc9c0, \uc65c \uc774\ub9ac \uc695\uc2ec\uc774 \ub9ce\uc544\uc694?\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uacf5\ud6a8\uc9c4",
            director: "\uc774\uacbd\ubbf8",
            scenario:
              "\uc774\uacbd\ubbf8, \ubc15\uc740\uad50, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 182,
            year: 2008,
            title: "\uc544\ub0b4\uac00 \uacb0\ud63c\ud588\ub2e4",
            dialogue:
              "\u201c\ud558\ub098\ub97c \ubc18\uc73c\ub85c \ub098\ub204\ub294 \uac8c \uc544\ub2c8\ub77c, \ub450 \ubc30\uac00 \ub418\ub294 \uac8c \uc544\ub2d0\uae4c?\u201d",
            keyword: "\uacb0\ud63c",
            actor: "\uc190\uc608\uc9c4",
            director: "\uc815\uc724\uc218",
            source: "\ubc15\ud604\uc6b1",
            scenario: "\uc1a1\ud61c\uc9c4",
            adaptation: "\ub958\ud6c8, \uc815\uc724\uc218",
            clip: "FALSE",
          },
          {
            id: 183,
            year: 2008,
            title: "\uc544\ub0b4\uac00 \uacb0\ud63c\ud588\ub2e4",
            dialogue:
              "\u201c\ub0b4\uac00 \ubcc4\uc744 \ub530 \ub2ec\ub798, \ub2ec\uc744 \ub530 \ub2ec\ub798, \uadf8\ub0e5 \ub0a8\ud3b8 \ud558\ub098 \ub354 \uac16\uaca0\ub2e4\ub294 \uac83\ubfd0\uc778\ub370.\u201d",
            keyword: "\uacb0\ud63c",
            actor: "\uc190\uc608\uc9c4",
            director: "\uc815\uc724\uc218",
            source: "\ubc15\ud604\uc6b1",
            scenario: "\uc1a1\ud61c\uc9c4",
            adaptation: "\ub958\ud6c8, \uc815\uc724\uc218",
            clip: "FALSE",
          },
          {
            id: 184,
            year: 2008,
            title: "\uc6b0\ub9ac \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04",
            dialogue:
              "\u201c\uac10\ub3c5\uc774 \uc120\uc218\ub4e4 \ubabb \ubbff\uc73c\uba74 \uadf8 \uacbd\uae34 \ud558\ub098\ub9c8\ub098 \ubc31\uc804\ubc31\ud328\uc57c. \uc808\ub300 \ubabb \uc774\uaca8.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uae40\uc815\uc740",
            director: "\uc784\uc21c\ub840",
            scenario: "\ub098\ud604",
            adaptation: "\uc784\uc21c\ub840",
            clip: "FALSE",
          },
          {
            id: 185,
            year: 2008,
            title: "\uc6b0\ub9ac \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04",
            dialogue:
              "\u201c\ub098 \ud3ec\uae30 \uc548 \ud560 \uac70\uac70\ub4e0? \ub098 \ub05d\uae4c\uc9c0 \ud574\ub0bc \uac70\ub2c8\uae4c \ub2f9\uc2e0\ub3c4 \ud3ec\uae30\ud558\uc9c0 \ub9c8.\u201d",
            keyword: "\ub2f9\ubd80",
            actor: "\ubb38\uc18c\ub9ac",
            director: "\uc784\uc21c\ub840",
            scenario: "\ub098\ud604",
            adaptation: "\uc784\uc21c\ub840",
            clip: "FALSE",
          },
          {
            id: 186,
            year: 2008,
            title: "\uc6b0\ub9ac \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04",
            dialogue:
              "\u201c\uacb0\uacfc\uac00 \uc5b4\ub5bb\uac8c \ub418\ub4e0 \uc624\ub298 \uc5ec\ub7ec\ubd84\uc740 \uc5ec\ub7ec\ubd84\ub4e4 \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04\uc744 \ubcf4\uc5ec\uc92c\uc2b5\ub2c8\ub2e4. \uc81c\uac8c\ub3c4 \uc9c0\uae08\uc774 \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uc5c4\ud0dc\uc6c5",
            director: "\uc784\uc21c\ub840",
            scenario: "\ub098\ud604",
            adaptation: "\uc784\uc21c\ub840",
            clip: "FALSE",
          },
          {
            id: 187,
            year: 2008,
            title:
              "\uc88b\uc740 \ub188, \ub098\uc05c \ub188, \uc774\uc0c1\ud55c \ub188",
            dialogue:
              "\u201c\ub9c8\uc801\uc774 \uae30\ucc28\ud45c\ub97c \ub4e4\uace0 \uae30\ucc28 \ud0c4\ub2f5\ub2c8\uae4c? \uc138\uc6cc\uc57c\uc8e0.\u201d",
            keyword: "\ud5c8\uc138",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uae40\ubbfc\uc11d, \uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 188,
            year: 2008,
            title:
              "\uc88b\uc740 \ub188, \ub098\uc05c \ub188, \uc774\uc0c1\ud55c \ub188",
            dialogue:
              "\u201c\ubb34\uc5b8\uac00\ub97c \uc5bb\uae30 \uc704\ud574\uc11c \ubb34\uc5b8\uac00\ub97c \ucad3\uc544\uac00\uac8c \ub418\uba74 \ub2e4\ub978 \ubb34\uc5b8\uac00\uac00 \ucad3\uc544\uc624\uac8c \ub3fc \uc788\uc5b4.\u201d",
            actor: "\uc815\uc6b0\uc131",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uae40\ubbfc\uc11d, \uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 189,
            year: 2008,
            title: "\ucd94\uaca9\uc790",
            dialogue: "\u201c\uc57c 4885, \ub108\uc9c0?\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\ub098\ud64d\uc9c4",
            scenario: "\ub098\ud64d\uc9c4",
            adaptation: "\uc774\uc2e0\ud638, \ud64d\uc6d0\ucc2c",
            clip: "TRUE",
          },
          {
            id: 190,
            year: 2009,
            title: "\uae40\uc528\ud45c\ub958\uae30",
            dialogue:
              "\u201c\uc804\ud574 \ub2ec\ub798\uc694. \uc790\uae30\ud55c\ud14c \uc9dc\uc7a5\uba74\uc740 \ud76c\ub9dd\uc774\ub798\uc694.\u201d",
            actor: "\ubc15\uc601\uc11c",
            director: "\uc774\ud574\uc900",
            scenario: "\uc774\ud574\uc900",
            clip: "FALSE",
          },
          {
            id: 191,
            year: 2009,
            title: "\uae40\uc528\ud45c\ub958\uae30",
            dialogue:
              "\u201c\ub0a8\uc790\uac00 \ubcf4\ub0b4\uc628 \uc774 \uac70\ub300\ud55c \ud76c\ub9dd\uc744 \ub9db\ubcf4\uae30\ub85c \ud569\ub2c8\ub2e4.\u201d",
            keyword: "\ub3c5\ubc31",
            actor: "\uc815\ub824\uc6d0",
            director: "\uc774\ud574\uc900",
            scenario: "\uc774\ud574\uc900",
            clip: "FALSE",
          },
          {
            id: 192,
            year: 2009,
            title: "\uae40\uc528\ud45c\ub958\uae30",
            dialogue:
              "\u201c\ub2ec\uc5d0\ub294 \uc544\ubb34\ub3c4 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc544\ubb34\ub3c4 \uc5c6\uc73c\uba74, \uc678\ub86d\uc9c0 \uc54a\uc73c\ub2c8\uae4c\uc694.\u201d",
            keyword: "\uace0\ub3c5 \ub3c5\ubc31",
            actor: "\uc815\ub824\uc6d0",
            director: "\uc774\ud574\uc900",
            scenario: "\uc774\ud574\uc900",
            clip: "FALSE",
          },
          {
            id: 193,
            year: 2009,
            title: "\uae40\uc528\ud45c\ub958\uae30",
            dialogue:
              "\u201c\ub354 \uc774\uc0c1 \ubc14\ub784 \uac8c \uc5c6\ub294 \uc644\ubcbd\ud55c \uc2ec\uc2ec\ud568\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uc815\uc7ac\uc601",
            director: "\uc774\ud574\uc900",
            scenario: "\uc774\ud574\uc900",
            clip: "FALSE",
          },
          {
            id: 194,
            year: 2009,
            title: "\ub9c8\ub354",
            dialogue:
              "\u201c\ub9de\uc544 \ub9de\uc544. \ub204\uad6c\ub098 \ub2e4 \uc0b4\uc778\ud560 \uc218 \uc788\uc5b4. \ubb34\uc2a8 \uc790\uaca9\uc99d\uc774 \uc788\uc5b4\uc57c \ub418\ub098?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uae40\ubcd1\uc21c",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubc15\uc740\uad50, \ubd09\uc900\ud638",
            clip: "FALSE",
          },
          {
            id: 195,
            year: 2009,
            title: "\ub9c8\ub354",
            dialogue:
              "\u201c\uc0ac\uc2e4\uc740... \uc6b0\ub9ac \uc544\ub4e4\uc774 \uc548 \uadf8\ub7ac\uac70\ub4e0\uc694.\u201d",
            actor: "\uae40\ud61c\uc790",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubc15\uc740\uad50, \ubd09\uc900\ud638",
            clip: "FALSE",
          },
          {
            id: 196,
            year: 2009,
            title: "\ub9c8\ub354",
            dialogue:
              "\u201c\uc798\ub410\ub124\uc694. \ub098\uc05c \uc77c, \ub054\ucc0d\ud55c \uc77c \uc774 \uc18d\ubcd1 \ub098\uae30 \uc88b\uac8c \uac00\uc2b4\uc5d0 \uafb9 \ub9fa\ud78c \uac70 \uae68\ub057\ud558\uac8c \uc2f9 \ud480\uc5b4\uc8fc\ub294 \uce68 \uc790\ub9ac\uac00 \uc788\uac70\ub4e0\uc694. \ud5c8\ubc85\uc9c0 \ucabd\uc5d0.\u201d",
            actor: "\uae40\ud61c\uc790",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubc15\uc740\uad50, \ubd09\uc900\ud638",
            clip: "FALSE",
          },
          {
            id: 197,
            year: 2009,
            title: "\ub9c8\ub354",
            dialogue:
              "\u201c\ub108... \ubd80\ubaa8\ub2d8\uc740 \uacc4\uc2dc\ub2c8? \uc5c4\ub9c8 \uc5c6\uc5b4?\u201d",
            actor: "\uae40\ud61c\uc790",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubc15\uc740\uad50, \ubd09\uc900\ud638",
            clip: "FALSE",
          },
          {
            id: 198,
            year: 2009,
            title: "\ubc15\uc950",
            dialogue:
              "\u201c\ud574\ud53c \ubc84\uc2a4\ub370\uc774, \ud0dc\uc8fc \uc528.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc5d0\ubc00 \uc878\ub77c",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 199,
            year: 2009,
            title: "\ubc15\uc950",
            dialogue:
              "\u201c\uc5ec\uc6b0\uac00 \ub2ed \uc7a1\uc544\uba39\ub294 \uac8c \uc8c4\ub0d0?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uae40\uc625\ube48",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc5d0\ubc00 \uc878\ub77c",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 200,
            year: 2009,
            title: "\ubc15\uc950",
            dialogue:
              "\u201c\ud0dc\uc8fc \uc528\ub791 \uc624\ub798\uc624\ub798 \uc0b4\uace0 \uc2f6\uc5c8\ub294\ub370 \uc9c0\uc625\uc5d0\uc11c \ub9cc\ub098\uc694.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc5d0\ubc00 \uc878\ub77c",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 201,
            year: 2009,
            title: "\uc798 \uc54c\uc9c0\ub3c4 \ubabb\ud558\uba74\uc11c",
            dialogue:
              "\u201c\ub098\uc911\uc5d0 \ub0b4 \uc598\uae30 \uc601\ud654\ub85c \ub9cc\ub4e4\uc9c0 \ub9c8\uc694. \uc57d\uc18d\ud574 \uc918\uc694.\u201d",
            keyword: "\uc601\ud654",
            actor: "\uace0\ud604\uc815",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 202,
            year: 2009,
            title: "\uc798 \uc54c\uc9c0\ub3c4 \ubabb\ud558\uba74\uc11c",
            dialogue:
              "\u201c\ub531 \uc544\ub294 \ub9cc\ud07c\ub9cc, \uc548\ub2e4\uace0 \ud574\uc694.\u201d",
            actor: "\uace0\ud604\uc815",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 203,
            year: 2009,
            title: "\uc798 \uc54c\uc9c0\ub3c4 \ubabb\ud558\uba74\uc11c",
            dialogue:
              "\u201c\uc80a\uc73c\ub2c8\uae4c, \ub0a8\uc790\ub2c8\uae4c, \ub0b4\uac00 \uc2ec\uc2ec\ud558\ub2c8\uae4c. \ub2f9\uc2e0\ub4e4\ub3c4 \uadf8\ub7ec\uc796\uc544?\u201d",
            actor: "\uace0\ud604\uc815",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 204,
            year: 2009,
            title: "\uc804\uc6b0\uce58",
            dialogue:
              "\u201c\ub531 \uc8fd\uae30 \uc88b\uc740 \ubc24\uc774\ub124.\u201d",
            actor: "\uc784\uc218\uc815",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 205,
            year: 2009,
            title: "\uc804\uc6b0\uce58",
            dialogue:
              "\u201c\ub098, \uc774 \ucd08\ub7ad\uc774. \ub354\ub7ec\uc6b4 \uc778\uac04\uc774 \ub418\ub290\ub2c8 \ucc28\ub77c\ub9ac \uc544\ub984\ub2e4\uc6b4 \uac1c\ub85c \uc8fd\uace0 \uc2f6\ub2e4.\u201d",
            actor: "\uc720\ud574\uc9c4",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 206,
            year: 2009,
            title: "\ud574\uc6b4\ub300",
            dialogue:
              "\u201c\ub2f9\uc2e0\uc740\uc694... \ub531! \uc624\ud6c4 \uc138 \uc2dc \uac19\uc740 \uc0ac\ub78c\uc774\uc5d0\uc694. \uc9c4\uc9dc \uc5b4\uca61\uca61\ud558\uc796\uc544\uc694. \uc624\ud6c4 \uc138 \uc2dc. \ubb58 \ud558\uae30\uc5d0\ub294 \ub108\ubb34 \ub2a6\uace0 \uadf8\ub807\ub2e4\uace0 \uadf8\ub9cc\ub450\uae30\uc5d0\ub294 \ub108\ubb34 \uc774\ub974\uace0...\u201d",
            keyword: "\uc5f0\uc560 \uace0\ubc31",
            actor: "\uac15\uc608\uc6d0",
            director: "\uc724\uc81c\uade0",
            scenario: "\uc724\uc81c\uade0, \uae40\ud718",
            adaptation:
              "\uc720\uc131\ud611, \uad8c\ud601\uc7ac, \uc815\uc6b0\ucca0, \uc774\uc2b9\uc5f0",
            clip: "FALSE",
          },
          {
            id: 207,
            year: 2009,
            title: "\ud574\uc6b4\ub300",
            dialogue:
              "\u201c\uc624\ube60\uc57c, \uac00\uc9c0 \ub9c8\ub77c! \ub2c8 \ub0b4 \uc190 \ub193\uc73c\uba74 \uc9c1\uc774\ubfd0\ub2e4!\u201d",
            actor: "\ud558\uc9c0\uc6d0",
            director: "\uc724\uc81c\uade0",
            scenario: "\uc724\uc81c\uade0, \uae40\ud718",
            adaptation:
              "\uc720\uc131\ud611, \uad8c\ud601\uc7ac, \uc815\uc6b0\ucca0, \uc774\uc2b9\uc5f0",
            clip: "FALSE",
          },
          {
            id: 208,
            year: 2010,
            title: "\uae40\uc885\uc6b1 \ucc3e\uae30",
            dialogue:
              "\u201c\uadf8\ub798\uc57c \ub9c8\uc74c\uc774 \ub193\uc5ec\uc694. \ub05d\uc744 \uc548 \ub0b4\uba74 \uc88b\uc740 \ub290\ub08c \uadf8\ub300\ub85c \ub450\uace0\ub450\uace0 \ub0a8\uc796\uc544\uc694.\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\uc784\uc218\uc815",
            director: "\uc7a5\uc720\uc815",
            source: "\uc7a5\uc720\uc815",
            scenario: "\uc774\uacbd\uc758",
            adaptation: "\uc7a5\uc720\uc815",
            clip: "FALSE",
          },
          {
            id: 209,
            year: 2010,
            title: "\uae40\uc885\uc6b1 \ucc3e\uae30",
            dialogue:
              "\u201c\uc778\uc5f0\uc744 \ubd99\uc7a1\uc544\uc57c \uc6b4\uba85\uc774 \ub418\ub294 \uac70\uc9c0.\u201d",
            keyword: "\uc0ac\ub791 \uc778\uc5f0",
            actor: "\ucc9c\ud638\uc9c4",
            director: "\uc7a5\uc720\uc815",
            source: "\uc7a5\uc720\uc815",
            scenario: "\uc774\uacbd\uc758",
            adaptation: "\uc7a5\uc720\uc815",
            clip: "FALSE",
          },
          {
            id: 210,
            year: 2010,
            title: "\ub0b4 \uae61\ud328 \uac19\uc740 \uc560\uc778",
            dialogue:
              "\u201c\ud504\ub791\uc2a4 \ubc31\uc218 \uc560\ub4e4\uc740 \uc77c\uc790\ub9ac \ub2ec\ub77c\uace0 \ub2e4 \ub54c\ub824\ubd80\uc2dc\uace0 \uac1c\uc9c0\ub784\uc744 \ub5a8\ub358\ub370, \uc6b0\ub9ac\ub098\ub77c \ubc31\uc218 \uc560\ub4e4\uc740 \ub2e4 \uc9c0 \ud0d3\uc778 \uc904 \uc54c\uc544\uc694.\u201d",
            actor: "\ubc15\uc911\ud6c8",
            director: "\uae40\uad11\uc2dd",
            scenario: "\uae40\uad11\uc2dd",
            clip: "TRUE",
          },
          {
            id: 211,
            year: 2010,
            title: "\ubd80\ub2f9\uac70\ub798",
            dialogue:
              "\u201c\ud638\uc758\uac00 \uacc4\uc18d\ub418\uba74\uc740 \uadf8\uac8c \uad8c\ub9ac\uc778 \uc904 \uc54c\uc544\uc694.\u201d",
            keyword: "\ubc08",
            actor: "\ub958\uc2b9\ubc94",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ubc15\ud6c8\uc815",
            adaptation:
              "\ub958\uc2b9\uc644, \ud55c\uc7ac\ub355, \uc5ec\ubbf8\uc815",
            clip: "TRUE",
          },
          {
            id: 212,
            year: 2010,
            title: "\uc2dc",
            dialogue:
              "\u201c\uadf8\uacf3\uc740 \uc5b4\ub5a4\uac00\uc694, \uc5bc\ub9c8\ub098 \uc801\ub9c9\ud558\ub098\uc694...\u201d",
            character: "\ub178\uc778",
            actor: "\uc724\uc815\ud76c",
            director: "\uc774\ucc3d\ub3d9",
            scenario: "\uc774\ucc3d\ub3d9",
            clip: "TRUE",
          },
          {
            id: 213,
            year: 2010,
            title: "\uc544\uc800\uc528",
            dialogue:
              "\u201c\ub0b4\uc77c\ub9cc \uc0ac\ub294 \ub188\uc740 \uc624\ub298\ub9cc \uc0ac\ub294 \ub188\ud55c\ud14c \uc8fd\ub294\ub2e4. \ub09c \uc624\ub298\ub9cc \uc0b0\ub2e4. \uadf8\uac8c \uc5bc\ub9c8\ub098 \uc886\uac19\uc740 \uac74\uc9c0 \ub0b4\uac00 \ubcf4\uc5ec\uc904\uac8c.\u201d",
            actor: "\uc6d0\ube48",
            director: "\uc774\uc815\ubc94",
            scenario: "\uc774\uc815\ubc94",
            clip: "FALSE",
          },
          {
            id: 214,
            year: 2010,
            title: "\uc544\uc800\uc528",
            dialogue:
              "\u201c\uc544\uc9c1 \ud55c \ubc1c \ub0a8\uc558\ub2e4.\u201d",
            actor: "\uc6d0\ube48",
            director: "\uc774\uc815\ubc94",
            scenario: "\uc774\uc815\ubc94",
            clip: "FALSE",
          },
          {
            id: 215,
            year: 2010,
            title: "\uc545\ub9c8\ub97c \ubcf4\uc558\ub2e4",
            dialogue:
              "\u201c\uc8fc\uc5f0\uc544, \uc774\uac83\ub9cc\uc740 \uc57d\uc18d\ud560\uac8c. \ub124\uac00 \ubc1b\uc740 \uace0\ud1b5, \uadf8\ub188\ud55c\ud14c \ucc9c \ubc30 \ub9cc \ubc30 \ub3cc\ub824\uc904\uac8c.\u201d",
            keyword: "\ub3c5\ubc31",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\ubc15\ud6c8\uc815",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 216,
            year: 2010,
            title: "\uc545\ub9c8\ub97c \ubcf4\uc558\ub2e4",
            dialogue:
              "\u201c\uc65c \uc774\ub807\uac8c \uc57d\ud55c \ucc99\ud574? \uc774\uc81c \uc2dc\uc791\uc778\ub370. \uae30\uc5b5\ud574\ub46c. \uc810\uc810 \ub054\ucc0d\ud574\uc9c8 \uac70\uc57c.\u201d",
            keyword: "\ubc94\uc8c4",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\ubc15\ud6c8\uc815",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 217,
            year: 2010,
            title: "\uc545\ub9c8\ub97c \ubcf4\uc558\ub2e4",
            dialogue:
              "\u201c\uc0ac\ub78c\uc774 \uc9d0\uc2b9\uc744 \uc0c1\ub300\ud558\uc790\uace0 \uc9d0\uc2b9\uc774 \ub418\uba74 \ub418\uaca0\uc218?\u201d",
            character: "\ud615\uc0ac",
            keyword: "\ubc94\uc8c4",
            actor: "\ucc9c\ud638\uc9c4",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\ubc15\ud6c8\uc815",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 218,
            year: 2010,
            title: "\uc625\ud76c\uc758 \uc601\ud654",
            dialogue:
              "\u201c\uc800\ub294 \uc7ac\ubbf8\uac00 \uc5c6\uc5b4\uc694. \uadf8\ub807\uac8c \uae54\ub54c\uae30\ub85c \ubaa8\uc544\ub193\uc740 \uac70 \uac19\uc740 \uac70\ub294.\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            keyword: "\uc601\ud654",
            actor: "\uc774\uc120\uade0",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "TRUE",
          },
          {
            id: 219,
            year: 2010,
            title: "\uc758\ud615\uc81c",
            dialogue:
              "\u201c\ubb54 \ube68\uac31\uc774\uac00 \uadf8\ub807\uac8c \ub3c8\uc744 \ubc1d\ud600?\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc7a5\ud6c8",
            scenario: "\uc7a5\ubbfc\uc11d",
            adaptation: "\uc7a5\ud6c8, \ucd5c\uad00\uc601, \uae40\uc8fc\ud638",
            clip: "FALSE",
          },
          {
            id: 220,
            year: 2010,
            title: "\uc758\ud615\uc81c",
            dialogue:
              "\u201c\uc800\ub294 \ub204\uad6c\ub3c4 \ubc30\uc2e0\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\u201d",
            actor: "\uac15\ub3d9\uc6d0",
            director: "\uc7a5\ud6c8",
            scenario: "\uc7a5\ubbfc\uc11d",
            adaptation: "\uc7a5\ud6c8, \ucd5c\uad00\uc601, \uae40\uc8fc\ud638",
            clip: "FALSE",
          },
          {
            id: 221,
            year: 2010,
            title: "\uc774\ub07c",
            dialogue:
              "\u201c\uac00\ubcbc\uc6b4 \ub3c4\ub451\uc740 \uac89\uc744 \ud6d4\uce58\uc9c0\ub9cc \uc9c4\uc9dc \uc545\ub9c8\ub294 \ub9c8\uc74c\uc744 \ud6d4\uce5c\ub2e4 \uc544\uc774\uac00.\u201d",
            actor: "\uc774\ucca0\ubbfc",
            director: "\uac15\uc6b0\uc11d",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc815\uc9c0\uc6b0",
            clip: "FALSE",
          },
          {
            id: 222,
            year: 2010,
            title: "\uc774\ub07c",
            dialogue:
              "\u201c\ub108 \uc774\ub07c \uc544\ub0d0? \uc774\ub07c. \uc870\uc6a9\ud788 \uc0b4\uc544, \uc774\ub07c\ucc98\ub7fc. \ubc14\uc704\uc5d0 \ucad9 \ubd99\uc5b4 \uc785 \ub2e5\uce58\uace0.\u201d",
            character: "\uac80\uc0ac",
            actor: "\uc720\uc900\uc0c1",
            director: "\uac15\uc6b0\uc11d",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc815\uc9c0\uc6b0",
            clip: "FALSE",
          },
          {
            id: 223,
            year: 2010,
            title: "\uc774\ub07c",
            dialogue:
              "\u201c\ub2c8\ub294 \uc2e0\uc774 \ub420\ub77c\ucf14\ub098? \ub0b4\ub294 \uc778\uac04\uc774 \ub420\ub77c\ucf14\ub2e4!\u201d",
            actor: "\uc815\uc7ac\uc601",
            director: "\uac15\uc6b0\uc11d",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc815\uc9c0\uc6b0",
            clip: "FALSE",
          },
          {
            id: 224,
            year: 2010,
            title: "\uc774\uce35\uc758 \uc545\ub2f9",
            dialogue:
              "\u201c\ud55c\uad6d \ub0a8\uc790\ub4e4\uc740 \ub098\uc774 \ucc98\uba39\uc5b4 \uac00\uc9c0\uace0 \uc544\uc800\uc528 \ub418\uba74\uc740 \uc544\ubb34\ud55c\ud14c\ub098 \uc870\uc5b8\ud558\uace0 \ucda9\uace0\ud558\uace0 \uadf8\ub798\ub3c4 \ub418\ub294 \uc790\uaca9\uc99d \uac19\uc740 \uac8c \uad6d\uac00\uc5d0\uc11c \ubc1c\uae09\ub418\ub098 \ubd10?\u201d",
            keyword: "\uc5ec\uc131 \uc138\ud0dc",
            actor: "\uae40\ud61c\uc218",
            director: "\uc190\uc7ac\uace4",
            scenario: "\uc190\uc7ac\uace4",
            clip: "TRUE",
          },
          {
            id: 225,
            year: 2010,
            title: "\ud398\uc2a4\ud2f0\ubc1c",
            dialogue:
              "\u201c\uae30\ubd09\uc544, \uc6b0\ub9ac \uc9c0\uc625 \uac00\uc790.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uc2ec\ud61c\uc9c4",
            director: "\uc774\ud574\uc601",
            scenario: "\uc774\ud574\uc601, \uc774\ud574\uc900",
            clip: "TRUE",
          },
          {
            id: 226,
            year: 2010,
            title: "\ud558\ub140",
            dialogue:
              "\u201c\uc544\ub354\uba54\uce58\ud55c \uc9d3\uc774\uc57c, \uc774\uac8c. \uc544\ub2c8\uaf3d\uace0 \ub354\ub7fd\uace0 \uba54\uc2a4\uaecd\uace0 \uce58\uc0ac\ud558\ub2e4\uad6c.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 227,
            year: 2010,
            title: "\ud558\ub140",
            dialogue:
              "\u201c\uc544\uc90c\ub9c8, \ub098 \ucc0d\uc18c\ub9ac \ub77c\ub3c4 \uc880 \ub0b4\uc57c\uaca0\ub2e4\uace0\uc694!\u201d",
            keyword: "\uacc4\uae09",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 228,
            year: 2010,
            title: "\ud558\ub140",
            dialogue:
              "\u201c\uc9c0\uae08\ubd80\ud130 \ud558\uace0 \uc2f6\uc740 \uc77c \uc788\uc73c\uba74 \uc9c1\uc811\ub4e4 \ud558\uc138\uc694. \ub09c \uc548 \ud558\ub2c8\uae4c, \uc774\uc81c.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 229,
            year: 2011,
            title: "\ub3c4\uac00\ub2c8",
            dialogue:
              "\u201c\uc6b0\ub9ac\uac00 \uc2f8\uc6cc\uc57c \ud558\ub294 \uac74 \uc138\uc0c1\uc744 \ubc14\uafb8\uae30 \uc704\ud574\uc11c\uac00 \uc544\ub2c8\ub77c \uc138\uc0c1\uc774 \uc6b0\ub9ac\ub97c \ubc14\uafb8\uc9c0 \ubabb\ud558\uac8c \ud558\uae30 \uc704\ud574\uc11c\ub77c\uace0.\u201d",
            keyword: " ",
            actor: "\uc815\uc720\ubbf8",
            director: "\ud669\ub3d9\ud601",
            source: "\uacf5\uc9c0\uc601",
            scenario: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 230,
            year: 2011,
            title: "\ub9cc\ucd94",
            dialogue: "\u201cThis man used my fork.\u201d",
            keyword: "\uc678\uad6d\uc5b4",
            actor: "\ud604\ube48",
            director: "\uae40\ud0dc\uc6a9",
            source: "\uae40\uc9c0\ud5cc",
            scenario: "\uae40\ud0dc\uc6a9",
            adaptation: "\ubbfc\uc608\uc9c0",
            clip: "FALSE",
          },
          {
            id: 231,
            year: 2011,
            title: "\uc368\ub2c8",
            dialogue:
              "\u201c\uadf8\uac74 \ube59\uc0b0\uc774\uace0 \uc774 \ube59\uc2e0\uc544.\u201d",
            keyword: "\uc695\uc124 \uc5b8\uc5b4\uc720\ud76c",
            actor: "\uac15\uc18c\ub77c",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 232,
            year: 2011,
            title: "\uc368\ub2c8",
            dialogue:
              "\u201c\uc5b4\uba38 \ubbf8\uce5c\ub144, \ub10c \uc8fc\ub315\uc774\uac00 \uc790\uc720\ubd84\ubc29\ud558\uad6c\ub098.\u201d",
            keyword: "\uc695\uc124",
            actor: "\ubc15\uc9c4\uc8fc",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 233,
            year: 2011,
            title: "\uc368\ub2c8",
            dialogue:
              "\u201c\ub0b4\uac00 \uc608\ubed0\uc11c \ubbf8\uc548\ud574. \ub0b4\uac00 \uc798\ubabb\ud588\uc5b4. \ub098 \uc774\uc81c \uadf8\ub9cc \uc608\uc060\uac8c.\u201d",
            actor: "\ubbfc\ud6a8\ub9b0",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 234,
            year: 2011,
            title: "\uc368\ub2c8",
            dialogue:
              "\u201c\ucd98\ud654\uc57c, \uace0\ub9c8\uc6cc. \ub098 \uaf64 \uc624\ub7ab\ub3d9\uc548 \uc5c4\ub9c8, \uc9d1\uc0ac\ub78c\uc73c\ub85c\ub9cc \uc0b4\uc558\uac70\ub4e0. \uc778\uac04 \uc784\ub098\ubbf8, \uc544\ub4dd\ud55c \uae30\uc5b5 \uc800\ud3b8\uc774\uc5c8\ub294\ub370 \ub098\ub3c4 \uc5ed\uc0ac\uac00 \uc788\ub294, \uc801\uc5b4\ub3c4 \ub0b4 \uc778\uc0dd\uc740 \uc8fc\uc778\uacf5\uc774\ub354\ub77c\uace0.\u201d",
            actor: "\uc720\ud638\uc815",
            director: "\uac15\ud615\ucca0",
            scenario: "\uac15\ud615\ucca0",
            adaptation: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 235,
            year: 2011,
            title: "\uc644\ub4dd\uc774",
            dialogue:
              "\u201c\uac00\ub09c\ud55c \uac8c \ucabd\ud314\ub9b0 \uac8c \uc544\ub2c8\ub77c \uad76\uc5b4 \uc8fd\ub294 \uac8c \ucabd\ud314\ub9b0 \uac70\uc57c. \uc774 \uc0c8\ub07c\ub4e4\uc544.\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\uc774\ud55c",
            source: "\uae40\ub824\ub839",
            scenario: "\uae40\ub3d9\uc6b0",
            adaptation: "\uc774\ud55c, \uc774\ud574\uc81c",
            clip: "FALSE",
          },
          {
            id: 236,
            year: 2011,
            title: "\uc644\ub4dd\uc774",
            dialogue:
              "\u201c\ub625\uc8fc\ud55c\ud14c \ud5cc\uae08 \uc5bc\ub9c8\ub098 \ubc1b\uc544\uba39\uc73c\uc168\uc5b4\uc694. \uc81c\uac00 \ub098\uc911\uc5d0 \ub3c8 \ubc8c\uba74\uc694, \ub625\uc8fc\ubcf4\ub2e4 \ub9cc \uc6d0 \ub354 \ub0b4\uaca0\uc2b5\ub2c8\ub2e4. \ud558\ub098\ub2d8 \ub3c8 \uc88b\uc544\ud558\uc2dc\uc796\uc544\uc694. \uadf8\ub7ec\ub2c8\uae4c \ub625\uc8fc... \ub625\uc8fc \uc880 \uc8fd\uc5ec\uc8fc\uc138\uc694. \ub625\uc8fc \uaf2d \uc880 \uc8fd\uc5ec\uc8fc\uc138\uc694. \uc544\uba58.\u201d",
            character: "\ud559\uc0dd",
            actor: "\uc720\uc544\uc778",
            director: "\uc774\ud55c",
            source: "\uae40\ub824\ub839",
            scenario: "\uae40\ub3d9\uc6b0",
            adaptation: "\uc774\ud55c, \uc774\ud574\uc81c",
            clip: "FALSE",
          },
          {
            id: 237,
            year: 2011,
            title: "\uc644\ub4dd\uc774",
            dialogue:
              "\u201c\uc704\uc778\ub4e4\uc5d0\uac90 \ud638\uac00 \uc788\ub2e4. \ubc31\ubc94 \uae40\uad6c, \ub3c4\uc0b0 \uc548\ucc3d\ud638. \ub09c... \uc580\ub9c8 \ub3c4\uc644\ub4dd!\u201d",
            actor: "\uc720\uc544\uc778",
            director: "\uc774\ud55c",
            source: "\uae40\ub824\ub839",
            scenario: "\uae40\ub3d9\uc6b0",
            adaptation: "\uc774\ud55c, \uc774\ud574\uc81c",
            clip: "FALSE",
          },
          {
            id: 238,
            year: 2011,
            title: "\uc644\ub4dd\uc774",
            dialogue:
              "\u201c\ub0b4\uac00 \uc0b4\uc544 \ubcf4\ub2c8\uae4c \ub300\ud559\ub9cc \ub300\ud559\uc774 \uc544\ub2c8\uc57c. \uc138\uc0c1\uc774 \ub2e4 \ub300\ud559\uc774\ub354\ub77c.\u201d",
            keyword: "\uc9c0\ud61c",
            actor: "\uae40\uc724\uc11d",
            director: "\uc774\ud55c",
            source: "\uae40\ub824\ub839",
            scenario: "\uae40\ub3d9\uc6b0",
            adaptation: "\uc774\ud55c, \uc774\ud574\uc81c",
            clip: "FALSE",
          },
          {
            id: 239,
            year: 2011,
            title: "\ud30c\uc218\uafbc",
            dialogue:
              "\u201c\ub108\uae4c\uc9c0 \ub098\ud55c\ud14c \uc774\ub7ec\uba74 \uc548 \ub3fc, \uc9c4\uc9dc. \uc57c, \ub108\ub9cc\ud07c\uc740 \ub098\ud55c\ud14c \uc788\uc5b4\uc11c \uc9c4\uc9dc...\u201d",
            character: "\ud559\uc0dd",
            actor: "\uc774\uc81c\ud6c8",
            director: "\uc724\uc131\ud604",
            scenario: "\uc724\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 240,
            year: 2012,
            title: "\uac74\ucd95\ud559\uac1c\ub860",
            dialogue:
              "\u2018\uc18c\ub140\uc2dc\ub300\u2019\ub0a9\ub4dd\uc774 \uc548 \ub418\ub124, \ub0a9\ub4dd\uc774.\u201d",
            keyword: "\uc5b8\uc5b4\uc720\ud76c",
            actor: "\uc870\uc815\uc11d",
            director: "\uc774\uc6a9\uc8fc",
            scenario: "\uc774\uc6a9\uc8fc",
            adaptation:
              "\uae40\uc9c0\ud61c, \ubbfc\uc18c\uc5f0, \uc774\uad11\uc7ac",
            clip: "FALSE",
          },
          {
            id: 241,
            year: 2012,
            title: "\uac74\ucd95\ud559\uac1c\ub860",
            dialogue:
              "\u201c\uadf8\u2026 \uc345\ub144\uc774 \ub098\uc57c?\u201d",
            keyword: "\uc5f0\uc560 \uc695\uc124",
            actor: "\ud55c\uac00\uc778",
            director: "\uc774\uc6a9\uc8fc",
            scenario: "\uc774\uc6a9\uc8fc",
            adaptation:
              "\uae40\uc9c0\ud61c, \ubbfc\uc18c\uc5f0, \uc774\uad11\uc7ac",
            clip: "FALSE",
          },
          {
            id: 242,
            year: 2012,
            title: "\uad11\ud574, \uc655\uc774 \ub41c \ub0a8\uc790",
            dialogue:
              "\u201c\uadf8\ub300\ub4e4\uc774 \uc8fd\uace0 \ubabb \uc0ac\ub294 \uc0ac\ub300\uc758 \uc608\ubcf4\ub2e4 \ub0b4 \ub098\ub77c, \ub0b4 \ubc31\uc131\uc774 \uc5f4\uac11\uc808 \ubc31\uac11\uc808\uc740 \ub354 \uc18c\uc911\ud558\uc624.\u201d",
            character: "\uc655",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\ucd94\ucc3d\ubbfc",
            scenario: "\ud669\uc870\uc724",
            adaptation: "\ucd94\ucc3d\ubbfc",
            clip: "FALSE",
          },
          {
            id: 243,
            year: 2012,
            title: "\uad11\ud574, \uc655\uc774 \ub41c \ub0a8\uc790",
            dialogue:
              "\u201c\ub0b4 \uafc8\uc740 \ub0b4\uac00 \uafb8\uaca0\uc18c\uc774\ub2e4.\u201d",
            character: "\uc655",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\ucd94\ucc3d\ubbfc",
            scenario: "\ud669\uc870\uc724",
            adaptation: "\ucd94\ucc3d\ubbfc",
            clip: "FALSE",
          },
          {
            id: 244,
            year: 2012,
            title: "\ub0b4 \uc544\ub0b4\uc758 \ubaa8\ub4e0 \uac83",
            dialogue:
              "\u201c\uc138\uc0c1\uc5d0\ub294 \ub450 \ubd80\ub958\uc758 \uc5ec\uc790\ub4e4\uc774 \uc788\uc5b4. \uc6b0\uc5f0\uc744 \ubbff\ub294 \uc5ec\uc790\uc640 \ubbff\uc9c0 \uc54a\ub294 \ucc99\ud558\ub294 \uc5ec\uc790.\u201d",
            actor: "\ub958\uc2b9\ub8e1",
            director: "\ubbfc\uaddc\ub3d9",
            source: "\ud6c4\uc548 \ud0c0\ub77c\ud22c\ud1a0",
            scenario: "\ud5c8\uc131\ud61c, \ubbfc\uaddc\ub3d9",
            clip: "FALSE",
          },
          {
            id: 245,
            year: 2012,
            title: "\ub0b4 \uc544\ub0b4\uc758 \ubaa8\ub4e0 \uac83",
            dialogue:
              "\u201c\uce68\ubb35\uc5d0 \uae38\ub4e4\uc5ec\uc9c0\ub294 \uac74 \uc815\ub9d0 \ubb34\uc11c\uc6b4 \uc77c\uc774\uc5d0\uc694.\u201d",
            actor: "\uc784\uc218\uc815",
            director: "\ubbfc\uaddc\ub3d9",
            source: "\ud6c4\uc548 \ud0c0\ub77c\ud22c\ud1a0",
            scenario: "\ud5c8\uc131\ud61c, \ubbfc\uaddc\ub3d9",
            clip: "FALSE",
          },
          {
            id: 246,
            year: 2012,
            title: "\ub3c4\ub451\ub4e4",
            dialogue:
              "\u201c\ub108, \ubca4\uce20\ub3c4 \ud55c \ubc88 \ud0c0\uba74 \uc911\uace0\ub2e4.\u201d",
            actor: "\uae40\ud574\uc219",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 247,
            year: 2012,
            title: "\ub3c4\ub451\ub4e4",
            dialogue:
              "\u201c\ub108 \ub3c4\ub451\uc774 \uc65c \uac00\ub09c\ud55c \uc904 \uc544\ub2c8? \ube44\uc2fc \uac70 \ud6d4\uccd0\uc11c \uc2f8\uac8c \ud314\uc796\uc544.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uae40\ud61c\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 248,
            year: 2012,
            title: "\ub3c4\ub451\ub4e4",
            dialogue:
              "\u201c\uc6b0\ub9ac\uac00 \uae30\uc801 \uc804\ubb38\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 249,
            year: 2012,
            title: "\ub3c4\ub451\ub4e4",
            dialogue:
              "\u201c\uc6d0\ub798 \uc778\uaca9\uc774\ub77c\ub294 \uac8c \uc9c0\uac11\uc5d0\uc11c \ub098\uc624\ub294 \ubc95\uc774\uc9c0.\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 250,
            year: 2012,
            title: "\ub3c8\uc758 \ub9db",
            dialogue:
              "\u201c\ub3c8 \ud391\ud391 \uc37c\uc9c0, \uc6d0 \uc5c6\uc774. \uadfc\ub370 \uadf8\uac8c \uadf8\ub807\uac8c \ubaa8\uc695\uc801\uc774\ub354\ub77c\uace0. \ubaa8\uc695.\u201d",
            keyword: "\uacc4\uae09",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 251,
            year: 2012,
            title: "\ub3c8\uc758 \ub9db",
            dialogue:
              "\u201c\uc774\uac83\ub4e4, \ubd80\uc234\ubc84\ub9b4\uaebc\uc57c.\u201d",
            keyword: "\ud328\ub7ec\ub514",
            actor: "\uc724\uc5ec\uc815",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 252,
            year: 2012,
            title: "\ub3c8\uc758 \ub9db",
            dialogue:
              "\u201c\ub3c8 \ub9ce\uc774 \uc788\ub2e4\uace0 \uc9c0\ub4e4\uc774 \ubb34\uc2a8 \uc655\uc871\uc774\ub098 \ub418\ub294 \uc591 \uc0ac\ub78c\ub4e4 \ubb34\uc2dc\ud558\ub294 \uac70 \ubcf4\uba74 \uc720\uce58\ud574\uc694, \uc6b0\ub9ac \uc2dd\uad6c. \uc704\ud5d8\ud558\uc8e0.\u201d",
            keyword: "\uacc4\uae09",
            actor: "\uae40\ud6a8\uc9c4",
            director: "\uc784\uc0c1\uc218",
            scenario: "\uc784\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 253,
            year: 2012,
            title:
              "\ubc94\uc8c4\uc640\uc758 \uc804\uc7c1: \ub098\uc05c\ub188\ub4e4 \uc804\uc131\uc2dc\ub300",
            dialogue: "\u201c\uc0b4\uc544 \uc788\ub124~\u201d",
            keyword: "\ubc08",
            actor: "\ud558\uc815\uc6b0",
            director: "\uc724\uc885\ube48",
            scenario: "\uc724\uc885\ube48",
            adaptation:
              "\ud55c\ub3d9\uc6b1, \uc591\uc900\ud638, \uc2e0\uc218\uc815, \uae40\uc900\uc2dd",
            clip: "FALSE",
          },
          {
            id: 254,
            year: 2012,
            title:
              "\ubc94\uc8c4\uc640\uc758 \uc804\uc7c1: \ub098\uc05c\ub188\ub4e4 \uc804\uc131\uc2dc\ub300",
            dialogue:
              "\u201c\ub0b4\uac00 \uc778\ub9c8 \ub290\uadf8 \uc11c\uc7a5\uc774\ub791 \uc778\ub9c8 \uc5b4\uc800\uaed8\ub3c4, \uc73c\uc774? \uac19\uc774 \ubc25 \ubb35\uace0 \uc73c\uc774? \uc2f8\uc6b0\ub098\ub3c4 \uac19\uc774 \uac00\uace0 \uc73c! \ub9c8, \uc774 \uac1c\uc0c8\ub07c\uc57c. \ub2e4 \ud588\uc5b4.\u201d",
            keyword: "\uc0ac\ud22c\ub9ac \uc695\uc124",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uc724\uc885\ube48",
            scenario: "\uc724\uc885\ube48",
            adaptation:
              "\ud55c\ub3d9\uc6b1, \uc591\uc900\ud638, \uc2e0\uc218\uc815, \uae40\uc900\uc2dd",
            clip: "TRUE",
          },
          {
            id: 255,
            year: 2012,
            title:
              "\ubc94\uc8c4\uc640\uc758 \uc804\uc7c1: \ub098\uc05c\ub188\ub4e4 \uc804\uc131\uc2dc\ub300",
            dialogue:
              "\u201c\ub300\ubd80\ub2d8, \ud559\uc0dd\uc740 \uacf5\ubd80\ub97c \ud574\uc57c \ud559\uc0dd\uc774\uace0 \uac74\ub2ec\uc740 \uc2f8\uc6cc\uc57c \ud560 \ub54c \uc2f8\uc6cc\uc57c \uac74\ub2ec\uc785\ub2c8\ub2e4. \uc8fc\ub514\ub85c\ub9cc \ub098\ubd88\ub098\ubd88\ub304\ub2e4\uace0 \ub2e4\uac00 \uc544\uc785\ub2c8\ub2e4.\u201d",
            character: "\uc870\ud3ed",
            actor: "\ud558\uc815\uc6b0",
            director: "\uc724\uc885\ube48",
            scenario: "\uc724\uc885\ube48",
            adaptation:
              "\ud55c\ub3d9\uc6b1, \uc591\uc900\ud638, \uc2e0\uc218\uc815, \uae40\uc900\uc2dd",
            clip: "FALSE",
          },
          {
            id: 256,
            year: 2012,
            title: "\ud654\ucc28",
            dialogue:
              "\u201c\uc800\ub97c \uac00\uc5fd\uac8c \uc5ec\uae30\uc2e0\ub2e4\uba74 \uc81c\ubc1c \uc880 \uc8fd\uc5ec\uc8fc\uc138\uc694. \uc81c\ubc1c \uc6b0\ub9ac \uc544\ubc84\uc9c0\ub97c \uc8fd\uc5ec\uc8fc\uc138\uc694.\u201d",
            actor: "\uae40\ubbfc\ud76c",
            director: "\ubcc0\uc601\uc8fc",
            source: "\ubbf8\uc57c\ubca0 \ubbf8\uc720\ud0a4",
            scenario: "\ubcc0\uc601\uc8fc",
            clip: "FALSE",
          },
          {
            id: 257,
            year: 2012,
            title: "\ud654\ucc28",
            dialogue:
              "\u201c\ub354 \uc774\uc0c1 \ucc3e\uc9c0 \uc54a\uc744 \ud14c\ub2c8\uae4c, \uac00. \uadfc\ub370 \uadf8\ub0e5 \ub108\ub85c \uc0b4\uc544. \uc808\ub300 \ubd99\uc7a1\ud788\uc9c0 \ub9c8.\u201d",
            actor: "\uc774\uc120\uade0",
            director: "\ubcc0\uc601\uc8fc",
            source: "\ubbf8\uc57c\ubca0 \ubbf8\uc720\ud0a4",
            scenario: "\ubcc0\uc601\uc8fc",
            clip: "FALSE",
          },
          {
            id: 258,
            year: 2013,
            title: "\uac10\uc2dc\uc790\ub4e4",
            dialogue:
              "\u201c\uc774\uac8c \uc6b0\ub9ac \uc77c\uc774\uc57c. \uc774 \uc545\ubb3c\uace0 \ub05d\uae4c\uc9c0 \ubc84\ud2f0\uba74\uc11c \ud574\ub0b4\uc57c\uc9c0. \uc9c0\uce58\uba74 \uc9c0\ub294 \uac70\uace0 \ubbf8\uccd0\uc57c \uc774\uae30\ub294 \uac70\ub2e4.\u201d",
            character: "\ud615\uc0ac",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc124\uacbd\uad6c",
            director: "\uc870\uc758\uc11d, \uae40\ubcd1\uc11c",
            scenario: "\uc870\uc758\uc11d",
            clip: "FALSE",
          },
          {
            id: 259,
            year: 2013,
            title: "\uad00\uc0c1",
            dialogue:
              "\u201c\uc5b4\ucc0c, \ub0b4\uac00 \uc655\uc774 \ub420 \uc0c1\uc778\uac00?\u201d",
            actor: "\uc774\uc815\uc7ac",
            director: "\ud55c\uc7ac\ub9bc",
            scenario: "\uae40\ub3d9\ud601",
            adaptation: "\ud55c\uc7ac\ub9bc",
            clip: "FALSE",
          },
          {
            id: 260,
            year: 2013,
            title: "\uad00\uc0c1",
            dialogue:
              "\u201c\ub09c \uc0ac\ub78c\uc758 \uc5bc\uad74\uc744 \ubd24\uc744 \ubfd0 \uc2dc\ub300\uc758 \ubaa8\uc2b5\uc744 \ubcf4\uc9c0 \ubabb\ud588\uc18c. \uc2dc\uc2dc\uac01\uac01 \ubcc0\ud558\ub294 \ud30c\ub3c4\ub9cc \ubcf8 \uaca9\uc774\uc9c0. \ubc14\ub78c\uc744 \ubcf4\uc544\uc57c \ud558\ub294\ub370. \ud30c\ub3c4\ub97c \ub9cc\ub4dc\ub294 \uac74 \ubc14\ub78c\uc778\ub370 \ub9d0\uc774\uc624.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\ud55c\uc7ac\ub9bc",
            scenario: "\uae40\ub3d9\ud601",
            adaptation: "\ud55c\uc7ac\ub9bc",
            clip: "FALSE",
          },
          {
            id: 261,
            year: 2013,
            title: "\ub0a8\uc790\uc0ac\uc6a9\uc124\uba85\uc11c",
            dialogue:
              "\u201c\ub0a8\ub4e4\uc740 \uc27d\uac8c \uc62c\ub77c\uac00\ub294\ub370 \ub098\ub9cc \uc81c\uc790\ub9ac. \uadf8\ub798\ub3c4 \ub09c \uc5f4\uc2ec\ud788 \uc6b0\uc9c1\ud558\uac8c \uc0b4\ub2e4 \ubcf4\ub2c8 \uc5b4\ub290\uc0c8 \uc131\uacf5\ud558\uac8c \ub418\uc5c8\ub2e4\ub294 \uc138\uc0c1\uc740 20\uc138\uae30 \ub54c \ubc8c\uc368 \ubb38 \ub2eb\uc558\uc5b4.\u201d",
            keyword: "  \ub0b4\ub808\uc774\uc158",
            actor: "\ubc15\uc601\uaddc",
            director: "\uc774\uc6d0\uc11d",
            scenario:
              "\ud558\uc218\uc9c4, \ub178\ud61c\uc601, \uc774\uc6d0\uc11d",
            adaptation: "\ucd5c\uc9c4\uc6d0, \uae40\uc9c4",
            clip: "FALSE",
          },
          {
            id: 262,
            year: 2013,
            title: "\ub0a8\uc790\uc0ac\uc6a9\uc124\uba85\uc11c",
            dialogue:
              "\u201c\ub0b4\uac00 \ub0a8\uc790\uc600\ub2e4\uba74, \uc774\ub7f0 \ucde8\uae09 \ub300\uc2e0 \ub2a5\ub825 \uc788\ub2e4\ub294 \uc18c\ub9ac \ub4e4\uc5c8\uaca0\uc9c0?\u201d",
            keyword: "\uc5ec\uc131",
            actor: "\uc774\uc2dc\uc601",
            director: "\uc774\uc6d0\uc11d",
            scenario:
              "\ud558\uc218\uc9c4, \ub178\ud61c\uc601, \uc774\uc6d0\uc11d",
            adaptation: "\ucd5c\uc9c4\uc6d0, \uae40\uc9c4",
            clip: "FALSE",
          },
          {
            id: 263,
            year: 2013,
            title: "\ub204\uad6c\uc758 \ub538\ub3c4 \uc544\ub2cc \ud574\uc6d0",
            dialogue:
              "\u201c\uc120\uc0dd\ub2d8, \ube44\ubc00\uc740 \uc5c6\uc5b4\uc694. \uc138\uc0c1\uc5d0 \ube44\ubc00 \uc5c6\uc5b4\uc694, \ubaa8\ub974\uc138\uc694? \ube44\ubc00 \uc5c6\uc5b4\uc694, \uacb0\uad6d \ub2e4 \uc54c\uc544\uc694.\u201d",
            actor: "\uc815\uc740\ucc44",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 264,
            year: 2013,
            title: "\ubca0\ub97c\ub9b0",
            dialogue:
              "\u201c\uc6b0\ub9ac\ub294 \ub85c\ud130\ub9ac\uc5d0\uc11c \uc88c\ud68c\uc804\ub3c4 \uc548 \ud558\ub294 \uc0ac\ub78c\uc774\uc57c.\u201d",
            keyword: " ",
            actor: "\ud55c\uc11d\uaddc",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 265,
            year: 2013,
            title: "\ubca0\ub97c\ub9b0",
            dialogue:
              "\u201c\ub09c \uc6b0\ub9ac\uac00 \uac00\ub09c\ud574\ub3c4 \ub2f9\ub2f9\ud558\uac8c \uc0b4 \uc218 \uc788\ub2e4\uace0 \ubbff\ub294\ub2e4.\u201d",
            actor: "\ud558\uc815\uc6b0",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 266,
            year: 2013,
            title: "\ubca0\ub97c\ub9b0",
            dialogue:
              "\u201c\ub0b4 \ub9d8 \uc54c\ubbc4 \ub05d\uae4c\uc9c0 \ubc84\ud2f0\ub77c.\u201d",
            actor: "\ud558\uc815\uc6b0",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 267,
            year: 2013,
            title: "\ubcc0\ud638\uc778",
            dialogue:
              "\u201c\ubc14\uc704\ub294 \uc544\ubb34\ub9ac \uac15\ud574\ub3c4 \uc8fd\uc740 \uae30\uace0 \uacc4\ub780\uc740 \uc544\ubb34\ub9ac \uc57d\ud574\ub3c4 \uc0b4\uc740 \uae30\ub77c\uaf2c. \ubc14\uc704\ub294 \ubfcc\uc0ac\uc9c0\uac00 \ubaa8\ub798\uac00 \ub3fc\ub3c4 \uacc4\ub780\uc740 \uae68\ub098\uc11c \uadf8 \ubc14\uc704\ub97c \ub118\ub294\ub2e4. \uadf8\uce74\ub294 \uc598\uae30\ub294 \ubaa8\ub985\ub2c8\uae4c?\u201d",
            actor: "\uc784\uc2dc\uc644",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc724\ud604\ud638",
            adaptation: "\uc774\uc815\ud654",
            clip: "FALSE",
          },
          {
            id: 268,
            year: 2013,
            title: "\ubcc0\ud638\uc778",
            dialogue:
              "\u201c\ubb34\uc8c4\uba74 \ubb34\uc8c4 \ud310\uacb0 \ubc1b\uc544\ub0b4\uc57c\uc9c0\uc694. \uadf8\uac8c \ub0b4 \uc77c\uc785\ub2c8\ub2e4.\u201d",
            character: "\ubcc0\ud638\uc0ac",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc724\ud604\ud638",
            adaptation: "\uc774\uc815\ud654",
            clip: "FALSE",
          },
          {
            id: 269,
            year: 2013,
            title: "\ubcc0\ud638\uc778",
            dialogue:
              "\u201c\ub300\ud55c\ubbfc\uad6d \uc8fc\uad8c\uc740 \uad6d\ubbfc\uc5d0 \uc788\uace0, \ubaa8\ub4e0 \uad8c\ub825\uc740 \uad6d\ubbfc\uc73c\ub85c\ubd80\ud130 \ub098\uc628\ub2e4. \uad6d\uac00\ub780 \uad6d\ubbfc\uc785\ub2c8\ub2e4.\u201d",
            character: "\ubcc0\ud638\uc0ac",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc724\ud604\ud638",
            adaptation: "\uc774\uc815\ud654",
            clip: "TRUE",
          },
          {
            id: 270,
            year: 2013,
            title: "\uc124\uad6d\uc5f4\ucc28",
            dialogue:
              "\u201c\ubc1c\uc774 \uba38\ub9ac\uc758 \uc790\ub9ac\ub97c \ud0d0\ud558\uba74 \uc131\uc2a4\ub7ec\uc6b4 \uc9c8\uc11c\uac00 \ud754\ub4e4\ub9b0\ub2e4. \ub108\ud76c \uc790\ub9ac\ub97c \uc54c\ub77c! \uadf8\ub9ac\uace0 \uc9c0\ucf1c\ub77c! \uc2e0\ubc1c\uc774 \ub418\uc5b4\ub77c!\u201d",
            actor: "\ud2f8\ub2e4 \uc2a4\uc708\ud2bc",
            director: "\ubd09\uc900\ud638",
            source:
              "\uc7a5 \ub9c8\ub974\ud06c \ub85c\uc170\ud2b8, \uc790\ud06c \ub85c\ube0c, \ubc45\uc790\ub9f9 \ub974\uadf8\ub791",
            scenario:
              "\ubd09\uc900\ud638, \ucf08\ub9ac \ub9e4\uc2a4\ud130\uc2a8",
            clip: "FALSE",
          },
          {
            id: 271,
            year: 2013,
            title: "\uc18c\uc6d0",
            dialogue:
              "\u201c\ub2c8, \uc544\ube60\uc57c\uac00? \uc544\ube60\uc57c\uc81c?\u201d",
            actor: "\uc774\ub808",
            director: "\uc774\uc900\uc775",
            scenario:
              "\uc870\uc911\ud6c8, \uae40\uc9c0\ud61c, \uc18c\uc7ac\uc6d0",
            adaptation:
              "\uc774\uc0c1\uc6a9, \uc774\uc218\uc9c4, \uae40\uc131\uc6b1",
            clip: "FALSE",
          },
          {
            id: 272,
            year: 2013,
            title: "\uc18c\uc6d0",
            dialogue:
              "\u201c\uc220 \uba39\uc5c8\ub2e4\uace0 \ubd10\uc8fc\ub294 \uac8c \uc5b4\ub528\uc5b4\uc694? \uadf8\ub7ec\uba74 \uc220 \uba39\uace0 \uc6b4\uc804\ud558\ub294 \uac83\ub3c4 \ubd10\uc8fc\uc57c\uc9c0. \uc220 \uba39\uace0 \uc6b4\uc804\ud558\ub294 \uac74 \uc798\ubabb\uc774\uace0, \uc220 \uba39\uace0 \uc544\ub97c \uc800\ub807\uac8c \ub9cc\ub4e4\uc5b4\ub1a8\ub294\ub370 \ubd10\uc900\ub2e4\uace0!\u201d",
            keyword: "  \uc138\ud0dc",
            actor: "\uae40\uc0c1\ud638",
            director: "\uc774\uc900\uc775",
            scenario:
              "\uc870\uc911\ud6c8, \uae40\uc9c0\ud61c, \uc18c\uc7ac\uc6d0",
            adaptation:
              "\uc774\uc0c1\uc6a9, \uc774\uc218\uc9c4, \uae40\uc131\uc6b1",
            clip: "FALSE",
          },
          {
            id: 273,
            year: 2013,
            title: "\uc2e0\uc138\uacc4",
            dialogue:
              "\u201c\ub4dc\ub8e8\uc640, \uc774 \uc528\ubc1c \ub188\ub4e4\uc544! \ub4dc\ub8e8\uc640.\u201d",
            keyword: "\uc695\uc124 \ubc08",
            actor: "\ud669\uc815\ubbfc",
            director: "\ubc15\ud6c8\uc815",
            scenario: "\ubc15\ud6c8\uc815",
            clip: "FALSE",
          },
          {
            id: 274,
            year: 2013,
            title: "\uc2e0\uc138\uacc4",
            dialogue:
              "\u201c\uac70, \uc8fd\uae30 \ub531 \uc88b\uc740 \ub0a0\uc528\ub124.\u201d",
            character: "\uc870\ud3ed",
            keyword: "\ubc08 \uc720\uc5b8",
            actor: "\ubc15\uc131\uc6c5",
            director: "\ubc15\ud6c8\uc815",
            scenario: "\ubc15\ud6c8\uc815",
            clip: "FALSE",
          },
          {
            id: 275,
            year: 2013,
            title: "\uc9d1\uc73c\ub85c \uac00\ub294 \uae38",
            dialogue:
              "\u201c\ubbf8\uad6d\uc5d0\ub294 \ud575\ud3ed\ud0c4\uc774 \uc788\uc796\uc544. \uc6b0\ub9ac\ub098\ub77c\uc5d0\ub294 \ub124\ud2f0\uc98c\ub4e4\uc774 \uc788\ub2e4\uace0.\u201d",
            keyword: " ",
            actor: "\uc774\ub3d9\ud718",
            director: "\ubc29\uc740\uc9c4",
            scenario: "\uc724\uc9c4\ud638",
            adaptation:
              "\ubc29\uc740\uc9c4, \uc2e0\ub3d9\uc120, \uc774\uc815\ubc94, \uc774\uc815\ud654",
            clip: "FALSE",
          },
          {
            id: 276,
            year: 2013,
            title: "\uc9d1\uc73c\ub85c \uac00\ub294 \uae38",
            dialogue:
              "\u201c\uc81c\ubc1c \uc800\ud76c \uac00\uc871\uc5d0\uac8c \uc544\ub0b4\uc640 \uc5c4\ub9c8\ub97c \ub3cc\ub824\uc8fc\uc138\uc694.\u201d",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\ubc29\uc740\uc9c4",
            scenario: "\uc724\uc9c4\ud638",
            adaptation:
              "\ubc29\uc740\uc9c4, \uc2e0\ub3d9\uc120, \uc774\uc815\ubc94, \uc774\uc815\ud654",
            clip: "FALSE",
          },
          {
            id: 277,
            year: 2013,
            title: "\ud654\uc774: \uad34\ubb3c\uc744 \uc0bc\ud0a8 \uc544\uc774",
            dialogue:
              "\u201c\ubb34\uc2a8 \ub9d0\uc778\uc9c0 \uc54c\uaca0\uc5b4? \uad34\ubb3c\uc774 \ub3fc\uc57c \uad34\ubb3c\uc774 \uc0ac\ub77c\uc9c0\ub294 \uac70\uc57c.\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\uc7a5\uc900\ud658",
            scenario: "\ubc15\uc8fc\uc11d",
            adaptation: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 278,
            year: 2013,
            title: "\ud654\uc774: \uad34\ubb3c\uc744 \uc0bc\ud0a8 \uc544\uc774",
            dialogue:
              "\u201c\uc544\ube60\ub4e4\uc774 \ub2e4 \uad34\ubb3c\ub4e4\uc778\ub370 \ub108\ub3c4 \uad34\ubb3c\uc774 \ub3fc\uc57c\uc9c0, \uc548 \uadf8\ub798?\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\uc7a5\uc900\ud658",
            scenario: "\ubc15\uc8fc\uc11d",
            adaptation: "\uc7a5\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 279,
            year: 2014,
            title: "\uad6d\uc81c\uc2dc\uc7a5",
            dialogue:
              "\u201c\uc544\ubc84\uc9c0, \ub0b4 \uc57d\uc18d \uc798 \uc9c0\ucf30\uc9c0\uc608? \ub9c9\uc21c\uc774\ub3c4 \ucc3e\uc558\uace0\uc608 \uc774\ub9cc\ud558\ubbc4 \ub0b4 \uc798 \uc0b4\uc558\uc9c0\uc608? \uadfc\ub370 \ub0b4 \uc9c4\uc9dc \ud798\ub4e4\uc5c8\uac70\ub4e0\uc608.\u201d",
            actor: "\ud669\uc815\ubbfc",
            director: "\uc724\uc81c\uade0",
            scenario: "\ubc15\uc218\uc9c4",
            adaptation: "\uc724\uc81c\uade0",
            clip: "FALSE",
          },
          {
            id: 280,
            year: 2014,
            title: "\uad70\ub3c4: \ubbfc\ub780\uc758 \uc2dc\ub300",
            dialogue:
              "\u201c\ubb49\uce58\uba74 \ub3c4\ub451\uc774\uace0 \ud769\uc5b4\uc9c0\uba74 \ubc31\uc131\uc774\ub77c\ub294 \ub9d0\ub3c4 \ubabb \ub4e4\uc5b4\ubd24\uc18c? \uc717\uc804\ubd80\ud130 \uc544\ub7ab\uac83\ub4e4\uaebc\uc815 \ub3c4\uc801\uc9c8 \uc548 \ud558\ub294 \ub188\uc774 \uc5c6\uc5b4\ub77c.\u201d",
            actor: "\ud558\uc815\uc6b0",
            director: "\uc724\uc885\ube48",
            scenario: "\uc804\ucca0\ud64d",
            adaptation:
              "\uc815\uc7ac\uc6c5, \uc774\uc77c\ud615, \uae40\ud615\uc8fc",
            clip: "FALSE",
          },
          {
            id: 281,
            year: 2014,
            title: "\uad70\ub3c4: \ubbfc\ub780\uc758 \uc2dc\ub300",
            dialogue:
              "\u201c\ub354\ub7ec\uc6b4 \ub545\uc5d0 \ud558\uc580 \uc5f0\uaf43\uc774 \ud53c\uc5b4\uc624\ub974\ub294 \uac83\uc740 \uc2e0\uc758 \ub73b\uc778\uac00 \uc544\ub2c8\uba74 \uc5f0\uaf43\uc758 \uc758\uc9c0\uc778\uac00.\u201d",
            actor: "\uac15\ub3d9\uc6d0",
            director: "\uc724\uc885\ube48",
            adaptation:
              "\uc815\uc7ac\uc6c5, \uc774\uc77c\ud615, \uae40\ud615\uc8fc",
            clip: "FALSE",
          },
          {
            id: 282,
            year: 2014,
            title: "\uad70\ub3c4: \ubbfc\ub780\uc758 \uc2dc\ub300",
            dialogue:
              "\u201c\ub108\ud76c\ub4e4 \uc911! \ud0c0\uace0\ub09c \uc6b4\uba85\uc744 \ubc14\uafb8\uae30 \uc704\ud574 \uc0dd\uc744 \uac78\uc5b4\ubcf8 \uc790\uac00 \uc788\uac70\ub4e0 \ub098\uc11c\uac70\ub77c. \ub0b4, \uadf8 \uc790\uc758 \uce7c\uc774\ub77c\uba74 \ubc1b\uaca0\ub2e4.\u201d",
            actor: "\uac15\ub3d9\uc6d0",
            director: "\uc724\uc885\ube48",
            adaptation:
              "\uc815\uc7ac\uc6c5, \uc774\uc77c\ud615, \uae40\ud615\uc8fc",
            clip: "FALSE",
          },
          {
            id: 283,
            year: 2014,
            title: "\ub05d\uae4c\uc9c0 \uac04\ub2e4",
            dialogue:
              "\u201c\uc528\ubc1c, \uc815\ub9d0 \ud37c\ud399\ud2b8 \ud558\ub2e4, \uc528\ubc1c.\u201d",
            keyword: "\uc695\uc124",
            actor: "\uc774\uc120\uade0",
            director: "\uae40\uc131\ud6c8",
            scenario: "\uae40\uc131\ud6c8",
            adaptation:
              "\uc774\ud574\uc900, \uc7a5\ud56d\uc900, \ucd5c\uad00\uc601, \uacfd\uc815\ub355, \uc2e0\ud604\uc9c4",
            clip: "FALSE",
          },
          {
            id: 284,
            year: 2014,
            title: "\ub05d\uae4c\uc9c0 \uac04\ub2e4",
            dialogue:
              "\u201c\uc778\uac04\uc758 \uc720\ud615\uc5d0\ub294... \ub450 \uac00\uc9c0 \uc720\ud615\uc774 \uc788\ub300\uc694. \uac15\uc790 \uc55e\uc5d0\uc11c \ubc14\ub85c \uaf2c\ub9ac \ub0b4\ub9ac\ub294 \uc778\uac04, \uaf2c\ub9ac\uac00 \uc9e4\ub9b0 \ud6c4\uc5d0\uc57c \ubd80\ub7b4\ubd80\ub7b4 \uc560\ub97c \uc4f0\ub294 \uc778\uac04\uc774 \uc788\ub300.\u201d",
            actor: "\uc870\uc9c4\uc6c5",
            director: "\uae40\uc131\ud6c8",
            scenario: "\uae40\uc131\ud6c8",
            adaptation:
              "\uc774\ud574\uc900, \uc7a5\ud56d\uc900, \ucd5c\uad00\uc601, \uacfd\uc815\ub355, \uc2e0\ud604\uc9c4",
            clip: "FALSE",
          },
          {
            id: 285,
            year: 2014,
            title: "\ub05d\uae4c\uc9c0 \uac04\ub2e4",
            dialogue:
              "\u201c\uad81\uae08\ud55c \uac8c \ub9ce\uc544\uc9c0\uba74 \uc218\uba85\uc774 \uc9e7\uc544\uc838\uc694.\u201d",
            actor: "\uc870\uc9c4\uc6c5",
            director: "\uae40\uc131\ud6c8",
            scenario: "\uae40\uc131\ud6c8",
            adaptation:
              "\uc774\ud574\uc900, \uc7a5\ud56d\uc900, \ucd5c\uad00\uc601, \uacfd\uc815\ub355, \uc2e0\ud604\uc9c4",
            clip: "FALSE",
          },
          {
            id: 286,
            year: 2014,
            title: "\ub3c4\ud76c\uc57c",
            dialogue: "\u201c\ub098\ud558\uace0, \uac08\ub798?\u201d",
            character: "\ud615\uc0ac",
            actor: "\ubc30\ub450\ub098",
            director: "\uc815\uc8fc\ub9ac",
            scenario: "\uc815\uc8fc\ub9ac",
            clip: "FALSE",
          },
          {
            id: 287,
            year: 2014,
            title: "\uba85\ub7c9",
            dialogue:
              "\u201c\ubc14\ub2e4\ub97c \ubc84\ub9ac\ub294 \uac83\uc740 \uc870\uc120\uc744 \ubc84\ub9ac\ub294 \uac83\uc774\ub2e4.\u201d",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uae40\ud55c\ubbfc",
            scenario: "\uc804\ucca0\ud64d, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 288,
            year: 2014,
            title: "\uba85\ub7c9",
            dialogue:
              "\u201c\uc544\uc9c1 \uc2e0\uc5d0\uac8c\ub294 \uc5f4\ub450 \ucc99\uc758 \ubc30\uac00 \ub0a8\uc544 \uc788\uc0ac\uc635\ub2c8\ub2e4.\u201d",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uae40\ud55c\ubbfc",
            scenario: "\uc804\ucca0\ud64d, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 289,
            year: 2014,
            title: "\uba85\ub7c9",
            dialogue:
              "\u201c\ub354 \uc774\uc0c1 \uc0b4 \uacf3\ub3c4 \ubb3c\ub7ec\uc124 \uacf3\ub3c4 \uc5c6\ub2e4. \ubaa9\uc228\uc5d0 \uae30\ub300\uc9c0 \ub9c8\ub77c! \uc0b4\uace0\uc790 \ud558\uba74 \ud544\ud788 \uc8fd\uc744 \uac83\uc774\uace0 \ub610\ud55c \uc8fd\uace0\uc790 \ud558\uba74 \uc0b4 \uac83\uc774\ub2c8.\u201d",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\uae40\ud55c\ubbfc",
            scenario: "\uc804\ucca0\ud64d, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 290,
            year: 2014,
            title: "\uc218\uc0c1\ud55c \uadf8\ub140",
            dialogue:
              "\u201c\uc544\ub2c8. \ub09c \ub2e4\uc2dc \ud0dc\uc5b4\ub098\ub3c4 \ud558\ub098\ub3c4 \ub2e4\ub984\uc5c6\uc774 \ub611\uac19\uc774 \uc0b4\ub780\ub2e4. \uc544\ubb34\ub9ac \ud798\ub4e4\uc5b4\ub3c4 \ud558\ub098\ub3c4 \ub2e4\ub984\uc5c6\uc774 \ub611\uac19\uc774 \uc0b4\ub780\ub2e4. \uadf8\ub798\uc57c... \ub0b4\uac00 \ub2c8 \uc5c4\ub9c8\uace0 \ub2c8\uac00 \ub0b4 \uc790\uc2dd\uc77c \ud14c\ub2c8\uae4c.\u201d",
            character: "\ub178\uc778",
            actor: "\uc2ec\uc740\uacbd",
            director: "\ud669\ub3d9\ud601",
            scenario:
              "\uc2e0\ub3d9\uc775, \ud64d\uc724\uc815, \ub3d9\ud76c\uc120",
            adaptation: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 291,
            year: 2014,
            title: "\uc218\uc0c1\ud55c \uadf8\ub140",
            dialogue:
              "\u201c\uc88b\uc740 \uafc8\uc744 \uafe8\ub124. \ucc38\ub9d0\ub85c \uc7ac\ubbf8\ub0ac\uace0 \uc88b\uc740 \uafc8\uc774\uc5c8\uad6c\uba3c.\u201d",
            character: "\ub178\uc778",
            actor: "\ub098\ubb38\ud76c",
            director: "\ud669\ub3d9\ud601",
            scenario:
              "\uc2e0\ub3d9\uc775, \ud64d\uc724\uc815, \ub3d9\ud76c\uc120",
            adaptation: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 292,
            year: 2014,
            title: "\uce74\ud2b8",
            dialogue:
              "\u201c\uc800 \uc0dd\ud65c\ube44 \ubc8c\ub7ec \ub098\uc640\uc694, \ubc18\ucc2c\uac12 \uc544\ub2c8\uace0.\u201d",
            keyword: "\ub178\ub3d9",
            actor: "\uc5fc\uc815\uc544",
            director: "\ubd80\uc9c0\uc601",
            scenario: "\uae40\uacbd\ucc2c",
            adaptation: "\ubd80\uc9c0\uc601",
            clip: "TRUE",
          },
          {
            id: 293,
            year: 2015,
            title: "\ub0b4\ubd80\uc790\ub4e4",
            dialogue:
              "\u201c\uc5b4\ucc28\ud53c \ub300\uc911\ub4e4\uc740 \uac1c, \ub3fc\uc9c0\uc785\ub2c8\ub2e4. \uac70 \ubb50\ud558\ub7ec \uac1c, \ub3fc\uc9c0\ud55c\ud14c \uc2e0\uacbd\uc744 \uc4f0\uc2dc\uace0 \uadf8\ub7ec\uc2ed\ub2c8\uae4c? \uc801\ub2f9\ud788 \uc9d6\uc5b4\ub300\ub2e4\uac00 \uc54c\uc544\uc11c \uc870\uc6a9\ud574\uc9c8 \uac81\ub2c8\ub2e4.\u201d",
            keyword: " ",
            actor: "\ubc31\uc724\uc2dd",
            director: "\uc6b0\ubbfc\ud638",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc6b0\ubbfc\ud638",
            clip: "TRUE",
          },
          {
            id: 294,
            year: 2015,
            title: "\ub0b4\ubd80\uc790\ub4e4",
            dialogue:
              "\u201c\uae4c\ub77c\uba74 \uae4c\uace0 \ub36e\uc73c\ub77c\uba74 \ub36e\ub294 \uac8c \ub300\ud55c\ubbfc\uad6d \uac80\uc0ac\uc57c. \uc774\uc81c \uadf8\ub9cc \ubb3c\uace0 \ub194\ub77c.\u201d",
            character: "\uac80\uc0ac",
            actor: "\uc815\ub9cc\uc2dd",
            director: "\uc6b0\ubbfc\ud638",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc6b0\ubbfc\ud638",
            clip: "FALSE",
          },
          {
            id: 295,
            year: 2015,
            title: "\ub0b4\ubd80\uc790\ub4e4",
            dialogue:
              "\u201c\ub098\ub294 \uc800\uae30, \ubaa8\ud788\ud1a0 \uac00\uac00\uc9c0\uace0 \ubab0\ub514\ube0c\ub098 \ud55c \uc794 \ud560\ub77c\ub2c8\uae4c.\u201d",
            character: "\uc870\ud3ed",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uc6b0\ubbfc\ud638",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc6b0\ubbfc\ud638",
            clip: "FALSE",
          },
          {
            id: 296,
            year: 2015,
            title: "\ub0b4\ubd80\uc790\ub4e4",
            dialogue:
              "\u201c\ub098\ubc29\uc774 \ub420\uc9c0 \ub098\ube44\uac00 \ub420\uc9c0 \uadf8\uac83\uc740 \ubc88\ub370\uae30 \ubc30\ub54c\uc9c0\ub97c \uac08\ub77c\ubd10\uc57c \uc544\ub294 \uac83\uc774\uace0. \uc790\uc2e0 \uc5c6\uc5b4?\u201d",
            character: "\uc870\ud3ed",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uc6b0\ubbfc\ud638",
            source: "\uc724\ud0dc\ud638",
            scenario: "\uc6b0\ubbfc\ud638",
            clip: "FALSE",
          },
          {
            id: 297,
            year: 2015,
            title: "\ubb34\ub8b0\ud55c",
            dialogue:
              "\u201c\ud61c\uacbd \uc528\uac00 \ub0b4 \uc57d\uc810\uc774\ub2c8\uae4c.\u201d",
            actor: "\uae40\ub0a8\uae38",
            director: "\uc624\uc2b9\uc6b1",
            scenario: "\uc624\uc2b9\uc6b1",
            clip: "FALSE",
          },
          {
            id: 298,
            year: 2015,
            title: "\ubb34\ub8b0\ud55c",
            dialogue:
              "\u201c\uc0c8\ud574\uc5d0\ub294 \ubcf5 \ub9ce\uc774 \ubc1b\uc544\ub77c, \uc528\ubc1c \ub144\uc544.\u201d",
            keyword: "\uc695\uc124",
            actor: "\uae40\ub0a8\uae38",
            director: "\uc624\uc2b9\uc6b1",
            scenario: "\uc624\uc2b9\uc6b1",
            clip: "FALSE",
          },
          {
            id: 299,
            year: 2015,
            title: "\ubca0\ud14c\ub791",
            dialogue:
              "\u201c\uc6b0\ub9ac\uac00 \ub3c8\uc774 \uc5c6\uc9c0 \uac00\uc624\uac00 \uc5c6\uc5b4?\u201d",
            character: "\ud615\uc0ac",
            keyword: "\ubc08",
            actor: "\ud669\uc815\ubbfc",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "TRUE",
          },
          {
            id: 300,
            year: 2015,
            title: "\ubca0\ud14c\ub791",
            dialogue:
              "\u201c\ub9f7\ub3cc \uc190\uc7a1\uc774 \uc54c\uc544\uc694? \ub9f7\ub3cc \uc190\uc7a1\uc774\ub97c \uc5b4\uc774\ub77c \uadf8\ub798\uc694. \ub9f7\ub3cc\uc5d0 \ubb58 \uac08\ub824\uace0 \uc9d1\uc5b4\ub123\uace0 \ub9f7\ub3cc\uc744 \ub3cc\ub9ac\ub824\uace0 \ud558\ub294\ub370, \uc190\uc7a1\uc774\uac00 \ube60\uc84c\ub124? \uc774\ub7f0 \uc0c1\ud669\uc744 \uc5b4\uc774\uac00 \uc5c6\ub2e4\uace0 \uadf8\ub798\uc694. \ud669\ub2f9\ud558\uc796\uc544, \uc544\ubb34\uac83\ub3c4 \uc544\ub2cc \uc190\uc7a1\uc774 \ub54c\ubb38\uc5d0 \ud574\uc57c \ub420 \uc77c\uc744 \ubabb \ud558\ub2c8\uae4c. \uc9c0\uae08 \ub0b4 \uae30\ubd84\uc774 \uadf8\ub798... \uc5b4\uc774\uac00 \uc5c6\ub124.\u201d",
            keyword: "\ubc08",
            actor: "\uc720\uc544\uc778",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 301,
            year: 2015,
            title: "\uc0ac\ub3c4",
            dialogue:
              "\u201c\ud5c8\uacf5\uc73c\ub85c \ub0a0\uc544\uac04 \uc800 \ud654\uc0b4\uc774 \uc5bc\ub9c8\ub098 \ub5b3\ub5b3\ud558\ub0d0.\u201d",
            actor: "\uc720\uc544\uc778",
            director: "\uc774\uc900\uc775",
            scenario:
              "\uc870\ucca0\ud604, \uc774\uc1a1\uc6d0, \uc624\uc2b9\ud604",
            clip: "FALSE",
          },
          {
            id: 302,
            year: 2015,
            title: "\uc0ac\ub3c4",
            dialogue:
              "\u201c\uc0ac\ub78c\uc774 \uc788\uace0 \uc608\ubc95\uc774 \uc788\ub294 \uac83\uc774\uc9c0 \uc5b4\ub5bb\uac8c \uc608\ubc95\uc774 \uc788\uace0 \uc0ac\ub78c\uc774 \uc788\uaca0\uc2b5\ub2c8\uae4c? \uacf5\uc790\uaed8\uc11c\ub3c4 \uc608\ubc95\uc758 \ub9d0\ub2e8\uc744 \ubcf4\uc9c0 \ub9d0\uace0 \uadf8 \ub9c8\uc74c\uc744 \ubcf4\ub77c \ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub0a0 \uc18c\uc190\uc740 \uc81c \uc544\ube44\uc758 \ub9c8\uc74c\uc744 \ubcf4\uc558\ub098\uc774\ub2e4.\u201d",
            actor: "\uc774\ud6a8\uc81c",
            director: "\uc774\uc900\uc775",
            scenario:
              "\uc870\ucca0\ud604, \uc774\uc1a1\uc6d0, \uc624\uc2b9\ud604",
            clip: "FALSE",
          },
          {
            id: 303,
            year: 2015,
            title: "\uc0ac\ub3c4",
            dialogue:
              "\u201c\uc138\uc190\uc758 \ub9c8\uc74c\uc744 \uc0dd\uac01\ud558\uace0 \uc2e0\uc740 \uc544\ub4e4\uc758 \ub73b\uc744 \ud5e4\uc544\ub824 \uc138\uc790\uc758 \uc9c0\uc704\ub97c \ud68c\ubcf5\ud558\uace0 \uadf8 \uc2dc\ud638\ub97c \uc0dd\uac01\ud560 \uc0ac, \uc2ac\ud37c\ud560 \ub3c4, \uc0ac\ub3c4\uc138\uc790\ub77c \ud558\ub77c.\u201d",
            character: "\uc655",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc774\uc900\uc775",
            scenario:
              "\uc870\ucca0\ud604, \uc774\uc1a1\uc6d0, \uc624\uc2b9\ud604",
            clip: "FALSE",
          },
          {
            id: 304,
            year: 2015,
            title: "\uc2a4\ubb3c",
            dialogue:
              "\u201c\ub300\ud55c\ubbfc\uad6d \ud559\uad50? \uc7a3 \uae4c\ub77c \uadf8\ub798. \uc774\uac83\uc774, \uc774\uac83\uc774 \uc9c4\uc815\ud55c \uad50\uc721\ud601\uba85\uc774\ub2e4.\u201d",
            character: "\uccad\ucd98",
            keyword: "\ud328\ub7ec\ub514",
            actor: "\uae40\uc6b0\ube48",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 305,
            year: 2015,
            title: "\uc2a4\ubb3c",
            dialogue:
              "\u201c\uc544, \uc0ac\ub791\uc740 \ubab0\ub798 \uc628 \uc190\ub2d8\uc774\ub77c\ub354\ub2c8. \uc774\uac78 \ub0b4\ucad3\uc744 \uc218\ub3c4 \uc5c6\uace0.\u201d",
            character: "\uccad\ucd98",
            keyword: "\uc0ac\ub791 \uc5f0\uc560",
            actor: "\uac15\ud558\ub298",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 306,
            year: 2015,
            title: "\uc2a4\ubb3c",
            dialogue:
              "\u201c\uac70 \uc880 \ud798\ub4e4\ub2e4\uace0 \uc6b8\uc5b4 \ubc84\ub987\ud558\uc9c0 \ub9c8. \uc5b4\ucc28\ud53c \ub0b4\uc77c\ub3c4 \ud798\ub4e4\uc5b4.\u201d",
            character: "\uccad\ucd98",
            actor: "\uae40\uc6b0\ube48",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 307,
            year: 2015,
            title: "\uc2a4\ubb3c",
            dialogue:
              "\u201c\uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c! \ube44\uad00\ud558\uc9c0 \uc54a\uaca0\uc5b4.\u201d",
            character: "\uccad\ucd98",
            actor: "\uae40\uc6b0\ube48",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\uc774\ubcd1\ud5cc",
            clip: "FALSE",
          },
          {
            id: 308,
            year: 2015,
            title: "\uc554\uc0b4",
            dialogue:
              "\u201c\ubb3c\uc9c0 \ubabb\ud560 \uac70\uba74 \uc9d6\uc9c0\ub3c4 \ub9d0\uc544\uc57c\uc9c0\uc694. \uc778\uc0dd\uc740 \uc694\ub839\uc774\uc9c0 \uc54a\uc2b5\ub2c8\uae4c?\u201d",
            character: "\ub3c5\ub9bd\uad70",
            actor: "\uc774\uc815\uc7ac",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 309,
            year: 2015,
            title: "\uc554\uc0b4",
            dialogue:
              "\u201c\uc5b4\uc774, \uc0bc\ucc9c \ubd88. \uc6b0\ub9ac \uc78a\uc73c\uba74 \uc548 \ub3fc.\u201d",
            actor: "\uc624\ub2ec\uc218",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 310,
            year: 2015,
            title: "\uc554\uc0b4",
            dialogue:
              "\u201c\uadf8\uce58\ub9cc \uc54c\ub824\uc918\uc57c\uc9c0. \uc6b0\ub9ac\ub294 \uacc4\uc18d \uc2f8\uc6b0\uace0 \uc788\ub2e4\uace0.\u201d",
            actor: "\uc804\uc9c0\ud604",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 311,
            year: 2015,
            title: "\ucc28\uc774\ub098\ud0c0\uc6b4",
            dialogue:
              "\u201c\uc6d0\ud574\uc11c \ud0dc\uc5b4\ub09c \uac74 \uc544\ub2c8\uc9c0\ub9cc \ud0dc\uc5b4\ub0ac\uc73c\ub2c8 \uc8fd\uc744 \uc21c \uc5c6\uc796\uc544\uc694. \uadf8\ub7fc, \uc88b\uac8c \uc88b\uac8c \uc0b4\uc544\uc57c\uc8e0, \ubb50.\u201d",
            actor: "\ubc15\ubcf4\uac80",
            director: "\ud55c\uc900\ud76c",
            scenario: "\ud55c\uc900\ud76c",
            clip: "FALSE",
          },
          {
            id: 312,
            year: 2015,
            title: "\ucc28\uc774\ub098\ud0c0\uc6b4",
            dialogue:
              "\u201c\uac00\ub09c\ud55c \uac8c \uc798\ubabb\uc740 \uc544\ub2c8\uc796\uc544\uc694. \uc8c4\uc1a1\ud569\ub2c8\ub2e4.\u201d",
            actor: "\ubc15\ubcf4\uac80",
            director: "\ud55c\uc900\ud76c",
            scenario: "\ud55c\uc900\ud76c",
            clip: "FALSE",
          },
          {
            id: 313,
            year: 2015,
            title: "\ucc28\uc774\ub098\ud0c0\uc6b4",
            dialogue:
              "\u201c\uc99d\uba85\ud574\ubd10. \ub124\uac00 \uc544\uc9c1 \uc4f8\ubaa8 \uc788\ub2e4\ub294 \uc99d\uba85.\u201d",
            actor: "\uae40\ud61c\uc218",
            director: "\ud55c\uc900\ud76c",
            scenario: "\ud55c\uc900\ud76c",
            clip: "FALSE",
          },
          {
            id: 314,
            year: 2015,
            title: "\ucc28\uc774\ub098\ud0c0\uc6b4",
            dialogue:
              "\u201c\ub2e4 \ucef8\ub124. \uc8fd\uc9c0 \ub9c8. \uc8fd\uc744 \ub54c\uae4c\uc9c0. \uc774\uc81c\ub294 \ub2c8\uac00 \uacb0\uc815\ud558\ub294 \uac70\uc57c.\u201d",
            actor: "\uae40\ud61c\uc218",
            director: "\ud55c\uc900\ud76c",
            scenario: "\ud55c\uc900\ud76c",
            clip: "FALSE",
          },
          {
            id: 315,
            year: 2016,
            title: "\uac80\uc0ac\uc678\uc804",
            dialogue:
              "\u201c\uc0ac\uae30\ub77c\ub294 \uac74 \ub9d0\uc774\uc57c. \ubb34\uc870\uac74 \ub0a8\uc744 \uc18d\uc5ec\uc11c \ud328\uac00\ub9dd\uc2e0 \uc2dc\ud0a4\uace0 \uadf8\ub7f0 \uc885\ubaa9\uc740 \uc544\ub2c8\uc57c. \uc5b4? \ub098\ub97c \ubc84\ub824\uc57c \ub3fc. \ub0b4\uac00 \ub9cc\ub4e0 \ub0b4\uac00 \ub418\uace0 \uc2f6\uc740 \uadf8 \uc0ac\ub78c\uc774 \uadf8\ub0e5 \ub418\ub294 \uac70\uc57c. \uc5b8\ub354\uc2a4\ud0e0?\u201d",
            actor: "\uac15\ub3d9\uc6d0",
            director: "\uc774\uc77c\ud615",
            scenario: "\uc774\uc77c\ud615",
            clip: "FALSE",
          },
          {
            id: 316,
            year: 2016,
            title: "\uac80\uc0ac\uc678\uc804",
            dialogue:
              "\u201c\ub354 \uc774\uc0c1 \ubc84\ud168\ubd24\uc790 \uc120\ubc30\ub9cc \ucd94\ud574\uc838. \uc544\ubb34\ub9ac \uc6b0\ub9ac\uac00 \uc774\ub807\uac8c \ub9cc\ub0ac\uc5b4\ub3c4 \uc99d\uac70 \uc55e\uc5d0\uc120 \uacb8\uc190\ud574\uc57c\uc9c0. \uc548 \uadf8\ub798?\u201d",
            character: "\uac80\uc0ac",
            actor: "\ud669\uc815\ubbfc",
            director: "\uc774\uc77c\ud615",
            scenario: "\uc774\uc77c\ud615",
            clip: "FALSE",
          },
          {
            id: 317,
            year: 2016,
            title: "\uace1\uc131",
            dialogue:
              "\u201c\ubb63\uc774 \uc911\ud55c\ub514? \ubb63\uc774 \uc911\ud5c8\ub0d0\uace0?\u201d",
            keyword: "\uc0ac\ud22c\ub9ac \ubc08",
            actor: "\uae40\ud658\ud76c",
            director: "\ub098\ud64d\uc9c4",
            scenario: "\ub098\ud64d\uc9c4",
            clip: "TRUE",
          },
          {
            id: 318,
            year: 2016,
            title: "\ub355\ud61c\uc639\uc8fc",
            dialogue:
              "\u201c\ube7c\uc557\uae34 \ub4e4\uc5d0\ub3c4 \ubd04\uc740 \uc635\ub2c8\ub2e4.\u201d",
            keyword: " ",
            actor: "\uc190\uc608\uc9c4",
            director: "\ud5c8\uc9c4\ud638",
            source: "\uad8c\ube44\uc601",
            scenario:
              "\ud5c8\uc9c4\ud638, \ucd5c\uadfc\ud638, \uc11c\uc720\ubbfc, \uc774\ud55c\uc5bc, \uae40\ud604\uc815 ",
            adaptation: "\ucd5c\uc11d\ud658, \ub9c8\ub300\uc724",
            clip: "FALSE",
          },
          {
            id: 319,
            year: 2016,
            title: "\ub3d9\uc8fc",
            dialogue:
              "\u201c\ubd80\ub044\ub7ec\uc6c0\uc744 \uc544\ub294 \uac74 \ubd80\ub044\ub7ec\uc6b4 \uac8c \uc544\ub2c8\uc57c.\u201d",
            keyword: "\uc9c0\ud61c",
            actor: "\ubb38\uc131\uadfc",
            director: "\uc774\uc900\uc775",
            scenario: "\uc2e0\uc5f0\uc2dd",
            clip: "FALSE",
          },
          {
            id: 320,
            year: 2016,
            title: "\ub3d9\uc8fc",
            dialogue:
              "\u201c\uc774\ub7f0 \uc138\uc0c1\uc5d0 \ud0dc\uc5b4\ub098\uc11c \uc2dc\ub97c \uc4f0\uae30\ub97c \ubc14\ub77c\uace0 \uc2dc\uc778\uc774 \ub418\uae30\ub97c \uc6d0\ud588\ub358 \uac8c \ub108\ubb34 \ubd80\ub044\ub7fd\uace0 \uc55e\uc7a5\uc11c\uc9c0 \ubabb\ud558\uace0 \uadf8\ub9bc\uc790\ucc98\ub7fc \ub530\ub77c\ub2e4\ub2c8\uae30\ub9cc \ud55c \uac8c \ubd80\ub044\ub7ec\uc6cc\uc11c \uc11c\uba85\uc744 \ubabb \ud558\uaca0\uc2b5\ub2c8\ub2e4.\u201d",
            keyword: " ",
            actor: "\uac15\ud558\ub298",
            director: "\uc774\uc900\uc775",
            scenario: "\uc2e0\uc5f0\uc2dd",
            clip: "FALSE",
          },
          {
            id: 321,
            year: 2016,
            title: "\ub9c8\uc2a4\ud130",
            dialogue:
              "\u201c\uc774\uc57c, \ub9c9\uc5f0\ud558\uac8c \uac1c\uc0c8\ub07c\uc778 \uc904 \uc54c\uc558\ub354\ub2c8 \uad6c\uccb4\uc801\uc73c\ub85c \uc539\uc0c8\ub07c\ub124.\u201d",
            keyword: "\uc695\uc124",
            actor: "\uae40\uc6b0\ube48",
            director: "\uc870\uc758\uc11d",
            scenario: "\uc870\uc758\uc11d, \uae40\ud604\ub355",
            clip: "FALSE",
          },
          {
            id: 322,
            year: 2016,
            title: "\ub9c8\uc2a4\ud130",
            dialogue:
              "\u201c\uadf8 \uc778\uac04 \uc0ac\uae30\ub85c \uad11\ud569\uc131 \ud558\ub294 \uccb4\uc9c8\uc774\uc57c. \ucc29\ud558\uac8c \uc0b4\uba74 \uc2dc\ub4e4\uc5b4 \uc8fd\uc5b4.\u201d",
            actor: "\uae40\uc6b0\ube48",
            director: "\uc870\uc758\uc11d",
            scenario: "\uc870\uc758\uc11d, \uae40\ud604\ub355",
            clip: "FALSE",
          },
          {
            id: 323,
            year: 2016,
            title: "\ub9c8\uc2a4\ud130",
            dialogue:
              "\u201c\uc5ec\uae30 \uc560\ub4e4 \ub3c8\uc5d0 \ubd99\uc9c0 \uc0ac\ub78c\uc5d0 \uc548 \ubd99\uc5b4\uc694.\u201d",
            keyword: "\uc138\ud0dc",
            actor: "\uc9c4\uacbd",
            director: "\uc870\uc758\uc11d",
            scenario: "\uc870\uc758\uc11d, \uae40\ud604\ub355",
            clip: "FALSE",
          },
          {
            id: 324,
            year: 2016,
            title: "\ub9c8\uc2a4\ud130",
            dialogue:
              "\u201c\ub208\ub9cc \uccd0\ub2e4\ubd10. \uc5b4\uc124\ud508 \uc0c8\ub07c\ub4e4\uc740 \uc785\uc73c\ub860 \uc18d\uc5ec\ub3c4 \ub208\uc73c\ub860 \ubabb \uc18d\uc5ec.\u201d",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uc870\uc758\uc11d",
            scenario: "\uc870\uc758\uc11d, \uae40\ud604\ub355",
            clip: "FALSE",
          },
          {
            id: 325,
            year: 2016,
            title: "\ubc00\uc815",
            dialogue:
              "\u201c\ubaa8\ub4e0 \uc0ac\ub78c\ub4e4\uc740 \uc790\uc2e0\uc758 \uc774\ub984\uc744 \uc5b4\ub514\uc5d0 \uc62c\ub824\uc57c \ud558\ub294\uc9c0\ub97c \uc815\ud574\uc57c \ud558\ub294 \ub54c\uac00 \uc635\ub2c8\ub2e4. \uc774 \ub3d9\uc9c0\ub294 \uc5b4\ub290 \uc5ed\uc0ac \uc704\uc5d0 \uc774\ub984\uc744 \uc62c\ub9ac\uaca0\uc2b5\ub2c8\uae4c?\u201d",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uc774\uc9c0\ubbfc, \ubc15\uc885\ub300",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 326,
            year: 2016,
            title: "\ubc00\uc815",
            dialogue:
              "\u201c\ub9c8\uc74c\uc758 \uc6c0\uc9c1\uc784\uc774 \uac00\uc7a5 \ubb34\uc11c\uc6b4 \uac83 \uc544\ub2c8\uaca0\uc18c.\u201d",
            character: "\ub3c5\ub9bd\uad70",
            keyword: " ",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uc774\uc9c0\ubbfc, \ubc15\uc885\ub300",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 327,
            year: 2016,
            title: "\ubc00\uc815",
            dialogue: "\u201c\uaf2d \ub2e4\uc2dc \ubcf4\uc138.\u201d",
            keyword: "\ub2f9\ubd80",
            actor: "\uc1a1\uac15\ud638",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uc774\uc9c0\ubbfc, \ubc15\uc885\ub300",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 328,
            year: 2016,
            title: "\ube44\ubc00\uc740 \uc5c6\ub2e4",
            dialogue:
              "\u201c\uba4d\uccad\ud558\ub2e4 \uadf8\ub7ac\uc5b4\uc694. \uc5c4\ub9c8\ub294 \uba4d\uccad\ud558\ub2e4\uace0... \uadf8\ub798\uc11c \uc9c0\uac00 \uc9c0\ucf1c\uc918\uc57c \ub41c\ub2e4 \uadf8\ub7ac\uc5b4\uc694.\u201d",
            actor: "\uae40\uc18c\ud76c",
            director: "\uc774\uacbd\ubbf8",
            scenario:
              "\uc774\uacbd\ubbf8, \ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd, \uae40\ub2e4\uc601, \uc815\uc18c\uc601",
            clip: "TRUE",
          },
          {
            id: 329,
            year: 2016,
            title: "\ube44\ubc00\uc740 \uc5c6\ub2e4",
            dialogue:
              "\u201c\uc0dd\uac01\ud558\uc790, \uc0dd\uac01\ud558\uc790, \uc0dd\uac01\ud558\uc790, \uc0dd\uac01\ud558\uc790. \uc815\uc2e0 \ub611\ubc14\ub85c \ucc28\ub9ac\uace0 \uc0dd\uac01\ud558\uc790. \uc0dd\uac01\ud558\uc790.\u201d",
            keyword: "\ub3c5\ubc31",
            actor: "\uc190\uc608\uc9c4",
            director: "\uc774\uacbd\ubbf8",
            scenario:
              "\uc774\uacbd\ubbf8, \ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd, \uae40\ub2e4\uc601, \uc815\uc18c\uc601",
            clip: "FALSE",
          },
          {
            id: 330,
            year: 2016,
            title: "\uc124\ud589_\ub208\uae38\uc744 \uac77\ub2e4",
            dialogue:
              "\u201c\uc81c\uac00 \uae30\ub3c4 \ub4dc\ub824\uc694, \ub9e4\uc77c. \uc544\uc800\uc528\ub97c \uc704\ud574\uc11c, \uc544\uc800\uc528\uc758 \uc601\ud63c\uc744 \uc704\ud574\uc11c\uc694. \uadf8\uac78 \uc78a\uc9c0 \ub9c8\uc138\uc694. \uc800\ub294 \ud3ec\uae30\ud558\uc9c0 \uc54a\uace0 \uc544\uc800\uc528\ub97c \uc704\ud574\uc11c \uacc4\uc18d \uae30\ub3c4 \ub4dc\ub9b4 \uac70\ub77c\ub294 \uac78.\u201d (\uacc4\uc18d\uc774\ub77c\uba74 \uc5b8\uc81c\uae4c\uc9c0?) \u201c\uae30\ub3c4\uac00 \uc751\ub2f5 \ubc1b\uc744 \ub54c\uae4c\uc9c0.\u201d",
            actor: "\ubc15\uc18c\ub2f4",
            director: "\uae40\ud76c\uc815",
            scenario: "\uae40\ud76c\uc815",
            clip: "FALSE",
          },
          {
            id: 331,
            year: 2016,
            title: "\uc544\uac00\uc528",
            dialogue:
              "\u201c\uc544\uac00\uc528\ub294 \uc81c \uc560\uae30\uc528\uc138\uc694.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc0ac\ub77c \uc6cc\ud130\uc2a4",
            scenario: "\ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd",
            clip: "FALSE",
          },
          {
            id: 332,
            year: 2016,
            title: "\uc544\uac00\uc528",
            dialogue:
              "\u201c\uc544\uac00\uc528, \uc5b4\uca4c\uba74 \uc774\ub807\uac8c \uc544\ubb34\uac83\ub3c4 \ubaa8\ub974\uc2dc\uba74\uc11c... \ud0c0\uace0\ub098\uc168\ub098 \ubd10\uc694.\u201d",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc0ac\ub77c \uc6cc\ud130\uc2a4",
            scenario: "\ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd",
            clip: "FALSE",
          },
          {
            id: 333,
            year: 2016,
            title: "\uc544\uac00\uc528",
            dialogue:
              "\u201c\ub0b4 \uc778\uc0dd\uc744 \ub9dd\uce58\ub7ec \uc628 \ub098\uc758 \uad6c\uc6d0\uc790, \ub098\uc758 \ud0c0\ub9c8\ucf54, \ub098\uc758 \uc219\ud76c.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uae40\ubbfc\ud76c",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc0ac\ub77c \uc6cc\ud130\uc2a4",
            scenario: "\ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd",
            clip: "TRUE",
          },
          {
            id: 334,
            year: 2016,
            title: "\uc544\uac00\uc528",
            dialogue:
              "\u201c\uc5ec\uc9c0\uaecf \ub0b4 \uc190\uc73c\ub85c \uc53b\uae30\uace0 \uc785\ud78c \uac83 \uc911\uc5d0 \uc774\ub9cc\ud07c \uc608\uc05c \uac83\uc774 \uc788\uc5c8\ub098?\u201d",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc0ac\ub77c \uc6cc\ud130\uc2a4",
            scenario: "\ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd",
            clip: "FALSE",
          },
          {
            id: 335,
            year: 2016,
            title: "\uc544\uac00\uc528",
            dialogue:
              "\u201c\uadf8\ub9ac\uace0 \ubd80\ud0c1\uc778\ub370... \ub2e4\uc2dc\ub294 \uadf8 \uc560\uae30 \uc7a5\ub09c\uac10 \uac19\uc740 \uc886\ub300\uac00\ub9ac\uc5d0 \ub0b4 \uc190 \uac16\ub2e4 \ub300\uc9c0 \ub9d0\uc544\uc918!\u201d",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\ubc15\ucc2c\uc6b1",
            source: "\uc0ac\ub77c \uc6cc\ud130\uc2a4",
            scenario: "\ubc15\ucc2c\uc6b1, \uc815\uc11c\uacbd",
            clip: "FALSE",
          },
          {
            id: 336,
            year: 2016,
            title: "\uc6b0\ub9ac\ub4e4",
            dialogue:
              "\u201c\uc5f0\uc624\uac00 \ub54c\ub9ac\uace0 \ub098\ub3c4 \ub54c\ub9ac\uace0 \uc5f0\uc624\uac00 \ub54c\ub9ac\uace0 \uadf8\ub7fc \uc5b8\uc81c \ub180\uc544? \ub09c \uadf8\ub0e5 \ub180\uace0 \uc2f6\uc740\ub370.\u201d",
            actor: "\uac15\ubbfc\uc900",
            director: "\uc724\uac00\uc740",
            scenario: "\uc724\uac00\uc740",
            clip: "TRUE",
          },
          {
            id: 337,
            year: 2016,
            title: "\ucd5c\uc545\uc758 \ud558\ub8e8",
            dialogue:
              "\u201c\uc5b4\ub5bb\uac8c \uc9c4\uc2e4\uc774 \uc9c4\uc2ec\uc744 \uc774\uaca8\uc694?\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uc774\ud76c\uc900",
            director: "\uae40\uc885\uad00",
            scenario: "\uae40\uc885\uad00",
            clip: "FALSE",
          },
          {
            id: 338,
            year: 2016,
            title: "\ucd5c\uc545\uc758 \ud558\ub8e8",
            dialogue:
              "\u201c\uc81c\uac00 \uc0ac\ub78c \ub9cc\ub098\ub294 \uae30\uacc4\uc608\uc694? \uadf8\ub7f0 \uc77c \uc788\uace0 \uc5b4\ub5bb\uac8c \uc0ac\ub78c\uc744 \ub9cc\ub098\uc694?\u201d",
            actor: "\ud55c\uc608\ub9ac",
            director: "\uae40\uc885\uad00",
            scenario: "\uae40\uc885\uad00",
            clip: "FALSE",
          },
          {
            id: 339,
            year: 2016,
            title: "\ud130\ub110",
            dialogue:
              "\u201c\ub9cc\uc57d\uc5d0 \uc0b4\uc544 \uc788\uc73c\uba74 \uc5b4\uca4c\uc2dc\ub824\uace0\uc694? \ubbf8\uc548\ud558\uc9c0 \uc54a\uc73c\uc138\uc694?\u201d",
            actor: "\ubc30\ub450\ub098",
            director: "\uae40\uc131\ud6c8",
            source: "\uc18c\uc7ac\uc6d0",
            scenario: "\uae40\uc131\ud6c8",
            adaptation: "\uc2e0\ud604\uc9c4",
            clip: "FALSE",
          },
          {
            id: 340,
            year: 2017,
            title: "1987",
            dialogue:
              "\u201c\uc6b0\ub9ac\ud55c\ud14c \ub0a8\uc740 \ub9c8\uc9c0\ub9c9 \ubb34\uae30\ub294 \uc9c4\uc2e4\ubfd0\uc785\ub2c8\ub2e4. \uadf8 \uc9c4\uc2e4\uc774 \uc774 \uc815\uad8c\uc744 \ubb34\ub108\ub728\ub9b4 \uac70\uace0\uc694.\u201d",
            actor: "\uc124\uacbd\uad6c",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uae40\uacbd\ucc2c",
            clip: "FALSE",
          },
          {
            id: 341,
            year: 2017,
            title: "1987",
            dialogue:
              "\u201c\uc9c4\uc2e4\uc740 \uac10\uc625\uc5d0 \uac00\ub458 \uc218 \uc5c6\ub2e4.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uae40\uc758\uc131",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uae40\uacbd\ucc2c",
            clip: "FALSE",
          },
          {
            id: 342,
            year: 2017,
            title: "1987",
            dialogue:
              "\u201c\uc8fd\uc740 \uc9c0 \uc5ec\ub35f \uc2dc\uac04\ubc16\uc5d0 \uc548 \ub410\ub294\ub370 \uc544\ubc84\uc9c0\uac00 \uc8fd\uc740 \uc544\ub4e4\uc744 \ubd24\ub2e4, \ubabb\ubd24\ub2e4... \ubabb \ubd24\ub124? \ubabb \ubd24\uc9c0?\u201d",
            character: "\uac80\uc0ac",
            actor: "\ud558\uc815\uc6b0",
            director: "\uc7a5\uc900\ud658",
            scenario: "\uae40\uacbd\ucc2c",
            adaptation:
              "\uae40\uacbd\ucc2c, \uc774\uc6b0\uc815, \uc815\uc900\ud658",
            clip: "FALSE",
          },
          {
            id: 343,
            year: 2017,
            title: "\uac15\ucca0\ube44",
            dialogue:
              "\u201c\ub450\ub354\uc9c0\ub3c4 \uc548 \uba39\ub294\ub370 \uc65c \uc774\ub807\uac8c \ub545\uad74\uc744 \uc798 \ud30c\uc624? \ud1b5\uc77c\ub418\uba74 \uc9c0\ud558\ucca0\uc740 \ub2f9\uc2e0\ub124\ub4e4\uc774 \ub2e4 \ud30c\uc624.\u201d",
            actor: "\uacfd\ub3c4\uc6d0",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc815\ud558\uc6a9",
            clip: "FALSE",
          },
          {
            id: 344,
            year: 2017,
            title: "\uac15\ucca0\ube44",
            dialogue:
              '\u201c\uadf8, GD\ub77c\uace0 \uc544\uc624? \ub0a8\uc870\uc120 \uac00\uc218\ub77c\ub358\ub370." "\uc54c\uc9c0, \uac54 \ubaa8\ub974\uba74 \uac04\ucca9\uc774\uc9c0.\u201d',
            character: "\ubd81\ud55c\uad70",
            actor: "\uc815\uc6b0\uc131, \uacfd\ub3c4\uc6d0",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc815\ud558\uc6a9",
            clip: "FALSE",
          },
          {
            id: 345,
            year: 2017,
            title: "\uac15\ucca0\ube44",
            dialogue:
              "\u201c\uadf8\ub798, \uba40\uca61\ud55c \ub098\ub77c \ub450 \ub3d9\uac15 \ub0b4\ub193\uc73c\ub2c8\uae4c \uc774\ub807\uac8c \uc11c\ub85c \uac1c\uace0\uc0dd\ud558\uc796\uc544.\u201d",
            actor: "\uacfd\ub3c4\uc6d0",
            director: "\uc591\uc6b0\uc11d",
            scenario: "\uc591\uc6b0\uc11d, \uc815\ud558\uc6a9",
            clip: "FALSE",
          },
          {
            id: 346,
            year: 2017,
            title: "\uacf5\uc870",
            dialogue:
              "\u201c\uc57c, \ub108 \ubbf8\ucce4\uc5b4? \uc774\uac8c \uadf9\ube44 \uc218\uc0ac\uc57c, \uc774\uac8c? \uad11\uace0 \uc218\uc0ac\uc9c0!\u201d",
            actor: "\uc774\ud574\uc601",
            director: "\uae40\uc131\ud6c8",
            scenario: "\uc724\ud604\ud638",
            adaptation:
              "\ubc15\uc218\uc9c4, \uac15\ub300\uaddc, \uc724\uc81c\uade0, \ud669\uc870\uc724",
            clip: "FALSE",
          },
          {
            id: 347,
            year: 2017,
            title: "\uad70\ud568\ub3c4",
            dialogue:
              "\u201c\uc131\uc9c8 \uc880 \uc8fd\uc774\uace0 \uc0b4\uc544. \uc0b4\ub2e4 \ubcf4\uba74 \uc5b8\uc820\uac00 \uc2dc\uc5b4\ubbf8 \uc8fd\ub294 \ub0a0\ub3c4 \uc628\ub2e4\ub354\ub77c.\u201d",
            actor: "\uc18c\uc9c0\uc12d",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644, \uc2e0\uacbd\uc77c",
            clip: "FALSE",
          },
          {
            id: 348,
            year: 2017,
            title: "\uad70\ud568\ub3c4",
            dialogue:
              "\u201c\ub098\uac08 \uac70\uc694. \uc5ec\uae30 \uc788\ub294 \uc870\uc120 \uc0ac\ub78c\ub4e4 \ub2e4 \uac19\uc774.\u201d",
            character: "\ub3c5\ub9bd\uad70",
            actor: "\uc1a1\uc911\uae30",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644, \uc2e0\uacbd\uc77c",
            clip: "FALSE",
          },
          {
            id: 349,
            year: 2017,
            title: "\uad70\ud568\ub3c4",
            dialogue:
              "\u201c\ud55c \uc0ac\ub78c\uc774\ub77c\ub3c4 \uc0b4\ubbc4 \uc6b0\ub9ac\uac00 \uc774\uae30\ub294 \uac70\uc5ec, \ud55c \uc0ac\ub78c\uc774\ub77c\ub3c4.\u201d",
            actor: "\uc774\uc815\ud604",
            director: "\ub958\uc2b9\uc644",
            scenario: "\ub958\uc2b9\uc644, \uc2e0\uacbd\uc77c",
            clip: "FALSE",
          },
          {
            id: 350,
            year: 2017,
            title: "\ub0a8\ud55c\uc0b0\uc131",
            dialogue:
              "\u201c\uc2f8\uc6cc\uc57c \ud55c\ub2e4\uba74 \ubc18\ub4dc\uc2dc \uc774\uae30\ub294 \uc2f8\uc6c0\uc774\uc5b4\uc57c \ud560 \uac83\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\ud669\ub3d9\ud601",
            source: "\uae40\ud6c8",
            scenario: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 351,
            year: 2017,
            title: "\ub0a8\ud55c\uc0b0\uc131",
            dialogue:
              "\u201c\uc800 \uac19\uc740 \ub188\ub4e4\uc774\uc57c \uadf8\uc800 \ubd04\uc5d0 \uc528\ub97c \ubfcc\ub9ac\uace0 \uac00\uc744\uc5d0 \uac70\ub450\uc5b4 \uaca8\uc6b8\uc5d0 \ubc30\uacef\uc9c0 \uc54a\uace0 \ub0a0 \uc218 \uc788\ub294 \uc138\uc0c1\uc744 \uafc8\uafc0 \ubfd0\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uace0\uc218",
            director: "\ud669\ub3d9\ud601",
            source: "\uae40\ud6c8",
            scenario: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 352,
            year: 2017,
            title: "\ub0a8\ud55c\uc0b0\uc131",
            dialogue:
              "\u201c\ubc31\uc131\uc744 \uc704\ud55c \uc0c8\ub85c\uc6b4 \uc0b6\uc758 \uae38\uc774\ub780 \ub0a1\uc740 \uac83\ub4e4\uc774 \ubaa8\ub450 \uc0ac\ub77c\uc9c4 \uc138\uc0c1\uc5d0\uc11c \ube44\ub85c\uc18c \uc5f4\ub9ac\ub294 \uac83\uc774\uc624.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uae40\uc724\uc11d",
            director: "\ud669\ub3d9\ud601",
            source: "\uae40\ud6c8",
            scenario: "\ud669\ub3d9\ud601",
            clip: "FALSE",
          },
          {
            id: 353,
            year: 2017,
            title: "\ub354 \ud0b9",
            dialogue:
              "\u201c\uc0ac\uac74\ub3c4 \uae40\uce58\ucc98\ub7fc \ub9db\uc788\uac8c \ubb35\ud614\ub2e4\uac00 \uc81c\ub300\ub85c \uc775\uc5c8\uc744 \ub54c \uba39\uc5b4\uc57c \ub41c\ub2e4.\u201d",
            character: "\uac80\uc0ac",
            actor: "\ubc30\uc131\uc6b0",
            director: "\ud55c\uc7ac\ub9bc",
            clip: "FALSE",
          },
          {
            id: 354,
            year: 2017,
            title: "\ub354 \ud0b9",
            dialogue:
              "\u201c\uc774, \uc815\uce58\uc778\uc774\ub780 \ub9d0\uc774\uc57c. \ubc18\ub4dc\uc2dc \ub2f9\ud55c \uac83\uc5d0\ub294 \ubcf4\ubcf5\uc744 \ud574\uc57c \ub41c\ub2e4. \uc774\uac8c \uc544\uc8fc \ubcf5\uc7a1\ud55c \uc815\uce58 \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1\uc758 \ucca0\ud559\uc774\uac70\ub4e0.\u201d",
            character: "\uac80\uc0ac",
            actor: "\uc815\uc6b0\uc131",
            director: "\ud55c\uc7ac\ub9bc",
            clip: "FALSE",
          },
          {
            id: 355,
            year: 2017,
            title: "\ubc94\uc8c4\ub3c4\uc2dc",
            dialogue: "\u201c\uc9c4\uc2e4\uc758 \ubc29\uc73c\ub85c.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uac15\uc724\uc131",
            scenario: "\uac15\uc724\uc131",
            adaptation: "\uc774\uc11d\uadfc",
            clip: "FALSE",
          },
          {
            id: 356,
            year: 2017,
            title:
              "\ubd88\ud55c\ub2f9: \ub098\uc05c \ub188\ub4e4\uc758 \uc138\uc0c1",
            dialogue:
              "\u201c\uc57c\uc544, \uc790\uae30\ub294 \uba4d\ub3c4 \uc608\uc058\uac8c \ub4e0\ub2e4.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uc124\uacbd\uad6c",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604, \uae40\ubbfc\uc218",
            adaptation: "\uc774\uc6d0\uc7ac",
            clip: "TRUE",
          },
          {
            id: 357,
            year: 2017,
            title: "\uc2dc\uc778\uc758 \uc0ac\ub791",
            dialogue:
              "\u201c\uadf8\ub807\uac8c... \ud568\ubd80\ub85c \uc544\ub984\ub2e4\uc6b4 \uac83\ub4e4.\u201d",
            keyword: "\uc0ac\ub791 \ub0b4\ub808\uc774\uc158",
            actor: "\uc591\uc775\uc900",
            director: "\uae40\uc591\ud76c",
            scenario: "\uae40\uc591\ud76c",
            clip: "FALSE",
          },
          {
            id: 358,
            year: 2017,
            title: "\uc2dc\uc778\uc758 \uc0ac\ub791",
            dialogue:
              "\u201c\ucc98\uc808\ud558\uc9c0 \uc54a\uc73c\uba74 \uc0ac\ub791\uc774 \uc544\ub2c8\uc57c.\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\uc804\ud61c\uc9c4",
            director: "\uae40\uc591\ud76c",
            scenario: "\uae40\uc591\ud76c",
            clip: "FALSE",
          },
          {
            id: 359,
            year: 2017,
            title: "\uc2e0\uacfc\ud568\uaed8-\uc8c4\uc640 \ubc8c",
            dialogue:
              "\u201c\u2018\uc9c0\ub098\uac04 \uc77c\uc5d0 \uc0c8\ub85c\uc6b4 \ub208\ubb3c\uc744 \ub0ad\ube44\ud558\uc9c0 \ub9d0\uc790.\u2019 \uc8fd\uc740 \uc6b0\ub9ac \ud615\uc774 \ud574\uc900 \ub9d0\uc774\ub2e4, \uc774 \uc790\uc2dd\uc544.\u201d",
            actor: "\uae40\ub3d9\uc6b1",
            director: "\uae40\uc6a9\ud654",
            source: "\uc8fc\ud638\ubbfc",
            scenario: "\uae40\uc6a9\ud654",
            adaptation:
              "\uc774\uc815\uc6b1, \ubc15\uc815\uc218, \uae40\ucc3d\ud6c8",
            clip: "FALSE",
          },
          {
            id: 360,
            year: 2017,
            title: "\uc2e0\uacfc\ud568\uaed8-\uc8c4\uc640 \ubc8c",
            dialogue:
              "\u201c\uc774\uc2b9\uc758 \ubaa8\ub4e0 \uc778\uac04\uc740 \uc8c4\ub97c \uc9d3\uace0 \uc0b0\ub2e4. \uadf8\ub9ac\uace0 \uadf8\ub4e4 \uc911 \uc544\uc8fc \uc77c\ubd80\ub9cc\uc774 \uc9c4\uc815\ud55c \uc6a9\uae30\ub97c \ub0b4\uc5b4 \uc6a9\uc11c\ub97c \uad6c\ud558\uace0 \uadf8\ub4e4 \uc911 \uc544\uc8fc \uadf9\uc18c\uc218\ub9cc\uc774 \uc9c4\uc2ec\uc73c\ub85c \uc6a9\uc11c\ub97c \ubc1b\ub294\ub2e4. \uc800\uc2b9\ubc95 \uc81c1\uc870 1\ud56d\uc5d0 \uc758\uac70! \uc774\uc2b9\uc758 \uc778\uac04\uc774 \uc774\ubbf8 \uc9c4\uc2ec\uc73c\ub85c \uc6a9\uc11c\ubc1b\uc740 \uc8c4\ub97c \uc800\uc2b9\uc740 \ub354 \uc774\uc0c1 \uc2ec\ud310\ud558\uc9c0 \uc54a\ub294\ub2e4.\u201d",
            actor: "\uc774\uc815\uc7ac",
            director: "\uae40\uc6a9\ud654",
            source: "\uc8fc\ud638\ubbfc",
            scenario: "\uae40\uc6a9\ud654",
            adaptation:
              "\uc774\uc815\uc6b1, \ubc15\uc815\uc218, \uae40\ucc3d\ud6c8",
            clip: "FALSE",
          },
          {
            id: 361,
            year: 2017,
            title: "\uc544\uc774 \uce94 \uc2a4\ud53c\ud06c",
            dialogue:
              "\u201c\uc6d0\ud5cc\ub4dc\ub808\ub4dc \ub515\uc154\ub108\ub9ac\uc5ec.\u201d",
            character: "\ub178\uc778",
            keyword: "\uc678\uad6d\uc5b4",
            actor: "\ub098\ubb38\ud76c",
            director: "\uae40\ud604\uc11d",
            scenario: "\uc720\uc2b9\ud76c",
            clip: "FALSE",
          },
          {
            id: 362,
            year: 2017,
            title: "\uc544\uc774 \uce94 \uc2a4\ud53c\ud06c",
            dialogue:
              "\u201c\uc78a\uc73c\uba74\uc740 \ub0b4\uac00 \uc9c0\ub294 \uac70\ub2c8\uaed8.\u201d",
            actor: "\ub098\ubb38\ud76c",
            director: "\uae40\ud604\uc11d",
            scenario: "\uc720\uc2b9\ud76c",
            clip: "FALSE",
          },
          {
            id: 363,
            year: 2017,
            title: "\uc544\uc774 \uce94 \uc2a4\ud53c\ud06c",
            dialogue:
              "\u201c\uc544\uc774 \uc5e0 \uc3d8\ub9ac, \uadf8 \ud55c\ub9c8\ub514\uac00 \uadf8\ub807\uac8c \uc5b4\ub835\uc2b5\ub2c8\uae4c?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\ub098\ubb38\ud76c",
            director: "\uae40\ud604\uc11d",
            scenario: "\uc720\uc2b9\ud76c",
            clip: "FALSE",
          },
          {
            id: 364,
            year: 2017,
            title: "\uc5ec\ubc30\uc6b0\ub294 \uc624\ub298\ub3c4",
            dialogue:
              "\u201c\uc2dc\uc5b4\uba38\ub2c8\ub3c4 \ud558\ub098\uace0, \uc560\uae30\ub3c4 \ud558\ub098\uace0, \uc791\ud488\ub3c4 \uc77c \ub144\uc5d0 \ud574\ubd10\uc57c \ud55c\ub450 \ud3b8 \ud558\ub294\ub370 \ubb58 \uc904\uc5ec\uc694, \ub0b4\uac00?\u201d",
            actor: "\ubb38\uc18c\ub9ac",
            director: "\ubb38\uc18c\ub9ac",
            scenario: "\ubb38\uc18c\ub9ac",
            clip: "TRUE",
          },
          {
            id: 365,
            year: 2017,
            title: "\ud0dd\uc2dc\uc6b4\uc804\uc0ac",
            dialogue:
              "\u201c\uc544\ube60\uac00... \uc190\ub2d8\uc744 \ub450\uace0 \uc654\uc5b4.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc7a5\ud6c8",
            scenario: "\uc5c4\uc720\ub098",
            adaptation: "\uc870\uc2ac\uc608",
            clip: "TRUE",
          },
          {
            id: 366,
            year: 2017,
            title: "\ud0dd\uc2dc\uc6b4\uc804\uc0ac",
            dialogue:
              "\u201c\uc544, \uc544\ub2c8, \ub0b4\uac00 \ud0dd\uc2dc\ube44 \ubc1b\uc558\uc796\uc544. \uc704 \uace0 \ud22c\uac8c\ub354. \uc544\uc774 \ud0dd\uc2dc \ub4dc\ub77c\uc774\ubc84. \uc720\uc5b4 \ud0dd\uc2dc \uc190\ub2d8, \uc624\ucf00\uc774?\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc7a5\ud6c8",
            scenario: "\uc5c4\uc720\ub098",
            adaptation: "\uc870\uc2ac\uc608",
            clip: "FALSE",
          },
          {
            id: 367,
            year: 2018,
            title: "\uacf5\uc791",
            dialogue:
              "\u201c\ub2f9\uc2e0\uc744 \ubbff\ub294 \uac83 \uc678\uc5d0\ub294 \ub2e4\ub978 \ubc29\ubc95\uc774 \uc5c6\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uc774\uc131\ubbfc",
            director: "\uc724\uc885\ube48",
            scenario: "\uad8c\uc131\ud718, \uc724\uc885\ube48",
            clip: "FALSE",
          },
          {
            id: 368,
            year: 2018,
            title: "\uacf5\uc791",
            dialogue:
              "\u201c\ubcfc \uc0ac\ub78c\uc774\ub77c\ubbc4 \uc5b8\uc820\uac00\ub294 \ubcf4\uac8c \ub418\uac14\uc9c0.\u201d",
            actor: "\uc774\uc131\ubbfc",
            director: "\uc724\uc885\ube48",
            scenario: "\uad8c\uc131\ud718, \uc724\uc885\ube48",
            clip: "FALSE",
          },
          {
            id: 369,
            year: 2018,
            title: "\uad6d\uac00\ubd80\ub3c4\uc758 \ub0a0",
            dialogue:
              "\u201c\uc794\uce58\ub294 \ub05d\ub0ac\ub2e4, \uc774\uae34\uac00?\u201d",
            keyword: " ",
            actor: "YS",
            director: "\ucd5c\uad6d\ud76c",
            scenario: "\uc5c4\uc131\ubbfc",
            clip: "FALSE",
          },
          {
            id: 370,
            year: 2018,
            title: "\uad6d\uac00\ubd80\ub3c4\uc758 \ub0a0",
            dialogue:
              "\u201c\uc704\uae30\ub294 \ubc18\ubcf5\ub3fc\uc694. \uc704\uae30\uc5d0 \ub610 \ub2f9\ud558\uc9c0 \uc54a\uae30 \uc704\ud574\uc120 \uc78a\uc9c0 \ub9d0\uc544\uc57c \ud574\uc694. \ub04a\uc784\uc5c6\uc774 \uc758\uc2ec\ud558\uace0 \uc0ac\uace0\ud558\ub294 \uac83. \ub2f9\uc5f0\ud55c \uac83\uc744 \ub2f9\uc5f0\ud558\uac8c \uc0dd\uac01\ud558\uc9c0 \uc54a\ub294 \uac83. \uadf8\ub9ac\uace0 \ud56d\uc0c1 \uae68\uc778 \ub208\uc73c\ub85c \uc138\uc0c1\uc744 \ubc14\ub77c\ubcfc \uac83. \uc800\ub294 \ub450 \ubc88\uc740 \uc9c0\uace0 \uc2f6\uc9c0 \uc54a\uac70\ub4e0\uc694.\u201d",
            keyword: "\uc9c0\ud61c",
            actor: "\uae40\ud61c\uc218",
            director: "\ucd5c\uad6d\ud76c",
            scenario: "\uc5c4\uc131\ubbfc",
            clip: "FALSE",
          },
          {
            id: 371,
            year: 2018,
            title: "\ub3c5\uc804",
            dialogue:
              "\u201c\ud55c\uad6d \uc0ac\ub78c\ub4e4 \ubee5\uce74\ub294 \ubd80\uacc4 \uc720\uc804\uc774\ub77c\uba74\uc11c\uc694.\u201d",
            actor: "\ub958\uc900\uc5f4",
            director: "\uc774\ud574\uc601",
            scenario: "\uc815\uc11c\uacbd, \uc774\ud574\uc601",
            clip: "FALSE",
          },
          {
            id: 372,
            year: 2018,
            title: "\ub3c5\uc804",
            dialogue:
              "\u201c\uadf8, \uc65c \ubb54\uac00\ub97c \uc874\ub098\uac8c \ucad3\ub2e4 \ubcf4\uba74\uc740 \uac00\ub054 \u2018\ub0b4\uac00 \ubb58 \ucad3\ub098\u2019 \u2018\uc65c \uc774\uac78 \ucad3\ub098\u2019 \uc2f6\uc5b4\uc9c0\uac70\ub4e0. \uadf8\ub7f4 \ub54c\ub294 \uc53b\uace0 \uac00\uc11c \uc790\ub294 \uac8c \ub2f5\uc774\uc57c.\u201d",
            actor: "\uc870\uc9c4\uc6c5",
            director: "\uc774\ud574\uc601",
            scenario: "\uc815\uc11c\uacbd, \uc774\ud574\uc601",
            clip: "FALSE",
          },
          {
            id: 373,
            year: 2018,
            title: "\ub9ac\ud2c0 \ud3ec\ub808\uc2a4\ud2b8",
            dialogue:
              "\u201c\uc544\uc90c\ub9c8 \ub5a1 \ub9db\uc740 \ub2ec\uc9c0 \uc54a\uc740\ub370 \ub2e8\ub9db\uc774 \ub098\uace0, \ub2c8\uaec0 \uc9dc\uc9c0 \uc54a\uc740\ub370 \uc9e0\ub9db\uc774 \ub098.\u201d",
            actor: "\ub958\uc900\uc5f4",
            director: "\uc784\uc21c\ub840",
            source: "\uc774\uac00\ub9ac\uc2dc \ub2e4\uc774\uc2a4\ucf00",
            scenario: "\ud669\uc131\uad6c",
            clip: "FALSE",
          },
          {
            id: 374,
            year: 2018,
            title: "\ub9ac\ud2c0 \ud3ec\ub808\uc2a4\ud2b8",
            dialogue:
              "\u201c\uc774\uac70\ub97c \uc77d\uc9c0 \uc54a\ub294 \uac74 \ub124 \uc790\uc720\uc9c0\ub9cc, \uc774\uac78 \ubc30\ub2ec\ud558\uc9c0 \uc54a\ub294 \uac74 \ub0b4 \uc790\uc720\uac00 \uc544\ub2c8\ub780\ub2e4.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\ubc15\uc6d0\uc0c1",
            director: "\uc784\uc21c\ub840",
            source: "\uc774\uac00\ub9ac\uc2dc \ub2e4\uc774\uc2a4\ucf00",
            scenario: "\ud669\uc131\uad6c",
            clip: "FALSE",
          },
          {
            id: 375,
            year: 2018,
            title: "\ub9ac\ud2c0 \ud3ec\ub808\uc2a4\ud2b8",
            dialogue:
              "\u201c\ub2e8\ubc24\uc5d0 \ub2e8\ub9db\uc744 \ub354\ud574 \ubcf4\uad00\ud55c\ub2e4. \ub2e4 \uba39\uc5b4\ubc84\ub9ac\uc9c0 \ubabb\ud558\uac8c.\u201d",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\uc784\uc21c\ub840",
            source: "\uc774\uac00\ub9ac\uc2dc \ub2e4\uc774\uc2a4\ucf00",
            scenario: "\ud669\uc131\uad6c",
            clip: "FALSE",
          },
          {
            id: 376,
            year: 2018,
            title: "\ub9ac\ud2c0 \ud3ec\ub808\uc2a4\ud2b8",
            dialogue:
              "\u201c\uc2f9\uc774 \uc5b4\ub290 \uc815\ub3c4 \uc790\ub784 \ub54c\uae4c\uc9c0 \ud0a4\uc6cc\uc11c \ubbf8\ub9ac \uac70\ub984\uc744 \uc900 \ubc2d\uc5d0 \uc62e\uaca8 \uc2ec\ub294\ub370, \uc774\uac83\uc774 \uc544\uc8fc\uc2ec\uae30\ub2e4. \ub354 \uc774\uc0c1 \uc62e\uaca8 \uc2ec\uc9c0 \uc54a\uace0 \uc644\uc804\ud558\uac8c \uc2ec\ub294\ub2e4\ub294 \uc758\ubbf8\ub2e4.\u201d",
            actor: "\uae40\ud0dc\ub9ac",
            director: "\uc784\uc21c\ub840",
            source: "\uc774\uac00\ub9ac\uc2dc \ub2e4\uc774\uc2a4\ucf00",
            scenario: "\ud669\uc131\uad6c",
            clip: "FALSE",
          },
          {
            id: 377,
            year: 2018,
            title: "\ub9c8\uc57d\uc655",
            dialogue:
              "\u201c\uc774\ub7f0 \uac1c\uc8fd\uc74c\uc5d0 \ucc98\ud588\uc744 \ub54c \uc804\ud654 \ud55c \ud1b5 \ub123\uc744 \ube7d \uc5c6\uc73c\uba74 \uc774 \ub098\ub77c\uc5d0\uc11c \ubabb \uc0b0\ub2e4.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc6b0\ubbfc\ud638",
            scenario: "\uc774\uc9c0\ubbfc, \uc6b0\ubbfc\ud638",
            clip: "FALSE",
          },
          {
            id: 378,
            year: 2018,
            title: "\ub9c8\uc57d\uc655",
            dialogue:
              "\u201c\uac1c\uac19\uc774 \ubc88 \ub3c8\uc740 \uc815\uc2b9\ub9e8\uce58\ub85c \uc4f0\ub294 \uac8c \uc544\uc774\ub77c \uc815\uc2b9\ud55c\ud14c \uc4f0\ub294 \uae41\ub2c8\ub354.\u201d",
            keyword: "\uc0ac\ud22c\ub9ac",
            actor: "\uc1a1\uac15\ud638",
            director: "\uc6b0\ubbfc\ud638",
            scenario: "\uc774\uc9c0\ubbfc, \uc6b0\ubbfc\ud638",
            clip: "FALSE",
          },
          {
            id: 379,
            year: 2018,
            title: "\ubc84\ub2dd",
            dialogue:
              "\u201c\uc5ec\uae30 \uade4\uc774 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\uc9c0 \ub9d0\uace0, \uc5ec\uae30\uc5d0 \uade4\uc774 \uc5c6\ub2e4\ub294 \uac78 \uc78a\uc5b4 \uba39\uc73c\uba74 \ub3fc.\u201d",
            actor: "\uc804\uc885\uc11c",
            director: "\uc774\ucc3d\ub3d9",
            source: "\ubb34\ub77c\uce74\ubbf8 \ud558\ub8e8\ud0a4",
            scenario: "\uc624\uc815\ubbf8, \uc774\ucc3d\ub3d9",
            clip: "TRUE",
          },
          {
            id: 380,
            year: 2018,
            title: "\ubcc0\uc0b0",
            dialogue:
              "\u201c\ub0b4 \uace0\ud5a5\uc740 \ud3d0\ud56d, \ub0b4 \uace0\ud5a5\uc740 \uac00\ub09c\ud574\uc11c \ubcf4\uc5ec\uc904 \uac83\uc740 \ub178\uc744 \ubc16\uc5d0 \uc5c6\ub124.\u201d",
            character: "\uccad\ucd98",
            actor: "\ubc15\uc815\ubbfc",
            director: "\uc774\uc900\uc775",
            scenario: "\uae40\uc138\uacb8",
            clip: "FALSE",
          },
          {
            id: 381,
            year: 2018,
            title: "\uc18c\uacf5\ub140",
            dialogue: "\u201c\ubd04\uc5d0 \ud558\uc790.\u201d",
            keyword: "\uc139\uc2a4",
            actor: "\uc548\uc7ac\ud64d",
            director: "\uc804\uace0\uc6b4",
            scenario: "\uc804\uace0\uc6b4",
            clip: "TRUE",
          },
          {
            id: 382,
            year: 2018,
            title: "\uc18c\uacf5\ub140",
            dialogue:
              "\u201c\ub09c \uac08 \ub370\uac00 \uc5c6\ub294 \uac8c \uc544\ub2c8\ub77c \uc5ec\ud589 \uc911\uc778 \uac70\uc57c.\u201d",
            actor: "\uc774\uc19c",
            director: "\uc804\uace0\uc6b4",
            scenario: "\uc804\uace0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 383,
            year: 2018,
            title: "\uc18c\uacf5\ub140",
            dialogue:
              "\u201c\uc9d1\uc774 \uc5c6\uc5b4\ub3c4 \uc0dd\uac01\uacfc \ucde8\ud5a5\uc740 \uc788\uc5b4.\u201d",
            actor: "\uc774\uc19c",
            director: "\uc804\uace0\uc6b4",
            scenario: "\uc804\uace0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 384,
            year: 2018,
            title: "\uc2e0\uacfc\ud568\uaed8-\uc778\uacfc \uc5f0",
            dialogue:
              "\u201c\ud380\ub4dc \uc624\ub978\ub2e4\uace0, \uc624\ub978\ub2e4\uace0! \uc8fc\uc2dd\uc740 \uae30\ub2e4\ub9bc\uc774\ub77c\uace0. \uadf8\uac78 \uaf2d \ub9d0\ub85c \ud574\uc57c \uc544\ub0d0\uace0!\u201d",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uae40\uc6a9\ud654",
            source: "\uc8fc\ud638\ubbfc",
            scenario: "\uae40\uc6a9\ud654, \uac15\uc9c0\uc6d0",
            adaptation:
              "\uc774\uc815\uc6b1, \uae40\ucc3d\ud6c8, \ubc15\uc815\uc218",
            clip: "FALSE",
          },
          {
            id: 385,
            year: 2018,
            title: "\uc2e0\uacfc\ud568\uaed8-\uc778\uacfc \uc5f0",
            dialogue:
              "\u201c\ub300\uc655\ub2d8, \ubaa8\ub4e0 \uc8fd\uc74c\uc740 \ubd88\uac00\ud53c\ud55c \uac83\uc774\uc5b4\uc57c\uc9c0 \uc5b5\uc6b8\ud55c \uc8fd\uc74c\uc774\uc5b4\uc11c\ub294 \uc548 \ub41c\ub2e4\uace0 \ub4e3\uace0 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4.\u201d",
            actor: "\ud558\uc815\uc6b0",
            director: "\uae40\uc6a9\ud654",
            source: "\uc8fc\ud638\ubbfc",
            scenario: "\uae40\uc6a9\ud654, \uac15\uc9c0\uc6d0",
            adaptation:
              "\uc774\uc815\uc6b1, \uae40\ucc3d\ud6c8, \ubc15\uc815\uc218",
            clip: "FALSE",
          },
          {
            id: 386,
            year: 2018,
            title: "\uc2e0\uacfc\ud568\uaed8-\uc778\uacfc \uc5f0",
            dialogue:
              "\u201c\uc774 \uc9d1 \uc800 \uc9d1, \ucc9c \ub144 \ub3d9\uc548 \uac00\ud0dd\uc2e0 \ub178\ub987 \ud558\uba74\uc11c \uc9c0\ucf1c\ubcf4\ub2c8\uae4c \uc774\ub188\uc758 \uc778\uac04\ub4e4 \ub354 \ubaa8\ub974\uaca0\ub354\ub77c. \uadfc\ub370 \ud55c \uac00\uc9c0 \ud655\uc2e4\ud55c \uac74 \uc788\ub354\ub77c. \ub098\uc05c \uc778\uac04\uc740 \uc5c6\ub2e4\ub294 \uac70, \ub098\uc05c \uc0c1\ud669\uc774 \uc788\ub294 \uac70\uc9c0. \uadf8\ub7ec\ub2c8 \uc6d0\ub9dd\uc2a4\ub7fd\uace0 \uc6d0\ud1b5\ud558\uace0 \uc774\ud574\uac00 \uc548 \ub420 \ub54c \ubaa8\ub4e0 \uac78 \uac70\uafb8\ub85c \uc77d\uace0 \uac70\uafb8\ub85c \uc0dd\uac01\ud574 \ubd10. \uadf8\ub7fc \ud480\ub9b4 \uac70\ub2e4. \uc774 \uc778\uac04\ub4e4\ub3c4 \uc138\uc0c1\ub3c4 \uc774 \uc6b0\uc8fc\ub3c4.\u201d",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uae40\uc6a9\ud654",
            source: "\uc8fc\ud638\ubbfc",
            scenario: "\uae40\uc6a9\ud654, \uac15\uc9c0\uc6d0",
            adaptation:
              "\uc774\uc815\uc6b1, \uae40\ucc3d\ud6c8, \ubc15\uc815\uc218",
            clip: "FALSE",
          },
          {
            id: 387,
            year: 2018,
            title: "\uc548\uc2dc\uc131",
            dialogue:
              "\u201c\ub098\ub294 \ubb34\ub98e \uafc7\ub294 \ubc95\uc744 \ubc30\uc6b0\uc9c0 \ubabb\ud588\uace0 \ud56d\ubcf5\uc774\ub780 \uac78 \ubc30\uc6b0\uc9c0 \ubabb\ud588\ub2e4. \ub0b4\uac00 \ubc30\uc6b4 \uac74 \uc2f8\uc6cc\uc57c \ud560 \ub54c\ub294 \uc2f8\uc6cc\uc57c \ud55c\ub2e4\ub294 \uac70\ub2e4.\u201d",
            actor: "\uc870\uc778\uc131",
            director: "\uae40\uad11\uc2dd",
            source: "\ubaa8\ud64d\uc9c4",
            scenario: "\uae40\uad11\uc2dd",
            adaptation:
              "\uc724\ud544\uc900, \uc5c4\uc138\uc724, \ubc15\uc740\uad50, \uc815\uc758\ubaa9, \uae40\uc720\uc9c4",
            clip: "FALSE",
          },
          {
            id: 388,
            year: 2018,
            title: "\uc548\uc2dc\uc131",
            dialogue:
              "\u201c\uc548\uc2dc\uc131\uc740 \uc9c0\uc9c0 \uc54a\ub294\ub2e4.\u201d",
            actor: "\ub0a8\uc8fc\ud601",
            director: "\uae40\uad11\uc2dd",
            source: "\ubaa8\ud64d\uc9c4",
            scenario: "\uae40\uad11\uc2dd",
            adaptation:
              "\uc724\ud544\uc900, \uc5c4\uc138\uc724, \ubc15\uc740\uad50, \uc815\uc758\ubaa9, \uae40\uc720\uc9c4",
            clip: "FALSE",
          },
          {
            id: 389,
            year: 2018,
            title: "\uc644\ubcbd\ud55c \ud0c0\uc778",
            dialogue:
              "\u201c\ubaa8\ub4e0 \uad00\uacc4\ub294 \uc11c\ub85c \ub2e4\ub974\ub2e4\ub294 \uac78 \uc778\uc815\ud558\ub294 \ub370\uc11c \uc2dc\uc791\ud574\uc57c \ud55c\ub2e4.\u201d",
            actor: "\uc870\uc9c4\uc6c5",
            director: "\uc774\uc7ac\uaddc",
            source: "\ud30c\uc62c\ub85c \uc81c\ub178\ubca0\uc81c",
            scenario: "\ubc30\uc138\uc601",
            adaptation: "\uc774\uc7ac\uaddc, \uc9c4\uacbd",
            clip: "FALSE",
          },
          {
            id: 390,
            year: 2018,
            title: "\uc644\ubcbd\ud55c \ud0c0\uc778",
            dialogue:
              "\u201c\uc0ac\ub78c\uc758 \ubcf8\uc131\uc740 \uc6d4\uc2dd \uac19\uc544\uc11c \uc7a0\uae50\uc740 \uac00\ub824\uc838\ub3c4 \uae08\ubc29 \ub4dc\ub7ec\ub098\uac8c \ub3fc \uc788\uc5b4.\u201d",
            actor: "\uc724\uacbd\ud638",
            director: "\uc774\uc7ac\uaddc",
            source: "\ud30c\uc62c\ub85c \uc81c\ub178\ubca0\uc81c",
            scenario: "\ubc30\uc138\uc601",
            adaptation: "\uc774\uc7ac\uaddc, \uc9c4\uacbd",
            clip: "FALSE",
          },
          {
            id: 391,
            year: 2018,
            title: "\uc644\ubcbd\ud55c \ud0c0\uc778",
            dialogue:
              "\u201c\uc0ac\ub78c\ub4e4\uc740 \ub204\uad6c\ub098 \uc138 \uac1c\uc758 \uc0b6\uc744 \uc0b0\ub2e4. \uacf5\uc801\uc778 \ud558\ub098, \uac1c\uc778\uc801\uc778 \ud558\ub098.. \uadf8\ub9ac\uace0, \ube44\ubc00\uc758 \ud558\ub098...\u201d",
            keyword: "  \ub0b4\ub808\uc774\uc158",
            actor: "-",
            director: "\uc774\uc7ac\uaddc",
            source: "\ud30c\uc62c\ub85c \uc81c\ub178\ubca0\uc81c",
            scenario: "\ubc30\uc138\uc601",
            adaptation: "\uc774\uc7ac\uaddc, \uc9c4\uacbd",
            clip: "FALSE",
          },
          {
            id: 392,
            year: 2018,
            title: "\ud5c8\uc2a4\ud1a0\ub9ac",
            dialogue:
              "\u201c\uc790, \ub098\ub3c4 \uc5f0\uc2b5 \uc880 \ud558\uc790. \u2018\ub0b4 \ub625 \uad75\uace0 \ub0b4 \uc624\uc90c \ud3ed\ud3ec\ub2e4.\u2019\u201d",
            keyword: "\uc5ec\uc131 \uc131\uc5ed\ud560",
            actor: "\uae40\uc120\uc601",
            director: "\ubbfc\uaddc\ub3d9",
            scenario:
              "\uc11c\ud61c\ub9bc, \uc815\uaca8\uc6b4, \ubbfc\uaddc\ub3d9",
            adaptation: "\uae40\ub2e4\uc601",
            clip: "FALSE",
          },
          {
            id: 393,
            year: 2018,
            title: "\ud5c8\uc2a4\ud1a0\ub9ac",
            dialogue:
              "\u201c\uc6b0\ub9ac\ub294\uc694, \ud640\ubab8\uc774 \uc544\ub2c8\ub77c \uad6d\uac00\ub300\ud45c \uc120\uc218\uc778 \uae30\ub77c. \uc54c\uc558\uc5b4\uc694, \uae30\uc0ac \uc591\ubc18?\u201d",
            actor: "\uc608\uc218\uc815",
            director: "\ubbfc\uaddc\ub3d9",
            scenario:
              "\uc11c\ud61c\ub9bc, \uc815\uaca8\uc6b4, \ubbfc\uaddc\ub3d9",
            adaptation: "\uae40\ub2e4\uc601",
            clip: "FALSE",
          },
          {
            id: 394,
            year: 2018,
            title: "\ud5c8\uc2a4\ud1a0\ub9ac",
            dialogue:
              "\u201c\ubd80\ub044\ub7ec\ubc84\uc11c! \ub0b4 \ud63c\uc790 \uc798 \uba39\uace0 \uc798\uc0b0 \uac8c.\u201d",
            actor: "\uae40\ud76c\uc560",
            director: "\ubbfc\uaddc\ub3d9",
            scenario:
              "\uc11c\ud61c\ub9bc, \uc815\uaca8\uc6b4, \ubbfc\uaddc\ub3d9",
            adaptation: "\uae40\ub2e4\uc601",
            clip: "FALSE",
          },
          {
            id: 395,
            year: 2018,
            title: "\ud5c8\uc2a4\ud1a0\ub9ac",
            dialogue:
              "\u201c\uc9c0\uae08 \uae30\ud68c\ub97c \uc904\uac8c. \uc778\uac04\uc774 \ub418\ub77c\uc774.\u201d",
            keyword: "\uc804\uc7c1",
            actor: "\uae40\ud574\uc219",
            director: "\ubbfc\uaddc\ub3d9",
            scenario:
              "\uc11c\ud61c\ub9bc, \uc815\uaca8\uc6b4, \ubbfc\uaddc\ub3d9",
            adaptation: "\uae40\ub2e4\uc601",
            clip: "FALSE",
          },
          {
            id: 396,
            year: 2018,
            title: "\ud611\uc0c1",
            dialogue:
              "\u201c\ubbfc\ud0dc\uad6c, \uadf8 \ubaa9\uc228, \uc7a0\uae50\ub9cc \ub098\ud55c\ud14c \ub9e1\uaca8.\u201d",
            actor: "\uc190\uc608\uc9c4",
            director: "\uc774\uc885\uc11d",
            scenario: "\ucd5c\uc131\ud604",
            adaptation:
              "\uc774\uc885\uc11d, \uc724\uc81c\uade0, \uae40\ub3d9\ud55c",
            clip: "FALSE",
          },
          {
            id: 397,
            year: 2019,
            title: "82\ub144\uc0dd \uae40\uc9c0\uc601",
            dialogue:
              "\u201c\uc804 \ub2a5\ub825\uc774 \uc788\uac70\ub098 \uc5c6\uac70\ub098 \ud63c\uc790 \uc798 \uc0b4 \uac70\ub77c\uc11c\uc694.\u201d",
            actor: "\uacf5\ubbfc\uc815",
            director: "\uae40\ub3c4\uc601",
            source: "\uc870\ub0a8\uc8fc",
            scenario: "\uc720\uc601\uc544",
            adaptation: "\uae40\ub3c4\uc601, \uae40\ud6a8\ubbfc",
            clip: "FALSE",
          },
          {
            id: 398,
            year: 2019,
            title: "82\ub144\uc0dd \uae40\uc9c0\uc601",
            dialogue:
              "\u201c\uc9c0\uc601\uc544, \ub108 \uc58c\uc804\ud788 \uc788\uc9c0 \ub9c8. \ub098\ub300, \ub9c9 \ub098\ub300!\u201d",
            keyword: "\uc5ec\uc131 \uc131\uc5ed\ud560",
            actor: "\uae40\ubbf8\uacbd",
            director: "\uae40\ub3c4\uc601",
            source: "\uc870\ub0a8\uc8fc",
            scenario: "\uc720\uc601\uc544",
            adaptation: "\uae40\ub3c4\uc601, \uae40\ud6a8\ubbfc",
            clip: "FALSE",
          },
          {
            id: 399,
            year: 2019,
            title: "\uac78\uce85\uc2a4",
            dialogue:
              "\u201c\uc544\uc8fc \uac1c\uc0c8\ub07c \uc624\ube0c \uac1c\uc0c8\ub07c\ub4e4\uc774\uc9c0.\u201d",
            character: "\ud615\uc0ac",
            keyword: "\uc695\uc124",
            actor: "\ucd5c\uc218\uc601",
            director: "\uc815\ub2e4\uc6d0",
            scenario: "\uc815\ub2e4\uc6d0",
            adaptation: "\ubbfc\uc18c\uc5f0, \uc548\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 400,
            year: 2019,
            title: "\uac78\uce85\uc2a4",
            dialogue:
              "\u201c\uc2dc\uc791\ud560\uae4c\uc694? \uc77c\ub9dd\ud0c0\uc9c4.\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc774\uc131\uacbd",
            director: "\uc815\ub2e4\uc6d0",
            scenario: "\uc815\ub2e4\uc6d0",
            adaptation: "\ubbfc\uc18c\uc5f0, \uc548\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 401,
            year: 2019,
            title: "\uadf9\ud55c\uc9c1\uc5c5",
            dialogue:
              "\u201c\uc9c0\uae08\uae4c\uc9c0 \uc774\ub7f0 \ub9db\uc740 \uc5c6\uc5c8\ub2e4. \uc774\uac83\uc740 \uac08\ube44\uc778\uac00 \ud1b5\ub2ed\uc778\uac00.\u201d",
            actor: "\ub958\uc2b9\ub8e1",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\ubb38\ucda9\uc77c",
            adaptation: "\ubc30\uc138\uc601, \ud5c8\ub2e4\uc911",
            clip: "FALSE",
          },
          {
            id: 402,
            year: 2019,
            title: "\uadf9\ud55c\uc9c1\uc5c5",
            dialogue:
              "\u201c\uc950\uc0c8\ub07c \uc7a1\ub294 \ub370 \ub108\ub098\uc5c6\ub2e4, \uc774 \uc950\uc0c8\ub07c\uc57c.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ub958\uc2b9\ub8e1",
            director: "\uc774\ubcd1\ud5cc",
            scenario: "\ubb38\ucda9\uc77c",
            adaptation: "\ubc30\uc138\uc601, \ud5c8\ub2e4\uc911",
            clip: "FALSE",
          },
          {
            id: 403,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\ub108\ub294 \ub2e4 \uacc4\ud68d\uc774 \uc788\uad6c\ub098.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 404,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\uc2e4\uc804\uc740 \uae30\uc138\uc57c. \uae30\uc138.\u201d",
            actor: "\ucd5c\uc6b0\uc2dd",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 405,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\uc81c\uc2dc\uce74 \uc678\ub3d9\ub538 \uc77c\ub9ac\ub178\uc774 \uc2dc\uce74\uace0 \uacfc \uc120\ubc30\ub294 \uae40\uc9c4\ubaa8, \uadf8\ub294 \ub124 \uc0ac\ucd0c.\u201d",
            actor: "\ubc15\uc18c\ub2f4",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 406,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\ubbff\ub294 \uc0ac\ub78c \uc18c\uac1c\ub85c \uc5f0\uacb0 \uc5f0\uacb0, \uc774\uac8c \ubca0\uc2a4\ud2b8\uc778 \uac83 \uac19\uc544\uc694. \uc77c\uc885\uc758 \ubb50\ub784\uae4c... \ubbff\uc74c\uc758 \ubca8\ud2b8?\u201d",
            actor: "\uc870\uc5ec\uc815",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "TRUE",
          },
          {
            id: 407,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\ub108 \uc808\ub300 \uc2e4\ud328\ud558\uc9c0 \uc54a\ub294 \uacc4\ud68d\uc774 \ubb54 \uc904 \uc544\ub2c8? \ubb34\uacc4\ud68d\uc774\uc57c, \ubb34\uacc4\ud68d. \ub178 \ud50c\ub79c. \uc65c\ub0d0? \uacc4\ud68d\uc744 \ud558\uba74 \ubc18\ub4dc\uc2dc \uacc4\ud68d\ub300\ub85c \uc548 \ub418\uac70\ub4e0, \uc778\uc0dd\uc774.\u201d",
            actor: "\uc1a1\uac15\ud638",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 408,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\ubd80\uc790\uc778\ub370 \ucc29\ud55c \uac8c \uc544\ub2c8\uace0 \ubd80\uc790\ub77c\uc11c \ucc29\ud55c \uac70\uc9c0.\u201d",
            keyword: "\uacc4\uae09",
            actor: "\uc7a5\ud61c\uc9c4",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 409,
            year: 2019,
            title: "\uae30\uc0dd\ucda9",
            dialogue:
              "\u201c\ub3c8\uc774 \ub2e4\ub9ac\ubbf8\ub77c\uad6c. \ub3c8\uc774 \uc8fc\ub984\uc0b4\uc744 \ucad9 \ud3b4\uc918.\u201d",
            keyword: "\uacc4\uae09",
            actor: "\uc7a5\ud61c\uc9c4",
            director: "\ubd09\uc900\ud638",
            scenario: "\ubd09\uc900\ud638, \ud55c\uc9c4\uc6d0",
            clip: "FALSE",
          },
          {
            id: 410,
            year: 2019,
            title: "\ub3c8",
            dialogue:
              "\u201c\ub09c \uacc4\ud68d\ud55c \uc77c\uc5d0 \ubcc0\uc218\uac00 \uc0dd\uae30\ub294 \uac78 \uc88b\uc544\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubcc0\uc218\uc5d4 \ubcc0\uc218\ub85c \uc751\ub300\ud574 \uc918\uc57c\uc9c0.\u201d",
            actor: "\uc720\uc9c0\ud0dc",
            director: "\ubc15\ub204\ub9ac",
            source: "\uc7a5\ud604\ub3c4",
            scenario: "\ubc15\ub204\ub9ac",
            clip: "FALSE",
          },
          {
            id: 411,
            year: 2019,
            title: "\ub3c8",
            dialogue:
              "\u201c\ube0c\ub85c\ucee4\uc5d0\uac90 \uace0\uac1d \ub9d0\uc500\uc774 \uace7 \ub3c8\uc774\ub2c8\uae4c\uc694.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\ub958\uc900\uc5f4",
            director: "\ubc15\ub204\ub9ac",
            source: "\uc7a5\ud604\ub3c4",
            scenario: "\ubc15\ub204\ub9ac",
            clip: "FALSE",
          },
          {
            id: 412,
            year: 2019,
            title: "\ub9d0\ubaa8\uc774",
            dialogue:
              "\u201c\uc774 \ud55c \uc0ac\ub78c\uc758 \uc5f4 \ubc1c\uc790\uad6d\ubcf4\ub2e4, \uc5b4? \uc5f4\ub124 \ub188\uc758 \ud55c \ubc1c\uc790\uad6d\uc774 \ub354 \ub0ab\uc9c0 \uc54a\uac84\uc5b4?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uc720\ud574\uc9c4",
            director: "\uc5c4\uc720\ub098",
            scenario: "\uc5c4\uc720\ub098",
            clip: "FALSE",
          },
          {
            id: 413,
            year: 2019,
            title: "\ub9d0\ubaa8\uc774",
            dialogue:
              "\u201c\ub9d0\uc740 \ubbfc\uc871\uc758 \uc815\uc2e0\uc774\uc694, \uae00\uc740 \ubbfc\uc871\uc758 \uc0dd\uba85\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uc724\uacc4\uc0c1",
            director: "\uc5c4\uc720\ub098",
            scenario: "\uc5c4\uc720\ub098",
            clip: "FALSE",
          },
          {
            id: 414,
            year: 2019,
            title: "\uba54\uae30",
            dialogue:
              "\u201c\uc6b0\ub9ac\uac00 \uad6c\ub369\uc774\uc5d0 \ube60\uc84c\uc744 \ub54c, \uc6b0\ub9ac\uac00 \ud574\uc57c \ud560 \uc77c\uc740 \uad6c\ub369\uc774\ub97c \ub354 \ud30c\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uadf8\uacf3\uc5d0\uc11c \uc5bc\ub978 \ube60\uc838\ub098\uc624\ub294 \uc77c\uc774\ub2e4.\u201d",
            keyword: "\uad50\ud6c8",
            director: "\uc774\uc625\uc12d",
            scenario: "\uc774\uc625\uc12d, \uad6c\uad50\ud658",
            adaptation: "\uad8c\ud6a8\uc9c4",
            clip: "TRUE",
          },
          {
            id: 415,
            year: 2019,
            title: "\uba54\uae30",
            dialogue:
              "\u201c\uc0ac\uc2e4\uc774 \uc628\uc804\ud558\uac8c \uc874\uc7ac\ud558\ub294 \uacf3\uc740 \uc544\ubb34 \ub370\ub3c4 \uc5c6\ub300\uc694. \uc0ac\uc2e4\uc740 \uc5b8\uc81c\ub098 \uc0ac\uc2e4\uacfc \uc5f0\uad00\ub41c \uc0ac\ub78c\ub4e4\uc5d0 \uc758\ud574\uc11c \ud3b8\uc9d1\ub418\uace0 \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4\uace0 \uc544\ube60\uac00 \uadf8\ub7ac\uc5b4\uc694.\u201d",
            actor: "\ucc9c\uc6b0\ud76c",
            director: "\uc774\uc625\uc12d",
            scenario: "\uc774\uc625\uc12d, \uad6c\uad50\ud658",
            adaptation: "\uad8c\ud6a8\uc9c4",
            clip: "FALSE",
          },
          {
            id: 416,
            year: 2019,
            title: "\uba54\uae30",
            dialogue:
              "\u201c\uc0ac\ub78c\uc758 \ub450\ub824\uc6c0\uc740 \uc0c1\uc0c1\ub825\uc73c\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4. \ud604\uc2e4\uc758 \uc0b6\uc774 \uc0c1\uc0c1 \uadf8 \uc774\uc0c1\uc774\uc796\uc544\uc694?\u201d",
            keyword: "\ubc18\ubb38 \ub3c5\ubc31",
            actor: "\ucc9c\uc6b0\ud76c",
            director: "\uc774\uc625\uc12d",
            scenario: "\uc774\uc625\uc12d, \uad6c\uad50\ud658",
            adaptation: "\uad8c\ud6a8\uc9c4",
            clip: "FALSE",
          },
          {
            id: 417,
            year: 2019,
            title: "\ubc8c\uc0c8",
            dialogue:
              "\u201c\uc740\ud76c\uc57c, \ud798\ub4e4\uace0 \uc6b0\uc6b8\ud560 \ub550 \uc190\uac00\ub77d\uc744 \ubd10. \uadf8\ub9ac\uace0 \ud55c \uc190\uac00\ub77d, \ud55c \uc190\uac00\ub77d \uc6c0\uc9c1\uc5ec. \uadf8\ub7fc \ucc38 \uc2e0\ube44\ub86d\uac8c \ub290\uaef4\uc9c4\ub2e4. \uc544\ubb34\uac83\ub3c4 \ubabb\ud560 \uac83 \uac19\uc740\ub370 \uc190\uac00\ub77d\uc740 \uc6c0\uc9c1\uc77c \uc218 \uc788\uc5b4.\u201d",
            actor: "\uae40\uc0c8\ubcbd",
            director: "\uae40\ubcf4\ub77c",
            scenario: "\uae40\ubcf4\ub77c",
            clip: "FALSE",
          },
          {
            id: 418,
            year: 2019,
            title: "\ubc8c\uc0c8",
            dialogue:
              "\u201c\uc5b4\ub5bb\uac8c \uc0ac\ub294 \uac83\uc774 \ub9de\uc744\uae4c? \uc5b4\ub290 \ub0a0 \uc54c \uac83 \uac19\ub2e4\uac00\ub3c4 \uc815\ub9d0 \ubaa8\ub974\uaca0\uc5b4. \ub2e4\ub9cc \ub098\uc05c \uc77c\ub4e4\uc774 \ub2e5\uce58\uba74\uc11c\ub3c4 \uae30\uc05c \uc77c\ub4e4\uc774 \ud568\uaed8\ud55c\ub2e4\ub294 \uac83. \uc6b0\ub9ac\ub294 \ub298 \ub204\uad70\uac00\ub97c \ub9cc\ub098 \ubb34\uc5b8\uac00\ub97c \ub098\ub208\ub2e4\ub294 \uac83. \uc138\uc0c1\uc740 \ucc38 \uc2e0\uae30\ud558\uace0 \uc544\ub984\ub2f5\ub2e4.\u201d",
            actor: "\uae40\uc0c8\ubcbd",
            director: "\uae40\ubcf4\ub77c",
            scenario: "\uae40\ubcf4\ub77c",
            clip: "FALSE",
          },
          {
            id: 419,
            year: 2019,
            title: "\ubd09\uc624\ub3d9 \uc804\ud22c",
            dialogue:
              "\u201c\uc6b0\ub9ac\ub294 \ucabd\ubc1c\uc774 \ucabd\uc218\ub294 \ub300\ucda9 \uc54c\uc544\ub3c4 \uc804\uad6d\uc758 \ub3c5\ub9bd\uad70 \uc218\ub294 \uc54c \uc218\uac00 \uc5c6\uc5b4. \uc65c\uc778 \uc904 \uc544\ub124?... \uc5b4\uc81c \ub18d\uc0ac \uc9d3\ub358 \uc778\ubb3c\uc774 \uc624\ub298\uc740 \ub3c5\ub9bd\uad70\uc774 \ub420 \uc218 \uc788\ub2e4, \uc774 \ub9d0\uc774\uc57c.\u201d",
            character: "\ub3c5\ub9bd\uad70",
            actor: "\uc720\ud574\uc9c4",
            director: "\uc6d0\uc2e0\uc5f0",
            scenario: "\ucc9c\uc9c4\uc6b0",
            adaptation:
              "\uc6d0\uc2e0\uc5f0, \uc724\ud64d\uae30, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 420,
            year: 2019,
            title: "\ubd09\uc624\ub3d9 \uc804\ud22c",
            dialogue:
              "\u201c\uc5ec\uae30\ub294 \ub9c8\uc9c0\ub9c9 \uc870\uc120\uc774\uc57c. \ube8f\uae30\uba74 \uc804\ubd80 \ub05d\uc774\uc57c.\u201d",
            character: "\ub3c5\ub9bd\uad70",
            actor: "\ub958\uc900\uc5f4",
            director: "\uc6d0\uc2e0\uc5f0",
            scenario: "\ucc9c\uc9c4\uc6b0",
            adaptation:
              "\uc6d0\uc2e0\uc5f0, \uc724\ud64d\uae30, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 421,
            year: 2019,
            title: "\ubd09\uc624\ub3d9 \uc804\ud22c",
            dialogue:
              "\u201c\ucd1d\uc54c\ub3c4 \ub098\ub220 \ub9de\uc73c\uba74 \uc0b4 \uc218\ub3c4 \uc788\uc5b4.\u201d",
            character: "\ub3c5\ub9bd\uad70",
            actor: "\uc870\uc6b0\uc9c4",
            director: "\uc6d0\uc2e0\uc5f0",
            scenario: "\ucc9c\uc9c4\uc6b0",
            adaptation:
              "\uc6d0\uc2e0\uc5f0, \uc724\ud64d\uae30, \uae40\ud55c\ubbfc",
            clip: "FALSE",
          },
          {
            id: 422,
            year: 2019,
            title: "\ube91\ubc18",
            dialogue:
              "\u201c\u2018\uc0ac\ub78c\uc774 \ubcc0\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\ub0d0?\u2019\uc6b0\ub9ac \uc544\ubc84\uc9c0\uac00 \uadf8\ub7ec\uc2dc\ub354\ub77c\uace0\uc694. \uc18c\ub144\uc6d0 \uc55e\uc5d0\uc11c \uae30\ub2e4\ub9ac\uba74\uc11c.\u201d",
            actor: "\ub958\uc900\uc5f4",
            director: "\ud55c\uc900\ud76c",
            scenario:
              "\uae40\uacbd\ucc2c, \ud55c\uc900\ud76c, \ud55c\uc8fc\ud76c",
            clip: "FALSE",
          },
          {
            id: 423,
            year: 2019,
            title: "\ube91\ubc18",
            dialogue:
              "\u201c\ub354 \ub098\uc05c \uc0c8\ub07c \uc7a1\uc744 \uc218 \uc788\uc73c\uba74 \uadf8 \uc0c8\ub07c \uc8c4\ub294 \uc5c6\uc5b4\uc9c0\ub294 \uac81\ub2c8\uae4c?\u201d",
            keyword: "\ubc18\ubb38",
            actor: "\uacf5\ud6a8\uc9c4",
            director: "\ud55c\uc900\ud76c",
            scenario:
              "\uae40\uacbd\ucc2c, \ud55c\uc900\ud76c, \ud55c\uc8fc\ud76c",
            clip: "FALSE",
          },
          {
            id: 424,
            year: 2019,
            title: "\ube91\ubc18",
            dialogue:
              "\u201c\ubcf4\uc774\ub294 \uac8c \uc9c4\uc2e4\uc774\uace0, \uc804\ubd80\uc8e0.\u201d",
            actor: "\ub958\uc900\uc5f4",
            director: "\ud55c\uc900\ud76c",
            scenario:
              "\uae40\uacbd\ucc2c, \ud55c\uc900\ud76c, \ud55c\uc8fc\ud76c",
            clip: "FALSE",
          },
          {
            id: 425,
            year: 2019,
            title: "\uc0ac\ubc14\ud558",
            dialogue:
              "\u201c\ub09c \uc544\uc9c1\ub3c4 \ubaa8\ub974\uaca0\ub2e4. \uc6b0\ub9ac\ub294 \uc800 \ubc11\ubc14\ub2e5\uc5d0\uc11c \uc815\ub9d0 \uac1c\ubbf8\ub4e4\ucc98\ub7fc \uc9c0\uc9c0\uace0 \ubcf6\uace0 \uc788\ub294\ub370 \ub3c4\ub300\uccb4 \uc6b0\ub9ac\uc758 \ud558\ub098\ub2d8\uc740 \uc5b4\ub514\uc11c \ubb58 \ud558\uace0 \uacc4\uc2dc\ub294\uc9c0.\u201d",
            actor: "\uc774\uc815\uc7ac",
            director: "\uc7a5\uc7ac\ud604",
            scenario: "\uc7a5\uc7ac\ud604",
            clip: "FALSE",
          },
          {
            id: 426,
            year: 2019,
            title: "\uc0ac\ubc14\ud558",
            dialogue:
              "\u201c\uc30d\ub465\uc774 \uc5b8\ub2c8\uc778\ub370\uc694. \uc800\ub791 \uac19\uc774 \ud0dc\uc5b4\ub0ac\uc73c\ub2c8\uae4c \uc5b8\ub2c8\ub3c4 \uc545\uc774\ub124\uc694? \uc5b8\ub2c8\ub3c4 \uc8fd\uc5ec\uc8fc\uc138\uc694. \ub2e4\uc2dc \ud0dc\uc5b4\ub098\uac8c. \ub2e4\uc74c\uc5d4 \uc0ac\ub78c\uc73c\ub85c \ud0dc\uc5b4\ub098\uac8c.\u201d",
            actor: "\uc774\uc7ac\uc778",
            director: "\uc7a5\uc7ac\ud604",
            scenario: "\uc7a5\uc7ac\ud604",
            clip: "FALSE",
          },
          {
            id: 427,
            year: 2019,
            title: "\uc544\uc6cc \ubc14\ub514",
            dialogue:
              "\u201c\ub2ec\ub9ac\ub2e4\uac00 \ud798\ub4e4\uba74 \ub0b4 \ub4a4\uc5d0 \ubc14\uc9dd \ubd99\uc5b4\uc11c \ub6f0\uc5b4. \ub0b4 \uae30\ub97c \ube7c\uba39\ub294\ub2e4 \uc0dd\uac01\ud558\uace0. \uadf8\ub7fc \ud6e8\uc52c \ub35c \ud798\ub4e4\uc5b4.\u201d",
            actor: "\uc548\uc9c0\ud61c",
            director: "\ud55c\uac00\ub78c",
            scenario: "\ud55c\uac00\ub78c",
            clip: "FALSE",
          },
          {
            id: 428,
            year: 2019,
            title: "\uc544\uc6cc \ubc14\ub514",
            dialogue:
              "\u201c\ubab8\uc740 \ub0b4\uac00 \ub178\ub825\ud55c \ub9cc\ud07c \ubc14\ub85c \ubcf4\uc5ec\uc8fc\uc796\uc544, \uadf8\ub0e5. \uadf8\uac8c \uc88b\ub354\ub77c\uace0.\u201d",
            actor: "\ucd5c\uc900\uc601",
            director: "\ud55c\uac00\ub78c",
            scenario: "\ud55c\uac00\ub78c",
            clip: "FALSE",
          },
          {
            id: 429,
            year: 2019,
            title: "\uc724\ud76c\uc5d0\uac8c",
            dialogue:
              "\u201c\uc0b4\ub2e4 \ubcf4\uba74 \uadf8\ub7f0 \ub54c\uac00 \uc788\uc9c0 \uc54a\ub2c8? \ubb50\ub4e0 \ub354 \uc774\uc0c1 \ucc38\uc744 \uc218 \uc5c6\uc5b4\uc9c8 \ub54c\uac00.\u201d",
            actor: "\ub098\uce74\ubb34\ub77c \uc720\ucf54",
            director: "\uc784\ub300\ud615",
            scenario: "\uc784\ub300\ud615",
            clip: "FALSE",
          },
          {
            id: 430,
            year: 2019,
            title: "\uc724\ud76c\uc5d0\uac8c",
            dialogue:
              "\u201c\ub098\ub3c4 \ub354 \uc774\uc0c1 \ub0b4\uac00 \ubd80\ub044\ub7fd\uc9c0 \uc54a\uc558\uc73c\uba74 \uc88b\uaca0\uc5b4. \uadf8\ub798, \uc6b0\ub9ac\ub294 \uc798\ubabb\ud55c \uac8c \uc5c6\uc73c\ub2c8\uae4c.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uae40\ud76c\uc560",
            director: "\uc784\ub300\ud615",
            scenario: "\uc784\ub300\ud615",
            clip: "FALSE",
          },
          {
            id: 431,
            year: 2019,
            title: "\uc724\ud76c\uc5d0\uac8c",
            dialogue:
              "\u201c\ucd94\uc2e0, \ub098\ub3c4 \ub124 \uafc8\uc744 \uafd4.\u201d",
            keyword: "\ud034\uc5b4",
            actor: "\uae40\ud76c\uc560",
            director: "\uc784\ub300\ud615",
            scenario: "\uc784\ub300\ud615",
            clip: "TRUE",
          },
          {
            id: 432,
            year: 2019,
            title: "\uc99d\uc778",
            dialogue:
              "\u201c\ud30c\ub780\uc0c9 \uc824\ub9ac\ub294 \ubbff\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\u201d",
            actor: "\uae40\ud5a5\uae30",
            director: "\uc774\ud55c",
            scenario: "\ubb38\uc9c0\uc6d0",
            adaptation: "\uc774\ud55c, \ud64d\uc6a9\ud638",
            clip: "FALSE",
          },
          {
            id: 433,
            year: 2019,
            title: "\uc99d\uc778",
            dialogue:
              "\u201c\uc544\uc800\uc528\ub294 \uc88b\uc740 \uc0ac\ub78c\uc785\ub2c8\ub2e4.\u201d",
            actor: "\uae40\ud5a5\uae30",
            director: "\uc774\ud55c",
            scenario: "\ubb38\uc9c0\uc6d0",
            adaptation: "\uc774\ud55c, \ud64d\uc6a9\ud638",
            clip: "FALSE",
          },
          {
            id: 434,
            year: 2020,
            title: "69\uc138",
            dialogue:
              "\u201c\ub299\uc740\uc774\ub77c\uace0 \uadf8\ub807\uac8c \ud568\ubd80\ub85c \ub9d0\ud558\uc9c0 \ub9c8\uc694.\u201d",
            character: "\ub178\uc778",
            actor: "\uc608\uc218\uc815",
            director: "\uc784\uc120\uc560",
            scenario: "\uc784\uc120\uc560",
            clip: "FALSE",
          },
          {
            id: 435,
            year: 2020,
            title: "69\uc138",
            dialogue:
              "\u201c\uc5b5\uc6b8\ud55c \uc0ac\ub78c\uc774 \uc788\uc744 \ub550 \uc5b4\ub5bb\uac8c \ud574\uc11c\ub4e0\uc9c0 \uadf8 \uc5b5\uc6b8\ud568\uc744 \ud480\uc5b4\uc918\uc57c \ub418\ub294 \uac70 \uc544\ub2c8\ub2c8?\u201d",
            actor: "\uae30\uc8fc\ubd09",
            director: "\uc784\uc120\uc560",
            scenario: "\uc784\uc120\uc560",
            clip: "FALSE",
          },
          {
            id: 436,
            year: 2020,
            title: "69\uc138",
            dialogue:
              "\u201c\uace0\uc18c\uc778\uc774 \uc80a\uc740 \uc5ec\uc790\uc600\uc73c\uba74 \uadf8 \uc0ac\ub78c\uc774 \uad6c\uc18d\ub410\uc744\uae4c\uc694?\u201d",
            character: "\ub178\uc778",
            keyword: "\ubc18\ubb38",
            actor: "\uc608\uc218\uc815",
            director: "\uc784\uc120\uc560",
            scenario: "\uc784\uc120\uc560",
            clip: "FALSE",
          },
          {
            id: 437,
            year: 2020,
            title: "\ub0a8\uc0b0\uc758 \ubd80\uc7a5\ub4e4",
            dialogue:
              "\u201c\uac01\ud558, \uc815\uce58\ub97c \uc880 \ub300\uad6d\uc801\uc73c\ub85c \ud558\uc2ed\uc2dc\uc624.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc774\ubcd1\ud5cc",
            director: "\uc6b0\ubbfc\ud638",
            source: "\uae40\ucda9\uc2dd",
            scenario: "\uc6b0\ubbfc\ud638, \uc774\uc9c0\ubbfc",
            clip: "FALSE",
          },
          {
            id: 438,
            year: 2020,
            title: "\ub0b4\uac00 \uc8fd\ub358 \ub0a0",
            dialogue:
              "\u201c\ub2c8\uac00 \ub108\ub97c \uad6c\ud574\uc57c\uc9c0. \uc778\uc0dd\uc774 \ub2c8 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uae38\uc5b4.\u201d",
            actor: "\uc774\uc815\uc740",
            director: "\ubc15\uc9c0\uc644",
            scenario: "\ubc15\uc9c0\uc644",
            clip: "TRUE",
          },
          {
            id: 439,
            year: 2020,
            title: "\ub2e4\ub9cc \uc545\uc5d0\uc11c \uad6c\ud558\uc18c\uc11c",
            dialogue:
              "\u201c\uc57d\uc18d\ud560\uac8c. \ubb34\uc2a8 \uc77c\uc774 \uc788\uc5b4\ub3c4 \ubc18\ub4dc\uc2dc \ub3cc\uc544\uc62c\uac8c.\u201d",
            actor: "\ud669\uc815\ubbfc",
            director: "\ud64d\uc6d0\ucc2c",
            scenario: "\ud64d\uc6d0\ucc2c",
            clip: "FALSE",
          },
          {
            id: 440,
            year: 2020,
            title: "\ubc18\ub3c4",
            dialogue:
              "\u201c\uc624\ub298\ub9cc \uc0b4\uc544\ub77c, \uc5d0\ud734, \uc624\ub298\ub9cc \uc0b4\uc544.\u201d",
            actor: "\uad6c\uad50\ud658",
            director: "\uc5f0\uc0c1\ud638",
            scenario: "\uc5f0\uc0c1\ud638, \ub958\uc6a9\uc7ac",
            clip: "FALSE",
          },
          {
            id: 441,
            year: 2020,
            title: "\ubc18\ub3c4",
            dialogue:
              "\u201c\ubbf8\uc548\ud574. \uc774\ub7f0 \uc138\uc0c1\uc5d0\uc11c \uc0b4\uac8c \ud574\uc11c.\u201d",
            character: "\ub178\uc778",
            keyword: "\uc720\uc5b8",
            actor: "\uad8c\ud574\ud6a8",
            director: "\uc5f0\uc0c1\ud638",
            scenario: "\uc5f0\uc0c1\ud638, \ub958\uc6a9\uc7ac",
            clip: "FALSE",
          },
          {
            id: 442,
            year: 2020,
            title: "\ubc18\ub3c4",
            dialogue:
              "\u201c\uc81c\uac00 \uc788\ub358 \uc138\uc0c1\ub3c4 \ub098\uc058\uc9c0 \uc54a\uc558\uc5b4\uc694.\u201d",
            actor: "\uc774\ub808",
            director: "\uc5f0\uc0c1\ud638",
            scenario: "\uc5f0\uc0c1\ud638, \ub958\uc6a9\uc7ac",
            clip: "FALSE",
          },
          {
            id: 443,
            year: 2020,
            title: "\uc57c\uad6c\uc18c\ub140",
            dialogue:
              "\u201c\uc548 \ub418\ub294 \uac70\uba74 \ube68\ub9ac \ud3ec\uae30\ud574. \uadf8\uac70 \ubd80\ub044\ub7ec\uc6b4 \uac70 \uc544\ub2c8\uc57c.\u201d",
            actor: "\uc5fc\ud61c\ub780",
            director: "\ucd5c\uc724\ud0dc",
            scenario: "\ucd5c\uc724\ud0dc",
            clip: "FALSE",
          },
          {
            id: 444,
            year: 2020,
            title: "\uc57c\uad6c\uc18c\ub140",
            dialogue:
              "\u201c\uc804 \ud574\ubcf4\uc9c0\ub3c4 \uc54a\uace0 \ud3ec\uae30 \uc548 \ud574\uc694.\u201d",
            character: "\uccad\ucd98",
            actor: "\uc774\uc8fc\uc601",
            director: "\ucd5c\uc724\ud0dc",
            scenario: "\ucd5c\uc724\ud0dc",
            clip: "FALSE",
          },
          {
            id: 445,
            year: 2020,
            title: "\uc57c\uad6c\uc18c\ub140",
            dialogue:
              "\u201c\uadf8 \uc0ac\ub78c\ub4e4\uc774 \ub0b4 \ubbf8\ub798\ub97c \uc5b4\ub5bb\uac8c \uc54c\uc544\uc694? \ub098\ub3c4 \ubaa8\ub974\ub294\ub370...\u201d",
            character: "\uccad\ucd98",
            actor: "\uc774\uc8fc\uc601",
            director: "\ucd5c\uc724\ud0dc",
            scenario: "\ucd5c\uc724\ud0dc",
            clip: "FALSE",
          },
          {
            id: 446,
            year: 2020,
            title: "\uc57c\uad6c\uc18c\ub140",
            dialogue:
              "\u201c\uc57c\uad6c\ub294 \ub204\uad6c\ub098 \ub2e4 \ud560 \uc218 \uc788\ub294 \uac70\uc796\uc544\uc694. \uadf8\ub2c8\uae4c \uc5ec\uc790\uac74 \ub0a8\uc790\uac74 \uadf8\uac74 \uc7a5\uc810\ub3c4 \ub2e8\uc810\ub3c4 \uc544\ub2c8\uc5d0\uc694.\u201d",
            character: "\uccad\ucd98",
            keyword: "\uc9c1\uc5c5 \uc5ec\uc131",
            actor: "\uc774\uc8fc\uc601",
            director: "\ucd5c\uc724\ud0dc",
            scenario: "\ucd5c\uc724\ud0dc",
            clip: "FALSE",
          },
          {
            id: 447,
            year: 2020,
            title:
              "\uc9c0\ud478\ub77c\uae30\ub77c\ub3c4 \uc7a1\uace0 \uc2f6\uc740 \uc9d0\uc2b9\ub4e4",
            dialogue:
              "\u201c\ud070\ub3c8 \ub4e4\uc5b4\uc654\uc744 \ub54c\ub294 \uc544\ubb34\ub3c4 \ubbff\uc73c\uba74 \uc548 \ub3fc. \uadf8\uac8c \ub2c8 \ubd80\ubaa8\ub77c\ub3c4.\u201d",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\uae40\uc6a9\ud6c8",
            scenario: "\uae40\uc6a9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 448,
            year: 2020,
            title:
              "\uc9c0\ud478\ub77c\uae30\ub77c\ub3c4 \uc7a1\uace0 \uc2f6\uc740 \uc9d0\uc2b9\ub4e4",
            dialogue:
              "\u201c\uc0b4\uc544\ub9cc \uc788\uc73c\ubbc4 \uc5b4\ub5bb\uac8c\ub4e0 \uc0b4\uac8c \ub418\ub294 \ubc95\uc774\uc57c. \ub450 \ud314 \ub450 \ub2e4\ub9ac\ub9cc \uba40\uca61\ud558\ubbc4 \uc5bc\ub9c8\ub4e0\uc9c0 \uc0c8\ub85c \uc2dc\uc791\ud560 \uc218 \uc788\uc5b4.\u201d ",
            character: "\ub178\uc778",
            keyword: "\uc9c0\ud61c",
            actor: "\uc724\uc5ec\uc815",
            director: "\uae40\uc6a9\ud6c8",
            scenario: "\uae40\uc6a9\ud6c8",
            clip: "FALSE",
          },
          {
            id: 449,
            year: 2020,
            title: "\ucc2c\uc2e4\uc774\ub294 \ubcf5\ub3c4 \ub9ce\uc9c0",
            dialogue:
              "\u201c\ub098\ub294 \uc624\ub298 \ud558\uace0 \uc2f6\uc740 \uc77c\ub9cc \ud558\uba74\uc11c \uc0b4\uc544. \ub300\uc2e0 \uc560\uc368\uc11c \ud574.\u201d",
            character: "\ub178\uc778",
            actor: "\uc724\uc5ec\uc815",
            director: "\uae40\ucd08\ud76c",
            scenario: "\uae40\ucd08\ud76c",
            clip: "TRUE",
          },
          {
            id: 450,
            year: 2020,
            title: "\ucc2c\uc2e4\uc774\ub294 \ubcf5\ub3c4 \ub9ce\uc9c0",
            dialogue:
              "\u201c\uc0ac\ub78c\ub3c4 \uaf43\ucc98\ub7fc \ub2e4\uc2dc \uc624\uba74\uc740 \uc5bc\ub9c8\ub098 \uc88b\uaca0\uc2b5\ub2c8\uae4c.\u201d",
            character: "\ub178\uc778",
            actor: "\uc724\uc5ec\uc815",
            director: "\uae40\ucd08\ud76c",
            scenario: "\uae40\ucd08\ud76c",
            clip: "FALSE",
          },
          {
            id: 451,
            year: 2020,
            title: "\ucc2c\uc2e4\uc774\ub294 \ubcf5\ub3c4 \ub9ce\uc9c0",
            dialogue:
              "\u201c\uc678\ub85c\uc6b4 \uac74 \uadf8\ub0e5 \uc678\ub85c\uc6b4 \uac70\uc608\uc694. \uc0ac\ub791\uc774 \uc544\ub2c8\uc5d0\uc694. \ucc2c\uc2e4 \uc528\uac00 \uc815\ub9d0 \uc6d0\ud558\ub294 \uac8c \ubb54\uc9c0 \uc54c\uc544\uc57c \ud589\ubcf5\ud574\uc838\uc694.\u201d",
            actor: "\uae40\uc601\ubbfc",
            director: "\uae40\ucd08\ud76c",
            scenario: "\uae40\ucd08\ud76c",
            clip: "FALSE",
          },
          {
            id: 452,
            year: 2021,
            title: "\uac08\ub9e4\uae30",
            dialogue:
              "\u201c\uadf8\ub7fc \ub098\ub294, \ub098\ub294? \uc774 \uc0ac\ub78c \uc800 \uc0ac\ub78c \uc8c4\ub2e4 \ub208\uce58 \ubcf4\uba74\uc11c \ub098\ub294 \uc5b8\uc81c \ucc59\uaca8!\u201d",
            keyword: "\uc5ec\uc131",
            actor: "\uc815\uc560\ud654",
            director: "\uae40\ubbf8\uc870",
            scenario: "\uae40\ubbf8\uc870",
            clip: "FALSE",
          },
          {
            id: 453,
            year: 2021,
            title:
              "\ub0ae\uc5d0\ub294 \ub365\uace0 \ubc24\uc5d0\ub294 \ucda5\uace0",
            dialogue:
              "\u201c\uc774\ub7f0 \ubd88\uba85\uc608, \uc774\uac74 \uc2eb\uc740 \uac70\uc9c0.\u201d",
            actor: "\ubc15\uc1a1\uc5f4",
            director: "\ubc15\uc1a1\uc5f4",
            scenario: "\ubc15\uc1a1\uc5f4, \uc6d0\ud5a5",
            clip: "FALSE",
          },
          {
            id: 454,
            year: 2021,
            title: "\ubaa8\uac00\ub514\uc288",
            dialogue:
              "\u201c\uc774\uc81c\ubd80\ud130 \uc6b0\ub9ac \ud22c\uc7c1 \ubaa9\ud45c\ub294 \uc0dd\uc874\uc774\ub2e4.\u201d",
            actor: "\ud5c8\uc900\ud638",
            director: "\ub958\uc2b9\uc644",
            scenario: "\uc774\uae30\ucca0, \ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 455,
            year: 2021,
            title: "\ubaa8\uac00\ub514\uc288",
            dialogue:
              "\u201c\uc591\uc190 \uc501\ub2c8\ub2e4. \uc67c\uc190\ub9cc \uc4f0\uba74 \uc88c\uc775\uc774\ub77c\ub294 \uc18c\ub9ac \ub4e4\uc744\uae4c\ubd10.\u201d",
            keyword: " ",
            actor: "\uae40\uc724\uc11d",
            director: "\ub958\uc2b9\uc644",
            scenario: "\uc774\uae30\ucca0, \ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 456,
            year: 2021,
            title: "\ubaa8\uac00\ub514\uc288",
            dialogue:
              "\u201c\uc9c0\uae08 \uc5ec\uae30 \uc6b0\ub9ac \ub458\ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4. \uc11c\ub85c \uc5f0\uc124\ud558\uc9c0 \ub9d0\uace0 \ub300\ud654\ub97c \ud569\uc2dc\ub2e4. \ub9d0, \uc18d\uc5d0 \uc788\ub294 \ub9d0.\u201d",
            actor: "\uae40\uc724\uc11d",
            director: "\ub958\uc2b9\uc644",
            scenario: "\uc774\uae30\ucca0, \ub958\uc2b9\uc644",
            clip: "FALSE",
          },
          {
            id: 457,
            year: 2021,
            title: "\ubc1c\uc2e0\uc81c\ud55c",
            dialogue:
              "\u201c\uc6d0\ub798 \uc0c1\uad00\uc5c6\ub294 \uc0ac\ub78c\ub4e4\uc774 \ub354 \ud070 \ud53c\ud574\ub97c \uc785\uc5b4\uc694. \uc778\uc0dd\uc774 \uadf8\ub807\ub354\ub77c\uace0.\u201d",
            actor: "\uc9c0\ucc3d\uc6b1",
            director: "\uae40\ucc3d\uc8fc",
            scenario: "\uc774\uacf5\uc8fc, \uae40\ucc3d\uc8fc",
            clip: "FALSE",
          },
          {
            id: 458,
            year: 2021,
            title: "\ubc1c\uc2e0\uc81c\ud55c",
            dialogue:
              "\u201c\uc6b0\ub9ac \ub2e4\uac19\uc774 \uc9c0\uc625\uc5d0\ub098 \uac11\uc2dc\ub2e4.\u201d",
            actor: "\uc9c0\ucc3d\uc6b1",
            director: "\uae40\ucc3d\uc8fc",
            scenario: "\uc774\uacf5\uc8fc, \uae40\ucc3d\uc8fc",
            clip: "FALSE",
          },
          {
            id: 459,
            year: 2021,
            title: "\uc138\uc790\ub9e4",
            dialogue:
              "\u201c\uc544\ub2c8 \uc528\ubc1c, \uc65c \uc5b4\ub978\ub4e4\uc774 \uc0ac\uacfc\ub97c \ubabb \ud558\ub294\ub370?\u201d",
            keyword: "\uc695\uc124",
            actor: "\uae40\uac00\ud76c",
            director: "\uc774\uc2b9\uc6d0",
            scenario: "\uc774\uc2b9\uc6d0",
            clip: "TRUE",
          },
          {
            id: 460,
            year: 2021,
            title: "\uc2ed\uac1c\uc6d4\uc758 \ubbf8\ub798",
            dialogue:
              "\u201c\uc548\ub155, \uce74\uc624\uc2a4. \uadf8\ub798, \uc6b0\ub9ac \uc774\uc81c \uc2dc\uc791\ud574 \ubcf4\uc790.\u201d",
            actor: "\ucd5c\uc131\uc740",
            director: "\ub0a8\uad81\uc120",
            scenario: "\ub0a8\uad81\uc120",
            clip: "FALSE",
          },
          {
            id: 461,
            year: 2021,
            title: "\uc5f0\uc560 \ube60\uc9c4 \ub85c\ub9e8\uc2a4",
            dialogue: "\u201c\ub10c \uc880 \uc57c\ud574.\u201d",
            keyword: "\uc5f0\uc560",
            actor: "\uc190\uc11d\uad6c",
            director: "\uc815\uac00\uc601",
            scenario: "\uc815\uac00\uc601, \uc655\ud61c\uc9c0",
            clip: "FALSE",
          },
          {
            id: 462,
            year: 2021,
            title: "\uc5f0\uc560 \ube60\uc9c4 \ub85c\ub9e8\uc2a4",
            dialogue:
              "\u201c\uc6b0\ub9ac \uc13c \ucc99 \uc791\uc791 \ud558\uc790. \uc0ac\uc2e4 \ub2e4\ub4e4 \uc678\ub86d\uc796\uc544, \uc528\ubc1c. \uc5ec\uae30 \uc548 \uc678\ub85c\uc6b4 \uc0ac\ub78c \uc788\uc5b4?\u201d",
            character: "\uccad\ucd98",
            keyword: "\uc0ac\ub791 \uc5f0\uc560",
            actor: "\uc804\uc885\uc11c",
            director: "\uc815\uac00\uc601",
            scenario: "\uc815\uac00\uc601, \uc655\ud61c\uc9c0",
            clip: "FALSE",
          },
          {
            id: 463,
            year: 2021,
            title: "\uc5f0\uc560 \ube60\uc9c4 \ub85c\ub9e8\uc2a4",
            dialogue:
              "\u201c\uc6b0\ub9ac\uac00 \ub3c8\uc774 \uc5c6\uc9c0 \uc8fc\uba39\uc774 \uc5c6\ub0d0?\u201d",
            keyword: "\ud328\ub7ec\ub514",
            actor: "\ubc30\uc720\ub78c",
            director: "\uc815\uac00\uc601",
            scenario: "\uc815\uac00\uc601, \uc655\ud61c\uc9c0",
            clip: "FALSE",
          },
          {
            id: 464,
            year: 2021,
            title: "\uc5f0\uc560 \ube60\uc9c4 \ub85c\ub9e8\uc2a4",
            dialogue:
              "\u201c\uc8fc\uc778\uacf5\ub3c4 \ud574\ubcf4\uace0 \uc5d1\uc2a4\ud2b8\ub77c\ub3c4 \ud574\ubcf4\uace0 \uc870\uc5f0\ub3c4 \ud574\ubcf4\uace0. \uadf8\ub807\uac8c \uc0ac\ub294 \uac8c \uc7ac\ubbf8\uc81c.\u201d",
            keyword: "\uc9c0\ud61c",
            actor: "\uae40\uc601\uc625",
            director: "\uc815\uac00\uc601",
            scenario: "\uc815\uac00\uc601, \uc655\ud61c\uc9c0",
            clip: "FALSE",
          },
          {
            id: 465,
            year: 2021,
            title: "\uc790\uc0b0\uc5b4\ubcf4",
            dialogue:
              "\u201c\uc624\ub9e4, \ubb3c\uace0\uae30\ub97c \uc54c\uc544\uc57c \ubb3c\uace0\uae30\ub97c \uc7a1\uc751\uaed8\uc694. \ud64d\uc5b4 \ub315\uae30\ub294 \uae38\uc740 \ud64d\uc5b4\uac00 \uc54c\uace0 \uac00\uc624\ub9ac \ub315\uae30\ub294 \uae38\uc740 \uac00\uc624\ub9ac\uac00 \uc559\uaed8\uc694.\u201d",
            keyword: "\uc0ac\ud22c\ub9ac",
            actor: "\ubcc0\uc694\ud55c",
            director: "\uc774\uc900\uc775",
            scenario: "\uae40\uc138\uacb8",
            adaptation: "\uae40\uc815\ud6c8",
            clip: "FALSE",
          },
          {
            id: 466,
            year: 2021,
            title: "\uc790\uc0b0\uc5b4\ubcf4",
            dialogue:
              "\u201c\uc131\ub9ac\ud559\uacfc \uc11c\ud559\uc774 \uacb0\ucf54 \uc801\uc774 \uc544\ub2c8\ub2e4. \ud568\uaed8 \uac00\uc57c \ud560 \ubc97\uc774\uc9c0. \ubc97\uc744 \uae4a\uc774 \uc54c\uba74 \ub0b4\uac00 \ub354 \uae4a\uc5b4\uc9c4\ub2e4.\u201d",
            actor: "\uc124\uacbd\uad6c",
            director: "\uc774\uc900\uc775",
            scenario: "\uae40\uc138\uacb8",
            adaptation: "\uae40\uc815\ud6c8",
            clip: "FALSE",
          },
          {
            id: 467,
            year: 2021,
            title: "\uc790\uc0b0\uc5b4\ubcf4",
            dialogue:
              "\u201c\uc57c, \ubc2d\uc774 \uc548 \uc88b\uc73c\ubbc4 \uc528\uac00 \uc2f9\uc744 \ubabb \ud2b8\uace0 \ud759\uc774 \uc548 \uc88b\uc73c\uba74 \uc2f9\uc774 \ud130\ub3c4 \ud06c\ub35c \ubabb\ud5c8\ub294\ub514. \ub0a8\uc790\ub4e4\ub3c4 \uc5ec\uc790\ub97c \uadc0\ud574\ud560 \uc904 \uc54c\uc544\uc57c \ub41c\ub2f9\uaed8?\u201d",
            actor: "\uc774\uc815\uc740",
            director: "\uc774\uc900\uc775",
            scenario: "\uae40\uc138\uacb8",
            adaptation: "\uae40\uc815\ud6c8",
            clip: "FALSE",
          },
          {
            id: 468,
            year: 2021,
            title: "\ud63c\uc790 \uc0ac\ub294 \uc0ac\ub78c\ub4e4",
            dialogue:
              "\u201c\uc804 \ud63c\uc790\uac00 \ud3b8\ud574\uc694.\u201d",
            actor: "\uacf5\uc2b9\uc5f0",
            director: "\ud64d\uc131\uc740",
            scenario: "\ud64d\uc131\uc740",
            clip: "FALSE",
          },
          {
            id: 469,
            year: 2022,
            title: "\uac19\uc740 \uc18d\uc637\uc744 \uc785\ub294 \uc5ec\uc790",
            dialogue:
              "\u201c\uadfc\ub370 \uc774\uac70 \ub2e4 \uc5c4\ub9c8\uac00 \uc774\ub807\uac8c \ub9cc\ub4e0 \uac70\uc796\uc544. \uc5c4\ub9c8\uac00 \ub098 \uc774\ub807\uac8c \ub0b3\uace0 \uc5c4\ub9c8\uac00 \ub098 \uc774\ub807\uac8c \ub9cc\ub4e0 \uac70\uc796\uc544\u2026 \uc81c\ubc1c \uc0ac\uacfc \ud55c\ubc88\ub9cc \ud574\uc918. \ub0b4\uac00 \uc774\ub807\uac8c \ubd80\ud0c1\ud560\uac8c, \uc81c\ubc1c \uc0ac\uacfc \ud55c \ubc88\ub9cc \ud574\uc918.\u201d",
            actor: "\uc784\uc9c0\ud638",
            director: "\uae40\uc138\uc778",
            scenario: "\uae40\uc138\uc778",
            clip: "FALSE",
          },
          {
            id: 470,
            year: 2022,
            title: "\uacf5\uc8702: \uc778\ud130\ub0b4\uc154\ub110",
            dialogue:
              "\u201c\ud0a4\ubcf4\ub4dc\ub85c \uc0ac\ub78c \ud32c \uac8c \uc0ac\uc774\ubc84 \ubc94\uc8c4\uba74\uc740 \ub3c8\uc73c\ub85c \ud328\uba74\uc740 \uae08\uc735 \ubc94\uc8c4\ub2c8? \uadf8\ub7fc \ubb50, \uacc4\uc0b0\uae30\ub85c \ub54c\ub9ac\uba74\uc740 \ubb50, \ub514\uc9c0\ud138 \ubc94\uc8c4\uc57c?\u201d",
            character: "\ud615\uc0ac",
            actor: "\uc720\ud574\uc9c4",
            director: "\uc774\uc11d\ud6c8",
            scenario: "\uc784\uc131\uc21c",
            adaptation: "\uc774\uc11d\ud6c8, \uc724\uc81c\uade0",
            clip: "FALSE",
          },
          {
            id: 471,
            year: 2022,
            title: "\uacf5\uc8702: \uc778\ud130\ub0b4\uc154\ub110",
            dialogue:
              "\u201c\ud5e4\uc774, \uaec4\ub5a1\ub300\ub514 \ub9d0\ub77c!\u201d",
            character: "\ubd81\ud55c\uad70",
            actor: "\ud604\ube48",
            director: "\uc774\uc11d\ud6c8",
            scenario: "\uc784\uc131\uc21c",
            adaptation: "\uc774\uc11d\ud6c8, \uc724\uc81c\uade0",
            clip: "FALSE",
          },
          {
            id: 472,
            year: 2022,
            title: "\ubc94\uc8c4\ub3c4\uc2dc2",
            dialogue:
              "\u201c\ub098\uc05c \ub188\uc740 \uadf8\ub0e5 \uc7a1\ub294 \uac70\uc57c.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uc774\uc0c1\uc6a9",
            scenario: "\uae40\ubbfc\uc131",
            adaptation:
              "\uc774\uc0c1\uc6a9, \ub9c8\ub3d9\uc11d, \uc774\uc601\uc885",
            clip: "FALSE",
          },
          {
            id: 473,
            year: 2022,
            title: "\uc18c\uc124\uac00\uc758 \uc601\ud654",
            dialogue:
              "\u201c\uadf8\ub7ec\ub2c8\uae4c \ubaa8\ub4e0 \uac8c \uc9c4\uc9dc\uc5ec\uc57c \ub418\ub294 \uac70\uc8e0. \ub0b4\uac00 \ucc0d\uace0 \uc2f6\uc740 \uac8c \ub2e4\ud050\uba58\ud130\ub9ac\ub294 \uc544\ub2c8\uc5d0\uc694. \ub098\ub294 \uadf8\ub0e5 \uc774\uc57c\uae30\uac00 \uc788\ub294 \uc601\ud654\ub97c \ub9cc\ub4e4 \uac70\uc608\uc694.\u201d",
            keyword: "\uc601\ud654",
            actor: "\uc774\ud61c\uc601",
            director: "\ud64d\uc0c1\uc218",
            scenario: "\ud64d\uc0c1\uc218",
            clip: "FALSE",
          },
          {
            id: 474,
            year: 2022,
            title: "\uc601\uc6c5",
            dialogue:
              "\u201c\uc870\uad6d\uc774 \ub300\uccb4 \uc6b0\ub9ac\uc5d0\uac8c \ubb34\uc5c7\uc785\ub2c8\uae4c?\u201d",
            character: "\ub3c5\ub9bd\uad70",
            keyword: " ",
            actor: "\uc815\uc131\ud654",
            director: "\uc724\uc81c\uade0",
            scenario: "\ud55c\uc544\ub984, \uc724\uc81c\uade0",
            clip: "FALSE",
          },
          {
            id: 475,
            year: 2022,
            title: "\uc601\uc6c5",
            dialogue:
              "\u201c\uaf2c\ub808\uc544 \uc6b0\ub77c \uaf2c\ub808\uc544 \uc6b0\ub77c \uaf2c\ub808\uc544 \uc6b0\ub77c!\u201d",
            character: "\ub3c5\ub9bd\uad70",
            keyword: "  \uc678\uad6d\uc5b4",
            actor: "\uc815\uc131\ud654",
            director: "\uc724\uc81c\uade0",
            scenario: "\ud55c\uc544\ub984, \uc724\uc81c\uade0",
            clip: "FALSE",
          },
          {
            id: 476,
            year: 2022,
            title: "\uc678\uacc4+\uc778 1\ubd80",
            dialogue:
              "\u201c\ub3c4\ub97c \ub2e6\ub294 \uac74 \ub450 \uac00\uc9c0\uc9c0. \ub9e4\uc77c \uac08\uace0\ub2e6\ub290\ub0d0, \ubb38\ub4dd \uae68\ub2eb\ub290\ub0d0. \uc774 \ubab8\uc758 \uacbd\uc6b0\uc5d4 \ubb38\ub4dd \uae68\ub2ec\uc558\ub2e4 \uc774 \ub9d0\uc774\uc57c.\u201d",
            actor: "\ub958\uc900\uc5f4",
            director: "\ucd5c\ub3d9\ud6c8",
            scenario: "\ucd5c\ub3d9\ud6c8, \uc774\uae30\ucca0",
            clip: "FALSE",
          },
          {
            id: 477,
            year: 2022,
            title: "\uc774\uc0c1\ud55c \ub098\ub77c\uc758 \uc218\ud559\uc790",
            dialogue:
              "\u201c\uc774\uc57c \uc774\uac70\uc774 \ubb38\uc81c\uac00 \ucc38 \uc5b4\ub835\uad6c\ub098, \uc57c, \ub0b4\uc77c \uc544\uce68\uc5d0 \ub2e4\uc2dc \ud55c\ubc88 \ud480\uc5b4\ubd10\uc57c\uaca0\uad6c\ub098 \ud558\ub294 \uc5ec\uc720\ub85c\uc6b4 \ub9c8\uc74c. \uadf8\uac83\uc774 \uc218\ud559\uc801 \uc6a9\uae30\ub2e4.\u201d",
            keyword: "\uad50\ud6c8",
            actor: "\ucd5c\ubbfc\uc2dd",
            director: "\ubc15\ub3d9\ud6c8",
            scenario: "\uc774\uc6a9\uc7ac",
            clip: "TRUE",
          },
          {
            id: 478,
            year: 2022,
            title: "\ud0b9\uba54\uc774\ucee4",
            dialogue:
              "\u201c\uc138\uc0c1 \ubc14\ub00c\ub294 \uaf2c\ub77c\uc9c0 \uc880 \ubcf4\uace0 \uc2f6\ub2e4\uace0\uc694!\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc774\uc120\uade0",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604, \uae40\ubbfc\uc218",
            clip: "FALSE",
          },
          {
            id: 479,
            year: 2022,
            title: "\ud0b9\uba54\uc774\ucee4",
            dialogue:
              "\u201c\ube5b\uc774 \uc138\uc9c8\uc218\ub85d \uadf8\ub9bc\uc790\uac00 \uc9d9\uc5b4\uc9c0\ub294 \uac74 \ub2f9\uc5f0\ud55c \uac70\uaca0\uc8e0. \uadf8\ub798\ub3c4 \uc800\ub294 \uc120\uc0dd\ub2d8\uc774 \ube5b\ub098\ub294 \uac8c \uc88b\uc740\uac00 \ubd05\ub2c8\ub2e4.\u201d",
            keyword: "\ub3c5\ubc31",
            actor: "\uc774\uc120\uade0",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604, \uae40\ubbfc\uc218",
            clip: "FALSE",
          },
          {
            id: 480,
            year: 2022,
            title: "\ud55c\uc0b0 \ub9ac\ub355\uc2a4",
            dialogue:
              "\u201c\uac04\uc808\ud788 \uccad\ucee8\ub300 \ub300\ub2f5\ud574 \uc8fc\uc2dc\uc624. \ub300\uccb4 \uc774 \uc804\uc7c1\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c?\u201d \u201c\uc758\uc640 \ubd88\uc758\uc758 \uc2f8\uc6c0\uc774\uc9c0.\u201d",
            keyword: "\uc804\uc7c1",
            actor: "\uae40\uc131\uaddc, \ubc15\ud574\uc77c",
            director: "\uae40\ud55c\ubbfc",
            scenario:
              "\uae40\ud55c\ubbfc, \uc724\ud64d\uae30, \uc774\ub098\ub77c",
            clip: "FALSE",
          },
          {
            id: 481,
            year: 2022,
            title: "\ud55c\uc0b0 \ub9ac\ub355\uc2a4",
            dialogue:
              "\u201c\ud559\uc775\uc9c4\uc744 \ud3bc\uccd0\ub77c.\u201d",
            character: "\uc7a5\uad70",
            keyword: "\uc804\uc7c1",
            actor: "\ubc15\ud574\uc77c",
            director: "\uae40\ud55c\ubbfc",
            scenario:
              "\uae40\ud55c\ubbfc, \uc724\ud64d\uae30, \uc774\ub098\ub77c",
            clip: "FALSE",
          },
          {
            id: 482,
            year: 2022,
            title: "\ud55c\uc0b0 \ub9ac\ub355\uc2a4",
            dialogue:
              "\u201c\ub0b4 \ubb50\ub7ac\ub2c8. \uc758\ub97c \uc704\ud55c \uc2f8\uc6c0. \ub2e4 \uac19\uc740 \ud55c\ub9c8\uc74c \uc544\ub2c8\uaca0\ub2c8. \uc790\ub124\ub3c4 \uace0\ub9c8\uc6e0\ub124.\u201d",
            keyword: "\uc720\uc5b8",
            actor: "\uc774\uc900\ud601",
            director: "\uae40\ud55c\ubbfc",
            scenario:
              "\uae40\ud55c\ubbfc, \uc724\ud64d\uae30, \uc774\ub098\ub77c",
            clip: "FALSE",
          },
          {
            id: 483,
            year: 2022,
            title: "\ud55c\uc0b0 \ub9ac\ub355\uc2a4",
            dialogue:
              "\u201c\ub354 \ub098\uc544\uac00\uc790. \uc9c0\uae08 \uc6b0\ub9ac\uc5d0\uac90 \uc555\ub3c4\uc801\uc778 \uc2b9\ub9ac\uac00 \ud544\uc694\ud558\ub2e4.\u201d",
            character: "\uc7a5\uad70",
            keyword: "\uc804\uc7c1",
            actor: "\ubc15\ud574\uc77c",
            director: "\uae40\ud55c\ubbfc",
            scenario:
              "\uae40\ud55c\ubbfc, \uc724\ud64d\uae30, \uc774\ub098\ub77c",
            clip: "FALSE",
          },
          {
            id: 484,
            year: 2022,
            title: "\ud5cc\ud2b8",
            dialogue:
              "\u201c\ubaa9\ud45c\uac00 \uac19\uc73c\ub2c8 \uc7a0\uc2dc \uc190\uc744 \uc7a1\ub294 \uac70\uc694.\u201d",
            keyword: " ",
            actor: "\uc815\uc6b0\uc131",
            director: "\uc774\uc815\uc7ac",
            scenario: "\uc774\uc815\uc7ac, \uc870\uc2b9\ud76c",
            adaptation:
              "\ubc31\uacbd\uc724, \uc624\uc138\ud601, \uc774\uc601\uc885",
            clip: "FALSE",
          },
          {
            id: 485,
            year: 2022,
            title: "\ud5cc\ud2b8",
            dialogue:
              "\u201c\uac01\ud558\ub97c \uc65c \uad6c\ud569\ub2c8\uae4c?\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc815\uc6b0\uc131",
            director: "\uc774\uc815\uc7ac",
            scenario: "\uc774\uc815\uc7ac, \uc870\uc2b9\ud76c",
            adaptation:
              "\ubc31\uacbd\uc724, \uc624\uc138\ud601, \uc774\uc601\uc885",
            clip: "FALSE",
          },
          {
            id: 486,
            year: 2022,
            title: "\ud5cc\ud2b8",
            dialogue:
              "\u201c\uad6d\uad8c\uc744 \ucc2c\ud0c8\ud558\uace0 \uad6d\ubbfc\uc744 \ud559\uc0b4\ud55c \uc8c4\ub85c \ub108\ub97c \uc989\uacb0 \ucc98\ud615\ud55c\ub2e4.\u201d",
            keyword: "\uc815\uce58",
            actor: "\uc815\uc6b0\uc131",
            director: "\uc774\uc815\uc7ac",
            scenario: "\uc774\uc815\uc7ac, \uc870\uc2b9\ud76c",
            adaptation:
              "\ubc31\uacbd\uc724, \uc624\uc138\ud601, \uc774\uc601\uc885",
            clip: "FALSE",
          },
          {
            id: 487,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\uc6d0\ud558\ub358 \ub300\ub85c \uc6b4\uba85\ud558\uc168\uc2b5\ub2c8\ub2e4.\u201d",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 488,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ub098\uc5d0\uac8c \uc120\ubb3c\uc774 \uaf2d \ud558\uace0 \uc2f6\ub2e4\uba74 \uadf8 \uce5c\uc808\ud55c \ud615\uc0ac\uc758 \uc2ec\uc7a5\uc744 \uac00\uc838\ub2e4\uc8fc\uc138\uc694. \ub09c \uc880 \uac16\uace0 \uc2f6\ub124.\u201d",
            keyword: "\ub3c5\ubc31",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 489,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ud55c\uad6d\uc5d0\uc11c\ub294 \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\uc774 \uacb0\ud63c\ud588\ub2e4\uace0 \uc88b\uc544\ud558\uae30\ub97c \uc911\ub2e8\ud569\ub2c8\uae4c?\u201d",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 490,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ub098 \ub108 \ub55c\uc5d0 \uace0\uc0dd\uae68\ub098 \ud588\uc9c0\ub9cc, \uc0ac\uc2e4 \ub108 \uc544\ub2c8\uc5c8\uc73c\uba74 \ub0b4 \uc778\uc0dd \uacf5\ud5c8\ud588\ub2e4, \uc694\ub807\uac8c \uc880 \uc804\ud574\uc8fc\uc138\uc694.\u201d",
            keyword: "\uc0ac\ub791 \uc720\uc5b8",
            actor: "\ubc15\uc815\ubbfc",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "TRUE",
          },
          {
            id: 491,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\uc6b0\ub294\uad6c\ub098. \ub9c8\uce68\ub0b4.\u201d",
            actor: "\ubc15\ud574\uc77c",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 492,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ub098\ub294\uc694. \uc644\uc804\ud788 \ubd95\uad34\ub410\uc5b4\uc694.\u201d",
            actor: "\ubc15\ud574\uc77c",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 493,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\uc800 \ud3f0\uc740 \ubc14\ub2e4\uc5d0 \ubc84\ub824\uc694. \uae4a\uc740 \ub370 \ube60\ub728\ub824\uc11c \uc544\ubb34\ub3c4 \ubabb \ucc3e\uac8c \ud574\uc694.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ubc15\ud574\uc77c",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 494,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ud574\uc900 \uc528 \uac19\uc740 \ubc14\ub78c\uc9c1\ud55c \ub0a8\uc790\ub4e4\uc740 \ub098\ub791 \uacb0\ud63c\ud574 \uc8fc\uc9c0 \uc54a\uc73c\ub2c8\uae4c. \uc5bc\uad74 \ubcf4\uace0 \ud55c\ub9c8\ub514\ub77c\ub3c4 \ud558\ub824\uba74 \uc0b4\uc778 \uc0ac\uac74 \uc815\ub3c4\ub294 \uc77c\uc5b4\ub098\uc57c \ud558\uc8e0.\u201d",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 495,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\uc11c\ub798 \uc528\ub294\uc694. \ubab8\uc774\u2026 \uaf3f\uaf3f\ud574\uc694. \uae34\uc7a5\ud558\uc9c0 \uc54a\uc73c\uba74\uc11c \uadf8\ub807\uac8c \ub611\ubc14\ub978 \uc0ac\ub78c\uc740 \ub4dc\ubb3c\uc5b4\uc694.\u201d",
            actor: "\ubc15\ud574\uc77c",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 496,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ub2f9\uc2e0\uc774 \uc0ac\ub791\ud55c\ub2e4\uace0 \ub9d0\ud558\ub294 \uc21c\uac04 \ub2f9\uc2e0\uc758 \uc0ac\ub791\uc774 \ub05d\ub0ac\uace0 \ub2f9\uc2e0\uc758 \uc0ac\ub791\uc774 \ub05d\ub098\ub294 \uc21c\uac04 \ub0b4 \uc0ac\ub791\uc774 \uc2dc\uc791\ub410\uc8e0.\u201d",
            keyword: "\uc0ac\ub791",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 497,
            year: 2022,
            title: "\ud5e4\uc5b4\uc9c8 \uacb0\uc2ec",
            dialogue:
              "\u201c\ub09c \ud574\uc900 \uc528\uc758 \ubbf8\uacb0 \uc0ac\uac74\uc774 \ub418\uace0 \uc2f6\uc5b4\uc11c \uc774\ud3ec\uc5d0 \uac14\ub098 \ubd10\uc694. \ubcbd\uc5d0 \ub0b4 \uc0ac\uc9c4 \ubd99\uc5ec\ub193\uace0 \uc7a0\ub3c4 \ubabb \uc790\uace0 \uc624\ub85c\uc9c0 \ub0b4 \uc0dd\uac01\ub9cc \ud574\uc694.\u201d",
            actor: "\ud0d5\uc6e8\uc774",
            director: "\ubc15\ucc2c\uc6b1",
            scenario: "\uc815\uc11c\uacbd, \ubc15\ucc2c\uc6b1",
            clip: "FALSE",
          },
          {
            id: 498,
            year: 2023,
            title: "\uac70\ubbf8\uc9d1",
            dialogue:
              "\u201c\uc790\uae30 \uc790\uc2e0\uc744 \ubbff\ub294 \uac8c \uc7ac\ub2a5\uc774\uc57c.\u201d",
            character: "\uc601\ud654\uac10\ub3c5",
            actor: "\uc815\uc6b0\uc131",
            director: "\uae40\uc9c0\uc6b4",
            scenario: "\uc2e0\uc5f0\uc2dd",
            adaptation: "\uae40\uc9c0\uc6b4",
            clip: "FALSE",
          },
          {
            id: 499,
            year: 2023,
            title: "\uad50\uc12d",
            dialogue:
              "\u201c\uc790\uc874\uc2ec\uc774 \ucd1d\uc54c \ub9c9\uc544\uc8fc\ub294 \uac70 \uc544\ub2d9\ub2c8\ub2e4.\u201d",
            actor: "\ud604\ube48",
            director: "\uc784\uc21c\ub840",
            scenario: "\uc548\uc601\uc218",
            clip: "FALSE",
          },
          {
            id: 500,
            year: 2023,
            title: "\uad50\uc12d",
            dialogue:
              "\u201c\ub0b4\uac00 \uc81c\uc77c \ubd80\ub7ec\uc6cc\ud558\ub294 \uc0ac\ub78c\uc774 \ub204\uad70\uc9c0 \uc54c\uc544\uc694? \ub3cc\uc544\uac08 \uacf3\uc774 \uc788\ub294 \uc0ac\ub78c.\u201d",
            actor: "\ud604\ube48",
            director: "\uc784\uc21c\ub840",
            scenario: "\uc548\uc601\uc218",
            clip: "FALSE",
          },
          {
            id: 501,
            year: 2023,
            title: "\uae38\ubcf5\uc21c",
            dialogue:
              "\u201c\uc0ac\ub78c \uc8fd\uc774\ub294 \uac74 \uc2ec\ud50c\ud574. \uc560 \ud0a4\uc6b0\ub294 \uac70\uc5d0 \ube44\ud558\uba74.\u201d",
            keyword: "\uac00\uc815",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 502,
            year: 2023,
            title: "\uae38\ubcf5\uc21c",
            dialogue:
              "\u201c\uc120\ubc30\ub098 \ub098\ub098 \uc5b4\ucc28\ud53c \uc8fd\uc73c\uba74 \uc9c0\uc625 \uac08 \uc0ac\ub78c\ub4e4\uc774\uc5d0\uc694. \uadf8\ub798\uc11c \uc6b0\ub9ac\uac00 \uae30\ub3c4\ub97c \uc548 \ud558\uc796\uc544.\u201d",
            keyword: "\uc9c1\uc5c5",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 503,
            year: 2023,
            title: "\uae38\ubcf5\uc21c",
            dialogue:
              '\u201c\uac71\uc815 \ub9c8, \ub098\ub3c4 \ub108\ub791 \uc9c4\uc9dc \uc798 \uc9c0\ub0bc \uc0dd\uac01 \uc5c6\uc5b4\uc694. \ud558\ub358 \ub300\ub85c \uc11c\ub85c \uc801\ub2f9\ud788 \ube59\uadf8\ub808 \uc528\ubc1c \ud558\uc790\uace0."',
            keyword: "\uc695\uc124",
            actor: "\uc774\uc19c",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 504,
            year: 2023,
            title: "\uae38\ubcf5\uc21c",
            dialogue:
              "\u201c\ub0b4\uac00 \uc544\ub294\ub370. \ucabd\ud314\ub9ac\uc796\uc544\uc694, \ub098\ud55c\ud14c.\u201d",
            actor: "\uc804\ub3c4\uc5f0",
            director: "\ubcc0\uc131\ud604",
            scenario: "\ubcc0\uc131\ud604",
            clip: "FALSE",
          },
          {
            id: 505,
            year: 2023,
            title: "\ub2e4\uc74c \uc18c\ud76c",
            dialogue:
              "\u201c\ud798\ub4e0 \uc77c\uc744 \ud558\uba74 \uc874\uc911\ubc1b\uc73c\uba74 \uc88b\uc744 \ud150\ub370, \uadf8\ub7f0 \uc77c\uc774\ub098 \ud55c\ub2e4\uace0 \ub354 \ubb34\uc2dc\ud574. \uc544\ubb34\ub3c4 \uc2e0\uacbd\uc744 \uc548 \uc368.\u201d",
            character: "\ud615\uc0ac",
            keyword: "\ub178\ub3d9 \uc138\ud0dc",
            actor: "\ubc30\ub450\ub098",
            director: "\uc815\uc8fc\ub9ac",
            scenario: "\uc815\uc8fc\ub9ac",
            clip: "TRUE",
          },
          {
            id: 506,
            year: 2023,
            title: "\ub2e4\uc74c \uc18c\ud76c",
            dialogue:
              "\u201c\ub610 \uc6b1\ud558\uba74 \ub204\uad6c\ud55c\ud14c\ub77c\ub3c4 \ub9d0\ud574. \ub098\ud55c\ud14c\ub77c\ub3c4. \uad1c\ucc2e\uc544, \uacbd\ucc30\ud55c\ud14c \ub9d0\ud574\ub3c4 \ub3fc.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ubc30\ub450\ub098",
            director: "\uc815\uc8fc\ub9ac",
            scenario: "\uc815\uc8fc\ub9ac",
            clip: "FALSE",
          },
          {
            id: 507,
            year: 2023,
            title: "\ub9ac\ubc14\uc6b4\ub4dc",
            dialogue:
              "\u201c\uc778\uc790\ubd80\ud130 \uc800 \ud63c\uc790 \uc548 \ud560\ub78d\ub2c8\ub2e4. \uac19\uc774 \ud560 \uac81\ub2c8\ub2e4, \uc560\ub4e4\ud558\uace0.\u201d",
            actor: "\uc774\uc2e0\uc601",
            director: "\uc7a5\ud56d\uc900",
            scenario: "\uad8c\uc131\ud718, \uae40\uc740\ud76c",
            adaptation: "\uc7a5\ud56d\uc900",
            clip: "FALSE",
          },
          {
            id: 508,
            year: 2023,
            title: "\ub9ac\ubc14\uc6b4\ub4dc",
            dialogue:
              "\u201c\uc6b0\ub9ac \ub0b4\uc77c\ub3c4 \ub18d\uad6c\ud560 \uc218 \uc788\ub2e4, \uc88b\ub098?\u201d",
            actor: "\uc548\uc7ac\ud64d",
            director: "\uc7a5\ud56d\uc900",
            scenario: "\uad8c\uc131\ud718, \uae40\uc740\ud76c",
            adaptation: "\uc7a5\ud56d\uc900",
            clip: "FALSE",
          },
          {
            id: 509,
            year: 2023,
            title: "\ub9ac\ubc14\uc6b4\ub4dc",
            dialogue:
              "\u201c\uba85\uc2ec\ud574\ub77c. \ub18d\uad6c\ub294 \ub05d\ub098\ub3c4, \uc778\uc0dd\uc740 \uacc4\uc18d\ub41c\ub2e4.\u201d",
            keyword: "\uc9c0\ud61c",
            actor: "\uc548\uc7ac\ud64d",
            director: "\uc7a5\ud56d\uc900",
            scenario: "\uad8c\uc131\ud718, \uae40\uc740\ud76c",
            adaptation: "\uc7a5\ud56d\uc900",
            clip: "FALSE",
          },
          {
            id: 510,
            year: 2023,
            title: "\ubc94\uc8c4\ub3c4\uc2dc3",
            dialogue:
              "\u201c\uc544\ub2c8, \uacbd\ucc30\uc774\ub780 \uac8c \ubb50\uc57c, \ubbfc\uc911\uc758 \ubabd\ub465\uc774 \uc544\ub2c8\uc57c?\u201d",
            character: "\ud615\uc0ac",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uc774\uc0c1\uc6a9",
            scenario: "\uae40\ubbfc\uc131, \ucc28\uc6b0\uc9c4",
            adaptation: "\ub9c8\ub3d9\uc11d, \uc774\uc0c1\uc6a9",
            clip: "FALSE",
          },
          {
            id: 511,
            year: 2023,
            title: "\ubc94\uc8c4\ub3c4\uc2dc3",
            dialogue:
              "\u201c\uc6b0\ub9ac \uc9c4\uc2e4\uc758 \ubc29\uc744 \uccad\uc18c\ud558\uc790.\u201d",
            character: "\ud615\uc0ac",
            actor: "\ub9c8\ub3d9\uc11d",
            director: "\uc774\uc0c1\uc6a9",
            scenario: "\uae40\ubbfc\uc131, \ucc28\uc6b0\uc9c4",
            adaptation: "\ub9c8\ub3d9\uc11d, \uc774\uc0c1\uc6a9",
            clip: "FALSE",
          },
          {
            id: 512,
            year: 2023,
            title: "\ube44\ubc00\uc758 \uc5b8\ub355",
            dialogue:
              "\u201c\uc800\uc5d0\uac8c \uac00\uc871\uc740 \ubb3c\uc74c\ud45c\uc608\uc694. \uc138\uc0c1\uc5d4 \uc218\ub9ce\uc740 \uac00\uc871\uc758 \ubcf4\uae30\ub4e4\uc774 \ub118\uccd0\ub098\ub294\ub370, \uc6b0\ub9ac \uac00\uc871\ub9cc \ubcf4\uae30\uc5d0 \uc5c6\ub294 \uac83 \uac19\uc544\uc694.\u201d",
            character: "\ud559\uc0dd",
            keyword: "\uac00\uc871",
            actor: "\ubb38\uc2b9\uc544",
            director: "\uc774\uc9c0\uc740",
            scenario: "\uc774\uc9c0\uc740",
            clip: "FALSE",
          },
          {
            id: 513,
            year: 2023,
            title: "\ube44\ubc00\uc758 \uc5b8\ub355",
            dialogue:
              "\u201c\uc5b5\uc9c0\ub85c \uc194\uc9c1\ud574\uc9c8 \ud544\uc694 \uc5c6\uc5b4. \uc194\uc9c1\ud55c \uac8c \uaf2d \uc88b\uc740 \uac83\ub9cc\ub3c4 \uc544\ub2c8\uc57c.\u201d \u201c\uc194\uc9c1\ud55c \uac8c \uc88b\uc740 \uac70\uc796\uc544\uc694.\u201d \u201c\uc120\uc0dd\ub2d8 \uc0dd\uac01\uc5d0\ub294, \uc911\uc694\ud55c \uac70\ub294 \uc194\uc9c1\ud55c \uac83\ubcf4\ub2e4\ub294 \ucc28\ub77c\ub9ac \uac70\uc9d3\ub9d0\uc744 \ud558\ub354\ub77c\ub3c4 \uc0c1\ub300\ubc29\uc758 \ub9c8\uc74c\uc744 \ud5e4\uc544\ub9ac\ub294 \ub9c8\uc74c\uc774\uc57c.\u201d",
            actor: "\uc784\uc120\uc6b0, \ubb38\uc2b9\uc544",
            director: "\uc774\uc9c0\uc740",
            scenario: "\uc774\uc9c0\uc740",
            clip: "FALSE",
          },
          {
            id: 514,
            year: 2023,
            title: "\uc0ac\ub791\uc758 \uace0\uace0\ud559",
            dialogue:
              "\u201c\uadf8\uac70 \uc54c\uc544? \uc608\uc804\uc5d0 \ud615\uc774 \uadf8\ub7ac\ub358 \uac70 \ud3ed\ub825\uc77c \uc218 \uc788\ub294 \uac70?\u201d",
            keyword: "\uc5ec\uc131 \ubc94\uc8c4",
            actor: "\uc625\uc790\uc5f0",
            director: "\uc774\uc644\ubbfc",
            scenario: "\uc774\uc644\ubbfc",
            clip: "FALSE",
          },
          {
            id: 515,
            year: 2023,
            title: "\uc0ac\ub791\uc758 \uace0\uace0\ud559",
            dialogue:
              "\u201c\ub0b4\uac00 \uc5b4\ub5bb\uac8c \ud560\uc9c0\ub294 \ub0b4\uac00 \uacb0\uc815\ud560\uac8c.\u201d",
            keyword: "\uc5ec\uc131",
            actor: "\uc625\uc790\uc5f0",
            director: "\uc774\uc644\ubbfc",
            scenario: "\uc774\uc644\ubbfc",
            clip: "FALSE",
          },
          {
            id: 516,
            year: 2023,
            title: "\uc9c0\uc625\ub9cc\uc138",
            dialogue:
              "\u201c\uc0b4\uc544 \ubb50 \ud574? \uc528\ubc1c. \uc5b4\ucc28\ud53c \ub9dd\ud588\uace0 \uc55e\uc73c\ub85c\ub3c4 \ub9dd\ud560 \ud150\ub370.\u201d",
            character: "\ud559\uc0dd",
            keyword: "\ubc18\ubb38",
            actor: "\uc624\uc6b0\ub9ac",
            director: "\uc784\uc624\uc815",
            scenario: "\uc784\uc624\uc815",
            clip: "FALSE",
          },
          {
            id: 517,
            year: 2023,
            title: "\uc9c0\uc625\ub9cc\uc138",
            dialogue:
              "\u201c\ud558, \uc528, \ub098\uc05c \ub144. \uc9c0\uac00 \ubb54\ub370 \ud63c\uc790\uc11c \ubb50 \uad6c\uc6d0\uc744 \ucc3e\uace0 \uc9c0\ub784\uc774\uc57c.\u201d",
            keyword: "\uc695\uc124",
            actor: "\uc624\uc6b0\ub9ac",
            director: "\uc784\uc624\uc815",
            scenario: "\uc784\uc624\uc815",
            clip: "FALSE",
          },
          {
            id: 518,
            year: 2023,
            title: "\uc9c0\uc625\ub9cc\uc138",
            dialogue:
              "\u201c\u2018\uc6f0\ucef4 \ubc31 \ud22c \ud5ec\u2019\uc774\ub2e4, \uc528\ubc1c.\u201d",
            keyword: "\uc678\uad6d\uc5b4 \uc695\uc124",
            actor: "\uc624\uc6b0\ub9ac",
            director: "\uc784\uc624\uc815",
            scenario: "\uc784\uc624\uc815",
            clip: "FALSE",
          },
          {
            id: 519,
            year: 2023,
            title: "\ud0ac\ub9c1 \ub85c\ub9e8\uc2a4",
            dialogue: "\u201c\uc787\uce20 \uad7f~\u201d",
            keyword: "\uc678\uad6d\uc5b4",
            actor: "\uc774\uc120\uade0",
            director: "\uc774\uc6d0\uc11d",
            scenario: "\ubc15\uc815\uc608",
            clip: "FALSE",
          },
        ];
      ze().setAppElement("#root");
      const Be = (e) => {
          let { movies: r } = e;
          const { id: n } = (function () {
              let { matches: e } = t.useContext(K),
                r = e[e.length - 1];
              return r ? r.params : {};
            })(),
            [a, i] = (0, t.useState)(null);
          return (
            (0, t.useEffect)(() => {
              const e = r.find((e) => e.id === n);
              i(e);
            }, [n, r]),
            a
              ? (0, Ce.jsxs)(ze(), {
                  isOpen: !0,
                  onRequestClose: () => {},
                  style: {
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                    content: {
                      width: "800px",
                      maxHeight: "80%",
                      margin: "auto",
                      overflowY: "auto",
                    },
                  },
                  children: [
                    (0, Ce.jsx)("h2", { children: a.title }),
                    (0, Ce.jsx)("table", {
                      children: (0, Ce.jsxs)("tbody", {
                        children: [
                          (0, Ce.jsxs)("tr", {
                            children: [
                              (0, Ce.jsx)("td", { children: "Year" }),
                              (0, Ce.jsx)("td", { children: a.year }),
                            ],
                          }),
                          (0, Ce.jsxs)("tr", {
                            children: [
                              (0, Ce.jsx)("td", { children: "Movie" }),
                              (0, Ce.jsx)("td", { children: a.title }),
                            ],
                          }),
                          (0, Ce.jsxs)("tr", {
                            children: [
                              (0, Ce.jsx)("td", { children: "Dialogue" }),
                              (0, Ce.jsx)("td", {
                                style: { fontSize: "56px" },
                                children: a.dialogue,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, Ce.jsx)("p", {
                  children:
                    "\uc601\ud654\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
                })
          );
        },
        He = () => {
          const [e, r] = (0, t.useState)(We),
            [n, a] = (0, t.useState)(40),
            [i, o] = t.useState(!1),
            [l, c] = t.useState(!1),
            [u, s] = t.useState(!1),
            [d, f] = t.useState(!1),
            [p, h] = t.useState(!1),
            [y, g] = t.useState(!1),
            [m, v] = (0, t.useState)({
              decade: [],
              actor: [],
              director: [],
              source: [],
              scenario: [],
              adaptation: [],
              character: [],
              keyword: [],
            }),
            b = [
              "1950s",
              "1960s",
              "1970s",
              "1980s",
              "1990s",
              "2000s",
              "2010s",
              "2020s",
            ],
            S = (e) => {
              let t = We;
              e.decade.length > 0 &&
                !e.decade.includes("All") &&
                (t = t.filter((t) =>
                  e.decade.some((e) => {
                    const r = parseInt(e.substring(0, 4), 10);
                    return t.year >= r && t.year < r + 10;
                  })
                )),
                e.director.length > 0 &&
                  !e.director.includes("All") &&
                  (t = t.filter((t) =>
                    e.director.some((e) => t.director.includes(e))
                  )),
                e.actor.length > 0 &&
                  !e.actor.includes("All") &&
                  (t = t.filter((t) =>
                    e.actor.some((e) => t.actor && t.actor.includes(e))
                  )),
                e.source.length > 0 &&
                  !e.source.includes("All") &&
                  (t = t.filter((t) =>
                    e.source.some((e) => t.source && t.source.includes(e))
                  )),
                e.scenario.length > 0 &&
                  !e.scenario.includes("All") &&
                  (t = t.filter((t) =>
                    e.scenario.some((e) => t.scenario && t.scenario.includes(e))
                  )),
                e.adaptation.length > 0 &&
                  !e.adaptation.includes("All") &&
                  (t = t.filter((t) =>
                    e.adaptation.some(
                      (e) => t.adaptation && t.adaptation.includes(e)
                    )
                  )),
                e.character.length > 0 &&
                  !e.character.includes("All") &&
                  (t = t.filter((t) =>
                    e.character.some(
                      (e) => t.character && t.character.includes(e)
                    )
                  )),
                e.keyword.length > 0 &&
                  !e.keyword.includes("All") &&
                  (t = t.filter((t) =>
                    e.keyword.some((e) => t.keyword && t.keyword.includes(e))
                  )),
                r(t);
            };
          return (0, Ce.jsxs)(ye, {
            children: [
              (0, Ce.jsx)(pe, {
                path: "./",
                element: (0, Ce.jsx)(Ie, {
                  decades: b,
                  characters: ["\ud14c\uc2a4\ud2b8 \uce90\ub9ad\ud130"],
                  keywords: ["\ud14c\uc2a4\ud2b8 \ud0a4\uc6cc\ub4dc"],
                  actors: ["\ud14c\uc2a4\ud2b8 \ubc30\uc6b0"],
                  directors: ["\ud14c\uc2a4\ud2b8 \uac10\ub3c5"],
                  sources: ["\ud14c\uc2a4\ud2b8 \uc6d0\uc791"],
                  scenarios: ["\ud14c\uc2a4\ud2b8 \uac01\ubcf8"],
                  adaptations: ["\ud14c\uc2a4\ud2b8 \uac01\uc0c9"],
                  activeFilters: m,
                  handleFilterChange: (e, t, r) => {
                    let n = { ...m };
                    "decade" === e && "All" === t && r
                      ? (n.decade = ["All"])
                      : "decade" === e &&
                        "All" !== t &&
                        r &&
                        n.decade.includes("All")
                      ? (n.decade = n.decade.filter(
                          (e) => "All" !== e && e !== t
                        ))
                      : "decade" !== e || r || "All" !== t
                      ? (n[e] = r
                          ? "All" === t
                            ? [t]
                            : [...n[e], t]
                          : n[e].filter((e) => e !== t))
                      : (n.decade = []);
                    n.decade.some((e) => "All" !== e && !b.includes(e)) &&
                      !n.decade.includes("All") &&
                      (n.decade = ["All"]),
                      v(n),
                      S(n);
                  },
                  handleReset: () => {
                    window.location.reload();
                  },
                  handleSizeChange: (e) => {
                    a(parseInt(e.target.value));
                  },
                  textSize: n,
                  movies: e,
                  style1Checked: i,
                  style2Checked: l,
                  style3Checked: u,
                  style4Checked: d,
                  style5Checked: p,
                  style6Checked: y,
                  handleStyle1Change: () => {
                    o(!0), c(!1), s(!1), f(!1), h(!1), g(!1);
                  },
                  handleStyle2Change: () => {
                    o(!1), c(!0), s(!1), f(!1), h(!1), g(!1);
                  },
                  handleStyle3Change: () => {
                    o(!1), c(!1), s(!0), f(!1), h(!1), g(!1);
                  },
                  handleStyle4Change: () => {
                    o(!1), c(!1), s(!1), f(!0), h(!1), g(!1);
                  },
                  handleStyle5Change: () => {
                    o(!1), c(!1), s(!1), f(!1), h(!0), g(!1);
                  },
                  handleStyle6Change: () => {
                    o(!1), c(!1), s(!1), f(!1), h(!1), g(!0);
                  },
                }),
              }),
              (0, Ce.jsx)(pe, {
                path: "./detail/:id",
                element: (0, Ce.jsx)(Be, { movies: e }),
              }),
            ],
          });
        },
        $e = (e) => {
          e &&
            e instanceof Function &&
            r
              .e(787)
              .then(r.bind(r, 787))
              .then((t) => {
                let {
                  getCLS: r,
                  getFID: n,
                  getFCP: a,
                  getLCP: i,
                  getTTFB: o,
                } = t;
                r(e), n(e), a(e), i(e), o(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render(
          (0, Ce.jsx)(t.StrictMode, {
            children: (0, Ce.jsxs)(Ee, {
              children: [" ", (0, Ce.jsx)(He, {})],
            }),
          })
        ),
        $e();
    })();
})();
//# sourceMappingURL=main.b816e796.js.map

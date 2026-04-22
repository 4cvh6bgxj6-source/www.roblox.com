/*! For license information please see accessManagementUpsellV2.bundle.min.js.LICENSE.txt */
!(function () {
  var e = {
      779: function (e, t, n) {
        "use strict";
        var r = n(594);
        var o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = r.useState,
          i = r.useEffect,
          l = r.useLayoutEffect,
          c = r.useDebugValue;
        function s(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var u =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  u = r[1];
                return (
                  l(
                    function () {
                      (o.value = n),
                        (o.getSnapshot = t),
                        s(o) && u({ inst: o });
                    },
                    [e, n, t]
                  ),
                  i(
                    function () {
                      return (
                        s(o) && u({ inst: o }),
                        e(function () {
                          s(o) && u({ inst: o });
                        })
                      );
                    },
                    [e]
                  ),
                  c(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
      },
      320: function (e, t, n) {
        "use strict";
        var r = n(594),
          o = n(676);
        var a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          i = o.useSyncExternalStore,
          l = r.useRef,
          c = r.useEffect,
          s = r.useMemo,
          u = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
          var d = l(null);
          if (null === d.current) {
            var f = { hasValue: !1, value: null };
            d.current = f;
          } else f = d.current;
          d = s(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (i = e), (e = r(e)), void 0 !== o && f.hasValue)
                  ) {
                    var t = f.value;
                    if (o(t, e)) return (l = t);
                  }
                  return (l = e);
                }
                if (((t = l), a(i, e))) return t;
                var n = r(e);
                return void 0 !== o && o(t, n) ? t : ((i = e), (l = n));
              }
              var i,
                l,
                c = !1,
                s = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s());
                    },
              ];
            },
            [t, n, r, o]
          );
          var p = i(e, d[0], d[1]);
          return (
            c(
              function () {
                (f.hasValue = !0), (f.value = p);
              },
              [p]
            ),
            u(p),
            p
          );
        };
      },
      676: function (e, t, n) {
        "use strict";
        e.exports = n(779);
      },
      390: function (e, t, n) {
        "use strict";
        e.exports = n(320);
      },
      56: function (e, t, n) {
        "use strict";
        var r = n(922),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function c(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var s = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          y = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (y) {
              var o = p(n);
              o && o !== y && e(t, o, r);
            }
            var i = u(n);
            d && (i = i.concat(d(n)));
            for (var l = c(t), m = c(n), h = 0; h < i.length; ++h) {
              var v = i[h];
              if (!(a[v] || (r && r[v]) || (m && m[v]) || (l && l[v]))) {
                var g = f(n, v);
                try {
                  s(t, v, g);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      326: function (e, t) {
        "use strict";
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        var r = "function" == typeof Symbol && Symbol.for,
          o = r ? Symbol.for("react.element") : 60103,
          a = r ? Symbol.for("react.portal") : 60106,
          i = r ? Symbol.for("react.fragment") : 60107,
          l = r ? Symbol.for("react.strict_mode") : 60108,
          c = r ? Symbol.for("react.profiler") : 60114,
          s = r ? Symbol.for("react.provider") : 60109,
          u = r ? Symbol.for("react.context") : 60110,
          d = r ? Symbol.for("react.async_mode") : 60111,
          f = r ? Symbol.for("react.concurrent_mode") : 60111,
          p = r ? Symbol.for("react.forward_ref") : 60112,
          y = r ? Symbol.for("react.suspense") : 60113,
          m = r ? Symbol.for("react.suspense_list") : 60120,
          h = r ? Symbol.for("react.memo") : 60115,
          v = r ? Symbol.for("react.lazy") : 60116,
          g = r ? Symbol.for("react.block") : 60121,
          b = r ? Symbol.for("react.fundamental") : 60117,
          S = r ? Symbol.for("react.responder") : 60118,
          C = r ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" === n(e) && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case o:
                switch ((e = e.type)) {
                  case d:
                  case f:
                  case i:
                  case c:
                  case l:
                  case y:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case p:
                      case v:
                      case h:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function E(e) {
          return w(e) === f;
        }
        (t.AsyncMode = d),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = o),
          (t.ForwardRef = p),
          (t.Fragment = i),
          (t.Lazy = v),
          (t.Memo = h),
          (t.Portal = a),
          (t.Profiler = c),
          (t.StrictMode = l),
          (t.Suspense = y),
          (t.isAsyncMode = function (e) {
            return E(e) || w(e) === d;
          }),
          (t.isConcurrentMode = E),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === n(e) && null !== e && e.$$typeof === o;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === p;
          }),
          (t.isFragment = function (e) {
            return w(e) === i;
          }),
          (t.isLazy = function (e) {
            return w(e) === v;
          }),
          (t.isMemo = function (e) {
            return w(e) === h;
          }),
          (t.isPortal = function (e) {
            return w(e) === a;
          }),
          (t.isProfiler = function (e) {
            return w(e) === c;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === l;
          }),
          (t.isSuspense = function (e) {
            return w(e) === y;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === i ||
              e === f ||
              e === c ||
              e === l ||
              e === y ||
              e === m ||
              ("object" === n(e) &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === h ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === p ||
                  e.$$typeof === b ||
                  e.$$typeof === S ||
                  e.$$typeof === C ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      },
      922: function (e, t, n) {
        "use strict";
        e.exports = n(326);
      },
      157: function (e, t) {
        "use strict";
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        var r,
          o = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          c = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          d = Symbol.for("react.server_context"),
          f = Symbol.for("react.forward_ref"),
          p = Symbol.for("react.suspense"),
          y = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          v = Symbol.for("react.offscreen");
        function g(e) {
          if ("object" === n(e) && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case o:
                switch ((e = e.type)) {
                  case i:
                  case c:
                  case l:
                  case p:
                  case y:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case d:
                      case u:
                      case f:
                      case h:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        r = Symbol.for("react.module.reference");
      },
      625: function (e, t, n) {
        "use strict";
        n(157);
      },
      373: function (e, t, n) {
        var r, o, a, i;
        function l(e) {
          return (
            (l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            l(e)
          );
        }
        (e = n.nmd(e)),
          self,
          (i = function () {
            return (function () {
              var e = {
                  913: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(601),
                      a = o(r("String.prototype.indexOf"));
                    e.exports = function (e, t) {
                      var n = r(e, !!t);
                      return "function" == typeof n && a(e, ".prototype.") > -1
                        ? o(n)
                        : n;
                    };
                  },
                  601: function (e, t, n) {
                    "use strict";
                    var r = n(49),
                      o = n(651),
                      a = n(255),
                      i = n(785),
                      l = o("%Function.prototype.apply%"),
                      c = o("%Function.prototype.call%"),
                      s = o("%Reflect.apply%", !0) || r.call(c, l),
                      u = n(649),
                      d = o("%Math.max%");
                    e.exports = function (e) {
                      if ("function" != typeof e)
                        throw new i("a function is required");
                      var t = s(r, c, arguments);
                      return a(
                        t,
                        1 + d(0, e.length - (arguments.length - 1)),
                        !0
                      );
                    };
                    var f = function () {
                      return s(r, l, arguments);
                    };
                    u
                      ? u(e.exports, "apply", { value: f })
                      : (e.exports.apply = f);
                  },
                  295: function (e, t, n) {
                    "use strict";
                    var r = n(649),
                      o = n(389),
                      a = n(785),
                      i = n(109);
                    e.exports = function (e, t, n) {
                      if (!e || ("object" != l(e) && "function" != typeof e))
                        throw new a("`obj` must be an object or a function`");
                      if ("string" != typeof t && "symbol" != l(t))
                        throw new a("`property` must be a string or a symbol`");
                      if (
                        arguments.length > 3 &&
                        "boolean" != typeof arguments[3] &&
                        null !== arguments[3]
                      )
                        throw new a(
                          "`nonEnumerable`, if provided, must be a boolean or null"
                        );
                      if (
                        arguments.length > 4 &&
                        "boolean" != typeof arguments[4] &&
                        null !== arguments[4]
                      )
                        throw new a(
                          "`nonWritable`, if provided, must be a boolean or null"
                        );
                      if (
                        arguments.length > 5 &&
                        "boolean" != typeof arguments[5] &&
                        null !== arguments[5]
                      )
                        throw new a(
                          "`nonConfigurable`, if provided, must be a boolean or null"
                        );
                      if (
                        arguments.length > 6 &&
                        "boolean" != typeof arguments[6]
                      )
                        throw new a("`loose`, if provided, must be a boolean");
                      var c = arguments.length > 3 ? arguments[3] : null,
                        s = arguments.length > 4 ? arguments[4] : null,
                        u = arguments.length > 5 ? arguments[5] : null,
                        d = arguments.length > 6 && arguments[6],
                        f = !!i && i(e, t);
                      if (r)
                        r(e, t, {
                          configurable: null === u && f ? f.configurable : !u,
                          enumerable: null === c && f ? f.enumerable : !c,
                          value: n,
                          writable: null === s && f ? f.writable : !s,
                        });
                      else {
                        if (!d && (c || s || u))
                          throw new o(
                            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
                          );
                        e[t] = n;
                      }
                    };
                  },
                  649: function (e, t, n) {
                    "use strict";
                    var r = n(651)("%Object.defineProperty%", !0) || !1;
                    if (r)
                      try {
                        r({}, "a", { value: 1 });
                      } catch (e) {
                        r = !1;
                      }
                    e.exports = r;
                  },
                  55: function (e) {
                    "use strict";
                    e.exports = EvalError;
                  },
                  293: function (e) {
                    "use strict";
                    e.exports = Error;
                  },
                  888: function (e) {
                    "use strict";
                    e.exports = RangeError;
                  },
                  900: function (e) {
                    "use strict";
                    e.exports = ReferenceError;
                  },
                  389: function (e) {
                    "use strict";
                    e.exports = SyntaxError;
                  },
                  785: function (e) {
                    "use strict";
                    e.exports = TypeError;
                  },
                  436: function (e) {
                    "use strict";
                    e.exports = URIError;
                  },
                  719: function (e) {
                    "use strict";
                    var t = Object.prototype.toString,
                      n = Math.max,
                      r = function (e, t) {
                        for (var n = [], r = 0; r < e.length; r += 1)
                          n[r] = e[r];
                        for (var o = 0; o < t.length; o += 1)
                          n[o + e.length] = t[o];
                        return n;
                      };
                    e.exports = function (e) {
                      var o = this;
                      if (
                        "function" != typeof o ||
                        "[object Function]" !== t.apply(o)
                      )
                        throw new TypeError(
                          "Function.prototype.bind called on incompatible " + o
                        );
                      for (
                        var a,
                          i = (function (e) {
                            for (
                              var t = [], n = 1, r = 0;
                              n < e.length;
                              n += 1, r += 1
                            )
                              t[r] = e[n];
                            return t;
                          })(arguments),
                          l = n(0, o.length - i.length),
                          c = [],
                          s = 0;
                        s < l;
                        s++
                      )
                        c[s] = "$" + s;
                      if (
                        ((a = Function(
                          "binder",
                          "return function (" +
                            (function (e) {
                              for (var t = "", n = 0; n < e.length; n += 1)
                                (t += e[n]), n + 1 < e.length && (t += ",");
                              return t;
                            })(c) +
                            "){ return binder.apply(this,arguments); }"
                        )(function () {
                          if (this instanceof a) {
                            var t = o.apply(this, r(i, arguments));
                            return Object(t) === t ? t : this;
                          }
                          return o.apply(e, r(i, arguments));
                        })),
                        o.prototype)
                      ) {
                        var u = function () {};
                        (u.prototype = o.prototype),
                          (a.prototype = new u()),
                          (u.prototype = null);
                      }
                      return a;
                    };
                  },
                  49: function (e, t, n) {
                    "use strict";
                    var r = n(719);
                    e.exports = Function.prototype.bind || r;
                  },
                  651: function (e, t, n) {
                    "use strict";
                    var r,
                      o = n(293),
                      a = n(55),
                      i = n(888),
                      c = n(900),
                      s = n(389),
                      u = n(785),
                      d = n(436),
                      f = Function,
                      p = function (e) {
                        try {
                          return f(
                            '"use strict"; return (' + e + ").constructor;"
                          )();
                        } catch (e) {}
                      },
                      y = Object.getOwnPropertyDescriptor;
                    if (y)
                      try {
                        y({}, "");
                      } catch (e) {
                        y = null;
                      }
                    var m = function () {
                        throw new u();
                      },
                      h = y
                        ? (function () {
                            try {
                              return m;
                            } catch (e) {
                              try {
                                return y(arguments, "callee").get;
                              } catch (e) {
                                return m;
                              }
                            }
                          })()
                        : m,
                      v = n(257)(),
                      g = n(726)(),
                      b =
                        Object.getPrototypeOf ||
                        (g
                          ? function (e) {
                              return e.__proto__;
                            }
                          : null),
                      S = {},
                      C =
                        "undefined" != typeof Uint8Array && b
                          ? b(Uint8Array)
                          : r,
                      w = {
                        __proto__: null,
                        "%AggregateError%":
                          "undefined" == typeof AggregateError
                            ? r
                            : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%":
                          "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                        "%ArrayIteratorPrototype%":
                          v && b ? b([][Symbol.iterator]()) : r,
                        "%AsyncFromSyncIteratorPrototype%": r,
                        "%AsyncFunction%": S,
                        "%AsyncGenerator%": S,
                        "%AsyncGeneratorFunction%": S,
                        "%AsyncIteratorPrototype%": S,
                        "%Atomics%":
                          "undefined" == typeof Atomics ? r : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                        "%BigInt64Array%":
                          "undefined" == typeof BigInt64Array
                            ? r
                            : BigInt64Array,
                        "%BigUint64Array%":
                          "undefined" == typeof BigUint64Array
                            ? r
                            : BigUint64Array,
                        "%Boolean%": Boolean,
                        "%DataView%":
                          "undefined" == typeof DataView ? r : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": o,
                        "%eval%": eval,
                        "%EvalError%": a,
                        "%Float32Array%":
                          "undefined" == typeof Float32Array ? r : Float32Array,
                        "%Float64Array%":
                          "undefined" == typeof Float64Array ? r : Float64Array,
                        "%FinalizationRegistry%":
                          "undefined" == typeof FinalizationRegistry
                            ? r
                            : FinalizationRegistry,
                        "%Function%": f,
                        "%GeneratorFunction%": S,
                        "%Int8Array%":
                          "undefined" == typeof Int8Array ? r : Int8Array,
                        "%Int16Array%":
                          "undefined" == typeof Int16Array ? r : Int16Array,
                        "%Int32Array%":
                          "undefined" == typeof Int32Array ? r : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%":
                          v && b ? b(b([][Symbol.iterator]())) : r,
                        "%JSON%":
                          "object" ==
                          ("undefined" == typeof JSON ? "undefined" : l(JSON))
                            ? JSON
                            : r,
                        "%Map%": "undefined" == typeof Map ? r : Map,
                        "%MapIteratorPrototype%":
                          "undefined" != typeof Map && v && b
                            ? b(new Map()[Symbol.iterator]())
                            : r,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%":
                          "undefined" == typeof Promise ? r : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                        "%RangeError%": i,
                        "%ReferenceError%": c,
                        "%Reflect%":
                          "undefined" == typeof Reflect ? r : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? r : Set,
                        "%SetIteratorPrototype%":
                          "undefined" != typeof Set && v && b
                            ? b(new Set()[Symbol.iterator]())
                            : r,
                        "%SharedArrayBuffer%":
                          "undefined" == typeof SharedArrayBuffer
                            ? r
                            : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%":
                          v && b ? b(""[Symbol.iterator]()) : r,
                        "%Symbol%": v ? Symbol : r,
                        "%SyntaxError%": s,
                        "%ThrowTypeError%": h,
                        "%TypedArray%": C,
                        "%TypeError%": u,
                        "%Uint8Array%":
                          "undefined" == typeof Uint8Array ? r : Uint8Array,
                        "%Uint8ClampedArray%":
                          "undefined" == typeof Uint8ClampedArray
                            ? r
                            : Uint8ClampedArray,
                        "%Uint16Array%":
                          "undefined" == typeof Uint16Array ? r : Uint16Array,
                        "%Uint32Array%":
                          "undefined" == typeof Uint32Array ? r : Uint32Array,
                        "%URIError%": d,
                        "%WeakMap%":
                          "undefined" == typeof WeakMap ? r : WeakMap,
                        "%WeakRef%":
                          "undefined" == typeof WeakRef ? r : WeakRef,
                        "%WeakSet%":
                          "undefined" == typeof WeakSet ? r : WeakSet,
                      };
                    if (b)
                      try {
                        null.error;
                      } catch (e) {
                        var E = b(b(e));
                        w["%Error.prototype%"] = E;
                      }
                    var P = function e(t) {
                        var n;
                        if ("%AsyncFunction%" === t)
                          n = p("async function () {}");
                        else if ("%GeneratorFunction%" === t)
                          n = p("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t)
                          n = p("async function* () {}");
                        else if ("%AsyncGenerator%" === t) {
                          var r = e("%AsyncGeneratorFunction%");
                          r && (n = r.prototype);
                        } else if ("%AsyncIteratorPrototype%" === t) {
                          var o = e("%AsyncGenerator%");
                          o && b && (n = b(o.prototype));
                        }
                        return (w[t] = n), n;
                      },
                      T = {
                        __proto__: null,
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": [
                          "Array",
                          "prototype",
                          "entries",
                        ],
                        "%ArrayProto_forEach%": [
                          "Array",
                          "prototype",
                          "forEach",
                        ],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": [
                          "AsyncFunction",
                          "prototype",
                        ],
                        "%AsyncGenerator%": [
                          "AsyncGeneratorFunction",
                          "prototype",
                        ],
                        "%AsyncGeneratorPrototype%": [
                          "AsyncGeneratorFunction",
                          "prototype",
                          "prototype",
                        ],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": [
                          "Float32Array",
                          "prototype",
                        ],
                        "%Float64ArrayPrototype%": [
                          "Float64Array",
                          "prototype",
                        ],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": [
                          "GeneratorFunction",
                          "prototype",
                          "prototype",
                        ],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": [
                          "Object",
                          "prototype",
                          "toString",
                        ],
                        "%ObjProto_valueOf%": [
                          "Object",
                          "prototype",
                          "valueOf",
                        ],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": [
                          "ReferenceError",
                          "prototype",
                        ],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": [
                          "SharedArrayBuffer",
                          "prototype",
                        ],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": [
                          "Uint8ClampedArray",
                          "prototype",
                        ],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"],
                      },
                      k = n(49),
                      A = n(215),
                      x = k.call(Function.call, Array.prototype.concat),
                      I = k.call(Function.apply, Array.prototype.splice),
                      D = k.call(Function.call, String.prototype.replace),
                      M = k.call(Function.call, String.prototype.slice),
                      N = k.call(Function.call, RegExp.prototype.exec),
                      O =
                        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                      U = /\\(\\)?/g,
                      j = function (e, t) {
                        var n,
                          r = e;
                        if (
                          (A(T, r) && (r = "%" + (n = T[r])[0] + "%"), A(w, r))
                        ) {
                          var o = w[r];
                          if ((o === S && (o = P(r)), void 0 === o && !t))
                            throw new u(
                              "intrinsic " +
                                e +
                                " exists, but is not available. Please file an issue!"
                            );
                          return { alias: n, name: r, value: o };
                        }
                        throw new s("intrinsic " + e + " does not exist!");
                      };
                    e.exports = function (e, t) {
                      if ("string" != typeof e || 0 === e.length)
                        throw new u(
                          "intrinsic name must be a non-empty string"
                        );
                      if (arguments.length > 1 && "boolean" != typeof t)
                        throw new u(
                          '"allowMissing" argument must be a boolean'
                        );
                      if (null === N(/^%?[^%]*%?$/, e))
                        throw new s(
                          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
                        );
                      var n = (function (e) {
                          var t = M(e, 0, 1),
                            n = M(e, -1);
                          if ("%" === t && "%" !== n)
                            throw new s(
                              "invalid intrinsic syntax, expected closing `%`"
                            );
                          if ("%" === n && "%" !== t)
                            throw new s(
                              "invalid intrinsic syntax, expected opening `%`"
                            );
                          var r = [];
                          return (
                            D(e, O, function (e, t, n, o) {
                              r[r.length] = n ? D(o, U, "$1") : t || e;
                            }),
                            r
                          );
                        })(e),
                        r = n.length > 0 ? n[0] : "",
                        o = j("%" + r + "%", t),
                        a = o.name,
                        i = o.value,
                        l = !1,
                        c = o.alias;
                      c && ((r = c[0]), I(n, x([0, 1], c)));
                      for (var d = 1, f = !0; d < n.length; d += 1) {
                        var p = n[d],
                          m = M(p, 0, 1),
                          h = M(p, -1);
                        if (
                          ('"' === m ||
                            "'" === m ||
                            "`" === m ||
                            '"' === h ||
                            "'" === h ||
                            "`" === h) &&
                          m !== h
                        )
                          throw new s(
                            "property names with quotes must have matching quotes"
                          );
                        if (
                          (("constructor" !== p && f) || (l = !0),
                          A(w, (a = "%" + (r += "." + p) + "%")))
                        )
                          i = w[a];
                        else if (null != i) {
                          if (!(p in i)) {
                            if (!t)
                              throw new u(
                                "base intrinsic for " +
                                  e +
                                  " exists, but the property is not available."
                              );
                            return;
                          }
                          if (y && d + 1 >= n.length) {
                            var v = y(i, p);
                            i =
                              (f = !!v) &&
                              "get" in v &&
                              !("originalValue" in v.get)
                                ? v.get
                                : i[p];
                          } else (f = A(i, p)), (i = i[p]);
                          f && !l && (w[a] = i);
                        }
                      }
                      return i;
                    };
                  },
                  109: function (e, t, n) {
                    "use strict";
                    var r = n(651)("%Object.getOwnPropertyDescriptor%", !0);
                    if (r)
                      try {
                        r([], "length");
                      } catch (e) {
                        r = null;
                      }
                    e.exports = r;
                  },
                  890: function (e, t, n) {
                    "use strict";
                    var r = n(649),
                      o = function () {
                        return !!r;
                      };
                    (o.hasArrayLengthDefineBug = function () {
                      if (!r) return null;
                      try {
                        return 1 !== r([], "length", { value: 1 }).length;
                      } catch (e) {
                        return !0;
                      }
                    }),
                      (e.exports = o);
                  },
                  726: function (e) {
                    "use strict";
                    var t = { __proto__: null, foo: {} },
                      n = Object;
                    e.exports = function () {
                      return (
                        { __proto__: t }.foo === t.foo && !(t instanceof n)
                      );
                    };
                  },
                  257: function (e, t, n) {
                    "use strict";
                    var r = "undefined" != typeof Symbol && Symbol,
                      o = n(843);
                    e.exports = function () {
                      return (
                        "function" == typeof r &&
                        "function" == typeof Symbol &&
                        "symbol" == l(r("foo")) &&
                        "symbol" == l(Symbol("bar")) &&
                        o()
                      );
                    };
                  },
                  843: function (e) {
                    "use strict";
                    e.exports = function () {
                      if (
                        "function" != typeof Symbol ||
                        "function" != typeof Object.getOwnPropertySymbols
                      )
                        return !1;
                      if ("symbol" == l(Symbol.iterator)) return !0;
                      var e = {},
                        t = Symbol("test"),
                        n = Object(t);
                      if ("string" == typeof t) return !1;
                      if (
                        "[object Symbol]" !== Object.prototype.toString.call(t)
                      )
                        return !1;
                      if (
                        "[object Symbol]" !== Object.prototype.toString.call(n)
                      )
                        return !1;
                      for (t in ((e[t] = 42), e)) return !1;
                      if (
                        "function" == typeof Object.keys &&
                        0 !== Object.keys(e).length
                      )
                        return !1;
                      if (
                        "function" == typeof Object.getOwnPropertyNames &&
                        0 !== Object.getOwnPropertyNames(e).length
                      )
                        return !1;
                      var r = Object.getOwnPropertySymbols(e);
                      if (1 !== r.length || r[0] !== t) return !1;
                      if (!Object.prototype.propertyIsEnumerable.call(e, t))
                        return !1;
                      if (
                        "function" == typeof Object.getOwnPropertyDescriptor
                      ) {
                        var o = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== o.value || !0 !== o.enumerable) return !1;
                      }
                      return !0;
                    };
                  },
                  215: function (e, t, n) {
                    "use strict";
                    var r = Function.prototype.call,
                      o = Object.prototype.hasOwnProperty,
                      a = n(49);
                    e.exports = a.call(r, o);
                  },
                  709: function (e, t, n) {
                    var r,
                      o = 1 / 0,
                      a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                      i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                      c = "\\ud800-\\udfff",
                      s = "\\u2700-\\u27bf",
                      u = "a-z\\xdf-\\xf6\\xf8-\\xff",
                      d = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                      f =
                        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                      p = "[" + f + "]",
                      y = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                      m = "\\d+",
                      h = "[" + s + "]",
                      v = "[" + u + "]",
                      g = "[^" + c + f + m + s + u + d + "]",
                      b = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                      S = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                      C = "[" + d + "]",
                      w = "(?:" + v + "|" + g + ")",
                      E = "(?:" + C + "|" + g + ")",
                      P = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                      T = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                      k = "(?:" + y + "|\\ud83c[\\udffb-\\udfff])?",
                      A = "[\\ufe0e\\ufe0f]?",
                      x =
                        A +
                        k +
                        "(?:\\u200d(?:" +
                        ["[^" + c + "]", b, S].join("|") +
                        ")" +
                        A +
                        k +
                        ")*",
                      I = "(?:" + [h, b, S].join("|") + ")" + x,
                      D = RegExp("['’]", "g"),
                      M = RegExp(y, "g"),
                      N = RegExp(
                        [
                          C +
                            "?" +
                            v +
                            "+" +
                            P +
                            "(?=" +
                            [p, C, "$"].join("|") +
                            ")",
                          E + "+" + T + "(?=" + [p, C + w, "$"].join("|") + ")",
                          C + "?" + w + "+" + P,
                          C + "+" + T,
                          m,
                          I,
                        ].join("|"),
                        "g"
                      ),
                      O =
                        /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                      U =
                        "object" == l(n.g) &&
                        n.g &&
                        n.g.Object === Object &&
                        n.g,
                      j =
                        "object" ==
                          ("undefined" == typeof self
                            ? "undefined"
                            : l(self)) &&
                        self &&
                        self.Object === Object &&
                        self,
                      V = U || j || Function("return this")(),
                      R =
                        ((r = {
                          À: "A",
                          Á: "A",
                          Â: "A",
                          Ã: "A",
                          Ä: "A",
                          Å: "A",
                          à: "a",
                          á: "a",
                          â: "a",
                          ã: "a",
                          ä: "a",
                          å: "a",
                          Ç: "C",
                          ç: "c",
                          Ð: "D",
                          ð: "d",
                          È: "E",
                          É: "E",
                          Ê: "E",
                          Ë: "E",
                          è: "e",
                          é: "e",
                          ê: "e",
                          ë: "e",
                          Ì: "I",
                          Í: "I",
                          Î: "I",
                          Ï: "I",
                          ì: "i",
                          í: "i",
                          î: "i",
                          ï: "i",
                          Ñ: "N",
                          ñ: "n",
                          Ò: "O",
                          Ó: "O",
                          Ô: "O",
                          Õ: "O",
                          Ö: "O",
                          Ø: "O",
                          ò: "o",
                          ó: "o",
                          ô: "o",
                          õ: "o",
                          ö: "o",
                          ø: "o",
                          Ù: "U",
                          Ú: "U",
                          Û: "U",
                          Ü: "U",
                          ù: "u",
                          ú: "u",
                          û: "u",
                          ü: "u",
                          Ý: "Y",
                          ý: "y",
                          ÿ: "y",
                          Æ: "Ae",
                          æ: "ae",
                          Þ: "Th",
                          þ: "th",
                          ß: "ss",
                          Ā: "A",
                          Ă: "A",
                          Ą: "A",
                          ā: "a",
                          ă: "a",
                          ą: "a",
                          Ć: "C",
                          Ĉ: "C",
                          Ċ: "C",
                          Č: "C",
                          ć: "c",
                          ĉ: "c",
                          ċ: "c",
                          č: "c",
                          Ď: "D",
                          Đ: "D",
                          ď: "d",
                          đ: "d",
                          Ē: "E",
                          Ĕ: "E",
                          Ė: "E",
                          Ę: "E",
                          Ě: "E",
                          ē: "e",
                          ĕ: "e",
                          ė: "e",
                          ę: "e",
                          ě: "e",
                          Ĝ: "G",
                          Ğ: "G",
                          Ġ: "G",
                          Ģ: "G",
                          ĝ: "g",
                          ğ: "g",
                          ġ: "g",
                          ģ: "g",
                          Ĥ: "H",
                          Ħ: "H",
                          ĥ: "h",
                          ħ: "h",
                          Ĩ: "I",
                          Ī: "I",
                          Ĭ: "I",
                          Į: "I",
                          İ: "I",
                          ĩ: "i",
                          ī: "i",
                          ĭ: "i",
                          į: "i",
                          ı: "i",
                          Ĵ: "J",
                          ĵ: "j",
                          Ķ: "K",
                          ķ: "k",
                          ĸ: "k",
                          Ĺ: "L",
                          Ļ: "L",
                          Ľ: "L",
                          Ŀ: "L",
                          Ł: "L",
                          ĺ: "l",
                          ļ: "l",
                          ľ: "l",
                          ŀ: "l",
                          ł: "l",
                          Ń: "N",
                          Ņ: "N",
                          Ň: "N",
                          Ŋ: "N",
                          ń: "n",
                          ņ: "n",
                          ň: "n",
                          ŋ: "n",
                          Ō: "O",
                          Ŏ: "O",
                          Ő: "O",
                          ō: "o",
                          ŏ: "o",
                          ő: "o",
                          Ŕ: "R",
                          Ŗ: "R",
                          Ř: "R",
                          ŕ: "r",
                          ŗ: "r",
                          ř: "r",
                          Ś: "S",
                          Ŝ: "S",
                          Ş: "S",
                          Š: "S",
                          ś: "s",
                          ŝ: "s",
                          ş: "s",
                          š: "s",
                          Ţ: "T",
                          Ť: "T",
                          Ŧ: "T",
                          ţ: "t",
                          ť: "t",
                          ŧ: "t",
                          Ũ: "U",
                          Ū: "U",
                          Ŭ: "U",
                          Ů: "U",
                          Ű: "U",
                          Ų: "U",
                          ũ: "u",
                          ū: "u",
                          ŭ: "u",
                          ů: "u",
                          ű: "u",
                          ų: "u",
                          Ŵ: "W",
                          ŵ: "w",
                          Ŷ: "Y",
                          ŷ: "y",
                          Ÿ: "Y",
                          Ź: "Z",
                          Ż: "Z",
                          Ž: "Z",
                          ź: "z",
                          ż: "z",
                          ž: "z",
                          Ĳ: "IJ",
                          ĳ: "ij",
                          Œ: "Oe",
                          œ: "oe",
                          ŉ: "'n",
                          ſ: "ss",
                        }),
                        function (e) {
                          return null == r ? void 0 : r[e];
                        }),
                      F = Object.prototype.toString,
                      L = V.Symbol,
                      W = L ? L.prototype : void 0,
                      B = W ? W.toString : void 0;
                    function _(e) {
                      return null == e
                        ? ""
                        : (function (e) {
                            if ("string" == typeof e) return e;
                            if (
                              (function (e) {
                                return (
                                  "symbol" == l(e) ||
                                  ((function (e) {
                                    return !!e && "object" == l(e);
                                  })(e) &&
                                    "[object Symbol]" == F.call(e))
                                );
                              })(e)
                            )
                              return B ? B.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -o ? "-0" : t;
                          })(e);
                    }
                    var K,
                      q =
                        ((K = function (e, t, n) {
                          return e + (n ? "-" : "") + t.toLowerCase();
                        }),
                        function (e) {
                          return (function (e, t, n) {
                            for (var r = -1, o = e ? e.length : 0; ++r < o; )
                              n = t(n, e[r], r, e);
                            return n;
                          })(
                            (function (e) {
                              return (function (e) {
                                return O.test(e);
                              })((e = _(e)))
                                ? (function (e) {
                                    return e.match(N) || [];
                                  })(e)
                                : (function (e) {
                                    return e.match(a) || [];
                                  })(e);
                            })(
                              (function (e) {
                                return (
                                  (e = _(e)) && e.replace(i, R).replace(M, "")
                                );
                              })(e).replace(D, "")
                            ),
                            K,
                            ""
                          );
                        });
                    e.exports = q;
                  },
                  937: function (e, t, n) {
                    var r = "function" == typeof Map && Map.prototype,
                      o =
                        Object.getOwnPropertyDescriptor && r
                          ? Object.getOwnPropertyDescriptor(
                              Map.prototype,
                              "size"
                            )
                          : null,
                      a = r && o && "function" == typeof o.get ? o.get : null,
                      i = r && Map.prototype.forEach,
                      c = "function" == typeof Set && Set.prototype,
                      s =
                        Object.getOwnPropertyDescriptor && c
                          ? Object.getOwnPropertyDescriptor(
                              Set.prototype,
                              "size"
                            )
                          : null,
                      u = c && s && "function" == typeof s.get ? s.get : null,
                      d = c && Set.prototype.forEach,
                      f =
                        "function" == typeof WeakMap && WeakMap.prototype
                          ? WeakMap.prototype.has
                          : null,
                      p =
                        "function" == typeof WeakSet && WeakSet.prototype
                          ? WeakSet.prototype.has
                          : null,
                      y =
                        "function" == typeof WeakRef && WeakRef.prototype
                          ? WeakRef.prototype.deref
                          : null,
                      m = Boolean.prototype.valueOf,
                      h = Object.prototype.toString,
                      v = Function.prototype.toString,
                      g = String.prototype.match,
                      b = String.prototype.slice,
                      S = String.prototype.replace,
                      C = String.prototype.toUpperCase,
                      w = String.prototype.toLowerCase,
                      E = RegExp.prototype.test,
                      P = Array.prototype.concat,
                      T = Array.prototype.join,
                      k = Array.prototype.slice,
                      A = Math.floor,
                      x =
                        "function" == typeof BigInt
                          ? BigInt.prototype.valueOf
                          : null,
                      I = Object.getOwnPropertySymbols,
                      D =
                        "function" == typeof Symbol &&
                        "symbol" == l(Symbol.iterator)
                          ? Symbol.prototype.toString
                          : null,
                      M =
                        "function" == typeof Symbol &&
                        "object" == l(Symbol.iterator),
                      N =
                        "function" == typeof Symbol &&
                        Symbol.toStringTag &&
                        (Symbol.toStringTag, 1)
                          ? Symbol.toStringTag
                          : null,
                      O = Object.prototype.propertyIsEnumerable,
                      U =
                        ("function" == typeof Reflect
                          ? Reflect.getPrototypeOf
                          : Object.getPrototypeOf) ||
                        ([].__proto__ === Array.prototype
                          ? function (e) {
                              return e.__proto__;
                            }
                          : null);
                    function j(e, t) {
                      if (
                        e === 1 / 0 ||
                        e === -1 / 0 ||
                        e != e ||
                        (e && e > -1e3 && e < 1e3) ||
                        E.call(/e/, t)
                      )
                        return t;
                      var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                      if ("number" == typeof e) {
                        var r = e < 0 ? -A(-e) : A(e);
                        if (r !== e) {
                          var o = String(r),
                            a = b.call(t, o.length + 1);
                          return (
                            S.call(o, n, "$&_") +
                            "." +
                            S.call(S.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
                          );
                        }
                      }
                      return S.call(t, n, "$&_");
                    }
                    var V = n(634),
                      R = V.custom,
                      F = K(R) ? R : null;
                    function L(e, t, n) {
                      var r = "double" === (n.quoteStyle || t) ? '"' : "'";
                      return r + e + r;
                    }
                    function W(e) {
                      return S.call(String(e), /"/g, "&quot;");
                    }
                    function B(e) {
                      return !(
                        "[object Array]" !== G(e) ||
                        (N && "object" == l(e) && N in e)
                      );
                    }
                    function _(e) {
                      return !(
                        "[object RegExp]" !== G(e) ||
                        (N && "object" == l(e) && N in e)
                      );
                    }
                    function K(e) {
                      if (M)
                        return e && "object" == l(e) && e instanceof Symbol;
                      if ("symbol" == l(e)) return !0;
                      if (!e || "object" != l(e) || !D) return !1;
                      try {
                        return D.call(e), !0;
                      } catch (e) {}
                      return !1;
                    }
                    e.exports = function e(t, r, o, c) {
                      var s = r || {};
                      if (
                        H(s, "quoteStyle") &&
                        "single" !== s.quoteStyle &&
                        "double" !== s.quoteStyle
                      )
                        throw new TypeError(
                          'option "quoteStyle" must be "single" or "double"'
                        );
                      if (
                        H(s, "maxStringLength") &&
                        ("number" == typeof s.maxStringLength
                          ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
                          : null !== s.maxStringLength)
                      )
                        throw new TypeError(
                          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                        );
                      var h = !H(s, "customInspect") || s.customInspect;
                      if ("boolean" != typeof h && "symbol" !== h)
                        throw new TypeError(
                          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
                        );
                      if (
                        H(s, "indent") &&
                        null !== s.indent &&
                        "\t" !== s.indent &&
                        !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
                      )
                        throw new TypeError(
                          'option "indent" must be "\\t", an integer > 0, or `null`'
                        );
                      if (
                        H(s, "numericSeparator") &&
                        "boolean" != typeof s.numericSeparator
                      )
                        throw new TypeError(
                          'option "numericSeparator", if provided, must be `true` or `false`'
                        );
                      var C = s.numericSeparator;
                      if (void 0 === t) return "undefined";
                      if (null === t) return "null";
                      if ("boolean" == typeof t) return t ? "true" : "false";
                      if ("string" == typeof t) return $(t, s);
                      if ("number" == typeof t) {
                        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                        var E = String(t);
                        return C ? j(t, E) : E;
                      }
                      if ("bigint" == typeof t) {
                        var A = String(t) + "n";
                        return C ? j(t, A) : A;
                      }
                      var I = void 0 === s.depth ? 5 : s.depth;
                      if (
                        (void 0 === o && (o = 0),
                        o >= I && I > 0 && "object" == l(t))
                      )
                        return B(t) ? "[Array]" : "[Object]";
                      var R,
                        q = (function (e, t) {
                          var n;
                          if ("\t" === e.indent) n = "\t";
                          else {
                            if (!("number" == typeof e.indent && e.indent > 0))
                              return null;
                            n = T.call(Array(e.indent + 1), " ");
                          }
                          return { base: n, prev: T.call(Array(t + 1), n) };
                        })(s, o);
                      if (void 0 === c) c = [];
                      else if (z(c, t) >= 0) return "[Circular]";
                      function Y(t, n, r) {
                        if ((n && (c = k.call(c)).push(n), r)) {
                          var a = { depth: s.depth };
                          return (
                            H(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle),
                            e(t, a, o + 1, c)
                          );
                        }
                        return e(t, s, o + 1, c);
                      }
                      if ("function" == typeof t && !_(t)) {
                        var te = (function (e) {
                            if (e.name) return e.name;
                            var t = g.call(v.call(e), /^function\s*([\w$]+)/);
                            return t ? t[1] : null;
                          })(t),
                          ne = ee(t, Y);
                        return (
                          "[Function" +
                          (te ? ": " + te : " (anonymous)") +
                          "]" +
                          (ne.length > 0 ? " { " + T.call(ne, ", ") + " }" : "")
                        );
                      }
                      if (K(t)) {
                        var re = M
                          ? S.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
                          : D.call(t);
                        return "object" != l(t) || M ? re : J(re);
                      }
                      if (
                        (R = t) &&
                        "object" == l(R) &&
                        (("undefined" != typeof HTMLElement &&
                          R instanceof HTMLElement) ||
                          ("string" == typeof R.nodeName &&
                            "function" == typeof R.getAttribute))
                      ) {
                        for (
                          var oe = "<" + w.call(String(t.nodeName)),
                            ae = t.attributes || [],
                            ie = 0;
                          ie < ae.length;
                          ie++
                        )
                          oe +=
                            " " +
                            ae[ie].name +
                            "=" +
                            L(W(ae[ie].value), "double", s);
                        return (
                          (oe += ">"),
                          t.childNodes && t.childNodes.length && (oe += "..."),
                          oe + "</" + w.call(String(t.nodeName)) + ">"
                        );
                      }
                      if (B(t)) {
                        if (0 === t.length) return "[]";
                        var le = ee(t, Y);
                        return q &&
                          !(function (e) {
                            for (var t = 0; t < e.length; t++)
                              if (z(e[t], "\n") >= 0) return !1;
                            return !0;
                          })(le)
                          ? "[" + Z(le, q) + "]"
                          : "[ " + T.call(le, ", ") + " ]";
                      }
                      if (
                        (function (e) {
                          return !(
                            "[object Error]" !== G(e) ||
                            (N && "object" == l(e) && N in e)
                          );
                        })(t)
                      ) {
                        var ce = ee(t, Y);
                        return "cause" in Error.prototype ||
                          !("cause" in t) ||
                          O.call(t, "cause")
                          ? 0 === ce.length
                            ? "[" + String(t) + "]"
                            : "{ [" + String(t) + "] " + T.call(ce, ", ") + " }"
                          : "{ [" +
                              String(t) +
                              "] " +
                              T.call(
                                P.call("[cause]: " + Y(t.cause), ce),
                                ", "
                              ) +
                              " }";
                      }
                      if ("object" == l(t) && h) {
                        if (F && "function" == typeof t[F] && V)
                          return V(t, { depth: I - o });
                        if ("symbol" !== h && "function" == typeof t.inspect)
                          return t.inspect();
                      }
                      if (
                        (function (e) {
                          if (!a || !e || "object" != l(e)) return !1;
                          try {
                            a.call(e);
                            try {
                              u.call(e);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof Map;
                          } catch (e) {}
                          return !1;
                        })(t)
                      ) {
                        var se = [];
                        return (
                          i &&
                            i.call(t, function (e, n) {
                              se.push(Y(n, t, !0) + " => " + Y(e, t));
                            }),
                          Q("Map", a.call(t), se, q)
                        );
                      }
                      if (
                        (function (e) {
                          if (!u || !e || "object" != l(e)) return !1;
                          try {
                            u.call(e);
                            try {
                              a.call(e);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof Set;
                          } catch (e) {}
                          return !1;
                        })(t)
                      ) {
                        var ue = [];
                        return (
                          d &&
                            d.call(t, function (e) {
                              ue.push(Y(e, t));
                            }),
                          Q("Set", u.call(t), ue, q)
                        );
                      }
                      if (
                        (function (e) {
                          if (!f || !e || "object" != l(e)) return !1;
                          try {
                            f.call(e, f);
                            try {
                              p.call(e, p);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof WeakMap;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return X("WeakMap");
                      if (
                        (function (e) {
                          if (!p || !e || "object" != l(e)) return !1;
                          try {
                            p.call(e, p);
                            try {
                              f.call(e, f);
                            } catch (e) {
                              return !0;
                            }
                            return e instanceof WeakSet;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return X("WeakSet");
                      if (
                        (function (e) {
                          if (!y || !e || "object" != l(e)) return !1;
                          try {
                            return y.call(e), !0;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return X("WeakRef");
                      if (
                        (function (e) {
                          return !(
                            "[object Number]" !== G(e) ||
                            (N && "object" == l(e) && N in e)
                          );
                        })(t)
                      )
                        return J(Y(Number(t)));
                      if (
                        (function (e) {
                          if (!e || "object" != l(e) || !x) return !1;
                          try {
                            return x.call(e), !0;
                          } catch (e) {}
                          return !1;
                        })(t)
                      )
                        return J(Y(x.call(t)));
                      if (
                        (function (e) {
                          return !(
                            "[object Boolean]" !== G(e) ||
                            (N && "object" == l(e) && N in e)
                          );
                        })(t)
                      )
                        return J(m.call(t));
                      if (
                        (function (e) {
                          return !(
                            "[object String]" !== G(e) ||
                            (N && "object" == l(e) && N in e)
                          );
                        })(t)
                      )
                        return J(Y(String(t)));
                      if ("undefined" != typeof window && t === window)
                        return "{ [object Window] }";
                      if (t === n.g) return "{ [object globalThis] }";
                      if (
                        !(function (e) {
                          return !(
                            "[object Date]" !== G(e) ||
                            (N && "object" == l(e) && N in e)
                          );
                        })(t) &&
                        !_(t)
                      ) {
                        var de = ee(t, Y),
                          fe = U
                            ? U(t) === Object.prototype
                            : t instanceof Object || t.constructor === Object,
                          pe = t instanceof Object ? "" : "null prototype",
                          ye =
                            !fe && N && Object(t) === t && N in t
                              ? b.call(G(t), 8, -1)
                              : pe
                              ? "Object"
                              : "",
                          me =
                            (fe || "function" != typeof t.constructor
                              ? ""
                              : t.constructor.name
                              ? t.constructor.name + " "
                              : "") +
                            (ye || pe
                              ? "[" +
                                T.call(P.call([], ye || [], pe || []), ": ") +
                                "] "
                              : "");
                        return 0 === de.length
                          ? me + "{}"
                          : q
                          ? me + "{" + Z(de, q) + "}"
                          : me + "{ " + T.call(de, ", ") + " }";
                      }
                      return String(t);
                    };
                    var q =
                      Object.prototype.hasOwnProperty ||
                      function (e) {
                        return e in this;
                      };
                    function H(e, t) {
                      return q.call(e, t);
                    }
                    function G(e) {
                      return h.call(e);
                    }
                    function z(e, t) {
                      if (e.indexOf) return e.indexOf(t);
                      for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                      return -1;
                    }
                    function $(e, t) {
                      if (e.length > t.maxStringLength) {
                        var n = e.length - t.maxStringLength,
                          r =
                            "... " + n + " more character" + (n > 1 ? "s" : "");
                        return $(b.call(e, 0, t.maxStringLength), t) + r;
                      }
                      return L(
                        S.call(
                          S.call(e, /(['\\])/g, "\\$1"),
                          /[\x00-\x1f]/g,
                          Y
                        ),
                        "single",
                        t
                      );
                    }
                    function Y(e) {
                      var t = e.charCodeAt(0),
                        n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
                      return n
                        ? "\\" + n
                        : "\\x" + (t < 16 ? "0" : "") + C.call(t.toString(16));
                    }
                    function J(e) {
                      return "Object(" + e + ")";
                    }
                    function X(e) {
                      return e + " { ? }";
                    }
                    function Q(e, t, n, r) {
                      return (
                        e +
                        " (" +
                        t +
                        ") {" +
                        (r ? Z(n, r) : T.call(n, ", ")) +
                        "}"
                      );
                    }
                    function Z(e, t) {
                      if (0 === e.length) return "";
                      var n = "\n" + t.prev + t.base;
                      return n + T.call(e, "," + n) + "\n" + t.prev;
                    }
                    function ee(e, t) {
                      var n = B(e),
                        r = [];
                      if (n) {
                        r.length = e.length;
                        for (var o = 0; o < e.length; o++)
                          r[o] = H(e, o) ? t(e[o], e) : "";
                      }
                      var a,
                        i = "function" == typeof I ? I(e) : [];
                      if (M) {
                        a = {};
                        for (var l = 0; l < i.length; l++) a["$" + i[l]] = i[l];
                      }
                      for (var c in e)
                        H(e, c) &&
                          ((n && String(Number(c)) === c && c < e.length) ||
                            (M && a["$" + c] instanceof Symbol) ||
                            (E.call(/[^\w$]/, c)
                              ? r.push(t(c, e) + ": " + t(e[c], e))
                              : r.push(c + ": " + t(e[c], e))));
                      if ("function" == typeof I)
                        for (var s = 0; s < i.length; s++)
                          O.call(e, i[s]) &&
                            r.push("[" + t(i[s]) + "]: " + t(e[i[s]], e));
                      return r;
                    }
                  },
                  647: function (e) {
                    "use strict";
                    var t = String.prototype.replace,
                      n = /%20/g,
                      r = "RFC3986";
                    e.exports = {
                      default: r,
                      formatters: {
                        RFC1738: function (e) {
                          return t.call(e, n, "+");
                        },
                        RFC3986: function (e) {
                          return String(e);
                        },
                      },
                      RFC1738: "RFC1738",
                      RFC3986: r,
                    };
                  },
                  882: function (e, t, n) {
                    "use strict";
                    var r = n(402),
                      o = n(662),
                      a = n(647),
                      i = Object.prototype.hasOwnProperty,
                      c = {
                        brackets: function (e) {
                          return e + "[]";
                        },
                        comma: "comma",
                        indices: function (e, t) {
                          return e + "[" + t + "]";
                        },
                        repeat: function (e) {
                          return e;
                        },
                      },
                      s = Array.isArray,
                      u = Array.prototype.push,
                      d = function (e, t) {
                        u.apply(e, s(t) ? t : [t]);
                      },
                      f = Date.prototype.toISOString,
                      p = a.default,
                      y = {
                        addQueryPrefix: !1,
                        allowDots: !1,
                        allowEmptyArrays: !1,
                        arrayFormat: "indices",
                        charset: "utf-8",
                        charsetSentinel: !1,
                        commaRoundTrip: !1,
                        delimiter: "&",
                        encode: !0,
                        encodeDotInKeys: !1,
                        encoder: o.encode,
                        encodeValuesOnly: !1,
                        filter: void 0,
                        format: p,
                        formatter: a.formatters[p],
                        indices: !1,
                        serializeDate: function (e) {
                          return f.call(e);
                        },
                        skipNulls: !1,
                        strictNullHandling: !1,
                      },
                      m = {},
                      h = function e(
                        t,
                        n,
                        a,
                        i,
                        c,
                        u,
                        f,
                        p,
                        h,
                        v,
                        g,
                        b,
                        S,
                        C,
                        w,
                        E,
                        P,
                        T
                      ) {
                        for (
                          var k, A = t, x = T, I = 0, D = !1;
                          void 0 !== (x = x.get(m)) && !D;

                        ) {
                          var M = x.get(t);
                          if (((I += 1), void 0 !== M)) {
                            if (M === I)
                              throw new RangeError("Cyclic object value");
                            D = !0;
                          }
                          void 0 === x.get(m) && (I = 0);
                        }
                        if (
                          ("function" == typeof v
                            ? (A = v(n, A))
                            : A instanceof Date
                            ? (A = S(A))
                            : "comma" === a &&
                              s(A) &&
                              (A = o.maybeMap(A, function (e) {
                                return e instanceof Date ? S(e) : e;
                              })),
                          null === A)
                        ) {
                          if (u)
                            return h && !E ? h(n, y.encoder, P, "key", C) : n;
                          A = "";
                        }
                        if (
                          "string" == typeof (k = A) ||
                          "number" == typeof k ||
                          "boolean" == typeof k ||
                          "symbol" == l(k) ||
                          "bigint" == typeof k ||
                          o.isBuffer(A)
                        )
                          return h
                            ? [
                                w(E ? n : h(n, y.encoder, P, "key", C)) +
                                  "=" +
                                  w(h(A, y.encoder, P, "value", C)),
                              ]
                            : [w(n) + "=" + w(String(A))];
                        var N,
                          O = [];
                        if (void 0 === A) return O;
                        if ("comma" === a && s(A))
                          E && h && (A = o.maybeMap(A, h)),
                            (N = [
                              {
                                value:
                                  A.length > 0 ? A.join(",") || null : void 0,
                              },
                            ]);
                        else if (s(v)) N = v;
                        else {
                          var U = Object.keys(A);
                          N = g ? U.sort(g) : U;
                        }
                        var j = p ? String(n).replace(/\./g, "%2E") : String(n),
                          V = i && s(A) && 1 === A.length ? j + "[]" : j;
                        if (c && s(A) && 0 === A.length) return V + "[]";
                        for (var R = 0; R < N.length; ++R) {
                          var F = N[R],
                            L =
                              "object" == l(F) && F && void 0 !== F.value
                                ? F.value
                                : A[F];
                          if (!f || null !== L) {
                            var W =
                                b && p
                                  ? String(F).replace(/\./g, "%2E")
                                  : String(F),
                              B = s(A)
                                ? "function" == typeof a
                                  ? a(V, W)
                                  : V
                                : V + (b ? "." + W : "[" + W + "]");
                            T.set(t, I);
                            var _ = r();
                            _.set(m, T),
                              d(
                                O,
                                e(
                                  L,
                                  B,
                                  a,
                                  i,
                                  c,
                                  u,
                                  f,
                                  p,
                                  "comma" === a && E && s(A) ? null : h,
                                  v,
                                  g,
                                  b,
                                  S,
                                  C,
                                  w,
                                  E,
                                  P,
                                  _
                                )
                              );
                          }
                        }
                        return O;
                      };
                    e.exports = function (e, t) {
                      var n,
                        o = e,
                        u = (function (e) {
                          if (!e) return y;
                          if (
                            void 0 !== e.allowEmptyArrays &&
                            "boolean" != typeof e.allowEmptyArrays
                          )
                            throw new TypeError(
                              "`allowEmptyArrays` option can only be `true` or `false`, when provided"
                            );
                          if (
                            void 0 !== e.encodeDotInKeys &&
                            "boolean" != typeof e.encodeDotInKeys
                          )
                            throw new TypeError(
                              "`encodeDotInKeys` option can only be `true` or `false`, when provided"
                            );
                          if (
                            null !== e.encoder &&
                            void 0 !== e.encoder &&
                            "function" != typeof e.encoder
                          )
                            throw new TypeError(
                              "Encoder has to be a function."
                            );
                          var t = e.charset || y.charset;
                          if (
                            void 0 !== e.charset &&
                            "utf-8" !== e.charset &&
                            "iso-8859-1" !== e.charset
                          )
                            throw new TypeError(
                              "The charset option must be either utf-8, iso-8859-1, or undefined"
                            );
                          var n = a.default;
                          if (void 0 !== e.format) {
                            if (!i.call(a.formatters, e.format))
                              throw new TypeError(
                                "Unknown format option provided."
                              );
                            n = e.format;
                          }
                          var r,
                            o = a.formatters[n],
                            l = y.filter;
                          if (
                            (("function" == typeof e.filter || s(e.filter)) &&
                              (l = e.filter),
                            (r =
                              e.arrayFormat in c
                                ? e.arrayFormat
                                : "indices" in e
                                ? e.indices
                                  ? "indices"
                                  : "repeat"
                                : y.arrayFormat),
                            "commaRoundTrip" in e &&
                              "boolean" != typeof e.commaRoundTrip)
                          )
                            throw new TypeError(
                              "`commaRoundTrip` must be a boolean, or absent"
                            );
                          var u =
                            void 0 === e.allowDots
                              ? !0 === e.encodeDotInKeys || y.allowDots
                              : !!e.allowDots;
                          return {
                            addQueryPrefix:
                              "boolean" == typeof e.addQueryPrefix
                                ? e.addQueryPrefix
                                : y.addQueryPrefix,
                            allowDots: u,
                            allowEmptyArrays:
                              "boolean" == typeof e.allowEmptyArrays
                                ? !!e.allowEmptyArrays
                                : y.allowEmptyArrays,
                            arrayFormat: r,
                            charset: t,
                            charsetSentinel:
                              "boolean" == typeof e.charsetSentinel
                                ? e.charsetSentinel
                                : y.charsetSentinel,
                            commaRoundTrip: !!e.commaRoundTrip,
                            delimiter:
                              void 0 === e.delimiter
                                ? y.delimiter
                                : e.delimiter,
                            encode:
                              "boolean" == typeof e.encode
                                ? e.encode
                                : y.encode,
                            encodeDotInKeys:
                              "boolean" == typeof e.encodeDotInKeys
                                ? e.encodeDotInKeys
                                : y.encodeDotInKeys,
                            encoder:
                              "function" == typeof e.encoder
                                ? e.encoder
                                : y.encoder,
                            encodeValuesOnly:
                              "boolean" == typeof e.encodeValuesOnly
                                ? e.encodeValuesOnly
                                : y.encodeValuesOnly,
                            filter: l,
                            format: n,
                            formatter: o,
                            serializeDate:
                              "function" == typeof e.serializeDate
                                ? e.serializeDate
                                : y.serializeDate,
                            skipNulls:
                              "boolean" == typeof e.skipNulls
                                ? e.skipNulls
                                : y.skipNulls,
                            sort: "function" == typeof e.sort ? e.sort : null,
                            strictNullHandling:
                              "boolean" == typeof e.strictNullHandling
                                ? e.strictNullHandling
                                : y.strictNullHandling,
                          };
                        })(t);
                      "function" == typeof u.filter
                        ? (o = (0, u.filter)("", o))
                        : s(u.filter) && (n = u.filter);
                      var f = [];
                      if ("object" != l(o) || null === o) return "";
                      var p = c[u.arrayFormat],
                        m = "comma" === p && u.commaRoundTrip;
                      n || (n = Object.keys(o)), u.sort && n.sort(u.sort);
                      for (var v = r(), g = 0; g < n.length; ++g) {
                        var b = n[g],
                          S = o[b];
                        (u.skipNulls && null === S) ||
                          d(
                            f,
                            h(
                              S,
                              b,
                              p,
                              m,
                              u.allowEmptyArrays,
                              u.strictNullHandling,
                              u.skipNulls,
                              u.encodeDotInKeys,
                              u.encode ? u.encoder : null,
                              u.filter,
                              u.sort,
                              u.allowDots,
                              u.serializeDate,
                              u.format,
                              u.formatter,
                              u.encodeValuesOnly,
                              u.charset,
                              v
                            )
                          );
                      }
                      var C = f.join(u.delimiter),
                        w = !0 === u.addQueryPrefix ? "?" : "";
                      return (
                        u.charsetSentinel &&
                          ("iso-8859-1" === u.charset
                            ? (w += "utf8=%26%2310003%3B&")
                            : (w += "utf8=%E2%9C%93&")),
                        C.length > 0 ? w + C : ""
                      );
                    };
                  },
                  662: function (e, t, n) {
                    "use strict";
                    var r = n(647),
                      o = Object.prototype.hasOwnProperty,
                      a = Array.isArray,
                      i = (function () {
                        for (var e = [], t = 0; t < 256; ++t)
                          e.push(
                            "%" +
                              (
                                (t < 16 ? "0" : "") + t.toString(16)
                              ).toUpperCase()
                          );
                        return e;
                      })(),
                      c = function (e, t) {
                        for (
                          var n =
                              t && t.plainObjects ? { __proto__: null } : {},
                            r = 0;
                          r < e.length;
                          ++r
                        )
                          void 0 !== e[r] && (n[r] = e[r]);
                        return n;
                      },
                      s = 1024;
                    e.exports = {
                      arrayToObject: c,
                      assign: function (e, t) {
                        return Object.keys(t).reduce(function (e, n) {
                          return (e[n] = t[n]), e;
                        }, e);
                      },
                      combine: function (e, t) {
                        return [].concat(e, t);
                      },
                      compact: function (e) {
                        for (
                          var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0;
                          r < t.length;
                          ++r
                        )
                          for (
                            var o = t[r],
                              i = o.obj[o.prop],
                              c = Object.keys(i),
                              s = 0;
                            s < c.length;
                            ++s
                          ) {
                            var u = c[s],
                              d = i[u];
                            "object" == l(d) &&
                              null !== d &&
                              -1 === n.indexOf(d) &&
                              (t.push({ obj: i, prop: u }), n.push(d));
                          }
                        return (
                          (function (e) {
                            for (; e.length > 1; ) {
                              var t = e.pop(),
                                n = t.obj[t.prop];
                              if (a(n)) {
                                for (var r = [], o = 0; o < n.length; ++o)
                                  void 0 !== n[o] && r.push(n[o]);
                                t.obj[t.prop] = r;
                              }
                            }
                          })(t),
                          e
                        );
                      },
                      decode: function (e, t, n) {
                        var r = e.replace(/\+/g, " ");
                        if ("iso-8859-1" === n)
                          return r.replace(/%[0-9a-f]{2}/gi, unescape);
                        try {
                          return decodeURIComponent(r);
                        } catch (e) {
                          return r;
                        }
                      },
                      encode: function (e, t, n, o, a) {
                        if (0 === e.length) return e;
                        var c = e;
                        if (
                          ("symbol" == l(e)
                            ? (c = Symbol.prototype.toString.call(e))
                            : "string" != typeof e && (c = String(e)),
                          "iso-8859-1" === n)
                        )
                          return escape(c).replace(
                            /%u[0-9a-f]{4}/gi,
                            function (e) {
                              return (
                                "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                              );
                            }
                          );
                        for (var u = "", d = 0; d < c.length; d += s) {
                          for (
                            var f = c.length >= s ? c.slice(d, d + s) : c,
                              p = [],
                              y = 0;
                            y < f.length;
                            ++y
                          ) {
                            var m = f.charCodeAt(y);
                            45 === m ||
                            46 === m ||
                            95 === m ||
                            126 === m ||
                            (m >= 48 && m <= 57) ||
                            (m >= 65 && m <= 90) ||
                            (m >= 97 && m <= 122) ||
                            (a === r.RFC1738 && (40 === m || 41 === m))
                              ? (p[p.length] = f.charAt(y))
                              : m < 128
                              ? (p[p.length] = i[m])
                              : m < 2048
                              ? (p[p.length] =
                                  i[192 | (m >> 6)] + i[128 | (63 & m)])
                              : m < 55296 || m >= 57344
                              ? (p[p.length] =
                                  i[224 | (m >> 12)] +
                                  i[128 | ((m >> 6) & 63)] +
                                  i[128 | (63 & m)])
                              : ((y += 1),
                                (m =
                                  65536 +
                                  (((1023 & m) << 10) |
                                    (1023 & f.charCodeAt(y)))),
                                (p[p.length] =
                                  i[240 | (m >> 18)] +
                                  i[128 | ((m >> 12) & 63)] +
                                  i[128 | ((m >> 6) & 63)] +
                                  i[128 | (63 & m)]));
                          }
                          u += p.join("");
                        }
                        return u;
                      },
                      isBuffer: function (e) {
                        return !(
                          !e ||
                          "object" != l(e) ||
                          !(
                            e.constructor &&
                            e.constructor.isBuffer &&
                            e.constructor.isBuffer(e)
                          )
                        );
                      },
                      isRegExp: function (e) {
                        return (
                          "[object RegExp]" ===
                          Object.prototype.toString.call(e)
                        );
                      },
                      maybeMap: function (e, t) {
                        if (a(e)) {
                          for (var n = [], r = 0; r < e.length; r += 1)
                            n.push(t(e[r]));
                          return n;
                        }
                        return t(e);
                      },
                      merge: function e(t, n, r) {
                        if (!n) return t;
                        if ("object" != l(n) && "function" != typeof n) {
                          if (a(t)) t.push(n);
                          else {
                            if (!t || "object" != l(t)) return [t, n];
                            ((r && (r.plainObjects || r.allowPrototypes)) ||
                              !o.call(Object.prototype, n)) &&
                              (t[n] = !0);
                          }
                          return t;
                        }
                        if (!t || "object" != l(t)) return [t].concat(n);
                        var i = t;
                        return (
                          a(t) && !a(n) && (i = c(t, r)),
                          a(t) && a(n)
                            ? (n.forEach(function (n, a) {
                                if (o.call(t, a)) {
                                  var i = t[a];
                                  i && "object" == l(i) && n && "object" == l(n)
                                    ? (t[a] = e(i, n, r))
                                    : t.push(n);
                                } else t[a] = n;
                              }),
                              t)
                            : Object.keys(n).reduce(function (t, a) {
                                var i = n[a];
                                return (
                                  o.call(t, a)
                                    ? (t[a] = e(t[a], i, r))
                                    : (t[a] = i),
                                  t
                                );
                              }, i)
                        );
                      },
                    };
                  },
                  255: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(295),
                      a = n(890)(),
                      i = n(109),
                      l = n(785),
                      c = r("%Math.floor%");
                    e.exports = function (e, t) {
                      if ("function" != typeof e)
                        throw new l("`fn` is not a function");
                      if (
                        "number" != typeof t ||
                        t < 0 ||
                        t > 4294967295 ||
                        c(t) !== t
                      )
                        throw new l(
                          "`length` must be a positive 32-bit integer"
                        );
                      var n = arguments.length > 2 && !!arguments[2],
                        r = !0,
                        s = !0;
                      if ("length" in e && i) {
                        var u = i(e, "length");
                        u && !u.configurable && (r = !1),
                          u && !u.writable && (s = !1);
                      }
                      return (
                        (r || s || !n) &&
                          (a ? o(e, "length", t, !0, !0) : o(e, "length", t)),
                        e
                      );
                    };
                  },
                  402: function (e, t, n) {
                    "use strict";
                    var r = n(651),
                      o = n(913),
                      a = n(937),
                      i = n(785),
                      c = r("%WeakMap%", !0),
                      s = r("%Map%", !0),
                      u = o("WeakMap.prototype.get", !0),
                      d = o("WeakMap.prototype.set", !0),
                      f = o("WeakMap.prototype.has", !0),
                      p = o("Map.prototype.get", !0),
                      y = o("Map.prototype.set", !0),
                      m = o("Map.prototype.has", !0),
                      h = function (e, t) {
                        for (var n, r = e; null !== (n = r.next); r = n)
                          if (n.key === t)
                            return (
                              (r.next = n.next),
                              (n.next = e.next),
                              (e.next = n),
                              n
                            );
                      };
                    e.exports = function () {
                      var e,
                        t,
                        n,
                        r = {
                          assert: function (e) {
                            if (!r.has(e))
                              throw new i(
                                "Side channel does not contain " + a(e)
                              );
                          },
                          get: function (r) {
                            if (
                              c &&
                              r &&
                              ("object" == l(r) || "function" == typeof r)
                            ) {
                              if (e) return u(e, r);
                            } else if (s) {
                              if (t) return p(t, r);
                            } else if (n)
                              return (function (e, t) {
                                var n = h(e, t);
                                return n && n.value;
                              })(n, r);
                          },
                          has: function (r) {
                            if (
                              c &&
                              r &&
                              ("object" == l(r) || "function" == typeof r)
                            ) {
                              if (e) return f(e, r);
                            } else if (s) {
                              if (t) return m(t, r);
                            } else if (n)
                              return (function (e, t) {
                                return !!h(e, t);
                              })(n, r);
                            return !1;
                          },
                          set: function (r, o) {
                            c &&
                            r &&
                            ("object" == l(r) || "function" == typeof r)
                              ? (e || (e = new c()), d(e, r, o))
                              : s
                              ? (t || (t = new s()), y(t, r, o))
                              : (n || (n = { key: {}, next: null }),
                                (function (e, t, n) {
                                  var r = h(e, t);
                                  r
                                    ? (r.value = n)
                                    : (e.next = {
                                        key: t,
                                        next: e.next,
                                        value: n,
                                      });
                                })(n, r, o));
                          },
                        };
                      return r;
                    };
                  },
                  634: function () {},
                },
                t = {};
              function n(r) {
                var o = t[r];
                if (void 0 !== o) return o.exports;
                var a = (t[r] = { exports: {} });
                return e[r](a, a.exports, n), a.exports;
              }
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, { a: t }), t;
              }),
                (n.d = function (e, t) {
                  for (var r in t)
                    n.o(t, r) &&
                      !n.o(e, r) &&
                      Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r],
                      });
                }),
                (n.g = (function () {
                  if (
                    "object" ==
                    ("undefined" == typeof globalThis
                      ? "undefined"
                      : l(globalThis))
                  )
                    return globalThis;
                  try {
                    return this || new Function("return this")();
                  } catch (e) {
                    if (
                      "object" ==
                      ("undefined" == typeof window ? "undefined" : l(window))
                    )
                      return window;
                  }
                })()),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                });
              var r = {};
              return (
                (function () {
                  "use strict";
                  n.d(r, {
                    default: function () {
                      return P;
                    },
                  });
                  var e,
                    t,
                    o,
                    a = n(882),
                    i = n.n(a);
                  function l(e) {
                    switch (e) {
                      case "development":
                        return o.Development;
                      case "staging":
                        return o.Staging;
                      case "canary":
                        return o.Canary;
                      default:
                        return o.Production;
                    }
                  }
                  !(function (e) {
                    (e.Cancel = "exit"),
                      (e.Complete = "complete"),
                      (e.Error = "error"),
                      (e.Fail = "fail"),
                      (e.Load = "load"),
                      (e.Ready = "ready"),
                      (e.Start = "start"),
                      (e.Success = "success"),
                      (e.DocumentCameraSelect = "document-camera-select"),
                      (e.DocumentCameraCapture = "document-camera-capture"),
                      (e.DocumentUpload = "document-upload"),
                      (e.OneTimeLinkSent = "one-time-link-sent"),
                      (e.OneTimeLinkStart = "one-time-link-start"),
                      (e.OneTimeLinkExit = "one-time-link-exit"),
                      (e.SelfieCameraSelect = "selfie-camera-select"),
                      (e.SelfieCameraCapture = "selfie-camera-capture"),
                      (e.SelfieRecordUpload = "selfie-record-upload"),
                      (e.LoadCameraFailed = "load-camera-failed"),
                      (e.PageChange = "page-change"),
                      (e.InquiryLoad = "inquiry-load"),
                      (e.CountrySelect = "country-select"),
                      (e.VerificationChange = "verification-change");
                  })(e || (e = {})),
                    (function (e) {
                      (e.Open = "open"),
                        (e.Exit = "exit"),
                        (e.Destroy = "destroy");
                    })(t || (t = {})),
                    (function (e) {
                      (e.Development = "http://localhost:3000"),
                        (e.Staging = "https://inquiry.withpersona-staging.com"),
                        (e.Canary = "https://canary.withpersona.com"),
                        (e.Production = "https://inquiry.withpersona.com");
                    })(o || (o = {}));
                  var c = n(709),
                    s = n.n(c),
                    u = function () {
                      return (
                        (u =
                          Object.assign ||
                          function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                              for (var o in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, o) &&
                                  (e[o] = t[o]);
                            return e;
                          }),
                        u.apply(this, arguments)
                      );
                    };
                  function d(e) {
                    return Array.isArray(e)
                      ? e.map(d)
                      : (function (e) {
                          return null != e && e.constructor === Object;
                        })(e)
                      ? Object.keys(e).reduce(function (t, n) {
                          var r;
                          return u(u({}, t), (((r = {})[s()(n)] = d(e[n])), r));
                        }, {})
                      : e;
                  }
                  var f = function (e) {
                      var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                      if (n) return n.call(e);
                      if (e && "number" == typeof e.length)
                        return {
                          next: function () {
                            return (
                              e && r >= e.length && (e = void 0),
                              { value: e && e[r++], done: !e }
                            );
                          },
                        };
                      throw new TypeError(
                        t
                          ? "Object is not iterable."
                          : "Symbol.iterator is not defined."
                      );
                    },
                    p = function (e, t) {
                      var n = "function" == typeof Symbol && e[Symbol.iterator];
                      if (!n) return e;
                      var r,
                        o,
                        a = n.call(e),
                        i = [];
                      try {
                        for (
                          ;
                          (void 0 === t || t-- > 0) && !(r = a.next()).done;

                        )
                          i.push(r.value);
                      } catch (e) {
                        o = { error: e };
                      } finally {
                        try {
                          r && !r.done && (n = a.return) && n.call(a);
                        } finally {
                          if (o) throw o.error;
                        }
                      }
                      return i;
                    },
                    y = (function () {
                      function e(e) {
                        this.id = e;
                      }
                      return (
                        (e.prototype.isMounted = function () {
                          return null != document.getElementById(this.id);
                        }),
                        (e.prototype.mount = function (e) {
                          if (document.getElementById(this.id))
                            console.warn(
                              "persona: stylesheet ".concat(
                                this.id,
                                " already appended. skipping."
                              )
                            );
                          else {
                            var t = h("style", { id: this.id }, [
                              document.createTextNode(e),
                            ]);
                            document.head.appendChild(t);
                          }
                        }),
                        (e.prototype.unmount = function () {
                          var e,
                            t = document.getElementById(this.id);
                          null != t
                            ? null === (e = t.parentNode) ||
                              void 0 === e ||
                              e.removeChild(t)
                            : console.warn(
                                "persona: no stylesheet ".concat(
                                  this.id,
                                  " to remove. skipping."
                                )
                              );
                        }),
                        e
                      );
                    })();
                  function m(e, t, n) {
                    var r, o, a, i;
                    void 0 === n && (n = []);
                    var l = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    try {
                      for (
                        var c = f(Object.entries(t)), s = c.next();
                        !s.done;
                        s = c.next()
                      ) {
                        var u = p(s.value, 2),
                          d = u[0],
                          y = u[1];
                        "className" === d && (d = "class"),
                          l.setAttribute(d, y);
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        s && !s.done && (o = c.return) && o.call(c);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    try {
                      for (var m = f(n), h = m.next(); !h.done; h = m.next()) {
                        var v = h.value;
                        !1 !== v && l.appendChild(v);
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        h && !h.done && (i = m.return) && i.call(m);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    return l;
                  }
                  function h(e, t, n) {
                    var r, o, a, i;
                    void 0 === n && (n = []);
                    var l = document.createElement(e);
                    try {
                      for (
                        var c = f(Object.entries(t)), s = c.next();
                        !s.done;
                        s = c.next()
                      ) {
                        var u = p(s.value, 2),
                          d = u[0],
                          y = u[1];
                        "className" === d && (d = "class"),
                          l.setAttribute(d, y);
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        s && !s.done && (o = c.return) && o.call(c);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    try {
                      for (var m = f(n), h = m.next(); !h.done; h = m.next()) {
                        var v = h.value;
                        !1 !== v &&
                          ("string" == typeof v
                            ? l.appendChild(document.createTextNode(v))
                            : l.appendChild(v));
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        h && !h.done && (i = m.return) && i.call(m);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    return l;
                  }
                  function v(e) {
                    return "string" == typeof e
                      ? e
                      : "number" == typeof e
                      ? "".concat(e, "px")
                      : "";
                  }
                  var g = [
                      "allow-scripts",
                      "allow-same-origin",
                      "allow-popups",
                    ],
                    b = [
                      "allow-forms",
                      "allow-modals",
                      "allow-top-navigation-by-user-activation",
                    ];
                  function S(e, t, n, r) {
                    var o = r.accountId,
                      a = r.accountTypeId,
                      c = r.environment,
                      s = r.environmentId,
                      u = r.fields,
                      f = r.frameAncestors,
                      p = r.frameHeight,
                      y = r.frameWidth,
                      m = r.host,
                      h = r.iframeTitle,
                      S = r.inquiryId,
                      C = r.language,
                      w = r.messageTargetOrigin,
                      E = r.referenceId,
                      P = r.routingCountry,
                      T = r.sandboxAttributes,
                      k = void 0 === T ? b : T,
                      A = r.sessionToken,
                      x = r.styleVariant,
                      I = r.templateId,
                      D = r.templateVersionId,
                      M = r.themeSetId,
                      N = r.widgetPadding,
                      O = !(!I && !D),
                      U = null == I ? void 0 : I.startsWith("itmpl_");
                    if (!O && !S)
                      throw new Error(
                        "Either templateId/templateVersionId or inquiryId must be specified to start a flow"
                      );
                    if (O && S)
                      throw new Error(
                        "Only one of templateId/templateVersionId or inquiryId should be specified to start a flow"
                      );
                    if (o) {
                      if (E)
                        throw new Error(
                          "Cannot pass both accountId and referenceId"
                        );
                      if (a)
                        throw new Error(
                          "Cannot pass both accountId and accountTypeId"
                        );
                    }
                    var j = l(m),
                      V = i()(
                        {
                          "client-version": "5.1.5",
                          "container-id": t,
                          "flow-type": n,
                          "routing-country": P,
                          "template-id": (U ? null : I) || null,
                          "inquiry-template-id": (U ? I : null) || null,
                          "inquiry-template-version-id": D || null,
                          environment: c,
                          "environment-id": s,
                          "iframe-origin": window.location.origin,
                          "frame-ancestors": null != f ? f : null,
                          "message-target-origin": w || null,
                          "inquiry-id": S || null,
                          language: C,
                          "session-token": A,
                          "reference-id": E,
                          "account-id": o,
                          "account-type-id": a,
                          fields: d(null != u ? u : {}),
                          "style-variant": x || null,
                          "theme-set-id": M,
                          "widget-padding": N,
                        },
                        { addQueryPrefix: !0, skipNulls: !0 }
                      );
                    return (
                      (e.style.maxHeight = v(p)),
                      (e.style.maxWidth = v(y)),
                      e.setAttribute("data-testid", "persona-widget__iframe"),
                      "embedded" === n && e.setAttribute("aria-modal", "true"),
                      (e.title = null != h ? h : "Verify your identity"),
                      (e.className = "persona-widget__iframe"),
                      (e.allow = "camera;microphone;clipboard-write"),
                      e.setAttribute("sandbox", g.concat(k).join(" ")),
                      (e.frameBorder = "0"),
                      (e.src = j + "/widget" + V),
                      (e.onload = function () {}),
                      e
                    );
                  }
                  var C = (function () {
                      function e() {}
                      return (
                        (e.log = function (e, t) {
                          void 0 === t && (t = "info");
                        }),
                        e
                      );
                    })(),
                    w = function (e) {
                      return e.split(".").slice(-2).join(".");
                    };
                  function E(t, n) {
                    var r = n.onLoad,
                      o = n.onReady,
                      a = n.onComplete,
                      i = n.onEvent,
                      c = n.onCancel,
                      s = n.onError,
                      u = n.templateId,
                      d = n.templateVersionId,
                      f = n.host,
                      p = function (n) {
                        var p,
                          y = l(null != f ? f : "production");
                        if ("" !== n.origin)
                          try {
                            if (
                              w(new URL(n.origin).host) !== w(new URL(y).host)
                            )
                              return;
                          } catch (e) {
                            return;
                          }
                        if (
                          !(
                            (u && u !== n.data.templateId) ||
                            (d && d !== n.data.templateVersionId) ||
                            (n.data.containerId && t !== n.data.containerId)
                          )
                        )
                          switch (
                            (null == i || i(n.data.name, n.data.metadata),
                            n.data.name)
                          ) {
                            case e.Load:
                              null == r || r();
                              break;
                            case e.Ready:
                              null == o || o();
                              break;
                            case e.Complete:
                            case e.Fail:
                              null == a ||
                                a({
                                  inquiryId: n.data.metadata.inquiryId,
                                  status: n.data.metadata.status,
                                  fields:
                                    null !== (p = n.data.metadata.fields) &&
                                    void 0 !== p
                                      ? p
                                      : n.data.metadata.scopes,
                                });
                              break;
                            case e.Cancel:
                              null == c ||
                                c({
                                  inquiryId: n.data.metadata.inquiryId,
                                  sessionToken: n.data.metadata.sessionToken,
                                });
                              break;
                            case e.Error:
                              null == s || s(n.data.error);
                          }
                      };
                    return (
                      window.addEventListener("message", p),
                      function () {
                        window.removeEventListener("message", p);
                      }
                    );
                  }
                  var P = {
                    Client: (function () {
                      function e(e) {
                        var t,
                          n,
                          r,
                          o,
                          a,
                          i,
                          l,
                          c,
                          s,
                          u,
                          d,
                          f = this;
                        (this._isLoading = !0),
                          (this._isOpen = !1),
                          (this.personaCSS = new y("persona-widget-styles")),
                          (this.globalCSS = new y("persona-global-styles")),
                          (this.onLoad = function () {
                            var e, t;
                            (f._isLoading = !1),
                              f.render(),
                              null === (t = (e = f.options).onLoad) ||
                                void 0 === t ||
                                t.call(e);
                          }),
                          (this.onReady = function () {
                            var e, t;
                            null === (t = (e = f.options).onReady) ||
                              void 0 === t ||
                              t.call(e);
                          }),
                          (this.onComplete = function (e) {
                            var t,
                              n,
                              r = e.inquiryId,
                              o = e.status,
                              a = e.fields;
                            (f._isOpen = !1),
                              f.render(),
                              null === (n = (t = f.options).onComplete) ||
                                void 0 === n ||
                                n.call(t, {
                                  inquiryId: r,
                                  status: o,
                                  fields: a,
                                });
                          }),
                          (this.onCancel = function (e) {
                            var t,
                              n,
                              r = e.inquiryId,
                              o = e.sessionToken;
                            (f._isOpen = !1),
                              f.render(),
                              null === (n = (t = f.options).onCancel) ||
                                void 0 === n ||
                                n.call(t, { inquiryId: r, sessionToken: o });
                          }),
                          (this.options = e),
                          (this.containerParent =
                            null !==
                              (n =
                                null !== (t = e.parent) && void 0 !== t
                                  ? t
                                  : document.body) && void 0 !== n
                              ? n
                              : document.children[0]),
                          (this.containerElement = h("div", {
                            class: "persona-widget__overlay",
                            style: "display: ".concat(
                              this._isOpen ? "block" : "none"
                            ),
                          })),
                          (this.containerId =
                            "persona-widget-" +
                            new Array(16)
                              .fill(void 0)
                              .map(function () {
                                return Math.floor(35 * Math.random()).toString(
                                  35
                                );
                              })
                              .join("")),
                          this.containerElement.setAttribute(
                            "id",
                            this.containerId
                          ),
                          (this.loadingElement = h(
                            "div",
                            { class: "persona-widget__centered-frame" },
                            [
                              m(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "114",
                                  height: "114",
                                  class: "persona-widget__loading-spinner",
                                },
                                [
                                  m("path", {
                                    fill: "none",
                                    stroke: "#0F2B72",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M25.887 10.432a56.275 56.275 0 0 0-15.455 15.455 55.86 55.86 0 0 0-5.183 9.678A55.576 55.576 0 0 0 2.066 46.07m-.8 5.438A56.678 56.678 0 0 0 1 57m4.249 21.435a55.86 55.86 0 0 0 5.183 9.678 56.275 56.275 0 0 0 6.97 8.485m8.485 6.97a55.86 55.86 0 0 0 9.678 5.183 55.576 55.576 0 0 0 10.506 3.183c3.535.7 7.19 1.066 10.929 1.066 3.74 0 7.394-.367 10.929-1.066a55.576 55.576 0 0 0 10.506-3.183 55.86 55.86 0 0 0 9.678-5.183 56.275 56.275 0 0 0 15.455-15.455 55.86 55.86 0 0 0 5.183-9.678 55.576 55.576 0 0 0 3.183-10.506A56.274 56.274 0 0 0 113 57c0-3.74-.367-7.394-1.066-10.929a55.576 55.576 0 0 0-3.183-10.506M96.598 17.402a56.275 56.275 0 0 0-8.485-6.97 55.86 55.86 0 0 0-9.678-5.183A55.576 55.576 0 0 0 67.93 2.066 56.274 56.274 0 0 0 57 1c-3.74 0-7.394.367-10.929 1.066m-34.94 30.418A51.76 51.76 0 0 0 7.225 41.9a51.633 51.633 0 0 0-1.98 10 52.63 52.63 0 0 0 .744 15.247 51.633 51.633 0 0 0 7.768 18.743 52.188 52.188 0 0 0 10.254 11.308 52.188 52.188 0 0 0 8.472 5.67m9.417 3.905a51.633 51.633 0 0 0 10 1.98 52.63 52.63 0 0 0 10.197 0 51.939 51.939 0 0 0 10-1.98 51.61 51.61 0 0 0 9.418-3.904 51.984 51.984 0 0 0 8.472-5.671m3.782-3.43a52.308 52.308 0 0 0 3.429-3.78m9.575-17.89a51.633 51.633 0 0 0 1.98-10 52.63 52.63 0 0 0-.744-15.247 51.633 51.633 0 0 0-7.768-18.743 52.188 52.188 0 0 0-10.254-11.308m-4.097-3.043a51.984 51.984 0 0 0-4.375-2.628M67.148 5.99a51.939 51.939 0 0 0-5.05-.743 52.63 52.63 0 0 0-15.246.743 51.633 51.633 0 0 0-18.743 7.768M24.012 16.8a52.308 52.308 0 0 0-3.782 3.43",
                                  }),
                                ]
                              ),
                            ]
                          )),
                          this.containerElement.append(this.loadingElement),
                          this.isLoading
                            ? (this.loadingElement.style.display = "block")
                            : (this.loadingElement.style.display = "none"),
                          (this.iframeElement =
                            document.createElement("iframe")),
                          (this.unsubscribeFromEvents = E(this.containerId, {
                            onLoad:
                              null !== (r = this.onLoad) && void 0 !== r
                                ? r
                                : null,
                            onReady:
                              null !== (o = this.onReady) && void 0 !== o
                                ? o
                                : null,
                            onComplete:
                              null !== (a = this.onComplete) && void 0 !== a
                                ? a
                                : null,
                            onCancel:
                              null !== (i = this.onCancel) && void 0 !== i
                                ? i
                                : null,
                            onEvent:
                              null !== (l = this.options.onEvent) &&
                              void 0 !== l
                                ? l
                                : null,
                            onError:
                              null !== (c = this.options.onError) &&
                              void 0 !== c
                                ? c
                                : null,
                            templateId:
                              null !== (s = this.options.templateId) &&
                              void 0 !== s
                                ? s
                                : null,
                            templateVersionId:
                              null !== (u = this.options.templateVersionId) &&
                              void 0 !== u
                                ? u
                                : null,
                            host:
                              null !== (d = this.options.host) && void 0 !== d
                                ? d
                                : null,
                          })),
                          this.containerElement.appendChild(this.iframeElement),
                          this.containerParent.appendChild(
                            this.containerElement
                          ),
                          this.personaCSS.mount(
                            "@keyframes persona-widget__fadeIn {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0;\n  }\n  to {\n    /* persona-widget__overlay opacity = 0.7 */\n    background-color: rgba(0, 0, 0, 0.7);\n    opacity: 1;\n  }\n}\n\n@keyframes persona-widget__genieSlideIn {\n  from {\n    transform: translate(-50%, -40%) scale(0.8);\n  }\n  90% {\n    transform: translate(-50%, -51%) scale(1.01);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n@keyframes persona-widget__slideDown {\n  from {\n    transform: translate(-50%, -55%);\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n\n.persona-widget__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  animation: persona-widget__fadeIn 0.3s;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.persona-widget__overlay .persona-widget__centered-frame {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  left: calc(50% - 60px);\n  top: calc(50% - 60px);\n  z-index: 9999;\n}\n\n.persona-widget__overlay .persona-widget__loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.persona-widget__overlay .persona-widget__iframe {\n  animation: persona-widget__genieSlideIn 0.3s, persona-widget__slideDown ease-out 0.3s;\n\n  width: 100%;\n  height: 100%;\n\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 12px 40px 2px rgba(0, 0, 0, 0.4);\n\n  @media only screen and (min-width: 600.02px) and (min-height: 600.02px) {\n    max-width: 400px;\n    max-height: 650px;\n  }\n}\n"
                          );
                        try {
                          this.iframeElement = S(
                            this.iframeElement,
                            this.containerId,
                            "embedded",
                            this.options
                          );
                        } catch (e) {
                          throw (
                            (console.error("Persona", e), this.destroy(), e)
                          );
                        }
                        this.render();
                      }
                      return (
                        (e.preload = function (e) {
                          return (
                            void 0 === e && (e = "production"),
                            new Promise(function (t) {
                              var n = l(e),
                                r = document.createElement("iframe");
                              (r.frameBorder = "0"),
                                (r.style.height = "0px"),
                                (r.style.width = "0px"),
                                (r.style.display = "none"),
                                (r.src = n + "/preload"),
                                document.body.appendChild(r),
                                (r.onload = function () {
                                  document.body.removeChild(r), t();
                                });
                            })
                          );
                        }),
                        (e.prototype.render = function () {
                          var e;
                          null != this.containerElement
                            ? ((this.loadingElement.style.display = this
                                .isLoading
                                ? "block"
                                : "none"),
                              (this.containerElement.style.display = this.isOpen
                                ? "block"
                                : "none"),
                              this.isOpen && !this.globalCSS.isMounted()
                                ? this.globalCSS.mount(
                                    ((e = this.containerId),
                                    "\n  /* Don't allow scrolling when widget is open */\n  html body {\n    overflow: hidden !important;\n  }\n\n  /* When the widget takes the full screen, hide everything else to prevent iOS scroll issues. */\n  @media "
                                      .concat(
                                        "(max-width: 600px), (max-height: 420px)",
                                        " {\n    html body > *:not(#"
                                      )
                                      .concat(
                                        e,
                                        ") {\n      display: none !important;\n    }\n  }\n"
                                      ))
                                  )
                                : !this.isOpen &&
                                  this.globalCSS.isMounted() &&
                                  this.globalCSS.unmount())
                            : C.log(
                                "Cannot render client that has been destroyed",
                                "error"
                              );
                        }),
                        (e.prototype.open = function () {
                          var e;
                          null === (e = this.iframeElement.contentWindow) ||
                            void 0 === e ||
                            e.postMessage(
                              { action: t.Open, metadata: {} },
                              this.baseUrl
                            ),
                            (this._isOpen = !0),
                            this.render();
                        }),
                        (e.prototype.cancel = function (e) {
                          var n;
                          null === (n = this.iframeElement.contentWindow) ||
                            void 0 === n ||
                            n.postMessage(
                              { action: t.Exit, metadata: { force: e } },
                              this.baseUrl
                            ),
                            this.render();
                        }),
                        (e.prototype.destroy = function () {
                          var e;
                          null === (e = this.iframeElement.contentWindow) ||
                            void 0 === e ||
                            e.postMessage(
                              { action: t.Destroy, metadata: {} },
                              this.baseUrl
                            ),
                            this.personaCSS.unmount(),
                            this.globalCSS.unmount(),
                            this.containerParent.removeChild(
                              this.containerElement
                            ),
                            this.unsubscribeFromEvents();
                        }),
                        Object.defineProperty(e.prototype, "isLoading", {
                          get: function () {
                            return this._isLoading;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isOpen", {
                          get: function () {
                            return this._isOpen;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "baseUrl", {
                          get: function () {
                            return l(this.options.host);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        e
                      );
                    })(),
                    setupIframe: S,
                    setupEvents: E,
                  };
                })(),
                r.default
              );
            })();
          }),
          "object" == l(t) && "object" == l(e)
            ? (e.exports = i())
            : ((o = []),
              void 0 ===
                (a = "function" == typeof (r = i) ? r.apply(t, o) : r) ||
                (e.exports = a));
      },
      870: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var a = typeof n;
                if ("string" === a || "number" === a) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = o.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === a) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      594: function (e) {
        "use strict";
        e.exports = React;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r](a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      "use strict";
      var e = n(594),
        t = n.n(e),
        r = Roblox,
        o = n.n(r),
        a = ReactDOM,
        i = CoreUtilities,
        l = "access-management-upsell-container",
        c = ReactUtilities,
        s = n(676),
        u = n(390);
      var d = function (e) {
          e();
        },
        f = function () {
          return d;
        },
        p = Symbol.for("react-redux-context"),
        y = "undefined" != typeof globalThis ? globalThis : {};
      function m() {
        var t;
        if (!e.createContext) return {};
        var n = null != (t = y[p]) ? t : (y[p] = new Map()),
          r = n.get(e.createContext);
        return r || ((r = e.createContext(null)), n.set(e.createContext, r)), r;
      }
      var h = m();
      function v() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
        return function () {
          return (0, e.useContext)(t);
        };
      }
      var g = v();
      var b = function () {
          throw new Error("uSES not initialized!");
        },
        S = function (e, t) {
          return e === t;
        };
      function C() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          n = t === h ? g : v(t);
        return function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = "function" == typeof r ? { equalityFn: r } : r,
            a = o.equalityFn,
            i = void 0 === a ? S : a,
            l = o.stabilityCheck,
            c = void 0 === l ? void 0 : l;
          o.noopCheck;
          var s,
            u,
            d,
            f = n(),
            p = f.store,
            y = f.subscription,
            m = f.getServerState,
            h = f.stabilityCheck,
            v =
              (f.noopCheck,
              (0, e.useRef)(!0),
              (0, e.useCallback)(
                ((s = {}),
                (u = t.name),
                (d = function (e) {
                  return t(e);
                }),
                u in s
                  ? Object.defineProperty(s, u, {
                      value: d,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (s[u] = d),
                s)[t.name],
                [t, h, c]
              )),
            g = b(y.addNestedSub, p.getState, m || p.getState, v, i);
          return (0, e.useDebugValue)(g), g;
        };
      }
      var w = C();
      n(56), n(625);
      var E = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function P(e, t) {
        var n,
          r = E;
        function o() {
          i.onStateChange && i.onStateChange();
        }
        function a() {
          n ||
            ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
            (r = (function () {
              var e = f(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var i = {
          addNestedSub: function (e) {
            return a(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = E));
          },
          getListeners: function () {
            return r;
          },
        };
        return i;
      }
      var T = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )
        ? e.useLayoutEffect
        : e.useEffect;
      var k = function (t) {
        var n = t.store,
          r = t.context,
          o = t.children,
          a = t.serverState,
          i = t.stabilityCheck,
          l = void 0 === i ? "once" : i,
          c = t.noopCheck,
          s = void 0 === c ? "once" : c,
          u = e.useMemo(
            function () {
              var e = P(n);
              return {
                store: n,
                subscription: e,
                getServerState: a
                  ? function () {
                      return a;
                    }
                  : void 0,
                stabilityCheck: l,
                noopCheck: s,
              };
            },
            [n, a, l, s]
          ),
          d = e.useMemo(
            function () {
              return n.getState();
            },
            [n]
          );
        T(
          function () {
            var e = u.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              d !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          },
          [u, d]
        );
        var f = r || h;
        return e.createElement(f.Provider, { value: u }, o);
      };
      function A() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          t = e === h ? g : v(e);
        return function () {
          return t().store;
        };
      }
      var x = A();
      function I() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
          t = e === h ? x : A(e);
        return function () {
          return t().dispatch;
        };
      }
      var D,
        M = I();
      !(function (e) {
        b = e;
      })(u.useSyncExternalStoreWithSelector),
        (function (e) {
          0;
        })(s.useSyncExternalStore),
        (D = a.unstable_batchedUpdates),
        (d = D);
      var N = ReactStyleGuide;
      function O(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function U(e) {
        return !!e && !!e[Ee];
      }
      function j(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === Pe)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[we] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[we]) ||
            _(e) ||
            K(e))
        );
      }
      function V(e, t, n) {
        void 0 === n && (n = !1),
          0 === R(e)
            ? (n ? Object.keys : Te)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function R(e) {
        var t = e[Ee];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : _(e)
          ? 2
          : K(e)
          ? 3
          : 0;
      }
      function F(e, t) {
        return 2 === R(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function L(e, t) {
        return 2 === R(e) ? e.get(t) : e[t];
      }
      function W(e, t, n) {
        var r = R(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function B(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function _(e) {
        return ge && e instanceof Map;
      }
      function K(e) {
        return be && e instanceof Set;
      }
      function q(e) {
        return e.o || e.t;
      }
      function H(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = ke(e);
        delete t[Ee];
        for (var n = Te(t), r = 0; r < n.length; r++) {
          var o = n[r],
            a = t[o];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[o] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[o],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function G(e, t) {
        return (
          void 0 === t && (t = !1),
          $(e) ||
            U(e) ||
            !j(e) ||
            (R(e) > 1 && (e.set = e.add = e.clear = e.delete = z),
            Object.freeze(e),
            t &&
              V(
                e,
                function (e, t) {
                  return G(t, !0);
                },
                !0
              )),
          e
        );
      }
      function z() {
        O(2);
      }
      function $(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function Y(e) {
        var t = Ae[e];
        return t || O(18, e), t;
      }
      function J(e, t) {
        Ae[e] || (Ae[e] = t);
      }
      function X() {
        return he;
      }
      function Q(e, t) {
        t && (Y("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function Z(e) {
        ee(e), e.p.forEach(ne), (e.p = null);
      }
      function ee(e) {
        e === he && (he = e.l);
      }
      function te(e) {
        return (he = { p: [], l: he, h: e, m: !0, _: 0 });
      }
      function ne(e) {
        var t = e[Ee];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function re(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.O || Y("ES5").S(t, e, r),
          r
            ? (n[Ee].P && (Z(t), O(4)),
              j(e) && ((e = oe(t, e)), t.l || ie(t, e)),
              t.u && Y("Patches").M(n[Ee].t, e, t.u, t.s))
            : (e = oe(t, n, [])),
          Z(t),
          t.u && t.v(t.u, t.s),
          e !== Ce ? e : void 0
        );
      }
      function oe(e, t, n) {
        if ($(t)) return t;
        var r = t[Ee];
        if (!r)
          return (
            V(
              t,
              function (o, a) {
                return ae(e, r, t, o, a, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return ie(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var o = 4 === r.i || 5 === r.i ? (r.o = H(r.k)) : r.o,
            a = o,
            i = !1;
          3 === r.i && ((a = new Set(o)), o.clear(), (i = !0)),
            V(a, function (t, a) {
              return ae(e, r, o, t, a, n, i);
            }),
            ie(e, o, !1),
            n && e.u && Y("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function ae(e, t, n, r, o, a, i) {
        if (U(o)) {
          var l = oe(
            e,
            o,
            a && t && 3 !== t.i && !F(t.R, r) ? a.concat(r) : void 0
          );
          if ((W(n, r, l), !U(l))) return;
          e.m = !1;
        } else i && n.add(o);
        if (j(o) && !$(o)) {
          if (!e.h.D && e._ < 1) return;
          oe(e, o), (t && t.A.l) || ie(e, o);
        }
      }
      function ie(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && G(t, n);
      }
      function le(e, t) {
        var n = e[Ee];
        return (n ? q(n) : e)[t];
      }
      function ce(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function se(e) {
        e.P || ((e.P = !0), e.l && se(e.l));
      }
      function ue(e) {
        e.o || (e.o = H(e.t));
      }
      function de(e, t, n) {
        var r = _(t)
          ? Y("MapSet").F(t, n)
          : K(t)
          ? Y("MapSet").T(t, n)
          : e.O
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : X(),
                  P: !1,
                  I: !1,
                  R: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                o = r,
                a = xe;
              n && ((o = [r]), (a = Ie));
              var i = Proxy.revocable(o, a),
                l = i.revoke,
                c = i.proxy;
              return (r.k = c), (r.j = l), c;
            })(t, n)
          : Y("ES5").J(t, n);
        return (n ? n.A : X()).p.push(r), r;
      }
      function fe(e) {
        return (
          U(e) || O(22, e),
          (function e(t) {
            if (!j(t)) return t;
            var n,
              r = t[Ee],
              o = R(t);
            if (r) {
              if (!r.P && (r.i < 4 || !Y("ES5").K(r))) return r.t;
              (r.I = !0), (n = pe(t, o)), (r.I = !1);
            } else n = pe(t, o);
            return (
              V(n, function (t, o) {
                (r && L(r.t, t) === o) || W(n, t, e(o));
              }),
              3 === o ? new Set(n) : n
            );
          })(e)
        );
      }
      function pe(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return H(e);
      }
      function ye() {
        function e(e, t) {
          var n = o[e];
          return (
            n
              ? (n.enumerable = t)
              : (o[e] = n =
                  {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                      var t = this[Ee];
                      return xe.get(t, e);
                    },
                    set: function (t) {
                      var n = this[Ee];
                      xe.set(n, e, t);
                    },
                  }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var o = e[t][Ee];
            if (!o.P)
              switch (o.i) {
                case 5:
                  r(o) && se(o);
                  break;
                case 4:
                  n(o) && se(o);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = Te(n), o = r.length - 1; o >= 0; o--) {
            var a = r[o];
            if (a !== Ee) {
              var i = t[a];
              if (void 0 === i && !F(t, a)) return !0;
              var l = n[a],
                c = l && l[Ee];
              if (c ? c.t !== i : !B(l, i)) return !0;
            }
          }
          var s = !!t[Ee];
          return r.length !== Te(t).length + (s ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < t.length; r++)
            if (!t.hasOwnProperty(r)) return !0;
          return !1;
        }
        var o = {};
        J("ES5", {
          J: function (t, n) {
            var r = Array.isArray(t),
              o = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), o = 0; o < n.length; o++)
                    Object.defineProperty(r, "" + o, e(o, !0));
                  return r;
                }
                var a = ke(n);
                delete a[Ee];
                for (var i = Te(a), l = 0; l < i.length; l++) {
                  var c = i[l];
                  a[c] = e(c, t || !!a[c].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), a);
              })(r, t),
              a = {
                i: r ? 5 : 4,
                A: n ? n.A : X(),
                P: !1,
                I: !1,
                R: {},
                l: n,
                t: t,
                k: o,
                o: null,
                g: !1,
                C: !1,
              };
            return Object.defineProperty(o, Ee, { value: a, writable: !0 }), o;
          },
          S: function (e, n, o) {
            o
              ? U(n) && n[Ee].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && "object" == typeof t) {
                      var n = t[Ee];
                      if (n) {
                        var o = n.t,
                          a = n.k,
                          i = n.R,
                          l = n.i;
                        if (4 === l)
                          V(a, function (t) {
                            t !== Ee &&
                              (void 0 !== o[t] || F(o, t)
                                ? i[t] || e(a[t])
                                : ((i[t] = !0), se(n)));
                          }),
                            V(o, function (e) {
                              void 0 !== a[e] ||
                                F(a, e) ||
                                ((i[e] = !1), se(n));
                            });
                        else if (5 === l) {
                          if (
                            (r(n) && (se(n), (i.length = !0)),
                            a.length < o.length)
                          )
                            for (var c = a.length; c < o.length; c++) i[c] = !1;
                          else
                            for (var s = o.length; s < a.length; s++) i[s] = !0;
                          for (
                            var u = Math.min(a.length, o.length), d = 0;
                            d < u;
                            d++
                          )
                            a.hasOwnProperty(d) || (i[d] = !0),
                              void 0 === i[d] && e(a[d]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      var me,
        he,
        ve = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        ge = "undefined" != typeof Map,
        be = "undefined" != typeof Set,
        Se =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        Ce = ve
          ? Symbol.for("immer-nothing")
          : (((me = {})["immer-nothing"] = !0), me),
        we = ve ? Symbol.for("immer-draftable") : "__$immer_draftable",
        Ee = ve ? Symbol.for("immer-state") : "__$immer_state",
        Pe =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        Te =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        ke =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Te(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        Ae = {},
        xe = {
          get: function (e, t) {
            if (t === Ee) return e;
            var n = q(e);
            if (!F(n, t))
              return (function (e, t, n) {
                var r,
                  o = ce(t, n);
                return o
                  ? "value" in o
                    ? o.value
                    : null === (r = o.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !j(r)
              ? r
              : r === le(e.t, t)
              ? (ue(e), (e.o[t] = de(e.A.h, r, e)))
              : r;
          },
          has: function (e, t) {
            return t in q(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(q(e));
          },
          set: function (e, t, n) {
            var r = ce(q(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var o = le(q(e), t),
                a = null == o ? void 0 : o[Ee];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (B(n, o) && (void 0 !== n || F(e.t, t))) return !0;
              ue(e), se(e);
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== le(e.t, t) || t in e.t
                ? ((e.R[t] = !1), ue(e), se(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = q(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            O(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            O(12);
          },
        },
        Ie = {};
      V(xe, function (e, t) {
        Ie[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (Ie.deleteProperty = function (e, t) {
          return Ie.set.call(this, e, t, void 0);
        }),
        (Ie.set = function (e, t, n) {
          return xe.set.call(this, e[0], t, n, e[0]);
        });
      var De = (function () {
          function e(e) {
            var t = this;
            (this.O = Se),
              (this.D = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var o = n;
                  n = e;
                  var a = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = o);
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      i[l - 1] = arguments[l];
                    return a.produce(e, function (e) {
                      var r;
                      return (r = n).call.apply(r, [t, e].concat(i));
                    });
                  };
                }
                var i;
                if (
                  ("function" != typeof n && O(6),
                  void 0 !== r && "function" != typeof r && O(7),
                  j(e))
                ) {
                  var l = te(t),
                    c = de(t, e, void 0),
                    s = !0;
                  try {
                    (i = n(c)), (s = !1);
                  } finally {
                    s ? Z(l) : ee(l);
                  }
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return Q(l, r), re(e, l);
                        },
                        function (e) {
                          throw (Z(l), e);
                        }
                      )
                    : (Q(l, r), re(i, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (i = n(e)) && (i = e),
                    i === Ce && (i = void 0),
                    t.D && G(i, !0),
                    r)
                  ) {
                    var u = [],
                      d = [];
                    Y("Patches").M(e, i, u, d), r(u, d);
                  }
                  return i;
                }
                O(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        o = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(o));
                    });
                  };
                var r,
                  o,
                  a = t.produce(e, n, function (e, t) {
                    (r = e), (o = t);
                  });
                return "undefined" != typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, r, o];
                    })
                  : [a, r, o];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              j(e) || O(8), U(e) && (e = fe(e));
              var t = te(this),
                n = de(this, e, void 0);
              return (n[Ee].C = !0), ee(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Ee]).A;
              return Q(n, t), re(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !Se && O(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var o = Y("Patches").$;
              return U(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t);
                  });
            }),
            e
          );
        })(),
        Me = new De(),
        Ne = Me.produce,
        Oe =
          (Me.produceWithPatches.bind(Me),
          Me.setAutoFreeze.bind(Me),
          Me.setUseProxies.bind(Me),
          Me.applyPatches.bind(Me),
          Me.createDraft.bind(Me),
          Me.finishDraft.bind(Me),
          Ne),
        Ue = Redux,
        je = ReduxThunk,
        Ve = n.n(je);
      function Re(e) {
        return (
          (Re =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Re(e)
        );
      }
      var Fe,
        Le =
          ((Fe = function (e, t) {
            return (
              (Fe =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              Fe(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            Fe(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        We = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Be = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        _e = Object.defineProperty,
        Ke = Object.defineProperties,
        qe = Object.getOwnPropertyDescriptors,
        He = Object.getOwnPropertySymbols,
        Ge = Object.prototype.hasOwnProperty,
        ze = Object.prototype.propertyIsEnumerable,
        $e = function (e, t, n) {
          return t in e
            ? _e(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        Ye = function (e, t) {
          for (var n in t || (t = {})) Ge.call(t, n) && $e(e, n, t[n]);
          if (He)
            for (var r = 0, o = He(t); r < o.length; r++) {
              n = o[r];
              ze.call(t, n) && $e(e, n, t[n]);
            }
          return e;
        },
        Je = function (e, t) {
          return Ke(e, qe(t));
        },
        Xe = function (e, t, n) {
          return new Promise(function (r, o) {
            var a = function (e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              l = function (e) {
                return e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(a, i);
              };
            l((n = n.apply(e, t)).next());
          });
        },
        Qe =
          "undefined" != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === Re(arguments[0])
                    ? Ue.compose
                    : Ue.compose.apply(null, arguments);
              };
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function Ze(e) {
        if ("object" !== Re(e) || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      var et = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            Le(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, Be([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, Be([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array),
        tt = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            Le(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, Be([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, Be([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array);
      function nt(e) {
        return j(e) ? Oe(e, function () {}) : e;
      }
      function rt() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r = (e.immutableCheck, e.serializableCheck, new et());
            n &&
              (!(function (e) {
                return "boolean" == typeof e;
              })(n)
                ? r.push(Ve().withExtraArgument(n.extraArgument))
                : r.push(Ve()));
            0;
            return r;
          })(e);
        };
      }
      function ot(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var o = t.apply(void 0, n);
            if (!o) throw new Error("prepareAction did not return an object");
            return Ye(
              Ye(
                { type: e, payload: o.payload },
                "meta" in o && { meta: o.meta }
              ),
              "error" in o && { error: o.error }
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      function at(e) {
        var t,
          n = {},
          r = [],
          o = {
            addCase: function (e, t) {
              var r = "string" == typeof e ? e : e.type;
              if (r in n)
                throw new Error(
                  "addCase cannot be called with two reducers for the same action type"
                );
              return (n[r] = t), o;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), o;
            },
            addDefaultCase: function (e) {
              return (t = e), o;
            },
          };
        return e(o), [n, r, t];
      }
      function it(e) {
        var t = e.name;
        if (!t) throw new Error("`name` is a required option for createSlice");
        var n,
          r =
            "function" == typeof e.initialState
              ? e.initialState
              : nt(e.initialState),
          o = e.reducers || {},
          a = Object.keys(o),
          i = {},
          l = {},
          c = {};
        function s() {
          var t =
              "function" == typeof e.extraReducers
                ? at(e.extraReducers)
                : [e.extraReducers],
            n = t[0],
            o = void 0 === n ? {} : n,
            a = t[1],
            i = void 0 === a ? [] : a,
            c = t[2],
            s = void 0 === c ? void 0 : c,
            u = Ye(Ye({}, o), l);
          return (function (e, t, n, r) {
            void 0 === n && (n = []);
            var o,
              a = "function" == typeof t ? at(t) : [t, n, r],
              i = a[0],
              l = a[1],
              c = a[2];
            if (
              (function (e) {
                return "function" == typeof e;
              })(e)
            )
              o = function () {
                return nt(e());
              };
            else {
              var s = nt(e);
              o = function () {
                return s;
              };
            }
            function u(e, t) {
              void 0 === e && (e = o());
              var n = Be(
                [i[t.type]],
                l
                  .filter(function (e) {
                    return (0, e.matcher)(t);
                  })
                  .map(function (e) {
                    return e.reducer;
                  })
              );
              return (
                0 ===
                  n.filter(function (e) {
                    return !!e;
                  }).length && (n = [c]),
                n.reduce(function (e, n) {
                  if (n) {
                    var r;
                    if (U(e)) return void 0 === (r = n(e, t)) ? e : r;
                    if (j(e))
                      return Oe(e, function (e) {
                        return n(e, t);
                      });
                    if (void 0 === (r = n(e, t))) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined"
                      );
                    }
                    return r;
                  }
                  return e;
                }, e)
              );
            }
            return (u.getInitialState = o), u;
          })(r, function (e) {
            for (var t in u) e.addCase(t, u[t]);
            for (var n = 0, r = i; n < r.length; n++) {
              var o = r[n];
              e.addMatcher(o.matcher, o.reducer);
            }
            s && e.addDefaultCase(s);
          });
        }
        return (
          a.forEach(function (e) {
            var n,
              r,
              a = o[e],
              s = t + "/" + e;
            "reducer" in a ? ((n = a.reducer), (r = a.prepare)) : (n = a),
              (i[e] = n),
              (l[s] = n),
              (c[e] = r ? ot(s, r) : ot(s));
          }),
          {
            name: t,
            reducer: function (e, t) {
              return n || (n = s()), n(e, t);
            },
            actions: c,
            caseReducers: i,
            getInitialState: function () {
              return n || (n = s()), n.getInitialState();
            },
          }
        );
      }
      var lt = function (e) {
          void 0 === e && (e = 21);
          for (var t = "", n = e; n--; )
            t +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        ct = ["name", "message", "stack", "code"],
        st = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        ut = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        dt = function (e) {
          if ("object" === Re(e) && null !== e) {
            for (var t = {}, n = 0, r = ct; n < r.length; n++) {
              var o = r[n];
              "string" == typeof e[o] && (t[o] = e[o]);
            }
            return t;
          }
          return { message: String(e) };
        },
        ft = (function () {
          function e(e, t, n) {
            var r = ot(e + "/fulfilled", function (e, t, n, r) {
                return {
                  payload: e,
                  meta: Je(Ye({}, r || {}), {
                    arg: n,
                    requestId: t,
                    requestStatus: "fulfilled",
                  }),
                };
              }),
              o = ot(e + "/pending", function (e, t, n) {
                return {
                  payload: void 0,
                  meta: Je(Ye({}, n || {}), {
                    arg: t,
                    requestId: e,
                    requestStatus: "pending",
                  }),
                };
              }),
              a = ot(e + "/rejected", function (e, t, r, o, a) {
                return {
                  payload: o,
                  error: ((n && n.serializeError) || dt)(e || "Rejected"),
                  meta: Je(Ye({}, a || {}), {
                    arg: r,
                    requestId: t,
                    rejectedWithValue: !!o,
                    requestStatus: "rejected",
                    aborted: "AbortError" === (null == e ? void 0 : e.name),
                    condition:
                      "ConditionError" === (null == e ? void 0 : e.name),
                  }),
                };
              }),
              i =
                "undefined" != typeof AbortController
                  ? AbortController
                  : (function () {
                      function e() {
                        this.signal = {
                          aborted: !1,
                          addEventListener: function () {},
                          dispatchEvent: function () {
                            return !1;
                          },
                          onabort: function () {},
                          removeEventListener: function () {},
                          reason: void 0,
                          throwIfAborted: function () {},
                        };
                      }
                      return (
                        (e.prototype.abort = function () {
                          0;
                        }),
                        e
                      );
                    })();
            return Object.assign(
              function (e) {
                return function (l, c, s) {
                  var u,
                    d = (null == n ? void 0 : n.idGenerator)
                      ? n.idGenerator(e)
                      : lt(),
                    f = new i();
                  function p(e) {
                    (u = e), f.abort();
                  }
                  var y = (function () {
                    return Xe(this, null, function () {
                      var i, y, m, h, v, g;
                      return We(this, function (b) {
                        switch (b.label) {
                          case 0:
                            return (
                              b.trys.push([0, 4, , 5]),
                              (h =
                                null == (i = null == n ? void 0 : n.condition)
                                  ? void 0
                                  : i.call(n, e, { getState: c, extra: s })),
                              null === (S = h) ||
                              "object" !== Re(S) ||
                              "function" != typeof S.then
                                ? [3, 2]
                                : [4, h]
                            );
                          case 1:
                            (h = b.sent()), (b.label = 2);
                          case 2:
                            if (!1 === h || f.signal.aborted)
                              throw {
                                name: "ConditionError",
                                message:
                                  "Aborted due to condition callback returning false.",
                              };
                            return (
                              (v = new Promise(function (e, t) {
                                return f.signal.addEventListener(
                                  "abort",
                                  function () {
                                    return t({
                                      name: "AbortError",
                                      message: u || "Aborted",
                                    });
                                  }
                                );
                              })),
                              l(
                                o(
                                  d,
                                  e,
                                  null ==
                                    (y = null == n ? void 0 : n.getPendingMeta)
                                    ? void 0
                                    : y.call(
                                        n,
                                        { requestId: d, arg: e },
                                        { getState: c, extra: s }
                                      )
                                )
                              ),
                              [
                                4,
                                Promise.race([
                                  v,
                                  Promise.resolve(
                                    t(e, {
                                      dispatch: l,
                                      getState: c,
                                      extra: s,
                                      requestId: d,
                                      signal: f.signal,
                                      abort: p,
                                      rejectWithValue: function (e, t) {
                                        return new st(e, t);
                                      },
                                      fulfillWithValue: function (e, t) {
                                        return new ut(e, t);
                                      },
                                    })
                                  ).then(function (t) {
                                    if (t instanceof st) throw t;
                                    return t instanceof ut
                                      ? r(t.payload, d, e, t.meta)
                                      : r(t, d, e);
                                  }),
                                ]),
                              ]
                            );
                          case 3:
                            return (m = b.sent()), [3, 5];
                          case 4:
                            return (
                              (g = b.sent()),
                              (m =
                                g instanceof st
                                  ? a(null, d, e, g.payload, g.meta)
                                  : a(g, d, e)),
                              [3, 5]
                            );
                          case 5:
                            return (
                              (n &&
                                !n.dispatchConditionRejection &&
                                a.match(m) &&
                                m.meta.condition) ||
                                l(m),
                              [2, m]
                            );
                        }
                        var S;
                      });
                    });
                  })();
                  return Object.assign(y, {
                    abort: p,
                    requestId: d,
                    arg: e,
                    unwrap: function () {
                      return y.then(pt);
                    },
                  });
                };
              },
              { pending: o, rejected: a, fulfilled: r, typePrefix: e }
            );
          }
          return (
            (e.withTypes = function () {
              return e;
            }),
            e
          );
        })();
      function pt(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload;
      }
      Object.assign;
      var yt = "listenerMiddleware";
      ot(yt + "/add"), ot(yt + "/removeAll"), ot(yt + "/remove");
      "function" == typeof queueMicrotask &&
        queueMicrotask.bind(
          "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : globalThis
        );
      var mt,
        ht,
        vt = function (e) {
          return function (t) {
            setTimeout(t, e);
          };
        };
      "undefined" != typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : vt(10);
      ye(),
        (function (e) {
          (e.Granted = "Granted"),
            (e.Denied = "Denied"),
            (e.Actionable = "Actionable");
        })(ht || (ht = {}));
      var gt,
        bt = ht;
      !(function (e) {
        (e.VerificationStarted = "VERIFICATION_STARTED"),
          (e.verificationInProgress = "VERIFICATION_IN_PROGRESS"),
          (e.VerificationPending = "VERIFICATION_PENDING"),
          (e.VerificationFailed = "VERIFICATION_FAILED"),
          (e.VerificationSucceded = "VERIFICATION_SUCCEEDED"),
          (e.AMPCheckFailed = "AMP_CHECK_FAILED"),
          (e.EmailUpdateFailed = "EMAIL_UPDATE_FAILED");
      })(gt || (gt = {}));
      var St,
        Ct = gt;
      !(function (e) {
        (e.GovernmentId = "GovernmentId"),
          (e.Phone = "PHONE"),
          (e.Email = "EMAIL"),
          (e.AddedEmail = "AddedEmail"),
          (e.ParentConsentRequest = "ParentConsent"),
          (e.ParentLinkRequest = "ParentLink"),
          (e.AgeEstimation = "AgeEstimation"),
          (e.UserSettings = "UserSettings");
      })(St || (St = {}));
      var wt,
        Et = St;
      !(function (e) {
        (e.Embedded = "EMBEDDED"), (e.Hosted = "HOSTED");
      })(wt || (wt = {}));
      var Pt,
        Tt,
        kt,
        At,
        xt,
        It = wt;
      !(function (e) {
        (e.Prologue = "PROLOGUE"),
          (e.Verification = "VERIFICATION"),
          (e.Epilogue = "EPILOGUE");
      })(Pt || (Pt = {})),
        (function (e) {
          (e[(e.VendorLink = 0)] = "VendorLink"),
            (e[(e.Checklist = 1)] = "Checklist"),
            (e[(e.Complete = 2)] = "Complete");
        })(Tt || (Tt = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure"),
            (e[(e.RequiresManualReview = 3)] = "RequiresManualReview"),
            (e[(e.RequiresRetry = 4)] = "RequiresRetry"),
            (e[(e.Started = 5)] = "Started"),
            (e[(e.Submitted = 6)] = "Submitted"),
            (e[(e.Stored = 7)] = "Stored"),
            (e[(e.Expired = 8)] = "Expired");
        })(kt || (kt = {})),
        (function (e) {
          (e[(e.NoError = 0)] = "NoError"),
            (e[(e.UnknownError = 1)] = "UnknownError"),
            (e[(e.InvalidDocument = 2)] = "InvalidDocument"),
            (e[(e.InvalidSelfie = 3)] = "InvalidSelfie"),
            (e[(e.BelowMinimumAge = 4)] = "BelowMinimumAge"),
            (e[(e.LowQualityMedia = 5)] = "LowQualityMedia"),
            (e[(e.DocumentUnsupported = 6)] = "DocumentUnsupported");
        })(At || (At = {})),
        (function (e) {
          (e[(e.LANDING = 0)] = "LANDING"),
            (e[(e.EMAIL = 1)] = "EMAIL"),
            (e[(e.MODAL = 2)] = "MODAL"),
            (e[(e.SUCCESS_GENERIC = 3)] = "SUCCESS_GENERIC"),
            (e[(e.FAILURE = 4)] = "FAILURE"),
            (e[(e.PENDING = 5)] = "PENDING"),
            (e[(e.POLLING = 6)] = "POLLING"),
            (e[(e.EMAIL_CONTINUE = 7)] = "EMAIL_CONTINUE"),
            (e[(e.EXTERNAL_EMAIL = 8)] = "EXTERNAL_EMAIL"),
            (e[(e.ERROR = 9)] = "ERROR"),
            (e[(e.TEMP_BAN = 10)] = "TEMP_BAN"),
            (e[(e.VENDOR_LINK = 11)] = "VENDOR_LINK");
        })(xt || (xt = {}));
      var Dt,
        Mt,
        Nt,
        Ot = CoreRobloxUtilities,
        Ut = function (e, t, n) {
          Ot.eventStreamService.sendEventWithTarget(e, t, n);
        },
        jt = r.EnvironmentUrls.apiGatewayUrl,
        Vt = function (e, t, n, r) {
          void 0 === t && (t = null),
            void 0 === n && (n = null),
            void 0 === r && (r = null);
          var o = (function (e, t, n, r) {
            return (
              void 0 === t && (t = null),
              void 0 === n && (n = null),
              void 0 === r && (r = null),
              {
                retryable: !0,
                withCredentials: !0,
                url:
                  jt +
                  "/access-management/v1/upsell-feature-access?featureName=" +
                  e +
                  (t ? "&extraParameters=" + t : "") +
                  (n ? "&successfulActions=" + n : "") +
                  (r ? "&namespace=" + encodeURIComponent(r) : ""),
              }
            );
          })(e, t ? btoa(JSON.stringify(t)) : null, n, r);
          return new Promise(function (e) {
            i.httpService.get(o).then(
              function (t) {
                var n = t.data;
                e(n);
              },
              function (e) {
                throw e;
              }
            );
          });
        },
        Rt = function () {
          return (
            (Rt =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Rt.apply(this, arguments)
          );
        },
        Ft = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Lt = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Wt = {
          featureName: null,
          ampFeatureCheckData: void 0,
          stage: null,
          verificationStageRecourse: null,
          featureAccess: { loading: !1, data: null, error: null },
          showUpsell: !1,
          redirectLink: null,
          loading: !1,
          prologueUsed: !1,
          namespace: null,
        },
        Bt = ft("accessManagement/fetchFeatureAccess", function (e, t) {
          return Ft(void 0, void 0, void 0, function () {
            var n, r, o, a, i;
            return Lt(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    l.trys.push([0, 2, , 3]),
                    (n = e.featureName),
                    (r = e.ampFeatureCheckData),
                    (o = e.successfulAction),
                    (a = e.namespace),
                    [4, Vt(n, r, o, a)]
                  );
                case 1:
                  return [2, l.sent()];
                case 2:
                  return (
                    (i = l.sent()),
                    Ut(Ct.AMPCheckFailed, null, { error: JSON.stringify(i) }),
                    [2, t.rejectWithValue("Failed to fetch AMP response")]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        _t = it({
          name: "accessManagement",
          initialState: Wt,
          reducers: {
            resetAccessManagementStore: function () {
              return Wt;
            },
            setFeatureName: function (e, t) {
              e.featureName = t.payload;
            },
            setAmpFeatureCheckData: function (e, t) {
              e.ampFeatureCheckData = t.payload;
            },
            showUpsell: function (e, t) {
              e.showUpsell = t.payload;
            },
            setFeatureAccess: function (e, t) {
              e.featureAccess = t.payload;
            },
            setRedirectLink: function (e, t) {
              e.redirectLink = t.payload;
            },
            setStage: function (e, t) {
              e.stage = t.payload;
            },
            setVerificationStageRecourse: function (e, t) {
              e.verificationStageRecourse = t.payload;
            },
            setPrologueUsed: function (e, t) {
              e.prologueUsed = t.payload;
            },
            setLoading: function (e, t) {
              e.loading = t.payload;
            },
            setNamespace: function (e, t) {
              e.namespace = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Bt.pending, function (e) {
              e.featureAccess.loading = !0;
            })
              .addCase(Bt.fulfilled, function (e, t) {
                var n = t.payload;
                (e.featureAccess = Rt(Rt({}, e.featureAccess), {
                  loading: !1,
                  data: n,
                })),
                  (e.featureName = n.featureName),
                  n.access !== bt.Granted && (e.showUpsell = !0),
                  n.access === bt.Actionable &&
                    (e.verificationStageRecourse = n.recourses[0]);
              })
              .addCase(Bt.rejected, function (e, t) {
                e.featureAccess = Rt(Rt({}, e.featureAccess), {
                  loading: !1,
                  error: t.error.message || "Something went wrong",
                });
              });
          },
        }),
        Kt = (Dt = _t.actions).resetAccessManagementStore,
        qt =
          (Dt.setFeatureAccess, Dt.setFeatureName, Dt.setAmpFeatureCheckData),
        Ht = Dt.setRedirectLink,
        Gt = Dt.setVerificationStageRecourse,
        zt = (Dt.showUpsell, Dt.setStage),
        $t = Dt.setPrologueUsed,
        Yt = Dt.setNamespace,
        Jt = function (e) {
          return e.accessManagement;
        },
        Xt = function (e) {
          return e.accessManagement.showUpsell;
        },
        Qt = function (e) {
          return e.accessManagement.featureName;
        },
        Zt = function (e) {
          return e.accessManagement.ampFeatureCheckData;
        },
        en = function (e) {
          return e.accessManagement.featureAccess;
        },
        tn = function (e) {
          return e.accessManagement.stage;
        },
        nn = function (e) {
          return e.accessManagement.verificationStageRecourse;
        },
        rn = function (e) {
          return e.accessManagement.prologueUsed;
        },
        on = function (e) {
          return e.accessManagement.namespace;
        },
        an = _t.reducer,
        ln = function () {
          return (
            (ln =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            ln.apply(this, arguments)
          );
        },
        cn = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        sn = [
          { label: "Label.ConnectingToMobile", statusCode: [kt.Unknown] },
          { label: "Label.VerifyingYou", statusCode: [kt.Started] },
          {
            label: "Label.VerificationWaitingForResults",
            statusCode: [kt.Submitted],
          },
          {
            label: "Label.UpdatingRoblox",
            statusCode: [kt.Success, kt.Stored],
          },
        ],
        un = function (e, t) {
          void 0 === t && (t = []);
          var n = {
            heading: "Heading.VerificationSuccessful",
            icon: "success-icon",
            bodyText: ["Label.DateOfBirthUpdated"],
            buttonText: "Action.Close",
            footerText: null,
          };
          switch (e) {
            case xt.SUCCESS_GENERIC:
              break;
            case xt.FAILURE:
              n = ln(ln({}, n), {
                heading: "Heading.VerificationFailed",
                icon: "failure-icon",
                bodyText: ["Label.FailedVerification"],
                buttonText: "Action.Close",
              });
              break;
            case xt.PENDING:
              n = ln(ln({}, n), {
                heading: "Heading.VerificationPending",
                icon: "failure-icon",
                bodyText: ["Label.PendingVerification"],
                buttonText: "Action.Close",
              });
              break;
            case xt.ERROR:
              n = ln(ln({}, n), {
                heading: "Heading.Error",
                icon: "failure-icon",
                bodyText: ["Modal.Failed.Text"],
              });
              break;
            case xt.TEMP_BAN:
              n = ln(ln({}, n), {
                heading: "Heading.Error",
                icon: "failure-icon",
                bodyText: ["Label.VerificationDeclined"],
              });
            case xt.LANDING:
            case xt.EMAIL:
            case xt.MODAL:
            case xt.POLLING:
            case xt.EMAIL_CONTINUE:
            case xt.EXTERNAL_EMAIL:
            case xt.VENDOR_LINK:
          }
          return (n.bodyText = cn(cn([], n.bodyText), t)), n;
        },
        dn = "Action.RestartSession",
        fn = "Label.PleaseDoNotClose",
        pn = "Label.VerificationDataSubmitted",
        yn = "Label.VerifyInBrowser",
        mn = r.EnvironmentUrls.apiGatewayUrl,
        hn = function (e) {
          var t = {
              retryable: !0,
              withCredentials: !0,
              url:
                mn +
                "/age-verification-service/v1/persona-id-verification/start-verification",
            },
            n = { generateLink: !0, ageEstimation: e };
          return i.httpService
            .post(t, n)
            .then(function (e) {
              return e.data;
            })
            .catch(function (e) {
              var t = i.httpService.parseErrorCode(e);
              throw new Error(
                "Error to start ID verification: " + (t || "unknown")
              );
            });
        },
        vn = function (e) {
          var t = {
              retryable: !0,
              withCredentials: !0,
              url:
                mn +
                "/age-verification-service/v1/persona-id-verification/verified-status",
            },
            n = { token: e };
          return i.httpService
            .get(t, n)
            .then(function (e) {
              return e.data;
            })
            .catch(function (e) {
              var t = i.httpService.parseErrorCode(e);
              throw new Error(
                "Error to get ID verification status: " + (t || "unknown")
              );
            });
        },
        gn = function () {
          return (
            (gn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            gn.apply(this, arguments)
          );
        },
        bn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Sn = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Cn = {
          verified: null,
          IDVerificationState: {
            page: Tt.VendorLink,
            vendorVerificationData: {
              daysUntilNextVerification: 0,
              sessionIdentifier: null,
              verificationLink: null,
              qrCode: null,
              loading: !1,
            },
            loading: null,
            status: null,
            completionPageState: null,
            error: null,
            isAgeEstimation: !1,
          },
          loading: null,
        },
        wn = function (e) {
          return e.verification.IDVerificationState;
        },
        En = function (e) {
          return e.verification.loading;
        },
        Pn = ft("verification/startIDVerification", function (e, t) {
          return bn(void 0, void 0, void 0, function () {
            var n, r;
            return Sn(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 2, , 3]), [4, hn(e)];
                case 1:
                  return [2, o.sent()];
                case 2:
                  return (
                    (n = o.sent()),
                    (r = e ? Et.AgeEstimation : Et.GovernmentId),
                    Ut(Ct.VerificationFailed, r, { error: JSON.stringify(n) }),
                    [2, t.rejectWithValue("Failed to start ID Verification")]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        Tn = ft("verification/fetchIDVerificationStatus", function (e, t) {
          return bn(void 0, void 0, void 0, function () {
            var n, r, o, a;
            return Sn(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2, , 3]), [4, vn(e)];
                case 1:
                  return [2, i.sent()];
                case 2:
                  return (
                    (n = i.sent()),
                    (r = t.getState()),
                    (o = r.verification.IDVerificationState.isAgeEstimation),
                    (a = o ? Et.AgeEstimation : Et.GovernmentId),
                    Ut(Ct.VerificationFailed, a, { error: JSON.stringify(n) }),
                    [
                      2,
                      t.rejectWithValue(
                        "Failed to fetch ID Verification status"
                      ),
                    ]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        kn = it({
          name: "verification",
          initialState: Cn,
          reducers: {
            resetVerificationStore: function () {
              return Cn;
            },
            setVerified: function (e, t) {
              e.verified = t.payload;
            },
            setIDVerificationState: function (e, t) {
              e.IDVerificationState = gn({}, t.payload);
            },
            setIDVPage: function (e, t) {
              e.IDVerificationState.page = t.payload;
            },
            setLoading: function (e, t) {
              e.loading = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(Pn.pending, function (e, t) {
              var n = e.IDVerificationState.vendorVerificationData;
              (n.loading = !0),
                (e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                  vendorVerificationData: n,
                  loading: !0,
                })),
                (e.loading = !0);
            })
              .addCase(Pn.fulfilled, function (e, t) {
                var n = t.payload,
                  r = n.daysUntilNextVerification,
                  o = t.meta.arg,
                  a = null;
                (n.loading = !1),
                  null != r &&
                    r > 0 &&
                    (a = un(xt.TEMP_BAN, [
                      "Label.FailedVerificationInvalidDocument",
                    ])),
                  (e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                    vendorVerificationData: n,
                    completionPageState: a,
                    loading: !1,
                    isAgeEstimation: o,
                  }));
              })
              .addCase(Pn.rejected, function (e, t) {
                var n = e.IDVerificationState.vendorVerificationData;
                (n.loading = !1),
                  (e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                    vendorVerificationData: n,
                    completionPageState: un(xt.ERROR),
                    loading: !1,
                    error: t.error.message || "Something went wrong",
                  })),
                  (e.loading = !1);
              })
              .addCase(Tn.pending, function (e) {
                e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                  loading: !0,
                });
              })
              .addCase(Tn.fulfilled, function (e, t) {
                if (e.IDVerificationState.isAgeEstimation) {
                  var n = t.payload;
                  e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                    loading: !1,
                    status: n,
                  });
                } else {
                  n = t.payload;
                  var r = void 0,
                    o = e.IDVerificationState.page;
                  switch (n.sessionStatus) {
                    case kt.RequiresRetry:
                    case kt.Failure:
                      switch (((o = Tt.Complete), n.sessionErrorCode)) {
                        case At.InvalidDocument:
                        case At.BelowMinimumAge:
                          r = un(xt.FAILURE, [
                            "Label.FailedVerificationInvalidDocument",
                          ]);
                          break;
                        case At.LowQualityMedia:
                        case At.InvalidSelfie:
                          r = un(xt.FAILURE, [
                            "Label.FailedVerificationLowQuality",
                          ]);
                          break;
                        case At.DocumentUnsupported:
                          r = un(xt.FAILURE, [
                            "Label.FailedVerificationUnsupportedDocument",
                          ]);
                          break;
                        default:
                          r = un(xt.FAILURE);
                      }
                      break;
                    case kt.RequiresManualReview:
                      (o = Tt.Complete), (r = un(xt.PENDING));
                      break;
                    case kt.Success:
                    case kt.Stored:
                      (o = Tt.Complete), (r = un(xt.SUCCESS_GENERIC));
                      break;
                    case kt.Started:
                      (o = Tt.Checklist),
                        Ut(Ct.VerificationStarted, Et.GovernmentId, {
                          session:
                            e.IDVerificationState.vendorVerificationData
                              .sessionIdentifier,
                        });
                      break;
                    case kt.Submitted:
                      Ut(Ct.verificationInProgress, Et.GovernmentId, {
                        session:
                          e.IDVerificationState.vendorVerificationData
                            .sessionIdentifier,
                      });
                  }
                  e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                    loading: !1,
                    status: n,
                    completionPageState: r,
                    page: o,
                  });
                }
              })
              .addCase(Tn.rejected, function (e, t) {
                e.IDVerificationState = gn(gn({}, e.IDVerificationState), {
                  loading: !1,
                  error: t.error.message || "Something went wrong",
                });
              });
          },
        }),
        An = (Mt = kn.actions).resetVerificationStore,
        xn =
          (Mt.setVerified,
          Mt.setIDVerificationState,
          Mt.setIDVPage,
          Mt.setLoading),
        In = kn.reducer,
        Dn =
          (r.EnvironmentUrls.apiGatewayUrl,
          r.EnvironmentUrls.accountSettingsApi),
        Mn =
          (r.EnvironmentUrls.voiceApi,
          function () {
            return {
              retryable: !0,
              withCredentials: !0,
              url: Dn + "/v1/email",
            };
          }),
        Nn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        On = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Un = {
          emailAddress: null,
          isEmailVerified: !1,
          isEmailAdded: !1,
          loading: !1,
          error: !1,
        },
        jn = ft("emailVerification/updateUserEmail", function (e, t) {
          return Nn(void 0, void 0, void 0, function () {
            var n;
            return On(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    r.trys.push([0, 2, , 3]),
                    [
                      4,
                      ((o = { emailAddress: e }),
                      (a = Mn()),
                      i.httpService
                        .post(a, o)
                        .then(function () {
                          return !0;
                        })
                        .catch(function (e) {
                          throw new Error(
                            "Error to update email address: " +
                              JSON.stringify(e)
                          );
                        })),
                    ]
                  );
                case 1:
                  return [2, r.sent()];
                case 2:
                  return (
                    (n = r.sent()),
                    Ut(Ct.EmailUpdateFailed, Et.AddedEmail, {
                      error: JSON.stringify(n),
                    }),
                    [2, t.rejectWithValue("Failed to update email address")]
                  );
                case 3:
                  return [2];
              }
              var o, a;
            });
          });
        }),
        Vn = ft("emailVerification/getUserEmailStatus", function (e, t) {
          return Nn(void 0, void 0, void 0, function () {
            var e;
            return On(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]),
                    [
                      4,
                      ((r = Mn()),
                      i.httpService
                        .get(r)
                        .then(function (e) {
                          return e.data;
                        })
                        .catch(function (e) {
                          throw new Error(
                            "Error to get email address: " + JSON.stringify(e)
                          );
                        })),
                    ]
                  );
                case 1:
                  return [2, n.sent()];
                case 2:
                  return (
                    (e = n.sent()),
                    Ut(Ct.EmailUpdateFailed, Et.AddedEmail, {
                      error: JSON.stringify(e),
                    }),
                    [2, t.rejectWithValue("Failed to fetch email address")]
                  );
                case 3:
                  return [2];
              }
              var r;
            });
          });
        }),
        Rn = it({
          name: "emailVerification",
          initialState: Un,
          reducers: {
            resetEmailVerificationStore: function () {
              return Un;
            },
            setUserEmailData: function (e, t) {
              e.emailAddress = t.payload;
            },
          },
          extraReducers: function (e) {
            e.addCase(jn.pending, function (e) {
              e.loading = !0;
            })
              .addCase(jn.fulfilled, function (e, t) {
                (e.isEmailAdded = !0), (e.loading = !1);
              })
              .addCase(jn.rejected, function (e, t) {
                (e.loading = !1), (e.error = !0);
              })
              .addCase(Vn.pending, function (e) {
                e.loading = !0;
              })
              .addCase(Vn.fulfilled, function (e, t) {
                var n = t.payload;
                (e.emailAddress = n.emailAddress),
                  (e.isEmailVerified = n.isEmailVerified),
                  (e.loading = !1);
              })
              .addCase(Vn.rejected, function (e) {
                e.loading = !1;
              });
          },
        }),
        Fn = (Nt = Rn.actions).resetEmailVerificationStore,
        Ln =
          (Nt.setUserEmailData,
          function (e) {
            return e.emailVerification;
          }),
        Wn = (function (e) {
          var t,
            n = rt(),
            r = e || {},
            o = r.reducer,
            a = void 0 === o ? void 0 : o,
            i = r.middleware,
            l = void 0 === i ? n() : i,
            c = r.devTools,
            s = void 0 === c || c,
            u = r.preloadedState,
            d = void 0 === u ? void 0 : u,
            f = r.enhancers,
            p = void 0 === f ? void 0 : f;
          if ("function" == typeof a) t = a;
          else {
            if (!Ze(a))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
              );
            t = (0, Ue.combineReducers)(a);
          }
          var y = l;
          "function" == typeof y && (y = y(n));
          var m = Ue.applyMiddleware.apply(void 0, y),
            h = Ue.compose;
          s && (h = Qe(Ye({ trace: !1 }, "object" === Re(s) && s)));
          var v = new tt(m),
            g = v;
          Array.isArray(p)
            ? (g = Be([m], p))
            : "function" == typeof p && (g = p(v));
          var b = h.apply(void 0, g);
          return (0, Ue.createStore)(t, d, b);
        })({
          reducer: {
            accessManagement: an,
            verification: In,
            emailVerification: Rn.reducer,
          },
        }),
        Bn = function () {
          return M();
        },
        _n = "StartAccessManagementUpsell",
        Kn = {
          Continue: "Action.Continue",
          Cancel: "Action.Cancel",
          EmailMyParent: "Action.EmailMyParent",
          VerifyID: "Action.VerifyID",
          AskNow: "Action.AskNowLowercase",
        },
        qn = {
          AskYourParent: "Title.AskYourParent",
          VerifyYourAge: "Title.VerifyYourAge",
          CheckYourAge: "Title.CheckYourAge",
        },
        Hn = {
          Vpc: "Description.PrologueTextVpc",
          Idv: "Description.PrologueTextIdv",
          Fae: "Description.PrologueTextFae",
          IdvConnectingText: "Description.PrologueConnectingTextIdv",
          IdvAndVpc: "Description.PrologueTextIdvAndVpc",
          IdvAndVpcAgeCorrection: "Description.PrologueIdvAndVpcAgeCorrection",
          VpcEnablePurchase: "Description.PrologueEnablePurchase",
          VpcEnablePurchaseExpT1: "Description.PrologueEnablePurchaseExpT1",
          VpcUnblockUser: "Description.PrologueUnblockUser",
          VpcUnblockExperience: "Description.PrologueUnblockExperience",
          VpcAllowFacialAgeEstimation:
            "Description.CommsAgeCheck.VPCForFAEModal",
          VpcContentAgeRestriction: "Description.PrologueJoinExperience",
          VpcWhisperChatWithMeInExperiences:
            "Description.CommsAgeCheck.VPCForExperienceDirectChatModal",
          VpcExperienceChat:
            "Description.CommsAgeCheck.VPCForExperienceChatModal",
          VpcStudioCollaboration:
            "Description.CommsAgeCheck.VPCForStudioCollaborationModal",
          FaeExperienceChat:
            "Description.CommsAgeCheck.FaeForExperienceChatModal",
          FaeExperienceWhisperChat:
            "Description.CommsAgeCheck.FaeForExperienceWhisperChatModal",
          FaeStudioCollaboration:
            "Description.CommsAgeCheck.FaeForStudioCollaborationModal",
          PrologueFetchParentExperiment:
            "Description.PrologueFetchParentExperiment",
        },
        Gn = { LearnMore: "Action.LearnMore" },
        zn = { VerifyYourAge: "Title.VerifyYourAge" },
        $n = { VpcNotEligible: "Description.PrologueTextVpcNotEligible" },
        Yn = Ot.eventStreamService.eventTypes,
        Jn = "ageVerification",
        Xn = {
          emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
          translationKeys: {
            addEmailToAccountKeys: {
              btnText: "Action.Continue",
              ActionChangeEmail: "Action.ChangeEmail",
              ActionSent: "Action.Sent",
              ActionContinue: "Action.Continue",
              ActionGenericSkip: "Action.GenericSkip",
              DescriptionAddEmailTextOver13:
                "Description.IDVerificationAddEmailText",
              DescriptionAddEmailTextUnder13:
                "Description.IDVerificationAddEmailText",
              HeadingAddEmail: "Heading.AddEmail",
              LabelEmailInputPlaceholderOver13:
                "Label.EmailInputPlaceholderOver13",
              LabelEmailInputPlaceholderUnder13:
                "Label.EmailInputPlaceholderUnder13",
              MessageInvalidEmailAddress: "Message.InvalidEmailAddress",
            },
          },
          events: {
            showAddEmailModal: {
              name: "showAddEmailModal",
              type: Yn.modalAction,
              context: Jn,
              params: { aType: "shown", field: "addEmail" },
            },
            useAddEmailField: {
              name: "useAddEmailField",
              type: Yn.formInteraction,
              context: Jn,
              params: { btn: "emailAddress", field: "addEmail" },
            },
            addEmailConfirm: {
              name: "addEmailConfirm",
              type: Yn.buttonClick,
              context: Jn,
              params: { btn: "continue", field: "addEmail" },
            },
          },
        },
        Qn = function () {
          return (
            (Qn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Qn.apply(this, arguments)
          );
        },
        Zn = Xn.events,
        er = {
          useAddEmailToAccountEvent: function (e) {
            var t = Zn.useAddEmailField;
            Ot.eventStreamService.sendEventWithTarget(
              t.type,
              t.context,
              Qn(Qn({}, t.params), { origin: e })
            );
          },
          addEmailToAccountEvent: function (e) {
            var t = Zn.addEmailConfirm;
            Ot.eventStreamService.sendEventWithTarget(
              t.type,
              t.context,
              Qn(Qn({}, t.params), { origin: e })
            );
          },
        },
        tr = function (n, r) {
          var o = Bn(),
            a = (0, e.useState)(!1),
            i = a[0],
            l = a[1],
            c = (0, e.useState)(!1),
            s = c[0],
            u = (c[1], (0, e.useState)(!0)),
            d = u[0],
            f = u[1],
            p = (0, e.useState)(""),
            y = p[0],
            m = p[1],
            h = (0, e.useState)(""),
            v = h[0],
            g = h[1],
            b = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return l(!0);
                },
                close: function () {
                  o(Fn()), l(!1);
                },
              };
            }, []),
            S = Xn.emailRegex,
            C = Xn.translationKeys.addEmailToAccountKeys,
            w = (0, e.useState)(""),
            E = w[0],
            P = w[1],
            T = new RegExp(S),
            k = function () {
              o(Fn()), l(!1), r();
            },
            A = function (e) {
              m(e), P("");
              var t,
                r =
                  ((t = e),
                  T.test(t)
                    ? E
                      ? n(E)
                      : ""
                    : n(C.MessageInvalidEmailAddress));
              g(r), f(s || e.length <= 0 || r.length > 0);
            },
            x = t().createElement(
              t().Fragment,
              null,
              t().createElement("div", { className: "email-upsell-image" }),
              t().createElement(
                "p",
                { className: "email-upsell-text-body" },
                n(C.DescriptionAddEmailTextOver13, { emailAddress: y })
              ),
              t().createElement("input", {
                id: "email-upsell-modal-input",
                type: "email",
                autoComplete: "email",
                className:
                  (v ? "input-field-error" : "") +
                  " form-control input-field email-upsell-modal-input",
                placeholder: n(C.LabelEmailInputPlaceholderOver13),
                value: y,
                onFocus: function () {
                  return er.useAddEmailToAccountEvent("");
                },
                onChange: function (e) {
                  return A(e.target.value);
                },
              }),
              v &&
                t().createElement(
                  "p",
                  { className: "text-error modal-error-message" },
                  n(v)
                )
            );
          return [
            t().createElement(
              N.Modal,
              {
                show: i,
                onHide: k,
                backdrop: !0,
                className: "mail-upsell-android-modal",
                size: "sm",
                "aria-labelledby": "contained-modal-title-vcenter",
                scrollable: "true",
                centered: !0,
              },
              t().createElement(
                N.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  { className: "email-upsell-title-container" },
                  t().createElement(
                    "button",
                    {
                      type: "button",
                      className: "email-upsell-title-button",
                      onClick: k,
                    },
                    t().createElement("span", { className: "close icon-close" })
                  ),
                  t().createElement(
                    N.Modal.Title,
                    { id: "contained-modal-title-vcenter" },
                    n(C.HeadingAddEmail)
                  )
                )
              ),
              t().createElement(N.Modal.Body, null, x),
              t().createElement(
                N.Modal.Footer,
                null,
                t().createElement(
                  N.Button,
                  {
                    className: "modal-button email-upsell-btn",
                    variant: N.Button.variants.cta,
                    size: N.Button.sizes.medium,
                    isDisabled: d,
                    onClick: function () {
                      P(""), o(jn(y));
                    },
                  },
                  n(C.btnText)
                )
              )
            ),
            b,
          ];
        },
        nr = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.onHide,
              a = Bn(),
              i = w(Ln),
              l = w(Qt),
              c = w(Zt),
              s = tr(r, o),
              u = s[0],
              d = s[1];
            return (
              (0, e.useEffect)(function () {
                d.open();
              }, []),
              (0, e.useEffect)(
                function () {
                  i.error && (d.close(), o());
                },
                [d, i]
              ),
              (0, e.useEffect)(
                function () {
                  i.isEmailAdded &&
                    (d.close(),
                    a(
                      Bt({
                        featureName: l,
                        ampFeatureCheckData: c,
                        successfulAction: "AddedEmail",
                      })
                    ));
                },
                [i]
              ),
              t().createElement("div", null, u)
            );
          },
          {
            common: ["CommonUI.Controls"],
            feature: "Feature.VerificationUpsell",
          }
        ),
        rr = n(373),
        or = n.n(rr);
      function ar(e, t) {
        if (e) {
          var n = new r.Intl().getLocale(),
            o = e;
          n && (o = e + "&language=" + n),
            t && (o = o + "&style-variant=" + t),
            (window.location.href = o);
        }
      }
      var ir = function () {
        return t().createElement(N.Loading, null);
      };
      var lr = function (e) {
        var n = e.translate,
          r = e.onHide,
          o = w(wn),
          a = o.completionPageState,
          i = o.status,
          l = o.vendorVerificationData,
          c = o.error,
          s = l.daysUntilNextVerification,
          u = a.heading,
          d = a.bodyText,
          f = a.icon,
          p = a.footerText,
          y = a.buttonText,
          m = (null == i ? void 0 : i.sessionStatus) === kt.Failure || c;
        return t().createElement(
          t().Fragment,
          null,
          t().createElement(
            N.Modal.Header,
            { useBaseBootstrapComponent: !0 },
            t().createElement(
              "div",
              { className: "email-upsell-title-container" },
              t().createElement(
                "button",
                {
                  type: "button",
                  className: "email-upsell-title-button",
                  onClick: r,
                },
                t().createElement("span", { className: "close icon-close" })
              ),
              t().createElement(
                N.Modal.Title,
                { id: "contained-modal-title-vcenter" },
                n(u)
              )
            )
          ),
          t().createElement(
            N.Modal.Body,
            null,
            f && t().createElement("div", { className: f }),
            t().createElement(
              "ul",
              { className: m ? "content-list error-text" : "content-list" },
              d.map(function (e) {
                return t().createElement(
                  "li",
                  null,
                  n(e, { age: 18, days: s })
                );
              })
            )
          ),
          t().createElement(
            N.Modal.Footer,
            null,
            p &&
              t().createElement(
                "p",
                { className: "small" },
                t().createElement("b", null, n(p))
              ),
            t().createElement(
              "span",
              { key: y },
              t().createElement(
                N.Button,
                {
                  className: "button-stack-button primary-link",
                  variant: N.Button.variants.primary,
                  size: N.Button.sizes.medium,
                  onClick: r,
                },
                n(y)
              )
            )
          )
        );
      };
      var cr = function (e) {
          var n = e.translate,
            r = e.onHide,
            o = w(wn),
            a = o.status,
            i = o.vendorVerificationData,
            l = a.sessionStatus,
            c = sn.findIndex(function (e) {
              return e.statusCode.includes(l);
            });
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              N.Modal.Header,
              { useBaseBootstrapComponent: !0 },
              t().createElement(
                "div",
                { className: "email-upsell-title-container" },
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "email-upsell-title-button",
                    onClick: r,
                  },
                  t().createElement("span", { className: "close icon-close" })
                ),
                t().createElement(
                  N.Modal.Title,
                  { id: "contained-modal-title-vcenter" },
                  n("Heading.IdentityVerification")
                )
              )
            ),
            t().createElement(
              N.Modal.Body,
              { className: "verification-checklist-page-content" },
              t().createElement(
                "div",
                { className: "cta" },
                n(
                  l === kt.Success || l === kt.Stored || l === kt.Submitted
                    ? pn
                    : yn
                )
              ),
              t().createElement(
                "ul",
                { className: "checklist-wrapper" },
                sn.map(function (e, r) {
                  return r <= c
                    ? t().createElement(
                        "li",
                        { className: "checklist-item" },
                        t().createElement(
                          "span",
                          { className: "check-wrapper" },
                          t().createElement("span", {
                            className:
                              r === c ? "spinner spinner-sm" : "icon-checkmark",
                          })
                        ),
                        t().createElement(
                          "span",
                          { className: "checklist-text" },
                          n(e.label)
                        )
                      )
                    : null;
                })
              ),
              t().createElement(
                "a",
                {
                  href: i.verificationLink,
                  target: "_blank",
                  rel: "noreferrer",
                },
                t().createElement(
                  N.Button,
                  {
                    onClick: function () {
                      Ut(Ct.VerificationStarted, Et.GovernmentId, {
                        session: i.sessionIdentifier,
                      });
                    },
                    className: "primary-link",
                    variant: N.Button.variants.primary,
                    size: N.Button.sizes.medium,
                    width: N.Button.widths.full,
                  },
                  n(dn)
                )
              ),
              t().createElement("div", { className: "footer-text" }, n(fn))
            )
          );
        },
        sr = function () {
          return (
            (sr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            sr.apply(this, arguments)
          );
        },
        ur = 18e5;
      var dr = function (n) {
          var o,
            a = n.translate,
            i = n.onHidecallback,
            l = n.ageEstimation,
            s = (0, e.useRef)(Number(new Date()) + ur),
            u = Bn(),
            d = w(wn),
            f = w(En),
            p = w(Qt),
            y = w(Zt),
            m = w(wn).page,
            h = (0, e.useRef)(m),
            v = (0, e.useRef)(!1),
            g = (0, e.useRef)(!1),
            b = (0, e.useRef)(null),
            S =
              null !== (o = r.DeviceMeta && (0, r.DeviceMeta)().isInApp) &&
              void 0 !== o &&
              o,
            C = d.vendorVerificationData,
            E = C.sessionIdentifier,
            P = C.verificationLink,
            T = (0, c.useTheme)();
          function k() {
            u(An()), clearTimeout(b.current), i();
          }
          (0, e.useEffect)(function () {
            return (
              u(xn(!0)),
              u(Pn(l)),
              S && (s.current = Number(new Date()) + ur),
              function () {
                b.current && clearTimeout(b.current);
              }
            );
          }, []);
          var A = null;
          if (S || m === Tt.Complete)
            switch (m) {
              case Tt.VendorLink:
                A = t().createElement(ir, null);
                break;
              case Tt.Checklist:
                A = t().createElement(cr, { translate: a, onHide: k });
                break;
              case Tt.Complete:
                A = t().createElement(lr, { translate: a, onHide: k });
                break;
              default:
                A = t().createElement(ir, null);
            }
          return (
            (0, e.useEffect)(
              function () {
                S && E && null != P && !g.current && ((g.current = !0), ar(P));
              },
              [S, E, P]
            ),
            (0, e.useEffect)(
              function () {
                S &&
                  !d.loading &&
                  null != C.verificationLink &&
                  d.page !== Tt.Complete &&
                  Number(new Date()) < s.current &&
                  setTimeout(function () {
                    u(Tn(C.sessionIdentifier));
                  }, 1e4);
              },
              [d]
            ),
            (0, e.useEffect)(
              function () {
                m === Tt.Complete &&
                  u(Bt({ featureName: p, ampFeatureCheckData: y }));
              },
              [m]
            ),
            (0, e.useEffect)(
              function () {
                if (!S && E)
                  var e = new r.Intl().getLocale(),
                    t = new (or().Client)(
                      sr(
                        sr(
                          { inquiryId: E, styleVariant: T || "dark" },
                          e && { language: e }
                        ),
                        {
                          onReady: function () {
                            t.open(), u(xn(!1));
                          },
                          onComplete: function (e) {
                            e.inquiryId, e.status, e.fields;
                            if (!v.current) {
                              u(xn(!0)), (v.current = !0);
                              var t = setInterval(function () {
                                h.current !== Tt.Complete && u(Tn(E));
                              }, 5e3);
                              b.current = setTimeout(function () {
                                clearInterval(t), u(xn(!1));
                              }, 3e4);
                            }
                          },
                          onCancel: function (e) {
                            e.inquiryId, e.sessionToken;
                            k();
                          },
                          onError: function (e) {
                            u(Tn(C.sessionIdentifier)), console.error(e);
                          },
                        }
                      )
                    );
              },
              [E]
            ),
            t().createElement(
              t().Fragment,
              null,
              S || m === Tt.Complete ? A : f && t().createElement(ir, null)
            )
          );
        },
        fr = {
          eventName: {
            authPageLoad: "authPageload",
            authButtonClick: "authButtonClick",
            authFormInteraction: "authFormInteraction",
            authMsgShown: "authMsgShown",
            authModalShown: "authModalShown",
          },
          state: { sessionId: "sessionId" },
          field: {
            webEmbededFaeStart: "webEmbededFaeStart",
            webEmbededFaeError: "webEmbededFaeError",
            webEmbededFaeCancel: "webEmbededFaeCancel",
            webFaeStatus: "webFaeStatus",
            webHostedFaeStart: "webHostedFaeStart",
          },
          btn: { cancelFae: "cancelFae" },
          text: {},
        },
        pr = function (e, t, n) {
          try {
            Ot.eventStreamService.sendEventWithTarget(e, t, n);
          } catch (e) {}
        },
        yr = function () {
          return (
            (yr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            yr.apply(this, arguments)
          );
        },
        mr = "dark",
        hr = 18e5,
        vr = "AgeEstimation";
      var gr = function (n) {
          var o,
            a = n.translate,
            i = n.onHidecallback,
            l = n.ageEstimation,
            s = n.featureSpecificParams,
            u = Bn(),
            d = w(wn),
            f = w(En),
            p = w(Qt),
            y = w(on),
            m = w(Zt),
            h = w(en),
            v = d.vendorVerificationData,
            g = d.status,
            b = d.error,
            S = (s || {}).context,
            C = void 0 === S ? "defaultContext" : S,
            E = (0, e.useRef)(!1),
            P = (0, e.useRef)(null),
            T = (0, e.useRef)(null),
            k = (0, e.useRef)(null),
            A = (0, e.useRef)(0),
            x = (0, e.useRef)(!1),
            I = (0, e.useRef)(Number(new Date()) + hr),
            D = (0, e.useRef)(g);
          D.current = g;
          var M = (0, e.useRef)(h);
          M.current = h;
          var N = (0, e.useRef)(null),
            O = v.sessionIdentifier,
            U = v.verificationLink,
            j = (0, c.useTheme)(),
            V =
              null !== (o = r.DeviceMeta && (0, r.DeviceMeta)().isInApp) &&
              void 0 !== o &&
              o
                ? It.Hosted
                : It.Embedded,
            R = function () {
              P.current && (clearInterval(P.current), (P.current = null));
            },
            F = function () {
              k.current && (clearInterval(k.current), (k.current = null));
            };
          function L(e) {
            return (
              !!e &&
              (e.sessionStatus === kt.Stored ||
                e.sessionStatus === kt.RequiresRetry ||
                e.sessionStatus === kt.Failure)
            );
          }
          function W() {
            R(), F(), u(An()), clearTimeout(T.current);
          }
          function B() {
            W(), i();
          }
          function _() {
            if (!x.current) {
              (x.current = !0),
                (A.current = Number(new Date()) + 1e4),
                u(xn(!0)),
                (function (e, t, n, r) {
                  pr(fr.eventName.authMsgShown, e, {
                    state: t,
                    field: n,
                    errorCode: r,
                  });
                })(C, O, fr.field.webFaeStatus, kt[g.sessionStatus]);
              var e = function () {
                u(
                  Bt({
                    featureName: p,
                    ampFeatureCheckData: m,
                    namespace: y,
                    successfulAction: vr,
                  })
                );
              };
              e();
              var t = setInterval(function () {
                var n,
                  r,
                  o,
                  a = M.current,
                  i =
                    (null === (n = null == a ? void 0 : a.data) || void 0 === n
                      ? void 0
                      : n.access) === bt.Actionable,
                  l =
                    null ===
                      (o =
                        null === (r = null == a ? void 0 : a.data) ||
                        void 0 === r
                          ? void 0
                          : r.recourses) || void 0 === o
                      ? void 0
                      : o.find(function (e) {
                          return e.action === vr;
                        }),
                  c = Number(new Date()) >= A.current;
                l
                  ? !i || c
                    ? (clearInterval(t), (k.current = null), u(xn(!1)), B())
                    : e()
                  : (clearInterval(t), (k.current = null), u(xn(!1)), W());
              }, 1e3);
              k.current = t;
            }
          }
          function K() {
            var e = setInterval(function () {
              Number(new Date()) < I.current
                ? u(Tn(v.sessionIdentifier))
                : (clearInterval(e), i());
            }, 1e4);
            (P.current = e),
              v.verificationLink &&
                (!(function (e, t, n) {
                  pr(fr.eventName.authPageLoad, e, {
                    state: t,
                    origin: n,
                    os_time: Date.now(),
                  });
                })(C, O, fr.field.webHostedFaeStart),
                ar(v.verificationLink, j || mr));
          }
          function q() {
            var e = new r.Intl().getLocale();
            N.current = new (or().Client)(
              yr(
                yr(
                  { inquiryId: O, styleVariant: j || mr },
                  e && { language: e }
                ),
                {
                  onReady: function () {
                    var e;
                    null === (e = N.current) || void 0 === e || e.open(),
                      (function (e, t, n) {
                        pr(fr.eventName.authModalShown, e, {
                          state: t,
                          field: n,
                          os_time: Date.now(),
                        });
                      })(C, O, fr.field.webEmbededFaeStart),
                      u(xn(!1));
                  },
                  onComplete: function (e) {
                    e.inquiryId, e.status, e.fields;
                    if (!E.current) {
                      u(xn(!0)), (E.current = !0);
                      var t = setInterval(function () {
                        L(D.current) ? clearInterval(t) : u(Tn(O));
                      }, 200);
                      T.current = setTimeout(function () {
                        clearInterval(t), u(An()), B();
                      }, 3e4);
                    }
                  },
                  onCancel: function (e) {
                    var t = e.inquiryId;
                    e.sessionToken;
                    !(function (e, t, n, r) {
                      pr(fr.eventName.authButtonClick, e, {
                        btn: n,
                        state: t,
                        origin: r,
                        os_time: Date.now(),
                      });
                    })(C, t, fr.btn.cancelFae, fr.field.webEmbededFaeCancel),
                      B();
                  },
                  onError: function (e) {
                    u(Tn(v.sessionIdentifier)),
                      (function (e, t, n) {
                        pr(fr.eventName.authFormInteraction, e, {
                          state: t,
                          field: n,
                        });
                      })(C, O, fr.field.webEmbededFaeError),
                      console.error(e);
                  },
                }
              )
            );
          }
          return (
            (0, e.useEffect)(function () {
              return (
                u(xn(!0)),
                u(Pn(l)),
                V === It.Embedded &&
                  or()
                    .Client.preload()
                    .catch(function (e) {
                      console.error("Failed to preload Persona client:", e);
                    }),
                V === It.Hosted && (I.current = Number(new Date()) + hr),
                function () {
                  W(),
                    R(),
                    N.current && (N.current.destroy(), (N.current = null));
                }
              );
            }, []),
            (0, e.useEffect)(
              function () {
                V === It.Embedded && O
                  ? q()
                  : V === It.Hosted && O && null != U && K();
              },
              [O, U]
            ),
            (0, e.useEffect)(
              function () {
                L(g) && _();
              },
              [g]
            ),
            (0, e.useEffect)(
              function () {
                var e;
                if (x.current && !(null == h ? void 0 : h.loading)) {
                  var t =
                    null === (e = null == h ? void 0 : h.data) || void 0 === e
                      ? void 0
                      : e.access;
                  k.current &&
                    t &&
                    t !== bt.Actionable &&
                    (F(), u(xn(!1)), B());
                }
              },
              [h]
            ),
            t().createElement(
              t().Fragment,
              null,
              b && !f
                ? t().createElement(lr, { translate: a, onHide: B })
                : f
                ? t().createElement(ir, null)
                : null
            )
          );
        },
        br = n(870),
        Sr = n.n(br),
        Cr = function (n) {
          var r = n.translate,
            o = n.title,
            a = n.body,
            i = n.actionButtonTranslateKey,
            l = void 0 === i ? "" : i,
            c = n.neutralButtonTranslateKey,
            s = n.footer,
            u = n.size,
            d = void 0 === u ? "sm" : u,
            f = n.onAction,
            p = n.disableActionButton,
            y = n.disabledNeutralButton,
            m = n.dualActionButton,
            h = void 0 !== m && m,
            v = n.onHide,
            g = void 0 === v ? function () {} : v,
            b = n.onNeutral,
            S = (0, e.useState)(!1),
            C = S[0],
            w = S[1],
            E = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return w(!0);
                },
                close: function () {
                  return w(!1);
                },
              };
            }, []),
            P = Sr()({
              "modal-half-width-button": c,
              "modal-full-width-button": !c,
            });
          return [
            t().createElement(
              N.Modal,
              {
                show: C,
                onHide: function () {
                  E.close(), g();
                },
                backdrop: !0,
                className: "access-management-upsell-inner-modal",
                size: d,
                "aria-labelledby": "access-management-upsell-inner-modal-title",
                scrollable: !0,
                centered: !0,
              },
              t().createElement(
                N.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  {
                    className:
                      "access-management-upsell-inner-modal-title-container",
                  },
                  t().createElement(
                    N.Modal.Title,
                    { id: "access-management-upsell-inner-modal-title" },
                    o
                  )
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    onClick: function () {
                      E.close(), g();
                    },
                  },
                  t().createElement("span", { className: "icon-close" })
                )
              ),
              t().createElement(N.Modal.Body, null, a),
              t().createElement(
                N.Modal.Footer,
                null,
                l &&
                  t().createElement(
                    N.Button,
                    {
                      className: P,
                      variant: N.Button.variants.primary,
                      size: N.Button.sizes.medium,
                      isDisabled: p,
                      onClick: function () {
                        null == f || f(), E.close();
                      },
                    },
                    r(l)
                  ),
                c &&
                  t().createElement(
                    N.Button,
                    {
                      className: P,
                      variant: h
                        ? N.Button.variants.primary
                        : N.Button.variants.secondary,
                      size: N.Button.sizes.medium,
                      isDisabled: y,
                      onClick: function () {
                        null == b || b(), E.close();
                      },
                    },
                    r(c)
                  )
              ),
              s &&
                t().createElement(
                  "div",
                  {
                    className:
                      "text-footer access-management-upsell-inner-modal-text-footer border-top",
                  },
                  s
                )
            ),
            E,
          ];
        },
        wr = {
          U13To18: "U13To18",
          U13To1318: "U13To1318",
          U13ToU13: "U13ToU13",
          U13ToU13NotEligible: "U13ToU13NotEligible",
        },
        Er = {
          IdvOrVpc: "Verify Your Age/Parent Permission Needed",
          VPC: "Parent Permission Needed",
          VpcNotEligible: "Parent Permission Not Eligible",
          AskYourParent: "Ask Your Parent",
          VerifyId: "Verify ID",
          EmailMyParent: "Email My Parent",
          AskNow: "Ask Now",
          Cancel: 'X icon or "Cancel"',
          WeNeedToCheckYourAge: "We need to check your age",
        },
        Pr = {
          VerifyId: "verifyId",
          EmailParent: "emailParent",
          verifyCancel: "verifyCancel",
          VpcNotEligibleModalClose: "vpcNotEligibleModalClose",
          VpcNotEligibleLearnMore: "vpcNotEligibleLearnMore",
          askParent: "askParent",
          cancel: "cancel",
        },
        Tr = {
          SettingsAgeChangeVerify: "settingsAgeChangeVerify",
          SettingsAgeChangeVpcNotEligible: "settingsAgeChangeVpcNotEligible",
          UpdateSetting: "parentalEntrySettings",
          vpcPrologue: "vpcPrologue",
          faePrologue: "faePrologue",
        },
        kr = {
          AuthPageload: "authPageload",
          AuthButtonClick: "authButtonClick",
        },
        Ar = function (e, t) {
          return (
            "" + (e ? e + ", " : "") + (t ? "settingName: " + t + ", " : "")
          );
        };
      function xr(e, t) {
        "CanCorrectAge" === e &&
          Ot.eventStreamService.sendEventWithTarget(
            kr.AuthButtonClick,
            Tr.SettingsAgeChangeVerify,
            {
              btn: Pr.VerifyId,
              state: t ? wr.U13To18 : wr.U13To1318,
              associatedText: Er.VerifyId,
            }
          );
      }
      function Ir(e, t, n, r, o) {
        "CanCorrectAge" === e
          ? Ot.eventStreamService.sendEventWithTarget(
              kr.AuthButtonClick,
              Tr.SettingsAgeChangeVerify,
              {
                btn: Pr.EmailParent,
                state: t ? wr.U13ToU13 : wr.U13To1318,
                associatedText: Er.EmailMyParent,
              }
            )
          : "CanChangeSetting" === e
          ? Ot.eventStreamService.sendEventWithTarget(
              kr.AuthButtonClick,
              Tr.UpdateSetting,
              {
                btn: Pr.EmailParent,
                state: Ar(void 0, n),
                associatedText: Er.EmailMyParent,
              }
            )
          : "CanRemoveParentManagedUserBlocks" === e
          ? Ot.eventStreamService.sendEventWithTarget(
              kr.AuthButtonClick,
              Tr.UpdateSetting,
              {
                btn: Pr.EmailParent,
                state: "unblockUser " + (null == r ? void 0 : r.friendUserId),
                associatedText: Er.AskNow,
              }
            )
          : "CanRemoveParentManagedExperienceBlocks" === e &&
            Ot.eventStreamService.sendEventWithTarget(
              kr.AuthButtonClick,
              Tr.UpdateSetting,
              {
                btn: Pr.EmailParent,
                state:
                  "unblockExperience " + (null == r ? void 0 : r.universeId),
                associatedText: Er.AskNow,
              }
            ),
          t &&
            n &&
            Ot.eventStreamService.sendEventWithTarget(
              kr.AuthButtonClick,
              Tr.vpcPrologue,
              { btn: Pr.askParent, state: Ar(o, n), associatedText: Er.AskNow }
            );
      }
      function Dr(e) {
        var t;
        switch (e) {
          case "Idv":
            t = wr.U13To18;
            break;
          case "Vpc":
            t = wr.U13ToU13;
            break;
          case "IdvOrVpc":
            t = wr.U13To1318;
            break;
          case "VpcNotEligible":
            t = wr.U13ToU13NotEligible;
        }
        return t;
      }
      function Mr(e, t, n, r, o) {
        if ("CanCorrectAge" === e) {
          var a = Dr(t);
          Ot.eventStreamService.sendEventWithTarget(
            kr.AuthButtonClick,
            Tr.SettingsAgeChangeVerify,
            { btn: Pr.verifyCancel, state: a, associatedText: Er.Cancel }
          );
        } else
          "CanChangeSetting" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                kr.AuthButtonClick,
                Tr.UpdateSetting,
                {
                  btn: Pr.verifyCancel,
                  state: Ar(void 0, n),
                  associatedText: Er.Cancel,
                }
              )
            : "CanRemoveParentManagedUserBlocks" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                kr.AuthButtonClick,
                Tr.UpdateSetting,
                {
                  btn: Pr.verifyCancel,
                  state: "unblockUser " + (null == r ? void 0 : r.friendUserId),
                  associatedText: Er.Cancel,
                }
              )
            : "CanRemoveParentManagedExperienceBlocks" === e &&
              Ot.eventStreamService.sendEventWithTarget(
                kr.AuthButtonClick,
                Tr.UpdateSetting,
                {
                  btn: Pr.verifyCancel,
                  state:
                    "unblockExperience " + (null == r ? void 0 : r.universeId),
                  associatedText: Er.Cancel,
                }
              );
        if (n) {
          var i = void 0;
          switch (t) {
            case "Vpc":
              i = Tr.vpcPrologue;
              break;
            case "Fae":
              i = Tr.faePrologue;
          }
          i &&
            Ot.eventStreamService.sendEventWithTarget(kr.AuthButtonClick, i, {
              btn: Pr.cancel,
              state: Ar(o, n),
              associatedText: Er.Cancel,
            });
        }
      }
      function Nr(e, t, n, r, o) {
        if ("CanCorrectAge" === e) {
          var a = Dr(t);
          Ot.eventStreamService.sendEventWithTarget(
            kr.AuthPageload,
            Tr.SettingsAgeChangeVerify,
            { state: a, associatedText: Er.IdvOrVpc }
          );
        } else
          "CanChangeSetting" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                kr.AuthPageload,
                Tr.UpdateSetting,
                { state: Ar(void 0, n), associatedText: Er.VPC }
              )
            : "CanRemoveParentManagedUserBlocks" === e
            ? Ot.eventStreamService.sendEventWithTarget(
                kr.AuthPageload,
                Tr.UpdateSetting,
                {
                  state: "unblockUser " + (null == r ? void 0 : r.friendUserId),
                  associatedText: Er.AskYourParent,
                }
              )
            : "CanRemoveParentManagedExperienceBlocks" === e &&
              Ot.eventStreamService.sendEventWithTarget(
                kr.AuthPageload,
                Tr.UpdateSetting,
                {
                  state:
                    "unblockExperience " +
                    (null == r ? void 0 : r.experienceId),
                  associatedText: Er.AskYourParent,
                }
              );
        if (n) {
          var i = void 0,
            l = void 0;
          switch (t) {
            case "Vpc":
              (i = Tr.vpcPrologue), (l = Er.AskYourParent);
              break;
            case "Fae":
              (i = Tr.faePrologue), (l = Er.WeNeedToCheckYourAge);
          }
          i &&
            Ot.eventStreamService.sendEventWithTarget(kr.AuthPageload, i, {
              state: Ar(o, n),
              associatedText: l,
            });
        }
      }
      var Or,
        Ur = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = w(Qt),
            i = r(zn.VerifyYourAge),
            l = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                r($n.VpcNotEligible)
              )
            ),
            c = Cr({
              translate: r,
              title: i,
              body: l,
              actionButtonTranslateKey: Gn.LearnMore,
              onAction: function () {
                !(function (e) {
                  "CanCorrectAge" === e &&
                    Ot.eventStreamService.sendEventWithTarget(
                      kr.AuthButtonClick,
                      Tr.SettingsAgeChangeVpcNotEligible,
                      {
                        btn: Pr.VpcNotEligibleLearnMore,
                        state: wr.U13ToU13,
                        associatedText: Er.VpcNotEligible,
                      }
                    );
                })(a),
                  window.open(
                    "https://help.roblox.com/hc/articles/30428367965460",
                    "_blank"
                  );
              },
              size: "sm",
              onHide: function () {
                o(),
                  (function (e) {
                    "CanCorrectAge" === e &&
                      Ot.eventStreamService.sendEventWithTarget(
                        kr.AuthButtonClick,
                        Tr.SettingsAgeChangeVpcNotEligible,
                        {
                          btn: Pr.VpcNotEligibleModalClose,
                          state: wr.U13ToU13,
                          associatedText: Er.VpcNotEligible,
                        }
                      );
                  })(a),
                  u.close();
              },
            }),
            s = c[0],
            u = c[1];
          return (
            (0, e.useEffect)(
              function () {
                u.open(), Nr(a, "VpcNotEligible");
              },
              [a, u]
            ),
            [s, u]
          );
        },
        jr = function (t) {
          var n,
            r,
            o = t.translate,
            a = t.onHide,
            i = [null, null],
            l = i[0],
            c = i[1],
            s = w(en);
          if (
            "CanCorrectAge" ===
            (null === (r = null == s ? void 0 : s.data) || void 0 === r
              ? void 0
              : r.featureName)
          )
            (l = (n = Ur({ translate: o, onHide: a }))[0]), (c = n[1]);
          return (
            (0, e.useEffect)(
              function () {
                c.open();
              },
              [l, c]
            ),
            l
          );
        },
        Vr =
          r.EnvironmentUrls.apiGatewayUrl +
          "/child-requests-api/v1/send-request-to-new-parent",
        Rr =
          r.EnvironmentUrls.apiGatewayUrl +
          "/child-requests-api/v1/send-request-to-all-parents",
        Fr =
          r.EnvironmentUrls.userSettingsApi +
          "/v1/account-insights/parent-emails",
        Lr = function () {
          return (
            (Lr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Lr.apply(this, arguments)
          );
        },
        Wr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Br = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        _r = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        Kr = {
          sendRequestToNewParent: function (e) {
            return Wr(void 0, void 0, Promise, function () {
              var t, n, r, o, a, l;
              return Br(this, function (c) {
                switch (c.label) {
                  case 0:
                    return (
                      (t = e.auditData),
                      (n = _r(e, ["auditData"])),
                      (r = Lr(
                        { url: Vr, withCredentials: !0 },
                        t ? { headers: { "rbx-audit-data": t } } : {}
                      )),
                      (o = n.requestDetails),
                      [4, i.httpService.post(r, n)]
                    );
                  case 1:
                    return (
                      (a = c.sent()),
                      o &&
                        ((l = Object.keys(o)[0]),
                        Ot.localStorageService.setLocalStorage(
                          "Roblox.ParentalRequest." +
                            l +
                            "CooldownExpirationTime",
                          a.data.lockedUntil
                        )),
                      [2, a.data]
                    );
                }
              });
            });
          },
          sendRequestToAllParents: function (e) {
            return Wr(void 0, void 0, Promise, function () {
              var t, n, r, o;
              return Br(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t = { url: Rr, withCredentials: !0 }),
                      (n = e.requestDetails),
                      [4, i.httpService.post(t, e)]
                    );
                  case 1:
                    return (
                      (r = a.sent()),
                      n &&
                        ((o = Object.keys(n)[0]),
                        Ot.localStorageService.setLocalStorage(
                          "Roblox.ParentalRequest." +
                            o +
                            "CooldownExpirationTime",
                          r.data.lockedUntil
                        )),
                      [2, r.data]
                    );
                }
              });
            });
          },
        },
        qr = Kr,
        Hr = {
          privacyPolicyUrl: r.EnvironmentUrls.websiteUrl + "/info/privacy",
          chargebackWizardSessionTokenLocalStorageKey:
            "Roblox.ChargebackWizardSessionToken",
          defaultCooldownTimeInMs: 9e5,
          emailRegex: "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$",
          isChildSubjectToPCFeatureName: "IsChildSubjectToParentalControls",
          translationKeys: {
            gatherParentEmail: {
              title: "Title.EnterParentEmailV2",
              bodyWithPC: "Description.EnterParentEmailV5",
              bodyWithoutPC:
                "Description.EnterParentEmailWithoutParentalControl",
              bodyForTeens:
                "Description.EnterParentEmailWithoutParentalControlV2",
              footer: "Description.ParentalEmailFooter",
              unknownError: "Message.SomethingWentWrong",
              invalidEmailError: "Message.InvalidEmail",
              btnText: "Action.SendEmail",
              emailPlaceholder: "Label.EmailCapitalized",
              parentEmailLabel: "Label.ParentEmail",
              emailTooManyChildrenError: "Message.EmailIneligible",
              childTooManyParentsError: "Message.ExistAccountWithEmail",
              emailTooManyRequest: "Message.TooManyAttempts",
              senderFlooded: "Message.TooManyAttemptAskParent",
              alreadyApplied: "Description.AllSet",
              seeRequestAfterLink: "Message.RequestCreatedEmailNotSent",
              alreadyLinked: "Message.AlreadyLinked",
            },
            emailSentConfirmation: {
              title: "Title.RequestSent",
              oneParentBody: "Message.EmailSent",
              pluralParentBody: "Message.EmailSentPluralParent",
              emailNotSentBody: "Message.RequestCreatedEmailNotSent",
              btnText: "Action.OK",
            },
            exitWarning: {
              title: "Title.AreYouSure",
              body: "Description.ExitEnterEmail",
              actionBtnText: "Action.EnterEmail",
              neutralBtnText: "Action.Cancel",
            },
          },
          events: {
            chargebackContext: {
              parentalEntry: "parentalEntry",
              settingsAge: "settingsAgeChargeback",
              settingsRequestSent: "settingsChargebackRequestSent",
            },
            savePaymentMethodsContext: {
              parentalEntry: "parentalEntryDevsubs",
              settingsAge: "settingsAgeSavePaymentMethods",
              settingsRequestSent: "settingsSavePaymentMethodsRequestSent",
            },
            changeBirthdayContext: {
              parentalEntry: "parentalEntryAgeChange",
              settingsAge: "settingsAgeChangeBirthday",
              settingsRequestSent: "settingsAgeChangeVerifyRequestSent",
            },
            updateUserSettingContext: {
              parentalEntry: "parentalEntrySettings",
              settingsAge: "settingsAgeSettings",
              settingsRequestSent: "settingsRequestSent",
            },
            eventName: {
              authPageLoad: "authPageload",
              authButtonClick: "authButtonClick",
              authFormInteraction: "authFormInteraction",
              authMsgShown: "authMsgShown",
              authModalShown: "authModalShown",
            },
            state: {
              sessionId: "sessionId",
              unknown: "unknown",
              changeBirthday: {
                U13To18: "U13To18",
                U13To1318: "U13To1318",
                U13ToU13: "U13ToU13",
              },
            },
            field: {
              email: "email",
              emailModal: "emailModal",
              errorMessage: "errorMessage",
              logoutPopup: "logoutPopup",
              parentalEmailMismatch: "parentalEmailMismatch",
            },
            btn: {
              verifyCancel: "verifyCancel",
              continue: "continue",
              submit: "submit",
            },
            text: {
              enterParentEmail: "Enter Parent's Email",
              sendEmail: "Send Email",
              submit: "Submit",
              ok: "OK",
              requestSent: "Request Sent",
            },
            vpc: "Vpc",
          },
          settingName: { enablePurchases: "enablePurchases" },
        };
      !(function (e) {
        (e.Unknown = "Unknown"),
          (e.InvalidUserID = "InvalidUserID"),
          (e.InvalidParameter = "InvalidParameter"),
          (e.ServiceUnavailable = "ServiceUnavailable"),
          (e.NoLinkedParents = "NoLinkedParents"),
          (e.ConsentAlreadyApplied = "ConsentAlreadyApplied"),
          (e.SenderFlooded = "SenderFlooded"),
          (e.ReceiverFlooded = "ReceiverFlooded"),
          (e.SenderFloodedRequestCreated = "SenderFloodedRequestCreated"),
          (e.IllegalState = "IllegalState"),
          (e.InvalidEmailAddress = "InvalidEmailAddress"),
          (e.EmailNotUnique = "EmailNotUnique"),
          (e.LinkingIneligible = "LinkingIneligible"),
          (e.AlreadyLinked = "AlreadyLinked"),
          (e.ChildAtLinkLimit = "ChildAtLinkLimit"),
          (e.ParentAtLinkLimit = "ParentAtLinkLimit"),
          (e.UpdateUserSettingRequestInvalid =
            "UpdateUserSettingRequestInvalid"),
          (e.ConsentAlreadyRequestedConflictingData =
            "ConsentAlreadyRequestedConflictingData"),
          (e.ReceiverNotWhitelisted = "ReceiverNotWhitelisted"),
          (e.InvalidComplianceFeature = "InvalidComplianceFeature"),
          (e.ChildTooOld = "ChildTooOld"),
          (e.UserForgotten = "UserForgotten");
      })(Or || (Or = {}));
      var Gr,
        zr = Or,
        $r = { data: { code: "UnknownError" } },
        Yr = Hr.translationKeys.gatherParentEmail,
        Jr = function (e) {
          switch (e) {
            case zr.ChildAtLinkLimit:
              return Yr.childTooManyParentsError;
            case zr.ParentAtLinkLimit:
              return Yr.emailTooManyChildrenError;
            case zr.SenderFlooded:
              return Yr.senderFlooded;
            case zr.ReceiverFlooded:
              return Yr.emailTooManyRequest;
            case zr.ConsentAlreadyApplied:
              return Yr.alreadyApplied;
            case zr.AlreadyLinked:
              return Yr.alreadyLinked;
            case zr.InvalidEmailAddress:
              return Yr.invalidEmailError;
            default:
              return Yr.unknownError;
          }
        };
      !(function (e) {
        (e.LiftPunishment = "LiftPunishment"),
          (e.SavePaymentMethods = "SavePaymentMethods"),
          (e.UpdateUserSetting = "UpdateUserSetting"),
          (e.UpdateBirthdate = "UpdateBirthdate"),
          (e.LinkToChild = "LinkToChild"),
          (e.Unknown = "Unknown");
      })(Gr || (Gr = {}));
      var Xr,
        Qr = Gr;
      !(function (e) {
        e.Chargeback = "Chargeback";
      })(Xr || (Xr = {}));
      var Zr,
        eo = Xr,
        to = Hr.events,
        no = function (e, t, n, r) {
          var o = n ? n + ", " : "",
            a = t ? "sessionId: " + t + ", " : "",
            i = r ? "settingName: " + Object.keys(r)[0] + ", " : "",
            l = r
              ? Object.entries(r)
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return t + ": " + String(n);
                  })
                  .join(", ")
              : "";
          return e === Qr.UpdateUserSetting ? "" + o + i + a : "" + o + l + a;
        },
        ro = function (e, t) {
          var n;
          switch (e) {
            case Qr.LiftPunishment:
              (null == t ? void 0 : t.punishmentType) === eo.Chargeback &&
                (n = to.chargebackContext);
              break;
            case Qr.SavePaymentMethods:
              n = to.savePaymentMethodsContext;
              break;
            case Qr.UpdateBirthdate:
              n = to.changeBirthdayContext;
              break;
            case Qr.UpdateUserSetting:
              n = to.updateUserSettingContext;
              break;
            default:
              n = to.chargebackContext;
          }
          return n;
        },
        oo = function (e, t, n) {
          try {
            Ot.eventStreamService.sendEventWithTarget(e, t, n);
          } catch (e) {}
        },
        ao = function (e) {
          var t = e.requestType,
            n = e.sessionId,
            r = e.extraState,
            o = e.details,
            a = ro(t, o);
          oo(to.eventName.authButtonClick, a.parentalEntry, {
            btn: to.btn.continue,
            associatedText: to.text.ok,
            state: no(t, n, r, o),
          });
        },
        io = {
          dateInUTCToBirthdate: function (e) {
            var t = e.getUTCFullYear(),
              n = e.getUTCMonth() + 1;
            return { birthDay: e.getUTCDate(), birthMonth: n, birthYear: t };
          },
          calculateAge: function (e) {
            if (!e || !e.birthYear || 0 === e.birthYear) return 0;
            var t = new Date(),
              n = io.dateInUTCToBirthdate(t);
            return (
              n.birthDay - e.birthDay < 0 && (n.birthMonth -= 1),
              n.birthMonth - e.birthMonth < 0 && (n.birthYear -= 1),
              n.birthYear - e.birthYear
            );
          },
          getAgeRange: function (e) {
            var t = Hr.events.state.changeBirthday,
              n = io.dateInUTCToBirthdate(e);
            return io.calculateAge(n) < 13 ? t.U13ToU13 : t.U13To1318;
          },
        },
        lo = io,
        co = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        so = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        uo = function (n) {
          var r = n.translate,
            o = n.consentType,
            a = n.successCallBack,
            i = n.onHideCallback,
            l = n.value,
            c = void 0 === l ? null : l,
            s = (0, e.useState)(
              Hr.translationKeys.gatherParentEmail.unknownError
            ),
            u = s[0],
            d = s[1],
            f = Hr.translationKeys.emailSentConfirmation,
            p = Cr({
              translate: r,
              title: r(Hr.translationKeys.gatherParentEmail.unknownError),
              body: t().createElement("p", null, r(u)),
              actionButtonTranslateKey: f.btnText,
              onAction: function () {
                d(""), m.close(), i();
              },
              onHide: i,
            }),
            y = p[0],
            m = p[1],
            h = function () {
              return co(void 0, void 0, void 0, function () {
                var e, t, n, r, i, l, s, u;
                return so(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return (
                        f.trys.push([0, 2, , 3]),
                        [
                          4,
                          qr.sendRequestToAllParents({
                            requestType: o,
                            requestDetails: c,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (e = f.sent()),
                        (t = null == c ? void 0 : c.newBirthdate),
                        (n = new Date(t)),
                        (r =
                          o === Qr.UpdateBirthdate
                            ? lo.getAgeRange(n)
                            : void 0),
                        (function (e) {
                          var t = e.requestType,
                            n = e.sessionId,
                            r = e.extraState,
                            o = e.details,
                            a = ro(t, o);
                          oo(to.eventName.authPageLoad, a.settingsRequestSent, {
                            state: no(t, n, r, o),
                            associatedText: to.text.requestSent,
                          });
                        })({
                          requestType: o,
                          extraState: r,
                          sessionId: e.sessionId,
                          details: c,
                        }),
                        a(e.sessionId),
                        [3, 3]
                      );
                    case 2:
                      return (
                        (i = f.sent()),
                        (l = null !== (u = i) && void 0 !== u ? u : $r),
                        (s = Jr(l.data.code)) === zr.SenderFloodedRequestCreated
                          ? a(l.data.sessionId, void 0, !0)
                          : (d(s), m.open()),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            };
          return (
            (0, e.useEffect)(function () {
              h();
            }, []),
            t().createElement("div", null, y)
          );
        },
        fo = {
          collectEmailModalSurfaceName: "vpc-upsell-web",
          vpcRequestDefaultConsentName: "vpcRequestLinkDefault",
          vpcRequestLinkSubjectToPCConsentName: "vpcRequestLinkSubjectToPC",
          vpcRequestLinkNotSubjectToPCConsentName:
            "vpcRequestLinkNotSubjectToPC",
        },
        po = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        yo = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        mo = function (n, o, a, i, l, c) {
          var s,
            u = Hr.chargebackWizardSessionTokenLocalStorageKey,
            d = Hr.emailRegex,
            f = Hr.translationKeys.gatherParentEmail,
            p = (0, e.useState)(!1),
            y = p[0],
            m = p[1],
            h = (0, e.useState)(!1),
            v = h[0],
            g = h[1],
            b = (0, e.useState)("pending"),
            S = b[0],
            C = b[1],
            w = (0, e.useState)(!1),
            E = w[0],
            P = w[1],
            T = (0, e.useState)(""),
            k = T[0],
            A = T[1],
            x = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return m(!0);
                },
                close: function () {
                  return m(!1);
                },
              };
            }, []),
            I = (0, e.useState)(""),
            D = I[0],
            M = I[1];
          (0, e.useEffect)(function () {
            !(function (e) {
              var t = e.requestType,
                n = e.extraState,
                r = e.details,
                o = ro(t, r);
              oo(to.eventName.authModalShown, o.parentalEntry, {
                field: to.field.emailModal,
                associatedText: to.text.enterParentEmail,
                state: no(t, void 0, n, r),
              });
            })({ requestType: o, details: l, extraState: c });
          }, []),
            (0, e.useEffect)(function () {
              po(void 0, void 0, void 0, function () {
                var e;
                return yo(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        [4, Vt(Hr.isChildSubjectToPCFeatureName)]
                      );
                    case 1:
                      return (
                        (e = t.sent()),
                        g(e.access === bt.Granted),
                        C("success"),
                        [3, 3]
                      );
                    case 2:
                      return t.sent(), C("failed"), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }, []);
          var O = (0, e.useMemo)(
              function () {
                return "success" !== S
                  ? fo.vpcRequestDefaultConsentName
                  : v
                  ? fo.vpcRequestLinkSubjectToPCConsentName
                  : fo.vpcRequestLinkNotSubjectToPCConsentName;
              },
              [v, S]
            ),
            U =
              r.LegallySensitiveContentService.useLegallySensitiveContentAndActions(
                O,
                fo.collectEmailModalSurfaceName
              ),
            j = U[0],
            V = U[1],
            R =
              null !== (s = null == j ? void 0 : j.wordsOfConsent) &&
              void 0 !== s
                ? s
                : {},
            F = (0, e.useMemo)(
              function () {
                var e;
                return t().createElement("span", {
                  dangerouslySetInnerHTML: {
                    __html:
                      null !== (e = R.description) && void 0 !== e ? e : "",
                  },
                });
              },
              [R.description]
            ),
            L = new RegExp(d),
            W = function () {
              return k.length > 0 && !L.test(k)
                ? n(f.invalidEmailError)
                : D
                ? n(D)
                : "";
            },
            B = function () {
              return po(void 0, void 0, void 0, function () {
                var e, t, n, r, i;
                return yo(this, function (s) {
                  switch (s.label) {
                    case 0:
                      M(""),
                        Ot.localStorageService.removeLocalStorage(u),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          qr.sendRequestToNewParent({
                            email: k,
                            requestType: o,
                            requestDetails: l,
                            auditData: V.getBase64EncodedAuditHeader(),
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (e = s.sent()),
                        (function (e) {
                          var t = e.requestType,
                            n = e.extraState,
                            r = e.sessionId,
                            o = e.details,
                            a = ro(t, o);
                          oo(to.eventName.authButtonClick, a.parentalEntry, {
                            btn: to.btn.submit,
                            associatedText: to.text.sendEmail,
                            state: no(t, r, n, o),
                          });
                        })({
                          requestType: o,
                          sessionId: e.sessionId,
                          details: l,
                          extraState: c,
                        }),
                        P(!1),
                        x.close(),
                        a(e.sessionId, k),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (t = s.sent()),
                        A(""),
                        P(!1),
                        (n = null !== (i = t) && void 0 !== i ? i : $r),
                        (r = Jr(n.data.code)) ===
                          zr.SenderFloodedRequestCreated &&
                          a(n.data.sessionId, void 0, !0),
                        M(r),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            },
            _ = t().createElement(
              t().Fragment,
              null,
              t().createElement(
                "div",
                { className: "parental-consent-modal-body" },
                F
              ),
              t().createElement(
                "form",
                { className: "form-horizontal", autoComplete: "off" },
                t().createElement(
                  "div",
                  { id: "parent-email-container", className: "form-group" },
                  t().createElement(
                    "label",
                    {
                      htmlFor: "parent-email-address",
                      className: "form-control-label",
                    },
                    R.textboxLabel
                  ),
                  t().createElement("input", {
                    id: "parent-email-address",
                    type: "email",
                    className: "form-control input-field",
                    placeholder: R.placeholderText,
                    autoComplete: "off",
                    value: k,
                    onChange: function (e) {
                      A(e.target.value), M("");
                    },
                    onFocus: function () {
                      return (function (e) {
                        var t = e.requestType,
                          n = e.extraState,
                          r = e.details,
                          o = ro(t, r);
                        oo(to.eventName.authFormInteraction, o.parentalEntry, {
                          field: to.field.email,
                          associatedText: to.text.enterParentEmail,
                          state: no(t, void 0, n, r),
                        });
                      })({ requestType: o, details: l, extraState: c });
                    },
                  })
                ),
                t().createElement("input", {
                  type: "text",
                  className: "hidden",
                  name: "fake-username",
                }),
                t().createElement("input", {
                  type: "password",
                  className: "hidden",
                  name: "fake-password",
                  autoComplete: "new-password",
                })
              ),
              t().createElement(
                "div",
                { className: "form-group" },
                t().createElement(
                  "p",
                  { className: "text-error form-control-label" },
                  W()
                )
              ),
              t().createElement("div", {
                className:
                  "text-footer access-management-upsell-inner-modal-text-footer",
                dangerouslySetInnerHTML: { __html: R.footer },
              })
            ),
            K = t().createElement(
              N.Modal,
              {
                show: y,
                onHide: function () {
                  x.close(), i();
                },
                backdrop: !0,
                className: "access-management-upsell-inner-modal",
                size: "sm",
                "aria-labelledby": "access-management-upsell-inner-modal-title",
                centered: !0,
              },
              t().createElement(
                N.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  {
                    className:
                      "access-management-upsell-inner-modal-title-container",
                  },
                  t().createElement(
                    N.Modal.Title,
                    { id: "access-management-upsell-inner-modal-title" },
                    R.title
                  )
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    onClick: function () {
                      x.close(), i();
                    },
                  },
                  t().createElement("span", { className: "icon-close" })
                )
              ),
              t().createElement(N.Modal.Body, null, _),
              t().createElement(
                N.Modal.Footer,
                null,
                t().createElement(
                  N.Button,
                  {
                    variant: N.Button.variants.primary,
                    size: N.Button.sizes.medium,
                    width: N.Button.widths.full,
                    isDisabled: "" === k || "" !== W(),
                    isLoading: E,
                    onClick: function () {
                      return po(void 0, void 0, void 0, function () {
                        return yo(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return P(!0), [4, B()];
                            case 1:
                              return e.sent(), [2];
                          }
                        });
                      });
                    },
                  },
                  R.button
                )
              )
            );
          return [K, x];
        },
        ho = function (n) {
          var r = n.translate,
            o = n.consentType,
            a = n.successCallback,
            i = n.onHidecallback,
            l = n.isPrologueUsed,
            c = n.value,
            s = n.source,
            u = w(Qt),
            d = mo(r, o, a, i, c, s),
            f = d[0],
            p = d[1];
          return (
            (0, e.useEffect)(function () {
              if (!l) {
                var e = Object.keys(c)[0];
                Nr(u, Hr.events.vpc, e, c);
              }
              p.open();
            }, []),
            t().createElement(t().Fragment, null, f)
          );
        },
        vo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        go = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        bo = {
          getLinkedParentEmails: function () {
            return vo(void 0, void 0, Promise, function () {
              var e;
              return go(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = { url: Fr, withCredentials: !0 }),
                      [4, i.httpService.get(e)]
                    );
                  case 1:
                    return [2, t.sent().data];
                }
              });
            });
          },
        },
        So = bo,
        Co = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        wo = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Eo = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.recourse,
              a = n.onHidecallback,
              i = n.isPrologueUsed,
              l = n.value,
              c = void 0 === l ? null : l,
              s = n.source,
              u = Hr.translationKeys.emailSentConfirmation,
              d = o.action,
              f = o.parentConsentTypes,
              p = null == f ? void 0 : f[0],
              y = (0, e.useState)([]),
              m = y[0],
              h = y[1],
              v = (0, e.useState)(!0),
              g = v[0],
              b = v[1],
              S = t().createElement("p", {
                dangerouslySetInnerHTML: {
                  __html: r(u.oneParentBody, { parentEmail: m[0] }),
                },
              }),
              C = t().createElement("p", null, r(u.pluralParentBody)),
              w = t().createElement("p", null, r(u.emailNotSentBody)),
              E = (0, e.useMemo)(
                function () {
                  return g ? (1 === m.length ? S : C) : w;
                },
                [g, m]
              ),
              P = Cr({
                translate: r,
                title: r(u.title),
                body: E,
                actionButtonTranslateKey: u.btnText,
                onAction: function () {
                  k.close(), a();
                },
                onHide: a,
              }),
              T = P[0],
              k = P[1];
            (0, e.useEffect)(
              function () {
                d === Et.ParentConsentRequest &&
                  Co(void 0, void 0, void 0, function () {
                    return wo(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            So.getLinkedParentEmails().then(function (e) {
                              h(e.parentEmails);
                            }),
                          ];
                        case 1:
                          return e.sent(), [2];
                      }
                    });
                  });
              },
              [d]
            );
            var A = function (e, t, n) {
              if (
                (t && h([t]), n && b(!1), k.open(), p === Qr.UpdateBirthdate)
              ) {
                var r = null == c ? void 0 : c.newBirthdate,
                  o = new Date(r),
                  a = lo.getAgeRange(o);
                ao({
                  requestType: Qr.UpdateBirthdate,
                  extraState: a,
                  sessionId: e,
                });
              } else ao({ requestType: p, sessionId: e, details: c });
            };
            return t().createElement(
              "div",
              null,
              d === Et.ParentConsentRequest &&
                t().createElement(uo, {
                  translate: r,
                  consentType: p,
                  successCallBack: A,
                  onHideCallback: a,
                  value: c,
                }),
              d === Et.ParentLinkRequest &&
                t().createElement(ho, {
                  translate: r,
                  consentType: p,
                  successCallback: A,
                  onHidecallback: a,
                  value: c,
                  isPrologueUsed: i,
                  source: s,
                }),
              T
            );
          },
          {
            common: ["CommonUI.Controls", "CommonUI.Features", "Amp.Upsell"],
            feature: "Feature.Parents",
          }
        );
      !(function (e) {
        (e.control = "control"),
          (e.askYourParentTitle = "askYourParentTitle"),
          (e.permissionNeededTitle = "permissionNeededTitle"),
          (e.visualized = "visualized"),
          (e.newPrologueNoVisual = "newPrologueNoVisual"),
          (e.newPrologueVisual = "newPrologueVisual"),
          (e.newOneScreenVisual = "newOneScreenVisual");
      })(Zr || (Zr = {}));
      var Po = Zr,
        To = { CanCorrectAge: "CanCorrectAge" },
        ko = {};
      function Ao(e, t, n) {
        var r = (function (e) {
          return ko[e];
        })(e);
        return n(r || t);
      }
      function xo(e, t, n, r, o, a) {
        var i = n(t);
        if (r.includes(Et.GovernmentId) && r.includes(Et.ParentConsentRequest))
          if (e === To.CanCorrectAge) i = n(Hn.IdvAndVpcAgeCorrection);
          else i = n(t);
        if (1 === r.length && r.includes(Et.ParentConsentRequest)) {
          switch (!0) {
            case void 0 !== (null == o ? void 0 : o.enablePurchases):
              i = n(Hn.VpcEnablePurchase);
              break;
            case "Unblock" === (null == o ? void 0 : o.friendManagementAction):
              i = n(Hn.VpcUnblockUser, { displayName: o.displayName });
              break;
            case "Unblock" ===
              (null == o ? void 0 : o.experienceManagementAction):
              i = n(Hn.VpcUnblockExperience, {
                experienceName: o.experienceName,
              });
              break;
            case void 0 !== (null == o ? void 0 : o.allowFacialAgeEstimation):
              i = n(Hn.VpcAllowFacialAgeEstimation);
              break;
            case void 0 !== (null == o ? void 0 : o.contentAgeRestriction):
              i = n(Hn.VpcContentAgeRestriction);
              break;
            case void 0 !==
              (null == o ? void 0 : o.whoCanWhisperChatWithMeInExperiences):
              i = n(Hn.VpcWhisperChatWithMeInExperiences);
              break;
            case void 0 !==
              (null == o ? void 0 : o.whoCanChatWithMeInExperiences):
              i = n(Hn.VpcExperienceChat);
              break;
            case void 0 !==
              (null == o ? void 0 : o.allowCrossAgeGroupStudioCollaboration):
              i = n(Hn.VpcStudioCollaboration);
              break;
            default:
              i = n(t);
          }
          if (a === Po.newPrologueNoVisual || a === Po.newPrologueVisual)
            return i + "<br /><br />" + n(Hn.PrologueFetchParentExperiment);
        }
        if (1 === r.length && r.includes(Et.AgeEstimation))
          switch (!0) {
            case void 0 !==
              (null == o ? void 0 : o.whoCanChatWithMeInExperiences):
              i = n(Hn.FaeExperienceChat);
              break;
            case void 0 !==
              (null == o ? void 0 : o.whoCanWhisperChatWithMeInExperiences):
              i = n(Hn.FaeExperienceWhisperChat);
              break;
            case void 0 !==
              (null == o ? void 0 : o.allowCrossAgeGroupStudioCollaboration):
              i = n(Hn.FaeStudioCollaboration);
              break;
            default:
              i = n(t);
          }
        return i;
      }
      var Io = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = n.recourseParameters,
            i = n.expChildModalType,
            l = n.source,
            c = Bn(),
            s = w(Qt),
            u = w(en).data.recourses,
            d = a ? Object.keys(a)[0] : void 0,
            f = Hn.Vpc,
            p = xo(s, f, r, [Et.ParentConsentRequest], a, i),
            y = t().createElement(
              "div",
              null,
              i === Po.newPrologueVisual &&
                t().createElement("div", { className: "ask-your-parent-lock" }),
              t().createElement("div", {
                className: "text-description",
                dangerouslySetInnerHTML: { __html: p },
              })
            ),
            m = qn.AskYourParent,
            h = Ao(s, m, r),
            v = Kn.AskNow,
            g = Kn.Cancel,
            b = Cr({
              translate: r,
              title: h,
              body: y,
              actionButtonTranslateKey: v,
              neutralButtonTranslateKey: g,
              onAction: function () {
                Ir(s, !0, d, a), c(Gt(u[0])), c(zt(Pt.Verification)), C.close();
              },
              size: "sm",
              onHide: function () {
                Mr(s, "Vpc", d, a, l), o();
              },
              onNeutral: function () {
                Mr(s, "Vpc", d, a, l), o();
              },
            }),
            S = b[0],
            C = b[1];
          return (
            (0, e.useEffect)(function () {
              C.open(), Nr(s, "Vpc", d, a, l);
            }, []),
            [S, C]
          );
        },
        Do = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = Bn(),
            i = w(Qt),
            l = w(en).data.recourses,
            c = Hn.IdvAndVpc,
            s = xo(i, c, r, [Et.GovernmentId, Et.ParentConsentRequest]),
            u = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                " ",
                s,
                " "
              )
            ),
            d = qn.VerifyYourAge,
            f = Ao(i, d, r),
            p = Kn.VerifyID,
            y = Kn.EmailMyParent,
            m = Cr({
              translate: r,
              title: f,
              body: u,
              dualActionButton: !0,
              actionButtonTranslateKey: p,
              neutralButtonTranslateKey: y,
              onAction: function () {
                xr(i, !1);
                var e = l.filter(function (e) {
                  return e.action === Et.GovernmentId;
                })[0];
                a(Gt(e)), a(zt(Pt.Verification)), v.close();
              },
              size: "sm",
              onHide: function () {
                Mr(i, "IdvOrVpc"), o();
              },
              onNeutral: function () {
                Ir(i, !1);
                var e = l.filter(function (e) {
                  return e.action !== Et.GovernmentId;
                })[0];
                a(Gt(e)), a(zt(Pt.Verification)), v.close();
              },
            }),
            h = m[0],
            v = m[1];
          return (
            (0, e.useEffect)(function () {
              v.open(), Nr(i, "IdvOrVpc");
            }, []),
            [h, v]
          );
        },
        Mo = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = Bn(),
            i = w(Qt),
            l = w(en).data.recourses,
            c = Hn.Idv,
            s = xo(i, c, r, [Et.GovernmentId]),
            u = t().createElement(
              "div",
              null,
              t().createElement(
                "div",
                { className: "text-description" },
                " ",
                s,
                " "
              )
            ),
            d = qn.VerifyYourAge,
            f = Ao(i, d, r),
            p = Kn.VerifyID,
            y = Kn.Cancel,
            m = Cr({
              translate: r,
              title: f,
              body: u,
              actionButtonTranslateKey: p,
              neutralButtonTranslateKey: y,
              onAction: function () {
                xr(i, !0), a(Gt(l[0])), a(zt(Pt.Verification)), v.close();
              },
              size: "sm",
              onHide: function () {
                Mr(i, "Idv"), o();
              },
              onNeutral: function () {
                Mr(i, "Idv"), o();
              },
            }),
            h = m[0],
            v = m[1];
          return (
            (0, e.useEffect)(function () {
              v.open(), Nr(i, "Idv");
            }, []),
            [h, v]
          );
        },
        No = function (n) {
          var r = n.translate,
            o = n.onHide,
            a = n.recourseParameters,
            i = n.source,
            l = Bn(),
            c = w(Qt),
            s = w(en).data.recourses,
            u = a ? Object.keys(a)[0] : void 0,
            d = Hn.Fae,
            f = xo(c, d, r, [Et.AgeEstimation], a),
            p = t().createElement("div", {
              className: "text-description",
              dangerouslySetInnerHTML: { __html: f },
            }),
            y = qn.CheckYourAge,
            m = Ao(c, y, r),
            h = Kn.Continue,
            v = Kn.Cancel,
            g = Cr({
              translate: r,
              title: m,
              body: p,
              actionButtonTranslateKey: h,
              neutralButtonTranslateKey: v,
              onAction: function () {
                l(Gt(s[0])), l(zt(Pt.Verification)), S.close();
              },
              size: "sm",
              onHide: function () {
                Mr(c, "Fae", u, a, i), o();
              },
              onNeutral: function () {
                Mr(c, "Fae", u, a, i), o();
              },
            }),
            b = g[0],
            S = g[1];
          return (
            (0, e.useEffect)(function () {
              S.open(), Nr(c, "Fae", u, a, i);
            }, []),
            [b, S]
          );
        },
        Oo = function (t) {
          var n,
            r,
            o,
            a,
            i = t.translate,
            l = t.onHide,
            c = t.recourseParameters,
            s = t.expChildModalType,
            u = t.featureSpecificParams,
            d = Bn(),
            f = [null, null],
            p = f[0],
            y = f[1],
            m = w(en).data.recourses,
            h = m.map(function (e) {
              return e.action;
            });
          if (1 === h.length)
            switch (h[0]) {
              case Et.ParentConsentRequest:
              case Et.ParentLinkRequest:
                (n = Io({
                  translate: i,
                  onHide: l,
                  recourseParameters: c,
                  expChildModalType: s,
                  source: null == u ? void 0 : u.source,
                })),
                  (p = n[0]),
                  (y = n[1]);
                break;
              case Et.GovernmentId:
                (r = Mo({ translate: i, onHide: l })), (p = r[0]), (y = r[1]);
                break;
              case Et.AgeEstimation:
                (o = No({
                  translate: i,
                  onHide: l,
                  recourseParameters: c,
                  source: null == u ? void 0 : u.source,
                })),
                  (p = o[0]),
                  (y = o[1]);
            }
          return (
            2 === h.length &&
              h.includes(Et.GovernmentId) &&
              (h.includes(Et.ParentConsentRequest) ||
                h.includes(Et.ParentLinkRequest)) &&
              ((a = Do({ translate: i, onHide: l })), (p = a[0]), (y = a[1])),
            (0, e.useEffect)(
              function () {
                p ? y.open() : d(zt(Pt.Verification));
              },
              [d, p, y, m]
            ),
            p
          );
        },
        Uo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        jo = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Vo = function (t) {
          var n = (0, e.useState)({}),
            o = n[0],
            a = n[1];
          return (
            (0, e.useEffect)(
              function () {
                (function (e) {
                  return Uo(void 0, void 0, Promise, function () {
                    return jo(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            null === r.ExperimentationService ||
                            void 0 === r.ExperimentationService
                              ? void 0
                              : r.ExperimentationService.getAllValuesForLayer
                          )
                            ? [
                                4,
                                r.ExperimentationService.getAllValuesForLayer(
                                  e
                                ),
                              ]
                            : [3, 2];
                        case 1:
                          return [2, t.sent()];
                        case 2:
                          return [2, {}];
                      }
                    });
                  });
                })(t).then(
                  function (e) {
                    a(e);
                  },
                  function () {
                    a({});
                  }
                );
              },
              [t]
            ),
            o
          );
        },
        Ro = function () {
          return (
            (Ro =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Ro.apply(this, arguments)
          );
        };
      function Fo(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      function Lo(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
              e[t] && (n = Lo(e[t])) && (r && (r += " "), (r += n));
          } else for (n in e) e[n] && (r && (r += " "), (r += n));
        return r;
      }
      var Wo = function () {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) && (t = Lo(e)) && (r && (r += " "), (r += t));
          return r;
        },
        Bo = function () {
          return t().createElement("div", {
            role: "presentation",
            className:
              "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none",
          });
        };
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
          (o.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(o, r.firstChild)
              : r.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(document.createTextNode(e));
        }
      })(
        "@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}"
      );
      var _o,
        Ko = function (e) {
          var n = e.width,
            r = e.height;
          return t().createElement(
            "svg",
            {
              className: "foundation-web-loading-spinner",
              width: n,
              height: r,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t().createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "currentColor",
              d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z",
            })
          );
        },
        qo = { Large: 24, Medium: 20, Small: 16, XSmall: 12 },
        Ho = {
          Large: [
            "radius-medium",
            "text-label-large",
            "height-1200",
            "padding-x-large",
          ],
          Medium: [
            "radius-medium",
            "text-label-medium",
            "height-1000",
            "padding-x-medium",
          ],
          Small: [
            "radius-medium",
            "text-label-small",
            "height-800",
            "padding-x-small",
          ],
          XSmall: [
            "radius-small",
            "text-label-small",
            "height-600",
            "padding-x-small",
          ],
        },
        Go = {
          Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
          Standard: ["bg-action-standard", "content-action-standard"],
          SoftEmphasis: [
            "bg-action-soft-emphasis",
            "content-action-soft-emphasis",
          ],
          ActionUtility: ["bg-action-subtle", "content-action-standard"],
          Alert: ["bg-action-alert", "content-action-alert"],
        },
        zo = {
          Emphasis: ["bg-action-standard", "content-action-standard"],
          Standard: ["bg-action-standard", "content-action-standard"],
          SoftEmphasis: ["bg-action-standard", "content-action-standard"],
          ActionUtility: ["bg-action-subtle", "content-action-standard"],
          Alert: ["bg-action-standard", "content-action-standard"],
        },
        $o = (0, e.forwardRef)(function (e, n) {
          var r = e.children,
            o = e.className,
            a = e.style,
            i = e.as,
            l = e.isDisabled,
            c = void 0 !== l && l,
            s = e.isLoading,
            u = void 0 !== s && s,
            d = e.size,
            f = void 0 === d ? "Large" : d,
            p = e.variant,
            y = void 0 === p ? "Emphasis" : p,
            m = Fo(e, [
              "children",
              "className",
              "style",
              "as",
              "isDisabled",
              "isLoading",
              "size",
              "variant",
            ]),
            h = null != i ? i : "button",
            v = m.href,
            g = Fo(m, ["href"]);
          return t().createElement(
            h,
            Ro(
              {
                ref: n,
                type: "button" === h ? "button" : void 0,
                disabled: c,
                "aria-disabled": c,
                href: c ? void 0 : v,
              },
              g,
              {
                className: Wo(
                  "foundation-web-button",
                  "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
                  c ? "opacity-[0.5]" : "cursor-pointer",
                  "flex items-center justify-center stroke-none padding-y-none select-none",
                  Ho[f],
                  c ? zo[y] : Go[y],
                  o
                ),
                style: Ro({ textDecoration: "none" }, a),
              }
            ),
            t().createElement(Bo, null),
            u &&
              t().createElement(
                "div",
                { "aria-hidden": "true", className: "absolute flex" },
                t().createElement(Ko, { width: qo[f], height: qo[f] })
              ),
            t().createElement(
              "span",
              {
                className: Wo(
                  "padding-y-xsmall text-truncate-end text-no-wrap",
                  u && "invisible"
                ),
              },
              r
            )
          );
        }),
        Yo = "Action.Close";
      !(function (e) {
        (e.Checkbox = "checkbox"), (e.Toggle = "toggle"), (e.Notice = "notice");
      })(_o || (_o = {}));
      var Jo,
        Xo = _o,
        Qo = function (e) {
          var n = e.isChecked,
            r = e.setIsChecked,
            o = e.wordsOfConsent;
          return t().createElement(
            "div",
            { className: "small text" },
            t().createElement("input", {
              id: "consent-checkbox",
              type: "checkbox",
              checked: n,
              onChange: function () {
                return null == r ? void 0 : r(!n);
              },
            }),
            t().createElement(
              "label",
              { htmlFor: "consent-checkbox", className: "checkbox-label" },
              o
            )
          );
        };
      Qo.displayName = "CheckboxConsentForm";
      var Zo = function () {
        return null;
      };
      Zo.displayName = "ToggleConsentForm";
      var ea = function (e) {
        var n = e.wordsOfConsent;
        return t().createElement(t().Fragment, null, n);
      };
      ea.displayName = "NoticeConsentForm";
      var ta,
        na =
          (((Jo = {})[Xo.Checkbox] = Qo),
          (Jo[Xo.Toggle] = Zo),
          (Jo[Xo.Notice] = ea),
          Jo);
      !(function (e) {
        (e.contentAgeRestriction = "contentAgeRestriction"),
          (e.phoneNumberDiscoverability = "phoneNumberDiscoverability"),
          (e.whoCanChatWithMe = "whoCanChatWithMe"),
          (e.whoCanChatWithMeInApp = "whoCanChatWithMeInApp"),
          (e.whoCanJoinMeInExperiences = "whoCanJoinMeInExperiences"),
          (e.whoCanSeeMyInventory = "whoCanSeeMyInventory"),
          (e.whoCanTradeWithMe = "whoCanTradeWithMe"),
          (e.themeType = "themeType"),
          (e.canUploadContacts = "canUploadContacts"),
          (e.updateFriendsAboutMyActivity = "updateFriendsAboutMyActivity"),
          (e.privateServerPrivacy = "privateServerPrivacy"),
          (e.allowSellShareData = "allowSellShareData"),
          (e.allowPersonalizedAdvertising = "allowPersonalizedAdvertising"),
          (e.monthlySpendLimit = "monthlySpendLimit"),
          (e.monthlySpendLimitCurrencyCode = "monthlySpendLimitCurrencyCode"),
          (e.monthlySpendLimitNotificationType =
            "monthlySpendLimitNotificationType"),
          (e.enablePurchases = "enablePurchases"),
          (e.whoCanGroupChatWithMeInApp = "whoCanGroupChatWithMeInApp"),
          (e.whoCanWhisperChatWithMeInExperiences =
            "whoCanWhisperChatWithMeInExperiences"),
          (e.whoCanChatWithMeInExperiences = "whoCanChatWithMeInExperiences"),
          (e.dailyScreenTimeLimit = "dailyScreenTimeLimit"),
          (e.whoCanSeeMySocialNetworks = "whoCanSeeMySocialNetworks"),
          (e.allowThirdPartyAppPermissions = "allowThirdPartyAppPermissions"),
          (e.allowEnablePushNotifications = "allowEnablePushNotifications"),
          (e.allowEnableEmailNotifications = "allowEnableEmailNotifications"),
          (e.allowEnableGroupNotifications = "allowEnableGroupNotifications"),
          (e.allowEnableExperienceNotifications =
            "allowEnableExperienceNotifications"),
          (e.whoCanOneOnOnePartyWithMe = "whoCanOneOnOnePartyWithMe"),
          (e.whoCanGroupPartyWithMe = "whoCanGroupPartyWithMe"),
          (e.phoneNumberDiscoverabilityV2 = "phoneNumberDiscoverabilityV2"),
          (e.whoCanPartyWithMe = "whoCanPartyWithMe"),
          (e.whoCanUsePartyChatWithMe = "whoCanUsePartyChatWithMe"),
          (e.whoCanUsePartyVoiceWithMe = "whoCanUsePartyVoiceWithMe"),
          (e.allowFacialAgeEstimation = "allowFacialAgeEstimation");
      })(ta || (ta = {}));
      var ra,
        oa = ta;
      !(function (e) {
        (e.phoneNumberDiscoverabilitySetting =
          "phoneNumberDiscoverabilitySetting"),
          (e.phoneNumberDiscoverabilitySettingParentSide =
            "phoneNumberDiscoverabilitySettingParentSide"),
          (e.phoneNumberDiscoverabilityUpsell =
            "phoneNumberDiscoverabilityUpsell"),
          (e.personalizedAdsSetting = "personalizedAdsSetting"),
          (e.sellShareDataSetting = "sellShareDataSetting"),
          (e.allowMarketingEmailCheckboxEmailVerification =
            "allowMarketingEmailCheckboxEmailVerification"),
          (e.voiceDataConsentSetting = "voiceDataConsentSetting"),
          (e.voiceDataConsentSettingParentSide =
            "voiceDataConsentSettingParentSide"),
          (e.whoCanPartyWithMe = "whoCanPartyWithMe"),
          (e.whoCanPartyWithMeParentSide = "whoCanPartyWithMeParentSide"),
          (e.whoCanUsePartyChatWithMe = "whoCanUsePartyChatWithMe"),
          (e.whoCanUsePartyChatWithMeParentSide =
            "whoCanUsePartyChatWithMeParentSide"),
          (e.whoCanUsePartyVoiceWithMe = "whoCanUsePartyVoiceWithMe"),
          (e.whoCanUsePartyVoiceWithMeParentSide =
            "whoCanUsePartyVoiceWithMeParentSide"),
          (e.vpcRequestLinkSubjectToPC = "vpcRequestLinkSubjectToPC"),
          (e.vpcRequestLinkNotSubjectToPC = "vpcRequestLinkNotSubjectToPC"),
          (e.vpcRequestLinkDefault = "vpcRequestLinkDefault");
      })(ra || (ra = {}));
      var aa,
        ia = ra,
        la = {
          phoneNumberDiscoverabilityV2: ia.phoneNumberDiscoverabilityUpsell,
        };
      !(function (e) {
        (e.ModalShown = "ModalShown"),
          (e.Confirm = "Confirm"),
          (e.Cancel = "Cancel"),
          (e.CloseModal = "CloseModal");
      })(aa || (aa = {}));
      var ca,
        sa,
        ua = "authButtonClick",
        da = "authModalShown",
        fa = function (e) {
          return {
            name: da,
            context: e,
            params: {
              field: "phoneDiscoverability",
              associatedText: "Turn on friend discovery",
            },
          };
        },
        pa = function (e) {
          return {
            name: ua,
            context: e,
            params: {
              btn: "phoneDiscoverabilityConfirm",
              associatedText: "Turn on",
            },
          };
        },
        ya = function (e) {
          return {
            name: ua,
            context: e,
            params: {
              btn: "phoneDiscoverabilityNotNow",
              associatedText: "Not now",
            },
          };
        },
        ma = function (e) {
          return {
            name: ua,
            context: e,
            params: { btn: "phoneDiscoverabilityClose", associatedText: "X" },
          };
        },
        ha = function (e) {
          return function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            try {
              e.apply(void 0, t);
            } catch (e) {}
          };
        },
        va = ha(function (e) {
          var t = fa(e);
          Ot.eventStreamService.sendEventWithTarget(
            t.name,
            t.context,
            t.params
          );
        }),
        ga = ha(function (e) {
          var t = pa(e);
          Ot.eventStreamService.sendEventWithTarget(
            t.name,
            t.context,
            t.params
          );
        }),
        ba = ha(function (e) {
          var t = ya(e);
          Ot.eventStreamService.sendEventWithTarget(
            t.name,
            t.context,
            t.params
          );
        }),
        Sa = ha(function (e) {
          var t = ma(e);
          Ot.eventStreamService.sendEventWithTarget(
            t.name,
            t.context,
            t.params
          );
        }),
        Ca =
          (((ca = {})[oa.phoneNumberDiscoverabilityV2] =
            (((sa = {})[aa.ModalShown] = va),
            (sa[aa.Confirm] = ga),
            (sa[aa.Cancel] = ba),
            (sa[aa.CloseModal] = Sa),
            sa)),
          ca),
        wa = function (e, t, n) {
          var r = Ca[t];
          return r && r[e] && r[e](n), null;
        },
        Ea = function (n, o, a) {
          var i,
            l = o.title,
            c = o.body,
            s = o.actionButtonText,
            u = o.neutralButtonText,
            d = o.onAction,
            f = o.onHide,
            p = o.onNeutral,
            y = o.consentFormType,
            m = o.surface,
            h = o.context,
            v = ((i = a.settingName), la[i]),
            g =
              r.LegallySensitiveContentService.useLegallySensitiveContentAndActions(
                v,
                m
              ),
            b = g[0],
            S = g[1],
            C = (0, e.useState)(!1),
            w = C[0],
            E = C[1],
            P = (0, e.useMemo)(function () {
              return {
                open: function () {
                  return E(!0);
                },
                close: function () {
                  return E(!1);
                },
              };
            }, []),
            T = (0, e.useState)(!1),
            k = T[0],
            A = T[1];
          (0, e.useEffect)(
            function () {
              y === Xo.Notice && A(!0);
            },
            [y]
          );
          var x,
            I = t().createElement(
              N.Modal,
              {
                show: w,
                onHide: function () {
                  P.close(), f();
                },
                backdrop: !0,
                className:
                  "access-management-upsell-inner-modal user-settings-modal",
                size: "md",
                "aria-labelledby": "user-settings-modal-title",
                scrollable: !0,
                centered: !0,
              },
              t().createElement(
                N.Modal.Header,
                { useBaseBootstrapComponent: !0 },
                t().createElement(
                  "div",
                  { className: "user-settings-modal-title-container" },
                  t().createElement(
                    N.Modal.Title,
                    { id: "user-settings-modal-title" },
                    b.wordsOfConsent.title || l
                  )
                ),
                t().createElement(
                  "button",
                  {
                    type: "button",
                    className: "close close-button",
                    title: n(Yo),
                    onClick: function () {
                      !(function (e, t) {
                        wa(aa.CloseModal, e, t);
                      })(a.settingName, h),
                        P.close(),
                        f();
                    },
                  },
                  t().createElement("span", { className: "icon-close" })
                )
              ),
              t().createElement(
                N.Modal.Body,
                null,
                c,
                (x = na[y])
                  ? t().createElement(
                      "div",
                      { className: "consent-form" },
                      t().createElement(x, {
                        isChecked: k,
                        setIsChecked: A,
                        wordsOfConsent: b.wordsOfConsent.consent,
                      })
                    )
                  : t().createElement(t().Fragment, null)
              ),
              t().createElement(
                N.Modal.Footer,
                null,
                t().createElement(
                  $o,
                  {
                    className: "modal-half-width-button",
                    variant: "Standard",
                    size: "Medium",
                    onClick: function () {
                      !(function (e, t) {
                        wa(aa.Cancel, e, t);
                      })(a.settingName, h),
                        P.close(),
                        null == p || p(),
                        f();
                    },
                  },
                  b.wordsOfConsent.neutralButtonText || u
                ),
                t().createElement(
                  $o,
                  {
                    className: "modal-half-width-button modal-primary-button",
                    variant: "Emphasis",
                    size: "Medium",
                    isDisabled: !k,
                    onClick: function () {
                      !(function (e, t) {
                        wa(aa.Confirm, e, t);
                      })(a.settingName, h),
                        P.close(),
                        S.updateSettingWithAuditing(
                          (function (e) {
                            return e === oa.phoneNumberDiscoverabilityV2
                              ? oa.phoneNumberDiscoverability
                              : e;
                          })(a.settingName),
                          a.settingValue
                        ),
                        null == d || d(),
                        f();
                    },
                  },
                  b.wordsOfConsent.actionButtonText || s
                )
              )
            );
          return [I, P];
        },
        Pa = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.recourse,
              a = n.updateSettingsModalProps,
              i = Ea(r, a, o.userSettings),
              l = i[0],
              c = i[1];
            return (
              (0, e.useEffect)(function () {
                var e, t;
                (e = o.userSettings.settingName),
                  (t = o.userSettings.settingValue),
                  wa(aa.ModalShown, e, t),
                  c.open();
              }, []),
              t().createElement("div", null, l)
            );
          },
          {
            common: ["CommonUI.Controls"],
            feature: "Feature.LegallySensitiveContent",
          }
        ),
        Ta = "/my/account#!/info",
        ka = "Modal.Title",
        Aa = "Modal.ContentText",
        xa = "Button.Cancel",
        Ia = "Button.Settings",
        Da = (0, c.withTranslations)(
          function (n) {
            var r = n.translate,
              o = n.onHide,
              a = (0, e.useState)(!1),
              i = a[0],
              l = a[1],
              c = (0, e.useMemo)(function () {
                return {
                  open: function () {
                    return l(!0);
                  },
                  close: function () {
                    return l(!1);
                  },
                };
              }, []);
            (0, e.useEffect)(function () {
              c.open();
            }, []);
            var s = function () {
                c.close(), o();
              },
              u = t().createElement(
                N.Modal,
                {
                  show: i,
                  onHide: s,
                  backdrop: !0,
                  className:
                    "access-management-upsell-inner-modal account-settings-redirect-modal",
                  "aria-labelledby": "account-settings-redirect-modal-title",
                  scrollable: !0,
                  centered: !0,
                },
                t().createElement(
                  N.Modal.Header,
                  { useBaseBootstrapComponent: !0 },
                  t().createElement(
                    "div",
                    {
                      className:
                        "account-settings-redirect-modal-title-container",
                    },
                    t().createElement(
                      N.Modal.Title,
                      { id: "account-settings-redirect-modal-title" },
                      r(ka)
                    )
                  ),
                  t().createElement(
                    "button",
                    {
                      type: "button",
                      className: "close close-button",
                      title: r(xa),
                      onClick: s,
                    },
                    t().createElement("span", { className: "icon-close" })
                  )
                ),
                t().createElement(N.Modal.Body, null, r(Aa)),
                t().createElement(
                  N.Modal.Footer,
                  null,
                  t().createElement(
                    $o,
                    {
                      className: "modal-half-width-button",
                      variant: "Standard",
                      size: "Medium",
                      onClick: s,
                    },
                    r(xa)
                  ),
                  t().createElement(
                    $o,
                    {
                      as: "a",
                      href: Ta,
                      className: "modal-half-width-button modal-primary-button",
                      variant: "Emphasis",
                      size: "Medium",
                    },
                    r(Ia)
                  )
                )
              );
            return t().createElement("div", null, u);
          },
          { common: [], feature: "Feature.AgeVerificationUpsell" }
        ),
        Ma = function () {
          return (
            (Ma =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Ma.apply(this, arguments)
          );
        },
        Na = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Oa = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        };
      var Ua,
        ja = function (n) {
          var r,
            o,
            a = n.translate,
            i = Bn(),
            l = w(tn),
            c = w(en),
            s = w(Xt),
            u = w(rn),
            d = w(Jt).loading,
            f = w(nn),
            p = (0, e.useState)(function (e) {
              return e;
            }),
            y = p[0],
            m = p[1],
            h = (0, e.useState)({}),
            v = h[0],
            g = h[1],
            b = (0, e.useState)(),
            S = b[0],
            C = b[1],
            E = (0, e.useState)(!1),
            P = E[0],
            T = E[1],
            k = (0, e.useState)(!1),
            A = k[0],
            x = k[1],
            I =
              null !==
                (r = Vo(
                  "AccountManagement.VerifiedParentalConsent.ChildExperience"
                ).expNewChildModal) && void 0 !== r
                ? r
                : Po.control;
          function D(e) {
            return Na(this, void 0, void 0, function () {
              var t, n, r, o, a, l, c, s, u, d, f;
              return Oa(this, function (p) {
                switch (p.label) {
                  case 0:
                    (t = e.detail),
                      (n = t.featureName),
                      (r = t.redirectLink),
                      (o = t.ampFeatureCheckData),
                      (a = t.isAsyncCall),
                      (l = t.usePrologue),
                      (c = t.ampRecourseData),
                      (s = t.featureSpecificData),
                      (u = t.closeCallback),
                      (d = t.namespace),
                      m(function () {
                        return function (e) {
                          return u(e);
                        };
                      }),
                      (p.label = 1);
                  case 1:
                    return (
                      p.trys.push([1, 3, , 4]),
                      [
                        4,
                        i(
                          Bt({
                            featureName: n,
                            ampFeatureCheckData: o,
                            namespace: d,
                          })
                        ),
                      ]
                    );
                  case 2:
                    return p.sent(), [3, 4];
                  case 3:
                    return p.sent(), [3, 4];
                  case 4:
                    return (
                      i(Ht(r)),
                      T(a),
                      o && i(qt(o)),
                      d && i(Yt(d)),
                      c && g(c),
                      s && C(s),
                      (f =
                        I === Po.control ||
                        I === Po.newPrologueNoVisual ||
                        I === Po.newPrologueVisual),
                      l && f ? (i($t(!0)), x(!0)) : i(zt(Pt.Verification)),
                      [2]
                    );
                }
              });
            });
          }
          function M() {
            y(c.data.access), i(Kt());
          }
          (0, e.useEffect)(
            function () {
              var e = D;
              return (
                window.addEventListener(_n, e),
                function () {
                  return window.removeEventListener(_n, e);
                }
              );
            },
            [I]
          ),
            (0, e.useEffect)(
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  a,
                  l,
                  s,
                  u,
                  d,
                  f = [bt.Granted, bt.Denied];
                (null == c ? void 0 : c.loading) ||
                  ((null === (e = null == c ? void 0 : c.data) || void 0 === e
                    ? void 0
                    : e.access) &&
                    f.includes(c.data.access) &&
                    "CanCorrectAge" !==
                      (null === (t = null == c ? void 0 : c.data) ||
                      void 0 === t
                        ? void 0
                        : t.featureName) &&
                    y(c.data.access),
                  (null ===
                    (r =
                      null === (n = null == c ? void 0 : c.data) || void 0 === n
                        ? void 0
                        : n.recourses) || void 0 === r
                    ? void 0
                    : r.length) > 0 &&
                    A &&
                    i(zt(Pt.Prologue)),
                  "CanCorrectAge" !==
                    (null === (o = null == c ? void 0 : c.data) || void 0 === o
                      ? void 0
                      : o.featureName) ||
                  c.data.access !== bt.Denied ||
                  (null !==
                    (null === (a = null == c ? void 0 : c.data) || void 0 === a
                      ? void 0
                      : a.recourses) &&
                    0 !==
                      (null ===
                        (s =
                          null === (l = null == c ? void 0 : c.data) ||
                          void 0 === l
                            ? void 0
                            : l.recourses) || void 0 === s
                        ? void 0
                        : s.length))
                    ? "CanCorrectAge" ===
                        (null === (u = null == c ? void 0 : c.data) ||
                        void 0 === u
                          ? void 0
                          : u.featureName) &&
                      (null === (d = null == c ? void 0 : c.data) ||
                      void 0 === d
                        ? void 0
                        : d.access) === bt.Granted &&
                      y(c.data.access)
                    : i(zt(Pt.Epilogue)));
              },
              [c, A]
            );
          var O = P
            ? function () {
                i(Kt()), y(bt.Denied);
              }
            : M;
          function U() {
            var e;
            if (f)
              switch (f.action) {
                case Et.AddedEmail:
                  return t().createElement(nr, { translate: a, onHide: M });
                case Et.AgeEstimation:
                  return t().createElement(gr, {
                    translate: a,
                    onHidecallback: O,
                    featureSpecificParams: S,
                    ageEstimation: !0,
                  });
                case Et.GovernmentId:
                  return t().createElement(dr, {
                    translate: a,
                    onHidecallback: O,
                    ageEstimation: !1,
                  });
                case Et.ParentConsentRequest:
                case Et.ParentLinkRequest:
                  return t().createElement(Eo, {
                    recourse: f,
                    translate: a,
                    onHidecallback: O,
                    value: v,
                    isPrologueUsed: u,
                    source: null == S ? void 0 : S.source,
                  });
                case Et.UserSettings:
                  return (null === (e = f.userSettings) || void 0 === e
                    ? void 0
                    : e.settingName) === oa.allowFacialAgeEstimation
                    ? t().createElement(Da, { translate: a, onHide: O })
                    : t().createElement(Pa, {
                        translate: a,
                        recourse: f,
                        updateSettingsModalProps: Ma(
                          {
                            onHide: function () {
                              var e;
                              O(),
                                null === (e = S.onHide) ||
                                  void 0 === e ||
                                  e.call(S);
                            },
                          },
                          S
                        ),
                      });
                default:
                  return t().createElement(jr, { translate: a });
              }
            return t().createElement(jr, { translate: a });
          }
          if (
            ((0, e.useEffect)(
              function () {
                o = U();
              },
              [f]
            ),
            d)
          )
            o = t().createElement(ir, null);
          else
            switch (l) {
              case Pt.Prologue:
                null != c.data &&
                  (o = t().createElement(Oo, {
                    translate: a,
                    onHide: O,
                    recourseParameters: v,
                    expChildModalType: I,
                    featureSpecificParams: S,
                  }));
                break;
              case Pt.Verification:
                null != c.data && (o = U());
                break;
              case Pt.Epilogue:
                o = t().createElement(jr, { translate: a, onHide: O });
                break;
              default:
                o = t().createElement(ir, null);
            }
          return t().createElement(
            t().Fragment,
            null,
            t().createElement(
              N.Modal,
              {
                show: s,
                onHide: M,
                size: "sm",
                "aria-labelledby": "access-management-modal-title",
                className: "access-management-upsell-modal",
                scrollable: "true",
                centered: "true",
              },
              o
            )
          );
        },
        Va = function () {
          return (
            (Va =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Va.apply(this, arguments)
          );
        },
        Ra = {
          titleTranslationKey: "Title.EnterParentEmailV2",
          titleSourceContentId: "1400648",
          parentEmailLabelTranslationKey: "Label.ParentEmail",
          parentEmailLabelSourceContentId: "2575432",
          parentEmailPlaceholderTranslationKey: "Label.EmailCapitalized",
          parentEmailPlaceholderSourceContentId: "1399624",
          parentEmailFooterTranslationKey: "Description.ParentalEmailFooter",
          parentEmailFooterSourceContentId: "332360",
          linkStart:
            '<a class="text-link" rel="noreferrer" target="_blank" href="https://en.help.roblox.com/hc/articles/115004630823">',
          linkEnd: "</a>",
          linkStartParam: "{linkStart}",
          linkEndParam: "{linkEnd}",
          buttonTranslationKey: "Action.SendEmail",
          buttonSourceContentId: "1398857",
          lineBreak: "<br /><br />",
          lineBreakParam: "{lineBreak}",
        },
        Fa =
          (((Ua = {})[ia.phoneNumberDiscoverabilitySetting] = {
            titleTranslationKey: "Heading.FriendDiscovery",
            titleSourceContentId: "4063304",
            consentTranslationKey:
              "Description.PhoneNumberDiscoverabilityConsent.FriendsRename",
            consentSourceContentId: "7216456",
          }),
          (Ua[ia.phoneNumberDiscoverabilitySettingParentSide] = {
            titleTranslationKey: "Heading.FriendDiscovery",
            titleSourceContentId: "4063304",
            consentTranslationKey:
              "Description.ParentSide.PhoneNumberDiscoverabilityConsent.TFR",
            consentSourceContentId: "7237448",
          }),
          (Ua[ia.phoneNumberDiscoverabilityUpsell] = {
            titleTranslationKey: "Heading.TurnOnFriendDiscovery",
            titleSourceContentId: "4123720",
            consentTranslationKey:
              "Description.PhoneNumberDiscoverabilityUpsellConsent.FRnm",
            consentSourceContentId: "7235400",
            actionButtonTextTranslationKey: "Action.FriendDiscovery.TurnOn",
            actionButtonTextSourceContentId: "4123208",
            neutralButtonTextTranslationKey: "Action.FriendDiscovery.NotNow",
            neutralButtonTextSourceContentId: "4122952",
          }),
          (Ua[ia.personalizedAdsSetting] = {
            titleTranslationKey: "Heading.PersonalizeYourAds",
            titleSourceContentId: "4190024",
            consentTranslationKey: "Description.PersonalizeAds",
            consentSourceContentId: "4190536",
            linkStart:
              '<a href="https://en.help.roblox.com/hc/articles/28943243301780" class="text-link">',
            linkEnd: "</a>",
            linkStartParam: "{linkStart}",
            linkEndParam: "{linkEnd}",
          }),
          (Ua[ia.sellShareDataSetting] = {
            titleTranslationKey: "Heading.DataSellingAndSharing",
            titleSourceContentId: "4190280",
            consentTranslationKey: "Description.DataSellingAndSharing",
            consentSourceContentId: "4190792",
            linkStart:
              '<a href="https://en.help.roblox.com/hc/articles/28943243301780" class="text-link">',
            linkEnd: "</a>",
            linkStartParam: "{linkStart}",
            linkEndParam: "{linkEnd}",
          }),
          (Ua[ia.allowMarketingEmailCheckboxEmailVerification] = {
            consentTranslationKey: "Description.EmailNotificationsOptIn",
            consentSourceContentId: "4557640",
          }),
          (Ua[ia.voiceDataConsentSetting] = {
            titleTranslationKey: "Heading.VoiceDataConsent",
            titleSourceContentId: "4565320",
            consentTranslationKey: "Description.VoiceDataConsent",
            consentSourceContentId: "4565576",
            linkStart:
              '<a href="https://en.help.roblox.com/hc/articles/5704050147604" class="text-link">',
            linkEnd: "</a>",
            linkStartParam: "{linkStart}",
            linkEndParam: "{linkEnd}",
          }),
          (Ua[ia.voiceDataConsentSettingParentSide] = {
            titleTranslationKey: "Heading.VoiceDataConsent",
            titleSourceContentId: "4565320",
            consentTranslationKey: "Description.ParentSide.VoiceDataConsent",
            consentSourceContentId: "4565832",
            linkStart:
              '<a href="https://en.help.roblox.com/hc/articles/5704050147604" class="text-link">',
            linkEnd: "</a>",
            linkStartParam: "{linkStart}",
            linkEndParam: "{linkEnd}",
          }),
          (Ua[ia.whoCanPartyWithMe] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey: "Description.PartyAndPartyChat",
            pageDescriptionSourceContentId: "7181640",
            titleTranslationKey: "Label.Party",
            titleSourceContentId: "2137161",
            consentTranslationKey: "Description.PartySettingV3",
            consentSourceContentId: "7181896",
          }),
          (Ua[ia.whoCanPartyWithMeParentSide] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey:
              "Description.PartyAndPartyChatParentSide",
            pageDescriptionSourceContentId: "7261256",
            titleTranslationKey: "Label.Party",
            titleSourceContentId: "2137161",
            consentTranslationKey: "Description.PartySettingConsent",
            consentSourceContentId: "7193928",
          }),
          (Ua[ia.whoCanUsePartyChatWithMe] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey: "Description.PartyAndPartyChat",
            pageDescriptionSourceContentId: "7181640",
            titleTranslationKey: "Label.PartyChat",
            titleSourceContentId: "7180616",
            consentTranslationKey: "Description.PartyChat",
            consentSourceContentId: "7182152",
          }),
          (Ua[ia.whoCanUsePartyChatWithMeParentSide] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey:
              "Description.PartyAndPartyChatParentSide",
            pageDescriptionSourceContentId: "7261256",
            titleTranslationKey: "Label.PartyChat",
            titleSourceContentId: "7180616",
            consentTranslationKey: "Description.PartyChatConsent",
            consentSourceContentId: "7194184",
          }),
          (Ua[ia.whoCanUsePartyVoiceWithMe] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey: "Description.PartyAndPartyChat",
            pageDescriptionSourceContentId: "7181640",
            titleTranslationKey: "Label.PartyVoiceChat",
            titleSourceContentId: "7181384",
            consentTranslationKey: "Description.PartyVoiceChat",
            consentSourceContentId: "7182408",
          }),
          (Ua[ia.whoCanUsePartyVoiceWithMeParentSide] = {
            pageTitleTranslationKey: "Heading.PartyAndPartyChat",
            pageTitleSourceContentId: "7180360",
            pageDescriptionTranslationKey:
              "Description.PartyAndPartyChatParentSide",
            pageDescriptionSourceContentId: "7261256",
            titleTranslationKey: "Label.PartyVoiceChat",
            titleSourceContentId: "7181384",
            consentTranslationKey: "Description.PartyVoiceChatConsent",
            consentSourceContentId: "7194440",
          }),
          (Ua[ia.vpcRequestLinkSubjectToPC] = Va(Va({}, Ra), {
            descriptionTranslationKey: "Description.EnterParentEmailV5",
            descriptionSourceContentId: "3710792",
          })),
          (Ua[ia.vpcRequestLinkNotSubjectToPC] = Va(Va({}, Ra), {
            descriptionTranslationKey:
              "Description.EnterParentEmailWithoutParentalControlV2",
            descriptionSourceContentId: "3618888",
          })),
          (Ua[ia.vpcRequestLinkDefault] = Va(Va({}, Ra), {
            descriptionTranslationKey:
              "Description.EnterParentEmailWithoutParentalControl",
            descriptionSourceContentId: "2540872",
          })),
          Ua),
        La = r.EnvironmentUrls.userSettingsApi,
        Wa = function () {
          return {
            retryable: !0,
            withCredentials: !0,
            url: La + "/v1/user-settings",
          };
        },
        Ba = function () {
          return (
            (Ba =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Ba.apply(this, arguments)
          );
        },
        _a = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Ka = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        qa = function (e, t, n) {
          return _a(void 0, void 0, Promise, function () {
            var r, o;
            return Ka(this, function (a) {
              return (
                (r = Ba(Ba({}, Wa()), { headers: { "rbx-audit-data": n } })),
                [2, i.httpService.post(r, ((o = {}), (o[e] = t), o))]
              );
            });
          });
        },
        Ha = function () {
          return (
            (Ha =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            Ha.apply(this, arguments)
          );
        },
        Ga = function (e, t) {
          var n;
          switch (e) {
            case ia.phoneNumberDiscoverabilitySetting:
              return [
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilitySetting.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilitySetting.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilitySetting.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilitySetting.consentSourceContentId,
                },
              ];
            case ia.phoneNumberDiscoverabilitySettingParentSide:
              return [
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilitySettingParentSide
                      .titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilitySettingParentSide
                      .titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilitySettingParentSide
                      .consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilitySettingParentSide
                      .consentSourceContentId,
                },
              ];
            case ia.phoneNumberDiscoverabilityUpsell:
              return [
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilityUpsell.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilityUpsell.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilityUpsell.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilityUpsell.consentSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilityUpsell
                      .actionButtonTextTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilityUpsell
                      .actionButtonTextSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.phoneNumberDiscoverabilityUpsell
                      .neutralButtonTextTranslationKey
                  ),
                  sourceContentId:
                    Fa.phoneNumberDiscoverabilityUpsell
                      .neutralButtonTextSourceContentId,
                },
              ];
            case ia.personalizedAdsSetting:
              return [
                {
                  consentStringTemplate: t(
                    Fa.personalizedAdsSetting.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.personalizedAdsSetting.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.personalizedAdsSetting.consentTranslationKey,
                    {
                      linkStart: Fa.personalizedAdsSetting.linkStartParam,
                      linkEnd: Fa.personalizedAdsSetting.linkEndParam,
                    }
                  ),
                  sourceContentId:
                    Fa.personalizedAdsSetting.consentSourceContentId,
                  vars: {
                    linkStart: Fa.personalizedAdsSetting.linkStart,
                    linkEnd: Fa.personalizedAdsSetting.linkEnd,
                  },
                },
              ];
            case ia.sellShareDataSetting:
              return [
                {
                  consentStringTemplate: t(
                    Fa.sellShareDataSetting.titleTranslationKey
                  ),
                  sourceContentId: Fa.sellShareDataSetting.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.sellShareDataSetting.consentTranslationKey,
                    {
                      linkStart: Fa.sellShareDataSetting.linkStartParam,
                      linkEnd: Fa.sellShareDataSetting.linkEndParam,
                    }
                  ),
                  sourceContentId:
                    Fa.sellShareDataSetting.consentSourceContentId,
                  vars: {
                    linkStart: Fa.sellShareDataSetting.linkStart,
                    linkEnd: Fa.sellShareDataSetting.linkEnd,
                  },
                },
              ];
            case ia.allowMarketingEmailCheckboxEmailVerification:
              return [
                {
                  consentStringTemplate: t(
                    Fa.allowMarketingEmailCheckboxEmailVerification
                      .consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.allowMarketingEmailCheckboxEmailVerification
                      .consentSourceContentId,
                },
              ];
            case ia.voiceDataConsentSetting:
              return [
                {
                  consentStringTemplate: t(
                    Fa.voiceDataConsentSetting.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.voiceDataConsentSetting.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.voiceDataConsentSetting.consentTranslationKey,
                    {
                      linkStart: Fa.voiceDataConsentSetting.linkStartParam,
                      linkEnd: Fa.voiceDataConsentSetting.linkEndParam,
                    }
                  ),
                  sourceContentId:
                    Fa.voiceDataConsentSetting.consentSourceContentId,
                  vars: {
                    linkStart: Fa.voiceDataConsentSetting.linkStart,
                    linkEnd: Fa.voiceDataConsentSetting.linkEnd,
                  },
                },
              ];
            case ia.voiceDataConsentSettingParentSide:
              return [
                {
                  consentStringTemplate: t(
                    Fa.voiceDataConsentSettingParentSide.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.voiceDataConsentSettingParentSide.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.voiceDataConsentSettingParentSide.consentTranslationKey,
                    {
                      linkStart:
                        Fa.voiceDataConsentSettingParentSide.linkStartParam,
                      linkEnd:
                        Fa.voiceDataConsentSettingParentSide.linkEndParam,
                    }
                  ),
                  sourceContentId:
                    Fa.voiceDataConsentSettingParentSide.consentSourceContentId,
                  vars: {
                    linkStart: Fa.voiceDataConsentSettingParentSide.linkStart,
                    linkEnd: Fa.voiceDataConsentSettingParentSide.linkEnd,
                  },
                },
              ];
            case ia.whoCanPartyWithMe:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMe.pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMe.pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMe.pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMe.pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMe.titleTranslationKey
                  ),
                  sourceContentId: Fa.whoCanPartyWithMe.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMe.consentTranslationKey
                  ),
                  sourceContentId: Fa.whoCanPartyWithMe.consentSourceContentId,
                },
              ];
            case ia.whoCanPartyWithMeParentSide:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMeParentSide.pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMeParentSide.pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMeParentSide.pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMeParentSide
                      .pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMeParentSide.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMeParentSide.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanPartyWithMeParentSide.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanPartyWithMeParentSide.consentSourceContentId,
                },
              ];
            case ia.whoCanUsePartyChatWithMe:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMe.pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMe.pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMe.pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMe.pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMe.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMe.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMe.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMe.consentSourceContentId,
                },
              ];
            case ia.whoCanUsePartyChatWithMeParentSide:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMeParentSide
                      .pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMeParentSide
                      .pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMeParentSide
                      .pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMeParentSide
                      .pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMeParentSide.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMeParentSide.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyChatWithMeParentSide.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyChatWithMeParentSide
                      .consentSourceContentId,
                },
              ];
            case ia.whoCanUsePartyVoiceWithMe:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMe.pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMe.pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMe.pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMe.pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMe.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMe.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMe.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMe.consentSourceContentId,
                },
              ];
            case ia.whoCanUsePartyVoiceWithMeParentSide:
              return [
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMeParentSide
                      .pageTitleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMeParentSide
                      .pageTitleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMeParentSide
                      .pageDescriptionTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMeParentSide
                      .pageDescriptionSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMeParentSide.titleTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMeParentSide.titleSourceContentId,
                },
                {
                  consentStringTemplate: t(
                    Fa.whoCanUsePartyVoiceWithMeParentSide.consentTranslationKey
                  ),
                  sourceContentId:
                    Fa.whoCanUsePartyVoiceWithMeParentSide
                      .consentSourceContentId,
                },
              ];
            case ia.vpcRequestLinkSubjectToPC:
            case ia.vpcRequestLinkNotSubjectToPC:
            case ia.vpcRequestLinkDefault:
              return (
                (n = Fa.vpcRequestLinkDefault),
                e === ia.vpcRequestLinkSubjectToPC
                  ? (n = Fa.vpcRequestLinkSubjectToPC)
                  : e === ia.vpcRequestLinkNotSubjectToPC &&
                    (n = Fa.vpcRequestLinkNotSubjectToPC),
                [
                  {
                    consentStringTemplate: t(n.titleTranslationKey),
                    sourceContentId: n.titleSourceContentId,
                  },
                  {
                    consentStringTemplate: t(n.descriptionTranslationKey, {
                      lineBreak: n.lineBreakParam,
                    }),
                    sourceContentId: n.descriptionSourceContentId,
                    vars: { lineBreak: n.lineBreak },
                  },
                  {
                    consentStringTemplate: t(n.parentEmailLabelTranslationKey),
                    sourceContentId: n.parentEmailLabelSourceContentId,
                  },
                  {
                    consentStringTemplate: t(
                      n.parentEmailPlaceholderTranslationKey
                    ),
                    sourceContentId: n.parentEmailPlaceholderSourceContentId,
                  },
                  {
                    consentStringTemplate: t(
                      n.parentEmailFooterTranslationKey,
                      { linkStart: n.linkStartParam, linkEnd: n.linkEndParam }
                    ),
                    sourceContentId: n.parentEmailFooterSourceContentId,
                    vars: { linkStart: n.linkStart, linkEnd: n.linkEnd },
                  },
                  {
                    consentStringTemplate: t(n.buttonTranslationKey),
                    sourceContentId: n.buttonSourceContentId,
                  },
                ]
              );
            default:
              return [];
          }
        },
        za = function (e, t, n) {
          var r = (function (e, t, n) {
              var r = Ha(
                {
                  content: e.reduce(function (e, t) {
                    var n;
                    return Ha(
                      Ha({}, e),
                      (((n = {})[t.sourceContentId] = Ha(
                        {
                          hash: Ot.cryptoUtil.hashStringWithFnv1a32(
                            t.consentStringTemplate
                          ),
                        },
                        t.vars
                      )),
                      n)
                    );
                  }, {}),
                  surface: t,
                },
                n
              );
              return r;
            })(e, t, n),
            o = JSON.stringify(r);
          return Ot.cryptoUtil.stringToUrlSafeBase64(o);
        },
        $a = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Ya = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        Ja = function (e, t, n) {
          var r = {
            updateSettingWithAuditing: function (r, o, a) {
              return $a(void 0, void 0, void 0, function () {
                var i, l;
                return Ya(this, function (c) {
                  switch (c.label) {
                    case 0:
                      (i = Ga(t, e)), (l = za(i, n, a)), (c.label = 1);
                    case 1:
                      return c.trys.push([1, 3, , 4]), [4, qa(r, o, l)];
                    case 2:
                      return c.sent(), [3, 4];
                    case 3:
                      return c.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            },
            getBase64EncodedAuditHeader: function (r) {
              var o = Ga(t, e);
              return za(o, n, r);
            },
          };
          return [
            (function () {
              var n;
              switch (t) {
                case ia.phoneNumberDiscoverabilitySetting:
                  return (
                    (n = Fa.phoneNumberDiscoverabilitySetting),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.phoneNumberDiscoverabilitySettingParentSide:
                  return (
                    (n = Fa.phoneNumberDiscoverabilitySettingParentSide),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.phoneNumberDiscoverabilityUpsell:
                  return (
                    (n = Fa.phoneNumberDiscoverabilityUpsell),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                        actionButtonText: e(n.actionButtonTextTranslationKey),
                        neutralButtonText: e(n.neutralButtonTextTranslationKey),
                      },
                    }
                  );
                case ia.personalizedAdsSetting:
                  return (
                    (n = Fa.personalizedAdsSetting),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey, {
                          linkStart: n.linkStart,
                          linkEnd: n.linkEnd,
                        }),
                      },
                    }
                  );
                case ia.sellShareDataSetting:
                  return (
                    (n = Fa.sellShareDataSetting),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey, {
                          linkStart: n.linkStart,
                          linkEnd: n.linkEnd,
                        }),
                      },
                    }
                  );
                case ia.allowMarketingEmailCheckboxEmailVerification:
                  return (
                    (n = Fa.allowMarketingEmailCheckboxEmailVerification),
                    { wordsOfConsent: { consent: e(n.consentTranslationKey) } }
                  );
                case ia.voiceDataConsentSetting:
                  return (
                    (n = Fa.voiceDataConsentSetting),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey, {
                          linkStart: n.linkStart,
                          linkEnd: n.linkEnd,
                        }),
                      },
                    }
                  );
                case ia.voiceDataConsentSettingParentSide:
                  return (
                    (n = Fa.voiceDataConsentSettingParentSide),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey, {
                          linkStart: n.linkStart,
                          linkEnd: n.linkEnd,
                        }),
                      },
                    }
                  );
                case ia.whoCanPartyWithMe:
                  return (
                    (n = Fa.whoCanPartyWithMe),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.whoCanPartyWithMeParentSide:
                  return (
                    (n = Fa.whoCanPartyWithMeParentSide),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.whoCanUsePartyChatWithMe:
                  return (
                    (n = Fa.whoCanUsePartyChatWithMe),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.whoCanUsePartyChatWithMeParentSide:
                  return (
                    (n = Fa.whoCanUsePartyChatWithMeParentSide),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.whoCanUsePartyVoiceWithMe:
                  return (
                    (n = Fa.whoCanUsePartyVoiceWithMe),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.whoCanUsePartyVoiceWithMeParentSide:
                  return (
                    (n = Fa.whoCanUsePartyVoiceWithMeParentSide),
                    {
                      wordsOfConsent: {
                        pageTitle: e(n.pageTitleTranslationKey),
                        pageDescription: e(n.pageDescriptionTranslationKey),
                        title: e(n.titleTranslationKey),
                        consent: e(n.consentTranslationKey),
                      },
                    }
                  );
                case ia.vpcRequestLinkSubjectToPC:
                case ia.vpcRequestLinkNotSubjectToPC:
                case ia.vpcRequestLinkDefault:
                  return (
                    (n = Fa.vpcRequestLinkDefault),
                    t === ia.vpcRequestLinkSubjectToPC
                      ? (n = Fa.vpcRequestLinkSubjectToPC)
                      : t === ia.vpcRequestLinkNotSubjectToPC &&
                        (n = Fa.vpcRequestLinkNotSubjectToPC),
                    {
                      wordsOfConsent: {
                        title: e(n.titleTranslationKey),
                        description: e(n.descriptionTranslationKey, {
                          lineBreak: n.lineBreak,
                        }),
                        textboxLabel: e(n.parentEmailLabelTranslationKey),
                        placeholderText: e(
                          n.parentEmailPlaceholderTranslationKey
                        ),
                        footer: e(n.parentEmailFooterTranslationKey, {
                          linkStart: n.linkStart,
                          linkEnd: n.linkEnd,
                        }),
                        button: e(n.buttonTranslationKey),
                      },
                    }
                  );
                default:
                  return;
              }
            })(),
            r,
          ];
        },
        Xa = (0, c.withTranslations)(
          function (n) {
            var r = n.translate;
            return (
              (0, e.useEffect)(
                function () {
                  o().LegallySensitiveContentService = {
                    useLegallySensitiveContentAndActions: function (e, t) {
                      return Ja(r, e, t);
                    },
                  };
                },
                [r]
              ),
              t().createElement("div", {
                id: "legally-sensitive-content-component",
              })
            );
          },
          {
            common: [
              "CommonUI.Controls",
              "Feature.Parents",
              "Feature.AccountSettings",
            ],
            feature: "Feature.LegallySensitiveContent",
          }
        );
      var Qa = (0, c.withTranslations)(
          function (e) {
            var n = e.translate;
            return t().createElement(
              k,
              { store: Wn },
              t().createElement(ja, { translate: n }),
              t().createElement(Xa, { translate: n })
            );
          },
          {
            common: [
              "CommonUI.Controls",
              "CommonUI.Features",
              "Amp.Upsell",
              "Amp.FAEUpsell",
            ],
            feature: "Verification.Identity",
          }
        ),
        Za = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, l);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        ei = function (e, t) {
          var n,
            r,
            o,
            a,
            i = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return i.label++, { value: a[1], done: !1 };
                      case 5:
                        i.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = i.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0]))
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!o || (a[1] > o[0] && a[1] < o[3]))
                        ) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < o[1]) {
                          (i.label = o[1]), (o = a);
                          break;
                        }
                        if (o && i.label < o[2]) {
                          (i.label = o[2]), i.ops.push(a);
                          break;
                        }
                        o[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        ti = function (e) {
          var t = e.featureName,
            n = e.redirectLink,
            r = void 0 === n ? null : n,
            o = e.ampFeatureCheckData,
            a = void 0 === o ? [] : o,
            i = e.isAsyncCall,
            l = void 0 === i || i,
            c = e.usePrologue,
            s = void 0 !== c && c,
            u = e.ampRecourseData,
            d = void 0 === u ? null : u,
            f = e.featureSpecificData,
            p = void 0 === f ? null : f,
            y = e.namespace,
            m = void 0 === y ? null : y;
          return Za(void 0, void 0, Promise, function () {
            return ei(this, function (e) {
              return [
                2,
                new Promise(function (e) {
                  var n = new CustomEvent(_n, {
                    detail: {
                      featureName: t,
                      redirectLink: r,
                      ampFeatureCheckData: a,
                      isAsyncCall: l,
                      usePrologue: s,
                      ampRecourseData: d,
                      featureSpecificData: p,
                      namespace: m,
                      closeCallback: function (t) {
                        e(
                          (function (e) {
                            return e === bt.Granted;
                          })(t)
                        );
                      },
                    },
                  });
                  window.dispatchEvent(n);
                }),
              ];
            });
          });
        };
      function ni() {
        var e = document.getElementById(l);
        e
          ? (0, a.render)(t().createElement(Qa, null), e)
          : window.requestAnimationFrame(ni);
      }
      (o().AccessManagementUpsellV2Service = {
        startAccessManagementUpsell: ti,
      }),
        (0, i.ready)(function () {
          l && ni();
        });
    })();
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/3401bc4e6464c7db968365d6ef845072-accessManagementUpsellV2.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("AccessManagementUpsellV2");

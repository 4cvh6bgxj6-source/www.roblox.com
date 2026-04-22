/*! For license information please see reactLogin.bundle.min.js.LICENSE.txt */
!(function () {
  var e = {
      7243: function (e, t, n) {
        var r;
        (e = n.nmd(e)),
          function () {
            var i,
              o = "Expected a function",
              a = "__lodash_hash_undefined__",
              u = "__lodash_placeholder__",
              c = 16,
              l = 32,
              s = 64,
              f = 128,
              d = 256,
              p = 1 / 0,
              h = 9007199254740991,
              v = NaN,
              g = 4294967295,
              m = [
                ["ary", f],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", c],
                ["flip", 512],
                ["partial", l],
                ["partialRight", s],
                ["rearg", d],
              ],
              y = "[object Arguments]",
              b = "[object Array]",
              w = "[object Boolean]",
              S = "[object Date]",
              E = "[object Error]",
              A = "[object Function]",
              _ = "[object GeneratorFunction]",
              x = "[object Map]",
              C = "[object Number]",
              k = "[object Object]",
              L = "[object Promise]",
              I = "[object RegExp]",
              T = "[object Set]",
              P = "[object String]",
              U = "[object Symbol]",
              O = "[object WeakMap]",
              R = "[object ArrayBuffer]",
              N = "[object DataView]",
              z = "[object Float32Array]",
              B = "[object Float64Array]",
              D = "[object Int8Array]",
              M = "[object Int16Array]",
              F = "[object Int32Array]",
              j = "[object Uint8Array]",
              W = "[object Uint8ClampedArray]",
              V = "[object Uint16Array]",
              q = "[object Uint32Array]",
              H = /\b__p \+= '';/g,
              G = /\b(__p \+=) '' \+/g,
              Q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              $ = /&(?:amp|lt|gt|quot|#39);/g,
              K = /[&<>"']/g,
              Y = RegExp($.source),
              X = RegExp(K.source),
              Z = /<%-([\s\S]+?)%>/g,
              J = /<%([\s\S]+?)%>/g,
              ee = /<%=([\s\S]+?)%>/g,
              te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              ne = /^\w*$/,
              re =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              ie = /[\\^$.*+?()[\]{}|]/g,
              oe = RegExp(ie.source),
              ae = /^\s+/,
              ue = /\s/,
              ce = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              le = /\{\n\/\* \[wrapped with (.+)\] \*/,
              se = /,? & /,
              fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              de = /[()=,{}\[\]\/\s]/,
              pe = /\\(\\)?/g,
              he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              ve = /\w*$/,
              ge = /^[-+]0x[0-9a-f]+$/i,
              me = /^0b[01]+$/i,
              ye = /^\[object .+?Constructor\]$/,
              be = /^0o[0-7]+$/i,
              we = /^(?:0|[1-9]\d*)$/,
              Se = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              Ee = /($^)/,
              Ae = /['\n\r\u2028\u2029\\]/g,
              _e = "\\ud800-\\udfff",
              xe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              Ce = "\\u2700-\\u27bf",
              ke = "a-z\\xdf-\\xf6\\xf8-\\xff",
              Le = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              Ie = "\\ufe0e\\ufe0f",
              Te =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              Pe = "['’]",
              Ue = "[" + _e + "]",
              Oe = "[" + Te + "]",
              Re = "[" + xe + "]",
              Ne = "\\d+",
              ze = "[" + Ce + "]",
              Be = "[" + ke + "]",
              De = "[^" + _e + Te + Ne + Ce + ke + Le + "]",
              Me = "\\ud83c[\\udffb-\\udfff]",
              Fe = "[^" + _e + "]",
              je = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              We = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              Ve = "[" + Le + "]",
              qe = "\\u200d",
              He = "(?:" + Be + "|" + De + ")",
              Ge = "(?:" + Ve + "|" + De + ")",
              Qe = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              $e = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              Ke = "(?:" + Re + "|" + Me + ")" + "?",
              Ye = "[" + Ie + "]?",
              Xe =
                Ye +
                Ke +
                ("(?:" +
                  qe +
                  "(?:" +
                  [Fe, je, We].join("|") +
                  ")" +
                  Ye +
                  Ke +
                  ")*"),
              Ze = "(?:" + [ze, je, We].join("|") + ")" + Xe,
              Je = "(?:" + [Fe + Re + "?", Re, je, We, Ue].join("|") + ")",
              et = RegExp(Pe, "g"),
              tt = RegExp(Re, "g"),
              nt = RegExp(Me + "(?=" + Me + ")|" + Je + Xe, "g"),
              rt = RegExp(
                [
                  Ve +
                    "?" +
                    Be +
                    "+" +
                    Qe +
                    "(?=" +
                    [Oe, Ve, "$"].join("|") +
                    ")",
                  Ge + "+" + $e + "(?=" + [Oe, Ve + He, "$"].join("|") + ")",
                  Ve + "?" + He + "+" + Qe,
                  Ve + "+" + $e,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  Ne,
                  Ze,
                ].join("|"),
                "g"
              ),
              it = RegExp("[" + qe + _e + xe + Ie + "]"),
              ot =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              at = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              ut = -1,
              ct = {};
            (ct[z] =
              ct[B] =
              ct[D] =
              ct[M] =
              ct[F] =
              ct[j] =
              ct[W] =
              ct[V] =
              ct[q] =
                !0),
              (ct[y] =
                ct[b] =
                ct[R] =
                ct[w] =
                ct[N] =
                ct[S] =
                ct[E] =
                ct[A] =
                ct[x] =
                ct[C] =
                ct[k] =
                ct[I] =
                ct[T] =
                ct[P] =
                ct[O] =
                  !1);
            var lt = {};
            (lt[y] =
              lt[b] =
              lt[R] =
              lt[N] =
              lt[w] =
              lt[S] =
              lt[z] =
              lt[B] =
              lt[D] =
              lt[M] =
              lt[F] =
              lt[x] =
              lt[C] =
              lt[k] =
              lt[I] =
              lt[T] =
              lt[P] =
              lt[U] =
              lt[j] =
              lt[W] =
              lt[V] =
              lt[q] =
                !0),
              (lt[E] = lt[A] = lt[O] = !1);
            var st = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              ft = parseFloat,
              dt = parseInt,
              pt =
                "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              ht =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              vt = pt || ht || Function("return this")(),
              gt = t && !t.nodeType && t,
              mt = gt && e && !e.nodeType && e,
              yt = mt && mt.exports === gt,
              bt = yt && pt.process,
              wt = (function () {
                try {
                  var e = mt && mt.require && mt.require("util").types;
                  return e || (bt && bt.binding && bt.binding("util"));
                } catch (e) {}
              })(),
              St = wt && wt.isArrayBuffer,
              Et = wt && wt.isDate,
              At = wt && wt.isMap,
              _t = wt && wt.isRegExp,
              xt = wt && wt.isSet,
              Ct = wt && wt.isTypedArray;
            function kt(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, n[0]);
                case 2:
                  return e.call(t, n[0], n[1]);
                case 3:
                  return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
            }
            function Lt(e, t, n, r) {
              for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                var a = e[i];
                t(r, a, n(a), e);
              }
              return r;
            }
            function It(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length;
                ++n < r && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function Tt(e, t) {
              for (
                var n = null == e ? 0 : e.length;
                n-- && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function Pt(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (!t(e[n], n, e)) return !1;
              return !0;
            }
            function Ut(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                ++n < r;

              ) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a);
              }
              return o;
            }
            function Ot(e, t) {
              return !!(null == e ? 0 : e.length) && Vt(e, t, 0) > -1;
            }
            function Rt(e, t, n) {
              for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                if (n(t, e[r])) return !0;
              return !1;
            }
            function Nt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                ++n < r;

              )
                i[n] = t(e[n], n, e);
              return i;
            }
            function zt(e, t) {
              for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
              return e;
            }
            function Bt(e, t, n, r) {
              var i = -1,
                o = null == e ? 0 : e.length;
              for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
              return n;
            }
            function Dt(e, t, n, r) {
              var i = null == e ? 0 : e.length;
              for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
              return n;
            }
            function Mt(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            var Ft = Qt("length");
            function jt(e, t, n) {
              var r;
              return (
                n(e, function (e, n, i) {
                  if (t(e, n, i)) return (r = n), !1;
                }),
                r
              );
            }
            function Wt(e, t, n, r) {
              for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e)) return o;
              return -1;
            }
            function Vt(e, t, n) {
              return t == t
                ? (function (e, t, n) {
                    var r = n - 1,
                      i = e.length;
                    for (; ++r < i; ) if (e[r] === t) return r;
                    return -1;
                  })(e, t, n)
                : Wt(e, Ht, n);
            }
            function qt(e, t, n, r) {
              for (var i = n - 1, o = e.length; ++i < o; )
                if (r(e[i], t)) return i;
              return -1;
            }
            function Ht(e) {
              return e != e;
            }
            function Gt(e, t) {
              var n = null == e ? 0 : e.length;
              return n ? Yt(e, t) / n : v;
            }
            function Qt(e) {
              return function (t) {
                return null == t ? i : t[e];
              };
            }
            function $t(e) {
              return function (t) {
                return null == e ? i : e[t];
              };
            }
            function Kt(e, t, n, r, i) {
              return (
                i(e, function (e, i, o) {
                  n = r ? ((r = !1), e) : t(n, e, i, o);
                }),
                n
              );
            }
            function Yt(e, t) {
              for (var n, r = -1, o = e.length; ++r < o; ) {
                var a = t(e[r]);
                a !== i && (n = n === i ? a : n + a);
              }
              return n;
            }
            function Xt(e, t) {
              for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
              return r;
            }
            function Zt(e) {
              return e ? e.slice(0, gn(e) + 1).replace(ae, "") : e;
            }
            function Jt(e) {
              return function (t) {
                return e(t);
              };
            }
            function en(e, t) {
              return Nt(t, function (t) {
                return e[t];
              });
            }
            function tn(e, t) {
              return e.has(t);
            }
            function nn(e, t) {
              for (var n = -1, r = e.length; ++n < r && Vt(t, e[n], 0) > -1; );
              return n;
            }
            function rn(e, t) {
              for (var n = e.length; n-- && Vt(t, e[n], 0) > -1; );
              return n;
            }
            var on = $t({
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
                ſ: "s",
              }),
              an = $t({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function un(e) {
              return "\\" + st[e];
            }
            function cn(e) {
              return it.test(e);
            }
            function ln(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function sn(e, t) {
              return function (n) {
                return e(t(n));
              };
            }
            function fn(e, t) {
              for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n];
                (a !== t && a !== u) || ((e[n] = u), (o[i++] = n));
              }
              return o;
            }
            function dn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            function pn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = [e, e];
                }),
                n
              );
            }
            function hn(e) {
              return cn(e)
                ? (function (e) {
                    var t = (nt.lastIndex = 0);
                    for (; nt.test(e); ) ++t;
                    return t;
                  })(e)
                : Ft(e);
            }
            function vn(e) {
              return cn(e)
                ? (function (e) {
                    return e.match(nt) || [];
                  })(e)
                : (function (e) {
                    return e.split("");
                  })(e);
            }
            function gn(e) {
              for (var t = e.length; t-- && ue.test(e.charAt(t)); );
              return t;
            }
            var mn = $t({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            });
            var yn = (function e(t) {
              var n,
                r = (t =
                  null == t ? vt : yn.defaults(vt.Object(), t, yn.pick(vt, at)))
                  .Array,
                ue = t.Date,
                _e = t.Error,
                xe = t.Function,
                Ce = t.Math,
                ke = t.Object,
                Le = t.RegExp,
                Ie = t.String,
                Te = t.TypeError,
                Pe = r.prototype,
                Ue = xe.prototype,
                Oe = ke.prototype,
                Re = t["__core-js_shared__"],
                Ne = Ue.toString,
                ze = Oe.hasOwnProperty,
                Be = 0,
                De = (n = /[^.]+$/.exec(
                  (Re && Re.keys && Re.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + n
                  : "",
                Me = Oe.toString,
                Fe = Ne.call(ke),
                je = vt._,
                We = Le(
                  "^" +
                    Ne.call(ze)
                      .replace(ie, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                Ve = yt ? t.Buffer : i,
                qe = t.Symbol,
                He = t.Uint8Array,
                Ge = Ve ? Ve.allocUnsafe : i,
                Qe = sn(ke.getPrototypeOf, ke),
                $e = ke.create,
                Ke = Oe.propertyIsEnumerable,
                Ye = Pe.splice,
                Xe = qe ? qe.isConcatSpreadable : i,
                Ze = qe ? qe.iterator : i,
                Je = qe ? qe.toStringTag : i,
                nt = (function () {
                  try {
                    var e = po(ke, "defineProperty");
                    return e({}, "", {}), e;
                  } catch (e) {}
                })(),
                it = t.clearTimeout !== vt.clearTimeout && t.clearTimeout,
                st = ue && ue.now !== vt.Date.now && ue.now,
                pt = t.setTimeout !== vt.setTimeout && t.setTimeout,
                ht = Ce.ceil,
                gt = Ce.floor,
                mt = ke.getOwnPropertySymbols,
                bt = Ve ? Ve.isBuffer : i,
                wt = t.isFinite,
                Ft = Pe.join,
                $t = sn(ke.keys, ke),
                bn = Ce.max,
                wn = Ce.min,
                Sn = ue.now,
                En = t.parseInt,
                An = Ce.random,
                _n = Pe.reverse,
                xn = po(t, "DataView"),
                Cn = po(t, "Map"),
                kn = po(t, "Promise"),
                Ln = po(t, "Set"),
                In = po(t, "WeakMap"),
                Tn = po(ke, "create"),
                Pn = In && new In(),
                Un = {},
                On = Mo(xn),
                Rn = Mo(Cn),
                Nn = Mo(kn),
                zn = Mo(Ln),
                Bn = Mo(In),
                Dn = qe ? qe.prototype : i,
                Mn = Dn ? Dn.valueOf : i,
                Fn = Dn ? Dn.toString : i;
              function jn(e) {
                if (nu(e) && !Ha(e) && !(e instanceof Hn)) {
                  if (e instanceof qn) return e;
                  if (ze.call(e, "__wrapped__")) return Fo(e);
                }
                return new qn(e);
              }
              var Wn = (function () {
                function e() {}
                return function (t) {
                  if (!tu(t)) return {};
                  if ($e) return $e(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = i), n;
                };
              })();
              function Vn() {}
              function qn(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i);
              }
              function Hn(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = g),
                  (this.__views__ = []);
              }
              function Gn(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Qn(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function $n(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Kn(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.__data__ = new $n(); ++t < n; ) this.add(e[t]);
              }
              function Yn(e) {
                var t = (this.__data__ = new Qn(e));
                this.size = t.size;
              }
              function Xn(e, t) {
                var n = Ha(e),
                  r = !n && qa(e),
                  i = !n && !r && Ka(e),
                  o = !n && !r && !i && su(e),
                  a = n || r || i || o,
                  u = a ? Xt(e.length, Ie) : [],
                  c = u.length;
                for (var l in e)
                  (!t && !ze.call(e, l)) ||
                    (a &&
                      ("length" == l ||
                        (i && ("offset" == l || "parent" == l)) ||
                        (o &&
                          ("buffer" == l ||
                            "byteLength" == l ||
                            "byteOffset" == l)) ||
                        wo(l, c))) ||
                    u.push(l);
                return u;
              }
              function Zn(e) {
                var t = e.length;
                return t ? e[Kr(0, t - 1)] : i;
              }
              function Jn(e, t) {
                return zo(Ti(e), cr(t, 0, e.length));
              }
              function er(e) {
                return zo(Ti(e));
              }
              function tr(e, t, n) {
                ((n !== i && !ja(e[t], n)) || (n === i && !(t in e))) &&
                  ar(e, t, n);
              }
              function nr(e, t, n) {
                var r = e[t];
                (ze.call(e, t) && ja(r, n) && (n !== i || t in e)) ||
                  ar(e, t, n);
              }
              function rr(e, t) {
                for (var n = e.length; n--; ) if (ja(e[n][0], t)) return n;
                return -1;
              }
              function ir(e, t, n, r) {
                return (
                  pr(e, function (e, i, o) {
                    t(r, e, n(e), o);
                  }),
                  r
                );
              }
              function or(e, t) {
                return e && Pi(t, Uu(t), e);
              }
              function ar(e, t, n) {
                "__proto__" == t && nt
                  ? nt(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n);
              }
              function ur(e, t) {
                for (
                  var n = -1, o = t.length, a = r(o), u = null == e;
                  ++n < o;

                )
                  a[n] = u ? i : ku(e, t[n]);
                return a;
              }
              function cr(e, t, n) {
                return (
                  e == e &&
                    (n !== i && (e = e <= n ? e : n),
                    t !== i && (e = e >= t ? e : t)),
                  e
                );
              }
              function lr(e, t, n, r, o, a) {
                var u,
                  c = 1 & t,
                  l = 2 & t,
                  s = 4 & t;
                if ((n && (u = o ? n(e, r, o, a) : n(e)), u !== i)) return u;
                if (!tu(e)) return e;
                var f = Ha(e);
                if (f) {
                  if (
                    ((u = (function (e) {
                      var t = e.length,
                        n = new e.constructor(t);
                      t &&
                        "string" == typeof e[0] &&
                        ze.call(e, "index") &&
                        ((n.index = e.index), (n.input = e.input));
                      return n;
                    })(e)),
                    !c)
                  )
                    return Ti(e, u);
                } else {
                  var d = go(e),
                    p = d == A || d == _;
                  if (Ka(e)) return _i(e, c);
                  if (d == k || d == y || (p && !o)) {
                    if (((u = l || p ? {} : yo(e)), !c))
                      return l
                        ? (function (e, t) {
                            return Pi(e, vo(e), t);
                          })(
                            e,
                            (function (e, t) {
                              return e && Pi(t, Ou(t), e);
                            })(u, e)
                          )
                        : (function (e, t) {
                            return Pi(e, ho(e), t);
                          })(e, or(u, e));
                  } else {
                    if (!lt[d]) return o ? e : {};
                    u = (function (e, t, n) {
                      var r = e.constructor;
                      switch (t) {
                        case R:
                          return xi(e);
                        case w:
                        case S:
                          return new r(+e);
                        case N:
                          return (function (e, t) {
                            var n = t ? xi(e.buffer) : e.buffer;
                            return new e.constructor(
                              n,
                              e.byteOffset,
                              e.byteLength
                            );
                          })(e, n);
                        case z:
                        case B:
                        case D:
                        case M:
                        case F:
                        case j:
                        case W:
                        case V:
                        case q:
                          return Ci(e, n);
                        case x:
                          return new r();
                        case C:
                        case P:
                          return new r(e);
                        case I:
                          return (function (e) {
                            var t = new e.constructor(e.source, ve.exec(e));
                            return (t.lastIndex = e.lastIndex), t;
                          })(e);
                        case T:
                          return new r();
                        case U:
                          return (i = e), Mn ? ke(Mn.call(i)) : {};
                      }
                      var i;
                    })(e, d, c);
                  }
                }
                a || (a = new Yn());
                var h = a.get(e);
                if (h) return h;
                a.set(e, u),
                  uu(e)
                    ? e.forEach(function (r) {
                        u.add(lr(r, t, n, r, e, a));
                      })
                    : ru(e) &&
                      e.forEach(function (r, i) {
                        u.set(i, lr(r, t, n, i, e, a));
                      });
                var v = f ? i : (s ? (l ? oo : io) : l ? Ou : Uu)(e);
                return (
                  It(v || e, function (r, i) {
                    v && (r = e[(i = r)]), nr(u, i, lr(r, t, n, i, e, a));
                  }),
                  u
                );
              }
              function sr(e, t, n) {
                var r = n.length;
                if (null == e) return !r;
                for (e = ke(e); r--; ) {
                  var o = n[r],
                    a = t[o],
                    u = e[o];
                  if ((u === i && !(o in e)) || !a(u)) return !1;
                }
                return !0;
              }
              function fr(e, t, n) {
                if ("function" != typeof e) throw new Te(o);
                return Uo(function () {
                  e.apply(i, n);
                }, t);
              }
              function dr(e, t, n, r) {
                var i = -1,
                  o = Ot,
                  a = !0,
                  u = e.length,
                  c = [],
                  l = t.length;
                if (!u) return c;
                n && (t = Nt(t, Jt(n))),
                  r
                    ? ((o = Rt), (a = !1))
                    : t.length >= 200 && ((o = tn), (a = !1), (t = new Kn(t)));
                e: for (; ++i < u; ) {
                  var s = e[i],
                    f = null == n ? s : n(s);
                  if (((s = r || 0 !== s ? s : 0), a && f == f)) {
                    for (var d = l; d--; ) if (t[d] === f) continue e;
                    c.push(s);
                  } else o(t, f, r) || c.push(s);
                }
                return c;
              }
              (jn.templateSettings = {
                escape: Z,
                evaluate: J,
                interpolate: ee,
                variable: "",
                imports: { _: jn },
              }),
                (jn.prototype = Vn.prototype),
                (jn.prototype.constructor = jn),
                (qn.prototype = Wn(Vn.prototype)),
                (qn.prototype.constructor = qn),
                (Hn.prototype = Wn(Vn.prototype)),
                (Hn.prototype.constructor = Hn),
                (Gn.prototype.clear = function () {
                  (this.__data__ = Tn ? Tn(null) : {}), (this.size = 0);
                }),
                (Gn.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (Gn.prototype.get = function (e) {
                  var t = this.__data__;
                  if (Tn) {
                    var n = t[e];
                    return n === a ? i : n;
                  }
                  return ze.call(t, e) ? t[e] : i;
                }),
                (Gn.prototype.has = function (e) {
                  var t = this.__data__;
                  return Tn ? t[e] !== i : ze.call(t, e);
                }),
                (Gn.prototype.set = function (e, t) {
                  var n = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (n[e] = Tn && t === i ? a : t),
                    this
                  );
                }),
                (Qn.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (Qn.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = rr(t, e);
                  return (
                    !(n < 0) &&
                    (n == t.length - 1 ? t.pop() : Ye.call(t, n, 1),
                    --this.size,
                    !0)
                  );
                }),
                (Qn.prototype.get = function (e) {
                  var t = this.__data__,
                    n = rr(t, e);
                  return n < 0 ? i : t[n][1];
                }),
                (Qn.prototype.has = function (e) {
                  return rr(this.__data__, e) > -1;
                }),
                (Qn.prototype.set = function (e, t) {
                  var n = this.__data__,
                    r = rr(n, e);
                  return (
                    r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                  );
                }),
                ($n.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new Gn(),
                      map: new (Cn || Qn)(),
                      string: new Gn(),
                    });
                }),
                ($n.prototype.delete = function (e) {
                  var t = so(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                ($n.prototype.get = function (e) {
                  return so(this, e).get(e);
                }),
                ($n.prototype.has = function (e) {
                  return so(this, e).has(e);
                }),
                ($n.prototype.set = function (e, t) {
                  var n = so(this, e),
                    r = n.size;
                  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
                }),
                (Kn.prototype.add = Kn.prototype.push =
                  function (e) {
                    return this.__data__.set(e, a), this;
                  }),
                (Kn.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Yn.prototype.clear = function () {
                  (this.__data__ = new Qn()), (this.size = 0);
                }),
                (Yn.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = t.delete(e);
                  return (this.size = t.size), n;
                }),
                (Yn.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (Yn.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Yn.prototype.set = function (e, t) {
                  var n = this.__data__;
                  if (n instanceof Qn) {
                    var r = n.__data__;
                    if (!Cn || r.length < 199)
                      return r.push([e, t]), (this.size = ++n.size), this;
                    n = this.__data__ = new $n(r);
                  }
                  return n.set(e, t), (this.size = n.size), this;
                });
              var pr = Ri(Sr),
                hr = Ri(Er, !0);
              function vr(e, t) {
                var n = !0;
                return (
                  pr(e, function (e, r, i) {
                    return (n = !!t(e, r, i));
                  }),
                  n
                );
              }
              function gr(e, t, n) {
                for (var r = -1, o = e.length; ++r < o; ) {
                  var a = e[r],
                    u = t(a);
                  if (null != u && (c === i ? u == u && !lu(u) : n(u, c)))
                    var c = u,
                      l = a;
                }
                return l;
              }
              function mr(e, t) {
                var n = [];
                return (
                  pr(e, function (e, r, i) {
                    t(e, r, i) && n.push(e);
                  }),
                  n
                );
              }
              function yr(e, t, n, r, i) {
                var o = -1,
                  a = e.length;
                for (n || (n = bo), i || (i = []); ++o < a; ) {
                  var u = e[o];
                  t > 0 && n(u)
                    ? t > 1
                      ? yr(u, t - 1, n, r, i)
                      : zt(i, u)
                    : r || (i[i.length] = u);
                }
                return i;
              }
              var br = Ni(),
                wr = Ni(!0);
              function Sr(e, t) {
                return e && br(e, t, Uu);
              }
              function Er(e, t) {
                return e && wr(e, t, Uu);
              }
              function Ar(e, t) {
                return Ut(t, function (t) {
                  return Za(e[t]);
                });
              }
              function _r(e, t) {
                for (var n = 0, r = (t = wi(t, e)).length; null != e && n < r; )
                  e = e[Do(t[n++])];
                return n && n == r ? e : i;
              }
              function xr(e, t, n) {
                var r = t(e);
                return Ha(e) ? r : zt(r, n(e));
              }
              function Cr(e) {
                return null == e
                  ? e === i
                    ? "[object Undefined]"
                    : "[object Null]"
                  : Je && Je in ke(e)
                  ? (function (e) {
                      var t = ze.call(e, Je),
                        n = e[Je];
                      try {
                        e[Je] = i;
                        var r = !0;
                      } catch (e) {}
                      var o = Me.call(e);
                      r && (t ? (e[Je] = n) : delete e[Je]);
                      return o;
                    })(e)
                  : (function (e) {
                      return Me.call(e);
                    })(e);
              }
              function kr(e, t) {
                return e > t;
              }
              function Lr(e, t) {
                return null != e && ze.call(e, t);
              }
              function Ir(e, t) {
                return null != e && t in ke(e);
              }
              function Tr(e, t, n) {
                for (
                  var o = n ? Rt : Ot,
                    a = e[0].length,
                    u = e.length,
                    c = u,
                    l = r(u),
                    s = 1 / 0,
                    f = [];
                  c--;

                ) {
                  var d = e[c];
                  c && t && (d = Nt(d, Jt(t))),
                    (s = wn(d.length, s)),
                    (l[c] =
                      !n && (t || (a >= 120 && d.length >= 120))
                        ? new Kn(c && d)
                        : i);
                }
                d = e[0];
                var p = -1,
                  h = l[0];
                e: for (; ++p < a && f.length < s; ) {
                  var v = d[p],
                    g = t ? t(v) : v;
                  if (
                    ((v = n || 0 !== v ? v : 0), !(h ? tn(h, g) : o(f, g, n)))
                  ) {
                    for (c = u; --c; ) {
                      var m = l[c];
                      if (!(m ? tn(m, g) : o(e[c], g, n))) continue e;
                    }
                    h && h.push(g), f.push(v);
                  }
                }
                return f;
              }
              function Pr(e, t, n) {
                var r = null == (e = Io(e, (t = wi(t, e)))) ? e : e[Do(Xo(t))];
                return null == r ? i : kt(r, e, n);
              }
              function Ur(e) {
                return nu(e) && Cr(e) == y;
              }
              function Or(e, t, n, r, o) {
                return (
                  e === t ||
                  (null == e || null == t || (!nu(e) && !nu(t))
                    ? e != e && t != t
                    : (function (e, t, n, r, o, a) {
                        var u = Ha(e),
                          c = Ha(t),
                          l = u ? b : go(e),
                          s = c ? b : go(t),
                          f = (l = l == y ? k : l) == k,
                          d = (s = s == y ? k : s) == k,
                          p = l == s;
                        if (p && Ka(e)) {
                          if (!Ka(t)) return !1;
                          (u = !0), (f = !1);
                        }
                        if (p && !f)
                          return (
                            a || (a = new Yn()),
                            u || su(e)
                              ? no(e, t, n, r, o, a)
                              : (function (e, t, n, r, i, o, a) {
                                  switch (n) {
                                    case N:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (t = t.buffer);
                                    case R:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !o(new He(e), new He(t))
                                      );
                                    case w:
                                    case S:
                                    case C:
                                      return ja(+e, +t);
                                    case E:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case I:
                                    case P:
                                      return e == t + "";
                                    case x:
                                      var u = ln;
                                    case T:
                                      var c = 1 & r;
                                      if (
                                        (u || (u = dn), e.size != t.size && !c)
                                      )
                                        return !1;
                                      var l = a.get(e);
                                      if (l) return l == t;
                                      (r |= 2), a.set(e, t);
                                      var s = no(u(e), u(t), r, i, o, a);
                                      return a.delete(e), s;
                                    case U:
                                      if (Mn) return Mn.call(e) == Mn.call(t);
                                  }
                                  return !1;
                                })(e, t, l, n, r, o, a)
                          );
                        if (!(1 & n)) {
                          var h = f && ze.call(e, "__wrapped__"),
                            v = d && ze.call(t, "__wrapped__");
                          if (h || v) {
                            var g = h ? e.value() : e,
                              m = v ? t.value() : t;
                            return a || (a = new Yn()), o(g, m, n, r, a);
                          }
                        }
                        if (!p) return !1;
                        return (
                          a || (a = new Yn()),
                          (function (e, t, n, r, o, a) {
                            var u = 1 & n,
                              c = io(e),
                              l = c.length,
                              s = io(t),
                              f = s.length;
                            if (l != f && !u) return !1;
                            var d = l;
                            for (; d--; ) {
                              var p = c[d];
                              if (!(u ? p in t : ze.call(t, p))) return !1;
                            }
                            var h = a.get(e),
                              v = a.get(t);
                            if (h && v) return h == t && v == e;
                            var g = !0;
                            a.set(e, t), a.set(t, e);
                            var m = u;
                            for (; ++d < l; ) {
                              var y = e[(p = c[d])],
                                b = t[p];
                              if (r)
                                var w = u
                                  ? r(b, y, p, t, e, a)
                                  : r(y, b, p, e, t, a);
                              if (
                                !(w === i ? y === b || o(y, b, n, r, a) : w)
                              ) {
                                g = !1;
                                break;
                              }
                              m || (m = "constructor" == p);
                            }
                            if (g && !m) {
                              var S = e.constructor,
                                E = t.constructor;
                              S == E ||
                                !("constructor" in e) ||
                                !("constructor" in t) ||
                                ("function" == typeof S &&
                                  S instanceof S &&
                                  "function" == typeof E &&
                                  E instanceof E) ||
                                (g = !1);
                            }
                            return a.delete(e), a.delete(t), g;
                          })(e, t, n, r, o, a)
                        );
                      })(e, t, n, r, Or, o))
                );
              }
              function Rr(e, t, n, r) {
                var o = n.length,
                  a = o,
                  u = !r;
                if (null == e) return !a;
                for (e = ke(e); o--; ) {
                  var c = n[o];
                  if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++o < a; ) {
                  var l = (c = n[o])[0],
                    s = e[l],
                    f = c[1];
                  if (u && c[2]) {
                    if (s === i && !(l in e)) return !1;
                  } else {
                    var d = new Yn();
                    if (r) var p = r(s, f, l, e, t, d);
                    if (!(p === i ? Or(f, s, 3, r, d) : p)) return !1;
                  }
                }
                return !0;
              }
              function Nr(e) {
                return (
                  !(!tu(e) || ((t = e), De && De in t)) &&
                  (Za(e) ? We : ye).test(Mo(e))
                );
                var t;
              }
              function zr(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? ic
                  : "object" == typeof e
                  ? Ha(e)
                    ? Wr(e[0], e[1])
                    : jr(e)
                  : pc(e);
              }
              function Br(e) {
                if (!xo(e)) return $t(e);
                var t = [];
                for (var n in ke(e))
                  ze.call(e, n) && "constructor" != n && t.push(n);
                return t;
              }
              function Dr(e) {
                if (!tu(e))
                  return (function (e) {
                    var t = [];
                    if (null != e) for (var n in ke(e)) t.push(n);
                    return t;
                  })(e);
                var t = xo(e),
                  n = [];
                for (var r in e)
                  ("constructor" != r || (!t && ze.call(e, r))) && n.push(r);
                return n;
              }
              function Mr(e, t) {
                return e < t;
              }
              function Fr(e, t) {
                var n = -1,
                  i = Qa(e) ? r(e.length) : [];
                return (
                  pr(e, function (e, r, o) {
                    i[++n] = t(e, r, o);
                  }),
                  i
                );
              }
              function jr(e) {
                var t = fo(e);
                return 1 == t.length && t[0][2]
                  ? ko(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || Rr(n, e, t);
                    };
              }
              function Wr(e, t) {
                return Eo(e) && Co(t)
                  ? ko(Do(e), t)
                  : function (n) {
                      var r = ku(n, e);
                      return r === i && r === t ? Lu(n, e) : Or(t, r, 3);
                    };
              }
              function Vr(e, t, n, r, o) {
                e !== t &&
                  br(
                    t,
                    function (a, u) {
                      if ((o || (o = new Yn()), tu(a)))
                        !(function (e, t, n, r, o, a, u) {
                          var c = To(e, n),
                            l = To(t, n),
                            s = u.get(l);
                          if (s) return void tr(e, n, s);
                          var f = a ? a(c, l, n + "", e, t, u) : i,
                            d = f === i;
                          if (d) {
                            var p = Ha(l),
                              h = !p && Ka(l),
                              v = !p && !h && su(l);
                            (f = l),
                              p || h || v
                                ? Ha(c)
                                  ? (f = c)
                                  : $a(c)
                                  ? (f = Ti(c))
                                  : h
                                  ? ((d = !1), (f = _i(l, !0)))
                                  : v
                                  ? ((d = !1), (f = Ci(l, !0)))
                                  : (f = [])
                                : ou(l) || qa(l)
                                ? ((f = c),
                                  qa(c)
                                    ? (f = yu(c))
                                    : (tu(c) && !Za(c)) || (f = yo(l)))
                                : (d = !1);
                          }
                          d && (u.set(l, f), o(f, l, r, a, u), u.delete(l));
                          tr(e, n, f);
                        })(e, t, u, n, Vr, r, o);
                      else {
                        var c = r ? r(To(e, u), a, u + "", e, t, o) : i;
                        c === i && (c = a), tr(e, u, c);
                      }
                    },
                    Ou
                  );
              }
              function qr(e, t) {
                var n = e.length;
                if (n) return wo((t += t < 0 ? n : 0), n) ? e[t] : i;
              }
              function Hr(e, t, n) {
                t = t.length
                  ? Nt(t, function (e) {
                      return Ha(e)
                        ? function (t) {
                            return _r(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [ic];
                var r = -1;
                t = Nt(t, Jt(lo()));
                var i = Fr(e, function (e, n, i) {
                  var o = Nt(t, function (t) {
                    return t(e);
                  });
                  return { criteria: o, index: ++r, value: e };
                });
                return (function (e, t) {
                  var n = e.length;
                  for (e.sort(t); n--; ) e[n] = e[n].value;
                  return e;
                })(i, function (e, t) {
                  return (function (e, t, n) {
                    var r = -1,
                      i = e.criteria,
                      o = t.criteria,
                      a = i.length,
                      u = n.length;
                    for (; ++r < a; ) {
                      var c = ki(i[r], o[r]);
                      if (c) return r >= u ? c : c * ("desc" == n[r] ? -1 : 1);
                    }
                    return e.index - t.index;
                  })(e, t, n);
                });
              }
              function Gr(e, t, n) {
                for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                  var a = t[r],
                    u = _r(e, a);
                  n(u, a) && ei(o, wi(a, e), u);
                }
                return o;
              }
              function Qr(e, t, n, r) {
                var i = r ? qt : Vt,
                  o = -1,
                  a = t.length,
                  u = e;
                for (e === t && (t = Ti(t)), n && (u = Nt(e, Jt(n))); ++o < a; )
                  for (
                    var c = 0, l = t[o], s = n ? n(l) : l;
                    (c = i(u, s, c, r)) > -1;

                  )
                    u !== e && Ye.call(u, c, 1), Ye.call(e, c, 1);
                return e;
              }
              function $r(e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                  var i = t[n];
                  if (n == r || i !== o) {
                    var o = i;
                    wo(i) ? Ye.call(e, i, 1) : di(e, i);
                  }
                }
                return e;
              }
              function Kr(e, t) {
                return e + gt(An() * (t - e + 1));
              }
              function Yr(e, t) {
                var n = "";
                if (!e || t < 1 || t > h) return n;
                do {
                  t % 2 && (n += e), (t = gt(t / 2)) && (e += e);
                } while (t);
                return n;
              }
              function Xr(e, t) {
                return Oo(Lo(e, t, ic), e + "");
              }
              function Zr(e) {
                return Zn(ju(e));
              }
              function Jr(e, t) {
                var n = ju(e);
                return zo(n, cr(t, 0, n.length));
              }
              function ei(e, t, n, r) {
                if (!tu(e)) return e;
                for (
                  var o = -1, a = (t = wi(t, e)).length, u = a - 1, c = e;
                  null != c && ++o < a;

                ) {
                  var l = Do(t[o]),
                    s = n;
                  if (
                    "__proto__" === l ||
                    "constructor" === l ||
                    "prototype" === l
                  )
                    return e;
                  if (o != u) {
                    var f = c[l];
                    (s = r ? r(f, l, c) : i) === i &&
                      (s = tu(f) ? f : wo(t[o + 1]) ? [] : {});
                  }
                  nr(c, l, s), (c = c[l]);
                }
                return e;
              }
              var ti = Pn
                  ? function (e, t) {
                      return Pn.set(e, t), e;
                    }
                  : ic,
                ni = nt
                  ? function (e, t) {
                      return nt(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: tc(t),
                        writable: !0,
                      });
                    }
                  : ic;
              function ri(e) {
                return zo(ju(e));
              }
              function ii(e, t, n) {
                var i = -1,
                  o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t),
                  (n = n > o ? o : n) < 0 && (n += o),
                  (o = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var a = r(o); ++i < o; ) a[i] = e[i + t];
                return a;
              }
              function oi(e, t) {
                var n;
                return (
                  pr(e, function (e, r, i) {
                    return !(n = t(e, r, i));
                  }),
                  !!n
                );
              }
              function ai(e, t, n) {
                var r = 0,
                  i = null == e ? r : e.length;
                if ("number" == typeof t && t == t && i <= 2147483647) {
                  for (; r < i; ) {
                    var o = (r + i) >>> 1,
                      a = e[o];
                    null !== a && !lu(a) && (n ? a <= t : a < t)
                      ? (r = o + 1)
                      : (i = o);
                  }
                  return i;
                }
                return ui(e, t, ic, n);
              }
              function ui(e, t, n, r) {
                var o = 0,
                  a = null == e ? 0 : e.length;
                if (0 === a) return 0;
                for (
                  var u = (t = n(t)) != t,
                    c = null === t,
                    l = lu(t),
                    s = t === i;
                  o < a;

                ) {
                  var f = gt((o + a) / 2),
                    d = n(e[f]),
                    p = d !== i,
                    h = null === d,
                    v = d == d,
                    g = lu(d);
                  if (u) var m = r || v;
                  else
                    m = s
                      ? v && (r || p)
                      : c
                      ? v && p && (r || !h)
                      : l
                      ? v && p && !h && (r || !g)
                      : !h && !g && (r ? d <= t : d < t);
                  m ? (o = f + 1) : (a = f);
                }
                return wn(a, 4294967294);
              }
              function ci(e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                  var a = e[n],
                    u = t ? t(a) : a;
                  if (!n || !ja(u, c)) {
                    var c = u;
                    o[i++] = 0 === a ? 0 : a;
                  }
                }
                return o;
              }
              function li(e) {
                return "number" == typeof e ? e : lu(e) ? v : +e;
              }
              function si(e) {
                if ("string" == typeof e) return e;
                if (Ha(e)) return Nt(e, si) + "";
                if (lu(e)) return Fn ? Fn.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
              }
              function fi(e, t, n) {
                var r = -1,
                  i = Ot,
                  o = e.length,
                  a = !0,
                  u = [],
                  c = u;
                if (n) (a = !1), (i = Rt);
                else if (o >= 200) {
                  var l = t ? null : Yi(e);
                  if (l) return dn(l);
                  (a = !1), (i = tn), (c = new Kn());
                } else c = t ? [] : u;
                e: for (; ++r < o; ) {
                  var s = e[r],
                    f = t ? t(s) : s;
                  if (((s = n || 0 !== s ? s : 0), a && f == f)) {
                    for (var d = c.length; d--; ) if (c[d] === f) continue e;
                    t && c.push(f), u.push(s);
                  } else i(c, f, n) || (c !== u && c.push(f), u.push(s));
                }
                return u;
              }
              function di(e, t) {
                return (
                  null == (e = Io(e, (t = wi(t, e)))) || delete e[Do(Xo(t))]
                );
              }
              function pi(e, t, n, r) {
                return ei(e, t, n(_r(e, t)), r);
              }
              function hi(e, t, n, r) {
                for (
                  var i = e.length, o = r ? i : -1;
                  (r ? o-- : ++o < i) && t(e[o], o, e);

                );
                return n
                  ? ii(e, r ? 0 : o, r ? o + 1 : i)
                  : ii(e, r ? o + 1 : 0, r ? i : o);
              }
              function vi(e, t) {
                var n = e;
                return (
                  n instanceof Hn && (n = n.value()),
                  Bt(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, zt([e], t.args));
                    },
                    n
                  )
                );
              }
              function gi(e, t, n) {
                var i = e.length;
                if (i < 2) return i ? fi(e[0]) : [];
                for (var o = -1, a = r(i); ++o < i; )
                  for (var u = e[o], c = -1; ++c < i; )
                    c != o && (a[o] = dr(a[o] || u, e[c], t, n));
                return fi(yr(a, 1), t, n);
              }
              function mi(e, t, n) {
                for (
                  var r = -1, o = e.length, a = t.length, u = {};
                  ++r < o;

                ) {
                  var c = r < a ? t[r] : i;
                  n(u, e[r], c);
                }
                return u;
              }
              function yi(e) {
                return $a(e) ? e : [];
              }
              function bi(e) {
                return "function" == typeof e ? e : ic;
              }
              function wi(e, t) {
                return Ha(e) ? e : Eo(e, t) ? [e] : Bo(bu(e));
              }
              var Si = Xr;
              function Ei(e, t, n) {
                var r = e.length;
                return (n = n === i ? r : n), !t && n >= r ? e : ii(e, t, n);
              }
              var Ai =
                it ||
                function (e) {
                  return vt.clearTimeout(e);
                };
              function _i(e, t) {
                if (t) return e.slice();
                var n = e.length,
                  r = Ge ? Ge(n) : new e.constructor(n);
                return e.copy(r), r;
              }
              function xi(e) {
                var t = new e.constructor(e.byteLength);
                return new He(t).set(new He(e)), t;
              }
              function Ci(e, t) {
                var n = t ? xi(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length);
              }
              function ki(e, t) {
                if (e !== t) {
                  var n = e !== i,
                    r = null === e,
                    o = e == e,
                    a = lu(e),
                    u = t !== i,
                    c = null === t,
                    l = t == t,
                    s = lu(t);
                  if (
                    (!c && !s && !a && e > t) ||
                    (a && u && l && !c && !s) ||
                    (r && u && l) ||
                    (!n && l) ||
                    !o
                  )
                    return 1;
                  if (
                    (!r && !a && !s && e < t) ||
                    (s && n && o && !r && !a) ||
                    (c && n && o) ||
                    (!u && o) ||
                    !l
                  )
                    return -1;
                }
                return 0;
              }
              function Li(e, t, n, i) {
                for (
                  var o = -1,
                    a = e.length,
                    u = n.length,
                    c = -1,
                    l = t.length,
                    s = bn(a - u, 0),
                    f = r(l + s),
                    d = !i;
                  ++c < l;

                )
                  f[c] = t[c];
                for (; ++o < u; ) (d || o < a) && (f[n[o]] = e[o]);
                for (; s--; ) f[c++] = e[o++];
                return f;
              }
              function Ii(e, t, n, i) {
                for (
                  var o = -1,
                    a = e.length,
                    u = -1,
                    c = n.length,
                    l = -1,
                    s = t.length,
                    f = bn(a - c, 0),
                    d = r(f + s),
                    p = !i;
                  ++o < f;

                )
                  d[o] = e[o];
                for (var h = o; ++l < s; ) d[h + l] = t[l];
                for (; ++u < c; ) (p || o < a) && (d[h + n[u]] = e[o++]);
                return d;
              }
              function Ti(e, t) {
                var n = -1,
                  i = e.length;
                for (t || (t = r(i)); ++n < i; ) t[n] = e[n];
                return t;
              }
              function Pi(e, t, n, r) {
                var o = !n;
                n || (n = {});
                for (var a = -1, u = t.length; ++a < u; ) {
                  var c = t[a],
                    l = r ? r(n[c], e[c], c, n, e) : i;
                  l === i && (l = e[c]), o ? ar(n, c, l) : nr(n, c, l);
                }
                return n;
              }
              function Ui(e, t) {
                return function (n, r) {
                  var i = Ha(n) ? Lt : ir,
                    o = t ? t() : {};
                  return i(n, e, lo(r, 2), o);
                };
              }
              function Oi(e) {
                return Xr(function (t, n) {
                  var r = -1,
                    o = n.length,
                    a = o > 1 ? n[o - 1] : i,
                    u = o > 2 ? n[2] : i;
                  for (
                    a = e.length > 3 && "function" == typeof a ? (o--, a) : i,
                      u && So(n[0], n[1], u) && ((a = o < 3 ? i : a), (o = 1)),
                      t = ke(t);
                    ++r < o;

                  ) {
                    var c = n[r];
                    c && e(t, c, r, a);
                  }
                  return t;
                });
              }
              function Ri(e, t) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!Qa(n)) return e(n, r);
                  for (
                    var i = n.length, o = t ? i : -1, a = ke(n);
                    (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                  );
                  return n;
                };
              }
              function Ni(e) {
                return function (t, n, r) {
                  for (var i = -1, o = ke(t), a = r(t), u = a.length; u--; ) {
                    var c = a[e ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                  }
                  return t;
                };
              }
              function zi(e) {
                return function (t) {
                  var n = cn((t = bu(t))) ? vn(t) : i,
                    r = n ? n[0] : t.charAt(0),
                    o = n ? Ei(n, 1).join("") : t.slice(1);
                  return r[e]() + o;
                };
              }
              function Bi(e) {
                return function (t) {
                  return Bt(Zu(qu(t).replace(et, "")), e, "");
                };
              }
              function Di(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var n = Wn(e.prototype),
                    r = e.apply(n, t);
                  return tu(r) ? r : n;
                };
              }
              function Mi(e) {
                return function (t, n, r) {
                  var o = ke(t);
                  if (!Qa(t)) {
                    var a = lo(n, 3);
                    (t = Uu(t)),
                      (n = function (e) {
                        return a(o[e], e, o);
                      });
                  }
                  var u = e(t, n, r);
                  return u > -1 ? o[a ? t[u] : u] : i;
                };
              }
              function Fi(e) {
                return ro(function (t) {
                  var n = t.length,
                    r = n,
                    a = qn.prototype.thru;
                  for (e && t.reverse(); r--; ) {
                    var u = t[r];
                    if ("function" != typeof u) throw new Te(o);
                    if (a && !c && "wrapper" == uo(u)) var c = new qn([], !0);
                  }
                  for (r = c ? r : n; ++r < n; ) {
                    var l = uo((u = t[r])),
                      s = "wrapper" == l ? ao(u) : i;
                    c =
                      s && Ao(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9]
                        ? c[uo(s[0])].apply(c, s[3])
                        : 1 == u.length && Ao(u)
                        ? c[l]()
                        : c.thru(u);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && Ha(r)) return c.plant(r).value();
                    for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                      o = t[i].call(this, o);
                    return o;
                  };
                });
              }
              function ji(e, t, n, o, a, u, c, l, s, d) {
                var p = t & f,
                  h = 1 & t,
                  v = 2 & t,
                  g = 24 & t,
                  m = 512 & t,
                  y = v ? i : Di(e);
                return function f() {
                  for (var b = arguments.length, w = r(b), S = b; S--; )
                    w[S] = arguments[S];
                  if (g)
                    var E = co(f),
                      A = (function (e, t) {
                        for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                        return r;
                      })(w, E);
                  if (
                    (o && (w = Li(w, o, a, g)),
                    u && (w = Ii(w, u, c, g)),
                    (b -= A),
                    g && b < d)
                  ) {
                    var _ = fn(w, E);
                    return $i(e, t, ji, f.placeholder, n, w, _, l, s, d - b);
                  }
                  var x = h ? n : this,
                    C = v ? x[e] : e;
                  return (
                    (b = w.length),
                    l
                      ? (w = (function (e, t) {
                          var n = e.length,
                            r = wn(t.length, n),
                            o = Ti(e);
                          for (; r--; ) {
                            var a = t[r];
                            e[r] = wo(a, n) ? o[a] : i;
                          }
                          return e;
                        })(w, l))
                      : m && b > 1 && w.reverse(),
                    p && s < b && (w.length = s),
                    this &&
                      this !== vt &&
                      this instanceof f &&
                      (C = y || Di(C)),
                    C.apply(x, w)
                  );
                };
              }
              function Wi(e, t) {
                return function (n, r) {
                  return (function (e, t, n, r) {
                    return (
                      Sr(e, function (e, i, o) {
                        t(r, n(e), i, o);
                      }),
                      r
                    );
                  })(n, e, t(r), {});
                };
              }
              function Vi(e, t) {
                return function (n, r) {
                  var o;
                  if (n === i && r === i) return t;
                  if ((n !== i && (o = n), r !== i)) {
                    if (o === i) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = si(n)), (r = si(r)))
                      : ((n = li(n)), (r = li(r))),
                      (o = e(n, r));
                  }
                  return o;
                };
              }
              function qi(e) {
                return ro(function (t) {
                  return (
                    (t = Nt(t, Jt(lo()))),
                    Xr(function (n) {
                      var r = this;
                      return e(t, function (e) {
                        return kt(e, r, n);
                      });
                    })
                  );
                });
              }
              function Hi(e, t) {
                var n = (t = t === i ? " " : si(t)).length;
                if (n < 2) return n ? Yr(t, e) : t;
                var r = Yr(t, ht(e / hn(t)));
                return cn(t) ? Ei(vn(r), 0, e).join("") : r.slice(0, e);
              }
              function Gi(e) {
                return function (t, n, o) {
                  return (
                    o && "number" != typeof o && So(t, n, o) && (n = o = i),
                    (t = hu(t)),
                    n === i ? ((n = t), (t = 0)) : (n = hu(n)),
                    (function (e, t, n, i) {
                      for (
                        var o = -1, a = bn(ht((t - e) / (n || 1)), 0), u = r(a);
                        a--;

                      )
                        (u[i ? a : ++o] = e), (e += n);
                      return u;
                    })(t, n, (o = o === i ? (t < n ? 1 : -1) : hu(o)), e)
                  );
                };
              }
              function Qi(e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = mu(t)), (n = mu(n))),
                    e(t, n)
                  );
                };
              }
              function $i(e, t, n, r, o, a, u, c, f, d) {
                var p = 8 & t;
                (t |= p ? l : s), 4 & (t &= ~(p ? s : l)) || (t &= -4);
                var h = [
                    e,
                    t,
                    o,
                    p ? a : i,
                    p ? u : i,
                    p ? i : a,
                    p ? i : u,
                    c,
                    f,
                    d,
                  ],
                  v = n.apply(i, h);
                return Ao(e) && Po(v, h), (v.placeholder = r), Ro(v, e, t);
              }
              function Ki(e) {
                var t = Ce[e];
                return function (e, n) {
                  if (
                    ((e = mu(e)), (n = null == n ? 0 : wn(vu(n), 292)) && wt(e))
                  ) {
                    var r = (bu(e) + "e").split("e");
                    return +(
                      (r = (bu(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - n)
                    );
                  }
                  return t(e);
                };
              }
              var Yi =
                Ln && 1 / dn(new Ln([, -0]))[1] == p
                  ? function (e) {
                      return new Ln(e);
                    }
                  : lc;
              function Xi(e) {
                return function (t) {
                  var n = go(t);
                  return n == x
                    ? ln(t)
                    : n == T
                    ? pn(t)
                    : (function (e, t) {
                        return Nt(t, function (t) {
                          return [t, e[t]];
                        });
                      })(t, e(t));
                };
              }
              function Zi(e, t, n, a, p, h, v, g) {
                var m = 2 & t;
                if (!m && "function" != typeof e) throw new Te(o);
                var y = a ? a.length : 0;
                if (
                  (y || ((t &= -97), (a = p = i)),
                  (v = v === i ? v : bn(vu(v), 0)),
                  (g = g === i ? g : vu(g)),
                  (y -= p ? p.length : 0),
                  t & s)
                ) {
                  var b = a,
                    w = p;
                  a = p = i;
                }
                var S = m ? i : ao(e),
                  E = [e, t, n, a, p, b, w, h, v, g];
                if (
                  (S &&
                    (function (e, t) {
                      var n = e[1],
                        r = t[1],
                        i = n | r,
                        o = i < 131,
                        a =
                          (r == f && 8 == n) ||
                          (r == f && n == d && e[7].length <= t[8]) ||
                          (384 == r && t[7].length <= t[8] && 8 == n);
                      if (!o && !a) return e;
                      1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                      var c = t[3];
                      if (c) {
                        var l = e[3];
                        (e[3] = l ? Li(l, c, t[4]) : c),
                          (e[4] = l ? fn(e[3], u) : t[4]);
                      }
                      (c = t[5]) &&
                        ((l = e[5]),
                        (e[5] = l ? Ii(l, c, t[6]) : c),
                        (e[6] = l ? fn(e[5], u) : t[6]));
                      (c = t[7]) && (e[7] = c);
                      r & f && (e[8] = null == e[8] ? t[8] : wn(e[8], t[8]));
                      null == e[9] && (e[9] = t[9]);
                      (e[0] = t[0]), (e[1] = i);
                    })(E, S),
                  (e = E[0]),
                  (t = E[1]),
                  (n = E[2]),
                  (a = E[3]),
                  (p = E[4]),
                  !(g = E[9] =
                    E[9] === i ? (m ? 0 : e.length) : bn(E[9] - y, 0)) &&
                    24 & t &&
                    (t &= -25),
                  t && 1 != t)
                )
                  A =
                    8 == t || t == c
                      ? (function (e, t, n) {
                          var o = Di(e);
                          return function a() {
                            for (
                              var u = arguments.length,
                                c = r(u),
                                l = u,
                                s = co(a);
                              l--;

                            )
                              c[l] = arguments[l];
                            var f =
                              u < 3 && c[0] !== s && c[u - 1] !== s
                                ? []
                                : fn(c, s);
                            return (u -= f.length) < n
                              ? $i(
                                  e,
                                  t,
                                  ji,
                                  a.placeholder,
                                  i,
                                  c,
                                  f,
                                  i,
                                  i,
                                  n - u
                                )
                              : kt(
                                  this && this !== vt && this instanceof a
                                    ? o
                                    : e,
                                  this,
                                  c
                                );
                          };
                        })(e, t, g)
                      : (t != l && 33 != t) || p.length
                      ? ji.apply(i, E)
                      : (function (e, t, n, i) {
                          var o = 1 & t,
                            a = Di(e);
                          return function t() {
                            for (
                              var u = -1,
                                c = arguments.length,
                                l = -1,
                                s = i.length,
                                f = r(s + c),
                                d =
                                  this && this !== vt && this instanceof t
                                    ? a
                                    : e;
                              ++l < s;

                            )
                              f[l] = i[l];
                            for (; c--; ) f[l++] = arguments[++u];
                            return kt(d, o ? n : this, f);
                          };
                        })(e, t, n, a);
                else
                  var A = (function (e, t, n) {
                    var r = 1 & t,
                      i = Di(e);
                    return function t() {
                      return (
                        this && this !== vt && this instanceof t ? i : e
                      ).apply(r ? n : this, arguments);
                    };
                  })(e, t, n);
                return Ro((S ? ti : Po)(A, E), e, t);
              }
              function Ji(e, t, n, r) {
                return e === i || (ja(e, Oe[n]) && !ze.call(r, n)) ? t : e;
              }
              function eo(e, t, n, r, o, a) {
                return (
                  tu(e) &&
                    tu(t) &&
                    (a.set(t, e), Vr(e, t, i, eo, a), a.delete(t)),
                  e
                );
              }
              function to(e) {
                return ou(e) ? i : e;
              }
              function no(e, t, n, r, o, a) {
                var u = 1 & n,
                  c = e.length,
                  l = t.length;
                if (c != l && !(u && l > c)) return !1;
                var s = a.get(e),
                  f = a.get(t);
                if (s && f) return s == t && f == e;
                var d = -1,
                  p = !0,
                  h = 2 & n ? new Kn() : i;
                for (a.set(e, t), a.set(t, e); ++d < c; ) {
                  var v = e[d],
                    g = t[d];
                  if (r) var m = u ? r(g, v, d, t, e, a) : r(v, g, d, e, t, a);
                  if (m !== i) {
                    if (m) continue;
                    p = !1;
                    break;
                  }
                  if (h) {
                    if (
                      !Mt(t, function (e, t) {
                        if (!tn(h, t) && (v === e || o(v, e, n, r, a)))
                          return h.push(t);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (v !== g && !o(v, g, n, r, a)) {
                    p = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), p;
              }
              function ro(e) {
                return Oo(Lo(e, i, Go), e + "");
              }
              function io(e) {
                return xr(e, Uu, ho);
              }
              function oo(e) {
                return xr(e, Ou, vo);
              }
              var ao = Pn
                ? function (e) {
                    return Pn.get(e);
                  }
                : lc;
              function uo(e) {
                for (
                  var t = e.name + "",
                    n = Un[t],
                    r = ze.call(Un, t) ? n.length : 0;
                  r--;

                ) {
                  var i = n[r],
                    o = i.func;
                  if (null == o || o == e) return i.name;
                }
                return t;
              }
              function co(e) {
                return (ze.call(jn, "placeholder") ? jn : e).placeholder;
              }
              function lo() {
                var e = jn.iteratee || oc;
                return (
                  (e = e === oc ? zr : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function so(e, t) {
                var n,
                  r,
                  i = e.__data__;
                return (
                  "string" == (r = typeof (n = t)) ||
                  "number" == r ||
                  "symbol" == r ||
                  "boolean" == r
                    ? "__proto__" !== n
                    : null === n
                )
                  ? i["string" == typeof t ? "string" : "hash"]
                  : i.map;
              }
              function fo(e) {
                for (var t = Uu(e), n = t.length; n--; ) {
                  var r = t[n],
                    i = e[r];
                  t[n] = [r, i, Co(i)];
                }
                return t;
              }
              function po(e, t) {
                var n = (function (e, t) {
                  return null == e ? i : e[t];
                })(e, t);
                return Nr(n) ? n : i;
              }
              var ho = mt
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = ke(e)),
                          Ut(mt(e), function (t) {
                            return Ke.call(e, t);
                          }));
                    }
                  : gc,
                vo = mt
                  ? function (e) {
                      for (var t = []; e; ) zt(t, ho(e)), (e = Qe(e));
                      return t;
                    }
                  : gc,
                go = Cr;
              function mo(e, t, n) {
                for (var r = -1, i = (t = wi(t, e)).length, o = !1; ++r < i; ) {
                  var a = Do(t[r]);
                  if (!(o = null != e && n(e, a))) break;
                  e = e[a];
                }
                return o || ++r != i
                  ? o
                  : !!(i = null == e ? 0 : e.length) &&
                      eu(i) &&
                      wo(a, i) &&
                      (Ha(e) || qa(e));
              }
              function yo(e) {
                return "function" != typeof e.constructor || xo(e)
                  ? {}
                  : Wn(Qe(e));
              }
              function bo(e) {
                return Ha(e) || qa(e) || !!(Xe && e && e[Xe]);
              }
              function wo(e, t) {
                var n = typeof e;
                return (
                  !!(t = null == t ? h : t) &&
                  ("number" == n || ("symbol" != n && we.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function So(e, t, n) {
                if (!tu(n)) return !1;
                var r = typeof t;
                return (
                  !!("number" == r
                    ? Qa(n) && wo(t, n.length)
                    : "string" == r && t in n) && ja(n[t], e)
                );
              }
              function Eo(e, t) {
                if (Ha(e)) return !1;
                var n = typeof e;
                return (
                  !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != e &&
                    !lu(e)
                  ) ||
                  ne.test(e) ||
                  !te.test(e) ||
                  (null != t && e in ke(t))
                );
              }
              function Ao(e) {
                var t = uo(e),
                  n = jn[t];
                if ("function" != typeof n || !(t in Hn.prototype)) return !1;
                if (e === n) return !0;
                var r = ao(n);
                return !!r && e === r[0];
              }
              ((xn && go(new xn(new ArrayBuffer(1))) != N) ||
                (Cn && go(new Cn()) != x) ||
                (kn && go(kn.resolve()) != L) ||
                (Ln && go(new Ln()) != T) ||
                (In && go(new In()) != O)) &&
                (go = function (e) {
                  var t = Cr(e),
                    n = t == k ? e.constructor : i,
                    r = n ? Mo(n) : "";
                  if (r)
                    switch (r) {
                      case On:
                        return N;
                      case Rn:
                        return x;
                      case Nn:
                        return L;
                      case zn:
                        return T;
                      case Bn:
                        return O;
                    }
                  return t;
                });
              var _o = Re ? Za : mc;
              function xo(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || Oe);
              }
              function Co(e) {
                return e == e && !tu(e);
              }
              function ko(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== i || e in ke(n));
                };
              }
              function Lo(e, t, n) {
                return (
                  (t = bn(t === i ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments,
                        o = -1,
                        a = bn(i.length - t, 0),
                        u = r(a);
                      ++o < a;

                    )
                      u[o] = i[t + o];
                    o = -1;
                    for (var c = r(t + 1); ++o < t; ) c[o] = i[o];
                    return (c[t] = n(u)), kt(e, this, c);
                  }
                );
              }
              function Io(e, t) {
                return t.length < 2 ? e : _r(e, ii(t, 0, -1));
              }
              function To(e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var Po = No(ti),
                Uo =
                  pt ||
                  function (e, t) {
                    return vt.setTimeout(e, t);
                  },
                Oo = No(ni);
              function Ro(e, t, n) {
                var r = t + "";
                return Oo(
                  e,
                  (function (e, t) {
                    var n = t.length;
                    if (!n) return e;
                    var r = n - 1;
                    return (
                      (t[r] = (n > 1 ? "& " : "") + t[r]),
                      (t = t.join(n > 2 ? ", " : " ")),
                      e.replace(ce, "{\n/* [wrapped with " + t + "] */\n")
                    );
                  })(
                    r,
                    (function (e, t) {
                      return (
                        It(m, function (n) {
                          var r = "_." + n[0];
                          t & n[1] && !Ot(e, r) && e.push(r);
                        }),
                        e.sort()
                      );
                    })(
                      (function (e) {
                        var t = e.match(le);
                        return t ? t[1].split(se) : [];
                      })(r),
                      n
                    )
                  )
                );
              }
              function No(e) {
                var t = 0,
                  n = 0;
                return function () {
                  var r = Sn(),
                    o = 16 - (r - n);
                  if (((n = r), o > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(i, arguments);
                };
              }
              function zo(e, t) {
                var n = -1,
                  r = e.length,
                  o = r - 1;
                for (t = t === i ? r : t; ++n < t; ) {
                  var a = Kr(n, o),
                    u = e[a];
                  (e[a] = e[n]), (e[n] = u);
                }
                return (e.length = t), e;
              }
              var Bo = (function (e) {
                var t = Na(e, function (e) {
                    return 500 === n.size && n.clear(), e;
                  }),
                  n = t.cache;
                return t;
              })(function (e) {
                var t = [];
                return (
                  46 === e.charCodeAt(0) && t.push(""),
                  e.replace(re, function (e, n, r, i) {
                    t.push(r ? i.replace(pe, "$1") : n || e);
                  }),
                  t
                );
              });
              function Do(e) {
                if ("string" == typeof e || lu(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
              }
              function Mo(e) {
                if (null != e) {
                  try {
                    return Ne.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              }
              function Fo(e) {
                if (e instanceof Hn) return e.clone();
                var t = new qn(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = Ti(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var jo = Xr(function (e, t) {
                  return $a(e) ? dr(e, yr(t, 1, $a, !0)) : [];
                }),
                Wo = Xr(function (e, t) {
                  var n = Xo(t);
                  return (
                    $a(n) && (n = i),
                    $a(e) ? dr(e, yr(t, 1, $a, !0), lo(n, 2)) : []
                  );
                }),
                Vo = Xr(function (e, t) {
                  var n = Xo(t);
                  return (
                    $a(n) && (n = i), $a(e) ? dr(e, yr(t, 1, $a, !0), i, n) : []
                  );
                });
              function qo(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : vu(n);
                return i < 0 && (i = bn(r + i, 0)), Wt(e, lo(t, 3), i);
              }
              function Ho(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var o = r - 1;
                return (
                  n !== i &&
                    ((o = vu(n)), (o = n < 0 ? bn(r + o, 0) : wn(o, r - 1))),
                  Wt(e, lo(t, 3), o, !0)
                );
              }
              function Go(e) {
                return (null == e ? 0 : e.length) ? yr(e, 1) : [];
              }
              function Qo(e) {
                return e && e.length ? e[0] : i;
              }
              var $o = Xr(function (e) {
                  var t = Nt(e, yi);
                  return t.length && t[0] === e[0] ? Tr(t) : [];
                }),
                Ko = Xr(function (e) {
                  var t = Xo(e),
                    n = Nt(e, yi);
                  return (
                    t === Xo(n) ? (t = i) : n.pop(),
                    n.length && n[0] === e[0] ? Tr(n, lo(t, 2)) : []
                  );
                }),
                Yo = Xr(function (e) {
                  var t = Xo(e),
                    n = Nt(e, yi);
                  return (
                    (t = "function" == typeof t ? t : i) && n.pop(),
                    n.length && n[0] === e[0] ? Tr(n, i, t) : []
                  );
                });
              function Xo(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : i;
              }
              var Zo = Xr(Jo);
              function Jo(e, t) {
                return e && e.length && t && t.length ? Qr(e, t) : e;
              }
              var ea = ro(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = ur(e, t);
                return (
                  $r(
                    e,
                    Nt(t, function (e) {
                      return wo(e, n) ? +e : e;
                    }).sort(ki)
                  ),
                  r
                );
              });
              function ta(e) {
                return null == e ? e : _n.call(e);
              }
              var na = Xr(function (e) {
                  return fi(yr(e, 1, $a, !0));
                }),
                ra = Xr(function (e) {
                  var t = Xo(e);
                  return $a(t) && (t = i), fi(yr(e, 1, $a, !0), lo(t, 2));
                }),
                ia = Xr(function (e) {
                  var t = Xo(e);
                  return (
                    (t = "function" == typeof t ? t : i),
                    fi(yr(e, 1, $a, !0), i, t)
                  );
                });
              function oa(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = Ut(e, function (e) {
                    if ($a(e)) return (t = bn(e.length, t)), !0;
                  })),
                  Xt(t, function (t) {
                    return Nt(e, Qt(t));
                  })
                );
              }
              function aa(e, t) {
                if (!e || !e.length) return [];
                var n = oa(e);
                return null == t
                  ? n
                  : Nt(n, function (e) {
                      return kt(t, i, e);
                    });
              }
              var ua = Xr(function (e, t) {
                  return $a(e) ? dr(e, t) : [];
                }),
                ca = Xr(function (e) {
                  return gi(Ut(e, $a));
                }),
                la = Xr(function (e) {
                  var t = Xo(e);
                  return $a(t) && (t = i), gi(Ut(e, $a), lo(t, 2));
                }),
                sa = Xr(function (e) {
                  var t = Xo(e);
                  return (
                    (t = "function" == typeof t ? t : i), gi(Ut(e, $a), i, t)
                  );
                }),
                fa = Xr(oa);
              var da = Xr(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : i;
                return (
                  (n = "function" == typeof n ? (e.pop(), n) : i), aa(e, n)
                );
              });
              function pa(e) {
                var t = jn(e);
                return (t.__chain__ = !0), t;
              }
              function ha(e, t) {
                return t(e);
              }
              var va = ro(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  o = function (t) {
                    return ur(t, e);
                  };
                return !(t > 1 || this.__actions__.length) &&
                  r instanceof Hn &&
                  wo(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                      func: ha,
                      args: [o],
                      thisArg: i,
                    }),
                    new qn(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(i), e;
                    }))
                  : this.thru(o);
              });
              var ga = Ui(function (e, t, n) {
                ze.call(e, n) ? ++e[n] : ar(e, n, 1);
              });
              var ma = Mi(qo),
                ya = Mi(Ho);
              function ba(e, t) {
                return (Ha(e) ? It : pr)(e, lo(t, 3));
              }
              function wa(e, t) {
                return (Ha(e) ? Tt : hr)(e, lo(t, 3));
              }
              var Sa = Ui(function (e, t, n) {
                ze.call(e, n) ? e[n].push(t) : ar(e, n, [t]);
              });
              var Ea = Xr(function (e, t, n) {
                  var i = -1,
                    o = "function" == typeof t,
                    a = Qa(e) ? r(e.length) : [];
                  return (
                    pr(e, function (e) {
                      a[++i] = o ? kt(t, e, n) : Pr(e, t, n);
                    }),
                    a
                  );
                }),
                Aa = Ui(function (e, t, n) {
                  ar(e, n, t);
                });
              function _a(e, t) {
                return (Ha(e) ? Nt : Fr)(e, lo(t, 3));
              }
              var xa = Ui(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                }
              );
              var Ca = Xr(function (e, t) {
                  if (null == e) return [];
                  var n = t.length;
                  return (
                    n > 1 && So(e, t[0], t[1])
                      ? (t = [])
                      : n > 2 && So(t[0], t[1], t[2]) && (t = [t[0]]),
                    Hr(e, yr(t, 1), [])
                  );
                }),
                ka =
                  st ||
                  function () {
                    return vt.Date.now();
                  };
              function La(e, t, n) {
                return (
                  (t = n ? i : t),
                  (t = e && null == t ? e.length : t),
                  Zi(e, f, i, i, i, i, t)
                );
              }
              function Ia(e, t) {
                var n;
                if ("function" != typeof t) throw new Te(o);
                return (
                  (e = vu(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      n
                    );
                  }
                );
              }
              var Ta = Xr(function (e, t, n) {
                  var r = 1;
                  if (n.length) {
                    var i = fn(n, co(Ta));
                    r |= l;
                  }
                  return Zi(e, r, t, n, i);
                }),
                Pa = Xr(function (e, t, n) {
                  var r = 3;
                  if (n.length) {
                    var i = fn(n, co(Pa));
                    r |= l;
                  }
                  return Zi(t, r, e, n, i);
                });
              function Ua(e, t, n) {
                var r,
                  a,
                  u,
                  c,
                  l,
                  s,
                  f = 0,
                  d = !1,
                  p = !1,
                  h = !0;
                if ("function" != typeof e) throw new Te(o);
                function v(t) {
                  var n = r,
                    o = a;
                  return (r = a = i), (f = t), (c = e.apply(o, n));
                }
                function g(e) {
                  var n = e - s;
                  return s === i || n >= t || n < 0 || (p && e - f >= u);
                }
                function m() {
                  var e = ka();
                  if (g(e)) return y(e);
                  l = Uo(
                    m,
                    (function (e) {
                      var n = t - (e - s);
                      return p ? wn(n, u - (e - f)) : n;
                    })(e)
                  );
                }
                function y(e) {
                  return (l = i), h && r ? v(e) : ((r = a = i), c);
                }
                function b() {
                  var e = ka(),
                    n = g(e);
                  if (((r = arguments), (a = this), (s = e), n)) {
                    if (l === i)
                      return (function (e) {
                        return (f = e), (l = Uo(m, t)), d ? v(e) : c;
                      })(s);
                    if (p) return Ai(l), (l = Uo(m, t)), v(s);
                  }
                  return l === i && (l = Uo(m, t)), c;
                }
                return (
                  (t = mu(t) || 0),
                  tu(n) &&
                    ((d = !!n.leading),
                    (u = (p = "maxWait" in n) ? bn(mu(n.maxWait) || 0, t) : u),
                    (h = "trailing" in n ? !!n.trailing : h)),
                  (b.cancel = function () {
                    l !== i && Ai(l), (f = 0), (r = s = a = l = i);
                  }),
                  (b.flush = function () {
                    return l === i ? c : y(ka());
                  }),
                  b
                );
              }
              var Oa = Xr(function (e, t) {
                  return fr(e, 1, t);
                }),
                Ra = Xr(function (e, t, n) {
                  return fr(e, mu(t) || 0, n);
                });
              function Na(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new Te(o);
                var n = function () {
                  var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache;
                  if (o.has(i)) return o.get(i);
                  var a = e.apply(this, r);
                  return (n.cache = o.set(i, a) || o), a;
                };
                return (n.cache = new (Na.Cache || $n)()), n;
              }
              function za(e) {
                if ("function" != typeof e) throw new Te(o);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              Na.Cache = $n;
              var Ba = Si(function (e, t) {
                  var n = (t =
                    1 == t.length && Ha(t[0])
                      ? Nt(t[0], Jt(lo()))
                      : Nt(yr(t, 1), Jt(lo()))).length;
                  return Xr(function (r) {
                    for (var i = -1, o = wn(r.length, n); ++i < o; )
                      r[i] = t[i].call(this, r[i]);
                    return kt(e, this, r);
                  });
                }),
                Da = Xr(function (e, t) {
                  var n = fn(t, co(Da));
                  return Zi(e, l, i, t, n);
                }),
                Ma = Xr(function (e, t) {
                  var n = fn(t, co(Ma));
                  return Zi(e, s, i, t, n);
                }),
                Fa = ro(function (e, t) {
                  return Zi(e, d, i, i, i, t);
                });
              function ja(e, t) {
                return e === t || (e != e && t != t);
              }
              var Wa = Qi(kr),
                Va = Qi(function (e, t) {
                  return e >= t;
                }),
                qa = Ur(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Ur
                  : function (e) {
                      return (
                        nu(e) && ze.call(e, "callee") && !Ke.call(e, "callee")
                      );
                    },
                Ha = r.isArray,
                Ga = St
                  ? Jt(St)
                  : function (e) {
                      return nu(e) && Cr(e) == R;
                    };
              function Qa(e) {
                return null != e && eu(e.length) && !Za(e);
              }
              function $a(e) {
                return nu(e) && Qa(e);
              }
              var Ka = bt || mc,
                Ya = Et
                  ? Jt(Et)
                  : function (e) {
                      return nu(e) && Cr(e) == S;
                    };
              function Xa(e) {
                if (!nu(e)) return !1;
                var t = Cr(e);
                return (
                  t == E ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !ou(e))
                );
              }
              function Za(e) {
                if (!tu(e)) return !1;
                var t = Cr(e);
                return (
                  t == A ||
                  t == _ ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function Ja(e) {
                return "number" == typeof e && e == vu(e);
              }
              function eu(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h;
              }
              function tu(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function nu(e) {
                return null != e && "object" == typeof e;
              }
              var ru = At
                ? Jt(At)
                : function (e) {
                    return nu(e) && go(e) == x;
                  };
              function iu(e) {
                return "number" == typeof e || (nu(e) && Cr(e) == C);
              }
              function ou(e) {
                if (!nu(e) || Cr(e) != k) return !1;
                var t = Qe(e);
                if (null === t) return !0;
                var n = ze.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof n && n instanceof n && Ne.call(n) == Fe
                );
              }
              var au = _t
                ? Jt(_t)
                : function (e) {
                    return nu(e) && Cr(e) == I;
                  };
              var uu = xt
                ? Jt(xt)
                : function (e) {
                    return nu(e) && go(e) == T;
                  };
              function cu(e) {
                return "string" == typeof e || (!Ha(e) && nu(e) && Cr(e) == P);
              }
              function lu(e) {
                return "symbol" == typeof e || (nu(e) && Cr(e) == U);
              }
              var su = Ct
                ? Jt(Ct)
                : function (e) {
                    return nu(e) && eu(e.length) && !!ct[Cr(e)];
                  };
              var fu = Qi(Mr),
                du = Qi(function (e, t) {
                  return e <= t;
                });
              function pu(e) {
                if (!e) return [];
                if (Qa(e)) return cu(e) ? vn(e) : Ti(e);
                if (Ze && e[Ze])
                  return (function (e) {
                    for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                    return n;
                  })(e[Ze]());
                var t = go(e);
                return (t == x ? ln : t == T ? dn : ju)(e);
              }
              function hu(e) {
                return e
                  ? (e = mu(e)) === p || e === -1 / 0
                    ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function vu(e) {
                var t = hu(e),
                  n = t % 1;
                return t == t ? (n ? t - n : t) : 0;
              }
              function gu(e) {
                return e ? cr(vu(e), 0, g) : 0;
              }
              function mu(e) {
                if ("number" == typeof e) return e;
                if (lu(e)) return v;
                if (tu(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = tu(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Zt(e);
                var n = me.test(e);
                return n || be.test(e)
                  ? dt(e.slice(2), n ? 2 : 8)
                  : ge.test(e)
                  ? v
                  : +e;
              }
              function yu(e) {
                return Pi(e, Ou(e));
              }
              function bu(e) {
                return null == e ? "" : si(e);
              }
              var wu = Oi(function (e, t) {
                  if (xo(t) || Qa(t)) Pi(t, Uu(t), e);
                  else for (var n in t) ze.call(t, n) && nr(e, n, t[n]);
                }),
                Su = Oi(function (e, t) {
                  Pi(t, Ou(t), e);
                }),
                Eu = Oi(function (e, t, n, r) {
                  Pi(t, Ou(t), e, r);
                }),
                Au = Oi(function (e, t, n, r) {
                  Pi(t, Uu(t), e, r);
                }),
                _u = ro(ur);
              var xu = Xr(function (e, t) {
                  e = ke(e);
                  var n = -1,
                    r = t.length,
                    o = r > 2 ? t[2] : i;
                  for (o && So(t[0], t[1], o) && (r = 1); ++n < r; )
                    for (
                      var a = t[n], u = Ou(a), c = -1, l = u.length;
                      ++c < l;

                    ) {
                      var s = u[c],
                        f = e[s];
                      (f === i || (ja(f, Oe[s]) && !ze.call(e, s))) &&
                        (e[s] = a[s]);
                    }
                  return e;
                }),
                Cu = Xr(function (e) {
                  return e.push(i, eo), kt(Nu, i, e);
                });
              function ku(e, t, n) {
                var r = null == e ? i : _r(e, t);
                return r === i ? n : r;
              }
              function Lu(e, t) {
                return null != e && mo(e, t, Ir);
              }
              var Iu = Wi(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = Me.call(t)),
                    (e[t] = n);
                }, tc(ic)),
                Tu = Wi(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = Me.call(t)),
                    ze.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                }, lo),
                Pu = Xr(Pr);
              function Uu(e) {
                return Qa(e) ? Xn(e) : Br(e);
              }
              function Ou(e) {
                return Qa(e) ? Xn(e, !0) : Dr(e);
              }
              var Ru = Oi(function (e, t, n) {
                  Vr(e, t, n);
                }),
                Nu = Oi(function (e, t, n, r) {
                  Vr(e, t, n, r);
                }),
                zu = ro(function (e, t) {
                  var n = {};
                  if (null == e) return n;
                  var r = !1;
                  (t = Nt(t, function (t) {
                    return (t = wi(t, e)), r || (r = t.length > 1), t;
                  })),
                    Pi(e, oo(e), n),
                    r && (n = lr(n, 7, to));
                  for (var i = t.length; i--; ) di(n, t[i]);
                  return n;
                });
              var Bu = ro(function (e, t) {
                return null == e
                  ? {}
                  : (function (e, t) {
                      return Gr(e, t, function (t, n) {
                        return Lu(e, n);
                      });
                    })(e, t);
              });
              function Du(e, t) {
                if (null == e) return {};
                var n = Nt(oo(e), function (e) {
                  return [e];
                });
                return (
                  (t = lo(t)),
                  Gr(e, n, function (e, n) {
                    return t(e, n[0]);
                  })
                );
              }
              var Mu = Xi(Uu),
                Fu = Xi(Ou);
              function ju(e) {
                return null == e ? [] : en(e, Uu(e));
              }
              var Wu = Bi(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? Vu(t) : t);
              });
              function Vu(e) {
                return Xu(bu(e).toLowerCase());
              }
              function qu(e) {
                return (e = bu(e)) && e.replace(Se, on).replace(tt, "");
              }
              var Hu = Bi(function (e, t, n) {
                  return e + (n ? "-" : "") + t.toLowerCase();
                }),
                Gu = Bi(function (e, t, n) {
                  return e + (n ? " " : "") + t.toLowerCase();
                }),
                Qu = zi("toLowerCase");
              var $u = Bi(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase();
              });
              var Ku = Bi(function (e, t, n) {
                return e + (n ? " " : "") + Xu(t);
              });
              var Yu = Bi(function (e, t, n) {
                  return e + (n ? " " : "") + t.toUpperCase();
                }),
                Xu = zi("toUpperCase");
              function Zu(e, t, n) {
                return (
                  (e = bu(e)),
                  (t = n ? i : t) === i
                    ? (function (e) {
                        return ot.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(rt) || [];
                        })(e)
                      : (function (e) {
                          return e.match(fe) || [];
                        })(e)
                    : e.match(t) || []
                );
              }
              var Ju = Xr(function (e, t) {
                  try {
                    return kt(e, i, t);
                  } catch (e) {
                    return Xa(e) ? e : new _e(e);
                  }
                }),
                ec = ro(function (e, t) {
                  return (
                    It(t, function (t) {
                      (t = Do(t)), ar(e, t, Ta(e[t], e));
                    }),
                    e
                  );
                });
              function tc(e) {
                return function () {
                  return e;
                };
              }
              var nc = Fi(),
                rc = Fi(!0);
              function ic(e) {
                return e;
              }
              function oc(e) {
                return zr("function" == typeof e ? e : lr(e, 1));
              }
              var ac = Xr(function (e, t) {
                  return function (n) {
                    return Pr(n, e, t);
                  };
                }),
                uc = Xr(function (e, t) {
                  return function (n) {
                    return Pr(e, n, t);
                  };
                });
              function cc(e, t, n) {
                var r = Uu(t),
                  i = Ar(t, r);
                null != n ||
                  (tu(t) && (i.length || !r.length)) ||
                  ((n = t), (t = e), (e = this), (i = Ar(t, Uu(t))));
                var o = !(tu(n) && "chain" in n && !n.chain),
                  a = Za(e);
                return (
                  It(i, function (n) {
                    var r = t[n];
                    (e[n] = r),
                      a &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__;
                          if (o || t) {
                            var n = e(this.__wrapped__);
                            return (
                              (n.__actions__ = Ti(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (n.__chain__ = t),
                              n
                            );
                          }
                          return r.apply(e, zt([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function lc() {}
              var sc = qi(Nt),
                fc = qi(Pt),
                dc = qi(Mt);
              function pc(e) {
                return Eo(e)
                  ? Qt(Do(e))
                  : (function (e) {
                      return function (t) {
                        return _r(t, e);
                      };
                    })(e);
              }
              var hc = Gi(),
                vc = Gi(!0);
              function gc() {
                return [];
              }
              function mc() {
                return !1;
              }
              var yc = Vi(function (e, t) {
                  return e + t;
                }, 0),
                bc = Ki("ceil"),
                wc = Vi(function (e, t) {
                  return e / t;
                }, 1),
                Sc = Ki("floor");
              var Ec,
                Ac = Vi(function (e, t) {
                  return e * t;
                }, 1),
                _c = Ki("round"),
                xc = Vi(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (jn.after = function (e, t) {
                  if ("function" != typeof t) throw new Te(o);
                  return (
                    (e = vu(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (jn.ary = La),
                (jn.assign = wu),
                (jn.assignIn = Su),
                (jn.assignInWith = Eu),
                (jn.assignWith = Au),
                (jn.at = _u),
                (jn.before = Ia),
                (jn.bind = Ta),
                (jn.bindAll = ec),
                (jn.bindKey = Pa),
                (jn.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return Ha(e) ? e : [e];
                }),
                (jn.chain = pa),
                (jn.chunk = function (e, t, n) {
                  t = (n ? So(e, t, n) : t === i) ? 1 : bn(vu(t), 0);
                  var o = null == e ? 0 : e.length;
                  if (!o || t < 1) return [];
                  for (var a = 0, u = 0, c = r(ht(o / t)); a < o; )
                    c[u++] = ii(e, a, (a += t));
                  return c;
                }),
                (jn.compact = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                    ++t < n;

                  ) {
                    var o = e[t];
                    o && (i[r++] = o);
                  }
                  return i;
                }),
                (jn.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                    t[i - 1] = arguments[i];
                  return zt(Ha(n) ? Ti(n) : [n], yr(t, 1));
                }),
                (jn.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    n = lo();
                  return (
                    (e = t
                      ? Nt(e, function (e) {
                          if ("function" != typeof e[1]) throw new Te(o);
                          return [n(e[0]), e[1]];
                        })
                      : []),
                    Xr(function (n) {
                      for (var r = -1; ++r < t; ) {
                        var i = e[r];
                        if (kt(i[0], this, n)) return kt(i[1], this, n);
                      }
                    })
                  );
                }),
                (jn.conforms = function (e) {
                  return (function (e) {
                    var t = Uu(e);
                    return function (n) {
                      return sr(n, e, t);
                    };
                  })(lr(e, 1));
                }),
                (jn.constant = tc),
                (jn.countBy = ga),
                (jn.create = function (e, t) {
                  var n = Wn(e);
                  return null == t ? n : or(n, t);
                }),
                (jn.curry = function e(t, n, r) {
                  var o = Zi(t, 8, i, i, i, i, i, (n = r ? i : n));
                  return (o.placeholder = e.placeholder), o;
                }),
                (jn.curryRight = function e(t, n, r) {
                  var o = Zi(t, c, i, i, i, i, i, (n = r ? i : n));
                  return (o.placeholder = e.placeholder), o;
                }),
                (jn.debounce = Ua),
                (jn.defaults = xu),
                (jn.defaultsDeep = Cu),
                (jn.defer = Oa),
                (jn.delay = Ra),
                (jn.difference = jo),
                (jn.differenceBy = Wo),
                (jn.differenceWith = Vo),
                (jn.drop = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? ii(e, (t = n || t === i ? 1 : vu(t)) < 0 ? 0 : t, r)
                    : [];
                }),
                (jn.dropRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? ii(
                        e,
                        0,
                        (t = r - (t = n || t === i ? 1 : vu(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (jn.dropRightWhile = function (e, t) {
                  return e && e.length ? hi(e, lo(t, 3), !0, !0) : [];
                }),
                (jn.dropWhile = function (e, t) {
                  return e && e.length ? hi(e, lo(t, 3), !0) : [];
                }),
                (jn.fill = function (e, t, n, r) {
                  var o = null == e ? 0 : e.length;
                  return o
                    ? (n &&
                        "number" != typeof n &&
                        So(e, t, n) &&
                        ((n = 0), (r = o)),
                      (function (e, t, n, r) {
                        var o = e.length;
                        for (
                          (n = vu(n)) < 0 && (n = -n > o ? 0 : o + n),
                            (r = r === i || r > o ? o : vu(r)) < 0 && (r += o),
                            r = n > r ? 0 : gu(r);
                          n < r;

                        )
                          e[n++] = t;
                        return e;
                      })(e, t, n, r))
                    : [];
                }),
                (jn.filter = function (e, t) {
                  return (Ha(e) ? Ut : mr)(e, lo(t, 3));
                }),
                (jn.flatMap = function (e, t) {
                  return yr(_a(e, t), 1);
                }),
                (jn.flatMapDeep = function (e, t) {
                  return yr(_a(e, t), p);
                }),
                (jn.flatMapDepth = function (e, t, n) {
                  return (n = n === i ? 1 : vu(n)), yr(_a(e, t), n);
                }),
                (jn.flatten = Go),
                (jn.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? yr(e, p) : [];
                }),
                (jn.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? yr(e, (t = t === i ? 1 : vu(t)))
                    : [];
                }),
                (jn.flip = function (e) {
                  return Zi(e, 512);
                }),
                (jn.flow = nc),
                (jn.flowRight = rc),
                (jn.fromPairs = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = {};
                    ++t < n;

                  ) {
                    var i = e[t];
                    r[i[0]] = i[1];
                  }
                  return r;
                }),
                (jn.functions = function (e) {
                  return null == e ? [] : Ar(e, Uu(e));
                }),
                (jn.functionsIn = function (e) {
                  return null == e ? [] : Ar(e, Ou(e));
                }),
                (jn.groupBy = Sa),
                (jn.initial = function (e) {
                  return (null == e ? 0 : e.length) ? ii(e, 0, -1) : [];
                }),
                (jn.intersection = $o),
                (jn.intersectionBy = Ko),
                (jn.intersectionWith = Yo),
                (jn.invert = Iu),
                (jn.invertBy = Tu),
                (jn.invokeMap = Ea),
                (jn.iteratee = oc),
                (jn.keyBy = Aa),
                (jn.keys = Uu),
                (jn.keysIn = Ou),
                (jn.map = _a),
                (jn.mapKeys = function (e, t) {
                  var n = {};
                  return (
                    (t = lo(t, 3)),
                    Sr(e, function (e, r, i) {
                      ar(n, t(e, r, i), e);
                    }),
                    n
                  );
                }),
                (jn.mapValues = function (e, t) {
                  var n = {};
                  return (
                    (t = lo(t, 3)),
                    Sr(e, function (e, r, i) {
                      ar(n, r, t(e, r, i));
                    }),
                    n
                  );
                }),
                (jn.matches = function (e) {
                  return jr(lr(e, 1));
                }),
                (jn.matchesProperty = function (e, t) {
                  return Wr(e, lr(t, 1));
                }),
                (jn.memoize = Na),
                (jn.merge = Ru),
                (jn.mergeWith = Nu),
                (jn.method = ac),
                (jn.methodOf = uc),
                (jn.mixin = cc),
                (jn.negate = za),
                (jn.nthArg = function (e) {
                  return (
                    (e = vu(e)),
                    Xr(function (t) {
                      return qr(t, e);
                    })
                  );
                }),
                (jn.omit = zu),
                (jn.omitBy = function (e, t) {
                  return Du(e, za(lo(t)));
                }),
                (jn.once = function (e) {
                  return Ia(2, e);
                }),
                (jn.orderBy = function (e, t, n, r) {
                  return null == e
                    ? []
                    : (Ha(t) || (t = null == t ? [] : [t]),
                      Ha((n = r ? i : n)) || (n = null == n ? [] : [n]),
                      Hr(e, t, n));
                }),
                (jn.over = sc),
                (jn.overArgs = Ba),
                (jn.overEvery = fc),
                (jn.overSome = dc),
                (jn.partial = Da),
                (jn.partialRight = Ma),
                (jn.partition = xa),
                (jn.pick = Bu),
                (jn.pickBy = Du),
                (jn.property = pc),
                (jn.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? i : _r(e, t);
                  };
                }),
                (jn.pull = Zo),
                (jn.pullAll = Jo),
                (jn.pullAllBy = function (e, t, n) {
                  return e && e.length && t && t.length
                    ? Qr(e, t, lo(n, 2))
                    : e;
                }),
                (jn.pullAllWith = function (e, t, n) {
                  return e && e.length && t && t.length ? Qr(e, t, i, n) : e;
                }),
                (jn.pullAt = ea),
                (jn.range = hc),
                (jn.rangeRight = vc),
                (jn.rearg = Fa),
                (jn.reject = function (e, t) {
                  return (Ha(e) ? Ut : mr)(e, za(lo(t, 3)));
                }),
                (jn.remove = function (e, t) {
                  var n = [];
                  if (!e || !e.length) return n;
                  var r = -1,
                    i = [],
                    o = e.length;
                  for (t = lo(t, 3); ++r < o; ) {
                    var a = e[r];
                    t(a, r, e) && (n.push(a), i.push(r));
                  }
                  return $r(e, i), n;
                }),
                (jn.rest = function (e, t) {
                  if ("function" != typeof e) throw new Te(o);
                  return Xr(e, (t = t === i ? t : vu(t)));
                }),
                (jn.reverse = ta),
                (jn.sampleSize = function (e, t, n) {
                  return (
                    (t = (n ? So(e, t, n) : t === i) ? 1 : vu(t)),
                    (Ha(e) ? Jn : Jr)(e, t)
                  );
                }),
                (jn.set = function (e, t, n) {
                  return null == e ? e : ei(e, t, n);
                }),
                (jn.setWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : i),
                    null == e ? e : ei(e, t, n, r)
                  );
                }),
                (jn.shuffle = function (e) {
                  return (Ha(e) ? er : ri)(e);
                }),
                (jn.slice = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? (n && "number" != typeof n && So(e, t, n)
                        ? ((t = 0), (n = r))
                        : ((t = null == t ? 0 : vu(t)),
                          (n = n === i ? r : vu(n))),
                      ii(e, t, n))
                    : [];
                }),
                (jn.sortBy = Ca),
                (jn.sortedUniq = function (e) {
                  return e && e.length ? ci(e) : [];
                }),
                (jn.sortedUniqBy = function (e, t) {
                  return e && e.length ? ci(e, lo(t, 2)) : [];
                }),
                (jn.split = function (e, t, n) {
                  return (
                    n && "number" != typeof n && So(e, t, n) && (t = n = i),
                    (n = n === i ? g : n >>> 0)
                      ? (e = bu(e)) &&
                        ("string" == typeof t || (null != t && !au(t))) &&
                        !(t = si(t)) &&
                        cn(e)
                        ? Ei(vn(e), 0, n)
                        : e.split(t, n)
                      : []
                  );
                }),
                (jn.spread = function (e, t) {
                  if ("function" != typeof e) throw new Te(o);
                  return (
                    (t = null == t ? 0 : bn(vu(t), 0)),
                    Xr(function (n) {
                      var r = n[t],
                        i = Ei(n, 0, t);
                      return r && zt(i, r), kt(e, this, i);
                    })
                  );
                }),
                (jn.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? ii(e, 1, t) : [];
                }),
                (jn.take = function (e, t, n) {
                  return e && e.length
                    ? ii(e, 0, (t = n || t === i ? 1 : vu(t)) < 0 ? 0 : t)
                    : [];
                }),
                (jn.takeRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? ii(
                        e,
                        (t = r - (t = n || t === i ? 1 : vu(t))) < 0 ? 0 : t,
                        r
                      )
                    : [];
                }),
                (jn.takeRightWhile = function (e, t) {
                  return e && e.length ? hi(e, lo(t, 3), !1, !0) : [];
                }),
                (jn.takeWhile = function (e, t) {
                  return e && e.length ? hi(e, lo(t, 3)) : [];
                }),
                (jn.tap = function (e, t) {
                  return t(e), e;
                }),
                (jn.throttle = function (e, t, n) {
                  var r = !0,
                    i = !0;
                  if ("function" != typeof e) throw new Te(o);
                  return (
                    tu(n) &&
                      ((r = "leading" in n ? !!n.leading : r),
                      (i = "trailing" in n ? !!n.trailing : i)),
                    Ua(e, t, { leading: r, maxWait: t, trailing: i })
                  );
                }),
                (jn.thru = ha),
                (jn.toArray = pu),
                (jn.toPairs = Mu),
                (jn.toPairsIn = Fu),
                (jn.toPath = function (e) {
                  return Ha(e) ? Nt(e, Do) : lu(e) ? [e] : Ti(Bo(bu(e)));
                }),
                (jn.toPlainObject = yu),
                (jn.transform = function (e, t, n) {
                  var r = Ha(e),
                    i = r || Ka(e) || su(e);
                  if (((t = lo(t, 4)), null == n)) {
                    var o = e && e.constructor;
                    n = i
                      ? r
                        ? new o()
                        : []
                      : tu(e) && Za(o)
                      ? Wn(Qe(e))
                      : {};
                  }
                  return (
                    (i ? It : Sr)(e, function (e, r, i) {
                      return t(n, e, r, i);
                    }),
                    n
                  );
                }),
                (jn.unary = function (e) {
                  return La(e, 1);
                }),
                (jn.union = na),
                (jn.unionBy = ra),
                (jn.unionWith = ia),
                (jn.uniq = function (e) {
                  return e && e.length ? fi(e) : [];
                }),
                (jn.uniqBy = function (e, t) {
                  return e && e.length ? fi(e, lo(t, 2)) : [];
                }),
                (jn.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : i),
                    e && e.length ? fi(e, i, t) : []
                  );
                }),
                (jn.unset = function (e, t) {
                  return null == e || di(e, t);
                }),
                (jn.unzip = oa),
                (jn.unzipWith = aa),
                (jn.update = function (e, t, n) {
                  return null == e ? e : pi(e, t, bi(n));
                }),
                (jn.updateWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : i),
                    null == e ? e : pi(e, t, bi(n), r)
                  );
                }),
                (jn.values = ju),
                (jn.valuesIn = function (e) {
                  return null == e ? [] : en(e, Ou(e));
                }),
                (jn.without = ua),
                (jn.words = Zu),
                (jn.wrap = function (e, t) {
                  return Da(bi(t), e);
                }),
                (jn.xor = ca),
                (jn.xorBy = la),
                (jn.xorWith = sa),
                (jn.zip = fa),
                (jn.zipObject = function (e, t) {
                  return mi(e || [], t || [], nr);
                }),
                (jn.zipObjectDeep = function (e, t) {
                  return mi(e || [], t || [], ei);
                }),
                (jn.zipWith = da),
                (jn.entries = Mu),
                (jn.entriesIn = Fu),
                (jn.extend = Su),
                (jn.extendWith = Eu),
                cc(jn, jn),
                (jn.add = yc),
                (jn.attempt = Ju),
                (jn.camelCase = Wu),
                (jn.capitalize = Vu),
                (jn.ceil = bc),
                (jn.clamp = function (e, t, n) {
                  return (
                    n === i && ((n = t), (t = i)),
                    n !== i && (n = (n = mu(n)) == n ? n : 0),
                    t !== i && (t = (t = mu(t)) == t ? t : 0),
                    cr(mu(e), t, n)
                  );
                }),
                (jn.clone = function (e) {
                  return lr(e, 4);
                }),
                (jn.cloneDeep = function (e) {
                  return lr(e, 5);
                }),
                (jn.cloneDeepWith = function (e, t) {
                  return lr(e, 5, (t = "function" == typeof t ? t : i));
                }),
                (jn.cloneWith = function (e, t) {
                  return lr(e, 4, (t = "function" == typeof t ? t : i));
                }),
                (jn.conformsTo = function (e, t) {
                  return null == t || sr(e, t, Uu(t));
                }),
                (jn.deburr = qu),
                (jn.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (jn.divide = wc),
                (jn.endsWith = function (e, t, n) {
                  (e = bu(e)), (t = si(t));
                  var r = e.length,
                    o = (n = n === i ? r : cr(vu(n), 0, r));
                  return (n -= t.length) >= 0 && e.slice(n, o) == t;
                }),
                (jn.eq = ja),
                (jn.escape = function (e) {
                  return (e = bu(e)) && X.test(e) ? e.replace(K, an) : e;
                }),
                (jn.escapeRegExp = function (e) {
                  return (e = bu(e)) && oe.test(e) ? e.replace(ie, "\\$&") : e;
                }),
                (jn.every = function (e, t, n) {
                  var r = Ha(e) ? Pt : vr;
                  return n && So(e, t, n) && (t = i), r(e, lo(t, 3));
                }),
                (jn.find = ma),
                (jn.findIndex = qo),
                (jn.findKey = function (e, t) {
                  return jt(e, lo(t, 3), Sr);
                }),
                (jn.findLast = ya),
                (jn.findLastIndex = Ho),
                (jn.findLastKey = function (e, t) {
                  return jt(e, lo(t, 3), Er);
                }),
                (jn.floor = Sc),
                (jn.forEach = ba),
                (jn.forEachRight = wa),
                (jn.forIn = function (e, t) {
                  return null == e ? e : br(e, lo(t, 3), Ou);
                }),
                (jn.forInRight = function (e, t) {
                  return null == e ? e : wr(e, lo(t, 3), Ou);
                }),
                (jn.forOwn = function (e, t) {
                  return e && Sr(e, lo(t, 3));
                }),
                (jn.forOwnRight = function (e, t) {
                  return e && Er(e, lo(t, 3));
                }),
                (jn.get = ku),
                (jn.gt = Wa),
                (jn.gte = Va),
                (jn.has = function (e, t) {
                  return null != e && mo(e, t, Lr);
                }),
                (jn.hasIn = Lu),
                (jn.head = Qo),
                (jn.identity = ic),
                (jn.includes = function (e, t, n, r) {
                  (e = Qa(e) ? e : ju(e)), (n = n && !r ? vu(n) : 0);
                  var i = e.length;
                  return (
                    n < 0 && (n = bn(i + n, 0)),
                    cu(e)
                      ? n <= i && e.indexOf(t, n) > -1
                      : !!i && Vt(e, t, n) > -1
                  );
                }),
                (jn.indexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var i = null == n ? 0 : vu(n);
                  return i < 0 && (i = bn(r + i, 0)), Vt(e, t, i);
                }),
                (jn.inRange = function (e, t, n) {
                  return (
                    (t = hu(t)),
                    n === i ? ((n = t), (t = 0)) : (n = hu(n)),
                    (function (e, t, n) {
                      return e >= wn(t, n) && e < bn(t, n);
                    })((e = mu(e)), t, n)
                  );
                }),
                (jn.invoke = Pu),
                (jn.isArguments = qa),
                (jn.isArray = Ha),
                (jn.isArrayBuffer = Ga),
                (jn.isArrayLike = Qa),
                (jn.isArrayLikeObject = $a),
                (jn.isBoolean = function (e) {
                  return !0 === e || !1 === e || (nu(e) && Cr(e) == w);
                }),
                (jn.isBuffer = Ka),
                (jn.isDate = Ya),
                (jn.isElement = function (e) {
                  return nu(e) && 1 === e.nodeType && !ou(e);
                }),
                (jn.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    Qa(e) &&
                    (Ha(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Ka(e) ||
                      su(e) ||
                      qa(e))
                  )
                    return !e.length;
                  var t = go(e);
                  if (t == x || t == T) return !e.size;
                  if (xo(e)) return !Br(e).length;
                  for (var n in e) if (ze.call(e, n)) return !1;
                  return !0;
                }),
                (jn.isEqual = function (e, t) {
                  return Or(e, t);
                }),
                (jn.isEqualWith = function (e, t, n) {
                  var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i;
                  return r === i ? Or(e, t, i, n) : !!r;
                }),
                (jn.isError = Xa),
                (jn.isFinite = function (e) {
                  return "number" == typeof e && wt(e);
                }),
                (jn.isFunction = Za),
                (jn.isInteger = Ja),
                (jn.isLength = eu),
                (jn.isMap = ru),
                (jn.isMatch = function (e, t) {
                  return e === t || Rr(e, t, fo(t));
                }),
                (jn.isMatchWith = function (e, t, n) {
                  return (
                    (n = "function" == typeof n ? n : i), Rr(e, t, fo(t), n)
                  );
                }),
                (jn.isNaN = function (e) {
                  return iu(e) && e != +e;
                }),
                (jn.isNative = function (e) {
                  if (_o(e))
                    throw new _e(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return Nr(e);
                }),
                (jn.isNil = function (e) {
                  return null == e;
                }),
                (jn.isNull = function (e) {
                  return null === e;
                }),
                (jn.isNumber = iu),
                (jn.isObject = tu),
                (jn.isObjectLike = nu),
                (jn.isPlainObject = ou),
                (jn.isRegExp = au),
                (jn.isSafeInteger = function (e) {
                  return Ja(e) && e >= -9007199254740991 && e <= h;
                }),
                (jn.isSet = uu),
                (jn.isString = cu),
                (jn.isSymbol = lu),
                (jn.isTypedArray = su),
                (jn.isUndefined = function (e) {
                  return e === i;
                }),
                (jn.isWeakMap = function (e) {
                  return nu(e) && go(e) == O;
                }),
                (jn.isWeakSet = function (e) {
                  return nu(e) && "[object WeakSet]" == Cr(e);
                }),
                (jn.join = function (e, t) {
                  return null == e ? "" : Ft.call(e, t);
                }),
                (jn.kebabCase = Hu),
                (jn.last = Xo),
                (jn.lastIndexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var o = r;
                  return (
                    n !== i &&
                      (o = (o = vu(n)) < 0 ? bn(r + o, 0) : wn(o, r - 1)),
                    t == t
                      ? (function (e, t, n) {
                          for (var r = n + 1; r--; ) if (e[r] === t) return r;
                          return r;
                        })(e, t, o)
                      : Wt(e, Ht, o, !0)
                  );
                }),
                (jn.lowerCase = Gu),
                (jn.lowerFirst = Qu),
                (jn.lt = fu),
                (jn.lte = du),
                (jn.max = function (e) {
                  return e && e.length ? gr(e, ic, kr) : i;
                }),
                (jn.maxBy = function (e, t) {
                  return e && e.length ? gr(e, lo(t, 2), kr) : i;
                }),
                (jn.mean = function (e) {
                  return Gt(e, ic);
                }),
                (jn.meanBy = function (e, t) {
                  return Gt(e, lo(t, 2));
                }),
                (jn.min = function (e) {
                  return e && e.length ? gr(e, ic, Mr) : i;
                }),
                (jn.minBy = function (e, t) {
                  return e && e.length ? gr(e, lo(t, 2), Mr) : i;
                }),
                (jn.stubArray = gc),
                (jn.stubFalse = mc),
                (jn.stubObject = function () {
                  return {};
                }),
                (jn.stubString = function () {
                  return "";
                }),
                (jn.stubTrue = function () {
                  return !0;
                }),
                (jn.multiply = Ac),
                (jn.nth = function (e, t) {
                  return e && e.length ? qr(e, vu(t)) : i;
                }),
                (jn.noConflict = function () {
                  return vt._ === this && (vt._ = je), this;
                }),
                (jn.noop = lc),
                (jn.now = ka),
                (jn.pad = function (e, t, n) {
                  e = bu(e);
                  var r = (t = vu(t)) ? hn(e) : 0;
                  if (!t || r >= t) return e;
                  var i = (t - r) / 2;
                  return Hi(gt(i), n) + e + Hi(ht(i), n);
                }),
                (jn.padEnd = function (e, t, n) {
                  e = bu(e);
                  var r = (t = vu(t)) ? hn(e) : 0;
                  return t && r < t ? e + Hi(t - r, n) : e;
                }),
                (jn.padStart = function (e, t, n) {
                  e = bu(e);
                  var r = (t = vu(t)) ? hn(e) : 0;
                  return t && r < t ? Hi(t - r, n) + e : e;
                }),
                (jn.parseInt = function (e, t, n) {
                  return (
                    n || null == t ? (t = 0) : t && (t = +t),
                    En(bu(e).replace(ae, ""), t || 0)
                  );
                }),
                (jn.random = function (e, t, n) {
                  if (
                    (n && "boolean" != typeof n && So(e, t, n) && (t = n = i),
                    n === i &&
                      ("boolean" == typeof t
                        ? ((n = t), (t = i))
                        : "boolean" == typeof e && ((n = e), (e = i))),
                    e === i && t === i
                      ? ((e = 0), (t = 1))
                      : ((e = hu(e)),
                        t === i ? ((t = e), (e = 0)) : (t = hu(t))),
                    e > t)
                  ) {
                    var r = e;
                    (e = t), (t = r);
                  }
                  if (n || e % 1 || t % 1) {
                    var o = An();
                    return wn(
                      e + o * (t - e + ft("1e-" + ((o + "").length - 1))),
                      t
                    );
                  }
                  return Kr(e, t);
                }),
                (jn.reduce = function (e, t, n) {
                  var r = Ha(e) ? Bt : Kt,
                    i = arguments.length < 3;
                  return r(e, lo(t, 4), n, i, pr);
                }),
                (jn.reduceRight = function (e, t, n) {
                  var r = Ha(e) ? Dt : Kt,
                    i = arguments.length < 3;
                  return r(e, lo(t, 4), n, i, hr);
                }),
                (jn.repeat = function (e, t, n) {
                  return (
                    (t = (n ? So(e, t, n) : t === i) ? 1 : vu(t)), Yr(bu(e), t)
                  );
                }),
                (jn.replace = function () {
                  var e = arguments,
                    t = bu(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (jn.result = function (e, t, n) {
                  var r = -1,
                    o = (t = wi(t, e)).length;
                  for (o || ((o = 1), (e = i)); ++r < o; ) {
                    var a = null == e ? i : e[Do(t[r])];
                    a === i && ((r = o), (a = n)), (e = Za(a) ? a.call(e) : a);
                  }
                  return e;
                }),
                (jn.round = _c),
                (jn.runInContext = e),
                (jn.sample = function (e) {
                  return (Ha(e) ? Zn : Zr)(e);
                }),
                (jn.size = function (e) {
                  if (null == e) return 0;
                  if (Qa(e)) return cu(e) ? hn(e) : e.length;
                  var t = go(e);
                  return t == x || t == T ? e.size : Br(e).length;
                }),
                (jn.snakeCase = $u),
                (jn.some = function (e, t, n) {
                  var r = Ha(e) ? Mt : oi;
                  return n && So(e, t, n) && (t = i), r(e, lo(t, 3));
                }),
                (jn.sortedIndex = function (e, t) {
                  return ai(e, t);
                }),
                (jn.sortedIndexBy = function (e, t, n) {
                  return ui(e, t, lo(n, 2));
                }),
                (jn.sortedIndexOf = function (e, t) {
                  var n = null == e ? 0 : e.length;
                  if (n) {
                    var r = ai(e, t);
                    if (r < n && ja(e[r], t)) return r;
                  }
                  return -1;
                }),
                (jn.sortedLastIndex = function (e, t) {
                  return ai(e, t, !0);
                }),
                (jn.sortedLastIndexBy = function (e, t, n) {
                  return ui(e, t, lo(n, 2), !0);
                }),
                (jn.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var n = ai(e, t, !0) - 1;
                    if (ja(e[n], t)) return n;
                  }
                  return -1;
                }),
                (jn.startCase = Ku),
                (jn.startsWith = function (e, t, n) {
                  return (
                    (e = bu(e)),
                    (n = null == n ? 0 : cr(vu(n), 0, e.length)),
                    (t = si(t)),
                    e.slice(n, n + t.length) == t
                  );
                }),
                (jn.subtract = xc),
                (jn.sum = function (e) {
                  return e && e.length ? Yt(e, ic) : 0;
                }),
                (jn.sumBy = function (e, t) {
                  return e && e.length ? Yt(e, lo(t, 2)) : 0;
                }),
                (jn.template = function (e, t, n) {
                  var r = jn.templateSettings;
                  n && So(e, t, n) && (t = i),
                    (e = bu(e)),
                    (t = Eu({}, t, r, Ji));
                  var o,
                    a,
                    u = Eu({}, t.imports, r.imports, Ji),
                    c = Uu(u),
                    l = en(u, c),
                    s = 0,
                    f = t.interpolate || Ee,
                    d = "__p += '",
                    p = Le(
                      (t.escape || Ee).source +
                        "|" +
                        f.source +
                        "|" +
                        (f === ee ? he : Ee).source +
                        "|" +
                        (t.evaluate || Ee).source +
                        "|$",
                      "g"
                    ),
                    h =
                      "//# sourceURL=" +
                      (ze.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++ut + "]") +
                      "\n";
                  e.replace(p, function (t, n, r, i, u, c) {
                    return (
                      r || (r = i),
                      (d += e.slice(s, c).replace(Ae, un)),
                      n && ((o = !0), (d += "' +\n__e(" + n + ") +\n'")),
                      u && ((a = !0), (d += "';\n" + u + ";\n__p += '")),
                      r &&
                        (d +=
                          "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                      (s = c + t.length),
                      t
                    );
                  }),
                    (d += "';\n");
                  var v = ze.call(t, "variable") && t.variable;
                  if (v) {
                    if (de.test(v))
                      throw new _e(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else d = "with (obj) {\n" + d + "\n}\n";
                  (d = (a ? d.replace(H, "") : d)
                    .replace(G, "$1")
                    .replace(Q, "$1;")),
                    (d =
                      "function(" +
                      (v || "obj") +
                      ") {\n" +
                      (v ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (o ? ", __e = _.escape" : "") +
                      (a
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      d +
                      "return __p\n}");
                  var g = Ju(function () {
                    return xe(c, h + "return " + d).apply(i, l);
                  });
                  if (((g.source = d), Xa(g))) throw g;
                  return g;
                }),
                (jn.times = function (e, t) {
                  if ((e = vu(e)) < 1 || e > h) return [];
                  var n = g,
                    r = wn(e, g);
                  (t = lo(t)), (e -= g);
                  for (var i = Xt(r, t); ++n < e; ) t(n);
                  return i;
                }),
                (jn.toFinite = hu),
                (jn.toInteger = vu),
                (jn.toLength = gu),
                (jn.toLower = function (e) {
                  return bu(e).toLowerCase();
                }),
                (jn.toNumber = mu),
                (jn.toSafeInteger = function (e) {
                  return e ? cr(vu(e), -9007199254740991, h) : 0 === e ? e : 0;
                }),
                (jn.toString = bu),
                (jn.toUpper = function (e) {
                  return bu(e).toUpperCase();
                }),
                (jn.trim = function (e, t, n) {
                  if ((e = bu(e)) && (n || t === i)) return Zt(e);
                  if (!e || !(t = si(t))) return e;
                  var r = vn(e),
                    o = vn(t);
                  return Ei(r, nn(r, o), rn(r, o) + 1).join("");
                }),
                (jn.trimEnd = function (e, t, n) {
                  if ((e = bu(e)) && (n || t === i))
                    return e.slice(0, gn(e) + 1);
                  if (!e || !(t = si(t))) return e;
                  var r = vn(e);
                  return Ei(r, 0, rn(r, vn(t)) + 1).join("");
                }),
                (jn.trimStart = function (e, t, n) {
                  if ((e = bu(e)) && (n || t === i)) return e.replace(ae, "");
                  if (!e || !(t = si(t))) return e;
                  var r = vn(e);
                  return Ei(r, nn(r, vn(t))).join("");
                }),
                (jn.truncate = function (e, t) {
                  var n = 30,
                    r = "...";
                  if (tu(t)) {
                    var o = "separator" in t ? t.separator : o;
                    (n = "length" in t ? vu(t.length) : n),
                      (r = "omission" in t ? si(t.omission) : r);
                  }
                  var a = (e = bu(e)).length;
                  if (cn(e)) {
                    var u = vn(e);
                    a = u.length;
                  }
                  if (n >= a) return e;
                  var c = n - hn(r);
                  if (c < 1) return r;
                  var l = u ? Ei(u, 0, c).join("") : e.slice(0, c);
                  if (o === i) return l + r;
                  if ((u && (c += l.length - c), au(o))) {
                    if (e.slice(c).search(o)) {
                      var s,
                        f = l;
                      for (
                        o.global || (o = Le(o.source, bu(ve.exec(o)) + "g")),
                          o.lastIndex = 0;
                        (s = o.exec(f));

                      )
                        var d = s.index;
                      l = l.slice(0, d === i ? c : d);
                    }
                  } else if (e.indexOf(si(o), c) != c) {
                    var p = l.lastIndexOf(o);
                    p > -1 && (l = l.slice(0, p));
                  }
                  return l + r;
                }),
                (jn.unescape = function (e) {
                  return (e = bu(e)) && Y.test(e) ? e.replace($, mn) : e;
                }),
                (jn.uniqueId = function (e) {
                  var t = ++Be;
                  return bu(e) + t;
                }),
                (jn.upperCase = Yu),
                (jn.upperFirst = Xu),
                (jn.each = ba),
                (jn.eachRight = wa),
                (jn.first = Qo),
                cc(
                  jn,
                  ((Ec = {}),
                  Sr(jn, function (e, t) {
                    ze.call(jn.prototype, t) || (Ec[t] = e);
                  }),
                  Ec),
                  { chain: !1 }
                ),
                (jn.VERSION = "4.17.21"),
                It(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    jn[e].placeholder = jn;
                  }
                ),
                It(["drop", "take"], function (e, t) {
                  (Hn.prototype[e] = function (n) {
                    n = n === i ? 1 : bn(vu(n), 0);
                    var r =
                      this.__filtered__ && !t ? new Hn(this) : this.clone();
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = wn(n, r.__takeCount__))
                        : r.__views__.push({
                            size: wn(n, g),
                            type: e + (r.__dir__ < 0 ? "Right" : ""),
                          }),
                      r
                    );
                  }),
                    (Hn.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                It(["filter", "map", "takeWhile"], function (e, t) {
                  var n = t + 1,
                    r = 1 == n || 3 == n;
                  Hn.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: lo(e, 3), type: n }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                It(["head", "last"], function (e, t) {
                  var n = "take" + (t ? "Right" : "");
                  Hn.prototype[e] = function () {
                    return this[n](1).value()[0];
                  };
                }),
                It(["initial", "tail"], function (e, t) {
                  var n = "drop" + (t ? "" : "Right");
                  Hn.prototype[e] = function () {
                    return this.__filtered__ ? new Hn(this) : this[n](1);
                  };
                }),
                (Hn.prototype.compact = function () {
                  return this.filter(ic);
                }),
                (Hn.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (Hn.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (Hn.prototype.invokeMap = Xr(function (e, t) {
                  return "function" == typeof e
                    ? new Hn(this)
                    : this.map(function (n) {
                        return Pr(n, e, t);
                      });
                })),
                (Hn.prototype.reject = function (e) {
                  return this.filter(za(lo(e)));
                }),
                (Hn.prototype.slice = function (e, t) {
                  e = vu(e);
                  var n = this;
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new Hn(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== i &&
                        (n = (t = vu(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                      n);
                }),
                (Hn.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (Hn.prototype.toArray = function () {
                  return this.take(g);
                }),
                Sr(Hn.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    r = /^(?:head|last)$/.test(t),
                    o = jn[r ? "take" + ("last" == t ? "Right" : "") : t],
                    a = r || /^find/.test(t);
                  o &&
                    (jn.prototype[t] = function () {
                      var t = this.__wrapped__,
                        u = r ? [1] : arguments,
                        c = t instanceof Hn,
                        l = u[0],
                        s = c || Ha(t),
                        f = function (e) {
                          var t = o.apply(jn, zt([e], u));
                          return r && d ? t[0] : t;
                        };
                      s &&
                        n &&
                        "function" == typeof l &&
                        1 != l.length &&
                        (c = s = !1);
                      var d = this.__chain__,
                        p = !!this.__actions__.length,
                        h = a && !d,
                        v = c && !p;
                      if (!a && s) {
                        t = v ? t : new Hn(this);
                        var g = e.apply(t, u);
                        return (
                          g.__actions__.push({
                            func: ha,
                            args: [f],
                            thisArg: i,
                          }),
                          new qn(g, d)
                        );
                      }
                      return h && v
                        ? e.apply(this, u)
                        : ((g = this.thru(f)),
                          h ? (r ? g.value()[0] : g.value()) : g);
                    });
                }),
                It(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = Pe[e],
                      n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    jn.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var i = this.value();
                        return t.apply(Ha(i) ? i : [], e);
                      }
                      return this[n](function (n) {
                        return t.apply(Ha(n) ? n : [], e);
                      });
                    };
                  }
                ),
                Sr(Hn.prototype, function (e, t) {
                  var n = jn[t];
                  if (n) {
                    var r = n.name + "";
                    ze.call(Un, r) || (Un[r] = []),
                      Un[r].push({ name: t, func: n });
                  }
                }),
                (Un[ji(i, 2).name] = [{ name: "wrapper", func: i }]),
                (Hn.prototype.clone = function () {
                  var e = new Hn(this.__wrapped__);
                  return (
                    (e.__actions__ = Ti(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = Ti(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = Ti(this.__views__)),
                    e
                  );
                }),
                (Hn.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new Hn(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                (Hn.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    n = Ha(e),
                    r = t < 0,
                    i = n ? e.length : 0,
                    o = (function (e, t, n) {
                      var r = -1,
                        i = n.length;
                      for (; ++r < i; ) {
                        var o = n[r],
                          a = o.size;
                        switch (o.type) {
                          case "drop":
                            e += a;
                            break;
                          case "dropRight":
                            t -= a;
                            break;
                          case "take":
                            t = wn(t, e + a);
                            break;
                          case "takeRight":
                            e = bn(e, t - a);
                        }
                      }
                      return { start: e, end: t };
                    })(0, i, this.__views__),
                    a = o.start,
                    u = o.end,
                    c = u - a,
                    l = r ? u : a - 1,
                    s = this.__iteratees__,
                    f = s.length,
                    d = 0,
                    p = wn(c, this.__takeCount__);
                  if (!n || (!r && i == c && p == c))
                    return vi(e, this.__actions__);
                  var h = [];
                  e: for (; c-- && d < p; ) {
                    for (var v = -1, g = e[(l += t)]; ++v < f; ) {
                      var m = s[v],
                        y = m.iteratee,
                        b = m.type,
                        w = y(g);
                      if (2 == b) g = w;
                      else if (!w) {
                        if (1 == b) continue e;
                        break e;
                      }
                    }
                    h[d++] = g;
                  }
                  return h;
                }),
                (jn.prototype.at = va),
                (jn.prototype.chain = function () {
                  return pa(this);
                }),
                (jn.prototype.commit = function () {
                  return new qn(this.value(), this.__chain__);
                }),
                (jn.prototype.next = function () {
                  this.__values__ === i && (this.__values__ = pu(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? i : this.__values__[this.__index__++],
                  };
                }),
                (jn.prototype.plant = function (e) {
                  for (var t, n = this; n instanceof Vn; ) {
                    var r = Fo(n);
                    (r.__index__ = 0),
                      (r.__values__ = i),
                      t ? (o.__wrapped__ = r) : (t = r);
                    var o = r;
                    n = n.__wrapped__;
                  }
                  return (o.__wrapped__ = e), t;
                }),
                (jn.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof Hn) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new Hn(this)),
                      (t = t.reverse()).__actions__.push({
                        func: ha,
                        args: [ta],
                        thisArg: i,
                      }),
                      new qn(t, this.__chain__)
                    );
                  }
                  return this.thru(ta);
                }),
                (jn.prototype.toJSON =
                  jn.prototype.valueOf =
                  jn.prototype.value =
                    function () {
                      return vi(this.__wrapped__, this.__actions__);
                    }),
                (jn.prototype.first = jn.prototype.head),
                Ze &&
                  (jn.prototype[Ze] = function () {
                    return this;
                  }),
                jn
              );
            })();
            (vt._ = yn),
              (r = function () {
                return yn;
              }.call(t, n, t, e)) === i || (e.exports = r);
          }.call(this);
      },
      2473: function (e, t, n) {
        "use strict";
        var r = n(1594);
        var i =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          o = r.useState,
          a = r.useEffect,
          u = r.useLayoutEffect,
          c = r.useDebugValue;
        function l(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !i(e, n);
          } catch (e) {
            return !0;
          }
        }
        var s =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = o({ inst: { value: n, getSnapshot: t } }),
                  i = r[0].inst,
                  s = r[1];
                return (
                  u(
                    function () {
                      (i.value = n),
                        (i.getSnapshot = t),
                        l(i) && s({ inst: i });
                    },
                    [e, n, t]
                  ),
                  a(
                    function () {
                      return (
                        l(i) && s({ inst: i }),
                        e(function () {
                          l(i) && s({ inst: i });
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
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
      },
      1750: function (e, t, n) {
        "use strict";
        var r = n(1594),
          i = n(3676);
        var o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = i.useSyncExternalStore,
          u = r.useRef,
          c = r.useEffect,
          l = r.useMemo,
          s = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
          var f = u(null);
          if (null === f.current) {
            var d = { hasValue: !1, value: null };
            f.current = d;
          } else d = f.current;
          f = l(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== i && d.hasValue)
                  ) {
                    var t = d.value;
                    if (i(t, e)) return (u = t);
                  }
                  return (u = e);
                }
                if (((t = u), o(a, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n)
                  ? ((a = e), t)
                  : ((a = e), (u = n));
              }
              var a,
                u,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, i]
          );
          var p = a(e, f[0], f[1]);
          return (
            c(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p]
            ),
            s(p),
            p
          );
        };
      },
      3676: function (e, t, n) {
        "use strict";
        e.exports = n(2473);
      },
      5390: function (e, t, n) {
        "use strict";
        e.exports = n(1750);
      },
      8217: function (e) {
        e.exports =
          "https://images.rbxcdn.com/659c7cbd7c9751056ba457f5dfc98aef-game_grid.webp";
      },
      1594: function (e) {
        "use strict";
        e.exports = React;
      },
      4452: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function i() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = a(e, o(n)));
            }
            return e;
          }
          function o(e) {
            if ("string" == typeof e || "number" == typeof e) return e;
            if ("object" != typeof e) return "";
            if (Array.isArray(e)) return i.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = a(t, n));
            return t;
          }
          function a(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((i.default = i), (e.exports = i))
            : void 0 ===
                (n = function () {
                  return i;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
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
      var e,
        t = n(1594),
        r = n.n(t),
        i = ReactDOM,
        o = CoreUtilities,
        a = Roblox,
        u = HeaderScripts,
        c = ReactUtilities,
        l = ReactStyleGuide,
        s = CoreRobloxUtilities,
        f = {
          ActionSwitch: "Action.Switch",
          ActionAdd: "Action.Add",
          ActionAddAccount: "Action.AddAccount",
          ActionLogOutAllAccounts: "Action.LogoutAllAccounts",
          HeadingSwitchAccount: "Heading.SwitchAccount",
          LabelAddAccountWithoutLoggingOut: "Label.AddAccountWithoutLoggingOut",
          LabelAddOrSwitchAccount: "Label.AddOrSwitchAccount",
          DescriptionAccountLimit: "Description.AccountLimit",
        },
        d = {
          HeadingAccountLimitReached: "Heading.AccountLimitReached",
          LabelAccountLimitReached: "Label.AccountLimitReached",
          ActionOK: "Action.OK",
        },
        p = {
          LogoutAll: "logoutAll",
          LoginAccountLimit: "loginAccountLimit",
          SignupAccountLimit: "signupAccountLimit",
          UnavailableError: "unavailableError",
          SwitchError: "switchError",
          LoginEmptyBlobRequiredError: "loginEmptyBlobRequiredError",
          SignupEmptyBlobRequiredError: "signupEmptyBlobRequiredError",
          LoginVpcEmptyBlobRequiredError: "loginVpcEmptyBlobRequiredError",
          SignupVpcEmptyBlobRequiredError: "signupVpcEmptyBlobRequiredError",
        },
        h = "Header.LogOutOfOtherAccounts",
        v = "Action.Logout",
        g = "Action.Cancel",
        m = "Description.LogoutConfirmation",
        y = "Description.ParentLogoutConfirmation",
        b = "Header.LogOutOfOtherAccounts",
        w = "Action.Logout",
        S = "Action.Cancel",
        E = "Description.LogoutConfirmation",
        A = "Description.ParentLogoutConfirmation",
        _ = (a.EnvironmentUrls.websiteUrl, "RBXASBlob");
      !(function (e) {
        (e[(e.AccountSwitcherModalType = 0)] = "AccountSwitcherModalType"),
          (e[(e.LogoutAllAccountsModalType = 1)] =
            "LogoutAllAccountsModalType"),
          (e[(e.LoginConfirmationForLogoutAllAccountsModalType = 2)] =
            "LoginConfirmationForLogoutAllAccountsModalType"),
          (e[(e.SignupConfirmationForLogoutAllAccountsModalType = 3)] =
            "SignupConfirmationForLogoutAllAccountsModalType");
      })(e || (e = {}));
      var x,
        C,
        k = {
          ActionSignUpCapitalized: "Action.SignUpCapitalized",
          ActionLogInCapitalized: "Action.LogInCapitalized",
          ActionDeviceCode: "Action.DeviceCode",
          ActionResendEmail: "Action.ResendEmail",
          ActionSendVerificationEmail: "Action.SendVerificationEmail",
          ActionOk: "Action.Ok",
          ActionAnotherLoggedInDevice: "Action.AnotherLoggedInDevice",
          ActionForgotPasswordOrUsernameQuestionCapitalized:
            "Action.ForgotPasswordOrUsernameQuestionCapitalized",
          ActionLogInEmailOneTimeCode: "Action.LogInEmailOneTimeCode",
          ActionLogInWithOneTimeCode: "Action.LogInWithOneTimeCode",
          ActionLogInAnotherDevice: "Action.LogInAnotherDevice",
          ActionLogInPasskey: "Action.LogInPasskey",
          ActionNeedHelp: "Action.NeedHelp",
          ActionUseAnotherDevice: "Action.UseAnotherDevice",
          ActionCreateANewAccount: "Action.CreateANewAccount",
          ActionAddAccount: "Action.AddAccount",
          ActionRecoverYourAccount: "Action.RecoverYourAccount",
          DescriptionCurfewMessage: "Description.CurfewMessage",
          DescriptionAccountSelectorHelp: "Description.AccountSelectorHelp",
          DescriptionEnterOneTimeCodeHelp: "Description.EnterOneTimeCodeHelp",
          DescriptionGetOneTimeCodeHelp: "Description.GetOneTimeCodeHelp",
          DescriptionAccountSelectorOtpTimeWarning:
            "Description.AccountSelectorOtpTimeWarning",
          DescriptionLogBackIn: "Description.LogBackIn",
          DescriptionLogoutFirst: "Description.LogoutFirst",
          DescriptionRecoverYourAccount: "Description.RecoverYourAccount",
          HeadingLoginRoblox: "Heading.LoginRoblox",
          HeadingLoginRobloxAccountSwitching:
            "Heading.LoginRobloxAccountSwitching",
          HeadingContinueToEnjoyRoblox: "Heading.ContinueToEnjoyRoblox",
          HeadingLoginRequired: "Heading.LoginRequired",
          HeadingYouHaveLoggedOut: "Heading.YouHaveLoggedOut",
          HeadingAddAccount: "Heading.AddAccount",
          HeadingSecurityNotification: "Heading.SecurityNotification",
          LabelEnterOneTimeCode: "Label.EnterOneTimeCode",
          LabelGetOneTimeCode: "Label.GetOneTimeCode",
          LabelNoAccount: "Label.NoAccount",
          LabelPassword: "Label.Password",
          LabelUsername: "Label.Username",
          LabelUsernameEmailPhone: "Label.UsernameEmailPhone",
          LabelLoginWithYour: "Label.LoginWithYour",
          LabelUnverifiedEmailInstructions: "Label.UnverifiedEmailInstructions",
          LabelNotReceived: "Label.NotReceived",
          LabelVerificationEmailSent: "Label.VerificationEmailSent",
          LabelEmailNeedsVerification: "Label.EmailNeedsVerification",
          LabelAccountSelector: "Label.AccountSelectorTitle",
          LabelLoginSwitchAccounts: "Label.LoginSwitchAccounts",
          LabelChooseAccountToUse: "Label.ChooseAccountToUse",
          MessageUnknownErrorTryAgain: "Message.UnknownErrorTryAgain",
          MessageUsernameAndPasswordRequired:
            "Message.UsernameAndPasswordRequired",
          ResponseAccountNotFound: "Response.AccountNotFound",
          ResponseAccountIssueErrorContactSupport:
            "Response.AccountIssueErrorContactSupport",
          ResponseTooManyAttemptsPleaseWait:
            "Response.TooManyAttemptsPleaseWait",
          ResponseCaptchaErrorFailedToLoad: "Response.CaptchaErrorFailedToLoad",
          ResponseCaptchaErrorFailedToVerify:
            "Response.CaptchaErrorFailedToVerify",
          ResponseGlobalAppAccessError: "Response.GlobalAppAccessError",
          ResponseIncorrectCredentials:
            "Response.IncorrectCredentialsForgotPasswordMessage",
          ResponseIncorrectEmailOrPassword: "Response.IncorrectEmailOrPassword",
          ResponseIncorrectPhoneOrPassword: "Response.IncorrectPhoneOrPassword",
          ResponseIncorrectUsernamePassword:
            "Response.IncorrectUsernamePassword",
          ResponseEmailLinkedToMultipleAccountsLoginWithUsername:
            "Response.EmailLinkedToMultipleAccountsLoginWithUsername",
          ResponseLoginWithUsername: "Response.LoginWithUsername",
          ResponseUnverifiedEmailLoginWithUsername:
            "Response.UnverifiedEmailLoginWithUsername",
          ResponseUnverifiedPhoneLoginWithUsername:
            "Response.UnverifiedPhoneLoginWithUsername",
          ResponseVerificationError: "Response.VerificationError",
          ResponseOtpUnder13NotAllowed: "Response.OtpUnder13NotAllowed",
          ResponseLoginBlocked: "Response.LoginBlocked",
          ResponseInvalidPasskeyCredential: "Response.InvalidPasskeyCredential",
          ErrorPasskeyOnlyAccount: "Error.PasskeyOnlyAccount",
        },
        L = a.Endpoints.getAbsoluteUrl,
        I = {
          securityNotification:
            a.EnvironmentUrls.websiteUrl + "/login/securityNotification",
          koreaIdVerification:
            a.EnvironmentUrls.websiteUrl + "/id-verification/korea/login",
          forgotCredentialsUrl:
            a.EnvironmentUrls.websiteUrl + "/login/forgot-password-or-username",
        },
        T = "Heading.SignIn",
        P = "Action.ForgotPasswordOrUsernameQuestion",
        U = "Label.Or",
        O = "Action.EmailACode",
        R = "Authentication.QuickSignInLowercase",
        N = "Label.DontHaveAnAccountCreateOne",
        z = "Label.UsernameEmailOrPhone",
        B = "Label.Password",
        D = "Heading.AddAccount",
        M = "Heading.SignIn",
        F = "Header.JumpBackIn",
        j = "Header.ChooseAnAccount",
        W = "Header.PickUpWhereYouLeftOff",
        V = "Action.SignInToAnotherAccount",
        q = "Action.CreateAccountFromSwitcher",
        H = "WebsiteLogin_",
        G = "react-2sv-container",
        Q = "react-captcha-container",
        $ = "react-security-questions-container",
        K = "react-account-selector-container",
        Y = "otp-login-container",
        X = "react-login-account-switcher-container",
        Z = "react-login-account-limit-error-container",
        J = "account-switcher-confirmation-modal-container",
        ee = 1,
        te = 2,
        ne = 3,
        re = 4,
        ie = 6,
        oe = 7,
        ae = 9,
        ue = 10,
        ce = 11,
        le = 12,
        se = 13,
        fe = 14,
        de = 16,
        pe = 18,
        he = 20,
        ve = 22,
        ge = 23,
        me = 24,
        ye = 25,
        be = 26,
        we = 28,
        Se = 3,
        Ee = "FirstAttempt",
        Ae = "Attempt",
        _e = "SuccessWithSAI",
        xe = "SuccessWithGameIntent",
        Ce = "Success",
        ke = "Captcha",
        Le = "PasswordResetRequired",
        Ie = "UnverifiedAccount",
        Te = "InvalidCredentials",
        Pe = "AccountNotFound",
        Ue = "AccountIssue",
        Oe = "TooManyAttempts",
        Re = "DefaultLoginRequired",
        Ne = "CaptchaLoadFailed",
        ze = "CaptchaVerifyFailed",
        Be = "CaptchaUnknownError",
        De = "LuoBuUserDenied",
        Me = "ScreenTimeRestricted",
        Fe = "UnknownError",
        je = "SecurityQuestionRequired",
        We = "login",
        Ve = "Website.Login",
        qe = L("/CreateAccount"),
        He = "Roblox.Login",
        Ge = "RBXPasskeyUpgradePending",
        Qe = "ImmediateLogin",
        $e = "DelayedLogin";
      !(function (e) {
        (e.Username = "Username"),
          (e.Email = "Email"),
          (e.PhoneNumber = "PhoneNumber"),
          (e.AuthToken = "AuthToken"),
          (e.EmailOtpSessionToken = "EmailOtpSessionToken"),
          (e.Passkey = "Passkey");
      })(x || (x = {})),
        (function (e) {
          (e.Email = "Email"),
            (e.Authenticator = "Authenticator"),
            (e.RecoveryCode = "RecoveryCode");
        })(C || (C = {}));
      var Ke,
        Ye = {
          schematizedEventTypes: {
            authFormInteraction: "authFormInteraction",
            authButtonClick: "authButtonClick",
            authMsgShown: "authMsgShown",
            authPageLoad: "authPageload",
            authModalShown: "authModalShown",
            authClientError: "authClientError",
            usernameSuggestionShown: "usernameSuggestionShown",
          },
          eventName: {
            loginOtherDevice: "loginOtherDevice",
            formValidation: "formValidation",
            authPageLoad: "authPageload",
            authFormInteraction: "authFormInteraction",
            authButtonClick: "authButtonClick",
            authModalShown: "authModalShown",
            saiCreated: "saiCreated",
            saiMissing: "saiMissing",
            signupUsernameKeystrokes: "accountIntegrityKeystrokeEvents",
            qualifiedSignup: "qualifiedSignup",
          },
          context: {
            loginPage: "loginPage",
            loginForm: "LoginForm",
            schematizedLoginForm: "loginForm",
            lrLoginForm: "lrLoginForm",
            landingPage: "Multiverse",
            signupForm: "MultiverseSignupForm",
            schematizedSignupForm: "signupForm",
            lrSignupForm: "lrSignupForm",
            sendOTP: "sendOTP",
            schematizedSendOTP: "sendOtp",
            enterOTP: "enterOTP",
            schematizedEnterOTP: "enterOtp",
            validateOTP: "validateOTP",
            disambiguationOTP: "disambiguationOTP",
            disambiguationEmail: "disambiguationEmail",
            disambiguationPhone: "disambiguationPhone",
            disambigOTP: "disambigOtp",
            revertAccount: "revertAccount",
            accountSwitcherConfirmation: "accountSwitcherConfirmation",
            accountSwitcherModal: "accountSwitcherModal",
            accountSwitcherLimitError: "accountSwitcherLimitError",
            accountSwitcherLogin: "accountSwitcherLogin",
            accountSwitcherSignup: "accountSwitcherSignup",
            accountSwitcherBackendRequestFailure:
              "accountSwitcherBackendRequestFailure",
            accountSwitcherLocalStorageFailure:
              "accountSwitcherLocalStorageFailure",
            accountSwitcherVpcLogin: "accountSwitcherVpcLogin",
            accountSwitcherVpcSignup: "accountSwitcherVpcSignup",
            platformAuthenticatorSupport: "platformAuthenticatorSupport",
            passkeyLogin: "passkeyLogin",
            silentPasskeyUpgradeWebLogin: "handleSilentPasskeyUpgradeWebLogin",
            silentPasskeyUpgradeWebLoginImmediate:
              "handleSilentPasskeyUpgradeWebLoginImmediate",
            silentPasskeyUpgradeWebLoginDelayed:
              "handleSilentPasskeyUpgradeWebLoginDelayed",
            silentPasskeyUpgradeWebSignupDelayed:
              "handleSilentPasskeyUpgradeWebSignupDelayed",
            hba: "hba",
            resetPasswordPage: "resetPasswordPage",
          },
          verifiedParentalConsentContext: {
            chargeback: {
              finishParentalSignup: "finishParentalSignup",
              homepage: "homepage",
            },
            savePaymentMethods: {
              finishParentalSignup: "finishParentalSignupDevsubs",
              homepage: "homepageDevsubs",
            },
            changeBirthdayContext: {
              finishParentalSignup: "finishParentalSignupAgeChange",
              homepage: "homepageAgeChange",
            },
            linkToChild: {
              finishParentalSignup: "finishParentalSignupLinking",
              homepage: "homePageLinking",
            },
            updateUserSetting: {
              finishParentalSignup: "finishParentalSignupSettings",
              homepage: "homePageSettings",
            },
          },
          aType: {
            buttonClick: "buttonClick",
            click: "click",
            offFocus: "offFocus",
            focus: "focus",
            shown: "shown",
            dismissed: "dismissed",
          },
          field: {
            loginOtherDevice: "loginOtherDevice",
            loginOTP: "loginOTP",
            OTP: "otp",
            loginSubmitButtonName: "loginSubmit",
            password: "password",
            username: "username",
            signupSubmitButtonName: "signupSubmit",
            appButtonClickName: "AppLink",
            showPassword: "showPassword",
            hidePassword: "hidePassword",
            birthdayDay: "birthdayDay",
            birthdayMonth: "birthdayMonth",
            birthdayYear: "birthdayYear",
            signupUsername: "signupUsername",
            signupPassword: "signupPassword",
            signupEmail: "signupEmail",
            parentEmail: "parentEmail",
            genderMale: "genderMale",
            genderFemale: "genderFemale",
            email: "email",
            code: "code",
            otpCode: "OTPcode",
            errorMessage: "errorMessage",
            resendErrorMessage: "resendErrorMessage",
            accountSelection: "accountSelection",
            checked: "checked",
            unchecked: "unchecked",
            usernameValid: "usernameValid",
            revertAccountSubmitButtonName: "revertAccountSubmit",
            birthday: "birthday",
            accountSwitcher: "accountSwitcher",
            logoutPopup: "logoutPopup",
            hasAuthIntent: "hasAuthIntent",
            tosCheckbox: "tosCheckbox",
            exitSignupConfirmation: "exitSignupConfirmation",
          },
          btn: {
            cancel: "cancel",
            sendCode: "sendCode",
            resendCode: "resendCode",
            resend: "resend",
            login: "login",
            xdl: "xdl",
            forgotCredentials: "forgotCredentials",
            createAccount: "createAccount",
            logoutAll: "logoutAll",
            signup: "signup",
            continue: "continue",
            changeEmail: "changeEmail",
            select: "select",
            parentalConsentCheckbox: "pc_checkbox",
            termsOfServiceCheckbox: "tos_checkbox",
            privacyPolicyCheckbox: "pp_checkbox",
            termsOfServiceLink: "tos_link",
            privacyPolicyLink: "pp_link",
            submitRevertAccount: "submitRevertAccount",
            dismiss: "dismiss",
            switch: "switch",
            addAccount: "addAccount",
            primaryButton: "primaryButton",
            secondaryButton: "secondaryButton",
            usernameSuggestion: "usernameSuggestion",
            signIn: "signIn",
            lrSignInButton: "lrSignInButton",
            signupSubmit: "signupSubmit",
            genderMale: "genderMale",
            genderFemale: "genderFemale",
            showPassword: "showPassword",
            hidePassword: "hidePassword",
            koreaConsentAllCheckbox: "koreaConsentAll",
            koreaTosAndPrivacyPolicyCheckbox: "koreaToS1",
            koreaThirdPartyPersonalInfoCheckbox: "koreaToS2",
            koreaTransferPersonalInfoCheckbox: "koreaToS3",
            koreaPersonalInfoCheckbox: "koreaToS4",
            koreaOptionalPersonalInfoCheckbox: "koreaToS5Optional",
            koreaAgreeTermsOfService: "koreaAgreeToS",
            logoutPopupLogout: "logoutPopupLogout",
            addPasskeyInlineCTA: "addPasskeyInlineCTA",
            addPasskeyModal: "addPasskeyModal",
            skipPasskey: "skipPasskey",
            exitSignupConfirmYes: "exitSignupConfirmYes",
            exitSignupConfirmCancel: "exitSignupConfirmCancel",
          },
          input: { redacted: "[Redacted]" },
          origin: {
            webVerifiedSignup: "WebVerifiedSignup",
            signup: "signup",
            login: "login",
          },
          text: {
            finishCreatingYourAccount: "Create Your Roblox Account",
            signup: "Sign Up",
            createAccount: "Create Account",
            logout: "Log Out",
          },
          clientErrorTypes: {
            pageLoadFailed: "pageLoadFailed",
            userInfoFetchFailed: "userInfoFetchFailed",
            localStorageSetFailure: "localStorageSetFailure",
            localStorageGetFailure: "localStorageGetFailure",
            localStorageRemoveFailure: "localStorageRemoveFailure",
            logoutAllAccountSwitcherAccounts:
              "logoutAllAccountSwitcherAccounts",
          },
          state: {
            focused: "focused",
            unfocused: "unfocused",
            selected: "selected",
            unselected: "unselected",
            passkeyUpselling: {
              passkeyRegistrationSuccess: "passkeyRegistrationSuccess",
              passkeyRegistrationFailure: "passkeyRegistrationFailure",
              passkeyOsDialogue: "passkeyOsDialogue",
              passkeyUpsellModal: "passkeyUpsellModal",
              passkeyUpsellShown: "passkeyUpsellShown",
              passkeyNotSupported: "passkeyNotSupported",
              passkeyUpsellFilteredByInAppTraffic:
                "passkeyUpsellFilteredByInAppTraffic",
              filteredByNoPasskeySupport: "filteredByNoPasskeySupport",
              filteredByNoSilentUpgradeSupport:
                "filteredByNoSilentUpgradeSupport",
              unclearedWebSessionFlag: "unclearedWebSessionFlag",
            },
          },
        },
        Xe = s.eventStreamService.eventTypes,
        Ze = function () {
          s.eventStreamService.sendEventWithTarget(
            Xe.formInteraction,
            Ye.context.loginPage,
            { field: Ye.field.loginOtherDevice, aType: Ye.aType.click }
          );
        },
        Je = function () {
          s.eventStreamService.sendEventWithTarget(
            Xe.formInteraction,
            Ye.context.loginPage,
            { field: Ye.field.loginSubmitButtonName, aType: Ye.aType.click }
          );
        },
        et = function () {
          s.eventStreamService.sendEventWithTarget(
            Xe.formInteraction,
            Ye.context.loginPage,
            { field: Ye.field.loginOTP, aType: Ye.aType.click }
          ),
            s.eventStreamService.sendEventWithTarget(
              Ye.schematizedEventTypes.authButtonClick,
              Ye.context.schematizedLoginForm,
              { btn: Ye.field.OTP }
            );
        },
        tt = function (e) {
          s.eventStreamService.sendEventWithTarget(
            Xe.formInteraction,
            Ye.context.enterOTP,
            {
              field: Ye.field.errorMessage,
              aType: Ye.aType.shown,
              btn: Ye.btn.login,
              errorCode: e,
            }
          );
        },
        nt = function (e) {
          s.eventStreamService.sendEventWithTarget(
            Xe.formInteraction,
            Ye.context.loginForm,
            { field: e.field, aType: e.aType }
          );
        },
        rt = function () {
          nt({ field: Ye.field.username, aType: Ye.aType.focus });
        },
        it = function () {
          nt({ field: Ye.field.username, aType: Ye.aType.offFocus });
        },
        ot = function () {
          nt({ field: Ye.field.password, aType: Ye.aType.focus });
        },
        at = function () {
          nt({ field: Ye.field.password, aType: Ye.aType.offFocus });
        },
        ut = function (e, t, n) {
          n === x.EmailOtpSessionToken &&
            (s.eventStreamService.sendEventWithTarget(
              Xe.pageLoad,
              Ye.context.disambiguationOTP,
              { numUsers: String(e) }
            ),
            s.eventStreamService.sendEventWithTarget(
              Ye.schematizedEventTypes.authPageLoad,
              Ye.context.disambigOTP,
              { state: t }
            ));
        },
        ct = function (e, t) {
          e === x.EmailOtpSessionToken
            ? (s.eventStreamService.sendEventWithTarget(
                Xe.formInteraction,
                Ye.context.disambiguationOTP,
                { field: Ye.field.accountSelection }
              ),
              s.eventStreamService.sendEventWithTarget(
                Ye.schematizedEventTypes.authButtonClick,
                Ye.context.disambigOTP,
                { btn: Ye.btn.select, state: String(t) }
              ))
            : s.eventStreamService.sendEventWithTarget(Xe.formInteraction, "", {
                field: Ye.field.accountSelection,
              });
        },
        lt = function (e) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authPageLoad,
            Ye.context.accountSwitcherLogin,
            { state: e, field: Ye.field.accountSwitcher }
          );
        },
        st = function () {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authButtonClick,
            Ye.context.loginPage,
            { btn: Ye.btn.logoutAll, origin: Ye.origin.login }
          );
        },
        ft = function (e) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authPageLoad,
            Ye.context.passkeyLogin,
            { state: String(e) }
          );
        },
        dt = function (e) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authPageLoad,
            Ye.context.platformAuthenticatorSupport,
            { state: String(e) }
          );
        },
        pt = function (e, t, n) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authButtonClick,
            n,
            { btn: e, state: t }
          );
        },
        ht = function (e, t) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authPageLoad,
            e,
            t ? { state: t } : {}
          );
        },
        vt = function (e, t, n) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authFormInteraction,
            e,
            { field: t, state: n }
          );
        },
        gt = function (e) {
          var t = e.credentialType,
            n = e.isPasskeyLoginSupported,
            r = e.isConditionalCreateSupported,
            i = e.isPasswordAutofilled,
            o = e.isSilentPasskeyUpgradeWebEnabled;
          if (t === x.Username || t === x.Email || t === x.PhoneNumber) {
            var a = Ye.context.silentPasskeyUpgradeWebLogin;
            if (o)
              if (n)
                if (r) {
                  null !== sessionStorage.getItem(Ge) &&
                    ht(a, Ye.state.passkeyUpselling.unclearedWebSessionFlag);
                  var u = i ? Qe : $e,
                    c = i
                      ? Ye.context.silentPasskeyUpgradeWebLoginImmediate
                      : Ye.context.silentPasskeyUpgradeWebLoginDelayed;
                  sessionStorage.setItem(Ge, u), ht(c, "set" + u);
                } else
                  ht(
                    a,
                    Ye.state.passkeyUpselling.filteredByNoSilentUpgradeSupport
                  );
              else ht(a, Ye.state.passkeyUpselling.filteredByNoPasskeySupport);
          }
        },
        mt = {
          common: [
            "Common.Captcha",
            "CommonUI.Controls",
            "Authentication.AccountSwitch",
            "Feature.Landing",
          ],
          feature: "Authentication.Login",
        },
        yt = { common: [], feature: "Feature.IdVerification" },
        bt = {
          common: ["CommonUI.Controls"],
          feature: "Authentication.AccountSwitch",
        },
        wt = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        St = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Et = function (e) {
          return wt(void 0, void 0, Promise, function () {
            var t, n, r, i;
            return St(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (c = "/otp-service/v1/metadata"),
                    (t = a.EnvironmentUrls.apiGatewayUrl + c),
                    (n = { Origin: e }),
                    (r = t + "?" + o.urlService.composeQueryString(n)),
                    (i = { url: r, withCredentials: !0 }),
                    [4, o.httpService.get(i)]
                  );
                case 1:
                  return [2, u.sent().data];
              }
              var c;
            });
          });
        },
        At = "?",
        _t = "&",
        xt = "/v1/passkey/StartAuthentication",
        Ct = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        kt = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Lt = function () {
          return Ct(void 0, void 0, Promise, function () {
            var e, t;
            return kt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (r = xt),
                    (e = a.EnvironmentUrls.authApi + r),
                    (t = { url: e }),
                    [4, o.httpService.post(t)]
                  );
                case 1:
                  return [2, n.sent().data];
              }
              var r;
            });
          });
        },
        It = function () {
          var e = document.querySelector('meta[name="passkey-data"]');
          return (
            "true" ===
            ((null == e ? void 0 : e.dataset) || {}).isPasskeyLoginEnabled
          );
        },
        Tt = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Pt = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Ut = function (e) {
          return a.EnvironmentUrls.authApi + e;
        },
        Ot = function (e, t) {
          return Tt(void 0, void 0, Promise, function () {
            var n, r;
            return Pt(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = Ut("/v3/users/" + e + "/two-step-verification/login")),
                    (r = { url: n, withCredentials: !0 }),
                    [4, o.httpService.post(r, t)]
                  );
                case 1:
                  return [2, i.sent().data];
              }
            });
          });
        },
        Rt = function (e) {
          return Tt(void 0, void 0, Promise, function () {
            var t, n;
            return Pt(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = Ut("/v2/login")),
                    (n = { url: t, withCredentials: !0 }),
                    [4, o.httpService.post(n, e)]
                  );
                case 1:
                  return [2, r.sent().data];
              }
            });
          });
        };
      !(function (e) {
        (e.Pasted = "pasted"), (e.Autofilled = "autofilled");
      })(Ke || (Ke = {}));
      var Nt,
        zt = function (e) {
          var t = e;
          if (
            "insertFromPaste" === t.inputType ||
            "insertFromDrop" === t.inputType
          )
            return Ke.Pasted;
          if ("insertReplacementText" === t.inputType) return Ke.Autofilled;
          var n = e.target;
          return "" !== (null == n ? void 0 : n.value) &&
            void 0 === t.inputType &&
            void 0 === t.data &&
            void 0 === t.isComposing
            ? Ke.Autofilled
            : null;
        },
        Bt = function () {
          return document.getElementById("react-login-container");
        },
        Dt = function () {
          return document.getElementById("react-login-web-app");
        },
        Mt = function (e) {
          window.location.href = e;
        },
        Ft = function () {
          var e = o.urlService.getQueryParam("returnUrl");
          if (e) {
            var t = { ReturnUrl: e };
            return o.urlService.getUrlWithQueries("/account/signupredir", t);
          }
          return o.urlService.getAbsoluteUrl("/CreateAccount");
        },
        jt = function () {
          window.location.href = o.urlService.getAbsoluteUrl("/home");
        },
        Wt = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Vt = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        qt = function (e) {
          return a.EnvironmentUrls.apiGatewayUrl + e;
        },
        Ht = function (e) {
          return Wt(void 0, void 0, Promise, function () {
            var t, n;
            return Vt(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = qt("/account-switcher/v1/logoutAllLoggedInUsers")),
                    (n = { url: t, withCredentials: !0 }),
                    [4, o.httpService.post(n, e)]
                  );
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        },
        Gt = function (e, t) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authClientError,
            e,
            { state: t }
          );
        },
        Qt = function (e, t) {
          s.eventStreamService.sendEventWithTarget(
            Ye.schematizedEventTypes.authButtonClick,
            e,
            { btn: t }
          );
        },
        $t = n(7243),
        Kt = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Yt = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Xt = function () {
          var e = document.querySelector('meta[name="account-switching-data"]');
          return (
            "true" ===
            ((null == e ? void 0 : e.dataset) || {}).isAccountSwitchingEnabled
          );
        },
        Zt = function () {
          if (!Xt()) return "";
          try {
            return s.localStorageService.getLocalStorage(_);
          } catch (e) {
            return (
              console.warn(e),
              Gt(
                Ye.context.accountSwitcherLocalStorageFailure,
                Ye.clientErrorTypes.localStorageGetFailure
              ),
              ""
            );
          }
        },
        Jt = function () {
          try {
            s.localStorageService.removeLocalStorage(_);
          } catch (e) {
            console.warn(e),
              Gt(
                Ye.context.accountSwitcherLocalStorageFailure,
                Ye.clientErrorTypes.localStorageRemoveFailure
              );
          }
        },
        en = (0, $t.memoize)(function () {
          return Kt(void 0, void 0, Promise, function () {
            var e, t;
            return Yt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]),
                    [
                      4,
                      null === a.ExperimentationService ||
                      void 0 === a.ExperimentationService
                        ? void 0
                        : a.ExperimentationService.getAllValuesForLayer(
                            "Accounts.AccountSwitcher"
                          ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    !!(null == (e = n.sent())
                      ? void 0
                      : e.isAccountSwitcherEnabled),
                  ];
                case 2:
                  return (
                    (t = n.sent()),
                    console.info(
                      "Failed to get experiment parameter values for Account Switching",
                      t
                    ),
                    [2, !1]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        tn = function () {
          return Kt(void 0, void 0, Promise, function () {
            var e;
            return Yt(this, function (t) {
              return Xt()
                ? (null === u.authenticatedUser ||
                  void 0 === u.authenticatedUser
                    ? void 0
                    : u.authenticatedUser.isAuthenticated) &&
                  (null === u.authenticatedUser ||
                  void 0 === u.authenticatedUser
                    ? void 0
                    : u.authenticatedUser.isUnder13)
                  ? [2, !1]
                  : null !== (e = Zt()) && "" !== e.trim()
                  ? [2, !0]
                  : (
                      null === u.authenticatedUser ||
                      void 0 === u.authenticatedUser
                        ? void 0
                        : u.authenticatedUser.isAuthenticated
                    )
                  ? [2, en()]
                  : [2, !1]
                : [2, !1];
            });
          });
        },
        nn = window.EventTracker;
      !(function (e) {
        (e.Production = "production"),
          (e.Sitetest1 = "sitetest1"),
          (e.Sitetest2 = "sitetest2"),
          (e.Sitetest3 = "sitetest3");
      })(Nt || (Nt = {}));
      var rn = function () {
          var e = window.location.hostname;
          return e.includes(Nt.Sitetest3)
            ? Nt.Sitetest3
            : e.includes(Nt.Sitetest2)
            ? Nt.Sitetest2
            : e.includes(Nt.Sitetest1)
            ? Nt.Sitetest1
            : Nt.Production;
        },
        on = ["{{", "/getauthticket", "/placelauncher.ashx"],
        an = ["http:", "https:"],
        un = ["#", "?", "//", ".", "mailto:", "javascript:", "rbxmobile:"],
        cn = ["survey.roblox.com"],
        ln = "/",
        sn = function (e) {
          return e.split(".").slice(-2).join(".");
        },
        fn = function (e) {
          if (!0 === a.Endpoints.isAbsolute(e)) {
            var t = new URL(e),
              n = t.hostname,
              r = t.protocol;
            if (sn(window.location.hostname) !== sn(n)) return ln;
            if (
              !(function () {
                switch (rn()) {
                  case Nt.Sitetest3:
                  case Nt.Sitetest2:
                  case Nt.Sitetest1:
                    return ["robloxlabs.com"];
                  case Nt.Production:
                  default:
                    return ["roblox.com"];
                }
              })().some(function (e) {
                return e === sn(n);
              }) ||
              cn.some(function (e) {
                return n.includes(e);
              })
            )
              return ln;
            if (
              !an.some(function (e) {
                return r === e;
              })
            )
              return ln;
          } else if (e !== decodeURIComponent(e)) return ln;
          return e;
        },
        dn = function () {
          var e,
            t = o.urlService.parseQueryString() || {},
            n = Object.keys(t).find(function (e) {
              return "returnurl" === e.toLowerCase();
            }),
            r = n
              ? String(null !== (e = t["" + n]) && void 0 !== e ? e : "")
              : "";
          if (
            !r ||
            "" === r.trim() ||
            un.some(function (e) {
              return r.startsWith(e);
            }) ||
            on.some(function (e) {
              return r.includes(e);
            })
          )
            return ln;
          if (
            (function () {
              var e = rn();
              switch (e) {
                case Nt.Sitetest3:
                case Nt.Sitetest2:
                case Nt.Sitetest1:
                  return [
                    "https://apis." +
                      e +
                      ".robloxlabs.com/application-authorization/v1/authorize",
                    "https://authorize." + e + ".robloxlabs.com",
                    "https://www." + e + ".robloxlabs.com",
                  ];
                case Nt.Production:
                default:
                  return [
                    "https://apis.roblox.com/oauth/v1/authorize",
                    "https://authorize.roblox.com",
                    "https://www.roblox.com",
                  ];
              }
            })().some(function (e) {
              return (function (e, t) {
                try {
                  var n = new URL(t),
                    r = new URL(e);
                  return (
                    n.hostname === r.hostname &&
                    n.protocol === r.protocol &&
                    (n.pathname === r.pathname || "/" === r.pathname)
                  );
                } catch (e) {
                  return !1;
                }
              })(r, e);
            })
          )
            return r;
          try {
            return a.Endpoints.getAbsoluteUrl(fn(r));
          } catch (e) {
            return ln;
          }
        },
        pn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        hn = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        vn = o.urlService.composeQueryString,
        gn = function (e) {
          nn && e && nn.fireEvent(H + e);
        },
        mn = function (e, t, n) {
          void 0 === t && (t = "conditional");
          var r = s.fido2Util.convertPublicKeyParametersToStandardBase64(e);
          return navigator.credentials.get({
            publicKey: s.fido2Util.formatCredentialRequestWeb(
              JSON.stringify(r)
            ),
            mediation: t,
            signal: n,
          });
        },
        yn = function (e) {
          var t = Fe;
          switch (e) {
            case ee:
              t = Te;
              break;
            case ne:
              t = Pe;
              break;
            case ie:
              t = Ue;
              break;
            case oe:
              t = Oe;
              break;
            case ae:
              t = Re;
              break;
            case ue:
              t = Ie;
              break;
            case ce:
              t = Ne;
              break;
            case le:
              t = ze;
              break;
            case fe:
              t = De;
              break;
            case se:
              t = Be;
              break;
            case de:
              t = Me;
              break;
            default:
              t = Fe;
          }
          return t;
        },
        bn = function (e, t) {
          switch (e) {
            case ae:
            case ue:
            case ee:
              return (function (e, t) {
                switch (e) {
                  case ee:
                    return t === x.Email
                      ? k.ResponseIncorrectEmailOrPassword
                      : t === x.PhoneNumber
                      ? k.ResponseIncorrectPhoneOrPassword
                      : t === x.EmailOtpSessionToken
                      ? k.ResponseIncorrectCredentials
                      : t === x.Passkey
                      ? k.ResponseInvalidPasskeyCredential
                      : k.ResponseIncorrectUsernamePassword;
                  case ae:
                    return t === x.Email
                      ? k.ResponseEmailLinkedToMultipleAccountsLoginWithUsername
                      : t === x.PhoneNumber
                      ? k.ResponseLoginWithUsername
                      : "";
                  case ue:
                    return t === x.Email
                      ? k.ResponseUnverifiedEmailLoginWithUsername
                      : t === x.PhoneNumber
                      ? k.ResponseUnverifiedPhoneLoginWithUsername
                      : "";
                  default:
                    return "";
                }
              })(e, t);
            case ne:
              return k.ResponseAccountNotFound;
            case ie:
              return k.ResponseAccountIssueErrorContactSupport;
            case oe:
              return k.ResponseTooManyAttemptsPleaseWait;
            case ce:
              return k.ResponseCaptchaErrorFailedToLoad;
            case le:
              return k.ResponseCaptchaErrorFailedToVerify;
            case fe:
              return k.ResponseGlobalAppAccessError;
            case se:
              return k.MessageUnknownErrorTryAgain;
            case de:
              return k.DescriptionCurfewMessage;
            case ve:
              return k.ResponseOtpUnder13NotAllowed;
            case ge:
              return k.ResponseLoginBlocked;
            case we:
              return k.ErrorPasskeyOnlyAccount;
            default:
              return k.MessageUnknownErrorTryAgain;
          }
        },
        wn = function (e) {
          return (
            (t = e),
            new RegExp(
              "^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
            ).test(t)
              ? x.Email
              : (n = e) &&
                !(n.length < 4) &&
                /\d/.test(n) &&
                /^[\d|\W|_]+$/.test(n)
              ? x.PhoneNumber
              : x.Username
          );
          var t, n;
        },
        Sn = function () {
          var e,
            t,
            n = Bt(),
            r = Dt();
          return (
            "" +
            ("true" ===
              (null ===
                (e =
                  null == n
                    ? void 0
                    : n.getAttribute("data-enable-frontend-return-url")) ||
              void 0 === e
                ? void 0
                : e.toLowerCase()) || r
              ? dn()
              : (null == n ? void 0 : n.getAttribute("data-return-url")) ||
                "") +
            (null !== (t = window.location.hash) && void 0 !== t ? t : "")
          );
        },
        En = function () {
          var e = (function (e) {
            if (!e) return "/";
            var t = e;
            return e.indexOf(At) > -1 ? (t += _t) : (t += At), t + "nl=true";
          })(Sn());
          return o.urlService.getAbsoluteUrl(e);
        },
        An = function (e, t) {
          return e === x.EmailOtpSessionToken
            ? t(k.DescriptionAccountSelectorHelp) +
                " " +
                t(k.DescriptionAccountSelectorOtpTimeWarning, {
                  timeLimitSec: "60",
                })
            : t(k.DescriptionAccountSelectorHelp);
        },
        _n = function () {
          var e = En();
          return qe + "?" + vn({ returnUrl: e });
        },
        xn = function (e) {
          var t = [];
          if (!e || "object" != typeof e) return [];
          var n = e.errors;
          return n instanceof Array
            ? (n.forEach(function (e) {
                if (e && "object" == typeof e) {
                  var n = e.code;
                  "number" == typeof n && t.push(n);
                }
              }),
              t)
            : [];
        },
        Cn = function (e) {
          var t = xn(e);
          return (
            "object" == typeof e &&
              xn(e.data).forEach(function (e) {
                return t.push(e);
              }),
            t[0] || null
          );
        },
        kn = function (e) {
          var t = [];
          if (!e || "object" != typeof e) return [];
          var n = e.errors;
          return n instanceof Array
            ? (n.forEach(function (e) {
                if (e && "object" == typeof e) {
                  var n = e.fieldData;
                  "string" == typeof n && t.push(n);
                }
              }),
              t)
            : [];
        },
        Ln = function (e) {
          var t = kn(e);
          "object" == typeof e &&
            kn(e.data).forEach(function (e) {
              return t.push(e);
            });
          var n = t[0] || "",
            r = JSON.parse(n);
          return { userId: r.userId, sessionId: r.sessionId };
        },
        In = function (e) {
          var t = { users: [], invalidUsers: [] },
            n = kn(e);
          if ("object" == typeof e) {
            kn(e.data).forEach(function (e) {
              return n.push(e);
            });
            var r = n[0] || "",
              i = JSON.parse(r),
              o = i.users,
              a = i.invalidUsers;
            (t.users = null != o ? o : []),
              (t.invalidUsers = null != a ? a : []);
          }
          return t;
        },
        Tn = (0, c.withTranslations)(function (e) {
          var n = e.captchaId,
            i = e.captchaToken,
            o = e.credentialValue,
            a = e.password,
            u = e.isLoading,
            c = e.errorMsg,
            s = e.translate,
            f = e.onFormSubmit,
            d = e.onCredentialValueChange,
            p = e.onPasswordChange,
            h = e.isLoginFormDisabled,
            v = function (e, t) {
              var n = zt(e.nativeEvent);
              n && vt(Ye.context.loginForm, t, n);
            };
          return (
            (0, t.useEffect)(
              function () {
                n && i && f(!1);
              },
              [n + i]
            ),
            r().createElement(
              "div",
              { id: "login-form" },
              r().createElement(
                "div",
                null,
                r().createElement(
                  "div",
                  { className: "login-form-container" },
                  r().createElement(
                    "form",
                    {
                      className: "login-form",
                      name: "loginForm",
                      onSubmit: function (e) {
                        e.preventDefault(), e.stopPropagation();
                      },
                    },
                    r().createElement(
                      "div",
                      { className: "form-group username-form-group" },
                      r().createElement(
                        "label",
                        { htmlFor: "login-username", className: "sr-only" },
                        s(k.LabelUsernameEmailPhone)
                      ),
                      r().createElement("input", {
                        id: "login-username",
                        name: "username",
                        type: "text",
                        className: "form-control input-field",
                        autoComplete: "username webauthn",
                        onFocus: rt,
                        onBlur: it,
                        placeholder: s(k.LabelUsernameEmailPhone),
                        value: o,
                        onChange: function (e) {
                          v(e, Ye.field.username), d(e.target.value);
                        },
                      })
                    ),
                    r().createElement(
                      "div",
                      { className: "form-group password-form-group" },
                      r().createElement(
                        "label",
                        { htmlFor: "login-password", className: "sr-only" },
                        s(k.LabelPassword)
                      ),
                      r().createElement("input", {
                        id: "login-password",
                        name: "password",
                        type: "password",
                        className: "form-control input-field",
                        onFocus: ot,
                        onBlur: at,
                        placeholder: s(k.LabelPassword),
                        value: a,
                        onChange: function (e) {
                          v(e, Ye.field.password), p(e);
                        },
                        onKeyPress: function (e) {
                          return (function (e) {
                            "Enter" === e.key && f();
                          })(e);
                        },
                      }),
                      r().createElement(
                        "div",
                        { "aria-live": "polite" },
                        c.length > 0 &&
                          r().createElement(
                            "p",
                            {
                              className:
                                "form-control-label xsmall text-error login-error",
                              id: "login-form-error",
                            },
                            c
                          )
                      )
                    ),
                    u
                      ? r().createElement(l.Loading, null)
                      : r().createElement(
                          "button",
                          {
                            type: "button",
                            id: "login-button",
                            className:
                              "btn-full-width login-button btn-secondary-md",
                            onClick: function (e) {
                              return f();
                            },
                            disabled: h,
                          },
                          s(k.ActionLogInCapitalized)
                        )
                  )
                )
              )
            )
          );
        }, mt),
        Pn = a.AccountIntegrityChallengeService.Captcha,
        Un = function (e) {
          var n = e.containerId,
            i = e.actionType,
            o = e.dataExchange,
            a = e.unifiedCaptchaId,
            u = e.onCaptchaChallengeCompleted,
            c = e.onCaptchaChallengeInvalidated,
            l = e.onCaptchaChallengeAbandoned,
            s = e.onUnknownError,
            f = (0, t.useState)(null),
            d = f[0],
            p = f[1];
          return (
            (0, t.useEffect)(
              function () {
                o &&
                  a &&
                  (function (e) {
                    if (null === d) {
                      var t = {
                        containerId: n,
                        actionType: i,
                        appType: null,
                        dataExchangeBlob: e.dataExchange,
                        unifiedCaptchaId: e.unifiedCaptchaId,
                        onChallengeDisplayed: function (e) {
                          return null;
                        },
                        onChallengeCompleted: function (e) {
                          p(null), u(e);
                        },
                        onChallengeInvalidated: function (e) {
                          p(null), c(e);
                        },
                        renderInline: !1,
                        onModalChallengeAbandoned: function (e) {
                          return (
                            p(function () {
                              return e;
                            }),
                            l(),
                            null
                          );
                        },
                      };
                      Pn
                        ? Pn.renderChallenge(t)
                            .then(function (e) {
                              e || s();
                            })
                            .catch(function () {
                              s();
                            })
                        : console.error("no captcha service available");
                    } else d();
                  })({ dataExchange: o, unifiedCaptchaId: a });
              },
              [o + a]
            ),
            r().createElement("div", { id: n })
          );
        },
        On = a.AccountIntegrityChallengeService.TwoStepVerification,
        Rn = function (e) {
          var n = e.userId,
            i = e.challengeId,
            o = e.on2svChallengeCompleted,
            a = e.on2svChallengeInvalidated,
            u = e.on2svChallengeAbandoned,
            c = e.onUnknownError,
            l = G;
          return (
            (0, t.useEffect)(
              function () {
                n &&
                  i &&
                  (function () {
                    try {
                      On.renderChallenge({
                        containerId: l,
                        userId: n,
                        challengeId: i,
                        actionType: On.ActionType.Login,
                        renderInline: !1,
                        shouldShowRememberDeviceCheckbox: !0,
                        recoveryParameters: { clientSupports2svRecovery: !0 },
                        onChallengeCompleted: o,
                        onChallengeInvalidated: a,
                        onModalChallengeAbandoned: u,
                      }) || c();
                    } catch (e) {
                      c();
                    }
                  })();
              },
              [n, i]
            ),
            r().createElement("div", { id: l })
          );
        },
        Nn = (0, c.withTranslations)(function (e) {
          var n = e.onCrossDeviceLoginCodeValidated,
            i = e.isOtpLoginEnabled,
            o = e.openOtpLoginModal,
            u = e.showPasskeyLoginButton,
            c = e.openPasskeyLoginFlow,
            l = e.isOneTimeCodeDesignUpdated,
            s = e.translate;
          return (
            (0, t.useEffect)(function () {
              var e = function (e) {
                e.detail && n(e.detail);
              };
              return (
                window.addEventListener("OnCrossDeviceCodeValidated", e),
                function () {
                  window.removeEventListener("OnCrossDeviceCodeValidated", e);
                }
              );
            }, []),
            r().createElement(
              "div",
              null,
              r().createElement(
                "div",
                { className: "alternative-login-divider-container" },
                r().createElement("div", {
                  className: "rbx-divider alternative-login-divider",
                }),
                !i &&
                  r().createElement(
                    "div",
                    { className: "divider-text-container" },
                    r().createElement(
                      "span",
                      { className: "divider-text" },
                      s(k.LabelLoginWithYour)
                    )
                  )
              ),
              i &&
                r().createElement(
                  "button",
                  {
                    type: "button",
                    id: "otp-login-button",
                    className: "btn-full-width btn-control-md otp-login-button",
                    onClick: o,
                  },
                  s(k.ActionLogInEmailOneTimeCode)
                ),
              u &&
                r().createElement(
                  "button",
                  {
                    type: "button",
                    id: "passkey-login-button",
                    className:
                      "btn-full-width btn-control-md passkey-login-button",
                    onClick: function () {
                      c("required");
                    },
                  },
                  s(k.ActionLogInPasskey)
                ),
              r().createElement(
                "button",
                {
                  type: "button",
                  id: "cross-device-login-button",
                  className:
                    "btn-full-width btn-control-md cross-device-login-button",
                  onClick: function () {
                    Ze(), a.CrossDeviceLoginDisplayCodeService.openModal();
                  },
                },
                r().createElement(
                  "span",
                  null,
                  s(
                    i
                      ? l
                        ? k.ActionUseAnotherDevice
                        : k.ActionLogInAnotherDevice
                      : k.ActionAnotherLoggedInDevice
                  )
                )
              )
            )
          );
        }, mt),
        zn = function (e) {
          s.localStorageService.setLocalStorage(
            "identityVerificationLoginTicket",
            e
          );
        },
        Bn = function () {
          var e = I.koreaIdVerification;
          window.location.href = e;
        },
        Dn = (0, c.withTranslations)(function (e) {
          var n = e.identityVerificationLoginTicket,
            i = e.translate,
            o = (0, l.createModal)(),
            a = o[0],
            u = o[1];
          return (
            (0, t.useEffect)(
              function () {
                zn(n), n && u.open();
              },
              [n]
            ),
            { identityVerificationLoginTicket: n } &&
              r().createElement(a, {
                title: i("Title.VerificationRequired"),
                body: i("Description.VerificationRequired"),
                neutralButtonText: i("Action.StartVerification"),
                onNeutral: Bn,
                closeable: !1,
              })
          );
        }, yt),
        Mn = a.AccountIntegrityChallengeService.SecurityQuestions,
        Fn = function (e) {
          var n = e.userId,
            i = e.sessionId,
            o = e.onSecurityQuestionsChallengeCompleted,
            a = e.onSecurityQuestionsChallengeInvalidated,
            u = e.onSecurityQuestionsChallengeAbandoned,
            c = e.onUnknownError,
            l = $;
          return (
            (0, t.useEffect)(
              function () {
                n &&
                  i &&
                  (function () {
                    try {
                      Mn.renderChallenge({
                        containerId: l,
                        userId: n,
                        sessionId: i,
                        renderInline: !1,
                        onChallengeCompleted: o,
                        onChallengeInvalidated: a,
                        onModalChallengeAbandoned: u,
                      }) || c();
                    } catch (e) {
                      c();
                    }
                  })();
              },
              [n, i]
            ),
            r().createElement("div", { id: l })
          );
        },
        jn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Wn = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Vn = (0, c.withTranslations)(function (e) {
          var n = e.translate,
            i = (0, t.useState)(!1),
            o = i[0],
            c = i[1],
            l = a.AccountSwitcherService && u.authenticatedUser.isAuthenticated,
            s = l ? _n() : Ft();
          return (
            (0, t.useEffect)(
              function () {
                jn(void 0, void 0, void 0, function () {
                  var e, t;
                  return Wn(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            null === a.NavigationService ||
                            void 0 === a.NavigationService
                              ? void 0
                              : a.NavigationService.getIsVNGLandingRedirectEnabled(),
                          ]
                        );
                      case 1:
                        return (e = n.sent()), c(l || !e), [3, 3];
                      case 2:
                        return (
                          (t = n.sent()),
                          console.error("Error fetching data:", t),
                          c(!0),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              },
              [l]
            ),
            r().createElement(
              "div",
              { className: "text-center" },
              o &&
                r().createElement(
                  "div",
                  { className: "signup-option" },
                  !l &&
                    r().createElement(
                      "span",
                      { className: "no-account-text" },
                      n(k.LabelNoAccount)
                    ),
                  r().createElement(
                    "a",
                    {
                      id: "sign-up-link",
                      className: "text-link signup-link",
                      href: s,
                      target: "_self",
                    },
                    n(l ? k.ActionCreateANewAccount : k.ActionSignUpCapitalized)
                  )
                )
            )
          );
        }, mt),
        qn = (0, c.withTranslations)(function (e) {
          var t = e.credentialValue,
            n = e.translate,
            i = I.forgotCredentialsUrl,
            o = t ? i + "?identifier=" + encodeURIComponent(t) : i,
            a = k.ActionForgotPasswordOrUsernameQuestionCapitalized;
          return r().createElement(
            "div",
            { className: "text-center forgot-credentials-link" },
            r().createElement(
              "a",
              {
                id: "forgot-credentials-link",
                className: "text-link",
                href: o,
                target: "_self",
              },
              n(a)
            )
          );
        }, mt),
        Hn = function (e) {
          var n = e.containerId,
            i = e.users,
            o = e.invalidUsers,
            u = e.onAccountSelection,
            c = e.onAccountSelectorAbandoned,
            l = e.titleText,
            s = e.helpText,
            f = e.translate,
            d = {
              containerId: n,
              users: i,
              invalidUsers: o,
              onAccountSelection: u,
              onAccountSelectorAbandoned: c,
              titleText: l,
              helpText: s,
              translate: f,
            };
          return (
            (0, t.useEffect)(
              function () {
                i.length > 0 &&
                  a.AccountSelectorService &&
                  a.AccountSelectorService.renderAccountSelectorModal(d);
              },
              [i, o]
            ),
            r().createElement("div", { id: n })
          );
        },
        Gn = function () {
          return (
            (Gn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Gn.apply(this, arguments)
          );
        },
        Qn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        $n = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Kn = function (e) {
          var n = (0, t.useState)({}),
            r = n[0],
            i = n[1],
            o = (0, t.useState)(!0),
            u = o[0],
            c = o[1];
          return (
            (0, t.useEffect)(
              function () {
                c(!0),
                  (function (e) {
                    return Qn(void 0, void 0, Promise, function () {
                      return $n(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              null === a.ExperimentationService ||
                              void 0 === a.ExperimentationService
                                ? void 0
                                : a.ExperimentationService.getAllValuesForLayer
                            )
                              ? [
                                  4,
                                  a.ExperimentationService.getAllValuesForLayer(
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
                  })(e).then(
                    function (e) {
                      i(e), c(!1);
                    },
                    function () {
                      i({}), c(!1);
                    }
                  );
              },
              [e]
            ),
            Gn(Gn({}, r), { isLoading: u })
          );
        },
        Yn = function (e) {
          var n,
            i = e.containerId,
            o = {
              containerId: i,
              titleText: e.titleText,
              helpText: e.helpText,
              onAccountSwitched: e.onAccountSwitched,
              handleAddAccount: e.handleAddAccount,
              suppressAddAccountRow: e.suppressAddAccountRow,
              removeInvalidActiveUser: e.removeInvalidActiveUser,
              translate: e.translate,
              loggedInUsers: e.loggedInUsers,
            },
            u = (
              null !==
                (n =
                  null === a.AccountSwitcherService ||
                  void 0 === a.AccountSwitcherService
                    ? void 0
                    : a.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
              void 0 !== n
                ? n
                : [!1]
            )[0];
          return (
            (0, t.useEffect)(
              function () {
                u &&
                  (null === a.AccountSwitcherService ||
                    void 0 === a.AccountSwitcherService ||
                    a.AccountSwitcherService.renderAccountSwitcher(o));
              },
              [o, u]
            ),
            r().createElement("div", { id: i })
          );
        },
        Xn = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Zn = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Jn = (0, c.withTranslations)(function (e) {
          var n,
            i = e.origin,
            o = e.containerId,
            u = e.hasMaxLoggedInAccountsSignupError,
            c = e.isAccountLimitReached,
            l = e.handleRedirectHome,
            s = e.translate,
            h = e.isParentUser,
            v = (
              null !==
                (n =
                  null === a.AccountSwitcherService ||
                  void 0 === a.AccountSwitcherService
                    ? void 0
                    : a.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
              void 0 !== n
                ? n
                : [!1]
            )[0];
          return (
            (0, t.useEffect)(
              function () {
                if (v) {
                  if (c || u) {
                    var e = (function () {
                      var e = this,
                        t = {
                          containerId: o,
                          origin: i,
                          localizedTitleText: s(d.HeadingAccountLimitReached),
                          localizedBodyText: s(d.LabelAccountLimitReached),
                          localizedPrimaryButtonText: s(d.ActionOK),
                          primaryButtonCallback: l,
                          isModalDismissable: !1,
                        };
                      return (
                        u &&
                          ((t.localizedSecondaryButtonText = s(
                            f.ActionLogOutAllAccounts
                          )),
                          (t.secondaryButtonCallback = function () {
                            return Xn(e, void 0, void 0, function () {
                              var e;
                              return Zn(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    if (!(e = Zt())) return [3, 4];
                                    t.label = 1;
                                  case 1:
                                    return (
                                      t.trys.push([1, 3, , 4]),
                                      [4, Ht({ encrypted_users_data_blob: e })]
                                    );
                                  case 2:
                                    return t.sent(), [3, 4];
                                  case 3:
                                    return (
                                      t.sent(),
                                      Gt(
                                        Ye.context.accountSwitcherLimitError,
                                        Ye.clientErrorTypes
                                          .logoutAllAccountSwitcherAccounts
                                      ),
                                      [3, 4]
                                    );
                                  case 4:
                                    Jt();
                                    try {
                                      null === a.NavigationService ||
                                        void 0 === a.NavigationService ||
                                        a.NavigationService.logoutAndRedirect();
                                    } catch (e) {
                                      window.location.reload();
                                    }
                                    return [2];
                                }
                              });
                            });
                          })),
                        t
                      );
                    })();
                    null === a.AccountSwitcherService ||
                      void 0 === a.AccountSwitcherService ||
                      a.AccountSwitcherService.renderBaseConfirmationModal(e);
                  }
                  var t, n, r;
                  h &&
                    ((t =
                      i === p.LoginEmptyBlobRequiredError
                        ? Ye.context.accountSwitcherVpcLogin
                        : Ye.context.accountSwitcherVpcSignup),
                    (n = Ye.clientErrorTypes.logoutAllAccountSwitcherAccounts),
                    (r = {
                      containerId: o,
                      origin: i,
                      localizedTitleText: s("Header.LogoutAllAccounts"),
                      localizedBodyText: s(
                        "Description.ParentLogoutConfirmation"
                      ),
                      localizedPrimaryButtonText: s("Action.LogoutAllAccounts"),
                      primaryButtonCallback: function () {
                        return Xn(void 0, void 0, void 0, function () {
                          var e;
                          return Zn(this, function (r) {
                            switch (r.label) {
                              case 0:
                                if ((st(), !(e = Zt()))) return [3, 4];
                                r.label = 1;
                              case 1:
                                return (
                                  r.trys.push([1, 3, , 4]),
                                  [4, Ht({ encrypted_users_data_blob: e })]
                                );
                              case 2:
                                return r.sent(), [3, 4];
                              case 3:
                                return r.sent(), Gt(t, n), [3, 4];
                              case 4:
                                return Jt(), window.location.reload(), [2];
                            }
                          });
                        });
                      },
                      isModalDismissable: !1,
                    }),
                    null === a.AccountSwitcherService ||
                      void 0 === a.AccountSwitcherService ||
                      a.AccountSwitcherService.renderBaseConfirmationModal(r));
                }
              },
              [v, c, u]
            ),
            r().createElement("div", { id: o })
          );
        }, bt),
        er =
          (a.EnvironmentUrls.authApi,
          a.EnvironmentUrls.authApi,
          a.EnvironmentUrls.userAgreementsServiceApi,
          a.EnvironmentUrls.authApi,
          a.EnvironmentUrls.authApi,
          a.EnvironmentUrls.authApi,
          a.Endpoints.getAbsoluteUrl("/login"),
          a.EnvironmentUrls.websiteUrl,
          a.EnvironmentUrls.websiteUrl,
          a.EnvironmentUrls.usersApi,
          new Map([
            [1, "Response.UsernameAlreadyInUse"],
            [2, "Response.BadUsername"],
            [10, "Response.UsernamePrivateInfo"],
            [12, "Response.UsernameNotAvailable"],
          ]),
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, u);
              }
              c((r = r.apply(e, t || [])).next());
            });
          }),
        tr = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        };
      var nr = function (e) {
        var n = this;
        void 0 === e && (e = !0);
        var r = (0, t.useState)({
            usersAvailableForSwitching: [],
            isAccountLimitReached: !1,
          }),
          i = r[0],
          o = r[1],
          c = (0, t.useState)(!0),
          l = c[0],
          s = c[1];
        return (
          (0, t.useEffect)(function () {
            er(n, void 0, Promise, function () {
              var t, n;
              return tr(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, 3, 4]),
                      [
                        4,
                        null === a.AccountSwitcherService ||
                        void 0 === a.AccountSwitcherService
                          ? void 0
                          : a.AccountSwitcherService.parseLoggedInUsers(
                              !u.authenticatedUser.isAuthenticated,
                              e
                            ),
                      ]
                    );
                  case 1:
                    return (t = r.sent()), o(t), [3, 4];
                  case 2:
                    return (
                      (n = r.sent()),
                      console.warn("account switching has issues", n),
                      [3, 4]
                    );
                  case 3:
                    return s(!1), [7];
                  case 4:
                    return [2];
                }
              });
            });
          }, []),
          { loggedInUsers: i, isGettingLoggedInUsers: l }
        );
      };
      var rr,
        ir = function (e) {
          (0, t.useEffect)(
            function () {
              e && jt();
            },
            [e]
          );
        },
        or = function () {
          var e = (0, t.useState)(!1),
            n = e[0],
            r = e[1];
          return (
            (0, t.useEffect)(function () {
              var e = new URLSearchParams(window.location.search),
                t = String(e.get("returnUrl")),
                n =
                  t.includes("parents/account-setup") ||
                  t.includes("parental-requests");
              r(n);
            }, []),
            n
          );
        },
        ar = {
          qualifiedSignup:
            a.EnvironmentUrls.apiGatewayUrl +
            "/affiliate-links/v1/events/qualified-signup",
          qualifiedLogin:
            a.EnvironmentUrls.apiGatewayUrl +
            "/affiliate-links/v1/events/authenticated-visit",
        },
        ur = ["/share-links"],
        cr = ["ExperienceAffiliate", "ExperienceInvite"],
        lr = function (e) {
          var t;
          return (
            ur.includes(e.pathname) &&
            cr.includes(
              null !== (t = e.searchParams.get("type")) && void 0 !== t ? t : ""
            )
          );
        },
        sr = function (e) {
          var t;
          try {
            var n = new URL(e);
            return ur.includes(n.pathname) &&
              null !== (t = n.searchParams.get("code")) &&
              void 0 !== t
              ? t
              : "";
          } catch (e) {
            return "";
          }
        },
        fr = function (e) {
          try {
            var t = new URL(e).searchParams.get("referralUrl");
            if (!t) return null;
            var n = new URL(decodeURIComponent(t));
            return lr(n) ? n.href : null;
          } catch (e) {
            return null;
          }
        },
        dr = function (e) {
          var t;
          try {
            var n = new URL(e);
            return ur.includes(n.pathname) &&
              null !== (t = n.searchParams.get("type")) &&
              void 0 !== t
              ? t
              : "";
          } catch (e) {
            return "";
          }
        };
      !(function (e) {
        (e.SavePaymentMethods = "SavePaymentMethods"),
          (e.UpdateUserSetting = "UpdateUserSetting"),
          (e.UpdateBirthdate = "UpdateBirthdate"),
          (e.LinkToChild = "LinkToChild"),
          (e.LiftPunishment = "LiftPunishment"),
          (e.Unknown = "Unknown");
      })(rr || (rr = {}));
      s.eventStreamService.eventTypes;
      var pr = function (e) {
          o.httpService
            .post({ withCredentials: !0, url: ar.qualifiedLogin }, e)
            .catch(function (e) {
              console.error(
                "Failed to send login event for affiliate links:",
                e
              );
            });
        },
        hr = (0, c.withTranslations)(function (e) {
          var t = e.credentialValue,
            n = e.translate;
          return r().createElement(
            l.Modal,
            {
              className: "security-notification-modal",
              show: !0,
              backdrop: "static",
              keyboard: !1,
            },
            r().createElement(
              l.Modal.Header,
              { useBaseBootstrapComponent: !0 },
              r().createElement("div", null),
              r().createElement(
                "span",
                {
                  className:
                    "text-heading-small text-align-x-center padding-large",
                },
                n(k.HeadingSecurityNotification)
              )
            ),
            r().createElement(
              l.Modal.Body,
              null,
              r().createElement(
                "p",
                {
                  className: "text-center text-body-large modal-margin-bottom",
                },
                n(k.DescriptionRecoverYourAccount)
              )
            ),
            r().createElement(
              l.Modal.Footer,
              null,
              r().createElement(
                "div",
                { className: "security-notification-modal-footer-buttons" },
                r().createElement(
                  "button",
                  {
                    type: "button",
                    className:
                      "btn-growth-md security-notification-modal-footer-button update-email-button",
                    "aria-label": n(k.ActionRecoverYourAccount),
                    onClick: function () {
                      !(function (e) {
                        Mt(
                          "" === e
                            ? I.forgotCredentialsUrl
                            : I.forgotCredentialsUrl +
                                "?identifier=" +
                                encodeURIComponent(e)
                        );
                      })(t);
                    },
                  },
                  n(k.ActionRecoverYourAccount)
                )
              )
            )
          );
        }, mt),
        vr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        gr = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        mr = s.dataStores.localeDataStore;
      function yr() {
        var e = (0, t.useState)(void 0),
          n = e[0],
          r = e[1],
          i = (0, t.useState)(!0),
          o = i[0],
          a = i[1],
          u = (0, t.useState)(!1),
          c = u[0],
          l = u[1];
        return (
          (0, t.useEffect)(function () {
            a(!0),
              l(!1),
              vr(void 0, void 0, Promise, function () {
                var e, t;
                return gr(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, mr.getUserLocale()];
                    case 1:
                      return (e = n.sent()) && e.data && 200 === e.status
                        ? [
                            2,
                            null === (t = e.data.signupAndLogin) || void 0 === t
                              ? void 0
                              : t.locale,
                          ]
                        : [2, void 0];
                    case 2:
                      return n.sent(), [2, void 0];
                    case 3:
                      return [2];
                  }
                });
              }).then(
                function (e) {
                  r(e), a(!1);
                },
                function () {
                  l(!0), a(!1);
                }
              );
          }, []),
          { data: n, isLoading: o, isError: c }
        );
      }
      var br = function (e) {
          switch (e.toLowerCase()) {
            case "en_us":
              return "us";
            case "de_de":
              return "de";
            case "id_id":
              return "id";
            case "ja_jp":
              return "jp";
            default:
              return null;
          }
        },
        wr = function () {
          var e = Kn(Ve),
            t = yr();
          if (e.isLoading)
            return {
              isLoginBackgroundImageEnabled: !1,
              loginBackgroundClass: "",
            };
          var n = e.IsLoginBackgroundImageEnabled,
            r = e.LoginBackgroundClass,
            i = e.UseLocalizedLoginBackground;
          return {
            isLoginBackgroundImageEnabled: n,
            loginBackgroundClass: (function () {
              if (!n || !r) return "";
              if (!i) return r;
              if (t.isLoading) return "";
              if (!t.data || t.isError) return r;
              var e = br(t.data);
              return e ? r + "-localized-" + e : r;
            })(),
          };
        },
        Sr = { common: ["CommonUI.Controls"], feature: "Feature.Landing" },
        Er = (a.Intl && new a.Intl()).getRobloxLocale(),
        Ar = function (e) {
          return "ja_jp" === Er ? e.concat("-jp") : e;
        },
        _r = (a.EnvironmentUrls.websiteUrl, "Label.RobloxAmazonStore"),
        xr = "Link.AmazonStoreRobloxApp",
        Cr = "Label.RobloxAppStore",
        kr = "Label.BrazilContentRatingLogoTitleSixteen",
        Lr = "Label.BrazilContentDescriptorViolence",
        Ir = "Label.BrazilInteractiveElementDescriptorInGamePurchases",
        Tr = "Label.BrazilInteractiveElementDescriptorUsersInteract",
        Pr = "Label.GetOnGooglePlay",
        Ur = "Link.GooglePlayStoreRobloxApp",
        Or = "Label.ItalyContentRatingLogoTitle",
        Rr = "Label.RobloxWindowsStore",
        Nr = "Link.WindowsStoreRobloxApp",
        zr = "Label.RobloxOnXbox",
        Br = "Link.XboxStoreRobloxApp",
        Dr =
          (Ar("apple-badge"),
          Ar("google-badge"),
          Ar("amazon-badge"),
          Ar("microsoft-badge"),
          (0, c.withTranslations)(function (e) {
            var t = e.shouldDisplayBrazilRatingLogo,
              n = e.shouldDisplayItalyRatingLogo,
              i = e.onContentRatingLogoClick,
              o = e.translate;
            return r().createElement(
              "div",
              null,
              t &&
                r().createElement(
                  "div",
                  { id: "brazil-rating-logo" },
                  r().createElement(
                    "div",
                    { id: "brazil-rating-header" },
                    r().createElement("span", null, o(kr))
                  ),
                  r().createElement(
                    "div",
                    { id: "brazil-rating-content" },
                    r().createElement("div", {
                      role: "button",
                      tabIndex: 0,
                      id: "brazil-icon",
                      "aria-label": "brazil-content-rating",
                      onClick: i,
                    }),
                    r().createElement(
                      "div",
                      { id: "brazil-logo-text-container" },
                      r().createElement(
                        "div",
                        { className: "brazil-logo-content-text" },
                        r().createElement("span", null, o(Lr))
                      )
                    )
                  ),
                  r().createElement(
                    "div",
                    { id: "brazil-rating-footer" },
                    r().createElement(
                      "div",
                      { className: "brazil-logo-footer-text" },
                      r().createElement("span", null, o(Tr))
                    ),
                    r().createElement(
                      "div",
                      { className: "brazil-logo-footer-text" },
                      r().createElement("span", null, o(Ir))
                    )
                  )
                ),
              n &&
                r().createElement(
                  "div",
                  {
                    role: "button",
                    tabIndex: 0,
                    id: "italy-rating-logo",
                    onClick: i,
                  },
                  r().createElement(
                    "div",
                    { id: "italy-icon-container" },
                    r().createElement("div", { id: "pegi-icon" }),
                    r().createElement("div", { id: "fear-icon" }),
                    r().createElement("div", { id: "violence-icon" }),
                    r().createElement("div", { id: "purchases-icon" })
                  ),
                  r().createElement(
                    "div",
                    { id: "italy-logo-text" },
                    r().createElement("span", null, o(Or))
                  )
                )
            );
          }, Sr)),
        Mr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Fr = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        jr = function () {
          return Mr(void 0, void 0, Promise, function () {
            return Fr(this, function (e) {
              return [2, a.Guac.callBehaviour("content-rating-logo")];
            });
          });
        },
        Wr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Vr = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        };
      var qr = function () {
          var e = (0, t.useState)(!1),
            n = e[0],
            r = e[1],
            i = (0, t.useState)(!1),
            o = i[0],
            a = i[1];
          return (
            (0, t.useEffect)(function () {
              !(function () {
                Wr(this, void 0, void 0, function () {
                  var e;
                  return Vr(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, jr()];
                      case 1:
                        return (
                          (e = t.sent()) &&
                            (r(e.displayBrazilRatingLogo),
                            a(e.displayItalyRatingLogo)),
                          [2]
                        );
                    }
                  });
                });
              })();
            }, []),
            {
              shouldDisplayBrazilRatingLogo: n,
              shouldDisplayItalyRatingLogo: o,
            }
          );
        },
        Hr = function () {
          return (
            (Hr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Hr.apply(this, arguments)
          );
        },
        Gr = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Qr = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        $r = (0, c.withTranslations)(function (e) {
          var n,
            i,
            o,
            c,
            f,
            d = e.translate,
            b = (0, t.useState)(!1),
            w = b[0],
            S = b[1],
            E = (0, t.useState)(""),
            A = E[0],
            _ = E[1],
            C = (0, t.useState)(""),
            L = C[0],
            I = C[1],
            T = (0, t.useState)(""),
            P = T[0],
            U = T[1],
            O = (0, t.useState)(""),
            R = O[0],
            N = O[1],
            z = (0, t.useState)(""),
            B = z[0],
            D = z[1],
            M = (0, t.useState)(""),
            F = M[0],
            j = M[1],
            W = (0, t.useState)(0),
            V = W[0],
            q = W[1],
            H = (0, t.useState)(""),
            G = H[0],
            $ = H[1],
            ee = (0, t.useState)(""),
            ne = ee[0],
            ie = ee[1],
            oe = (0, t.useState)({ users: [], invalidUsers: [] }),
            ue = oe[0],
            fe = oe[1],
            de = (0, t.useState)(0),
            ge = de[0],
            we = de[1],
            Ie = (0, t.useState)(""),
            Te = Ie[0],
            Pe = Ie[1],
            Ue = (0, t.useState)(x.Username),
            Oe = Ue[0],
            Ne = Ue[1],
            ze = (0, t.useState)(""),
            Be = ze[0],
            De = ze[1],
            Me = (0, t.useRef)(!1),
            Fe = (0, t.useState)(!1),
            qe = Fe[0],
            Ge = Fe[1],
            Qe = (0, t.useState)(""),
            $e = Qe[0],
            Xe = Qe[1],
            Ze = (0, t.useState)(!1),
            nt = Ze[0],
            rt = Ze[1],
            it = (0, t.useState)(""),
            ot = it[0],
            at = it[1],
            pt = (0, t.useState)(""),
            vt = pt[0],
            mt = pt[1],
            yt = (0, t.useState)(""),
            bt = yt[0],
            wt = yt[1],
            St = (0, t.useState)(""),
            At = St[0],
            _t = St[1],
            xt = (0, t.useState)(!1),
            Ct = xt[0],
            kt = xt[1],
            Tt = (0, t.useState)(""),
            Pt = Tt[0],
            Ut = Tt[1],
            Nt = (0, t.useState)(""),
            Bt = Nt[0],
            Dt = Nt[1],
            Ft = (0, t.useState)(0),
            Wt = Ft[0],
            Vt = Ft[1],
            qt = (0, t.useState)(!1),
            Qt = qt[0],
            $t = qt[1],
            Kt = (0, t.useState)(!1),
            Yt = Kt[0],
            Xt = Kt[1],
            en = (0, t.useState)(!1),
            tn = en[0],
            nn = en[1],
            rn = (0, t.useRef)(new AbortController()),
            on = (0, t.useState)(!1),
            an = on[0],
            un = on[1],
            cn = qr().shouldDisplayBrazilRatingLogo,
            ln = (0, t.useState)(100),
            sn = ln[0],
            fn = ln[1],
            dn = !0,
            vn = (0, t.useState)(""),
            Sn = vn[0],
            _n = vn[1],
            xn = Kn(Ve),
            Pn = xn.IsLoginUiUpdatesEnabled,
            On = xn.IsSilentPasskeyUpgradeWebEnabled,
            zn = wr(),
            Bn = zn.isLoginBackgroundImageEnabled,
            Mn = zn.loginBackgroundClass,
            jn = (0, t.useState)(!0),
            Wn = jn[0],
            Gn = jn[1],
            Qn = (0, t.useState)(!1),
            $n = Qn[0],
            Xn = Qn[1],
            Zn = nr(
              !(
                null !==
                  (n =
                    null === u.authenticatedUser ||
                    void 0 === u.authenticatedUser
                      ? void 0
                      : u.authenticatedUser.isAuthenticated) &&
                void 0 !== n &&
                n
              )
            ),
            er = Zn.loggedInUsers,
            tr = Zn.isGettingLoggedInUsers,
            rr =
              null !==
                (i =
                  null === a.AccountSwitcherService ||
                  void 0 === a.AccountSwitcherService
                    ? void 0
                    : a.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
              void 0 !== i
                ? i
                : [!1, !1],
            ar = rr[0],
            ur = rr[1],
            cr = or(),
            lr = function (e) {
              return Boolean(
                null == e ? void 0 : e.identityVerificationLoginTicket
              );
            },
            vr = function (e) {
              _n(e.identityVerificationLoginTicket);
            },
            gr = function (e) {
              Ge(!0);
              var t = En(),
                n = fr(t);
              if (n) {
                var r = sr(n),
                  i = dr(n);
                pr({
                  referralUrl: null != n ? n : "",
                  linkId: r,
                  linkType: i,
                  userDidLogIn: !0,
                });
              }
              Mt(t);
            },
            mr = function (e) {
              D(e.userId), j(e.challengeId);
            },
            yr = function (e) {
              if (
                (function (e) {
                  var t;
                  return Boolean(
                    null ===
                      (t = null == e ? void 0 : e.twoStepVerificationData) ||
                      void 0 === t
                      ? void 0
                      : t.ticket
                  );
                })(e)
              )
                !(function (e) {
                  var t = {
                    userId: e.user.id.toString(),
                    challengeId: e.twoStepVerificationData.ticket,
                  };
                  Ge(!1), mr(t), rn.current.abort();
                })(e);
              else if (lr(e)) vr(e);
              else {
                try {
                  null === a.AccountSwitcherService ||
                    void 0 === a.AccountSwitcherService ||
                    a.AccountSwitcherService.storeAccountSwitcherBlob(
                      e.accountBlob ? e.accountBlob : ""
                    );
                } catch (e) {
                  console.warn("Failed to save blob.", e);
                }
                try {
                  if (e.user.id)
                    (0, s.dataStores.authIntentDataStore.applyUserAuthIntent)(
                      e.user.id.toString()
                    );
                } catch (e) {
                  console.error("Error applying auth intent data:", e);
                }
                window.dispatchEvent(
                  new CustomEvent(He, {
                    detail: { userId: e.user.id.toString() },
                  })
                ),
                  gt({
                    credentialType: Oe,
                    isPasskeyLoginSupported: Qt,
                    isConditionalCreateSupported: tn,
                    isPasswordAutofilled: Me.current,
                    isSilentPasskeyUpgradeWebEnabled: On,
                  }),
                  gr(e.user.id.toString());
              }
            },
            br = function () {
              I(""), _("");
            },
            Sr = function (e) {
              var t,
                n = (function (e) {
                  var t = kn(e);
                  "object" == typeof e &&
                    kn(e.data).forEach(function (e) {
                      return t.push(e);
                    });
                  var n = t[0] || ",";
                  try {
                    var r = JSON.parse(n);
                    return {
                      dataExchange: r.dxBlob,
                      unifiedCaptchaId: r.unifiedCaptchaId,
                    };
                  } catch (e) {
                    var i = n.split(",");
                    return { unifiedCaptchaId: i[0], dataExchange: i[1] };
                  }
                })(e);
              gn(ke), _((t = n).unifiedCaptchaId), I(t.dataExchange);
            },
            Er = function (e) {
              var t,
                n = Ln(e);
              gn(je), D((t = n).userId), $(t.sessionId);
            },
            Ar = function () {
              gn(Le), un(!0);
            },
            _r = function () {
              br(), rt(!0), gn(Re);
            },
            xr = function () {
              Xe(d(k.MessageUnknownErrorTryAgain));
            },
            Cr = function () {
              fe({ users: [], invalidUsers: [] }), we(0), Ge(!1), Ur("");
            },
            kr = function (e) {
              br();
              var t = In(e);
              fe(t);
              var n = t.users
                .map(function (e) {
                  return e.id;
                })
                .join(",");
              ut(t.users.length, n, Oe);
            },
            Lr = function (e, t) {
              !(function (e, t, n, r) {
                var i = r
                    ? p.LoginVpcEmptyBlobRequiredError
                    : p.LoginEmptyBlobRequiredError,
                  o = r ? y : m,
                  u = r
                    ? Ye.context.accountSwitcherVpcLogin
                    : Ye.context.accountSwitcherLogin,
                  c = Ye.clientErrorTypes.logoutAllAccountSwitcherAccounts,
                  l = {
                    containerId: J,
                    origin: i,
                    localizedTitleText: e(h),
                    localizedBodyText: e(o),
                    localizedPrimaryButtonText: e(v),
                    localizedSecondaryButtonText: e(g),
                    primaryButtonCallback: function () {
                      return pn(void 0, void 0, void 0, function () {
                        var e;
                        return hn(this, function (n) {
                          switch (n.label) {
                            case 0:
                              if ((st(), !(e = Zt()))) return [3, 4];
                              n.label = 1;
                            case 1:
                              return (
                                n.trys.push([1, 3, , 4]),
                                [4, Ht({ encrypted_users_data_blob: e })]
                              );
                            case 2:
                              return n.sent(), [3, 4];
                            case 3:
                              return n.sent(), Gt(u, c), [3, 4];
                            case 4:
                              return Jt(), t(!1), [2];
                          }
                        });
                      });
                    },
                    secondaryButtonCallback: function () {
                      n();
                    },
                  };
                null === a.AccountSwitcherService ||
                  void 0 === a.AccountSwitcherService ||
                  a.AccountSwitcherService.renderBaseConfirmationModal(l);
              })(
                d,
                Br,
                function () {
                  e === x.EmailOtpSessionToken &&
                    (Cr(),
                    window.dispatchEvent(
                      new CustomEvent("onEnterEmailVerifyCodeError", {
                        detail: { errorMessage: "", shouldCloseModal: !0 },
                      })
                    ));
                },
                t
              ),
                Ge(!1);
            },
            Ir = function () {
              Xn(!0), Ge(!1);
            },
            Tr = function (e, t) {
              Ne(x.EmailOtpSessionToken), wt(e), _t(t);
            },
            Pr = function () {
              Ne(x.Username), wt(""), _t("");
            },
            Ur = function (e, t) {
              void 0 === t && (t = !1);
              var n = !1,
                r = e;
              (ge > 0 || t) && ((n = !0), (r = ""), Xe(e)),
                window.dispatchEvent(
                  new CustomEvent("onEnterEmailVerifyCodeError", {
                    detail: { errorMessage: r, shouldCloseModal: n },
                  })
                ),
                _t("");
            },
            Or = function () {
              Vt(Wt + 1), Dt(""), Ut("");
            },
            Rr = function (e, t) {
              void 0 === t && (t = !1), Xe(e), Or();
            },
            Nr = function (e) {
              void 0 === e && (e = ""), br(), we(0), Ur(e), Ge(!1);
            },
            zr = function (e) {
              return Gr(void 0, void 0, void 0, function () {
                var t, n, r, i;
                return Qr(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        o.trys.push([0, 3, , 4]),
                        [4, s.cryptoUtil.generateSecureAuthIntentV2()]
                      );
                    case 1:
                      return (
                        (t = o.sent()),
                        (n = Hr(Hr({}, e), { secureAuthenticationIntent: t })),
                        [4, Rt(n)]
                      );
                    case 2:
                      return (
                        (r = o.sent()),
                        n.secureAuthenticationIntent && gn(_e),
                        (null ===
                          (i =
                            null === s.dataStores || void 0 === s.dataStores
                              ? void 0
                              : s.dataStores.authIntentDataStore) ||
                        void 0 === i
                          ? void 0
                          : i.hasUnclaimedAuthIntent()) && gn(xe),
                        gn(Ce),
                        yr(r),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (function (e, t) {
                          if (
                            a.AccountIntegrityChallengeService.Generic.ChallengeError.matchAbandoned(
                              e
                            )
                          )
                            return Or(), Ge(!1), Ur(""), void we(0);
                          var n,
                            r = Cn(e);
                          switch (r) {
                            case te:
                              return void Sr(e);
                            case re:
                              return void Ar();
                            case pe:
                              return void Er(e);
                            case ae:
                              return void _r();
                            case he:
                              return void kr(e);
                            case me:
                              return void Lr(t, !1);
                            case ye:
                              return void Ir();
                            case be:
                              return void Lr(t, !0);
                            default:
                              br(),
                                Ge(!1),
                                gn(yn(r)),
                                (n = d(bn(r, t))),
                                t === x.EmailOtpSessionToken
                                  ? (tt(String(r)), Ur(n, r === ve))
                                  : t === x.Passkey
                                  ? Rr(n, r === ve)
                                  : Xe(n),
                                we(0);
                          }
                        })(o.sent(), e.ctype),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            },
            Br = function (e) {
              void 0 === e && (e = !0);
              var t = (function () {
                var e;
                if (
                  ((e =
                    Oe === x.AuthToken
                      ? { ctype: Oe, cvalue: ot, password: vt }
                      : Oe === x.EmailOtpSessionToken
                      ? { ctype: Oe, cvalue: bt, password: At }
                      : Oe === x.Passkey
                      ? { ctype: Oe, cvalue: Bt, password: Pt }
                      : {
                          ctype: nt ? x.Username : Oe,
                          cvalue: Te,
                          password: Be,
                        }),
                  P && R && ((e.captchaId = P), (e.captchaToken = R)),
                  G &&
                    ne &&
                    ((e.securityQuestionSessionId = G),
                    (e.securityQuestionRedemptionToken = ne),
                    $(""),
                    ie("")),
                  ar)
                ) {
                  var t =
                    null === a.AccountSwitcherService ||
                    void 0 === a.AccountSwitcherService
                      ? void 0
                      : a.AccountSwitcherService.getStoredAccountSwitcherBlob();
                  t && (e.accountBlob = t);
                }
                return e;
              })();
              if ((ge && (t.userId = ge), e)) {
                if (!Te || !Be)
                  return void Xe(d(k.MessageUsernameAndPasswordRequired));
                Je(), gn(Ae), dn && (gn(Ee), (dn = !1));
              }
              Ge(!0), zr(t);
            },
            Mr = function (e) {
              return (
                void 0 === e && (e = "conditional"),
                Gr(void 0, void 0, void 0, function () {
                  var t, n, r, i, o;
                  return Qr(this, function (a) {
                    switch (a.label) {
                      case 0:
                        (t = null), (a.label = 1);
                      case 1:
                        return a.trys.push([1, 3, , 4]), [4, Lt()];
                      case 2:
                        return (t = a.sent()), [3, 4];
                      case 3:
                        return a.sent(), [2];
                      case 4:
                        return (
                          a.trys.push([4, 6, , 7]),
                          [4, mn(t.authenticationOptions, e, rn.current.signal)]
                        );
                      case 5:
                        return (
                          (n = a.sent()),
                          (r =
                            s.fido2Util.formatCredentialAuthenticationResponseWeb(
                              n
                            )),
                          (function (e, t) {
                            Ne(x.Passkey), Ut(e), Dt(t);
                          })(t.sessionId, r),
                          [3, 7]
                        );
                      case 6:
                        return (
                          (i = a.sent()),
                          "AbortError" ===
                          (null === (o = i) || void 0 === o ? void 0 : o.name)
                            ? (rn.current = new AbortController())
                            : console.error(i),
                          [3, 7]
                        );
                      case 7:
                        return [2];
                    }
                  });
                })
              );
            };
          (0, t.useEffect)(function () {
            Gr(void 0, void 0, Promise, function () {
              var e, t, n;
              return Qr(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, Et(We)];
                  case 1:
                    return (
                      (e = r.sent()) &&
                        (kt(null !== (t = e.IsOtpEnabled) && void 0 !== t && t),
                        fn(
                          null !== (n = e.OtpCodeLength) && void 0 !== n ? n : 0
                        )),
                      [2]
                    );
                }
              });
            });
          }, []),
            (0, t.useEffect)(function () {
              ht(Ye.context.loginPage);
            }, []),
            (0, t.useEffect)(function () {
              try {
                (0,
                s.dataStores.authIntentDataStore.saveGameIntentFromReturnUrl)();
              } catch (e) {
                console.error("intent saving error: ", e);
              }
            }, []),
            (0, t.useEffect)(function () {
              Gr(void 0, void 0, void 0, function () {
                var e, t, n, r, i, o, a, u, c, l, s, f, d, p;
                return Qr(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return window.PublicKeyCredential
                        ? [
                            4,
                            Promise.all([
                              null ===
                                (l = (c = window.PublicKeyCredential)
                                  .isConditionalMediationAvailable) ||
                              void 0 === l
                                ? void 0
                                : l.call(c),
                              null ===
                                (f = (s = window.PublicKeyCredential)
                                  .isUserVerifyingPlatformAuthenticatorAvailable) ||
                              void 0 === f
                                ? void 0
                                : f.call(s),
                              null ===
                                (p = (d = window.PublicKeyCredential)
                                  .getClientCapabilities) || void 0 === p
                                ? void 0
                                : p.call(d),
                            ]),
                          ]
                        : [3, 2];
                    case 1:
                      return (
                        (e = h.sent()),
                        (t = e[0]),
                        (n = e[1]),
                        (r = e[2]),
                        (i = Boolean(
                          (null == r
                            ? void 0
                            : r.passkeyPlatformAuthenticator) ||
                            (null == r
                              ? void 0
                              : r.userVerifyingPlatformAuthenticator)
                        )),
                        (o = Boolean(t || n || i)),
                        (a = Boolean(t)),
                        $t(o),
                        Xt(a),
                        (u = Boolean(null == r ? void 0 : r.conditionalCreate)),
                        nn(u),
                        dt(o),
                        ft(a),
                        [3, 3]
                      );
                    case 2:
                      $t(!1), Xt(!1), nn(!1), dt(!1), ft(!1), (h.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }, []),
            (0, t.useEffect)(
              function () {
                It() && Yt && Mr("conditional");
              },
              [Wt, Yt]
            ),
            (0, t.useEffect)(
              function () {
                Pt && Bt && Br(!1);
              },
              [Bt, Pt]
            ),
            (0, t.useEffect)(
              function () {
                G && ne && Br(!1);
              },
              [G && ne]
            ),
            (0, t.useEffect)(
              function () {
                vt && ot && Br(!1);
              },
              [vt, ot]
            ),
            (0, t.useEffect)(
              function () {
                bt && At && Br(!1);
              },
              [bt, At]
            ),
            (0, t.useEffect)(
              function () {
                nt && Br(!1);
              },
              [nt]
            ),
            (0, t.useEffect)(
              function () {
                ge && Br(!1);
              },
              [ge]
            ),
            (0, t.useEffect)(
              function () {
                var e;
                if (!tr && ur && ar) {
                  var t =
                    null ===
                      (e =
                        null == er ? void 0 : er.usersAvailableForSwitching) ||
                    void 0 === e
                      ? void 0
                      : e
                          .map(function (e) {
                            return e.id;
                          })
                          .join(",");
                  lt(t);
                }
              },
              [er, tr, ar, ur]
            ),
            ir(u.authenticatedUser.isAuthenticated && ur && !ar);
          var Fr =
            !u.authenticatedUser.isAuthenticated &&
            !!(null ===
              (o = null == er ? void 0 : er.usersAvailableForSwitching) ||
            void 0 === o
              ? void 0
              : o.length) &&
            Wn &&
            !cr;
          if (tr || w) return r().createElement(l.Loading, null);
          var jr = r().createElement(
              "div",
              { id: "login-base", className: "login-base-container" },
              Fr &&
                r().createElement(Yn, {
                  containerId: X,
                  titleText: d(k.HeadingYouHaveLoggedOut),
                  helpText: d(k.LabelChooseAccountToUse),
                  onAccountSwitched: function () {
                    S(!0), jt();
                  },
                  handleAddAccount: function () {
                    Gn(!1);
                  },
                  removeInvalidActiveUser: !0,
                  translate: d,
                  loggedInUsers: er,
                }),
              !Fr &&
                r().createElement(
                  "div",
                  { className: "section-content login-section" },
                  r().createElement(
                    "h1",
                    { className: "login-header" },
                    (function (e, t, n) {
                      return t(
                        n || e ? k.HeadingAddAccount : k.HeadingLoginRoblox
                      );
                    })(
                      u.authenticatedUser.isAuthenticated,
                      d,
                      !!(null ===
                        (c =
                          null == er
                            ? void 0
                            : er.usersAvailableForSwitching) || void 0 === c
                        ? void 0
                        : c.length)
                    )
                  ),
                  r().createElement(Tn, {
                    captchaId: P,
                    captchaToken: R,
                    credentialValue: Te,
                    password: Be,
                    isLoading: qe,
                    errorMsg: $e,
                    translate: d,
                    onFormSubmit: Br,
                    onCredentialValueChange: function (e) {
                      Xe(""), Pe(e), Ne(wn(e));
                    },
                    onPasswordChange: function (e) {
                      Xe(""), De(e.target.value);
                      var t = zt(e.nativeEvent);
                      Me.current = t === Ke.Autofilled;
                    },
                    isLoginFormDisabled:
                      null !==
                        (f = null == er ? void 0 : er.isAccountLimitReached) &&
                      void 0 !== f &&
                      f,
                  }),
                  r().createElement(qn, { credentialValue: Te, translate: d }),
                  r().createElement(Nn, {
                    onCrossDeviceLoginCodeValidated: function (e) {
                      Ge(!0), Ne(x.AuthToken), at(e.code), mt(e.privateKey);
                    },
                    isOtpLoginEnabled: Ct,
                    openOtpLoginModal: function () {
                      if ((et(), a.EmailVerifyCodeModalService)) {
                        var e = {
                          containerId: Y,
                          codeLength: sn,
                          onEmailCodeEntered: Tr,
                          onModalAbandoned: Pr,
                          enterEmailTitle: d(k.LabelGetOneTimeCode),
                          enterEmailDescription: d(
                            k.DescriptionGetOneTimeCodeHelp
                          ),
                          enterCodeTitle: d(k.LabelEnterOneTimeCode),
                          enterCodeDescription: d(
                            k.DescriptionEnterOneTimeCodeHelp
                          ),
                          origin: We,
                          translate: d,
                          isChangeEmailEnabled: Pn,
                        };
                        a.EmailVerifyCodeModalService.renderEmailVerifyCodeModal(
                          e
                        );
                      }
                    },
                    showPasskeyLoginButton: !1,
                    openPasskeyLoginFlow: Mr,
                    isOneTimeCodeDesignUpdated: Pn,
                    translate: d,
                  }),
                  r().createElement("div", {
                    id: "crossDeviceLoginDisplayCodeModal-container",
                  }),
                  r().createElement("div", { id: Y }),
                  r().createElement("div", {
                    id: "account-switcher-confirmation-modal-container",
                  }),
                  an &&
                    r().createElement(hr, {
                      credentialValue: Te,
                      translate: d,
                    }),
                  r().createElement(Vn, null)
                ),
              A &&
                L &&
                r().createElement(Un, {
                  containerId: Q,
                  actionType:
                    a.AccountIntegrityChallengeService.Captcha.ActionType.Login,
                  unifiedCaptchaId: A,
                  dataExchange: L,
                  onCaptchaChallengeCompleted: function (e) {
                    U(e.captchaId), N(e.captchaToken);
                  },
                  onCaptchaChallengeInvalidated: function (e) {
                    var t = (function (e) {
                        var t = a.CaptchaConstants.errorCodes,
                          n = t.failedToLoadProviderScript,
                          r = t.failedToVerify,
                          i = ce,
                          o = le,
                          u = se;
                        switch (e) {
                          case n:
                            return i;
                          case r:
                            return o;
                          default:
                            return u;
                        }
                      })(e.errorCode),
                      n = wn(Te),
                      r = d(bn(t, n));
                    Xe(r), Nr(r);
                  },
                  onCaptchaChallengeAbandoned: function () {
                    Nr();
                  },
                  onUnknownError: xr,
                }),
              B &&
                G &&
                r().createElement(Fn, {
                  userId: B,
                  sessionId: G,
                  onSecurityQuestionsChallengeCompleted: function (e) {
                    ie(e.redemptionToken);
                  },
                  onSecurityQuestionsChallengeInvalidated: function (e) {
                    $(""), ie(""), Br(!1);
                  },
                  onSecurityQuestionsChallengeAbandoned: function (e) {
                    D(""), $(""), Nr();
                  },
                  onUnknownError: xr,
                }),
              B &&
                F &&
                r().createElement(Rn, {
                  userId: B,
                  challengeId: F,
                  on2svChallengeCompleted: function (e) {
                    return Gr(void 0, void 0, void 0, function () {
                      var t, n, r, i;
                      return Qr(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return (
                              o.trys.push([0, 3, , 4]),
                              (t = {
                                challengeId: F,
                                verificationToken: e.verificationToken,
                                rememberDevice: e.rememberDevice,
                                accountBlob:
                                  null === a.AccountSwitcherService ||
                                  void 0 === a.AccountSwitcherService
                                    ? void 0
                                    : a.AccountSwitcherService.getStoredAccountSwitcherBlob(),
                              }),
                              [4, s.cryptoUtil.generateSecureAuthIntentV2()]
                            );
                          case 1:
                            return (
                              (n = o.sent()),
                              (r = Hr(Hr({}, t), {
                                secureAuthenticationIntent: n,
                              })),
                              [4, Ot(B, r)]
                            );
                          case 2:
                            return (
                              (i = o.sent()),
                              r.secureAuthenticationIntent && gn(_e),
                              lr(i)
                                ? vr(i)
                                : (null === a.AccountSwitcherService ||
                                    void 0 === a.AccountSwitcherService ||
                                    a.AccountSwitcherService.storeAccountSwitcherBlob(
                                      i.accountBlob ? i.accountBlob : ""
                                    ),
                                  window.dispatchEvent(
                                    new CustomEvent(He, {
                                      detail: { userId: B },
                                    })
                                  ),
                                  gt({
                                    credentialType: Oe,
                                    isPasskeyLoginSupported: Qt,
                                    isConditionalCreateSupported: tn,
                                    isPasswordAutofilled: Me.current,
                                    isSilentPasskeyUpgradeWebEnabled: On,
                                  }),
                                  gr()),
                              [3, 4]
                            );
                          case 3:
                            return o.sent(), xr(), [3, 4];
                          case 4:
                            return [2];
                        }
                      });
                    });
                  },
                  on2svChallengeInvalidated: function (e) {
                    q(V + 1);
                    var t = d(k.ResponseVerificationError);
                    Xe(t), V < Se ? Br(!1) : Nr(t);
                  },
                  on2svChallengeAbandoned: function (e) {
                    Or(), D(""), j(""), Nr();
                  },
                  onUnknownError: xr,
                }),
              r().createElement(Dn, {
                identityVerificationLoginTicket: Sn,
                translate: d,
              }),
              ue.users.length > 0 &&
                r().createElement(Hn, {
                  containerId: K,
                  users: ue.users,
                  invalidUsers: [],
                  onAccountSelection: function (e) {
                    fe({ users: [], invalidUsers: [] }), we(e), ct(Oe, e);
                  },
                  onAccountSelectorAbandoned: Cr,
                  titleText: d(k.LabelAccountSelector),
                  helpText: An(Oe, d),
                  translate: d,
                }),
              r().createElement(Jn, {
                origin: p.LoginAccountLimit,
                containerId: Z,
                handleRedirectHome: function () {
                  S(!0), Mt(En());
                },
                hasMaxLoggedInAccountsSignupError: $n,
                isAccountLimitReached: er.isAccountLimitReached,
                translate: d,
                isParentUser: cr,
              })
            ),
            Wr = r().createElement(
              "div",
              null,
              r().createElement(Dr, {
                shouldDisplayBrazilRatingLogo: cn,
                shouldDisplayItalyRatingLogo: !1,
                translate: d,
              })
            );
          return Bn && Mn
            ? r().createElement(
                "div",
                { id: "background-image", className: "background-image " + Mn },
                r().createElement(
                  "div",
                  { className: "login-content-wrapper" },
                  jr,
                  Wr
                )
              )
            : r().createElement(r().Fragment, null, jr, Wr);
        }, mt),
        Kr = TanstackQuery,
        Yr = n(4452),
        Xr = n.n(Yr),
        Zr = function (e) {
          var t = e.left,
            n = e.right,
            i = e.className,
            o = e.style,
            a = e.leftClassName,
            u = e.rightClassName;
          return r().createElement(
            "div",
            { className: Xr()("flex", i), style: o },
            r().createElement(
              "div",
              {
                className: Xr()(
                  "grow basis-0",
                  "large:min-width-[calc(var(--breakpoint-medium)/2)] max-width-[calc(var(--breakpoint-medium)/2)]",
                  "xlarge:max-width-[calc(var(--breakpoint-xlarge)/3)]",
                  a
                ),
              },
              t
            ),
            r().createElement(
              "div",
              {
                className: Xr()(
                  "hidden large:block grow-2 shrink-0 basis-0",
                  u
                ),
              },
              n
            )
          );
        },
        Jr = function () {
          return (
            (Jr =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Jr.apply(this, arguments)
          );
        };
      function ei(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function ti(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
              e[t] && (n = ti(e[t])) && (r && (r += " "), (r += n));
          } else for (n in e) e[n] && (r && (r += " "), (r += n));
        return r;
      }
      var ni = function () {
          for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
            (e = arguments[n]) && (t = ti(e)) && (r && (r += " "), (r += t));
          return r;
        },
        ri =
          "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
        ii = function () {
          return r().createElement("div", {
            role: "presentation",
            className:
              "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none",
          });
        },
        oi = "opacity-[0.5]";
      function ai(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
          (i.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(i, r.firstChild)
              : r.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : i.appendChild(document.createTextNode(e));
        }
      }
      ai(
        "@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}"
      );
      var ui = function (e) {
          var t = e.width,
            n = e.height;
          return r().createElement(
            "svg",
            {
              className: "foundation-web-loading-spinner",
              width: t,
              height: n,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r().createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "currentColor",
              d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z",
            })
          );
        },
        ci = { Large: 24, Medium: 20, Small: 16, XSmall: 12 },
        li = {
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
        si = {
          Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
          Standard: ["bg-action-standard", "content-action-standard"],
          SoftEmphasis: [
            "bg-action-soft-emphasis",
            "content-action-soft-emphasis",
          ],
          ActionUtility: ["bg-action-subtle", "content-action-standard"],
          Alert: ["bg-action-alert", "content-action-alert"],
        },
        fi = {
          Emphasis: ["bg-action-standard", "content-action-standard"],
          Standard: ["bg-action-standard", "content-action-standard"],
          SoftEmphasis: ["bg-action-standard", "content-action-standard"],
          ActionUtility: ["bg-action-subtle", "content-action-standard"],
          Alert: ["bg-action-standard", "content-action-standard"],
        },
        di = (0, t.forwardRef)(function (e, t) {
          var n = e.children,
            i = e.className,
            o = e.style,
            a = e.isDisabled,
            u = void 0 !== a && a,
            c = e.isLoading,
            l = void 0 !== c && c,
            s = e.size,
            f = void 0 === s ? "Large" : s,
            d = e.variant,
            p = void 0 === d ? "Emphasis" : d,
            h = ei(e, [
              "children",
              "className",
              "style",
              "isDisabled",
              "isLoading",
              "size",
              "variant",
            ]),
            v = ni(
              "foundation-web-button",
              u ? oi : [ri, "cursor-pointer"],
              "relative flex items-center justify-center stroke-none padding-y-none select-none",
              li[f],
              u ? fi[p] : si[p],
              i
            ),
            g = r().createElement(
              r().Fragment,
              null,
              r().createElement(ii, null),
              l &&
                r().createElement(
                  "div",
                  { "aria-hidden": "true", className: "absolute flex" },
                  r().createElement(ui, { width: ci[f], height: ci[f] })
                ),
              r().createElement(
                "span",
                {
                  className: ni(
                    "padding-y-xsmall text-truncate-end text-no-wrap",
                    l && "invisible"
                  ),
                },
                n
              )
            ),
            m = Jr({ textDecoration: "none" }, o);
          if ("a" === h.as) {
            h.as;
            var y = h.href,
              b = ei(h, ["as", "href"]);
            return r().createElement(
              "a",
              Jr({ ref: t }, b, {
                "aria-disabled": u,
                href: u ? void 0 : y,
                className: v,
                style: m,
              }),
              g
            );
          }
          h.as;
          var w = ei(h, ["as"]);
          return r().createElement(
            "button",
            Jr({ ref: t, type: "button" }, w, {
              disabled: u,
              className: v,
              style: m,
            }),
            g
          );
        }),
        pi = (0, t.forwardRef)(function (e, t) {
          var n,
            i = e.className,
            o = e.style,
            a = e.orientation,
            u = void 0 === a ? "horizontal" : a,
            c = e.variant,
            l = void 0 === c ? "Standard" : c,
            s = ei(e, ["className", "style", "orientation", "variant"]),
            f = "vertical" === u;
          n = f
            ? {
                height: "100%",
                width: 0,
                borderLeftWidth: "var(--stroke-standard)",
                borderTopWidth: 0,
              }
            : "Thick" === l
            ? {
                height: "var(--size-250)",
                borderTop: "var(--stroke-standard)",
                borderLeftWidth: 0,
                background:
                  "var(--color-common-heavydivider, rgba(0, 0, 0, 0.50))",
              }
            : {
                height: 0,
                borderTopWidth: "var(--stroke-standard)",
                borderLeftWidth: 0,
              };
          var d = {};
          return (
            f || "Inset" !== l
              ? f || "InsetLeft" !== l
                ? f ||
                  "InsetRight" !== l ||
                  (d = { marginRight: "var(--padding-xlarge)" })
                : (d = { marginLeft: "var(--padding-xlarge)" })
              : (d = {
                  marginLeft: "var(--padding-xlarge)",
                  marginRight: "var(--padding-xlarge)",
                }),
            r().createElement(
              "div",
              Jr({ ref: t }, s, {
                role: "separator",
                "data-orientation": u,
                "aria-orientation": u,
                style: Jr(
                  Jr(
                    Jr(
                      {
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                        boxSizing: "border-box",
                        borderStyle: "solid",
                      },
                      n
                    ),
                    d
                  ),
                  o
                ),
                className: ni("stroke-default self-stretch", i),
              })
            )
          );
        });
      pi.displayName = "Divider";
      var hi = {
          XSmall: "size-[var(--icon-size-xsmall)]",
          Small: "size-[var(--icon-size-small)]",
          Medium: "size-[var(--icon-size-medium)]",
          Large: "size-[var(--icon-size-large)]",
          XLarge: "size-[var(--icon-size-xlarge)]",
        },
        vi = r().forwardRef(function (e, t) {
          var n = e.name,
            i = e.size,
            o = void 0 === i ? "Medium" : i,
            a = e.className;
          e.children;
          var u = ei(e, ["name", "size", "className", "children"]);
          return r().createElement(
            "span",
            Jr(
              {
                ref: t,
                role: "presentation",
                className: ni("grow-0 shrink-0 basis-auto icon", n, hi[o], a),
              },
              u
            )
          );
        });
      vi.displayName = "Icon";
      var gi = 0;
      ai(
        ".bg-common-backdrop{background-color:var(--color-common-backdrop)}:root{--alpha-color-shadow-subtle:rgba(0,0,0,.08)}.shadow-transient-high{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-400) var(--size-800) -1px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-1200) var(--size-1400) -1.5px var(--alpha-color-shadow-subtle)}.shadow-transient-low{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle)}.foundation-web-portal-zindex{z-index:1050}.fui-future-shadow-affixed-low{box-shadow:0 0 var(--size-100) 0 var(--fui-future-alpha-color-shadow-subtle),0 0 var(--size-500) 0 var(--fui-future-alpha-color-shadow-subtle)}@media (prefers-color-scheme:dark){:root{--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}}.light-theme,:root{--alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-system-progress:#335fff}.dark-theme{--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}.system-theme{--alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-system-progress:#335fff}@media (prefers-color-scheme:dark){.system-theme{--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}:root .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}}:is(:root,.light-theme) .stroke-contrast-alpha{border-color:rgba(27,37,75,.5)}.dark-theme .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}.system-theme .stroke-contrast-alpha{border-color:rgba(27,37,75,.5)}@media (prefers-color-scheme:dark){.system-theme .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}}"
      );
      var mi = {
          XSmall: "padding-x-small",
          Small: "padding-x-medium",
          Medium: "padding-x-medium",
          Large: "padding-x-medium",
        },
        yi = {
          XSmall: "gap-x-xsmall",
          Small: "gap-x-small",
          Medium: "gap-x-small",
          Large: "gap-x-small",
        },
        bi = {
          XSmall: "height-600",
          Small: "height-800",
          Medium: "height-1000",
          Large: "height-1200",
        },
        wi = {
          XSmall: "radius-small",
          Small: "radius-medium",
          Medium: "radius-medium",
          Large: "radius-medium",
        },
        Si = {
          XSmall: "text-title-small",
          Small: "text-title-small",
          Medium: "text-title-medium",
          Large: "text-title-large",
        },
        Ei = {
          XSmall: ["text-body-small", "placeholder:text-body-small"],
          Small: ["text-body-small", "placeholder:text-body-small"],
          Medium: ["text-body-medium", "placeholder:text-body-medium"],
          Large: ["text-body-large", "placeholder:text-body-large"],
        },
        Ai = (0, t.forwardRef)(function (e, n) {
          var i,
            o = e.label,
            a = e.leadingIconName,
            u = e.trailingIconName,
            c = e.leadingIconNode,
            l = e.trailingIconNode,
            s = e.hasError,
            f = e.error,
            d = e.helperText,
            p = e.size,
            h = e.isRequired,
            v = e.isDisabled,
            g = e.className,
            m = e.style,
            y = e.inputContainerClassName,
            b = e.inputContainerClassStyle,
            w = e.id,
            S = ei(e, [
              "label",
              "leadingIconName",
              "trailingIconName",
              "leadingIconNode",
              "trailingIconNode",
              "hasError",
              "error",
              "helperText",
              "size",
              "isRequired",
              "isDisabled",
              "className",
              "style",
              "inputContainerClassName",
              "inputContainerClassStyle",
              "id",
            ]),
            E = (function (e) {
              void 0 === e && (e = ":r");
              var n = (0, t.useRef)();
              return (
                n.current || ((gi += 1), (n.current = "".concat(e).concat(gi))),
                n.current
              );
            })(),
            A = w || E,
            _ = "".concat(A, "-description"),
            x = null != p ? p : "Large",
            C = s || Boolean(f),
            k = f || d,
            L = (0, t.useMemo)(
              function () {
                return a
                  ? r().createElement(vi, {
                      name: a,
                      size: x,
                      className: "content-emphasis",
                      "data-testid": "text-input-leading-icon",
                    })
                  : c;
              },
              [a, c, x]
            ),
            I = (0, t.useMemo)(
              function () {
                return u
                  ? r().createElement(vi, {
                      name: u,
                      size: x,
                      className: "content-emphasis",
                      "data-testid": "text-input-trailing-icon",
                    })
                  : l;
              },
              [x, u, l]
            );
          return r().createElement(
            "div",
            {
              "data-testid": "text-input-wrapper",
              className: ni(
                "flex width-full flex-col gap-small ".concat(g),
                ((i = {}), (i[oi] = v), i)
              ),
              style: m,
            },
            o &&
              r().createElement(
                "label",
                { htmlFor: A, className: ni(Si[x], "content-emphasis") },
                o,
                h &&
                  r().createElement(
                    r().Fragment,
                    null,
                    " ",
                    r().createElement(
                      "span",
                      { className: "content-default" },
                      "*"
                    )
                  )
              ),
            r().createElement(
              "div",
              {
                "data-testid": "text-input-container",
                className: ni(
                  "flex items-center width-full stroke-standard focus-within:outline-focus",
                  y,
                  bi[x],
                  wi[x],
                  mi[x],
                  yi[x],
                  { "stroke-system-alert": C, "stroke-contrast-alpha": !C }
                ),
                style: b,
              },
              L,
              r().createElement(
                "input",
                Jr(
                  {
                    type: "text",
                    id: A,
                    ref: n,
                    className: ni(
                      "width-full padding-none bg-none stroke-none outline-none content-emphasis placeholder:content-muted",
                      Ei[x]
                    ),
                    style: { appearance: "none" },
                    "aria-invalid": C,
                    "aria-describedby": k ? _ : void 0,
                    required: h,
                  },
                  S,
                  { disabled: v }
                )
              ),
              I
            ),
            k &&
              r().createElement(
                "span",
                {
                  id: _,
                  className: ni("text-caption-small", {
                    "content-system-alert": C,
                    "content-default": !C,
                  }),
                },
                k
              )
          );
        });
      Ai.displayName = "TextInput";
      var _i = function () {
          return (
            (_i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            _i.apply(this, arguments)
          );
        },
        xi = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        Ci = (0, t.forwardRef)(function (e, t) {
          var n = e.reserveErrorSpace,
            i = void 0 === n || n,
            o = e.isSignup,
            a = void 0 === o || o,
            u = e.onChange,
            c = xi(e, ["reserveErrorSpace", "isSignup", "onChange"]),
            l = a ? 21 : 320;
          return r().createElement(
            "div",
            { className: "flex flex-col gap-small" },
            r().createElement(
              Ai,
              _i(
                {
                  size: "Medium",
                  minLength: 3,
                  required: !0,
                  autoComplete: "username",
                },
                c,
                {
                  maxLength: l,
                  ref: t,
                  onChange: function (e) {
                    return u(e.target.value);
                  },
                  onFocus: c.onFocus,
                  onBlur: c.onBlur,
                }
              )
            ),
            !i || c.error || c.helperText
              ? null
              : r().createElement("span", { className: "height-350" })
          );
        });
      Ci.displayName = "UsernameInput";
      var ki = Ci,
        Li = {
          Large: "size-1200",
          Medium: "size-1000",
          Small: "size-800",
          XSmall: "size-600",
        },
        Ii = {
          XSmall: "size-300",
          Small: "size-400",
          Medium: "size-500",
          Large: "size-500",
        },
        Ti = {
          Large: { circular: "radius-circle", square: "radius-medium" },
          Medium: { circular: "radius-circle", square: "radius-medium" },
          Small: { circular: "radius-circle", square: "radius-medium" },
          XSmall: { circular: "radius-circle", square: "radius-small" },
        },
        Pi = {
          Emphasis: "bg-action-emphasis",
          Standard: "bg-action-standard",
          Alert: "bg-action-alert",
          Utility: "bg-action-link",
          OverMedia: "bg-over-media-0",
        },
        Ui = {
          Emphasis: "bg-action-standard",
          Standard: "bg-action-standard",
          Alert: "bg-action-standard",
          Utility: "bg-action-link",
          OverMedia: "bg-over-media-0",
        },
        Oi = {
          Emphasis: "content-action-emphasis",
          Standard: "content-action-standard",
          Alert: "content-action-alert",
          Utility: "content-emphasis",
          OverMedia: "content-emphasis",
        },
        Ri = {
          Emphasis: "content-action-standard",
          Standard: "content-action-standard",
          Alert: "content-action-standard",
          Utility: "content-emphasis",
          OverMedia: "content-emphasis",
        },
        Ni = (0, t.forwardRef)(function (e, t) {
          var n = e.className,
            i = e.icon,
            o = e.ariaLabel,
            a = e.isDisabled,
            u = void 0 !== a && a,
            c = e.isCircular,
            l = void 0 !== c && c,
            s = e.size,
            f = void 0 === s ? "Large" : s,
            d = e.variant,
            p = void 0 === d ? "Emphasis" : d,
            h = ei(e, [
              "className",
              "icon",
              "ariaLabel",
              "isDisabled",
              "isCircular",
              "size",
              "variant",
            ]),
            v = ni(
              "foundation-web-icon-button",
              u ? oi : [ri, "cursor-pointer"],
              "relative flex items-center justify-center padding-none stroke-none select-none",
              Li[f],
              Ti[f][l ? "circular" : "square"],
              u ? Ui[p] : Pi[p],
              n
            ),
            g = r().createElement(
              r().Fragment,
              null,
              r().createElement(ii, null),
              r().createElement("span", {
                className: ni("icon", i, Ii[f], u ? Ri[p] : Oi[p]),
              })
            );
          if ("a" === h.as) {
            h.as;
            var m = h.href,
              y = ei(h, ["as", "href"]);
            return r().createElement(
              "a",
              Jr({ ref: t }, y, {
                "aria-label": o,
                "aria-disabled": u,
                href: u ? void 0 : m,
                className: v,
              }),
              g
            );
          }
          h.as;
          var b = ei(h, ["as"]);
          return r().createElement(
            "button",
            Jr({ ref: t, type: "button" }, b, {
              "aria-label": o,
              disabled: u,
              className: v,
            }),
            g
          );
        }),
        zi = function () {
          return (
            (zi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            zi.apply(this, arguments)
          );
        },
        Bi = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        Di = (0, t.forwardRef)(function (e, n) {
          var i = e.reserveErrorSpace,
            o = void 0 === i || i,
            a = e.onChange,
            u = e.onShowPassword,
            c = e.onHidePassword,
            l = Bi(e, [
              "reserveErrorSpace",
              "onChange",
              "onShowPassword",
              "onHidePassword",
            ]),
            s = (0, t.useState)(!1),
            f = s[0],
            d = s[1];
          return r().createElement(
            "div",
            { className: "flex flex-col gap-small" },
            r().createElement(
              Ai,
              zi(
                {
                  size: "Medium",
                  minLength: 8,
                  maxLength: 200,
                  required: !0,
                  autoComplete: "new-password",
                },
                l,
                {
                  ref: n,
                  type: f ? "text" : "password",
                  className: "relative",
                  trailingIconNode: r().createElement(
                    r().Fragment,
                    null,
                    r().createElement("div", {
                      className: "width-600 grow-0 shrink-0 basis-auto",
                    }),
                    r().createElement(
                      "div",
                      { className: "absolute ltr:right-[0] rtl:left-[0]" },
                      r().createElement(Ni, {
                        size: "Medium",
                        variant: "Utility",
                        icon: f ? "icon-regular-eye-slash" : "icon-regular-eye",
                        ariaLabel: f ? "Hide Password" : "Show Password",
                        onClick: function () {
                          var e = !f;
                          d(e), e ? null == u || u() : null == c || c();
                        },
                      })
                    )
                  ),
                  onChange: function (e) {
                    return a(e.target.value);
                  },
                  onFocus: l.onFocus,
                  onBlur: l.onBlur,
                }
              )
            ),
            !o || l.error || l.helperText
              ? null
              : r().createElement("span", { className: "height-350" })
          );
        });
      Di.displayName = "PasswordInput";
      var Mi = Di;
      function Fi(e) {
        return (
          (Fi =
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
          Fi(e)
        );
      }
      var ji = function (e) {
          var t,
            n = new Set(),
            r = function (e, r) {
              var i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                var o = t;
                (t = (null != r ? r : "object" !== Fi(i) || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach(function (e) {
                    return e(t, o);
                  });
              }
            },
            i = function () {
              return t;
            },
            o = {
              setState: r,
              getState: i,
              getInitialState: function () {
                return a;
              },
              subscribe: function (e) {
                return (
                  n.add(e),
                  function () {
                    return n.delete(e);
                  }
                );
              },
              destroy: function () {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            },
            a = (t = e(r, i, o));
          return o;
        },
        Wi = function (e) {
          return e ? ji(e) : ji;
        },
        Vi = n(5390),
        qi = t.useDebugValue,
        Hi = Vi.useSyncExternalStoreWithSelector,
        Gi = !1,
        Qi = function (e) {
          return e;
        };
      var $i = function (e) {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          var t = "function" == typeof e ? Wi(e) : e,
            n = function (e, n) {
              return (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Qi,
                  n = arguments.length > 2 ? arguments[2] : void 0;
                n &&
                  !Gi &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (Gi = !0));
                var r = Hi(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getInitialState,
                  t,
                  n
                );
                return qi(r), r;
              })(t, e, n);
            };
          return Object.assign(n, t), n;
        },
        Ki = function (e) {
          return e ? $i(e) : $i;
        },
        Yi = Ki()(function () {
          return { step: "loading", identifier: "", password: "" };
        }),
        Xi = function (e) {
          return Yi.setState({ identifier: e });
        },
        Zi = function (e) {
          return Yi.setState({ password: e });
        },
        Ji = function (e) {
          var t = e.switchAccount;
          return Yi.setState({ step: "login", switchAccount: t });
        },
        eo = function (e) {
          return Yi.setState({ step: "login", errorMessage: e });
        },
        to = function () {
          return (
            (to =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            to.apply(this, arguments)
          );
        },
        no = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        ro = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        io = "auth-error-modal-container",
        oo = function (e) {
          return "login" === e ? h : b;
        },
        ao = function (e) {
          return "login" === e ? v : w;
        },
        uo = function (e) {
          return "login" === e ? g : S;
        },
        co = function (e, t) {
          var n = {
            containerId: io,
            origin: p.SignupAccountLimit,
            localizedTitleText: e(d.HeadingAccountLimitReached),
            localizedBodyText: e(d.LabelAccountLimitReached),
            localizedPrimaryButtonText: e(d.ActionOK),
            primaryButtonCallback: t,
            localizedSecondaryButtonText: e(f.ActionLogOutAllAccounts),
            secondaryButtonCallback: function () {
              return no(void 0, void 0, void 0, function () {
                var e;
                return ro(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!(e = Zt())) return [3, 4];
                      t.label = 1;
                    case 1:
                      return (
                        t.trys.push([1, 3, , 4]),
                        [4, Ht({ encrypted_users_data_blob: e })]
                      );
                    case 2:
                      return t.sent(), [3, 4];
                    case 3:
                      return (
                        t.sent(),
                        Gt(
                          Ye.context.accountSwitcherLimitError,
                          Ye.clientErrorTypes.logoutAllAccountSwitcherAccounts
                        ),
                        [3, 4]
                      );
                    case 4:
                      Jt();
                      try {
                        null === a.NavigationService ||
                          void 0 === a.NavigationService ||
                          a.NavigationService.logoutAndRedirect();
                      } catch (e) {
                        window.location.reload();
                      }
                      return [2];
                  }
                });
              });
            },
            isModalDismissable: !1,
          };
          null === a.AccountSwitcherService ||
            void 0 === a.AccountSwitcherService ||
            a.AccountSwitcherService.renderBaseConfirmationModal(n);
        },
        lo = function (e, t, n) {
          var r, i, o;
          void 0 === n && (n = {});
          var u = null !== (r = n.isVPCParentFocused) && void 0 !== r && r,
            c = null !== (i = n.origin) && void 0 !== i ? i : "signup",
            l = null !== (o = n.containerId) && void 0 !== o ? o : io,
            s = (function (e, t) {
              return "login" === t
                ? e
                  ? p.LoginVpcEmptyBlobRequiredError
                  : p.LoginEmptyBlobRequiredError
                : e
                ? p.SignupVpcEmptyBlobRequiredError
                : p.SignupEmptyBlobRequiredError;
            })(u, c),
            f = e(
              (function (e, t) {
                return "login" === t ? (e ? y : m) : e ? A : E;
              })(u, c)
            ),
            d = (function (e, t) {
              return "login" === t
                ? e
                  ? Ye.context.accountSwitcherVpcLogin
                  : Ye.context.accountSwitcherLogin
                : e
                ? Ye.context.accountSwitcherVpcSignup
                : Ye.context.accountSwitcherSignup;
            })(u, c),
            h = to(
              to(
                {
                  containerId: l,
                  origin: s,
                  localizedTitleText: e(oo(c)),
                  localizedBodyText: f,
                  localizedPrimaryButtonText: e(ao(c)),
                  primaryButtonCallback: function () {
                    return no(void 0, void 0, void 0, function () {
                      var e;
                      return ro(this, function (n) {
                        switch (n.label) {
                          case 0:
                            if (!(e = Zt())) return [3, 4];
                            n.label = 1;
                          case 1:
                            return (
                              n.trys.push([1, 3, , 4]),
                              [4, Ht({ encrypted_users_data_blob: e })]
                            );
                          case 2:
                            return n.sent(), [3, 4];
                          case 3:
                            return (
                              n.sent(),
                              Gt(
                                d,
                                Ye.clientErrorTypes
                                  .logoutAllAccountSwitcherAccounts
                              ),
                              [3, 4]
                            );
                          case 4:
                            return Jt(), t(), [2];
                        }
                      });
                    });
                  },
                  localizedSecondaryButtonText: e(uo(c)),
                },
                n.onCancel ? { secondaryButtonCallback: n.onCancel } : {}
              ),
              { isModalDismissable: !1 }
            );
          null === a.AccountSwitcherService ||
            void 0 === a.AccountSwitcherService ||
            a.AccountSwitcherService.renderBaseConfirmationModal(h);
        },
        so = function () {
          return (
            (so =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            so.apply(this, arguments)
          );
        },
        fo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        po = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        ho = function (e, t) {
          Yi.setState({ step: "finish", errorMessage: void 0 });
          try {
            null === a.AccountSwitcherService ||
              void 0 === a.AccountSwitcherService ||
              a.AccountSwitcherService.storeAccountSwitcherBlob(
                null != t ? t : ""
              );
          } catch (e) {
            console.error("Failed to save blob.", e);
          }
          try {
            s.dataStores.authIntentDataStore.applyUserAuthIntent(e);
          } catch (e) {
            console.error("Error applying auth intent data:", e);
          }
          window.dispatchEvent(new CustomEvent(He, { detail: { userId: e } })),
            (function () {
              var e = En(),
                t = fr(e);
              if (t) {
                var n = sr(t),
                  r = dr(t);
                pr({
                  referralUrl: null != t ? t : "",
                  linkId: n,
                  linkType: r,
                  userDidLogIn: !0,
                });
              }
              Mt(e);
            })();
        },
        vo = function (e) {
          var t = e.credential,
            n = e.userId,
            r = e.securityQuestionSessionId,
            i = e.securityQuestionRedemptionToken;
          return fo(void 0, void 0, Promise, function () {
            var e, o, u, c, l;
            return po(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (e = t.type),
                    (o = t.value),
                    (u = t.password),
                    (c = {
                      ctype: e,
                      cvalue: o,
                      password: u,
                      userId: n,
                      securityQuestionSessionId: r,
                      securityQuestionRedemptionToken: i,
                    }),
                    [4, tn()]
                  );
                case 1:
                  return (
                    s.sent() &&
                      (l =
                        null === a.AccountSwitcherService ||
                        void 0 === a.AccountSwitcherService
                          ? void 0
                          : a.AccountSwitcherService.getStoredAccountSwitcherBlob()) &&
                      (c.accountBlob = l),
                    [2, c]
                  );
              }
            });
          });
        },
        go = function (e, t, n, r) {
          lo(e, r, {
            origin: "login",
            isVPCParentFocused: n,
            onCancel: function () {
              eo();
            },
          });
        },
        mo = function (e, t, n, r) {
          var i = Cn(n);
          switch (i) {
            case re:
              return (
                gn(Le),
                void (function (e) {
                  var t = e.credential;
                  Yi.setState({ step: "security-notification", credential: t });
                })({ credential: t })
              );
            case pe:
              var o = Ln(n);
              return (
                gn(je),
                void (function (e) {
                  var t = e.credential,
                    n = e.userId,
                    r = e.sessionId;
                  Yi.setState({
                    step: "security-questions",
                    credential: t,
                    userId: n,
                    sessionId: r,
                  });
                })(so({ credential: t }, o))
              );
            case he:
              var a = In(n).users,
                u = a
                  .map(function (e) {
                    return e.id;
                  })
                  .join(",");
              return (
                ut(a.length, u, t.type),
                void (function (e) {
                  var t = e.credential,
                    n = e.users;
                  Yi.setState({
                    step: "select-account",
                    credential: t,
                    users: n,
                  });
                })({ credential: t, users: a })
              );
            case me:
              return void go(e, 0, !1, r);
            case be:
              return void go(e, 0, !0, r);
            case ye:
              return void co(e, function () {
                return Mt(En());
              });
            default:
              gn(yn(i));
              var c = bn(i, t.type);
              if (t.type === x.EmailOtpSessionToken) tt(String(i));
              else if (t.type === x.Passkey) throw (eo(e(c)), n);
              eo(e(c));
          }
        },
        yo = function () {
          var e = (0, c.useTranslation)().translate,
            t = (0, Kr.useMutation)({
              mutationFn: function (n) {
                return fo(void 0, void 0, void 0, function () {
                  var r, i, o, a, u, c, l, f, d, p, h;
                  return po(this, function (v) {
                    switch (v.label) {
                      case 0:
                        return (
                          (r = n.credential),
                          ![x.Username, x.PhoneNumber, x.Email].includes(
                            r.type
                          ) ||
                          ("" !== r.value && "" !== r.password)
                            ? [4, vo(n)]
                            : (gn(Ae),
                              eo(e(k.MessageUsernameAndPasswordRequired)),
                              [2])
                        );
                      case 1:
                        return (
                          (i = v.sent()),
                          [4, s.cryptoUtil.generateSecureAuthIntentV2()]
                        );
                      case 2:
                        (o =
                          null !== (d = v.sent()) && void 0 !== d ? d : void 0),
                          (a = so(so({}, i), {
                            secureAuthenticationIntent: o,
                          })),
                          (v.label = 3);
                      case 3:
                        return v.trys.push([3, 5, , 6]), [4, Rt(a)];
                      case 4:
                        return (u = v.sent()), [3, 6];
                      case 5:
                        return (
                          (c = v.sent()),
                          mo(e, r, c, function () {
                            t.mutate({ credential: r });
                          }),
                          [2]
                        );
                      case 6:
                        return (
                          o && gn(_e),
                          (null ===
                            (p =
                              null === s.dataStores || void 0 === s.dataStores
                                ? void 0
                                : s.dataStores.authIntentDataStore) ||
                          void 0 === p
                            ? void 0
                            : p.hasUnclaimedAuthIntent()) && gn(xe),
                          gn(Ce),
                          (l =
                            null === (h = u.twoStepVerificationData) ||
                            void 0 === h
                              ? void 0
                              : h.ticket),
                          (f = u.user.id.toString()),
                          null != l
                            ? (function (e) {
                                var t = e.credential,
                                  n = e.userId,
                                  r = e.challengeId;
                                Yi.setState({
                                  step: "2sv",
                                  credential: t,
                                  userId: n,
                                  challengeId: r,
                                });
                              })({ credential: r, userId: f, challengeId: l })
                            : ho(f, u.accountBlob),
                          [2]
                        );
                    }
                  });
                });
              },
            });
          return t;
        },
        bo = function () {
          return (
            (bo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            bo.apply(this, arguments)
          );
        },
        wo = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        So = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Eo = function (e, t) {
          return wo(void 0, void 0, void 0, function () {
            var n, r, i;
            return So(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, s.cryptoUtil.generateSecureAuthIntentV2()];
                case 1:
                  return (
                    (n = o.sent()),
                    (r = bo(bo({}, t), { secureAuthenticationIntent: n })),
                    [4, Ot(e, r)]
                  );
                case 2:
                  return (i = o.sent()), n && gn(_e), ho(e, i.accountBlob), [2];
              }
            });
          });
        },
        Ao = function (e) {
          var n = e.credential,
            i = e.userId,
            o = e.challengeId,
            u = (0, c.useTranslation)().translate,
            l = function () {
              return eo(u(k.ResponseVerificationError));
            },
            s = yo(),
            f = (0, t.useState)(0),
            d = f[0],
            p = f[1],
            h = (0, Kr.useMutation)({
              mutationFn: function (e) {
                var t = e.verificationToken,
                  n = e.rememberDevice;
                return wo(void 0, void 0, void 0, function () {
                  var e;
                  return So(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = {
                            challengeId: o,
                            verificationToken: t,
                            rememberDevice: n,
                            accountBlob:
                              null === a.AccountSwitcherService ||
                              void 0 === a.AccountSwitcherService
                                ? void 0
                                : a.AccountSwitcherService.getStoredAccountSwitcherBlob(),
                            secureAuthenticationIntent: null,
                          }),
                          [4, Eo(i.toString(), e)]
                        );
                      case 1:
                        return r.sent(), [2];
                    }
                  });
                });
              },
              onError: l,
            });
          return r().createElement(Rn, {
            userId: i.toString(),
            challengeId: o,
            on2svChallengeCompleted: function (e) {
              h.isPending || h.mutate(e);
            },
            on2svChallengeInvalidated: function () {
              d < Se
                ? (p(function (e) {
                    return e + 1;
                  }),
                  s.mutate({ credential: n }))
                : (p(0), l());
            },
            on2svChallengeAbandoned: function () {
              return eo();
            },
            onUnknownError: l,
          });
        },
        _o = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, u);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        xo = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = a.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = t.call(e, a);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        Co = function (e) {
          var n = e.login,
            r = (0, Kr.useQuery)({
              queryKey: ["passkey-support"],
              queryFn: function () {
                return _o(void 0, void 0, void 0, function () {
                  var e, t, n, r;
                  return xo(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return It()
                          ? window.PublicKeyCredential
                            ? [
                                4,
                                null ===
                                  (r = (n = window.PublicKeyCredential)
                                    .isConditionalMediationAvailable) ||
                                void 0 === r
                                  ? void 0
                                  : r.call(n),
                              ]
                            : [3, 2]
                          : [2, !1];
                      case 1:
                        return (e = i.sent()), (t = Boolean(e)), ft(t), [2, t];
                      case 2:
                        return [2, !1];
                    }
                  });
                });
              },
              placeholderData: !1,
            }),
            i = (0, t.useRef)(new AbortController()),
            o = (0, Kr.useMutation)({
              mutationFn: function () {
                return _o(void 0, void 0, void 0, function () {
                  var e, t, r, o, a, u;
                  return xo(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return c.trys.push([0, 2, , 3]), [4, Lt()];
                      case 1:
                        return (e = c.sent()), [3, 3];
                      case 2:
                        return (t = c.sent()), console.error(t), [2];
                      case 3:
                        return (
                          c.trys.push([3, 5, , 6]),
                          [
                            4,
                            mn(
                              e.authenticationOptions,
                              "conditional",
                              i.current.signal
                            ),
                          ]
                        );
                      case 4:
                        return (r = c.sent()), [3, 6];
                      case 5:
                        if (
                          null != (o = c.sent()) &&
                          "object" == typeof o &&
                          "AbortError" === o.name
                        )
                          return [2];
                        throw (console.error(o), o);
                      case 6:
                        return (
                          (a =
                            s.fido2Util.formatCredentialAuthenticationResponseWeb(
                              r
                            )),
                          (u = {
                            type: x.Passkey,
                            value: a,
                            password: e.sessionId,
                          }),
                          [4, n.mutateAsync({ credential: u })]
                        );
                      case 7:
                        return c.sent(), [2];
                    }
                  });
                });
              },
              retry: 1 / 0,
              retryDelay: 100,
            });
          return (
            (0, t.useEffect)(
              function () {
                r.data && o.isIdle && o.mutate();
              },
              [r.data, o]
            ),
            (0, t.useEffect)(function () {
              return function () {
                i.current.abort();
              };
            }, []),
            null
          );
        },
        ko = function (e) {
          var n = e.codeLength,
            i = (0, c.useTranslation)().translate,
            o = yo();
          return (
            (0, t.useEffect)(
              function () {
                null != a.EmailVerifyCodeModalService
                  ? a.EmailVerifyCodeModalService.renderEmailVerifyCodeModal({
                      containerId: Y,
                      codeLength: n,
                      onEmailCodeEntered: function (e, t) {
                        if (!o.isPending) {
                          var n = {
                            type: x.EmailOtpSessionToken,
                            value: e,
                            password: t,
                          };
                          o.mutate({ credential: n });
                        }
                      },
                      onModalAbandoned: eo,
                      enterEmailTitle: i(k.LabelGetOneTimeCode),
                      enterEmailDescription: i(k.DescriptionGetOneTimeCodeHelp),
                      enterCodeTitle: i(k.LabelEnterOneTimeCode),
                      enterCodeDescription: i(
                        k.DescriptionEnterOneTimeCodeHelp
                      ),
                      origin: We,
                      translate: i,
                      isChangeEmailEnabled: !0,
                    })
                  : eo();
              },
              [n, o, i]
            ),
            r().createElement("div", { id: Y })
          );
        },
        Lo = function (e) {
          var t = e.credential,
            n = e.userId,
            i = e.sessionId,
            o = yo();
          return r().createElement(Fn, {
            userId: n,
            sessionId: i,
            onSecurityQuestionsChallengeCompleted: function (e) {
              var n = e.redemptionToken;
              o.isPending ||
                o.mutate({
                  credential: t,
                  securityQuestionSessionId: i,
                  securityQuestionRedemptionToken: n,
                });
            },
            onSecurityQuestionsChallengeInvalidated: function (e) {
              var t = e.errorMessage;
              return eo(t);
            },
            onSecurityQuestionsChallengeAbandoned: function () {
              return eo();
            },
            onUnknownError: eo,
          });
        },
        Io = function (e) {
          var t = e.credential,
            n = (0, c.useTranslation)().translate;
          return r().createElement(hr, {
            credentialValue: t.value,
            translate: n,
          });
        },
        To = function (e) {
          var n = e.credential,
            i = e.users,
            o = (0, c.useTranslation)().translate,
            a = (0, t.useState)(!1),
            u = a[0],
            l = a[1],
            s = yo();
          return u
            ? null
            : r().createElement(Hn, {
                containerId: K,
                users: i,
                invalidUsers: [],
                onAccountSelection: function (e) {
                  s.isPending ||
                    (ct(n.type, e),
                    l(!0),
                    s.mutate({ credential: n, userId: e }));
                },
                onAccountSelectorAbandoned: eo,
                titleText: o(k.LabelAccountSelector),
                helpText: An(n.type, o),
                translate: o,
              });
        },
        Po = function () {
          return r().createElement("div", {
            id: "crossDeviceLoginDisplayCodeModal-container",
          });
        },
        Uo = function () {
          return (
            (0, t.useEffect)(function () {
              null == a.CrossDeviceLoginDisplayCodeService ||
                a.CrossDeviceLoginDisplayCodeService.openModal(),
                eo();
            }, []),
            null
          );
        },
        Oo = function () {
          return (
            (Oo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Oo.apply(this, arguments)
          );
        },
        Ro = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        No = Ye.context.lrLoginForm,
        zo = Ye.field,
        Bo = zo.username,
        Do = zo.password,
        Mo = zo.OTP,
        Fo = Ye.btn,
        jo = Fo.login,
        Wo = Fo.xdl,
        Vo = Fo.forgotCredentials,
        qo = Fo.createAccount,
        Ho = Fo.showPassword,
        Go = Fo.hidePassword,
        Qo = Ye.state,
        $o = Qo.focused,
        Ko = Qo.unfocused,
        Yo = function () {
          var e,
            n,
            i,
            o = (0, Kr.useQuery)({
              queryKey: ["otp-metadata"],
              queryFn: function () {
                return Et(We);
              },
              placeholderData: { OtpCodeLength: 100, IsOtpEnabled: !0 },
            }),
            a = (0, c.useTranslation)().translate,
            u = Yi(),
            l = u.identifier,
            s = u.password,
            f = u.errorMessage,
            d = Ro(u, ["identifier", "password", "errorMessage"]),
            p = yo(),
            h = p.isPending || "login" !== d.step,
            v = "limit-reached" === d.switchAccount,
            g = h || v,
            m =
              "adding-account" === d.switchAccount
                ? qe + "?" + new URLSearchParams({ returnUrl: En() }).toString()
                : Ft(),
            y =
              "" === l
                ? ""
                : "?" + new URLSearchParams({ identifier: l }).toString();
          return (
            (0, t.useEffect)(
              function () {
                v &&
                  co(a, function () {
                    return Mt(En());
                  });
              },
              [v, a]
            ),
            (0, t.useEffect)(
              function () {
                var e = (function (e) {
                  return function (t) {
                    if (t.detail && !e.isPending) {
                      var n = t.detail,
                        r = n.code,
                        i = n.privateKey,
                        o = { type: x.AuthToken, value: r, password: i };
                      e.mutate({ credential: o });
                    }
                  };
                })(p);
                return (
                  window.addEventListener("OnCrossDeviceCodeValidated", e),
                  function () {
                    window.removeEventListener("OnCrossDeviceCodeValidated", e);
                  }
                );
              },
              [p]
            ),
            r().createElement(
              r().Fragment,
              null,
              r().createElement(
                "style",
                null,
                "\nlabel {\n  margin-bottom: 0;\n}\nh3 {\n  text-transform: none;\n}"
              ),
              r().createElement(
                "div",
                { className: "flex flex-col gap-xsmall" },
                r().createElement(
                  "h2",
                  {
                    className:
                      "content-emphasis text-heading-large padding-none",
                  },
                  "adding-account" === d.switchAccount ? a(D) : a(M)
                ),
                r().createElement(
                  "span",
                  { className: "content-default text-body-large" },
                  a(F)
                )
              ),
              r().createElement(
                "form",
                {
                  className: "flex flex-col gap-xlarge",
                  onSubmit: function (e) {
                    if ((e.preventDefault(), !g)) {
                      Je(), pt(jo, "", No);
                      var t = { type: wn(l), value: l, password: s };
                      p.mutate({ credential: t });
                    }
                  },
                },
                r().createElement(
                  "div",
                  { className: "flex flex-col gap-medium" },
                  r().createElement(ki, {
                    label: a(z),
                    placeholder: a(z),
                    autoComplete: "username webauthn",
                    id: "login-username",
                    name: "username",
                    value: l,
                    isSignup: !1,
                    reserveErrorSpace: !1,
                    onChange: Xi,
                    hasError: null != f,
                    isDisabled: g,
                    onFocus: function () {
                      return vt(No, Bo, $o);
                    },
                    onBlur: function () {
                      return vt(No, Bo, Ko);
                    },
                  }),
                  r().createElement(Mi, {
                    label: a(B),
                    placeholder: a(B),
                    id: "login-password",
                    name: "password",
                    autoComplete: "current-password",
                    value: s,
                    onChange: Zi,
                    error: f,
                    isDisabled: g,
                    onFocus: function () {
                      return vt(No, Do, $o);
                    },
                    onBlur: function () {
                      return vt(No, Do, Ko);
                    },
                    onShowPassword: function () {
                      return pt(Ho, "", No);
                    },
                    onHidePassword: function () {
                      return pt(Go, "", No);
                    },
                  })
                ),
                r().createElement(
                  "div",
                  { className: "flex flex-col gap-medium" },
                  r().createElement(
                    di,
                    {
                      isLoading: h,
                      isDisabled: v,
                      size: "Medium",
                      variant: "Emphasis",
                      type: "submit",
                      formNoValidate: !0,
                    },
                    a(T)
                  ),
                  r().createElement(
                    di,
                    {
                      size: "Medium",
                      variant: "ActionUtility",
                      as: "a",
                      href: "" + I.forgotCredentialsUrl + y,
                      isDisabled: g,
                      onClick: function () {
                        return pt(Vo, "", No);
                      },
                    },
                    a(P)
                  )
                ),
                r().createElement(
                  "div",
                  { className: "flex items-center gap-medium" },
                  r().createElement(
                    "div",
                    { className: "fill" },
                    r().createElement(pi, null)
                  ),
                  r().createElement(
                    "span",
                    { className: "content-default text-label-medium" },
                    a(U)
                  ),
                  r().createElement(
                    "div",
                    { className: "fill" },
                    r().createElement(pi, null)
                  )
                ),
                r().createElement(
                  "div",
                  { className: "flex flex-col gap-small" },
                  (null === (e = o.data) || void 0 === e
                    ? void 0
                    : e.IsOtpEnabled) &&
                    r().createElement(
                      di,
                      {
                        size: "Medium",
                        variant: "Standard",
                        isDisabled: g,
                        onClick: function () {
                          et(), pt(Mo, "", No), Yi.setState({ step: "otp" });
                        },
                      },
                      r().createElement(
                        "span",
                        { className: "flex items-center gap-small" },
                        r().createElement(vi, {
                          name: "icon-regular-envelope",
                        }),
                        a(O)
                      )
                    ),
                  r().createElement(
                    di,
                    {
                      size: "Medium",
                      variant: "Standard",
                      isDisabled: g,
                      onClick: function () {
                        Ze(), pt(Wo, "", No), Yi.setState({ step: "xdl" });
                      },
                    },
                    r().createElement(
                      "span",
                      { className: "flex items-center gap-small" },
                      r().createElement(vi, {
                        name: "icon-regular-squares-grid-qr",
                      }),
                      a(R)
                    )
                  ),
                  r().createElement(
                    di,
                    {
                      size: "Medium",
                      variant: "ActionUtility",
                      as: "a",
                      href: m,
                      isDisabled: g,
                      onClick: function () {
                        return pt(qo, "", No);
                      },
                    },
                    r().createElement("span", {
                      dangerouslySetInnerHTML: {
                        __html: a(N, {
                          startTag:
                            '<span style="text-decoration: underline; text-decoration-skip-ink: none;">',
                          endTag: "</span>",
                        }),
                      },
                    })
                  )
                )
              ),
              "login" === d.step ? r().createElement(Co, { login: p }) : null,
              "otp" === d.step
                ? r().createElement(ko, {
                    codeLength:
                      null !==
                        (i =
                          null === (n = o.data) || void 0 === n
                            ? void 0
                            : n.OtpCodeLength) && void 0 !== i
                        ? i
                        : 100,
                  })
                : null,
              r().createElement(Po, null),
              "xdl" === d.step ? r().createElement(Uo, null) : null,
              "select-account" === d.step
                ? r().createElement(To, Oo({}, d))
                : null,
              "security-questions" === d.step
                ? r().createElement(Lo, Oo({}, d))
                : null,
              "security-notification" === d.step
                ? r().createElement(Io, Oo({}, d))
                : null,
              "2sv" === d.step ? r().createElement(Ao, Oo({}, d)) : null
            )
          );
        },
        Xo = n(8217),
        Zo = n.n(Xo),
        Jo = function (e) {
          var n = e.loggedInUsers,
            i = (0, c.useTranslation)().translate,
            o = (0, t.useState)(!1),
            a = o[0],
            u = o[1];
          if (a)
            return r().createElement(
              "div",
              { className: "height-full flex items-center" },
              r().createElement(l.Loading, null)
            );
          var s = _n(),
            f = function () {
              return Ji({ switchAccount: "adding-account" });
            };
          return r().createElement(
            "div",
            {
              className:
                "login-revamp-account-switcher flex flex-col width-full gap-xlarge",
            },
            r().createElement(
              "div",
              { className: "flex flex-col gap-xsmall" },
              r().createElement(
                "h2",
                {
                  className: "content-emphasis text-heading-large padding-none",
                },
                i(j)
              ),
              r().createElement(
                "span",
                { className: "content-default text-body-large" },
                i(W)
              )
            ),
            r().createElement(Yn, {
              containerId: X,
              onAccountSwitched: function () {
                u(!0), jt();
              },
              handleAddAccount: f,
              suppressAddAccountRow: !0,
              removeInvalidActiveUser: !0,
              translate: i,
              loggedInUsers: n,
            }),
            r().createElement(
              "div",
              { className: "flex flex-col gap-medium" },
              r().createElement(
                di,
                {
                  size: "Medium",
                  variant: "Standard",
                  onClick: function () {
                    Qt(Ye.context.accountSwitcherLogin, Ye.btn.addAccount), f();
                  },
                },
                i(V)
              ),
              r().createElement(
                di,
                {
                  size: "Medium",
                  variant: "Standard",
                  as: "a",
                  href: s,
                  onClick: function () {
                    return Qt(
                      Ye.context.accountSwitcherLogin,
                      Ye.btn.createAccount
                    );
                  },
                },
                i(q)
              )
            )
          );
        },
        ea = Ye.context.lrLoginForm,
        ta = function () {
          var e,
            n,
            i,
            o = nr(
              !(
                null !==
                  (e =
                    null === u.authenticatedUser ||
                    void 0 === u.authenticatedUser
                      ? void 0
                      : u.authenticatedUser.isAuthenticated) &&
                void 0 !== e &&
                e
              )
            ),
            c = o.loggedInUsers,
            s = o.isGettingLoggedInUsers,
            f =
              null !==
                (n =
                  null === a.AccountSwitcherService ||
                  void 0 === a.AccountSwitcherService
                    ? void 0
                    : a.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) &&
              void 0 !== n
                ? n
                : [!1, !1],
            d = f[0],
            p = f[1],
            h = s || !p,
            v =
              !h &&
              d &&
              !u.authenticatedUser.isAuthenticated &&
              Boolean(
                null ===
                  (i = null == c ? void 0 : c.usersAvailableForSwitching) ||
                  void 0 === i
                  ? void 0
                  : i.length
              );
          (0, t.useEffect)(
            function () {
              if (!h)
                if (v) {
                  var e = c.usersAvailableForSwitching
                    .map(function (e) {
                      return e.id;
                    })
                    .join(",");
                  ht(ea, Ye.field.accountSwitcher),
                    lt(e),
                    Yi.setState({ step: "switch-account" });
                } else
                  Ji({
                    switchAccount: c.isAccountLimitReached
                      ? "limit-reached"
                      : void 0,
                  });
            },
            [h, v, c]
          ),
            ir(u.authenticatedUser.isAuthenticated && p && !d);
          var g = Yi(function (e) {
            return e.step;
          });
          switch (g) {
            case "loading":
              return r().createElement(
                "div",
                { className: "height-full flex items-center" },
                r().createElement(l.Loading, null)
              );
            case "switch-account":
              return r().createElement(Jo, { loggedInUsers: c });
            default:
              return r().createElement(Yo, null);
          }
        },
        na = function () {
          return (
            (0, t.useEffect)(function () {
              ht(ea);
            }, []),
            (0, t.useEffect)(function () {
              try {
                (0,
                s.dataStores.authIntentDataStore.saveGameIntentFromReturnUrl)();
              } catch (e) {
                console.error("intent saving error: ", e);
              }
            }, []),
            r().createElement(
              "div",
              { className: "login-revamp-container" },
              r().createElement(Zr, {
                className: "bg-surface-0 justify-center",
                style: { width: "100%", minHeight: "100vh" },
                left: r().createElement(
                  "div",
                  {
                    className: Xr()(
                      "flex flex-col gap-xlarge size-full",
                      "padding-top-[var(--size-2200)] padding-x-xlarge medium:padding-x-[var(--size-1200)] large:padding-x-[var(--size-1600)]"
                    ),
                  },
                  r().createElement(ta, null)
                ),
                right: r().createElement(
                  "div",
                  { className: "relative size-full clip" },
                  r().createElement("img", {
                    className: "absolute size-full select-none",
                    style: { objectFit: "cover", opacity: 0.7 },
                    src: Zo(),
                    alt: "",
                    draggable: !1,
                  })
                ),
              }),
              r().createElement("div", { id: io })
            )
          );
        },
        ra = function () {
          return r().createElement(
            c.TranslationProvider,
            { config: mt },
            r().createElement(
              Kr.QueryClientProvider,
              { client: c.queryClient },
              r().createElement(na, null)
            )
          );
        },
        ia = function () {
          var e;
          if (
            (function () {
              var e,
                t = document.querySelector('meta[name="page-meta"]');
              return (
                "Landing" ===
                (null === (e = null == t ? void 0 : t.dataset) || void 0 === e
                  ? void 0
                  : e.internalPageName)
              );
            })() &&
            new URLSearchParams(window.location.search).get("dataToken")
          )
            return !1;
          var t = document.querySelector(
            'meta[name="account-experience-revamp-data"]'
          );
          return (
            "true" ===
            (null !== (e = null == t ? void 0 : t.dataset) && void 0 !== e
              ? e
              : {}
            ).isAccountExperienceRevampEnabled
          );
        };
      function oa() {
        var e = Dt() || Bt();
        if (e) {
          "react-login-web-app" === e.id && e.classList.add("login-container");
          var t = ia()
            ? r().createElement(ra, null)
            : r().createElement($r, null);
          (0, i.render)(t, e);
        } else window.requestAnimationFrame(oa);
      }
      (0, o.ready)(function () {
        if (
          u.authenticatedUser &&
          u.authenticatedUser.isAuthenticated &&
          u.authenticatedUser.isUnder13
        ) {
          var e = Sn();
          window.location.href = e || a.EnvironmentUrls.websiteUrl + "/home";
        } else oa();
      });
    })();
})();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/c7fc3735b947ec8ad8ae2b595a1c9bd9-reactLogin.bundle.min.js.map

/* Bundle detector */
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected("ReactLogin");

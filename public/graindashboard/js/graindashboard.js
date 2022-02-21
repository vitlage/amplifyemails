!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i),
        s.l = !0,
        s.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var s in t)
                i.d(n, s, function(e) {
                    return t[e]
                }
                .bind(null, s));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "/",
    i(i.s = 32)
}([function(t, e, i) {
    var n;
    !function(e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return i(t)
        }
        : i(e)
    }("undefined" != typeof window ? window : this, function(i, s) {
        "use strict";
        var o = []
          , r = i.document
          , a = Object.getPrototypeOf
          , l = o.slice
          , c = o.concat
          , u = o.push
          , h = o.indexOf
          , d = {}
          , p = d.toString
          , f = d.hasOwnProperty
          , m = f.toString
          , g = m.call(Object)
          , v = {}
          , _ = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , b = function(t) {
            return null != t && t === t.window
        }
          , y = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function w(t, e, i) {
            var n, s, o = (i = i || r).createElement("script");
            if (o.text = t,
            e)
                for (n in y)
                    (s = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, s);
            i.head.appendChild(o).parentNode.removeChild(o)
        }
        function x(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[p.call(t)] || "object" : typeof t
        }
        var C = function(t, e) {
            return new C.fn.init(t,e)
        }
          , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function k(t) {
            var e = !!t && "length"in t && t.length
              , i = x(t);
            return !_(t) && !b(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        C.fn = C.prototype = {
            jquery: "3.4.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = C.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return C.each(this, t)
            },
            map: function(t) {
                return this.pushStack(C.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                  , i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: o.sort,
            splice: o.splice
        },
        C.extend = C.fn.extend = function() {
            var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof r && (c = r,
            r = arguments[a] || {},
            a++),
            "object" == typeof r || _(r) || (r = {}),
            a === l && (r = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        n = t[e],
                        "__proto__" !== e && r !== n && (c && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[e],
                        o = s && !Array.isArray(i) ? [] : s || C.isPlainObject(i) ? i : {},
                        s = !1,
                        r[e] = C.extend(c, o, n)) : void 0 !== n && (r[e] = n));
            return r
        }
        ,
        
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var S = function(t) {
            var e, i, n, s, o, r, a, l, c, u, h, d, p, f, m, g, v, _, b, y = "sizzle" + 1 * new Date, w = t.document, x = 0, C = 0, T = lt(), k = lt(), S = lt(), D = lt(), E = function(t, e) {
                return t === e && (h = !0),
                0
            }, I = {}.hasOwnProperty, A = [], O = A.pop, N = A.push, P = A.push, M = A.slice, H = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", j = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]", z = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", F = new RegExp(R + "+","g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), q = new RegExp("^" + R + "*," + R + "*"), U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), V = new RegExp(R + "|>"), Y = new RegExp(z), K = new RegExp("^" + W + "$"), Q = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
                bool: new RegExp("^(?:" + L + ")$","i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
            }, G = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, $ = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), it = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, st = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, ot = function() {
                d()
            }, rt = yt(function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                P.apply(A = M.call(w.childNodes), w.childNodes),
                A[w.childNodes.length].nodeType
            } catch (t) {
                P = {
                    apply: A.length ? function(t, e) {
                        N.apply(t, M.call(e))
                    }
                    : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; )
                            ;
                        t.length = i - 1
                    }
                }
            }
            function at(t, e, n, s) {
                var o, a, c, u, h, f, v, _ = e && e.ownerDocument, x = e ? e.nodeType : 9;
                if (n = n || [],
                "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x)
                    return n;
                if (!s && ((e ? e.ownerDocument || e : w) !== p && d(e),
                e = e || p,
                m)) {
                    if (11 !== x && (h = Z.exec(t)))
                        if (o = h[1]) {
                            if (9 === x) {
                                if (!(c = e.getElementById(o)))
                                    return n;
                                if (c.id === o)
                                    return n.push(c),
                                    n
                            } else if (_ && (c = _.getElementById(o)) && b(e, c) && c.id === o)
                                return n.push(c),
                                n
                        } else {
                            if (h[2])
                                return P.apply(n, e.getElementsByTagName(t)),
                                n;
                            if ((o = h[3]) && i.getElementsByClassName && e.getElementsByClassName)
                                return P.apply(n, e.getElementsByClassName(o)),
                                n
                        }
                    if (i.qsa && !D[t + " "] && (!g || !g.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t,
                        _ = e,
                        1 === x && V.test(t)) {
                            for ((u = e.getAttribute("id")) ? u = u.replace(nt, st) : e.setAttribute("id", u = y),
                            a = (f = r(t)).length; a--; )
                                f[a] = "#" + u + " " + bt(f[a]);
                            v = f.join(","),
                            _ = tt.test(t) && vt(e.parentNode) || e
                        }
                        try {
                            return P.apply(n, _.querySelectorAll(v)),
                            n
                        } catch (e) {
                            D(t, !0)
                        } finally {
                            u === y && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(B, "$1"), e, n, s)
            }
            function lt() {
                var t = [];
                return function e(i, s) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()],
                    e[i + " "] = s
                }
            }
            function ct(t) {
                return t[y] = !0,
                t
            }
            function ut(t) {
                var e = p.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function ht(t, e) {
                for (var i = t.split("|"), s = i.length; s--; )
                    n.attrHandle[i[s]] = e
            }
            function dt(t, e) {
                var i = e && t
                  , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === e)
                            return -1;
                return t ? 1 : -1
            }
            function pt(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function ft(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function mt(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function gt(t) {
                return ct(function(e) {
                    return e = +e,
                    ct(function(i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--; )
                            i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }
            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = at.support = {},
            o = at.isXML = function(t) {
                var e = t.namespaceURI
                  , i = (t.ownerDocument || t).documentElement;
                return !G.test(e || i && i.nodeName || "HTML")
            }
            ,
            d = at.setDocument = function(t) {
                var e, s, r = t ? t.ownerDocument || t : w;
                return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement,
                m = !o(p),
                w !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ot, !1) : s.attachEvent && s.attachEvent("onunload", ot)),
                i.attributes = ut(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                i.getElementsByTagName = ut(function(t) {
                    return t.appendChild(p.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                i.getElementsByClassName = J.test(p.getElementsByClassName),
                i.getById = ut(function(t) {
                    return f.appendChild(t).id = y,
                    !p.getElementsByName || !p.getElementsByName(y).length
                }),
                i.getById ? (n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }
                ) : (n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }
                ,
                n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t)
                                return [o];
                            for (s = e.getElementsByName(t),
                            n = 0; o = s[n++]; )
                                if ((i = o.getAttributeNode("id")) && i.value === t)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var i, n = [], s = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }
                ,
                n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m)
                        return e.getElementsByClassName(t)
                }
                ,
                v = [],
                g = [],
                (i.qsa = J.test(p.querySelectorAll)) && (ut(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + L + ")"),
                    t.querySelectorAll("[id~=" + y + "-]").length || g.push("~="),
                    t.querySelectorAll(":checked").length || g.push(":checked"),
                    t.querySelectorAll("a#" + y + "+*").length || g.push(".#.+[+~]")
                }),
                ut(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    f.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    g.push(",.*:")
                })),
                (i.matchesSelector = J.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(t) {
                    i.disconnectedMatch = _.call(t, "*"),
                    _.call(t, "[s!='']:x"),
                    v.push("!=", z)
                }),
                g = g.length && new RegExp(g.join("|")),
                v = v.length && new RegExp(v.join("|")),
                e = J.test(f.compareDocumentPosition),
                b = e || J.test(f.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t
                      , n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                E = e ? function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : u ? H(u, t) - H(u, e) : 0 : 4 & n ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return h = !0,
                        0;
                    var i, n = 0, s = t.parentNode, o = e.parentNode, r = [t], a = [e];
                    if (!s || !o)
                        return t === p ? -1 : e === p ? 1 : s ? -1 : o ? 1 : u ? H(u, t) - H(u, e) : 0;
                    if (s === o)
                        return dt(t, e);
                    for (i = t; i = i.parentNode; )
                        r.unshift(i);
                    for (i = e; i = i.parentNode; )
                        a.unshift(i);
                    for (; r[n] === a[n]; )
                        n++;
                    return n ? dt(r[n], a[n]) : r[n] === w ? -1 : a[n] === w ? 1 : 0
                }
                ,
                p) : p
            }
            ,
            at.matches = function(t, e) {
                return at(t, null, null, e)
            }
            ,
            at.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && d(t),
                i.matchesSelector && m && !D[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e)))
                    try {
                        var n = _.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return n
                    } catch (t) {
                        D(e, !0)
                    }
                return at(e, p, null, [t]).length > 0
            }
            ,
            at.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && d(t),
                b(t, e)
            }
            ,
            at.attr = function(t, e) {
                (t.ownerDocument || t) !== p && d(t);
                var s = n.attrHandle[e.toLowerCase()]
                  , o = s && I.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
                return void 0 !== o ? o : i.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }
            ,
            at.escape = function(t) {
                return (t + "").replace(nt, st)
            }
            ,
            at.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            at.uniqueSort = function(t) {
                var e, n = [], s = 0, o = 0;
                if (h = !i.detectDuplicates,
                u = !i.sortStable && t.slice(0),
                t.sort(E),
                h) {
                    for (; e = t[o++]; )
                        e === t[o] && (s = n.push(o));
                    for (; s--; )
                        t.splice(n[s], 1)
                }
                return u = null,
                t
            }
            ,
            s = at.getText = function(t) {
                var e, i = "", n = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += s(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += s(e);
                return i
            }
            ,
            (n = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, it),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(et, it),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Y.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                        t[2] = i.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, it).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = T[t + " "];
                        return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && T(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var s = at.attr(n, t);
                            return null == s ? "!=" === e : !e || (s += "",
                            "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s.replace(F, " ") + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3)
                          , r = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, i, l) {
                            var c, u, h, d, p, f, m = o !== r ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), _ = !l && !a, b = !1;
                            if (g) {
                                if (o) {
                                    for (; m; ) {
                                        for (d = e; d = d[m]; )
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild],
                                r && _) {
                                    for (b = (p = (c = (u = (h = (d = g)[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2],
                                    d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop(); )
                                        if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [x, p, b];
                                            break
                                        }
                                } else if (_ && (b = p = (c = (u = (h = (d = e)[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]),
                                !1 === b)
                                    for (; (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && ((u = (h = d[y] || (d[y] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, b]),
                                    d !== e)); )
                                        ;
                                return (b -= s) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return s[y] ? s(e) : s.length > 1 ? (i = [t, t, "", e],
                        n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, i) {
                            for (var n, o = s(t, e), r = o.length; r--; )
                                t[n = H(t, o[r])] = !(i[n] = o[r])
                        }) : function(t) {
                            return s(t, 0, i)
                        }
                        ) : s
                    }
                },
                pseudos: {
                    not: ct(function(t) {
                        var e = []
                          , i = []
                          , n = a(t.replace(B, "$1"));
                        return n[y] ? ct(function(t, e, i, s) {
                            for (var o, r = n(t, null, s, []), a = t.length; a--; )
                                (o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, s, o) {
                            return e[0] = t,
                            n(e, null, o, i),
                            e[0] = null,
                            !i.pop()
                        }
                    }),
                    has: ct(function(t) {
                        return function(e) {
                            return at(t, e).length > 0
                        }
                    }),
                    contains: ct(function(t) {
                        return t = t.replace(et, it),
                        function(e) {
                            return (e.textContent || s(e)).indexOf(t) > -1
                        }
                    }),
                    lang: ct(function(t) {
                        return K.test(t || "") || at.error("unsupported lang: " + t),
                        t = t.replace(et, it).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: mt(!1),
                    disabled: mt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return $.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: gt(function() {
                        return [0]
                    }),
                    last: gt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: gt(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: gt(function(t, e) {
                        for (var i = 0; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    odd: gt(function(t, e) {
                        for (var i = 1; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    lt: gt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),
                    gt: gt(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = n.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                n.pseudos[e] = pt(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                n.pseudos[e] = ft(e);
            function _t() {}
            function bt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++)
                    n += t[e].value;
                return n
            }
            function yt(t, e, i) {
                var n = e.dir
                  , s = e.next
                  , o = s || n
                  , r = i && "parentNode" === o
                  , a = C++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n]; )
                        if (1 === e.nodeType || r)
                            return t(e, i, s);
                    return !1
                }
                : function(e, i, l) {
                    var c, u, h, d = [x, a];
                    if (l) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || r) && t(e, i, l))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || r)
                                if (u = (h = e[y] || (e[y] = {}))[e.uniqueID] || (h[e.uniqueID] = {}),
                                s && s === e.nodeName.toLowerCase())
                                    e = e[n] || e;
                                else {
                                    if ((c = u[o]) && c[0] === x && c[1] === a)
                                        return d[2] = c[2];
                                    if (u[o] = d,
                                    d[2] = t(e, i, l))
                                        return !0
                                }
                    return !1
                }
            }
            function wt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--; )
                        if (!t[s](e, i, n))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function xt(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
                    (o = t[a]) && (i && !i(o, n, s) || (r.push(o),
                    c && e.push(a)));
                return r
            }
            function Ct(t, e, i, n, s, o) {
                return n && !n[y] && (n = Ct(n)),
                s && !s[y] && (s = Ct(s, o)),
                ct(function(o, r, a, l) {
                    var c, u, h, d = [], p = [], f = r.length, m = o || function(t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++)
                            at(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), g = !t || !o && e ? m : xt(m, d, t, a, l), v = i ? s || (o ? t : f || n) ? [] : r : g;
                    if (i && i(g, v, a, l),
                    n)
                        for (c = xt(v, p),
                        n(c, [], a, l),
                        u = c.length; u--; )
                            (h = c[u]) && (v[p[u]] = !(g[p[u]] = h));
                    if (o) {
                        if (s || t) {
                            if (s) {
                                for (c = [],
                                u = v.length; u--; )
                                    (h = v[u]) && c.push(g[u] = h);
                                s(null, v = [], c, l)
                            }
                            for (u = v.length; u--; )
                                (h = v[u]) && (c = s ? H(o, h) : d[u]) > -1 && (o[c] = !(r[c] = h))
                        }
                    } else
                        v = xt(v === r ? v.splice(f, v.length) : v),
                        s ? s(null, r, v, l) : P.apply(r, v)
                })
            }
            function Tt(t) {
                for (var e, i, s, o = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, u = yt(function(t) {
                    return t === e
                }, a, !0), h = yt(function(t) {
                    return H(e, t) > -1
                }, a, !0), d = [function(t, i, n) {
                    var s = !r && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : h(t, i, n));
                    return e = null,
                    s
                }
                ]; l < o; l++)
                    if (i = n.relative[t[l].type])
                        d = [yt(wt(d), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[y]) {
                            for (s = ++l; s < o && !n.relative[t[s].type]; s++)
                                ;
                            return Ct(l > 1 && wt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(B, "$1"), i, l < s && Tt(t.slice(l, s)), s < o && Tt(t = t.slice(s)), s < o && bt(t))
                        }
                        d.push(i)
                    }
                return wt(d)
            }
            return _t.prototype = n.filters = n.pseudos,
            n.setFilters = new _t,
            r = at.tokenize = function(t, e) {
                var i, s, o, r, a, l, c, u = k[t + " "];
                if (u)
                    return e ? 0 : u.slice(0);
                for (a = t,
                l = [],
                c = n.preFilter; a; ) {
                    for (r in i && !(s = q.exec(a)) || (s && (a = a.slice(s[0].length) || a),
                    l.push(o = [])),
                    i = !1,
                    (s = U.exec(a)) && (i = s.shift(),
                    o.push({
                        value: i,
                        type: s[0].replace(B, " ")
                    }),
                    a = a.slice(i.length)),
                    n.filter)
                        !(s = Q[r].exec(a)) || c[r] && !(s = c[r](s)) || (i = s.shift(),
                        o.push({
                            value: i,
                            type: r,
                            matches: s
                        }),
                        a = a.slice(i.length));
                    if (!i)
                        break
                }
                return e ? a.length : a ? at.error(t) : k(t, l).slice(0)
            }
            ,
            a = at.compile = function(t, e) {
                var i, s = [], o = [], a = S[t + " "];
                if (!a) {
                    for (e || (e = r(t)),
                    i = e.length; i--; )
                        (a = Tt(e[i]))[y] ? s.push(a) : o.push(a);
                    (a = S(t, function(t, e) {
                        var i = e.length > 0
                          , s = t.length > 0
                          , o = function(o, r, a, l, u) {
                            var h, f, g, v = 0, _ = "0", b = o && [], y = [], w = c, C = o || s && n.find.TAG("*", u), T = x += null == w ? 1 : Math.random() || .1, k = C.length;
                            for (u && (c = r === p || r || u); _ !== k && null != (h = C[_]); _++) {
                                if (s && h) {
                                    for (f = 0,
                                    r || h.ownerDocument === p || (d(h),
                                    a = !m); g = t[f++]; )
                                        if (g(h, r || p, a)) {
                                            l.push(h);
                                            break
                                        }
                                    u && (x = T)
                                }
                                i && ((h = !g && h) && v--,
                                o && b.push(h))
                            }
                            if (v += _,
                            i && _ !== v) {
                                for (f = 0; g = e[f++]; )
                                    g(b, y, r, a);
                                if (o) {
                                    if (v > 0)
                                        for (; _--; )
                                            b[_] || y[_] || (y[_] = O.call(l));
                                    y = xt(y)
                                }
                                P.apply(l, y),
                                u && !o && y.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                            }
                            return u && (x = T,
                            c = w),
                            b
                        };
                        return i ? ct(o) : o
                    }(o, s))).selector = t
                }
                return a
            }
            ,
            l = at.select = function(t, e, i, s) {
                var o, l, c, u, h, d = "function" == typeof t && t, p = !s && r(t = d.selector || t);
                if (i = i || [],
                1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                        if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
                            return i;
                        d && (e = e.parentNode),
                        t = t.slice(l.shift().value.length)
                    }
                    for (o = Q.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o],
                    !n.relative[u = c.type]); )
                        if ((h = n.find[u]) && (s = h(c.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1),
                            !(t = s.length && bt(l)))
                                return P.apply(i, s),
                                i;
                            break
                        }
                }
                return (d || a(t, p))(s, e, !m, i, !e || tt.test(t) && vt(e.parentNode) || e),
                i
            }
            ,
            i.sortStable = y.split("").sort(E).join("") === y,
            i.detectDuplicates = !!h,
            d(),
            i.sortDetached = ut(function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
            }),
            ut(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, i) {
                if (!i)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            i.attributes && ut(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            ut(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(L, function(t, e, i) {
                var n;
                if (!i)
                    return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }),
            at
        }(i);
        C.find = S,
        C.expr = S.selectors,
        C.expr[":"] = C.expr.pseudos,
        C.uniqueSort = C.unique = S.uniqueSort,
        C.text = S.getText,
        C.isXMLDoc = S.isXML,
        C.contains = S.contains,
        C.escapeSelector = S.escape;
        var D = function(t, e, i) {
            for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (s && C(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        }
          , E = function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
          , I = C.expr.match.needsContext;
        function A(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function N(t, e, i) {
            return _(e) ? C.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? C.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? C.grep(t, function(t) {
                return h.call(e, t) > -1 !== i
            }) : C.filter(e, t, i)
        }
        C.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        C.fn.extend({
            find: function(t) {
                var e, i, n = this.length, s = this;
                if ("string" != typeof t)
                    return this.pushStack(C(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (C.contains(s[e], this))
                                return !0
                    }));
                for (i = this.pushStack([]),
                e = 0; e < n; e++)
                    C.find(t, s[e], i);
                return n > 1 ? C.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(N(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(N(this, t || [], !0))
            },
            is: function(t) {
                return !!N(this, "string" == typeof t && I.test(t) ? C(t) : t || [], !1).length
            }
        });
        var P, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(t, e, i) {
            var n, s;
            if (!t)
                return this;
            if (i = i || P,
            "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || !n[1] && e)
                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof C ? e[0] : e,
                    C.merge(this, C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : r, !0)),
                    O.test(n[1]) && C.isPlainObject(e))
                        for (n in e)
                            _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (s = r.getElementById(n[2])) && (this[0] = s,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : _(t) ? void 0 !== i.ready ? i.ready(t) : t(C) : C.makeArray(t, this)
        }
        ).prototype = C.fn,
        P = C(r);
        var H = /^(?:parents|prev(?:Until|All))/
          , L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function R(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        C.fn.extend({
            has: function(t) {
                var e = C(t, this)
                  , i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (C.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0, s = this.length, o = [], r = "string" != typeof t && C(t);
                if (!I.test(t))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            }
                return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? h.call(C(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        C.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return D(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return D(t, "parentNode", i)
            },
            next: function(t) {
                return R(t, "nextSibling")
            },
            prev: function(t) {
                return R(t, "previousSibling")
            },
            nextAll: function(t) {
                return D(t, "nextSibling")
            },
            prevAll: function(t) {
                return D(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return D(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return D(t, "previousSibling", i)
            },
            siblings: function(t) {
                return E((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return E(t.firstChild)
            },
            contents: function(t) {
                return void 0 !== t.contentDocument ? t.contentDocument : (A(t, "template") && (t = t.content || t),
                C.merge([], t.childNodes))
            }
        }, function(t, e) {
            C.fn[t] = function(i, n) {
                var s = C.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (s = C.filter(n, s)),
                this.length > 1 && (L[t] || C.uniqueSort(s),
                H.test(t) && s.reverse()),
                this.pushStack(s)
            }
        });
        var W = /[^\x20\t\r\n\f]+/g;
        function j(t) {
            return t
        }
        function z(t) {
            throw t
        }
        function F(t, e, i, n) {
            var s;
            try {
                t && _(s = t.promise) ? s.call(t).done(e).fail(i) : t && _(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        C.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return C.each(t.match(W) || [], function(t, i) {
                    e[i] = !0
                }),
                e
            }(t) : C.extend({}, t);
            var e, i, n, s, o = [], r = [], a = -1, l = function() {
                for (s = s || t.once,
                n = e = !0; r.length; a = -1)
                    for (i = r.shift(); ++a < o.length; )
                        !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length,
                        i = !1);
                t.memory || (i = !1),
                e = !1,
                s && (o = i ? [] : "")
            }, c = {
                add: function() {
                    return o && (i && !e && (a = o.length - 1,
                    r.push(i)),
                    function e(i) {
                        C.each(i, function(i, n) {
                            _(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== x(n) && e(n)
                        })
                    }(arguments),
                    i && !e && l()),
                    this
                },
                remove: function() {
                    return C.each(arguments, function(t, e) {
                        for (var i; (i = C.inArray(e, o, i)) > -1; )
                            o.splice(i, 1),
                            i <= a && a--
                    }),
                    this
                },
                has: function(t) {
                    return t ? C.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return s = r = [],
                    o = i = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = r = [],
                    i || e || (o = i = ""),
                    this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(t, i) {
                    return s || (i = [t, (i = i || []).slice ? i.slice() : i],
                    r.push(i),
                    e || l()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!n
                }
            };
            return c
        }
        ,
        C.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                  , n = "pending"
                  , s = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return s.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return C.Deferred(function(i) {
                            C.each(e, function(e, n) {
                                var s = _(t[n[4]]) && t[n[4]];
                                o[n[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && _(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(t, n, s) {
                        var o = 0;
                        function r(t, e, n, s) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , c = function() {
                                    var i, c;
                                    if (!(t < o)) {
                                        if ((i = n.apply(a, l)) === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                        _(c) ? s ? c.call(i, r(o, e, j, s), r(o, e, z, s)) : (o++,
                                        c.call(i, r(o, e, j, s), r(o, e, z, s), r(o, e, j, e.notifyWith))) : (n !== j && (a = void 0,
                                        l = [i]),
                                        (s || e.resolveWith)(a, l))
                                    }
                                }
                                  , u = s ? c : function() {
                                    try {
                                        c()
                                    } catch (i) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, u.stackTrace),
                                        t + 1 >= o && (n !== z && (a = void 0,
                                        l = [i]),
                                        e.rejectWith(a, l))
                                    }
                                }
                                ;
                                t ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()),
                                i.setTimeout(u))
                            }
                        }
                        return C.Deferred(function(i) {
                            e[0][3].add(r(0, i, _(s) ? s : j, i.notifyWith)),
                            e[1][3].add(r(0, i, _(t) ? t : j)),
                            e[2][3].add(r(0, i, _(n) ? n : z))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? C.extend(t, s) : s
                    }
                }
                  , o = {};
                return C.each(e, function(t, i) {
                    var r = i[2]
                      , a = i[5];
                    s[i[1]] = r.add,
                    a && r.add(function() {
                        n = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    r.add(i[3].fire),
                    o[i[0]] = function() {
                        return o[i[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                    }
                    ,
                    o[i[0] + "With"] = r.fireWith
                }),
                s.promise(o),
                t && t.call(o, o),
                o
            },
            when: function(t) {
                var e = arguments.length
                  , i = e
                  , n = Array(i)
                  , s = l.call(arguments)
                  , o = C.Deferred()
                  , r = function(t) {
                    return function(i) {
                        n[t] = this,
                        s[t] = arguments.length > 1 ? l.call(arguments) : i,
                        --e || o.resolveWith(n, s)
                    }
                };
                if (e <= 1 && (F(t, o.done(r(i)).resolve, o.reject, !e),
                "pending" === o.state() || _(s[i] && s[i].then)))
                    return o.then();
                for (; i--; )
                    F(s[i], r(i), o.reject);
                return o.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && B.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        C.readyException = function(t) {
            i.setTimeout(function() {
                throw t
            })
        }
        ;
        var q = C.Deferred();
        function U() {
            r.removeEventListener("DOMContentLoaded", U),
            i.removeEventListener("load", U),
            C.ready()
        }
        C.fn.ready = function(t) {
            return q.then(t).catch(function(t) {
                C.readyException(t)
            }),
            this
        }
        ,
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0,
                !0 !== t && --C.readyWait > 0 || q.resolveWith(r, [C]))
            }
        }),
        C.ready.then = q.then,
        "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? i.setTimeout(C.ready) : (r.addEventListener("DOMContentLoaded", U),
        i.addEventListener("load", U));
        var V = function(t, e, i, n, s, o, r) {
            var a = 0
              , l = t.length
              , c = null == i;
            if ("object" === x(i))
                for (a in s = !0,
                i)
                    V(t, e, a, i[a], !0, o, r);
            else if (void 0 !== n && (s = !0,
            _(n) || (r = !0),
            c && (r ? (e.call(t, n),
            e = null) : (c = e,
            e = function(t, e, i) {
                return c.call(C(t), i)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        }
          , Y = /^-ms-/
          , K = /-([a-z])/g;
        function Q(t, e) {
            return e.toUpperCase()
        }
        function G(t) {
            return t.replace(Y, "ms-").replace(K, Q)
        }
        var X = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        function $() {
            this.expando = C.expando + $.uid++
        }
        $.uid = 1,
        $.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e)
                    s[G(e)] = i;
                else
                    for (n in e)
                        s[G(n)] = e[n];
                return s
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
                void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(G) : (e = G(e))in n ? [e] : e.match(W) || []).length;
                        for (; i--; )
                            delete n[e[i]]
                    }
                    (void 0 === e || C.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !C.isEmptyObject(e)
            }
        };
        var J = new $
          , Z = new $
          , tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , et = /[A-Z]/g;
        function it(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(et, "-$&").toLowerCase(),
                "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    Z.set(t, e, i)
                } else
                    i = void 0;
            return i
        }
        C.extend({
            hasData: function(t) {
                return Z.hasData(t) || J.hasData(t)
            },
            data: function(t, e, i) {
                return Z.access(t, e, i)
            },
            removeData: function(t, e) {
                Z.remove(t, e)
            },
            _data: function(t, e, i) {
                return J.access(t, e, i)
            },
            _removeData: function(t, e) {
                J.remove(t, e)
            }
        }),
        C.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0], r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = Z.get(o),
                    1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (i = r.length; i--; )
                            r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = G(n.slice(5)),
                            it(o, n, s[n]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    Z.set(this, t)
                }) : V(this, function(e) {
                    var i;
                    if (o && void 0 === e)
                        return void 0 !== (i = Z.get(o, t)) ? i : void 0 !== (i = it(o, t)) ? i : void 0;
                    this.each(function() {
                        Z.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Z.remove(this, t)
                })
            }
        }),
        C.extend({
            queue: function(t, e, i) {
                var n;
                if (t)
                    return e = (e || "fx") + "queue",
                    n = J.get(t, e),
                    i && (!n || Array.isArray(i) ? n = J.access(t, e, C.makeArray(i)) : n.push(i)),
                    n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = C.queue(t, e)
                  , n = i.length
                  , s = i.shift()
                  , o = C._queueHooks(t, e);
                "inprogress" === s && (s = i.shift(),
                n--),
                s && ("fx" === e && i.unshift("inprogress"),
                delete o.stop,
                s.call(t, function() {
                    C.dequeue(t, e)
                }, o)),
                !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return J.get(t, i) || J.access(t, i, {
                    empty: C.Callbacks("once memory").add(function() {
                        J.remove(t, [e + "queue", i])
                    })
                })
            }
        }),
        C.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                i--),
                arguments.length < i ? C.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = C.queue(this, t, e);
                    C._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    C.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1, s = C.Deferred(), o = this, r = this.length, a = function() {
                    --n || s.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; r--; )
                    (i = J.get(o[r], t + "queueHooks")) && i.empty && (n++,
                    i.empty.add(a));
                return a(),
                s.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , st = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$","i")
          , ot = ["Top", "Right", "Bottom", "Left"]
          , rt = r.documentElement
          , at = function(t) {
            return C.contains(t.ownerDocument, t)
        }
          , lt = {
            composed: !0
        };
        rt.getRootNode && (at = function(t) {
            return C.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
        }
        );
        var ct = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === C.css(t, "display")
        }
          , ut = function(t, e, i, n) {
            var s, o, r = {};
            for (o in e)
                r[o] = t.style[o],
                t.style[o] = e[o];
            for (o in s = i.apply(t, n || []),
            e)
                t.style[o] = r[o];
            return s
        };
        function ht(t, e, i, n) {
            var s, o, r = 20, a = n ? function() {
                return n.cur()
            }
            : function() {
                return C.css(t, e, "")
            }
            , l = a(), c = i && i[3] || (C.cssNumber[e] ? "" : "px"), u = t.nodeType && (C.cssNumber[e] || "px" !== c && +l) && st.exec(C.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2,
                c = c || u[3],
                u = +l || 1; r--; )
                    C.style(t, e, u + c),
                    (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0),
                    u /= o;
                u *= 2,
                C.style(t, e, u + c),
                i = i || []
            }
            return i && (u = +u || +l || 0,
            s = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
            n && (n.unit = c,
            n.start = u,
            n.end = s)),
            s
        }
        var dt = {};
        function pt(t) {
            var e, i = t.ownerDocument, n = t.nodeName, s = dt[n];
            return s || (e = i.body.appendChild(i.createElement(n)),
            s = C.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === s && (s = "block"),
            dt[n] = s,
            s)
        }
        function ft(t, e) {
            for (var i, n, s = [], o = 0, r = t.length; o < r; o++)
                (n = t[o]).style && (i = n.style.display,
                e ? ("none" === i && (s[o] = J.get(n, "display") || null,
                s[o] || (n.style.display = "")),
                "" === n.style.display && ct(n) && (s[o] = pt(n))) : "none" !== i && (s[o] = "none",
                J.set(n, "display", i)));
            for (o = 0; o < r; o++)
                null != s[o] && (t[o].style.display = s[o]);
            return t
        }
        C.fn.extend({
            show: function() {
                return ft(this, !0)
            },
            hide: function() {
                return ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    ct(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var mt = /^(?:checkbox|radio)$/i
          , gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , vt = /^$|^module$|\/(?:java|ecma)script/i
          , _t = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function bt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && A(t, e) ? C.merge([t], i) : i
        }
        function yt(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"))
        }
        _t.optgroup = _t.option,
        _t.tbody = _t.tfoot = _t.colgroup = _t.caption = _t.thead,
        _t.th = _t.td;
        var wt, xt, Ct = /<|&#?\w+;/;
        function Tt(t, e, i, n, s) {
            for (var o, r, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === x(o))
                        C.merge(d, o.nodeType ? [o] : o);
                    else if (Ct.test(o)) {
                        for (r = r || h.appendChild(e.createElement("div")),
                        a = (gt.exec(o) || ["", ""])[1].toLowerCase(),
                        l = _t[a] || _t._default,
                        r.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                        u = l[0]; u--; )
                            r = r.lastChild;
                        C.merge(d, r.childNodes),
                        (r = h.firstChild).textContent = ""
                    } else
                        d.push(e.createTextNode(o));
            for (h.textContent = "",
            p = 0; o = d[p++]; )
                if (n && C.inArray(o, n) > -1)
                    s && s.push(o);
                else if (c = at(o),
                r = bt(h.appendChild(o), "script"),
                c && yt(r),
                i)
                    for (u = 0; o = r[u++]; )
                        vt.test(o.type || "") && i.push(o);
            return h
        }
        wt = r.createDocumentFragment().appendChild(r.createElement("div")),
        (xt = r.createElement("input")).setAttribute("type", "radio"),
        xt.setAttribute("checked", "checked"),
        xt.setAttribute("name", "t"),
        wt.appendChild(xt),
        v.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked,
        wt.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;
        var kt = /^key/
          , St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Dt = /^([^.]*)(?:\.(.+)|)/;
        function Et() {
            return !0
        }
        function It() {
            return !1
        }
        function At(t, e) {
            return t === function() {
                try {
                    return r.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }
        function Ot(t, e, i, n, s, o) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i,
                i = void 0),
                e)
                    Ot(t, a, i, n, e[a], o);
                return t
            }
            if (null == n && null == s ? (s = i,
            n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
            n = void 0) : (s = n,
            n = i,
            i = void 0)),
            !1 === s)
                s = It;
            else if (!s)
                return t;
            return 1 === o && (r = s,
            (s = function(t) {
                return C().off(t),
                r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = C.guid++)),
            t.each(function() {
                C.event.add(this, e, s, n, i)
            })
        }
        function Nt(t, e, i) {
            i ? (J.set(t, e, !1),
            C.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var n, s, o = J.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length)
                            (C.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (o = l.call(arguments),
                        J.set(this, e, o),
                        n = i(this, e),
                        this[e](),
                        o !== (s = J.get(this, e)) || n ? J.set(this, e, !1) : s = {},
                        o !== s)
                            return t.stopImmediatePropagation(),
                            t.preventDefault(),
                            s.value
                    } else
                        o.length && (J.set(this, e, {
                            value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                        }),
                        t.stopImmediatePropagation())
                }
            })) : void 0 === J.get(t, e) && C.event.add(t, e, Et)
        }
        C.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, r, a, l, c, u, h, d, p, f, m, g = J.get(t);
                if (g)
                    for (i.handler && (i = (o = i).handler,
                    s = o.selector),
                    s && C.find.matchesSelector(rt, s),
                    i.guid || (i.guid = C.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (r = g.handle) || (r = g.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    c = (e = (e || "").match(W) || [""]).length; c--; )
                        p = m = (a = Dt.exec(e[c]) || [])[1],
                        f = (a[2] || "").split(".").sort(),
                        p && (h = C.event.special[p] || {},
                        p = (s ? h.delegateType : h.bindType) || p,
                        h = C.event.special[p] || {},
                        u = C.extend({
                            type: p,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && C.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, o),
                        (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                        h.setup && !1 !== h.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)),
                        h.add && (h.add.call(t, u),
                        u.handler.guid || (u.handler.guid = i.guid)),
                        s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                        C.event.global[p] = !0)
            },
            remove: function(t, e, i, n, s) {
                var o, r, a, l, c, u, h, d, p, f, m, g = J.hasData(t) && J.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(W) || [""]).length; c--; )
                        if (p = m = (a = Dt.exec(e[c]) || [])[1],
                        f = (a[2] || "").split(".").sort(),
                        p) {
                            for (h = C.event.special[p] || {},
                            d = l[p = (n ? h.delegateType : h.bindType) || p] || [],
                            a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            r = o = d.length; o--; )
                                u = d[o],
                                !s && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1),
                                u.selector && d.delegateCount--,
                                h.remove && h.remove.call(t, u));
                            r && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle),
                            delete l[p])
                        } else
                            for (p in l)
                                C.event.remove(t, p + e[c], i, n, !0);
                    C.isEmptyObject(l) && J.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, s, o, r, a = C.event.fix(t), l = new Array(arguments.length), c = (J.get(this, "events") || {})[a.type] || [], u = C.event.special[a.type] || {};
                for (l[0] = a,
                e = 1; e < arguments.length; e++)
                    l[e] = arguments[e];
                if (a.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (r = C.event.handlers.call(this, a, c),
                    e = 0; (s = r[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = s.elem,
                        i = 0; (o = s.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                            a.data = o.data,
                            void 0 !== (n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(),
                            a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, r, a = [], l = e.delegateCount, c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (o = [],
                            r = {},
                            i = 0; i < l; i++)
                                void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length),
                                r[s] && o.push(n);
                            o.length && a.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this,
                l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: _(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[C.expando] ? t : new C.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return mt.test(e.type) && e.click && A(e, "input") && Nt(e, "click", Et),
                        !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return mt.test(e.type) && e.click && A(e, "input") && Nt(e, "click"),
                        !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return mt.test(e.type) && e.click && A(e, "input") && J.get(e, "click") || A(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        C.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }
        ,
        C.Event = function(t, e) {
            if (!(this instanceof C.Event))
                return new C.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : It,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && C.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[C.expando] = !0
        }
        ,
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: It,
            isPropagationStopped: It,
            isImmediatePropagationStopped: It,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Et,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Et,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Et,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && St.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, C.event.addProp),
        C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            C.event.special[t] = {
                setup: function() {
                    return Nt(this, t, At),
                    !1
                },
                trigger: function() {
                    return Nt(this, t),
                    !0
                },
                delegateType: e
            }
        }),
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            C.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget, s = t.handleObj;
                    return n && (n === this || C.contains(this, n)) || (t.type = s.origType,
                    i = s.handler.apply(this, arguments),
                    t.type = e),
                    i
                }
            }
        }),
        C.fn.extend({
            on: function(t, e, i, n) {
                return Ot(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return Ot(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj)
                    return n = t.handleObj,
                    C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                    this;
                if ("object" == typeof t) {
                    for (s in t)
                        this.off(s, e, t[s]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e,
                e = void 0),
                !1 === i && (i = It),
                this.each(function() {
                    C.event.remove(this, t, i, e)
                })
            }
        });
        var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Mt = /<script|<style|<link/i
          , Ht = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Rt(t, e) {
            return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
        }
        function Wt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function jt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function zt(t, e) {
            var i, n, s, o, r, a, l, c;
            if (1 === e.nodeType) {
                if (J.hasData(t) && (o = J.access(t),
                r = J.set(e, o),
                c = o.events))
                    for (s in delete r.handle,
                    r.events = {},
                    c)
                        for (i = 0,
                        n = c[s].length; i < n; i++)
                            C.event.add(e, s, c[s][i]);
                Z.hasData(t) && (a = Z.access(t),
                l = C.extend({}, a),
                Z.set(e, l))
            }
        }
        function Ft(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && mt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
        function Bt(t, e, i, n) {
            e = c.apply([], e);
            var s, o, r, a, l, u, h = 0, d = t.length, p = d - 1, f = e[0], m = _(f);
            if (m || d > 1 && "string" == typeof f && !v.checkClone && Ht.test(f))
                return t.each(function(s) {
                    var o = t.eq(s);
                    m && (e[0] = f.call(this, s, o.html())),
                    Bt(o, e, i, n)
                });
            if (d && (o = (s = Tt(e, t[0].ownerDocument, !1, t, n)).firstChild,
            1 === s.childNodes.length && (s = o),
            o || n)) {
                for (a = (r = C.map(bt(s, "script"), Wt)).length; h < d; h++)
                    l = s,
                    h !== p && (l = C.clone(l, !0, !0),
                    a && C.merge(r, bt(l, "script"))),
                    i.call(t[h], l, h);
                if (a)
                    for (u = r[r.length - 1].ownerDocument,
                    C.map(r, jt),
                    h = 0; h < a; h++)
                        l = r[h],
                        vt.test(l.type || "") && !J.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }) : w(l.textContent.replace(Lt, ""), l, u))
            }
            return t
        }
        function qt(t, e, i) {
            for (var n, s = e ? C.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
                i || 1 !== n.nodeType || C.cleanData(bt(n)),
                n.parentNode && (i && at(n) && yt(bt(n, "script")),
                n.parentNode.removeChild(n));
            return t
        }
        C.extend({
            htmlPrefilter: function(t) {
                return t.replace(Pt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, s, o, r, a = t.cloneNode(!0), l = at(t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                    for (r = bt(a),
                    n = 0,
                    s = (o = bt(t)).length; n < s; n++)
                        Ft(o[n], r[n]);
                if (e)
                    if (i)
                        for (o = o || bt(t),
                        r = r || bt(a),
                        n = 0,
                        s = o.length; n < s; n++)
                            zt(o[n], r[n]);
                    else
                        zt(t, a);
                return (r = bt(a, "script")).length > 0 && yt(r, !l && bt(t, "script")),
                a
            },
            cleanData: function(t) {
                for (var e, i, n, s = C.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (X(i)) {
                        if (e = i[J.expando]) {
                            if (e.events)
                                for (n in e.events)
                                    s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
                            i[J.expando] = void 0
                        }
                        i[Z.expando] && (i[Z.expando] = void 0)
                    }
            }
        }),
        C.fn.extend({
            detach: function(t) {
                return qt(this, t, !0)
            },
            remove: function(t) {
                return qt(this, t)
            },
            text: function(t) {
                return V(this, function(t) {
                    return void 0 === t ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Bt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Bt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Rt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Bt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Bt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (C.cleanData(bt(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return C.clone(this, t, e)
                })
            },
            html: function(t) {
                return V(this, function(t) {
                    var e = this[0] || {}
                      , i = 0
                      , n = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Mt.test(t) && !_t[(gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = C.htmlPrefilter(t);
                        try {
                            for (; i < n; i++)
                                1 === (e = this[i] || {}).nodeType && (C.cleanData(bt(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Bt(this, arguments, function(e) {
                    var i = this.parentNode;
                    C.inArray(this, t) < 0 && (C.cleanData(bt(this)),
                    i && i.replaceChild(e, this))
                }, t)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            C.fn[t] = function(t) {
                for (var i, n = [], s = C(t), o = s.length - 1, r = 0; r <= o; r++)
                    i = r === o ? this : this.clone(!0),
                    C(s[r])[e](i),
                    u.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ut = new RegExp("^(" + nt + ")(?!px)[a-z%]+$","i")
          , Vt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = i),
            e.getComputedStyle(t)
        }
          , Yt = new RegExp(ot.join("|"),"i");
        function Kt(t, e, i) {
            var n, s, o, r, a = t.style;
            return (i = i || Vt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || at(t) || (r = C.style(t, e)),
            !v.pixelBoxStyles() && Ut.test(r) && Yt.test(e) && (n = a.width,
            s = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = r,
            r = i.width,
            a.width = n,
            a.minWidth = s,
            a.maxWidth = o)),
            void 0 !== r ? r + "" : r
        }
        function Qt(t, e) {
            return {
                get: function() {
                    if (!t())
                        return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function t() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    rt.appendChild(c).appendChild(u);
                    var t = i.getComputedStyle(u);
                    n = "1%" !== t.top,
                    l = 12 === e(t.marginLeft),
                    u.style.right = "60%",
                    a = 36 === e(t.right),
                    s = 36 === e(t.width),
                    u.style.position = "absolute",
                    o = 12 === e(u.offsetWidth / 3),
                    rt.removeChild(c),
                    u = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var n, s, o, a, l, c = r.createElement("div"), u = r.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === u.style.backgroundClip,
            C.extend(v, {
                boxSizingReliable: function() {
                    return t(),
                    s
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    n
                },
                reliableMarginLeft: function() {
                    return t(),
                    l
                },
                scrollboxSize: function() {
                    return t(),
                    o
                }
            }))
        }();
        var Gt = ["Webkit", "Moz", "ms"]
          , Xt = r.createElement("div").style
          , $t = {};
        function Jt(t) {
            var e = C.cssProps[t] || $t[t];
            return e || (t in Xt ? t : $t[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--; )
                    if ((t = Gt[i] + e)in Xt)
                        return t
            }(t) || t)
        }
        var Zt = /^(none|table(?!-c[ea]).+)/
          , te = /^--/
          , ee = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , ie = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function ne(t, e, i) {
            var n = st.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }
        function se(t, e, i, n, s, o) {
            var r = "width" === e ? 1 : 0
              , a = 0
              , l = 0;
            if (i === (n ? "border" : "content"))
                return 0;
            for (; r < 4; r += 2)
                "margin" === i && (l += C.css(t, i + ot[r], !0, s)),
                n ? ("content" === i && (l -= C.css(t, "padding" + ot[r], !0, s)),
                "margin" !== i && (l -= C.css(t, "border" + ot[r] + "Width", !0, s))) : (l += C.css(t, "padding" + ot[r], !0, s),
                "padding" !== i ? l += C.css(t, "border" + ot[r] + "Width", !0, s) : a += C.css(t, "border" + ot[r] + "Width", !0, s));
            return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0),
            l
        }
        function oe(t, e, i) {
            var n = Vt(t)
              , s = (!v.boxSizingReliable() || i) && "border-box" === C.css(t, "boxSizing", !1, n)
              , o = s
              , r = Kt(t, e, n)
              , a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Ut.test(r)) {
                if (!i)
                    return r;
                r = "auto"
            }
            return (!v.boxSizingReliable() && s || "auto" === r || !parseFloat(r) && "inline" === C.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === C.css(t, "boxSizing", !1, n),
            (o = a in t) && (r = t[a])),
            (r = parseFloat(r) || 0) + se(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
        }
        function re(t, e, i, n, s) {
            return new re.prototype.init(t,e,i,n,s)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Kt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = G(e), l = te.test(e), c = t.style;
                    if (l || (e = Jt(a)),
                    r = C.cssHooks[e] || C.cssHooks[a],
                    void 0 === i)
                        return r && "get"in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e];
                    "string" === (o = typeof i) && (s = st.exec(i)) && s[1] && (i = ht(t, e, s),
                    o = "number"),
                    null != i && i == i && ("number" !== o || l || (i += s && s[3] || (C.cssNumber[a] ? "" : "px")),
                    v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                    r && "set"in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var s, o, r, a = G(e);
                return te.test(e) || (e = Jt(a)),
                (r = C.cssHooks[e] || C.cssHooks[a]) && "get"in r && (s = r.get(t, !0, i)),
                void 0 === s && (s = Kt(t, e, n)),
                "normal" === s && e in ie && (s = ie[e]),
                "" === i || i ? (o = parseFloat(s),
                !0 === i || isFinite(o) ? o || 0 : s) : s
            }
        }),
        C.each(["height", "width"], function(t, e) {
            C.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i)
                        return !Zt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? oe(t, e, n) : ut(t, ee, function() {
                            return oe(t, e, n)
                        })
                },
                set: function(t, i, n) {
                    var s, o = Vt(t), r = !v.scrollboxSize() && "absolute" === o.position, a = (r || n) && "border-box" === C.css(t, "boxSizing", !1, o), l = n ? se(t, e, n, a, o) : 0;
                    return a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - se(t, e, "border", !1, o) - .5)),
                    l && (s = st.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i,
                    i = C.css(t, e)),
                    ne(0, i, l)
                }
            }
        }),
        C.cssHooks.marginLeft = Qt(v.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(Kt(t, "marginLeft")) || t.getBoundingClientRect().left - ut(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            C.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                        s[t + ot[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            },
            "margin" !== t && (C.cssHooks[t + e].set = ne)
        }),
        C.fn.extend({
            css: function(t, e) {
                return V(this, function(t, e, i) {
                    var n, s, o = {}, r = 0;
                    if (Array.isArray(e)) {
                        for (n = Vt(t),
                        s = e.length; r < s; r++)
                            o[e[r]] = C.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        C.Tween = re,
        re.prototype = {
            constructor: re,
            init: function(t, e, i, n, s, o) {
                this.elem = t,
                this.prop = i,
                this.easing = s || C.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = n,
                this.unit = o || (C.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : re.propHooks._default.set(this),
                this
            }
        },
        re.prototype.init.prototype = re.prototype,
        re.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !C.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        re.propHooks.scrollTop = re.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        C.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = re.prototype.init,
        C.fx.step = {};
        var ae, le, ce = /^(?:toggle|show|hide)$/, ue = /queueHooks$/;
        function he() {
            le && (!1 === r.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(he) : i.setTimeout(he, C.fx.interval),
            C.fx.tick())
        }
        function de() {
            return i.setTimeout(function() {
                ae = void 0
            }),
            ae = Date.now()
        }
        function pe(t, e) {
            var i, n = 0, s = {
                height: t
            };
            for (e = e ? 1 : 0; n < 4; n += 2 - e)
                s["margin" + (i = ot[n])] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t),
            s
        }
        function fe(t, e, i) {
            for (var n, s = (me.tweeners[e] || []).concat(me.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                if (n = s[o].call(i, e, t))
                    return n
        }
        function me(t, e, i) {
            var n, s, o = 0, r = me.prefilters.length, a = C.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (s)
                    return !1;
                for (var e = ae || de(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++)
                    c.tweens[o].run(n);
                return a.notifyWith(t, [c, n, i]),
                n < 1 && r ? i : (r || a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c]),
                !1)
            }, c = a.promise({
                elem: t,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ae || de(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = C.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n),
                    n
                },
                stop: function(e) {
                    var i = 0
                      , n = e ? c.tweens.length : 0;
                    if (s)
                        return this;
                    for (s = !0; i < n; i++)
                        c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]),
                    a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                    this
                }
            }), u = c.props;
            for (!function(t, e) {
                var i, n, s, o, r;
                for (i in t)
                    if (s = e[n = G(i)],
                    o = t[i],
                    Array.isArray(o) && (s = o[1],
                    o = t[i] = o[0]),
                    i !== n && (t[n] = o,
                    delete t[i]),
                    (r = C.cssHooks[n]) && "expand"in r)
                        for (i in o = r.expand(o),
                        delete t[n],
                        o)
                            i in t || (t[i] = o[i],
                            e[i] = s);
                    else
                        e[n] = s
            }(u, c.opts.specialEasing); o < r; o++)
                if (n = me.prefilters[o].call(c, t, u, c.opts))
                    return _(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                    n;
            return C.map(u, fe, c),
            _(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            C.fx.timer(C.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        C.Animation = C.extend(me, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return ht(i.elem, t, st.exec(e), i),
                    i
                }
                ]
            },
            tweener: function(t, e) {
                _(t) ? (e = t,
                t = ["*"]) : t = t.match(W);
                for (var i, n = 0, s = t.length; n < s; n++)
                    i = t[n],
                    me.tweeners[i] = me.tweeners[i] || [],
                    me.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, s, o, r, a, l, c, u, h = "width"in e || "height"in e, d = this, p = {}, f = t.style, m = t.nodeType && ct(t), g = J.get(t, "fxshow");
                for (n in i.queue || (null == (r = C._queueHooks(t, "fx")).unqueued && (r.unqueued = 0,
                a = r.empty.fire,
                r.empty.fire = function() {
                    r.unqueued || a()
                }
                ),
                r.unqueued++,
                d.always(function() {
                    d.always(function() {
                        r.unqueued--,
                        C.queue(t, "fx").length || r.empty.fire()
                    })
                })),
                e)
                    if (s = e[n],
                    ce.test(s)) {
                        if (delete e[n],
                        o = o || "toggle" === s,
                        s === (m ? "hide" : "show")) {
                            if ("show" !== s || !g || void 0 === g[n])
                                continue;
                            m = !0
                        }
                        p[n] = g && g[n] || C.style(t, n)
                    }
                if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                    for (n in h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                    null == (c = g && g.display) && (c = J.get(t, "display")),
                    "none" === (u = C.css(t, "display")) && (c ? u = c : (ft([t], !0),
                    c = t.style.display || c,
                    u = C.css(t, "display"),
                    ft([t]))),
                    ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(t, "float") && (l || (d.done(function() {
                        f.display = c
                    }),
                    null == c && (u = f.display,
                    c = "none" === u ? "" : u)),
                    f.display = "inline-block")),
                    i.overflow && (f.overflow = "hidden",
                    d.always(function() {
                        f.overflow = i.overflow[0],
                        f.overflowX = i.overflow[1],
                        f.overflowY = i.overflow[2]
                    })),
                    l = !1,
                    p)
                        l || (g ? "hidden"in g && (m = g.hidden) : g = J.access(t, "fxshow", {
                            display: c
                        }),
                        o && (g.hidden = !m),
                        m && ft([t], !0),
                        d.done(function() {
                            for (n in m || ft([t]),
                            J.remove(t, "fxshow"),
                            p)
                                C.style(t, n, p[n])
                        })),
                        l = fe(m ? g[n] : 0, n, d),
                        n in g || (g[n] = l.start,
                        m && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(t, e) {
                e ? me.prefilters.unshift(t) : me.prefilters.push(t)
            }
        }),
        C.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? C.extend({}, t) : {
                complete: i || !i && e || _(t) && t,
                duration: t,
                easing: i && e || e && !_(e) && e
            };
            return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default),
            null != n.queue && !0 !== n.queue || (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function() {
                _(n.old) && n.old.call(this),
                n.queue && C.dequeue(this, n.queue)
            }
            ,
            n
        }
        ,
        C.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(ct).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = C.isEmptyObject(t)
                  , o = C.speed(e, i, n)
                  , r = function() {
                    var e = me(this, C.extend({}, t), o);
                    (s || J.get(this, "finish")) && e.stop(!0)
                };
                return r.finish = r,
                s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(i)
                };
                return "string" != typeof t && (i = e,
                e = t,
                t = void 0),
                e && !1 !== t && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , s = null != t && t + "queueHooks"
                      , o = C.timers
                      , r = J.get(this);
                    if (s)
                        r[s] && r[s].stop && n(r[s]);
                    else
                        for (s in r)
                            r[s] && r[s].stop && ue.test(s) && n(r[s]);
                    for (s = o.length; s--; )
                        o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i),
                        e = !1,
                        o.splice(s, 1));
                    !e && i || C.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"),
                this.each(function() {
                    var e, i = J.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = C.timers, r = n ? n.length : 0;
                    for (i.finish = !0,
                    C.queue(this, t, []),
                    s && s.stop && s.stop.call(this, !0),
                    e = o.length; e--; )
                        o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                        o.splice(e, 1));
                    for (e = 0; e < r; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }),
        C.each(["toggle", "show", "hide"], function(t, e) {
            var i = C.fn[e];
            C.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(pe(e, !0), t, n, s)
            }
        }),
        C.each({
            slideDown: pe("show"),
            slideUp: pe("hide"),
            slideToggle: pe("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            C.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }),
        C.timers = [],
        C.fx.tick = function() {
            var t, e = 0, i = C.timers;
            for (ae = Date.now(); e < i.length; e++)
                (t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || C.fx.stop(),
            ae = void 0
        }
        ,
        C.fx.timer = function(t) {
            C.timers.push(t),
            C.fx.start()
        }
        ,
        C.fx.interval = 13,
        C.fx.start = function() {
            le || (le = !0,
            he())
        }
        ,
        C.fx.stop = function() {
            le = null
        }
        ,
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        C.fn.delay = function(t, e) {
            return t = C.fx && C.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, function(e, n) {
                var s = i.setTimeout(e, t);
                n.stop = function() {
                    i.clearTimeout(s)
                }
            })
        }
        ,
        function() {
            var t = r.createElement("input")
              , e = r.createElement("select").appendChild(r.createElement("option"));
            t.type = "checkbox",
            v.checkOn = "" !== t.value,
            v.optSelected = e.selected,
            (t = r.createElement("input")).value = "t",
            t.type = "radio",
            v.radioValue = "t" === t.value
        }();
        var ge, ve = C.expr.attrHandle;
        C.fn.extend({
            attr: function(t, e) {
                return V(this, C.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    C.removeAttr(this, t)
                })
            }
        }),
        C.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === t.getAttribute ? C.prop(t, e, i) : (1 === o && C.isXMLDoc(t) || (s = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? ge : void 0)),
                    void 0 !== i ? null === i ? void C.removeAttr(t, e) : s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                    i) : s && "get"in s && null !== (n = s.get(t, e)) ? n : null == (n = C.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && A(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0, s = e && e.match(W);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++]; )
                        t.removeAttribute(i)
            }
        }),
        ge = {
            set: function(t, e, i) {
                return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i),
                i
            }
        },
        C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ve[e] || C.find.attr;
            ve[e] = function(t, e, n) {
                var s, o, r = e.toLowerCase();
                return n || (o = ve[r],
                ve[r] = s,
                s = null != i(t, e, n) ? r : null,
                ve[r] = o),
                s
            }
        });
        var _e = /^(?:input|select|textarea|button)$/i
          , be = /^(?:a|area)$/i;
        function ye(t) {
            return (t.match(W) || []).join(" ")
        }
        function we(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function xe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(W) || []
        }
        C.fn.extend({
            prop: function(t, e) {
                return V(this, C.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[C.propFix[t] || t]
                })
            }
        }),
        C.extend({
            prop: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e,
                    s = C.propHooks[e]),
                    void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = C.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (C.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }),
        C.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, r, a, l = 0;
                if (_(t))
                    return this.each(function(e) {
                        C(this).addClass(t.call(this, e, we(this)))
                    });
                if ((e = xe(t)).length)
                    for (; i = this[l++]; )
                        if (s = we(i),
                        n = 1 === i.nodeType && " " + ye(s) + " ") {
                            for (r = 0; o = e[r++]; )
                                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s !== (a = ye(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, r, a, l = 0;
                if (_(t))
                    return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, we(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = xe(t)).length)
                    for (; i = this[l++]; )
                        if (s = we(i),
                        n = 1 === i.nodeType && " " + ye(s) + " ") {
                            for (r = 0; o = e[r++]; )
                                for (; n.indexOf(" " + o + " ") > -1; )
                                    n = n.replace(" " + o + " ", " ");
                            s !== (a = ye(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t
                  , n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : _(t) ? this.each(function(i) {
                    C(this).toggleClass(t.call(this, i, we(this), e), e)
                }) : this.each(function() {
                    var e, s, o, r;
                    if (n)
                        for (s = 0,
                        o = C(this),
                        r = xe(t); e = r[s++]; )
                            o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                        void 0 !== t && "boolean" !== i || ((e = we(this)) && J.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++]; )
                    if (1 === i.nodeType && (" " + ye(we(i)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var Ce = /\r/g;
        C.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = _(t),
                this.each(function(i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? t.call(this, i, C(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                })) : s ? (e = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Ce, "") : null == i ? "" : i : void 0
            }
        }),
        C.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = C.find.attr(t, "value");
                        return null != e ? e : ye(C.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, s = t.options, o = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [], l = r ? o + 1 : s.length;
                        for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                            if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                                if (e = C(i).val(),
                                r)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = C.makeArray(e), r = s.length; r--; )
                            ((n = s[r]).selected = C.inArray(C.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = C.inArray(C(t).val(), e) > -1
                }
            },
            v.checkOn || (C.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }),
        v.focusin = "onfocusin"in i;
        var Te = /^(?:focusinfocus|focusoutblur)$/
          , ke = function(t) {
            t.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function(t, e, n, s) {
                var o, a, l, c, u, h, d, p, m = [n || r], g = f.call(t, "type") ? t.type : t, v = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = p = l = n = n || r,
                3 !== n.nodeType && 8 !== n.nodeType && !Te.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                g = v.shift(),
                v.sort()),
                u = g.indexOf(":") < 0 && "on" + g,
                (t = t[C.expando] ? t : new C.Event(g,"object" == typeof t && t)).isTrigger = s ? 2 : 3,
                t.namespace = v.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = n),
                e = null == e ? [t] : C.makeArray(e, [t]),
                d = C.event.special[g] || {},
                s || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                    if (!s && !d.noBubble && !b(n)) {
                        for (c = d.delegateType || g,
                        Te.test(c + g) || (a = a.parentNode); a; a = a.parentNode)
                            m.push(a),
                            l = a;
                        l === (n.ownerDocument || r) && m.push(l.defaultView || l.parentWindow || i)
                    }
                    for (o = 0; (a = m[o++]) && !t.isPropagationStopped(); )
                        p = a,
                        t.type = o > 1 ? c : d.bindType || g,
                        (h = (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) && h.apply(a, e),
                        (h = u && a[u]) && h.apply && X(a) && (t.result = h.apply(a, e),
                        !1 === t.result && t.preventDefault());
                    return t.type = g,
                    s || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), e) || !X(n) || u && _(n[g]) && !b(n) && ((l = n[u]) && (n[u] = null),
                    C.event.triggered = g,
                    t.isPropagationStopped() && p.addEventListener(g, ke),
                    n[g](),
                    t.isPropagationStopped() && p.removeEventListener(g, ke),
                    C.event.triggered = void 0,
                    l && (n[u] = l)),
                    t.result
                }
            },
            simulate: function(t, e, i) {
                var n = C.extend(new C.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                C.event.trigger(n, null, e)
            }
        }),
        C.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    C.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i)
                    return C.event.trigger(t, e, i, !0)
            }
        }),
        v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                C.event.simulate(e, t.target, C.event.fix(t))
            };
            C.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this
                      , s = J.access(n, e);
                    s || n.addEventListener(t, i, !0),
                    J.access(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this
                      , s = J.access(n, e) - 1;
                    s ? J.access(n, e, s) : (n.removeEventListener(t, i, !0),
                    J.remove(n, e))
                }
            }
        });
        var Se = i.location
          , De = Date.now()
          , Ee = /\?/;
        C.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t),
            e
        }
        ;
        var Ie = /\[\]$/
          , Ae = /\r?\n/g
          , Oe = /^(?:submit|button|image|reset|file)$/i
          , Ne = /^(?:input|select|textarea|keygen)/i;
        function Pe(t, e, i, n) {
            var s;
            if (Array.isArray(e))
                C.each(e, function(e, s) {
                    i || Ie.test(t) ? n(t, s) : Pe(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
                });
            else if (i || "object" !== x(e))
                n(t, e);
            else
                for (s in e)
                    Pe(t + "[" + s + "]", e[s], i, n)
        }
        C.param = function(t, e) {
            var i, n = [], s = function(t, e) {
                var i = _(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (null == t)
                return "";
            if (Array.isArray(t) || t.jquery && !C.isPlainObject(t))
                C.each(t, function() {
                    s(this.name, this.value)
                });
            else
                for (i in t)
                    Pe(i, t[i], e, s);
            return n.join("&")
        }
        ,
        C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = C.prop(this, "elements");
                    return t ? C.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !C(this).is(":disabled") && Ne.test(this.nodeName) && !Oe.test(t) && (this.checked || !mt.test(t))
                }).map(function(t, e) {
                    var i = C(this).val();
                    return null == i ? null : Array.isArray(i) ? C.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ae, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ae, "\r\n")
                    }
                }).get()
            }
        });
        var Me = /%20/g
          , He = /#.*$/
          , Le = /([?&])_=[^&]*/
          , Re = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , We = /^(?:GET|HEAD)$/
          , je = /^\/\//
          , ze = {}
          , Fe = {}
          , Be = "*/".concat("*")
          , qe = r.createElement("a");
        function Ue(t) {
            return function(e, i) {
                "string" != typeof e && (i = e,
                e = "*");
                var n, s = 0, o = e.toLowerCase().match(W) || [];
                if (_(i))
                    for (; n = o[s++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }
        function Ve(t, e, i, n) {
            var s = {}
              , o = t === Fe;
            function r(a) {
                var l;
                return s[a] = !0,
                C.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                    r(c),
                    !1)
                }),
                l
            }
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }
        function Ye(t, e) {
            var i, n, s = C.ajaxSettings.flatOptions || {};
            for (i in e)
                void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && C.extend(!0, t, n),
            t
        }
        qe.href = Se.href,
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Ye(Ye(t, C.ajaxSettings), e) : Ye(C.ajaxSettings, t)
            },
            ajaxPrefilter: Ue(ze),
            ajaxTransport: Ue(Fe),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var n, s, o, a, l, c, u, h, d, p, f = C.ajaxSetup({}, e), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? C(m) : C.event, v = C.Deferred(), _ = C.Callbacks("once memory"), b = f.statusCode || {}, y = {}, w = {}, x = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Re.exec(o); )
                                    a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                        y[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u)
                                T.always(t[T.status]);
                            else
                                for (e in t)
                                    b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return n && n.abort(e),
                        k(0, e),
                        this
                    }
                };
                if (v.promise(T),
                f.url = ((t || f.url || Se.href) + "").replace(je, Se.protocol + "//"),
                f.type = e.method || e.type || f.method || f.type,
                f.dataTypes = (f.dataType || "*").toLowerCase().match(W) || [""],
                null == f.crossDomain) {
                    c = r.createElement("a");
                    try {
                        c.href = f.url,
                        c.href = c.href,
                        f.crossDomain = qe.protocol + "//" + qe.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)),
                Ve(ze, f, e, T),
                u)
                    return T;
                for (d in (h = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !We.test(f.type),
                s = f.url.replace(He, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Me, "+")) : (p = f.url.slice(s.length),
                f.data && (f.processData || "string" == typeof f.data) && (s += (Ee.test(s) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (s = s.replace(Le, "$1"),
                p = (Ee.test(s) ? "&" : "?") + "_=" + De++ + p),
                f.url = s + p),
                f.ifModified && (C.lastModified[s] && T.setRequestHeader("If-Modified-Since", C.lastModified[s]),
                C.etag[s] && T.setRequestHeader("If-None-Match", C.etag[s])),
                (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    T.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || u))
                    return T.abort();
                if (x = "abort",
                _.add(f.complete),
                T.done(f.success),
                T.fail(f.error),
                n = Ve(Fe, f, e, T)) {
                    if (T.readyState = 1,
                    h && g.trigger("ajaxSend", [T, f]),
                    u)
                        return T;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1,
                        n.send(y, k)
                    } catch (t) {
                        if (u)
                            throw t;
                        k(-1, t)
                    }
                } else
                    k(-1, "No Transport");
                function k(t, e, r, a) {
                    var c, d, p, y, w, x = e;
                    u || (u = !0,
                    l && i.clearTimeout(l),
                    n = void 0,
                    o = a || "",
                    T.readyState = t > 0 ? 4 : 0,
                    c = t >= 200 && t < 300 || 304 === t,
                    r && (y = function(t, e, i) {
                        for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (s in a)
                                if (a[s] && a[s].test(n)) {
                                    l.unshift(s);
                                    break
                                }
                        if (l[0]in i)
                            o = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    o = s;
                                    break
                                }
                                r || (r = s)
                            }
                            o = o || r
                        }
                        if (o)
                            return o !== l[0] && l.unshift(o),
                            i[o]
                    }(f, T, r)),
                    y = function(t, e, i, n) {
                        var s, o, r, a, l, c = {}, u = t.dataTypes.slice();
                        if (u[1])
                            for (r in t.converters)
                                c[r.toLowerCase()] = t.converters[r];
                        for (o = u.shift(); o; )
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e),
                            !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                            l = o,
                            o = u.shift())
                                if ("*" === o)
                                    o = l;
                                else if ("*" !== l && l !== o) {
                                    if (!(r = c[l + " " + o] || c["* " + o]))
                                        for (s in c)
                                            if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0],
                                                u.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== r)
                                        if (r && t.throws)
                                            e = r(e);
                                        else
                                            try {
                                                e = r(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: r ? t : "No conversion from " + l + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, y, T, c),
                    c ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[s] = w),
                    (w = T.getResponseHeader("etag")) && (C.etag[s] = w)),
                    204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state,
                    d = y.data,
                    c = !(p = y.error))) : (p = x,
                    !t && x || (x = "error",
                    t < 0 && (t = 0))),
                    T.status = t,
                    T.statusText = (e || x) + "",
                    c ? v.resolveWith(m, [d, x, T]) : v.rejectWith(m, [T, x, p]),
                    T.statusCode(b),
                    b = void 0,
                    h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? d : p]),
                    _.fireWith(m, [T, x]),
                    h && (g.trigger("ajaxComplete", [T, f]),
                    --C.active || C.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(t, e, i) {
                return C.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return C.get(t, void 0, e, "script")
            }
        }),
        C.each(["get", "post"], function(t, e) {
            C[e] = function(t, i, n, s) {
                return _(i) && (s = s || n,
                n = i,
                i = void 0),
                C.ajax(C.extend({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                }, C.isPlainObject(t) && t))
            }
        }),
        C._evalUrl = function(t, e) {
            return C.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    C.globalEval(t, e)
                }
            })
        }
        ,
        C.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (_(t) && (t = t.call(this[0])),
                e = C(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return _(t) ? this.each(function(e) {
                    C(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = C(this)
                      , i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = _(t);
                return this.each(function(i) {
                    C(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        C.expr.pseudos.hidden = function(t) {
            return !C.expr.pseudos.visible(t)
        }
        ,
        C.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        C.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var Ke = {
            0: 200,
            1223: 204
        }
          , Qe = C.ajaxSettings.xhr();
        v.cors = !!Qe && "withCredentials"in Qe,
        v.ajax = Qe = !!Qe,
        C.ajaxTransport(function(t) {
            var e, n;
            if (v.cors || Qe && !t.crossDomain)
                return {
                    send: function(s, o) {
                        var r, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (r in t.xhrFields)
                                a[r] = t.xhrFields[r];
                        for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                        t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                        s)
                            a.setRequestHeader(r, s[r]);
                        e = function(t) {
                            return function() {
                                e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ke[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = e(),
                        n = a.onerror = a.ontimeout = e("error"),
                        void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && i.setTimeout(function() {
                                e && n()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        C.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return C.globalEval(t),
                    t
                }
            }
        }),
        C.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        C.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs)
                return {
                    send: function(n, s) {
                        e = C("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(),
                            i = null,
                            t && s("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        r.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
        var Ge, Xe = [], $e = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Xe.pop() || C.expando + "_" + De++;
                return this[t] = !0,
                t
            }
        }),
        C.ajaxPrefilter("json jsonp", function(t, e, n) {
            var s, o, r, a = !1 !== t.jsonp && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return s = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace($e, "$1" + s) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
                t.converters["script json"] = function() {
                    return r || C.error(s + " was not called"),
                    r[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = i[s],
                i[s] = function() {
                    r = arguments
                }
                ,
                n.always(function() {
                    void 0 === o ? C(i).removeProp(s) : i[s] = o,
                    t[s] && (t.jsonpCallback = e.jsonpCallback,
                    Xe.push(s)),
                    r && _(o) && o(r[0]),
                    r = o = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = ((Ge = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Ge.childNodes.length),
        C.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e,
            e = !1),
            e || (v.createHTMLDocument ? ((n = (e = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
            e.head.appendChild(n)) : e = r),
            o = !i && [],
            (s = O.exec(t)) ? [e.createElement(s[1])] : (s = Tt([t], e, o),
            o && o.length && C(o).remove(),
            C.merge([], s.childNodes)));
            var n, s, o
        }
        ,
        C.fn.load = function(t, e, i) {
            var n, s, o, r = this, a = t.indexOf(" ");
            return a > -1 && (n = ye(t.slice(a)),
            t = t.slice(0, a)),
            _(e) ? (i = e,
            e = void 0) : e && "object" == typeof e && (s = "POST"),
            r.length > 0 && C.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments,
                r.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                r.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            C.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        C.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, r, a, l, c = C.css(t, "position"), u = C(t), h = {};
                "static" === c && (t.style.position = "relative"),
                a = u.offset(),
                o = C.css(t, "top"),
                l = C.css(t, "left"),
                ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (n = u.position()).top,
                s = n.left) : (r = parseFloat(o) || 0,
                s = parseFloat(l) || 0),
                _(e) && (e = e.call(t, i, C.extend({}, a))),
                null != e.top && (h.top = e.top - a.top + r),
                null != e.left && (h.left = e.left - a.left + s),
                "using"in e ? e.using.call(t, h) : u.css(h)
            }
        },
        C.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e)
                    });
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
                i = n.ownerDocument.defaultView,
                {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0], s = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === C.css(n, "position"))
                        e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        i = n.ownerDocument,
                        t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === C.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((s = C(t).offset()).top += C.css(t, "borderTopWidth", !0),
                        s.left += C.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - s.top - C.css(n, "marginTop", !0),
                        left: e.left - s.left - C.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === C.css(t, "position"); )
                        t = t.offsetParent;
                    return t || rt
                })
            }
        }),
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            C.fn[t] = function(n) {
                return V(this, function(t, n, s) {
                    var o;
                    if (b(t) ? o = t : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === s)
                        return o ? o[e] : t[n];
                    o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s
                }, t, n, arguments.length)
            }
        }),
        C.each(["top", "left"], function(t, e) {
            C.cssHooks[e] = Qt(v.pixelPosition, function(t, i) {
                if (i)
                    return i = Kt(t, e),
                    Ut.test(i) ? C(t).position()[e] + "px" : i
            })
        }),
        C.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            C.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                C.fn[n] = function(s, o) {
                    var r = arguments.length && (i || "boolean" != typeof s)
                      , a = i || (!0 === s || !0 === o ? "margin" : "border");
                    return V(this, function(e, i, s) {
                        var o;
                        return b(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                        Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? C.css(e, i, a) : C.style(e, i, s, a)
                    }, e, r ? s : void 0, r)
                }
            })
        }),
        C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            C.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }),
        C.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        C.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }),
        C.proxy = function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e],
            e = t,
            t = i),
            _(t))
                return n = l.call(arguments, 2),
                (s = function() {
                    return t.apply(e || this, n.concat(l.call(arguments)))
                }
                ).guid = t.guid = t.guid || C.guid++,
                s
        }
        ,
        C.holdReady = function(t) {
            t ? C.readyWait++ : C.ready(!0)
        }
        ,
        C.isArray = Array.isArray,
        C.parseJSON = JSON.parse,
        C.nodeName = A,
        C.isFunction = _,
        C.isWindow = b,
        C.camelCase = G,
        C.type = x,
        C.now = Date.now,
        C.isNumeric = function(t) {
            var e = C.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        void 0 === (n = function() {
            return C
        }
        .apply(e, [])) || (t.exports = n);
        var Je = i.jQuery
          , Ze = i.$;
        return C.noConflict = function(t) {
            return i.$ === C && (i.$ = Ze),
            t && i.jQuery === C && (i.jQuery = Je),
            C
        }
        ,
        s || (i.jQuery = i.$ = C),
        C
    })
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui = t.ui || {},
        t.ui.version = "1.12.1"
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e, i = 0, n = Array.prototype.slice;
        return t.cleanData = (e = t.cleanData,
        function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++)
                try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (t) {}
            e(i)
        }
        ),
        t.widget = function(e, i, n) {
            var s, o, r, a = {}, l = e.split(".")[0], c = l + "-" + (e = e.split(".")[1]);
            return n || (n = i,
            i = t.Widget),
            t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
            t.expr[":"][c.toLowerCase()] = function(e) {
                return !!t.data(e, c)
            }
            ,
            t[l] = t[l] || {},
            s = t[l][e],
            o = t[l][e] = function(t, e) {
                if (!this._createWidget)
                    return new o(t,e);
                arguments.length && this._createWidget(t, e)
            }
            ,
            t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }),
            (r = new i).options = t.widget.extend({}, r.options),
            t.each(n, function(e, n) {
                t.isFunction(n) ? a[e] = function() {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }
                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, i = this._super, o = this._superApply;
                        return this._super = t,
                        this._superApply = s,
                        e = n.apply(this, arguments),
                        this._super = i,
                        this._superApply = o,
                        e
                    }
                }() : a[e] = n
            }),
            o.prototype = t.widget.extend(r, {
                widgetEventPrefix: s && r.widgetEventPrefix || e
            }, a, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: c
            }),
            s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }),
            delete s._childConstructors) : i._childConstructors.push(o),
            t.widget.bridge(e, o),
            o
        }
        ,
        t.widget.extend = function(e) {
            for (var i, s, o = n.call(arguments, 1), r = 0, a = o.length; r < a; r++)
                for (i in o[r])
                    s = o[r][i],
                    o[r].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
            return e
        }
        ,
        t.widget.bridge = function(e, i) {
            var s = i.prototype.widgetFullName || e;
            t.fn[e] = function(o) {
                var r = "string" == typeof o
                  , a = n.call(arguments, 1)
                  , l = this;
                return r ? this.length || "instance" !== o ? this.each(function() {
                    var i, n = t.data(this, s);
                    return "instance" === o ? (l = n,
                    !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                    !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                }) : l = void 0 : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))),
                this.each(function() {
                    var e = t.data(this, s);
                    e ? (e.option(o || {}),
                    e._init && e._init()) : t.data(this, s, new i(o,this))
                })),
                l
            }
        }
        ,
        t.Widget = function() {}
        ,
        t.Widget._childConstructors = [],
        t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, n) {
                n = t(n || this.defaultElement || this)[0],
                this.element = t(n),
                this.uuid = i++,
                this.eventNamespace = "." + this.widgetName + this.uuid,
                this.bindings = t(),
                this.hoverable = t(),
                this.focusable = t(),
                this.classesElementLookup = {},
                n !== this && (t.data(n, this.widgetFullName, this),
                this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === n && this.destroy()
                    }
                }),
                this.document = t(n.style ? n.ownerDocument : n.document || n),
                this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
                this._create(),
                this.options.disabled && this._setOptionDisabled(this.options.disabled),
                this._trigger("create", null, this._getCreateEventData()),
                this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(),
                t.each(this.classesElementLookup, function(t, i) {
                    e._removeClass(i, t)
                }),
                this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length)
                    return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {},
                    n = e.split("."),
                    e = n.shift(),
                    n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]),
                        o = 0; o < n.length - 1; o++)
                            s[n[o]] = s[n[o]] || {},
                            s = s[n[o]];
                        if (e = n.pop(),
                        1 === arguments.length)
                            return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r),
                this
            },
            _setOptions: function(t) {
                var e;
                for (e in t)
                    this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e),
                this.options[t] = e,
                "disabled" === t && this._setOptionDisabled(e),
                this
            },
            _setOptionClasses: function(e) {
                var i, n, s;
                for (i in e)
                    s = this.classesElementLookup[i],
                    e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()),
                    this._removeClass(s, i),
                    n.addClass(this._classes({
                        element: n,
                        keys: i,
                        classes: e,
                        add: !0
                    })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
                t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
                this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                var i = []
                  , n = this;
                function s(s, o) {
                    var r, a;
                    for (a = 0; a < s.length; a++)
                        r = n.classesElementLookup[s[a]] || t(),
                        r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()),
                        n.classesElementLookup[s[a]] = r,
                        i.push(s[a]),
                        o && e.classes[s[a]] && i.push(e.classes[s[a]])
                }
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e),
                this._on(e.element, {
                    remove: "_untrackClassesElement"
                }),
                e.keys && s(e.keys.match(/\S+/g) || [], !0),
                e.extra && s(e.extra.match(/\S+/g) || []),
                i.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(n, s) {
                    -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                })
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t
                  , o = {
                    extra: s ? e : i,
                    keys: s ? t : e,
                    element: s ? this.element : t,
                    add: n
                };
                return o.element.toggleClass(this._classes(o), n),
                this
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i,
                i = e,
                e = !1),
                n ? (i = s = t(i),
                this.bindings = this.bindings.add(i)) : (n = i,
                i = this.element,
                s = this.widget()),
                t.each(n, function(n, r) {
                    function a() {
                        if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled"))
                            return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/)
                      , c = l[1] + o.eventNamespace
                      , u = l[2];
                    u ? s.on(c, u, a) : i.on(c, a)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                e.off(i).off(i),
                this.bindings = t(this.bindings.not(e).get()),
                this.focusable = t(this.focusable.not(e).get()),
                this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout(function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e),
                this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e),
                this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {},
                (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
                i.target = this.element[0],
                o = i.originalEvent)
                    for (s in o)
                        s in i || (i[s] = o[s]);
                return this.element.trigger(i, n),
                !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        },
        t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                var r;
                "string" == typeof s && (s = {
                    effect: s
                });
                var a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                "number" == typeof (s = s || {}) && (s = {
                    duration: s
                }),
                r = !t.isEmptyObject(s),
                s.complete = o,
                s.delay && n.delay(s.delay),
                r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                    t(this)[e](),
                    o && o.call(n[0]),
                    i()
                })
            }
        }),
        t.widget
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var i = function(t, e) {
                    var i = t[1] || ""
                      , n = t[3];
                    if (!n)
                        return i;
                    if (e && "function" == typeof btoa) {
                        var s = (r = n,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */")
                          , o = n.sources.map(function(t) {
                            return "/*# sourceURL=" + n.sourceRoot + t + " */"
                        });
                        return [i].concat(o).concat([s]).join("\n")
                    }
                    var r;
                    return [i].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + i + "}" : i
            }).join("")
        }
        ,
        e.i = function(t, i) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var n = {}, s = 0; s < this.length; s++) {
                var o = this[s][0];
                "number" == typeof o && (n[o] = !0)
            }
            for (s = 0; s < t.length; s++) {
                var r = t[s];
                "number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"),
                e.push(r))
            }
        }
        ,
        e
    }
}
, function(t, e, i) {
    var n, s, o = {}, r = (n = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === s && (s = n.apply(this, arguments)),
        s
    }
    ), a = function(t) {
        var e = {};
        return function(t, i) {
            if ("function" == typeof t)
                return t();
            if (void 0 === e[t]) {
                var n = function(t, e) {
                    return e ? e.querySelector(t) : document.querySelector(t)
                }
                .call(this, t, i);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                e[t] = n
            }
            return e[t]
        }
    }(), l = null, c = 0, u = [], h = i(68);
    function d(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i]
              , s = o[n.id];
            if (s) {
                s.refs++;
                for (var r = 0; r < s.parts.length; r++)
                    s.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++)
                    s.parts.push(_(n.parts[r], e))
            } else {
                var a = [];
                for (r = 0; r < n.parts.length; r++)
                    a.push(_(n.parts[r], e));
                o[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function p(t, e) {
        for (var i = [], n = {}, s = 0; s < t.length; s++) {
            var o = t[s]
              , r = e.base ? o[0] + e.base : o[0]
              , a = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            n[r] ? n[r].parts.push(a) : i.push(n[r] = {
                id: r,
                parts: [a]
            })
        }
        return i
    }
    function f(t, e) {
        var i = a(t.insertInto);
        if (!i)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = u[u.length - 1];
        if ("top" === t.insertAt)
            n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild),
            u.push(e);
        else if ("bottom" === t.insertAt)
            i.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var s = a(t.insertAt.before, i);
            i.insertBefore(e, s)
        }
    }
    function m(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1)
    }
    function g(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce) {
            var n = function() {
                0;
                return i.nc
            }();
            n && (t.attrs.nonce = n)
        }
        return v(e, t.attrs),
        f(t, e),
        e
    }
    function v(t, e) {
        Object.keys(e).forEach(function(i) {
            t.setAttribute(i, e[i])
        })
    }
    function _(t, e) {
        var i, n, s, o;
        if (e.transform && t.css) {
            if (!(o = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css)))
                return function() {}
                ;
            t.css = o
        }
        if (e.singleton) {
            var r = c++;
            i = l || (l = g(e)),
            n = w.bind(null, i, r, !1),
            s = w.bind(null, i, r, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                v(e, t.attrs),
                f(t, e),
                e
            }(e),
            n = function(t, e, i) {
                var n = i.css
                  , s = i.sourceMap
                  , o = void 0 === e.convertToAbsoluteUrls && s;
                (e.convertToAbsoluteUrls || o) && (n = h(n));
                s && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
                var r = new Blob([n],{
                    type: "text/css"
                })
                  , a = t.href;
                t.href = URL.createObjectURL(r),
                a && URL.revokeObjectURL(a)
            }
            .bind(null, i, e),
            s = function() {
                m(i),
                i.href && URL.revokeObjectURL(i.href)
            }
            ) : (i = g(e),
            n = function(t, e) {
                var i = e.css
                  , n = e.media;
                n && t.setAttribute("media", n);
                if (t.styleSheet)
                    t.styleSheet.cssText = i;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(i))
                }
            }
            .bind(null, i),
            s = function() {
                m(i)
            }
            );
        return n(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                n(t = e)
            } else
                s()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = r()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
        var i = p(t, e);
        return d(i, e),
        function(t) {
            for (var n = [], s = 0; s < i.length; s++) {
                var r = i[s];
                (a = o[r.id]).refs--,
                n.push(a)
            }
            t && d(p(t, e), e);
            for (s = 0; s < n.length; s++) {
                var a;
                if (0 === (a = n[s]).refs) {
                    for (var l = 0; l < a.parts.length; l++)
                        a.parts[l]();
                    delete o[a.id]
                }
            }
        }
    }
    ;
    var b, y = (b = [],
    function(t, e) {
        return b[t] = e,
        b.filter(Boolean).join("\n")
    }
    );
    function w(t, e, i, n) {
        var s = i ? "" : n.css;
        if (t.styleSheet)
            t.styleSheet.cssText = y(e, s);
        else {
            var o = document.createTextNode(s)
              , r = t.childNodes;
            r[e] && t.removeChild(r[e]),
            r.length ? t.insertBefore(o, r[e]) : t.appendChild(o)
        }
    }
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e, i = "ui-effects-animated", n = t;
        return t.effects = {
            effect: {}
        },
        function(t, e) {
            var i, n = /^([\-+])=\s*(\d+\.?\d*)/, s = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], o = t.Color = function(e, i, n, s) {
                return new t.Color.fn.parse(e,i,n,s)
            }
            , r = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, a = {
                byte: {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, l = o.support = {}, c = t("<p>")[0], u = t.each;
            function h(t, e, i) {
                var n = a[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t),
                isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }
            function d(e) {
                var n = o()
                  , a = n._rgba = [];
                return e = e.toLowerCase(),
                u(s, function(t, i) {
                    var s, o = i.re.exec(e), l = o && i.parse(o), c = i.space || "rgba";
                    if (l)
                        return s = n[c](l),
                        n[r[c].cache] = s[r[c].cache],
                        a = n._rgba = s._rgba,
                        !1
                }),
                a.length ? ("0,0,0,0" === a.join() && t.extend(a, i.transparent),
                n) : i[e]
            }
            function p(t, e, i) {
                return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            c.style.cssText = "background-color:rgba(1,1,1,.5)",
            l.rgba = c.style.backgroundColor.indexOf("rgba") > -1,
            u(r, function(t, e) {
                e.cache = "_" + t,
                e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }),
            o.fn = t.extend(o.prototype, {
                parse: function(e, n, s, a) {
                    if (void 0 === e)
                        return this._rgba = [null, null, null, null],
                        this;
                    (e.jquery || e.nodeType) && (e = t(e).css(n),
                    n = void 0);
                    var l = this
                      , c = t.type(e)
                      , p = this._rgba = [];
                    return void 0 !== n && (e = [e, n, s, a],
                    c = "array"),
                    "string" === c ? this.parse(d(e) || i._default) : "array" === c ? (u(r.rgba.props, function(t, i) {
                        p[i.idx] = h(e[i.idx], i)
                    }),
                    this) : "object" === c ? (u(r, e instanceof o ? function(t, i) {
                        e[i.cache] && (l[i.cache] = e[i.cache].slice())
                    }
                    : function(i, n) {
                        var s = n.cache;
                        u(n.props, function(t, i) {
                            if (!l[s] && n.to) {
                                if ("alpha" === t || null == e[t])
                                    return;
                                l[s] = n.to(l._rgba)
                            }
                            l[s][i.idx] = h(e[t], i, !0)
                        }),
                        l[s] && t.inArray(null, l[s].slice(0, 3)) < 0 && (l[s][3] = 1,
                        n.from && (l._rgba = n.from(l[s])))
                    }
                    ),
                    this) : void 0
                },
                is: function(t) {
                    var e = o(t)
                      , i = !0
                      , n = this;
                    return u(r, function(t, s) {
                        var o, r = e[s.cache];
                        return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [],
                        u(s.props, function(t, e) {
                            if (null != r[e.idx])
                                return i = r[e.idx] === o[e.idx]
                        })),
                        i
                    }),
                    i
                },
                _space: function() {
                    var t = []
                      , e = this;
                    return u(r, function(i, n) {
                        e[n.cache] && t.push(i)
                    }),
                    t.pop()
                },
                transition: function(t, e) {
                    var i = o(t)
                      , n = i._space()
                      , s = r[n]
                      , l = 0 === this.alpha() ? o("transparent") : this
                      , c = l[s.cache] || s.to(l._rgba)
                      , d = c.slice();
                    return i = i[s.cache],
                    u(s.props, function(t, n) {
                        var s = n.idx
                          , o = c[s]
                          , r = i[s]
                          , l = a[n.type] || {};
                        null !== r && (null === o ? d[s] = r : (l.mod && (r - o > l.mod / 2 ? o += l.mod : o - r > l.mod / 2 && (o -= l.mod)),
                        d[s] = h((r - o) * e + o, n)))
                    }),
                    this[n](d)
                },
                blend: function(e) {
                    if (1 === this._rgba[3])
                        return this;
                    var i = this._rgba.slice()
                      , n = i.pop()
                      , s = o(e)._rgba;
                    return o(t.map(i, function(t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba("
                      , i = t.map(this._rgba, function(t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                    return 1 === i[3] && (i.pop(),
                    e = "rgb("),
                    e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla("
                      , i = t.map(this.hsla(), function(t, e) {
                        return null == t && (t = e > 2 ? 1 : 0),
                        e && e < 3 && (t = Math.round(100 * t) + "%"),
                        t
                    });
                    return 1 === i[3] && (i.pop(),
                    e = "hsl("),
                    e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice()
                      , n = i.pop();
                    return e && i.push(~~(255 * n)),
                    "#" + t.map(i, function(t) {
                        return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }),
            o.fn.parse.prototype = o.fn,
            r.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2])
                    return [null, null, null, t[3]];
                var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o), l = Math.min(n, s, o), c = a - l, u = a + l, h = .5 * u;
                return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240,
                i = 0 === c ? 0 : h <= .5 ? c / u : c / (2 - u),
                [Math.round(e) % 360, i, h, null == r ? 1 : r]
            }
            ,
            r.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2])
                    return [null, null, null, t[3]];
                var e = t[0] / 360
                  , i = t[1]
                  , n = t[2]
                  , s = t[3]
                  , o = n <= .5 ? n * (1 + i) : n + i - n * i
                  , r = 2 * n - o;
                return [Math.round(255 * p(r, o, e + 1 / 3)), Math.round(255 * p(r, o, e)), Math.round(255 * p(r, o, e - 1 / 3)), s]
            }
            ,
            u(r, function(e, i) {
                var s = i.props
                  , r = i.cache
                  , a = i.to
                  , l = i.from;
                o.fn[e] = function(e) {
                    if (a && !this[r] && (this[r] = a(this._rgba)),
                    void 0 === e)
                        return this[r].slice();
                    var i, n = t.type(e), c = "array" === n || "object" === n ? e : arguments, d = this[r].slice();
                    return u(s, function(t, e) {
                        var i = c["object" === n ? t : e.idx];
                        null == i && (i = d[e.idx]),
                        d[e.idx] = h(i, e)
                    }),
                    l ? ((i = o(l(d)))[r] = d,
                    i) : o(d)
                }
                ,
                u(s, function(i, s) {
                    o.fn[i] || (o.fn[i] = function(o) {
                        var r, a = t.type(o), l = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e, c = this[l](), u = c[s.idx];
                        return "undefined" === a ? u : ("function" === a && (o = o.call(this, u),
                        a = t.type(o)),
                        null == o && s.empty ? this : ("string" === a && (r = n.exec(o)) && (o = u + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1)),
                        c[s.idx] = o,
                        this[l](c)))
                    }
                    )
                })
            }),
            o.hook = function(e) {
                var i = e.split(" ");
                u(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var s, r, a = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (s = d(n)))) {
                                if (n = o(s || n),
                                !l.rgba && 1 !== n._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style; )
                                        try {
                                            a = t.css(r, "backgroundColor"),
                                            r = r.parentNode
                                        } catch (t) {}
                                    n = n.blend(a && "transparent" !== a ? a : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (t) {}
                        }
                    },
                    t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = o(e.elem, i),
                        e.end = o(e.end),
                        e.colorInit = !0),
                        t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }
            ,
            o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
            t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return u(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        e["border" + n + "Color"] = t
                    }),
                    e
                }
            },
            i = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(n),
        function() {
            var e, i = ["add", "remove", "toggle"], s = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            function o(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--; )
                        "string" == typeof s[i = s[n]] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s)
                        "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (n.style(t.elem, i, t.end),
                    t.setAttr = !0)
                }
            }),
            t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
            ),
            t.effects.animateClass = function(e, n, r, a) {
                var l = t.speed(n, r, a);
                return this.queue(function() {
                    var n, r = t(this), a = r.attr("class") || "", c = l.children ? r.find("*").addBack() : r;
                    c = c.map(function() {
                        return {
                            el: t(this),
                            start: o(this)
                        }
                    }),
                    (n = function() {
                        t.each(i, function(t, i) {
                            e[i] && r[i + "Class"](e[i])
                        })
                    }
                    )(),
                    c = c.map(function() {
                        return this.end = o(this.el[0]),
                        this.diff = function(e, i) {
                            var n, o, r = {};
                            for (n in i)
                                o = i[n],
                                e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (r[n] = o));
                            return r
                        }(this.start, this.end),
                        this
                    }),
                    r.attr("class", a),
                    c = c.map(function() {
                        var e = this
                          , i = t.Deferred()
                          , n = t.extend({}, l, {
                            queue: !1,
                            complete: function() {
                                i.resolve(e)
                            }
                        });
                        return this.el.animate(this.diff, n),
                        i.promise()
                    }),
                    t.when.apply(t, c.get()).done(function() {
                        n(),
                        t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }),
                        l.complete.call(r[0])
                    })
                })
            }
            ,
            t.fn.extend({
                addClass: (e = t.fn.addClass,
                function(i, n, s, o) {
                    return n ? t.effects.animateClass.call(this, {
                        add: i
                    }, n, s, o) : e.apply(this, arguments)
                }
                ),
                removeClass: function(e) {
                    return function(i, n, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(e) {
                    return function(i, n, s, o, r) {
                        return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, n, s, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, o)
                }
            })
        }(),
        function() {
            var e;
            function n(e, i, n, s) {
                return t.isPlainObject(e) && (i = e,
                e = e.effect),
                e = {
                    effect: e
                },
                null == i && (i = {}),
                t.isFunction(i) && (s = i,
                n = null,
                i = {}),
                ("number" == typeof i || t.fx.speeds[i]) && (s = n,
                n = i,
                i = {}),
                t.isFunction(n) && (s = n,
                n = null),
                i && t.extend(e, i),
                n = n || i.duration,
                e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
                e.complete = s || i.complete,
                e
            }
            function s(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || "string" == typeof e && !t.effects.effect[e] || !!t.isFunction(e) || "object" == typeof e && !e.effect
            }
            function o(t, e) {
                var i = e.outerWidth()
                  , n = e.outerHeight()
                  , s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                return {
                    top: parseFloat(s[1]) || 0,
                    right: "auto" === s[2] ? i : parseFloat(s[2]),
                    bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                    left: parseFloat(s[4]) || 0
                }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (e = t.expr.filters.animated,
            function(n) {
                return !!t(n).data(i) || e(n)
            }
            )),
            !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) {
                    for (var i = 0, n = e.length; i < n; i++)
                        null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]])
                },
                restore: function(t, e) {
                    for (var i, n = 0, s = e.length; n < s; n++)
                        null !== e[n] && (i = t.data("ui-effects-" + e[n]),
                        t.css(e[n], i))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                    e
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper"))
                        return e.parent();
                    var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        float: e.css("float")
                    }
                      , n = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    })
                      , s = {
                        width: e.width(),
                        height: e.height()
                    }
                      , o = document.activeElement;
                    try {
                        o.id
                    } catch (t) {
                        o = document.body
                    }
                    return e.wrap(n),
                    (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                    n = e.parent(),
                    "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }),
                    e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }),
                    t.each(["top", "left", "bottom", "right"], function(t, n) {
                        i[n] = e.css(n),
                        isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }),
                    e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })),
                    e.css(s),
                    n.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                    (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")),
                    e
                }
            }),
            t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, n) {
                    return n || (n = i,
                    i = "effect"),
                    t.effects.effect[e] = n,
                    t.effects.effect[e].mode = i,
                    n
                },
                scaledDimensions: function(t, e, i) {
                    if (0 === e)
                        return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1
                      , s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return {
                        height: t.height() * s,
                        width: t.width() * n,
                        outerHeight: t.outerHeight() * s,
                        outerWidth: t.outerWidth() * n
                    }
                },
                clipToBox: function(t) {
                    return {
                        width: t.clip.right - t.clip.left,
                        height: t.clip.bottom - t.clip.top,
                        left: t.clip.left,
                        top: t.clip.top
                    }
                },
                unshift: function(t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
                    t.dequeue()
                },
                saveStyle: function(t) {
                    t.data("ui-effects-style", t[0].style.cssText)
                },
                restoreStyle: function(t) {
                    t[0].style.cssText = t.data("ui-effects-style") || "",
                    t.removeData("ui-effects-style")
                },
                mode: function(t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"),
                    (i ? "hide" === e : "show" === e) && (e = "none"),
                    e
                },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                    }
                    switch (t[1]) {
                    case "left":
                        n = 0;
                        break;
                    case "center":
                        n = .5;
                        break;
                    case "right":
                        n = 1;
                        break;
                    default:
                        n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createPlaceholder: function(e) {
                    var i, n = e.css("position"), s = e.position();
                    return e.css({
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),
                    /^(static|relative)/.test(n) && (n = "absolute",
                    i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                        display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: e.css("marginTop"),
                        marginBottom: e.css("marginBottom"),
                        marginLeft: e.css("marginLeft"),
                        marginRight: e.css("marginRight"),
                        float: e.css("float")
                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),
                    e.data("ui-effects-placeholder", i)),
                    e.css({
                        position: n,
                        left: s.left,
                        top: s.top
                    }),
                    i
                },
                removePlaceholder: function(t) {
                    var e = "ui-effects-placeholder"
                      , i = t.data(e);
                    i && (i.remove(),
                    t.removeData(e))
                },
                cleanUp: function(e) {
                    t.effects.restoreStyle(e),
                    t.effects.removePlaceholder(e)
                },
                setTransition: function(e, i, n, s) {
                    return s = s || {},
                    t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }),
                    s
                }
            }),
            t.fn.extend({
                effect: function() {
                    var e = n.apply(this, arguments)
                      , s = t.effects.effect[e.effect]
                      , o = s.mode
                      , r = e.queue
                      , a = r || "fx"
                      , l = e.complete
                      , c = e.mode
                      , u = []
                      , h = function(e) {
                        var n = t(this)
                          , s = t.effects.mode(n, c) || o;
                        n.data(i, !0),
                        u.push(s),
                        o && ("show" === s || s === o && "hide" === s) && n.show(),
                        o && "none" === s || t.effects.saveStyle(n),
                        t.isFunction(e) && e()
                    };
                    if (t.fx.off || !s)
                        return c ? this[c](e.duration, l) : this.each(function() {
                            l && l.call(this)
                        });
                    function d(n) {
                        var r = t(this);
                        function a() {
                            t.isFunction(l) && l.call(r[0]),
                            t.isFunction(n) && n()
                        }
                        e.mode = u.shift(),
                        !1 === t.uiBackCompat || o ? "none" === e.mode ? (r[c](),
                        a()) : s.call(r[0], e, function() {
                            r.removeData(i),
                            t.effects.cleanUp(r),
                            "hide" === e.mode && r.hide(),
                            a()
                        }) : (r.is(":hidden") ? "hide" === c : "show" === c) ? (r[c](),
                        a()) : s.call(r[0], e, a)
                    }
                    return !1 === r ? this.each(h).each(d) : this.queue(a, h).queue(a, d)
                },
                show: function(t) {
                    return function(e) {
                        if (s(e))
                            return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "show",
                        this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (s(e))
                            return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "hide",
                        this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (s(e) || "boolean" == typeof e)
                            return t.apply(this, arguments);
                        var i = n.apply(this, arguments);
                        return i.mode = "toggle",
                        this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e)
                      , n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }),
                    n
                },
                cssClip: function(t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : o(this.css("clip"), this)
                },
                transfer: function(e, i) {
                    var n = t(this)
                      , s = t(e.to)
                      , o = "fixed" === s.css("position")
                      , r = t("body")
                      , a = o ? r.scrollTop() : 0
                      , l = o ? r.scrollLeft() : 0
                      , c = s.offset()
                      , u = {
                        top: c.top - a,
                        left: c.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth()
                    }
                      , h = n.offset()
                      , d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: h.top - a,
                        left: h.left - l,
                        height: n.innerHeight(),
                        width: n.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(u, e.duration, e.easing, function() {
                        d.remove(),
                        t.isFunction(i) && i()
                    })
                }
            }),
            t.fx.step.clip = function(e) {
                e.clipInit || (e.start = t(e.elem).cssClip(),
                "string" == typeof e.end && (e.end = o(e.end, e.elem)),
                e.clipInit = !0),
                t(e.elem).cssClip({
                    top: e.pos * (e.end.top - e.start.top) + e.start.top,
                    right: e.pos * (e.end.right - e.start.right) + e.start.right,
                    bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                    left: e.pos * (e.end.left - e.start.left) + e.start.left
                })
            }
        }(),
        e = {},
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }
            ,
            t.easing["easeInOut" + e] = function(t) {
                return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        }),
        t.effects
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(23), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e = !1;
        return t(document).on("mouseup", function() {
            e = !1
        }),
        t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(i) {
                    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent"))
                        return t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                        i.stopImmediatePropagation(),
                        !1
                }),
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName),
                this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!e) {
                    this._mouseMoved = !1,
                    this._mouseStarted && this._mouseUp(i),
                    this._mouseDownEvent = i;
                    var n = this
                      , s = 1 === i.which
                      , o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                    return !(s && !o && this._mouseCapture(i) && (this.mouseDelayMet = !this.options.delay,
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)),
                    this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i),
                    !this._mouseStarted) ? (i.preventDefault(),
                    0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"),
                    this._mouseMoveDelegate = function(t) {
                        return n._mouseMove(t)
                    }
                    ,
                    this._mouseUpDelegate = function(t) {
                        return n._mouseUp(t)
                    }
                    ,
                    this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                    i.preventDefault(),
                    e = !0,
                    0)))
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button)
                        return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
                            this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich)
                            return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0),
                this._mouseStarted ? (this._mouseDrag(e),
                e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
            },
            _mouseUp: function(i) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted && (this._mouseStarted = !1,
                i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0),
                this._mouseStop(i)),
                this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
                delete this._mouseDelayTimer),
                this.ignoreMissingWhich = !1,
                e = !1,
                i.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.fn.extend({
            uniqueId: (e = 0,
            function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
            ),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        });
        var e
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return function() {
            var e, i = Math.max, n = Math.abs, s = /left|center|right/, o = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, a = /^\w+/, l = /%$/, c = t.fn.position;
            function u(t, e, i) {
                return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
            }
            function h(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== e)
                        return e;
                    var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                    return t("body").append(s),
                    i = o.offsetWidth,
                    s.css("overflow", "scroll"),
                    i === (n = o.offsetWidth) && (n = s[0].clientWidth),
                    s.remove(),
                    e = i - n
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                      , n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                      , s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window)
                      , n = t.isWindow(i[0])
                      , s = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: n || s ? {
                            left: 0,
                            top: 0
                        } : t(e).offset(),
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            },
            t.fn.position = function(e) {
                if (!e || !e.of)
                    return c.apply(this, arguments);
                e = t.extend({}, e);
                var l, d, p, f, m, g, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(y), x = (e.collision || "flip").split(" "), C = {};
                return g = 9 === (_ = (v = b)[0]).nodeType ? {
                    width: v.width(),
                    height: v.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(_) ? {
                    width: v.width(),
                    height: v.height(),
                    offset: {
                        top: v.scrollTop(),
                        left: v.scrollLeft()
                    }
                } : _.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: _.pageY,
                        left: _.pageX
                    }
                } : {
                    width: v.outerWidth(),
                    height: v.outerHeight(),
                    offset: v.offset()
                },
                b[0].preventDefault && (e.at = "left top"),
                d = g.width,
                p = g.height,
                f = g.offset,
                m = t.extend({}, f),
                t.each(["my", "at"], function() {
                    var t, i, n = (e[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
                    n[0] = s.test(n[0]) ? n[0] : "center",
                    n[1] = o.test(n[1]) ? n[1] : "center",
                    t = r.exec(n[0]),
                    i = r.exec(n[1]),
                    C[this] = [t ? t[0] : 0, i ? i[0] : 0],
                    e[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]
                }),
                1 === x.length && (x[1] = x[0]),
                "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2),
                "bottom" === e.at[1] ? m.top += p : "center" === e.at[1] && (m.top += p / 2),
                l = u(C.at, d, p),
                m.left += l[0],
                m.top += l[1],
                this.each(function() {
                    var s, o, r = t(this), a = r.outerWidth(), c = r.outerHeight(), g = h(this, "marginLeft"), v = h(this, "marginTop"), _ = a + g + h(this, "marginRight") + w.width, T = c + v + h(this, "marginBottom") + w.height, k = t.extend({}, m), S = u(C.my, r.outerWidth(), r.outerHeight());
                    "right" === e.my[0] ? k.left -= a : "center" === e.my[0] && (k.left -= a / 2),
                    "bottom" === e.my[1] ? k.top -= c : "center" === e.my[1] && (k.top -= c / 2),
                    k.left += S[0],
                    k.top += S[1],
                    s = {
                        marginLeft: g,
                        marginTop: v
                    },
                    t.each(["left", "top"], function(i, n) {
                        t.ui.position[x[i]] && t.ui.position[x[i]][n](k, {
                            targetWidth: d,
                            targetHeight: p,
                            elemWidth: a,
                            elemHeight: c,
                            collisionPosition: s,
                            collisionWidth: _,
                            collisionHeight: T,
                            offset: [l[0] + S[0], l[1] + S[1]],
                            my: e.my,
                            at: e.at,
                            within: y,
                            elem: r
                        })
                    }),
                    e.using && (o = function(t) {
                        var s = f.left - k.left
                          , o = s + d - a
                          , l = f.top - k.top
                          , u = l + p - c
                          , h = {
                            target: {
                                element: b,
                                left: f.left,
                                top: f.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: k.left,
                                top: k.top,
                                width: a,
                                height: c
                            },
                            horizontal: o < 0 ? "left" : s > 0 ? "right" : "center",
                            vertical: u < 0 ? "top" : l > 0 ? "bottom" : "middle"
                        };
                        d < a && n(s + o) < d && (h.horizontal = "center"),
                        p < c && n(l + u) < p && (h.vertical = "middle"),
                        i(n(s), n(o)) > i(n(l), n(u)) ? h.important = "horizontal" : h.important = "vertical",
                        e.using.call(this, t, h)
                    }
                    ),
                    r.offset(t.extend(k, {
                        using: o
                    }))
                })
            }
            ,
            t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var n, s = e.within, o = s.isWindow ? s.scrollLeft : s.offset.left, r = s.width, a = t.left - e.collisionPosition.marginLeft, l = o - a, c = a + e.collisionWidth - r - o;
                        e.collisionWidth > r ? l > 0 && c <= 0 ? (n = t.left + l + e.collisionWidth - r - o,
                        t.left += l - n) : t.left = c > 0 && l <= 0 ? o : l > c ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = i(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var n, s = e.within, o = s.isWindow ? s.scrollTop : s.offset.top, r = e.within.height, a = t.top - e.collisionPosition.marginTop, l = o - a, c = a + e.collisionHeight - r - o;
                        e.collisionHeight > r ? l > 0 && c <= 0 ? (n = t.top + l + e.collisionHeight - r - o,
                        t.top += l - n) : t.top = c > 0 && l <= 0 ? o : l > c ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = i(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, s, o = e.within, r = o.offset.left + o.scrollLeft, a = o.width, l = o.isWindow ? o.scrollLeft : o.offset.left, c = t.left - e.collisionPosition.marginLeft, u = c - l, h = c + e.collisionWidth - a - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                        u < 0 ? ((i = t.left + d + p + f + e.collisionWidth - a - r) < 0 || i < n(u)) && (t.left += d + p + f) : h > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || n(s) < h) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, s, o = e.within, r = o.offset.top + o.scrollTop, a = o.height, l = o.isWindow ? o.scrollTop : o.offset.top, c = t.top - e.collisionPosition.marginTop, u = c - l, h = c + e.collisionHeight - a - l, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                        u < 0 ? ((s = t.top + d + p + f + e.collisionHeight - a - r) < 0 || s < n(u)) && (t.top += d + p + f) : h > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || n(i) < h) && (t.top += d + p + f)
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments),
                        t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments),
                        t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(),
        t.ui.position
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.safeActiveElement = function(t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body),
            e.nodeName || (e = t.body),
            e
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.escapeSelector = (e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,
        function(t) {
            return t.replace(e, "\\$1")
        }
        );
        var e
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.focusable = function(e, i) {
            var n, s, o, r, a, l = e.nodeName.toLowerCase();
            return "area" === l ? (s = (n = e.parentNode).name,
            !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) && (o = t("img[usemap='#" + s + "']")).length > 0 && o.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !e.disabled) && (a = t(e).closest("fieldset")[0]) && (r = !a.disabled) : r = "a" === l && e.href || i,
            r && t(e).is(":visible") && function(t) {
                for (var e = t.css("visibility"); "inherit" === e; )
                    t = t.parent(),
                    e = t.css("visibility");
                return "hidden" !== e
            }(t(e)))
        }
        ,
        t.extend(t.expr[":"], {
            focusable: function(e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }),
        t.ui.focusable
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(39), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(),
                this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                    t.push(this),
                    this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1),
                    e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(11)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.fn.labels = function() {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"),
            (n = this.attr("id")) && (e = this.eq(0).parents().last(),
            o = e.add(e.length ? e.siblings() : this.siblings()),
            i = "label[for='" + t.ui.escapeSelector(n) + "']",
            s = s.add(o.find(i).addBack(i))),
            this.pushStack(s))
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.fn.scrollParent = function(e) {
            var i = this.css("position")
              , n = "absolute" === i
              , s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
              , o = this.parents().filter(function() {
                var e = t(this);
                return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(7), i(12), i(24), i(10), i(25), i(16), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(),
                this.options.addClasses && this._addClass("ui-draggable"),
                this._setHandleClassName(),
                this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e),
                "handle" === t && (this._removeHandleClassName(),
                this._setHandleClassName())
            },
            _destroy: function() {
                (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(),
                this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(e),
                !this.handle || (this._blurActiveElement(e),
                this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
                0)))
            },
            _blockFrames: function(e) {
                this.iframeBlocks = this.document.find(e).map(function() {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(),
                delete this.iframeBlocks)
            },
            _blurActiveElement: function(e) {
                var i = t.ui.safeActiveElement(this.document[0]);
                t(e.target).closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e),
                this._addClass(this.helper, "ui-draggable-dragging"),
                this._cacheHelperProportions(),
                t.ui.ddmanager && (t.ui.ddmanager.current = this),
                this._cacheMargins(),
                this.cssPosition = this.helper.css("position"),
                this.scrollParent = this.helper.scrollParent(!0),
                this.offsetParent = this.helper.offsetParent(),
                this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === t(this).css("position")
                }).length > 0,
                this.positionAbs = this.element.offset(),
                this._refreshOffsets(e),
                this.originalPosition = this.position = this._generatePosition(e, !1),
                this.originalPageX = e.pageX,
                this.originalPageY = e.pageY,
                i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                this._setContainment(),
                !1 === this._trigger("start", e) ? (this._clear(),
                !1) : (this._cacheHelperProportions(),
                t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                this._mouseDrag(e, !0),
                t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                },
                this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                this.position = this._generatePosition(e, !0),
                this.positionAbs = this._convertPositionTo("absolute"),
                !i) {
                    var n = this._uiHash();
                    if (!1 === this._trigger("drag", e, n))
                        return this._mouseUp(new t.Event("mouseup",e)),
                        !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px",
                this.helper[0].style.top = this.position.top + "px",
                t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                !1
            },
            _mouseStop: function(e) {
                var i = this
                  , n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
                this.dropped && (n = this.dropped,
                this.dropped = !1),
                "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== i._trigger("stop", e) && i._clear()
                }) : !1 !== this._trigger("stop", e) && this._clear(),
                !1
            },
            _mouseUp: function(e) {
                return this._unblockFrames(),
                t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                this.handleElement.is(e.target) && this.element.trigger("focus"),
                t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup",{
                    target: this.element[0]
                })) : this._clear(),
                this
            },
            _getHandle: function(e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(e) {
                var i = this.options
                  , n = t.isFunction(i.helper)
                  , s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
                n && s[0] === this.element[0] && this._setPositionRelative(),
                s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
                s
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")),
                t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }),
                "left"in e && (this.offset.click.left = e.left + this.margins.left),
                "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                "top"in e && (this.offset.click.top = e.top + this.margins.top),
                "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset()
                  , i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
                e.top += this.scrollParent.scrollTop()),
                this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }),
                {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition)
                    return {
                        top: 0,
                        left: 0
                    };
                var t = this.element.position()
                  , e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options, o = this.document[0];
                this.relativeContainer = null,
                s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                (n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")),
                this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relativeContainer = i)) : this.containment = s.containment : this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1
                  , n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, c = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }),
                e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(),
                i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment,
                t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)),
                r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
                c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s,
                o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
                l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o),
                "y" === r.axis && (l = this.originalPageX),
                "x" === r.axis && (c = this.originalPageY)),
                {
                    top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"),
                this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                this.helper = null,
                this.cancelHelperRemoval = !1,
                this.destroyOnClear && this.destroy()
            },
            _trigger: function(e, i, n) {
                return n = n || this._uiHash(),
                t.ui.plugin.call(this, e, [i, n, this], !0),
                /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"),
                n.offset = this.positionAbs),
                t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }),
        t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [],
                t(n.options.connectToSortable).each(function() {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i),
                    i.refreshPositions(),
                    i._trigger("activate", e, s))
                })
            },
            stop: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1,
                t.each(n.sortables, function() {
                    this.isOver ? (this.isOver = 0,
                    n.cancelHelperRemoval = !0,
                    this.cancelHelperRemoval = !1,
                    this._storedCSS = {
                        position: this.placeholder.css("position"),
                        top: this.placeholder.css("top"),
                        left: this.placeholder.css("left")
                    },
                    this._mouseStop(e),
                    this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0,
                    this._trigger("deactivate", e, s))
                })
            },
            drag: function(e, i, n) {
                t.each(n.sortables, function() {
                    var s = !1
                      , o = this;
                    o.positionAbs = n.positionAbs,
                    o.helperProportions = n.helperProportions,
                    o.offset.click = n.offset.click,
                    o._intersectsWith(o.containerCache) && (s = !0,
                    t.each(n.sortables, function() {
                        return this.positionAbs = n.positionAbs,
                        this.helperProportions = n.helperProportions,
                        this.offset.click = n.offset.click,
                        this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1),
                        s
                    })),
                    s ? (o.isOver || (o.isOver = 1,
                    n._parent = i.helper.parent(),
                    o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0),
                    o.options._helper = o.options.helper,
                    o.options.helper = function() {
                        return i.helper[0]
                    }
                    ,
                    e.target = o.currentItem[0],
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    o.offset.click.top = n.offset.click.top,
                    o.offset.click.left = n.offset.click.left,
                    o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left,
                    o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top,
                    n._trigger("toSortable", e),
                    n.dropped = o.element,
                    t.each(n.sortables, function() {
                        this.refreshPositions()
                    }),
                    n.currentItem = n.element,
                    o.fromOutside = n),
                    o.currentItem && (o._mouseDrag(e),
                    i.position = o.position)) : o.isOver && (o.isOver = 0,
                    o.cancelHelperRemoval = !0,
                    o.options._revert = o.options.revert,
                    o.options.revert = !1,
                    o._trigger("out", e, o._uiHash(o)),
                    o._mouseStop(e, !0),
                    o.options.revert = o.options._revert,
                    o.options.helper = o.options._helper,
                    o.placeholder && o.placeholder.remove(),
                    i.helper.appendTo(n._parent),
                    n._refreshOffsets(e),
                    i.position = n._generatePosition(e, !0),
                    n._trigger("fromSortable", e),
                    n.dropped = !1,
                    t.each(n.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }),
        t.ui.plugin.add("draggable", "cursor", {
            start: function(e, i, n) {
                var s = t("body")
                  , o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")),
                s.css("cursor", o.cursor)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }),
        t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i, n) {
                var s = t(i.helper)
                  , o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")),
                s.css("opacity", o.opacity)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }),
        t.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(e, i, n) {
                var s = n.options
                  , o = !1
                  , r = n.scrollParentNotHidden[0]
                  , a = n.document[0];
                r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)),
                s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))),
                s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))),
                !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }),
        t.ui.plugin.add("draggable", "snap", {
            start: function(e, i, n) {
                var s = n.options;
                n.snapElements = [],
                t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                    var e = t(this)
                      , i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, i, n) {
                var s, o, r, a, l, c, u, h, d, p, f = n.options, m = f.snapTolerance, g = i.offset.left, v = g + n.helperProportions.width, _ = i.offset.top, b = _ + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--)
                    c = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width,
                    h = (u = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height,
                    v < l - m || g > c + m || b < u - m || _ > h + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item
                    })),
                    n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(u - b) <= m,
                    o = Math.abs(h - _) <= m,
                    r = Math.abs(l - v) <= m,
                    a = Math.abs(c - g) <= m,
                    s && (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0
                    }).top),
                    o && (i.position.top = n._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top),
                    r && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width
                    }).left),
                    a && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left)),
                    p = s || o || r || a,
                    "outer" !== f.snapMode && (s = Math.abs(u - _) <= m,
                    o = Math.abs(h - b) <= m,
                    r = Math.abs(l - g) <= m,
                    a = Math.abs(c - v) <= m,
                    s && (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0
                    }).top),
                    o && (i.position.top = n._convertPositionTo("relative", {
                        top: h - n.helperProportions.height,
                        left: 0
                    }).top),
                    r && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left),
                    a && (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: c - n.helperProportions.width
                    }).left)),
                    !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item
                    })),
                    n.snapElements[d].snapping = s || o || r || a || p)
            }
        }),
        t.ui.plugin.add("draggable", "stack", {
            start: function(e, i, n) {
                var s, o = n.options, r = t.makeArray(t(o.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
                r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0,
                t(r).each(function(e) {
                    t(this).css("zIndex", s + e)
                }),
                this.css("zIndex", s + r.length))
            }
        }),
        t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i, n) {
                var s = t(i.helper)
                  , o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")),
                s.css("zIndex", o.zIndex)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }),
        t.ui.draggable
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(6), i(9), i(10), i(8), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element,
                this.mouseHandled = !1,
                this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }),
                this._addClass("ui-menu", "ui-widget ui-widget-content"),
                this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var i = t(e.target)
                          , n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                        e.isPropagationStopped() || (this.mouseHandled = !0),
                        i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                        this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item")
                              , n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"),
                            this.focus(e, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }),
                this.refresh(),
                this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t),
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
                  , i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
                i.children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function(e) {
                var i, n, s, o, r = !0;
                switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    r = !1,
                    n = this.previousFilter || "",
                    o = !1,
                    s = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode),
                    clearTimeout(this.filterTimer),
                    s === n ? o = !0 : s = n + s,
                    i = this._filterMenuItems(s),
                    (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode),
                    i = this._filterMenuItems(s)),
                    i.length ? (this.focus(e, i),
                    this.previousFilter = s,
                    this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
                }
                r && e.preventDefault()
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i, n, s, o, r = this, a = this.options.icons.submenu, l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
                n = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this)
                      , i = e.prev()
                      , n = t("<span>").data("ui-menu-submenu-caret", !0);
                    r._addClass(n, "ui-menu-icon", "ui-icon " + a),
                    i.attr("aria-haspopup", "true").prepend(n),
                    e.attr("aria-labelledby", i.attr("id"))
                }),
                this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"),
                e = l.add(this.element),
                (i = e.find(this.options.items)).not(".ui-menu-item").each(function() {
                    var e = t(this);
                    r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
                }),
                s = i.not(".ui-menu-item, .ui-menu-divider"),
                o = s.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }),
                this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
                i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this.element.attr("aria-disabled", String(t)),
                this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function(t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type),
                this._scrollIntoView(e),
                this.active = e.first(),
                n = this.active.children(".ui-menu-item-wrapper"),
                this._addClass(n, null, "ui-state-active"),
                this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
                s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
                this._addClass(s, null, "ui-state-active"),
                t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay),
                (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
                this.activeMenu = e.parent(),
                this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, n, s, o, r, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
                n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
                s = e.offset().top - this.activeMenu.offset().top - i - n,
                o = this.activeMenu.scrollTop(),
                r = this.activeMenu.height(),
                a = e.outerHeight(),
                s < 0 ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer),
                this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
                this._trigger("blur", t, {
                    item: this.active
                }),
                this.active = null)
            },
            _startOpening: function(t) {
                clearTimeout(this.timer),
                "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(),
                    this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer),
                this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer),
                this.timer = this._delay(function() {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element),
                    this._close(n),
                    this.blur(e),
                    this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"),
                    this.activeMenu = n
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element),
                t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(),
                this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()),
                this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()),
                this.focus(i, n)
            },
            nextPage: function(e) {
                var i, n, s;
                this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top,
                s = this.element.height(),
                this.active.nextAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - n - s < 0
                }),
                this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e)
            },
            previousPage: function(e) {
                var i, n, s;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top,
                s = this.element.height(),
                this.active.prevAll(".ui-menu-item").each(function() {
                    return (i = t(this)).offset().top - n + s > 0
                }),
                this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0),
                this._trigger("select", e, i)
            },
            _filterMenuItems: function(e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                  , n = new RegExp("^" + i,"i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(27), i(28), i(6), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e;
        return t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"),
                null != (t = this.element[0].disabled) && (e.disabled = t),
                this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
                this.originalLabel && (e.label = this.originalLabel),
                e
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
                null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
                this.hasTitle = !!this.element.attr("title"),
                this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
                this._addClass("ui-button", "ui-widget"),
                this._setOption("disabled", this.options.disabled),
                this._enhance(),
                this.element.is("a") && this._on({
                    keyup: function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(),
                        this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"),
                this.options.icon && (this._updateIcon("icon", this.options.icon),
                this._updateTooltip())
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"),
                this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function(e, i) {
                var n = "iconPosition" !== e
                  , s = n ? this.options.iconPosition : i
                  , o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"),
                this._addClass(this.icon, "ui-button-icon", "ui-icon"),
                this.options.showLabel || this._addClass("ui-button-icon-only")),
                n && this._addClass(this.icon, null, i),
                this._attachIcon(s),
                o ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"),
                this._addClass(this.iconSpace, "ui-button-icon-space")),
                this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                this._attachIconSpace(s))
            },
            _destroy: function() {
                this.element.removeAttr("role"),
                this.icon && this.icon.remove(),
                this.iconSpace && this.iconSpace.remove(),
                this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function(t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function(t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function(t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel
                  , i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0),
                this._super(t)
            },
            _setOption: function(t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
                this.iconSpace && this.iconSpace.remove())),
                "iconPosition" === t && this._updateIcon(t, e),
                "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
                this._updateTooltip()),
                "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
                this.icon && (this._attachIcon(this.options.iconPosition),
                this._attachIconSpace(this.options.iconPosition)))),
                this._super(t, e),
                "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
                this.element[0].disabled = e,
                e && this.element.blur())
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }),
                this._updateTooltip()
            }
        }),
        !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
                !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
                this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
                this.options.iconPosition = "end"),
                this._super()
            },
            _setOption: function(t, e) {
                "text" !== t ? ("showLabel" === t && (this.options.text = e),
                "icon" === t && (this.options.icons.primary = e),
                "icons" === t && (e.primary ? (this._super("icon", e.primary),
                this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
                this._super("iconPosition", "end"))),
                this._superApply(arguments)) : this._super("showLabel", e)
            }
        }),
        t.fn.button = (e = t.fn.button,
        function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
        ),
        t.fn.buttonset = function() {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"),
            "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }),
            this.controlgroup.apply(this, arguments))
        }
        ),
        t.ui.button
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    "use strict";
    i.r(e),
    function(t) {
        for (var i = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], s = 0, o = 0; o < n.length; o += 1)
            if (i && navigator.userAgent.indexOf(n[o]) >= 0) {
                s = 1;
                break
            }
        var r = i && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                window.Promise.resolve().then(function() {
                    e = !1,
                    t()
                }))
            }
        }
        : function(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                setTimeout(function() {
                    e = !1,
                    t()
                }, s))
            }
        }
        ;
        function a(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }
        function l(t, e) {
            if (1 !== t.nodeType)
                return [];
            var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? i[e] : i
        }
        function c(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }
        function u(t) {
            if (!t)
                return document.body;
            switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
            }
            var e = l(t)
              , i = e.overflow
              , n = e.overflowX
              , s = e.overflowY;
            return /(auto|scroll|overlay)/.test(i + s + n) ? t : u(c(t))
        }
        var h = i && !(!window.MSInputMethodContext || !document.documentMode)
          , d = i && /MSIE 10/.test(navigator.userAgent);
        function p(t) {
            return 11 === t ? h : 10 === t ? d : h || d
        }
        function f(t) {
            if (!t)
                return document.documentElement;
            for (var e = p(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling; )
                i = (t = t.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === l(i, "position") ? f(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
        }
        function m(t) {
            return null !== t.parentNode ? m(t.parentNode) : t
        }
        function g(t, e) {
            if (!(t && t.nodeType && e && e.nodeType))
                return document.documentElement;
            var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
              , n = i ? t : e
              , s = i ? e : t
              , o = document.createRange();
            o.setStart(n, 0),
            o.setEnd(s, 0);
            var r, a, l = o.commonAncestorContainer;
            if (t !== l && e !== l || n.contains(s))
                return "BODY" === (a = (r = l).nodeName) || "HTML" !== a && f(r.firstElementChild) !== r ? f(l) : l;
            var c = m(t);
            return c.host ? g(c.host, e) : g(t, m(e).host)
        }
        function v(t) {
            var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
              , i = t.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var n = t.ownerDocument.documentElement;
                return (t.ownerDocument.scrollingElement || n)[e]
            }
            return t[e]
        }
        function _(t, e) {
            var i = "x" === e ? "Left" : "Top"
              , n = "Left" === i ? "Right" : "Bottom";
            return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + n + "Width"], 10)
        }
        function b(t, e, i, n) {
            return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], p(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
        }
        function y(t) {
            var e = t.body
              , i = t.documentElement
              , n = p(10) && getComputedStyle(i);
            return {
                height: b("Height", e, i, n),
                width: b("Width", e, i, n)
            }
        }
        var w = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
          , x = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }()
          , C = function(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
          , T = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ;
        function k(t) {
            return T({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height
            })
        }
        function S(t) {
            var e = {};
            try {
                if (p(10)) {
                    e = t.getBoundingClientRect();
                    var i = v(t, "top")
                      , n = v(t, "left");
                    e.top += i,
                    e.left += n,
                    e.bottom += i,
                    e.right += n
                } else
                    e = t.getBoundingClientRect()
            } catch (t) {}
            var s = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            }
              , o = "HTML" === t.nodeName ? y(t.ownerDocument) : {}
              , r = o.width || t.clientWidth || s.right - s.left
              , a = o.height || t.clientHeight || s.bottom - s.top
              , c = t.offsetWidth - r
              , u = t.offsetHeight - a;
            if (c || u) {
                var h = l(t);
                c -= _(h, "x"),
                u -= _(h, "y"),
                s.width -= c,
                s.height -= u
            }
            return k(s)
        }
        function D(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , n = p(10)
              , s = "HTML" === e.nodeName
              , o = S(t)
              , r = S(e)
              , a = u(t)
              , c = l(e)
              , h = parseFloat(c.borderTopWidth, 10)
              , d = parseFloat(c.borderLeftWidth, 10);
            i && s && (r.top = Math.max(r.top, 0),
            r.left = Math.max(r.left, 0));
            var f = k({
                top: o.top - r.top - h,
                left: o.left - r.left - d,
                width: o.width,
                height: o.height
            });
            if (f.marginTop = 0,
            f.marginLeft = 0,
            !n && s) {
                var m = parseFloat(c.marginTop, 10)
                  , g = parseFloat(c.marginLeft, 10);
                f.top -= h - m,
                f.bottom -= h - m,
                f.left -= d - g,
                f.right -= d - g,
                f.marginTop = m,
                f.marginLeft = g
            }
            return (n && !i ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (f = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , n = v(e, "top")
                  , s = v(e, "left")
                  , o = i ? -1 : 1;
                return t.top += n * o,
                t.bottom += n * o,
                t.left += s * o,
                t.right += s * o,
                t
            }(f, e)),
            f
        }
        function E(t) {
            if (!t || !t.parentElement || p())
                return document.documentElement;
            for (var e = t.parentElement; e && "none" === l(e, "transform"); )
                e = e.parentElement;
            return e || document.documentElement
        }
        function I(t, e, i, n) {
            var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , o = {
                top: 0,
                left: 0
            }
              , r = s ? E(t) : g(t, e);
            if ("viewport" === n)
                o = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = t.ownerDocument.documentElement
                      , n = D(t, i)
                      , s = Math.max(i.clientWidth, window.innerWidth || 0)
                      , o = Math.max(i.clientHeight, window.innerHeight || 0)
                      , r = e ? 0 : v(i)
                      , a = e ? 0 : v(i, "left");
                    return k({
                        top: r - n.top + n.marginTop,
                        left: a - n.left + n.marginLeft,
                        width: s,
                        height: o
                    })
                }(r, s);
            else {
                var a = void 0;
                "scrollParent" === n ? "BODY" === (a = u(c(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === n ? t.ownerDocument.documentElement : n;
                var h = D(a, r, s);
                if ("HTML" !== a.nodeName || function t(e) {
                    var i = e.nodeName;
                    if ("BODY" === i || "HTML" === i)
                        return !1;
                    if ("fixed" === l(e, "position"))
                        return !0;
                    var n = c(e);
                    return !!n && t(n)
                }(r))
                    o = h;
                else {
                    var d = y(t.ownerDocument)
                      , p = d.height
                      , f = d.width;
                    o.top += h.top - h.marginTop,
                    o.bottom = p + h.top,
                    o.left += h.left - h.marginLeft,
                    o.right = f + h.left
                }
            }
            var m = "number" == typeof (i = i || 0);
            return o.left += m ? i : i.left || 0,
            o.top += m ? i : i.top || 0,
            o.right -= m ? i : i.right || 0,
            o.bottom -= m ? i : i.bottom || 0,
            o
        }
        function A(t, e, i, n, s) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto"))
                return t;
            var r = I(i, n, o, s)
              , a = {
                top: {
                    width: r.width,
                    height: e.top - r.top
                },
                right: {
                    width: r.right - e.right,
                    height: r.height
                },
                bottom: {
                    width: r.width,
                    height: r.bottom - e.bottom
                },
                left: {
                    width: e.left - r.left,
                    height: r.height
                }
            }
              , l = Object.keys(a).map(function(t) {
                return T({
                    key: t
                }, a[t], {
                    area: (e = a[t],
                    e.width * e.height)
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            })
              , c = l.filter(function(t) {
                var e = t.width
                  , n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            })
              , u = c.length > 0 ? c[0].key : l[0].key
              , h = t.split("-")[1];
            return u + (h ? "-" + h : "")
        }
        function O(t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return D(i, n ? E(e) : g(e, i), n)
        }
        function N(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t)
              , i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
              , n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return {
                width: t.offsetWidth + n,
                height: t.offsetHeight + i
            }
        }
        function P(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return t.replace(/left|right|bottom|top/g, function(t) {
                return e[t]
            })
        }
        function M(t, e, i) {
            i = i.split("-")[0];
            var n = N(t)
              , s = {
                width: n.width,
                height: n.height
            }
              , o = -1 !== ["right", "left"].indexOf(i)
              , r = o ? "top" : "left"
              , a = o ? "left" : "top"
              , l = o ? "height" : "width"
              , c = o ? "width" : "height";
            return s[r] = e[r] + e[l] / 2 - n[l] / 2,
            s[a] = i === a ? e[a] - n[c] : e[P(a)],
            s
        }
        function H(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }
        function L(t, e, i) {
            return (void 0 === i ? t : t.slice(0, function(t, e, i) {
                if (Array.prototype.findIndex)
                    return t.findIndex(function(t) {
                        return t[e] === i
                    });
                var n = H(t, function(t) {
                    return t[e] === i
                });
                return t.indexOf(n)
            }(t, "name", i))).forEach(function(t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && a(i) && (e.offsets.popper = k(e.offsets.popper),
                e.offsets.reference = k(e.offsets.reference),
                e = i(e, t))
            }),
            e
        }
        function R(t, e) {
            return t.some(function(t) {
                var i = t.name;
                return t.enabled && i === e
            })
        }
        function W(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
                var s = e[n]
                  , o = s ? "" + s + i : t;
                if (void 0 !== document.body.style[o])
                    return o
            }
            return null
        }
        function j(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }
        function z(t, e, i, n) {
            i.updateBound = n,
            j(t).addEventListener("resize", i.updateBound, {
                passive: !0
            });
            var s = u(t);
            return function t(e, i, n, s) {
                var o = "BODY" === e.nodeName
                  , r = o ? e.ownerDocument.defaultView : e;
                r.addEventListener(i, n, {
                    passive: !0
                }),
                o || t(u(r.parentNode), i, n, s),
                s.push(r)
            }(s, "scroll", i.updateBound, i.scrollParents),
            i.scrollElement = s,
            i.eventsEnabled = !0,
            i
        }
        function F() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (t = this.reference,
            e = this.state,
            j(t).removeEventListener("resize", e.updateBound),
            e.scrollParents.forEach(function(t) {
                t.removeEventListener("scroll", e.updateBound)
            }),
            e.updateBound = null,
            e.scrollParents = [],
            e.scrollElement = null,
            e.eventsEnabled = !1,
            e))
        }
        function B(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }
        function q(t, e) {
            Object.keys(e).forEach(function(i) {
                var n = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && B(e[i]) && (n = "px"),
                t.style[i] = e[i] + n
            })
        }
        var U = i && /Firefox/i.test(navigator.userAgent);
        function V(t, e, i) {
            var n = H(t, function(t) {
                return t.name === e
            })
              , s = !!n && t.some(function(t) {
                return t.name === i && t.enabled && t.order < n.order
            });
            if (!s) {
                var o = "`" + e + "`"
                  , r = "`" + i + "`";
                console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return s
        }
        var Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
          , K = Y.slice(3);
        function Q(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , i = K.indexOf(t)
              , n = K.slice(i + 1).concat(K.slice(0, i));
            return e ? n.reverse() : n
        }
        var G = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        };
        function X(t, e, i, n) {
            var s = [0, 0]
              , o = -1 !== ["right", "left"].indexOf(n)
              , r = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            })
              , a = r.indexOf(H(r, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
            r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/
              , c = -1 !== a ? [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))] : [r];
            return (c = c.map(function(t, n) {
                var s = (1 === n ? !o : o) ? "height" : "width"
                  , r = !1;
                return t.reduce(function(t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                    r = !0,
                    t) : r ? (t[t.length - 1] += e,
                    r = !1,
                    t) : t.concat(e)
                }, []).map(function(t) {
                    return function(t, e, i, n) {
                        var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                          , o = +s[1]
                          , r = s[2];
                        if (!o)
                            return t;
                        if (0 === r.indexOf("%")) {
                            var a = void 0;
                            switch (r) {
                            case "%p":
                                a = i;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = n
                            }
                            return k(a)[e] / 100 * o
                        }
                        if ("vh" === r || "vw" === r)
                            return ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                        return o
                    }(t, s, e, i)
                })
            })).forEach(function(t, e) {
                t.forEach(function(i, n) {
                    B(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1))
                })
            }),
            s
        }
        var $ = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement
                          , i = e.split("-")[0]
                          , n = e.split("-")[1];
                        if (n) {
                            var s = t.offsets
                              , o = s.reference
                              , r = s.popper
                              , a = -1 !== ["bottom", "top"].indexOf(i)
                              , l = a ? "left" : "top"
                              , c = a ? "width" : "height"
                              , u = {
                                start: C({}, l, o[l]),
                                end: C({}, l, o[l] + o[c] - r[c])
                            };
                            t.offsets.popper = T({}, r, u[n])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var i = e.offset
                          , n = t.placement
                          , s = t.offsets
                          , o = s.popper
                          , r = s.reference
                          , a = n.split("-")[0]
                          , l = void 0;
                        return l = B(+i) ? [+i, 0] : X(i, o, r, a),
                        "left" === a ? (o.top += l[0],
                        o.left -= l[1]) : "right" === a ? (o.top += l[0],
                        o.left += l[1]) : "top" === a ? (o.left += l[0],
                        o.top -= l[1]) : "bottom" === a && (o.left += l[0],
                        o.top += l[1]),
                        t.popper = o,
                        t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var i = e.boundariesElement || f(t.instance.popper);
                        t.instance.reference === i && (i = f(i));
                        var n = W("transform")
                          , s = t.instance.popper.style
                          , o = s.top
                          , r = s.left
                          , a = s[n];
                        s.top = "",
                        s.left = "",
                        s[n] = "";
                        var l = I(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                        s.top = o,
                        s.left = r,
                        s[n] = a,
                        e.boundaries = l;
                        var c = e.priority
                          , u = t.offsets.popper
                          , h = {
                            primary: function(t) {
                                var i = u[t];
                                return u[t] < l[t] && !e.escapeWithReference && (i = Math.max(u[t], l[t])),
                                C({}, t, i)
                            },
                            secondary: function(t) {
                                var i = "right" === t ? "left" : "top"
                                  , n = u[i];
                                return u[t] > l[t] && !e.escapeWithReference && (n = Math.min(u[i], l[t] - ("right" === t ? u.width : u.height))),
                                C({}, i, n)
                            }
                        };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = T({}, u, h[e](t))
                        }),
                        t.offsets.popper = u,
                        t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets
                          , i = e.popper
                          , n = e.reference
                          , s = t.placement.split("-")[0]
                          , o = Math.floor
                          , r = -1 !== ["top", "bottom"].indexOf(s)
                          , a = r ? "right" : "bottom"
                          , l = r ? "left" : "top"
                          , c = r ? "width" : "height";
                        return i[a] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[c]),
                        i[l] > o(n[a]) && (t.offsets.popper[l] = o(n[a])),
                        t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var i;
                        if (!V(t.instance.modifiers, "arrow", "keepTogether"))
                            return t;
                        var n = e.element;
                        if ("string" == typeof n) {
                            if (!(n = t.instance.popper.querySelector(n)))
                                return t
                        } else if (!t.instance.popper.contains(n))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                            t;
                        var s = t.placement.split("-")[0]
                          , o = t.offsets
                          , r = o.popper
                          , a = o.reference
                          , c = -1 !== ["left", "right"].indexOf(s)
                          , u = c ? "height" : "width"
                          , h = c ? "Top" : "Left"
                          , d = h.toLowerCase()
                          , p = c ? "left" : "top"
                          , f = c ? "bottom" : "right"
                          , m = N(n)[u];
                        a[f] - m < r[d] && (t.offsets.popper[d] -= r[d] - (a[f] - m)),
                        a[d] + m > r[f] && (t.offsets.popper[d] += a[d] + m - r[f]),
                        t.offsets.popper = k(t.offsets.popper);
                        var g = a[d] + a[u] / 2 - m / 2
                          , v = l(t.instance.popper)
                          , _ = parseFloat(v["margin" + h], 10)
                          , b = parseFloat(v["border" + h + "Width"], 10)
                          , y = g - t.offsets.popper[d] - _ - b;
                        return y = Math.max(Math.min(r[u] - m, y), 0),
                        t.arrowElement = n,
                        t.offsets.arrow = (C(i = {}, d, Math.round(y)),
                        C(i, p, ""),
                        i),
                        t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (R(t.instance.modifiers, "inner"))
                            return t;
                        if (t.flipped && t.placement === t.originalPlacement)
                            return t;
                        var i = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
                          , n = t.placement.split("-")[0]
                          , s = P(n)
                          , o = t.placement.split("-")[1] || ""
                          , r = [];
                        switch (e.behavior) {
                        case G.FLIP:
                            r = [n, s];
                            break;
                        case G.CLOCKWISE:
                            r = Q(n);
                            break;
                        case G.COUNTERCLOCKWISE:
                            r = Q(n, !0);
                            break;
                        default:
                            r = e.behavior
                        }
                        return r.forEach(function(a, l) {
                            if (n !== a || r.length === l + 1)
                                return t;
                            n = t.placement.split("-")[0],
                            s = P(n);
                            var c = t.offsets.popper
                              , u = t.offsets.reference
                              , h = Math.floor
                              , d = "left" === n && h(c.right) > h(u.left) || "right" === n && h(c.left) < h(u.right) || "top" === n && h(c.bottom) > h(u.top) || "bottom" === n && h(c.top) < h(u.bottom)
                              , p = h(c.left) < h(i.left)
                              , f = h(c.right) > h(i.right)
                              , m = h(c.top) < h(i.top)
                              , g = h(c.bottom) > h(i.bottom)
                              , v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g
                              , _ = -1 !== ["top", "bottom"].indexOf(n)
                              , b = !!e.flipVariations && (_ && "start" === o && p || _ && "end" === o && f || !_ && "start" === o && m || !_ && "end" === o && g)
                              , y = !!e.flipVariationsByContent && (_ && "start" === o && f || _ && "end" === o && p || !_ && "start" === o && g || !_ && "end" === o && m)
                              , w = b || y;
                            (d || v || w) && (t.flipped = !0,
                            (d || v) && (n = r[l + 1]),
                            w && (o = function(t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)),
                            t.placement = n + (o ? "-" + o : ""),
                            t.offsets.popper = T({}, t.offsets.popper, M(t.instance.popper, t.offsets.reference, t.placement)),
                            t = L(t.instance.modifiers, t, "flip"))
                        }),
                        t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement
                          , i = e.split("-")[0]
                          , n = t.offsets
                          , s = n.popper
                          , o = n.reference
                          , r = -1 !== ["left", "right"].indexOf(i)
                          , a = -1 === ["top", "left"].indexOf(i);
                        return s[r ? "left" : "top"] = o[i] - (a ? s[r ? "width" : "height"] : 0),
                        t.placement = P(e),
                        t.offsets.popper = k(s),
                        t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!V(t.instance.modifiers, "hide", "preventOverflow"))
                            return t;
                        var e = t.offsets.reference
                          , i = H(t.instance.modifiers, function(t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                        if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                            if (!0 === t.hide)
                                return t;
                            t.hide = !0,
                            t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide)
                                return t;
                            t.hide = !1,
                            t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var i = e.x
                          , n = e.y
                          , s = t.offsets.popper
                          , o = H(t.instance.modifiers, function(t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var r = void 0 !== o ? o : e.gpuAcceleration
                          , a = f(t.instance.popper)
                          , l = S(a)
                          , c = {
                            position: s.position
                        }
                          , u = function(t, e) {
                            var i = t.offsets
                              , n = i.popper
                              , s = i.reference
                              , o = Math.round
                              , r = Math.floor
                              , a = function(t) {
                                return t
                            }
                              , l = o(s.width)
                              , c = o(n.width)
                              , u = -1 !== ["left", "right"].indexOf(t.placement)
                              , h = -1 !== t.placement.indexOf("-")
                              , d = e ? u || h || l % 2 == c % 2 ? o : r : a
                              , p = e ? o : a;
                            return {
                                left: d(l % 2 == 1 && c % 2 == 1 && !h && e ? n.left - 1 : n.left),
                                top: p(n.top),
                                bottom: p(n.bottom),
                                right: d(n.right)
                            }
                        }(t, window.devicePixelRatio < 2 || !U)
                          , h = "bottom" === i ? "top" : "bottom"
                          , d = "right" === n ? "left" : "right"
                          , p = W("transform")
                          , m = void 0
                          , g = void 0;
                        if (g = "bottom" === h ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top,
                        m = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left,
                        r && p)
                            c[p] = "translate3d(" + m + "px, " + g + "px, 0)",
                            c[h] = 0,
                            c[d] = 0,
                            c.willChange = "transform";
                        else {
                            var v = "bottom" === h ? -1 : 1
                              , _ = "right" === d ? -1 : 1;
                            c[h] = g * v,
                            c[d] = m * _,
                            c.willChange = h + ", " + d
                        }
                        var b = {
                            "x-placement": t.placement
                        };
                        return t.attributes = T({}, b, t.attributes),
                        t.styles = T({}, c, t.styles),
                        t.arrowStyles = T({}, t.offsets.arrow, t.arrowStyles),
                        t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, i;
                        return q(t.instance.popper, t.styles),
                        e = t.instance.popper,
                        i = t.attributes,
                        Object.keys(i).forEach(function(t) {
                            !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                        }),
                        t.arrowElement && Object.keys(t.arrowStyles).length && q(t.arrowElement, t.arrowStyles),
                        t
                    },
                    onLoad: function(t, e, i, n, s) {
                        var o = O(s, e, t, i.positionFixed)
                          , r = A(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return e.setAttribute("x-placement", r),
                        q(e, {
                            position: i.positionFixed ? "fixed" : "absolute"
                        }),
                        i
                    },
                    gpuAcceleration: void 0
                }
            }
        }
          , J = function() {
            function t(e, i) {
                var n = this
                  , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                w(this, t),
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }
                ,
                this.update = r(this.update.bind(this)),
                this.options = T({}, t.Defaults, s),
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                },
                this.reference = e && e.jquery ? e[0] : e,
                this.popper = i && i.jquery ? i[0] : i,
                this.options.modifiers = {},
                Object.keys(T({}, t.Defaults.modifiers, s.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = T({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                }),
                this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return T({
                        name: t
                    }, n.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }),
                this.modifiers.forEach(function(t) {
                    t.enabled && a(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }),
                this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(),
                this.state.eventsEnabled = o
            }
            return x(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed),
                            t.placement = A(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                            t.originalPlacement = t.placement,
                            t.positionFixed = this.options.positionFixed,
                            t.offsets.popper = M(this.popper, t.offsets.reference, t.placement),
                            t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                            t = L(this.modifiers, t),
                            this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                            this.options.onCreate(t))
                        }
                    }
                    .call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0,
                        R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                        this.popper.style.position = "",
                        this.popper.style.top = "",
                        this.popper.style.left = "",
                        this.popper.style.right = "",
                        this.popper.style.bottom = "",
                        this.popper.style.willChange = "",
                        this.popper.style[W("transform")] = ""),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                    }
                    .call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
                    }
                    .call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return F.call(this)
                }
            }]),
            t
        }();
        J.Utils = ("undefined" != typeof window ? window : t).PopperUtils,
        J.placements = Y,
        J.Defaults = $,
        e.default = J
    }
    .call(this, i(35))
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.fn.extend({
            disableSelection: (e = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
            function() {
                return this.on(e + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
            ),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        });
        var e
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(13)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex")
                  , n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.plugin = {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n)
                    o.plugins[s] = o.plugins[s] || [],
                    o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++)
                        t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.ui.safeBlur = function(e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(7), i(21), i(24), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseFloat(t) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow"))
                    return !1;
                var n, s = i && "left" === i ? "scrollLeft" : "scrollTop";
                return e[s] > 0 || (e[s] = 1,
                n = e[s] > 0,
                e[s] = 0,
                n)
            },
            _create: function() {
                var e, i = this.options, n = this;
                this._addClass("ui-resizable"),
                t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }),
                this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })),
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                this.elementIsWrapper = !0,
                e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                },
                this.element.css(e),
                this.originalElement.css("margin", 0),
                this.originalResizeStyle = this.originalElement.css("resize"),
                this.originalElement.css("resize", "none"),
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })),
                this.originalElement.css(e),
                this._proportionallyResize()),
                this._setupHandles(),
                i.autoHide && t(this.element).on("mouseenter", function() {
                    i.disabled || (n._removeClass("ui-resizable-autohide"),
                    n._handles.show())
                }).on("mouseleave", function() {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"),
                    n._handles.hide())
                }),
                this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element),
                e = this.element,
                this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e),
                e.remove()),
                this.originalElement.css("resize", this.originalResizeStyle),
                i(this.originalElement),
                this
            },
            _setOption: function(t, e) {
                switch (this._super(t, e),
                t) {
                case "handles":
                    this._removeHandles(),
                    this._setupHandles()
                }
            },
            _setupHandles: function() {
                var e, i, n, s, o, r = this.options, a = this;
                if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"),
                this._handles = t(),
                this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                    n = this.handles.split(","),
                    this.handles = {},
                    i = 0; i < n.length; i++)
                        s = "ui-resizable-" + (e = t.trim(n[i])),
                        o = t("<div>"),
                        this._addClass(o, "ui-resizable-handle " + s),
                        o.css({
                            zIndex: r.zIndex
                        }),
                        this.handles[e] = ".ui-resizable-" + e,
                        this.element.append(o);
                this._renderAxis = function(e) {
                    var i, n, s, o;
                    for (i in e = e || this.element,
                    this.handles)
                        this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]),
                        this._on(this.handles[i], {
                            mousedown: a._mouseDown
                        })),
                        this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element),
                        o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(),
                        s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                        e.css(s, o),
                        this._proportionallyResize()),
                        this._handles = this._handles.add(this.handles[i])
                }
                ,
                this._renderAxis(this.element),
                this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
                this._handles.disableSelection(),
                this._handles.on("mouseover", function() {
                    a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                    a.axis = o && o[1] ? o[1] : "se")
                }),
                r.autoHide && (this._handles.hide(),
                this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(e) {
                var i, n, s = !1;
                for (i in this.handles)
                    ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(e) {
                var i, n, s, o = this.options, r = this.element;
                return this.resizing = !0,
                this._renderProxy(),
                i = this._num(this.helper.css("left")),
                n = this._num(this.helper.css("top")),
                o.containment && (i += t(o.containment).scrollLeft() || 0,
                n += t(o.containment).scrollTop() || 0),
                this.offset = this.helper.offset(),
                this.position = {
                    left: i,
                    top: n
                },
                this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: r.width(),
                    height: r.height()
                },
                this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                },
                this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                },
                this.originalPosition = {
                    left: i,
                    top: n
                },
                this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                },
                this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                s = t(".ui-resizable-" + this.axis).css("cursor"),
                t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                this._addClass("ui-resizable-resizing"),
                this._propagate("start", e),
                !0
            },
            _mouseDrag: function(e) {
                var i, n, s = this.originalMousePosition, o = this.axis, r = e.pageX - s.left || 0, a = e.pageY - s.top || 0, l = this._change[o];
                return this._updatePrevProperties(),
                !!l && (i = l.apply(this, [e, r, a]),
                this._updateVirtualBoundaries(e.shiftKey),
                (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
                i = this._respectSize(i, e),
                this._updateCache(i),
                this._propagate("resize", e),
                n = this._applyChanges(),
                !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                t.isEmptyObject(n) || (this._updatePrevProperties(),
                this._trigger("resize", e, this.ui()),
                this._applyChanges()),
                !1)
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, s, o, r, a, l, c = this.options;
                return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height,
                o = n ? 0 : this.sizeDiff.width,
                r = {
                    width: this.helper.width() - o,
                    height: this.helper.height() - s
                },
                a = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null,
                l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null,
                c.animate || this.element.css(t.extend(r, {
                    top: l,
                    left: a
                })),
                this.helper.height(this.size.height),
                this.helper.width(this.size.width),
                this._helper && !c.animate && this._proportionallyResize()),
                t("body").css("cursor", "auto"),
                this._removeClass("ui-resizable-resizing"),
                this._propagate("stop", e),
                this._helper && this.helper.remove(),
                !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                },
                this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
                this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
                this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
                this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
                this.helper.css(t),
                t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, o, r = this.options;
                o = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                },
                (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
                n = o.minWidth / this.aspectRatio,
                i = o.maxHeight * this.aspectRatio,
                s = o.maxWidth / this.aspectRatio,
                e > o.minWidth && (o.minWidth = e),
                n > o.minHeight && (o.minHeight = n),
                i < o.maxWidth && (o.maxWidth = i),
                s < o.maxHeight && (o.maxHeight = s)),
                this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(),
                this._isNumber(t.left) && (this.position.left = t.left),
                this._isNumber(t.top) && (this.position.top = t.top),
                this._isNumber(t.height) && (this.size.height = t.height),
                this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position
                  , i = this.size
                  , n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
                "sw" === n && (t.left = e.left + (i.width - t.width),
                t.top = null),
                "nw" === n && (t.top = e.top + (i.height - t.height),
                t.left = e.left + (i.width - t.width)),
                t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries
                  , i = this.axis
                  , n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
                  , s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
                  , o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
                  , r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
                  , a = this.originalPosition.left + this.originalSize.width
                  , l = this.originalPosition.top + this.originalSize.height
                  , c = /sw|nw|w/.test(i)
                  , u = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth),
                r && (t.height = e.minHeight),
                n && (t.width = e.maxWidth),
                s && (t.height = e.maxHeight),
                o && c && (t.left = a - e.minWidth),
                n && c && (t.left = a - e.maxWidth),
                r && u && (t.top = l - e.minHeight),
                s && u && (t.top = l - e.maxHeight),
                t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
                t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++)
                    i[e] = parseFloat(n[e]) || 0,
                    i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++)
                        t = this._proportionallyResizeElements[e],
                        this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                        t.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
            },
            _renderProxy: function() {
                var e = this.element
                  , i = this.options;
                this.elementOffset = e.offset(),
                this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
                this._addClass(this.helper, this._helper),
                this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }),
                this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize;
                    return {
                        left: this.originalPosition.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]),
                "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }),
        t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).resizable("instance")
                  , n = i.options
                  , s = i._proportionallyResizeElements
                  , o = s.length && /textarea/i.test(s[0].nodeName)
                  , r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height
                  , a = o ? 0 : i.sizeDiff.width
                  , l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                }
                  , c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
                  , u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, u && c ? {
                    top: u,
                    left: c
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }),
                        i._updateCache(n),
                        i._propagate("resize", e)
                    }
                })
            }
        }),
        t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, n, s, o, r, a, l = t(this).resizable("instance"), c = l.options, u = l.element, h = c.containment, d = h instanceof t ? h.get(0) : /parent/.test(h) ? u.parent().get(0) : h;
                d && (l.containerElement = t(d),
                /document/.test(h) || h === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                },
                l.containerPosition = {
                    left: 0,
                    top: 0
                },
                l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d),
                i = [],
                t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }),
                l.containerOffset = e.offset(),
                l.containerPosition = e.position(),
                l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                },
                n = l.containerOffset,
                s = l.containerSize.height,
                o = l.containerSize.width,
                r = l._hasScroll(d, "left") ? d.scrollWidth : o,
                a = l._hasScroll(d) ? d.scrollHeight : s,
                l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: r,
                    height: a
                }))
            },
            resize: function(e) {
                var i, n, s, o, r = t(this).resizable("instance"), a = r.options, l = r.containerOffset, c = r.position, u = r._aspectRatio || e.shiftKey, h = {
                    top: 0,
                    left: 0
                }, d = r.containerElement, p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (h = l),
                c.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - h.left),
                u && (r.size.height = r.size.width / r.aspectRatio,
                p = !1),
                r.position.left = a.helper ? l.left : 0),
                c.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top),
                u && (r.size.width = r.size.height * r.aspectRatio,
                p = !1),
                r.position.top = r._helper ? l.top : 0),
                s = r.containerElement.get(0) === r.element.parent().get(0),
                o = /relative|absolute/.test(r.containerElement.css("position")),
                s && o ? (r.offset.left = r.parentData.left + r.position.left,
                r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left,
                r.offset.top = r.element.offset().top),
                i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - h.left : r.offset.left - l.left)),
                n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - h.top : r.offset.top - l.top)),
                i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i,
                u && (r.size.height = r.size.width / r.aspectRatio,
                p = !1)),
                n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n,
                u && (r.size.width = r.size.height * r.aspectRatio,
                p = !1)),
                p || (r.position.left = r.prevPosition.left,
                r.position.top = r.prevPosition.top,
                r.size.width = r.prevSize.width,
                r.size.height = r.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance")
                  , i = e.options
                  , n = e.containerOffset
                  , s = e.containerPosition
                  , o = e.containerElement
                  , r = t(e.helper)
                  , a = r.offset()
                  , l = r.outerWidth() - e.sizeDiff.width
                  , c = r.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: c
                }),
                e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: c
                })
            }
        }),
        t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).resizable("instance").options;
                t(e.alsoResize).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            },
            resize: function(e, i) {
                var n = t(this).resizable("instance")
                  , s = n.options
                  , o = n.originalSize
                  , r = n.originalPosition
                  , a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                };
                t(s.alsoResize).each(function() {
                    var e = t(this)
                      , n = t(this).data("ui-resizable-alsoresize")
                      , s = {}
                      , o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) {
                        var i = (n[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    }),
                    e.css(s)
                })
            },
            stop: function() {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }),
        t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance")
                  , i = e.size;
                e.ghost = e.originalElement.clone(),
                e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }),
                e._addClass(e.ghost, "ui-resizable-ghost"),
                !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
                e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }),
        t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e, i = t(this).resizable("instance"), n = i.options, s = i.size, o = i.originalSize, r = i.originalPosition, a = i.axis, l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid, c = l[0] || 1, u = l[1] || 1, h = Math.round((s.width - o.width) / c) * c, d = Math.round((s.height - o.height) / u) * u, p = o.width + h, f = o.height + d, m = n.maxWidth && n.maxWidth < p, g = n.maxHeight && n.maxHeight < f, v = n.minWidth && n.minWidth > p, _ = n.minHeight && n.minHeight > f;
                n.grid = l,
                v && (p += c),
                _ && (f += u),
                m && (p -= c),
                g && (f -= u),
                /^(se|s|e)$/.test(a) ? (i.size.width = p,
                i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p,
                i.size.height = f,
                i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p,
                i.size.height = f,
                i.position.left = r.left - h) : ((f - u <= 0 || p - c <= 0) && (e = i._getPaddingPlusBorderDimensions(this)),
                f - u > 0 ? (i.size.height = f,
                i.position.top = r.top - d) : (f = u - e.height,
                i.size.height = f,
                i.position.top = r.top + o.height - f),
                p - c > 0 ? (i.size.width = p,
                i.position.left = r.left - h) : (p = c - e.width,
                i.size.width = p,
                i.position.left = r.left + o.width - p))
            }
        }),
        t.ui.resizable
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e = /ui-corner-([a-z]){2,6}/g;
        return t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function() {
                this._enhance()
            },
            _enhance: function() {
                this.element.attr("role", "toolbar"),
                this.refresh()
            },
            _destroy: function() {
                this._callChildMethod("destroy"),
                this.childWidgets.removeData("ui-controlgroup-data"),
                this.element.removeAttr("role"),
                this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function() {
                var e = this
                  , i = [];
                t.each(this.options.items, function(n, s) {
                    var o, r = {};
                    if (s)
                        return "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
                            var e = t(this);
                            e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                        }),
                        e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
                        void (i = i.concat(o.get()))) : void (t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                            classes: {}
                        },
                        e.element.find(s).each(function() {
                            var s = t(this)
                              , o = s[n]("instance")
                              , a = t.widget.extend({}, r);
                            if ("button" !== n || !s.parent(".ui-spinner").length) {
                                o || (o = s[n]()[n]("instance")),
                                o && (a.classes = e._resolveClassesValues(a.classes, o)),
                                s[n](a);
                                var l = s[n]("widget");
                                t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")),
                                i.push(l[0])
                            }
                        })))
                }),
                this.childWidgets = t(t.unique(i)),
                this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function(e) {
                this.childWidgets.each(function() {
                    var i = t(this)
                      , n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]()
                })
            },
            _updateCornerClass: function(t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
                this._addClass(t, null, i)
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction
                  , n = {
                    classes: {}
                };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t],
                n
            },
            _spinnerOptions: function(t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "",
                e.classes["ui-spinner-down"] = "",
                e
            },
            _buttonOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function(t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function(i, n) {
                var s = {};
                return t.each(i, function(o) {
                    var r = n.options.classes[o] || "";
                    r = t.trim(r.replace(e, "")),
                    s[o] = (r + " " + i[o]).replace(/\s+/g, " ")
                }),
                s
            },
            _setOption: function(t, e) {
                "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
                this._super(t, e),
                "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
            },
            refresh: function() {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
                "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
                this._initWidgets(),
                e = this.childWidgets,
                this.options.onlyVisible && (e = e.filter(":visible")),
                e.length && (t.each(["first", "last"], function(t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s),
                        s.element[s.widgetName](o)
                    } else
                        i._updateCornerClass(e[n](), n)
                }),
                this._callChildMethod("refresh"))
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(11), i(14), i(15), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function() {
                var e, i, n = this, s = this._super() || {};
                return this._readType(),
                i = this.element.labels(),
                this.label = t(i[i.length - 1]),
                this.label.length || t.error("No label found for checkboxradio widget"),
                this.originalLabel = "",
                this.label.contents().not(this.element[0]).each(function() {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }),
                this.originalLabel && (s.label = this.originalLabel),
                null != (e = this.element[0].disabled) && (s.disabled = e),
                s
            },
            _create: function() {
                var t = this.element[0].checked;
                this._bindFormResetHandler(),
                null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
                this._setOption("disabled", this.options.disabled),
                this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
                this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
                "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
                this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
                this._enhance(),
                t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
                this.icon && this._addClass(this.icon, null, "ui-state-hover")),
                this._on({
                    change: "_toggleClasses",
                    focus: function() {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function() {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function() {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type,
                "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked)
            },
            widget: function() {
                return this.label
            },
            _getRadioGroup: function() {
                var e = this.element[0].name
                  , i = "input[name='" + t.ui.escapeSelector(e) + "']";
                return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                    return 0 === t(this).form().length
                })).not(this.element) : t([])
            },
            _toggleClasses: function() {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
                this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e),
                "radio" === this.type && this._getRadioGroup().each(function() {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function() {
                this._unbindFormResetHandler(),
                this.icon && (this.icon.remove(),
                this.iconSpace.remove())
            },
            _setOption: function(t, e) {
                if ("label" !== t || e) {
                    if (this._super(t, e),
                    "disabled" === t)
                        return this._toggleClass(this.label, null, "ui-state-disabled", e),
                        void (this.element[0].disabled = e);
                    this.refresh()
                }
            },
            _updateIcon: function(e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"),
                this.iconSpace = t("<span> </span>"),
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
                "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
                this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
                this._addClass(this.icon, "ui-checkboxradio-icon", i),
                e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
                this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
                this.iconSpace.remove(),
                delete this.icon)
            },
            _updateLabel: function() {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])),
                this.iconSpace && (t = t.not(this.iconSpace[0])),
                t.remove(),
                this.label.append(this.options.label)
            },
            refresh: function() {
                var t = this.element[0].checked
                  , e = this.element[0].disabled;
                this._updateIcon(t),
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
                null !== this.options.label && this._updateLabel(),
                e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]),
        t.ui.checkboxradio
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5), i(30)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("scale", function(e, i) {
            var n = t(this)
              , s = e.mode
              , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100)
              , r = t.extend(!0, {
                from: t.effects.scaledDimensions(n),
                to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                origin: e.origin || ["middle", "center"]
            }, e);
            e.fade && (r.from.opacity = 1,
            r.to.opacity = 0),
            t.effects.effect.size.call(this, r, i)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("size", function(e, i) {
            var n, s, o, r = t(this), a = ["fontSize"], l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], u = e.mode, h = "effect" !== u, d = e.scale || "both", p = e.origin || ["middle", "center"], f = r.css("position"), m = r.position(), g = t.effects.scaledDimensions(r), v = e.from || g, _ = e.to || t.effects.scaledDimensions(r, 0);
            t.effects.createPlaceholder(r),
            "show" === u && (o = v,
            v = _,
            _ = o),
            s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: _.height / g.height,
                    x: _.width / g.width
                }
            },
            "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v),
            _ = t.effects.setTransition(r, l, s.to.y, _)),
            s.from.x !== s.to.x && (v = t.effects.setTransition(r, c, s.from.x, v),
            _ = t.effects.setTransition(r, c, s.to.x, _))),
            "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v),
            _ = t.effects.setTransition(r, a, s.to.y, _)),
            p && (n = t.effects.getBaseline(p, g),
            v.top = (g.outerHeight - v.outerHeight) * n.y + m.top,
            v.left = (g.outerWidth - v.outerWidth) * n.x + m.left,
            _.top = (g.outerHeight - _.outerHeight) * n.y + m.top,
            _.left = (g.outerWidth - _.outerWidth) * n.x + m.left),
            r.css(v),
            "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(a),
            c = c.concat(["marginLeft", "marginRight"]),
            r.find("*[width]").each(function() {
                var i = t(this)
                  , n = t.effects.scaledDimensions(i)
                  , o = {
                    height: n.height * s.from.y,
                    width: n.width * s.from.x,
                    outerHeight: n.outerHeight * s.from.y,
                    outerWidth: n.outerWidth * s.from.x
                }
                  , r = {
                    height: n.height * s.to.y,
                    width: n.width * s.to.x,
                    outerHeight: n.height * s.to.y,
                    outerWidth: n.width * s.to.x
                };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o),
                r = t.effects.setTransition(i, l, s.to.y, r)),
                s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o),
                r = t.effects.setTransition(i, c, s.to.x, r)),
                h && t.effects.saveStyle(i),
                i.css(o),
                i.animate(r, e.duration, e.easing, function() {
                    h && t.effects.restoreStyle(i)
                })
            })),
            r.animate(_, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    var e = r.offset();
                    0 === _.opacity && r.css("opacity", v.opacity),
                    h || (r.css("position", "static" === f ? "relative" : f).offset(e),
                    t.effects.saveStyle(r)),
                    i()
                }
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], o = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var r = n.length; r; )
                t.event.fixHooks[n[--r]] = t.event.mouseHooks;
        var a = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var e = s.length; e; )
                        this.addEventListener(s[--e], l, !1);
                else
                    this.onmousewheel = l;
                t.data(this, "mousewheel-line-height", a.getLineHeight(this)),
                t.data(this, "mousewheel-page-height", a.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = s.length; e; )
                        this.removeEventListener(s[--e], l, !1);
                else
                    this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"),
                t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var i = t(e)
                  , n = i["offsetParent"in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")),
                parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        function l(n) {
            var s = n || window.event
              , r = o.call(arguments, 1)
              , l = 0
              , h = 0
              , d = 0
              , p = 0
              , f = 0
              , m = 0;
            if ((n = t.event.fix(s)).type = "mousewheel",
            "detail"in s && (d = -1 * s.detail),
            "wheelDelta"in s && (d = s.wheelDelta),
            "wheelDeltaY"in s && (d = s.wheelDeltaY),
            "wheelDeltaX"in s && (h = -1 * s.wheelDeltaX),
            "axis"in s && s.axis === s.HORIZONTAL_AXIS && (h = -1 * d,
            d = 0),
            l = 0 === d ? h : d,
            "deltaY"in s && (d = -1 * s.deltaY,
            l = d),
            "deltaX"in s && (h = s.deltaX,
            0 === d && (l = -1 * h)),
            0 !== d || 0 !== h) {
                if (1 === s.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    l *= g,
                    d *= g,
                    h *= g
                } else if (2 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    l *= v,
                    d *= v,
                    h *= v
                }
                if (p = Math.max(Math.abs(d), Math.abs(h)),
                (!i || p < i) && (i = p,
                u(s, p) && (i /= 40)),
                u(s, p) && (l /= 40,
                h /= 40,
                d /= 40),
                l = Math[l >= 1 ? "floor" : "ceil"](l / i),
                h = Math[h >= 1 ? "floor" : "ceil"](h / i),
                d = Math[d >= 1 ? "floor" : "ceil"](d / i),
                a.settings.normalizeOffset && this.getBoundingClientRect) {
                    var _ = this.getBoundingClientRect();
                    f = n.clientX - _.left,
                    m = n.clientY - _.top
                }
                return n.deltaX = h,
                n.deltaY = d,
                n.deltaFactor = i,
                n.offsetX = f,
                n.offsetY = m,
                n.deltaMode = 0,
                r.unshift(n, l, h, d),
                e && clearTimeout(e),
                e = setTimeout(c, 200),
                (t.event.dispatch || t.event.handle).apply(this, r)
            }
        }
        function c() {
            i = null
        }
        function u(t, e) {
            return a.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    i(33),
    t.exports = i(108)
}
, function(t, e, i) {
    i(34),
    function(t) {
        "use strict";
        t.GDCore = {
            init: function() {
                t(document).ready(function(e) {
                    t('[data-toggle="tooltip"]').tooltip(),
                    t("[data-bg-img-src]").length && t.GDCore.helpers.bgImage(t("[data-bg-img-src]")),
                    t.GDCore.helpers.extendjQuery(),
                    t.GDCore.helpers.detectIE(),
                    t.GDCore.helpers.bootstrapNavOptions.init()
                }),
                t(window).on("load", function(t) {})
            },
            components: {},
            helpers: {
                Math: {
                    getRandomValueFromRange: function(t, e, i) {
                        var n = i || !1;
                        return Math.random(),
                        n ? Math.random() * (e - t) + t : Math.floor(Math.random() * (e - t + 1)) + t
                    }
                },
                bgImage: function(e) {
                    if (e && e.length)
                        return e.each(function(e, i) {
                            var n = t(i)
                              , s = n.data("bg-img-src");
                            s && n.css("background-image", "url(" + s + ")")
                        })
                },
                extendjQuery: function() {
                    t.fn.extend({
                        afterImagesLoaded: function() {
                            var e = this.find('img[src!=""]');
                            if (!e.length)
                                return t.Deferred().resolve().promise();
                            var i = [];
                            return e.each(function() {
                                var e = t.Deferred();
                                i.push(e);
                                var n = new Image;
                                n.onload = function() {
                                    e.resolve()
                                }
                                ,
                                n.onerror = function() {
                                    e.resolve()
                                }
                                ,
                                n.src = this.src
                            }),
                            t.when.apply(t, i)
                        }
                    })
                },
                detectIE: function() {
                    var t = window.navigator.userAgent;
                    if (t.indexOf("Trident/") > 0) {
                        var e = t.indexOf("rv:")
                          , i = parseInt(t.substring(e + 3, t.indexOf(".", e)), 10);
                        document.querySelector("body").className += " IE IE" + i
                    }
                    var n = t.indexOf("Edge/");
                    if (n > 0) {
                        i = parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
                        document.querySelector("body").className += " Edge Edge" + i
                    }
                    return !1
                },
                bootstrapNavOptions: {
                    init: function() {
                        this.mobileHideOnScroll()
                    },
                    mobileHideOnScroll: function() {
                        var e = t(".navbar");
                        if (e.length) {
                            var i = t(window)
                              , n = {
                                sm: 576,
                                md: 768,
                                lg: 992,
                                xl: 1200
                            };
                            t("body").on("click.GDMobileHideOnScroll", ".navbar-toggler", function(e) {
                                var n = t(this).closest(".navbar");
                                n.length && n.data("mobile-menu-scroll-position", i.scrollTop()),
                                e.preventDefault()
                            }),
                            i.on("scroll.GDMobileHideOnScroll", function(s) {
                                e.each(function(e, s) {
                                    var o, r, a, l, c, u = t(s);
                                    u.hasClass("navbar-expand-xl") ? c = n.xl : u.hasClass("navbar-expand-lg") ? c = n.lg : u.hasClass("navbar-expand-md") ? c = n.md : u.hasClass("navbar-expand-xs") && (c = n.xs),
                                    i.width() > c || (o = u.find(".navbar-toggler"),
                                    (r = u.find(".navbar-collapse")).data("mobile-scroll-hide") && r.length && (a = u.data("mobile-menu-scroll-position"),
                                    Math.abs(i.scrollTop() - a) > 40 && r.hasClass("show") && (o.trigger("click"),
                                    (l = o.find(".is-active")).length && l.removeClass("is-active"))))
                                })
                            })
                        }
                    }
                }
            },
            settings: {
                rtl: !1
            }
        },
        t.GDCore.init()
    }(jQuery)
}
, function(t, e, i) {
    try {
        window.Popper = i(20).default,
        window.jQuery = window.$ = i(0),
        i(38),
        i(105),
        i(31),
        i(106)
    } catch (t) {}
}
, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e, i) {
    i(37)(["jquery"], window, function(t, e) {
        "use strict";
        t.migrateVersion = "3.0.1",
        e.console && e.console.log && (t && !/^[12]\./.test(t.fn.jquery) || e.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        t.migrateWarnings && e.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        e.console.log("JQMIGRATE: Migrate is installed" + (t.migrateMute ? "" : " with logging active") + ", version " + t.migrateVersion));
        var i = {};
        function n(n) {
            var s = e.console;
            i[n] || (i[n] = !0,
            t.migrateWarnings.push(n),
            s && s.warn && !t.migrateMute && (s.warn("JQMIGRATE: " + n),
            t.migrateTrace && s.trace && s.trace()))
        }
        function s(t, e, i, s) {
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n(s),
                    i
                },
                set: function(t) {
                    n(s),
                    i = t
                }
            })
        }
        function o(t, e, i, s) {
            t[e] = function() {
                return n(s),
                i.apply(this, arguments)
            }
        }
        t.migrateWarnings = [],
        void 0 === t.migrateTrace && (t.migrateTrace = !0),
        t.migrateReset = function() {
            i = {},
            t.migrateWarnings.length = 0
        }
        ,
        "BackCompat" === e.document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var r, a = t.fn.init, l = t.isNumeric, c = t.find, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        for (r in t.fn.init = function(t) {
            var e = Array.prototype.slice.call(arguments);
            return "string" == typeof t && "#" === t && (n("jQuery( '#' ) is not a valid selector"),
            e[0] = []),
            a.apply(this, e)
        }
        ,
        t.fn.init.prototype = t.fn,
        t.find = function(t) {
            var i = Array.prototype.slice.call(arguments);
            if ("string" == typeof t && u.test(t))
                try {
                    e.document.querySelector(t)
                } catch (s) {
                    t = t.replace(h, function(t, e, i, n) {
                        return "[" + e + i + '"' + n + '"]'
                    });
                    try {
                        e.document.querySelector(t),
                        n("Attribute selector with '#' must be quoted: " + i[0]),
                        i[0] = t
                    } catch (t) {
                        n("Attribute selector with '#' was not fixed: " + i[0])
                    }
                }
            return c.apply(this, i)
        }
        ,
        c)
            Object.prototype.hasOwnProperty.call(c, r) && (t.find[r] = c[r]);
        t.fn.size = function() {
            return n("jQuery.fn.size() is deprecated and removed; use the .length property"),
            this.length
        }
        ,
        t.parseJSON = function() {
            return n("jQuery.parseJSON is deprecated; use JSON.parse"),
            JSON.parse.apply(null, arguments)
        }
        ,
        t.isNumeric = function(e) {
            var i, s, o = l(e), r = (s = (i = e) && i.toString(),
            !t.isArray(i) && s - parseFloat(s) + 1 >= 0);
            return o !== r && n("jQuery.isNumeric() should not be called on constructed objects"),
            r
        }
        ,
        o(t, "holdReady", t.holdReady, "jQuery.holdReady is deprecated"),
        o(t, "unique", t.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
        s(t.expr, "filters", t.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
        s(t.expr, ":", t.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
        var d = t.ajax;
        t.ajax = function() {
            var t = d.apply(this, arguments);
            return t.promise && (o(t, "success", t.done, "jQXHR.success is deprecated and removed"),
            o(t, "error", t.fail, "jQXHR.error is deprecated and removed"),
            o(t, "complete", t.always, "jQXHR.complete is deprecated and removed")),
            t
        }
        ;
        var p = t.fn.removeAttr
          , f = t.fn.toggleClass
          , m = /\S+/g;
        t.fn.removeAttr = function(e) {
            var i = this;
            return t.each(e.match(m), function(e, s) {
                t.expr.match.bool.test(s) && (n("jQuery.fn.removeAttr no longer sets boolean properties: " + s),
                i.prop(s, !1))
            }),
            p.apply(this, arguments)
        }
        ,
        t.fn.toggleClass = function(e) {
            return void 0 !== e && "boolean" != typeof e ? f.apply(this, arguments) : (n("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function() {
                var i = this.getAttribute && this.getAttribute("class") || "";
                i && t.data(this, "__className__", i),
                this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : t.data(this, "__className__") || "")
            }))
        }
        ;
        var g = !1;
        t.swap && t.each(["height", "width", "reliableMarginRight"], function(e, i) {
            var n = t.cssHooks[i] && t.cssHooks[i].get;
            n && (t.cssHooks[i].get = function() {
                var t;
                return g = !0,
                t = n.apply(this, arguments),
                g = !1,
                t
            }
            )
        }),
        t.swap = function(t, e, i, s) {
            var o, r, a = {};
            for (r in g || n("jQuery.swap() is undocumented and deprecated"),
            e)
                a[r] = t.style[r],
                t.style[r] = e[r];
            for (r in o = i.apply(t, s || []),
            e)
                t.style[r] = a[r];
            return o
        }
        ;
        var v = t.data;
        t.data = function(e, i, s) {
            var o;
            if (i && "object" == typeof i && 2 === arguments.length) {
                o = t.hasData(e) && v.call(this, e);
                var r = {};
                for (var a in i)
                    a !== t.camelCase(a) ? (n("jQuery.data() always sets/gets camelCased names: " + a),
                    o[a] = i[a]) : r[a] = i[a];
                return v.call(this, e, r),
                i
            }
            return i && "string" == typeof i && i !== t.camelCase(i) && (o = t.hasData(e) && v.call(this, e)) && i in o ? (n("jQuery.data() always sets/gets camelCased names: " + i),
            arguments.length > 2 && (o[i] = s),
            o[i]) : v.apply(this, arguments)
        }
        ;
        var _ = t.Tween.prototype.run
          , b = function(t) {
            return t
        };
        t.Tween.prototype.run = function() {
            t.easing[this.easing].length > 1 && (n("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
            t.easing[this.easing] = b),
            _.apply(this, arguments)
        }
        ,
        t.fx.interval = t.fx.interval || 13,
        e.requestAnimationFrame && s(t.fx, "interval", t.fx.interval, "jQuery.fx.interval is deprecated");
        var y = t.fn.load
          , w = t.event.add
          , x = t.event.fix;
        t.event.props = [],
        t.event.fixHooks = {},
        s(t.event.props, "concat", t.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
        t.event.fix = function(e) {
            var i, s = e.type, o = this.fixHooks[s], r = t.event.props;
            if (r.length)
                for (n("jQuery.event.props are deprecated and removed: " + r.join()); r.length; )
                    t.event.addProp(r.pop());
            if (o && !o._migrated_ && (o._migrated_ = !0,
            n("jQuery.event.fixHooks are deprecated and removed: " + s),
            (r = o.props) && r.length))
                for (; r.length; )
                    t.event.addProp(r.pop());
            return i = x.call(this, e),
            o && o.filter ? o.filter(i, e) : i
        }
        ,
        t.event.add = function(t, i) {
            return t === e && "load" === i && "complete" === e.document.readyState && n("jQuery(window).on('load'...) called after load event occurred"),
            w.apply(this, arguments)
        }
        ,
        t.each(["load", "unload", "error"], function(e, i) {
            t.fn[i] = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return "load" === i && "string" == typeof t[0] ? y.apply(this, t) : (n("jQuery.fn." + i + "() is deprecated"),
                t.splice(0, 0, i),
                arguments.length ? this.on.apply(this, t) : (this.triggerHandler.apply(this, t),
                this))
            }
        }),
        t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
            t.fn[i] = function(t, e) {
                return n("jQuery.fn." + i + "() event shorthand is deprecated"),
                arguments.length > 0 ? this.on(i, null, t, e) : this.trigger(i)
            }
        }),
        t(function() {
            t(e.document).triggerHandler("ready")
        }),
        t.event.special.ready = {
            setup: function() {
                this === e.document && n("'ready' event is deprecated")
            }
        },
        t.fn.extend({
            bind: function(t, e, i) {
                return n("jQuery.fn.bind() is deprecated"),
                this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return n("jQuery.fn.unbind() is deprecated"),
                this.off(t, null, e)
            },
            delegate: function(t, e, i, s) {
                return n("jQuery.fn.delegate() is deprecated"),
                this.on(e, t, i, s)
            },
            undelegate: function(t, e, i) {
                return n("jQuery.fn.undelegate() is deprecated"),
                1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            hover: function(t, e) {
                return n("jQuery.fn.hover() is deprecated"),
                this.on("mouseenter", t).on("mouseleave", e || t)
            }
        });
        var C = t.fn.offset;
        t.fn.offset = function() {
            var i, s = this[0], o = {
                top: 0,
                left: 0
            };
            return s && s.nodeType ? (i = (s.ownerDocument || e.document).documentElement,
            t.contains(i, s) ? C.apply(this, arguments) : (n("jQuery.fn.offset() requires an element connected to a document"),
            o)) : (n("jQuery.fn.offset() requires a valid DOM element"),
            o)
        }
        ;
        var T = t.param;
        t.param = function(e, i) {
            var s = t.ajaxSettings && t.ajaxSettings.traditional;
            return void 0 === i && s && (n("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
            i = s),
            T.call(this, e, i)
        }
        ;
        var k = t.fn.andSelf || t.fn.addBack;
        t.fn.andSelf = function() {
            return n("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
            k.apply(this, arguments)
        }
        ;
        var S = t.Deferred
          , D = [["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), "resolved"], ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), "rejected"], ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory")]];
        return t.Deferred = function(e) {
            var i = S()
              , s = i.promise();
            return i.pipe = s.pipe = function() {
                var e = arguments;
                return n("deferred.pipe() is deprecated"),
                t.Deferred(function(n) {
                    t.each(D, function(o, r) {
                        var a = t.isFunction(e[o]) && e[o];
                        i[r[1]](function() {
                            var e = a && a.apply(this, arguments);
                            e && t.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === s ? n.promise() : this, a ? [e] : arguments)
                        })
                    }),
                    e = null
                }).promise()
            }
            ,
            e && e.call(i, i),
            i
        }
        ,
        t.Deferred.exceptionHook = S.exceptionHook,
        t
    })
}
, function(t, e) {
    t.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
, function(t, e, i) {
    i(2),
    i(9),
    i(12),
    i(21),
    i(13),
    i(14),
    i(6),
    i(15),
    i(16),
    i(22),
    i(8),
    i(17),
    i(40),
    i(26),
    i(41),
    i(42),
    i(43),
    i(44),
    i(19),
    i(28),
    i(27),
    i(45),
    i(46),
    i(18),
    i(7),
    i(47),
    i(48),
    i(49),
    i(50),
    i(51),
    i(52),
    i(5),
    i(53),
    i(54),
    i(55),
    i(56),
    i(57),
    i(58),
    i(59),
    i(60),
    i(61),
    i(62),
    i(29),
    i(63),
    i(30),
    i(64),
    i(65),
    i(66),
    i(69),
    i(71),
    i(73),
    i(75),
    i(77),
    i(79),
    i(81),
    i(83),
    i(85),
    i(87),
    i(89),
    i(91),
    i(93),
    i(95),
    i(97),
    i(99),
    i(101),
    i(103)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(17), i(7), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e, i = this.options, n = i.accept;
                this.isover = !1,
                this.isout = !0,
                this.accept = t.isFunction(n) ? n : function(t) {
                    return t.is(n)
                }
                ,
                this.proportions = function() {
                    if (!arguments.length)
                        return e || (e = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        });
                    e = arguments[0]
                }
                ,
                this._addToManager(i.scope),
                i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function(e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
                t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++)
                    t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function(e, i) {
                if ("accept" === e)
                    this.accept = t.isFunction(i) ? i : function(t) {
                        return t.is(i)
                    }
                    ;
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n),
                    this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(),
                i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(),
                i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
                this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
                this._trigger("out", e, this.ui(i)))
            },
            _drop: function(i, n) {
                var s = n || t.ui.ddmanager.current
                  , o = !1;
                return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var n = t(this).droppable("instance");
                    if (n.options.greedy && !n.options.disabled && n.options.scope === s.options.scope && n.accept.call(n.element[0], s.currentItem || s.element) && e(s, t.extend(n, {
                        offset: n.element.offset()
                    }), n.options.tolerance, i))
                        return o = !0,
                        !1
                }),
                !o && !!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(),
                this._removeHoverClass(),
                this._trigger("drop", i, this.ui(s)),
                this.element))
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active")
            }
        });
        var e = t.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && t < e + i
            }
            return function(e, i, n, s) {
                if (!i.offset)
                    return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left
                  , r = (e.positionAbs || e.position.absolute).top + e.margins.top
                  , a = o + e.helperProportions.width
                  , l = r + e.helperProportions.height
                  , c = i.offset.left
                  , u = i.offset.top
                  , h = c + i.proportions().width
                  , d = u + i.proportions().height;
                switch (n) {
                case "fit":
                    return c <= o && a <= h && u <= r && l <= d;
                case "intersect":
                    return c < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < h && u < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                case "pointer":
                    return t(s.pageY, u, i.proportions().height) && t(s.pageX, c, i.proportions().width);
                case "touch":
                    return (r >= u && r <= d || l >= u && l <= d || r < u && l > d) && (o >= c && o <= h || a >= c && a <= h || o < c && a > h);
                default:
                    return !1
                }
            }
        }();
        return t.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [], r = i ? i.type : null, a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; s < a.length; s++)
                            if (a[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            }
                        o[n].visible = "none" !== o[n].element.css("display"),
                        o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i),
                        o[n].offset = o[n].element.offset(),
                        o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(i, n) {
                var s = !1;
                return t.each((t.ui.ddmanager.droppables[i.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && e(i, this, this.options.tolerance, n) && (s = this._drop.call(this, n) || s),
                    !this.options.disabled && this.visible && this.accept.call(this.element[0], i.currentItem || i.element) && (this.isout = !0,
                    this.isover = !1,
                    this._deactivate.call(this, n)))
                }),
                s
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(i, n) {
                i.options.refreshPositions && t.ui.ddmanager.prepareOffsets(i, n),
                t.each(t.ui.ddmanager.droppables[i.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var s, o, r, a = e(i, this, this.options.tolerance, n), l = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        l && (this.options.greedy && (o = this.options.scope,
                        (r = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t(this).droppable("instance").options.scope === o
                        })).length && ((s = t(r[0]).droppable("instance")).greedyChild = "isover" === l)),
                        s && "isover" === l && (s.isover = !1,
                        s.isout = !0,
                        s._out.call(s, n)),
                        this[l] = !0,
                        this["isout" === l ? "isover" : "isout"] = !1,
                        this["isover" === l ? "_over" : "_out"].call(this, n),
                        s && "isout" === l && (s.isout = !1,
                        s.isover = !0,
                        s._over.call(s, n)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"),
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        },
        !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(),
                this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function() {
                this._super(),
                this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function() {
                this._super(),
                this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function() {
                this._super(),
                this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }),
        t.ui.droppable
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(7), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e = this;
                this._addClass("ui-selectable"),
                this.dragged = !1,
                this.refresh = function() {
                    e.elementPos = t(e.element[0]).offset(),
                    e.selectees = t(e.options.filter, e.element[0]),
                    e._addClass(e.selectees, "ui-selectee"),
                    e.selectees.each(function() {
                        var i = t(this)
                          , n = i.offset()
                          , s = {
                            left: n.left - e.elementPos.left,
                            top: n.top - e.elementPos.top
                        };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }
                ,
                this.refresh(),
                this._mouseInit(),
                this.helper = t("<div>"),
                this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"),
                this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this
                  , n = this.options;
                this.opos = [e.pageX, e.pageY],
                this.elementPos = t(this.element[0]).offset(),
                this.options.disabled || (this.selectees = t(n.filter, this.element[0]),
                this._trigger("start", e),
                t(n.appendTo).append(this.helper),
                this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }),
                n.autoRefresh && this.refresh(),
                this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0,
                    e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"),
                    n.selected = !1,
                    i._addClass(n.$element, "ui-unselecting"),
                    n.unselecting = !0,
                    i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }),
                t(e.target).parents().addBack().each(function() {
                    var n, s = t.data(this, "selectable-item");
                    if (s)
                        return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"),
                        i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"),
                        s.unselecting = !n,
                        s.selecting = n,
                        s.selected = n,
                        n ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }),
                        !1
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0,
                !this.options.disabled) {
                    var i, n = this, s = this.options, o = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
                    return o > a && (i = a,
                    a = o,
                    o = i),
                    r > l && (i = l,
                    l = r,
                    r = i),
                    this.helper.css({
                        left: o,
                        top: r,
                        width: a - o,
                        height: l - r
                    }),
                    this.selectees.each(function() {
                        var i = t.data(this, "selectable-item")
                          , c = !1
                          , u = {};
                        i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left,
                        u.right = i.right + n.elementPos.left,
                        u.top = i.top + n.elementPos.top,
                        u.bottom = i.bottom + n.elementPos.top,
                        "touch" === s.tolerance ? c = !(u.left > a || u.right < o || u.top > l || u.bottom < r) : "fit" === s.tolerance && (c = u.left > o && u.right < a && u.top > r && u.bottom < l),
                        c ? (i.selected && (n._removeClass(i.$element, "ui-selected"),
                        i.selected = !1),
                        i.unselecting && (n._removeClass(i.$element, "ui-unselecting"),
                        i.unselecting = !1),
                        i.selecting || (n._addClass(i.$element, "ui-selecting"),
                        i.selecting = !0,
                        n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"),
                        i.selecting = !1,
                        n._addClass(i.$element, "ui-selected"),
                        i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"),
                        i.selecting = !1,
                        i.startselected && (n._addClass(i.$element, "ui-unselecting"),
                        i.unselecting = !0),
                        n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))),
                        i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"),
                        i.selected = !1,
                        n._addClass(i.$element, "ui-unselecting"),
                        i.unselecting = !0,
                        n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }),
                    !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1,
                t(".ui-unselecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"),
                    n.unselecting = !1,
                    n.startselected = !1,
                    i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }),
                t(".ui-selecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"),
                    n.selecting = !1,
                    n.selected = !0,
                    n.startselected = !0,
                    i._trigger("selected", e, {
                        selected: n.element
                    })
                }),
                this._trigger("stop", e),
                this.helper.remove(),
                !1
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(7), i(12), i(23), i(16), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && t < e + i
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                this.containerCache = {},
                this._addClass("ui-sortable"),
                this.refresh(),
                this.offset = this.element.offset(),
                this._mouseInit(),
                this._setHandleClassName(),
                this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e),
                "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
                t.each(this.items, function() {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--)
                    this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var n = null
                  , s = !1
                  , o = this;
                return !(this.reverting || this.options.disabled || "static" === this.options.type || (this._refreshItems(e),
                t(e.target).parents().each(function() {
                    if (t.data(this, o.widgetName + "-item") === o)
                        return n = t(this),
                        !1
                }),
                t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
                !n || this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (s = !0)
                }),
                !s) || (this.currentItem = n,
                this._removeCurrentsFromItems(),
                0)))
            },
            _mouseStart: function(e, i, n) {
                var s, o, r = this.options;
                if (this.currentContainer = this,
                this.refreshPositions(),
                this.helper = this._createHelper(e),
                this._cacheHelperProportions(),
                this._cacheMargins(),
                this.scrollParent = this.helper.scrollParent(),
                this.offset = this.currentItem.offset(),
                this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                },
                t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }),
                this.helper.css("position", "absolute"),
                this.cssPosition = this.helper.css("position"),
                this.originalPosition = this._generatePosition(e),
                this.originalPageX = e.pageX,
                this.originalPageY = e.pageY,
                r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
                this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                },
                this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                this._createPlaceholder(),
                r.containment && this._setContainment(),
                r.cursor && "auto" !== r.cursor && (o = this.document.find("body"),
                this.storedCursor = o.css("cursor"),
                o.css("cursor", r.cursor),
                this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)),
                r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                this.helper.css("opacity", r.opacity)),
                r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
                this.helper.css("zIndex", r.zIndex)),
                this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                this._trigger("start", e, this._uiHash()),
                this._preserveHelperProportions || this._cacheHelperProportions(),
                !n)
                    for (s = this.containers.length - 1; s >= 0; s--)
                        this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this),
                t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                this.dragging = !0,
                this._addClass(this.helper, "ui-sortable-helper"),
                this._mouseDrag(e),
                !0
            },
            _mouseDrag: function(e) {
                var i, n, s, o, r = this.options, a = !1;
                for (this.position = this._generatePosition(e),
                this.positionAbs = this._convertPositionTo("absolute"),
                this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed),
                this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)),
                e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))),
                !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
                this.positionAbs = this._convertPositionTo("absolute"),
                this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i],
                    s = n.item[0],
                    (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up",
                        "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))
                            break;
                        this._rearrange(e, n),
                        this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e),
                t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                this._trigger("sort", e, this._uiHash()),
                this.lastPositionAbs = this.positionAbs,
                !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                    this.options.revert) {
                        var n = this
                          , s = this.placeholder.offset()
                          , o = this.options.axis
                          , r = {};
                        o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                        o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                        this.reverting = !0,
                        t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else
                        this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup",{
                        target: null
                    })),
                    "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                    this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--)
                        this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                        this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                        this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }),
                this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
                this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected)
                  , n = [];
                return e = e || {},
                t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }),
                !n.length && e.key && n.push(e.key + "="),
                n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected)
                  , n = [];
                return e = e || {},
                i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }),
                n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left
                  , i = e + this.helperProportions.width
                  , n = this.positionAbs.top
                  , s = n + this.helperProportions.height
                  , o = t.left
                  , r = o + t.width
                  , a = t.top
                  , l = a + t.height
                  , c = this.offset.click.top
                  , u = this.offset.click.left
                  , h = "x" === this.options.axis || n + c > a && n + c < l
                  , d = "y" === this.options.axis || e + u > o && e + u < r
                  , p = h && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function(t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = n && s;
                return !!o && (e = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection(),
                this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
                  , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
                  , n = this._getDragVerticalDirection()
                  , s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t),
                this._setHandleClassName(),
                this.refreshPositions(),
                this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                var i, n, s, o, r = [], a = [], l = this._connectWith();
                if (l && e)
                    for (i = l.length - 1; i >= 0; i--)
                        for (s = t(l[i], this.document[0]),
                        n = s.length - 1; n >= 0; n--)
                            (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                function c() {
                    r.push(this)
                }
                for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
                i = a.length - 1; i >= 0; i--)
                    a[i][0].each(c);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0])
                            return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [],
                this.containers = [this];
                var i, n, s, o, r, a, l, c, u = this.items, h = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem
                }) : t(this.options.items, this.element), this]], d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i], this.document[0]),
                        n = s.length - 1; n >= 0; n--)
                            (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                                item: this.currentItem
                            }) : t(o.options.items, o.element), o]),
                            this.containers.push(o));
                for (i = h.length - 1; i >= 0; i--)
                    for (r = h[i][1],
                    a = h[i][0],
                    n = 0,
                    c = a.length; n < c; n++)
                        (l = t(a[n])).data(this.widgetName + "-item", r),
                        u.push({
                            item: l,
                            instance: r,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
            },
            refreshPositions: function(e) {
                var i, n, s, o;
                for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
                i = this.items.length - 1; i >= 0; i--)
                    (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item,
                    e || (n.width = s.outerWidth(),
                    n.height = s.outerHeight()),
                    o = s.offset(),
                    n.left = o.left,
                    n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers)
                    this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--)
                        o = this.containers[i].element.offset(),
                        this.containers[i].containerCache.left = o.left,
                        this.containers[i].containerCache.top = o.top,
                        this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                        this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                var i, n = (e = e || this).options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder,
                n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase()
                          , s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"),
                        "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")),
                        i || s.css("visibility", "hidden"),
                        s
                    },
                    update: function(t, s) {
                        i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                        s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }),
                e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)),
                e.currentItem.after(e.placeholder),
                n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function(e, i) {
                var n = this;
                e.children().each(function() {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function(e) {
                var i, n, s, o, r, a, l, c, u, h, d = null, p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0]))
                                continue;
                            d = this.containers[i],
                            p = i
                        } else
                            this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)),
                            this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length)
                        this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)),
                        this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4,
                        o = null,
                        u = d.floating || this._isFloating(this.currentItem),
                        r = u ? "left" : "top",
                        a = u ? "width" : "height",
                        h = u ? "pageX" : "pageY",
                        n = this.items.length - 1; n >= 0; n--)
                            t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r],
                            c = !1,
                            e[h] - l > this.items[n][a] / 2 && (c = !0),
                            Math.abs(e[h] - l) < s && (s = Math.abs(e[h] - l),
                            o = this.items[n],
                            this.direction = c ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty)
                            return;
                        if (this.currentContainer === this.containers[p])
                            return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()),
                            this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                        this._trigger("change", e, this._uiHash()),
                        this.containers[p]._trigger("change", e, this._uiHash(this)),
                        this.currentContainer = this.containers[p],
                        this.options.placeholder.update(this.currentContainer, this.placeholder),
                        this.containers[p]._trigger("over", e, this._uiHash(this)),
                        this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options
                  , n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
                n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }),
                n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()),
                n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()),
                n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")),
                t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }),
                "left"in e && (this.offset.click.left = e.left + this.margins.left),
                "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                "top"in e && (this.offset.click.top = e.top + this.margins.top),
                "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
                e.top += this.scrollParent.scrollTop()),
                (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }),
                {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode),
                "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
                /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0],
                i = t(s.containment).offset(),
                n = "hidden" !== t(e).css("overflow"),
                this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1
                  , s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                  , o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, s = this.options, o = e.pageX, r = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
                this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)),
                s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1],
                r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i,
                n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0],
                o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)),
                {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
                this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                this.reverting = !1;
                var i, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
                this._noFinalSort = null,
                this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)
                        "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS),
                    this._removeClass(this.currentItem, "ui-sortable-helper")
                } else
                    this.currentItem.show();
                function s(t, e, i) {
                    return function(n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }),
                !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }),
                this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }),
                n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }
                .call(this, this.currentContainer)),
                n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }
                .call(this, this.currentContainer)))),
                i = this.containers.length - 1; i >= 0; i--)
                    e || n.push(s("deactivate", this, this.containers[i])),
                    this.containers[i].containerCache.over && (n.push(s("out", this, this.containers[i])),
                    this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
                this.storedStylesheet.remove()),
                this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                this.dragging = !1,
                e || this._trigger("beforeStop", t, this._uiHash()),
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                this.helper = null),
                !e) {
                    for (i = 0; i < n.length; i++)
                        n[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !this.cancelHelperRemoval
            },
            _trigger: function() {
                !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(6), i(8), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var e = this.options;
                this.prevShow = this.prevHide = t(),
                this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
                this.element.attr("role", "tablist"),
                e.collapsible || !1 !== e.active && null != e.active || (e.active = 0),
                this._processPanels(),
                e.active < 0 && (e.active += this.headers.length),
                this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"),
                this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header),
                e.prependTo(this.headers),
                i = this.active.children(".ui-accordion-header-icon"),
                this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"),
                this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"),
                this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
                this._destroyIcons(),
                t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
                "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
                this._setupEvents(e)),
                this._super(t, e),
                "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
                "icons" === t && (this._destroyIcons(),
                e && this._createIcons())) : this._activate(e)
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this.element.attr("aria-disabled", t),
                this._toggleClass(null, "ui-state-disabled", !!t),
                this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode
                      , n = this.headers.length
                      , s = this.headers.index(e.target)
                      , o = !1;
                    switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1),
                    t(o).attr("tabIndex", 0),
                    t(o).trigger("focus"),
                    e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(),
                !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1,
                this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1,
                this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
                this._destroyIcons(),
                this._refresh()
            },
            _processPanels: function() {
                var t = this.headers
                  , e = this.panels;
                this.headers = this.element.find(this.options.header),
                this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
                this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
                this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
                e && (this._off(t.not(this.headers)),
                this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options, n = i.heightStyle, s = this.element.parent();
                this.active = this._findActive(i.active),
                this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
                this._addClass(this.active.next(), "ui-accordion-content-active"),
                this.active.next().show(),
                this.headers.attr("role", "tab").each(function() {
                    var e = t(this)
                      , i = e.uniqueId().attr("id")
                      , n = e.next()
                      , s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s),
                    n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"),
                this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(),
                this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0),
                this._createIcons(),
                this._setupEvents(i.event),
                "fill" === n ? (e = s.height(),
                this.element.siblings(":visible").each(function() {
                    var i = t(this)
                      , n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }),
                this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }),
                this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0,
                this.headers.next().each(function() {
                    var i = t(this).is(":visible");
                    i || t(this).show(),
                    e = Math.max(e, t(this).css("height", "").height()),
                    i || t(this).hide()
                }).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0],
                this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }),
                this._off(this.headers.add(this.headers.next())),
                this._on(this.headers, i),
                this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }),
                this._hoverable(this.headers),
                this._focusable(this.headers)
            },
            _eventHandler: function(e) {
                var i, n, s = this.options, o = this.active, r = t(e.currentTarget), a = r[0] === o[0], l = a && s.collapsible, c = l ? t() : r.next(), u = o.next(), h = {
                    oldHeader: o,
                    oldPanel: u,
                    newHeader: l ? t() : r,
                    newPanel: c
                };
                e.preventDefault(),
                a && !s.collapsible || !1 === this._trigger("beforeActivate", e, h) || (s.active = !l && this.headers.index(r),
                this.active = a ? t() : r,
                this._toggle(h),
                this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
                s.icons && (i = o.children(".ui-accordion-header-icon"),
                this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)),
                a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"),
                s.icons && (n = r.children(".ui-accordion-header-icon"),
                this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)),
                this._addClass(r.next(), "ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel
                  , n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0),
                this.prevShow = i,
                this.prevHide = n,
                this.options.animate ? this._animate(i, n, e) : (n.hide(),
                i.show(),
                this._toggleComplete(e)),
                n.attr({
                    "aria-hidden": "true"
                }),
                n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }),
                i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function() {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1),
                i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var n, s, o, r = this, a = 0, l = t.css("box-sizing"), c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, h = c && u.down || u, d = function() {
                    r._toggleComplete(i)
                };
                return "number" == typeof h && (o = h),
                "string" == typeof h && (s = h),
                s = s || h.easing || u.easing,
                o = o || h.duration || u.duration,
                e.length ? t.length ? (n = t.show().outerHeight(),
                e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }),
                void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function(t, i) {
                        i.now = Math.round(t),
                        "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a),
                        a = 0)
                    }
                })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel
                  , i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"),
                this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
                e.length && (e.parent()[0].className = e.parent()[0].className),
                this._trigger("activate", null, t)
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(18), i(6), i(9), i(10), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, r = "input" === s;
                this.isMultiLine = o || !r && this._isContentEditable(this.element),
                this.valueMethod = this.element[o || r ? "val" : "text"],
                this.isNewMenu = !0,
                this._addClass("ui-autocomplete-input"),
                this.element.attr("autocomplete", "off"),
                this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly"))
                            return e = !0,
                            n = !0,
                            void (i = !0);
                        e = !1,
                        n = !1,
                        i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0,
                            this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0,
                            this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0,
                            this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0,
                            this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0,
                            s.preventDefault(),
                            this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(s),
                            s.preventDefault());
                            break;
                        default:
                            i = !0,
                            this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (e)
                            return e = !1,
                            void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(t) {
                        if (n)
                            return n = !1,
                            void t.preventDefault();
                        this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null,
                        this.previous = this._value()
                    },
                    blur: function(t) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                        this.close(t),
                        this._change(t))
                    }
                }),
                this._initSource(),
                this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"),
                this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
                this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(),
                        this.cancelBlur = !0,
                        this._delay(function() {
                            delete this.cancelBlur,
                            this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(e, i) {
                        var n, s;
                        if (this.isNewMenu && (this.isNewMenu = !1,
                        e.originalEvent && /^mouse/.test(e.originalEvent.type)))
                            return this.menu.blur(),
                            void this.document.one("mousemove", function() {
                                t(e.target).trigger(e.originalEvent)
                            });
                        s = i.item.data("ui-autocomplete-item"),
                        !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value),
                        (n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(),
                        t("<div>").text(n).appendTo(this.liveRegion))
                    },
                    menuselect: function(e, i) {
                        var n = i.item.data("ui-autocomplete-item")
                          , s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                        this.previous = s,
                        this._delay(function() {
                            this.previous = s,
                            this.selectedItem = n
                        })),
                        !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value),
                        this.term = this._value(),
                        this.close(e),
                        this.selectedItem = n
                    }
                }),
                this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body),
                this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching),
                this.element.removeAttr("autocomplete"),
                this.menu.element.remove(),
                this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e),
                "source" === t && this._initSource(),
                "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
                "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                e && e[0] || (e = this.element.closest(".ui-front, dialog")),
                e.length || (e = this.document[0].body),
                e
            },
            _initSource: function() {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source,
                this.source = function(i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }
                ) : "string" == typeof this.options.source ? (i = this.options.source,
                this.source = function(e, s) {
                    n.xhr && n.xhr.abort(),
                    n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            s(t)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }
                ) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching),
                this.searching = this._delay(function() {
                    var e = this.term === this._value()
                      , i = this.menu.element.is(":visible")
                      , n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    e && (!e || i || n) || (this.selectedItem = null,
                    this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(),
                this.term = this._value(),
                t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++,
                this._addClass("ui-autocomplete-loading"),
                this.cancelSearch = !1,
                this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return t.proxy(function(t) {
                    e === this.requestIndex && this.__response(t),
                    this.pending--,
                    this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)),
                this._trigger("response", null, {
                    content: t
                }),
                !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
                this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0,
                this._close(t)
            },
            _close: function(t) {
                this._off(this.document, "mousedown"),
                this.menu.element.is(":visible") && (this.menu.element.hide(),
                this.menu.blur(),
                this.isNewMenu = !0,
                this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e),
                this.isNewMenu = !0,
                this.menu.refresh(),
                i.show(),
                this._resizeMenu(),
                i.position(t.extend({
                    of: this.element
                }, this.options.position)),
                this.options.autoFocus && this.menu.next(),
                this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var n = this;
                t.each(i, function(t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function(t, e) {
                if (this.menu.element.is(":visible"))
                    return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
                    void this.menu.blur()) : void this.menu[t](e);
                this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
                e.preventDefault())
            },
            _isContentEditable: function(t) {
                if (!t.length)
                    return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }),
        t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i),"i");
                return t.grep(e, function(t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }),
        t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var i;
                this._superApply(arguments),
                this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
                this.liveRegion.children().hide(),
                t("<div>").text(i).appendTo(this.liveRegion))
            }
        }),
        t.ui.autocomplete
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(6)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e;
        function i() {
            this._curInst = null,
            this._keyEvent = !1,
            this._disabledInputs = [],
            this._datepickerShowing = !1,
            this._inDialog = !1,
            this._mainDivId = "ui-datepicker-div",
            this._inlineClass = "ui-datepicker-inline",
            this._appendClass = "ui-datepicker-append",
            this._triggerClass = "ui-datepicker-trigger",
            this._dialogClass = "ui-datepicker-dialog",
            this._disableClass = "ui-datepicker-disabled",
            this._unselectableClass = "ui-datepicker-unselectable",
            this._currentClass = "ui-datepicker-current-day",
            this._dayOverClass = "ui-datepicker-days-cell-over",
            this.regional = [],
            this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            },
            this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            },
            t.extend(this._defaults, this.regional[""]),
            this.regional.en = t.extend(!0, {}, this.regional[""]),
            this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
            this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }
        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function() {
                t(this).removeClass("ui-state-hover"),
                -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, s)
        }
        function s() {
            t.datepicker._isDisabledDatepicker(e.inline ? e.dpDiv.parent()[0] : e.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            t(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }
        function o(e, i) {
            for (var n in t.extend(e, i),
            i)
                null == i[n] && (e[n] = i[n]);
            return e
        }
        return t.extend(t.ui, {
            datepicker: {
                version: "1.12.1"
            }
        }),
        t.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return o(this._defaults, t || {}),
                this
            },
            _attachDatepicker: function(e, i) {
                var n, s, o;
                s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n,
                e.id || (this.uuid += 1,
                e.id = "dp" + this.uuid),
                (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}),
                "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, i) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var n = t(e);
                i.append = t([]),
                i.trigger = t([]),
                n.hasClass(this.markerClassName) || (this._attachments(n, i),
                n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
                this._autoSize(i),
                t.data(e, "datepicker", i),
                i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var n, s, o, r = this._get(i, "appendText"), a = this._get(i, "isRTL");
                i.append && i.append.remove(),
                r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"),
                e[a ? "before" : "after"](i.append)),
                e.off("focus", this._showDatepicker),
                i.trigger && i.trigger.remove(),
                "focus" !== (n = this._get(i, "showOn")) && "both" !== n || e.on("focus", this._showDatepicker),
                "button" !== n && "both" !== n || (s = this._get(i, "buttonText"),
                o = this._get(i, "buttonImage"),
                i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)),
                e[a ? "before" : "after"](i.trigger),
                i.trigger.on("click", function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                    t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                    !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009,11,20), r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function(t) {
                        for (i = 0,
                        n = 0,
                        s = 0; s < t.length; s++)
                            t[s].length > i && (i = t[s].length,
                            n = s);
                        return n
                    }
                    ,
                    o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                    o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                    t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv),
                t.data(e, "datepicker", i),
                this._setDate(i, this._getDefaultDate(i), !0),
                this._updateDatepicker(i),
                this._updateAlternate(i),
                i.settings.disabled && this._disableDatepicker(e),
                i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, n, s, r) {
                var a, l, c, u, h, d = this._dialogInst;
                return d || (this.uuid += 1,
                a = "dp" + this.uuid,
                this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                this._dialogInput.on("keydown", this._doKeyDown),
                t("body").append(this._dialogInput),
                (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
                t.data(this._dialogInput[0], "datepicker", d)),
                o(d.settings, s || {}),
                i = i && i.constructor === Date ? this._formatDate(d, i) : i,
                this._dialogInput.val(i),
                this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null,
                this._pos || (l = document.documentElement.clientWidth,
                c = document.documentElement.clientHeight,
                u = document.documentElement.scrollLeft || document.body.scrollLeft,
                h = document.documentElement.scrollTop || document.body.scrollTop,
                this._pos = [l / 2 - 100 + u, c / 2 - 150 + h]),
                this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                d.settings.onSelect = n,
                this._inDialog = !0,
                this.dpDiv.addClass(this._dialogClass),
                this._showDatepicker(this._dialogInput[0]),
                t.blockUI && t.blockUI(this.dpDiv),
                t.data(this._dialogInput[0], "datepicker", d),
                this
            },
            _destroyDatepicker: function(i) {
                var n, s = t(i), o = t.data(i, "datepicker");
                s.hasClass(this.markerClassName) && (n = i.nodeName.toLowerCase(),
                t.removeData(i, "datepicker"),
                "input" === n ? (o.append.remove(),
                o.trigger.remove(),
                s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== n && "span" !== n || s.removeClass(this.markerClassName).empty(),
                e === o && (e = null))
            },
            _enableDatepicker: function(e) {
                var i, n, s = t(e), o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1,
                o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
                n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, n, s = t(e), o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0,
                o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
                n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }),
                this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t)
                    return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t)
                        return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, n) {
                var s, r, a, l, c = this._getInst(e);
                if (2 === arguments.length && "string" == typeof i)
                    return "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null;
                s = i || {},
                "string" == typeof i && ((s = {})[i] = n),
                c && (this._curInst === c && this._hideDatepicker(),
                r = this._getDateDatepicker(e, !0),
                a = this._getMinMaxDate(c, "min"),
                l = this._getMinMaxDate(c, "max"),
                o(c.settings, s),
                null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (c.settings.minDate = this._formatDate(c, a)),
                null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (c.settings.maxDate = this._formatDate(c, l)),
                "disabled"in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
                this._attachments(t(e), c),
                this._autoSize(c),
                this._setDate(c, r),
                this._updateAlternate(c),
                this._updateDatepicker(c))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e),
                this._updateDatepicker(i),
                this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e),
                i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, n, s, o = t.datepicker._getInst(e.target), r = !0, a = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0,
                t.datepicker._datepickerShowing)
                    switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(),
                        r = !1;
                        break;
                    case 13:
                        return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]),
                        (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o),
                        i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(),
                        !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                        r = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                        r = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                        r = e.ctrlKey || e.metaKey,
                        e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                        r = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                        r = e.ctrlKey || e.metaKey,
                        e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                        r = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        r = !1
                    }
                else
                    36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
                r && (e.preventDefault(),
                e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, n, s = t.datepicker._getInst(e.target);
                if (t.datepicker._get(s, "constrainInput"))
                    return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")),
                    n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
                    e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
            },
            _doKeyUp: function(e) {
                var i = t.datepicker._getInst(e.target);
                if (i.input.val() !== i.lastVal)
                    try {
                        t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i),
                        t.datepicker._updateAlternate(i),
                        t.datepicker._updateDatepicker(i))
                    } catch (t) {}
                return !0
            },
            _showDatepicker: function(e) {
                var i, n, s, r, a, l, c;
                "input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
                t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e || (i = t.datepicker._getInst(e),
                t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0),
                i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                !1 !== (s = (n = t.datepicker._get(i, "beforeShow")) ? n.apply(e, [e, i]) : {}) && (o(i.settings, s),
                i.lastVal = null,
                t.datepicker._lastInput = e,
                t.datepicker._setDateFromField(i),
                t.datepicker._inDialog && (e.value = ""),
                t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
                t.datepicker._pos[1] += e.offsetHeight),
                r = !1,
                t(e).parents().each(function() {
                    return !(r |= "fixed" === t(this).css("position"))
                }),
                a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                },
                t.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                t.datepicker._updateDatepicker(i),
                a = t.datepicker._checkOffset(i, a, r),
                i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }),
                i.inline || (l = t.datepicker._get(i, "showAnim"),
                c = t.datepicker._get(i, "duration"),
                i.dpDiv.css("z-index", function(t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                        !isNaN(i) && 0 !== i))
                            return i;
                        t = t.parent()
                    }
                    return 0
                }(t(e)) + 1),
                t.datepicker._datepickerShowing = !0,
                t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), c) : i.dpDiv[l || "show"](l ? c : null),
                t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                t.datepicker._curInst = i)))
            },
            _updateDatepicker: function(i) {
                this.maxRows = 4,
                e = i,
                i.dpDiv.empty().append(this._generateHTML(i)),
                this._attachHandlers(i);
                var n, o = this._getNumberOfMonths(i), r = o[1], a = i.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && s.apply(a.get(0)),
                i.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                r > 1 && i.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", 17 * r + "em"),
                i.dpDiv[(1 !== o[0] || 1 !== o[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                i === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                i.yearshtml && (n = i.yearshtml,
                setTimeout(function() {
                    n === i.yearshtml && i.yearshtml && i.dpDiv.find("select.ui-datepicker-year:first").replaceWith(i.yearshtml),
                    n = i.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, n) {
                var s = e.dpDiv.outerWidth()
                  , o = e.dpDiv.outerHeight()
                  , r = e.input ? e.input.outerWidth() : 0
                  , a = e.input ? e.input.outerHeight() : 0
                  , l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft())
                  , c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - r : 0,
                i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
                i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0,
                i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0),
                i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + a) : 0),
                i
            },
            _findPos: function(e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                    e = e[s ? "previousSibling" : "nextSibling"];
                return [(i = t(e).offset()).left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, n, s, o, r = this._curInst;
                !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"),
                n = this._get(r, "duration"),
                s = function() {
                    t.datepicker._tidyDialog(r)
                }
                ,
                t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s),
                i || s(),
                this._datepickerShowing = !1,
                (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]),
                this._lastInput = null,
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                t.blockUI && (t.unblockUI(),
                t("body").append(this.dpDiv))),
                this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target)
                      , n = t.datepicker._getInst(i[0]);
                    (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, n) {
                var s = t(e)
                  , o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n),
                this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, n = t(e), s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay,
                s.drawMonth = s.selectedMonth = s.currentMonth,
                s.drawYear = s.selectedYear = s.currentYear) : (i = new Date,
                s.selectedDay = i.getDate(),
                s.drawMonth = s.selectedMonth = i.getMonth(),
                s.drawYear = s.selectedYear = i.getFullYear()),
                this._notifyChange(s),
                this._adjustDate(n)
            },
            _selectMonthYear: function(e, i, n) {
                var s = t(e)
                  , o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
                this._notifyChange(o),
                this._adjustDate(s)
            },
            _selectDay: function(e, i, n, s) {
                var o, r = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((o = this._getInst(r[0])).selectedDay = o.currentDay = t("a", s).html(),
                o.selectedMonth = o.currentMonth = i,
                o.selectedYear = o.currentYear = n,
                this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var n, s = t(e), o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o),
                o.input && o.input.val(i),
                this._updateAlternate(o),
                (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
                o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(),
                this._lastInput = o.input[0],
                "object" != typeof o.input[0] && o.input.trigger("focus"),
                this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                n = this._getDate(e),
                s = this.formatDate(i, n, this._getFormatConfig(e)),
                t(o).val(s))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                e = i.getTime(),
                i.setMonth(0),
                i.setDate(1),
                Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, n) {
                if (null == e || null == i)
                    throw "Invalid arguments";
                if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
                    return null;
                var s, o, r, a, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, d = (n ? n.dayNames : null) || this._defaults.dayNames, p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, _ = -1, b = !1, y = function(t) {
                    var i = s + 1 < e.length && e.charAt(s + 1) === t;
                    return i && s++,
                    i
                }, w = function(t) {
                    var e = y(t)
                      , n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                      , s = new RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}")
                      , o = i.substring(l).match(s);
                    if (!o)
                        throw "Missing number at position " + l;
                    return l += o[0].length,
                    parseInt(o[0], 10)
                }, x = function(e, n, s) {
                    var o = -1
                      , r = t.map(y(e) ? s : n, function(t, e) {
                        return [[e, t]]
                    }).sort(function(t, e) {
                        return -(t[1].length - e[1].length)
                    });
                    if (t.each(r, function(t, e) {
                        var n = e[1];
                        if (i.substr(l, n.length).toLowerCase() === n.toLowerCase())
                            return o = e[0],
                            l += n.length,
                            !1
                    }),
                    -1 !== o)
                        return o + 1;
                    throw "Unknown name at position " + l
                }, C = function() {
                    if (i.charAt(l) !== e.charAt(s))
                        throw "Unexpected literal at position " + l;
                    l++
                };
                for (s = 0; s < e.length; s++)
                    if (b)
                        "'" !== e.charAt(s) || y("'") ? C() : b = !1;
                    else
                        switch (e.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", h, d);
                            break;
                        case "o":
                            _ = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = x("M", p, f);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            m = (a = new Date(w("@"))).getFullYear(),
                            g = a.getMonth() + 1,
                            v = a.getDate();
                            break;
                        case "!":
                            m = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                            g = a.getMonth() + 1,
                            v = a.getDate();
                            break;
                        case "'":
                            y("'") ? C() : b = !0;
                            break;
                        default:
                            C()
                        }
                if (l < i.length && (r = i.substr(l),
                !/^\s+/.test(r)))
                    throw "Extra/unparsed characters found in date: " + r;
                if (-1 === m ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= u ? 0 : -100)),
                _ > -1)
                    for (g = 1,
                    v = _; !(v <= (o = this._getDaysInMonth(m, g - 1))); )
                        g++,
                        v -= o;
                if ((a = this._daylightSavingAdjust(new Date(m,g - 1,v))).getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v)
                    throw "Invalid date";
                return a
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e)
                    return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function(e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++,
                    i
                }, c = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; n.length < i; )
                            n = "0" + n;
                    return n
                }, u = function(t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                }, h = "", d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d)
                            "'" !== t.charAt(n) || l("'") ? h += t.charAt(n) : d = !1;
                        else
                            switch (t.charAt(n)) {
                            case "d":
                                h += c("d", e.getDate(), 2);
                                break;
                            case "D":
                                h += u("D", e.getDay(), s, o);
                                break;
                            case "o":
                                h += c("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                h += c("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                h += u("M", e.getMonth(), r, a);
                                break;
                            case "y":
                                h += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                                break;
                            case "@":
                                h += e.getTime();
                                break;
                            case "!":
                                h += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? h += "'" : d = !0;
                                break;
                            default:
                                h += t.charAt(n)
                            }
                return h
            },
            _possibleChars: function(t) {
                var e, i = "", n = !1, s = function(i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++,
                    n
                };
                for (e = 0; e < t.length; e++)
                    if (n)
                        "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else
                        switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                        }
                return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat")
                      , n = t.lastVal = t.input ? t.input.val() : null
                      , s = this._getDefaultDate(t)
                      , o = s
                      , r = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, r) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(),
                    t.drawMonth = t.selectedMonth = o.getMonth(),
                    t.drawYear = t.selectedYear = o.getFullYear(),
                    t.currentDay = n ? o.getDate() : 0,
                    t.currentMonth = n ? o.getMonth() : 0,
                    t.currentYear = n ? o.getFullYear() : 0,
                    this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, n) {
                var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (t) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l; ) {
                        switch (l[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10),
                            r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(l[1], 10),
                            r = Math.min(r, t.datepicker._getDaysInMonth(s, o))
                        }
                        l = a.exec(i)
                    }
                    return new Date(s,o,r)
                }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t),
                    e
                }(i) : new Date(i.getTime());
                return (s = s && "Invalid Date" === s.toString() ? n : s) && (s.setHours(0),
                s.setMinutes(0),
                s.setSeconds(0),
                s.setMilliseconds(0)),
                this._daylightSavingAdjust(s)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
                t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e
                  , s = t.selectedMonth
                  , o = t.selectedYear
                  , r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(),
                t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(),
                t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(),
                s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
                this._adjustInstDate(t),
                t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths")
                  , n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                            !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(n, this, "M"),
                            !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(n, this, "Y"),
                            !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, r, a, l, c, u, h, d, p, f, m, g, v, _, b, y, w, x, C, T, k, S, D, E, I, A, O, N, P, M, H, L, R, W, j, z = new Date, F = this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth(),z.getDate())), B = this._get(t, "isRTL"), q = this._get(t, "showButtonPanel"), U = this._get(t, "hideIfNoPrevNext"), V = this._get(t, "navigationAsDateFormat"), Y = this._getNumberOfMonths(t), K = this._get(t, "showCurrentAtPos"), Q = this._get(t, "stepMonths"), G = 1 !== Y[0] || 1 !== Y[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), $ = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - K, tt = t.drawYear;
                if (Z < 0 && (Z += 12,
                tt--),
                J)
                    for (e = this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth() - Y[0] * Y[1] + 1,J.getDate())),
                    e = $ && e < $ ? $ : e; this._daylightSavingAdjust(new Date(tt,Z,1)) > e; )
                        --Z < 0 && (Z = 11,
                        tt--);
                for (t.drawMonth = Z,
                t.drawYear = tt,
                i = this._get(t, "prevText"),
                i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt,Z - Q,1)), this._getFormatConfig(t)) : i,
                n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : U ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>",
                s = this._get(t, "nextText"),
                s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt,Z + Q,1)), this._getFormatConfig(t)) : s,
                o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : U ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>",
                r = this._get(t, "currentText"),
                a = this._get(t, "gotoCurrent") && t.currentDay ? X : F,
                r = V ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
                l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "",
                u = parseInt(this._get(t, "firstDay"), 10),
                u = isNaN(u) ? 0 : u,
                h = this._get(t, "showWeek"),
                d = this._get(t, "dayNames"),
                p = this._get(t, "dayNamesMin"),
                f = this._get(t, "monthNames"),
                m = this._get(t, "monthNamesShort"),
                g = this._get(t, "beforeShowDay"),
                v = this._get(t, "showOtherMonths"),
                _ = this._get(t, "selectOtherMonths"),
                b = this._getDefaultDate(t),
                y = "",
                x = 0; x < Y[0]; x++) {
                    for (C = "",
                    this.maxRows = 4,
                    T = 0; T < Y[1]; T++) {
                        if (k = this._daylightSavingAdjust(new Date(tt,Z,t.selectedDay)),
                        S = " ui-corner-all",
                        D = "",
                        G) {
                            if (D += "<div class='ui-datepicker-group",
                            Y[1] > 1)
                                switch (T) {
                                case 0:
                                    D += " ui-datepicker-group-first",
                                    S = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case Y[1] - 1:
                                    D += " ui-datepicker-group-last",
                                    S = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle",
                                    S = ""
                                }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? B ? o : n : "") + (/all|right/.test(S) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, $, J, x > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                        E = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                        w = 0; w < 7; w++)
                            E += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I = (w + u) % 7] + "'>" + p[I] + "</span></th>";
                        for (D += E + "</tr></thead><tbody>",
                        A = this._getDaysInMonth(tt, Z),
                        tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)),
                        O = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                        N = Math.ceil((O + A) / 7),
                        P = G && this.maxRows > N ? this.maxRows : N,
                        this.maxRows = P,
                        M = this._daylightSavingAdjust(new Date(tt,Z,1 - O)),
                        H = 0; H < P; H++) {
                            for (D += "<tr>",
                            L = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(M) + "</td>" : "",
                            w = 0; w < 7; w++)
                                R = g ? g.apply(t.input ? t.input[0] : null, [M]) : [!0, ""],
                                j = (W = M.getMonth() !== Z) && !_ || !R[0] || $ && M < $ || J && M > J,
                                L += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (M.getTime() === k.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === M.getTime() && b.getTime() === k.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + R[1] + (M.getTime() === X.getTime() ? " " + this._currentClass : "") + (M.getTime() === F.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !R[2] ? "" : " title='" + R[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + M.getMonth() + "' data-year='" + M.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + M.getDate() + "</span>" : "<a class='ui-state-default" + (M.getTime() === F.getTime() ? " ui-state-highlight" : "") + (M.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + M.getDate() + "</a>") + "</td>",
                                M.setDate(M.getDate() + 1),
                                M = this._daylightSavingAdjust(M);
                            D += L + "</tr>"
                        }
                        ++Z > 11 && (Z = 0,
                        tt++),
                        C += D += "</tbody></table>" + (G ? "</div>" + (Y[0] > 0 && T === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                    }
                    y += C
                }
                return y += c,
                t._keyEvent = !1,
                y
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
                var l, c, u, h, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
                if (o || !g)
                    y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i,
                    c = s && s.getFullYear() === i,
                    y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                    u = 0; u < 12; u++)
                        (!l || u >= n.getMonth()) && (!c || u <= s.getMonth()) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")),
                !t.yearshtml)
                    if (t.yearshtml = "",
                    o || !v)
                        b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (h = this._get(t, "yearRange").split(":"),
                        d = (new Date).getFullYear(),
                        f = (p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }
                        )(h[0]),
                        m = Math.max(f, p(h[1] || "")),
                        f = n ? Math.max(f, n.getFullYear()) : f,
                        m = s ? Math.min(m, s.getFullYear()) : m,
                        t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++)
                            t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>",
                        b += t.yearshtml,
                        t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"),
                _ && (b += (!o && g && v ? "" : "&#xa0;") + y),
                b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0)
                  , s = t.selectedMonth + ("M" === i ? e : 0)
                  , o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0)
                  , r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n,s,o)));
                t.selectedDay = r.getDate(),
                t.drawMonth = t.selectedMonth = r.getMonth(),
                t.drawYear = t.selectedYear = r.getFullYear(),
                "M" !== i && "Y" !== i || this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min")
                  , n = this._getMinMaxDate(t, "max")
                  , s = i && e < i ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t,e,1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t)
                  , o = this._daylightSavingAdjust(new Date(i,n + (e < 0 ? e : s[0] * s[1]),1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
                this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null, l = this._get(t, "yearRange");
                return l && (i = l.split(":"),
                n = (new Date).getFullYear(),
                r = parseInt(i[0], 10),
                a = parseInt(i[1], 10),
                i[0].match(/[+\-].*/) && (r += n),
                i[1].match(/[+\-].*/) && (a += n)),
                (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay,
                t.currentMonth = t.selectedMonth,
                t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }),
        t.fn.datepicker = function(e) {
            if (!this.length)
                return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick),
            t.datepicker.initialized = !0),
            0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }
        ,
        t.datepicker = new i,
        t.datepicker.initialized = !1,
        t.datepicker.uuid = (new Date).getTime(),
        t.datepicker.version = "1.12.1",
        t.datepicker
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(19), i(17), i(7), i(26), i(13), i(6), i(9), i(10), i(25), i(22), i(8), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                },
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                },
                this.originalTitle = this.element.attr("title"),
                null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
                this.options.disabled && (this.options.disabled = !1),
                this._createWrapper(),
                this.element.show().removeAttr("title").appendTo(this.uiDialog),
                this._addClass("ui-dialog-content", "ui-widget-content"),
                this._createTitlebar(),
                this._createButtonPane(),
                this.options.draggable && t.fn.draggable && this._makeDraggable(),
                this.options.resizable && t.fn.resizable && this._makeResizable(),
                this._isOpen = !1,
                this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(),
                this._destroyOverlay(),
                this.element.removeUniqueId().css(this.originalCss).detach(),
                this.uiDialog.remove(),
                this.originalTitle && this.element.attr("title", this.originalTitle),
                (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i = this;
                this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1,
                this._focusedElement = null,
                this._destroyOverlay(),
                this._untrackInstance(),
                this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
                this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", e)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var n = !1
                  , s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +t(this).css("z-index")
                }).get()
                  , o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1),
                n = !0),
                n && !i && this._trigger("focus", e),
                n
            },
            open: function() {
                var e = this;
                this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0,
                this.opener = t(t.ui.safeActiveElement(this.document[0])),
                this._size(),
                this._position(),
                this._createOverlay(),
                this._moveToTop(null, !0),
                this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(),
                    e._trigger("focus")
                }),
                this._makeFocusTarget(),
                this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")),
                t.length || (t = this.element.find(":tabbable")),
                t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                t.length || (t = this.uiDialog),
                t.eq(0).trigger("focus")
            },
            _keepFocus: function(e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                }
                e.preventDefault(),
                i.call(this),
                this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()),
                this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
                this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                            return e.preventDefault(),
                            void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable")
                              , n = i.filter(":first")
                              , s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                s.trigger("focus")
                            }),
                            e.preventDefault()) : (this._delay(function() {
                                n.trigger("focus")
                            }),
                            e.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }),
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var e;
                this.uiDialogTitlebar = t("<div>"),
                this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }),
                this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar),
                this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
                this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(),
                        this.close(t)
                    }
                }),
                e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
                this._addClass(e, "ui-dialog-title"),
                this._title(e),
                this.uiDialogTitlebar.prependTo(this.uiDialog),
                this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>"),
                this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
                this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane),
                this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
                this._createButtons()
            },
            _createButtons: function() {
                var e = this
                  , i = this.options.buttons;
                this.uiDialogButtonPane.remove(),
                this.uiButtonSet.empty(),
                t.isEmptyObject(i) || t.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n,
                    n = t.extend({
                        type: "button"
                    }, n),
                    s = n.click,
                    o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    },
                    delete n.click,
                    delete n.icon,
                    delete n.iconPosition,
                    delete n.showLabel,
                    delete n.icons,
                    "boolean" == typeof n.text && delete n.text,
                    t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
                        s.apply(e.element[0], arguments)
                    })
                }),
                this._addClass(this.uiDialog, "ui-dialog-buttons"),
                this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                var e = this
                  , i = this.options;
                function n(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(i, s) {
                        e._addClass(t(this), "ui-dialog-dragging"),
                        e._blockFrames(),
                        e._trigger("dragStart", i, n(s))
                    },
                    drag: function(t, i) {
                        e._trigger("drag", t, n(i))
                    },
                    stop: function(s, o) {
                        var r = o.offset.left - e.document.scrollLeft()
                          , a = o.offset.top - e.document.scrollTop();
                        i.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                            of: e.window
                        },
                        e._removeClass(t(this), "ui-dialog-dragging"),
                        e._unblockFrames(),
                        e._trigger("dragStop", s, n(o))
                    }
                })
            },
            _makeResizable: function() {
                var e = this
                  , i = this.options
                  , n = i.resizable
                  , s = this.uiDialog.css("position")
                  , o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                function r(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: i.maxWidth,
                    maxHeight: i.maxHeight,
                    minWidth: i.minWidth,
                    minHeight: this._minHeight(),
                    handles: o,
                    start: function(i, n) {
                        e._addClass(t(this), "ui-dialog-resizing"),
                        e._blockFrames(),
                        e._trigger("resizeStart", i, r(n))
                    },
                    resize: function(t, i) {
                        e._trigger("resize", t, r(i))
                    },
                    stop: function(n, s) {
                        var o = e.uiDialog.offset()
                          , a = o.left - e.document.scrollLeft()
                          , l = o.top - e.document.scrollTop();
                        i.height = e.uiDialog.height(),
                        i.width = e.uiDialog.width(),
                        i.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                            of: e.window
                        },
                        e._removeClass(t(this), "ui-dialog-resizing"),
                        e._unblockFrames(),
                        e._trigger("resizeStop", n, r(s))
                    }
                }).css("position", s)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(e) {
                        this._makeFocusTarget(),
                        this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(),
                this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var e = this._trackingInstances()
                  , i = t.inArray(this, e);
                -1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [],
                this.document.data("ui-dialog-instances", t)),
                t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(),
                this.uiDialog.position(this.options.position),
                t || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this
                  , n = !1
                  , s = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e),
                    t in i.sizeRelatedOptions && (n = !0),
                    t in i.resizableRelatedOptions && (s[t] = e)
                }),
                n && (this._size(),
                this._position()),
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i),
                "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
                "buttons" === e && this._createButtons(),
                "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }),
                "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"),
                !n && i && this._makeDraggable()),
                "position" === e && this._position(),
                "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"),
                s && "string" == typeof i && o.resizable("option", "handles", i),
                s || !1 === i || this._makeResizable()),
                "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }),
                n.minWidth > n.width && (n.width = n.minWidth),
                t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(),
                e = Math.max(0, n.minHeight - t),
                i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none",
                "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)),
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(),
                delete this.iframeBlocks)
            },
            _allowInteraction: function(e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function() {
                        e = !1
                    }),
                    this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(t) {
                            e || this._allowInteraction(t) || (t.preventDefault(),
                            this._trackingInstances()[0]._focusTabbable())
                        }
                    }),
                    this.overlay = t("<div>").appendTo(this._appendTo()),
                    this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                    this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }),
                    this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"),
                    this.document.removeData("ui-dialog-overlays")),
                    this.overlay.remove(),
                    this.overlay = null
                }
            }
        }),
        !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(),
                this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
                this._superApply(arguments)
            }
        }),
        t.ui.dialog
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(),
                this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }),
                this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
                this.valueDiv = t("<div>").appendTo(this.element),
                this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
                this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
                this.valueDiv.remove()
            },
            value: function(t) {
                if (void 0 === t)
                    return this.options.value;
                this.options.value = this._constrainedValue(t),
                this._refreshValue()
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value),
                this.indeterminate = !1 === t,
                "number" != typeof t && (t = 0),
                !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value,
                this._super(t),
                this.options.value = this._constrainedValue(e),
                this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)),
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this.element.attr("aria-disabled", t),
                this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value
                  , i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"),
                this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv),
                this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }),
                this.overlayDiv && (this.overlayDiv.remove(),
                this.overlayDiv = null)),
                this.oldValue !== e && (this.oldValue = e,
                this._trigger("change")),
                e === this.options.max && this._trigger("complete")
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(18), i(11), i(14), i(6), i(15), i(9), i(8), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                },
                this._drawButton(),
                this._drawMenu(),
                this._bindFormResetHandler(),
                this._rendered = !1,
                this.menuItems = t()
            },
            _drawButton: function() {
                var e, i = this, n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button),
                this._on(this.labels, {
                    click: function(t) {
                        this.button.focus(),
                        t.preventDefault()
                    }
                }),
                this.element.hide(),
                this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element),
                this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
                e = t("<span>").appendTo(this.button),
                this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
                this.buttonItem = this._renderButtonItem(n).appendTo(this.button),
                !1 !== this.options.width && this._resizeButton(),
                this._on(this.button, this._buttonEvents),
                this.button.one("focusin", function() {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function() {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }),
                this.menuWrap = t("<div>").append(this.menu),
                this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
                this.menuWrap.appendTo(this._appendTo()),
                this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, i) {
                        t.preventDefault(),
                        e._setSelection(),
                        e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }),
                        e.isOpen || e._select(n, t)),
                        e.focusIndex = n.index,
                        e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"),
                this.menuInstance._off(this.menu, "mouseleave"),
                this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }
                ,
                this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(),
                this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
                null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function() {
                var t, e = this.element.find("option");
                this.menu.empty(),
                this._parseOptions(e),
                this._renderMenu(this.menu, this.items),
                this.menuInstance.refresh(),
                this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
                this._rendered = !0,
                e.length && (t = this._getSelectedItem(),
                this.menuInstance.focus(null, t),
                this._setAria(t.data("ui-selectmenu-item")),
                this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
                this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
                this.menuItems.length && (this.isOpen = !0,
                this._toggleAttr(),
                this._resizeMenu(),
                this._position(),
                this._on(this.document, this._documentClick),
                this._trigger("open", t)))
            },
            _position: function() {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1,
                this._toggleAttr(),
                this.range = null,
                this._off(this.document),
                this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderButtonItem: function(e) {
                var i = t("<span>");
                return this._setText(i, e.label),
                this._addClass(i, "ui-selectmenu-text"),
                i
            },
            _renderMenu: function(e, i) {
                var n = this
                  , s = "";
                t.each(i, function(i, o) {
                    var r;
                    o.optgroup !== s && (r = t("<li>", {
                        text: o.optgroup
                    }),
                    n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                    r.appendTo(e),
                    s = o.optgroup),
                    n._renderItemData(e, o)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(e, i) {
                var n = t("<li>")
                  , s = t("<div>", {
                    title: i.element.attr("title")
                });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"),
                this._setText(s, i.label),
                n.append(s).appendTo(e)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
                s += ":not(.ui-state-disabled)"),
                (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(),
                t.addRange(this.range)) : this.range.select(),
                this.button.focus())
            },
            _documentClick: {
                mousedown: function(e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(),
                    this._toggle(t)
                },
                keydown: function(e) {
                    var i = !0;
                    switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e),
                        i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e),
                        i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index,
                this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)),
                this._setAria(t),
                this._trigger("select", e, {
                    item: t
                }),
                t.index !== i && this._trigger("change", e, {
                    item: t
                }),
                this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }),
                this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e),
                "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
                "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this.menuInstance.option("disabled", t),
                this.button.attr("aria-disabled", t),
                this._toggleClass(this.button, null, "ui-state-disabled", t),
                this.element.prop("disabled", t),
                t ? (this.button.attr("tabindex", -1),
                this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
                e && e[0] || (e = this.element.closest(".ui-front, dialog")),
                e.length || (e = this.document[0].body),
                e
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen),
                this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
                this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                !1 !== t ? (null === t && (t = this.element.show().outerWidth(),
                this.element.hide()),
                this.button.outerWidth(t)) : this.button.css("width", "")
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"),
                t
            },
            _parseOptions: function(e) {
                var i = this
                  , n = [];
                e.each(function(e, s) {
                    n.push(i._parseOption(t(s), e))
                }),
                this.items = n
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function() {
                this._unbindFormResetHandler(),
                this.menuWrap.remove(),
                this.button.remove(),
                this.element.show(),
                this.element.removeUniqueId(),
                this.labels.attr("for", this.ids.element)
            }
        }])
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(7), i(6), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1,
                this._mouseSliding = !1,
                this._animateOff = !0,
                this._handleIndex = null,
                this._detectOrientation(),
                this._mouseInit(),
                this._calculateNewMax(),
                this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
                this._refresh(),
                this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(),
                this._createHandles(),
                this._setupEvents(),
                this._refreshValue()
            },
            _createHandles: function() {
                var e, i, n = this.options, s = this.element.find(".ui-slider-handle"), o = [];
                for (i = n.values && n.values.length || 1,
                s.length > i && (s.slice(i).remove(),
                s = s.slice(0, i)),
                e = s.length; e < i; e++)
                    o.push("<span tabindex='0'></span>");
                this.handles = s.add(t(o.join("")).appendTo(this.element)),
                this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
                this.handle = this.handles.eq(0),
                this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
                this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
                this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element),
                this._addClass(this.range, "ui-slider-range")),
                "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(),
                this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles),
                this._on(this.handles, this._handleEvents),
                this._hoverable(this.handles),
                this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(),
                this.range && this.range.remove(),
                this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, n, s, o, r, a, l, c = this, u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                },
                this.elementOffset = this.element.offset(),
                i = {
                    x: e.pageX,
                    y: e.pageY
                },
                n = this._normValueFromMouse(i),
                s = this._valueMax() - this._valueMin() + 1,
                this.handles.each(function(e) {
                    var i = Math.abs(n - c.values(e));
                    (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i,
                    o = t(this),
                    r = e)
                }),
                !1 !== this._start(e, r) && (this._mouseSliding = !0,
                this._handleIndex = r,
                this._addClass(o, null, "ui-state-active"),
                o.trigger("focus"),
                a = o.offset(),
                l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
                this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - a.left - o.width() / 2,
                    top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                },
                this.handles.hasClass("ui-state-hover") || this._slide(e, r, n),
                this._animateOff = !0,
                !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                    x: t.pageX,
                    y: t.pageY
                }
                  , i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i),
                !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"),
                this._mouseSliding = !1,
                this._stop(t, this._handleIndex),
                this._change(t, this._handleIndex),
                this._handleIndex = null,
                this._clickOffset = null,
                this._animateOff = !1,
                !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width,
                i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
                i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                (n = i / e) > 1 && (n = 1),
                n < 0 && (n = 0),
                "vertical" === this.orientation && (n = 1 - n),
                s = this._valueMax() - this._valueMin(),
                o = this._valueMin() + n * s,
                this._trimAlignValue(o)
            },
            _uiHash: function(t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t),
                n.values = i || this.values()),
                n
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var n, s = this.value(), o = this.values();
                this._hasMultipleValues() && (n = this.values(e ? 0 : 1),
                s = this.values(e),
                2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
                o[e] = i),
                i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
                this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t),
                this._refreshValue(),
                void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var n, s, o;
                if (arguments.length > 1)
                    return this.options.values[e] = this._trimAlignValue(i),
                    this._refreshValue(),
                    void this._change(null, e);
                if (!arguments.length)
                    return this._values();
                if (!t.isArray(arguments[0]))
                    return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values,
                s = arguments[0],
                o = 0; o < n.length; o += 1)
                    n[o] = this._trimAlignValue(s[o]),
                    this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var n, s = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0),
                this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
                this.options.values = null)),
                t.isArray(this.options.values) && (s = this.options.values.length),
                this._super(e, i),
                e) {
                case "orientation":
                    this._detectOrientation(),
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                    this._refreshValue(),
                    this.options.range && this._refreshRange(i),
                    this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0,
                    this._refreshValue(),
                    this._change(null, 0),
                    this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0,
                    this._refreshValue(),
                    n = s - 1; n >= 0; n--)
                        this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0,
                    this._calculateNewMax(),
                    this._refreshValue(),
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0,
                    this._refresh(),
                    this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length)
                    return e = this.options.values[t],
                    e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(),
                    n = 0; n < i.length; n += 1)
                        i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin())
                    return this._valueMin();
                if (t >= this._valueMax())
                    return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1
                  , i = (t - this._valueMin()) % e
                  , n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
                parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max
                  , e = this._valueMin()
                  , i = this.options.step
                  , n = Math.round((t - e) / i) * i;
                (t = n + e) > this.options.max && (t -= i),
                this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                t
            },
            _precisionOf: function(t) {
                var e = t.toString()
                  , i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }),
                "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, n, s, o, r = this.options.range, a = this.options, l = this, c = !this._animateOff && a.animate, u = {};
                this._hasMultipleValues() ? this.handles.each(function(n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                    u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                    t(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate),
                    !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate),
                    1 === n && l.range[c ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate),
                    1 === n && l.range[c ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))),
                    e = i
                }) : (n = this.value(),
                s = this._valueMin(),
                o = this._valueMax(),
                i = o !== s ? (n - s) / (o - s) * 100 : 0,
                u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
                this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate),
                "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate),
                "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, a.animate),
                "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate),
                "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, a.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(),
                        !this._keySliding && (this._keySliding = !0,
                        this._addClass(t(e.target), null, "ui-state-active"),
                        !1 === this._start(e, o)))
                            return
                    }
                    switch (s = this.options.step,
                    i = n = this._hasMultipleValues() ? this.values(o) : this.value(),
                    e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax())
                            return;
                        n = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin())
                            return;
                        n = this._trimAlignValue(i - s)
                    }
                    this._slide(e, o, n)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1,
                    this._stop(e, i),
                    this._change(e, i),
                    this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(19), i(1), i(6), i(10), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        function e(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments),
                this._refresh(),
                e !== this.element.val() && this._trigger("change")
            }
        }
        return t.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max),
                this._setOption("min", this.options.min),
                this._setOption("step", this.options.step),
                "" !== this.value() && this._value(this.element.val(), !0),
                this._draw(),
                this._on(this._events),
                this._refresh(),
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var e = this._super()
                  , i = this.element;
                return t.each(["min", "max", "step"], function(t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
                }),
                e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    this.cancelBlur ? delete this.cancelBlur : (this._stop(),
                    this._refresh(),
                    this.previous !== this.element.val() && this._trigger("change", t))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t))
                            return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                        clearTimeout(this.mousewheelTimer),
                        this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100),
                        t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    var i;
                    function n() {
                        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"),
                        this.previous = i,
                        this._delay(function() {
                            this.previous = i
                        }))
                    }
                    i = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                    e.preventDefault(),
                    n.call(this),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        n.call(this)
                    }),
                    !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    if (t(e.currentTarget).hasClass("ui-state-active"))
                        return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function() {
                this._enhance(),
                this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
                this._addClass("ui-spinner-input"),
                this.element.attr("role", "spinbutton"),
                this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }),
                this._removeClass(this.buttons, "ui-corner-all"),
                this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
                this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
                this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }),
                this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }),
                this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function(e) {
                var i = this.options
                  , n = t.ui.keyCode;
                switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e),
                    !0;
                case n.DOWN:
                    return this._repeat(null, -1, e),
                    !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e),
                    !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e),
                    !0
                }
                return !1
            },
            _start: function(t) {
                return !(!this.spinning && !1 === this._trigger("start", t) || (this.counter || (this.counter = 1),
                this.spinning = !0,
                0))
            },
            _repeat: function(t, e, i) {
                t = t || 500,
                clearTimeout(this.timer),
                this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t),
                this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1),
                i = this._adjustValue(i + t * this._increment(this.counter)),
                this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i),
                this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                t
            },
            _precisionOf: function(t) {
                var e = t.toString()
                  , i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return i = t - (e = null !== n.min ? n.min : 0),
                t = e + (i = Math.round(i / n.step) * n.step),
                t = parseFloat(t.toFixed(this._precision())),
                null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer),
                clearTimeout(this.mousewheelTimer),
                this.counter = 0,
                this.spinning = !1,
                this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                var i, n, s;
                if ("culture" === t || "numberFormat" === t)
                    return i = this._parse(this.element.val()),
                    this.options[t] = e,
                    void this.element.val(this._format(i));
                "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)),
                "icons" === t && (n = this.buttons.first().find(".ui-icon"),
                this._removeClass(n, null, this.options.icons.up),
                this._addClass(n, null, e.up),
                s = this.buttons.last().find(".ui-icon"),
                this._removeClass(s, null, this.options.icons.down),
                this._addClass(s, null, e.down)),
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t),
                this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
                this.element.prop("disabled", !!t),
                this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: e(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
                "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
                t = this._format(i)),
                this.element.val(t),
                this._refresh()
            },
            _destroy: function() {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
                this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step),
                this._stop())
            },
            stepDown: e(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step),
                this._stop())
            },
            pageUp: e(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                if (!arguments.length)
                    return this._parse(this.element.val());
                e(this._value).call(this, t)
            },
            widget: function() {
                return this.uiSpinner
            }
        }),
        !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        }),
        t.ui.spinner
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(11), i(6), i(10), i(8), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e;
        return t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: (e = /#.*$/,
            function(t) {
                var i, n;
                i = t.href.replace(e, ""),
                n = location.href.replace(e, "");
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                try {
                    n = decodeURIComponent(n)
                } catch (t) {}
                return t.hash.length > 1 && i === n
            }
            ),
            _create: function() {
                var e = this
                  , i = this.options;
                this.running = !1,
                this._addClass("ui-tabs", "ui-widget ui-widget-content"),
                this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
                this._processTabs(),
                i.active = this._initialActive(),
                t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()),
                !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(),
                this._refresh(),
                this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active
                  , i = this.options.collapsible
                  , n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function(i, s) {
                    if (t(s).attr("aria-controls") === n)
                        return e = i,
                        !1
                }),
                null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                null !== e && -1 !== e || (e = !!this.tabs.length && 0)),
                !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0),
                !i && !1 === e && this.anchors.length && (e = 0),
                e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li")
                  , n = this.tabs.index(i)
                  , s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1,
                        n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(),
                        clearTimeout(this.activating),
                        void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(),
                        clearTimeout(this.activating),
                        void this._activate(n !== this.options.active && n);
                    default:
                        return
                    }
                    e.preventDefault(),
                    clearTimeout(this.activating),
                    n = this._focusNextTab(n, s),
                    e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"),
                    this.tabs.eq(n).attr("aria-selected", "true"),
                    this.activating = this._delay(function() {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
                this.active.trigger("focus"))
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
                !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
                !0) : void 0
            },
            _findNextTab: function(e, i) {
                for (var n = this.tabs.length - 1; -1 !== t.inArray((e > n && (e = 0),
                e < 0 && (e = n),
                e), this.options.disabled); )
                    e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e),
                this.tabs.eq(t).trigger("focus"),
                t
            },
            _setOption: function(t, e) {
                "active" !== t ? (this._super(t, e),
                "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
                e || !1 !== this.options.active || this._activate(0)),
                "event" === t && this._setupEvents(e),
                "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options
                  , i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }),
                this._processTabs(),
                !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
                this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
                this.active = t()),
                this._refresh()
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled),
                this._setupEvents(this.options.event),
                this._setupHeightStyle(this.options.heightStyle),
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }),
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }),
                this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }),
                this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
                this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this
                  , i = this.tabs
                  , n = this.anchors
                  , s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"),
                this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
                this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }),
                this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }),
                this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
                this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }),
                this._addClass(this.anchors, "ui-tabs-anchor"),
                this.panels = t(),
                this.anchors.each(function(i, n) {
                    var s, o, r, a = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
                    e._isLocal(n) ? (r = (s = n.hash).substring(1),
                    o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (r = l.attr("aria-controls") || t({}).uniqueId()[0].id),
                    (o = e.element.find(s)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist),
                    o.attr("aria-live", "polite")),
                    o.length && (e.panels = e.panels.add(o)),
                    c && l.data("ui-tabs-aria-controls", c),
                    l.attr({
                        "aria-controls": r,
                        "aria-labelledby": a
                    }),
                    o.attr("aria-labelledby", a)
                }),
                this.panels.attr("role", "tabpanel"),
                this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
                i && (this._off(i.not(this.tabs)),
                this._off(n.not(this.anchors)),
                this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1),
                s = 0; n = this.tabs[s]; s++)
                    i = t(n),
                    !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"),
                    this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                    this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e,
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }),
                this._off(this.anchors.add(this.tabs).add(this.panels)),
                this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }),
                this._on(this.anchors, i),
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }),
                this._on(this.panels, {
                    keydown: "_panelKeydown"
                }),
                this._focusable(this.tabs),
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(),
                i -= this.element.outerHeight() - this.element.height(),
                this.element.siblings(":visible").each(function() {
                    var e = t(this)
                      , n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }),
                this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }),
                this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0,
                this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options
                  , n = this.active
                  , s = t(e.currentTarget).closest("li")
                  , o = s[0] === n[0]
                  , r = o && i.collapsible
                  , a = r ? t() : this._getPanelForTab(s)
                  , l = n.length ? this._getPanelForTab(n) : t()
                  , c = {
                    oldTab: n,
                    oldPanel: l,
                    newTab: r ? t() : s,
                    newPanel: a
                };
                e.preventDefault(),
                s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(s),
                this.active = o ? t() : s,
                this.xhr && this.xhr.abort(),
                l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
                a.length && this.load(this.tabs.index(s), e),
                this._toggle(e, c))
            },
            _toggle: function(e, i) {
                var n = this
                  , s = i.newPanel
                  , o = i.oldPanel;
                function r() {
                    n.running = !1,
                    n._trigger("activate", e, i)
                }
                function a() {
                    n._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                    s.length && n.options.show ? n._show(s, n.options.show, r) : (s.show(),
                    r())
                }
                this.running = !0,
                o.length && this.options.hide ? this._hide(o, this.options.hide, function() {
                    n._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                    a()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                o.hide(),
                a()),
                o.attr("aria-hidden", "true"),
                i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }),
                s.length && o.length ? i.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1),
                s.attr("aria-hidden", "false"),
                i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active),
                i = n.find(".ui-tabs-anchor")[0],
                this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))),
                e
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(),
                this.tablist.removeAttr("role").off(this.eventNamespace),
                this.anchors.removeAttr("role tabIndex").removeUniqueId(),
                this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }),
                this.tabs.each(function() {
                    var e = t(this)
                      , i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }),
                this.panels.show(),
                "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e),
                i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })),
                this._setOptionDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e)
                        i = !0;
                    else {
                        if (e = this._getIndex(e),
                        -1 !== t.inArray(e, i))
                            return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var n = this
                  , s = this.tabs.eq(e)
                  , o = s.find(".ui-tabs-anchor")
                  , r = this._getPanelForTab(s)
                  , a = {
                    tab: s,
                    panel: r
                }
                  , l = function(t, e) {
                    "abort" === e && n.panels.stop(!1, !0),
                    n._removeClass(s, "ui-tabs-loading"),
                    r.removeAttr("aria-busy"),
                    t === n.xhr && delete n.xhr
                };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)),
                this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"),
                r.attr("aria-busy", "true"),
                this.xhr.done(function(t, e, s) {
                    setTimeout(function() {
                        r.html(t),
                        n._trigger("load", i, a),
                        l(s, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function(e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }),
        !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments),
                this._addClass(this.tabs, "ui-tab")
            }
        }),
        t.ui.tabs
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(6), i(9), i(8), i(1), i(2)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i),
                e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var i = e.data("ui-tooltip-id")
                  , n = (e.attr("aria-describedby") || "").split(/\s+/)
                  , s = t.inArray(i, n);
                -1 !== s && n.splice(s, 1),
                e.removeData("ui-tooltip-id"),
                (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }),
                this.tooltips = {},
                this.parents = {},
                this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body),
                this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                this.disabledTitles = t([])
            },
            _setOption: function(e, i) {
                var n = this;
                this._super(e, i),
                "content" === e && t.each(this.tooltips, function(t, e) {
                    n._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0],
                    e.close(s, !0)
                }),
                this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var e = t(this);
                    if (e.is("[title]"))
                        return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }),
                this.disabledTitles = t([])
            },
            open: function(e) {
                var i = this
                  , n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
                n.data("ui-tooltip-open", !0),
                e && "mouseover" === e.type && n.parents().each(function() {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this,
                    i.close(e, !0)),
                    n.attr("title") && (n.uniqueId(),
                    i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    },
                    n.attr("title", ""))
                }),
                this._registerCloseHandlers(e, n),
                this._updateContent(n, e))
            },
            _updateContent: function(t, e) {
                var i, n = this.options.content, s = this, o = e ? e.type : null;
                if ("string" == typeof n || n.nodeType || n.jquery)
                    return this._open(e, t, n);
                (i = n.call(t[0], function(i) {
                    s._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = o),
                        this._open(e, t, i))
                    })
                })) && this._open(e, t, i)
            },
            _open: function(e, i, n) {
                var s, o, r, a, l = t.extend({}, this.options.position);
                function c(t) {
                    l.of = t,
                    o.is(":hidden") || o.position(l)
                }
                n && ((s = this._find(i)) ? s.tooltip.find(".ui-tooltip-content").html(n) : (i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                s = this._tooltip(i),
                o = s.tooltip,
                this._addDescribedBy(i, o.attr("id")),
                o.find(".ui-tooltip-content").html(n),
                this.liveRegion.children().hide(),
                (a = t("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
                a.removeAttr("id").find("[id]").removeAttr("id"),
                a.appendTo(this.liveRegion),
                this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: c
                }),
                c(e)) : o.position(t.extend({
                    of: i
                }, this.options.position)),
                o.hide(),
                this._show(o, this.options.show),
                this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    o.is(":visible") && (c(l.of),
                    clearInterval(r))
                }, t.fx.interval)),
                this._trigger("open", e, {
                    tooltip: o
                })))
            },
            _registerCloseHandlers: function(e, i) {
                var n = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0],
                            this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }
                ),
                e && "mouseover" !== e.type || (n.mouseleave = "close"),
                e && "focusin" !== e.type || (n.focusout = "close"),
                this._on(!0, i, n)
            },
            close: function(e) {
                var i, n = this, s = t(e ? e.currentTarget : this.element), o = this._find(s);
                o ? (i = o.tooltip,
                o.closing || (clearInterval(this.delayedShow),
                s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
                this._removeDescribedBy(s),
                o.hiding = !0,
                i.stop(!0),
                this._hide(i, this.options.hide, function() {
                    n._removeTooltip(t(this))
                }),
                s.removeData("ui-tooltip-open"),
                this._off(s, "mouseleave focusout keyup"),
                s[0] !== this.element[0] && this._off(s, "remove"),
                this._off(this.document, "mousemove"),
                e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                    t(i.element).attr("title", i.title),
                    delete n.parents[e]
                }),
                o.closing = !0,
                this._trigger("close", e, {
                    tooltip: i
                }),
                o.hiding || (o.closing = !1))) : s.removeData("ui-tooltip-open")
            },
            _tooltip: function(e) {
                var i = t("<div>").attr("role", "tooltip")
                  , n = t("<div>").appendTo(i)
                  , s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"),
                this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
                i.appendTo(this._appendTo(e)),
                this.tooltips[s] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(),
                delete this.tooltips[t.attr("id")]
            },
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body),
                e
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur")
                      , o = n.element;
                    s.target = s.currentTarget = o[0],
                    e.close(s, !0),
                    t("#" + i).remove(),
                    o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                    o.removeData("ui-tooltip-title"))
                }),
                this.liveRegion.remove()
            }
        }),
        !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
                t
            }
        }),
        t.ui.tooltip
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("blind", "hide", function(e, i) {
            var n = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }
              , s = t(this)
              , o = e.direction || "up"
              , r = s.cssClip()
              , a = {
                clip: t.extend({}, r)
            }
              , l = t.effects.createPlaceholder(s);
            a.clip[n[o][0]] = a.clip[n[o][1]],
            "show" === e.mode && (s.cssClip(a.clip),
            l && l.css(t.effects.clipToBox(a)),
            a.clip = r),
            l && l.animate(t.effects.clipToBox(a), e.duration, e.easing),
            s.animate(a, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("bounce", function(e, i) {
            var n, s, o, r = t(this), a = e.mode, l = "hide" === a, c = "show" === a, u = e.direction || "up", h = e.distance, d = e.times || 5, p = 2 * d + (c || l ? 1 : 0), f = e.duration / p, m = e.easing, g = "up" === u || "down" === u ? "top" : "left", v = "up" === u || "left" === u, _ = 0, b = r.queue().length;
            for (t.effects.createPlaceholder(r),
            o = r.css(g),
            h || (h = r["top" === g ? "outerHeight" : "outerWidth"]() / 3),
            c && ((s = {
                opacity: 1
            })[g] = o,
            r.css("opacity", 0).css(g, v ? 2 * -h : 2 * h).animate(s, f, m)),
            l && (h /= Math.pow(2, d - 1)),
            (s = {})[g] = o; _ < d; _++)
                (n = {})[g] = (v ? "-=" : "+=") + h,
                r.animate(n, f, m).animate(s, f, m),
                h = l ? 2 * h : h / 2;
            l && ((n = {
                opacity: 0
            })[g] = (v ? "-=" : "+=") + h,
            r.animate(n, f, m)),
            r.queue(i),
            t.effects.unshift(r, b, p + 1)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("clip", "hide", function(e, i) {
            var n, s = {}, o = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r, c = a || "vertical" === r;
            n = o.cssClip(),
            s.clip = {
                top: c ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            },
            t.effects.createPlaceholder(o),
            "show" === e.mode && (o.cssClip(s.clip),
            s.clip = n),
            o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("drop", "hide", function(e, i) {
            var n, s = t(this), o = e.mode, r = "show" === o, a = e.direction || "left", l = "up" === a || "down" === a ? "top" : "left", c = "up" === a || "left" === a ? "-=" : "+=", u = "+=" === c ? "-=" : "+=", h = {
                opacity: 0
            };
            t.effects.createPlaceholder(s),
            n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
            h[l] = c + n,
            r && (s.css(h),
            h[l] = u + n,
            h.opacity = 1),
            s.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("explode", "hide", function(e, i) {
            var n, s, o, r, a, l, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, u = c, h = t(this), d = e.mode, p = "show" === d, f = h.show().css("visibility", "hidden").offset(), m = Math.ceil(h.outerWidth() / u), g = Math.ceil(h.outerHeight() / c), v = [];
            function _() {
                v.push(this),
                v.length === c * u && (h.css({
                    visibility: "visible"
                }),
                t(v).remove(),
                i())
            }
            for (n = 0; n < c; n++)
                for (r = f.top + n * g,
                l = n - (c - 1) / 2,
                s = 0; s < u; s++)
                    o = f.left + s * m,
                    a = s - (u - 1) / 2,
                    h.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -s * m,
                        top: -n * g
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: m,
                        height: g,
                        left: o + (p ? a * m : 0),
                        top: r + (p ? l * g : 0),
                        opacity: p ? 0 : 1
                    }).animate({
                        left: o + (p ? 0 : a * m),
                        top: r + (p ? 0 : l * g),
                        opacity: p ? 1 : 0
                    }, e.duration || 500, e.easing, _)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("fade", "toggle", function(e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("fold", "hide", function(e, i) {
            var n = t(this)
              , s = e.mode
              , o = "show" === s
              , r = "hide" === s
              , a = e.size || 15
              , l = /([0-9]+)%/.exec(a)
              , c = !!e.horizFirst
              , u = c ? ["right", "bottom"] : ["bottom", "right"]
              , h = e.duration / 2
              , d = t.effects.createPlaceholder(n)
              , p = n.cssClip()
              , f = {
                clip: t.extend({}, p)
            }
              , m = {
                clip: t.extend({}, p)
            }
              , g = [p[u[0]], p[u[1]]]
              , v = n.queue().length;
            l && (a = parseInt(l[1], 10) / 100 * g[r ? 0 : 1]),
            f.clip[u[0]] = a,
            m.clip[u[0]] = a,
            m.clip[u[1]] = 0,
            o && (n.cssClip(m.clip),
            d && d.css(t.effects.clipToBox(m)),
            m.clip = p),
            n.queue(function(i) {
                d && d.animate(t.effects.clipToBox(f), h, e.easing).animate(t.effects.clipToBox(m), h, e.easing),
                i()
            }).animate(f, h, e.easing).animate(m, h, e.easing).queue(i),
            t.effects.unshift(n, v, 4)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("highlight", "show", function(e, i) {
            var n = t(this)
              , s = {
                backgroundColor: n.css("backgroundColor")
            };
            "hide" === e.mode && (s.opacity = 0),
            t.effects.saveStyle(n),
            n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5), i(29)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("puff", "hide", function(e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("pulsate", "show", function(e, i) {
            var n = t(this)
              , s = e.mode
              , o = "show" === s
              , r = "hide" === s
              , a = o || r
              , l = 2 * (e.times || 5) + (a ? 1 : 0)
              , c = e.duration / l
              , u = 0
              , h = 1
              , d = n.queue().length;
            for (!o && n.is(":visible") || (n.css("opacity", 0).show(),
            u = 1); h < l; h++)
                n.animate({
                    opacity: u
                }, c, e.easing),
                u = 1 - u;
            n.animate({
                opacity: u
            }, c, e.easing),
            n.queue(i),
            t.effects.unshift(n, d, l + 1)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("shake", function(e, i) {
            var n = 1
              , s = t(this)
              , o = e.direction || "left"
              , r = e.distance || 20
              , a = e.times || 3
              , l = 2 * a + 1
              , c = Math.round(e.duration / l)
              , u = "up" === o || "down" === o ? "top" : "left"
              , h = "up" === o || "left" === o
              , d = {}
              , p = {}
              , f = {}
              , m = s.queue().length;
            for (t.effects.createPlaceholder(s),
            d[u] = (h ? "-=" : "+=") + r,
            p[u] = (h ? "+=" : "-=") + 2 * r,
            f[u] = (h ? "-=" : "+=") + 2 * r,
            s.animate(d, c, e.easing); n < a; n++)
                s.animate(p, c, e.easing).animate(f, c, e.easing);
            s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i),
            t.effects.unshift(s, m, l + 1)
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        return t.effects.define("slide", "show", function(e, i) {
            var n, s, o = t(this), r = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            }, a = e.mode, l = e.direction || "left", c = "up" === l || "down" === l ? "top" : "left", u = "up" === l || "left" === l, h = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0), d = {};
            t.effects.createPlaceholder(o),
            n = o.cssClip(),
            s = o.position()[c],
            d[c] = (u ? -1 : 1) * h + s,
            d.clip = o.cssClip(),
            d.clip[r[l][1]] = d.clip[r[l][0]],
            "show" === a && (o.cssClip(d.clip),
            o.css(c, d[c]),
            d.clip = n,
            d[c] = s),
            o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0), i(1), i(5)],
    void 0 === (o = "function" == typeof (n = function(t) {
        var e;
        return !1 !== t.uiBackCompat && (e = t.effects.define("transfer", function(e, i) {
            t(this).transfer(e, i)
        })),
        e
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e, i) {
    var n = i(67);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, '/*!\n * jQuery UI CSS Framework 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/category/theming/\n */\n\n/* Layout helpers\n----------------------------------*/\n.ui-helper-hidden {\n\tdisplay: none;\n}\n.ui-helper-hidden-accessible {\n\tborder: 0;\n\tclip: rect(0 0 0 0);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n}\n.ui-helper-reset {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tline-height: 1.3;\n\ttext-decoration: none;\n\tfont-size: 100%;\n\tlist-style: none;\n}\n.ui-helper-clearfix:before,\n.ui-helper-clearfix:after {\n\tcontent: "";\n\tdisplay: table;\n\tborder-collapse: collapse;\n}\n.ui-helper-clearfix:after {\n\tclear: both;\n}\n.ui-helper-zfix {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\topacity: 0;\n\tfilter:Alpha(Opacity=0); /* support: IE8 */\n}\n\n.ui-front {\n\tz-index: 100;\n}\n\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-disabled {\n\tcursor: default !important;\n\tpointer-events: none;\n}\n\n\n/* Icons\n----------------------------------*/\n.ui-icon {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-top: -.25em;\n\tposition: relative;\n\ttext-indent: -99999px;\n\toverflow: hidden;\n\tbackground-repeat: no-repeat;\n}\n\n.ui-widget-icon-block {\n\tleft: 50%;\n\tmargin-left: -8px;\n\tdisplay: block;\n}\n\n/* Misc visuals\n----------------------------------*/\n\n/* Overlays */\n.ui-widget-overlay {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n', ""])
}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var i = e.protocol + "//" + e.host
          , n = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var s, o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (s = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? i + o : n + o.replace(/^\.\//, ""),
            "url(" + JSON.stringify(s) + ")")
        })
    }
}
, function(t, e, i) {
    var n = i(70);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Draggable 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-draggable-handle {\n\ttouch-action: none;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(72);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Resizable 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-resizable {\n\tposition: relative;\n}\n.ui-resizable-handle {\n\tposition: absolute;\n\tfont-size: 0.1px;\n\tdisplay: block;\n\ttouch-action: none;\n}\n.ui-resizable-disabled .ui-resizable-handle,\n.ui-resizable-autohide .ui-resizable-handle {\n\tdisplay: none;\n}\n.ui-resizable-n {\n\tcursor: n-resize;\n\theight: 7px;\n\twidth: 100%;\n\ttop: -5px;\n\tleft: 0;\n}\n.ui-resizable-s {\n\tcursor: s-resize;\n\theight: 7px;\n\twidth: 100%;\n\tbottom: -5px;\n\tleft: 0;\n}\n.ui-resizable-e {\n\tcursor: e-resize;\n\twidth: 7px;\n\tright: -5px;\n\ttop: 0;\n\theight: 100%;\n}\n.ui-resizable-w {\n\tcursor: w-resize;\n\twidth: 7px;\n\tleft: -5px;\n\ttop: 0;\n\theight: 100%;\n}\n.ui-resizable-se {\n\tcursor: se-resize;\n\twidth: 12px;\n\theight: 12px;\n\tright: 1px;\n\tbottom: 1px;\n}\n.ui-resizable-sw {\n\tcursor: sw-resize;\n\twidth: 9px;\n\theight: 9px;\n\tleft: -5px;\n\tbottom: -5px;\n}\n.ui-resizable-nw {\n\tcursor: nw-resize;\n\twidth: 9px;\n\theight: 9px;\n\tleft: -5px;\n\ttop: -5px;\n}\n.ui-resizable-ne {\n\tcursor: ne-resize;\n\twidth: 9px;\n\theight: 9px;\n\tright: -5px;\n\ttop: -5px;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(74);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Selectable 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-selectable {\n\ttouch-action: none;\n}\n.ui-selectable-helper {\n\tposition: absolute;\n\tz-index: 100;\n\tborder: 1px dotted black;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(76);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Sortable 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n */\n.ui-sortable-handle {\n\ttouch-action: none;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(78);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Accordion 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/accordion/#theming\n */\n.ui-accordion .ui-accordion-header {\n\tdisplay: block;\n\tcursor: pointer;\n\tposition: relative;\n\tmargin: 2px 0 0 0;\n\tpadding: .5em .5em .5em .7em;\n\tfont-size: 100%;\n}\n.ui-accordion .ui-accordion-content {\n\tpadding: 1em 2.2em;\n\tborder-top: 0;\n\toverflow: auto;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(80);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Autocomplete 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/autocomplete/#theming\n */\n.ui-autocomplete {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tcursor: default;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(82);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Button 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/button/#theming\n */\n.ui-button {\n\tpadding: .4em 1em;\n\tdisplay: inline-block;\n\tposition: relative;\n\tline-height: normal;\n\tmargin-right: .1em;\n\tcursor: pointer;\n\tvertical-align: middle;\n\ttext-align: center;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n\t/* Support: IE <= 11 */\n\toverflow: visible;\n}\n\n.ui-button,\n.ui-button:link,\n.ui-button:visited,\n.ui-button:hover,\n.ui-button:active {\n\ttext-decoration: none;\n}\n\n/* to make room for the icon, a width needs to be set here */\n.ui-button-icon-only {\n\twidth: 2em;\n\tbox-sizing: border-box;\n\ttext-indent: -9999px;\n\twhite-space: nowrap;\n}\n\n/* no icon support for input elements */\ninput.ui-button.ui-button-icon-only {\n\ttext-indent: 0;\n}\n\n/* button icon element(s) */\n.ui-button-icon-only .ui-icon {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -8px;\n\tmargin-left: -8px;\n}\n\n.ui-button.ui-icon-notext .ui-icon {\n\tpadding: 0;\n\twidth: 2.1em;\n\theight: 2.1em;\n\ttext-indent: -9999px;\n\twhite-space: nowrap;\n\n}\n\ninput.ui-button.ui-icon-notext .ui-icon {\n\twidth: auto;\n\theight: auto;\n\ttext-indent: 0;\n\twhite-space: normal;\n\tpadding: .4em 1em;\n}\n\n/* workarounds */\n/* Support: Firefox 5 - 40 */\ninput.ui-button::-moz-focus-inner,\nbutton.ui-button::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(84);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Checkboxradio 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/checkboxradio/#theming\n */\n\n.ui-checkboxradio-label .ui-icon-background {\n\tbox-shadow: inset 1px 1px 1px #ccc;\n\tborder-radius: .12em;\n\tborder: none;\n}\n.ui-checkboxradio-radio-label .ui-icon-background {\n\twidth: 16px;\n\theight: 16px;\n\tborder-radius: 1em;\n\toverflow: visible;\n\tborder: none;\n}\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon {\n\tbackground-image: none;\n\twidth: 8px;\n\theight: 8px;\n\tborder-width: 4px;\n\tborder-style: solid;\n}\n.ui-checkboxradio-disabled {\n\tpointer-events: none;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(86);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Controlgroup 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/controlgroup/#theming\n */\n\n.ui-controlgroup {\n\tvertical-align: middle;\n\tdisplay: inline-block;\n}\n.ui-controlgroup > .ui-controlgroup-item {\n\tfloat: left;\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.ui-controlgroup > .ui-controlgroup-item:focus,\n.ui-controlgroup > .ui-controlgroup-item.ui-visual-focus {\n\tz-index: 9999;\n}\n.ui-controlgroup-vertical > .ui-controlgroup-item {\n\tdisplay: block;\n\tfloat: none;\n\twidth: 100%;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\ttext-align: left;\n}\n.ui-controlgroup-vertical .ui-controlgroup-item {\n\tbox-sizing: border-box;\n}\n.ui-controlgroup .ui-controlgroup-label {\n\tpadding: .4em 1em;\n}\n.ui-controlgroup .ui-controlgroup-label span {\n\tfont-size: 80%;\n}\n.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item {\n\tborder-left: none;\n}\n.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item {\n\tborder-top: none;\n}\n.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content {\n\tborder-right: none;\n}\n.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content {\n\tborder-bottom: none;\n}\n\n/* Spinner specific style fixes */\n.ui-controlgroup-vertical .ui-spinner-input {\n\n\t/* Support: IE8 only, Android < 4.4 only */\n\twidth: 75%;\n\twidth: calc( 100% - 2.4em );\n}\n.ui-controlgroup-vertical .ui-spinner .ui-spinner-up {\n\tborder-top-style: solid;\n}\n\n", ""])
}
, function(t, e, i) {
    var n = i(88);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Datepicker 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/datepicker/#theming\n */\n.ui-datepicker {\n\twidth: 17em;\n\tpadding: .2em .2em 0;\n\tdisplay: none;\n}\n.ui-datepicker .ui-datepicker-header {\n\tposition: relative;\n\tpadding: .2em 0;\n}\n.ui-datepicker .ui-datepicker-prev,\n.ui-datepicker .ui-datepicker-next {\n\tposition: absolute;\n\ttop: 2px;\n\twidth: 1.8em;\n\theight: 1.8em;\n}\n.ui-datepicker .ui-datepicker-prev-hover,\n.ui-datepicker .ui-datepicker-next-hover {\n\ttop: 1px;\n}\n.ui-datepicker .ui-datepicker-prev {\n\tleft: 2px;\n}\n.ui-datepicker .ui-datepicker-next {\n\tright: 2px;\n}\n.ui-datepicker .ui-datepicker-prev-hover {\n\tleft: 1px;\n}\n.ui-datepicker .ui-datepicker-next-hover {\n\tright: 1px;\n}\n.ui-datepicker .ui-datepicker-prev span,\n.ui-datepicker .ui-datepicker-next span {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -8px;\n\ttop: 50%;\n\tmargin-top: -8px;\n}\n.ui-datepicker .ui-datepicker-title {\n\tmargin: 0 2.3em;\n\tline-height: 1.8em;\n\ttext-align: center;\n}\n.ui-datepicker .ui-datepicker-title select {\n\tfont-size: 1em;\n\tmargin: 1px 0;\n}\n.ui-datepicker select.ui-datepicker-month,\n.ui-datepicker select.ui-datepicker-year {\n\twidth: 45%;\n}\n.ui-datepicker table {\n\twidth: 100%;\n\tfont-size: .9em;\n\tborder-collapse: collapse;\n\tmargin: 0 0 .4em;\n}\n.ui-datepicker th {\n\tpadding: .7em .3em;\n\ttext-align: center;\n\tfont-weight: bold;\n\tborder: 0;\n}\n.ui-datepicker td {\n\tborder: 0;\n\tpadding: 1px;\n}\n.ui-datepicker td span,\n.ui-datepicker td a {\n\tdisplay: block;\n\tpadding: .2em;\n\ttext-align: right;\n\ttext-decoration: none;\n}\n.ui-datepicker .ui-datepicker-buttonpane {\n\tbackground-image: none;\n\tmargin: .7em 0 0 0;\n\tpadding: 0 .2em;\n\tborder-left: 0;\n\tborder-right: 0;\n\tborder-bottom: 0;\n}\n.ui-datepicker .ui-datepicker-buttonpane button {\n\tfloat: right;\n\tmargin: .5em .2em .4em;\n\tcursor: pointer;\n\tpadding: .2em .6em .3em .6em;\n\twidth: auto;\n\toverflow: visible;\n}\n.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {\n\tfloat: left;\n}\n\n/* with multiple calendars */\n.ui-datepicker.ui-datepicker-multi {\n\twidth: auto;\n}\n.ui-datepicker-multi .ui-datepicker-group {\n\tfloat: left;\n}\n.ui-datepicker-multi .ui-datepicker-group table {\n\twidth: 95%;\n\tmargin: 0 auto .4em;\n}\n.ui-datepicker-multi-2 .ui-datepicker-group {\n\twidth: 50%;\n}\n.ui-datepicker-multi-3 .ui-datepicker-group {\n\twidth: 33.3%;\n}\n.ui-datepicker-multi-4 .ui-datepicker-group {\n\twidth: 25%;\n}\n.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {\n\tborder-left-width: 0;\n}\n.ui-datepicker-multi .ui-datepicker-buttonpane {\n\tclear: left;\n}\n.ui-datepicker-row-break {\n\tclear: both;\n\twidth: 100%;\n\tfont-size: 0;\n}\n\n/* RTL support */\n.ui-datepicker-rtl {\n\tdirection: rtl;\n}\n.ui-datepicker-rtl .ui-datepicker-prev {\n\tright: 2px;\n\tleft: auto;\n}\n.ui-datepicker-rtl .ui-datepicker-next {\n\tleft: 2px;\n\tright: auto;\n}\n.ui-datepicker-rtl .ui-datepicker-prev:hover {\n\tright: 1px;\n\tleft: auto;\n}\n.ui-datepicker-rtl .ui-datepicker-next:hover {\n\tleft: 1px;\n\tright: auto;\n}\n.ui-datepicker-rtl .ui-datepicker-buttonpane {\n\tclear: right;\n}\n.ui-datepicker-rtl .ui-datepicker-buttonpane button {\n\tfloat: left;\n}\n.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,\n.ui-datepicker-rtl .ui-datepicker-group {\n\tfloat: right;\n}\n.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {\n\tborder-right-width: 0;\n\tborder-left-width: 1px;\n}\n\n/* Icons */\n.ui-datepicker .ui-icon {\n\tdisplay: block;\n\ttext-indent: -99999px;\n\toverflow: hidden;\n\tbackground-repeat: no-repeat;\n\tleft: .5em;\n\ttop: .3em;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(90);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Dialog 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/dialog/#theming\n */\n.ui-dialog {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: .2em;\n\toutline: 0;\n}\n.ui-dialog .ui-dialog-titlebar {\n\tpadding: .4em 1em;\n\tposition: relative;\n}\n.ui-dialog .ui-dialog-title {\n\tfloat: left;\n\tmargin: .1em 0;\n\twhite-space: nowrap;\n\twidth: 90%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.ui-dialog .ui-dialog-titlebar-close {\n\tposition: absolute;\n\tright: .3em;\n\ttop: 50%;\n\twidth: 20px;\n\tmargin: -10px 0 0 0;\n\tpadding: 1px;\n\theight: 20px;\n}\n.ui-dialog .ui-dialog-content {\n\tposition: relative;\n\tborder: 0;\n\tpadding: .5em 1em;\n\tbackground: none;\n\toverflow: auto;\n}\n.ui-dialog .ui-dialog-buttonpane {\n\ttext-align: left;\n\tborder-width: 1px 0 0 0;\n\tbackground-image: none;\n\tmargin-top: .5em;\n\tpadding: .3em 1em .5em .4em;\n}\n.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {\n\tfloat: right;\n}\n.ui-dialog .ui-dialog-buttonpane button {\n\tmargin: .5em .4em .5em 0;\n\tcursor: pointer;\n}\n.ui-dialog .ui-resizable-n {\n\theight: 2px;\n\ttop: 0;\n}\n.ui-dialog .ui-resizable-e {\n\twidth: 2px;\n\tright: 0;\n}\n.ui-dialog .ui-resizable-s {\n\theight: 2px;\n\tbottom: 0;\n}\n.ui-dialog .ui-resizable-w {\n\twidth: 2px;\n\tleft: 0;\n}\n.ui-dialog .ui-resizable-se,\n.ui-dialog .ui-resizable-sw,\n.ui-dialog .ui-resizable-ne,\n.ui-dialog .ui-resizable-nw {\n\twidth: 7px;\n\theight: 7px;\n}\n.ui-dialog .ui-resizable-se {\n\tright: 0;\n\tbottom: 0;\n}\n.ui-dialog .ui-resizable-sw {\n\tleft: 0;\n\tbottom: 0;\n}\n.ui-dialog .ui-resizable-ne {\n\tright: 0;\n\ttop: 0;\n}\n.ui-dialog .ui-resizable-nw {\n\tleft: 0;\n\ttop: 0;\n}\n.ui-draggable .ui-dialog-titlebar {\n\tcursor: move;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(92);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, '/*!\n * jQuery UI Menu 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/menu/#theming\n */\n.ui-menu {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tdisplay: block;\n\toutline: 0;\n}\n.ui-menu .ui-menu {\n\tposition: absolute;\n}\n.ui-menu .ui-menu-item {\n\tmargin: 0;\n\tcursor: pointer;\n\t/* support: IE10, see #8844 */\n\tlist-style-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");\n}\n.ui-menu .ui-menu-item-wrapper {\n\tposition: relative;\n\tpadding: 3px 1em 3px .4em;\n}\n.ui-menu .ui-menu-divider {\n\tmargin: 5px 0;\n\theight: 0;\n\tfont-size: 0;\n\tline-height: 0;\n\tborder-width: 1px 0 0 0;\n}\n.ui-menu .ui-state-focus,\n.ui-menu .ui-state-active {\n\tmargin: -1px;\n}\n\n/* icon support */\n.ui-menu-icons {\n\tposition: relative;\n}\n.ui-menu-icons .ui-menu-item-wrapper {\n\tpadding-left: 2em;\n}\n\n/* left-aligned */\n.ui-menu .ui-icon {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: .2em;\n\tmargin: auto 0;\n}\n\n/* right-aligned */\n.ui-menu .ui-menu-icon {\n\tleft: auto;\n\tright: 0;\n}\n', ""])
}
, function(t, e, i) {
    var n = i(94);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, '/*!\n * jQuery UI Progressbar 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/progressbar/#theming\n */\n.ui-progressbar {\n\theight: 2em;\n\ttext-align: left;\n\toverflow: hidden;\n}\n.ui-progressbar .ui-progressbar-value {\n\tmargin: -1px;\n\theight: 100%;\n}\n.ui-progressbar .ui-progressbar-overlay {\n\tbackground: url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==");\n\theight: 100%;\n\tfilter: alpha(opacity=25); /* support: IE8 */\n\topacity: 0.25;\n}\n.ui-progressbar-indeterminate .ui-progressbar-value {\n\tbackground-image: none;\n}\n', ""])
}
, function(t, e, i) {
    var n = i(96);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Selectmenu 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/selectmenu/#theming\n */\n.ui-selectmenu-menu {\n\tpadding: 0;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: none;\n}\n.ui-selectmenu-menu .ui-menu {\n\toverflow: auto;\n\toverflow-x: hidden;\n\tpadding-bottom: 1px;\n}\n.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup {\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tline-height: 1.5;\n\tpadding: 2px 0.4em;\n\tmargin: 0.5em 0 0 0;\n\theight: auto;\n\tborder: 0;\n}\n.ui-selectmenu-open {\n\tdisplay: block;\n}\n.ui-selectmenu-text {\n\tdisplay: block;\n\tmargin-right: 20px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.ui-selectmenu-button.ui-button {\n\ttext-align: left;\n\twhite-space: nowrap;\n\twidth: 14em;\n}\n.ui-selectmenu-icon.ui-icon {\n\tfloat: right;\n\tmargin-top: 0;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(98);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Slider 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/slider/#theming\n */\n.ui-slider {\n\tposition: relative;\n\ttext-align: left;\n}\n.ui-slider .ui-slider-handle {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 1.2em;\n\theight: 1.2em;\n\tcursor: default;\n\ttouch-action: none;\n}\n.ui-slider .ui-slider-range {\n\tposition: absolute;\n\tz-index: 1;\n\tfont-size: .7em;\n\tdisplay: block;\n\tborder: 0;\n\tbackground-position: 0 0;\n}\n\n/* support: IE8 - See #6727 */\n.ui-slider.ui-state-disabled .ui-slider-handle,\n.ui-slider.ui-state-disabled .ui-slider-range {\n\t-webkit-filter: inherit;\n\t        filter: inherit;\n}\n\n.ui-slider-horizontal {\n\theight: .8em;\n}\n.ui-slider-horizontal .ui-slider-handle {\n\ttop: -.3em;\n\tmargin-left: -.6em;\n}\n.ui-slider-horizontal .ui-slider-range {\n\ttop: 0;\n\theight: 100%;\n}\n.ui-slider-horizontal .ui-slider-range-min {\n\tleft: 0;\n}\n.ui-slider-horizontal .ui-slider-range-max {\n\tright: 0;\n}\n\n.ui-slider-vertical {\n\twidth: .8em;\n\theight: 100px;\n}\n.ui-slider-vertical .ui-slider-handle {\n\tleft: -.3em;\n\tmargin-left: 0;\n\tmargin-bottom: -.6em;\n}\n.ui-slider-vertical .ui-slider-range {\n\tleft: 0;\n\twidth: 100%;\n}\n.ui-slider-vertical .ui-slider-range-min {\n\tbottom: 0;\n}\n.ui-slider-vertical .ui-slider-range-max {\n\ttop: 0;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(100);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Spinner 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/spinner/#theming\n */\n.ui-spinner {\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: 0;\n\tvertical-align: middle;\n}\n.ui-spinner-input {\n\tborder: none;\n\tbackground: none;\n\tcolor: inherit;\n\tpadding: .222em 0;\n\tmargin: .2em 0;\n\tvertical-align: middle;\n\tmargin-left: .4em;\n\tmargin-right: 2em;\n}\n.ui-spinner-button {\n\twidth: 1.6em;\n\theight: 50%;\n\tfont-size: .5em;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: center;\n\tposition: absolute;\n\tcursor: default;\n\tdisplay: block;\n\toverflow: hidden;\n\tright: 0;\n}\n/* more specificity required here to override default borders */\n.ui-spinner a.ui-spinner-button {\n\tborder-top-style: none;\n\tborder-bottom-style: none;\n\tborder-right-style: none;\n}\n.ui-spinner-up {\n\ttop: 0;\n}\n.ui-spinner-down {\n\tbottom: 0;\n}\n", ""])
}
, function(t, e, i) {
    var n = i(102);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, '/*!\n * jQuery UI Tabs 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/tabs/#theming\n */\n.ui-tabs {\n\tposition: relative;/* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */\n\tpadding: .2em;\n}\n.ui-tabs .ui-tabs-nav {\n\tmargin: 0;\n\tpadding: .2em .2em 0;\n}\n.ui-tabs .ui-tabs-nav li {\n\tlist-style: none;\n\tfloat: left;\n\tposition: relative;\n\ttop: 0;\n\tmargin: 1px .2em 0 0;\n\tborder-bottom-width: 0;\n\tpadding: 0;\n\twhite-space: nowrap;\n}\n.ui-tabs .ui-tabs-nav .ui-tabs-anchor {\n\tfloat: left;\n\tpadding: .5em 1em;\n\ttext-decoration: none;\n}\n.ui-tabs .ui-tabs-nav li.ui-tabs-active {\n\tmargin-bottom: -1px;\n\tpadding-bottom: 1px;\n}\n.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor {\n\tcursor: text;\n}\n.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor {\n\tcursor: pointer;\n}\n.ui-tabs .ui-tabs-panel {\n\tdisplay: block;\n\tborder-width: 0;\n\tpadding: 1em 1.4em;\n\tbackground: none;\n}\n', ""])
}
, function(t, e, i) {
    var n = i(104);
    "string" == typeof n && (n = [[t.i, n, ""]]);
    var s = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    i(4)(n, s);
    n.locals && (t.exports = n.locals)
}
, function(t, e, i) {
    (t.exports = i(3)(!1)).push([t.i, "/*!\n * jQuery UI Tooltip 1.12.1\n * http://jqueryui.com\n *\n * Copyright jQuery Foundation and other contributors\n * Released under the MIT license.\n * http://jquery.org/license\n *\n * http://api.jqueryui.com/tooltip/#theming\n */\n.ui-tooltip {\n\tpadding: 8px;\n\tposition: absolute;\n\tz-index: 9999;\n\tmax-width: 300px;\n}\nbody .ui-tooltip {\n\tborder-width: 2px;\n}\n", ""])
}
, function(t, e, i) {
    !function(t, e, i) {
        "use strict";
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function s(t, e, i) {
            return e && n(t.prototype, e),
            i && n(t, i),
            t
        }
        function o(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                }))),
                n.forEach(function(e) {
                    o(t, e, i[e])
                })
            }
            return t
        }
        e = e && e.hasOwnProperty("default") ? e.default : e,
        i = i && i.hasOwnProperty("default") ? i.default : i;
        var a = "transitionend";
        function l(t) {
            var i = this
              , n = !1;
            return e(this).one(c.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || c.triggerTransitionEnd(i)
            }, t),
            this
        }
        var c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var i = t.getAttribute("href");
                    e = i && "#" !== i ? i.trim() : ""
                }
                try {
                    return document.querySelector(e) ? e : null
                } catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t)
                    return 0;
                var i = e(t).css("transition-duration")
                  , n = e(t).css("transition-delay")
                  , s = parseFloat(i)
                  , o = parseFloat(n);
                return s || o ? (i = i.split(",")[0],
                n = n.split(",")[0],
                1e3 * (parseFloat(i) + parseFloat(n))) : 0
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                e(t).trigger(a)
            },
            supportsTransitionEnd: function() {
                return Boolean(a)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var s = i[n]
                          , o = e[n]
                          , r = o && c.isElement(o) ? "element" : (a = o,
                        {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(s).test(r))
                            throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + s + '".')
                    }
                var a
            },
            findShadowRoot: function(t) {
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null
            }
        };
        e.fn.emulateTransitionEnd = l,
        e.event.special[c.TRANSITION_END] = {
            bindType: a,
            delegateType: a,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
        var u = e.fn.alert
          , h = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        }
          , d = {
            ALERT: "alert",
            FADE: "fade",
            SHOW: "show"
        }
          , p = function() {
            function t(t) {
                this._element = t
            }
            var i = t.prototype;
            return i.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t));
                var i = this._triggerCloseEvent(e);
                i.isDefaultPrevented() || this._removeElement(e)
            }
            ,
            i.dispose = function() {
                e.removeData(this._element, "bs.alert"),
                this._element = null
            }
            ,
            i._getRootElement = function(t) {
                var i = c.getSelectorFromElement(t)
                  , n = !1;
                return i && (n = document.querySelector(i)),
                n || (n = e(t).closest("." + d.ALERT)[0]),
                n
            }
            ,
            i._triggerCloseEvent = function(t) {
                var i = e.Event(h.CLOSE);
                return e(t).trigger(i),
                i
            }
            ,
            i._removeElement = function(t) {
                var i = this;
                if (e(t).removeClass(d.SHOW),
                e(t).hasClass(d.FADE)) {
                    var n = c.getTransitionDurationFromElement(t);
                    e(t).one(c.TRANSITION_END, function(e) {
                        return i._destroyElement(t, e)
                    }).emulateTransitionEnd(n)
                } else
                    this._destroyElement(t)
            }
            ,
            i._destroyElement = function(t) {
                e(t).detach().trigger(h.CLOSED).remove()
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this)
                      , s = n.data("bs.alert");
                    s || (s = new t(this),
                    n.data("bs.alert", s)),
                    "close" === i && s[i](this)
                })
            }
            ,
            t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(),
                    t.close(this)
                }
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]),
            t
        }();
        e(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
        e.fn.alert = p._jQueryInterface,
        e.fn.alert.Constructor = p,
        e.fn.alert.noConflict = function() {
            return e.fn.alert = u,
            p._jQueryInterface
        }
        ;
        var f = e.fn.button
          , m = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }
          , g = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input:not([type="hidden"])',
            ACTIVE: ".active",
            BUTTON: ".btn"
        }
          , v = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }
          , _ = function() {
            function t(t) {
                this._element = t
            }
            var i = t.prototype;
            return i.toggle = function() {
                var t = !0
                  , i = !0
                  , n = e(this._element).closest(g.DATA_TOGGLE)[0];
                if (n) {
                    var s = this._element.querySelector(g.INPUT);
                    if (s) {
                        if ("radio" === s.type)
                            if (s.checked && this._element.classList.contains(m.ACTIVE))
                                t = !1;
                            else {
                                var o = n.querySelector(g.ACTIVE);
                                o && e(o).removeClass(m.ACTIVE)
                            }
                        if (t) {
                            if (s.hasAttribute("disabled") || n.hasAttribute("disabled") || s.classList.contains("disabled") || n.classList.contains("disabled"))
                                return;
                            s.checked = !this._element.classList.contains(m.ACTIVE),
                            e(s).trigger("change")
                        }
                        s.focus(),
                        i = !1
                    }
                }
                i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(m.ACTIVE)),
                t && e(this._element).toggleClass(m.ACTIVE)
            }
            ,
            i.dispose = function() {
                e.removeData(this._element, "bs.button"),
                this._element = null
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data("bs.button");
                    n || (n = new t(this),
                    e(this).data("bs.button", n)),
                    "toggle" === i && n[i]()
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]),
            t
        }();
        e(document).on(v.CLICK_DATA_API, g.DATA_TOGGLE_CARROT, function(t) {
            t.preventDefault();
            var i = t.target;
            e(i).hasClass(m.BUTTON) || (i = e(i).closest(g.BUTTON)),
            _._jQueryInterface.call(e(i), "toggle")
        }).on(v.FOCUS_BLUR_DATA_API, g.DATA_TOGGLE_CARROT, function(t) {
            var i = e(t.target).closest(g.BUTTON)[0];
            e(i).toggleClass(m.FOCUS, /^focus(in)?$/.test(t.type))
        }),
        e.fn.button = _._jQueryInterface,
        e.fn.button.Constructor = _,
        e.fn.button.noConflict = function() {
            return e.fn.button = f,
            _._jQueryInterface
        }
        ;
        var b = "carousel"
          , y = ".bs.carousel"
          , w = e.fn[b]
          , x = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        }
          , C = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }
          , T = {
            NEXT: "next",
            PREV: "prev",
            LEFT: "left",
            RIGHT: "right"
        }
          , k = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }
          , S = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item",
            POINTER_EVENT: "pointer-event"
        }
          , D = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , E = {
            TOUCH: "touch",
            PEN: "pen"
        }
          , I = function() {
            function t(t, e) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this.touchStartX = 0,
                this.touchDeltaX = 0,
                this._config = this._getConfig(e),
                this._element = t,
                this._indicatorsElement = this._element.querySelector(D.INDICATORS),
                this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                this._addEventListeners()
            }
            var i = t.prototype;
            return i.next = function() {
                this._isSliding || this._slide(T.NEXT)
            }
            ,
            i.nextWhenVisible = function() {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }
            ,
            i.prev = function() {
                this._isSliding || this._slide(T.PREV)
            }
            ,
            i.pause = function(t) {
                t || (this._isPaused = !0),
                this._element.querySelector(D.NEXT_PREV) && (c.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            i.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            i.to = function(t) {
                var i = this;
                this._activeElement = this._element.querySelector(D.ACTIVE_ITEM);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                        e(this._element).one(k.SLID, function() {
                            return i.to(t)
                        });
                    else {
                        if (n === t)
                            return this.pause(),
                            void this.cycle();
                        var s = t > n ? T.NEXT : T.PREV;
                        this._slide(s, this._items[t])
                    }
            }
            ,
            i.dispose = function() {
                e(this._element).off(y),
                e.removeData(this._element, "bs.carousel"),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            i._getConfig = function(t) {
                return t = r({}, x, t),
                c.typeCheckConfig(b, t, C),
                t
            }
            ,
            i._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    e > 0 && this.prev(),
                    e < 0 && this.next()
                }
            }
            ,
            i._addEventListeners = function() {
                var t = this;
                this._config.keyboard && e(this._element).on(k.KEYDOWN, function(e) {
                    return t._keydown(e)
                }),
                "hover" === this._config.pause && e(this._element).on(k.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(k.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }),
                this._config.touch && this._addTouchEventListeners()
            }
            ,
            i._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var i = function(e) {
                        t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                    }
                      , n = function(e) {
                        t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                        t._handleSwipe(),
                        "hover" === t._config.pause && (t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        t.touchTimeout = setTimeout(function(e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval))
                    };
                    e(this._element.querySelectorAll(D.ITEM_IMG)).on(k.DRAG_START, function(t) {
                        return t.preventDefault()
                    }),
                    this._pointerEvent ? (e(this._element).on(k.POINTERDOWN, function(t) {
                        return i(t)
                    }),
                    e(this._element).on(k.POINTERUP, function(t) {
                        return n(t)
                    }),
                    this._element.classList.add(S.POINTER_EVENT)) : (e(this._element).on(k.TOUCHSTART, function(t) {
                        return i(t)
                    }),
                    e(this._element).on(k.TOUCHMOVE, function(e) {
                        return function(e) {
                            e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                        }(e)
                    }),
                    e(this._element).on(k.TOUCHEND, function(t) {
                        return n(t)
                    }))
                }
            }
            ,
            i._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next()
                    }
            }
            ,
            i._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(D.ITEM)) : [],
                this._items.indexOf(t)
            }
            ,
            i._getItemByDirection = function(t, e) {
                var i = t === T.NEXT
                  , n = t === T.PREV
                  , s = this._getItemIndex(e)
                  , o = this._items.length - 1
                  , r = n && 0 === s || i && s === o;
                if (r && !this._config.wrap)
                    return e;
                var a = t === T.PREV ? -1 : 1
                  , l = (s + a) % this._items.length;
                return -1 === l ? this._items[this._items.length - 1] : this._items[l]
            }
            ,
            i._triggerSlideEvent = function(t, i) {
                var n = this._getItemIndex(t)
                  , s = this._getItemIndex(this._element.querySelector(D.ACTIVE_ITEM))
                  , o = e.Event(k.SLIDE, {
                    relatedTarget: t,
                    direction: i,
                    from: s,
                    to: n
                });
                return e(this._element).trigger(o),
                o
            }
            ,
            i._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var i = [].slice.call(this._indicatorsElement.querySelectorAll(D.ACTIVE));
                    e(i).removeClass(S.ACTIVE);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && e(n).addClass(S.ACTIVE)
                }
            }
            ,
            i._slide = function(t, i) {
                var n, s, o, r = this, a = this._element.querySelector(D.ACTIVE_ITEM), l = this._getItemIndex(a), u = i || a && this._getItemByDirection(t, a), h = this._getItemIndex(u), d = Boolean(this._interval);
                if (t === T.NEXT ? (n = S.LEFT,
                s = S.NEXT,
                o = T.LEFT) : (n = S.RIGHT,
                s = S.PREV,
                o = T.RIGHT),
                u && e(u).hasClass(S.ACTIVE))
                    this._isSliding = !1;
                else {
                    var p = this._triggerSlideEvent(u, o);
                    if (!p.isDefaultPrevented() && a && u) {
                        this._isSliding = !0,
                        d && this.pause(),
                        this._setActiveIndicatorElement(u);
                        var f = e.Event(k.SLID, {
                            relatedTarget: u,
                            direction: o,
                            from: l,
                            to: h
                        });
                        if (e(this._element).hasClass(S.SLIDE)) {
                            e(u).addClass(s),
                            c.reflow(u),
                            e(a).addClass(n),
                            e(u).addClass(n);
                            var m = parseInt(u.getAttribute("data-interval"), 10);
                            m ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                            this._config.interval = m) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = c.getTransitionDurationFromElement(a);
                            e(a).one(c.TRANSITION_END, function() {
                                e(u).removeClass(n + " " + s).addClass(S.ACTIVE),
                                e(a).removeClass(S.ACTIVE + " " + s + " " + n),
                                r._isSliding = !1,
                                setTimeout(function() {
                                    return e(r._element).trigger(f)
                                }, 0)
                            }).emulateTransitionEnd(g)
                        } else
                            e(a).removeClass(S.ACTIVE),
                            e(u).addClass(S.ACTIVE),
                            this._isSliding = !1,
                            e(this._element).trigger(f);
                        d && this.cycle()
                    }
                }
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data("bs.carousel")
                      , s = r({}, x, e(this).data());
                    "object" == typeof i && (s = r({}, s, i));
                    var o = "string" == typeof i ? i : s.slide;
                    if (n || (n = new t(this,s),
                    e(this).data("bs.carousel", n)),
                    "number" == typeof i)
                        n.to(i);
                    else if ("string" == typeof o) {
                        if (void 0 === n[o])
                            throw new TypeError('No method named "' + o + '"');
                        n[o]()
                    } else
                        s.interval && s.ride && (n.pause(),
                        n.cycle())
                })
            }
            ,
            t._dataApiClickHandler = function(i) {
                var n = c.getSelectorFromElement(this);
                if (n) {
                    var s = e(n)[0];
                    if (s && e(s).hasClass(S.CAROUSEL)) {
                        var o = r({}, e(s).data(), e(this).data())
                          , a = this.getAttribute("data-slide-to");
                        a && (o.interval = !1),
                        t._jQueryInterface.call(e(s), o),
                        a && e(s).data("bs.carousel").to(a),
                        i.preventDefault()
                    }
                }
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return x
                }
            }]),
            t
        }();
        e(document).on(k.CLICK_DATA_API, D.DATA_SLIDE, I._dataApiClickHandler),
        e(window).on(k.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(D.DATA_RIDE)), i = 0, n = t.length; i < n; i++) {
                var s = e(t[i]);
                I._jQueryInterface.call(s, s.data())
            }
        }),
        e.fn[b] = I._jQueryInterface,
        e.fn[b].Constructor = I,
        e.fn[b].noConflict = function() {
            return e.fn[b] = w,
            I._jQueryInterface
        }
        ;
        var A = "collapse"
          , O = e.fn[A]
          , N = {
            toggle: !0,
            parent: ""
        }
          , P = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , M = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        }
          , H = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }
          , L = {
            WIDTH: "width",
            HEIGHT: "height"
        }
          , R = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , W = function() {
            function t(t, e) {
                this._isTransitioning = !1,
                this._element = t,
                this._config = this._getConfig(e),
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(R.DATA_TOGGLE)), n = 0, s = i.length; n < s; n++) {
                    var o = i[n]
                      , r = c.getSelectorFromElement(o)
                      , a = [].slice.call(document.querySelectorAll(r)).filter(function(e) {
                        return e === t
                    });
                    null !== r && a.length > 0 && (this._selector = r,
                    this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var i = t.prototype;
            return i.toggle = function() {
                e(this._element).hasClass(H.SHOW) ? this.hide() : this.show()
            }
            ,
            i.show = function() {
                var i, n, s = this;
                if (!(this._isTransitioning || e(this._element).hasClass(H.SHOW) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(R.ACTIVES)).filter(function(t) {
                    return "string" == typeof s._config.parent ? t.getAttribute("data-parent") === s._config.parent : t.classList.contains(H.COLLAPSE)
                })).length && (i = null),
                i && (n = e(i).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                    var o = e.Event(M.SHOW);
                    if (e(this._element).trigger(o),
                    !o.isDefaultPrevented()) {
                        i && (t._jQueryInterface.call(e(i).not(this._selector), "hide"),
                        n || e(i).data("bs.collapse", null));
                        var r = this._getDimension();
                        e(this._element).removeClass(H.COLLAPSE).addClass(H.COLLAPSING),
                        this._element.style[r] = 0,
                        this._triggerArray.length && e(this._triggerArray).removeClass(H.COLLAPSED).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var a = r[0].toUpperCase() + r.slice(1)
                          , l = "scroll" + a
                          , u = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, function() {
                            e(s._element).removeClass(H.COLLAPSING).addClass(H.COLLAPSE).addClass(H.SHOW),
                            s._element.style[r] = "",
                            s.setTransitioning(!1),
                            e(s._element).trigger(M.SHOWN)
                        }).emulateTransitionEnd(u),
                        this._element.style[r] = this._element[l] + "px"
                    }
                }
            }
            ,
            i.hide = function() {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(H.SHOW)) {
                    var i = e.Event(M.HIDE);
                    if (e(this._element).trigger(i),
                    !i.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                        c.reflow(this._element),
                        e(this._element).addClass(H.COLLAPSING).removeClass(H.COLLAPSE).removeClass(H.SHOW);
                        var s = this._triggerArray.length;
                        if (s > 0)
                            for (var o = 0; o < s; o++) {
                                var r = this._triggerArray[o]
                                  , a = c.getSelectorFromElement(r);
                                if (null !== a) {
                                    var l = e([].slice.call(document.querySelectorAll(a)));
                                    l.hasClass(H.SHOW) || e(r).addClass(H.COLLAPSED).attr("aria-expanded", !1)
                                }
                            }
                        this.setTransitioning(!0),
                        this._element.style[n] = "";
                        var u = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, function() {
                            t.setTransitioning(!1),
                            e(t._element).removeClass(H.COLLAPSING).addClass(H.COLLAPSE).trigger(M.HIDDEN)
                        }).emulateTransitionEnd(u)
                    }
                }
            }
            ,
            i.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            i.dispose = function() {
                e.removeData(this._element, "bs.collapse"),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            i._getConfig = function(t) {
                return (t = r({}, N, t)).toggle = Boolean(t.toggle),
                c.typeCheckConfig(A, t, P),
                t
            }
            ,
            i._getDimension = function() {
                var t = e(this._element).hasClass(L.WIDTH);
                return t ? L.WIDTH : L.HEIGHT
            }
            ,
            i._getParent = function() {
                var i, n = this;
                c.isElement(this._config.parent) ? (i = this._config.parent,
                void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = document.querySelector(this._config.parent);
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                  , o = [].slice.call(i.querySelectorAll(s));
                return e(o).each(function(e, i) {
                    n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                }),
                i
            }
            ,
            i._addAriaAndCollapsedClass = function(t, i) {
                var n = e(t).hasClass(H.SHOW);
                i.length && e(i).toggleClass(H.COLLAPSED, !n).attr("aria-expanded", n)
            }
            ,
            t._getTargetFromElement = function(t) {
                var e = c.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this)
                      , s = n.data("bs.collapse")
                      , o = r({}, N, n.data(), "object" == typeof i && i ? i : {});
                    if (!s && o.toggle && /show|hide/.test(i) && (o.toggle = !1),
                    s || (s = new t(this,o),
                    n.data("bs.collapse", s)),
                    "string" == typeof i) {
                        if (void 0 === s[i])
                            throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return N
                }
            }]),
            t
        }();
        e(document).on(M.CLICK_DATA_API, R.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this)
              , n = c.getSelectorFromElement(this)
              , s = [].slice.call(document.querySelectorAll(n));
            e(s).each(function() {
                var t = e(this)
                  , n = t.data("bs.collapse")
                  , s = n ? "toggle" : i.data();
                W._jQueryInterface.call(t, s)
            })
        }),
        e.fn[A] = W._jQueryInterface,
        e.fn[A].Constructor = W,
        e.fn[A].noConflict = function() {
            return e.fn[A] = O,
            W._jQueryInterface
        }
        ;
        var j = "dropdown"
          , z = e.fn[j]
          , F = new RegExp("38|40|27")
          , B = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }
          , q = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
        }
          , U = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
        }
          , V = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
        }
          , Y = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }
          , K = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }
          , Q = function() {
            function t(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !e(this._element).hasClass(q.DISABLED)) {
                    var n = t._getParentFromElement(this._element)
                      , s = e(this._menu).hasClass(q.SHOW);
                    if (t._clearMenus(),
                    !s) {
                        var o = {
                            relatedTarget: this._element
                        }
                          , r = e.Event(B.SHOW, o);
                        if (e(n).trigger(r),
                        !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === i)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = n : c.isElement(this._config.reference) && (a = this._config.reference,
                                void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                "scrollParent" !== this._config.boundary && e(n).addClass(q.POSITION_STATIC),
                                this._popper = new i(a,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === e(n).closest(U.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            e(this._menu).toggleClass(q.SHOW),
                            e(n).toggleClass(q.SHOW).trigger(e.Event(B.SHOWN, o))
                        }
                    }
                }
            }
            ,
            n.show = function() {
                if (!(this._element.disabled || e(this._element).hasClass(q.DISABLED) || e(this._menu).hasClass(q.SHOW))) {
                    var i = {
                        relatedTarget: this._element
                    }
                      , n = e.Event(B.SHOW, i)
                      , s = t._getParentFromElement(this._element);
                    e(s).trigger(n),
                    n.isDefaultPrevented() || (e(this._menu).toggleClass(q.SHOW),
                    e(s).toggleClass(q.SHOW).trigger(e.Event(B.SHOWN, i)))
                }
            }
            ,
            n.hide = function() {
                if (!this._element.disabled && !e(this._element).hasClass(q.DISABLED) && e(this._menu).hasClass(q.SHOW)) {
                    var i = {
                        relatedTarget: this._element
                    }
                      , n = e.Event(B.HIDE, i)
                      , s = t._getParentFromElement(this._element);
                    e(s).trigger(n),
                    n.isDefaultPrevented() || (e(this._menu).toggleClass(q.SHOW),
                    e(s).toggleClass(q.SHOW).trigger(e.Event(B.HIDDEN, i)))
                }
            }
            ,
            n.dispose = function() {
                e.removeData(this._element, "bs.dropdown"),
                e(this._element).off(".bs.dropdown"),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            n.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            n._addEventListeners = function() {
                var t = this;
                e(this._element).on(B.CLICK, function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.toggle()
                })
            }
            ,
            n._getConfig = function(t) {
                return t = r({}, this.constructor.Default, e(this._element).data(), t),
                c.typeCheckConfig(j, t, this.constructor.DefaultType),
                t
            }
            ,
            n._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(U.MENU))
                }
                return this._menu
            }
            ,
            n._getPlacement = function() {
                var t = e(this._element.parentNode)
                  , i = V.BOTTOM;
                return t.hasClass(q.DROPUP) ? (i = V.TOP,
                e(this._menu).hasClass(q.MENURIGHT) && (i = V.TOPEND)) : t.hasClass(q.DROPRIGHT) ? i = V.RIGHT : t.hasClass(q.DROPLEFT) ? i = V.LEFT : e(this._menu).hasClass(q.MENURIGHT) && (i = V.BOTTOMEND),
                i
            }
            ,
            n._detectNavbar = function() {
                return e(this._element).closest(".navbar").length > 0
            }
            ,
            n._getOffset = function() {
                var t = this
                  , e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
                    e
                }
                : e.offset = this._config.offset,
                e
            }
            ,
            n._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }),
                t
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data("bs.dropdown")
                      , s = "object" == typeof i ? i : null;
                    if (n || (n = new t(this,s),
                    e(this).data("bs.dropdown", n)),
                    "string" == typeof i) {
                        if (void 0 === n[i])
                            throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }
            ,
            t._clearMenus = function(i) {
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var n = [].slice.call(document.querySelectorAll(U.DATA_TOGGLE)), s = 0, o = n.length; s < o; s++) {
                        var r = t._getParentFromElement(n[s])
                          , a = e(n[s]).data("bs.dropdown")
                          , l = {
                            relatedTarget: n[s]
                        };
                        if (i && "click" === i.type && (l.clickEvent = i),
                        a) {
                            var c = a._menu;
                            if (e(r).hasClass(q.SHOW) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && e.contains(r, i.target))) {
                                var u = e.Event(B.HIDE, l);
                                e(r).trigger(u),
                                u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                n[s].setAttribute("aria-expanded", "false"),
                                e(c).removeClass(q.SHOW),
                                e(r).removeClass(q.SHOW).trigger(e.Event(B.HIDDEN, l)))
                            }
                        }
                    }
            }
            ,
            t._getParentFromElement = function(t) {
                var e, i = c.getSelectorFromElement(t);
                return i && (e = document.querySelector(i)),
                e || t.parentNode
            }
            ,
            t._dataApiKeydownHandler = function(i) {
                if ((/input|textarea/i.test(i.target.tagName) ? !(32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || e(i.target).closest(U.MENU).length)) : F.test(i.which)) && (i.preventDefault(),
                i.stopPropagation(),
                !this.disabled && !e(this).hasClass(q.DISABLED))) {
                    var n = t._getParentFromElement(this)
                      , s = e(n).hasClass(q.SHOW);
                    if (s && (!s || 27 !== i.which && 32 !== i.which)) {
                        var o = [].slice.call(n.querySelectorAll(U.VISIBLE_ITEMS));
                        if (0 !== o.length) {
                            var r = o.indexOf(i.target);
                            38 === i.which && r > 0 && r--,
                            40 === i.which && r < o.length - 1 && r++,
                            r < 0 && (r = 0),
                            o[r].focus()
                        }
                    } else {
                        if (27 === i.which) {
                            var a = n.querySelector(U.DATA_TOGGLE);
                            e(a).trigger("focus")
                        }
                        e(this).trigger("click")
                    }
                }
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Y
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return K
                }
            }]),
            t
        }();
        e(document).on(B.KEYDOWN_DATA_API, U.DATA_TOGGLE, Q._dataApiKeydownHandler).on(B.KEYDOWN_DATA_API, U.MENU, Q._dataApiKeydownHandler).on(B.CLICK_DATA_API + " " + B.KEYUP_DATA_API, Q._clearMenus).on(B.CLICK_DATA_API, U.DATA_TOGGLE, function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            Q._jQueryInterface.call(e(this), "toggle")
        }).on(B.CLICK_DATA_API, U.FORM_CHILD, function(t) {
            t.stopPropagation()
        }),
        e.fn[j] = Q._jQueryInterface,
        e.fn[j].Constructor = Q,
        e.fn[j].noConflict = function() {
            return e.fn[j] = z,
            Q._jQueryInterface
        }
        ;
        var G = e.fn.modal
          , X = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , $ = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , J = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        }
          , Z = {
            SCROLLABLE: "modal-dialog-scrollable",
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        }
          , tt = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }
          , et = function() {
            function t(t, e) {
                this._config = this._getConfig(e),
                this._element = t,
                this._dialog = t.querySelector(tt.DIALOG),
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._isTransitioning = !1,
                this._scrollbarWidth = 0
            }
            var i = t.prototype;
            return i.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            i.show = function(t) {
                var i = this;
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass(Z.FADE) && (this._isTransitioning = !0);
                    var n = e.Event(J.SHOW, {
                        relatedTarget: t
                    });
                    e(this._element).trigger(n),
                    this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(J.CLICK_DISMISS, tt.DATA_DISMISS, function(t) {
                        return i.hide(t)
                    }),
                    e(this._dialog).on(J.MOUSEDOWN_DISMISS, function() {
                        e(i._element).one(J.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return i._showElement(t)
                    }))
                }
            }
            ,
            i.hide = function(t) {
                var i = this;
                if (t && t.preventDefault(),
                this._isShown && !this._isTransitioning) {
                    var n = e.Event(J.HIDE);
                    if (e(this._element).trigger(n),
                    this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = e(this._element).hasClass(Z.FADE);
                        if (s && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(J.FOCUSIN),
                        e(this._element).removeClass(Z.SHOW),
                        e(this._element).off(J.CLICK_DISMISS),
                        e(this._dialog).off(J.MOUSEDOWN_DISMISS),
                        s) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, function(t) {
                                return i._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else
                            this._hideModal()
                    }
                }
            }
            ,
            i.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return e(t).off(".bs.modal")
                }),
                e(document).off(J.FOCUSIN),
                e.removeData(this._element, "bs.modal"),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._isTransitioning = null,
                this._scrollbarWidth = null
            }
            ,
            i.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            i._getConfig = function(t) {
                return t = r({}, X, t),
                c.typeCheckConfig("modal", t, $),
                t
            }
            ,
            i._showElement = function(t) {
                var i = this
                  , n = e(this._element).hasClass(Z.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                e(this._dialog).hasClass(Z.SCROLLABLE) ? this._dialog.querySelector(tt.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0,
                n && c.reflow(this._element),
                e(this._element).addClass(Z.SHOW),
                this._config.focus && this._enforceFocus();
                var s = e.Event(J.SHOWN, {
                    relatedTarget: t
                })
                  , o = function() {
                    i._config.focus && i._element.focus(),
                    i._isTransitioning = !1,
                    e(i._element).trigger(s)
                };
                if (n) {
                    var r = c.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            }
            ,
            i._enforceFocus = function() {
                var t = this;
                e(document).off(J.FOCUSIN).on(J.FOCUSIN, function(i) {
                    document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus()
                })
            }
            ,
            i._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(J.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(),
                    t.hide())
                }) : this._isShown || e(this._element).off(J.KEYDOWN_DISMISS)
            }
            ,
            i._setResizeEvent = function() {
                var t = this;
                this._isShown ? e(window).on(J.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : e(window).off(J.RESIZE)
            }
            ,
            i._hideModal = function() {
                var t = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    e(document.body).removeClass(Z.OPEN),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    e(t._element).trigger(J.HIDDEN)
                })
            }
            ,
            i._removeBackdrop = function() {
                this._backdrop && (e(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            i._showBackdrop = function(t) {
                var i = this
                  , n = e(this._element).hasClass(Z.FADE) ? Z.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = Z.BACKDROP,
                    n && this._backdrop.classList.add(n),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(J.CLICK_DISMISS, function(t) {
                        i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                    }),
                    n && c.reflow(this._backdrop),
                    e(this._backdrop).addClass(Z.SHOW),
                    !t)
                        return;
                    if (!n)
                        return void t();
                    var s = c.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(s)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(Z.SHOW);
                    var o = function() {
                        i._removeBackdrop(),
                        t && t()
                    };
                    if (e(this._element).hasClass(Z.FADE)) {
                        var r = c.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o()
                } else
                    t && t()
            }
            ,
            i._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            i._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            i._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            i._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var i = [].slice.call(document.querySelectorAll(tt.FIXED_CONTENT))
                      , n = [].slice.call(document.querySelectorAll(tt.STICKY_CONTENT));
                    e(i).each(function(i, n) {
                        var s = n.style.paddingRight
                          , o = e(n).css("padding-right");
                        e(n).data("padding-right", s).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                    }),
                    e(n).each(function(i, n) {
                        var s = n.style.marginRight
                          , o = e(n).css("margin-right");
                        e(n).data("margin-right", s).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    });
                    var s = document.body.style.paddingRight
                      , o = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", s).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                e(document.body).addClass(Z.OPEN)
            }
            ,
            i._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(tt.FIXED_CONTENT));
                e(t).each(function(t, i) {
                    var n = e(i).data("padding-right");
                    e(i).removeData("padding-right"),
                    i.style.paddingRight = n || ""
                });
                var i = [].slice.call(document.querySelectorAll("" + tt.STICKY_CONTENT));
                e(i).each(function(t, i) {
                    var n = e(i).data("margin-right");
                    void 0 !== n && e(i).css("margin-right", n).removeData("margin-right")
                });
                var n = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"),
                document.body.style.paddingRight = n || ""
            }
            ,
            i._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = Z.SCROLLBAR_MEASURER,
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            t._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var s = e(this).data("bs.modal")
                      , o = r({}, X, e(this).data(), "object" == typeof i && i ? i : {});
                    if (s || (s = new t(this,o),
                    e(this).data("bs.modal", s)),
                    "string" == typeof i) {
                        if (void 0 === s[i])
                            throw new TypeError('No method named "' + i + '"');
                        s[i](n)
                    } else
                        o.show && s.show(n)
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return X
                }
            }]),
            t
        }();
        e(document).on(J.CLICK_DATA_API, tt.DATA_TOGGLE, function(t) {
            var i, n = this, s = c.getSelectorFromElement(this);
            s && (i = document.querySelector(s));
            var o = e(i).data("bs.modal") ? "toggle" : r({}, e(i).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var a = e(i).one(J.SHOW, function(t) {
                t.isDefaultPrevented() || a.one(J.HIDDEN, function() {
                    e(n).is(":visible") && n.focus()
                })
            });
            et._jQueryInterface.call(e(i), o, this)
        }),
        e.fn.modal = et._jQueryInterface,
        e.fn.modal.Constructor = et,
        e.fn.modal.noConflict = function() {
            return e.fn.modal = G,
            et._jQueryInterface
        }
        ;
        var it = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
          , nt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
          , st = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi
          , ot = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
        function rt(t, e, i) {
            if (0 === t.length)
                return t;
            if (i && "function" == typeof i)
                return i(t);
            for (var n = new window.DOMParser, s = n.parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(s.body.querySelectorAll("*")), a = function(t, i) {
                var n = r[t]
                  , s = n.nodeName.toLowerCase();
                if (-1 === o.indexOf(n.nodeName.toLowerCase()))
                    return n.parentNode.removeChild(n),
                    "continue";
                var a = [].slice.call(n.attributes)
                  , l = [].concat(e["*"] || [], e[s] || []);
                a.forEach(function(t) {
                    (function(t, e) {
                        var i = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(i))
                            return -1 === it.indexOf(i) || Boolean(t.nodeValue.match(st) || t.nodeValue.match(ot));
                        for (var n = e.filter(function(t) {
                            return t instanceof RegExp
                        }), s = 0, o = n.length; s < o; s++)
                            if (i.match(n[s]))
                                return !0;
                        return !1
                    }
                    )(t, l) || n.removeAttribute(t.nodeName)
                })
            }, l = 0, c = r.length; l < c; l++)
                a(l);
            return s.body.innerHTML
        }
        var at = "tooltip"
          , lt = e.fn.tooltip
          , ct = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , ut = ["sanitize", "whiteList", "sanitizeFn"]
          , ht = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        }
          , dt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , pt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: nt
        }
          , ft = {
            SHOW: "show",
            OUT: "out"
        }
          , mt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }
          , gt = {
            FADE: "fade",
            SHOW: "show"
        }
          , vt = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
        }
          , _t = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }
          , bt = function() {
            function t(t, e) {
                if (void 0 === i)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }
            ,
            n.disable = function() {
                this._isEnabled = !1
            }
            ,
            n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var i = this.constructor.DATA_KEY
                          , n = e(t.currentTarget).data(i);
                        n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        n._activeTrigger.click = !n._activeTrigger.click,
                        n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (e(this.getTipElement()).hasClass(gt.SHOW))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            n.dispose = function() {
                clearTimeout(this._timeout),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                e(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && e(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            n.show = function() {
                var t = this;
                if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    var s = c.findShadowRoot(this.element)
                      , o = e.contains(null !== s ? s : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !o)
                        return;
                    var r = this.getTipElement()
                      , a = c.getUID(this.constructor.NAME);
                    r.setAttribute("id", a),
                    this.element.setAttribute("aria-describedby", a),
                    this.setContent(),
                    this.config.animation && e(r).addClass(gt.FADE);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                      , u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var h = this._getContainer();
                    e(r).data(this.constructor.DATA_KEY, this),
                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new i(this.element,r,{
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: vt.ARROW
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }),
                    e(r).addClass(gt.SHOW),
                    "ontouchstart"in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var d = function() {
                        t.config.animation && t._fixTransition();
                        var i = t._hoverState;
                        t._hoverState = null,
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        i === ft.OUT && t._leave(null, t)
                    };
                    if (e(this.tip).hasClass(gt.FADE)) {
                        var p = c.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(p)
                    } else
                        d()
                }
            }
            ,
            n.hide = function(t) {
                var i = this
                  , n = this.getTipElement()
                  , s = e.Event(this.constructor.Event.HIDE)
                  , o = function() {
                    i._hoverState !== ft.SHOW && n.parentNode && n.parentNode.removeChild(n),
                    i._cleanTipClass(),
                    i.element.removeAttribute("aria-describedby"),
                    e(i.element).trigger(i.constructor.Event.HIDDEN),
                    null !== i._popper && i._popper.destroy(),
                    t && t()
                };
                if (e(this.element).trigger(s),
                !s.isDefaultPrevented()) {
                    if (e(n).removeClass(gt.SHOW),
                    "ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                    this._activeTrigger[_t.CLICK] = !1,
                    this._activeTrigger[_t.FOCUS] = !1,
                    this._activeTrigger[_t.HOVER] = !1,
                    e(this.tip).hasClass(gt.FADE)) {
                        var r = c.getTransitionDurationFromElement(n);
                        e(n).one(c.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o();
                    this._hoverState = ""
                }
            }
            ,
            n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            n.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            n.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }
            ,
            n.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0],
                this.tip
            }
            ,
            n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(vt.TOOLTIP_INNER)), this.getTitle()),
                e(t).removeClass(gt.FADE + " " + gt.SHOW)
            }
            ,
            n.setElementContent = function(t, i) {
                "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = rt(i, this.config.whiteList, this.config.sanitizeFn)),
                t.html(i)) : t.text(i) : this.config.html ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text())
            }
            ,
            n.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            n._getOffset = function() {
                var t = this
                  , e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
                    e
                }
                : e.offset = this.config.offset,
                e
            }
            ,
            n._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
            }
            ,
            n._getAttachment = function(t) {
                return dt[t.toUpperCase()]
            }
            ,
            n._setListeners = function() {
                var t = this
                  , i = this.config.trigger.split(" ");
                i.forEach(function(i) {
                    if ("click" === i)
                        e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                            return t.toggle(e)
                        });
                    else if (i !== _t.MANUAL) {
                        var n = i === _t.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                          , s = i === _t.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(n, t.config.selector, function(e) {
                            return t._enter(e)
                        }).on(s, t.config.selector, function(e) {
                            return t._leave(e)
                        })
                    }
                }),
                e(this.element).closest(".modal").on("hide.bs.modal", function() {
                    t.element && t.hide()
                }),
                this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            n._enter = function(t, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(n, i)),
                t && (i._activeTrigger["focusin" === t.type ? _t.FOCUS : _t.HOVER] = !0),
                e(i.getTipElement()).hasClass(gt.SHOW) || i._hoverState === ft.SHOW ? i._hoverState = ft.SHOW : (clearTimeout(i._timeout),
                i._hoverState = ft.SHOW,
                i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                    i._hoverState === ft.SHOW && i.show()
                }, i.config.delay.show) : i.show())
            }
            ,
            n._leave = function(t, i) {
                var n = this.constructor.DATA_KEY;
                (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(n, i)),
                t && (i._activeTrigger["focusout" === t.type ? _t.FOCUS : _t.HOVER] = !1),
                i._isWithActiveTrigger() || (clearTimeout(i._timeout),
                i._hoverState = ft.OUT,
                i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                    i._hoverState === ft.OUT && i.hide()
                }, i.config.delay.hide) : i.hide())
            }
            ,
            n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            n._getConfig = function(t) {
                var i = e(this.element).data();
                return Object.keys(i).forEach(function(t) {
                    -1 !== ut.indexOf(t) && delete i[t]
                }),
                "number" == typeof (t = r({}, this.constructor.Default, i, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content.toString()),
                c.typeCheckConfig(at, t, this.constructor.DefaultType),
                t.sanitize && (t.template = rt(t.template, t.whiteList, t.sanitizeFn)),
                t
            }
            ,
            n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            n._cleanTipClass = function() {
                var t = e(this.getTipElement())
                  , i = t.attr("class").match(ct);
                null !== i && i.length && t.removeClass(i.join(""))
            }
            ,
            n._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper,
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ,
            n._fixTransition = function() {
                var t = this.getTipElement()
                  , i = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(gt.FADE),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = i)
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data("bs.tooltip")
                      , s = "object" == typeof i && i;
                    if ((n || !/dispose|hide/.test(i)) && (n || (n = new t(this,s),
                    e(this).data("bs.tooltip", n)),
                    "string" == typeof i)) {
                        if (void 0 === n[i])
                            throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return pt
                }
            }, {
                key: "NAME",
                get: function() {
                    return at
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return mt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ht
                }
            }]),
            t
        }();
        e.fn.tooltip = bt._jQueryInterface,
        e.fn.tooltip.Constructor = bt,
        e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = lt,
            bt._jQueryInterface
        }
        ;
        var yt = "popover"
          , wt = e.fn.popover
          , xt = new RegExp("(^|\\s)bs-popover\\S+","g")
          , Ct = r({}, bt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , Tt = r({}, bt.DefaultType, {
            content: "(string|element|function)"
        })
          , kt = {
            FADE: "fade",
            SHOW: "show"
        }
          , St = {
            TITLE: ".popover-header",
            CONTENT: ".popover-body"
        }
          , Dt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        }
          , Et = function(t) {
            var i, n;
            function o() {
                return t.apply(this, arguments) || this
            }
            n = t,
            (i = o).prototype = Object.create(n.prototype),
            i.prototype.constructor = i,
            i.__proto__ = n;
            var r = o.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            r.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
            }
            ,
            r.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0],
                this.tip
            }
            ,
            r.setContent = function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(St.TITLE), this.getTitle());
                var i = this._getContent();
                "function" == typeof i && (i = i.call(this.element)),
                this.setElementContent(t.find(St.CONTENT), i),
                t.removeClass(kt.FADE + " " + kt.SHOW)
            }
            ,
            r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            r._cleanTipClass = function() {
                var t = e(this.getTipElement())
                  , i = t.attr("class").match(xt);
                null !== i && i.length > 0 && t.removeClass(i.join(""))
            }
            ,
            o._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = e(this).data("bs.popover")
                      , n = "object" == typeof t ? t : null;
                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new o(this,n),
                    e(this).data("bs.popover", i)),
                    "string" == typeof t)) {
                        if (void 0 === i[t])
                            throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ct
                }
            }, {
                key: "NAME",
                get: function() {
                    return yt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Dt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Tt
                }
            }]),
            o
        }(bt);
        e.fn.popover = Et._jQueryInterface,
        e.fn.popover.Constructor = Et,
        e.fn.popover.noConflict = function() {
            return e.fn.popover = wt,
            Et._jQueryInterface
        }
        ;
        var It = "scrollspy"
          , At = e.fn[It]
          , Ot = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , Nt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , Pt = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }
          , Mt = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
        }
          , Ht = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , Lt = {
            OFFSET: "offset",
            POSITION: "position"
        }
          , Rt = function() {
            function t(t, i) {
                var n = this;
                this._element = t,
                this._scrollElement = "BODY" === t.tagName ? window : t,
                this._config = this._getConfig(i),
                this._selector = this._config.target + " " + Ht.NAV_LINKS + "," + this._config.target + " " + Ht.LIST_ITEMS + "," + this._config.target + " " + Ht.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                e(this._scrollElement).on(Pt.SCROLL, function(t) {
                    return n._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var i = t.prototype;
            return i.refresh = function() {
                var t = this
                  , i = this._scrollElement === this._scrollElement.window ? Lt.OFFSET : Lt.POSITION
                  , n = "auto" === this._config.method ? i : this._config.method
                  , s = n === Lt.POSITION ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight();
                var o = [].slice.call(document.querySelectorAll(this._selector));
                o.map(function(t) {
                    var i, o = c.getSelectorFromElement(t);
                    if (o && (i = document.querySelector(o)),
                    i) {
                        var r = i.getBoundingClientRect();
                        if (r.width || r.height)
                            return [e(i)[n]().top + s, o]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]),
                    t._targets.push(e[1])
                })
            }
            ,
            i.dispose = function() {
                e.removeData(this._element, "bs.scrollspy"),
                e(this._scrollElement).off(".bs.scrollspy"),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            i._getConfig = function(t) {
                if ("string" != typeof (t = r({}, Ot, "object" == typeof t && t ? t : {})).target) {
                    var i = e(t.target).attr("id");
                    i || (i = c.getUID(It),
                    e(t.target).attr("id", i)),
                    t.target = "#" + i
                }
                return c.typeCheckConfig(It, t, Nt),
                t
            }
            ,
            i._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            i._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            i._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            i._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                t >= i) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var s = this._offsets.length, o = s; o--; ) {
                        var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                        r && this._activate(this._targets[o])
                    }
                }
            }
            ,
            i._activate = function(t) {
                this._activeTarget = t,
                this._clear();
                var i = this._selector.split(",").map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                })
                  , n = e([].slice.call(document.querySelectorAll(i.join(","))));
                n.hasClass(Mt.DROPDOWN_ITEM) ? (n.closest(Ht.DROPDOWN).find(Ht.DROPDOWN_TOGGLE).addClass(Mt.ACTIVE),
                n.addClass(Mt.ACTIVE)) : (n.addClass(Mt.ACTIVE),
                n.parents(Ht.NAV_LIST_GROUP).prev(Ht.NAV_LINKS + ", " + Ht.LIST_ITEMS).addClass(Mt.ACTIVE),
                n.parents(Ht.NAV_LIST_GROUP).prev(Ht.NAV_ITEMS).children(Ht.NAV_LINKS).addClass(Mt.ACTIVE)),
                e(this._scrollElement).trigger(Pt.ACTIVATE, {
                    relatedTarget: t
                })
            }
            ,
            i._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(Mt.ACTIVE)
                }).forEach(function(t) {
                    return t.classList.remove(Mt.ACTIVE)
                })
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this).data("bs.scrollspy")
                      , s = "object" == typeof i && i;
                    if (n || (n = new t(this,s),
                    e(this).data("bs.scrollspy", n)),
                    "string" == typeof i) {
                        if (void 0 === n[i])
                            throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ot
                }
            }]),
            t
        }();
        e(window).on(Pt.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(Ht.DATA_SPY)), i = t.length, n = i; n--; ) {
                var s = e(t[n]);
                Rt._jQueryInterface.call(s, s.data())
            }
        }),
        e.fn[It] = Rt._jQueryInterface,
        e.fn[It].Constructor = Rt,
        e.fn[It].noConflict = function() {
            return e.fn[It] = At,
            Rt._jQueryInterface
        }
        ;
        var Wt = e.fn.tab
          , jt = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , zt = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        }
          , Ft = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }
          , Bt = function() {
            function t(t) {
                this._element = t
            }
            var i = t.prototype;
            return i.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(zt.ACTIVE) || e(this._element).hasClass(zt.DISABLED))) {
                    var i, n, s = e(this._element).closest(Ft.NAV_LIST_GROUP)[0], o = c.getSelectorFromElement(this._element);
                    if (s) {
                        var r = "UL" === s.nodeName || "OL" === s.nodeName ? Ft.ACTIVE_UL : Ft.ACTIVE;
                        n = (n = e.makeArray(e(s).find(r)))[n.length - 1]
                    }
                    var a = e.Event(jt.HIDE, {
                        relatedTarget: this._element
                    })
                      , l = e.Event(jt.SHOW, {
                        relatedTarget: n
                    });
                    if (n && e(n).trigger(a),
                    e(this._element).trigger(l),
                    !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        o && (i = document.querySelector(o)),
                        this._activate(this._element, s);
                        var u = function() {
                            var i = e.Event(jt.HIDDEN, {
                                relatedTarget: t._element
                            })
                              , s = e.Event(jt.SHOWN, {
                                relatedTarget: n
                            });
                            e(n).trigger(i),
                            e(t._element).trigger(s)
                        };
                        i ? this._activate(i, i.parentNode, u) : u()
                    }
                }
            }
            ,
            i.dispose = function() {
                e.removeData(this._element, "bs.tab"),
                this._element = null
            }
            ,
            i._activate = function(t, i, n) {
                var s = this
                  , o = !i || "UL" !== i.nodeName && "OL" !== i.nodeName ? e(i).children(Ft.ACTIVE) : e(i).find(Ft.ACTIVE_UL)
                  , r = o[0]
                  , a = n && r && e(r).hasClass(zt.FADE)
                  , l = function() {
                    return s._transitionComplete(t, r, n)
                };
                if (r && a) {
                    var u = c.getTransitionDurationFromElement(r);
                    e(r).removeClass(zt.SHOW).one(c.TRANSITION_END, l).emulateTransitionEnd(u)
                } else
                    l()
            }
            ,
            i._transitionComplete = function(t, i, n) {
                if (i) {
                    e(i).removeClass(zt.ACTIVE);
                    var s = e(i.parentNode).find(Ft.DROPDOWN_ACTIVE_CHILD)[0];
                    s && e(s).removeClass(zt.ACTIVE),
                    "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(zt.ACTIVE),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                c.reflow(t),
                t.classList.contains(zt.FADE) && t.classList.add(zt.SHOW),
                t.parentNode && e(t.parentNode).hasClass(zt.DROPDOWN_MENU)) {
                    var o = e(t).closest(Ft.DROPDOWN)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Ft.DROPDOWN_TOGGLE));
                        e(r).addClass(zt.ACTIVE)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this)
                      , s = n.data("bs.tab");
                    if (s || (s = new t(this),
                    n.data("bs.tab", s)),
                    "string" == typeof i) {
                        if (void 0 === s[i])
                            throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]),
            t
        }();
        e(document).on(jt.CLICK_DATA_API, Ft.DATA_TOGGLE, function(t) {
            t.preventDefault(),
            Bt._jQueryInterface.call(e(this), "show")
        }),
        e.fn.tab = Bt._jQueryInterface,
        e.fn.tab.Constructor = Bt,
        e.fn.tab.noConflict = function() {
            return e.fn.tab = Wt,
            Bt._jQueryInterface
        }
        ;
        var qt = e.fn.toast
          , Ut = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
        }
          , Vt = {
            FADE: "fade",
            HIDE: "hide",
            SHOW: "show",
            SHOWING: "showing"
        }
          , Yt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }
          , Kt = {
            animation: !0,
            autohide: !0,
            delay: 500
        }
          , Qt = {
            DATA_DISMISS: '[data-dismiss="toast"]'
        }
          , Gt = function() {
            function t(t, e) {
                this._element = t,
                this._config = this._getConfig(e),
                this._timeout = null,
                this._setListeners()
            }
            var i = t.prototype;
            return i.show = function() {
                var t = this;
                e(this._element).trigger(Ut.SHOW),
                this._config.animation && this._element.classList.add(Vt.FADE);
                var i = function() {
                    t._element.classList.remove(Vt.SHOWING),
                    t._element.classList.add(Vt.SHOW),
                    e(t._element).trigger(Ut.SHOWN),
                    t._config.autohide && t.hide()
                };
                if (this._element.classList.remove(Vt.HIDE),
                this._element.classList.add(Vt.SHOWING),
                this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(n)
                } else
                    i()
            }
            ,
            i.hide = function(t) {
                var i = this;
                this._element.classList.contains(Vt.SHOW) && (e(this._element).trigger(Ut.HIDE),
                t ? this._close() : this._timeout = setTimeout(function() {
                    i._close()
                }, this._config.delay))
            }
            ,
            i.dispose = function() {
                clearTimeout(this._timeout),
                this._timeout = null,
                this._element.classList.contains(Vt.SHOW) && this._element.classList.remove(Vt.SHOW),
                e(this._element).off(Ut.CLICK_DISMISS),
                e.removeData(this._element, "bs.toast"),
                this._element = null,
                this._config = null
            }
            ,
            i._getConfig = function(t) {
                return t = r({}, Kt, e(this._element).data(), "object" == typeof t && t ? t : {}),
                c.typeCheckConfig("toast", t, this.constructor.DefaultType),
                t
            }
            ,
            i._setListeners = function() {
                var t = this;
                e(this._element).on(Ut.CLICK_DISMISS, Qt.DATA_DISMISS, function() {
                    return t.hide(!0)
                })
            }
            ,
            i._close = function() {
                var t = this
                  , i = function() {
                    t._element.classList.add(Vt.HIDE),
                    e(t._element).trigger(Ut.HIDDEN)
                };
                if (this._element.classList.remove(Vt.SHOW),
                this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(n)
                } else
                    i()
            }
            ,
            t._jQueryInterface = function(i) {
                return this.each(function() {
                    var n = e(this)
                      , s = n.data("bs.toast")
                      , o = "object" == typeof i && i;
                    if (s || (s = new t(this,o),
                    n.data("bs.toast", s)),
                    "string" == typeof i) {
                        if (void 0 === s[i])
                            throw new TypeError('No method named "' + i + '"');
                        s[i](this)
                    }
                })
            }
            ,
            s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Yt
                }
            }, {
                key: "Default",
                get: function() {
                    return Kt
                }
            }]),
            t
        }();
        e.fn.toast = Gt._jQueryInterface,
        e.fn.toast.Constructor = Gt,
        e.fn.toast.noConflict = function() {
            return e.fn.toast = qt,
            Gt._jQueryInterface
        }
        ,
        function() {
            if (void 0 === e)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(),
        t.Util = c,
        t.Alert = p,
        t.Button = _,
        t.Carousel = I,
        t.Collapse = W,
        t.Dropdown = Q,
        t.Modal = et,
        t.Popover = Et,
        t.Scrollspy = Rt,
        t.Tab = Bt,
        t.Toast = Gt,
        t.Tooltip = bt,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }(e, i(0), i(20))
}
, function(t, e, i) {
    var n, s, o;
    s = [i(0)],
    void 0 === (o = "function" == typeof (n = function(e) {
        var n, s, o, r, a, l, c, u, h, d, p, f, m, g, v, _, b, y, w, x, C, T, k, S, D, E, I, A, O, N, P, M, H, L, R, W, j, z, F, B, q, U, V, Y, K, Q, G, X, $, J, Z, tt, et, it, nt, st, ot, rt;
        st = i(107),
        ot = t.exports,
        rt = "https:" == document.location.protocol ? "https:" : "http:",
        st || (ot ? i(31)(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + rt + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
        s = "mCustomScrollbar",
        o = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        },
        r = 0,
        a = {},
        l = window.attachEvent && !window.addEventListener ? 1 : 0,
        c = !1,
        u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
        h = {
            init: function(t) {
                var t = e.extend(!0, {}, o, t)
                  , i = d.call(this);
                if (t.live) {
                    var n = t.liveSelector || this.selector || ".mCustomScrollbar"
                      , s = e(n);
                    if ("off" === t.live)
                        return void f(n);
                    a[n] = setTimeout(function() {
                        s.mCustomScrollbar(t),
                        "once" === t.live && s.length && f(n)
                    }, 500)
                } else
                    f(n);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : m(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                p(t),
                e(i).each(function() {
                    var i = e(this);
                    if (!i.data("mCS")) {
                        i.data("mCS", {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: i.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = i.data("mCS")
                          , s = n.opt
                          , o = i.data("mcs-axis")
                          , a = i.data("mcs-scrollbar-position")
                          , l = i.data("mcs-theme");
                        o && (s.axis = o),
                        a && (s.scrollbarPosition = a),
                        l && (s.theme = l,
                        p(s)),
                        v.call(this),
                        n && s.callbacks.onCreate && "function" == typeof s.callbacks.onCreate && s.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + u[2] + ")").addClass(u[2]),
                        h.update.call(null, i)
                    }
                })
            },
            update: function(t, i) {
                var n = t || d.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data("mCS")) {
                        var n = t.data("mCS")
                          , s = n.opt
                          , o = e("#mCSB_" + n.idx + "_container")
                          , r = e("#mCSB_" + n.idx)
                          , a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!o.length)
                            return;
                        n.tweenRunning && K(t),
                        i && n && s.callbacks.onBeforeUpdate && "function" == typeof s.callbacks.onBeforeUpdate && s.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(u[3]) && t.removeClass(u[3]),
                        t.hasClass(u[4]) && t.removeClass(u[4]),
                        r.css("max-height", "none"),
                        r.height() !== t.height() && r.css("max-height", t.height()),
                        b.call(this),
                        "y" === s.axis || s.advanced.autoExpandHorizontalScroll || o.css("width", _(o)),
                        n.overflowed = T.call(this),
                        E.call(this),
                        s.autoDraggerLength && w.call(this),
                        x.call(this),
                        S.call(this);
                        var l = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                        "x" !== s.axis && (n.overflowed[0] ? a[0].height() > a[0].parent().height() ? k.call(this) : (Q(t, l[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (k.call(this),
                        "y" === s.axis ? D.call(this) : "yx" === s.axis && n.overflowed[1] && Q(t, l[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== s.axis && (n.overflowed[1] ? a[1].width() > a[1].parent().width() ? k.call(this) : (Q(t, l[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (k.call(this),
                        "x" === s.axis ? D.call(this) : "yx" === s.axis && n.overflowed[0] && Q(t, l[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        i && n && (2 === i && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === i && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)),
                        Y.call(this)
                    }
                })
            },
            scrollTo: function(t, i) {
                if (void 0 !== t && null != t) {
                    var n = d.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data("mCS")) {
                            var s = n.data("mCS")
                              , o = s.opt
                              , r = {
                                trigger: "external",
                                scrollInertia: o.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , a = e.extend(!0, {}, r, i)
                              , l = U.call(this, t)
                              , c = a.scrollInertia > 0 && a.scrollInertia < 17 ? 17 : a.scrollInertia;
                            l[0] = V.call(this, l[0], "y"),
                            l[1] = V.call(this, l[1], "x"),
                            a.moveDragger && (l[0] *= s.scrollRatio.y,
                            l[1] *= s.scrollRatio.x),
                            a.dur = nt() ? 0 : c,
                            setTimeout(function() {
                                null !== l[0] && void 0 !== l[0] && "x" !== o.axis && s.overflowed[0] && (a.dir = "y",
                                a.overwrite = "all",
                                Q(n, l[0].toString(), a)),
                                null !== l[1] && void 0 !== l[1] && "y" !== o.axis && s.overflowed[1] && (a.dir = "x",
                                a.overwrite = "none",
                                Q(n, l[1].toString(), a))
                            }, a.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = d.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data("mCS") && K(t)
                })
            },
            disable: function(t) {
                var i = d.call(this);
                return e(i).each(function() {
                    var i = e(this);
                    i.data("mCS") && (i.data("mCS"),
                    Y.call(this, "remove"),
                    D.call(this),
                    t && k.call(this),
                    E.call(this, !0),
                    i.addClass(u[3]))
                })
            },
            destroy: function() {
                var t = d.call(this);
                return e(t).each(function() {
                    var i = e(this);
                    if (i.data("mCS")) {
                        var n = i.data("mCS")
                          , o = n.opt
                          , r = e("#mCSB_" + n.idx)
                          , a = e("#mCSB_" + n.idx + "_container")
                          , l = e(".mCSB_" + n.idx + "_scrollbar");
                        o.live && f(o.liveSelector || e(t).selector),
                        Y.call(this, "remove"),
                        D.call(this),
                        k.call(this),
                        i.removeData("mCS"),
                        J(this, "mcs"),
                        l.remove(),
                        a.find("img." + u[2]).removeClass(u[2]),
                        r.replaceWith(a.contents()),
                        i.removeClass(s + " _mCS_" + n.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                    }
                })
            }
        },
        d = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? ".mCustomScrollbar" : this
        }
        ,
        p = function(t) {
            t.autoDraggerLength = !(e.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && t.autoDraggerLength,
            t.autoExpandScrollbar = !(e.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && t.autoExpandScrollbar,
            t.scrollButtons.enable = !(e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1) && t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 || t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : t.scrollbarPosition
        }
        ,
        f = function(t) {
            a[t] && (clearTimeout(a[t]),
            J(a, t))
        }
        ,
        m = function(t) {
            return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
        }
        ,
        g = function(t) {
            return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
        }
        ,
        v = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , o = n.autoExpandScrollbar ? " " + u[1] + "_expand" : ""
              , r = ["<div id='mCSB_" + i.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_vertical" + o + "'><div class='" + u[12] + "'><div id='mCSB_" + i.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + i.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + i.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_horizontal" + o + "'><div class='" + u[12] + "'><div id='mCSB_" + i.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , a = "yx" === n.axis ? "mCSB_vertical_horizontal" : "x" === n.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , l = "yx" === n.axis ? r[0] + r[1] : "x" === n.axis ? r[1] : r[0]
              , c = "yx" === n.axis ? "<div id='mCSB_" + i.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , h = n.autoHideScrollbar ? " " + u[6] : ""
              , d = "x" !== n.axis && "rtl" === i.langDir ? " " + u[7] : "";
            n.setWidth && t.css("width", n.setWidth),
            n.setHeight && t.css("height", n.setHeight),
            n.setLeft = "y" !== n.axis && "rtl" === i.langDir ? "989999px" : n.setLeft,
            t.addClass(s + " _mCS_" + i.idx + h + d).wrapInner("<div id='mCSB_" + i.idx + "' class='mCustomScrollBox mCS-" + n.theme + " " + a + "'><div id='mCSB_" + i.idx + "_container' class='mCSB_container' style='position:relative; top:" + n.setTop + "; left:" + n.setLeft + ";' dir='" + i.langDir + "' /></div>");
            var p = e("#mCSB_" + i.idx)
              , f = e("#mCSB_" + i.idx + "_container");
            "y" === n.axis || n.advanced.autoExpandHorizontalScroll || f.css("width", _(f)),
            "outside" === n.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            p.addClass("mCSB_outside").after(l)) : (p.addClass("mCSB_inside").append(l),
            f.wrap(c)),
            y.call(this);
            var m = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
            m[0].css("min-height", m[0].height()),
            m[1].css("min-width", m[1].width())
        }
        ,
        _ = function(t) {
            var i = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , n = t.parent().width();
            return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
        }
        ,
        b = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = e("#mCSB_" + i.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                s.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var o = Math.ceil(s[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && o > s.parent().width() ? s.css({
                    width: o,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : s.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(s[0].getBoundingClientRect().right + .4) - Math.floor(s[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }
        ,
        y = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = e(".mCSB_" + i.idx + "_scrollbar:first")
              , o = et(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , r = ["<a href='#' class='" + u[13] + "' " + o + " />", "<a href='#' class='" + u[14] + "' " + o + " />", "<a href='#' class='" + u[15] + "' " + o + " />", "<a href='#' class='" + u[16] + "' " + o + " />"]
              , a = ["x" === n.axis ? r[2] : r[0], "x" === n.axis ? r[3] : r[1], r[2], r[3]];
            n.scrollButtons.enable && s.prepend(a[0]).append(a[1]).next(".mCSB_scrollTools").prepend(a[2]).append(a[3])
        }
        ,
        w = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = e("#mCSB_" + i.idx)
              , s = e("#mCSB_" + i.idx + "_container")
              , o = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")]
              , r = [n.height() / s.outerHeight(!1), n.width() / s.outerWidth(!1)]
              , a = [parseInt(o[0].css("min-height")), Math.round(r[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(r[1] * o[1].parent().width())]
              , c = l && a[1] < a[0] ? a[0] : a[1]
              , u = l && a[3] < a[2] ? a[2] : a[3];
            o[0].css({
                height: c,
                "max-height": o[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": a[0] + "px"
            }),
            o[1].css({
                width: u,
                "max-width": o[1].parent().width() - 10
            })
        }
        ,
        x = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = e("#mCSB_" + i.idx)
              , s = e("#mCSB_" + i.idx + "_container")
              , o = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")]
              , r = [s.outerHeight(!1) - n.height(), s.outerWidth(!1) - n.width()]
              , a = [r[0] / (o[0].parent().height() - o[0].height()), r[1] / (o[1].parent().width() - o[1].width())];
            i.scrollRatio = {
                y: a[0],
                x: a[1]
            }
        }
        ,
        C = function(t, e, i) {
            var n = i ? u[0] + "_expanded" : ""
              , s = t.closest(".mCSB_scrollTools");
            "active" === e ? (t.toggleClass(u[0] + " " + n),
            s.toggleClass(u[1]),
            t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(u[0]),
            s.removeClass(u[1])) : (t.addClass(u[0]),
            s.addClass(u[1])))
        }
        ,
        T = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = e("#mCSB_" + i.idx)
              , s = e("#mCSB_" + i.idx + "_container")
              , o = null == i.overflowed ? s.height() : s.outerHeight(!1)
              , r = null == i.overflowed ? s.width() : s.outerWidth(!1)
              , a = s[0].scrollHeight
              , l = s[0].scrollWidth;
            return a > o && (o = a),
            l > r && (r = l),
            [o > n.height(), r > n.width()]
        }
        ,
        k = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = e("#mCSB_" + i.idx)
              , o = e("#mCSB_" + i.idx + "_container")
              , r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")];
            if (K(t),
            ("x" !== n.axis && !i.overflowed[0] || "y" === n.axis && i.overflowed[0]) && (r[0].add(o).css("top", 0),
            Q(t, "_resetY")),
            "y" !== n.axis && !i.overflowed[1] || "x" === n.axis && i.overflowed[1]) {
                var a = dx = 0;
                "rtl" === i.langDir && (a = s.width() - o.outerWidth(!1),
                dx = Math.abs(a / i.scrollRatio.x)),
                o.css("left", a),
                r[1].css("left", dx),
                Q(t, "_resetX")
            }
        }
        ,
        S = function() {
            var t, i = e(this), n = i.data("mCS"), s = n.opt;
            n.bindEvents || (A.call(this),
            s.contentTouchScroll && O.call(this),
            N.call(this),
            s.mouseWheel.enable && function n() {
                t = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(t),
                    P.call(i[0])) : n()
                }, 100)
            }(),
            W.call(this),
            z.call(this),
            s.advanced.autoScrollOnFocus && j.call(this),
            s.scrollButtons.enable && F.call(this),
            s.keyboard.enable && B.call(this),
            n.bindEvents = !0)
        }
        ,
        D = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = "mCS_" + i.idx
              , o = ".mCSB_" + i.idx + "_scrollbar"
              , r = e("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + o + " ." + u[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + o + ">a")
              , a = e("#mCSB_" + i.idx + "_container");
            n.advanced.releaseDraggableSelectors && r.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && r.add(e(n.advanced.extraDraggableSelectors)),
            i.bindEvents && (e(document).add(e(!H() || top.document)).unbind("." + s),
            r.each(function() {
                e(this).unbind("." + s)
            }),
            clearTimeout(t[0]._focusTimeout),
            J(t[0], "_focusTimeout"),
            clearTimeout(i.sequential.step),
            J(i.sequential, "step"),
            clearTimeout(a[0].onCompleteTimeout),
            J(a[0], "onCompleteTimeout"),
            i.bindEvents = !1)
        }
        ,
        E = function(t) {
            var i = e(this)
              , n = i.data("mCS")
              , s = n.opt
              , o = e("#mCSB_" + n.idx + "_container_wrapper")
              , r = o.length ? o : e("#mCSB_" + n.idx + "_container")
              , a = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , l = [a[0].find(".mCSB_dragger"), a[1].find(".mCSB_dragger")];
            "x" !== s.axis && (n.overflowed[0] && !t ? (a[0].add(l[0]).add(a[0].children("a")).css("display", "block"),
            r.removeClass(u[8] + " " + u[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && l[0].css("display", "none"),
            r.removeClass(u[10])) : (a[0].css("display", "none"),
            r.addClass(u[10])),
            r.addClass(u[8]))),
            "y" !== s.axis && (n.overflowed[1] && !t ? (a[1].add(l[1]).add(a[1].children("a")).css("display", "block"),
            r.removeClass(u[9] + " " + u[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && l[1].css("display", "none"),
            r.removeClass(u[11])) : (a[1].css("display", "none"),
            r.addClass(u[11])),
            r.addClass(u[9]))),
            n.overflowed[0] || n.overflowed[1] ? i.removeClass(u[5]) : i.addClass(u[5])
        }
        ,
        I = function(t) {
            var i = t.type
              , n = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , s = H() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (i) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return n ? [t.originalEvent.pageY - n[0] + s[0], t.originalEvent.pageX - n[1] + s[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var o = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [o.screenY, o.screenX, r > 1] : [o.pageY, o.pageX, r > 1];
            default:
                return n ? [t.pageY - n[0] + s[0], t.pageX - n[1] + s[1], !1] : [t.pageY, t.pageX, !1]
            }
        }
        ,
        A = function() {
            var t, i, n, s = e(this), o = s.data("mCS"), r = o.opt, a = "mCS_" + o.idx, u = ["mCSB_" + o.idx + "_dragger_vertical", "mCSB_" + o.idx + "_dragger_horizontal"], h = e("#mCSB_" + o.idx + "_container"), d = e("#" + u[0] + ",#" + u[1]), p = r.advanced.releaseDraggableSelectors ? d.add(e(r.advanced.releaseDraggableSelectors)) : d, f = r.advanced.extraDraggableSelectors ? e(!H() || top.document).add(e(r.advanced.extraDraggableSelectors)) : e(!H() || top.document);
            function m(e, i, n, a) {
                if (h[0].idleTimer = r.scrollInertia < 233 ? 250 : 0,
                t.attr("id") === u[1])
                    var l = "x"
                      , c = (t[0].offsetLeft - i + a) * o.scrollRatio.x;
                else
                    var l = "y"
                      , c = (t[0].offsetTop - e + n) * o.scrollRatio.y;
                Q(s, c.toString(), {
                    dir: l,
                    drag: !0
                })
            }
            d.bind("contextmenu." + a, function(t) {
                t.preventDefault()
            }).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, function(o) {
                if (o.stopImmediatePropagation(),
                o.preventDefault(),
                Z(o)) {
                    c = !0,
                    l && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    K(s);
                    var a = (t = e(this)).offset()
                      , u = I(o)[0] - a.top
                      , d = I(o)[1] - a.left
                      , p = t.height() + a.top
                      , f = t.width() + a.left;
                    u < p && u > 0 && d < f && d > 0 && (i = u,
                    n = d),
                    C(t, "active", r.autoExpandScrollbar)
                }
            }).bind("touchmove." + a, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var s = t.offset()
                  , o = I(e)[0] - s.top
                  , r = I(e)[1] - s.left;
                m(i, n, o, r)
            }),
            e(document).add(f).bind("mousemove." + a + " pointermove." + a + " MSPointerMove." + a, function(e) {
                if (t) {
                    var s = t.offset()
                      , o = I(e)[0] - s.top
                      , r = I(e)[1] - s.left;
                    if (i === o && n === r)
                        return;
                    m(i, n, o, r)
                }
            }).add(p).bind("mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a, function(e) {
                t && (C(t, "active", r.autoExpandScrollbar),
                t = null),
                c = !1,
                l && (document.onselectstart = null),
                L.call(h, !0)
            })
        }
        ,
        O = function() {
            var t, i, s, o, r, a, l, u, h, d, p, f, m, g, v = e(this), _ = v.data("mCS"), b = _.opt, y = "mCS_" + _.idx, w = e("#mCSB_" + _.idx), x = e("#mCSB_" + _.idx + "_container"), C = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")], T = [], k = [], S = 0, D = "yx" === b.axis ? "none" : "all", E = [], A = x.find("iframe"), O = ["touchstart." + y + " pointerdown." + y + " MSPointerDown." + y, "touchmove." + y + " pointermove." + y + " MSPointerMove." + y, "touchend." + y + " pointerup." + y + " MSPointerUp." + y], N = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            function P(e) {
                if (!tt(e) || c || I(e)[2])
                    n = 0;
                else {
                    n = 1,
                    m = 0,
                    g = 0,
                    t = 1,
                    v.removeClass("mCS_touch_action");
                    var o = x.offset();
                    i = I(e)[0] - o.top,
                    s = I(e)[1] - o.left,
                    E = [I(e)[0], I(e)[1]]
                }
            }
            function M(e) {
                if (tt(e) && !c && !I(e)[2] && (b.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!g || m) && t)) {
                    l = X();
                    var n = w.offset()
                      , o = I(e)[0] - n.top
                      , r = I(e)[1] - n.left;
                    if (T.push(o),
                    k.push(r),
                    E[2] = Math.abs(I(e)[0] - E[0]),
                    E[3] = Math.abs(I(e)[1] - E[1]),
                    _.overflowed[0])
                        var a = C[0].parent().height() - C[0].height()
                          , u = i - o > 0 && o - i > -a * _.scrollRatio.y && (2 * E[3] < E[2] || "yx" === b.axis);
                    if (_.overflowed[1])
                        var h = C[1].parent().width() - C[1].width()
                          , d = s - r > 0 && r - s > -h * _.scrollRatio.x && (2 * E[2] < E[3] || "yx" === b.axis);
                    u || d ? (N || e.preventDefault(),
                    m = 1) : (g = 1,
                    v.addClass("mCS_touch_action")),
                    N && e.preventDefault(),
                    p = "yx" === b.axis ? [i - o, s - r] : "x" === b.axis ? [null, s - r] : [i - o, null],
                    x[0].idleTimer = 250,
                    _.overflowed[0] && j(p[0], S, "mcsLinearOut", "y", "all", !0),
                    _.overflowed[1] && j(p[1], S, "mcsLinearOut", "x", D, !0)
                }
            }
            function L(t) {
                if (!tt(t) || c || I(t)[2])
                    n = 0;
                else {
                    n = 1,
                    t.stopImmediatePropagation(),
                    K(v),
                    a = X();
                    var e = w.offset();
                    o = I(t)[0] - e.top,
                    r = I(t)[1] - e.left,
                    T = [],
                    k = []
                }
            }
            function R(e) {
                if (tt(e) && !c && !I(e)[2]) {
                    t = 0,
                    e.stopImmediatePropagation(),
                    m = 0,
                    g = 0,
                    u = X();
                    var i = w.offset()
                      , n = I(e)[0] - i.top
                      , s = I(e)[1] - i.left;
                    if (!(u - l > 30)) {
                        var v = (d = 1e3 / (u - a)) < 2.5
                          , y = v ? [T[T.length - 2], k[k.length - 2]] : [0, 0];
                        h = v ? [n - y[0], s - y[1]] : [n - o, s - r];
                        var C = [Math.abs(h[0]), Math.abs(h[1])];
                        d = v ? [Math.abs(h[0] / 4), Math.abs(h[1] / 4)] : [d, d];
                        var S = [Math.abs(x[0].offsetTop) - h[0] * W(C[0] / d[0], d[0]), Math.abs(x[0].offsetLeft) - h[1] * W(C[1] / d[1], d[1])];
                        p = "yx" === b.axis ? [S[0], S[1]] : "x" === b.axis ? [null, S[1]] : [S[0], null],
                        f = [4 * C[0] + b.scrollInertia, 4 * C[1] + b.scrollInertia];
                        var E = parseInt(b.contentTouchScroll) || 0;
                        p[0] = C[0] > E ? p[0] : 0,
                        p[1] = C[1] > E ? p[1] : 0,
                        _.overflowed[0] && j(p[0], f[0], "mcsEaseOut", "y", D, !1),
                        _.overflowed[1] && j(p[1], f[1], "mcsEaseOut", "x", D, !1)
                    }
                }
            }
            function W(t, e) {
                var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
            }
            function j(t, e, i, n, s, o) {
                t && Q(v, t.toString(), {
                    dur: e,
                    scrollEasing: i,
                    dir: n,
                    overwrite: s,
                    drag: o
                })
            }
            x.bind(O[0], function(t) {
                P(t)
            }).bind(O[1], function(t) {
                M(t)
            }),
            w.bind(O[0], function(t) {
                L(t)
            }).bind(O[2], function(t) {
                R(t)
            }),
            A.length && A.each(function() {
                e(this).bind("load", function() {
                    H(this) && e(this.contentDocument || this.contentWindow.document).bind(O[0], function(t) {
                        P(t),
                        L(t)
                    }).bind(O[1], function(t) {
                        M(t)
                    }).bind(O[2], function(t) {
                        R(t)
                    })
                })
            })
        }
        ,
        N = function() {
            var t, i = e(this), s = i.data("mCS"), o = s.opt, r = s.sequential, a = "mCS_" + s.idx, l = e("#mCSB_" + s.idx + "_container"), u = l.parent();
            function h(e, n, s) {
                r.type = s && t ? "stepped" : "stepless",
                r.scrollAmount = 10,
                q(i, e, n, "mcsLinearOut", s ? 60 : null)
            }
            l.bind("mousedown." + a, function(e) {
                n || t || (t = 1,
                c = !0)
            }).add(document).bind("mousemove." + a, function(e) {
                if (!n && t && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                    var i = l.offset()
                      , a = I(e)[0] - i.top + l[0].offsetTop
                      , c = I(e)[1] - i.left + l[0].offsetLeft;
                    a > 0 && a < u.height() && c > 0 && c < u.width() ? r.step && h("off", null, "stepped") : ("x" !== o.axis && s.overflowed[0] && (a < 0 ? h("on", 38) : a > u.height() && h("on", 40)),
                    "y" !== o.axis && s.overflowed[1] && (c < 0 ? h("on", 37) : c > u.width() && h("on", 39)))
                }
            }).bind("mouseup." + a + " dragend." + a, function(e) {
                n || (t && (t = 0,
                h("off", null)),
                c = !1)
            })
        }
        ,
        P = function() {
            if (e(this).data("mCS")) {
                var t = e(this)
                  , i = t.data("mCS")
                  , n = i.opt
                  , s = "mCS_" + i.idx
                  , o = e("#mCSB_" + i.idx)
                  , r = [e("#mCSB_" + i.idx + "_dragger_vertical"), e("#mCSB_" + i.idx + "_dragger_horizontal")]
                  , a = e("#mCSB_" + i.idx + "_container").find("iframe");
                a.length && a.each(function() {
                    e(this).bind("load", function() {
                        H(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function(t, e) {
                            c(t, e)
                        })
                    })
                }),
                o.bind("mousewheel." + s, function(t, e) {
                    c(t, e)
                })
            }
            function c(s, a) {
                if (K(t),
                !R(t, s.target)) {
                    var c = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : l && s.deltaFactor < 100 ? 100 : s.deltaFactor || 100
                      , u = n.scrollInertia;
                    if ("x" === n.axis || "x" === n.mouseWheel.axis)
                        var h = "x"
                          , d = [Math.round(c * i.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)]
                          , p = "auto" !== n.mouseWheel.scrollAmount ? d[1] : d[0] >= o.width() ? .9 * o.width() : d[0]
                          , f = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetLeft)
                          , m = r[1][0].offsetLeft
                          , g = r[1].parent().width() - r[1].width()
                          , v = "y" === n.mouseWheel.axis ? s.deltaY || a : s.deltaX;
                    else
                        var h = "y"
                          , d = [Math.round(c * i.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)]
                          , p = "auto" !== n.mouseWheel.scrollAmount ? d[1] : d[0] >= o.height() ? .9 * o.height() : d[0]
                          , f = Math.abs(e("#mCSB_" + i.idx + "_container")[0].offsetTop)
                          , m = r[0][0].offsetTop
                          , g = r[0].parent().height() - r[0].height()
                          , v = s.deltaY || a;
                    "y" === h && !i.overflowed[0] || "x" === h && !i.overflowed[1] || ((n.mouseWheel.invert || s.webkitDirectionInvertedFromDevice) && (v = -v),
                    n.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1),
                    (v > 0 && 0 !== m || v < 0 && m !== g || n.mouseWheel.preventDefault) && (s.stopImmediatePropagation(),
                    s.preventDefault()),
                    s.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (p = s.deltaFactor,
                    u = 17),
                    Q(t, (f - v * p).toString(), {
                        dir: h,
                        dur: u
                    }))
                }
            }
        }
        ,
        M = new Object,
        H = function(t) {
            var i = !1
              , n = !1
              , s = null;
            if (void 0 === t ? n = "#empty" : void 0 !== e(t).attr("id") && (n = e(t).attr("id")),
            !1 !== n && void 0 !== M[n])
                return M[n];
            if (t) {
                try {
                    var o = t.contentDocument || t.contentWindow.document;
                    s = o.body.innerHTML
                } catch (t) {}
                i = null !== s
            } else {
                try {
                    var o = top.document;
                    s = o.body.innerHTML
                } catch (t) {}
                i = null !== s
            }
            return !1 !== n && (M[n] = i),
            i
        }
        ,
        L = function(t) {
            var e = this.find("iframe");
            if (e.length) {
                var i = t ? "auto" : "none";
                e.css("pointer-events", i)
            }
        }
        ,
        R = function(t, i) {
            var n = i.nodeName.toLowerCase()
              , s = t.data("mCS").opt.mouseWheel.disableOver;
            return e.inArray(n, s) > -1 && !(e.inArray(n, ["select", "textarea"]) > -1 && !e(i).is(":focus"))
        }
        ,
        W = function() {
            var t, i = e(this), n = i.data("mCS"), s = "mCS_" + n.idx, o = e("#mCSB_" + n.idx + "_container"), r = o.parent(), a = e(".mCSB_" + n.idx + "_scrollbar ." + u[12]);
            a.bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s, function(i) {
                c = !0,
                e(i.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + s + " pointerup." + s + " MSPointerUp." + s, function(t) {
                c = !1
            }).bind("click." + s, function(s) {
                if (t && (t = 0,
                e(s.target).hasClass(u[12]) || e(s.target).hasClass("mCSB_draggerRail"))) {
                    K(i);
                    var a = e(this)
                      , l = a.find(".mCSB_dragger");
                    if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , h = s.pageX > l.offset().left ? -1 : 1
                          , d = Math.abs(o[0].offsetLeft) - h * (.9 * r.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , h = s.pageY > l.offset().top ? -1 : 1
                          , d = Math.abs(o[0].offsetTop) - h * (.9 * r.height())
                    }
                    Q(i, d.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }
        ,
        j = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = "mCS_" + i.idx
              , o = e("#mCSB_" + i.idx + "_container")
              , r = o.parent();
            o.bind("focusin." + s, function(i) {
                var s = e(document.activeElement)
                  , a = o.find(".mCustomScrollBox").length;
                s.is(n.advanced.autoScrollOnFocus) && (K(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? 17 * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [it(s)[0], it(s)[1]]
                      , i = [o[0].offsetTop, o[0].offsetLeft]
                      , a = [i[0] + e[0] >= 0 && i[0] + e[0] < r.height() - s.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < r.width() - s.outerWidth(!1)]
                      , l = "yx" !== n.axis || a[0] || a[1] ? "all" : "none";
                    "x" === n.axis || a[0] || Q(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: 0
                    }),
                    "y" === n.axis || a[1] || Q(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: 0
                    })
                }, t[0]._focusTimer))
            })
        }
        ,
        z = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = "mCS_" + i.idx
              , s = e("#mCSB_" + i.idx + "_container").parent();
            s.bind("scroll." + n, function(t) {
                0 === s.scrollTop() && 0 === s.scrollLeft() || e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
            })
        }
        ,
        F = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = i.sequential
              , o = "mCS_" + i.idx
              , r = ".mCSB_" + i.idx + "_scrollbar"
              , a = e(r + ">a");
            a.bind("contextmenu." + o, function(t) {
                t.preventDefault()
            }).bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o + " mouseup." + o + " touchend." + o + " pointerup." + o + " MSPointerUp." + o + " mouseout." + o + " pointerout." + o + " MSPointerOut." + o + " click." + o, function(o) {
                if (o.preventDefault(),
                Z(o)) {
                    var r = e(this).attr("class");
                    switch (s.type = n.scrollButtons.scrollType,
                    o.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === s.type)
                            return;
                        c = !0,
                        i.tweenRunning = !1,
                        a("on", r);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === s.type)
                            return;
                        c = !1,
                        s.dir && a("off", r);
                        break;
                    case "click":
                        if ("stepped" !== s.type || i.tweenRunning)
                            return;
                        a("on", r)
                    }
                }
                function a(e, i) {
                    s.scrollAmount = n.scrollButtons.scrollAmount,
                    q(t, e, i)
                }
            })
        }
        ,
        B = function() {
            var t = e(this)
              , i = t.data("mCS")
              , n = i.opt
              , s = i.sequential
              , o = "mCS_" + i.idx
              , r = e("#mCSB_" + i.idx)
              , a = e("#mCSB_" + i.idx + "_container")
              , l = a.parent()
              , c = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , u = a.find("iframe")
              , h = ["blur." + o + " keydown." + o + " keyup." + o];
            function d(o) {
                switch (o.type) {
                case "blur":
                    i.tweenRunning && s.dir && f("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var r = o.keyCode ? o.keyCode : o.which
                      , u = "on";
                    if ("x" !== n.axis && (38 === r || 40 === r) || "y" !== n.axis && (37 === r || 39 === r)) {
                        if ((38 === r || 40 === r) && !i.overflowed[0] || (37 === r || 39 === r) && !i.overflowed[1])
                            return;
                        "keyup" === o.type && (u = "off"),
                        e(document.activeElement).is(c) || (o.preventDefault(),
                        o.stopImmediatePropagation(),
                        f(u, r))
                    } else if (33 === r || 34 === r) {
                        if ((i.overflowed[0] || i.overflowed[1]) && (o.preventDefault(),
                        o.stopImmediatePropagation()),
                        "keyup" === o.type) {
                            K(t);
                            var h = 34 === r ? -1 : 1;
                            if ("x" === n.axis || "yx" === n.axis && i.overflowed[1] && !i.overflowed[0])
                                var d = "x"
                                  , p = Math.abs(a[0].offsetLeft) - h * (.9 * l.width());
                            else
                                var d = "y"
                                  , p = Math.abs(a[0].offsetTop) - h * (.9 * l.height());
                            Q(t, p.toString(), {
                                dir: d,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === r || 36 === r) && !e(document.activeElement).is(c) && ((i.overflowed[0] || i.overflowed[1]) && (o.preventDefault(),
                    o.stopImmediatePropagation()),
                    "keyup" === o.type)) {
                        if ("x" === n.axis || "yx" === n.axis && i.overflowed[1] && !i.overflowed[0])
                            var d = "x"
                              , p = 35 === r ? Math.abs(l.width() - a.outerWidth(!1)) : 0;
                        else
                            var d = "y"
                              , p = 35 === r ? Math.abs(l.height() - a.outerHeight(!1)) : 0;
                        Q(t, p.toString(), {
                            dir: d,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
                function f(e, o) {
                    s.type = n.keyboard.scrollType,
                    s.scrollAmount = n.keyboard.scrollAmount,
                    "stepped" === s.type && i.tweenRunning || q(t, e, o)
                }
            }
            u.length && u.each(function() {
                e(this).bind("load", function() {
                    H(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(t) {
                        d(t)
                    })
                })
            }),
            r.attr("tabindex", "0").bind(h[0], function(t) {
                d(t)
            })
        }
        ,
        q = function(t, i, n, s, o) {
            var r = t.data("mCS")
              , a = r.opt
              , l = r.sequential
              , c = e("#mCSB_" + r.idx + "_container")
              , h = "stepped" === l.type
              , d = a.scrollInertia < 26 ? 26 : a.scrollInertia
              , p = a.scrollInertia < 1 ? 17 : a.scrollInertia;
            switch (i) {
            case "on":
                if (l.dir = [n === u[16] || n === u[15] || 39 === n || 37 === n ? "x" : "y", n === u[13] || n === u[15] || 38 === n || 37 === n ? -1 : 1],
                K(t),
                et(n) && "stepped" === l.type)
                    return;
                f(h);
                break;
            case "off":
                clearTimeout(l.step),
                J(l, "step"),
                K(t),
                (h || r.tweenRunning && l.dir) && f(!0)
            }
            function f(e) {
                a.snapAmount && (l.scrollAmount = a.snapAmount instanceof Array ? "x" === l.dir[0] ? a.snapAmount[1] : a.snapAmount[0] : a.snapAmount);
                var i = "stepped" !== l.type
                  , n = o || (e ? i ? d / 1.5 : p : 1e3 / 60)
                  , u = e ? i ? 7.5 : 40 : 2.5
                  , h = [Math.abs(c[0].offsetTop), Math.abs(c[0].offsetLeft)]
                  , m = [r.scrollRatio.y > 10 ? 10 : r.scrollRatio.y, r.scrollRatio.x > 10 ? 10 : r.scrollRatio.x]
                  , g = "x" === l.dir[0] ? h[1] + l.dir[1] * (m[1] * u) : h[0] + l.dir[1] * (m[0] * u)
                  , v = "x" === l.dir[0] ? h[1] + l.dir[1] * parseInt(l.scrollAmount) : h[0] + l.dir[1] * parseInt(l.scrollAmount)
                  , _ = "auto" !== l.scrollAmount ? v : g
                  , b = s || (e ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear")
                  , y = !!e;
                e && n < 17 && (_ = "x" === l.dir[0] ? h[1] : h[0]),
                Q(t, _.toString(), {
                    dir: l.dir[0],
                    scrollEasing: b,
                    dur: n,
                    onComplete: y
                }),
                e ? l.dir = !1 : (clearTimeout(l.step),
                l.step = setTimeout(function() {
                    f()
                }, n))
            }
        }
        ,
        U = function(t) {
            var i = e(this).data("mCS").opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === i.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === i.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === i.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }
        ,
        V = function(t, i) {
            if (null != t && void 0 !== t) {
                var n = e(this)
                  , s = n.data("mCS")
                  , o = s.opt
                  , r = e("#mCSB_" + s.idx + "_container")
                  , a = r.parent()
                  , l = typeof t;
                i || (i = "x" === o.axis ? "x" : "y");
                var c = "x" === i ? r.outerWidth(!1) - a.width() : r.outerHeight(!1) - a.height()
                  , u = "x" === i ? r[0].offsetLeft : r[0].offsetTop
                  , d = "x" === i ? "left" : "top";
                switch (l) {
                case "function":
                    return t();
                case "object":
                    var p = t.jquery ? t : e(t);
                    if (!p.length)
                        return;
                    return "x" === i ? it(p)[1] : it(p)[0];
                case "string":
                case "number":
                    if (et(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(c * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(u - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var f = u + parseInt(t.split("+=")[1]);
                        return f >= 0 ? 0 : Math.abs(f)
                    }
                    if (-1 !== t.indexOf("px") && et(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(a.height() - r.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(a.width() - r.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var p = r.find(":" + t);
                        return "x" === i ? it(p)[1] : it(p)[0]
                    }
                    return e(t).length ? "x" === i ? it(e(t))[1] : it(e(t))[0] : (r.css(d, t),
                    void h.update.call(null, n[0]))
                }
            }
        }
        ,
        Y = function(t) {
            var i = e(this)
              , n = i.data("mCS")
              , s = n.opt
              , o = e("#mCSB_" + n.idx + "_container");
            if (t)
                return clearTimeout(o[0].autoUpdate),
                void J(o[0], "autoUpdate");
            function r(t) {
                clearTimeout(o[0].autoUpdate),
                h.update.call(null, i[0], t)
            }
            !function t() {
                clearTimeout(o[0].autoUpdate),
                0 !== i.parents("html").length ? o[0].autoUpdate = setTimeout(function() {
                    return s.advanced.updateOnSelectorChange && (n.poll.change.n = function() {
                        !0 === s.advanced.updateOnSelectorChange && (s.advanced.updateOnSelectorChange = "*");
                        var t = 0
                          , e = o.find(s.advanced.updateOnSelectorChange);
                        return s.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                            t += this.offsetHeight + this.offsetWidth
                        }),
                        t
                    }(),
                    n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n,
                    void r(3)) : s.advanced.updateOnContentResize && (n.poll.size.n = i[0].scrollHeight + i[0].scrollWidth + o[0].offsetHeight + i[0].offsetHeight + i[0].offsetWidth,
                    n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n,
                    void r(1)) : !s.advanced.updateOnImageLoad || "auto" === s.advanced.updateOnImageLoad && "y" === s.axis || (n.poll.img.n = o.find("img").length,
                    n.poll.img.n === n.poll.img.o) ? void ((s.advanced.updateOnSelectorChange || s.advanced.updateOnContentResize || s.advanced.updateOnImageLoad) && t()) : (n.poll.img.o = n.poll.img.n,
                    void o.find("img").each(function() {
                        !function(t) {
                            if (e(t).hasClass(u[2]))
                                r();
                            else {
                                var i, n, s = new Image;
                                s.onload = (i = s,
                                n = function() {
                                    this.onload = null,
                                    e(t).addClass(u[2]),
                                    r(2)
                                }
                                ,
                                function() {
                                    return n.apply(i, arguments)
                                }
                                ),
                                s.src = t.src
                            }
                        }(this)
                    }))
                }, s.advanced.autoUpdateTimeout) : i = null
            }()
        }
        ,
        K = function(t) {
            var i = t.data("mCS")
              , n = e("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
            n.each(function() {
                $.call(this)
            })
        }
        ,
        Q = function(t, i, n) {
            var s = t.data("mCS")
              , o = s.opt
              , r = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: o.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(r, n)
              , a = [n.dur, n.drag ? 0 : n.dur]
              , l = e("#mCSB_" + s.idx)
              , c = e("#mCSB_" + s.idx + "_container")
              , u = c.parent()
              , h = o.callbacks.onTotalScrollOffset ? U.call(t, o.callbacks.onTotalScrollOffset) : [0, 0]
              , d = o.callbacks.onTotalScrollBackOffset ? U.call(t, o.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === u.scrollTop() && 0 === u.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            u.scrollTop(0).scrollLeft(0)),
            "_resetY" !== i || s.contentReset.y || (T("onOverflowYNone") && o.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== i || s.contentReset.x || (T("onOverflowXNone") && o.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== i && "_resetX" !== i) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (T("onOverflowY") && o.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (T("onOverflowX") && o.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                o.snapAmount) {
                    var p = o.snapAmount instanceof Array ? "x" === n.dir ? o.snapAmount[1] : o.snapAmount[0] : o.snapAmount;
                    i = function(t, e, i) {
                        return Math.round(t / e) * e - i
                    }(i, p, o.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var f = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , m = "left"
                      , g = c[0].offsetLeft
                      , v = [l.width() - c.outerWidth(!1), f.parent().width() - f.width()]
                      , _ = [i, 0 === i ? 0 : i / s.scrollRatio.x]
                      , b = h[1]
                      , y = d[1]
                      , w = b > 0 ? b / s.scrollRatio.x : 0
                      , x = y > 0 ? y / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var f = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , m = "top"
                      , g = c[0].offsetTop
                      , v = [l.height() - c.outerHeight(!1), f.parent().height() - f.height()]
                      , _ = [i, 0 === i ? 0 : i / s.scrollRatio.y]
                      , b = h[0]
                      , y = d[0]
                      , w = b > 0 ? b / s.scrollRatio.y : 0
                      , x = y > 0 ? y / s.scrollRatio.y : 0
                }
                _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= v[1] ? _ = [v[0], v[1]] : _[0] = -_[0],
                t[0].mcs || (k(),
                T("onInit") && o.callbacks.onInit.call(t[0])),
                clearTimeout(c[0].onCompleteTimeout),
                G(f[0], m, Math.round(_[1]), a[1], n.scrollEasing),
                !s.tweenRunning && (0 === g && _[0] >= 0 || g === v[0] && _[0] <= v[0]) || G(c[0], m, Math.round(_[0]), a[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (T("onScrollStart") && (k(),
                        o.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(f),
                        s.cbOffsets = [o.callbacks.alwaysTriggerOffsets || g >= v[0] + b, o.callbacks.alwaysTriggerOffsets || g <= -y])
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && T("whileScrolling") && (k(),
                        o.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === o.axis && clearTimeout(c[0].onCompleteTimeout);
                            var e = c[0].idleTimer || 0;
                            c[0].onCompleteTimeout = setTimeout(function() {
                                T("onScroll") && (k(),
                                o.callbacks.onScroll.call(t[0])),
                                T("onTotalScroll") && _[1] >= v[1] - w && s.cbOffsets[0] && (k(),
                                o.callbacks.onTotalScroll.call(t[0])),
                                T("onTotalScrollBack") && _[1] <= x && s.cbOffsets[1] && (k(),
                                o.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                c[0].idleTimer = 0,
                                C(f, "hide")
                            }, e)
                        }
                    }
                })
            }
            function T(t) {
                return s && o.callbacks[t] && "function" == typeof o.callbacks[t]
            }
            function k() {
                var e = [c[0].offsetTop, c[0].offsetLeft]
                  , i = [f[0].offsetTop, f[0].offsetLeft]
                  , s = [c.outerHeight(!1), c.outerWidth(!1)]
                  , o = [l.height(), l.width()];
                t[0].mcs = {
                    content: c,
                    top: e[0],
                    left: e[1],
                    draggerTop: i[0],
                    draggerLeft: i[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(s[0]) - o[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(s[1]) - o[1])),
                    direction: n.dir
                }
            }
        }
        ,
        G = function(t, e, i, n, s, o, r) {
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            var a, l, r = r || {}, c = r.onStart || function() {}
            , u = r.onUpdate || function() {}
            , h = r.onComplete || function() {}
            , d = X(), p = 0, f = t.offsetTop, m = t.style, g = t._mTween[e];
            "left" === e && (f = t.offsetLeft);
            var v = i - f;
            function _() {
                g.stop || (p || c.call(),
                p = X() - d,
                b(),
                p >= g.time && (g.time = p > g.time ? p + a - (p - g.time) : p + a - 1,
                g.time < p + 1 && (g.time = p + 1)),
                g.time < n ? g.id = l(_) : h.call())
            }
            function b() {
                n > 0 ? (g.currVal = function(t, e, i, n, s) {
                    switch (s) {
                    case "linear":
                    case "mcsLinear":
                        return i * t / n + e;
                    case "mcsLinearOut":
                        return t /= n,
                        t--,
                        i * Math.sqrt(1 - t * t) + e;
                    case "easeInOutSmooth":
                        return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                    case "easeInOutStrong":
                        return (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--,
                        i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                    case "easeInOut":
                    case "mcsEaseInOut":
                        return (t /= n / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                    case "easeOutSmooth":
                        return t /= n,
                        -i * (--t * t * t * t - 1) + e;
                    case "easeOutStrong":
                        return i * (1 - Math.pow(2, -10 * t / n)) + e;
                    case "easeOut":
                    case "mcsEaseOut":
                    default:
                        var o = (t /= n) * t
                          , r = o * t;
                        return e + i * (.499999999999997 * r * o + -2.5 * o * o + 5.5 * r + -6.5 * o + 4 * t)
                    }
                }(g.time, f, v, n, s),
                m[e] = Math.round(g.currVal) + "px") : m[e] = i + "px",
                u.call()
            }
            g.stop = 0,
            "none" !== o && null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id),
            g.id = null),
            a = 1e3 / 60,
            g.time = p + a,
            l = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                return b(),
                setTimeout(t, .01)
            }
            ,
            g.id = l(_)
        }
        ,
        X = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }
        ,
        $ = function() {
            var t = this;
            t._mTween || (t._mTween = {
                top: {},
                left: {}
            });
            for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                var n = e[i];
                t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id),
                t._mTween[n].id = null,
                t._mTween[n].stop = 1)
            }
        }
        ,
        J = function(t, e) {
            try {
                delete t[e]
            } catch (i) {
                t[e] = null
            }
        }
        ,
        Z = function(t) {
            return !(t.which && 1 !== t.which)
        }
        ,
        tt = function(t) {
            var e = t.originalEvent.pointerType;
            return !(e && "touch" !== e && 2 !== e)
        }
        ,
        et = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
        ,
        it = function(t) {
            var e = t.parents(".mCSB_container");
            return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
        }
        ,
        nt = function() {
            var t = function() {
                var t = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var e = 0; e < t.length; e++)
                    if (t[e] + "Hidden"in document)
                        return t[e] + "Hidden";
                return null
            }();
            return !!t && document[t]
        }
        ,
        e.fn[s] = function(t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
        }
        ,
        e[s] = function(t) {
            return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : h.init.apply(this, arguments)
        }
        ,
        e[s].defaults = o,
        window[s] = !0,
        e(window).bind("load", function() {
            e(".mCustomScrollbar")[s](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var i, n, s = e(t), o = s.parents(".mCSB_container");
                    if (o.length)
                        return i = o.parent(),
                        (n = [o[0].offsetTop, o[0].offsetLeft])[0] + it(s)[0] >= 0 && n[0] + it(s)[0] < i.height() - s.outerHeight(!1) && n[1] + it(s)[1] >= 0 && n[1] + it(s)[1] < i.width() - s.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, i, n) {
                    var s, o, r, a, l = e(t), c = l.parents(".mCSB_container"), u = "exact" === n[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return s = [l.outerHeight(!1), l.outerWidth(!1)],
                        r = [c[0].offsetTop + it(l)[0], c[0].offsetLeft + it(l)[1]],
                        o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        r[0] - o[0] * (a = [s[0] < o[0] ? u[0] : u[1], s[1] < o[1] ? u[0] : u[1]])[0][0] < 0 && r[0] + s[0] - o[0] * a[0][1] >= 0 && r[1] - o[1] * a[1][0] < 0 && r[1] + s[1] - o[1] * a[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var i = e(t).data("mCS");
                    if (i)
                        return i.overflowed[0] || i.overflowed[1]
                }
            })
        })
    }
    ) ? n.apply(e, s) : n) || (t.exports = o)
}
, function(t, e) {
    (function(e) {
        t.exports = e
    }
    ).call(this, {})
}
, function(t, e) {}
]);

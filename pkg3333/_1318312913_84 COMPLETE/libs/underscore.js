var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(r) {
    return void 0 === r ? "undefined" : n(r);
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : void 0 === r ? "undefined" : n(r);
};

!function() {
    var n = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self.self === self && self || "object" == ("undefined" == typeof global ? "undefined" : r(global)) && global.global === global && global || this || {}, t = n._, e = Array.prototype, u = Object.prototype, i = "undefined" != typeof Symbol ? Symbol.prototype : null, o = e.push, a = e.slice, c = u.toString, f = u.hasOwnProperty, l = Array.isArray, s = Object.keys, p = Object.create, v = function() {}, h = function n(r) {
        return r instanceof n ? r : this instanceof n ? void (this._wrapped = r) : new n(r);
    };
    "undefined" == typeof exports || exports.nodeType ? n._ = h : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = h), 
    exports._ = h), h.VERSION = "1.8.3";
    var y, d = function(n, r, t) {
        if (void 0 === r) return n;
        switch (t) {
          case 1:
            return function(t) {
                return n.call(r, t);
            };

          case null:
          case 3:
            return function(t, e, u) {
                return n.call(r, t, e, u);
            };

          case 4:
            return function(t, e, u, i) {
                return n.call(r, t, e, u, i);
            };
        }
        return function() {
            return n.apply(r, arguments);
        };
    }, g = function(n, r, t) {
        return h.iteratee !== y ? h.iteratee(n, r) : null == n ? h.identity : h.isFunction(n) ? d(n, r, t) : h.isObject(n) && !h.isArray(n) ? h.matcher(n) : h.property(n);
    };
    h.iteratee = y = function(n, r) {
        return g(n, r, 1 / 0);
    };
    var m = function(n, r) {
        return r = null == r ? n.length - 1 : +r, function() {
            for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; u < t; u++) e[u] = arguments[u + r];
            switch (r) {
              case 0:
                return n.call(this, e);

              case 1:
                return n.call(this, arguments[0], e);

              case 2:
                return n.call(this, arguments[0], arguments[1], e);
            }
            var i = Array(r + 1);
            for (u = 0; u < r; u++) i[u] = arguments[u];
            return i[r] = e, n.apply(this, i);
        };
    }, b = function(n) {
        if (!h.isObject(n)) return {};
        if (p) return p(n);
        v.prototype = n;
        var r = new v();
        return v.prototype = null, r;
    }, j = function(n) {
        return function(r) {
            return null == r ? void 0 : r[n];
        };
    }, x = function(n, r) {
        for (var t = r.length, e = 0; e < t; e++) {
            if (null == n) return;
            n = n[r[e]];
        }
        return t ? n : void 0;
    }, _ = Math.pow(2, 53) - 1, A = j("length"), S = function(n) {
        var r = A(n);
        return "number" == typeof r && r >= 0 && r <= _;
    };
    h.each = h.forEach = function(n, r, t) {
        r = d(r, t);
        var e, u;
        if (S(n)) for (e = 0, u = n.length; e < u; e++) r(n[e], e, n); else {
            var i = h.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n);
        }
        return n;
    }, h.map = h.collect = function(n, r, t) {
        r = g(r, t);
        for (var e = !S(n) && h.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n);
        }
        return i;
    };
    var w = function(n) {
        var r = function(r, t, e, u) {
            var i = !S(r) && h.keys(r), o = (i || r).length, a = n > 0 ? 0 : o - 1;
            for (u || (e = r[i ? i[a] : a], a += n); a >= 0 && a < o; a += n) {
                var c = i ? i[a] : a;
                e = t(e, r[c], c, r);
            }
            return e;
        };
        return function(n, t, e, u) {
            var i = arguments.length >= 3;
            return r(n, d(t, u, 4), e, i);
        };
    };
    h.reduce = h.foldl = h.inject = w(1), h.reduceRight = h.foldr = w(-1), h.find = h.detect = function(n, r, t) {
        var e = (S(n) ? h.findIndex : h.findKey)(n, r, t);
        if (void 0 !== e && -1 !== e) return n[e];
    }, h.filter = h.select = function(n, r, t) {
        var e = [];
        return r = g(r, t), h.each(n, function(n, t, u) {
            r(n, t, u) && e.push(n);
        }), e;
    }, h.reject = function(n, r, t) {
        return h.filter(n, h.negate(g(r)), t);
    }, h.every = h.all = function(n, r, t) {
        r = g(r, t);
        for (var e = !S(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1;
        }
        return !0;
    }, h.some = h.any = function(n, r, t) {
        r = g(r, t);
        for (var e = !S(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0;
        }
        return !1;
    }, h.contains = h.includes = h.include = function(n, r, t, e) {
        return S(n) || (n = h.values(n)), ("number" != typeof t || e) && (t = 0), h.indexOf(n, r, t) >= 0;
    }, h.invoke = m(function(n, r, t) {
        var e, u;
        return h.isFunction(r) ? u = r : h.isArray(r) && (e = r.slice(0, -1), r = r[r.length - 1]), 
        h.map(n, function(n) {
            var i = u;
            if (!i) {
                if (e && e.length && (n = x(n, e)), null == n) return;
                i = n[r];
            }
            return null == i ? i : i.apply(n, t);
        });
    }), h.pluck = function(n, r) {
        return h.map(n, h.property(r));
    }, h.where = function(n, r) {
        return h.filter(n, h.matcher(r));
    }, h.findWhere = function(n, r) {
        return h.find(n, h.matcher(r));
    }, h.max = function(n, t, e) {
        var u, i, o = -1 / 0, a = -1 / 0;
        if (null == t || "number" == typeof t && "object" != r(n[0]) && null != n) for (var c = 0, f = (n = S(n) ? n : h.values(n)).length; c < f; c++) null != (u = n[c]) && u > o && (o = u); else t = g(t, e), 
        h.each(n, function(n, r, e) {
            ((i = t(n, r, e)) > a || i === -1 / 0 && o === -1 / 0) && (o = n, a = i);
        });
        return o;
    }, h.min = function(n, t, e) {
        var u, i, o = 1 / 0, a = 1 / 0;
        if (null == t || "number" == typeof t && "object" != r(n[0]) && null != n) for (var c = 0, f = (n = S(n) ? n : h.values(n)).length; c < f; c++) null != (u = n[c]) && u < o && (o = u); else t = g(t, e), 
        h.each(n, function(n, r, e) {
            ((i = t(n, r, e)) < a || i === 1 / 0 && o === 1 / 0) && (o = n, a = i);
        });
        return o;
    }, h.shuffle = function(n) {
        return h.sample(n, 1 / 0);
    }, h.sample = function(n, r, t) {
        if (null == r || t) return S(n) || (n = h.values(n)), n[h.random(n.length - 1)];
        var e = S(n) ? h.clone(n) : h.values(n), u = A(e);
        r = Math.max(Math.min(r, u), 0);
        for (var i = u - 1, o = 0; o < r; o++) {
            var a = h.random(o, i), c = e[o];
            e[o] = e[a], e[a] = c;
        }
        return e.slice(0, r);
    }, h.sortBy = function(n, r, t) {
        var e = 0;
        return r = g(r, t), h.pluck(h.map(n, function(n, t, u) {
            return {
                value: n,
                index: e++,
                criteria: r(n, t, u)
            };
        }).sort(function(n, r) {
            var t = n.criteria, e = r.criteria;
            if (t !== e) {
                if (t > e || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
        }), "value");
    };
    var O = function(n, r) {
        return function(t, e, u) {
            var i = r ? [ [], [] ] : {};
            return e = g(e, u), h.each(t, function(r, u) {
                var o = e(r, u, t);
                n(i, r, o);
            }), i;
        };
    };
    h.groupBy = O(function(n, r, t) {
        h.has(n, t) ? n[t].push(r) : n[t] = [ r ];
    }), h.indexBy = O(function(n, r, t) {
        n[t] = r;
    }), h.countBy = O(function(n, r, t) {
        h.has(n, t) ? n[t]++ : n[t] = 1;
    });
    var k = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    h.toArray = function(n) {
        return n ? h.isArray(n) ? a.call(n) : h.isString(n) ? n.match(k) : S(n) ? h.map(n, h.identity) : h.values(n) : [];
    }, h.size = function(n) {
        return null == n ? 0 : S(n) ? n.length : h.keys(n).length;
    }, h.partition = O(function(n, r, t) {
        n[t ? 0 : 1].push(r);
    }, !0), h.first = h.head = h.take = function(n, r, t) {
        if (!(null == n || n.length < 1)) return null == r || t ? n[0] : h.initial(n, n.length - r);
    }, h.initial = function(n, r, t) {
        return a.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
    }, h.last = function(n, r, t) {
        if (!(null == n || n.length < 1)) return null == r || t ? n[n.length - 1] : h.rest(n, Math.max(0, n.length - r));
    }, h.rest = h.tail = h.drop = function(n, r, t) {
        return a.call(n, null == r || t ? 1 : r);
    }, h.compact = function(n) {
        return h.filter(n, Boolean);
    };
    var M = function n(r, t, e, u) {
        for (var i = (u = u || []).length, o = 0, a = A(r); o < a; o++) {
            var c = r[o];
            if (S(c) && (h.isArray(c) || h.isArguments(c))) if (t) for (var f = 0, l = c.length; f < l; ) u[i++] = c[f++]; else n(c, t, e, u), 
            i = u.length; else e || (u[i++] = c);
        }
        return u;
    };
    h.flatten = function(n, r) {
        return M(n, r, !1);
    }, h.without = m(function(n, r) {
        return h.difference(n, r);
    }), h.uniq = h.unique = function(n, r, t, e) {
        h.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = g(t, e));
        for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
            var c = n[o], f = t ? t(c, o, n) : c;
            r ? (o && i === f || u.push(c), i = f) : t ? h.contains(i, f) || (i.push(f), u.push(c)) : h.contains(u, c) || u.push(c);
        }
        return u;
    }, h.union = m(function(n) {
        return h.uniq(M(n, !0, !0));
    }), h.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
            var i = n[e];
            if (!h.contains(r, i)) {
                var o;
                for (o = 1; o < t && h.contains(arguments[o], i); o++) ;
                o === t && r.push(i);
            }
        }
        return r;
    }, h.difference = m(function(n, r) {
        return r = M(r, !0, !0), h.filter(n, function(n) {
            return !h.contains(r, n);
        });
    }), h.unzip = function(n) {
        for (var r = n && h.max(n, A).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = h.pluck(n, e);
        return t;
    }, h.zip = m(h.unzip), h.object = function(n, r) {
        for (var t = {}, e = 0, u = A(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t;
    };
    var F = function(n) {
        return function(r, t, e) {
            t = g(t, e);
            for (var u = A(r), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n) if (t(r[i], i, r)) return i;
            return -1;
        };
    };
    h.findIndex = F(1), h.findLastIndex = F(-1), h.sortedIndex = function(n, r, t, e) {
        for (var u = (t = g(t, e, 1))(r), i = 0, o = A(n); i < o; ) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a;
        }
        return i;
    };
    var E = function(n, r, t) {
        return function(e, u, i) {
            var o = 0, c = A(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + c, o) : c = i >= 0 ? Math.min(i + 1, c) : i + c + 1; else if (t && i && c) return i = t(e, u), 
            e[i] === u ? i : -1;
            if (u !== u) return (i = r(a.call(e, o, c), h.isNaN)) >= 0 ? i + o : -1;
            for (i = n > 0 ? o : c - 1; i >= 0 && i < c; i += n) if (e[i] === u) return i;
            return -1;
        };
    };
    h.indexOf = E(1, h.findIndex, h.sortedIndex), h.lastIndexOf = E(-1, h.findLastIndex), 
    h.range = function(n, r, t) {
        null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1);
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, 
        n += t) u[i] = n;
        return u;
    }, h.chunk = function(n, r) {
        if (null == r || r < 1) return [];
        for (var t = [], e = 0, u = n.length; e < u; ) t.push(a.call(n, e, e += r));
        return t;
    };
    var N = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = b(n.prototype), o = n.apply(i, u);
        return h.isObject(o) ? o : i;
    };
    h.bind = m(function(n, r, t) {
        if (!h.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var e = m(function(u) {
            return N(n, e, r, this, t.concat(u));
        });
        return e;
    }), (h.partial = m(function(n, r) {
        var t = h.partial.placeholder;
        return function e() {
            for (var u = 0, i = r.length, o = Array(i), a = 0; a < i; a++) o[a] = r[a] === t ? arguments[u++] : r[a];
            for (;u < arguments.length; ) o.push(arguments[u++]);
            return N(n, e, this, this, o);
        };
    })).placeholder = h, h.bindAll = m(function(n, r) {
        var t = (r = M(r, !1, !1)).length;
        if (t < 1) throw new Error("bindAll must be passed function names");
        for (;t--; ) {
            var e = r[t];
            n[e] = h.bind(n[e], n);
        }
    }), h.memoize = function(n, r) {
        var t = function t(e) {
            var u = t.cache, i = "" + (r ? r.apply(this, arguments) : e);
            return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };
        return t.cache = {}, t;
    }, h.delay = m(function(n, r, t) {
        return setTimeout(function() {
            return n.apply(null, t);
        }, r);
    }), h.defer = h.partial(h.delay, h, 1), h.throttle = function(n, r, t) {
        var e, u, i, o, a = 0;
        t || (t = {});
        var c = function() {
            a = !1 === t.leading ? 0 : h.now(), e = null, o = n.apply(u, i), e || (u = i = null);
        }, f = function() {
            var f = h.now();
            a || !1 !== t.leading || (a = f);
            var l = r - (f - a);
            return u = this, i = arguments, l <= 0 || l > r ? (e && (clearTimeout(e), e = null), 
            a = f, o = n.apply(u, i), e || (u = i = null)) : e || !1 === t.trailing || (e = setTimeout(c, l)), 
            o;
        };
        return f.cancel = function() {
            clearTimeout(e), a = 0, e = u = i = null;
        }, f;
    }, h.debounce = function(n, r, t) {
        var e, u, i = function(r, t) {
            e = null, t && (u = n.apply(r, t));
        }, o = m(function(o) {
            if (e && clearTimeout(e), t) {
                var a = !e;
                e = setTimeout(i, r), a && (u = n.apply(this, o));
            } else e = h.delay(i, r, this, o);
            return u;
        });
        return o.cancel = function() {
            clearTimeout(e), e = null;
        }, o;
    }, h.wrap = function(n, r) {
        return h.partial(r, n);
    }, h.negate = function(n) {
        return function() {
            return !n.apply(this, arguments);
        };
    }, h.compose = function() {
        var n = arguments, r = n.length - 1;
        return function() {
            for (var t = r, e = n[r].apply(this, arguments); t--; ) e = n[t].call(this, e);
            return e;
        };
    }, h.after = function(n, r) {
        return function() {
            if (--n < 1) return r.apply(this, arguments);
        };
    }, h.before = function(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
        };
    }, h.once = h.partial(h.before, 2), h.restArgs = m;
    var I = !{
        toString: null
    }.propertyIsEnumerable("toString"), T = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], B = function(n, r) {
        var t = T.length, e = n.constructor, i = h.isFunction(e) && e.prototype || u, o = "constructor";
        for (h.has(n, o) && !h.contains(r, o) && r.push(o); t--; ) (o = T[t]) in n && n[o] !== i[o] && !h.contains(r, o) && r.push(o);
    };
    h.keys = function(n) {
        if (!h.isObject(n)) return [];
        if (s) return s(n);
        var r = [];
        for (var t in n) h.has(n, t) && r.push(t);
        return I && B(n, r), r;
    }, h.allKeys = function(n) {
        if (!h.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return I && B(n, r), r;
    }, h.values = function(n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e;
    }, h.mapObject = function(n, r, t) {
        r = g(r, t);
        for (var e = h.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
            var a = e[o];
            i[a] = r(n[a], a, n);
        }
        return i;
    }, h.pairs = function(n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [ r[u], n[r[u]] ];
        return e;
    }, h.invert = function(n) {
        for (var r = {}, t = h.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r;
    }, h.functions = h.methods = function(n) {
        var r = [];
        for (var t in n) h.isFunction(n[t]) && r.push(t);
        return r.sort();
    };
    var R = function(n, r) {
        return function(t) {
            var e = arguments.length;
            if (r && (t = Object(t)), e < 2 || null == t) return t;
            for (var u = 1; u < e; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
                var f = o[c];
                r && void 0 !== t[f] || (t[f] = i[f]);
            }
            return t;
        };
    };
    h.extend = R(h.allKeys), h.extendOwn = h.assign = R(h.keys), h.findKey = function(n, r, t) {
        r = g(r, t);
        for (var e, u = h.keys(n), i = 0, o = u.length; i < o; i++) if (e = u[i], r(n[e], e, n)) return e;
    };
    var q = function(n, r, t) {
        return r in t;
    };
    h.pick = m(function(n, r) {
        var t = {}, e = r[0];
        if (null == n) return t;
        h.isFunction(e) ? (r.length > 1 && (e = d(e, r[1])), r = h.allKeys(n)) : (e = q, 
        r = M(r, !1, !1), n = Object(n));
        for (var u = 0, i = r.length; u < i; u++) {
            var o = r[u], a = n[o];
            e(a, o, n) && (t[o] = a);
        }
        return t;
    }), h.omit = m(function(n, r) {
        var t, e = r[0];
        return h.isFunction(e) ? (e = h.negate(e), r.length > 1 && (t = r[1])) : (r = h.map(M(r, !1, !1), String), 
        e = function(n, t) {
            return !h.contains(r, t);
        }), h.pick(n, e, t);
    }), h.defaults = R(h.allKeys, !0), h.create = function(n, r) {
        var t = b(n);
        return r && h.extendOwn(t, r), t;
    }, h.clone = function(n) {
        return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n;
    }, h.tap = function(n, r) {
        return r(n), n;
    }, h.isMatch = function(n, r) {
        var t = h.keys(r), e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1;
        }
        return !0;
    };
    var K, z;
    K = function(n, t, e, u) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return !1;
        if (n !== n) return t !== t;
        var i = void 0 === n ? "undefined" : r(n);
        return ("function" === i || "object" === i || "object" == (void 0 === t ? "undefined" : r(t))) && z(n, t, e, u);
    }, z = function(n, t, e, u) {
        n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped);
        var o = c.call(n);
        if (o !== c.call(t)) return !1;
        switch (o) {
          case "[object RegExp]":
          case "[object String]":
            return "" + n == "" + t;

          case "[object Number]":
            return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +n == +t;

          case "[object Symbol]":
            return i.valueOf.call(n) === i.valueOf.call(t);
        }
        var a = "[object Array]" === o;
        if (!a) {
            if ("object" != (void 0 === n ? "undefined" : r(n)) || "object" != (void 0 === t ? "undefined" : r(t))) return !1;
            var f = n.constructor, l = t.constructor;
            if (f !== l && !(h.isFunction(f) && f instanceof f && h.isFunction(l) && l instanceof l) && "constructor" in n && "constructor" in t) return !1;
        }
        e = e || [], u = u || [];
        for (var s = e.length; s--; ) if (e[s] === n) return u[s] === t;
        if (e.push(n), u.push(t), a) {
            if ((s = n.length) !== t.length) return !1;
            for (;s--; ) if (!K(n[s], t[s], e, u)) return !1;
        } else {
            var p, v = h.keys(n);
            if (s = v.length, h.keys(t).length !== s) return !1;
            for (;s--; ) if (p = v[s], !h.has(t, p) || !K(n[p], t[p], e, u)) return !1;
        }
        return e.pop(), u.pop(), !0;
    }, h.isEqual = function(n, r) {
        return K(n, r);
    }, h.isEmpty = function(n) {
        return null == n || (S(n) && (h.isArray(n) || h.isString(n) || h.isArguments(n)) ? 0 === n.length : 0 === h.keys(n).length);
    }, h.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, h.isArray = l || function(n) {
        return "[object Array]" === c.call(n);
    }, h.isObject = function(n) {
        var t = void 0 === n ? "undefined" : r(n);
        return "function" === t || "object" === t && !!n;
    }, h.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet" ], function(n) {
        h["is" + n] = function(r) {
            return c.call(r) === "[object " + n + "]";
        };
    }), h.isArguments(arguments) || (h.isArguments = function(n) {
        return h.has(n, "callee");
    });
    var D = n.document && n.document.childNodes;
    "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : r(Int8Array)) && "function" != typeof D && (h.isFunction = function(n) {
        return "function" == typeof n || !1;
    }), h.isFinite = function(n) {
        return !h.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n));
    }, h.isNaN = function(n) {
        return h.isNumber(n) && isNaN(n);
    }, h.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === c.call(n);
    }, h.isNull = function(n) {
        return null === n;
    }, h.isUndefined = function(n) {
        return void 0 === n;
    }, h.has = function(n, r) {
        if (!h.isArray(r)) return null != n && f.call(n, r);
        for (var t = r.length, e = 0; e < t; e++) {
            var u = r[e];
            if (null == n || !f.call(n, u)) return !1;
            n = n[u];
        }
        return !!t;
    }, h.noConflict = function() {
        return n._ = t, this;
    }, h.identity = function(n) {
        return n;
    }, h.constant = function(n) {
        return function() {
            return n;
        };
    }, h.noop = function() {}, h.property = function(n) {
        return h.isArray(n) ? function(r) {
            return x(r, n);
        } : j(n);
    }, h.propertyOf = function(n) {
        return null == n ? function() {} : function(r) {
            return h.isArray(r) ? x(n, r) : n[r];
        };
    }, h.matcher = h.matches = function(n) {
        return n = h.extendOwn({}, n), function(r) {
            return h.isMatch(r, n);
        };
    }, h.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = d(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e;
    }, h.random = function(n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1));
    }, h.now = Date.now || function() {
        return new Date().getTime();
    };
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, P = h.invert(L), W = function(n) {
        var r = function(r) {
            return n[r];
        }, t = "(?:" + h.keys(n).join("|") + ")", e = RegExp(t), u = RegExp(t, "g");
        return function(n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n;
        };
    };
    h.escape = W(L), h.unescape = W(P), h.result = function(n, r, t) {
        h.isArray(r) || (r = [ r ]);
        var e = r.length;
        if (!e) return h.isFunction(t) ? t.call(n) : t;
        for (var u = 0; u < e; u++) {
            var i = null == n ? void 0 : n[r[u]];
            void 0 === i && (i = t, u = e), n = h.isFunction(i) ? i.call(n) : i;
        }
        return n;
    };
    var C = 0;
    h.uniqueId = function(n) {
        var r = ++C + "";
        return n ? n + r : r;
    }, h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/, U = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, V = /\\|'|\r|\n|\u2028|\u2029/g, $ = function(n) {
        return "\\" + U[n];
    };
    h.template = function(n, r, t) {
        !r && t && (r = t), r = h.defaults({}, r, h.templateSettings);
        var e = RegExp([ (r.escape || J).source, (r.interpolate || J).source, (r.evaluate || J).source ].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(r, t, e, o, a) {
            return i += n.slice(u, a).replace(V, $), u = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), 
            r;
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        var o;
        try {
            o = new Function(r.variable || "obj", "_", i);
        } catch (n) {
            throw n.source = i, n;
        }
        var a = function(n) {
            return o.call(this, n, h);
        }, c = r.variable || "obj";
        return a.source = "function(" + c + "){\n" + i + "}", a;
    }, h.chain = function(n) {
        var r = h(n);
        return r._chain = !0, r;
    };
    var G = function(n, r) {
        return n._chain ? h(r).chain() : r;
    };
    h.mixin = function(n) {
        return h.each(h.functions(n), function(r) {
            var t = h[r] = n[r];
            h.prototype[r] = function() {
                var n = [ this._wrapped ];
                return o.apply(n, arguments), G(this, t.apply(h, n));
            };
        }), h;
    }, h.mixin(h), h.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var r = e[n];
        h.prototype[n] = function() {
            var t = this._wrapped;
            return r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0], 
            G(this, t);
        };
    }), h.each([ "concat", "join", "slice" ], function(n) {
        var r = e[n];
        h.prototype[n] = function() {
            return G(this, r.apply(this._wrapped, arguments));
        };
    }), h.prototype.value = function() {
        return this._wrapped;
    }, h.prototype.valueOf = h.prototype.toJSON = h.prototype.value, h.prototype.toString = function() {
        return String(this._wrapped);
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return h;
    });
}();
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
};

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "object" == ("undefined" == typeof module ? "undefined" : t(module)) ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) ? exports.Redux = n() : e.Redux = n();
}(void 0, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0);
    }([ function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
            var o = r(n(2)), i = r(n(9)), u = r(n(8)), c = r(n(7)), f = r(n(1));
            r(n(3)), t.createStore = o.default, t.combineReducers = i.default, t.bindActionCreators = u.default, 
            t.applyMiddleware = c.default, t.compose = f.default;
        }).call(t, n(6));
    }, function(e, t) {
        t.__esModule = !0, t.default = function() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            if (0 === t.length) return function(e) {
                return e;
            };
            if (1 === (t = t.filter(function(e) {
                return "function" == typeof e;
            })).length) return t[0];
            var r = t[t.length - 1], o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(e, t) {
                    return t(e);
                }, r.apply(void 0, arguments));
            };
        };
    }, function(e, n, r) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, n, r) {
            function o() {
                h === v && (h = v.slice());
            }
            function a() {
                return y;
            }
            function d(e) {
                if ("function" != typeof e) throw Error("Expected listener to be a function.");
                var t = !0;
                return o(), h.push(e), function() {
                    if (t) {
                        t = !1, o();
                        var n = h.indexOf(e);
                        h.splice(n, 1);
                    }
                };
            }
            function l(e) {
                if (!(0, u.default)(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (b) throw Error("Reducers may not dispatch actions.");
                try {
                    b = !0, y = p(y, e);
                } finally {
                    b = !1;
                }
                for (var t = v = h, n = 0; t.length > n; n++) (0, t[n])();
                return e;
            }
            var s;
            if ("function" == typeof n && void 0 === r && (r = n, n = void 0), void 0 !== r) {
                if ("function" != typeof r) throw Error("Expected the enhancer to be a function.");
                return r(i)(e, n);
            }
            if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
            var p = e, y = n, v = [], h = v, b = !1;
            return l({
                type: f.INIT
            }), s = {
                dispatch: l,
                subscribe: d,
                getState: a,
                replaceReducer: function(e) {
                    if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
                    p = e, l({
                        type: f.INIT
                    });
                }
            }, s[c.default] = function() {
                var e, n = d;
                return e = {
                    subscribe: function(e) {
                        function r() {
                            e.next && e.next(a());
                        }
                        if ("object" != (void 0 === e ? "undefined" : t(e))) throw new TypeError("Expected the observer to be an object.");
                        return r(), {
                            unsubscribe: n(r)
                        };
                    }
                }, e[c.default] = function() {
                    return this;
                }, e;
            }, s;
        }
        n.__esModule = !0, n.ActionTypes = void 0, n.default = i;
        var u = o(r(5)), c = o(r(18)), f = n.ActionTypes = {
            INIT: "@@redux/INIT"
        };
    }, function(e, t) {
        t.__esModule = !0, t.default = function(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw Error(e);
            } catch (e) {}
        };
    }, function(e, t, n) {
        var r = n(16).Symbol;
        e.exports = r;
    }, function(e, t, n) {
        var r = n(10), o = n(12), i = n(17), u = "[object Object]", c = Function.prototype, f = Object.prototype, a = c.toString, d = f.hasOwnProperty, l = a.call(Object);
        e.exports = function(e) {
            if (!i(e) || r(e) != u) return !1;
            var t = o(e);
            if (null === t) return !0;
            var n = d.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && a.call(n) == l;
        };
    }, function(e, t) {
        function n() {
            throw Error("setTimeout has not been defined");
        }
        function r() {
            throw Error("clearTimeout has not been defined");
        }
        function o(e) {
            if (d === setTimeout) return setTimeout(e, 0);
            if ((d === n || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
            try {
                return d(e, 0);
            } catch (t) {
                try {
                    return d.call(null, e, 0);
                } catch (t) {
                    return d.call(this, e, 0);
                }
            }
        }
        function i(e) {
            if (l === clearTimeout) return clearTimeout(e);
            if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
            try {
                return l(e);
            } catch (t) {
                try {
                    return l.call(null, e);
                } catch (t) {
                    return l.call(this, e);
                }
            }
        }
        function u() {
            v && p && (v = !1, p.length ? y = p.concat(y) : h = -1, y.length && c());
        }
        function c() {
            if (!v) {
                var e = o(u);
                v = !0;
                for (var t = y.length; t; ) {
                    for (p = y, y = []; ++h < t; ) p && p[h].run();
                    h = -1, t = y.length;
                }
                p = null, v = !1, i(e);
            }
        }
        function f(e, t) {
            this.fun = e, this.array = t;
        }
        function a() {}
        var d, l, s = e.exports = {};
        !function() {
            try {
                d = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
                d = n;
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (e) {
                l = r;
            }
        }();
        var p, y = [], v = !1, h = -1;
        s.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; arguments.length > n; n++) t[n - 1] = arguments[n];
            y.push(new f(e, t)), 1 !== y.length || v || o(c);
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", 
        s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, 
        s.removeAllListeners = a, s.emit = a, s.binding = function(e) {
            throw Error("process.binding is not supported");
        }, s.cwd = function() {
            return "/";
        }, s.chdir = function(e) {
            throw Error("process.chdir is not supported");
        }, s.umask = function() {
            return 0;
        };
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = Object.assign || function(e) {
            for (var t = 1; arguments.length > t; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.default = function() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return function(e) {
                return function(n, i, u) {
                    var c = e(n, i, u), f = c.dispatch, a = [], d = {
                        getState: c.getState,
                        dispatch: function(e) {
                            return f(e);
                        }
                    };
                    return a = t.map(function(e) {
                        return e(d);
                    }), f = o.default.apply(void 0, a)(c.dispatch), r({}, c, {
                        dispatch: f
                    });
                };
            };
        };
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n(1));
    }, function(e, n) {
        function r(e, t) {
            return function() {
                return t(e.apply(void 0, arguments));
            };
        }
        n.__esModule = !0, n.default = function(e, n) {
            if ("function" == typeof e) return r(e, n);
            if ("object" != (void 0 === e ? "undefined" : t(e)) || null === e) throw Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : void 0 === e ? "undefined" : t(e)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var o = Object.keys(e), i = {}, u = 0; o.length > u; u++) {
                var c = o[u], f = e[c];
                "function" == typeof f && (i[c] = r(f, n));
            }
            return i;
        };
    }, function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var n = t && t.type;
                return "Given action " + (n && '"' + n + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
            }
            function i(e, t, n, r) {
                var o = Object.keys(t), i = n && n.type === c.ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (0 === o.length) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                if (!(0, f.default)(e)) return "The " + i + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following keys: "' + o.join('", "') + '"';
                var u = Object.keys(e).filter(function(e) {
                    return !t.hasOwnProperty(e) && !r[e];
                });
                return u.forEach(function(e) {
                    r[e] = !0;
                }), u.length > 0 ? "Unexpected " + (u.length > 1 ? "keys" : "key") + ' "' + u.join('", "') + '" found in ' + i + '. Expected to find one of the known reducer keys instead: "' + o.join('", "') + '". Unexpected keys will be ignored.' : void 0;
            }
            function u(e) {
                Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    if (void 0 === n(void 0, {
                        type: c.ActionTypes.INIT
                    })) throw Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                        type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                    })) throw Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.');
                });
            }
            t.__esModule = !0, t.default = function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; t.length > r; r++) {
                    var c = t[r];
                    "production" !== d && void 0 === e[c] && (0, a.default)('No reducer provided for key "' + c + '"'), 
                    "function" == typeof e[c] && (n[c] = e[c]);
                }
                var f = Object.keys(n);
                if ("production" !== d) var l = {};
                var s;
                try {
                    u(n);
                } catch (t) {
                    s = t;
                }
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
                    if (s) throw s;
                    if ("production" !== d) {
                        var r = i(e, n, t, l);
                        r && (0, a.default)(r);
                    }
                    for (var u = !1, c = {}, p = 0; f.length > p; p++) {
                        var y = f[p], v = n[y], h = e[y], b = v(h, t);
                        if (void 0 === b) {
                            var m = o(y, t);
                            throw Error(m);
                        }
                        c[y] = b, u = u || b !== h;
                    }
                    return u ? c : e;
                };
            };
            var c = n(2), f = r(n(5)), a = r(n(3)), d = void 0 !== e ? "production" : "development";
        }).call(t, n(6));
    }, function(e, t, n) {
        var r = n(4), o = n(13), i = n(14), u = "[object Null]", c = "[object Undefined]", f = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? c : u : (e = Object(e), f && f in e ? o(e) : i(e));
        };
    }, function(e, n) {
        (function(n) {
            var r = "object" == (void 0 === n ? "undefined" : t(n)) && n && n.Object === Object && n;
            e.exports = r;
        }).call(n, function() {
            return this;
        }());
    }, function(e, t, n) {
        var r = n(15)(Object.getPrototypeOf, Object);
        e.exports = r;
    }, function(e, t, n) {
        var r = n(4), o = Object.prototype, i = o.hasOwnProperty, u = o.toString, c = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = i.call(e, c), n = e[c];
            try {
                e[c] = void 0;
                var r = !0;
            } catch (t) {}
            var o = u.call(e);
            return r && (t ? e[c] = n : delete e[c]), o;
        };
    }, function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) {
            return n.call(e);
        };
    }, function(e, t) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n));
            };
        };
    }, function(e, n, r) {
        var o = r(11), i = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self, u = o || i || Function("return this")();
        e.exports = u;
    }, function(e, n) {
        e.exports = function(e) {
            return null != e && "object" == (void 0 === e ? "undefined" : t(e));
        };
    }, function(e, t, n) {
        e.exports = n(19);
    }, function(e, t, n) {
        (function(e, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n(20));
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
            var u = (0, i.default)(o);
            t.default = u;
        }).call(t, function() {
            return this;
        }(), n(21)(e));
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t, n = e.Symbol;
            return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
            n.observable = t) : t = "@@observable", t;
        };
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], 
            e.webpackPolyfill = 1), e;
        };
    } ]);
});
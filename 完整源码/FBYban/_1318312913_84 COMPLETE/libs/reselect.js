function e(e, r) {
    return e === r;
}

function r(e, r, t) {
    if (null === r || null === t || r.length !== t.length) return !1;
    for (var n = r.length, o = 0; o < n; o++) if (!e(r[o], t[o])) return !1;
    return !0;
}

function t(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, o = null, u = null;
    return function() {
        return r(n, o, arguments) || (u = t.apply(null, arguments)), o = arguments, u;
    };
}

function n(e) {
    var r = Array.isArray(e[0]) ? e[0] : e;
    if (!r.every(function(e) {
        return "function" == typeof e;
    })) {
        var t = r.map(function(e) {
            return void 0 === e ? "undefined" : c(e);
        }).join(", ");
        throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + t + "]");
    }
    return r;
}

function o(e) {
    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) o[u - 1] = arguments[u];
    return function() {
        for (var r = arguments.length, u = Array(r), c = 0; c < r; c++) u[c] = arguments[c];
        var i = 0, l = u.pop(), f = n(u), a = e.apply(void 0, [ function() {
            return i++, l.apply(null, arguments);
        } ].concat(o)), p = t(function() {
            for (var e = [], r = f.length, t = 0; t < r; t++) e.push(f[t].apply(null, arguments));
            return a.apply(null, e);
        });
        return p.resultFunc = l, p.recomputations = function() {
            return i;
        }, p.resetRecomputations = function() {
            return i = 0;
        }, p;
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

exports.defaultMemoize = t, exports.createSelectorCreator = o, exports.createStructuredSelector = function(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    if ("object" !== (void 0 === e ? "undefined" : c(e))) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + (void 0 === e ? "undefined" : c(e)));
    var t = Object.keys(e);
    return r(t.map(function(r) {
        return e[r];
    }), function() {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
        return r.reduce(function(e, r, n) {
            return e[t[n]] = r, e;
        }, {});
    });
};

var c = "function" == typeof Symbol && "symbol" === u(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : u(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : u(e);
}, i = exports.createSelector = o(t);
function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BehaviorSubject = void 0;

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = require("./subject"), i = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var r = e[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, o, r) {
        return o && t(e.prototype, o), r && t(e, r), e;
    };
}(), u = function t(e, o, r) {
    null === e && (e = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(e, o);
    if (void 0 === n) {
        var i = Object.getPrototypeOf(e);
        return null === i ? void 0 : t(i, o, r);
    }
    if ("value" in n) return n.value;
    var u = n.get;
    if (void 0 !== u) return u.call(r);
};

exports.BehaviorSubject = function(r) {
    function l(o) {
        t(this, l);
        var r = e(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
        return r._lastCallArgs = o, r;
    }
    return o(l, n.Subject), i(l, [ {
        key: "getValue",
        value: function() {
            return this._lastCallArgs;
        }
    }, {
        key: "next",
        value: function(t) {
            this._lastCallArgs = t, u(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "next", this).apply(this, arguments);
        }
    }, {
        key: "subscribe",
        value: function(t) {
            return this._lastCallArgs && t.apply(this, this._lastCallArgs), u(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "subscribe", this).apply(this, arguments);
        }
    } ]), l;
}();
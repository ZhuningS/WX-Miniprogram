function e(e, t) {
    var r = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r;
}

function t(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.componentOptionsEnhancer = void 0;

var r = require("./set-data-patch"), n = require("./memoize"), a = require("./utils"), c = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../fast-deep-equal")), o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, u = [ "options", "externalClasses", "properties", "data", "methods", "behaviors", "relations", "created", "attached", "ready", "moved", "detached" ], i = [ "computed" ], s = ([].concat(u, i), 
function(e) {
    return new RegExp("^(" + i.join("|") + ")").test(e);
}), l = function(e, u) {
    e.properties;
    var i = e.data, s = e.attached, l = e.detached, d = (e._computedWatchers = Object.create(null), 
    function(e, t, r, n) {
        var a = e["_$$" + t] || [];
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return e._$$subTarget && (a.push(e._$$subTarget), e["_$$" + t] = a), r;
            },
            set: function(e) {
                if ((0, c.default)(e, r)) return null;
                n && n(e), a.length && setTimeout(function() {
                    a.map(function(t) {
                        return t(e);
                    });
                }, 0), r = e;
            }
        });
    }), f = function(e, c) {
        var o = e.data, u = Object.keys(c);
        Object.keys(e.data).map(function(e) {
            d(o, e, o[e]);
        });
        var i = u.reduce(function(u, i) {
            var s = c[i].bind(e), l = (0, n.memoize)(s);
            return o._$$subTarget = function(n) {
                var c = t({}, i, e.data[i]), o = l;
                (Array.isArray(n) || (0, a.isObject)(n)) && (o = s);
                var u = (0, r.generateSetDataPatch)(c, t({}, i, o(n)));
                (0, a.isEmptyObject)(u) || e.setData(u);
            }, u[i] = l(), o._$$subTarget = null, u;
        }, {});
        e.setData(i);
    }, p = Object.keys(u), b = o({}, i);
    p.map(function(e) {
        return b[e] = null;
    });
    var h = o({}, e, {
        data: o({}, b)
    });
    return h.attached = function() {
        f(this, u), s && s.call(this);
    }, h.detached = function() {
        l && l.call(this);
    }, h;
};

exports.componentOptionsEnhancer = function(t) {
    if (!Object.keys(t).some(s)) return t;
    var r = t.computed, n = e(t, [ "computed" ]), c = o({}, n);
    return (0, a.isObject)(r) && (c = l(c, r)), c.externalClasses || (c.externalClasses = [ "com-class" ]), 
    c;
};
function r(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}

function e(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function n(a, o) {
                try {
                    var i = e[a](o), u = i.value;
                } catch (r) {
                    return void t(r);
                }
                if (!i.done) return Promise.resolve(u).then(function(r) {
                    n("next", r);
                }, function(r) {
                    n("throw", r);
                });
                r(u);
            }
            return n("next");
        });
    };
}

var t = r(require("../../../libs/regenerator-runtime")), n = r(require("../../../libs/classnames")), a = require("../../../libs/mp-enhancers/index"), o = require("../../../protocol/io"), i = require("../../../services/redirector"), u = require("../../../utils/dev"), s = function() {
    function r(r, e) {
        var t = [], n = !0, a = !1, o = void 0;
        try {
            for (var i, u = r[Symbol.iterator](); !(n = (i = u.next()).done) && (t.push(i.value), 
            !e || t.length !== e); n = !0) ;
        } catch (r) {
            a = !0, o = r;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (a) throw o;
            }
        }
        return t;
    }
    return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return r(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Component((0, a.componentOptionsEnhancer)({
    properties: {
        isShow: {
            type: Boolean
        }
    },
    data: {
        hopCard: null
    },
    computed: {
        rootClassNames: function() {
            var r = this.data.isShow;
            return (0, n.default)("explore-partner-bar", "animated", [ r ? "slideInRight" : "slideOutRight" ]);
        }
    },
    ready: function() {
        this.loadData();
    },
    methods: {
        loadData: function() {
            var r = this;
            return e(t.default.mark(function e() {
                var n, a, i, c, d, l, p, h, f, v;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, o.api.get("v1/partner.hopCards");

                      case 3:
                        if (n = e.sent, a = n.data.events[0] && n.data.events[0].hopCard) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return");

                      case 7:
                        i = a.targetPath.split("://"), c = s(i, 2), d = c[0], l = c[1], "miniProgram" === d && (p = l.split("?"), 
                        h = s(p, 2), f = h[0], v = h[1], a.appId = f, a.path = decodeURIComponent(v)), r.setData({
                            hopCard: a
                        }), e.next = 15;
                        break;

                      case 12:
                        e.prev = 12, e.t0 = e.catch(0), (0, u.errorReporter)("load hopCard failed", e.t0);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, r, [ [ 0, 12 ] ]);
            }))();
        },
        handleRootTap: function() {
            var r = this.data.hopCard;
            (0, i.navigateByUrlSchema)(r.targetPath);
        }
    }
}));
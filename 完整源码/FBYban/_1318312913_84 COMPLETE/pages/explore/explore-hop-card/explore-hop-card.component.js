function t(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, r) {
            function n(a, o) {
                try {
                    var i = e[a](o), c = i.value;
                } catch (t) {
                    return void r(t);
                }
                if (!i.done) return Promise.resolve(c).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(c);
            }
            return n("next");
        });
    };
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../libs/regenerator-runtime")), r = require("../../../libs/mp-enhancers/index"), n = require("../../../protocol/io"), a = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}(require("../../../services/redirector")), o = require("../../../config/index"), i = function() {
    function t(t, e) {
        var r = [], n = !0, a = !1, o = void 0;
        try {
            for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), 
            !e || r.length !== e); n = !0) ;
        } catch (t) {
            a = !0, o = t;
        } finally {
            try {
                !n && c.return && c.return();
            } finally {
                if (a) throw o;
            }
        }
        return r;
    }
    return function(e, r) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Component((0, r.componentOptionsEnhancer)({
    properties: {
        showContact: {
            type: Boolean
        }
    },
    ready: function() {
        o.config.enableContact ? this.setData({
            enableContact: !0,
            contactSession: "index-" + getApp().getUserId()
        }) : this.loadHopCard();
    },
    methods: {
        loadHopCard: function() {
            var r = this;
            return t(e.default.mark(function t() {
                var a, o, c, u, s, p, d, l;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, n.api.get("v1/onboard.hopCards");

                      case 3:
                        if (a = t.sent, o = a.data.events[0] && a.data.events[0].hopCard) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return");

                      case 7:
                        o.size = o.size ? o.size : "small", "miniProgram" === (c = o.targetPath.split("://")[0]) && (o.type = c, 
                        u = o.targetPath.split("://")[1], s = u.split("?"), p = i(s, 2), d = p[0], l = p[1], 
                        o.appId = d, o.path = decodeURIComponent(l)), r.setData({
                            hopCard: o,
                            showHopCard: !0
                        }), t.next = 16;
                        break;

                      case 13:
                        t.prev = 13, t.t0 = t.catch(0), console.log("loadHopCard failed:", t.t0);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, r, [ [ 0, 13 ] ]);
            }))();
        },
        handleContactTap: function() {
            this.log("feedback");
        },
        handleHopcardTap: function() {
            console.log("handleHopcardTap targetPath", this.data.hopCard.targetPath), "wxapp" !== this.data.hopCard.type && a.navigateByUrlSchema(this.data.hopCard.targetPath);
        }
    }
}));
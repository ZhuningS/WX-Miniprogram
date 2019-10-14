function r(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}

function e(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function n(a, i) {
                try {
                    var o = e[a](i), u = o.value;
                } catch (r) {
                    return void t(r);
                }
                if (!o.done) return Promise.resolve(u).then(function(r) {
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

var t = r(require("../../libs/regenerator-runtime")), n = r(require("../../libs/underscore")), a = require("../../protocol/io"), i = require("../../services/redirector"), o = require("../../utils/dev"), u = r(require("../../utils/extend-page")), s = require("../../mixins/index"), c = getApp(), d = getApp().getLogger(), p = {
    props: {
        currentUid: c.getUserId()
    },
    data: {
        isLoading: !0,
        isError: !1,
        customerHops: []
    },
    onLoad: function() {
        var r = this;
        return e(t.default.mark(function e() {
            var n;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, r.loadData();

                  case 2:
                    n = e.sent, r.setData(n);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    },
    loadData: function() {
        var r = this;
        return e(t.default.mark(function e() {
            var i, u, s, c, d;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = r.props.currentUid, u = {}, e.prev = 2, e.next = 5, a.api.get("v1/article.hopCards");

                  case 5:
                    s = e.sent, c = s.data.events.map(function(r) {
                        return r.hopCard;
                    }), d = c.map(function(r) {
                        return r.id = n.default.uniqueId("hopCard-"), r.sessionFrom = "群：" + r.title + "，用户 ID：" + i, 
                        r.isPageRedirect = ~r.targetPath.indexOf("page://"), r;
                    }), u.customerHops = d, e.next = 15;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(2), (0, o.errorReporter)("load wechat group list failed", e.t0), 
                    u.isError = !0;

                  case 15:
                    return e.prev = 15, u.isLoading = !1, e.finish(15);

                  case 18:
                    return e.abrupt("return", u);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, r, [ [ 2, 11, 15, 18 ] ]);
        }))();
    },
    handleCustomerHopTap: function(r) {
        var e = this.data.customerHops, t = r.currentTarget.dataset.id, n = e.find(function(r) {
            return r.id === t;
        });
        if (n) return n.isPageRedirect ? (0, i.navigateByUrlSchema)(n.targetPath) : void d.logAction("click-group-customer", {
            sessionFrom: n.sessionFrom
        });
    }
};

Page(u.default.apply(void 0, [ p ].concat(function(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
    return Array.from(r);
}(s.basicMixins))));
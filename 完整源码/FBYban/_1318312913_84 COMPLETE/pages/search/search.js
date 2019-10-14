function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var s = t[n](i), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
            }
            return a("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime.js")), a = e(require("../../libs/underscore.js")), n = require("../../protocol/io"), i = require("../../utils/data-processor"), s = require("../../utils/dev"), o = e(require("../../utils/extend-page")), u = e(require("../../mixins/actions")), c = e(require("../../mixins/share")), d = e(require("../../mixins/subscribe")), l = e(require("../../mixins/mark")), f = e(require("../../mixins/cardshow")), h = e(require("../../mixins/logger")), p = e(require("../../mixins/hook"));

Page((0, o.default)({
    data: {
        magazine: void 0,
        referMagazines: [],
        events: [],
        loading: !0,
        hasMore: !1,
        query: void 0,
        error: !1
    },
    mid: void 0,
    onLoad: function() {
        var e = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.setData({
                        query: a.query
                    }), wx.setNavigationBarTitle({
                        title: "搜索"
                    }), e.init();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    init: function() {
        var e = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.setData({
                        magazine: void 0,
                        referMagazines: [],
                        events: []
                    }), e.search();

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onInput: function(e) {
        this.query = e.detail.value;
    },
    search: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var a, i, s, o;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = e.query || e.data.query) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    if (e.pageShown("/search/" + a + "/"), e.setData({
                        magazine: {},
                        referMagazines: [],
                        events: [],
                        loading: !0,
                        error: !1
                    }), t.prev = 5, i = void 0, !(s = getApp().globalData.config.publicationId)) {
                        t.next = 14;
                        break;
                    }
                    return t.next = 11, n.api.get("v1/contentPublication.article.search", {
                        pub_id: s,
                        word: a
                    });

                  case 11:
                    i = t.sent, t.next = 17;
                    break;

                  case 14:
                    return t.next = 16, n.api.get("v1/search", {
                        word: a
                    });

                  case 16:
                    i = t.sent;

                  case 17:
                    console.log(i), o = {}, e.washData(i, o), t.next = 25;
                    break;

                  case 22:
                    t.prev = 22, t.t0 = t.catch(5), e.setData({
                        error: !0,
                        loading: !1
                    });

                  case 25:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 5, 22 ] ]);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore();
    },
    loadMore: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var a, i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        loading: !0,
                        error: !1
                    }), t.prev = 1, t.next = 4, n.ajax.get(e.data.nextUrl);

                  case 4:
                    a = t.sent, i = e.data.subscribed, e.washData(a, i), t.next = 13;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(1), (0, s.errorReporter)("load search more failed", t.t0), 
                    e.setData({
                        error: !0,
                        loading: !1
                    });

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 1, 9 ] ]);
        }))();
    },
    onPullDownRefresh: function() {
        var e = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.init();

                  case 2:
                    wx.stopPullDownRefresh();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    washData: function(e, t) {
        var r, n = [], s = [];
        a.default.each((0, i.pretreatData)(e.data).events, function(e) {
            "section" === e.type && "magazine" === e.section.type ? r ? s.push(e.section.events[0]) : r = e : "article" === e.type && n.push(e);
        });
        var o = {
            events: this.data.events.concat(n),
            subscribed: t,
            loading: !1,
            hasMore: e.data.hasMore,
            nextUrl: e.data.nextUrl
        };
        getApp().getConfig().enableMagazine && (r && (o.magazine = r), s.length > 0 && (o.referMagazines = s)), 
        this.setData(o);
    }
}, u.default, c.default, f.default, d.default, l.default, h.default, p.default));
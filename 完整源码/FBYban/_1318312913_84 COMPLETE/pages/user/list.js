function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function i(n, r) {
                try {
                    var s = t[n](r), o = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(o);
            }
            return i("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), i = e(require("../../libs/underscore")), n = require("../../protocol/io"), r = require("../../utils/data-processor"), s = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), u = e(require("../../mixins/share")), d = e(require("../../mixins/cardshow")), l = e(require("../../mixins/follow")), c = e(require("../../mixins/subscribe")), f = e(require("../../mixins/logger")), h = e(require("../../mixins/mark")), p = e(require("../../mixins/hook"));

Page((0, s.default)({
    data: {
        events: [],
        loading: !0,
        tabs: [],
        type: "following"
    },
    onLoad: function(e) {
        var i = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    i.uid = e.uid, e.type && i.setData({
                        type: e.type
                    }), i.loadData();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, i);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore();
    },
    onTapTab: function(e) {
        this.setData({
            type: e.currentTarget.id
        }), this.loadData();
    },
    loadData: function() {
        this.setData({
            events: [],
            loading: !0
        });
        var e;
        e = this.uid && this.uid !== getApp().getUserId() ? "/profiles/" + this.uid : "/me", 
        "read" === this.data.type ? (this.pageShown(e + "/history/"), this.loadRead(), wx.setNavigationBarTitle({
            title: "已读历史"
        })) : "paid" === this.data.type ? (this.pageShown(e + "/paid/"), this.loadPaid(), 
        wx.setNavigationBarTitle({
            title: "已购历史"
        })) : "follow" === this.data.type ? (this.pageShown(e + "/profiles/"), this.loadFollow(), 
        this.setData({
            tabs: [ {
                name: "杂志",
                id: "magazine"
            }, {
                name: "关注的人",
                id: "follow"
            } ]
        }), wx.setNavigationBarTitle({
            title: "关注的人"
        })) : "magazine" === this.data.type ? (this.pageShown(e + "/magazines/"), this.loadMagazines(), 
        this.setData({
            tabs: [ {
                name: "杂志",
                id: "magazine"
            }, {
                name: "关注的人",
                id: "follow"
            } ]
        }), wx.setNavigationBarTitle({
            title: "订阅的杂志"
        })) : (this.pageShown(e + "/followers/"), this.loadFollowed(), wx.setNavigationBarTitle({
            title: "被关注"
        }));
    },
    loadMore: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var i;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, e.setData({
                        loading: !0
                    }), t.next = 4, n.ajax.get(e.data.nextUrl);

                  case 4:
                    i = t.sent, e.setData({
                        events: e.data.events.concat((0, r.pretreatData)(i.data).events),
                        hasMore: i.data.hasMore,
                        nextUrl: i.data.nextUrl
                    });

                  case 6:
                    return t.prev = 6, e.setData({
                        loading: !1
                    }), t.finish(6);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, , 6, 9 ] ]);
        }))();
    },
    loadPage: function(e, s) {
        var o = this;
        return t(a.default.mark(function t() {
            var u, d, l;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, o.setData({
                        loading: !0
                    }), t.next = 4, n.api.get(e, s);

                  case 4:
                    u = t.sent, d = {}, i.default.each(u.data.events, function(e) {
                        e.user && [ "friend", "subscribed" ].indexOf(e.user.relation) >= 0 && (d[e.user.uid] = !0);
                    }), l = {}, i.default.each(u.data.events, function(e) {
                        e.magazineConfig && (l[e.magazineConfig.magazine.id] = e.magazineConfig.magazine.pushSubscribed ? "push" : "subscribed" === e.magazineConfig.magazine.status);
                    }), o.setData({
                        events: (0, r.pretreatData)(u.data).events,
                        hasMore: u.data.hasMore,
                        nextUrl: u.data.nextUrl,
                        followed: d,
                        subscribed: l,
                        loading: !1
                    });

                  case 10:
                    return t.prev = 10, o.setData({
                        loading: !1
                    }), t.finish(10);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, o, [ [ 0, , 10, 13 ] ]);
        }))();
    },
    loadFollow: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.loadPage("v1/user.followers.get", {
                        uid: e.uid
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadFollowed: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.loadPage("v1/user.followees.get", {
                        uid: e.uid
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadRead: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.loadPage("v1/timeline.readdocs.get", {
                        uid: e.uid
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadPaid: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.loadPage("v1/timeline.purchased.get", {
                        uid: e.uid
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadMagazines: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.loadPage("v1/magazine.get", {
                        uid: e.uid
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    }
}, o.default, l.default, c.default, f.default, h.default, u.default, d.default, p.default));
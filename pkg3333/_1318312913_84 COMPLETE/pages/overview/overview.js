function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, s) {
                try {
                    var i = t[r](s), u = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), n = e(require("../../libs/underscore")), r = require("../../protocol/io"), s = require("../../utils/data-processor"), i = e(require("../../utils/extend-page")), u = e(require("../../mixins/actions")), o = e(require("../../mixins/subscribe")), c = e(require("../../mixins/follow")), d = e(require("../../mixins/logger")), f = e(require("../../mixins/hook")), l = e(require("../../services/redirector"));

Page((0, i.default)({
    data: {
        cates: [],
        hiddenCates: [],
        subs: [],
        error: !1,
        loading: !0,
        recentPublications: []
    },
    onPullDownRefresh: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
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
    onLoad: function() {
        var e = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.pageShown("/overview/"), wx.setNavigationBarTitle({
                        title: "目录"
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
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        about: getApp().getConfig().about,
                        cates: [],
                        users: [],
                        subMagazines: [],
                        error: !1,
                        loading: !0
                    }), t.prev = 1, t.next = 4, Promise.all([ e.loadFollow(), e.loadSubscribes(), e.loadCates(), e.loadRecentPublications() ]);

                  case 4:
                    t.next = 10;
                    break;

                  case 6:
                    t.prev = 6, t.t0 = t.catch(1), console.log(t.t0), e.setData({
                        error: !0
                    });

                  case 10:
                    return t.prev = 10, e.setData({
                        loading: !1
                    }), t.finish(10);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 1, 6, 10, 13 ] ]);
        }))();
    },
    gotoCategory: function(e) {
        var t = e.currentTarget.dataset.cid;
        getApp().globalData.targetCid = t;
        var a = n.default.find(this.data.hiddenCates, function(e) {
            return t === e.section.events[0].category.cid;
        });
        a && (getApp().globalData.targetCate = a.section.events[0]), console.log("target cid is ", t, getApp().globalData.targetCate), 
        wx.switchTab({
            url: getApp().getConfig().homePage
        });
    },
    loadFollow: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, s;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (getApp().getConfig().enableFollow) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, r.api.get("v1/user.followers.get");

                  case 4:
                    n = t.sent, (s = n.data.events) && s.length > 6 && (s.length = 6), e.setData({
                        users: s
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadSubscribes: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, s;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (getApp().getConfig().enableSubscribe) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, r.api.get("v1/magazine.get");

                  case 4:
                    n = t.sent, s = n.data.events.map(function(e) {
                        return e.magazineConfig;
                    }), e.setData({
                        subMagazines: s
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadCates: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var i, u, o, c, d;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, r.api.get("v1/overview.index", {
                        include_magazines: !0,
                        include_all: !0
                    });

                  case 2:
                    i = t.sent, u = [], o = [], n.default.each((0, s.pretreatData)(i.data).events, function(e) {
                        "forbidden" !== e.section.events[0].category.status ? u.push(e) : o.push(e);
                    }), getApp().getConfig().enableSubscribe ? (c = {}, d = n.default.filter(n.default.flatten(n.default.pluck(n.default.pluck(i.data.events, "section"), "events")), function(e) {
                        return "magazine" === e.type && "subscribed" === e.magazine.status;
                    }), n.default.each(d, function(e) {
                        c[e.magazine.id] = e.pushSubscribed ? "push" : "subscribed" === e.magazine.status;
                    }), e.setData({
                        cates: u,
                        hiddenCates: o,
                        subscribed: c
                    })) : e.setData({
                        cates: u,
                        hiddenCates: o
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadRecentPublications: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, r;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("wx05790b1180642960" === (n = getApp().globalData.config.wxAppid)) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    r = wx.getStorageSync("recentPublication"), e.setData({
                        recentPublications: r
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    handleClickPublication: function(e) {
        var t = e.currentTarget.dataset.publication;
        console.log("event", e), console.log("publication", t), l.default.navigateTo("/pages/page/page", {
            publicationId: t.id
        });
    },
    onInput: function(e) {
        this.query = e.detail.value;
    },
    search: function() {
        this.query && wx.navigateTo({
            url: "/pages/search/search?query=" + this.query
        });
    },
    onTapSubscribe: function() {
        this.setData({
            showPushNotif: !0
        });
    },
    onTapHideCategory: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            var s, i, u;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    s = e.currentTarget.dataset.cid, i = n.default.findIndex(r.data.cates, function(e) {
                        return e.section.events[0].category.id === s;
                    }), u = r.data.cates.splice(i, 1), r.data.hiddenCates.unshift(u[0]), r.setData({
                        cates: r.data.cates,
                        hiddenCates: r.data.hiddenCates
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    onTapShowCategory: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            var s, i, u;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    s = e.currentTarget.dataset.cid, i = n.default.findIndex(r.data.hiddenCates, function(e) {
                        return e.section.events[0].category.id === s;
                    }), u = r.data.hiddenCates.splice(i, 1), r.data.cates.push(u[0]), r.setData({
                        cates: r.data.cates,
                        hiddenCates: r.data.hiddenCates
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    onTapTopCategory: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            var s, i, u;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    s = e.currentTarget.dataset.cid, i = n.default.findIndex(r.data.cates, function(e) {
                        return e.section.events[0].category.id === s;
                    }), u = r.data.cates.splice(i, 1), r.data.cates.unshift(u[0]), r.setData({
                        cates: r.data.cates
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    showPushNotif: function() {
        this.setData({
            showPushNotif: !1
        });
    }
}, u.default, o.default, c.default, d.default, f.default));
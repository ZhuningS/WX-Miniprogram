function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function r(e) {
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

var a = e(require("../../libs/regenerator-runtime")), n = require("../../protocol/io"), i = require("../../services/warehouse/index"), s = require("../../utils/data-processor"), o = require("../../utils/dev"), u = require("../../mixins/index"), c = e(require("../../utils/extend-page")), d = {
    mid: void 0,
    docId: void 0,
    data: {
        uiSwitchMagazine: {},
        events: [],
        loading: !0,
        hasMore: !1,
        nextUrl: void 0,
        error: !1
    },
    onLoad: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r(a.default.mark(function r() {
            return a.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    e.setData({
                        user: getApp().globalData.userInfo
                    }), e.docId = t.docId, e.mid = t.mid, e.ticket = t.ticket, e.init();

                  case 5:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    },
    onShow: function() {
        if (this.postTicket) {
            var e = getApp().transfer().get(this.postTicket);
            this.postTicket = null, console.log("发送 post 回来", e), e && e.posted && this.init();
        }
    },
    init: function() {
        var e = this;
        return r(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        events: [],
                        error: !1,
                        loading: !0
                    }), e.updateWarehouseRefs({
                        eventIds: []
                    }), t.prev = 2, t.next = 5, e.loadMagazineInfo();

                  case 5:
                    return t.next = 7, e.loadTopics();

                  case 7:
                    t.next = 13;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(2), console.log(t.t0), t.t0.data && "not permitted" === t.t0.data.errorMessage ? e.setData({
                        error: "forbidden"
                    }) : e.setData({
                        error: !0
                    });

                  case 13:
                    return t.prev = 13, e.setData({
                        loading: !1,
                        status: "ready"
                    }), t.finish(13);

                  case 16:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 2, 9, 13, 16 ] ]);
        }))();
    },
    loadMagazineInfo: function() {
        var e = this;
        return r(a.default.mark(function t() {
            var r, i;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return r = void 0, t.next = 3, n.api.get("v1/magazine.info", {
                        mid: e.mid
                    });

                  case 3:
                    i = t.sent, r = i.data.events[0].magazineInfo.magazine, e.setData({
                        magazine: r
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadTopics: function() {
        var e = this;
        return r(a.default.mark(function r() {
            var o, u, c;
            return a.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, n.api.get("v1/article.posts", {
                        docid: e.docId,
                        mid: e.mid
                    });

                  case 2:
                    return o = r.sent, u = (0, s.pretreatData)(o.data).events, r.next = 6, i.eventAPI.setEventEntities(u);

                  case 6:
                    c = r.sent, e.updateWarehouseRefs({
                        eventIds: [].concat(t(e.warehouseRefs.eventIds), t(c))
                    }), e.setData({
                        nextUrl: o.data.nextUrl,
                        hasMore: o.data.hasMore
                    });

                  case 9:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    },
    loadMore: function(e, o) {
        var u = this;
        return r(a.default.mark(function r() {
            var c, d, f;
            return a.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, n.api.get(e, o);

                  case 2:
                    return c = r.sent, d = (0, s.pretreatData)(c.data).events, r.next = 6, i.eventAPI.setEventEntities(d);

                  case 6:
                    f = r.sent, u.updateWarehouseRefs({
                        eventIds: [].concat(t(u.warehouseRefs.eventIds), t(f))
                    }), u.setData({
                        nextUrl: c.data.nextUrl,
                        hasMore: c.data.hasMore,
                        loading: !1
                    });

                  case 9:
                  case "end":
                    return r.stop();
                }
            }, r, u);
        }))();
    },
    onTapAddTopic: function() {
        this.postTicket = this.ticket, wx.navigateTo({
            url: "/pages/post/create?id=" + this.mid + "&ticket=" + this.ticket
        });
    },
    onPullDownRefresh: function() {
        var e = this;
        return r(a.default.mark(function t() {
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
    onReachBottom: function() {
        if (!this.data.loading && this.data.hasMore) try {
            this.setData({
                loading: !0
            }), this.loadMore(this.data.nextUrl);
        } catch (e) {
            (0, o.errorReporter)("load more topics failed", e), this.setData({
                loading: !1
            });
        }
    },
    shareOptions: function() {
        return {
            docId: this.docId,
            mid: this.mid,
            type: "post"
        };
    }
}, f = {
    warehouseRefs: {
        eventIds: []
    },
    mapWarehouseToData: function(e, t) {
        var r = t.eventIds;
        return {
            events: (0, i.eventEntitiesSelector)(r)(e)
        };
    }
};

Page(c.default.apply(void 0, [ d, f ].concat(t(u.allMixins))));
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var o = t[n](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), r = require("../../protocol/io"), n = require("../../utils/data-processor"), i = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), s = e(require("../../mixins/hook")), u = e(require("../../mixins/mark")), c = e(require("../../mixins/video")), d = e(require("../../mixins/image")), l = e(require("../../mixins/cardshow")), f = e(require("../../mixins/subscribe")), m = e(require("../../mixins/logger")), v = e(require("../../utils/util.js"));

Page((0, i.default)({
    data: {
        events: void 0,
        loading: !0,
        hasMore: !1,
        error: !1,
        uid: void 0,
        tabs: [ {
            name: "来自内容源",
            id: "source"
        }, {
            name: "来自关键词",
            id: "keywords"
        } ],
        current: "source"
    },
    mid: void 0,
    articleTicket: void 0,
    onLoad: function() {
        var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.setData({
                        uid: getApp().globalData.userInfo.uid
                    }), e.mid = r.id, e.pageShown("/magazines/" + e.mid + "/recommend/", r.content), 
                    e.init();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onShow: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.articleTicket) {
                        t.next = 7;
                        break;
                    }
                    if (n = getApp().transfer().take(e.articleTicket), e.articleTicket = void 0, !n || !n.docIdString) {
                        t.next = 7;
                        break;
                    }
                    return t.next = 6, r.api.get("v1/action.article.add", {
                        docid: n.docIdString,
                        mid: e.mid,
                        content_type: "article"
                    });

                  case 6:
                    wx.showToast({
                        title: "已添加"
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    init: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var r;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        events: [],
                        error: !1,
                        loading: !0
                    }), t.prev = 1, r = [ e.loadCover("v1/magazine.info?mid=" + e.mid) ], "keywords" === e.data.current ? r.push(e.loadPage("v1/timeline.magazine.get", {
                        mid: e.mid,
                        fromKeyword: !0
                    })) : r.push(e.loadPage("v1/timeline.magazine.get", {
                        mid: e.mid,
                        fromXiaohua: !0
                    })), t.next = 6, Promise.all([ e.loadCover("v1/magazine.info?mid=" + e.mid), e.loadPage("v1/timeline.magazine.get", {
                        mid: e.mid,
                        fromXiaohua: !0
                    }) ]);

                  case 6:
                    t.next = 11;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(1), e.setData({
                        error: !0
                    });

                  case 11:
                    return t.prev = 11, e.setData({
                        loading: !1
                    }), t.finish(11);

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 1, 8, 11, 14 ] ]);
        }))();
    },
    onTapTab: function(e) {
        this.setData({
            current: e.currentTarget.id
        }), this.init();
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
    loadCover: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            var i, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!n.data.cover) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, r.api.get(e);

                  case 4:
                    i = t.sent, o = i.data.events[0].magazineInfo, n.setData({
                        cover: i.data.events[0],
                        color: o.magazine.color ? v.default.hexToRgba(o.magazine.color, .4) : "rgba(172, 172, 172, 0.5)"
                    }), n.showPageTitle("# " + o.magazine.name, o.magazine.color);

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    loadPage: function(e) {
        var i = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t(a.default.mark(function t() {
            var s, u;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (s = void 0, !e.startsWith("http")) {
                        t.next = 8;
                        break;
                    }
                    return e = e.replace("http://", "https://"), t.next = 5, r.ajax.get(e, o);

                  case 5:
                    s = t.sent, t.next = 11;
                    break;

                  case 8:
                    return t.next = 10, r.api.get(e, o);

                  case 10:
                    s = t.sent;

                  case 11:
                    u = i.data.events.concat((0, n.pretreatData)(s.data).events), i.setData({
                        events: u,
                        hasMore: s.data.hasMore,
                        nextUrl: s.data.nextUrl
                    }), i.initMarked();

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, i);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadPage(this.data.nextUrl, !0);
    },
    selectArticle: function() {
        this.articleTicket = getApp().transfer().put({}), wx.navigateTo({
            url: "/pages/article/picker?ticket=" + this.articleTicket
        });
    }
}, o.default, u.default, c.default, d.default, l.default, f.default, m.default, s.default));
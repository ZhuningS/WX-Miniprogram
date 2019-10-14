function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(i, n) {
                try {
                    var u = t[i](n), s = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime.js")), a = e(require("../../libs/underscore.js")), i = require("../../protocol/io"), n = require("../../utils/data-processor"), u = e(require("../../utils/extend-page")), s = e(require("../../mixins/actions")), o = e(require("../../mixins/share")), c = e(require("../../mixins/subscribe")), l = e(require("../../mixins/mark")), p = e(require("../../mixins/cardshow")), d = e(require("../../mixins/logger")), f = e(require("../../mixins/hook"));

Page((0, u.default)({
    data: {
        loading: !1
    },
    ticket: void 0,
    preview: void 0,
    onLoad: function(e) {
        var a = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a.ticket = e.ticket, a.pageShown("/picker/", e.content), wx.setNavigationBarTitle({
                        title: "添加文章"
                    });

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    onShow: function() {
        if (this.preview) {
            var e = getApp().transfer().take(this.preview);
            this.preview = void 0, console.log("take result", e), e && (getApp().transfer().callback(this.ticket, e), 
            wx.navigateBack());
        }
    },
    query: function(e) {
        var u = this;
        return t(r.default.mark(function t() {
            var s, o, c;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (s = e.detail.value) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    if (s.text && (s = s.text), !s.startsWith("http")) {
                        t.next = 8;
                        break;
                    }
                    return u.preview = getApp().transfer().put({
                        url: s,
                        action: "添加文章"
                    }), wx.navigateTo({
                        url: "/pages/article/preview?ticket=" + u.preview
                    }), t.abrupt("return");

                  case 8:
                    return t.prev = 8, u.setData({
                        loading: !0,
                        events: []
                    }), t.next = 12, i.api.get("v1/search", {
                        word: s
                    });

                  case 12:
                    o = t.sent, c = [], a.default.each(o.data.events, function(e) {
                        "article" === e.type && c.push(e);
                    }), o.data.events = c, u.setData({
                        events: (0, n.pretreatData)(o.data).events,
                        hasMore: o.data.hasMore,
                        nextUrl: o.data.nextUrl
                    }), t.next = 21;
                    break;

                  case 19:
                    t.prev = 19, t.t0 = t.catch(8);

                  case 21:
                    return t.prev = 21, u.setData({
                        loading: !1
                    }), t.finish(21);

                  case 24:
                  case "end":
                    return t.stop();
                }
            }, t, u, [ [ 8, 19, 21, 24 ] ]);
        }))();
    },
    gotoPreview: function(e) {
        console.log(e), this.preview = getApp().transfer().put({
            id: e.currentTarget.dataset.docId,
            action: "添加文章"
        }), wx.navigateTo({
            url: "/pages/article/preview?ticket=" + this.preview
        });
    }
}, s.default, o.default, p.default, c.default, l.default, d.default, f.default));
function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(a, o) {
                try {
                    var i = e[a](o), s = i.value;
                } catch (t) {
                    return void n(t);
                }
                if (!i.done) return Promise.resolve(s).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(s);
            }
            return r("next");
        });
    };
}

var n = t(require("../../libs/regenerator-runtime.js")), r = require("../../protocol/io"), a = t(require("../../utils/extend-page")), o = t(require("../../mixins/actions")), i = t(require("../../mixins/hook"));

Page((0, a.default)({
    data: {
        events: []
    },
    onLoad: function(t) {
        var r = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    wx.setNavigationBarTitle({
                        title: "用户"
                    }), r.voteId = t.voteId, r.optionId = t.optionId, r.init();

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    },
    init: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t.setData({
                        events: [],
                        error: !1,
                        loading: !0
                    }), e.next = 3, t.loadPage("v1/post.vote.users.get");

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, t);
        }))();
    },
    loadPage: function(t, a) {
        var o = this;
        return e(n.default.mark(function e() {
            var i;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.setData({
                        loading: !0
                    }), i = void 0, !a) {
                        e.next = 9;
                        break;
                    }
                    return t = t.replace("http://", "https://"), e.next = 6, r.ajax.get(t);

                  case 6:
                    i = e.sent, e.next = 12;
                    break;

                  case 9:
                    return e.next = 11, r.api.get(t, {
                        vote_id: o.voteId,
                        option_ids: o.optionId,
                        max: 10
                    });

                  case 11:
                    i = e.sent;

                  case 12:
                    o.setData({
                        events: o.data.events.concat(i.data.events),
                        loading: !1,
                        nextUrl: i.data.nextUrl,
                        hasMore: i.data.hasMore
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, o);
        }))();
    },
    onPullDownRefresh: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, t.init();

                  case 2:
                    wx.stopPullDownRefresh();

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, t);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadPage(this.data.nextUrl, !0);
    }
}, o.default, i.default));
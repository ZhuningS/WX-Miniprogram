function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), n = require("../../protocol/io"), r = require("../../utils/data-processor"), i = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), s = e(require("../../mixins/logger")), u = e(require("../../mixins/hook"));

Page((0, i.default)({
    data: {
        loading: !0
    },
    groupId: void 0,
    onLoad: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n.setData({
                        gid: e.id
                    }), wx.setNavigationBarTitle({
                        title: "成员管理"
                    }), n.loadData();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore();
    },
    loadData: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var r;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        loading: !0
                    }), t.prev = 1, e.setData({
                        loading: !0
                    }), t.next = 5, n.api.get("v1/magazine.info", {
                        mid: e.data.gid
                    });

                  case 5:
                    r = t.sent, console.log(r), e.setData({
                        agents: r.data.events[0].magazineInfo.agencies
                    });

                  case 8:
                    return t.prev = 8, e.setData({
                        loading: !1
                    }), t.finish(8);

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 1, , 8, 11 ] ]);
        }))();
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
    }
}, o.default, s.default, u.default));
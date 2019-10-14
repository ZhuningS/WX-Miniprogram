function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, a) {
                try {
                    var u = t[i](a), o = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime.js")), n = require("../../protocol/io"), i = e(require("../../utils/extend-page")), a = e(require("../../mixins/actions")), u = e(require("../../mixins/logger")), o = e(require("../../mixins/source")), s = e(require("../../mixins/hook"));

Page((0, i.default)({
    data: {
        events: void 0,
        mid: void 0,
        loading: !1
    },
    onLoad: function(e) {
        var n = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n.setData({
                        mid: e.mid
                    }), n.pageShown("/magazines/" + e.mid + "/sources/add/"), wx.setNavigationBarTitle({
                        title: "添加参考来源"
                    });

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    onInput: function(e) {
        this.query = e.detail.value;
    },
    search: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        loading: !0
                    }), t.next = 3, n.api.get("v1/provider.search", {
                        word: e.query
                    });

                  case 3:
                    i = t.sent, e.setData({
                        events: i.data.events,
                        loading: !1
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    submit: function() {
        wx.navigateBack();
    }
}, a.default, u.default, o.default, s.default));
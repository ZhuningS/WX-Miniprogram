function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(a, i) {
                try {
                    var o = r[a](i), u = o.value;
                } catch (e) {
                    return void t(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
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

var t = e(require("../../libs/regenerator-runtime.js")), n = e(require("../../utils/extend-page")), a = require("../../protocol/io"), i = require("../../mixins/index"), o = e(require("./base")), u = require("./base.warehouse"), s = {
    loginWechat: function(e) {
        var n = this;
        return r(t.default.mark(function r() {
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, n.login(e);

                  case 2:
                    if (!r.sent) {
                        r.next = 4;
                        break;
                    }
                    wx.reLaunch({
                        url: "/pages/profile/profile"
                    });

                  case 4:
                  case "end":
                    return r.stop();
                }
            }, r, n);
        }))();
    },
    onEditProfile: function() {
        wx.navigateTo({
            url: "/pages/profile/edit?token=" + getApp().getUserToken()
        });
    },
    loadPaidList: function() {
        var e = this;
        return r(t.default.mark(function r() {
            var n;
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return e.setData({
                        loading: !0
                    }), r.next = 3, a.ajax.get("https://api.qingmang.me/v1/product.listPaid", {
                        token: getApp().getUserToken(),
                        app_id: getApp().getConfig().wxAppid
                    });

                  case 3:
                    n = r.sent, e.setData({
                        events: n.data.products,
                        nextUrl: "",
                        hasMore: !1,
                        loading: !1
                    }), console.log("loadPaidList", n);

                  case 6:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    }
};

Page(n.default.apply(void 0, [ s, u.userWarehouseConfig, o.default ].concat(function(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
    return Array.from(e);
}(i.allMixins))));
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, a) {
                try {
                    var o = t[i](a), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

var n = e(require("../../libs/regenerator-runtime.js")), r = e(require("../../utils/extend-page")), i = e(require("../../mixins/actions")), a = e(require("../../mixins/share")), o = e(require("../../mixins/hook")), u = require("../../protocol/io");

Page((0, r.default)({
    onLoad: function(e) {
        var r = this;
        return t(n.default.mark(function t() {
            var i, a, o;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return console.log("options", e), t.next = 3, u.ajax.get("https://api.qingmang.me/v1/mina.post.recent", {
                        token: getApp().getUserToken(),
                        app_id: getApp().getConfig().wxAppid
                    });

                  case 3:
                    i = t.sent, a = i.data.events[0].post.id, o = i.data.events[0].post.mid, console.log("ids", o, a), 
                    wx.reLaunch({
                        url: "/pages/magazine/magazine?target=%2Fpages%2Fpost%2Fpost%3Fid%3D" + a + "%26mid%3D" + o
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    }
}, i.default, a.default, o.default));
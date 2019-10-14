function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(i, n) {
                try {
                    var u = t[i](n), o = u.value;
                } catch (e) {
                    return void a(e);
                }
                if (!u.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
            }
            return r("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), r = e(require("../../utils/util")), i = require("../../protocol/io"), n = e(require("../../utils/extend-page")), u = e(require("../../mixins/hook"));

Page((0, n.default)({
    data: {},
    onLoad: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            var u, o, d, s;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!((o = decodeURIComponent(e.target)).indexOf("magazine/magazine") >= 0)) {
                        t.next = 9;
                        break;
                    }
                    return d = r.default.parseUrl(o).params.id, t.next = 5, i.api.get("v1/magazine.querybyinterest", {
                        interest_id: d
                    });

                  case 5:
                    "magazine" === (s = t.sent).data.events[0].type ? u = "/pages/magazine/magazine?id=" + s.data.events[0].magazine.id : getApp().globalData.targetCid = "c" + s.data.events[0].category.id, 
                    t.next = 10;
                    break;

                  case 9:
                    e.target.indexOf("article/article") >= 0 && (u = e.uid ? "/pages/article/article?id=" + e.id + "&uid=" + e.uid : "/pages/article/article?id=" + e.id);

                  case 10:
                    u = u ? r.default.buildUrl(getApp().getConfig().homePage, {
                        target: u
                    }) : getApp().getConfig().homePage, wx.reLaunch({
                        url: u
                    });

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    }
}, u.default));
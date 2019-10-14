function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function r(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(u, a) {
                try {
                    var i = r[u](a), o = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
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

var t = e(require("../../libs/regenerator-runtime.js")), n = require("../../protocol/io"), u = e(require("../../utils/extend-page")), a = e(require("../../mixins/actions")), i = e(require("../../mixins/logger")), o = e(require("../../mixins/hook"));

Page((0, u.default)({
    onLoad: function() {
        var e = this;
        return r(t.default.mark(function r() {
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    e.pageShown("/create/");

                  case 1:
                  case "end":
                    return r.stop();
                }
            }, r, e);
        }))();
    },
    submit: function(e) {
        var u = this;
        return r(t.default.mark(function r() {
            var a, i, o;
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (a = e.detail.value.magazineName) {
                        r.next = 3;
                        break;
                    }
                    return r.abrupt("return");

                  case 3:
                    return r.next = 5, n.api.get("v1/magazine.querybyname", {
                        name: a
                    });

                  case 5:
                    i = r.sent, o = i.data.events[0].magazine.id, wx.redirectTo({
                        url: "/pages/modify/modify?mid=" + o + "&type=source&redirect=true"
                    });

                  case 8:
                  case "end":
                    return r.stop();
                }
            }, r, u);
        }))();
    }
}, a.default, i.default, o.default));
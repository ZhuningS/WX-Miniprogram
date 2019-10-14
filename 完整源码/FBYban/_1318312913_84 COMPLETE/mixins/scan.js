function e(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, u) {
                try {
                    var s = t[a](u), c = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(c).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(c);
            }
            return n("next");
        });
    };
}

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime.js")), n = require("../protocol/io"), a = function() {
    var e = t(r.default.mark(function e(t) {
        var a;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.api.getV1("image.scan", {
                    token: getApp().getUserToken(),
                    image_url: t
                });

              case 2:
                if (a = e.sent, console.log("scan result is ", a), !a.data.ok) {
                    e.next = 6;
                    break;
                }
                return e.abrupt("return", a.data.result.success ? a.data.result.target : "");

              case 6:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}();

module.exports = {
    data: {
        scanned: {}
    },
    scan: function(n) {
        var u = this;
        return t(r.default.mark(function t() {
            var s, c, i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (s = n.currentTarget.id, !u.data.scanned[s]) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    return c = n.currentTarget.dataset.url, t.next = 6, a(c);

                  case 6:
                    (i = t.sent) && u.setData(e({}, "scanned." + s, i));

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, u);
        }))();
    }
};
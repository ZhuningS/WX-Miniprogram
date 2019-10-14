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
            function n(u, o) {
                try {
                    var a = t[u](o), i = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
        });
    };
}

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime")), n = require("../protocol/io"), u = function() {
    var e = t(r.default.mark(function e(t, u) {
        var o;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = u ? "v1/user.subscribe" : "v1/user.unsubscribe", e.next = 3, n.api.get(o, {
                    uid: t
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();

module.exports = {
    data: {
        followed: {}
    },
    follow: function(n) {
        var o = this;
        return t(r.default.mark(function t() {
            var a, i, c;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = n.currentTarget.dataset, i = a.uid, c = a.content, t.next = 3, u(i, !0);

                  case 3:
                    o.setData(e({}, "followed." + i, !0)), getApp().getLogger().logAction("added_profile", {
                        profile: i,
                        content: c
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, o);
        }))();
    },
    unfollow: function(n) {
        var o = this;
        return t(r.default.mark(function t() {
            var a, i, c;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = n.currentTarget.dataset, i = a.uid, c = a.content, t.next = 3, u(i, !1);

                  case 3:
                    o.setData(e({}, "followed." + i, !1)), getApp().getLogger().logAction("removed_profile", {
                        profile: i,
                        content: c
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, o);
        }))();
    }
};
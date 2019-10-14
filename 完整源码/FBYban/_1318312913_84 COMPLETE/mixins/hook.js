function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(u, a) {
                try {
                    var o = e[u](a), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
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

var n = t(require("../libs/regenerator-runtime")), r = t(require("../pages/components/global-ui"));

module.exports = {
    subsUI: null,
    onLoad: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, getApp().init();

                  case 2:
                    t.subsUI = r.default.mapUIStoreToData(t), t.setData({
                        route: t.route
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, t);
        }))();
    },
    onShow: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, getApp().init();

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, e, t);
        }))();
    },
    onHide: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r.default.dispatchResetUIAction();

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, e, t);
        }))();
    },
    onUnload: function() {
        var t = this;
        return e(n.default.mark(function e() {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t.subsUI && (r.default.dispatchResetUIAction(), t.subsUI.unsubscribe(), t.subsUI = null);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, t);
        }))();
    }
};
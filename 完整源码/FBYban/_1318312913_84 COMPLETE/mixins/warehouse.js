function e(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function t(u, o) {
                try {
                    var s = r[u](o), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(i);
            }
            return t("next");
        });
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime")), n = require("../services/warehouse/index");

exports.default = {
    warehouseUnsubscribe: null,
    onShow: function() {
        var t = this;
        return e(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t.warehouseUnsubscribe = (0, n.warehouseConnector)(t);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, t);
        }))();
    },
    onUnload: function() {
        var n = this;
        return e(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n.warehouseUnsubscribe && n.warehouseUnsubscribe();

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    }
};
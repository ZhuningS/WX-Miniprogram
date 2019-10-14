function e(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(u, o) {
                try {
                    var i = r[u](o), s = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sleep = void 0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime"));

exports.sleep = function() {
    var t = e(r.default.mark(function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e) {
                    setTimeout(function() {
                        e();
                    }, t);
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e, void 0);
    }));
    return function() {
        return t.apply(this, arguments);
    };
}();
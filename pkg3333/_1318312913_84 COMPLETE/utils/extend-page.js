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
                    var u = r[a](i), c = u.value;
                } catch (e) {
                    return void t(e);
                }
                if (!u.done) return Promise.resolve(c).then(function(e) {
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

var t = e(require("../libs/regenerator-runtime")), n = e(require("../libs/underscore")), a = require("./dev");

module.exports = function(e) {
    for (var i = arguments.length, u = Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) u[c - 1] = arguments[c];
    return e.data = e.data || {}, n.default.each(u, function(n) {
        for (var i in n) !function(i) {
            if ("data" === i) Object.assign(e.data, n[i]); else if ("function" == typeof e[i]) {
                var u = e[i];
                e[i] = r(t.default.mark(function e() {
                    var r = arguments;
                    return t.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, n[i].apply(this, r);

                          case 3:
                            e.next = 8;
                            break;

                          case 5:
                            e.prev = 5, e.t0 = e.catch(0), (0, a.errorReporter)("function in mixin call failed", e.t0);

                          case 8:
                            if (!u) {
                                e.next = 17;
                                break;
                            }
                            return e.prev = 9, e.next = 12, u.apply(this, r);

                          case 12:
                            e.next = 17;
                            break;

                          case 14:
                            e.prev = 14, e.t1 = e.catch(9), (0, a.errorReporter)("function in base call failed", e.t1);

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 0, 5 ], [ 9, 14 ] ]);
                }));
            } else e[i] = n[i];
        }(i);
    }), e;
};
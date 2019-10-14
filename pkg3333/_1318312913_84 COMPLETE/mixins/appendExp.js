function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

function t(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function r(a, u) {
                try {
                    var i = n[a](u), o = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
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

var r = e(require("../libs/regenerator-runtime")), a = require("../protocol/io"), u = e(require("../libs/underscore"));

module.exports = {
    appendExp: function(e) {
        var i = this;
        return t(r.default.mark(function t() {
            var o, f, s, c, d;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (o = u.default.find(i.data.events, function(e) {
                        return "exps" === e.type;
                    })) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    if (f = u.default.find(o.exps, function(n) {
                        return n.magazine.id === e;
                    })) {
                        t.next = 12;
                        break;
                    }
                    return t.next = 7, a.api.get("v1/magazine.info?mid=" + e);

                  case 7:
                    s = t.sent, c = s.data.events[0].magazineInfo.magazine, d = i.data.events.indexOf(o), 
                    o.exps.push({
                        value: 0,
                        magazine: c
                    }), i.setData(n({}, "events[" + d + "]", o));

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, i);
        }))();
    }
};
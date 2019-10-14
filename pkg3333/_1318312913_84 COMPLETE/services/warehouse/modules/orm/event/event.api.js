function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var u = t[o](i), a = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
            }
            return r("next");
        });
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t;
}

function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.eventAPI = void 0;

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/regenerator-runtime")), u = require("../../../../../utils/data-processor"), a = require("../../shared/base-api"), s = require("../../shared/normalize"), c = require("./event.initial"), f = require("./event.action"), p = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), l = function(o) {
    function l() {
        return t(this, l), n(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
    }
    return r(l, a.BaseAPI), p(l, [ {
        key: "initialize",
        value: function() {
            this.setEventEntities(c.initialEvents);
        }
    }, {
        key: "setEventEntities",
        value: function() {
            var t = e(i.default.mark(function e(t) {
                var n, r;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = [], r = t.map(function(e) {
                            var t = e.id || (0, u.generateEventId)(e);
                            return n.push(t), (0, s.addPrimaryKeyField)(e, t), e;
                        }), this.dispatch((0, f.setEventEntitiesAction)(r)), e.abrupt("return", Promise.resolve(n));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    }, {
        key: "setEventEntity",
        value: function() {
            var t = e(i.default.mark(function e(t, n) {
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.dispatch((0, f.updateEventEntityAction)({
                            eventId: t,
                            patch: n
                        })), e.abrupt("return", Promise.resolve(t));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e, n) {
                return t.apply(this, arguments);
            };
        }()
    } ]), l;
}();

exports.eventAPI = new l();
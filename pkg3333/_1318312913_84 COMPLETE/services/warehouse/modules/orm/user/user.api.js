function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, u) {
                try {
                    var i = t[o](u), s = i.value;
                } catch (e) {
                    return void r(e);
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

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function r(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t;
}

function n(e, t) {
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
}), exports.userAPI = exports.getUserIdFromUserInfo = void 0;

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, u = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/regenerator-runtime")), i = require("../../shared/base-api"), s = require("../../shared/normalize"), a = require("./user.action"), c = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), f = (exports.getUserIdFromUserInfo = function(e) {
    return e.profile.uid;
}, function(o) {
    function f() {
        return t(this, f), r(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
    }
    return n(f, i.BaseAPI), c(f, [ {
        key: "readInfo",
        value: function() {
            var t = e(u.default.mark(function e(t) {
                var r, n, o, i;
                return u.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = "v1/user.info", n = {
                            uid: t
                        }, e.prev = 2, e.next = 5, this.request.get(r, n);

                      case 5:
                        return o = e.sent, i = (0, s.parseEventLikeRes)(o, "userInfo"), (0, s.addPrimaryKeyField)(i, t), 
                        this.dispatch((0, a.setUserEntitiesAction)([ i ])), e.abrupt("return", Promise.resolve(i));

                      case 12:
                        return e.prev = 12, e.t0 = e.catch(2), e.abrupt("return", Promise.reject(e.t0));

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 12 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    }, {
        key: "updateInfo",
        value: function() {
            var t = e(u.default.mark(function e(t, r) {
                var n, o;
                return u.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = "account.update", e.prev = 1, e.next = 4, this.request.getV1(n, r);

                      case 4:
                        return o = e.sent, this.dispatch((0, a.updateUserEntityAction)({
                            userId: t.toString(),
                            patch: r
                        })), e.abrupt("return", Promise.resolve(o));

                      case 9:
                        return e.prev = 9, e.t0 = e.catch(1), e.abrupt("return", Promise.reject(e.t0));

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 9 ] ]);
            }));
            return function(e, r) {
                return t.apply(this, arguments);
            };
        }()
    } ]), f;
}());

exports.userAPI = new f();
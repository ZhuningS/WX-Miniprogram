function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var u = t[o](i), c = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
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
}), exports.commentAPI = void 0;

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/regenerator-runtime")), u = require("../../shared/base-api"), c = require("./comment.action"), a = function() {
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
}(), s = function(o) {
    function s() {
        return t(this, s), n(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }
    return r(s, u.BaseAPI), a(s, [ {
        key: "setCommentEntities",
        value: function() {
            var t = e(i.default.mark(function e(t) {
                var n;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.map(function(e) {
                            return e.id;
                        }), this.dispatch((0, c.setCommentEntitiesAction)(t)), e.abrupt("return", Promise.resolve(n));

                      case 3:
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
        key: "setCommentEntity",
        value: function() {
            var t = e(i.default.mark(function e(t, n) {
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.dispatch((0, c.updateCommentEntityAction)({
                            commentId: t,
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
    } ]), s;
}();

exports.commentAPI = new s();
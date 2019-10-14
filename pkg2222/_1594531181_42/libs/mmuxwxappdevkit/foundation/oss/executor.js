var e = require("../../core/network.js"), i = require("../../core/eventcenter.js"), t = (require("../../core/api.js"), 
{
    NONE: "none",
    LOGIN: "login"
});

module.exports = {
    Condition: t,
    _init: !1,
    _queue: {},
    init: function() {
        this._init || (i.register("onLoginSuccess", this), i.register("onLoginSuccess", this), 
        this._init = !0);
    },
    execute: function(e) {
        e && (this.init(), this.getQueue(e.condition).push(e), this.getCondition(e.condition) && this.clearQueue(e.condition, !0));
    },
    getCondition: function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.NONE) != t.LOGIN || e.isLogin;
    },
    getQueue: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.NONE;
        return e in this._queue || (this._queue[e] = []), this._queue[e];
    },
    clearQueue: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.NONE, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.getQueue(e);
        this._queue[e] = [];
        var u = !0, o = !1, r = void 0;
        try {
            for (var s, c = n[Symbol.iterator](); !(u = (s = c.next()).done); u = !0) {
                var h = s.value;
                i ? h.success && h.success() : h.fail && h.fail();
            }
        } catch (e) {
            o = !0, r = e;
        } finally {
            try {
                !u && c.return && c.return();
            } finally {
                if (o) throw r;
            }
        }
    },
    onLoginSuccess: function(e) {
        this.clearQueue(t.LOGIN, !0);
    },
    onLoginFail: function(e) {
        this.clearQueue(t.LOGIN, !1);
    }
};
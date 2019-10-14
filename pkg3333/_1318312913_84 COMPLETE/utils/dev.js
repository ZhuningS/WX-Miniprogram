Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NOOP = exports.errorReporter = exports.errorReporterCreator = exports.debugCreator = exports.__DEBUG__ = void 0;

var e = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    return r.default = e, r;
}(require("../services/redirector")), r = require("../protocol/logger"), o = wx.getSystemInfoSync(), t = exports.__DEBUG__ = "devtools" === o.brand || !1, s = (exports.debugCreator = function(e) {
    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return function() {
        for (var o, s = arguments.length, a = Array(s), n = 0; n < s; n++) a[n] = arguments[n];
        t && r && (o = console).log.apply(o, [ e + ":" ].concat(a));
    };
}, exports.errorReporterCreator = function(e) {
    return function() {
        for (var o, s = arguments.length, a = Array(s), n = 0; n < s; n++) a[n] = arguments[n];
        var c = void 0;
        if (a && 0 !== a.length && ((c = a.pop()) || c.message || c.data)) return c.data && (e = "request", 
        c.message = c.data.errorMessage, c.stack = JSON.stringify(c)), (o = console).error.apply(o, [ e + ":" ].concat(a, [ "\n - message: " + c.message, "\n - stack: " + c.stack ])), 
        t ? void 0 : (r.logger.logAction("caught_error", {
            type: e,
            message: a.join(", ") + " - " + c.message,
            detail: c.stack
        }), null);
    };
});

exports.errorReporter = s("uncategory"), exports.NOOP = function() {};

t && setTimeout(function() {
    console.log("redirector page paths:", e.PAGE_PATH);
}, 2e3);
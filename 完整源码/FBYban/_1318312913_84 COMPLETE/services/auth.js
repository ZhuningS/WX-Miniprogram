Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.requireAuthWrapper = void 0;

var e = require("./redirector"), r = getApp();

exports.requireAuthWrapper = function(t) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return i.nextUrl = i.nextUrl || "navigateBack", function() {
        return r.isAnonymous() ? (0, e.navigateToLoginPage)(i.nextUrl) : t.bind(this).apply(void 0, arguments);
    };
};
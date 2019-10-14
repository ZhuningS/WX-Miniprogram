Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatIntoMetaSnippet = exports.formatIntoFooterNote = exports.getHoursAgoRelativeTime = void 0;

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../utils/util")), t = require("./card-common.util"), r = exports.getHoursAgoRelativeTime = function(t) {
    return new Date().getTime() - t >= 864e5 ? null : e.default.formatTime(t, !0);
};

exports.formatIntoFooterNote = function(t, o, n, u, i) {
    if (u || !o) return null;
    var a = "activity" === i ? e.default.formatTimeNew(o) : r(o);
    return !n && a && t && (a += " · " + t), n || a || (a = t), a;
}, exports.formatIntoMetaSnippet = function(e, r, o, n, u, i) {
    var a = e.markCount, l = e.notes, s = e.showItemHeader, m = (0, t.countMarkUserNumber)(a, l);
    (0, t.isActivityType)(e);
    if (!s) return null;
    var f = "", c = o.actions.mark + "了";
    return f = 0 === a ? "" : o.enableSubscribe ? "来自你订阅的杂志" : "推荐", (f = m ? "" + (r ? (r.name || "匿名用户") + "等 " : "") + a + " 人" : null) && (f += c), 
    n && (f = a > 3 ? a + "+" : a, 0 === a && (f = null)), f;
};
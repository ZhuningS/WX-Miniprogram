Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mediaDataFormatter = exports.cardDataFormatter = void 0;

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/fast-deep-equal")), t = require("../libs/reselect"), r = require("../pages/components/widgets/card-common/index"), o = require("./color"), a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
}, n = [ "isRead", "isMarked", "isDeleted", "markCount", "commentCount", "topicCount", "section", "comments", "post" ], i = function(e) {
    return e;
}, c = (0, t.createSelectorCreator)(t.defaultMemoize, function(t, r) {
    return !(!t || !r) && t.id === r.id && n.every(function(o) {
        return (0, e.default)(t[o], r[o]);
    });
});

exports.cardDataFormatter = function(e) {
    return c(i, function(t) {
        return (0, r.parseEventDataToCardData)(t, e);
    });
}, exports.mediaDataFormatter = (0, t.createSelector)(i, function(e) {
    var t = e.type, r = a({}, e[t], {
        type: t
    });
    return r.title = r.title || r.name, r.snippet = r.snippet || r.tagline, r.coverUrl = r.cover, 
    r.backgroundColor = (0, o.hexToRgbaString)(r.color), r;
});
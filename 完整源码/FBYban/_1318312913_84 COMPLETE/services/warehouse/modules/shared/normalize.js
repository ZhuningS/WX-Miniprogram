Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.addPrimaryKeyField = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "id";
    e[r] || (e[r] = t.toString());
}, exports.parseEventLikeRes = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "article";
    if (!e.data.events || !e.data.events[0]) return {};
    var r = void 0, a = e.data.events[0];
    return (r = a[a.type]) || (r = a[t]), r;
};
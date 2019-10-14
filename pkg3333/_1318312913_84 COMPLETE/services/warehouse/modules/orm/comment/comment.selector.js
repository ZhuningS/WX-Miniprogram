Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.commentEntitiesSelector = void 0;

var e = require("../../../../../libs/mp-enhancers/index"), t = require("../../shared/selector");

exports.commentEntitiesSelector = (0, e.memoize)(function(e) {
    return (0, t.createEntitySelector)(function(t) {
        var r = t.Comment;
        return e.length ? e.map(function(e) {
            return r.get(e).value;
        }) : [];
    });
});
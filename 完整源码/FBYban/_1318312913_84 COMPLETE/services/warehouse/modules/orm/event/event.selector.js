Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.eventEntitiesSelector = exports.eventEntitySelector = void 0;

var e = require("../../../../../libs/mp-enhancers/index"), t = require("../../shared/selector");

exports.eventEntitySelector = (0, e.memoize)(function(e) {
    return (0, t.createEntitySelector)(function(t) {
        var r = t.Event;
        return e && r.exists(e) ? r.get(e).value : null;
    });
}), exports.eventEntitiesSelector = (0, e.memoize)(function(e) {
    return (0, t.createEntitySelector)(function(t) {
        var r = t.Event;
        return e.length ? e.map(function(e) {
            return r.get(e).value;
        }) : [];
    });
});
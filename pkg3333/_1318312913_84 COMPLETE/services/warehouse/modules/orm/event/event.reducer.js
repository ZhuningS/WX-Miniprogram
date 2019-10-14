function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ormEventReducer = void 0;

var t = require("./event.action"), n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
};

exports.ormEventReducer = function(i, r) {
    var o = r.type, a = r.payload, s = i.Event;
    switch (o) {
      case "" + t.setEventEntitiesAction:
        a.map(function(e) {
            var t = void 0;
            e.section && "articleSet" === e.section.type && (t = "section"), e.comments && e.comments.events.length && (t = "comments"), 
            t && (e[t].events.map(function(t) {
                t.sectionId = e.id, s.exists(e.id) || s.upsert(t);
            }), e.sectionName = t, e[t].sectionId = e.id), s.exists(e.id) || s.upsert(e);
        });
        break;

      case "" + t.updateEventEntityAction:
        var c = a.eventId, u = a.patch;
        if (!s.exists(c)) return;
        var v = s.get(c), d = v.value;
        if (void 0 !== u.isMarked && (u.markCount = u.isMarked ? d.markCount + 1 : d.markCount - 1), 
        v.update(u), d.sectionId) {
            var p = s.get(d.sectionId), m = p.value, l = m.sectionName, f = m[l].events.map(function(e) {
                return e.id === d.id ? v.value : e;
            });
            p.update(n({}, m, e({}, l, n({}, m[l], {
                events: f
            }))));
        }
    }
};
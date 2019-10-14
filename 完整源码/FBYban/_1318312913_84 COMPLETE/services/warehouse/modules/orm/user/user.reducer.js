Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ormUserReducer = void 0;

var e = require("./user.action"), r = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
};

exports.ormUserReducer = function(t, s) {
    var a = s.type, o = s.payload, i = t.User;
    switch (a) {
      case "" + e.setUserEntitiesAction:
        o.map(function(e) {
            return i.upsert(e);
        });
        break;

      case "" + e.updateUserEntityAction:
        var n = o.userId, u = o.patch;
        if (!i.exists(n)) return;
        var c = i.get(n), p = c.value;
        c.update({
            profile: r({}, p.profile, u)
        });
    }
};
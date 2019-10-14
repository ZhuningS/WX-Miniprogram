Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
};

exports.generateTapEvent = function(t, r) {
    return t || (t = {
        currentTarget: {
            dataset: {}
        }
    }), e({}, t, {
        currentTarget: e({}, t.currentTarget, {
            dataset: e({}, t.currentTarget.dataset, t.detail, r)
        })
    });
};
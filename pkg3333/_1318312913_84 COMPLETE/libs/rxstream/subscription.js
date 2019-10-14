function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), n = function() {
    function n(t, i) {
        e(this, n), this._callback = i, this._isStopped = !1;
    }
    return t(n, [ {
        key: "_execute",
        value: function(e) {
            this._isStopped || this._callback(e);
        }
    }, {
        key: "unsubscribe",
        value: function() {
            this._isStopped = !0;
        }
    } ]), n;
}();

exports.default = n;
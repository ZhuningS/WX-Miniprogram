function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Subject = void 0;

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./subscription")), i = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), n = function() {
    function n() {
        t(this, n), this._subscriptionList = [];
    }
    return i(n, [ {
        key: "subscriptionList",
        value: function(t) {
            return t instanceof Array && (this._subscriptionList = t), this._subscriptionList;
        }
    }, {
        key: "next",
        value: function(t) {
            this.subscriptionList().forEach(function(e) {
                e._execute(t);
            });
        }
    }, {
        key: "subscribe",
        value: function(t) {
            var i = new e.default(this, t);
            return this.subscriptionList().push(i), i;
        }
    }, {
        key: "unsubscribe",
        value: function(t) {
            t instanceof e.default && this.subscriptionList(this.subscriptionList().filter(function(e) {
                return e !== t;
            }));
        }
    } ]), n;
}();

exports.Subject = n;
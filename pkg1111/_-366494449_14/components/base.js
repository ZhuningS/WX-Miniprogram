function t(t, e, c) {
    return e in t ? Object.defineProperty(t, e, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = c, t;
}

function e(t) {
    var e = t.page, c = t.scope, a = t.cmpt;
    this.curPage = e, this.curScope = c, this.curCmpt = a, this._initMedFunc();
}

e.prototype = {
    constructor: e,
    _initMedFunc: function() {
        var t = this;
        this.curPage["med_" + this.curScope] = function(e) {
            var c = e.target.dataset.medName;
            if (c) {
                var a = t[c];
                a && a.call(t, e);
            }
        };
    },
    setData: function(e, c) {
        var a = this.getData(null, c);
        Object.assign(a, e), this.curPage.setData(t({}, (c ? "" : "com.") + this.curScope, a));
    },
    getData: function(t, e) {
        var c = this.curPage.data;
        return e || (c = c.com || {}), c = c[this.curScope] || {}, t ? c[t] : c;
    }
}, module.exports = e;
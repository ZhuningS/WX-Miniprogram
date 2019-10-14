function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e(t) {
    var e = t.page, a = t.scope, c = t.cmpt;
    this.curPage = e, this.curScope = a, this.curCmpt = c, this._initMedFunc(), this.setData({
        scope: a,
        dyFunc: "med_" + a
    });
}

e.prototype = {
    constructor: e,
    _initMedFunc: function() {
        var t = this;
        this.curPage["med_" + this.curScope] = function(e) {
            var a = e.type, c = e.target.dataset["medName" + ("tap" == a ? "" : "_" + a)];
            if (c) {
                var i = t[c];
                i && i.call(t, e);
            }
        };
    },
    setData: function(e) {
        var a = this.getData(null);
        Object.assign(a, e), this.curPage.setData(t({}, this.curScope, a));
    },
    getData: function(t) {
        var e = this.curPage.data;
        return e = e[this.curScope] || {}, t ? e[t] : e;
    }
}, module.exports = e;
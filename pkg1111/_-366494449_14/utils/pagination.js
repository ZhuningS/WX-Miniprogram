var t = require("./common.js"), a = (require("./ajax.js"), require("../common/CmptBase.js")), e = function(t) {
    t.page, t.scope;
    a.apply(this, arguments);
};

t.extend(e, a), Object.assign(e.prototype, {
    init: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.defaultPage, e = void 0 === a ? 1 : a;
        return this._options = t, this.setData({
            currentPage: e,
            pageLoading: !1,
            pageEnd: !1
        }), this._loadPage(), this;
    },
    loadNext: function() {
        this._loadPage();
    },
    flush: function(t) {
        var a = this._options.defaultPage, e = void 0 === a ? 1 : a;
        this.setData({
            currentPage: e
        }), this._loadPage(t);
    },
    _loadPage: function(t) {
        var a = this, e = this._options.rendData, i = this.getData("currentPage");
        this.setData({
            pageLoading: !0
        }), e && e(i, function(e) {
            a.setData({
                currentPage: i + 1,
                pageLoading: !1,
                pageEnd: e < 10
            }), t && t();
        });
    }
}), module.exports = e;
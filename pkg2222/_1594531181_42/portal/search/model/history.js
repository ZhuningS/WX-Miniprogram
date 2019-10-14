var s = require("../../../core/eventcenter.js"), e = require("../../../core/api.js");

module.exports = {
    list: [],
    _loaded: !1,
    load: function(s) {
        var t = this;
        this._loaded ? s.success && s.success() : e.getStorage({
            key: "search_history",
            success: function(e) {
                e && e.data && (t.list = e.data), t._loaded = !0, s.success && s.success();
            },
            fail: function() {
                s.success && s.success();
            }
        });
    },
    add: function(e) {
        -1 != this.list.indexOf(e) && this.delete(e), this.list.unshift(e), s.emit(s.Event.onSearchHistoryChange), 
        this.save();
    },
    delete: function(e) {
        var t = this.list.indexOf(e);
        -1 != t && (this.list.splice(t, 1), s.emit(s.Event.onSearchHistoryChange), this.save());
    },
    save: function() {
        e.setStorage({
            key: "search_history",
            data: this.list
        });
    }
};
var e = require("../../core/network.js"), s = require("../../core/api.js");

module.exports = function(a) {
    var t = function(e) {
        if (!e.cgi || 0 == e.cgi.length) return console.error("init model with cgi empty:", e), 
        void (this._state = "INVALID");
        this.cgi = e.cgi, this.useCache = e.useCache, this.useCache && (this.cacheKey = "model_cache_key_" + this.cgi), 
        this.data = e.data || {}, this.props = e.props || {};
    };
    return Object.assign(t.prototype, {
        load: function(a) {
            var t = this;
            if ("INVALID" == t._state) {
                var i = new Error({
                    errmsg: "load invalid model: " + a
                });
                return console.error(i), a.fail && a.fail(i), void (a.complete && a.complete());
            }
            var c = t.cacheKey + JSON.stringify(a.params || {});
            if (a.urlParams && (c += JSON.stringify(a.urlParams)), t._lastCacheKey = c, t.useCache && !a.skipCache) if (a.loading) {
                var o = s.getStorageSync(c);
                o ? (Object.assign(t.data, o), a.success && a.success({
                    isCache: !0
                }), a.complete && a.complete()) : s.showLoading({
                    title: a.loadingTitle || "加载中"
                });
            } else s.getStorage({
                key: c,
                success: function(e) {
                    Object.assign(t.data, e.data), a.success && a.success({
                        isCache: !0
                    }), a.complete && a.complete();
                }
            }); else a.loading && s.showLoading({
                title: a.loadingTitle || "加载中"
            });
            e.request({
                cgi: t.cgi,
                params: a.params,
                urlParams: a.urlParams,
                skipCheckLogin: a.skipCheckLogin,
                success: function(e) {
                    Object.assign(t.data, e), t.useCache && s.setStorage({
                        key: c,
                        data: e
                    }), a.success && a.success({
                        isCache: !1
                    });
                },
                fail: a.fail,
                complete: function(e) {
                    a.loading && s.hideLoading(), a.complete && a.complete(e);
                }
            });
        },
        sync: function() {
            s.setStorage({
                key: this._lastCacheKey,
                data: this.data
            });
        }
    }), a.methods && Object.assign(t.prototype, a.methods), new t(a);
};
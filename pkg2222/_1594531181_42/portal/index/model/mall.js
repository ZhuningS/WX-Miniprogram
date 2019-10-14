var a = require("../../../core/network.js"), e = require("../../../core/state.js"), s = require("../../../core/storage.js");

require("../../../core/api.js");

module.exports = {
    state: e.init,
    _canvasId: "",
    _canvasCookie: "",
    _disableCache: void 0,
    clear: function() {
        this.state = e.init;
    },
    load: function(i) {
        var t = this;
        if (t.state != e.loading) {
            t.clear();
            var c = t._disableCache;
            if (console.debug("set disable_cache, ", c), i.useCache && !c) {
                var o = s.getData({
                    sync: !0,
                    key: "brandmalldata"
                });
                o && (o.isCache = !0, t.onCanvasLoaded(o, i.success));
            }
            t.state = e.loading, a.request({
                cgi: a.cgiSet.brandmall,
                params: {
                    canvas_id: i.canvasId || void 0,
                    canvas_cookie: i.canvasCookie || void 0,
                    disable_cache: c
                },
                success: function(a) {
                    a && 0 == a.errcode ? t.onCanvasLoaded(a, i.success, !c) : (t.state = e.fail, i.fail && i.fail({
                        errocde: a.errcode,
                        errmsg: a.errmsg
                    }));
                },
                fail: function(a) {
                    t.state = e.fail, i.fail && i.fail(a);
                },
                complete: i.complete
            });
        }
    },
    onCanvasLoaded: function(a, i) {
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a && (Object.assign(this, a), this.state = e.loaded, i && i(), t && s.setData({
            key: "brandmalldata",
            data: a
        }));
    }
};
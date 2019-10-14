var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, n = require("../foundation/navigate/navigator.js"), t = wx, i = !1, a = {
    showToast: function(o) {
        o && o.image && (o.image = n.BrandMallImage(o.image)), wx.showToast(o);
    },
    navigateTo: function(o) {
        n.navigateTo(o);
    },
    navigateBack: function(o) {
        n.navigateBack(o);
    },
    navigateToMiniProgram: function(o) {
        n.navigateToMiniProgram(o);
    },
    navigateBackMiniProgram: function(o) {
        n.navigateBackMiniProgram(o);
    }
};

"undefined" == typeof Proxy && (t = Object.assign({}, wx, a), i = !0), i || (i = !0, 
t = new Proxy(a, {
    get: function(n, t) {
        var i = this;
        if (t in n) return n[t];
        if (t in wx) return function() {
            for (var n = arguments.length, a = Array(n), e = 0; e < n; e++) a[e] = arguments[e];
            if (1 == a.length && "object" == o(a[0]) || !t.includes("Sync") && 0 == a.length) {
                0 == a.length && a.push({});
                var r = a[0], c = r.success, s = r.fail;
                return r.success = function(o) {
                    console.log("call WXJSApi: ", t, "with options:", r, " success"), c && c(o);
                }, r.fail = function(o) {
                    console.error("call WXJSApi: ", t, "with options: ", r, " fail: ", o), s && s(o);
                }, a[0] = r, wx[t].apply(i, a);
            }
            var l = null;
            try {
                l = wx[t].apply(i, a), console.log("call WXJSApi: ", t, "with options:", a, " success");
            } catch (o) {
                console.error("call WXJSApi: ", t, "with options: ", a, " fail: ", o);
            }
            return l;
        };
        throw new Error({
            errmsg: "No such api: " + t,
            errcode: -1
        });
    }
})), module.exports = t;
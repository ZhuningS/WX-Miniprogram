var e = require("../../core/network.js"), o = require("executor.js"), r = require("../../core/sys.js");

require("../../core/api.js");

module.exports = {
    report: function(n) {
        var s = this.commBuffer() + "," + (n.logString || "");
        o.execute({
            condition: o.Condition.LOGIN,
            success: function() {
                var o = [ {
                    logid: n.logId,
                    log_buffer: s
                } ], t = {
                    clientversion: r.wechatVersion(),
                    device: "ios" == r.platform ? 1 : 2,
                    item_list: o
                };
                console.log("report ", t), e.request({
                    cgi: e.cgiSet.reportdata,
                    params: t,
                    success: function(e) {
                        e && 0 == e.errcode ? (console.log("report success"), n.success && n.success()) : (console.error("report fail res ", e), 
                        n.fail && n.fail({
                            errocde: e.errcode,
                            errmsg: e.errmsg
                        }));
                    },
                    fail: function(e) {
                        console.log("report fail error ", e), n.fail && n.fail(e);
                    }
                });
            },
            fail: function(e) {
                console.log("report fail error ", e), n.fail && n.fail(e);
            }
        });
    },
    commBuffer: function() {
        var e = r.system, o = r.system, n = r.system.split(" ");
        return n.length >= 2 && (e = n[0], o = n.splice(1).join(" ")), [ encodeURIComponent(r.model || ""), encodeURIComponent(r.brand || ""), encodeURIComponent(e || ""), encodeURIComponent(o || ""), encodeURIComponent(r.language || ""), new Date().getTime() / 1e3 | 0, new Date().getTime() / 1e3 | 0, 1 ].join(",");
    }
};
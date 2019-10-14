var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

require("../oss/aop.js");

var o = require("../../utils/enum.js"), t = require("../oss/reporter.js"), n = require("../../utils/util.js"), i = require("../../core/sys.js"), r = require("../../core/network.js"), a = require("../../core/eventcenter.js"), s = require("../../foundation/oss/idkey.js"), c = o.IDKeyDefine, g = null, p = function(p) {
    if ("object" !== e(p.pageActionConfig)) return console.error("no pageActionConfig in initData", p), 
    Page(p);
    if (void 0 !== p.__pageAction) return console.error("do not use __pageAction in your page"), 
    Page(p);
    p.__pageAction = [];
    var f = p.pageActionConfig;
    f.actionList.forEach(function(e) {
        var t = p[e.name] || function() {};
        t = t.after(function(t) {
            var n = this, r = {}, a = this;
            (e.ext || []).forEach(function(e) {
                var g = void 0;
                if (e.key) {
                    if (e.getter) try {
                        g = e.getter.apply(a, [ t ]);
                    } catch (e) {} else {
                        var p = e.keyPath.split("."), f = void 0;
                        f = e.from == o.ExtFrom.Args ? t : e.from == o.ExtFrom.Property ? n : n.data, p.forEach(function(e) {
                            g = (g || f)[e];
                        });
                    }
                    void 0 === g && s.report(i.alarmId, c.ReportExtDataEmpty), r[e.key] = g;
                } else s.report(i.alarmId, c.ReportExtKeyEmpty);
            }), console.log("new page action: ", e.type, " ext:", r), this.__pageAction.push({
                type: e.type,
                ext: r,
                ts: new Date().getTime()
            });
        }), p[e.name] = t;
    });
    var u = void 0, d = !1;
    p.onReady = (p.onReady || function() {}).after(function(e) {
        1 == getCurrentPages().length && (i.weappSessionId = new Date().getTime() + "");
    }), p.onShow = (p.onShow || function() {}).after(function(e) {
        u = new Date().getTime(), a.emit("onReloadNavigationBar"), d = !1;
    });
    var l = function(e) {
        var o = e.actionLogArray, a = e.index, s = encodeURIComponent(JSON.stringify(o));
        void 0 == u && (console.error("onHide before onShow, set startTime to endTIme"), 
        u = new Date().getTime());
        var c = n.genKVLogString({
            appId: i.appid(),
            sessionId: i._sessionId,
            scene: i._scene,
            actionLog: s,
            stayTime: new Date().getTime() - u,
            pageName: f.name,
            sessionKey: r.sessionLoginTime(),
            startTime: u,
            chunkIndex: a,
            debugMode: i.debugMode(),
            templateId: i.userVersion(),
            statBuffer: i.extStatBuffer(),
            weappSessionId: i.weappSessionId
        }), d = p.actionLogId || g;
        console.info("will report page action log:", c + "  length: ", c.length + ", array: " + o.length), 
        t.report({
            logId: d,
            logString: c
        });
    }, y = function(e) {
        if (!d) {
            for (var o = [], t = 0; this.__pageAction.length > 20; ) o = this.__pageAction.slice(0, 20), 
            l({
                actionLogArray: o,
                index: t
            }), t += 1, this.__pageAction = this.__pageAction.slice(20, this.__pageAction.length);
            l({
                actionLogArray: this.__pageAction,
                index: t
            }), this.__pageAction = [];
        }
        d = !0;
    };
    return p.onHide = (p.onHide || function() {}).after(y), p.onUnload = (p.onUnload || function() {}).after(y), 
    Page(p);
};

p.setup = function(e) {
    g = e.actionLogId;
}, module.exports = p;
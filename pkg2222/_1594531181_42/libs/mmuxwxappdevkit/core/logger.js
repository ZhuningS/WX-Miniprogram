function e(e) {
    if (Array.isArray(e)) {
        for (var o = 0, n = Array(e.length); o < e.length; o++) n[o] = e[o];
        return n;
    }
    return Array.from(e);
}

var o = require("sys.js"), n = require("network.js");

console._log = console.log.bind(console), console._debug = console.log.bind(console), 
console._info = console.info.bind(console), console._error = console.error.bind(console), 
console._warn = console.warn.bind(console), console.enableFlags = {
    log: !1,
    debug: !1,
    info: !1,
    warn: !1,
    logToFile: !1
}, console.log_level = "D", console.chunk_size = 250, console.log_exptime = 2592e5;

var s = [], l = function() {
    var e = 6e4 * new Date().getTimezoneOffset(), n = new Date(Date.now() - e).toISOString().replace("T", " ").slice(0, -1), l = arguments[0], t = arguments[1], c = "L";
    if (l == console._debug ? c = "D" : l == console._info ? c = "I" : l == console._error ? c = "E" : l == console._warn && (c = "W"), 
    t.length > 0) {
        var i = Array.prototype.slice.call(t, 0), r = [ "(", c, ")" ].join("");
        if (n = [ "[", n, "]" ].join(""), i.splice(0, 0, r), i.splice(1, 0, n), "devtools" == o.platform) {
            var a = new Error("dummy").stack.split("\n")[3].split(" "), u = a.pop().split("/").pop(), g = a.pop();
            i.splice(2, 0, [ "(", g, " ", u ].join(""));
        }
        if (l.apply(this, i), function(e) {
            var o = [ "L", "D", "I", "W", "E" ];
            return o.indexOf(e) >= o.indexOf(console.log_level);
        }(c)) {
            for (var f = 0; f < i.length; f++) i[f] = JSON.stringify(i[f]);
            var p = i.join(" ").replace(/['"]+/g, "");
            s.push(p), s.length > 0 && s.length % 50 == 0 && console.sync();
        }
    }
};

console.log = function() {
    this.enableFlags.log && l(this._log, arguments);
}, console.debug = function() {
    this.enableFlags.debug && l(this._debug, arguments);
}, console.info = function() {
    this.enableFlags.info && l(this._info, arguments);
}, console.warn = function() {
    this.enableFlags.warn && l(this._warn, arguments);
}, console.error = function() {
    l(this._error, arguments);
}, console.sync = function(o) {
    if (this.enableFlags.logToFile) {
        wx.getStorageInfo({
            success: function(n) {
                if (n.currentSize >= n.limitSize) return console.error("storage is full, sync log fail"), 
                void (o && "function" == typeof o.fail && o.fail());
                var l = new Date(), t = "_logger__logs__" + l.toJSON().slice(0, 10).replace(/-/g, "/");
                wx.getStorage({
                    key: t,
                    complete: function(n) {
                        var c = n.data;
                        c = c ? [].concat(e(c), e(s)) : s, console.info("log sync size: ", c.length), wx.getStorage({
                            key: "log_files",
                            complete: function(e) {
                                var o = e.data || [];
                                o.map(function(e) {
                                    return e.key;
                                }).includes(t) || (o.push({
                                    key: t,
                                    expTime: l.getTime() + console.log_exptime
                                }), wx.setStorage({
                                    key: "log_files",
                                    data: o
                                }));
                            }
                        }), wx.setStorage({
                            key: t,
                            data: c,
                            complete: function(e) {
                                o && o.complete && o.complete(e);
                            }
                        }), s = [];
                    }
                });
            }
        });
    }
}, module.exports = {
    setup: function(e) {
        console.enableFlags = e, this.clearExpLogs();
    },
    clearExpLogs: function() {
        wx.getStorage({
            key: "log_files",
            success: function(e) {
                var o = e.data || [], n = new Date().getTime(), s = [];
                o.forEach(function(e) {
                    n >= e.expTime ? wx.removeStorage({
                        key: e.key
                    }) : s.push(e);
                }), wx.setStorage({
                    key: "log_files",
                    data: s
                });
            }
        });
    },
    sync: function(e) {
        return console.sync(e);
    },
    logs: s,
    getLogs: function(e) {
        var o = "_logger__logs__" + e.date;
        wx.getStorage({
            key: o,
            success: e.success,
            fail: e.fail,
            complete: e.complete
        });
    },
    upload: function(e) {
        var n = this;
        n.curUploadIndex = 0, n.uploadProgress = 0, n.uploadState = "processing";
        var s = parseInt(new Date().getTime() / 1e3), l = [ o.appid(), s ].join("-");
        n.getLogs({
            date: e.date,
            success: function(o) {
                var s = o.data || [], t = Math.ceil(1 * s.length / console.chunk_size);
                n._reportLoop({
                    logs: s,
                    serial: l,
                    count: t,
                    success: e.success,
                    fail: e.fail
                });
            }
        });
    },
    _reportLoop: function(e) {
        var o = this;
        if (o.curUploadIndex < e.count) {
            var n = o.curUploadIndex * console.chunk_size, s = e.logs.slice(n, n + console.chunk_size);
            o._postLogs({
                slice: s,
                serial: e.serial,
                curUploadIndex: o.curUploadIndex,
                count: e.count,
                success: function() {
                    o.curUploadIndex += 1, o.uploadProgress = 1 * o.curUploadIndex / e.count, setTimeout(function() {
                        o._reportLoop(e);
                    }, 500);
                },
                fail: function(n) {
                    console.warn(n), o.uploadState = "error", e.fail && e.fail(n);
                }
            });
        } else o.uploadState = "finished", e.success && e.success();
    },
    _postLogs: function(e) {
        n.request({
            cgi: n.cgiSet.reportclientlog,
            params: {
                report_id: [ e.serial, e.curUploadIndex, e.count ].join("."),
                log_buffer: e.slice.join("\n")
            },
            success: e.success,
            fail: e.fail
        });
    }
};
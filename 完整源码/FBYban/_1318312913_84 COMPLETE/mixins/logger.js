function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
        });
    };
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime.js"));

module.exports = {
    tracker: {
        started: void 0,
        prepared: void 0,
        loaded: void 0,
        rendered: void 0,
        sent: void 0
    },
    pageStarted: function() {
        this.tracker.started = new Date().getTime(), console.log("[" + this.tracker.started + "] page started");
    },
    pageShown: function(e, t) {
        getApp().getLogger().setCurrentPage(this, e, t);
    },
    pageLoaded: function() {
        this.tracker.loaded = new Date().getTime() - this.tracker.started, console.log("[" + this.tracker.started + "] page loaded, take " + this.tracker.loaded + "ms");
    },
    pagePrepared: function() {
        this.tracker.prepared = new Date().getTime() - this.tracker.started, console.log("[" + this.tracker.prepared + "] page loaded, take " + this.tracker.prepared + "ms");
    },
    pageRendered: function() {
        this.tracker.rendered = new Date().getTime() - this.tracker.started, console.log("[" + this.tracker.started + "] page rendered, take " + this.tracker.rendered + "ms"), 
        this.tracker.sent || (this.log("rendered", {
            ts0: this.tracker.prepared,
            ts1: this.tracker.loaded,
            ts2: this.tracker.rendered,
            readable: "请求资源花费 " + this.tracker.loaded + " 毫秒，从初始化到渲染出界面总共花费 " + this.tracker.rendered + " 毫秒"
        }), this.tracker.sent = !0);
    },
    log: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        getApp().getLogger().logAction(e, t);
    },
    onShow: function() {
        var r = this;
        return e(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, getApp().init();

                  case 2:
                    getApp().getLogger().resumePage(r);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    },
    onPullDownRefresh: function() {
        var r = this;
        return e(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    getApp().getLogger().logAction("refreshed_screen");

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    }
};
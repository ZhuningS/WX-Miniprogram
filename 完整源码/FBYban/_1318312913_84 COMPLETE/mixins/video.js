function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function a(r, i) {
                try {
                    var o = e[r](i), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                if (!o.done) return Promise.resolve(c).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(c);
            }
            return a("next");
        });
    };
}

var n = t(require("../libs/regenerator-runtime")), a = require("../protocol/io"), r = t(require("../pages/components/global-ui"));

module.exports = {
    data: {
        currentPlaying: {
            id: !1,
            url: void 0,
            loading: !1,
            noMask: !1
        }
    },
    onTapPlay: function(t) {
        var i = this;
        return e(n.default.mark(function e() {
            var o, c, d;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.currentTarget.dataset.noMask, console.log("noMask", o), r.default.dispatchCurrentPlayingAction({
                        id: t.currentTarget.dataset.docId,
                        url: "",
                        loading: !0,
                        noMask: o
                    }), c = t.currentTarget.dataset.url, e.prev = 4, e.next = 7, a.ajax.get(c.replace(".redirect?", ".info?").replace("http://api.qingmang.me/", "https://api.qingmang.me/"));

                  case 7:
                    d = e.sent, setTimeout(function() {
                        i.data.currentPlaying.id === t.currentTarget.dataset.docId && r.default.dispatchCurrentPlayingAction({
                            id: t.currentTarget.dataset.docId,
                            url: d.data.mp4Url,
                            loading: !1,
                            noMask: o
                        });
                    }, 500), e.next = 16;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(4), console.log("play failed", e.t0), wx.showToast({
                        image: "/images/new_assets/icon_cancel.svg",
                        title: "播放失败"
                    }), r.default.dispatchCurrentPlayingAction({
                        id: !1,
                        url: void 0,
                        loading: !1,
                        noMask: !1
                    });

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, i, [ [ 4, 11 ] ]);
        }))();
    },
    stopPlaying: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.docId;
        e && getApp().getLogger().logAction("closed_item", {
            item: e,
            item_type: "video"
        }), r.default.dispatchCurrentPlayingAction({
            id: !1,
            url: void 0,
            loading: !1,
            noMask: !1
        });
    },
    startPlaying: function(t) {
        getApp().getLogger().logAction("started_item", {
            item: t.currentTarget.dataset.docId,
            item_type: "video"
        });
    },
    endPlaying: function(t) {
        getApp().getLogger().logAction("finished_item", {
            item: t.currentTarget.dataset.docId,
            item_type: "video"
        }), this.stopPlaying(t);
    }
};
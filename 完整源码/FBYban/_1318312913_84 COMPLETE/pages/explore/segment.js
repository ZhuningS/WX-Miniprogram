function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var o = t[n](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), r = e(require("../../libs/underscore")), n = require("../../protocol/io"), i = require("../../utils/data-processor"), o = e(require("../../libs/url")), s = e(require("../../utils/extend-page")), c = e(require("../../mixins/actions")), l = e(require("../../mixins/share")), d = e(require("../../mixins/cardshow")), u = e(require("../../mixins/follow")), f = e(require("../../mixins/mark")), h = e(require("../../mixins/logger")), g = e(require("../../mixins/hook"));

Page((0, s.default)({
    data: {
        events: [],
        loading: !0,
        tabs: []
    },
    currentStyle: 0,
    waitingHolder: void 0,
    onLoad: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r.uid = e.uid, r.loadData();

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore();
    },
    loadData: function() {
        this.setData({
            events: [],
            loading: !0
        }), this.pageShown("/clips/"), this.showPageTitle("订阅视频", "000000"), this.loadSections("shortVideo");
    },
    loadMore: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var r;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, e.setData({
                        loading: !0
                    }), t.next = 4, n.ajax.get(e.data.nextUrl);

                  case 4:
                    r = t.sent, e.setData({
                        events: e.data.events.concat(e.pretreatVideos(r.data).events),
                        hasMore: r.data.hasMore,
                        nextUrl: r.data.nextUrl
                    }), e.initMarked();

                  case 7:
                    return t.prev = 7, e.setData({
                        loading: !1
                    }), t.finish(7);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, , 7, 10 ] ]);
        }))();
    },
    loadPage: function(e, r) {
        var i = this;
        return t(a.default.mark(function t() {
            var o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, i.setData({
                        loading: !0
                    }), t.next = 4, n.api.get(e, r);

                  case 4:
                    o = t.sent, i.setData({
                        events: i.pretreatVideos(o.data).events,
                        hasMore: o.data.hasMore,
                        nextUrl: o.data.nextUrl
                    }), i.initMarked(), i.findVideoInView();

                  case 8:
                    return t.prev = 8, i.setData({
                        loading: !1
                    }), t.finish(8);

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, i, [ [ 0, , 8, 11 ] ]);
        }))();
    },
    loadSections: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r.loadPage("v1/timeline.explore.get", {
                        sections: e
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    pretreatVideos: function(e) {
        (0, i.pretreatData)(e);
        var t = !0, a = !1, r = void 0;
        try {
            for (var n, s = e.events[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                var c = n.value;
                if (c.article) {
                    var l = c.article.webUrl;
                    if (l) {
                        var d = new o.default(l);
                        c.article.host = d.host;
                    }
                }
            }
        } catch (e) {
            a = !0, r = e;
        } finally {
            try {
                !t && s.return && s.return();
            } finally {
                if (a) throw r;
            }
        }
        return e;
    },
    onPageScroll: function() {
        this.restartWaiting();
    },
    restartWaiting: function() {
        this.cancelWaiting(), this.startWaiting(), this.setData({
            waiting: !0
        });
    },
    startWaiting: function() {
        var e = this;
        this.waitingHolder || (this.waitingHolder = setInterval(function() {
            e.cancelWaiting(), console.log("find video in the view"), e.setData({
                waiting: !1
            }), e.findVideoInView();
        }, 500));
    },
    cancelWaiting: function() {
        this.waitingHolder && (clearInterval(this.waitingHolder), this.waitingHolder = void 0);
    },
    onTapPlay: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n = e.currentTarget.dataset.docId, r.playVideo(n);

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    findVideoInView: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var n, i, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return n = wx.createSelectorQuery(), t.next = 3, e.getViewport();

                  case 3:
                    i = t.sent, o = i.height, n.selectAll(".cover").boundingClientRect(function(t) {
                        if (!e.waitingHolder && 0 !== t.length) {
                            var a = r.default.sortBy(t, function(e) {
                                var t = 0, a = e.top + e.height;
                                return e.top >= 0 && e.top <= o && (t -= 1), a >= 0 && a <= o && (t -= 1), -1 === t && (e.top >= 0 ? t -= (o - e.top) / e.height : t -= a / e.height), 
                                t;
                            });
                            e.playVideo(a[0].dataset.docId);
                        }
                    }).exec();

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    findVideo: function(e, t) {
        for (var a = t ? -1 : 1, r = e + a; r < this.data.events.length && r >= 0; r += a) {
            var n = this.data.events[r];
            if (n.article && n.article.videos && n.article.videos.length > 0) return n.article;
        }
    },
    playVideo: function(e) {
        if (!this.data.currentPlaying || this.data.currentPlaying.id !== e) {
            var t = r.default.findIndex(this.data.events, function(t) {
                return t.article && t.article.docIdString === e;
            });
            console.log("current index", t), this.cancelWaiting(), this.setData({
                currentPlaying: {
                    id: e,
                    index: t,
                    loading: !0
                }
            }), this.playCurrentVideo();
        }
    },
    playNextVideo: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!((n = r.data.currentPlaying.index) >= r.data.events.length)) {
                        t.next = 11;
                        break;
                    }
                    return t.prev = 2, t.next = 5, r.loadMore();

                  case 5:
                    t.next = 11;
                    break;

                  case 7:
                    return t.prev = 7, t.t0 = t.catch(2), r.playVideoStopped(e), t.abrupt("return");

                  case 11:
                    r.setData({
                        currentPlaying: {
                            index: n + 1,
                            loading: !0
                        }
                    }), r.playCurrentVideo();

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, r, [ [ 2, 7 ] ]);
        }))();
    },
    playPrevVideo: function() {
        var e = this.data.currentPlaying.index;
        e <= 0 || (this.setData({
            currentPlaying: {
                index: e - 1,
                loading: !0
            }
        }), this.playCurrentVideo());
    },
    playCurrentVideo: function() {
        var e = this;
        return t(a.default.mark(function t() {
            var r, i, o, s, c;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!(void 0 === (r = e.data.currentPlaying.index) || r >= e.data.events.length)) {
                        t.next = 4;
                        break;
                    }
                    return e.playNextVideo(), t.abrupt("return");

                  case 4:
                    return e.scrollToCurrent(r), i = e.data.events[r], o = {
                        id: i.article.docIdString,
                        mid: i.article.mid,
                        index: r,
                        current: e.data.events[r],
                        prev: e.findVideo(r, !0),
                        next: e.findVideo(r, !1),
                        loading: !0
                    }, e.setData({
                        currentPlaying: o
                    }), e.showVideoMeta(), t.prev = 9, s = o.current.article.videos[0].url, t.next = 13, 
                    n.ajax.get(s.replace(".redirect?", ".info?").replace("http://api.qingmang.me/", "https://api.qingmang.me/"));

                  case 13:
                    c = t.sent, e.setData({
                        "currentPlaying.url": c.data.mp4Url,
                        "currentPlaying.loading": !1
                    }), console.log("play started", o), t.next = 22;
                    break;

                  case 18:
                    t.prev = 18, t.t0 = t.catch(9), console.log("play failed", t.t0), e.playNextVideo();

                  case 22:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 9, 18 ] ]);
        }))();
    },
    playVideoStopped: function() {
        var e = this.data.currentPlaying.id;
        e && getApp().getLogger().logAction("closed_item", {
            item: e,
            item_type: "video"
        }), this.setData({
            currentPlaying: {}
        });
    },
    playVideoStarted: function(e) {
        getApp().getLogger().logAction("started_item", {
            item: e.currentTarget.dataset.docId,
            item_type: "video"
        });
    },
    playVideoFinished: function(e) {
        getApp().getLogger().logAction("finished_item", {
            item: this.data.currentPlaying.id,
            item_type: "video"
        }), this.playNextVideo(e);
    },
    scrollToCurrent: function(e) {
        if (!(e < 0 || e >= this.data.events.length)) {
            var t = "#anchor-" + this.data.events[e].article.docIdString, a = wx.createSelectorQuery();
            a.selectViewport().scrollOffset(), a.select(t).boundingClientRect(), a.exec(function(e) {
                if (e) {
                    var a = e[0].scrollTop + e[1].top - 60;
                    console.log("TOC scroll to ", t, a, e), wx.pageScrollTo({
                        scrollTop: a
                    });
                }
            });
        }
    },
    showVideoMeta: function() {
        0 === this.currentStyle ? (this.setData({
            "currentPlaying.style": "fadeInThenFadeOutInvisible"
        }), this.currentStyle = 1) : (this.setData({
            "currentPlaying.style": "fadeInThenFadeOutInvisible2"
        }), this.currentStyle = 0);
    }
}, c.default, u.default, h.default, f.default, l.default, d.default, g.default));
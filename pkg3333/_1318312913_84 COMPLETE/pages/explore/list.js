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

var a = e(require("../../libs/regenerator-runtime.js")), r = e(require("../../libs/underscore")), n = require("../../protocol/io"), i = require("../../utils/data-processor"), o = e(require("../../libs/url")), s = e(require("../../utils/extend-page")), d = e(require("../../mixins/actions")), c = e(require("../../mixins/share")), u = e(require("../../mixins/cardshow")), l = e(require("../../mixins/follow")), f = e(require("../../mixins/mark")), p = e(require("../../mixins/logger")), h = e(require("../../mixins/hook"));

Page((0, s.default)({
    data: {
        events: [],
        loading: !0,
        tabs: []
    },
    currentStyle: 0,
    onLoad: function(e) {
        var r = this;
        return t(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    r.uid = e.uid, r.setData({
                        section: e.section ? e.section : "clips"
                    }), r.loadData();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, r);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore();
    },
    onTapTab: function(e) {
        this.setData({
            section: e.currentTarget.id
        }), this.loadData();
    },
    loadData: function() {
        this.setData({
            events: [],
            loading: !0
        }), this.pageShown("/" + this.data.section + "/"), "clips" === this.data.section ? (this.loadSections("shortVideo"), 
        this.showPageTitle("订阅视频", "000000")) : "users" === this.data.section && this.loadPage("v1/user.recommend.get");
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
                        events: e.data.events.concat((0, i.pretreatData)(r.data).events),
                        hasMore: r.data.hasMore,
                        nextUrl: r.data.nextUrl
                    });

                  case 6:
                    return t.prev = 6, e.setData({
                        loading: !1
                    }), t.finish(6);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, , 6, 9 ] ]);
        }))();
    },
    loadPage: function(e, o) {
        var s = this;
        return t(a.default.mark(function t() {
            var d;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, s.setData({
                        loading: !0
                    }), t.next = 4, n.api.get(e, o);

                  case 4:
                    d = t.sent, r.default.each(d.data.events, function(e) {
                        e.user && (s.data.followed["" + e.user.uid] = [ "friend", "subscribed" ].indexOf(e.user.relation) >= 0);
                    }), s.setData({
                        events: (0, i.pretreatData)(d.data).events,
                        followed: s.data.followed,
                        hasMore: d.data.hasMore,
                        nextUrl: d.data.nextUrl,
                        loading: !1
                    });

                  case 7:
                    return t.prev = 7, s.setData({
                        loading: !1
                    }), t.finish(7);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, s, [ [ 0, , 7, 10 ] ]);
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
    findVideo: function(e, t) {
        for (var a = t ? -1 : 1, r = e + a; r < this.data.events.length && r >= 0; r += a) {
            var n = this.data.events[r];
            if (n.article && n.article.videos && n.article.videos.length > 0) return n.article;
        }
    },
    onTapPlay: function(e) {
        var n = this;
        return t(a.default.mark(function t() {
            var i;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    i = r.default.findIndex(n.data.events, function(t) {
                        return t.article && t.article.docIdString === e.currentTarget.dataset.docId;
                    }), console.log("current index", i), n.setData({
                        currentPlaying: {
                            index: i,
                            loading: !0
                        }
                    }), n.playCurrentVideo();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
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
            var r, i, s, d, c, u, l;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!(void 0 === (r = e.data.currentPlaying.index) || r >= e.data.events.length)) {
                        t.next = 4;
                        break;
                    }
                    return e.playNextVideo(), t.abrupt("return");

                  case 4:
                    return e.scrollToCurrent(r), i = e.data.events[r], s = {
                        id: i.article.docIdString,
                        mid: i.article.mid,
                        index: r,
                        current: e.data.events[r],
                        prev: e.findVideo(r, !0),
                        next: e.findVideo(r, !1),
                        loading: !0
                    }, (d = i.article.webUrl) && (c = new o.default(d), s.host = c.host), e.setData({
                        currentPlaying: s
                    }), e.showVideoMeta(), t.prev = 11, u = s.current.article.videos[0].url, t.next = 15, 
                    n.ajax.get(u.replace(".redirect?", ".info?").replace("http://api.qingmang.me/", "https://api.qingmang.me/"));

                  case 15:
                    l = t.sent, e.setData({
                        "currentPlaying.url": l.data.mp4Url,
                        "currentPlaying.loading": !1
                    }), console.log("play started", s), t.next = 24;
                    break;

                  case 20:
                    t.prev = 20, t.t0 = t.catch(11), console.log("play failed", t.t0), e.playNextVideo();

                  case 24:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 11, 20 ] ]);
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
}, d.default, l.default, p.default, f.default, c.default, u.default, h.default));
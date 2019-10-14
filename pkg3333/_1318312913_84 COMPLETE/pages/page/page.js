function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function a(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

function n(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var s = t[r](i), o = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime")), i = e(require("../../libs/underscore")), s = require("../../protocol/io"), o = require("../../config/index"), u = require("../../services/warehouse/index"), c = require("../../mixins/index"), d = require("../../utils/data-processor"), l = require("../../utils/dev"), p = e(require("../../utils/extend-page")), g = {
    data: {
        loading: !0,
        isInited: !1,
        refreshing: !1,
        error: !1,
        noPages: void 0,
        pages: [],
        events: [],
        covers: {},
        publication: null,
        publicationId: void 0,
        id: void 0,
        currentPage: void 0,
        status: void 0
    },
    content: void 0,
    guideShown: !1,
    contactHolder: void 0,
    onLoad: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var n, s, o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    t.onPageScroll = i.default.throttle(t.onPageScroll, 100), console.log("page launched", e), 
                    n = t.parseShareLanding(e), s = e.publicationId || getApp().globalData.config.publicationId || n.params && n.params.publicationId, 
                    o = e.id || "", t.setData({
                        publicationId: s,
                        id: o
                    }), n && n.base && "/pages/page/page" !== n.base ? (console.log("redirect to ", n), 
                    t.gotoSharedLanding(n), t.setData({
                        status: "landing"
                    })) : t.init(), getApp().getLogger().setCurrentPublication(t.data.publicationId), 
                    t.pageShown("/publications/" + t.data.publicationId + "/");

                  case 9:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onShow: function() {
        var e = this;
        return n(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("land" !== e.data.status) {
                        t.next = 7;
                        break;
                    }
                    return t.next = 3, e.init();

                  case 3:
                    return e.setData({
                        status: "ready"
                    }), t.abrupt("return");

                  case 7:
                    if ("ready" === e.data.status) {
                        t.next = 9;
                        break;
                    }
                    return t.abrupt("return");

                  case 9:
                    if (!e.data.loading) {
                        t.next = 12;
                        break;
                    }
                    return t.next = 12, new Promise(function(t) {
                        console.log("interval set"), e.tempInterval = setInterval(function() {
                            e.data.loading || (clearInterval(e.tempInterval), t());
                        }, 100);
                    });

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onHide: function() {
        "landing" === this.data.status && this.setData({
            status: "land"
        });
    },
    onUnload: function() {
        getApp().clearCurrentPublication();
    },
    init: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var n, i, s;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (a.prev = 0, t.setData({
                        events: [],
                        loading: !0,
                        refreshing: !0,
                        error: !1
                    }), t.initLogin(), t.initPay(), t.initPublication(), console.log("this.data.currentPage", t.data.currentPage), 
                    !t.data.currentPage) {
                        a.next = 10;
                        break;
                    }
                    t.loadPages(), a.next = 20;
                    break;

                  case 10:
                    return a.next = 12, t.loadPages(e);

                  case 12:
                    if (console.log("this.data.pages", t.data.pages), !t.data.pages.length) {
                        a.next = 17;
                        break;
                    }
                    t.setData({
                        currentPage: t.data.pages[0].id
                    }), a.next = 20;
                    break;

                  case 17:
                    return console.log("没有 pages"), t.setData({
                        noPage: !0,
                        refreshing: !1,
                        loading: !1,
                        isInited: !0
                    }), a.abrupt("return");

                  case 20:
                    return n = t.data.currentPage, i = t.data.publicationId, a.next = 24, t.loadPage("v1/timeline.page.get", {
                        page_id: n,
                        pub_id: i
                    });

                  case 24:
                    s = t.data.pages.find(function(e) {
                        return e.id === n;
                    }), console.log("current page is ", s), t.initMarked(), setTimeout(function() {
                        t.showGuide();
                    }, 500), setTimeout(function() {
                        t.onReachBottom();
                    }, 4e3), a.next = 35;
                    break;

                  case 31:
                    a.prev = 31, a.t0 = a.catch(0), (0, l.errorReporter)("explore load failed", a.t0), 
                    t.setData({
                        error: !0,
                        isInited: !0,
                        refreshing: !1,
                        loading: !1
                    });

                  case 35:
                    return a.prev = 35, t.setData({
                        refreshing: !1,
                        loading: !1
                    }), a.finish(35);

                  case 38:
                  case "end":
                    return a.stop();
                }
            }, a, t, [ [ 0, 31, 35, 38 ] ]);
        }))();
    },
    loadPages: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var a, n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.data.pages.length) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, s.api.get("v1/page.get", {
                        pub_id: e.data.publicationId
                    });

                  case 4:
                    a = t.sent, n = a.data.events.map(d.pageEventFormatter), e.setData({
                        pages: n
                    });

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadPage: function(e, t) {
        var a = this;
        return n(r.default.mark(function n() {
            var i, o, c, p;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (i = a.data.currentPage, o = void 0, n.prev = 2, !e.startsWith("http")) {
                        n.next = 9;
                        break;
                    }
                    return n.next = 6, s.ajax.get(e, t);

                  case 6:
                    o = n.sent, n.next = 18;
                    break;

                  case 9:
                    if (!e.startsWith("v1/")) {
                        n.next = 15;
                        break;
                    }
                    return n.next = 12, s.api.get(e, t);

                  case 12:
                    o = n.sent, n.next = 18;
                    break;

                  case 15:
                    return n.next = 17, s.api.getV1(e, t);

                  case 17:
                    o = n.sent;

                  case 18:
                    n.next = 23;
                    break;

                  case 20:
                    n.prev = 20, n.t0 = n.catch(2), (0, l.errorReporter)("load page failed", n.t0);

                  case 23:
                    if (i === a.data.currentPage) {
                        n.next = 25;
                        break;
                    }
                    return n.abrupt("return");

                  case 25:
                    return c = (0, d.pretreatData)(o.data).events, n.next = 28, u.eventAPI.setEventEntities(c);

                  case 28:
                    p = n.sent, a.updateWarehouseRefs({
                        eventIds: p
                    }), a.setData({
                        isInited: !0,
                        nextUrl: o.data.nextUrl,
                        nextData: {},
                        hasMore: o.data.hasMore
                    });

                  case 31:
                  case "end":
                    return n.stop();
                }
            }, n, a, [ [ 2, 20 ] ]);
        }))();
    },
    loadMore: function(e, t) {
        var i = this;
        return n(r.default.mark(function n() {
            var o, c, l, p, g, f, h, v, b;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (i.setData({
                        loading: !0
                    }), o = i.data.currentPage, c = void 0, n.prev = 3, !e.startsWith("http")) {
                        n.next = 10;
                        break;
                    }
                    return n.next = 7, s.ajax.get(e);

                  case 7:
                    c = n.sent, n.next = 13;
                    break;

                  case 10:
                    return n.next = 12, s.api.get(e, t);

                  case 12:
                    c = n.sent;

                  case 13:
                    n.next = 17;
                    break;

                  case 15:
                    n.prev = 15, n.t0 = n.catch(3);

                  case 17:
                    if (o === i.data.currentPage) {
                        n.next = 19;
                        break;
                    }
                    return n.abrupt("return");

                  case 19:
                    return l = (0, d.pretreatData)(c.data), p = [].concat(a(i.warehouseRefs.eventIds)), 
                    g = l.hasMore, f = l.nextUrl, h = {}, v = [].concat(a(l.events)), p.push("label-more-content-tip"), 
                    n.next = 28, u.eventAPI.setEventEntities(v);

                  case 28:
                    b = n.sent, p.push.apply(p, a(b)), i.updateWarehouseRefs({
                        eventIds: p
                    }), i.setData({
                        hasMore: g,
                        nextUrl: f,
                        nextData: h,
                        loading: !1
                    });

                  case 32:
                  case "end":
                    return n.stop();
                }
            }, n, i, [ [ 3, 15 ] ]);
        }))();
    },
    onPullDownRefresh: function() {
        var e = this;
        return n(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        refreshing: !0
                    }), t.next = 3, e.init();

                  case 3:
                    e.setData({
                        refreshing: !1
                    }), wx.stopPullDownRefresh();

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore(this.data.nextUrl, this.data.nextData);
    },
    onTapPage: function(e) {
        console.log("onTapPage: ", e), this.switchPage(e.target.dataset.pageId);
    },
    switchPage: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var n, i, s;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return n = e ? t.data.pages.findIndex(function(t) {
                        return t.id === e;
                    }) : 0, i = t.data.pages[n], t.setData({
                        currentPage: i.id,
                        more: [],
                        loading: !0
                    }), n < 0 ? t.setData({
                        currentPageSibling: 0
                    }) : (s = n - 2) < 0 ? t.setData({
                        currentPageSibling: 0
                    }) : t.setData({
                        currentPageSibling: i.id
                    }), a.next = 6, t.init();

                  case 6:
                    t.setData({
                        loading: !1
                    });

                  case 7:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    preparePay: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, t.login(e);

                  case 2:
                    if (!a.sent) {
                        a.next = 7;
                        break;
                    }
                    t.initPay(), t.pay(e), a.next = 8;
                    break;

                  case 7:
                    wx.showToast({
                        title: "需要先完善信息"
                    });

                  case 8:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    initPublication: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var a, n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, e.data.publication) {
                        t.next = 6;
                        break;
                    }
                    return t.next = 4, s.api.get("v1/publication.get", {
                        pub_id: e.data.publicationId
                    });

                  case 4:
                    (a = t.sent).data.ok && (n = a.data.events[0].publication, e.recordRecentPublication(n), 
                    e.setData({
                        publication: n
                    }), e.showPageTitle(n.name, "FFFFFF", "000000"));

                  case 6:
                    t.next = 11;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(0), console.log("initPublication error:", t.t0);

                  case 11:
                    return t.prev = 11, t.finish(11);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, 8, 11, 13 ] ]);
        }))();
    },
    clearAddToDesktop: function() {
        this.setData({
            "tipsOn.addToDesktop": !1
        });
    },
    showGuide: function() {
        var e = this;
        return n(r.default.mark(function a() {
            var n, u, c, d;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (!getApp().isAnonymous()) {
                        a.next = 3;
                        break;
                    }
                    return e.tipAddToDesktop(), a.abrupt("return");

                  case 3:
                    if (!e.guideShown) {
                        a.next = 5;
                        break;
                    }
                    return a.abrupt("return");

                  case 5:
                    if (e.guideShown = !0, (n = wx.getStorageSync("push_guide")) || !o.config.enableSubscribe) {
                        a.next = 17;
                        break;
                    }
                    return a.next = 10, s.api.get("v1/magazine.get");

                  case 10:
                    u = a.sent, c = [], i.default.each(u.data.events, function(e) {
                        e.magazineConfig.magazine.pushSubscribed || c.push(e.magazineConfig.magazine);
                    }), c.length > 0 && (c.length > 12 && (c.length = 12), d = t({}, "" + c[0].id, !0), 
                    e.setData({
                        pushGuide: {
                            show: !0,
                            magazines: c,
                            selected: d
                        }
                    })), u.data.events.length > 0 && wx.setStorageSync("push_guide", !0), a.next = 18;
                    break;

                  case 17:
                    e.tipAddToDesktop();

                  case 18:
                  case "end":
                    return a.stop();
                }
            }, a, e);
        }))();
    },
    pushGuideSelectAll: function(e) {
        var a, n = {};
        e.detail.value.length > 0 && i.default.each(this.data.pushGuide.magazines, function(e) {
            n[e.id] = !0;
        }), console.log("selected", n), this.setData((a = {}, t(a, "pushGuide.selectedAll", e.detail.value.length > 0), 
        t(a, "pushGuide.selected", n), a));
    },
    pushGuideSelectChanged: function(e) {
        var a = {};
        e.detail.value.length > 0 && i.default.each(e.detail.value, function(e) {
            a[e] = !0;
        }), this.setData(t({}, "pushGuide.selected", a));
    },
    pushGuideCancel: function() {
        this.setData({
            pushGuide: {}
        });
    },
    pushGuideCommit: function() {
        if (this.data.pushGuide && this.data.pushGuide.selected) {
            var e = i.default.keys(this.data.pushGuide.selected).join(",");
            e && (s.api.get("v1/magazine.push.subscribe", {
                mids: e
            }), this.setData({
                pushGuide: {}
            }));
        }
    },
    tipAddToDesktop: function() {
        if (o.config.enableMagazine && !wx.getStorageSync("launched_via_desktop")) {
            var e = getApp().getLogger().visitNumber;
            wx.setStorageSync("tip_add_desktop", e);
            var t = void 0;
            t = "android" === getApp().globalData.sysInfo.platform ? "喜欢" + o.config.name + "？点击这里添加到桌面吧。" : "喜欢" + o.config.name + "？点击这里添加到我的小程序！", 
            this.setData({
                "tipsOn.addToDesktop": t
            });
        }
    },
    gotoArticle: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var n, i, s, o;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (!t.data.needLogin) {
                        a.next = 3;
                        break;
                    }
                    return a.next = 3, t.login(e);

                  case 3:
                    n = e.currentTarget.dataset, i = n.docId, s = n.mid, o = n.uid, wx.navigateTo({
                        url: "/pages/article/article?id=" + i + "&mid=" + s + "&uid=" + (o || "")
                    });

                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onPageScroll: function(e) {
        var t = this, a = this.data.isShowPartnerBar, n = e.scrollTop >= 5e3;
        a !== n && this.setData({
            isShowPartnerBar: n
        }), o.config.enableContact && (this.data.showContact && this.setData({
            showContact: !1
        }), this.contactHolder && clearInterval(this.contactHolder), this.contactHolder = setInterval(function() {
            t.setData({
                showContact: !0
            });
        }, 2e3));
    }
}, f = {
    warehouseRefs: {
        eventIds: []
    },
    mapWarehouseToData: function(e, t) {
        var a = t.eventIds;
        return a = Array.from(new Set(a)), {
            events: (0, u.eventEntitiesSelector)(a)(e)
        };
    }
};

Page(p.default.apply(void 0, [ g, f ].concat(a(c.allMixins))));
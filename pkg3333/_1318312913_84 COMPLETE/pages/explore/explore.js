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

function r(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, s) {
                try {
                    var o = t[n](s), i = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
    };
}

var n = e(require("../../libs/regenerator-runtime")), s = e(require("../../libs/underscore")), o = require("../../protocol/io"), i = require("../../config/index"), c = require("../../services/warehouse/index"), u = require("../../mixins/index"), d = require("../../utils/data-processor"), l = require("../../utils/dev"), f = e(require("../../utils/extend-page")), p = e(require("../../utils/util")), g = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
}, h = {
    data: {
        loading: !0,
        isInited: !1,
        refreshing: !1,
        error: !1,
        cates: [],
        events: [],
        covers: {},
        group: {},
        currentCate: void 0,
        currentCateSibling: void 0,
        status: void 0,
        isShowPartnerBar: !1
    },
    content: void 0,
    guideShown: !1,
    contactHolder: void 0,
    onLoad: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    t.onPageScroll = s.default.throttle(t.onPageScroll, 100), console.log("explore launched", e), 
                    (r = t.parseShareLanding(e)) && r.base ? (console.log("redirect to ", r), i.config.enableMagazine && "/pages/article/article" === r.base ? t.onboard(r.params) : (t.gotoSharedLanding(r), 
                    t.setData({
                        status: "landing"
                    }))) : t.onboard(), i.config.enableContact && t.setData({
                        showContact: !0
                    });

                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onShow: function() {
        var e = this;
        return r(n.default.mark(function t() {
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ("land" !== e.data.status) {
                        t.next = 5;
                        break;
                    }
                    return e.onboard(), t.abrupt("return");

                  case 5:
                    if ("prepare" !== e.data.status) {
                        t.next = 11;
                        break;
                    }
                    return e.switchCate(), e.setData({
                        status: "ready"
                    }), t.abrupt("return");

                  case 11:
                    if ("ready" === e.data.status) {
                        t.next = 13;
                        break;
                    }
                    return t.abrupt("return");

                  case 13:
                    if (!e.data.loading) {
                        t.next = 16;
                        break;
                    }
                    return t.next = 16, new Promise(function(t) {
                        setInterval(function() {
                            e.data.loading || t();
                        }, 100);
                    });

                  case 16:
                    e.data.currentCate !== getApp().globalData.targetCid && e.switchCate(getApp().globalData.targetCid);

                  case 17:
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
    startOnboard: function() {
        wx.setStorageSync("onboarded", !0), this.setData({
            status: "onboard"
        }), this.setItemStatus("inline-onboard", -1), wx.pageScrollTo({
            scrollTop: 0
        });
    },
    onboard: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (r = wx.getStorageSync("onboarded")) {
                        a.next = 29;
                        break;
                    }
                    if (!i.config.enableSubscribe) {
                        a.next = 16;
                        break;
                    }
                    return a.next = 5, t.loadOnboard();

                  case 5:
                    if (!e) {
                        a.next = 11;
                        break;
                    }
                    return a.next = 8, t.init(e);

                  case 8:
                    t.setItemStatus("inline-onboard", 2), a.next = 14;
                    break;

                  case 11:
                    wx.setStorageSync("onboarded", !0), t.setData({
                        status: "onboard"
                    }), t.setData({
                        isInited: !0
                    });

                  case 14:
                    a.next = 27;
                    break;

                  case 16:
                    return a.prev = 16, a.next = 19, t.loginViaWechat();

                  case 19:
                    a.next = 24;
                    break;

                  case 21:
                    a.prev = 21, a.t0 = a.catch(16), console.log("login via wechat failed", a.t0);

                  case 24:
                    return t.setData({
                        status: "ready"
                    }), a.next = 27, t.init(e);

                  case 27:
                    a.next = 32;
                    break;

                  case 29:
                    return t.setData({
                        status: "ready"
                    }), a.next = 32, t.init(e);

                  case 32:
                  case "end":
                    return a.stop();
                }
            }, a, t, [ [ 16, 21 ] ]);
        }))();
    },
    loadMore: function(e, t, s) {
        var i = this;
        return r(n.default.mark(function r() {
            var u, l, f, p, g, h, v, x, b, w, m;
            return n.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (i.setData({
                        loading: !0
                    }), u = i.data.currentCate, l = void 0, r.prev = 3, !e.startsWith("http")) {
                        r.next = 10;
                        break;
                    }
                    return r.next = 7, o.ajax.get(e);

                  case 7:
                    l = r.sent, r.next = 13;
                    break;

                  case 10:
                    return r.next = 12, o.api.get(e, t);

                  case 12:
                    l = r.sent;

                  case 13:
                    r.next = 17;
                    break;

                  case 15:
                    r.prev = 15, r.t0 = r.catch(3);

                  case 17:
                    if (u === i.data.currentCate) {
                        r.next = 19;
                        break;
                    }
                    return r.abrupt("return");

                  case 19:
                    return f = (0, d.pretreatData)(l.data), p = "", g = [].concat(a(i.warehouseRefs.eventIds)), 
                    h = f.hasMore, v = f.nextUrl, x = {}, b = [].concat(a(f.events)), "explore" === s ? g.push("label-more-content-tip") : "category" === s && (w = {
                        type: "section",
                        section: {
                            type: "magazineBanner",
                            events: f.events
                        }
                    }, g.push("label-more-deep-tip"), b = [ w ], v = "v1/timeline.category.get", x = {
                        sections: "article",
                        group_article: !0,
                        need_hot_post: !0,
                        need_ops_magazine: !0,
                        cid: i.data.currentCate.substring(1)
                    }, h = !0), r.next = 29, c.eventAPI.setEventEntities(b);

                  case 29:
                    m = r.sent, g.push.apply(g, a(m)), i.updateWarehouseRefs({
                        eventIds: g
                    }), i.setData({
                        nextType: p,
                        hasMore: h,
                        nextUrl: v,
                        nextData: x,
                        loading: !1
                    });

                  case 33:
                  case "end":
                    return r.stop();
                }
            }, r, i, [ [ 3, 15 ] ]);
        }))();
    },
    loadCates: function() {
        var e = this;
        return r(n.default.mark(function t() {
            var a, r, i, c, u;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.data.cates.length) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, o.api.get("v1/category.index", {
                        include_all: !1
                    });

                  case 4:
                    a = t.sent, (r = (0, d.pretreatData)(a.data).events) || (r = []), i = !1, getApp().globalData.targetCate && ((c = s.default.find(r, function(e) {
                        return e.category.cid === getApp().globalData.targetCate;
                    })) || (r.push(getApp().globalData.targetCate), i = !0), console.log("append more cate ", c, getApp().globalData.targetCate)), 
                    console.log("cates updated ", r), u = {
                        title: p.default.formatDate(Date.now())
                    }, e.setData({
                        cates: r,
                        cover: u
                    }), i && e.data.currentCate === getApp().globalData.targetCate.category.cid && (console.log("redirect to target cid"), 
                    e.setData({
                        currentCateSibling: getApp().globalData.targetCate.category.cid
                    }));

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    init: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, i, c, u;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (t.pageStarted(), a.prev = 1, t.setData({
                        group: {},
                        events: [],
                        loading: !0,
                        refreshing: !0,
                        error: !1,
                        score: getApp().globalData.score
                    }), t.initLogin(), t.initPay(), !t.data.currentCate) {
                        a.next = 9;
                        break;
                    }
                    t.loadCates(), a.next = 13;
                    break;

                  case 9:
                    return a.next = 11, t.loadCates(e);

                  case 11:
                    t.setData({
                        currentCate: t.data.cates[0].category.cid
                    }), getApp().globalData.targetCid = t.data.currentCate;

                  case 13:
                    if (t.pagePrepared(), r = t.data.currentCate, i = {
                        group_article: !0,
                        need_hot_post: !0,
                        need_ops_magazine: !0
                    }, e && (i.docid = e.id, i.uid = e.uid, i.mid = e.mid), "today" !== r) {
                        a.next = 25;
                        break;
                    }
                    return t.pageShown("/explore/", t.content), a.next = 21, t.loadPage("v1/timeline.explore.get", i);

                  case 21:
                    "android" === getApp().globalData.sysInfo.platform && t.setItemStatus("poster", -1), 
                    i.uid && o.api.get("v1/user.subscribe", {
                        uid: i.uid,
                        subscribe_type: "weak"
                    }), a.next = 33;
                    break;

                  case 25:
                    return c = r.substring(1), t.pageShown("/categories/" + c + "/", t.content), i.cid = c, 
                    a.next = 30, t.loadPage("v1/timeline.category.get", i);

                  case 30:
                    u = s.default.find(t.data.cates, function(e) {
                        return e.category.cid === r;
                    }), console.log("current cate is ", u), "private" === u.category.type && t.setData({
                        "config.cardStyle": u.category.style
                    });

                  case 33:
                    t.initMarked(), t.inited = !0, t.data.magazine && t.data.magazine.relation && "stranger" !== t.data.magazine.relation.role.type && o.api.getV1("mina.app.checkUserInfo").then(function(e) {
                        console.log("check user info is succeeded", e);
                    }, function(e) {
                        console.log("check user info is error", e), "incomplete_info" === e.data.error.type && t.showModalDialog(void 0, "请完善会员资料", "为了便于更好的交流和后续活动组织，请先完善会员资料。", "好的", void 0, function() {
                            wx.navigateTo({
                                url: "/pages/form/form?type=profile"
                            });
                        });
                    }), setTimeout(function() {
                        t.showGuide();
                    }, 500), setTimeout(function() {
                        t.onReachBottom();
                    }, 4e3), t.pageLoaded(), t.setData({}, function() {
                        t.pageRendered();
                    }), a.next = 46;
                    break;

                  case 42:
                    a.prev = 42, a.t0 = a.catch(1), (0, l.errorReporter)("explore load failed", a.t0), 
                    t.setData({
                        error: !0,
                        isInited: !0,
                        refreshing: !1,
                        loading: !1
                    });

                  case 46:
                    return a.prev = 46, t.setData({
                        isInited: !0,
                        refreshing: !1,
                        loading: !1
                    }), a.finish(46);

                  case 49:
                  case "end":
                    return a.stop();
                }
            }, a, t, [ [ 1, 42, 46, 49 ] ]);
        }))();
    },
    loadGroup: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, s;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, o.api.get("v1/group.info", {
                        id: e
                    });

                  case 2:
                    r = a.sent, s = r.data.events[0].group, t.setData({
                        group: s
                    });

                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    loadWeather: function() {
        var e = this;
        return r(n.default.mark(function t() {
            var a;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.data.weather) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.next = 4, o.api.getV1("weather.current", {
                        token: getApp().globalData.userInfo.token
                    });

                  case 4:
                    a = t.sent, e.setData({
                        weather: a.data.weather.text
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    onPullDownRefresh: function() {
        var e = this;
        return r(n.default.mark(function t() {
            return n.default.wrap(function(t) {
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
    loadPage: function(e, a) {
        var i = this;
        return r(n.default.mark(function r() {
            var u, f, p, h, v, x, b, w;
            return n.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (u = i.data.currentCate, f = void 0, r.prev = 2, !e.startsWith("http")) {
                        r.next = 9;
                        break;
                    }
                    return r.next = 6, o.ajax.get(e, a);

                  case 6:
                    f = r.sent, r.next = 18;
                    break;

                  case 9:
                    if (!e.startsWith("v1/")) {
                        r.next = 15;
                        break;
                    }
                    return r.next = 12, o.api.get(e, a);

                  case 12:
                    f = r.sent, r.next = 18;
                    break;

                  case 15:
                    return r.next = 17, o.api.getV1(e, a);

                  case 17:
                    f = r.sent;

                  case 18:
                    r.next = 23;
                    break;

                  case 20:
                    r.prev = 20, r.t0 = r.catch(2), (0, l.errorReporter)("load explore page failed", r.t0);

                  case 23:
                    if (u === i.data.currentCate) {
                        r.next = 25;
                        break;
                    }
                    return r.abrupt("return");

                  case 25:
                    return p = s.default.find(i.data.cates, function(e) {
                        return e.category.cid === i.data.currentCate;
                    }), h = i.data.covers[i.data.currentCate] || (0, d.genExploreCover)(f.data, p.category.index && p.category.name), 
                    v = g({}, i.data.covers, t({}, i.data.currentCate, h)), p.category && "private" === p.category.type && (x = s.default.find(f.data.events, function(e) {
                        return "section" === e.type && "category" === e.section.type;
                    })) && (x.section.enableCreate = !1), b = (0, d.pretreatData)(f.data).events, r.next = 32, 
                    c.eventAPI.setEventEntities(b);

                  case 32:
                    w = r.sent, i.updateWarehouseRefs({
                        eventIds: w
                    }), i.setData({
                        cover: h,
                        covers: v,
                        isInited: !0,
                        nextUrl: f.data.nextUrl,
                        nextData: {},
                        hasMore: f.data.hasMore
                    });

                  case 35:
                  case "end":
                    return r.stop();
                }
            }, r, i, [ [ 2, 20 ] ]);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadMore(this.data.nextUrl, this.data.nextData, this.data.nextType);
    },
    onTapCate: function(e) {
        this.switchCate(e.target.dataset.cid);
    },
    switchCate: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, o, i, c, u, d, l;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (getApp().globalData.targetCid = e, r = e ? t.data.cates.indexOf(s.default.find(t.data.cates, function(t) {
                        return t.category.cid === e;
                    })) : 0, o = t.data.covers[e], i = t.data.cates[r], c = r ? i.category.name : p.default.formatDate(Date.now()), 
                    u = void 0, u = !i.category || i.category.cover || i.category.coverModel ? o || {
                        title: c
                    } : "noCover", t.setData({
                        currentCate: e,
                        more: [],
                        loading: !0,
                        cover: u
                    }), !(r < 0)) {
                        a.next = 12;
                        break;
                    }
                    t.setData({
                        currentCateSibling: "today"
                    }), a.next = 22;
                    break;

                  case 12:
                    d = t.data.cates[Math.max(0, r - 2)], l = r - 2;

                  case 14:
                    if ("forbidden" !== d.category.status) {
                        a.next = 21;
                        break;
                    }
                    if (!(--l < 0)) {
                        a.next = 18;
                        break;
                    }
                    return a.abrupt("break", 21);

                  case 18:
                    d = t.data.cates[l], a.next = 14;
                    break;

                  case 21:
                    l < 0 ? t.setData({
                        currentCateSibling: "today"
                    }) : t.setData({
                        currentCateSibling: t.data.cates[l].category.cid
                    });

                  case 22:
                    return a.next = 24, t.init();

                  case 24:
                    t.setData({
                        loading: !1
                    });

                  case 25:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onTapMenu: function(e) {
        var t = this;
        if (console.log("on tap menu", e), e.currentTarget.dataset.menuId.startsWith("n")) {
            var a = s.default.find(this.data.cates, function(e) {
                return e.category.cid === t.data.currentCate;
            });
            if (a) {
                var r = {
                    currentTarget: {
                        dataset: {
                            cid: a.category.id,
                            status: "forbidden" === a.category.status ? "hidden" : "shown"
                        }
                    }
                };
                this.onTapProcessCategory(r);
            }
        }
    },
    onTapHideCategory: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, o;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    r = e.currentTarget.dataset.cid, (o = s.default.findIndex(t.data.cates, function(e) {
                        return e.category.id === r;
                    })) >= 0 && (t.setData({
                        cates: t.data.cates
                    }), o >= t.data.cates.length && (o = t.data.cates.length - 1), t.switchCate(t.data.cates[o].category.cid));

                  case 3:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onTapShowCategory: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, o;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    r = e.currentTarget.dataset.cid, (o = s.default.findIndex(t.data.cates, function(e) {
                        return e.category.id === r;
                    })) >= 0 && (o.category.status = "subscribed", t.setData({
                        cates: t.data.cates
                    }));

                  case 3:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onTapTopCategory: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, o, i;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    r = e.currentTarget.dataset.cid, (o = s.default.findIndex(t.data.cates, function(e) {
                        return e.category.id === r;
                    })) >= 0 && (i = t.data.cates.splice(o, 1), t.data.cates.splice(1, 0, i[0]), t.setData({
                        cates: t.data.cates
                    }, function() {
                        t.setData({
                            currentCateSibling: "today"
                        });
                    }));

                  case 3:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    previewPost: function() {
        this.init();
    },
    unpreviewPost: function() {
        this.init();
    },
    unpinPost: function() {
        this.init();
    },
    pinPost: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, o, i;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    r = e.currentTarget.dataset.postId, (o = s.default.findIndex(t.data.events, function(e) {
                        return "post" === e.type && e.post.id === r;
                    })) >= 0 && (i = t.data.events.splice(o, 1), t.data.events.splice(1, 0, i[0]), t.setData({
                        events: t.data.events
                    }));

                  case 3:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    receiveSocketMessage: function(e, t, a) {
        "post.create" === t && a.uid === getApp().getUserId() && this.init();
    },
    clearMarkTip: function() {
        this.setData({
            "tipsOn.mark": !1
        });
    },
    preparePay: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            return n.default.wrap(function(a) {
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
    paid: function() {
        wx.reLaunch({
            url: i.config.homePage
        });
    },
    shareOptions: function() {
        var e = this.data.cover && this.data.cover.image;
        return g({}, {
            image: e
        }, i.config.shareOptionsMap.explore);
    },
    scrollToArticle: function(e) {
        var t = e.currentTarget.dataset, a = t.docId, r = t.mid, n = "#anchor-" + a, s = wx.createSelectorQuery();
        s.selectViewport().scrollOffset(), s.select(n).boundingClientRect(), s.exec(function(e) {
            if (e) {
                var t = e[0].scrollTop + e[1].top - 60;
                console.log("TOC scroll to ", n, t, e), wx.pageScrollTo({
                    scrollTop: t
                });
            }
            setTimeout(function() {
                console.log("TOC open to ", n), wx.navigateTo({
                    url: "/pages/article/article?id=" + a + "&mid=" + r + "&content=toc"
                });
            }, 800);
        });
    },
    clearAddToDesktop: function() {
        this.setData({
            "tipsOn.addToDesktop": !1
        });
    },
    showGuide: function() {
        var e = this;
        return r(n.default.mark(function a() {
            var r, c, u, d;
            return n.default.wrap(function(a) {
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
                    if (e.guideShown = !0, (r = wx.getStorageSync("push_guide")) || !i.config.enableSubscribe) {
                        a.next = 17;
                        break;
                    }
                    return a.next = 10, o.api.get("v1/magazine.get");

                  case 10:
                    c = a.sent, u = [], s.default.each(c.data.events, function(e) {
                        e.magazineConfig.magazine.pushSubscribed || u.push(e.magazineConfig.magazine);
                    }), u.length > 0 && (u.length > 12 && (u.length = 12), d = t({}, "" + u[0].id, !0), 
                    e.setData({
                        pushGuide: {
                            show: !0,
                            magazines: u,
                            selected: d
                        }
                    })), c.data.events.length > 0 && wx.setStorageSync("push_guide", !0), a.next = 18;
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
        var a, r = {};
        e.detail.value.length > 0 && s.default.each(this.data.pushGuide.magazines, function(e) {
            r[e.id] = !0;
        }), console.log("selected", r), this.setData((a = {}, t(a, "pushGuide.selectedAll", e.detail.value.length > 0), 
        t(a, "pushGuide.selected", r), a));
    },
    pushGuideSelectChanged: function(e) {
        var a = {};
        e.detail.value.length > 0 && s.default.each(e.detail.value, function(e) {
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
            var e = s.default.keys(this.data.pushGuide.selected).join(",");
            e && (o.api.get("v1/magazine.push.subscribe", {
                mids: e
            }), this.setData({
                pushGuide: {}
            }));
        }
    },
    tipAddToDesktop: function() {
        if (i.config.enableMagazine && !wx.getStorageSync("launched_via_desktop")) {
            var e = getApp().getLogger().visitNumber;
            wx.setStorageSync("tip_add_desktop", e);
            var t = void 0;
            t = "android" === getApp().globalData.sysInfo.platform ? "喜欢" + i.config.name + "？点击这里添加到桌面吧。" : "喜欢" + i.config.name + "？点击这里添加到我的小程序！", 
            this.setData({
                "tipsOn.addToDesktop": t
            });
        }
    },
    followUser: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (!t.data.needLogin) {
                        a.next = 3;
                        break;
                    }
                    return a.next = 3, t.login(e);

                  case 3:
                    t.follow(e);

                  case 4:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    gotoArticle: function(e) {
        var t = this;
        return r(n.default.mark(function a() {
            var r, s, o, i;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (!t.data.needLogin) {
                        a.next = 3;
                        break;
                    }
                    return a.next = 3, t.login(e);

                  case 3:
                    r = e.currentTarget.dataset, s = r.docId, o = r.mid, i = r.uid, wx.navigateTo({
                        url: "/pages/article/article?id=" + s + "&mid=" + o + "&uid=" + (i || "")
                    });

                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a, t);
        }))();
    },
    onPageScroll: function(e) {
        var t = this, a = this.data.isShowPartnerBar, r = e.scrollTop >= 5e3;
        a !== r && this.setData({
            isShowPartnerBar: r
        }), i.config.enableContact && (this.data.showContact && this.setData({
            showContact: !1
        }), this.contactHolder && clearInterval(this.contactHolder), this.contactHolder = setInterval(function() {
            t.setData({
                showContact: !0
            });
        }, 2e3));
    }
}, v = {
    warehouseRefs: {
        eventIds: []
    },
    mapWarehouseToData: function(e, t) {
        var a = t.eventIds;
        return {
            events: (0, c.eventEntitiesSelector)(a)(e)
        };
    }
};

Page(f.default.apply(void 0, [ h, v ].concat(a(u.allMixins))));
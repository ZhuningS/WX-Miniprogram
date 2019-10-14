function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

function a(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function n(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime")), i = e(require("../../libs/underscore")), o = require("../../protocol/io"), s = (require("../../services/redirector"), 
require("../../services/warehouse/index")), u = require("../../services/ui-switch"), c = require("../../config/index"), d = require("../../mixins/index"), f = require("../../utils/interactor"), p = require("../../utils/dev"), g = require("../../utils/data-processor"), l = e(require("../../utils/extend-page")), h = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, m = {
    data: {
        uiSwitchMagazine: {},
        events: void 0,
        loading: !0,
        hasMore: !1,
        nextUrl: void 0,
        error: !1,
        mid: void 0
    },
    mid: void 0,
    shareConfig: void 0,
    xiaohuaIndex: -1,
    onLoad: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return n(r.default.mark(function a() {
            var n;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    e.mid = t.id || void 0, console.log("magazine launched", t), e.setData({
                        user: getApp().globalData.userInfo,
                        mid: t.id || void 0
                    }), (n = e.parseShareLanding(t)) && n.base ? (console.log("redirect to", n), e.gotoSharedLanding(n), 
                    e.setData({
                        status: "landing",
                        mid: n.params.mid
                    }), e.mid = n.params.mid) : e.init(!0), e.pageShown("/magazines/" + e.mid + "/", t.content);

                  case 7:
                  case "end":
                    return a.stop();
                }
            }, a, e);
        }))();
    },
    onShow: function() {
        if ("land" === this.data.status && this.init(), this.magazineTicket) {
            var e = getApp().transfer().take(this.magazineTicket);
            this.magazineTicket = null, console.log("发送 post 回来", e), e && e.posted && this.init();
        }
    },
    onHide: function() {
        "landing" === this.data.status && this.setData({
            status: "land"
        });
    },
    init: function(e) {
        var t = this;
        return n(r.default.mark(function a() {
            var n;
            return r.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return t.xiaohuaIndex = -1, t.setData({
                        events: [],
                        error: !1,
                        loading: !0
                    }), t.updateWarehouseRefs({
                        eventIds: []
                    }), a.prev = 3, a.next = 6, t.loadMagazine("v1/magazine.info", {
                        mid: t.mid,
                        need_cover: !0,
                        isForce: e
                    });

                  case 6:
                    if ("selected" !== t.data.current) {
                        a.next = 11;
                        break;
                    }
                    return a.next = 9, t.loadPage("v1/timeline.magazine.get", {
                        mid: t.mid,
                        fromLatest: !1,
                        pub_id: getApp().getPublicationId()
                    });

                  case 9:
                    a.next = 22;
                    break;

                  case 11:
                    if ("latest" !== t.data.current) {
                        a.next = 16;
                        break;
                    }
                    return a.next = 14, t.loadPage("v1/timeline.magazine.get", {
                        mid: t.mid,
                        fromLatest: !0,
                        pub_id: getApp().getPublicationId()
                    });

                  case 14:
                    a.next = 22;
                    break;

                  case 16:
                    if ("group" !== t.data.current) {
                        a.next = 21;
                        break;
                    }
                    return a.next = 19, t.loadPage("v1/timeline.group.get", {
                        mid: t.mid,
                        pub_id: getApp().getPublicationId()
                    });

                  case 19:
                    a.next = 22;
                    break;

                  case 21:
                    "intro" === t.data.current && ((n = t.data.magazine.desc).startsWith("http") ? t.setData({
                        intro: {
                            type: "image",
                            content: n
                        }
                    }) : t.setData({
                        intro: {
                            type: "text",
                            content: n
                        }
                    }));

                  case 22:
                    a.next = 28;
                    break;

                  case 24:
                    a.prev = 24, a.t0 = a.catch(3), (0, p.errorReporter)("init magazine failed", a.t0), 
                    a.t0.data && "not permitted" === a.t0.data.errorMessage ? t.setData({
                        error: "forbidden"
                    }) : t.setData({
                        error: !0
                    });

                  case 28:
                    return a.prev = 28, t.setData({
                        loading: !1,
                        status: "ready"
                    }), a.finish(28);

                  case 31:
                  case "end":
                    return a.stop();
                }
            }, a, t, [ [ 3, 24, 28, 31 ] ]);
        }))();
    },
    handleTabNavItemTap: function(e) {
        var t = e.detail.nextTabId;
        this.setData({
            current: t
        }), this.init();
    },
    handleHeaderShareButtonTap: function(e) {
        var t = (0, f.generateTapEvent)(e, {
            shareData: this.shareOptions()
        });
        this.showShareCard(t);
    },
    handleHeaderUnsubscribeTap: function(e) {
        var t = (0, f.generateTapEvent)(e);
        this.onTapUnsubscribe(t);
    },
    onPullDownRefresh: function() {
        var e = this;
        return n(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.init();

                  case 2:
                    wx.stopPullDownRefresh();

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadMagazine: function(e, t) {
        var s = this;
        return n(r.default.mark(function n() {
            var c, d, f, p, l, h, m, v, x, b, w, z, k;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (!s.data.cover || t.isForce) {
                        n.next = 2;
                        break;
                    }
                    return n.abrupt("return");

                  case 2:
                    return n.next = 4, o.api.get(e, t);

                  case 4:
                    if (d = n.sent, f = d.data.events[0], (p = f.magazineInfo).magazine.isOn || p.magazine.isPreview) {
                        n.next = 9;
                        break;
                    }
                    throw new Error("杂志已下线");

                  case 9:
                    l = p.config, h = u.uiSwitch.getSwitches("magazine", {
                        magazine: p.magazine
                    }), m = l ? l.enterAction : void 0, v = l ? l.tabs : [ {
                        type: "selected",
                        name: "精选"
                    }, {
                        type: "latest",
                        name: "最新"
                    } ], x = s.data.current, v && i.default.each(v, function(e) {
                        e.id = e.type;
                    }), b = i.default.find(v, function(e) {
                        return e.defaultSelected;
                    }), x = b ? b.id : v[0].id, w = p.magazine.pushSubscribed ? "push" : "subscribed" === p.magazine.status, 
                    z = (0, g.genMagazineCover)(p, getApp().getConfig().enableSubscribe ? "menu" : ""), 
                    p.magazine && p.magazine.color && !p.magazine.cover && s.showPageTitle(" ", "" + p.magazine.color, "ffffff"), 
                    z.image && setTimeout(function() {
                        wx.setNavigationBarColor({
                            frontColor: "#000000",
                            backgroundColor: "#FFFFFF"
                        });
                    }, 2e3), s.shareConfig = f.shareConfig, k = s.tryToLoadIntro(l), s.setData((c = {
                        uiSwitchMagazine: h,
                        tabs: v,
                        current: x,
                        enterAction: m,
                        cover: z,
                        intro: k,
                        magazineConfig: l,
                        magazine: p.magazine
                    }, a(c, "config.cardStyle", p.magazine.style), a(c, "subscribed." + p.magazine.id, w), 
                    c));

                  case 24:
                  case "end":
                    return n.stop();
                }
            }, n, s);
        }))();
    },
    autoJoinGroup: function() {
        var e = this;
        return n(r.default.mark(function t() {
            var a, n, i, s;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = e.data, n = a.magazine, i = a.needLogin, s = "private" === n.type && n.relation && "stranger" === n.relation.role.type && !i) {
                        t.next = 4;
                        break;
                    }
                    return t.abrupt("return");

                  case 4:
                    return t.prev = 4, t.next = 7, o.api.get("v1/group.join", {
                        mid: e.mid
                    });

                  case 7:
                    e.init(!0), t.next = 13;
                    break;

                  case 10:
                    t.prev = 10, t.t0 = t.catch(4), (0, p.errorReporter)("join group failed", t.t0);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 4, 10 ] ]);
        }))();
    },
    loadPage: function(e, a) {
        var i = this;
        return n(r.default.mark(function n() {
            var u, c, d;
            return r.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (u = void 0, i.setData({
                        loading: !0
                    }), n.prev = 2, !a) {
                        n.next = 9;
                        break;
                    }
                    return n.next = 6, o.api.get(e, h({
                        need_hot_post: !0
                    }, a));

                  case 6:
                    u = n.sent, n.next = 13;
                    break;

                  case 9:
                    return e = e.replace("http://", "https://"), n.next = 12, o.ajax.get(e);

                  case 12:
                    u = n.sent;

                  case 13:
                    return c = (0, g.pretreatData)(u.data).events, n.next = 16, s.eventAPI.setEventEntities(c);

                  case 16:
                    d = n.sent, i.updateWarehouseRefs({
                        eventIds: [].concat(t(i.warehouseRefs.eventIds), t(d))
                    }), i.setData({
                        loading: !1,
                        hasMore: u.data.hasMore,
                        nextUrl: u.data.nextUrl
                    }), n.next = 26;
                    break;

                  case 21:
                    n.prev = 21, n.t0 = n.catch(2), (0, p.errorReporter)("load magazine failed", n.t0), 
                    n.t0.data && "not permitted" === n.t0.data.errorMessage && i.setData({
                        error: "forbidden"
                    }), i.setData({
                        loading: !1
                    });

                  case 26:
                  case "end":
                    return n.stop();
                }
            }, n, i, [ [ 2, 21 ] ]);
        }))();
    },
    onTapAddTopic: function() {
        var e = getApp().transfer().put({});
        this.magazineTicket = e, wx.navigateTo({
            url: "/pages/post/create?id=" + this.mid + "&magazineTicket=" + e
        });
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadPage(this.data.nextUrl);
    },
    shareOptions: function() {
        return h({
            id: this.mid,
            type: "magazine",
            name: this.data.magazine.name
        }, c.config.shareOptionsMap.magazine, this.shareConfig);
    },
    onTapMenu: function() {
        var e = this, t = [], a = -1, i = -1, o = -1, s = -1, u = this.data.subscribed[this.mid];
        "push" === u ? (t = [ "退订", "关闭通知" ], i = 0, s = 1) : !0 === u ? (t = [ "退订", "开启通知" ], 
        i = 0, o = 1) : (t = [ "订阅" ], a = 0);
        var c = {
            currentTarget: {
                dataset: {
                    mid: this.mid,
                    content: "menu"
                }
            }
        };
        wx.showActionSheet({
            itemList: t,
            success: function() {
                var t = n(r.default.mark(function t(n) {
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n.tapIndex === a ? e.onTapSubscribe(c) : n.tapIndex === i ? e.onTapUnsubscribe(c) : n.tapIndex === o ? e.onTapSubscribeNotification(c) : n.tapIndex === s && e.onTapUnsubscribeNotification(c);

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }()
        });
    },
    showForDevMagazineId: function() {
        var e = this.data.cover.magazine.id + "";
        wx.showModal({
            title: e,
            confirmText: "复制",
            success: function(t) {
                t.confirm && wx.setClipboardData({
                    data: e
                });
            }
        });
    },
    receiveSocketMessage: function(e, t, a) {
        "post.create" === t && (a.uid, getApp().getUserId());
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
    paid: function() {
        this.init(!0);
    },
    reload: function() {
        this.init(!0);
    },
    tryToLoadIntro: function(e) {
        var t = {};
        return wx.getStorageSync("magazine-intro-" + this.mid) ? t : e.instructionContent ? (e.instructionContent.startsWith("http") ? t.image = e.instructionContent : t.text = e.instructionContent, 
        t.show = !0, t) : t;
    },
    handleCloseIntroDialog: function() {
        wx.setStorageSync("magazine-intro-" + this.mid, new Date().toLocaleDateString()), 
        this.setData(a({}, "intro.show", !1));
    }
}, v = {
    warehouseRefs: {
        eventIds: []
    },
    mapWarehouseToData: function(e, t) {
        var a = t.eventIds;
        return {
            events: (0, s.eventEntitiesSelector)(a)(e)
        };
    }
};

Page(l.default.apply(void 0, [ m, v ].concat(t(d.allMixins))));
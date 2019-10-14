function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function n(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
        });
    };
}

var a = e(require("../../libs/regenerator-runtime.js")), r = e(require("../../libs/underscore.js")), i = require("../../protocol/io"), o = require("../../utils/data-processor"), s = e(require("../../utils/extend-page")), u = require("../../mixins/index"), c = require("../../config/index"), d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
};

Page(s.default.apply(void 0, [ {
    data: {
        events: void 0,
        loading: !0,
        hasMore: !1,
        nextUrl: void 0,
        error: !1,
        groupId: void 0
    },
    shareConfig: null,
    groupId: void 0,
    xiaohuaIndex: -1,
    onLoad: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return n(a.default.mark(function n() {
            var r;
            return a.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    console.log("group launched", t), e.groupId = t.id || void 0, e.setData({
                        user: getApp().globalData.userInfo,
                        groupId: e.groupId
                    }), (r = e.parseShareLanding(t)) && r.base ? (console.log("redirect to", r), e.groupId = r.params.mid, 
                    e.gotoSharedLanding(r), e.setData({
                        status: "landing",
                        groupId: e.groupId
                    })) : e.init(), e.pageShown("/magazines/" + e.mid + "/", t.content);

                  case 6:
                  case "end":
                    return n.stop();
                }
            }, n, e);
        }))();
    },
    onShow: function() {
        "land" === this.data.status && this.init();
    },
    onHide: function() {
        "landing" === this.data.status && this.setData({
            status: "land"
        });
    },
    init: function() {
        var e = this;
        return n(a.default.mark(function t() {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.xiaohuaIndex = -1, e.setData({
                        events: [],
                        error: !1,
                        loading: !0
                    }), t.prev = 2, t.next = 5, e.loadMagazine("v1/magazine.info", {
                        mid: e.groupId
                    });

                  case 5:
                    return t.next = 7, e.loadPage("v1/timeline.group.get", {
                        mid: e.groupId
                    });

                  case 7:
                    (n = e.data.magazine.desc).startsWith("http") ? e.setData({
                        intro: {
                            type: "image",
                            content: n
                        }
                    }) : e.setData({
                        intro: {
                            type: "text",
                            content: n
                        }
                    }), t.next = 15;
                    break;

                  case 11:
                    t.prev = 11, t.t0 = t.catch(2), console.log(t.t0), t.t0.data && "not permitted" === t.t0.data.errorMessage ? e.setData({
                        error: "forbidden"
                    }) : e.setData({
                        error: !0
                    });

                  case 15:
                    return t.prev = 15, e.setData({
                        loading: !1
                    }), t.finish(15);

                  case 18:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 2, 11, 15, 18 ] ]);
        }))();
    },
    onPullDownRefresh: function() {
        var e = this;
        return n(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e.setData({
                        cover: null
                    }), t.next = 3, e.init();

                  case 3:
                    wx.stopPullDownRefresh();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, e);
        }))();
    },
    loadMagazine: function(e, r) {
        var s = this;
        return n(a.default.mark(function n() {
            var u, d, f, l, p, g, h, v;
            return a.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (!s.data.cover) {
                        n.next = 2;
                        break;
                    }
                    return n.abrupt("return");

                  case 2:
                    return n.next = 4, i.api.get(e, r);

                  case 4:
                    d = n.sent, f = d.data.events[0], l = f.magazineInfo, p = l.config, g = p ? p.enterAction : void 0, 
                    h = l.magazine.pushSubscribed ? "push" : "subscribed" === l.magazine.status, v = (0, 
                    o.genMagazineCover)(l, c.config.enableSubscribe ? "menu" : ""), s.shareConfig = f.shareConfig, 
                    l.magazine && l.magazine.color && !l.magazine.cover && s.showPageTitle(" ", "" + l.magazine.color, "ffffff"), 
                    s.setData((u = {
                        enterAction: g,
                        cover: v,
                        magazine: l.magazine
                    }, t(u, "config.cardStyle", l.magazine.style), t(u, "subscribed." + l.magazine.id, h), 
                    u)), s.data.magazine.relation && "stranger" !== s.data.magazine.relation.role.type && (console.log("mina app checkUserInfo"), 
                    i.api.getV1("mina.app.checkUserInfo").then(function(e) {
                        console.log("user info is ok", e);
                    }, function(e) {
                        console.log("user info is error", e), "incomplete_info" === e.data.error.type && s.showModalDialog(void 0, "请完善会员资料", "为了便于更好的交流和后续活动组织，请先完善会员资料。", "好的", void 0, function() {
                            wx.navigateTo({
                                url: "/pages/form/form?type=profile"
                            });
                        });
                    }));

                  case 15:
                  case "end":
                    return n.stop();
                }
            }, n, s);
        }))();
    },
    loadPage: function(e, t) {
        var r = this;
        return n(a.default.mark(function n() {
            var s, u;
            return a.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (s = void 0, !t) {
                        n.next = 7;
                        break;
                    }
                    return n.next = 4, i.api.get(e, t);

                  case 4:
                    s = n.sent, n.next = 11;
                    break;

                  case 7:
                    return e = e.replace("http://", "https://"), n.next = 10, i.ajax.get(e);

                  case 10:
                    s = n.sent;

                  case 11:
                    u = (0, o.pretreatData)(s.data).events, r.initPostStatus(u);

                  case 13:
                  case "end":
                    return n.stop();
                }
            }, n, r);
        }))();
    },
    onReachBottom: function() {
        if (!this.data.loading && this.data.hasMore) try {
            this.setData({
                loading: !0
            }), this.loadPage(this.data.nextUrl);
        } finally {
            this.setData({
                loading: !1
            });
        }
    },
    shareOptions: function() {
        return d({
            id: this.mid,
            type: "magazine",
            name: this.data.magazine.name
        }, c.config.shareOptionsMap.magazine, this.shareConfig);
    },
    reload: function() {
        this.onPullDownRefresh();
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
        return n(a.default.mark(function n() {
            var i, o, s;
            return a.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    i = e.currentTarget.dataset.postId, (o = r.default.findIndex(t.data.events, function(e) {
                        return "post" === e.type && e.post.id === i;
                    })) >= 0 && (s = t.data.events.splice(o, 1), t.data.events.splice(1, 0, s[0]), t.setData({
                        events: t.data.events
                    }));

                  case 3:
                  case "end":
                    return n.stop();
                }
            }, n, t);
        }))();
    },
    preparePay: function(e) {
        var t = this;
        return n(a.default.mark(function n() {
            return a.default.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, t.login(e);

                  case 2:
                    if (!n.sent) {
                        n.next = 7;
                        break;
                    }
                    t.initPay(), t.pay(e), n.next = 8;
                    break;

                  case 7:
                    wx.showToast({
                        title: "需要先完善信息"
                    });

                  case 8:
                  case "end":
                    return n.stop();
                }
            }, n, t);
        }))();
    },
    paid: function() {
        this.onPullDownRefresh();
    }
} ].concat(function(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}(u.allMixins))));
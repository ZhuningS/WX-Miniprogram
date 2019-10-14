function e(e) {
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

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../libs/regenerator-runtime.js")), a = require("../../protocol/io"), r = require("../../utils/data-processor"), n = require("../../config/index"), i = require("../../services/warehouse/index"), o = require("../../services/ui-switch"), s = require("../../utils/dev"), u = require("../../utils/interactor"), d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
};

module.exports = {
    data: {
        uiSwitchProfile: o.uiSwitch.getSwitches("$profile"),
        user: {},
        events: [],
        loading: !0,
        uid: void 0,
        error: !1
    },
    onLoad: function(a) {
        var r = this;
        return e(t.default.mark(function e() {
            var n, i;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    a.uid ? r.pageShown("/profiles/" + a.uid + "/") : r.pageShown("/me/"), n = "timeline", 
                    i = [ {
                        name: getApp().getConfig().actions.mark,
                        id: "timeline"
                    } ], getApp().getConfig().enableGroup && (i.splice(0, 0, {
                        name: "社群",
                        id: "post"
                    }), n = "post"), getApp().getConfig().enableSubscribe || i.push({
                        name: "已读",
                        id: "read"
                    }), getApp().getConfig().enablePay && "pages/profile/profile" === r.route && i.push({
                        name: "已购",
                        id: "buy"
                    }), r.setData({
                        uid: a.uid ? a.uid : getApp().getUserId(),
                        tabs: i,
                        current: n
                    }), r.init();

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    },
    onPullDownRefresh: function() {
        var a = this;
        return e(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, a.init();

                  case 2:
                    wx.stopPullDownRefresh();

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, a);
        }))();
    },
    init: function() {
        var a = this;
        return e(t.default.mark(function e() {
            var r;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a.setData({
                        events: [],
                        more: [],
                        anonymous: getApp().isAnonymous(),
                        error: !1,
                        loading: !0
                    }), e.prev = 1, r = [ a.loadInfo() ], "timeline" === a.data.current ? a.loadPage("v1/timeline.profile.get") : "post" === a.data.current ? a.loadPage("v1/timeline.community.profile.get") : "read" === a.data.current ? a.loadPage("v1/timeline.readdocs.get", !1, {
                        uid: a.uid
                    }) : "buy" === a.data.current && a.loadPaidList(), e.next = 6, Promise.all(r);

                  case 6:
                    if (a.data.uid ? wx.setNavigationBarTitle({
                        title: a.data.user.profile.name
                    }) : wx.setNavigationBarTitle({
                        title: getApp().getConfig().actions.name
                    }), a.initMarked(), !a.initLogin) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 11, a.initLogin();

                  case 11:
                    e.next = 17;
                    break;

                  case 13:
                    e.prev = 13, e.t0 = e.catch(1), (0, s.errorReporter)("load profile failed", e.t0), 
                    a.setData({
                        error: !0
                    });

                  case 17:
                    return e.prev = 17, a.setData({
                        loading: !1
                    }), e.finish(17);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, a, [ [ 1, 13, 17, 20 ] ]);
        }))();
    },
    onReachBottom: function() {
        !this.data.loading && this.data.hasMore && this.loadPage(this.data.nextUrl, !0);
    },
    handleTabNavItemTap: function(e) {
        var t = e.detail.nextTabId;
        this.setData({
            current: t
        }), this.init();
    },
    loadInfo: function() {
        var r = this;
        return e(t.default.mark(function e() {
            var n, o;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, i.userAPI.readInfo(r.data.uid);

                  case 2:
                    n = e.sent, o = {}, r.updateWarehouseRefs({
                        userId: n.id
                    }), [ "friend", "subscribed" ].indexOf(n.profile.relation) >= 0 && (o[r.data.uid] = !0), 
                    r.setData({
                        followed: o
                    }), a.api.getV1("mina.app.getUserFields", {
                        uid: r.data.uid || getApp().getUserId
                    }).then(function(e) {
                        var t = e.data.fields;
                        t && r.setData({
                            "user.profile.fields": t
                        });
                    }).catch(function() {});

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, r);
        }))();
    },
    loadPage: function(n, i) {
        var o = this;
        return e(t.default.mark(function e() {
            var s;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o.setData({
                        loading: !0
                    }), s = void 0, !i) {
                        e.next = 9;
                        break;
                    }
                    return n = n.replace("http://", "https://"), e.next = 6, a.ajax.get(n);

                  case 6:
                    s = e.sent, e.next = 12;
                    break;

                  case 9:
                    return e.next = 11, a.api.get(n, {
                        uid: o.data.uid || ""
                    });

                  case 11:
                    s = e.sent;

                  case 12:
                    console.log("loadPage res", s), getApp().getConfig().enableGroup && o.initPostStatus(s.data.events), 
                    o.setData({
                        events: o.data.events.concat((0, r.pretreatData)(s.data).events),
                        loading: !1,
                        nextUrl: s.data.nextUrl || null,
                        hasMore: s.data.hasMore
                    }), o.initMarked();

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, o);
        }))();
    },
    handleMoreMenuTap: function(a) {
        var r = this, n = this.data.uid, i = (0, u.generateTapEvent)(a, {
            uid: n
        }), o = [ "取消关注" ];
        wx.showActionSheet({
            itemList: o,
            success: function() {
                var a = e(t.default.mark(function e(a) {
                    return t.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            e.t0 = a.tapIndex, e.next = 0 === e.t0 ? 3 : 6;
                            break;

                          case 3:
                            return e.next = 5, r.unfollow(i);

                          case 5:
                            return e.abrupt("break", 6);

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, r);
                }));
                return function(e) {
                    return a.apply(this, arguments);
                };
            }()
        });
    },
    showForUserId: function() {
        var e = "" + this.data.uid;
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
    shareOptions: function() {
        var e = this.data.uid ? this.data.uid : getApp().getUserId();
        return d({
            id: e,
            type: "profile",
            name: this.data.user.profile.name
        }, n.config.shareOptionsMap.profile);
    }
};
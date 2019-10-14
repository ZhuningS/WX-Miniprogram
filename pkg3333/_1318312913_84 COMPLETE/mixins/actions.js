function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

function a(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function i(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, a) {
            function i(n, o) {
                try {
                    var r = e[n](o), s = r.value;
                } catch (t) {
                    return void a(t);
                }
                if (!r.done) return Promise.resolve(s).then(function(t) {
                    i("next", t);
                }, function(t) {
                    i("throw", t);
                });
                t(s);
            }
            return i("next");
        });
    };
}

var n = t(require("../libs/regenerator-runtime.js")), o = require("../protocol/io"), r = require("../utils/data-processor"), s = t(require("../libs/url")), c = t(require("../libs/underscore")), l = t(require("../pages/components/global-ui")), u = t(require("../utils/util")), g = require("../utils/notification"), d = require("../config/index"), f = require("../services/ui-switch"), h = function() {
    var t = i(n.default.mark(function t(e) {
        var i, s, c, l, u;
        return n.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (s = e.target.dataset, c = s.sectionIndex, l = s.nextUrl, !this.data.events[c].section.loading && l) {
                    t.next = 3;
                    break;
                }
                return t.abrupt("return");

              case 3:
                return l = l.replace("http://", "https://"), this.setData(a({}, "events[" + c + "].section.loading", !0)), 
                t.next = 7, o.ajax.get(l);

              case 7:
                u = t.sent, this.setData((i = {}, a(i, "events[" + c + "].section.events", this.data.events[c].section.events.concat((0, 
                r.pretreatData)(u.data).events)), a(i, "events[" + c + "].section.nextUrl", u.data.nextUrl || ""), 
                a(i, "events[" + c + "].section.loading", !1), i)), this.initMarked && this.initMarked();

              case 10:
              case "end":
                return t.stop();
            }
        }, t, this);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}();

module.exports = {
    data: {
        toast: {},
        modalDialog: {},
        inputDialog: void 0,
        itemsStatus: {},
        preventDoubleClick: !1,
        config: {
            enableFollow: d.config.enableFollow,
            enableMagazine: d.config.enableMagazine,
            enableSubscribe: d.config.enableSubscribe,
            enableDiscuss: d.config.enableDiscuss,
            actions: d.config.actions
        },
        copywriting: d.config.copywriting,
        uiSwitch: f.uiSwitch.getSwitches()
    },
    modalDialogProcess: void 0,
    inputDialogProcess: void 0,
    scrollToMore: function(t) {
        console.log("How to do it...", t), this.setData({
            currentMorePos: t.currentTarget.dataset.target
        });
    },
    showForDevUserId: function() {
        var t = this.data.user.profile.uid + "";
        wx.showModal({
            title: t,
            confirmText: "复制",
            success: function(t) {
                t.confirm && wx.setClipboardData({
                    data: JSON.stringify(wx.getStorageSync("user"))
                });
            }
        });
    },
    showPageTitle: function(t, e) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ffffff";
        setTimeout(function() {
            e && wx.setNavigationBarColor({
                frontColor: "#" + a,
                backgroundColor: "#" + e
            }), t && wx.setNavigationBarTitle({
                title: t
            });
        }, 200);
    },
    showToast: function(t, e) {
        var a = this, i = this.data.toast.ticket;
        l.default.dispatchShowToastAction({
            title: t,
            intro: e
        }), setTimeout(function() {
            var t = a.data.toast.ticket;
            i && t !== i + 1 || l.default.dispatchHideToastAction();
        }, e ? 3e3 : 1500);
    },
    showModalDialog: function(t, e, a, i, n, o) {
        this.modalDialogProcess = o, this.setData({
            modalDialog: {
                icon: t,
                title: e,
                intro: a,
                action: i,
                cancel: n
            }
        });
    },
    onModalDialogDone: function(t) {
        this.modalDialogProcess && this.modalDialogProcess(t), this.onModalDialogCanceled(t);
    },
    onModalDialogCanceled: function() {
        this.setData({
            modalDialog: {}
        });
    },
    showInputDialog: function(t, e, a, i) {
        var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "area";
        this.inputDialogProcess = i, this.setData({
            inputDialog: {
                tip: t,
                action: e,
                cancel: a,
                style: n
            }
        });
    },
    onInputDialogDone: function(t) {
        if (this.inputDialogProcess) {
            var e = t.detail.value;
            "submit" === t.type && (e = e.input), console.log("submit input content", t, e), 
            this.inputDialogProcess(e);
        }
        this.setData({
            inputDialog: {}
        });
    },
    onInputDialogCanceled: function() {
        this.inputDialogProcess && this.inputDialogProcess(), this.setData({
            inputDialog: {}
        });
    },
    hack: function() {},
    hackForm: function(t) {
        (0, g.collectNotificationFormId)(t);
    },
    collectNotificationFormId: g.collectNotificationFormId,
    navigateTo: function(t) {
        console.log("navigate event this", this, t);
        var e = t.currentTarget.dataset, a = e.url, i = e.shareData, n = e.images, o = e.mid, r = e.postNote;
        if (a) wx.navigateTo({
            url: a
        }); else if (i && this.showShareCard) this.showShareCard(t); else if (n) {
            var s = [];
            c.default.each(n, function(t) {
                s.push(t.url);
            });
            var l = t.target.dataset.pos;
            wx.previewImage({
                current: l && l < s.length ? s[l] : void 0,
                urls: s
            });
        } else o ? wx.navigateTo({
            url: "/pages/magazine/recommend?id=" + o + "&content=direct"
        }) : r && d.config.enableGroup && wx.navigateTo({
            url: "/pages/post/post?nid=" + r
        });
    },
    hideItem: function(t) {
        this.setData(a({}, "itemsStatus." + t.currentTarget.dataset.target, -1));
    },
    expandItem: function(t) {
        this.setData(a({}, "itemsStatus." + t.currentTarget.dataset.target, 2));
    },
    shrinkItem: function(t) {
        this.setData(a({}, "itemsStatus." + t.currentTarget.dataset.target, 1));
    },
    setItemStatus: function(t, e) {
        this.setData(a({}, "itemsStatus." + t, e));
    },
    addItemStatus: function(t, e) {
        var i = this.data.itemsStatus[t];
        void 0 === i && (i = 0), i |= e, this.setData(a({}, "itemsStatus." + t, i));
    },
    removeItemStatus: function(t, e) {
        var i = this.data.itemsStatus[t];
        void 0 === i && (i = 0), i ^= e, this.setData(a({}, "itemsStatus." + t, i));
    },
    gotoLink: function(t) {
        if (t && t.startsWith("http")) {
            var e = new s.default(t);
            if (console.log("parse the link", e), "qingmang.me" === e.hostname || "www.qingmang.me" === e.hostname) {
                var a = e.pathname.replace(/^\/+|\/+$/g, "").split("/");
                if (a && a.length > 0) {
                    var i;
                    switch (a[0]) {
                      case "magazines":
                        i = a.length > 2 ? "/pages/article/article?id=" + a[a.length - 1] + "&mid=" + a[1] : "/pages/magazine/magazine?id=" + a[1];
                        break;

                      case "articles":
                        i = "/pages/article/article?id=" + a[a.length - 1];
                        break;

                      case "profiles":
                        i = "/pages/profile/user?uid=" + a[1];
                    }
                    if (console.log("redirect to page", i, a), i) return void wx.navigateTo({
                        url: i
                    });
                }
                if (!i) return void wx.navigateTo({
                    url: u.default.buildUrl("/pages/web/web", {
                        url: t
                    })
                });
            }
            wx.setClipboardData({
                data: t,
                success: function() {
                    wx.getClipboardData({
                        success: function(t) {
                            console.log(t.data);
                        }
                    }), wx.showModal({
                        content: "在小程序中暂时无法展示该链接，已将链接复制，请前往浏览器访问。",
                        showCancel: !1,
                        confirmText: "知道了"
                    });
                }
            });
        } else wx.showToast({
            title: "缺少链接"
        });
    },
    refreshPage: function() {
        wx.startPullDownRefresh();
    },
    recordRecentPublication: function(t) {
        var a = this;
        return i(n.default.mark(function i() {
            var o, r, s;
            return n.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    if (a.prev = 0, "wx05790b1180642960" === (o = getApp().globalData.config.wxAppid)) {
                        a.next = 4;
                        break;
                    }
                    return a.abrupt("return");

                  case 4:
                    r = wx.getStorageSync("recentPublication") || [], s = [ t ].concat(e(r.filter(function(e) {
                        return t.id !== e.id;
                    }))).slice(0, 20), wx.setStorageSync("recentPublication", s), a.next = 12;
                    break;

                  case 9:
                    a.prev = 9, a.t0 = a.catch(0), console.error(a.t0);

                  case 12:
                  case "end":
                    return a.stop();
                }
            }, i, a, [ [ 0, 9 ] ]);
        }))();
    },
    onScrollToLower: c.default.debounce(h, 200)
};
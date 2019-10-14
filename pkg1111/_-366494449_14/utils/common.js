function e(e, t) {
    if (!t && f) return e && e(f);
    wx.getSystemInfo({
        complete: function(t) {
            var o = t.windowHeight, n = t.windowWidth;
            f = t, o && s.setWinHei(o), n && s.setWinWid(n), e && e(t);
        }
    });
}

function t(e) {
    if (u) return e && e();
    wx.getExtConfig && wx.getExtConfig({
        success: function(t) {
            var n = t.extConfig, a = n.host, i = n.alias, c = n.tabBar;
            u = !0, a && s.setHost(a), i && s.setAlias(i), c && (s.config.tabBar = c), o(), 
            e && e();
        }
    });
}

function o() {
    var e = s.getStoreInfo();
    0 == Object.keys(e).length && c.P({
        url: "/apis/home/shop.index/info",
        data: {
            id: 0
        },
        success: function(e) {
            var t = e.data, o = t.isPay, n = t.tab_bar, a = t.def_bar, i = t.cur_tbar, c = t.app.copyright_logo;
            if ("" != c && s.setCopyRight(c), console.log("tabbar====", n), console.log("account====", i), 
            s.setDefualtPage(a), s.setStoreInfo(t), s.setPay(o), s.setTabbar(n), s.setAccount(i), 
            t.market_auth && t.market_auth.length > 0) {
                for (var r = t.market_auth, u = {}, f = 0; f < r.length; f++) {
                    var d = r[f].mkey, l = r[f].auth;
                    u[d] = l;
                }
                console.log(u), s.setMarkAuth(u);
            }
        }
    });
}

function n(e) {
    wx.checkSession({
        success: function() {
            console.log("Session没有过期====="), s.getUid() ? e && e() : (console.log("没有获取到uid====="), 
            a(e));
        },
        fail: function() {
            console.log("session已经过期====="), a(e);
        }
    });
}

function a(e) {
    wx.login({
        success: function(t) {
            var o = {
                wxcode: t.code,
                recuid: s.getRecuid()
            };
            c.P({
                url: "/apis/home/card.user/auth",
                data: o,
                success: function(t) {
                    var o = t.data, n = o.uid, a = {
                        mobile: o.mobile,
                        nickname: o.nickname,
                        sex: o.sex,
                        avatar: o.logo
                    };
                    a && s.setUInfo(a), n && s.setUid(n), o.sesskey && s.setSkey(o.sesskey), o.serial && s.setSerial(o.serial), 
                    console.log(s.globalData.userInfo), e && e();
                }
            });
        },
        fail: function(e) {
            r.showWarn("错误");
        },
        complete: function() {}
    });
}

function i(e) {
    console.log("formId2====", e), e && c.P({
        url: "/apis/home/card.core/formid",
        data: {
            form_id: e
        },
        success: function(e) {}
    });
}

var s = getApp(), c = require("./ajax.js"), r = require("./util.js"), u = !1, f = null, d = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll" ], l = 0, g = [ "/pages/mPage1/index", "/pages/mPage2/index", "/pages/mPage3/index" ];

module.exports = {
    initApp: function(o) {
        console.log("初始化方法=======");
        var a = o || {}, i = a.extSuc, s = a.loginSuc, c = a.sysInfoSuc, r = a.fetchSysInfo, u = void 0 !== r && r;
        t(function() {
            i && i(), n(function() {
                s && s(), e(function(e) {
                    c && c(e);
                }, u);
            });
        });
    },
    quietLogin: n,
    submitForm: i,
    jump: function(e) {
        var t = e.detail.formId, o = e.currentTarget.dataset, n = o.opentype, a = o.url;
        "navigate" != n && n || (n = "navigateTo"), wx[n]({
            url: a
        }), i(t);
    },
    extend: function(e, t) {
        var o = function() {};
        o.prototype = t.prototype, e.prototype = new o(), e.prototype.constructor = e, e.uber = t.prototype;
    },
    extendPage: function(e, t) {
        if (e && t) {
            var o = {}, n = {};
            return Object.assign(n, e.data), Object.assign(n, t.data), Object.assign(o, e), 
            Object.assign(o, t), o.data = n, d.forEach(function(n) {
                var a = e[n], i = t[n];
                a && i && (o[n] = function() {
                    a.bind(this).apply(void 0, arguments), i.bind(this).apply(void 0, arguments);
                });
            }), o;
        }
    },
    goToPage: function(e) {
        if (e) {
            var t, o = "navigateTo", n = g.length - 1, a = s.config.tabBar;
            l > n && (o = "redirectTo"), a && Object.keys(a).some(function(n) {
                if (a[n] == e) return o = "switchTab", t = n, !0;
            }), "switchTab" == o ? (wx[o]({
                url: "/pages/" + t + "/index"
            }), l = 0) : (wx[o]({
                url: g[l > n ? n : l] + "?pageId=" + e
            }), l++);
        }
    },
    goBackPage: function() {
        l--;
    },
    submitPrepay: function(e) {
        e && c.P({
            url: "/common/User/addPrePayId",
            data: {
                openId: s.getOpenId(),
                prepayId: e
            },
            success: function(e) {}
        });
    },
    updateUserInfo: function(e) {
        c.P({
            url: "/apis/home/card.user/info",
            data: {
                uid: s.getUid(),
                nickname: e.nickName,
                logo: e.avatarUrl,
                sex: e.gender,
                province: e.province,
                city: e.city,
                country: e.country,
                brand: s.getBrand() || "",
                model: s.getModel() || ""
            },
            success: function(e) {
                s.setUInfo(e.data);
            },
            fail: function() {}
        });
    },
    cardid: "",
    setFx: function(e) {
        var t = e.split("_")[0];
        wx.removeStorageSync("fxid"), s.setFxid(t);
    },
    isShowtab: function(e) {
        for (var t = s.getTabbar(), o = 0; o < t.length; o++) if (e == t[o].title) return !0;
    }
};
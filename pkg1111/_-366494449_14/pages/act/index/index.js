var a = getApp(), t = require("../../../utils/util.js"), e = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), d = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

require("../../../utils/wxUtil.js");

Page(e.extendPage(i, {
    data: {
        dataLoaded: !1,
        currentTab: 1,
        id: "",
        card_id: "",
        isBaoming: 0,
        showCardInfo: !1,
        inputValue: ""
    },
    onLoad: function(t) {
        var i = this;
        e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var e, d, n, r = i, o = a.getUid();
                if (void 0 !== t.scene && "" != t.scene ? (console.log("来自海报"), d = (s = decodeURIComponent(t.scene).split(","))[1], 
                e = s[0], n = o + "_" + d) : "" != t.id && void 0 !== t.id && (console.log("来自跳转或者分享"), 
                e = t.id, d = a.getCardid(), n = t.invite), "" != t.invite && void 0 !== t.invite) {
                    var s = t.invite.split("_");
                    d = s[1], console.log("有invite====", d), a.setCardid(d), n = t.invite;
                }
                var c = a.getAuth();
                console.log("isAuth====", c);
                var u = a.getStoreInfo();
                console.log("companyInfo======", u), r.setData({
                    companyInfo: u,
                    isAuth: c,
                    id: e || "",
                    card_id: d || "",
                    invite: n || ""
                }), r._getDetail();
            }
        });
    },
    onShareAppMessage: function(t) {
        var e = this, i = e.data.actInfo.id, d = e.data.actInfo.title, n = a.getUid() + "_" + (a.getCardid() || e.data.card_id), r = e.data.actInfo.head_map, o = "/pages/act/index/index?id=" + i + "&invite=" + n;
        return console.log(o), {
            title: d,
            path: o,
            imageUrl: r,
            success: function(a) {},
            fail: function(a) {}
        };
    },
    getUserInfo: function(i) {
        var d = i.detail.userInfo;
        d && void 0 != d && (t.showOK("登录成功"), e.updateUserInfo(d), a.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _getDetail: function() {
        var a = this, e = this, i = e.data.invite, n = e.data.id;
        d.G({
            url: "/apis/home/active.spread/index",
            data: {
                id: n,
                invite: i
            },
            success: function(i) {
                if (0 == i.code) {
                    var d = i.data.invite;
                    d && "" != d && a.setData({
                        cardInfo: d,
                        showCardInfo: !0
                    });
                    var n = i.data;
                    n.user_log && e.setData({
                        isBaoming: 1
                    }), a.setData({
                        dataLoaded: !0,
                        actInfo: n
                    });
                } else t.showWarn(i.msg);
            }
        });
    },
    _baoming: function(a) {
        var e = this, i = e.data.id, n = e.data.card_id, r = e.data.team_id;
        d.P({
            url: "/apis/home/active.spread/createOrder",
            data: {
                id: i,
                card_id: n,
                team_id: r || ""
            },
            success: function(a) {
                0 != a.code && t.showWarn(a.msg);
                var i = e.data.actInfo.id;
                wx.navigateTo({
                    url: "/pages/act/group/index?id=" + i
                });
            }
        });
    },
    _jumpToCard: function(t) {
        var e = t.currentTarget.dataset.cardid;
        a.setCardid(e), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    _send: function() {
        t.showWarn("发布成功，审核通过后将被展示"), this.setData({
            inputValue: ""
        });
    },
    _baoming2: function() {
        var a = this, t = a.data.actInfo.id, e = a.data.actInfo.user_log.teamid;
        wx.navigateTo({
            url: "/pages/act/group/index?id=" + t + "&teamid=" + e
        });
    },
    _tabSwitch: function(a) {
        var t = this, e = t.data.actInfo.id, i = a.currentTarget.dataset.current;
        t.setData({
            currentTab: i
        }), 3 == i && d.G({
            url: "/apis/home/active.spread/comment",
            data: {
                spread_id: e,
                page: 1,
                size: 999
            },
            success: function(a) {
                var e = a.data.item;
                t.setData({
                    comment: e
                });
            }
        });
    },
    _groupBuy: function(a) {
        var t = this, e = t.data.id, i = t.data.card_id, n = a.currentTarget.dataset.teamid;
        d.P({
            url: "/apis/home/active.spread/createOrder",
            data: {
                id: e,
                card_id: i,
                team_id: n || ""
            },
            success: function(a) {
                var e = t.data.actInfo.id;
                wx.navigateTo({
                    url: "/pages/act/group/index?id=" + e + "&teamid=" + n
                });
            }
        });
    }
}));
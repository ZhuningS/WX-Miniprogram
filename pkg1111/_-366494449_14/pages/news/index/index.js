var t = getApp(), e = require("../../../utils/util.js"), a = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), n = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(a.extendPage(i, {
    data: {
        dataLoaded: !1,
        showCardInfo: !1
    },
    onLoad: function(e) {
        var i = this, n = e.invite;
        this.setData({
            invite: n || ""
        });
        a.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var e = t.getAuth(), a = t.getStoreInfo();
                i.setData({
                    companyInfo: a,
                    isAuth: e
                }), i._getList();
            }
        });
    },
    _getList: function() {
        var t = this, e = this.data.invite;
        n.G({
            url: "/apis/home/card.news/fetch",
            data: {
                page: 1,
                size: 999,
                invite: e
            },
            success: function(e) {
                var a = e.data.item, i = e.data.invite;
                i && "" != i && t.setData({
                    cardInfo: i,
                    showCardInfo: !0
                }), t.setData({
                    dataLoaded: !0,
                    actInfo: a
                });
            }
        });
    },
    onShareAppMessage: function(e) {
        var a = this.data.companyInfo.name + "最新新闻资讯", i = "pages/news/index/index?&invite=" + (t.getUid() + "_" + t.getCardid());
        return console.log("sharePath====", i), {
            title: a,
            path: i,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    _jumpToCard: function(e) {
        var a = e.currentTarget.dataset.cardid;
        t.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    getUserInfo: function(i) {
        var n = i.detail.userInfo;
        n && void 0 != n ? (e.showOK("登录成功"), a.updateUserInfo(n), t.setAuth(!0), this.setData({
            isAuth: !0
        })) : e.alert("授权失败,重新授权后才能查看消息哦～");
    }
}));
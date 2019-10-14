var t = getApp(), e = require("../../../utils/util.js"), a = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), s = require("../../../utils/wxParse/wxParse.js"), n = require("../../../utils/ajax.js");

Page(a.extendPage(i, {
    data: {
        dataLoaded: !1,
        serviceList: [],
        showCardInfo: !1
    },
    onLoad: function(e) {
        var i = this, s = e.id;
        void 0 !== e.invite && "" != e.invite && (i.setData({
            invite: e.invite
        }), a.setFx(e.invite)), i.setData({
            id: s || ""
        }), a.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var e = t.getAuth(), a = t.getStoreInfo();
                i.setData({
                    companyInfo: a,
                    isAuth: e
                }), i._getDetail();
            }
        });
    },
    _getDetail: function() {
        var t = this, e = this.data.id, a = this.data.invite;
        n.G({
            url: "/apis/home/card.news/get",
            data: {
                id: e,
                invite: a
            },
            success: function(e) {
                var a = e.data;
                t.setData({
                    dataLoaded: !0,
                    actInfo: a
                });
                var i = e.data.invite;
                i && "" != i && t.setData({
                    cardInfo: i,
                    showCardInfo: !0
                }), a.descript && s.wxParse("article", "html", a.descript, t, 0);
            }
        });
    },
    onShareAppMessage: function(e) {
        var a = this.data.id, i = this.data.actInfo.name, s = "pages/news/detail/index?id=" + a + "&invite=" + (t.getUid() + "_" + t.getCardid());
        return console.log("sharePath====", s), {
            title: i,
            path: s,
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
        var s = i.detail.userInfo;
        s && void 0 != s ? (e.showOK("登录成功"), a.updateUserInfo(s), t.setAuth(!0), this.setData({
            isAuth: !0
        })) : e.alert("授权失败,重新授权后才能查看消息哦～");
    }
}));
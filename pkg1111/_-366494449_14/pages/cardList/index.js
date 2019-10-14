var t = getApp(), a = require("../../utils/util.js"), e = require("../../utils/common.js"), n = require("../../common/PageBase.js"), o = (require("../../utils/pagination.js"), 
require("../../utils/ajax.js"));

Page(e.extendPage(n, {
    data: {
        dataLoaded: !1,
        codepop: !1,
        qrcode: ""
    },
    onLoad: function(a) {
        var n = this;
        e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var a = t.getDefaultPage(), e = t.getStoreInfo(), o = t.getAuth();
                console.log(o), n.setData({
                    companyInfo: e,
                    dataLoaded: !0,
                    isAuth: o,
                    defaultPage: a
                }), n._getCardList();
            }
        });
    },
    _getCardList: function() {
        var t = this;
        o.G({
            url: "/apis/home/card.item/fetch",
            data: {},
            success: function(a) {
                var e = a.data.item;
                t.setData({
                    cartList: e,
                    dataLoaded: !0
                });
            }
        });
    },
    _viewCode: function(t) {
        var e = this, n = {
            path: "pages/card/index",
            scene: t.currentTarget.dataset.cardid
        };
        o.G({
            url: "/apis/home/index.common/qrcode",
            data: n,
            success: function(t) {
                1 != t.code ? e.setData({
                    qrcode: t.data.url,
                    codepop: !0
                }) : a.showWarn(t.msg);
            },
            fail: function(t) {}
        });
    },
    _showOptions: function(t) {
        var a = this.data.currentIndex, e = t.currentTarget.dataset.index;
        a === e && (e = ""), this.setData({
            currentIndex: e
        });
    },
    _operateCard: function(t) {
        var a = this, e = t.currentTarget.dataset.id, n = t.currentTarget.dataset.type;
        o.P({
            url: "/apis/home/card.item/operate",
            data: {
                id: e,
                type: n
            },
            success: function(t) {
                a.setData({
                    currentIndex: ""
                }), a._getCardList();
            }
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    _close_pop: function() {
        this.setData({
            codepop: !1
        });
    },
    _addPhonebook: function() {
        wx.addPhoneContact({
            mobilePhoneNumber: this.data.mobile,
            organization: this.data.organization,
            title: this.data.title,
            lastName: this.data.lastName,
            success: function(t) {
                a.showOK("保存成功");
            }
        });
    },
    _zan: function() {
        var t = this.data.zanNum;
        t++, this.setData({
            zanNum: t,
            zanIcon: "/images/card/zan_hover.png"
        });
    },
    _jumpToCard: function(a) {
        var e = a.currentTarget.dataset.cardid, n = this.data.defaultPage || "/pages/card/index";
        t.setCardid(e), wx.redirectTo({
            url: n
        });
    },
    getUserInfo: function(n) {
        var o = n.detail.userInfo;
        o && void 0 != o ? (a.showOK("登录成功"), e.updateUserInfo(o), t.setAuth(!0), this.setData({
            isAuth: !0
        })) : a.alert("授权失败,重新授权后才能查看消息哦～");
    }
}));
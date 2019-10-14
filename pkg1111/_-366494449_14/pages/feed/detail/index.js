var e = getApp(), t = require("../../../utils/util.js"), a = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), n = require("../../../utils/wxParse/wxParse.js"), s = require("../../../utils/ajax.js");

Page(a.extendPage(i, {
    data: {
        dataLoaded: !1,
        serviceList: []
    },
    onLoad: function(t) {
        var i = this;
        a.initApp({
            loginSuc: function() {
                var a, n, s, d = i, o = "", r = e.getUid();
                if (void 0 !== t.channel && "" != t.channel && d.setData({
                    channel: t.channel
                }), void 0 !== t.scene && "" != t.scene ? (console.log("来自海报"), "C" == (c = decodeURIComponent(t.scene).split(","))[0] ? (o = c[1], 
                a = c[2]) : (n = c[1], a = c[0], s = r + "_" + n, e.setCardid(n))) : "" != t.id && void 0 !== t.id && (console.log("来自跳转或者分享"), 
                a = t.id, n = e.getCardid()), "" != t.invite && void 0 !== t.invite) {
                    var c = t.invite.split("_");
                    n = c[1], console.log("有invite====", n), e.setCardid(n), s = t.invite;
                }
                var u = e.getAuth();
                console.log("isAuth====", u);
                var l = e.getStoreInfo();
                i.setData({
                    id: a,
                    invite: s || "",
                    card_id: n,
                    companyInfo: l,
                    isAuth: u,
                    channel: o
                }), d._getDetail(a);
            }
        });
    },
    onShareAppMessage: function(t) {
        var a = this, i = a.data.id, n = a.data.actInfo.title, d = e.getUid(), o = e.getCardid() || a.data.cardInfo.id, r = "/pages/feed/detail/index?id=" + i + "&invite=" + (d + "_" + o);
        return console.log(r), {
            title: n,
            path: r,
            success: function(e) {
                s.P({
                    url: "/apis/home/card.forum/share",
                    data: {
                        id: i
                    },
                    success: function(e) {}
                });
            },
            fail: function(e) {}
        };
    },
    _jumpToCard: function(t) {
        var a = t.currentTarget.dataset.cardid;
        e.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    getUserInfo: function(i) {
        var n = i.detail.userInfo;
        n && void 0 != n && (t.showOK("登录成功"), a.updateUserInfo(n), e.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _getDetail: function(e) {
        var t = this, a = this, i = a.data.invite, d = a.data.channel || "";
        s.G({
            url: "/apis/home/card.forum/get",
            data: {
                id: e,
                invite: i,
                channel: d
            },
            success: function(e) {
                var a = e.data.invite;
                a && "" != a && t.setData({
                    cardInfo: a,
                    showCardInfo: !0
                });
                var i = e.data;
                t.setData({
                    dataLoaded: !0,
                    actInfo: i
                }), i.content && n.wxParse("article", "html", i.content, t, 0);
            }
        });
    }
}));
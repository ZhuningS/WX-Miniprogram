require("../../utils/util.js");

var a = require("../../utils/ajax.js"), i = require("../../utils/common.js"), e = require("../../common/PageBase.js"), t = getApp();

Page(i.extendPage(e, {
    data: {},
    onLoad: function(a) {
        var e = this;
        i.initApp({
            loginSuc: function() {
                e._login();
            }
        });
    },
    _login: function() {
        var i = t.getDefaultPage();
        a.G({
            url: "/apis/home/card.core/init",
            data: {
                uid: t.getUid()
            },
            success: function(a) {
                console.log("init=====", a);
                var e = a.data.first, r = a.data.count, n = a.data.card_id;
                t.setCardid(n);
                var d = {
                    cardAvatar: a.data.avatar,
                    cardName: a.data.name,
                    card_id: a.data.cardid,
                    weixin: a.data.weixin,
                    mobile: a.data.mobile
                };
                t.setCardInfo(d), 1 == e ? wx.reLaunch({
                    url: i
                }) : 0 == e && (r > 1 ? wx.reLaunch({
                    url: "/pages/cardList/index"
                }) : wx.reLaunch({
                    url: i
                }));
            }
        });
    },
    onShow: function() {}
}));
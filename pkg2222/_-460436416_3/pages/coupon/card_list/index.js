function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/data")), e = t(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {},
    onLoad: function(t) {
        this.getCardList();
    },
    getCardList: function() {
        var t = this;
        e.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/get_card_list.html", {}, function(a) {
            0 == a.length ? t.setData({
                isSource: !0,
                list: a
            }) : t.setData({
                list: a,
                isSource: !1
            });
        }, {
            completeAfter: t.acoma()
        });
    },
    acoma: function(t) {},
    openCard: function(t) {
        var n = t.currentTarget.dataset.cardid, o = t.currentTarget.dataset.signature, i = t.currentTarget.dataset.timestamp, s = t.currentTarget.dataset.nonce_str, d = this;
        wx.login({
            success: function(t) {
                wx.getUserInfo({
                    success: function(c) {
                        e.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/getWxInfo.html", {
                            code: t.code
                        }, function(t) {
                            d.data.openid = t.openid, d.data.timestamp = t.timestamp;
                            var a = JSON.stringify({
                                timestamp: i,
                                signature: o,
                                nonce_str: s
                            });
                            wx.addCard({
                                cardList: [ {
                                    cardId: n,
                                    cardExt: a
                                } ],
                                success: function(t) {
                                    console.log(t), wx.showModal({
                                        title: "提示",
                                        content: "领取成功",
                                        success: function(t) {
                                            t.confirm || t.cancel;
                                        }
                                    });
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            });
                        }, {
                            completeAfter: this.aa
                        });
                    }
                });
            }
        });
    },
    onShareAppMessage: function() {},
    getCardids: function() {
        var t = this;
        e.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/get_card_list.html", {}, function(a) {
            var e = [];
            console.log(a.length);
            for (var n = 0; n < a.length; n++) {
                console.log(n);
                var o = a[n], i = {};
                i.cardId = o.info.id;
                var s = {};
                s.code = "", s.openid = t.data.openid, s.timestamp = t.data.timestamp, s.signature = t.data.signature, 
                a.cardExt = s, e = e.concat(i);
            }
            console.log(e), t.addcards(e);
        }, {
            completeAfter: t.acoma()
        });
    },
    addcards: function(t) {
        wx.addCard({
            cardList: t,
            success: function(t) {},
            fail: function(t) {}
        });
    }
});
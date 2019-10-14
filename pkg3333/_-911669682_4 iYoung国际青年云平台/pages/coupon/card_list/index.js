function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/data")), d = t(require("../../../utils/requestUtil"));

getApp();

Page({
    data: {
        list: []
    },
    onLoad: function(t) {
        this.getCardList();
    },
    getCardList: function() {
        var t = this;
        d.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/get_cards.html", {}, function(a) {
            t.setData({
                isSource: 0 == a.length,
                list: a
            });
        }, {
            completeAfter: t.acoma()
        });
    },
    acoma: function(t) {},
    openCard: function(t) {
        var e = this, o = t.currentTarget.dataset.cardid, n = t.currentTarget.dataset.index, i = e.data.list[n];
        console.log(i);
        var r = JSON.stringify(i.cardExt);
        wx.addCard({
            cardList: [ {
                cardId: o,
                cardExt: r
            } ],
            success: function(t) {
                var o = t.cardList[0], n = {};
                n.card_code = o.code, n.card_id = o.cardId, n.card_type = i.card_type, n.is_sd_gold = i.is_sd_gold, 
                d.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/receiveCard.html", n, function(t) {
                    e.getCardList(), wx.showModal({
                        title: "提示",
                        content: "领取成功",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm;
                        }
                    });
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), console.log(t.currentTarget.dataset.index);
    },
    onShareAppMessage: function() {},
    getCardids: function() {
        var t = this;
        d.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DgCoupon/DgCouponApi/get_card_list.html", {}, function(a) {
            var d = [];
            console.log(a.length);
            for (var e = 0; e < a.length; e++) {
                console.log(e);
                var o = a[e], n = {};
                n.cardId = o.info.id;
                var i = {};
                i.code = "", i.openid = t.data.openid, i.timestamp = t.data.timestamp, i.signature = t.data.signature, 
                a.cardExt = i, d = d.concat(n);
            }
            console.log(d), t.addcards(d);
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
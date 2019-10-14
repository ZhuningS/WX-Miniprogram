var e = getApp(), o = require("../../utils/util.js"), t = require("../../utils/common.js"), s = require("../../common/PageBase.js"), a = require("../../utils/ajax.js");

Page(t.extendPage(s, {
    data: {
        success: !1,
        dataLoaded: !1
    },
    onLoad: function(o) {
        var s = this;
        t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var t = e.getAuth();
                if (void 0 !== o.scene && "" != o.scene) {
                    console.log("来自优惠券");
                    var a = decodeURIComponent(o.scene);
                    s.setData({
                        coupon_id: a,
                        storeInfo: e.getStoreInfo(),
                        isAuth: t
                    }), s._getCounpon(a);
                } else s.setData({
                    coupon_id: o.id,
                    storeInfo: e.getStoreInfo(),
                    isAuth: t
                });
            }
        });
    },
    _getCounpon: function(o) {
        var t = this;
        a.G({
            url: "/apis/home/card.Coupon/getOne",
            data: {
                coupon_id: o
            },
            success: function(o) {
                console.log(o);
                var s = o.data;
                e.setCardid(s.card_user_id), t.setData({
                    coupon: s,
                    dataLoaded: !0
                });
            }
        });
    },
    _recive: function() {
        var e = this;
        a.G({
            url: "/apis/home/card.Coupon/collect",
            data: {
                coupon_id: this.data.coupon_id
            },
            success: function(t) {
                0 == t.code ? e.setData({
                    success: !0
                }) : (o.showWarn(t.msg), wx.redirectTo({
                    url: "/pages/shop/index"
                }));
            }
        });
    }
}));
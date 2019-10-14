var o = getApp(), t = (require("../../../utils/util.js"), require("../../../utils/common.js")), e = require("../../../common/PageBase.js"), i = require("../../../utils/ajax.js");

Page(t.extendPage(e, {
    data: {
        dataLoaded: !1,
        currentTab: 1,
        couponList: []
    },
    onLoad: function(o) {
        var e = this;
        t.initApp({
            loginSuc: function() {
                e._getList(1);
            }
        });
    },
    _tabSwitch: function(o) {
        o.detail.formId;
        var t = +o.currentTarget.dataset.current;
        this._toTab(t);
    },
    _toTab: function(o, t) {
        this.setData({
            currentTab: o,
            couponList: []
        }), this._getList(o);
    },
    _getList: function(t) {
        var e = this;
        i.G({
            url: "/apis/home/user.Coupon/getList",
            data: {
                uid: o.getUid(),
                card_id: o.getCardid(),
                size: 999,
                state: t
            },
            success: function(o) {
                var t = o.data.item;
                t.forEach(function(o, t) {
                    if (o.remain = parseInt(100 * (o.coupon_info.grant_num / o.coupon_info.num).toFixed(2)), 
                    o.coupon_info.dotcount = 10 * o.coupon_info.discount % 10, o.coupon_info.discount = parseInt(o.coupon_info.discount), 
                    o.open = !0, 1 == o.coupon_info.type) o.topage = "/pages/shop/index"; else if (2 == o.coupon_info.type) {
                        o.coupon_info.value.split(",").length;
                        o.topage = "/pages/goodsList/list/index?type=" + o.coupon_info.type + "&value=" + o.coupon_info.value;
                    } else {
                        var e = o.coupon_info.value.split(","), i = e.length;
                        o.topage = i > 3 ? "/pages/goodsList/list/index?type=" + o.coupon_info.type + "&value=" + o.coupon_info.value : "/pages/goodsDetail/detail/index?id=" + e[1];
                    }
                    "string" == typeof o.expire_note && (o.open = !1);
                }), e.setData({
                    dataLoaded: !0,
                    couponList: t
                });
            }
        });
    }
}));
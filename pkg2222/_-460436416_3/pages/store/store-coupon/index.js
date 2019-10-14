function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/underscore")), o = (t(require("../../../wxParse/wxParse")), 
getApp(), require("../../../utils/requestUtil")), e = require("../../../utils/data"), i = require("../../../utils/util");

Page({
    data: {
        store_id: 0,
        list_type: "",
        coupon_data: !1
    },
    onLoad: function(t) {
        var a = this, o = t.store_id;
        this.data.store_id = o;
        var e = t.list_type;
        this.data.list_type = e, a.setData({
            list_type: e
        }), a.getSource();
    },
    getSource: function() {
        var t = this;
        1 == t.data.list_type ? t.getCoupons() : 2 == t.data.list_type && t.getMyCoupons();
    },
    getCoupons: function() {
        var t = this, a = t.data.store_id;
        o.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getCoupons.html", {
            store_id: a
        }, function(a) {
            t.data.coupon_data = a, t.setData({
                coupon_data: a
            });
        }, this);
    },
    getMyCoupons: function() {
        var t = this;
        o.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getMyCoupons.html", {
            available: 1
        }, function(a) {
            t.onDataHandler(a), t.data.coupon_data = a, t.setData({
                coupon_data: a
            });
        });
    },
    receiveCoupon: function(t) {
        var a = this, i = t.currentTarget.dataset.id;
        o.get(e.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/goCoupon.html", {
            id: i
        }, function(t) {
            a.getSource(), wx.showToast({
                title: "领取成功！",
                icon: "success"
            });
        }, a, {
            isShowLoading: !1
        });
    },
    writeOffCoupon: function(t) {
        var a = this, i = t.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "确认在线下使用该优惠券吗？",
            success: function(t) {
                t.confirm && o.get(e.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/writeOff.html", {
                    id: i
                }, function(t) {
                    a.getSource(), wx.showToast({
                        title: "使用成功",
                        icon: "success"
                    });
                });
            }
        });
    },
    onDataHandler: function(t) {
        (0, a.default)(t).map(function(t) {
            return t.use_start_date = i.format(1e3 * t.use_start_time, "yyyy-MM-dd"), t.use_end_date = i.format(1e3 * t.use_end_time, "yyyy-MM-dd"), 
            t;
        });
    },
    show_card_info: function(t) {
        var a = this, o = t.currentTarget.dataset.index, e = a.data.coupon_data;
        if (e[o].is_show_info && 1 == e[o].is_show_info) for (var i in e) e[i].is_show_info = 0; else {
            for (var i in e) i != o && (e[i].is_show_info = 0);
            e[o].is_show_info = 1;
        }
        a.data.coupon_data = e, a.setData({
            coupon_data: a.data.coupon_data
        });
    },
    onShareAppMessage: function() {
        return {
            title: "优惠券",
            desc: "优惠券",
            path: "pages/store/store-coupon/index?list_type=1&store_id=".that.data.store_id
        };
    }
});
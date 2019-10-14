var t = getApp(), e = require("../../utils/util.js"), a = require("../../utils/common.js"), i = require("../../common/PageBase.js"), o = require("../../utils/ajax.js");

Page(a.extendPage(i, {
    data: {
        dataLoaded: !1,
        hasMobile: 0,
        couponList: []
    },
    onLoad: function(e) {
        var i = this, o = this;
        a.initApp({
            loginSuc: function() {
                var s = t.getTabbar(), n = a.isShowtab("coupon");
                e.card_id && (i.data.card_id = e.card_id), "" != t.getUInfo().mobile && o.setData({
                    hasMobile: 1
                }), o.setData({
                    tabbar: s,
                    isShowTab: n
                }), o._getList();
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this._getList(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {},
    _getList: function(e) {
        var a = this;
        o.G({
            url: "/apis/home/card.Coupon/getList",
            data: {
                card_id: t.getCardid() || this.data.card_id,
                page: 1,
                size: 999
            },
            success: function(t) {
                var i = t.data.item;
                i.forEach(function(t, e) {
                    if (1 == t.has && "1" == t.time_type) {
                        var a = t.exist_coupon.end_time_fmt.split(" ")[0];
                        t.overtime = a, console.log(e + "---", t.overtime);
                    }
                    if (t.remain = parseInt(100 * (t.grant_num / t.num).toFixed(2)), t.dotcount = 10 * t.discount % 10, 
                    t.discount = parseInt(t.discount), 1 == t.type) t.topage = "/pages/shop/index"; else if (2 == t.type) {
                        t.value.split(",").length;
                        t.topage = "/pages/goodsList/list/index?type=" + t.type + "&value=" + t.value;
                    } else {
                        var i = t.value.split(","), o = i.length;
                        t.topage = o > 3 ? "/pages/goodsList/list/index?type=" + t.type + "&value=" + t.value : "/pages/goodsDetail/detail/index?id=" + i[1];
                    }
                }), a.setData({
                    dataLoaded: !0,
                    couponList: i
                }), e && e();
            },
            fail: function() {
                e && e();
            }
        });
    },
    _getmobile: function(e) {
        var a = e.detail, i = a.errMsg, s = a.iv, n = a.encryptedData;
        /:ok$/.test(i) ? (this.setData({
            hasMobile: 1
        }), o.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: s,
                code: n,
                uid: t.getUid()
            },
            success: function(e) {
                t.setMobile(e.data.mobile);
            },
            fail: function(t) {}
        }), this._getCoupon(e)) : this._getCoupon(e);
    },
    _getCoupon: function(t) {
        var a = t.currentTarget.dataset.id, i = (t.currentTarget.dataset.index, this);
        o.G({
            url: "/apis/home/card.Coupon/collect",
            data: {
                coupon_id: a
            },
            success: function(t) {
                1 == t.code ? e.showWarn(t.msg) : (i._getList(), wx.showToast({
                    title: "领取成功"
                }));
            },
            fail: function(t) {
                wx.showToast({
                    title: t.msg
                });
            }
        });
    }
}));
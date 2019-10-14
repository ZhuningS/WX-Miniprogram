var e = getApp(), t = require("../../../utils/util.js"), i = require("../../../utils/common.js"), o = require("../../../common/PageBase.js"), a = require("../../../utils/ajax.js");

Page(i.extendPage(o, {
    data: {
        dataLoaded: !1,
        couponList: [],
        hasMobile: 0
    },
    onLoad: function(t) {
        var o = this;
        i.initApp({
            loginSuc: function() {
                "" != e.getUInfo().mobile && o.setData({
                    hasMobile: 1
                }), o._getList();
            }
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    _getmobile: function(i) {
        var o = i.detail, s = o.errMsg, n = o.iv, u = o.encryptedData;
        if (/:ok$/.test(s)) this.setData({
            hasMobile: 1
        }), a.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: u,
                uid: e.getUid()
            },
            success: function(t) {
                e.setMobile(t.data.mobile);
            },
            fail: function(e) {}
        }), this._getCoupon(i); else if ("getPhoneNumber:fail user deny" == s) {
            t.alert("为了您更好的购物体验，请您同意授权后再领取优惠券", function() {
                return !1;
            });
        } else t.alert(s);
    },
    _getList: function() {
        var t = this;
        a.G({
            url: "/apis/home/plugins.redpackets/index",
            data: {
                uid: e.getUid()
            },
            success: function(e) {
                var i = e.data.coupons;
                t.setData({
                    dataLoaded: !0,
                    couponList: i
                });
            }
        });
    },
    _getCoupon: function(i) {
        var o = i.currentTarget.dataset.id;
        a.P({
            url: "/apis/home/plugins.coupon/send",
            data: {
                uid: e.getUid(),
                couponid: o
            },
            success: function(e) {
                if (1 != e.code) {
                    e.data.item;
                    wx.showToast({
                        title: "领取成功"
                    });
                } else t.showWarn(e.msg);
            },
            fail: function(e) {
                wx.showToast({
                    title: e.msg
                });
            }
        });
    }
}));
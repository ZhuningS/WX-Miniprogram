var e = getApp(), i = require("../../../utils/util.js"), r = require("../../../utils/ajax.js"), a = require("../../../utils/common.js"), o = require("../../../common/PageBase.js"), t = require("../../../utils/wxUtil.js");

Page(a.extendPage(o, {
    data: {
        dataLoaded: !1,
        orderId: "",
        shop: {},
        order: {},
        totalPrice: "",
        logisticsNumber: "",
        shareTitle: "",
        teamid: ""
    },
    onLoad: function(e) {
        var i = this.options, r = i.id, a = i.isgroups;
        void 0 !== e.id && "" != e.id && (r = JSON.parse(e.id)), void 0 !== e.isgroups && 1 == e.isgroups && (a = JSON.parse(e.isgroups)), 
        this.setData({
            id: r || "",
            isgroups: a || ""
        }), this._initPage();
    },
    _initPage: function() {
        var a, o = this, t = this.data, d = t.id;
        a = 1 == t.isgroups ? "/apis/home/plugins.groups/orderinfo" : "/apis/home/order.index/info", 
        r.G({
            url: a,
            data: {
                uid: e.getUid(),
                id: d
            },
            success: function(e) {
                if (1 == e.code) return o.setData({
                    dataLoaded: !0
                }), void i.showWarn(e.msg);
                var r, a, t = e.data;
                void 0 !== t.goods[0].name && (r = t.goods[0].name, a = t.goods[0].thumb), o.setData({
                    dataLoaded: !0,
                    order: t,
                    teamid: t.teamid || "",
                    shareTitle: r || 0,
                    shareImage: a || "",
                    gid: t.goods[0].goodsid || "",
                    isseckill: t.isseckill || ""
                });
            },
            fail: function() {}
        });
    },
    _payOrder: function(a) {
        a.detail.formId;
        var o = this.data, d = o.id;
        o.actType;
        r.G({
            url: "/apis/home/order.add/orderpay",
            data: {
                uid: e.getUid(),
                id: d
            },
            success: function(e) {
                if (0 == e.code) {
                    var r = e.data, a = {
                        timeStamp: String(r.timestamp),
                        nonceStr: r.nonce_str,
                        package: r.package,
                        paySign: r.sign
                    };
                    a.success = function() {
                        wx.redirectTo({
                            url: "/pages/my/myOrderList/orderList"
                        });
                    }, a.fail = function() {
                        i.showWarn("支付失败");
                    }, t.wxPay(a);
                } else i.showWarn(e.msg);
            },
            fail: function() {}
        });
    },
    _applyRefund: function(e) {
        var r = e.detail.formId, o = this.data, t = o.actType, d = o.groupBuyState;
        if (a.submitForm(r), 1 == t && 1 != d) return i.alert("拼团成功方才可申请退款!");
        i.alert("请联系商家退款!");
    },
    _goToLogistics: function(e) {
        var i = this.data, r = i.logisticsNumber, a = i.orderId, o = i.order, t = o.order_type, d = o.delivery_id;
        wx.navigateTo({
            url: "/pages/orderExpressInfo/orderExpressInfo?expressNumber=" + r + "&orderId=" + a + "&orderType=" + t + "&deliveryId=" + d
        });
    },
    _confirmTakeGoods: function(e) {
        var a = this;
        e.detail.formId;
        i.confirm("您是否确定收货？", function() {
            r.P("/openapi/CHome/confirmTakeDelivery", {
                orderId: a.data.orderId
            }, function(e) {
                wx.redirectTo({
                    url: "/pages/orderDetail/orderDetail?orderId=" + a.data.orderId
                });
            });
        });
    },
    _jump: function(e) {
        a.jump(e);
    },
    onShareAppMessage: function(i) {
        var r = this, a = e.getUid() + "_" + e.getCardid(), o = r.data.shareTitle, t = r.data.shareImage, d = "/pages/goodsDetail/detailGroup/index?id=" + r.data.gid + "&invite=" + a;
        return console.log(d), {
            title: o,
            imageUrl: t,
            path: d,
            success: function(e) {},
            fail: function(e) {}
        };
    }
}));
getApp();

var e = require("../../../utils/requestUtil"), r = require("../../../utils/data");

Page({
    data: {
        is_orderInfo_show: 0,
        order_number: ""
    },
    onLoad: function(e) {},
    formSubmit: function(e) {
        var r = this, o = e.detail.value.order_number;
        o && (r.data.order_number = o, r.getOrderInfo());
    },
    scanCode: function() {
        var e = this;
        wx.scanCode({
            success: function(r) {
                e.data.order_number = r.result, e.getOrderInfo();
            }
        });
    },
    getOrderInfo: function() {
        var o = this, t = this;
        e.get(r.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/getOrderInfo.html", {
            order_number: t.data.order_number
        }, function(e) {
            var r = o;
            1 == e.order_type && 1 == e.order_status ? r.setData({
                oinfo: e,
                is_orderInfo_show: 1
            }) : wx.showModal({
                title: "提示",
                content: "无效的订单状态",
                showCancel: !1,
                success: function(e) {}
            });
        });
    },
    sureChargeOff: function() {
        this.change_order_status_or_show();
    },
    cancel: function() {
        this.setData({
            is_orderInfo_show: 0
        });
    },
    change_order_status_or_show: function() {
        var o = this;
        e.get(r.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/changeOrderStatusOrShow.html", {
            order_number: o.data.order_number,
            change_type: 2
        }, function(e) {
            wx.showModal({
                title: "提示",
                content: "核销成功",
                showCancel: !1,
                success: function(e) {
                    o.setData({
                        is_orderInfo_show: 0
                    });
                }
            });
        }, {
            complete: o.changeComplete()
        });
    },
    changeComplete: function(e) {
        console.log(e);
    }
});
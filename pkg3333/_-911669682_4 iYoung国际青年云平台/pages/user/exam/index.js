getApp();

var e = require("../../../utils/requestUtil"), o = require("../../../utils/data");

Page({
    data: {
        is_orderInfo_show: 0,
        order_number: "",
        oinfo: {}
    },
    onLoad: function(e) {},
    formSubmit: function(e) {
        var o = this, t = e.detail.value.order_number;
        t && (o.data.order_number = t, o.getOrderInfo());
    },
    scanCode: function() {
        var e = this;
        wx.scanCode({
            success: function(o) {
                e.data.order_number = o.result, e.getOrderInfo();
            }
        });
    },
    getOrderInfo: function() {
        var t = this, n = this;
        e.post(o.duoguan_host_api_url + "/index.php?s=/addon/Examuser/ExamApi/exam.html", {
            order_number: n.data.order_number
        }, function(e) {
            var o = t;
            e ? o.setData({
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
        var t = this;
        e.post(o.duoguan_host_api_url + "/index.php?s=/addon/Examuser/ExamApi/examChange.html", {
            order_number: t.data.order_number
        }, function(e) {
            wx.showModal({
                title: "提示",
                content: "核销成功",
                showCancel: !1,
                success: function(e) {
                    t.setData({
                        is_orderInfo_show: 0
                    });
                }
            });
        }, {
            complete: t.changeComplete()
        });
    },
    changeComplete: function(e) {
        console.log(e);
    }
});
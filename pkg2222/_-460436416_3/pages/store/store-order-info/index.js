getApp(), require("../../../utils/functionData.js");

var t = require("../../../utils/requestUtil"), e = require("../../../utils/data"), o = require("../../../utils/qrcode");

require("../store-common/common");

Page({
    data: {
        this_order_id: 0,
        oinfo: [],
        store_data: [],
        store_id: 0,
        glo_is_load: !0,
        is_show_pay_type: !1,
        pay_type_index: 1
    },
    onLoad: function(t) {
        var e = this, o = t.oid;
        e.setData({
            this_order_id: o
        }), e.getOrderInfo(), e.getStoreConfig();
    },
    getStoreConfig: function() {
        var o = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreConfig.html", {}, function(t) {
            o.setData({
                store_type: t.store_type
            });
        });
    },
    go_store_info_bind: function(t) {
        var e = t.currentTarget.id;
        wx.navigateTo({
            url: "../store-info/index?store_id=" + e
        });
    },
    getOrderInfo: function() {
        var o = this, a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/getOrderInfo.html", {
            oid: a.data.this_order_id
        }, function(t) {
            var e = o;
            e.createQrCode(t.order_sn, "mycanvas"), e.setData({
                oinfo: t,
                glo_is_load: !1
            }), e.data.store_id = t.store_id, e.getStoreInfo();
        });
    },
    getStoreInfo: function() {
        var o = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getStoreBasicInfo.html", {
            store_id: o.data.store_id
        }, function(t) {
            var e = t;
            o.data.store_data = e, o.setData({
                store_data: e,
                is_show: !0
            });
        }, this, {
            isShowLoading: !1
        });
    },
    call_phone_bind: function() {
        var t = this;
        console.log(t.data.oinfo.store_con_mobile), wx.makePhoneCall({
            phoneNumber: t.data.store_data.store_con_mobile
        });
    },
    order_go_comment_bind: function(t) {
        var e = t.currentTarget.id;
        wx.navigateTo({
            url: "../store-order-comment/index?oid=" + e
        });
    },
    change_order_status_or_show: function(o) {
        var a = this, n = o.currentTarget.id, i = o.currentTarget.dataset.change_type, r = "";
        1 == i ? r = "确认要取消订单吗？" : 2 == i ? r = 1 == a.data.oinfo.order_type ? "确认已领取吗？" : "确认送达吗？" : 3 == i && (r = "确定要删除订单吗？"), 
        wx.showModal({
            title: "提示",
            content: r,
            success: function(o) {
                1 == o.confirm && (1 == i || 3 == i ? wx.navigateBack({
                    delta: 1
                }) : t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/changeOrderStatusOrShow.html", {
                    oid: n,
                    change_type: i
                }, function(t) {
                    a.setData({
                        page_index: 1
                    }), a.getOrderInfo();
                }));
            }
        });
    },
    order_go_pay_bind: function(t) {
        var e = this, o = t.currentTarget.id;
        e.setData({
            buttonIsDisabled: !0,
            submitIsLoading: !0
        }), e.orderPay(o);
    },
    orderPay: function(o) {
        var a = this, n = a.data.pay_type_index;
        wx.showModal({
            title: "提示",
            content: "确定支付吗",
            success: function(i) {
                i.confirm ? t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StorePayApi/order_pay.html", {
                    oid: o,
                    pay_id: n
                }, function(t) {
                    2 == t.type ? wx.navigateTo({
                        url: "/pages/user/mcard/recharge"
                    }) : 3 == t.type || 1 == t.type ? wx.showModal({
                        title: "提示",
                        content: "订单支付成功",
                        confirmText: "确定",
                        showCancel: !1,
                        success: function(t) {}
                    }) : wx.requestPayment({
                        timeStamp: t.timeStamp,
                        nonceStr: t.nonceStr,
                        package: t.package,
                        signType: "MD5",
                        paySign: t.paySign,
                        complete: function() {}
                    }), a.getOrderInfo();
                }, {
                    complete: a.orderPayComplete()
                }) : a.setData({
                    btn_submit_disabled: !1,
                    submitIsLoading: !1
                });
            }
        });
    },
    orderPayComplete: function() {
        this.setData({
            buttonIsDisabled: !1,
            submitIsLoading: !1
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        t.setData({
            this_page: 1
        }), t.getOrderInfo(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    createQrCode: function(t, e) {
        o.qrApi.init(t, e, 10, 10, 120, 120);
    },
    get_location_bind: function() {
        var t = this, e = t.data.oinfo.store_gps_lat, o = t.data.oinfo.store_gps_lng;
        wx.openLocation({
            latitude: parseFloat(e),
            longitude: parseFloat(o),
            scale: 18,
            name: t.data.oinfo.store_name,
            address: t.data.oinfo.store_address
        });
    },
    show_paytype_bind: function() {
        var t = this;
        t.setData({
            is_show_pay_type: !t.data.is_show_pay_type
        });
    },
    payTypeChange: function(t) {
        var e = t.detail.value;
        this.setData({
            pay_type_index: e
        });
    }
});
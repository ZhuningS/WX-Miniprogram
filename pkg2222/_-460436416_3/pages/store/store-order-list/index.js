require("../../../utils/functionData.js");

var e = require("../../../utils/requestUtil"), t = require("../../../utils/data");

getApp();

Page({
    data: {
        postlist: [],
        this_weiba_id: 0,
        hasMore: !1,
        showLoading: !1,
        isScrollY: !0,
        page_index: 1,
        pagesize: 10,
        this_nav_name: "index",
        this_is_jinghua: 0,
        this_finish_page: 0,
        glo_is_load: !0,
        orderListArr: [],
        is_show_load_bg: !0
    },
    user_orderinfo_bind: function(e) {
        var t = e.currentTarget.id;
        wx.navigateTo({
            url: "../store-order-info/index?oid=" + t
        });
    },
    order_go_comment_bind: function(e) {
        var t = e.currentTarget.id;
        wx.navigateTo({
            url: "../store-order-comment/index?oid=" + t
        });
    },
    delete_user_order: function(r) {
        var a = this, i = r.currentTarget.id;
        wx.showModal({
            title: "提示",
            content: "确认要删除该订单吗?",
            success: function(r) {
                1 == r.confirm && e.get(t.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/deleteUserOrder.html", {
                    oid: i
                }, function(e) {
                    a.setData({
                        page_index: 1
                    }), a.getUserOrderList();
                });
            }
        });
    },
    change_order_status_or_show: function(r) {
        var a = this, i = r.currentTarget.id, o = r.currentTarget.dataset.change_type, n = r.currentTarget.dataset.order_type, s = "";
        1 == o ? s = "确认要取消订单吗？" : 2 == o ? 1 == n ? s = "确认已领取吗？" : 2 == n && (s = "确认已送达吗？") : 3 == o && (s = "确定要删除订单吗？"), 
        wx.showModal({
            title: "提示",
            content: s,
            success: function(r) {
                1 == r.confirm && e.get(t.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/changeOrderStatusOrShow.html", {
                    oid: i,
                    change_type: o
                }, function(e) {
                    a.setData({
                        page_index: 1
                    }), a.getUserOrderList();
                });
            }
        });
    },
    getUserOrderList: function() {
        var r = this;
        e.get(t.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getUserOrderList.html", {
            pagesize: r.data.pagesize,
            pagenum: r.data.page_index
        }, function(e) {
            1 == r.data.page_index ? (r.data.orderListArr.splice(0, r.data.orderListArr.length), 
            e.length > 0 && (r.data.orderListArr = r.data.orderListArr.concat(e))) : e.length > 0 && (r.data.orderListArr = r.data.orderListArr.concat(e)), 
            r.setData({
                postlist: r.data.orderListArr,
                is_show_load_bg: !1,
                glo_is_load: !1
            }), r.data.page_index = parseInt(r.data.page_index) + 1, wx.hideToast();
        });
    },
    onShow: function() {
        var e = this;
        e.setData({
            page_index: 1
        }), e.getUserOrderList();
    },
    onPullDownRefresh: function() {
        var e = this;
        e.data.page_index = 1, e.getUserOrderList(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function(e) {
        var t = this;
        t.data.page_index > 1 && t.getUserOrderList();
    },
    order_go_pay_bind: function(e) {
        var t = this, r = e.currentTarget.id;
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), t.setData({
            buttonIsDisabled: !0,
            submitIsLoading: !0
        }), t.orderPay(r);
    },
    orderPay: function(r) {
        var a = this;
        e.get(t.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/orderPay.html", {
            oid: r
        }, function(e) {
            wx.hideToast(), a.setData({
                buttonIsDisabled: !1,
                submitIsLoading: !1
            }), wx.requestPayment({
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                package: e.package,
                signType: "MD5",
                paySign: e.paySign,
                complete: function() {
                    a.getUserOrderList();
                }
            });
        }, {
            complete: a.orderPayComplete()
        });
    },
    orderPayComplete: function() {
        this.setData({
            btn_submit_disabled: !1,
            submitIsLoading: !1
        });
    }
});
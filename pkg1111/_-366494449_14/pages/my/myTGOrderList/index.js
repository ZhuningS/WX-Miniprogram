var e = getApp(), t = require("../../../utils/util.js"), a = require("../../../utils/ajax.js"), i = require("../../../utils/common.js"), r = require("../../../common/PageBase.js"), n = require("../../../utils/pagination.js");

Page(i.extendPage(r, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        currentTab: "group"
    },
    onLoad: function(t) {
        var a = this;
        t.id;
        i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                a.setData({
                    isLogin: !!e.getUid(),
                    userInfo: e.getUInfo()
                }), a._getList({
                    type: "group"
                });
            }
        });
    },
    _getList: function(t) {
        var i = this;
        t.status;
        this._pagination = new n({
            page: this,
            scope: "pagination"
        }).init({
            rendData: function(r, n) {
                a.G({
                    url: "/apis/home/order.groups/fetch",
                    data: {
                        uid: e.getUid(),
                        type: t.type,
                        page: r,
                        size: 999
                    },
                    success: function(e) {
                        var t = e.data.item, a = i.data.orderList || [];
                        i.setData({
                            dataLoaded: !0,
                            list: 1 == r ? t : a.concat(t)
                        }), n && n(t.length);
                    }
                });
            }
        });
    },
    _tabSwitch: function(e) {
        var t = e.currentTarget.dataset.current;
        e.detail.formId;
        this._toTab(t);
    },
    _toTab: function(e, t) {
        this.setData({
            currentTab: e,
            list: [],
            page: 1,
            dataLoaded: !1
        }), this._getList({
            type: e
        });
    },
    _cancelOrder: function(i) {
        var r = this, n = i.currentTarget.dataset.oid;
        a.G({
            url: "/apis/home/order.common/cancel",
            data: {
                uid: e.getUid(),
                oid: n
            },
            success: function(e) {
                1 != e.code ? (t.showWarn("取消订单成功"), r._getList({
                    type: "pay"
                })) : t.showWarn(e.message);
            }
        });
    },
    _comfirmOrder: function(i) {
        var r = this, n = i.currentTarget.dataset.oid;
        a.G({
            url: "/apis/home/order.groups/receive",
            data: {
                uid: e.getUid(),
                oid: n
            },
            success: function(e) {
                1 != e.code ? (t.showWarn("确认收货成功"), r._getList({
                    type: "receive"
                })) : t.showWarn(e.message);
            }
        });
    },
    _refund: function(e) {
        var t = e.currentTarget.dataset.oid, a = e.currentTarget.dataset.money;
        wx.navigateTo({
            url: "/pages/my/myRefund/index?id=" + t + "&money=" + a + "&isgroup=1"
        });
    },
    _getDeliveryno: function(e) {
        var t = e.currentTarget.dataset.deliveryname, a = e.currentTarget.dataset.deliveryno;
        wx.navigateTo({
            url: "/pages/order/orderExpressInfo/index?deliveryname=" + t + "&deliveryno=" + a
        });
    }
}));
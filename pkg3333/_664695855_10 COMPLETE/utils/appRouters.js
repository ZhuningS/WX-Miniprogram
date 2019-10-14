var t = require("../config").zbjUrl, e = function(t, e, i) {
    wx.request({
        url: e,
        method: t.method || "GET",
        data: t.data || {},
        header: {
            Accept: "application/json",
            "content-type": t.header || "application/json"
        },
        success: function(e) {
            t.success && t.success(e);
        },
        fail: function(e) {
            t.fail && t.fail(e);
        },
        complete: function(e) {
            t.complete && t.complete(e);
        }
    });
};

module.exports = {
    spaceList: function(i) {
        e(i, t + "/space/AdminCode");
    },
    getOrderList: function(i) {
        e(i, t + "/little/service/orders");
    },
    orderDetail: function(i) {
        e(i, t + "/little/service/order/detail");
    },
    cancelOrder: function(i) {
        e(i, t + "/little/service/order/close");
    },
    isBindZBJ: function(i) {
        e(i, t + "/little/have-zbj");
    },
    getCityCode: function(i) {
        e(i, t + "/little/city-location");
    },
    orderPay: function(i) {
        e(i, t + "/little/service/order/pay");
    },
    getShop: function(i) {
        e(i, t + "/shop/base");
    },
    buyService: function(i) {
        e(i, t + "/little/service/buy");
    },
    requestHotCate: function(i) {
        e(i, t + "/little/task/getPubCategoryList");
    },
    requestCategories: function(i) {
        e(i, t + "/little/task/getTaskPubData");
    },
    request2018: function(i) {
        e(i, t + "/little/task/doPublish");
    },
    sendFastTask: function(i) {
        e(i, t + "/little/task/pubSimplePublish");
    },
    cityInfo: function(t) {
        e(t, "https://www.zbj.com/index2018/getGeo");
    }
};
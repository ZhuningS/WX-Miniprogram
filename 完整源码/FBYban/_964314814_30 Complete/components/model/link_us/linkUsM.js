Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = getApp();

exports.getNewShopInfo = function(o) {
    wx.request({
        url: t.globalData.host + "coupon/org/new/info",
        method: "post",
        data: {
            orgId: t.globalData.orgId
        },
        header: {
            "content-type": "application/json"
        },
        complete: function() {},
        success: function(t) {
            var e = t.data.data;
            e && o(null, e);
        },
        fail: function(t) {
            o(null);
        }
    });
};
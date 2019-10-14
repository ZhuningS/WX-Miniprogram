Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = getApp();

exports.getIsOpenPayM = function(a, e) {
    return new Promise(function(n, o) {
        wx.request({
            url: t.globalData.host + "pay/isOpenPay",
            method: "post",
            data: a.data,
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data.data) {
                    var o = t.data.data.isOpenPay;
                    a.ele.setData({
                        isOpenPay: o
                    }), e && e(t.data.data), n();
                }
            },
            fail: function() {
                o(), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    });
};
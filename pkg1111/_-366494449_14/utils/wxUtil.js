require("./util.js");

var c = {
    wxPay: function(c) {
        var e = this;
        wx.requestPayment({
            timeStamp: c.timeStamp,
            nonceStr: c.nonceStr,
            package: c.package,
            signType: "MD5",
            paySign: c.paySign,
            success: function(n) {
                "function" == typeof c.success && c.success(), e.wxPaySuccess(c);
            },
            fail: function(n) {
                "function" == typeof c.fail && c.fail(), e.wxPayFail(c);
            }
        });
    },
    wxPaySuccess: function(c) {},
    wxPayFail: function(c, e) {}
};

module.exports = c;
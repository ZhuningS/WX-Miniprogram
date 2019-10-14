require("encrypt.js");

var e = 1400136350;

module.exports = {
    init: function(s) {
        e = s.sdkappid;
    },
    login: function(s) {
        var t = "user" + parseInt(1e6 * Math.random(0, 1));
        wx.request({
            url: "https://sxb.qcloud.com/sxb_dev/?svc=doll&cmd=fetchsig",
            data: {
                id: t,
                appid: e
            },
            method: "post",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                s.success && s.success({
                    Identifier: t,
                    UserSig: e.data.data.userSig
                });
            },
            fail: function(e) {
                s.error && s.error(e);
            }
        });
    }
};
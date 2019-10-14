function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/requestUtil")), a = e(require("../../../wxParse/wxParse.js")), n = require("../../../utils/data");

Page({
    data: {},
    onLoad: function(e) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var e = this;
        t.default.get(n.duoguan_host_api_url + "/index.php?s=/addon/DuoguanUser/Api/getCompany.html", {}, function(t) {
            t.isLoaded = !0, e.setData(t), a.default.wxParse("content", "html", t.content, e);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onCallPhoneTap: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel
        });
    },
    onCopyTap: function(e) {
        var t = e.currentTarget.dataset.value;
        wx.setClipboardData({
            data: t,
            success: function(e) {
                wx.showToast({
                    title: "复制成功！"
                });
            }
        });
    },
    onShareAppMessage: function() {}
});
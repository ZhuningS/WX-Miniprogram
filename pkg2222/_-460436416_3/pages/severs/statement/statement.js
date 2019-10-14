function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../../utils/underscore"));

var i = e(require("../../../utils/requestUtil")), t = (e(require("../../../utils/util")), 
e(require("../../../utils/listener")), e(require("../urls")));

Page({
    data: {
        config: null
    },
    onLoad: function(e) {
        this.onPullDownRefresh();
    },
    onPullDownRefresh: function() {
        var e = this, n = {
            name: "config",
            cid: this.data.cid
        };
        i.default.get(t.default.config.load, n, function(i) {
            var t = i.config;
            e.setData({
                config: t
            });
        });
    },
    onBackTap: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});
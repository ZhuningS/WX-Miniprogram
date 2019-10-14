var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("/config/index.js")).default.domain;

App({
    onLaunch: function() {
        wx.getStorageSync("nickName") || wx.reLaunch({
            url: "pages/guide/guide"
        });
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.globalData.statusBarHeight = t.statusBarHeight;
            }
        });
    },
    getOpenId: function() {
        var t = this;
        return new Promise(function(n, a) {
            wx.login({
                success: function(a) {
                    wx.request({
                        url: e + "/focustree/wx/login",
                        data: {
                            code: a.code
                        },
                        method: "GET",
                        success: function(e) {
                            t.globalData.thirdSession = e.data.thirdSession, t.globalData.openId = e.data.openId, 
                            n();
                        }
                    });
                }
            });
        });
    },
    globalData: {
        userInfo: null,
        statusBarHeight: "",
        openId: "",
        thirdSession: ""
    }
});
var n = require("./config");

App({
    onLaunch: function() {
        var n = wx.getStorageSync("logs") || [];
        n.unshift(Date.now()), wx.setStorageSync("logs", n);
    },
    getUserInfo: function(n) {
        var o = this;
        this.globalData.userInfo ? "function" == typeof n && n(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(t) {
                        console.log(t), o.globalData.userInfo = t.userInfo, "function" == typeof n && n(o.globalData.userInfo);
                    }
                });
            }
        });
    },
    addHistory: function(n, o) {
        if (-1 == n.indexOf(o)) n.unshift(o); else {
            var t = n.indexOf(o);
            n.splice(t, 1), n.unshift(o);
        }
        n.length > 8 && (n = n.splice(0, 8));
        try {
            wx.setStorageSync("history", n);
        } catch (n) {
            console.log("历史搜索数据出错");
        }
    },
    globalData: {
        userInfo: null,
        zbjUrl: n.zbjUrl
    }
});
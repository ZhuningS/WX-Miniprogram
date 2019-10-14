var e = getApp();

Page({
    data: {},
    onLoad: function(e) {
        this.Refresh();
    },
    Refresh: function(a) {
        var o = this;
        wx.login({
            success: function(a) {
                console.log("这是登录所需要的code"), console.log(a.code);
                var t = a.code;
                wx.setStorageSync("code", t), wx.getUserInfo({
                    success: function(a) {
                        var n = a.userInfo.nickName, c = a.userInfo.avatarUrl;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: t
                            },
                            success: function(a) {
                                var t = c, i = n, s = a.data.openid;
                                e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: s,
                                        img: t,
                                        name: i
                                    },
                                    success: function(a) {
                                        console.log(a);
                                        var t = a.data;
                                        e.util.request({
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemytixian&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            data: {
                                                user_id: a.data.id
                                            },
                                            success: function(e) {
                                                console.log(e);
                                                var a = 0;
                                                for (var n in e.data) a += Number(e.data[n].tx_cost);
                                                console.log(a);
                                                var c = Number(t.money);
                                                c = c.toFixed(2), console.log(c), o.setData({
                                                    money: c
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    detailed2: function(e) {
        wx.navigateTo({
            url: "detailed?state=2",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    detailed3: function(e) {
        wx.navigateTo({
            url: "detailed?state=1",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    cash: function(e) {
        wx.navigateTo({
            url: "cash?state=1",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    onReady: function() {},
    onShow: function() {
        this.Refresh();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
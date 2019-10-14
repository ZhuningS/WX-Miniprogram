var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/index.js")), t = getApp(), n = e.default.domain;

Page({
    data: {
        top: 2 * t.globalData.statusBarHeight + 88,
        list: [ {
            bg: "../../assets/images/lead_bg_one@3x.jpg",
            master: "../../assets/images/lead_one@3x.png",
            title: "种下一粒种子",
            descTop: "每当你需要专注的时候",
            descBottom: "就种下一粒种子吧"
        }, {
            bg: "../../assets/images/lead_bg_two@3x.jpg",
            master: "../../assets/images/lead_two@3x.png",
            title: "保持专注",
            descTop: "接下来的时间内，在你专注工作的同时",
            descBottom: "种子会长成一棵大树"
        }, {
            bg: "../../assets/images/lead_bg_three@3x.jpg",
            master: "../../assets/images/lead_three@3x.png",
            title: "培养你的专注森林",
            descTop: "每天都会有一片你的专注森林",
            descBottom: "记录你曾经的专注时光"
        } ]
    },
    goIndex: function(e) {
        if (console.log(e), e.detail.iv) if (console.log("让这个狗逼去注册"), wx.getStorageSync("nickName") && wx.getStorageSync("nickName") === e.detail.userInfo.nickName) wx.reLaunch({
            url: "../index/index"
        }); else {
            var a = {
                thirdSession: t.globalData.thirdSession,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv
            };
            wx.request({
                url: n + "/focustree/wx/dealUserInfo",
                data: a,
                method: "POST",
                success: function(t) {
                    wx.setStorageSync("nickName", e.detail.userInfo.nickName), wx.setStorageSync("userInfo", e.detail.userInfo), 
                    wx.reLaunch({
                        url: "../index/index"
                    });
                }
            });
        } else console.log("这狗逼没授权!!!");
    },
    onLoad: function(e) {
        t.getOpenId();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
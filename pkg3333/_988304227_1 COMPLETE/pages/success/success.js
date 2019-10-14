var e = getApp();

Page({
    data: {
        top: 2 * e.globalData.statusBarHeight + 88,
        headerHeight: 2 * e.globalData.statusBarHeight,
        img: ""
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    onLoad: function(e) {
        var a;
        switch (parseInt(e.teeState)) {
          case 1:
            a = "../../assets/images/maple_one@3x.png";
            break;

          case 2:
            a = "../../assets/images/maple_two@3x.png";
            break;

          case 3:
            a = "../../assets/images/maple_three@3x.png";
            break;

          case 4:
            a = "../../assets/images/maple_four@3x.png";
        }
        this.setData({
            img: a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var a = new Date().getFullYear(), t = new Date().getMonth() + 1, n = new Date().getDate();
        t < 10 && (t = "0" + t), n < 10 && (n = "0" + n);
        var s = a + "-" + t + "-" + n;
        return {
            title: "我刚刚养成了一颗健康的树，拒当低头族，快来跟我一起种树吧～",
            path: "pages/sharePage/sharePage?openId=" + e.globalData.openId + "&time=" + s + "&nickName=" + wx.getStorageSync("nickName"),
            imageUrl: "../../assets/images/sharepic.png"
        };
    }
});
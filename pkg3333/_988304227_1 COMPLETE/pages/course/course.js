var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/index.js")), t = getApp(), a = e.default.domain;

Page({
    data: {
        top: 2 * t.globalData.statusBarHeight + 88,
        headerHeight: 2 * t.globalData.statusBarHeight,
        list: [],
        nullData: !0
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    init: function() {
        var e = this, n = {
            createOpenId: t.globalData.openId
        };
        wx.request({
            url: a + "/focustree/myProcess",
            data: n,
            method: "GET",
            success: function(t) {
                if (console.log(t), t.data.process.length <= 0) e.setData({
                    nullData: !1
                }); else {
                    for (var a = t.data.process, n = 0; n < a.length; n++) {
                        var s = a[n].date.replace(/-/g, "/"), i = new Date(s).getMonth() + 1, o = new Date(s).getDate(), r = new Date(s).getDay(), g = void 0;
                        1 == r ? g = "周一" : 2 == r ? g = "周二" : 3 == r ? g = "周三" : 4 == r ? g = "周四" : 5 == r ? g = "周五" : 6 == r ? g = "周六" : 0 == r && (g = "周日"), 
                        a[n].dateTime = g + " / " + i + "月" + o + "日";
                    }
                    for (var l = 0; l < a.length; l++) for (var u = 0; u < a[l].trees.length; u++) {
                        var c = a[l].trees[u].focusTime.split(" ")[1].substring(0, 5), d = a[l].trees[u].finishTime.split(" ")[1].substring(0, 5);
                        a[l].trees[u].startTime = c, a[l].trees[u].endTime = d, 1 == a[l].trees[u].treeName ? a[l].trees[u].img = "../../assets/images/maple_one@3x.png" : 2 == a[l].trees[u].treeName ? a[l].trees[u].img = "../../assets/images/maple_two@3x.png" : 3 == a[l].trees[u].treeName ? a[l].trees[u].img = "../../assets/images/maple_three@3x.png" : 4 == a[l].trees[u].treeName ? a[l].trees[u].img = "../../assets/images/maple_four@3x.png" : a[l].trees[u].img = "../../assets/images/dead tree_big@3x.png";
                    }
                    e.setData({
                        list: a
                    });
                }
                wx.hideLoading();
            }
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "加载中"
        });
        var a, n = this;
        wx.createSelectorQuery().select(".container").boundingClientRect(function(e) {
            a = 2 * e.height - (n.data.top + 68), n.setData({
                height: a
            });
        }).exec(), t.getOpenId().then(function() {
            n.init();
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
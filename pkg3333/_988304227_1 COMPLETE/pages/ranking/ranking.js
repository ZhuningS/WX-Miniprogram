var a = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../config/index.js")), t = getApp(), e = a.default.domain;

Page({
    data: {
        top: 2 * t.globalData.statusBarHeight + 88,
        headerHeight: 2 * t.globalData.statusBarHeight,
        currPage: 1,
        list: [],
        listData: "",
        nullData: !0
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    loadMore: function() {
        var a = this.data.currPage;
        a++, this.setData({
            currPage: a
        }), this.init();
    },
    init: function() {
        var a = this, n = {
            createOpenId: t.globalData.openId,
            focusTime: this.data.dateTime,
            currPage: this.data.currPage
        };
        wx.request({
            url: e + "/focustree/getRanking",
            data: n,
            method: "GET",
            success: function(t) {
                console.log(t), t.data.rankings.length <= 0 && a.setData({
                    nullData: !1
                });
                for (var e = a.data.list, n = 0; n < t.data.rankings.length; n++) e.push(t.data.rankings[n]);
                a.setData({
                    listData: t.data.myRanking,
                    list: e
                }), wx.hideLoading();
            }
        });
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "加载中"
        });
        var t = this, e = new Date().getFullYear(), n = new Date().getMonth() + 1, i = new Date().getDate() - 1;
        n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), this.setData({
            time: e + "年" + n + "月" + i + "日"
        }), this.setData({
            dateTime: e + "-" + n + "-" + i
        }), t.init();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var a = this;
        return {
            title: "拒当低头族，快来跟我一起种树吧～",
            path: "pages/sharePage/sharePage?openId=" + t.globalData.openId + "&nickName=" + wx.getStorageSync("nickName") + "&time=" + a.data.dateTime
        };
    }
});
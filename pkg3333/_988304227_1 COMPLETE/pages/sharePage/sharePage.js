var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/index.js")), t = getApp(), a = e.default.domain;

Page({
    data: {
        top: 2 * t.globalData.statusBarHeight + 88,
        headerHeight: 2 * t.globalData.statusBarHeight,
        teeList: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
        forestList: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
        list: ""
    },
    init: function(e) {
        var t = this, s = {
            createOpenId: this.data.openId,
            focusTime: e
        };
        wx.request({
            url: a + "/focustree/getMyFocus",
            data: s,
            method: "GET",
            success: function(e) {
                t.setData({
                    list: e.data
                }), t.repeatTee();
            }
        });
    },
    repeatTee: function() {
        var e = this.data.teeList, t = this.data.forestList, a = this.data.list.trees;
        console.log(a);
        for (var s = 0; s < a.length; s++) {
            var n = Math.floor(Math.random() * e.length);
            1 == a[s].treeName ? t[e[n]].src = "../../assets/images/maple_one@3x.png" : 2 == a[s].treeName ? t[e[n]].src = "../../assets/images/maple_two@3x.png" : 3 == a[s].treeName ? t[e[n]].src = "../../assets/images/maple_three@3x.png" : 4 == a[s].treeName && (t[e[n]].src = "../../assets/images/maple_four@3x.png"), 
            e.splice(n, 1);
        }
        this.setData({
            forestList: t
        });
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    onLoad: function(e) {
        var t = e.time.split("-");
        this.setData({
            dateTime: t[0] + "月" + t[1] + "月" + t[2] + "日",
            openId: e.openId,
            title: e.nickName
        }), this.init(e.time);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
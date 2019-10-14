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
        var i = this, s = {
            createOpenId: t.globalData.openId,
            focusTime: e
        };
        wx.request({
            url: a + "/focustree/getMyFocus",
            data: s,
            method: "GET",
            success: function(e) {
                i.setData({
                    list: e.data
                }), i.repeatTee();
            }
        });
    },
    repeatTee: function() {
        var e = this.data.teeList, t = this.data.forestList, a = this.data.list.trees;
        console.log(a);
        for (var i = 0; i < a.length; i++) {
            var s = Math.floor(Math.random() * e.length);
            1 == a[i].treeName ? t[e[s]].src = "../../assets/images/maple_one@3x.png" : 2 == a[i].treeName ? t[e[s]].src = "../../assets/images/maple_two@3x.png" : 3 == a[i].treeName ? t[e[s]].src = "../../assets/images/maple_three@3x.png" : 4 == a[i].treeName && (t[e[s]].src = "../../assets/images/maple_four@3x.png"), 
            e.splice(s, 1);
        }
        this.setData({
            forestList: t
        }), wx.hideLoading();
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    selectTime: function(e) {
        console.log(e);
        var t = e.detail.value.split("-");
        this.setData({
            dateTime: t[0] + "年" + t[1] + "月" + t[2] + "日",
            time: e.detail.value
        }), this.init(e.detail.value);
    },
    gosharepic: function() {
        wx.reLaunch({
            url: "../sharepic/sharepic"
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "加载中"
        });
        var t = new Date().getFullYear(), a = new Date().getMonth() + 1, i = new Date().getDate();
        a < 10 && (a = "0" + a), i < 10 && (i = "0" + i), this.setData({
            dateTime: t + "月" + a + "月" + i + "日",
            time: t + "-" + a + "-" + i
        }), this.init(this.data.time);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e = this;
        return {
            title: "快来围观我的专注森林～",
            path: "pages/sharePage/sharePage?openId=" + t.globalData.openId + "&time=" + e.data.time + "&nickName=" + wx.getStorageSync("nickName"),
            imageUrl: "../../assets/images/sharepic.png"
        };
    }
});
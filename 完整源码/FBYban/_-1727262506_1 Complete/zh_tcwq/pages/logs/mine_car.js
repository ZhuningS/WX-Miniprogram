var a = getApp();

Page({
    data: {
        release: [ {
            name: "人找车",
            id: 0
        }, {
            name: "车找人",
            id: 1
        }, {
            name: "车找货",
            id: 2
        }, {
            name: "货找车",
            id: 3
        } ],
        foot: !0
    },
    onLoad: function(a) {
        this.refresh();
    },
    refresh: function(t) {
        var n = this, e = (function() {
            var a = new Date(), t = a.getMonth() + 1, n = a.getDate();
            t >= 1 && t <= 9 && (t = "0" + t), n >= 0 && n <= 9 && (n = "0" + n), a.getFullYear(), 
            a.getHours(), a.getMinutes(), a.getSeconds();
        }(), wx.getStorageSync("users").id);
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemycar&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e,
                page: 1
            },
            success: function(t) {
                console.log(t);
                for (var e in t.data) t.data[e].time = a.ormatDate(t.data[e].time).slice(5, 16), 
                t.data[e].start_time1 = t.data[e].start_time.slice(5, 10), t.data[e].start_time2 = t.data[e].start_time.slice(10, 17), 
                2 == t.data[e].is_open ? (t.data[e].class2 = "car3", t.data[e].class3 = "car4", 
                t.data[e].class4 = "car5") : (t.data[e].class2 = "", t.data[e].class3 = "", t.data[e].class4 = ""), 
                "人找车" == t.data[e].typename ? (t.data[e].class = "color1", t.data[e].class1 = "car1") : "车找人" == t.data[e].typename ? (t.data[e].class = "color2", 
                t.data[e].class1 = "car2") : "货找车" == t.data[e].typename ? (t.data[e].class = "color1", 
                t.data[e].class1 = "car1") : "车找货" == t.data[e].typename && (t.data[e].class = "color2", 
                t.data[e].class1 = "car2");
                n.setData({
                    pc: t.data
                });
            }
        });
    },
    shunfabu: function(a) {
        console.log(a);
        var t = this, n = a.currentTarget.id;
        t.setData({
            foot: !1
        }), wx.navigateTo({
            url: "../shun/shunfabu/shunfabu?id=" + n
        });
    },
    footbtn: function(a) {
        var t = this;
        0 == t.data.foot ? t.setData({
            foot: !0
        }) : t.setData({
            foot: !1
        });
    },
    carinfo: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../shun/shuninfo2/shuninfo2?id=" + t,
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    call_phone: function(a) {
        console.log(a), wx.makePhoneCall({
            phoneNumber: a.currentTarget.dataset.tel
        });
    },
    shouye: function(a) {
        wx.switchTab({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    yellow: function(a) {
        wx.reLaunch({
            url: "../shun/shun",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    settled: function(a) {
        wx.navigateTo({
            url: "../shun/shunfabu/shunfabu",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.refresh(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
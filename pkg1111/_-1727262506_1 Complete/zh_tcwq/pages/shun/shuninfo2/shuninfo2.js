var e = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var a = this;
        wx.login({
            success: function(t) {
                var a = t.code;
                wx.setStorageSync("code", a), wx.getUserInfo({
                    success: function(t) {
                        wx.setStorageSync("user_info", t.userInfo);
                        var n = t.userInfo.nickName, o = t.userInfo.avatarUrl;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: a
                            },
                            success: function(t) {
                                wx.setStorageSync("key", t.data.session_key), wx.setStorageSync("openid", t.data.openid);
                                var a = t.data.openid;
                                e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: a,
                                        img: o,
                                        name: n
                                    },
                                    success: function(e) {
                                        wx.setStorageSync("users", e.data), wx.setStorageSync("uniacid", e.data.uniacid);
                                    }
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        wx.getSetting({
                            success: function(e) {
                                0 == e.authSetting["scope.userInfo"] && wx.openSetting({
                                    success: function(e) {}
                                });
                            }
                        });
                    }
                });
            }
        }), console.log(t);
        !function() {
            var e = new Date(), t = e.getMonth() + 1, a = e.getDate();
            t >= 1 && t <= 9 && (t = "0" + t), a >= 0 && a <= 9 && (a = "0" + a), e.getFullYear(), 
            e.getHours(), e.getMinutes(), e.getSeconds();
        }();
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecarinfo&acid=" + getApp().globalData.version + "&id=1",
            cachetime: "0",
            data: {
                id: t.id
            },
            success: function(t) {
                console.log(t);
                var n = t.data.pc, o = t.data.tag;
                n.time = e.ormatDate(n.time).slice(5, 16), n.start_time1 = n.start_time.slice(5, 10), 
                n.start_time2 = n.start_time.slice(10, 17), a.setData({
                    pc: n,
                    tag: o
                });
            }
        });
    },
    call_phone: function(e) {
        console.log(e), wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.tel
        });
    },
    dizhi1: function(e) {
        var t = this, a = Number(t.data.pc.star_lat), n = Number(t.data.pc.star_lng);
        console.log(a), console.log(n), wx.openLocation({
            latitude: a,
            longitude: n,
            name: t.data.pc.link_name,
            address: t.data.pc.start_place
        });
    },
    dizhi2: function(e) {
        var t = this, a = Number(t.data.pc.end_lat), n = Number(t.data.pc.end_lng);
        console.log(a), console.log(n), wx.openLocation({
            latitude: a,
            longitude: n,
            name: t.data.pc.link_name,
            address: t.data.pc.end_place
        });
    },
    shouye: function(e) {
        console.log(e), wx.reLaunch({
            url: "../../index/index",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    fabu: function(e) {
        wx.reLaunch({
            url: "../shun",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    phone: function(e) {
        var t = e.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e = this;
        console.log(e.data);
        wx.getStorageSync("users").id;
        return {
            title: e.data.yellow_info.company_name,
            path: "/zh_tcwq/pages/shun/shuninfo2/shuninfo2?id=" + e.data.pc.id,
            success: function(e) {},
            fail: function(e) {}
        };
    }
});
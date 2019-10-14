var e = getApp();

Page({
    data: {
        disabled: !0,
        zh: "",
        mm: "",
        logintext: "登录",
        werchat: !1,
        name: "",
        password: ""
    },
    onLoad: function(a) {
        var t = this;
        console.log(this);
        var o = wx.getStorageSync("System").support;
        this.setData({
            pt_support: o
        });
        var n = wx.getStorageSync("System"), s = wx.getStorageSync("url3");
        t.setData({
            bqxx: n,
            url3: s
        }), wx.login({
            success: function(a) {
                console.log("这是登录所需要的code"), console.log(a.code);
                var o = a.code;
                wx.setStorageSync("code", o), wx.getUserInfo({
                    success: function(a) {
                        wx.setStorageSync("user_info", a.userInfo);
                        var n = a.userInfo.nickName, s = a.userInfo.avatarUrl;
                        t.setData({
                            user_name: n
                        }), console.log("用户名字"), console.log(a.userInfo.nickName), console.log("用户头像"), 
                        console.log(a.userInfo.avatarUrl), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: o
                            },
                            success: function(a) {
                                wx.setStorageSync("key", a.data.session_key);
                                var o = s, c = n;
                                wx.setStorageSync("openid", a.data.openid);
                                var i = a.data.openid;
                                console.log("这是用户的openid"), console.log(i), e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: i,
                                        img: o,
                                        name: c
                                    },
                                    success: function(e) {
                                        console.log("这是用户的登录信息"), console.log(e), wx.setStorageSync("users", e.data), wx.setStorageSync("uniacid", e.data.uniacid), 
                                        t.setData({
                                            user_id: e.data.id,
                                            user_info: e.data
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
    name: function(e) {
        console.log(e), this.setData({
            name: e.detail.value
        });
    },
    password: function(e) {
        console.log(e), this.setData({
            password: e.detail.value
        });
    },
    sign: function(a) {
        console.log(this.data), "" != this.data.name ? "" != this.data.password ? e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestorelogin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_name: this.data.name,
                pwd: this.data.password
            },
            success: function(e) {
                if (console.log(e.data), "账号不存在!" == e.data || "密码不正确!" == e.data) wx.showModal({
                    title: "提示",
                    content: "当前账号未绑定操作员",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    wx.setStorageSync("store_info", e.data);
                    var a = e.data.id;
                    console.log(a), wx.redirectTo({
                        url: "../redbag/merchant?id=" + e.data.id,
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    });
                }
            }
        }) : wx.showModal({
            title: "提示",
            content: "密码不能为空",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定"
        }) : wx.showModal({
            title: "提示",
            content: "账号不能为空",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定"
        });
    },
    weixin: function(e) {
        0 == this.data.werchat ? this.setData({
            werchat: !0
        }) : 1 == this.data.werchat && this.setData({
            werchat: !1
        });
    },
    queding: function(a) {
        this.setData({
            werchat: !1
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesjdlogin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: this.data.user_id
            },
            success: function(e) {
                if (console.log(e), 0 == e.data) wx.showModal({
                    title: "提示",
                    content: "当前账号未绑定操作员",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    wx.setStorageSync("store_info", e.data);
                    e.data.user_id;
                    wx.redirectTo({
                        url: "../redbag/merchant?id=" + e.data.id,
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    });
                }
            }
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
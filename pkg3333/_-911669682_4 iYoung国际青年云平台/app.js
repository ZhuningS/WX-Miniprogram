var n = require("./utils/data.js"), o = require("./utils/listener.js");

App({
    index_route: null,
    onLaunch: function() {
        var n = this;
        wx.getStorageSync("utoken");
        wx.onAppRouteDone(function(e) {
            n.index_route || (n.index_route = e.path), o.fireEventListener("onAppRouteDone", [ e ]);
        }), wx.onAppUnhang(function(n) {
            o.fireEventListener("onAppUnhang", [ n ]);
        });
    },
    setLog: function(n, o) {},
    onShow: function(n) {
        if (n.query._path) {
            var o = decodeURIComponent(n.query._path);
            wx.navigateTo({
                url: o
            });
        }
    },
    getUserInfo: function(o) {
        var e = this;
        if (this.globalData.userInfo) "function" == typeof o && o(this.globalData.userInfo); else {
            var t = wx.getStorageSync("utoken");
            wx.login({
                success: function(u) {
                    var a = u.code;
                    wx.getUserInfo({
                        success: function(u) {
                            e.globalData.userInfo = u.userInfo, wx.request({
                                url: n.duoguan_auth_login_url,
                                method: "POST",
                                data: {
                                    utoken: t,
                                    code: a,
                                    token: n.duoguan_user_token,
                                    encryptedData: u.encryptedData,
                                    iv: u.iv
                                },
                                fail: function(n) {
                                    console.dir(n);
                                },
                                success: function(n) {
                                    var t = n.data.utoken;
                                    wx.setStorageSync("utoken", t), e.globalData.utoken = t, e.globalData.userInfo.utoken = t, 
                                    "function" == typeof o && o(e.globalData.userInfo);
                                }
                            });
                        }
                    });
                }
            });
        }
    },
    getNewToken: function(o) {
        var e = this, t = wx.getStorageSync("utoken");
        wx.login({
            success: function(u) {
                console.log(u);
                var a = u.code;
                wx.getUserInfo({
                    success: function(u) {
                        e.globalData.userInfo = u.userInfo, wx.request({
                            url: n.duoguan_auth_login_url,
                            method: "POST",
                            data: {
                                utoken: t,
                                code: a,
                                token: n.duoguan_user_token,
                                encryptedData: u.encryptedData,
                                iv: u.iv
                            },
                            fail: function(n) {
                                console.dir(n);
                            },
                            success: function(n) {
                                var t = n.data.utoken;
                                wx.setStorageSync("utoken", t), e.globalData.utoken = t, e.globalData.userInfo.utoken = t, 
                                "function" == typeof o && o(t);
                            }
                        });
                    },
                    fail: function(n) {
                        console.log(n);
                    }
                });
            },
            fail: function(n) {
                console.log(n);
            }
        });
    },
    globalData: {
        userInfo: "",
        utoken: ""
    }
});
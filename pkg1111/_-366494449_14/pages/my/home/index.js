var e = getApp(), a = (require("../../../utils/util.js"), require("../../../utils/ajax.js")), t = require("../../../utils/common.js"), o = require("../../../common/PageBase.js");

Page(t.extendPage(o, {
    data: {
        winHei: 0,
        dataLoaded: !1,
        userInfo: {},
        isLogin: !1,
        isShopLogin: !1
    },
    onLoad: function() {
        var a = this;
        t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var o = e.getTabbar(), i = t.isShowtab("usercenter"), n = e.getMarkAuth();
                a.setData({
                    mark_auth: n,
                    isLogin: !!e.getUid(),
                    isShopLogin: !!e.getEmployeeSid(),
                    userInfo: e.getUInfo(),
                    tabbar: o,
                    isShowTab: i
                });
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        console.log(e.userInfo);
                    }
                });
            }
        });
    },
    onShow: function() {
        var t = this, o = e.getUid();
        a.G({
            url: "/apis/home/user.index/info",
            data: {
                uid: o
            },
            success: function(e) {
                console.log(e.data.stat);
                var a = e.data, o = a.levelName, i = a.stat, n = a.score, s = a.user_module_enable, r = a.config, u = a.vip_log, c = a.cover_image, g = a.cover_color, l = e.data.vip;
                wx.setStorage({
                    key: "rank_rule",
                    data: r
                }), t.setData({
                    stat: i,
                    score: n,
                    user_module_enable: s,
                    vip_log: u,
                    vip: l,
                    levelName: o,
                    cover_image: c,
                    cover_color: g,
                    dataLoaded: !0
                });
            }
        }), t.setData({
            dataLoaded: !0,
            isLogin: !!e.getUid(),
            isShopLogin: !!e.getEmployeeSid(),
            userInfo: e.getUInfo()
        });
    },
    getUserInfo: function(e) {
        var a = e.detail.userInfo;
        console.log(a), a.nickName == this.data.userInfo.nickname && a.avatarUrl == this.data.userInfo.avatar && wx.showToast({
            title: "微信数据更新有延迟，请隔段时间再试",
            icon: "none"
        }), t.updateUserInfo(a);
        var o = {
            nickname: a.nickName,
            avatar: a.avatarUrl
        };
        this.setData({
            userInfo: o
        });
    }
}));
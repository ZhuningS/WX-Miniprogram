getApp();

var e = require("../../../../utils/util"), i = require("../../../../utils/requestUtil"), n = (require("../../../../utils/underscore"), 
require("../../../../utils/data"));

require("../../../../wxParse/wxParse.js");

Page({
    data: {
        helplike: null,
        like: null,
        helphead: null,
        ishelp: !1,
        disable: !1,
        options: {},
        helpuser: !1
    },
    onLoad: function(i) {
        wx.getStorageSync("user_info").uid == i.userid && wx.navigateTo({
            url: "/pages/plug-in/supportCompetition/index/index"
        });
        var n = this;
        n.setData({
            options: i
        }, function() {
            e.trySyncUserInfo(), wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#ed4649"
            }), n.helpuserinfo(i), wx.hideShareMenu();
        });
    },
    helpuserinfo: function(e) {
        var o = this;
        i.post(n.duoguan_host_api_url + "/index.php?s=/addon/MarketingLike/IndexApi/index.html", e, function(i) {
            0 == i.mylike ? wx.navigateTo({
                url: "/pages/plug-in/supportCompetition/index/index"
            }) : o.setData({
                like: i,
                helplike: i.myinfo,
                likeid: i.id,
                ishelp: i.myhelp
            }, function() {
                o.helpheadlist(e);
            });
        });
    },
    helpheadlist: function(e) {
        var o = this;
        i.post(n.duoguan_host_api_url + "/index.php?s=/addon/MarketingLike/Mylike/gethelolikehead.html", e, function(e) {
            o.setData({
                helphead: e
            });
        });
    },
    toindex: function() {
        wx.navigateTo({
            url: "/pages/plug-in/supportCompetition/index/index"
        });
    },
    help: function() {
        var e = this;
        e.setData({
            disable: !0
        }, function() {
            var o = e.data.options;
            i.post(n.duoguan_host_api_url + "/index.php?s=/addon/MarketingLike/Mylike/helplike.html", o, function(i) {
                e.setData({
                    helpuser: i
                });
            });
        });
    },
    hidehelp: function() {
        var e = this;
        e.setData({
            helpuser: !1
        }, function() {
            var i = e.data.options;
            e.helpuserinfo(i);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var i = this;
        e.trySyncUserInfo(), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ed4649"
        });
        var n = i.data.options;
        i.helpuserinfo(n), wx.hideShareMenu(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
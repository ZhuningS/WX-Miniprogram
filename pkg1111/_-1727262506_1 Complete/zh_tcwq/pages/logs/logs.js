require("../../utils/util.js");

var n = getApp();

Page({
    data: {
        Return: !1
    },
    onLoad: function(n) {
        var e = this, t = getCurrentPages();
        t.route = "zh_tcwq/pages/logs/index", 1 == e.data.Return && t.setData({
            Return: !0
        });
        var o = wx.getStorageSync("userInfo");
        o && o.nickName && e.setData({
            userInfo: o
        });
        var c = wx.getStorageSync("System").bq_name, a = wx.getStorageSync("System").support, i = wx.getStorageSync("System").bq_logo, u = wx.getStorageSync("user_info");
        console.log(u);
        var s = wx.getStorageSync("store"), l = wx.getStorageSync("url");
        console.log(s), e.setData({
            store: s,
            url: l,
            System: wx.getStorageSync("System"),
            support: c,
            bq_logo: i,
            pt_support: a
        }), e.setData({
            avatarUrl: u.avatarUrl,
            nickName: u.nickName
        });
    },
    collection: function(n) {
        wx.navigateTo({
            url: "../Collection/Collection?name=我的收藏"
        });
    },
    settled: function(n) {
        wx.navigateTo({
            url: "../settled/settled"
        });
    },
    yellow_page: function(n) {
        wx.navigateTo({
            url: "../yellow_page/mine_yellow",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    my_post: function(n) {
        wx.navigateTo({
            url: "../mypost/mypost",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    content: function(n) {
        wx.navigateTo({
            url: "../content/content",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    logs_store: function(n) {
        wx.getStorageSync("users").id;
        var e = wx.getStorageSync("store_info");
        console.log(e), null == e || "" == e ? wx.navigateTo({
            url: "bbaa",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        }) : wx.navigateTo({
            url: "../redbag/merchant?id=" + e.id,
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    order: function(n) {
        wx.navigateTo({
            url: "order",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    payment: function(n) {
        wx.navigateTo({
            url: "order?activeIndex=1",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    payment_one: function(n) {
        wx.navigateTo({
            url: "order?activeIndex=2",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    payment_two: function(n) {
        wx.navigateTo({
            url: "order?activeIndex=3",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    payment_three: function(n) {
        wx.navigateTo({
            url: "order?activeIndex=4",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    payment_four: function(n) {
        wx.navigateTo({
            url: "order?activeIndex=5",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    help: function(n) {
        wx.navigateTo({
            url: "../store/help",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    wallet: function(n) {
        wx.navigateTo({
            url: "income",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    mine_car: function(n) {
        wx.navigateTo({
            url: "mine_car",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    address: function(e) {
        var t = wx.getStorageSync("users").id;
        wx.chooseAddress({
            success: function(e) {
                console.log(e), n.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdadd&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: t,
                        user_name: e.userName,
                        user_tel: e.telNumber,
                        user_address: e.provinceName + e.cityName + e.countyName + e.detailInfo
                    },
                    success: function(n) {
                        console.log(n);
                    }
                });
            }
        });
    },
    jump: function(n) {
        wx.navigateToMiniProgram({
            appId: wx.getStorageSync("System").tz_appid,
            path: "",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(n) {
                console.log("跳转成功"), console.log(n);
            }
        });
    },
    about: function(n) {
        wx.navigateTo({
            url: "system",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    jfsc: function() {
        wx.navigateTo({
            url: "../integral/integral",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    spzx: function() {
        wx.navigateTo({
            url: "../spzx/spzx",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    onReady: function() {},
    onShow: function() {
        this.onLoad();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindGetUserInfo: function(e) {
        var t = this;
        console.log(e.detail.userInfo);
        var o = e.detail.userInfo.avatarUrl;
        t.setData({
            userInfo: e.detail.userInfo
        }), wx.setStorageSync("userInfo", e.detail.userInfo);
        var c = wx.getStorageSync("openid"), a = e.detail.userInfo.nickName;
        n.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                openid: c,
                img: o,
                name: a
            },
            success: function(n) {
                console.log(n), wx.setStorageSync("users", n.data);
            }
        });
    }
});
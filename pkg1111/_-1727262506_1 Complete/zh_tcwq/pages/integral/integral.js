var t = getApp();

Page({
    data: {
        slide: [ {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/tdJ70qw1fEfjfVJfFDD09570eqF28d.jpg"
        }, {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/k5JQwpBfpb0u8sNNy5l5bhlnrhl33W.jpg"
        }, {
            logo: "http://opocfatra.bkt.clouddn.com/images/0/2017/10/zUeEednDedmUkIUumN9XI6IXU91eko.jpg"
        } ],
        fenlei: [],
        commodity: []
    },
    tzweb: function(t) {
        console.log(t.currentTarget.dataset.index, this.data.lblist);
        var a = this.data.lblist[t.currentTarget.dataset.index];
        console.log(a), "1" == a.item && wx.redirectTo({
            url: a.src
        }), "2" == a.item && wx.navigateTo({
            url: "../home/webhtml?weburl=" + a.src
        }), "3" == a.item && wx.navigateToMiniProgram({
            appId: a.tz_appid,
            success: function(t) {
                console.log(t);
            }
        });
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("url3"), o = wx.getStorageSync("city");
        this.setData({
            url: e,
            url3: e
        }), wx.hideShareMenu({});
        var i = this;
        this.reLoad(), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagead3&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                ctiyname: o
            },
            success: function(t) {
                console.log(t), i.setData({
                    lblist: t.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejftype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), i.setData({
                    fenlei: t.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejfgoods&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), i.setData({
                    commodity: t.data
                });
            }
        });
    },
    reLoad: function() {
        var a = this, e = wx.getStorageSync("users").id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version + "&user_id=2",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    integral: t.data.total_score
                });
            }
        });
    },
    record: function(t) {
        wx.navigateTo({
            url: "record/record"
        });
    },
    interinfo: function(t) {
        console.log(t.currentTarget.id), wx.navigateTo({
            url: "integralinfo/integralinfo?id=" + t.currentTarget.id
        });
    },
    cxfl: function(a) {
        console.log(a.currentTarget.id);
        var e = this;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejftypegoods&acid=" + getApp().globalData.version + "&type_id=1",
            cachetime: "0",
            data: {
                type_id: a.currentTarget.id
            },
            success: function(t) {
                console.log(t), e.setData({
                    commodity: t.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.reLoad();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.onLoad(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
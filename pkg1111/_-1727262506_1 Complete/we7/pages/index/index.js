var e = getApp();

Page({
    data: {
        navs: [],
        slide: [],
        commend: [],
        userInfo: {}
    },
    onLoad: function() {
        var a = this;
        e.util.footer(a), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegetnav&acid=" + getApp().globalData.version,
            cachetime: "30",
            success: function(e) {
                e.data.message.errno || (console.log(e.data.message.message), a.setData({
                    navs: e.data.message.message
                }));
            }
        }), e.util.request({
            url: "wxapp/home/slide",
            cachetime: "30",
            success: function(e) {
                e.data.message.errno || a.setData({
                    slide: e.data.message.message
                });
            }
        }), e.util.request({
            url: "wxapp/home/commend",
            cachetime: "30",
            success: function(e) {
                e.data.message.errno || a.setData({
                    commend: e.data.message.message
                });
            }
        });
    }
});
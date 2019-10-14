var a = getApp();

Page({
    data: {
        dianzan: [ {
            user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ3PQDXes9vbhKKv49rbGEEv0EhCwHo4BvRMhx61xtQXFlvm6ILN8TxZ8r6pM8HCgqB3icIxtQAUfw/0"
        }, {
            user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ3PQDXes9vbhKKv49rbGEEv0EhCwHo4BvRMhx61xtQXFlvm6ILN8TxZ8r6pM8HCgqB3icIxtQAUfw/0"
        }, {
            user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ3PQDXes9vbhKKv49rbGEEv0EhCwHo4BvRMhx61xtQXFlvm6ILN8TxZ8r6pM8HCgqB3icIxtQAUfw/0"
        } ],
        pl: [ {
            details: "哦哦哦哦哦哦",
            name: "萌得发芽",
            user_img: "https://wx.qlogo.cn/mmopen/vi_32/MMxbq4GKvwLmcq6geRVEq9iay9KaXf7D5ax2p6bgBBFcpQpAjFqygWty9by9JHH4S3klOmicq2DaHbm7IppCGoDQ/0",
            time: "2018-01-24 15:29"
        } ],
        dz: !0
    },
    dz: function() {
        var t = this, e = wx.getStorageSync("users").id, o = this.data.spid;
        console.log(e, o), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideodz&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e,
                video_id: o
            },
            success: function(a) {
                if (2 == a.data) t.data.spinfo.dz.splice(1, 1), t.setData({
                    spinfo: t.data.spinfo,
                    dz: !0
                }), wx.showToast({
                    title: "取消成功！",
                    duration: 1e3
                }); else {
                    var e = {};
                    e.user_img = t.data.userinfo.img, t.data.spinfo.dz.push(e), t.setData({
                        spinfo: t.data.spinfo,
                        dianzan: t.data.dianzan,
                        dz: !1
                    }), wx.showToast({
                        title: "点赞成功！",
                        duration: 1e3
                    });
                }
            }
        });
    },
    bindinput: function(a) {
        console.log(a.detail.value), this.setData({
            plnr: a.detail.value
        });
    },
    bindconfirm: function() {
        this.pl();
    },
    pl: function() {
        var t = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: t.data.plnr,
                mode: "wx"
            },
            method: "POST",
            success: function(e) {
                if (0 !== e.data) return wx.showModal({
                    title: "提示",
                    content: "你的帖子有违禁内容，请重新编辑"
                }), !1;
                var o = wx.getStorageSync("users").id, i = t.data.plnr, s = wx.getStorageSync("users").id, n = t.data.spid;
                console.log(i, s, n), "" == i || null == i ? wx.showToast({
                    title: "评论内容为空",
                    icon: "loading",
                    duration: 1e3
                }) : a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideopl&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: o,
                        video_id: n,
                        content: i
                    },
                    success: function(a) {
                        console.log(a.data), console.log(), "评论成功!" == a.data.slice(1) && (wx.showToast({
                            title: "评论成功！",
                            duration: 1e3
                        }), setTimeout(function() {
                            t.reLoad();
                        }, 1500));
                    }
                });
            }
        });
    },
    back: function() {
        wx.navigateBack({});
    },
    jrzy: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    fbxx: function() {
        wx.switchTab({
            url: "../fabu/fabu/fabu"
        });
    },
    gdzx: function() {
        console.log(1), wx.switchTab({
            url: "../message/message"
        });
    },
    onLoad: function(t) {
        console.log(t);
        var e = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideoydu&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t.spid
            }
        }), e.setData({
            spid: t.spid
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageurl3&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(a) {
                e.setData({
                    url: a.data
                });
            }
        }), this.reLoad();
    },
    reLoad: function() {
        var t = wx.getStorageSync("users");
        this.setData({
            userinfo: t
        });
        var e = this, o = this.data.spid, i = wx.getStorageSync("users").id;
        console.log(o, i), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagevideoinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                video_id: o
            },
            success: function(a) {
                console.log(a), e.setData({
                    spinfo: a.data
                });
                for (var t = 0; t < a.data.dz.length; t++) i == a.data.dz[t].user_id && e.setData({
                    dz: !1
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var a = this;
        return console.log(a.data.url + a.data.spinfo.fm_logo), {
            title: a.data.spinfo.info.title,
            path: "zh_tcwq/pages/spzx/spzxinfo?spid=" + a.data.spid,
            imageUrl: a.data.url + a.data.spinfo.info.fm_logo,
            success: function(a) {},
            fail: function(a) {}
        };
    }
});
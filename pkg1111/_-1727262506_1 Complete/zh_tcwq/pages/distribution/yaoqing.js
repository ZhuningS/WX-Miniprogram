var t = getApp();

Page({
    data: {
        havecode: !1,
        fwxy: !0,
        wdtd: 0
    },
    ljyq: function() {
        var t = this, a = this.data.fxset, e = this.data.wdsq;
        console.log(a, e), "1" == a.is_fx ? e ? ("1" == e.state && wx.showModal({
            title: "提示",
            content: "您的申请正在审核中，请耐心等待"
        }), "2" == e.state && t.setData({
            share_modal_active: "active"
        }), "3" == e.state && wx.showModal({
            title: "提示",
            content: "您的申请已被拒绝，点击确定重新申请",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), wx.navigateTo({
                    url: "distribution"
                })) : t.cancel && console.log("用户点击取消");
            }
        })) : (console.log("不是分销商"), wx.navigateTo({
            url: "distribution"
        })) : (console.log("未开启审核"), t.setData({
            share_modal_active: "active"
        }));
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this, e = wx.getStorageSync("users").id, s = wx.getStorageSync("users").name, o = wx.getStorageSync("imglink");
        console.log(e), t.util.request({
            url: "entry/wxapp/FxSet",
            cachetime: "0",
            success: function(s) {
                console.log(s.data), a.setData({
                    img: s.data.img,
                    url: o,
                    fxset: s.data
                }), "1" == s.data.is_fx && (console.log("开启分销审核"), t.util.request({
                    url: "entry/wxapp/MyDistribution",
                    cachetime: "0",
                    data: {
                        user_id: e
                    },
                    success: function(t) {
                        console.log(t.data), a.setData({
                            wdsq: t.data
                        }), t.data ? "2" == t.data.state && a.setData({
                            havecode: !0
                        }) : (console.log("不是分销商"), a.setData({
                            havecode: !1
                        }));
                    }
                })), "2" == s.data.is_fx && (console.log("未开启审核"), a.setData({
                    havecode: !0
                }));
            }
        }), t.util.request({
            url: "entry/wxapp/MyCode",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    code: t.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), a.setData({
                    pt_name: t.data.pt_name,
                    userid: e,
                    username: s
                });
            }
        }), t.util.request({
            url: "entry/wxapp/UserInfo",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    userinfo: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/YjtxList",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    txmx: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Earnings",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t);
                for (var e = 0; e < t.data.length; e++) t.data[e].time = util.ormatDate(t.data[e].time);
                a.setData({
                    symx: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/MyTeam",
            cachetime: "0",
            data: {
                user_id: e
            },
            success: function(t) {
                console.log(t), a.setData({
                    wdtd: t.data.one.length + t.data.two.length
                });
            }
        });
    },
    showShareModal: function() {
        this.setData({
            share_modal_active: "active",
            no_scroll: !0
        });
    },
    shareModalClose: function() {
        this.setData({
            share_modal_active: "",
            no_scroll: !1
        });
    },
    mdmfx: function() {
        this.setData({
            share_modal_active: "",
            no_scroll: !1,
            fwxy: !1
        });
    },
    yczz: function() {
        this.setData({
            fwxy: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.setData({
            havecode: !1
        }), this.onShow();
    },
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        return console.log(this.data.pt_name, this.data.userid, this.data.username), console.log(t), 
        "menu" !== t.from && {
            title: this.data.username + "邀请你来看看" + this.data.pt_name,
            path: "zh_dianc/pages/home/home?userid=" + this.data.userid,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});
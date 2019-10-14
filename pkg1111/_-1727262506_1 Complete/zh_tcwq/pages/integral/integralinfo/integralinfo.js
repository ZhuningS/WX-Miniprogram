var a = getApp();

Page({
    data: {
        bomb: !0,
        kpgg: !0,
        ssq: "",
        xxdz: "",
        djdh: !1,
        qddh: !1
    },
    onLoad: function(t) {
        console.log(t.id), wx.hideShareMenu({});
        var e = wx.getStorageSync("url3"), o = wx.getStorageSync("users").id;
        this.setData({
            url: e
        });
        var s = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejfgoodsInfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: t.id
            },
            success: function(a) {
                console.log(a), s.setData({
                    spinfo: a.data[0]
                }), wx.setNavigationBarTitle({
                    title: a.data[0].name
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: o
            },
            success: function(a) {
                console.log(a), s.setData({
                    integral: a.data.total_score
                });
            }
        });
    },
    duihuan: function() {
        this.setData({
            bomb: !1
        });
    },
    cancel: function() {
        this.setData({
            bomb: !0
        });
    },
    caomfirm: function() {
        var t = wx.getStorageSync("users").id, e = this, o = e.data.spinfo.id, s = e.data.spinfo.money, n = e.data.spinfo.hb_moeny, i = Number(e.data.integral), d = e.data.spinfo.name, l = e.data.spinfo.img;
        console.log(t, o, Number(s), n, i, d, l), "1" == e.data.spinfo.type ? (e.setData({
            bomb: !0
        }), Number(s) > i ? wx.showModal({
            title: "提示",
            content: "您的积分不足以兑换此物品"
        }) : (e.setData({
            djdh: !0
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageexchange&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: t,
                good_id: o,
                integral: s,
                hb_money: n,
                type: 1,
                good_name: d,
                good_img: l
            },
            success: function(a) {
                console.log(a), 1 == a.data ? (wx.showToast({
                    title: "兑换成功"
                }), setTimeout(function() {
                    wx.navigateBack({});
                }, 1e3)) : (wx.showToast({
                    title: "请重试！",
                    icon: "loading"
                }), e.setData({
                    djdh: !1
                }));
            }
        }))) : (e.setData({
            bomb: !0
        }), Number(s) > i ? wx.showModal({
            title: "提示",
            content: "您的积分不足以兑换此物品"
        }) : e.setData({
            kpgg: !1
        }));
    },
    ycgg: function() {
        this.setData({
            kpgg: !0
        });
    },
    dingwei: function(a) {
        console.log(a);
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                console.log(a);
                var e = a.address.indexOf("区");
                console.log(a.address.substring(0, e + 1)), t.setData({
                    location: a.latitude + "," + a.longitude,
                    ssq: a.address.substring(0, e + 1),
                    xxdz: a.address.substring(e + 1) + a.name
                });
            }
        });
    },
    formSubmit: function(t) {
        console.log("form发生了submit事件，携带数据为：", t.detail.value);
        var e = this, o = wx.getStorageSync("users").id, s = e.data.spinfo.id, n = e.data.spinfo.money, i = e.data.spinfo.name, d = e.data.spinfo.img, l = t.detail.value.lxr, c = t.detail.value.tel, g = (e.data.ssq, 
        e.data.ssq + t.detail.value.grxxdz);
        console.log(o, s, n, l, c, g, i, d);
        var u = "", r = !0;
        "" == l ? u = "请填写联系人！" : "" == c ? u = "请填写联系电话！" : /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(c) && 11 == c.length ? "" == g ? u = "请选择位置！" : (r = !1, 
        e.setData({
            qddh: !0
        }), a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageexchange&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: o,
                good_id: s,
                integral: n,
                user_name: l,
                user_tel: c,
                address: g,
                type: 2,
                good_name: i,
                good_img: d
            },
            success: function(a) {
                console.log(a), 1 == a.data ? (wx.showToast({
                    title: "兑换成功"
                }), setTimeout(function() {
                    wx.navigateBack({});
                }, 1e3)) : (wx.showToast({
                    title: "请重试！",
                    icon: "loading"
                }), e.setData({
                    qddh: !1
                }));
            }
        })) : u = "手机号错误", 1 == r && wx.showModal({
            title: "提示",
            content: u
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
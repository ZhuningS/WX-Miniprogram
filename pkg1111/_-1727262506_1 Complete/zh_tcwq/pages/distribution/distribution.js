var t = getApp();

Page({
    data: {
        fwxy: !0,
        disabled: !1,
        logintext: "申请成为分销商"
    },
    lookck: function() {
        this.setData({
            fwxy: !1
        });
    },
    queren: function() {
        this.setData({
            fwxy: !0
        });
    },
    onLoad: function(e) {
        var a = this, o = wx.getStorageSync("imglink"), n = wx.getStorageSync("users").id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagesystem&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), a.setData({
                    pt_name: t.data.pt_name,
                    url: o
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagefxset&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t.data), a.setData({
                    img: t.data.img2,
                    fx_details: t.data.fx_details,
                    fxset: t.data
                });
            }
        }), t.util.request({
            url: "entry/wxapp/MySx",
            cachetime: "0",
            data: {
                user_id: n
            },
            success: function(t) {
                console.log(t.data), t.data ? a.setData({
                    yqr: t.data.name
                }) : a.setData({
                    yqr: "总店"
                });
            }
        });
    },
    formSubmit: function(e) {
        console.log("form发生了submit事件，携带数据为：", e.detail.value);
        var a = this, o = wx.getStorageSync("users").id, n = e.detail.value.name, s = e.detail.value.tel, i = e.detail.value.checkbox.length;
        console.log(o, n, s, i);
        var l = "", c = !0;
        "" == n ? l = "请填写姓名！" : "" == s ? l = "请填写联系电话！" : /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(s) && 11 == s.length ? 0 == i ? l = "阅读并同意分销商申请协议" : (a.setData({
            disabled: !0,
            logintext: "提交中..."
        }), c = !1, t.util.request({
            url: "entry/wxapp/Distribution",
            cachetime: "0",
            data: {
                user_id: o,
                user_name: n,
                user_tel: s
            },
            success: function(t) {
                console.log(t), 1 == t.data ? (wx.showToast({
                    title: "提交成功"
                }), setTimeout(function() {
                    wx.navigateBack({});
                }, 1e3)) : (wx.showToast({
                    title: "请重试！",
                    icon: "loading"
                }), a.setData({
                    disabled: !1,
                    logintext: "申请成为分销商"
                }));
            }
        })) : l = "手机号错误！", 1 == c && wx.showModal({
            title: "提示",
            content: l
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
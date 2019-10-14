function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = getApp();

Page((t = {
    data: {},
    onLoad: function(a) {
        var t = this, o = wx.getStorageSync("url"), n = wx.getStorageSync("url3"), i = wx.getStorageSync("users").id;
        t.setData({
            url: o,
            url3: n,
            userid: i,
            options: a
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowset&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                acid: getApp().globalData.version
            },
            success: function(a) {
                console.log(a), t.setData({
                    renew: a.data
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpageinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: a.id
            },
            success: function(a) {
                console.log(a), a.data.sh_time = e.ormatDate(a.data.sh_time).slice(0, 10), a.data.coordinates = a.data.coordinates.split(","), 
                a.data.dq_time = t.formatDate(a.data.dq_time), t.setData({
                    yellow_info: a.data
                });
            }
        });
    },
    formatDate: function(a) {
        var t = new Date(1e3 * a);
        return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + " ") + (t.getHours() + ":") + (t.getMinutes() + ":") + t.getSeconds();
    },
    phone: function(a) {
        var t = a.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    address: function(a) {
        var t = this, e = Number(t.data.yellow_info.coordinates[0]), o = Number(t.data.yellow_info.coordinates[1]);
        wx.openLocation({
            latitude: e,
            longitude: o,
            name: t.data.yellow_info.company_name,
            address: t.data.yellow_info.company_address
        });
    },
    shouye: function(a) {
        console.log(a), wx.reLaunch({
            url: "../index/index",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    }
}, a(t, "phone", function(a) {
    var t = this.data.yellow_info.link_tel;
    wx.makePhoneCall({
        phoneNumber: t
    });
}), a(t, "dkxf", function(a) {
    this.setData({
        iszd: !0
    });
}), a(t, "qxzd", function(a) {
    this.setData({
        iszd: !1
    });
}), a(t, "selected", function(a) {
    console.log(a);
    var t = this, o = a.currentTarget.id, n = wx.getStorageSync("openid"), i = (wx.getStorageSync("users").id, 
    t.data.renew), s = i[o].money, l = i[o].days, c = this.data.yellow_info.id;
    t.setData({
        iszd: !1
    }), console.log(s, l, c), e.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            openid: n,
            money: s
        },
        success: function(a) {
            console.log(a), wx.requestPayment({
                timeStamp: a.data.timeStamp,
                nonceStr: a.data.nonceStr,
                package: a.data.package,
                signType: a.data.signType,
                paySign: a.data.paySign,
                success: function(a) {
                    wx.showModal({
                        title: "提示",
                        content: "支付成功",
                        showCancel: !1
                    }), t.setData({
                        is_dq: !1,
                        iszd: !1
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpageinfo&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            id: t.data.options.id
                        },
                        success: function(a) {
                            console.log(a), a.data.sh_time = e.ormatDate(a.data.sh_time).slice(0, 10), a.data.coordinates = a.data.coordinates.split(","), 
                            a.data.dq_time = t.formatDate(a.data.dq_time), t.setData({
                                yellow_info: a.data
                            });
                        }
                    });
                },
                complete: function(a) {
                    console.log(a), "requestPayment:fail cancel" == a.errMsg && wx.showToast({
                        title: "取消支付",
                        icon: "loading",
                        duration: 1e3
                    }), "requestPayment:ok" == a.errMsg && (e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagehyxf&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            id: c,
                            day: l
                        },
                        success: function(a) {
                            e.util.request({
                                url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpageinfo&acid=" + getApp().globalData.version,
                                cachetime: "0",
                                data: {
                                    id: t.data.options.id
                                },
                                success: function(a) {
                                    console.log(a), a.data.sh_time = e.ormatDate(a.data.sh_time).slice(0, 10), a.data.coordinates = a.data.coordinates.split(","), 
                                    a.data.dq_time = t.formatDate(a.data.dq_time), t.setData({
                                        yellow_info: a.data
                                    });
                                }
                            });
                        }
                    }), setTimeout(function() {
                        t.onLoad(t.data.options);
                    }, 1e3));
                }
            });
        }
    });
}), a(t, "hyxf", function(a) {
    this.setData({
        iszd: !0
    });
}), a(t, "onReady", function() {}), a(t, "onShow", function() {}), a(t, "onHide", function() {}), 
a(t, "onUnload", function() {}), a(t, "onPullDownRefresh", function() {}), a(t, "onReachBottom", function() {}), 
a(t, "onShareAppMessage", function() {
    var a = this;
    console.log(a.data);
    wx.getStorageSync("users").id;
    return {
        title: a.data.yellow_info.company_name,
        path: "/zh_tcwq/pages/yellow_page/yellowinfo?id=" + a.data.yellow_info.id + "&type=1",
        success: function(a) {},
        fail: function(a) {}
    };
}), t));
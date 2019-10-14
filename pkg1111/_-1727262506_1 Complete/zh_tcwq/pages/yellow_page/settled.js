var e = getApp(), a = (require("../../utils/util.js"), []), t = [], o = [], l = [];

Page({
    data: {
        index: 0,
        zsnum: 0,
        lbimages1: [],
        images1: [],
        logo: [],
        btn: !0
    },
    onLoad: function(n) {
        a = [], t = [], o = [], l = [];
        var s = wx.getStorageSync("System").is_tel, i = (wx.getStorageSync("UserData").id, 
        wx.getStorageSync("users")), c = wx.getStorageSync("System"), g = this;
        console.log(i), console.log(getApp().imglink, getApp().getuniacid);
        var d = wx.getStorageSync("url");
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e);
                var a = e.data, t = [];
                a.map(function(e) {
                    var a = {};
                    a = e.type_name, t.push(a);
                }), console.log(t), g.setData({
                    nav: t,
                    store: a,
                    link: d,
                    is_tel: s,
                    user_info: i,
                    system: c
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowset&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e);
                var a = [];
                for (var t in e.data) {
                    var o = e.data;
                    0 == e.data[t].money ? e.data[t].money1 = "免费" : e.data[t].money1 = e.data[t].money + "元", 
                    e.data[t].text = e.data[t].days + "天 " + e.data[t].money1;
                }
                e.data.map(function(e) {
                    var t = {};
                    t.value = e.text, t.name = e.id, a.push(t);
                }), console.log(a), a[0].checked = !0, g.setData({
                    items: a,
                    yellow_set: o,
                    rz_type: a[0].name
                });
            }
        });
        var u = wx.getStorageSync("url2");
        console.log(d), this.setData({
            url: u,
            link: d
        });
    },
    getPhoneNumber: function(a) {
        var t = this, o = wx.getStorageSync("key"), l = a.detail.iv, n = a.detail.encryptedData;
        console.log(o), console.log(l), console.log(n), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejiemi&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                sessionKey: o,
                iv: l,
                data: n
            },
            success: function(e) {
                console.log(e), t.setData({
                    num: e.data.phoneNumber
                });
            }
        });
    },
    bindPickerChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            index: e.detail.value
        });
    },
    radioChange: function(e) {
        console.log("radio发生change事件，携带value值为：", e.detail.value), this.setData({
            rz_type: e.detail.value
        });
    },
    choose: function(e) {
        var a = this, t = a.data.url, o = wx.getStorageSync("uniacid");
        console.log(t), console.log(o), wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e);
                var t = e.tempFilePaths[0];
                wx.uploadFile({
                    url: a.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    header: {
                        token: getApp().globalData.token
                    },
                    filePath: t,
                    name: "upfile",
                    formData: {},
                    success: function(e) {
                        console.log(e);
                        var t = a.data.logo;
                        t[0] = e.data, a.setData({
                            logo: t
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    lbdelete1: function(e) {
        var a = this, t = e.currentTarget.dataset.index, o = a.data.logo;
        o.splice(t, 1), console.log(o), a.setData({
            logo: o
        });
    },
    gongg: function(e) {
        console.log(e.detail.value);
        var a = parseInt(e.detail.value.length);
        this.setData({
            zsnum: a
        });
    },
    add: function(e) {
        var a = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(e) {
                console.log(e);
                e.latitude, e.longitude, e.speed, e.accuracy;
                a.setData({
                    address: e.address,
                    start_lat: e.latitude,
                    start_lng: e.longitude
                });
            }
        });
    },
    formSubmit: function(a) {
        var t = this;
        t.setData({
            btn: !1
        }), setTimeout(function() {
            t.setData({
                btn: !0
            });
        }, 1500), console.log(a.detail.value.details);
        var o = a.detail.value.name + a.detail.value.details + a.detail.value.address;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: o,
                mode: "wx"
            },
            method: "POST",
            success: function(o) {
                if (0 !== o.data) return wx.showModal({
                    title: "提示",
                    content: "你的帖子有违禁内容，请重新编辑"
                }), !1;
                if (1 == wx.getStorageSync("city_type")) l = wx.getStorageSync("city"); else var l = wx.getStorageSync("city");
                var n = a.detail.value.name, s = a.detail.value.tel, i = a.detail.value.details, c = a.detail.value.address, g = "", d = t.data.logo, u = t.data.yellow_set, r = (t.data.items, 
                t.data.start_lat + "," + t.data.start_lng);
                console.log(r);
                var p = t.data.store, m = t.data.nav[t.data.index];
                if (2 == t.data.is_tel) y = 1; else var y = t.data.num;
                for (var v in p) if (p[v].type_name == m) var f = p[v].id;
                var h = t.data.rz_type;
                for (var w in u) if (u[w].id == h) {
                    console.log(u[w].money);
                    var S = Number(u[w].money);
                }
                if (console.log(u), console.log(t.data.rz_type), console.log(d[0]), "" == n ? g = "公司名称不能为空" : "" == s ? g = "公司电话不能为空" : "" == i ? g = "公司简介不能为空" : null == c || "" == c ? g = "请正确填写公司地址" : 0 == d.length ? g = "请上传公司logo" : null == y && (g = "还没进行手机号验证"), 
                "" != g) wx.showModal({
                    title: "提示",
                    content: g,
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    d = d[0];
                    var b = wx.getStorageSync("users").id, x = wx.getStorageSync("openid");
                    S > 0 ? e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            openid: x,
                            money: S
                        },
                        success: function(a) {
                            console.log(a), wx.requestPayment({
                                timeStamp: a.data.timeStamp,
                                nonceStr: a.data.nonceStr,
                                package: a.data.package,
                                signType: a.data.signType,
                                paySign: a.data.paySign,
                                success: function(a) {
                                    console.log("这里是支付成功"), console.log(a), e.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpage&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        method: "POST",
                                        data: {
                                            user_id: b,
                                            logo: d,
                                            company_name: n,
                                            company_address: c,
                                            type_id: f,
                                            link_tel: s,
                                            rz_type: h,
                                            coordinates: r,
                                            content: i,
                                            imgs: "",
                                            tel2: y,
                                            cityname: l
                                        },
                                        success: function(a) {
                                            console.log(a), e.util.request({
                                                url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavehypaylog&acid=" + getApp().globalData.version,
                                                cachetime: "0",
                                                data: {
                                                    hy_id: a.data,
                                                    money: S
                                                },
                                                success: function(e) {
                                                    console.log(e);
                                                }
                                            }), 1 == t.data.system.is_hyset ? wx.showModal({
                                                title: "提示",
                                                content: "提交成功等待审核.."
                                            }) : wx.showToast({
                                                title: "入驻成功"
                                            }), setTimeout(function() {
                                                wx.navigateBack({
                                                    delta: 1
                                                });
                                            }, 2e3);
                                        }
                                    });
                                },
                                fail: function(e) {
                                    console.log("这里是支付失败"), console.log(e), wx.showToast({
                                        title: "支付失败",
                                        duration: 1e3
                                    });
                                }
                            });
                        }
                    }) : e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageyellowpage&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        method: "POST",
                        data: {
                            user_id: b,
                            logo: d,
                            company_name: n,
                            company_address: c,
                            type_id: f,
                            link_tel: s,
                            rz_type: h,
                            coordinates: r,
                            content: i,
                            imgs: "",
                            tel2: y,
                            cityname: l
                        },
                        success: function(e) {
                            console.log(e), wx.showToast({
                                title: "入驻成功",
                                icon: "",
                                image: "",
                                duration: 2e3,
                                mask: !0,
                                success: function(e) {},
                                fail: function(e) {},
                                complete: function(e) {}
                            }), setTimeout(function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }, 2e3);
                        }
                    });
                }
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});
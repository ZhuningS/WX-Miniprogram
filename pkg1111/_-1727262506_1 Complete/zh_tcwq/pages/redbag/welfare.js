var e = [], t = getApp();

Page({
    data: {
        images: [],
        lunbo_len: 0,
        checked1: !1,
        checked2: !1,
        checked3: !1,
        checked4n: !1,
        disabled: !1
    },
    onLoad: function(e) {
        var a = this, o = wx.getStorageSync("url2"), n = wx.getStorageSync("url"), c = wx.getStorageSync("System");
        a.setData({
            url: o,
            procedures: Number(c.hb_sxf) / 100,
            url1: n
        });
        var i = wx.getStorageSync("users").id;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemystore&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: e.user_id
            },
            success: function(e) {
                console.log(e), a.setData({
                    store: e.data,
                    user_id: i
                });
            }
        });
    },
    choiseimg: function() {
        var e = this, t = [];
        console.log(e.data);
        wx.getStorageSync("uniacid");
        var a = 9 - t.length;
        a > 0 && a <= 9 ? wx.chooseImage({
            count: a,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var a = t.tempFilePaths;
                e.uploadimg({
                    url: e.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: a
                });
            }
        }) : wx.showModal({
            title: "上传提示",
            content: "最多上传9张图片",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    uploadimg: function(t) {
        var a = this, o = t.i ? t.i : 0, n = t.success ? t.success : 0, c = t.fail ? t.fail : 0;
        wx.uploadFile({
            url: t.url,
            header: {
                token: getApp().globalData.token
            },
            filePath: t.path[o],
            name: "upfile",
            formData: null,
            success: function(t) {
                "" != t.data ? (console.log(t), n++, e.push(t.data), a.setData({
                    imgArray: e
                }), console.log(o), console.log("上传商家轮播图时候提交的图片数组", e)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                c++, console.log("fail:" + o + "fail:" + c);
            },
            complete: function() {
                console.log(o), ++o == t.path.length ? (a.setData({
                    images: t.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + c)) : (console.log(o), 
                t.i = o, t.success = n, t.fail = c, a.uploadimg(t));
            }
        });
    },
    delete: function(t) {
        var a = this;
        console.log(a.data), console.log(t), Array.prototype.indexOf = function(e) {
            for (var t = 0; t < this.length; t++) if (this[t] == e) return t;
            return -1;
        }, Array.prototype.remove = function(e) {
            var t = this.indexOf(e);
            t > -1 && this.splice(t, 1);
        };
        var o = t.currentTarget.dataset.index;
        e.remove(e[o]), a.setData({
            imgArray: e
        });
    },
    switch1Change: function(e) {
        console.log(e), this.setData({
            checked1: e.detail.value
        });
    },
    switch2Change: function(e) {
        console.log(e), this.setData({
            checked2: e.detail.value
        });
    },
    formSubmit: function(a) {
        var o = this, n = wx.getStorageSync("users"), c = (n.id, n.openid), i = o.data.images, s = o.data.store, l = o.data.procedures, u = a.detail.value, r = Number(u.share), d = Number(u.money), g = u.details, p = o.data.checked1, h = o.data.checked2, f = wx.getStorageSync("city"), m = g;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: m,
                mode: "wx"
            },
            method: "POST",
            success: function(n) {
                if (console.log(n.data), "function" == typeof a && a(o), 0 !== n.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                if (0 == p) var m = 1, w = (d + l * d).toFixed(2), y = d / r; else var m = 2, w = (d * r + d * r * l).toFixed(2);
                if (0 == h) var x = "", b = 1; else var x = u.hb_keyword, b = 2;
                console.log(e);
                var v = "";
                console.log(v), console.log("红包总金额  " + w);
                var S = new RegExp("^[一-龥]+$"), D = "";
                "" == g ? D = "福利描述不能为空" : "" == d ? D = "红包金额不能为空" : !o.data.checked1 && d < .01 ? D = "福利红包金额不能小于1元" : "" == r ? D = "红包个数不能为空" : y < .01 ? D = "红包份数过大，请合理设置" : o.data.checked1 && d < .01 ? D = "单个红包最小金额不能小于0.1" : 1 == h && ("" == x ? D = "红包口令不能为空" : S.test(x) || (D = "口令只能输入汉字")), 
                "" != D ? wx.showModal({
                    title: "提示",
                    content: D,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : e.length < i.length ? wx.showModal({
                    title: "提示",
                    content: "图片正在上传，请稍候",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : (v = e.join(","), console.log(v), o.setData({
                    disabled: !0
                }), t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        openid: c,
                        money: w
                    },
                    success: function(e) {
                        wx.requestPayment({
                            timeStamp: e.data.timeStamp,
                            nonceStr: e.data.nonceStr,
                            package: e.data.package,
                            signType: e.data.signType,
                            paySign: e.data.paySign,
                            success: function(e) {
                                console.log("这里是支付成功"), console.log(e), t.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageposting&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    method: "POST",
                                    data: {
                                        store_id: s.id,
                                        details: g,
                                        img: v,
                                        user_id: o.data.user_id,
                                        user_name: s.store_name,
                                        user_tel: s.tel,
                                        type2_id: "",
                                        type_id: "",
                                        money: w,
                                        type: "",
                                        sz: s.logo,
                                        address: s.address,
                                        hb_money: d,
                                        hb_keyword: x,
                                        hb_num: r,
                                        hb_type: b,
                                        hb_random: m,
                                        cityname: f
                                    },
                                    success: function(e) {
                                        console.log(e), wx.showToast({
                                            title: "发布成功",
                                            icon: "",
                                            image: "",
                                            duration: 2e3,
                                            mask: !0,
                                            success: function(e) {},
                                            fail: function(e) {},
                                            complete: function(e) {}
                                        }), setTimeout(function() {
                                            wx.reLaunch({
                                                url: "../index/index",
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            });
                                        }, 2e3);
                                    }
                                });
                            },
                            fail: function(e) {
                                console.log("这里是支付失败"), console.log(e), wx.showToast({
                                    title: "支付失败",
                                    duration: 1e3
                                }), o.setData({
                                    disabled: !1
                                });
                            }
                        });
                    }
                }));
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        e.splice(0, e.length);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
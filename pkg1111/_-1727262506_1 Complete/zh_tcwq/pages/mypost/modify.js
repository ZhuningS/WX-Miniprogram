var a = getApp(), e = [];

Page({
    data: {
        lindex: 0
    },
    onLoad: function(t) {
        var i = this, o = wx.getStorageSync("url"), n = wx.getStorageSync("url3"), s = wx.getStorageSync("url3"), c = t.id;
        i.setData({
            url: o,
            url1: n,
            url3: s,
            id: c
        });
        var l = function() {
            var a = new Date(), e = a.getMonth() + 1, t = a.getDate();
            return e >= 1 && e <= 9 && (e = "0" + e), t >= 0 && t <= 9 && (t = "0" + t), a.getFullYear() + "-" + e + "-" + t + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        }();
        a.util.request({
            url: getApp().globalData.baseUrl,
            cachetime: "0",
            data: {
                id: c,
                c: "apitc",
                acid: getApp().globalData.version,
                a: "dopagepostlnfo"
            },
            success: function(t) {
                console.log(t);
                var o = t.data.tz;
                if (o.dq_time = a.ormatDate(o.dq_time), o.dq_time >= l ? o.dq = !0 : o.dq_ = !1, 
                o.img = o.img.split(","), "" != o.img) for (var n in o.img) e.push(o.img[n]);
                a.util.request({
                    url: getApp().globalData.baseUrl,
                    cachetime: "0",
                    data: {
                        c: "apitc",
                        acid: getApp().globalData.version,
                        a: "dopagetype"
                    },
                    success: function(a) {
                        var e = a.data;
                        i.setData({
                            nav: e
                        });
                    }
                }), i.setData({
                    post: o,
                    imgArray: e
                });
            }
        }), a.util.request({
            url: getApp().globalData.baseUrl,
            cachetime: "0",
            data: {
                c: "apitc",
                acid: getApp().globalData.version,
                a: "dopagetop"
            },
            success: function(a) {
                var e = a.data;
                for (var t in e) 1 == e[t].type ? e[t].array = "置顶一天（收费" + e[t].money + "元）" : 2 == e[t].type ? e[t].array = "置顶一周（收费" + e[t].money + "元）" : 3 == e[t].type && (e[t].array = "置顶一月（收费" + e[t].money + "元）");
                var o = [];
                e.map(function(a) {
                    var e = {};
                    e = a.array, o.push(e);
                }), o.push("取消置顶"), i.setData({
                    stock: o,
                    stick: e
                });
            }
        });
    },
    radioChange: function(a) {
        this.setData({
            value: a.detail.value
        });
    },
    chooseImage2: function() {
        var a = this, e = [], t = (wx.getStorageSync("uniacid"), 9 - e.length);
        t > 0 && t <= 9 ? wx.chooseImage({
            count: t,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var t = e.tempFilePaths;
                a.uploadimg({
                    url: a.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: t
                });
            }
        }) : wx.showModal({
            title: "上传提示",
            content: "最多上传9张图片",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    uploadimg: function(a) {
        console.log(this.data.imgArray);
        var t = this, i = a.i ? a.i : 0, o = a.success ? a.success : 0, n = a.fail ? a.fail : 0;
        wx.uploadFile({
            url: a.url,
            filePath: a.path[i],
            name: "upfile",
            formData: null,
            success: function(a) {
                "" != a.data ? (o++, e.push(a.data.substr(0)), t.setData({
                    imgArray: e
                })) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(a) {
                n++;
            },
            complete: function() {
                ++i == a.path.length ? (t.setData({
                    imgArray: e
                }), wx.hideToast()) : (a.i = i, a.success = o, a.fail = n, t.uploadimg(a));
            }
        });
    },
    delete: function(a) {
        var t = this;
        Array.prototype.indexOf = function(a) {
            for (var e = 0; e < this.length; e++) if (this[e] == a) return e;
            return -1;
        }, Array.prototype.remove = function(a) {
            var e = this.indexOf(a);
            e > -1 && this.splice(e, 1);
        };
        var i = a.currentTarget.dataset.index;
        e.remove(e[i]), t.setData({
            imgArray: e
        });
    },
    label: function(a) {
        var e = this, t = e.data.label, i = a.currentTarget.dataset.inde;
        "selected1" == t[i].click_class ? t[i].click_class = "selected2" : "selected2" == t[i].click_class && (t[i].click_class = "selected1"), 
        e.setData({
            label: t
        });
    },
    add: function(a) {
        var e = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(a) {
                a.latitude, a.longitude, a.speed, a.accuracy;
                var t = a.latitude + "," + a.longitude, i = e.data.post;
                i.address = a.address, i.coordinates = t, e.setData({
                    post: i
                });
            }
        });
    },
    formSubmit: function(t) {
        var i = this, o = i.data.post, n = i.data.lindex ? i.data.label[i.data.lindex].id : o.type2_id, s = i.data.tindex ? i.data.nav[i.data.tindex].id : o.type_id;
        if (null == o.type_name) var c = t.detail.value.content, l = o.user_name, r = o.user_tel; else var c = t.detail.value.content, l = t.detail.value.name, r = t.detail.value.tel;
        var d = i.data.value, u = i.data.stick;
        if ("取消置顶" == d || null == d) var p = 0, g = 0; else for (var m in u) if (u[m].array == d) var p = u[m].type, g = u[m].money;
        console.log(p), console.log(g);
        var h = i.data.label, f = [];
        for (var y in h) "selected2" == h[y].click_class && f.push(h[y]);
        var v = [];
        f.map(function(a) {
            var e = {};
            e.label_id = a.id, v.push(e);
        });
        var b = i.data.id, _ = "";
        if (_ = e.join(","), g > 0) {
            var w = wx.getStorageSync("openid");
            a.util.request({
                url: getApp().globalData.baseUrl,
                cachetime: "0",
                data: {
                    openid: w,
                    money: g,
                    c: "apitc",
                    acid: getApp().globalData.version,
                    a: "dopagepay"
                },
                success: function(e) {
                    console.log(e), wx.requestPayment({
                        timeStamp: e.data.timeStamp,
                        nonceStr: e.data.nonceStr,
                        package: e.data.package,
                        signType: e.data.signType,
                        paySign: e.data.paySign,
                        success: function(e) {
                            console.log("这里是支付成功"), console.log(e), a.util.request({
                                url: getApp().globalData.baseUrl + "c=apitc&a=dopgeupdpost&acid=" + getApp().globalData.version,
                                cachetime: "0",
                                method: "POST",
                                data: {
                                    id: b,
                                    details: c,
                                    img: _,
                                    user_id: o.user_id,
                                    user_name: l,
                                    user_tel: r,
                                    type2_id: s,
                                    type_id: n,
                                    money: o.money,
                                    top_type: p,
                                    sz: v,
                                    address: o.address,
                                    hb_money: o.hb_money,
                                    hb_keyword: o.hb_keyword,
                                    hb_num: o.hb_num,
                                    hb_type: o.hb_type,
                                    hb_random: o.hb_random,
                                    cityname: o.cityname
                                },
                                success: function(a) {
                                    console.log(a), wx.showToast({
                                        title: "修改成功",
                                        icon: "",
                                        image: "",
                                        duration: 2e3,
                                        mask: !0,
                                        success: function(a) {},
                                        fail: function(a) {},
                                        complete: function(a) {}
                                    }), setTimeout(function() {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 2e3);
                                }
                            });
                        },
                        fail: function(a) {
                            console.log("这里是支付失败"), console.log(a), wx.showToast({
                                title: "支付失败",
                                duration: 1e3
                            });
                        }
                    });
                }
            });
        } else a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopgeupdpost&acid=" + getApp().globalData.version,
            cachetime: "0",
            method: "POST",
            data: {
                id: b,
                details: c,
                img: _,
                user_id: o.user_id,
                user_name: l,
                user_tel: r,
                type2_id: n,
                type_id: s,
                money: o.money,
                top_type: p,
                sz: v,
                address: o.address,
                hb_money: o.hb_money,
                hb_keyword: o.hb_keyword,
                hb_num: o.hb_num,
                hb_type: o.hb_type,
                hb_random: o.hb_random,
                cityname: o.cityname
            },
            success: function(a) {
                console.log(a), wx.showToast({
                    title: "修改成功",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3);
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
    onShareAppMessage: function() {},
    bindPickerChange1: function(e) {
        var t = this;
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            tindex: e.detail.value
        });
        var i = t.data.nav[e.detail.value].id;
        a.util.request({
            url: getApp().globalData.baseUrl,
            cachetime: "0",
            data: {
                id: i,
                c: "apitc",
                acid: getApp().globalData.version,
                a: "dopagetype2"
            },
            success: function(a) {
                for (var e in a.data) a.data[e].click_class = "selected1";
                t.setData({
                    label: a.data
                });
            }
        });
    },
    bindPickerChange2: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            lindex: a.detail.value
        });
    }
});
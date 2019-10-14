var e = getApp(), a = [], t = [];

Page({
    data: {
        hidden1: !1,
        hidden2: !0,
        hidden3: !0,
        index_two: 0,
        prompt: !1,
        choise: !1,
        images: [],
        imgArray: [],
        upload_img: [],
        upload_img_length: 0,
        getmsg: "获取验证码",
        tel_code: !1,
        items: [ {
            name: "刷卡支付",
            value: "刷卡支付"
        }, {
            name: "免费wifi",
            value: "免费wifi"
        }, {
            name: "免费停车",
            value: "免费停车"
        }, {
            name: "禁止吸烟",
            value: "禁止吸烟"
        }, {
            name: "提供包间",
            value: "提供包间"
        }, {
            name: "沙发休闲",
            value: "沙发休闲"
        } ]
    },
    bindMultiPickerChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            multiIndex: e.detail.value
        });
    },
    cost1: function(e) {
        var a = this;
        if (console.log(a.data), console.log(e), 2 == a.data.store_info.time_over) wx.showModal({
            title: "提示",
            content: "入驻时间不可以修改喔",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }); else {
            var t = a.data.stick, o = e.currentTarget.id;
            for (var n in t) t[n].hidden1 = n != o;
            a.setData({
                stick: t,
                type: t[o].type,
                inmoney: t[o].money
            });
        }
    },
    onLoad: function(o) {
        console.log(o);
        var n = this, i = getCurrentPages(), l = (i[i.length - 1], i[i.length - 2]);
        console.log(l), l.setData({
            Return: !0
        }), n.setData({
            upload_img: [],
            imgArray: []
        }), wx.login({
            success: function(a) {
                console.log(a);
                var t = a.code;
                console.log(a.code), wx.setStorageSync("code", t), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        code: t
                    },
                    success: function(a) {
                        console.log(a), wx.setStorageSync("key", a.data.session_key), wx.setStorageSync("openid", a.data.openid);
                        var t = a.data.openid;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                openid: t,
                                img: "",
                                name: ""
                            },
                            success: function(e) {
                                console.log(e), wx.setStorageSync("users", e.data), wx.setStorageSync("uniacid", e.data.uniacid);
                            }
                        });
                    }
                });
            }
        }), console.log(n.data);
        var s = wx.getStorageSync("url2"), c = wx.getStorageSync("url"), u = wx.getStorageSync("url3"), d = wx.getStorageSync("openid"), r = o.user_id;
        console.log("用户的openid为 " + d + " 用户的user_id为 " + r), n.setData({
            user_id: r,
            openid: d,
            url: s,
            url1: c,
            url3: u
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemystore&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: r
            },
            success: function(o) {
                if (console.log(o), 0 == o.data) n.setData({
                    mystore: !0
                }); else {
                    o.data.img = o.data.img.split(","), o.data.ad = o.data.ad.split(",");
                    for (var i in o.data.ad) a.push(o.data.ad[i]);
                    for (var l in o.data.img) t.push(o.data.img[l]);
                    console.log(a), console.log(t);
                    var s = n.data.items, c = o.data;
                    1 == c.is_houtai && wx.showModal({
                        title: "提示",
                        content: "平台创建的店铺请前往平台修改",
                        showCancel: !0,
                        cancelText: "取消",
                        confirmText: "确定",
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {
                            wx.navigateBack({
                                delta: 1
                            });
                        }
                    }), 1 == c.time_over && wx.showModal({
                        title: "提示",
                        content: "您的入驻已经到期了喔,赶紧去续费吧",
                        showCancel: !0,
                        cancelText: "取消",
                        confirmText: "确定",
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    }), c.yy_time = c.yy_time.split("-"), console.log(c.yy_time);
                    for (var u = 0; u < s.length; u++) "刷卡支付" == s[u].value ? 1 == c.skzf ? s[u].checked = !0 : s[u].checked = !1 : "免费wifi" == s[u].value ? 1 == c.wifi ? s[u].checked = !0 : s[u].checked = !1 : "免费停车" == s[u].value ? 1 == c.mftc ? s[u].checked = !0 : s[u].checked = !1 : "禁止吸烟" == s[u].value ? 1 == c.jzxy ? s[u].checked = !0 : s[u].checked = !1 : "提供包间" == s[u].value ? 1 == c.tgbj ? s[u].checked = !0 : s[u].checked = !1 : "沙发休闲" == s[u].value && (1 == c.sfxx ? s[u].checked = !0 : s[u].checked = !1);
                    console.log(s);
                    var d = c.coordinates, r = c.address;
                    n.setData({
                        time: c.start_time,
                        time1: c.end_time,
                        store_info: c,
                        address: r,
                        coordinates: d,
                        lunbo_len: a.length,
                        imgArray: a,
                        items: s,
                        type: c.type,
                        uploaded: t,
                        upload_img_length: t.length,
                        upload_img: o.data.img,
                        hotel_logo: c.logo,
                        wechat: c.weixin_logo
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagearea&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        success: function(e) {
                            console.log(e);
                            for (var a in e.data) e.data[a].id == c.area_id && n.setData({
                                inde: a
                            });
                            var t = [];
                            e.data.map(function(e) {
                                var a = {};
                                a = e.area_name, t.push(a);
                            }), console.log(t), n.setData({
                                area: e.data,
                                city: t
                            });
                        }
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        success: function(e) {
                            console.log(e);
                            var a = e.data, t = [];
                            a.map(function(e) {
                                var a = {};
                                a = e.type_name, t.push(a);
                            }), console.log(t), console.log(n.data);
                            var o = c.type_name;
                            for (var i in t) t[i] == o && (console.log(t[i]), n.setData({
                                index: i
                            }));
                            n.setData({
                                store: a,
                                store_type: t
                            });
                        }
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageinmoney&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        success: function(e) {
                            console.log(e);
                            var a = e.data;
                            for (var t in a) if (a[t].hidden1 = !0, 0 != a[t].money ? a[t].money1 = "（收费" + a[t].money + "元）" : a[t].money1 = "  免费", 
                            1 == a[t].type ? a[t].array = "一周" + a[t].money1 : 2 == a[t].type ? a[t].array = "半年" + a[t].money1 : 3 == a[t].type && (a[t].array = "一年" + a[t].money1), 
                            a[t].type == c.type) {
                                var o = a[t].type, i = a[t].money;
                                a[t].hidden1 = !1;
                            }
                            n.setData({
                                stick: a,
                                type: o,
                                inmoney: i
                            });
                        }
                    });
                }
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageissms&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e), 1 == e.data ? n.setData({
                    send: !1,
                    sms: !0,
                    tel_code: !1
                }) : n.setData({
                    send: !0,
                    sms: !1,
                    tel_code: !1
                });
            }
        });
    },
    user_name: function(e) {
        var a = this;
        console.log(e);
        var t = e.detail.value;
        a.setData({
            name: t
        });
    },
    user_code: function(e) {
        var a = this;
        console.log(e);
        var t = e.detail.value;
        t != a.data.num ? wx.showToast({
            title: "验证码错误",
            icon: "",
            image: "",
            duration: 2e3,
            mask: !0,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : a.setData({
            tel_code: !0,
            yz_code: t
        });
    },
    sendmessg: function(a) {
        var t = this;
        console.log(t.data);
        var o = t.data.name;
        if ("" != o && null != o) if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(o)) {
            if ("获取验证码" == t.data.getmsg) {
                for (var n = "", i = 0; i < 6; i++) n += Math.floor(10 * Math.random());
                console.log(n), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesms&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        code: n,
                        tel: o
                    },
                    success: function(e) {
                        console.log(e);
                    }
                }), t.setData({
                    num: n
                });
                var l = 60, s = setInterval(function() {
                    t.setData({
                        getmsg: l + "s后重新发送",
                        send: !0
                    }), --l <= 0 && (clearInterval(s), t.setData({
                        getmsg: "获取验证码",
                        send: !1,
                        num: 0
                    }));
                }, 1e3);
            }
        } else wx.showModal({
            title: "提示",
            content: "请输入正确的手机格式",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确认"
        }); else wx.showToast({
            title: "请输入手机号",
            icon: "",
            image: "",
            duration: 2e3,
            mask: !0,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    getPhoneNumber: function(a) {
        var t = this, o = wx.getStorageSync("key"), n = a.detail.iv, i = a.detail.encryptedData;
        console.log(o), console.log(n), console.log(i), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejiemi&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                sessionKey: o,
                iv: n,
                data: i
            },
            success: function(e) {
                console.log(e), t.setData({
                    num: e.data.phoneNumber,
                    tel_code: !0
                });
            }
        });
    },
    bindTimeChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            time: e.detail.value
        });
    },
    bindTimeChange1: function(e) {
        var a = this.data.time, t = e.detail.value;
        "00：00" == t ? wx.showModal({
            title: "提示",
            content: "营业结束时间不能为00:00",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : t <= a ? wx.showModal({
            title: "提示",
            content: "营业结束时间不能为小于或等于营业开始时间",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : this.setData({
            time1: e.detail.value
        });
    },
    add: function(e) {
        var a = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(e) {
                console.log(e);
                e.latitude, e.longitude, e.speed, e.accuracy;
                var t = e.latitude + "," + e.longitude, o = a.data.store_info;
                o.address = e.address, o.coordinates = t, a.setData({
                    store_info: o
                });
            }
        });
    },
    bindPickerChanges: function(e) {
        this.data.store;
        var a = e.detail.value;
        this.setData({
            index: a,
            index_two: 0
        });
    },
    bindchange_two: function(e) {
        this.setData({
            index_two: e.detail.value
        });
    },
    bindRegionChange: function(e) {
        this.setData({
            inde: e.detail.value
        });
    },
    choice: function(e) {
        this.setData({
            choice: !0
        });
    },
    previewImage: function(e) {
        var a = e.currentTarget.dataset.index, t = this.data.lunbo;
        wx.previewImage({
            current: t[a],
            urls: t
        });
    },
    previewImage1: function(e) {
        var a = e.currentTarget.dataset.index, t = this.data.lunbo1;
        wx.previewImage({
            current: t[a],
            urls: t
        });
    },
    lunbo1: function(e) {
        var a = this;
        wx.getStorageSync("uniacid");
        console.log(a.data);
        var t = a.data.lunbo;
        t = null == t ? [] : a.data.lunbo;
        a.data.url;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                console.log(e), Array.prototype.push.apply(t, e.tempFilePaths), t.length <= 9 ? a.setData({
                    lunbo1: t,
                    lunbo_len1: t.length,
                    log: !0
                }) : (t = t.slice(0, 9), a.setData({
                    lunbo1: t,
                    lunbo_len1: t.length,
                    log: !0
                }));
            }
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
                        console.log(e), a.setData({
                            hotel_logo: e.data
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    choose1: function(e) {
        var a = this;
        a.data.url, wx.getStorageSync("uniacid"), wx.getStorageSync("openid");
        wx.chooseImage({
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
                        console.log(e), a.setData({
                            wechat: e.data
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    checkboxChange: function(e) {
        var a = this;
        console.log(e);
        var t = e.detail.value;
        a.setData({
            facilities: t
        });
    },
    chooseImage2: function() {
        console.log(a);
        var e = this, a = e.data.imgArray;
        console.log(e.data);
        wx.getStorageSync("uniacid");
        var t = 9 - a.length;
        t > 0 && t <= 9 ? wx.chooseImage({
            count: t,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var t = a.tempFilePaths;
                e.uploadimg({
                    url: e.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: t
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
    uploadimg: function(e) {
        var t = this, o = e.i ? e.i : 0, n = e.success ? e.success : 0, i = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url,
            header: {
                token: getApp().globalData.token
            },
            filePath: e.path[o],
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), n++, a.push(e.data), t.setData({
                    imgArray: a,
                    lunbo_len: a.length
                }), console.log(o), console.log("上传商家轮播图时候提交的图片数组", a)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                i++, console.log("fail:" + o + "fail:" + i);
            },
            complete: function() {
                console.log(o), ++o == e.path.length ? (t.setData({
                    images: e.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + i)) : (console.log(o), 
                e.i = o, e.success = n, e.fail = i, t.uploadimg(e));
            }
        });
    },
    delete: function(e) {
        var t = this;
        console.log(t.data), console.log(a);
        var o = e.currentTarget.dataset.index, n = this.data.images;
        a.splice(o, 1), n.splice(o, 1), console.log(a), console.log(n), t.setData({
            images: n,
            imgArray: a,
            lunbo_len: a.length
        });
    },
    upload_image: function() {
        var e = this;
        t = e.data.uploaded;
        wx.getStorageSync("uniacid");
        var a = 9 - t.length;
        a > 0 && a <= 9 ? wx.chooseImage({
            count: a,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var t = a.tempFilePaths;
                e.already({
                    url1: e.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path1: t
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
    already: function(e) {
        var a = this, o = e.j ? e.j : 0, n = e.success ? e.success : 0, i = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url1,
            header: {
                token: getApp().globalData.token
            },
            filePath: e.path1[o],
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), n++, t.push(e.data), a.setData({
                    uploaded: t,
                    upload_img_length: t.length
                }), console.log(o), console.log("上传商家介绍时候提交的图片数组", t)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                i++, console.log("fail:" + o + "fail:" + i);
            },
            complete: function() {
                console.log(o), ++o == e.path1.length ? (a.setData({
                    upload_img: e.path1
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + i)) : (console.log(o), 
                e.j = o, e.success = n, e.fail = i, a.already(e));
            }
        });
    },
    delete2: function(e) {
        console.log(o);
        var a = this, o = e.currentTarget.dataset.index, n = this.data.upload_img;
        t.splice(o, 1), n.splice(o, 1), console.log(n), a.setData({
            uploaded: t,
            upload_img_length: t.length
        });
    },
    formSubmit: function(o) {
        var n = this;
        if (console.log(o), console.log(n.data), null == n.data.inmoney) i = 0; else var i = Number(n.data.inmoney);
        var l = n.data.type;
        console.log(i + " " + l);
        var s = n.data.store_info.id;
        console.log(s);
        var c = wx.getStorageSync("openid"), u = n.data.facilities, d = n.data.hotel_logo, r = n.data.wechat, g = o.detail.value.business_name, p = o.detail.value.business_keyword, f = n.data.store_info.address, m = (n.data.time, 
        n.data.time1, n.data.time1), h = n.data.time, v = o.detail.value.vr_demo, w = o.detail.value.business_number, y = o.detail.value.business_notice, x = o.detail.value.textarea, _ = n.data.store_info.coordinates, b = n.data.store, D = n.data.index, T = (b[D], 
        b[D].id), k = n.data.tel_code, S = n.data.num, A = (n.data.index_two, a.join(",")), P = t.join(","), q = g + p + y + v + x;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: q,
                mode: "wx"
            },
            method: "POST",
            success: function(a) {
                if (console.log(a.data), "function" == typeof o && o(n), 0 !== a.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                n.data.city;
                "" != x && null != x || (x = ""), n.data.sms;
                var t = "";
                if ("" == g ? t = "请输入商家名称" : "" == p ? t = "请输入关键字" : "" == f ? t = "请输入详细地址" : "" == w ? t = "请输入联系电话" : "00:00" == h ? t = "请输入营业开始时间" : "00:00" == m ? t = "请输入营业结束时间" : "" == y ? t = "请输入公告说明" : 0 == n.data.sms ? "" == S && (t = "请进行手机号验证") : 1 == n.data.sms && null == n.data.yz_code && (t = "请进行手机号验证"), 
                "" != t) wx.showModal({
                    title: "提示",
                    content: t,
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    var b = 0, D = 0, q = 0, C = 0, z = 0, U = 0;
                    console.log(n.data.items);
                    var j = n.data.items;
                    if (null == u) {
                        for (var M in j) if (1 == j[M].checked) if ("刷卡支付" == j[M].value) b = 1; else if ("免费wifi" == j[M].value) D = 1; else if ("免费停车" == j[M].value) q = 1; else if ("禁止吸烟" == j[M].value) C = 1; else if ("提供包间" == j[M].value) z = 1; else if ("沙发休闲" == j[M].value) U = 1;
                    } else for (var I = 0; I < u.length; I++) if ("刷卡支付" == u[I]) b = 1; else if ("免费wifi" == u[I]) D = 1; else if ("免费停车" == u[I]) q = 1; else if ("禁止吸烟" == u[I]) C = 1; else if ("提供包间" == u[I]) z = 1; else if ("沙发休闲" == u[I]) U = 1;
                    if (1 == k) if (2 == n.data.store_info.time_over) e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdstore&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        method: "POST",
                        data: {
                            id: s,
                            user_id: n.data.user_id,
                            store_name: g,
                            address: f,
                            announcement: y,
                            storetype_id: T,
                            start_time: h,
                            end_time: m,
                            keyword: p,
                            skzf: b,
                            wifi: D,
                            mftc: q,
                            jzxy: C,
                            tgbj: z,
                            sfxx: U,
                            tel: w,
                            logo: d,
                            weixin_logo: r,
                            ad: A,
                            img: P,
                            money: F,
                            details: x,
                            coordinates: _,
                            vr_link: v
                        },
                        success: function(e) {
                            console.log("这里是发布成功"), console.log(e), 1 == e.data && (wx.showToast({
                                title: "修改成功",
                                icon: "",
                                image: "",
                                duration: 2e3,
                                mask: !0,
                                success: function(e) {},
                                fail: function(e) {},
                                complete: function(e) {}
                            }), setTimeout(function() {
                                wx.reLaunch({
                                    url: "../logs/logs",
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                });
                            }, 2e3));
                        }
                    }); else {
                        var F = i;
                        F <= 0 ? e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdstore&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            method: "POST",
                            data: {
                                id: s,
                                user_id: n.data.user_id,
                                store_name: g,
                                address: f,
                                announcement: y,
                                storetype_id: T,
                                start_time: h,
                                end_time: m,
                                keyword: p,
                                skzf: b,
                                wifi: D,
                                mftc: q,
                                jzxy: C,
                                tgbj: z,
                                sfxx: U,
                                tel: w,
                                logo: d,
                                weixin_logo: r,
                                ad: A,
                                img: P,
                                money: F,
                                details: x,
                                coordinates: _,
                                type: l,
                                vr_link: v
                            },
                            success: function(e) {
                                console.log("这里是发布成功"), console.log(e), 1 == e.data && (wx.showToast({
                                    title: "入驻成功",
                                    icon: "",
                                    image: "",
                                    duration: 2e3,
                                    mask: !0,
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                }), setTimeout(function() {
                                    wx.reLaunch({
                                        url: "../logs/logs",
                                        success: function(e) {},
                                        fail: function(e) {},
                                        complete: function(e) {}
                                    });
                                }, 2e3));
                            }
                        }) : e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                openid: c,
                                money: F
                            },
                            success: function(a) {
                                wx.requestPayment({
                                    timeStamp: a.data.timeStamp,
                                    nonceStr: a.data.nonceStr,
                                    package: a.data.package,
                                    signType: a.data.signType,
                                    paySign: a.data.paySign,
                                    success: function(a) {
                                        console.log("这里是支付成功"), console.log(a), e.util.request({
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdstore&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            method: "POST",
                                            data: {
                                                id: s,
                                                user_id: n.data.user_id,
                                                store_name: g,
                                                address: f,
                                                announcement: y,
                                                storetype_id: T,
                                                start_time: h,
                                                end_time: m,
                                                keyword: p,
                                                skzf: b,
                                                wifi: D,
                                                mftc: q,
                                                jzxy: C,
                                                tgbj: z,
                                                sfxx: U,
                                                tel: w,
                                                logo: d,
                                                weixin_logo: r,
                                                ad: A,
                                                img: P,
                                                money: F,
                                                details: x,
                                                coordinates: _,
                                                type: l,
                                                vr_link: v
                                            },
                                            success: function(e) {
                                                console.log("这里是发布成功"), console.log(e), 1 == e.data && (wx.showToast({
                                                    title: "入驻成功",
                                                    icon: "",
                                                    image: "",
                                                    duration: 2e3,
                                                    mask: !0,
                                                    success: function(e) {},
                                                    fail: function(e) {},
                                                    complete: function(e) {}
                                                }), setTimeout(function() {
                                                    wx.reLaunch({
                                                        url: "../logs/logs",
                                                        success: function(e) {},
                                                        fail: function(e) {},
                                                        complete: function(e) {}
                                                    });
                                                }, 2e3));
                                            }
                                        });
                                    },
                                    fail: function(e) {
                                        console.log(e), wx.showToast({
                                            title: "支付失败",
                                            duration: 1e3
                                        });
                                    }
                                });
                            }
                        });
                    } else wx.showToast({
                        title: "手机验证错误",
                        icon: "",
                        image: "",
                        duration: 2e3,
                        mask: !0,
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    });
                }
            }
        });
    },
    reset: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        console.log(this.data), a.splice(0, a.length), t.splice(0, t.length);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
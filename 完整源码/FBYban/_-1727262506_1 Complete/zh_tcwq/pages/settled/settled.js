var e = getApp(), a = [], t = [];

Page({
    data: {
        hidden1: !1,
        hidden2: !0,
        hidden3: !0,
        index: 0,
        inde: 0,
        index_two: 0,
        prompt: !1,
        time: "00:00",
        time1: "00:00",
        choise: !1,
        images: [],
        upload_img: [],
        wechat: null,
        hotel_log1: null,
        lunbo_len: 0,
        upload_img_length: 0,
        getmsg: "获取验证码",
        tel_code: !1,
        sms: !1,
        know: !1,
        disabled_btn: !0,
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
        console.log(a.data), console.log(e);
        var t = a.data.stick, o = e.currentTarget.id;
        for (var n in t) t[n].hidden1 = n != o;
        a.setData({
            stick: t,
            type: t[o].type,
            inmoney: t[o].money
        });
    },
    onLoad: function(a) {
        var t = this, o = wx.getStorageSync("System").pt_name, n = wx.getStorageSync("System").rz_xuz;
        t.setData({
            pt_name: o,
            rz_xuz: n
        }), console.log(t.data);
        var l = wx.getStorageSync("url2"), i = wx.getStorageSync("openid"), c = wx.getStorageSync("users").id;
        console.log("用户的openid为 " + i + " 用户的user_id为 " + c), wx.login({
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
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageuserinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: c
            },
            success: function(a) {
                console.log(a), 1 == a.data.state && e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesjdlogin&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: c
                    },
                    success: function(e) {
                        console.log(e), 0 == e.data ? t.setData({
                            mystore: !0
                        }) : 2 == e.data.time_over ? wx.showModal({
                            title: "提示",
                            content: "你已经入驻过了哦",
                            showCancel: !0,
                            cancelText: "返回",
                            confirmText: "跳转首页",
                            success: function(e) {
                                e.confirm ? wx.reLaunch({
                                    url: "../index/index",
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                }) : wx.navigateBack({
                                    delta: 1
                                });
                            },
                            fail: function(e) {
                                console.log(1);
                            },
                            complete: function(e) {}
                        }) : 1 == e.data.time_over && wx.showModal({
                            title: "提示",
                            content: "你的入驻已到期，是否继续入驻",
                            showCancel: !0,
                            cancelText: "取消",
                            cancelColor: "",
                            confirmText: "确定",
                            confirmColor: "",
                            success: function(e) {
                                e.confirm ? console.log("用户点击确定") : e.cancel && wx.reLaunch({
                                    url: "../logs/logs",
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                });
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                        });
                    }
                });
            }
        }), t.setData({
            user_id: c,
            openid: i,
            url: l
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageissms&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e), 1 == e.data ? t.setData({
                    send: !1,
                    sms: !0
                }) : t.setData({
                    send: !0,
                    sms: !1,
                    tel_code: !0
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e);
                var a = e.data, o = [];
                a.map(function(e) {
                    var a = {};
                    a = e.type_name, o.push(a);
                }), console.log(o), t.setData({
                    store: a,
                    store_type: o
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageinmoney&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e);
                var a = e.data;
                for (var o in a) a[o].money > 0 ? a[o].money1 = "（收费" + a[o].money + "元）" : a[o].money1 = "  免费", 
                1 == a[o].type ? (a[o].array = "一周" + a[o].money1, a[o].hidden1 = !1) : 2 == a[o].type ? (a[o].array = "半年" + a[o].money1, 
                a[o].hidden1 = !0) : 3 == a[o].type && (a[o].array = "一年" + a[o].money1, a[o].hidden1 = !0);
                t.setData({
                    stick: a,
                    type: a[0].type,
                    inmoney: a[0].money
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
        if ("" != o && null != o) if (/^[1][3,4,5,7,8][0-9]{9}$/.test(o)) {
            for (var n = "", l = 0; l < 6; l++) n += Math.floor(10 * Math.random());
            console.log(n), e.util.request({
                url: getApp().globalData.baseUrl + "c=apitc&a=dopagesms&acid=" + getApp().globalData.version,
                cachetime: "0",
                data: {
                    code: n,
                    tel: o
                },
                success: function(e) {
                    console.log(e), t.setData({
                        code: n,
                        num: n
                    });
                }
            });
            var i = 60, c = setInterval(function() {
                t.setData({
                    getmsg: i + "s后重新发送",
                    send: !0
                }), --i <= 0 && (clearInterval(c), t.setData({
                    getmsg: "获取验证码",
                    send: !1,
                    num: 0,
                    code: ""
                }));
            }, 1e3);
        } else wx.showModal({
            title: "提示",
            content: "您输入的不是11位电话号码，请确认是否正确",
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
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : t <= a ? wx.showModal({
            title: "提示",
            content: "营业结束时间不能为小于或等于营业开始时间",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : this.setData({
            time1: e.detail.value
        });
    },
    know: function() {
        var e = this, a = wx.getStorageSync("System"), t = e.data.know;
        1 == t ? e.setData({
            know: !1
        }) : e.setData({
            know: !0,
            node: a.rz_xuz
        });
    },
    add: function(e) {
        var a = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(e) {
                console.log(e);
                e.latitude, e.longitude, e.speed, e.accuracy;
                var t = e.latitude + "," + e.longitude;
                a.setData({
                    address: e.address,
                    coordinates: t
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
    getPhoneNumber: function(a) {
        var t = this, o = wx.getStorageSync("key"), n = a.detail.iv, l = a.detail.encryptedData;
        console.log(o), console.log(n), console.log(l), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagejiemi&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                sessionKey: o,
                iv: n,
                data: l
            },
            success: function(e) {
                console.log(e), t.setData({
                    num: e.data.phoneNumber
                });
            }
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
                    filePath: t,
                    header: {
                        token: getApp().globalData.token
                    },
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
                }), a.setData({
                    hotel_logo1: t
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
                    filePath: t,
                    header: {
                        token: getApp().globalData.token
                    },
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
                }), a.setData({
                    hotel_logo2: t
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
        var e = this, t = this.data.images;
        a = [], console.log(e.data);
        wx.getStorageSync("uniacid");
        var o = 9 - t.length;
        o > 0 && o <= 9 ? wx.chooseImage({
            count: o,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var o = a.tempFilePaths;
                console.log(o);
                var n = a.tempFilePaths;
                t = t.concat(n), console.log(t), e.setData({
                    images: t,
                    lunbo_len: t.length
                }), e.uploadimg({
                    url: e.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
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
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    uploadimg: function(e) {
        var t = this, o = e.i ? e.i : 0, n = e.success ? e.success : 0, l = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url,
            filePath: e.path[o],
            header: {
                token: getApp().globalData.token
            },
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), n++, a.push(e.data), console.log(o), console.log("上传商家轮播图时候提交的图片数组", a)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                l++, console.log("fail:" + o + "fail:" + l);
            },
            complete: function() {
                console.log(o), ++o == e.path.length ? (t.setData({
                    images: e.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + l)) : (console.log(o), 
                e.i = o, e.success = n, e.fail = l, t.uploadimg(e));
            }
        });
    },
    delete: function(e) {
        var t = this;
        console.log(t.data), console.log(a), Array.prototype.indexOf = function(e) {
            for (var a = 0; a < this.length; a++) if (this[a] == e) return a;
            return -1;
        }, Array.prototype.remove = function(e) {
            var a = this.indexOf(e);
            a > -1 && this.splice(a, 1);
        };
        var o = e.currentTarget.dataset.index, n = this.data.images;
        a.remove(a[o]), n.remove(n[o]), console.log(n), t.setData({
            images: n,
            lunbo_len: n.length
        });
    },
    upload_image: function() {
        var e = this, a = this.data.upload_img;
        t = [], console.log(a);
        wx.getStorageSync("uniacid");
        var o = 9 - a.length;
        o > 0 && o <= 9 ? wx.chooseImage({
            count: o,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var o = t.tempFilePaths;
                a = a.concat(o), console.log(a), e.setData({
                    upload_img: a,
                    upload_img_length: a.length
                }), e.already({
                    url1: e.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path1: a
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
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    already: function(e) {
        var a = this, o = e.j ? e.j : 0, n = e.success ? e.success : 0, l = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url1,
            filePath: e.path1[o],
            header: {
                token: getApp().globalData.token
            },
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), n++, t.push(e.data), a.setData({
                    uploaded: t
                }), console.log(o), console.log("上传商家介绍时候提交的图片数组", t)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                l++, console.log("fail:" + o + "fail:" + l);
            },
            complete: function() {
                console.log(o), ++o == e.path1.length ? (a.setData({
                    upload_img: e.path1
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + l)) : (console.log(o), 
                e.j = o, e.success = n, e.fail = l, a.already(e));
            }
        });
    },
    delete2: function(e) {
        var a = this;
        Array.prototype.indexOf = function(e) {
            for (var a = 0; a < this.length; a++) if (this[a] == e) return a;
            return -1;
        }, Array.prototype.remove = function(e) {
            var a = this.indexOf(e);
            a > -1 && this.splice(a, 1);
        };
        var o = e.currentTarget.dataset.index, n = this.data.upload_img;
        t.remove(t[o]), n.remove(n[o]), console.log(n), a.setData({
            upload_img: n,
            upload_img_length: n.length
        });
    },
    formSubmit: function(o) {
        var n = this;
        n.setData({
            disabled_btn: !1
        }), setTimeout(function() {
            n.setData({
                disabled_btn: !0
            });
        }, 1500), console.log(o), console.log(n.data);
        var l = o.detail.formId, i = Number(n.data.inmoney), c = n.data.type;
        console.log(i + " " + c);
        wx.getStorageSync("uniacid");
        var s = wx.getStorageSync("openid"), u = n.data.facilities, r = n.data.hotel_logo, d = n.data.wechat, g = o.detail.value.business_name, p = o.detail.value.business_keyword, f = n.data.address, m = n.data.time, h = n.data.time1, v = o.detail.value.business_number, w = o.detail.value.business_notice, x = o.detail.value.vr_demo, y = o.detail.value.textarea, b = n.data.coordinates, D = n.data.images, _ = n.data.upload_img, S = n.data.store, T = n.data.index, A = S[T], k = S[T].id, C = n.data.tel_code;
        console.log(A);
        var q = i, P = (n.data.index_two, g + p + f + w + y + x);
        console.log(P), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: P,
                mode: "wx"
            },
            method: "POST",
            header: {
                token: getApp().globalData.token
            },
            success: function(i) {
                if (console.log(i.data), "function" == typeof o && o(n), 0 !== i.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                if (console.log(a), console.log(t), 0 == a.length) S = ""; else var S = a.join(",");
                if (0 == t.length) T = ""; else var T = t.join(",");
                var A = "";
                if ("" != y && null != y || (y = ""), "" == g ? A = "请输入商家名称" : "" == p ? A = "请输入关键字" : "" == f ? A = "请输入详细地址" : null == u ? A = "请勾选店内设施" : 0 == u.length ? A = "请勾选店内设施" : "00:00" == m ? A = "请输入营业开始时间" : "00:00" == h ? A = "请输入营业结束时间" : "" == v ? A = "请输入联系电话" : "" == w ? A = "请输入公告说明" : "" == y ? A = "请输入商家介绍" : void 0 == r ? A = "请上传商家logo" : 0 == D.length ? A = "请上传商家轮播图" : 0 == _.length ? A = "请上传商家详情图" : void 0 == d ? A = "请上传老板微信" : y.length >= 540 ? A = "内容超出" : 0 == n.data.sms && null == n.data.num && (A = "请进行手机号验证"), 
                "" != A) wx.showModal({
                    title: "提示",
                    content: A,
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确定",
                    confirmColor: "",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    for (var P = 0, z = 0, U = 0, M = 0, I = 0, j = 0, F = 0; F < u.length; F++) if ("刷卡支付" == u[F]) P = 1; else if ("免费wifi" == u[F]) z = 1; else if ("免费停车" == u[F]) U = 1; else if ("禁止吸烟" == u[F]) M = 1; else if ("提供包间" == u[F]) I = 1; else if ("沙发休闲" == u[F]) j = 1;
                    if (1 == C) {
                        var L = wx.getStorageSync("city");
                        q <= 0 ? e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestore&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            method: "POST",
                            header: {
                                token: getApp().globalData.token
                            },
                            data: {
                                user_id: n.data.user_id,
                                store_name: g,
                                address: f,
                                announcement: w,
                                storetype_id: k,
                                area_id: "",
                                start_time: m,
                                end_time: h,
                                keyword: p,
                                skzf: P,
                                wifi: z,
                                mftc: U,
                                jzxy: M,
                                tgbj: I,
                                sfxx: j,
                                tel: v,
                                logo: r,
                                weixin_logo: d,
                                ad: S,
                                img: T,
                                money: q,
                                details: y,
                                coordinates: b,
                                type: c,
                                vr_link: x,
                                cityname: L
                            },
                            success: function(a) {
                                console.log("这里是发布成功"), console.log(a);
                                var t = a.data;
                                console.log(t), e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagerzmessage&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        form_id: l,
                                        openid: s,
                                        store_id: t
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }), e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavestorepaylog&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        store_id: t,
                                        money: q
                                    },
                                    success: function(e) {
                                        console.log("这是入驻成功"), console.log(e);
                                    }
                                }), 1 == wx.getStorageSync("System").sj_audit ? wx.showModal({
                                    title: "提示",
                                    content: "提交成功，等待审核",
                                    success: function(e) {
                                        e.confirm ? setTimeout(function() {
                                            wx.reLaunch({
                                                url: "../logs/logs",
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            });
                                        }, 500) : e.cancel && setTimeout(function() {
                                            wx.reLaunch({
                                                url: "../logs/logs",
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            });
                                        }, 500);
                                    }
                                }) : wx.showModal({
                                    title: "提示",
                                    content: "入驻成功",
                                    success: function(e) {
                                        e.confirm ? setTimeout(function() {
                                            wx.reLaunch({
                                                url: "../logs/logs",
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            });
                                        }, 500) : e.cancel && setTimeout(function() {
                                            wx.reLaunch({
                                                url: "../logs/logs",
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            });
                                        }, 500);
                                    }
                                });
                            }
                        }) : e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                openid: s,
                                money: q
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
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestore&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            method: "POST",
                                            data: {
                                                user_id: n.data.user_id,
                                                store_name: g,
                                                address: f,
                                                announcement: w,
                                                storetype_id: k,
                                                area_id: "",
                                                start_time: m,
                                                end_time: h,
                                                keyword: p,
                                                skzf: P,
                                                wifi: z,
                                                mftc: U,
                                                jzxy: M,
                                                tgbj: I,
                                                sfxx: j,
                                                tel: v,
                                                logo: r,
                                                weixin_logo: d,
                                                ad: S,
                                                money: q,
                                                img: T,
                                                details: y,
                                                coordinates: b,
                                                type: c,
                                                vr_link: x,
                                                cityname: L
                                            },
                                            success: function(a) {
                                                console.log("这里是发布成功"), console.log(a);
                                                var t = a.data;
                                                e.util.request({
                                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagerzmessage&acid=" + getApp().globalData.version,
                                                    cachetime: "0",
                                                    data: {
                                                        form_id: l,
                                                        openid: s,
                                                        store_id: t
                                                    },
                                                    success: function(e) {
                                                        console.log(e);
                                                    }
                                                }), e.util.request({
                                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavestorepaylog&acid=" + getApp().globalData.version,
                                                    cachetime: "0",
                                                    data: {
                                                        store_id: t,
                                                        money: q
                                                    },
                                                    success: function(e) {
                                                        console.log("这是入驻成功"), console.log(e);
                                                        var a = wx.getStorageSync("System");
                                                        console.log(a), 1 == a.sj_audit ? wx.showModal({
                                                            title: "提示",
                                                            content: "提交成功，等待审核"
                                                        }) : wx.showModal({
                                                            title: "提示",
                                                            content: "入驻成功"
                                                        });
                                                    }
                                                }), setTimeout(function() {
                                                    wx.reLaunch({
                                                        url: "../logs/logs",
                                                        success: function(e) {},
                                                        fail: function(e) {},
                                                        complete: function(e) {}
                                                    });
                                                }, 2e3);
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
                        title: "验证码错误",
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
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
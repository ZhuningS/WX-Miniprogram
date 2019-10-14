var e = getApp(), a = [];

Page({
    data: {
        stick_none: !1,
        checked: !1,
        checked_welfare: !1,
        checked_average: !1,
        checked_password: !1,
        know: !1,
        num: 1,
        disabled: !1
    },
    bindMultiPickerChange: function(e) {
        this.setData({
            multiIndex: e.detail.value
        });
    },
    bindPickerChange: function(e) {
        var a = this.data.stock[e.detail.value];
        this.setData({
            index: e.detail.value,
            text: a
        });
    },
    onLoad: function(a) {
        var t = this, i = wx.getStorageSync("users").id;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                user_id: i
            },
            success: function(e) {
                999 == e.data.state && wx.showModal({
                    title: "提示",
                    content: "您的账号异常，请尽快联系管理员",
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {
                        wx.navigateBack({
                            delta: 1
                        });
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            }
        });
        var n = wx.getStorageSync("System");
        console.log(n), t.setData({
            node: wx.getStorageSync("System").ft_xuz,
            is_hbfl: n.is_hbfl
        });
        var c = a.info, o = a.money, s = a.type_id, l = a.type2_id, r = wx.getStorageSync("System");
        wx.setNavigationBarTitle({
            title: c
        });
        wx.getStorageSync("uniacid");
        console.log(wx.getStorageSync("users")), t.setData({
            type_id: s,
            type2_id: l,
            info: c,
            procedures: Number(r.hb_sxf),
            money: o,
            url: wx.getStorageSync("url2"),
            url1: wx.getStorageSync("url"),
            name: wx.getStorageSync("users").name
        }), wx.getLocation({
            type: "wgs84",
            success: function(a) {
                var i = a.latitude + "," + a.longitude;
                e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagemap&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        op: i
                    },
                    success: function(e) {
                        t.setData({
                            address: e.data.result.address
                        });
                    }
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetop&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                var a = e.data;
                for (var i in a) 1 == a[i].type ? a[i].array = "置顶一天（收费" + a[i].money + "元）" : 2 == a[i].type ? a[i].array = "置顶一周（收费" + a[i].money + "元）" : 3 == a[i].type && (a[i].array = "置顶一月（收费" + a[i].money + "元）");
                var n = [];
                a.map(function(e) {
                    var a = {};
                    a = e.array, n.push(a);
                }), n.push("取消置顶"), t.setData({
                    stock: n,
                    stick: a
                });
            }
        }), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagelabel&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                type2_id: l
            },
            success: function(e) {
                for (var a in e.data) e.data[a].click_class = "selected1";
                t.setData({
                    label: e.data
                });
            }
        });
    },
    selected: function(e) {
        var a = this, t = e.currentTarget.id, i = a.data.stick;
        a.setData({
            stick_info: i[t].array,
            money1: i[t].money,
            type: i[t].type,
            checked: !1,
            stick_none: !0
        });
    },
    add: function(e) {
        var a = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(e) {
                e.latitude, e.longitude, e.speed, e.accuracy;
                var t = e.latitude + "," + e.longitude;
                a.setData({
                    address: e.address,
                    coordinates: t
                });
            }
        });
    },
    label: function(e) {
        var a = this, t = a.data.label, i = e.currentTarget.dataset.inde;
        "selected1" == t[i].click_class ? t[i].click_class = "selected2" : "selected2" == t[i].click_class && (t[i].click_class = "selected1"), 
        a.setData({
            label: t
        });
    },
    know: function(e) {
        var a = this, t = a.data.know;
        1 == t ? a.setData({
            know: !1
        }) : a.setData({
            know: !0
        });
    },
    imgArray1: function(e) {
        var t = this, i = (wx.getStorageSync("uniacid"), 9 - a.length);
        i > 0 && i <= 9 ? wx.chooseImage({
            count: i,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var a = e.tempFilePaths;
                console.log(a), t.uploadimg({
                    url: t.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
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
    uploadimg: function(e) {
        var t = this, i = e.i ? e.i : 0, n = e.success ? e.success : 0, c = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url,
            filePath: e.path[i],
            header: {
                token: getApp().globalData.token
            },
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (n++, a.push(e.data.replace(/[\r\n]/g, "")), t.setData({
                    imgArray1: a
                })) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                c++;
            },
            complete: function() {
                ++i == e.path.length ? (t.setData({
                    images: e.path
                }), wx.hideToast()) : (e.i = i, e.success = n, e.fail = c, t.uploadimg(e));
            }
        });
    },
    delete: function(e) {
        var t = this;
        Array.prototype.indexOf = function(e) {
            for (var a = 0; a < this.length; a++) if (this[a] == e) return a;
            return -1;
        }, Array.prototype.remove = function(e) {
            var a = this.indexOf(e);
            a > -1 && this.splice(a, 1);
        };
        var i = e.currentTarget.dataset.inde;
        a.remove(a[i]), t.setData({
            imgArray1: a
        });
    },
    switch1Change: function(e) {
        this.setData({
            checked: e.detail.value,
            checked1: e.detail.value
        });
    },
    switch2Change: function(e) {
        this.setData({
            checked_welfare: e.detail.value
        });
    },
    switch3Change: function(e) {
        this.setData({
            checked_average: e.detail.value
        });
    },
    switch4Change: function(e) {
        this.setData({
            checked_password: e.detail.value
        });
    },
    formSubmit: function(t) {
        var i = t.detail.value.content + t.detail.value.name + t.detail.value.tel, n = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: i,
                mode: "wx"
            },
            method: "POST",
            success: function(i) {
                if (0 !== i.data) return wx.showModal({
                    title: "提示",
                    content: "你的帖子有违禁内容，请重新编辑"
                }), !1;
                console.log("这是保存formid2"), console.log(t), e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagesaveformid&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: wx.getStorageSync("users").id,
                        form_id: t.detail.formId,
                        openid: wx.getStorageSync("openid")
                    },
                    success: function(e) {}
                });
                var c = wx.getStorageSync("city"), o = n.data.num + 1;
                n.setData({
                    num: o
                });
                var s = n.data.money1, l = n.data.address, r = n.data.procedures;
                if (null == n.data.type) d = 0; else var d = n.data.type;
                if (null == s) s = 0; else s = n.data.money1;
                var u = n.data.label, p = [];
                for (var g in u) "selected2" == u[g].click_class && p.push(u[g]);
                var f = [];
                p.map(function(e) {
                    var a = {};
                    a.label_id = e.id, f.push(a);
                });
                var h = wx.getStorageSync("openid"), m = (t.detail.formId, t.detail.value.content), y = t.detail.value.name, w = t.detail.value.tel;
                console.log(w);
                var v = n.data.lunbo;
                null != v && 0 != v.length || (v = "");
                n.data.url, wx.getStorageSync("uniacid");
                var b = n.data.type2_id, _ = n.data.type_id, x = Number(n.data.money) + Number(s), S = x, D = wx.getStorageSync("users").id;
                console.log(D);
                var k = "", A = n.data.checked_welfare, T = n.data.checked_password, q = n.data.checked_average, P = 0, U = "", N = "", C = 0, M = 0, z = new RegExp("^[一-龥]+$"), O = 0;
                if (1 == A) {
                    if (0 == q) {
                        M = 1, P = Number(t.detail.value.welfare_money), N = Number(t.detail.value.welfare_share);
                        R = P / N;
                        O = P + r / 100 * P, x += Number(O.toFixed(2));
                    } else {
                        M = 2, P = Number(t.detail.value.welfare_money), N = Number(t.detail.value.welfare_share);
                        var R = 1;
                        O = P * N + P * N * (r / 100), x += Number(O.toFixed(2));
                    }
                    1 == T ? (U = t.detail.value.welfare_pass, C = 2) : C = 1;
                } else x = x;
                if ("" == m ? k = "内容不能为空" : m.length >= 540 ? k = "内容超出了" : "" == y ? k = "姓名不能为空" : "" == w ? k = "电话不能为空" : 1 == A && ("" == P ? k = "红包金额不能为空" : !n.data.checked_average && P < .01 ? k = "福利红包金额不能小于1元" : "" == N ? k = "红包个数不能为空" : R < .01 ? k = "红包份数过大，请合理设置" : n.data.checked_average && P < .01 ? k = "单个红包最小金额不能小于0.1元" : 1 == T && ("" == U ? k = "口令不能为空" : z.test(U) || (k = "口令只能输入汉字"))), 
                "" != k) wx.showModal({
                    title: "提示",
                    content: k,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    x = x;
                    r = wx.getStorageSync("System");
                    if (0 == a.length) F = ""; else var F = a.join(",");
                    x <= 0 ? (n.setData({
                        disabled: !0
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageposting&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        method: "POST",
                        data: {
                            details: m,
                            img: F,
                            user_id: D,
                            user_name: y,
                            user_tel: w,
                            type2_id: b,
                            type_id: _,
                            money: x,
                            type: d,
                            sz: f,
                            address: l,
                            hb_money: P,
                            hb_keyword: U,
                            hb_num: N,
                            hb_type: C,
                            hb_random: M,
                            cityname: c
                        },
                        success: function(e) {
                            wx.showToast({
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
                                    url: "../../index/index",
                                    success: function(e) {},
                                    fail: function(e) {},
                                    complete: function(e) {}
                                });
                            }, 2e3);
                        }
                    })) : (n.setData({
                        disabled: !0
                    }), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            openid: h,
                            money: x
                        },
                        success: function(a) {
                            wx.requestPayment({
                                timeStamp: a.data.timeStamp,
                                nonceStr: a.data.nonceStr,
                                package: a.data.package,
                                signType: a.data.signType,
                                paySign: a.data.paySign,
                                success: function(a) {
                                    e.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageposting&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        method: "POST",
                                        data: {
                                            details: m,
                                            img: F,
                                            user_id: D,
                                            user_name: y,
                                            user_tel: w,
                                            type2_id: b,
                                            type_id: _,
                                            money: x,
                                            type: d,
                                            sz: f,
                                            address: l,
                                            hb_money: P,
                                            hb_keyword: U,
                                            hb_num: N,
                                            hb_type: C,
                                            hb_random: M,
                                            cityname: c
                                        },
                                        success: function(a) {
                                            0 == S || null == S || "" == S || e.util.request({
                                                url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavetzpaylog&acid=" + getApp().globalData.version,
                                                cachetime: "0",
                                                data: {
                                                    tz_id: a.data,
                                                    money: S
                                                },
                                                success: function(e) {}
                                            }), wx.showToast({
                                                title: "发布成功",
                                                icon: "",
                                                image: "",
                                                duration: 2e3,
                                                mask: !0,
                                                success: function(e) {},
                                                fail: function(e) {},
                                                complete: function(e) {}
                                            }), setTimeout(function() {
                                                wx.switchTab({
                                                    url: "../../index/index",
                                                    success: function(e) {},
                                                    fail: function(e) {},
                                                    complete: function(e) {}
                                                });
                                            }, 2e3);
                                        }
                                    });
                                },
                                fail: function(e) {
                                    wx.showToast({
                                        title: "支付失败",
                                        duration: 1e3
                                    });
                                },
                                complete: function(e) {
                                    console.log(e), "requestPayment:fail cancel" == e.errMsg && (wx.showToast({
                                        title: "取消支付",
                                        icon: "loading",
                                        duration: 1e3
                                    }), n.setData({
                                        disabled: !1
                                    }));
                                }
                            });
                        }
                    }));
                }
            }
        });
    },
    cancel: function(e) {
        this.setData({
            money1: 0,
            type: 0,
            checked: !1,
            stick_none: !1,
            checked1: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        console.log(this.data), a.splice(0, a.length);
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
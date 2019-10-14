var e = getApp();

Page({
    data: {
        hidden: !1,
        hidden2: !0,
        hidden3: !0,
        hidden4: !1,
        hidden5: !0,
        hidden6: !1,
        button: !1,
        cash_wei: !1,
        cash_wei2: !1,
        tx_money: 0,
        sxf: 0,
        sh_money: 0,
        objectArray: [ {
            id: 1002,
            name: "工商银行"
        }, {
            id: 1005,
            name: "农业银行"
        }, {
            id: 1026,
            name: "中国银行"
        }, {
            id: 1003,
            name: "建设银行"
        }, {
            id: 1001,
            name: "招商银行"
        }, {
            id: 1066,
            name: "邮储银行"
        }, {
            id: 1020,
            name: "交通银行"
        }, {
            id: 1004,
            name: "浦发银行"
        }, {
            id: 1006,
            name: "民生银行"
        }, {
            id: 1009,
            name: "兴业银行"
        }, {
            id: 1010,
            name: "平安银行"
        }, {
            id: 1021,
            name: "中信银行"
        }, {
            id: 1025,
            name: "华夏银行"
        }, {
            id: 1027,
            name: "广发银行"
        }, {
            id: 1022,
            name: "光大银行"
        }, {
            id: 1032,
            name: "北京银行"
        }, {
            id: 1056,
            name: "宁波银行"
        } ]
    },
    onLoad: function(e) {
        var a = this;
        console.log(e), a.setData({
            state: e.state,
            system: wx.getStorageSync("System")
        }), 2 == e.state && a.setData({
            store_id: e.store_id,
            profit: e.profit
        }), a.reload();
    },
    reload: function(a) {
        var t = this, o = wx.getStorageSync("users").id;
        if (1 == t.data.state) wx.login({
            success: function(a) {
                console.log("这是登录所需要的code"), console.log(a.code);
                var o = a.code;
                wx.setStorageSync("code", o), wx.getUserInfo({
                    success: function(a) {
                        var i = a.userInfo.nickName, n = a.userInfo.avatarUrl;
                        e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopageopenid&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                code: o
                            },
                            success: function(a) {
                                var o = n, c = i, s = a.data.openid;
                                e.util.request({
                                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagelogin&acid=" + getApp().globalData.version,
                                    cachetime: "0",
                                    data: {
                                        openid: s,
                                        img: o,
                                        name: c
                                    },
                                    success: function(a) {
                                        console.log(a);
                                        var o = a.data;
                                        e.util.request({
                                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagemytixian&acid=" + getApp().globalData.version,
                                            cachetime: "0",
                                            data: {
                                                user_id: a.data.id
                                            },
                                            success: function(e) {
                                                console.log(e);
                                                var a = 0;
                                                for (var i in e.data) a += Number(e.data[i].tx_cost);
                                                console.log(a);
                                                var n = Number(o.money);
                                                n = n.toFixed(2), console.log(n), t.setData({
                                                    money: n
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }); else {
            t.data.store_id;
            t.setData({
                money: t.data.profit
            });
        }
        console.log(wx.getStorageSync("System"));
        var i = wx.getStorageSync("System"), n = i.tx_sxf / 100, c = i.tx_sxf, s = i.tx_money;
        t.setData({
            tx_price: s,
            tx_sxf: n,
            tx_sxf1: c,
            user_id: o
        });
        wx.getStorageSync("img"), wx.getStorageSync("url"), wx.getStorageSync("name"), wx.getStorageSync("openid");
    },
    check: function(e) {
        this.setData({
            hidden: !1,
            hidden2: !0,
            hidden3: !0,
            hidden4: !1,
            hidden5: !0,
            hidden6: !1,
            cash_wei: !1,
            cash_wei2: !1,
            cash_zhi: !0,
            cash_zhi2: !0,
            cash_ka: !0,
            cash_ka2: !0
        });
    },
    check2: function(e) {
        this.setData({
            hidden: !0,
            hidden2: !1,
            hidden3: !1,
            hidden4: !0,
            hidden5: !0,
            hidden6: !1,
            cash_wei: !0,
            cash_wei2: !0,
            cash_ka: !0,
            cash_ka2: !0,
            cash_zhi2: !1,
            cash_zhi: !1
        });
    },
    check3: function(e) {
        this.setData({
            hidden: !0,
            hidden2: !1,
            hidden3: !0,
            hidden4: !1,
            hidden5: !1,
            hidden6: !0,
            cash_wei: !0,
            cash_wei2: !0,
            cash_zhi: !0,
            cash_zhi2: !0,
            cash_ka: !1,
            cash_ka2: !1
        });
    },
    bindblur: function(e) {
        var a = this, t = Number(e.detail.value), o = a.data.money;
        t >= o && (t = o);
        var i = a.data.tx_sxf, n = t - t * i;
        a.setData({
            tx_money: t,
            sxf: Number(t * i).toFixed(2),
            sh_money: Number(n).toFixed(2)
        }), t > 0 ? a.setData({
            button: !0
        }) : a.setData({
            button: !1
        });
    },
    formSubmit: function(a) {
        var t = this;
        console.log(a), console.log(t.data);
        var o = a.detail.formId, i = t.data.store_id, n = t.data.state, c = t.data.user_id, s = (t.data.tx_price, 
        t.data.sh_money), d = (t.data.sxf, Number(t.data.tx_money).toFixed(2)), l = wx.getStorageSync("openid");
        if (d < wx.getStorageSync("System").tx_money) wx.showModal({
            title: "提示",
            content: "不到提现门槛，再接再厉哦",
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }); else {
            if (1 == t.data.hidden2) {
                u = 2;
                console.log("提现的方式为微信" + u);
            } else if (1 == t.data.hidden4) {
                u = 1;
                console.log("提现的方式为支付宝" + u);
            } else if (1 == t.data.hidden6) {
                var u = 3;
                console.log("提现的方式为银联" + u);
            }
            if (1 == u) {
                var r = a.detail.value.zfname, m = a.detail.value.zfkahao, f = a.detail.value.zfka;
                "" == r || null == r ? wx.showToast({
                    title: "姓名不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : "" == m || "" == f ? wx.showToast({
                    title: "账号不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : f != m ? wx.showToast({
                    title: "输入不一致",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : f == m && e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagetixian&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: c,
                        type: u,
                        tx_cost: d,
                        sj_cost: s,
                        name: r,
                        username: f,
                        method: n,
                        store_id: i
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "提现成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(e) {},
                            fail: function(e) {},
                            complete: function(e) {}
                        }), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetxmessage&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                form_id: o,
                                openid: l,
                                txsh_id: a.data
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                });
            } else if (2 == u) {
                var g = a.detail.value.wxname, h = a.detail.value.wxkahao, p = a.detail.value.wxka;
                "" == g || null == g ? wx.showToast({
                    title: "姓名不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : "" == h || "" == p ? wx.showToast({
                    title: "账号不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : p != h ? wx.showToast({
                    title: "输入不一致",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : h == p && e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagetixian&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: c,
                        type: u,
                        tx_cost: d,
                        sj_cost: s,
                        name: g,
                        username: p,
                        method: n,
                        store_id: i
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "提现成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(e) {},
                            fail: function(e) {},
                            complete: function(e) {}
                        }), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetxmessage&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                form_id: o,
                                openid: l,
                                txsh_id: a.data
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                });
            } else if (3 == u) {
                var x = a.detail.value.ylname, _ = a.detail.value.ylka, w = a.detail.value.ylkahao;
                "" == x || null == x ? wx.showToast({
                    title: "姓名不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : "" == _ || "" == w ? wx.showToast({
                    title: "账号不能为空",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : _ != w ? wx.showToast({
                    title: "输入不一致",
                    icon: "",
                    image: "",
                    duration: 2e3,
                    mask: !0,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }) : _ == w && e.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagetixian&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        user_id: c,
                        type: u,
                        tx_cost: d,
                        sj_cost: s,
                        name: x,
                        username: _,
                        method: n,
                        store_id: i,
                        bank_number: t.data.bank_id || 0
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "提现成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(e) {},
                            fail: function(e) {},
                            complete: function(e) {}
                        }), e.util.request({
                            url: getApp().globalData.baseUrl + "c=apitc&a=dopagetxmessage&acid=" + getApp().globalData.version,
                            cachetime: "0",
                            data: {
                                form_id: o,
                                openid: l,
                                txsh_id: a.data
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    }
                });
            }
        }
    },
    bindPickerChange: function(e) {
        var a = this;
        console.log("picker发送选择改变，携带值为", e.detail.value);
        var t = e.detail.value;
        a.setData({
            index: t,
            bank_id: a.data.objectArray[t].id
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        console.log(e.data);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
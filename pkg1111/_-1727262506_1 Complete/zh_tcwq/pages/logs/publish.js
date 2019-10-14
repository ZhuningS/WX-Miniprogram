var e = getApp(), a = [], t = [];

Page({
    data: {
        items: [ {
            name: "正品保证",
            value: "正品保证"
        }, {
            name: "全程包邮",
            value: "全程包邮"
        }, {
            name: "24h发货",
            value: "24h发货"
        }, {
            name: "售后保障",
            value: "售后保障"
        }, {
            name: "极速退款",
            value: "极速退款"
        }, {
            name: "七天包退",
            value: "七天包退"
        } ],
        is_remen: 0,
        is_tuijian: 0,
        spec: [ {
            text: "",
            id: 0,
            spec: [ {
                id: "0",
                name: "",
                price: "",
                spec_id: ""
            } ]
        } ],
        add_spec: !1,
        spec1: [ {
            text: "",
            id: 0,
            spec: [ {
                id: "0",
                name: "",
                price: "",
                spec_id: ""
            } ]
        } ],
        classification: !1,
        imgarr1: [],
        imgarr2: []
    },
    onLoad: function(s) {
        a = [], t = [], console.log("onLoad");
        var o = this, c = s.store_id, i = wx.getStorageSync("url"), n = wx.getStorageSync("url");
        o.setData({
            url: i,
            url1: n,
            store_id: c
        });
        o.data.add;
        console.log(o.data.spec), e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagespec&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                shop_id: o.data.store_id,
                uniacid: getApp().globalData.version
            },
            success: function(e) {
                console.log(e), o.setData({
                    label: e.data
                });
            }
        });
    },
    classification: function(a) {
        t = this;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagespec&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                shop_id: t.data.store_id,
                uniacid: getApp().globalData.version
            },
            success: function(e) {
                e.data.length > 0 ? (console.log(e), t.setData({
                    label: e.data
                })) : wx.showModal({
                    title: "提示",
                    content: "还没有创建商品规格分类，点击确认前往创建",
                    success: function(e) {
                        e.confirm ? (wx.navigateTo({
                            url: "../redbag/good_spec_manage?storeid=" + t.data.store_id
                        }), t.setData({
                            classification: !1
                        })) : e.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
        var t = this;
        console.log(a);
        var s = a.currentTarget.dataset.index, o = t.data.classification;
        0 == o ? t.setData({
            classification: !0,
            index: s
        }) : t.setData({
            classification: !1,
            index: s
        });
    },
    select: function(e) {
        var a = this;
        console.log(e), console.log(a.data);
        a.data.label;
        var t = a.data.index, s = e.currentTarget.dataset.name, o = e.currentTarget.dataset.id, c = (a.data.add, 
        a.data.text1, a.data.text2, a.data.text3, a.data.id1, a.data.id2, a.data.id3, a.data.spec);
        c[t].text = s, c[t].spec_id = o, console.log(c), a.setData({
            spec: c,
            classification: !1
        });
    },
    imgArray1: function(e) {
        var a = this, t = (wx.getStorageSync("uniacid"), this.data.imgarr1);
        console.log(t), wx.chooseImage({
            count: 4 - t.length,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var s = e.tempFilePaths;
                t = t.concat(s), console.log(a.data.url), a.uploadimg({
                    url: a.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: t
                }), console.log(e.data);
            }
        });
    },
    uploadimg: function(e) {
        console.log(e);
        var t = this, s = e.i ? e.i : 0, o = e.success ? e.success : 0, c = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url,
            header: {
                token: getApp().globalData.token
            },
            filePath: e.path[s],
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), o++, a.push(e.data), console.log("上传商品主图时候提交的图片数组", a)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                c++, console.log("fail:" + s + "fail:" + c);
            },
            complete: function() {
                console.log(s), ++s == e.path.length ? (t.setData({
                    imgarr1: e.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + o + " 失败：" + c)) : (console.log(s), 
                e.i = s, e.success = o, e.fail = c, t.uploadimg(e));
            }
        });
    },
    delete: function(e) {
        var t = this, s = e.currentTarget.dataset.index, o = t.data.imgarr1;
        console.log(o, a), o.splice(s, 1), a.splice(s, 1), console.log("删除imgarr1里的图片后剩余的图片", a), 
        t.setData({
            imgarr1: o
        });
    },
    imgArray2: function(e) {
        var a = this, s = (wx.getStorageSync("uniacid"), this.data.imgarr2);
        t = [], console.log(s), wx.chooseImage({
            count: 8 - s.length,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var t = e.tempFilePaths;
                s = s.concat(t), a.uploadimg1({
                    url: a.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: s
                });
            }
        });
    },
    uploadimg1: function(e) {
        var a = this, s = e.i ? e.i : 0, o = e.success ? e.success : 0, c = e.fail ? e.fail : 0;
        wx.uploadFile({
            url: e.url,
            header: {
                token: getApp().globalData.token
            },
            filePath: e.path[s],
            name: "upfile",
            formData: null,
            success: function(e) {
                "" != e.data ? (console.log(e), o++, t.push(e.data), console.log("上传商品详情页时候提交的图片数组", t)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(e) {
                c++, console.log("fail:" + s + "fail:" + c);
            },
            complete: function() {
                console.log(s), ++s == e.path.length ? (a.setData({
                    imgarr2: e.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + o + " 失败：" + c)) : (console.log(s), 
                e.i = s, e.success = o, e.fail = c, a.uploadimg1(e));
            }
        });
    },
    delete1: function(e) {
        var a = this, s = e.currentTarget.dataset.index, o = a.data.imgarr2;
        console.log(o, t), o.splice(s, 1), t.splice(s, 1), console.log("删除imgarr2里的图片后剩余的图片", t), 
        a.setData({
            imgarr2: o
        });
    },
    add: function(e) {
        var a = this;
        console.log(a.data), console.log(e);
        e.currentTarget.dataset.index;
        var t = e.currentTarget.dataset.id, s = a.data.spec;
        console.log(s);
        var o = a.data.spec1[0].spec[0];
        console.log(t), s[t].spec.push(o);
        for (var c in s) for (var i in s[c].spec) s[c].spec[i].id = s[c].id;
        console.log(s), s[t].spec.length > 99 ? wx.showModal({
            title: "提示",
            content: "只能添加三条子分类",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        }) : a.setData({
            spec: s
        });
    },
    add1: function(e) {
        var a = this, t = e.currentTarget.dataset.index;
        console.log(a.data), console.log(t);
        var s = a.data.spec, o = a.data.spec1[0];
        console.log(o), 1 == s.length ? (console.log("只要一个"), o.id = 1) : 2 == s.length && (console.log("只要两个"), 
        o.id = 2), s.push(o);
        for (var c in s) for (var i in s[c].spec) s[c].spec[i].id = s[c].id;
        s.length <= 3 ? (console.log(o), console.log(s), a.setData({
            spec: s,
            len: s.length
        })) : wx.showModal({
            title: "提示",
            content: "只能添加三条",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    add2: function(e) {
        var a = this;
        console.log(e);
        var t = a.data.spec, s = e.currentTarget.dataset.index;
        console.log(s), t.pop(), console.log(t), a.setData({
            spec: t,
            len: t.length
        });
    },
    checkboxChange: function(e) {
        console.log(e);
        var a = e.detail.value;
        this.setData({
            check_box: a
        });
    },
    add_spec: function(e) {
        var a = this, t = a.data.add_spec;
        0 == t ? a.setData({
            add_spec: !0
        }) : a.setData({
            add_spec: !1
        });
    },
    delete_spec_small: function(e) {
        var a = this, t = e.currentTarget.dataset.index, s = e.currentTarget.dataset.id, o = a.data.spec;
        console.log(t), o[s].spec.splice(1, 1);
        for (var c in o) for (var i in o[c].spec) o[c].spec[i].id = o[c].id;
        a.setData({
            spec: o
        });
    },
    spec_0_0_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[0].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_0_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[0].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_0_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[0].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_1_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[1].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_1_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[1].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_1_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[1].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_2_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[2].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_2_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[2].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_0_2_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[0].spec[2].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_0_name: function(e) {
        var a = this.data.spec;
        a[1].spec[0].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_0_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[0].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_0_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[0].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_1_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[1].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_1_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[1].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_1_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[1].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_2_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[2].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_2_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[2].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_1_2_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[1].spec[2].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_0_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[0].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_0_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[0].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_0_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[0].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_1_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[1].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_1_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[1].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_1_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[1].num = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_2_name: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[2].name = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_2_price: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[2].price = e.detail.value, this.setData({
            spec: a
        });
    },
    spec_2_2_num: function(e) {
        console.log(e);
        var a = this.data.spec;
        a[2].spec[2].num = e.detail.value, this.setData({
            spec: a
        });
    },
    formSubmit: function(s) {
        console.log(s), console.log(a), console.log(t);
        var o = this;
        console.log(o.data.spec);
        var c = s.detail.value.spec_name, i = s.detail.value.spec_num, n = s.detail.value.spec_price, l = s.detail.value.spec_freight, p = s.detail.value.spec_delivery, d = s.detail.value.goods_details, r = o.data.check_box, u = o.data.spec, g = c + p + d;
        e.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: g,
                mode: "wx"
            },
            method: "POST",
            success: function(g) {
                if (console.log(g.data), "function" == typeof s && s(o), 0 !== g.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                for (var h in u) for (var f in u[h].spec) u[h].spec[f].spec_id = u[h].spec_id, u[h].spec[f].spec_name = u[h].text;
                console.log(u);
                var _ = [];
                for (var v in u) _ = _.concat(u[v].spec);
                console.log(_);
                var m = 2, D = 2, x = 2, w = 2, T = 2, b = 2;
                for (var y in r) "正品保证" == r[y] && (m = 1), "全程包邮" == r[y] && (D = 1), "24h发货" == r[y] && (x = 1), 
                "售后保障" == r[y] && (w = 1), "急速退款" == r[y] && (T = 1), "七天包退" == r[y] && (b = 1);
                var A = "";
                if ("" == c) A = "商品名称不能为空"; else if ("" == n) A = "商品价格不能为空"; else if ("" == i) A = "商品数量不能为空"; else if ("" == l) A = "商品运费不能为空"; else if ("" == p) A = "发货说明不能为空"; else if (0 == a.length) A = "还没有上传商品图片哦"; else if (1 == o.data.add_spec) for (var S in _) "" == _[S].spec_name ? A = "没有选择规格" : "" == _[S].name ? A = "还有规格名字没输入" : "" == _[S].price && (A = "还有规格价格没输入");
                if ("" != A) wx.showModal({
                    title: "提示",
                    content: A,
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                }); else {
                    if (1 == o.data.add_spec) {
                        k = [];
                        _.map(function(e) {
                            var a = {};
                            a.name = e.name, a.money = e.price, a.num = e.num, a.spec_id = e.spec_id, k.push(a);
                        }), console.log(k);
                    } else var k = [];
                    if (a.length > 0) var j = a.join(","); else j = "";
                    if (t.length > 0) var P = t.join(","); else P = "";
                    console.log(j), console.log(P), console.log(k), e.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopageaddgoods&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        method: "POST",
                        contentType: "application/json",
                        data: {
                            store_id: o.data.store_id,
                            imgs: t.join(","),
                            lb_imgs: a.join(","),
                            goods_name: c,
                            goods_num: i,
                            goods_cost: n,
                            freight: l,
                            delivery: p,
                            goods_details: d,
                            sz: JSON.stringify(k),
                            quality: m,
                            free: D,
                            all_day: x,
                            service: w,
                            refund: T,
                            weeks: b,
                            is_remen: o.data.is_remen,
                            is_tuijian: o.data.is_tuijian
                        },
                        success: function(e) {
                            console.log(e), 1 == e.data && (wx.showToast({
                                title: "发布成功",
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
                            }, 2e3));
                        }
                    });
                }
            }
        });
    },
    switch1Change: function(e) {
        console.log("switch1 发生 change 事件，携带值为", e.detail.value);
        var a = this;
        e.detail.value ? a.setData({
            is_remen: 1
        }) : a.setData({
            is_remen: 0
        });
    },
    switch1Change2: function(e) {
        console.log("switch1 发生 change 事件，携带值为", e.detail.value);
        var a = this;
        e.detail.value ? a.setData({
            is_tuijian: 1
        }) : a.setData({
            is_tuijian: 0
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
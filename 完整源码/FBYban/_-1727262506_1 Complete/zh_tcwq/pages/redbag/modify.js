function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a, t = getApp(), o = [], n = [];

Page((a = {
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
        classification: !1,
        index: 0,
        spec_num: 1
    },
    onLoad: function(e) {
        var a = this, s = e.id, i = e.store_id, c = wx.getStorageSync("url"), l = wx.getStorageSync("url");
        a.setData({
            url: c,
            url1: l,
            store_id: i,
            id: s,
            options: e
        });
        a.data.add;
        t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagespec&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                shop_id: a.data.store_id,
                uniacid: getApp().globalData.version
            },
            success: function(e) {
                console.log(e), a.setData({
                    label: e.data
                });
            }
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagegoodinfo&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                id: s
            },
            success: function(e) {
                console.log(e), 1 == e.data.good.is_remen && a.setData({
                    isChecked: !0
                }), 1 == e.data.good.is_tuijian && a.setData({
                    isChecked1: !0
                }), "" == e.data.good.imgs ? e.data.good.imgs = [] : e.data.good.imgs = e.data.good.imgs.split(",");
                var t = e.data.good;
                e.data.good.lb_imgs = e.data.good.lb_imgs.split(","), o = e.data.good.lb_imgs, n = e.data.good.imgs;
                for (var s = a.data.items, i = 0; i < s.length; i++) "正品保证" == s[i].value ? 1 == t.quality ? s[i].checked = !0 : s[i].checked = !1 : "全程包邮" == s[i].value ? 1 == t.free ? s[i].checked = !0 : s[i].checked = !1 : "24h发货" == s[i].value ? 1 == t.all_day ? s[i].checked = !0 : s[i].checked = !1 : "售后保障" == s[i].value ? 1 == t.service ? s[i].checked = !0 : s[i].checked = !1 : "极速退款" == s[i].value ? 1 == t.refund ? s[i].checked = !0 : s[i].checked = !1 : "七天包退" == s[i].value && (1 == t.weeks ? s[i].checked = !0 : s[i].checked = !1);
                console.log(s);
                var c = e.data.spec, l = {}, d = [];
                c.forEach(function(e) {
                    var a = e.spec_id + "_" + e.spec_name;
                    void 0 === l[a] && (l[a] = []), l[a].push(e);
                });
                for (var u = Object.keys(l), i = 0; i < u.length; i++) {
                    var r = u[i].split("_");
                    d.push({
                        spec_id: r[0],
                        spec_name: r[1],
                        value: l[u[i]]
                    });
                }
                a.data.add;
                if (1 == d.length) d[0].spec_name;
                if (2 == d.length) d[0].spec_name, d[1].spec_name;
                if (3 == d.length) d[0].spec_name, d[1].spec_name, d[2].spec_name;
                a.setData({
                    add: d,
                    spec: c,
                    store_good: e.data.good,
                    items: s,
                    imgArray1: o,
                    imgArray2: n
                });
            }
        });
    },
    getIdDataSet: function(e) {
        for (var a = new Array(), t = e.length, o = 0; o < t; o++) a.push(e[o].coupons_id);
        return a;
    },
    classify: function(e, a) {
        for (var t = new Array(), o = new Array(), n = e.length, s = 0; s < n; s++) -1 === a.indexOf(e[s].id) ? o.push(e[s]) : t.push(e[s]);
        console.log(t), console.log(o), this.setData({
            received: t,
            unreceive: o
        });
    },
    classification: function(e) {
        var a = this;
        console.log(e);
        var t = e.currentTarget.dataset.index, o = a.data.classification;
        0 == o ? a.setData({
            classification: !0,
            index: t
        }) : a.setData({
            classification: !1,
            index: t
        });
    },
    select: function(e) {
        var a = this, t = e.currentTarget.dataset.name, o = e.currentTarget.dataset.id;
        a.setData({
            classification: !1,
            specName: t,
            spec_id: o
        });
    },
    addSpec1: function() {
        that.setData({
            classification: !1,
            specName: name,
            id: id
        });
    }
}, e(a, "addSpec1", function() {}), e(a, "nameChange", function(e) {
    var a = this;
    a.data.selctSpecModel.name = e.detail.value, a.setData({
        selctSpecModel: a.data.selctSpecModel
    }), console.log(a.data.selctSpecModel);
}), e(a, "priceChange", function(e) {
    var a = this;
    a.data.selctSpecModel.money = e.detail.value, a.setData({
        selctSpecModel: a.data.selctSpecModel
    });
}), e(a, "numChange", function(e) {
    var a = this;
    a.data.selctSpecModel.num = e.detail.value, a.setData({
        selctSpecModel: a.data.selctSpecModel
    });
}), e(a, "name1", function(e) {
    this.setData({
        name1: e.detail.value
    });
}), e(a, "price1", function(e) {
    var a = this;
    a.data.selctSpecModel.num = e.detail.value, a.setData({
        selctSpecModel: a.data.selctSpecModel
    });
}), e(a, "name2", function(e) {
    this.setData({
        name2: e.detail.value
    });
}), e(a, "name3", function(e) {
    this.setData({
        name3: e.detail.value
    });
}), e(a, "price1", function(e) {
    this.setData({
        price1: e.detail.value
    });
}), e(a, "price2", function(e) {
    this.setData({
        price2: e.detail.value
    });
}), e(a, "name3", function(e) {
    this.setData({
        name3: e.detail.value
    });
}), e(a, "num1", function(e) {
    this.setData({
        num1: e.detail.value
    });
}), e(a, "num2", function(e) {
    this.setData({
        num2: e.detail.value
    });
}), e(a, "name3", function(e) {
    this.setData({
        name3: e.detail.value
    });
}), e(a, "imgArray1", function(e) {
    var a = this, t = (wx.getStorageSync("uniacid"), 4 - o.length);
    console.log(t), t > 0 && t <= 9 ? wx.chooseImage({
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
                url: a.data.url + "/index.php?c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                path: t
            });
        }
    }) : wx.showModal({
        title: "上传提示",
        content: "最多上传4张图片",
        showCancel: !0,
        cancelText: "取消",
        confirmText: "确定",
        success: function(e) {},
        fail: function(e) {},
        complete: function(e) {}
    });
}), e(a, "uploadimg", function(e) {
    var a = this, t = e.i ? e.i : 0, n = e.success ? e.success : 0, s = e.fail ? e.fail : 0;
    wx.uploadFile({
        url: e.url,
        header: {
            token: getApp().globalData.token
        },
        filePath: e.path[t],
        name: "upfile",
        formData: null,
        success: function(e) {
            "" != e.data ? (console.log(e), n++, o.push(e.data), a.setData({
                imgArray1: o
            }), console.log("上传商家轮播图时候提交的图片数组", o)) : wx.showToast({
                icon: "loading",
                title: "请重试"
            });
        },
        fail: function(e) {
            s++, console.log("fail:" + t + "fail:" + s);
        },
        complete: function() {
            console.log(t), ++t == e.path.length ? (a.setData({
                images: e.path
            }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + s)) : (console.log(t), 
            e.i = t, e.success = n, e.fail = s, a.uploadimg(e));
        }
    });
}), e(a, "delete", function(e) {
    var a = this, t = e.currentTarget.dataset.index;
    console.log(t), o.splice(t, 1), a.setData({
        imgArray1: o
    });
}), e(a, "imgArray2", function(e) {
    var a = this, t = (wx.getStorageSync("uniacid"), 9 - n.length);
    console.log(t), t > 0 && t <= 9 ? wx.chooseImage({
        count: t,
        sizeType: [ "compressed" ],
        sourceType: [ "album", "camera" ],
        success: function(e) {
            wx.showToast({
                icon: "loading",
                title: "正在上传"
            });
            var t = e.tempFilePaths;
            a.uploadimg1({
                url: a.data.url + "/index.php?c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
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
}), e(a, "uploadimg1", function(e) {
    var a = this, t = e.i ? e.i : 0, s = e.success ? e.success : 0, i = e.fail ? e.fail : 0;
    wx.uploadFile({
        url: e.url,
        header: {
            token: getApp().globalData.token
        },
        filePath: e.path[t],
        name: "upfile",
        formData: null,
        success: function(e) {
            "" != e.data ? (console.log(e), s++, n.push(e.data), a.setData({
                imgArray2: n
            }), console.log("上传商家轮播图时候提交的图片数组", o)) : wx.showToast({
                icon: "loading",
                title: "请重试"
            });
        },
        fail: function(e) {
            i++, console.log("fail:" + t + "fail:" + i);
        },
        complete: function() {
            console.log(t), ++t == e.path.length ? (a.setData({
                images: e.path
            }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + s + " 失败：" + i)) : (console.log(t), 
            e.i = t, e.success = s, e.fail = i, a.uploadimg1(e));
        }
    });
}), e(a, "delete1", function(e) {
    var a = this, t = e.currentTarget.dataset.index;
    n.splice(t, 1), a.setData({
        imgArray2: n
    });
}), e(a, "add", function(e) {
    var a = this;
    console.log(a.data), console.log(e);
    var t = e.currentTarget.dataset.index, o = e.currentTarget.dataset.id, n = a.data.add, s = (a.data.add2, 
    a.data.add[o][t]);
    for (var i in n) for (var c in n[i]) n[i][c].id = i;
    n[o].push(s);
    for (var l in n) for (var d in n[l]) n[l][d].id = l;
    console.log(n), a.setData({
        add: n,
        len: n.length
    });
}), e(a, "add1", function(e) {
    function a(a) {
        return e.apply(this, arguments);
    }
    return a.toString = function() {
        return e.toString();
    }, a;
}(function(e) {
    var a = this;
    console.log(a.data);
    var t = a.data.add;
    if (console.log(add1), t.length < 3) {
        t.push(add1);
        for (var o in t) for (var n in t[o]) t[o][n].id = o;
        a.setData({
            add: t,
            len: t.length
        });
    } else wx.showModal({
        title: "提示",
        content: "只能添加三条",
        showCancel: !0,
        cancelText: "取消",
        confirmText: "确定",
        success: function(e) {},
        fail: function(e) {},
        complete: function(e) {}
    });
})), e(a, "add2", function(e) {
    var a = this;
    console.log(e);
    var t = a.data.add, o = e.currentTarget.dataset.index;
    console.log(o), a.data.add.splice(o, 1), a.setData({
        add: a.data.add,
        len: t.length
    });
}), e(a, "checkboxChange", function(e) {
    console.log(e);
    var a = this, t = e.detail.value;
    a.setData({
        check_box: t
    });
}), e(a, "formSubmit", function(e) {
    console.log(e);
    var a = this, s = a.data.spec, i = e.detail.value.spec_name, c = e.detail.value.spec_num, l = e.detail.value.spec_price, d = e.detail.value.spec_freight, u = e.detail.value.spec_delivery, r = e.detail.value.goods_details, g = i + u + r;
    t.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
        data: {
            content: g,
            mode: "wx"
        },
        method: "POST",
        success: function(g) {
            if (console.log(g.data), "function" == typeof e && e(a), 0 !== g.data) return wx.showModal({
                title: "提示",
                content: "你的信息有违禁内容，请重新编辑"
            }), !1;
            for (var p in s) for (var h in s[p].spec) s[p].spec[h].spec_id = s[p].spec_id, s[p].spec[h].spec_name = s[p].text;
            console.log(s);
            var m = [];
            for (var f in s) m = m.concat(s[f].spec);
            console.log(m);
            var v = 2, _ = 2, D = 2, w = 2, x = 2, b = 2;
            for (var T in S) "正品保证" == S[T] && (v = 1), "全程包邮" == S[T] && (_ = 1), "24h发货" == S[T] && (D = 1), 
            "售后保障" == S[T] && (w = 1), "急速退款" == S[T] && (x = 1), "七天包退" == S[T] && (b = 1);
            M = "";
            if ("" == i) M = "商品名称不能为空"; else if ("" == l) M = "商品价格不能为空"; else if ("" == c) M = "商品数量不能为空"; else if ("" == d) M = "商品运费不能为空"; else if ("" == u) M = "发货说明不能为空"; else if (0 == o.length) M = "还没有上传商品图片哦"; else if (1 == a.data.add_spec) for (var y in m) "" == m[y].spec_name ? M = "没有选择规格" : "" == m[y].name ? M = "还有规格名字没输入" : "" == m[y].price && (M = "还有规格价格没输入");
            "" != M && wx.showModal({
                title: "提示",
                content: M,
                showCancel: !0,
                cancelText: "取消",
                confirmText: "确定",
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            });
            var S = a.data.check_box;
            console.log(S);
            var v = 2, _ = 2, D = 2, w = 2, x = 2, b = 2;
            for (var A in S) "正品保证" == S[A] && (v = 1), "全程包邮" == S[A] && (_ = 1), "24h发货" == S[A] && (D = 1), 
            "售后保障" == S[A] && (w = 1), "极速退款" == S[A] && (x = 1), "七天包退" == S[A] && (b = 1);
            var M = "";
            if ("" == i ? M = "商品名称不能为空" : "" == l ? M = "商品价格不能为空" : "" == c ? M = "商品数量不能为空" : "" == d ? M = "商品运费不能为空" : "" == u && (M = "发货说明不能为空"), 
            "" != M) wx.showModal({
                title: "提示",
                content: M,
                showCancel: !0,
                cancelText: "取消",
                confirmText: "确定",
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            }); else {
                var k = [];
                if (s.map(function(e) {
                    var a = {};
                    a.name = e.name, a.money = e.money, a.num = e.num, a.id = e.id, a.spec_id = e.spec_id, 
                    k.push(a);
                }), console.log(k), o.length > 0) var C = o.join(","); else C = "";
                if (n.length > 0) var q = n.join(","); else q = "";
                console.log(a.data.id), console.log(a.data.store_id), console.log(q), console.log(C), 
                console.log(i), console.log(c), console.log(l), console.log(d), console.log(u), 
                console.log(r), console.log(k), console.log(v), console.log(_), console.log(D), 
                console.log(w), console.log(x), console.log(b), t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopageupdgoods&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    method: "POST",
                    data: {
                        good_id: a.data.id,
                        store_id: a.data.store_id,
                        imgs: q,
                        lb_imgs: C,
                        goods_name: i,
                        goods_num: c,
                        goods_cost: l,
                        freight: d,
                        delivery: u,
                        goods_details: r,
                        quality: v,
                        free: _,
                        all_day: D,
                        service: w,
                        refund: x,
                        weeks: b,
                        is_remen: a.data.store_good.is_remen,
                        is_tuijian: a.data.store_good.is_tuijian
                    },
                    success: function(e) {
                        console.log(e), 1 == e.data && wx.showToast({
                            title: "修改成功",
                            icon: "",
                            image: "",
                            duration: 1e3,
                            mask: !0,
                            success: function(e) {
                                setTimeout(function() {
                                    wx.navigateTo({
                                        url: "../redbag/commodity?store_id=" + a.data.store_id
                                    });
                                }, 1500);
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                        });
                    }
                });
            }
        }
    });
}), e(a, "switch1Change", function(e) {
    var a = this;
    1 == e.detail.value ? (a.data.store_good.is_remen = 1, a.setData({
        store_good: a.data.store_good
    })) : (a.data.store_good.is_remen = 0, a.setData({
        store_good: a.data.store_good
    }));
}), e(a, "switch1Change1", function(e) {
    var a = this;
    1 == e.detail.value ? (a.data.store_good.is_tuijian = 1, a.setData({
        store_good: a.data.store_good
    })) : (a.data.store_good.is_tuijian = 0, a.setData({
        store_good: a.data.store_good
    }));
}), e(a, "onReady", function() {}), e(a, "onShow", function() {}), e(a, "onHide", function() {}), 
e(a, "onUnload", function() {}), e(a, "onPullDownRefresh", function() {}), e(a, "onReachBottom", function() {}), 
e(a, "onShareAppMessage", function() {}), e(a, "specNameInput", function(e) {
    var a = this, t = e.currentTarget.dataset.aindex, o = e.currentTarget.dataset.bindex;
    a.setData({
        spec: a.data.spec
    }), console.log(t), console.log(o);
}), e(a, "specPriceInput", function(e) {
    var a = this, t = e.currentTarget.dataset.aindex, t = e.currentTarget.dataset.bindex;
    a.data.spec[t].price = e.detail.value, a.setData({
        spec: a.data.spec
    }), console.log(e.detail.value);
}), e(a, "specNumInput", function(e) {
    var a = this, t = e.currentTarget.dataset.aindex, t = e.currentTarget.dataset.bindex;
    a.data.spec[t].num = e.detail.value, a.setData({
        spec: a.data.spec
    }), console.log(e.detail.value);
}), e(a, "deleteSpec1", function(e) {
    var a = this, o = e.currentTarget.dataset.aindex, n = e.currentTarget.dataset.bindex, s = (a.data.add, 
    a.data.add[o]), i = s.value[n].id;
    t.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopageupguige&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            id: i,
            guige_is_del: 1
        },
        success: function(e) {
            console.log(e), wx.showModal({
                title: "提示",
                content: "删除成功"
            }), a.setData({
                label: e.data
            });
        }
    }), s.value.splice(n, 1), this.setData({
        add: a.data.add
    });
}), e(a, "addspec", function() {
    var e = this, a = e.data.spec_num + 1;
    console.log(), e.setData({
        spec_num: a
    });
}), e(a, "addbigspec", function() {
    console.log(1);
    var e = [], a = this;
    if (a.data.spec_id && (console.log(2), 1 == a.data.spec_num && (console.log(3), 
    (o = {}).goods_id = a.data.id, o.spec_id = a.data.spec_id, o.name = a.data.name1, 
    o.money = a.data.price1, o.num = a.data.num1, e.push(o)), 2 == a.data.spec_num && ((o = {}).spec_id = a.data.spec_id, 
    o.name = a.data.name1, o.money = a.data.price1, o.num = a.data.num1, e.push(o), 
    (n = {}).spec_id = a.data.spec_id, n.name = a.data.name2, n.money = a.data.price2, 
    n.num = a.data.num2, e.push(n), console.log(e)), 3 == a.data.spec_num)) {
        var o = {};
        o.spec_id = a.data.spec_id, o.name = a.data.name1, o.money = a.data.price1, o.num = a.data.num1, 
        e.push(o);
        var n = {};
        n.spec_id = a.data.spec_id, n.name = a.data.name2, n.money = a.data.price2, n.num = a.data.num2, 
        e.push(n);
        var s = {};
        s.spec_id = a.data.spec_id, s.name = a.data.name3, s.money = a.data.price3, s.num = a.data.num3, 
        e.push(s);
    }
    console.log(e), t.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopageupguige&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            sz_z: e,
            goods_id: a.data.id,
            guige_is_del: 2
        },
        success: function(e) {
            console.log(e), wx.showToast({
                title: "添加成功",
                duration: 1e3,
                success: {}
            }, setTimeout(function() {
                wx.navigateTo({
                    url: "modify?id=" + a.data.id + "&store_id=" + a.data.store_good.store_id
                });
            }, 1500)), a.setData({
                label: e.data
            });
        }
    });
}), e(a, "addSpec_1", function() {
    this.setData({
        showModel: !0,
        showAddSpec1: !0
    });
}), e(a, "cancelSpec", function() {
    this.setData({
        showModel: !1,
        showAddSpec1: !1,
        showChange: !1
    });
}), e(a, "delete_spec", function(e) {
    var a = this, o = e.currentTarget.dataset.aindex, n = a.data.add[o].spec_id, s = a.data.id;
    a.data.add.splice(o, 1), t.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopageupguige&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            spec_id: n,
            goods_id: s,
            guige_is_del: 3
        },
        success: function(e) {
            console.log(e), wx.showModal({
                title: "提示",
                content: "删除成功",
                success: {}
            }), a.setData({
                label: e.data
            });
        }
    }), a.setData({
        add: a.data.add
    });
}), e(a, "changeSpec", function(e) {
    var a = e.currentTarget.dataset.aindex, t = e.currentTarget.dataset.bindex, o = this.data.add[a].value[t];
    this.setData({
        selctSpecModel: o,
        showModel: !0,
        showChange: !0
    });
}), e(a, "dochangeSpec", function() {
    var e = this, a = this.data.selctSpecModel;
    t.util.request({
        url: getApp().globalData.baseUrl + "c=apitc&a=dopageupguige&acid=" + getApp().globalData.version,
        cachetime: "0",
        data: {
            id: a.id,
            goods_id: a.goods_id,
            spec_id: a.spec_id,
            money: a.money,
            name: a.name,
            num: a.num,
            guige_is_del: 4
        },
        success: function(a) {
            console.log(a), wx.showToast({
                title: "修改成功",
                icon: "success",
                duration: 1e3
            }), setTimeout(function() {
                var a = e.data.options;
                e.onLoad(a);
            }, 1e3), e.setData({
                label: a.data,
                showModel: !1
            });
        }
    });
}), a));
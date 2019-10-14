function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../index.js"), o = e(require("model/order")), a = e(require("../../utils/toast")), s = new o.default(), i = null, n = null;

Page({
    data: {
        order: null,
        validOrder: !1,
        stockpileEnough: !0,
        expressInfoName: "请填写收货人",
        expressInfoAddress: "-",
        expressInfoMobile: "-",
        nationalCode: "",
        provinceName: "",
        cityName: "",
        districtName: "",
        gotAddress: !1,
        exceedExpressRange: !1,
        everAuthAddress: !1,
        everAuthInvoice: !1,
        invoiceTitle: "不开发票",
        invoiceType: "",
        invoiceInfo: {
            title: "不开发票"
        },
        kbHeight: 0,
        pageOffsetY: 0,
        mch_name: "-",
        mch_logo_url: "/res/img/icon-default-mch-logo.png",
        phoneModel: t.Sys.phoneModel(),
        screenHeight: 0,
        from: "",
        sortMap: {},
        shops: [],
        goods_total_price: -1,
        goods_total_express: -1,
        goods_total_quantity: 0,
        express_fee: "INVALID"
    },
    onLoad: function(e) {
        i = this, n = null;
        var o = [];
        try {
            o = JSON.parse(decodeURIComponent(e.goods_list));
        } catch (e) {
            return a.default.showErrTips("跳转参数错误"), -1;
        }
        if (!o.length) return a.default.showErrTips("跳转参数错误"), -1;
        t.wx.getSetting({
            success: function(e) {
                e && e.authSetting && i.setData({
                    everAuthAddress: "scope.address" in e.authSetting,
                    everAuthInvoice: "scope.invoiceTitle" in e.authSetting
                });
            }
        }), console.log("countall before", o);
        var s = t.Sys.windowHeight - ("iPhoneX" == t.Sys.phoneModel() ? 88 : 64);
        i.setData({
            from: e.from,
            screenHeight: s,
            shops: i.groupByShopDataLocal(o)
        }), i.settleTotalQuantity(), console.log("countall after", this.data.shops);
        var r = t.wx.getStorageSync("__CACHED_ADDRESS__1__");
        r && r.expressInfoName && r.nationalCode && 1 == r.version && (r.gotAddress = !0, 
        i.setData(r)), i.calcFee();
    },
    onShow: function(e) {
        this.paySuccess;
    },
    onPageScroll: function(e) {
        this.data.pageOffsetY = e.scrollTop;
    },
    onInputFocus: function(e) {
        var o = e.detail.height || 0, a = e.detail.target.offsetTop || 0;
        this.setData({
            kbHeight: o
        });
        var s = t.Sys.windowHeight + this.data.pageOffsetY - a - o;
        s < 120 && t.wx.pageScrollTo({
            scrollTop: this.data.pageOffsetY + 120 - s,
            duration: 0
        });
    },
    onInputBlur: function(e) {
        this.setData({
            kbHeight: 0
        }), this.data.shops.forEach(function(t) {
            t.appid == e.detail.appid && (t.remark = e.detail.value || "");
        });
    },
    calcFee: function() {
        var e = {
            goods_list: i.getCgiGoodListParams(i.data.shops),
            success: function(e) {
                var t = e.goods_list, o = e.mch_fee_list, a = e.not_ship_goods_list;
                i.setData({
                    shops: i.groupByShopDataServer(t, o, a)
                }), i.settleTotalQuantity();
            },
            fail: function(e) {
                a.default.hideLoading(), a.default.showErrTips("请稍后尝试");
            }
        };
        "请填写收货人" !== i.data.expressInfoName ? (e.receipt_info = {
            name: i.data.expressInfoName,
            phone: i.data.expressInfoMobile,
            address: i.data.expressInfoAddress,
            national_code: i.data.nationalCode || "",
            country: "",
            province: i.data.provinceName || "",
            city: i.data.cityName || "",
            district: i.data.districtName || ""
        }, "devtools" == t.Sys.platform && (e.receipt_info.national_code = 440105)) : e.receipt_info = {
            name: "",
            phone: "",
            address: "",
            national_code: "",
            country: "",
            province: "",
            city: "",
            district: ""
        }, s.calcFee(e);
    },
    onMinusQuantity: function(e) {
        i.setData({
            shops: i.data.shops.map(function(t) {
                return t.goods = t.goods.map(function(t) {
                    return e.detail.id === t.goods_item_code + t.goods_sku_id && --t.goods_quantity, 
                    t;
                }), t;
            }),
            stockpileEnough: !0
        }), i.calcFee(), i.settleTotalQuantity();
    },
    onIncreaseQuantity: function(e) {
        i.setData({
            shops: i.data.shops.map(function(t) {
                return t.goods = t.goods.map(function(t) {
                    return e.detail.id === t.goods_item_code + t.goods_sku_id && ++t.goods_quantity, 
                    t;
                }), t;
            })
        }), i.calcFee(), i.settleTotalQuantity();
    },
    calcGoodsQuantity: function(e) {
        var t = 0;
        return e.forEach(function(e) {
            e.goods.forEach(function(e) {
                t += e.goods_quantity;
            });
        }), t;
    },
    settleTotalQuantity: function() {
        this.setData({
            goods_total_quantity: this.calcGoodsQuantity(this.data.shops)
        });
    },
    pay: function() {
        var e = this;
        if (!i.data.stockpileEnough) return a.default.showErrTips("库存不足"), -1;
        if (!this.data.gotAddress) return a.default.showErrTips("请填写配送信息"), -1;
        if (!this.data.validOrder) return -1;
        a.default.showLoading();
        var o = {
            goods_list: i.getCgiGoodListParams(i.data.shops),
            receipt_info: {
                name: i.data.expressInfoName,
                phone: i.data.expressInfoMobile,
                address: i.data.expressInfoAddress,
                national_code: i.data.nationalCode || "",
                country: "",
                province: i.data.provinceName || "",
                city: i.data.cityName || "",
                district: i.data.districtName || ""
            },
            ext_info_list: i.data.shops.filter(function(e) {
                return !!e.remark;
            }).map(function(e) {
                return {
                    appid: e.appid,
                    remark: e.remark
                };
            }),
            pay_source: "directlybuy" === e.data.from ? "1" : "0",
            success: function(o) {
                if (a.default.hideLoading(), o && o.data && o.data.errcode) return 10014 === o.data.errcode ? (i.setData({
                    stockpileEnough: !1
                }), a.default.showErrTips("库存不足")) : 10015 === o.data.errcode ? (i.setData({
                    exceedExpressRange: !0
                }), a.default.showErrTips("超出配送范围")) : a.default.showErrTips("请稍后尝试"), setTimeout(function() {
                    i.calcFee();
                }, 1e3), o.data.errcode;
                o.success = function(s) {
                    a.default.showSuccessTips("支付成功"), setTimeout(function() {
                        if (t.Sys.appid() != t.Sys.shoppingcarAppid()) {
                            var e = i.data.shops[0] && i.data.shops[0].appid, a = t.Path + "/portal/order-detail/order-detail?from=paySuccess&orderId=" + o.order_id + "&appId=" + e;
                            t.wx.redirectTo({
                                url: a
                            });
                        } else {
                            var s = getCurrentPages();
                            if (s && 1 != s.length) t.EventCenter.emit(t.EventCenter.Event.onPaySuccess), t.wx.navigateBack({
                                delta: s.length - 1
                            }); else {
                                t.wx.redirectTo({
                                    url: "/pages/index/index?from=paySuccess&orderId=xxx&tab=order"
                                });
                            }
                        }
                    }, 200), e.paySuccess = !0;
                }, o.fail = function() {}, t.wx.requestPayment(o);
            },
            fail: function(e) {
                a.default.hideLoading(), a.default.showErrTips("请稍后尝试");
            }
        };
        "devtools" == t.Sys.platform && (o.receipt_info.national_code = 440105), "不开发票" !== i.data.invoiceInfo.title && (o.invoice_info = i.data.invoiceInfo), 
        s.requestPay(o);
    },
    hideModal: function(e) {
        this.setData({
            modal: {
                show: !1
            }
        });
    },
    getAddress: function() {
        var e = this;
        t.wx.chooseAddress({
            success: function(e) {
                n = e, i.setData({
                    expressInfoName: e.userName,
                    expressInfoAddress: "" + e.provinceName + e.cityName + e.countyName + e.detailInfo,
                    expressInfoMobile: e.telNumber,
                    nationalCode: e.nationalCode || "",
                    provinceName: e.provinceName || "",
                    cityName: e.cityName || "",
                    districtName: e.countyName || "",
                    gotAddress: !0
                }), t.wx.setStorageSync("__CACHED_ADDRESS__1__", {
                    expressInfoName: e.userName,
                    expressInfoAddress: "" + e.provinceName + e.cityName + e.countyName + e.detailInfo,
                    expressInfoMobile: e.telNumber,
                    nationalCode: e.nationalCode || "",
                    provinceName: e.provinceName || "",
                    cityName: e.cityName || "",
                    districtName: e.countyName || "",
                    version: 1
                }), i.calcFee();
            },
            fail: function(t) {
                t && t.errMsg && (t.errMsg.includes("chooseAddress:fail auth deny") || t.errMsg.includes("chooseAddress:fail:auth denied")) && e.data.everAuthAddress && e.setData({
                    modal: {
                        content: "检测到你未授权通讯地址，是否前往设置打开",
                        show: !0,
                        showCancel: !0,
                        openType: "openSetting",
                        cancel: "hideModal",
                        confirm: "hideModal"
                    }
                });
            },
            complete: function() {
                e.setData({
                    everAuthAddress: !0
                });
            }
        });
    },
    editInvoice: function() {},
    groupByShopDataLocal: function(e) {
        var t = [], o = {}, a = !0, s = !1, n = void 0;
        try {
            for (var r, d = e[Symbol.iterator](); !(a = (r = d.next()).done); a = !0) {
                var c = r.value;
                if (!(c.appid in o)) {
                    var u = {
                        appid: c.appid,
                        name: c.mch_name,
                        icon: c.mch_logo_url,
                        quantity: 0,
                        cost: -1,
                        express: -1,
                        goods: []
                    };
                    o[c.appid] = u, t.push(u);
                }
                var l = i.formalizeGoods(c);
                l.stock = c.stock_number || 0, o[c.appid].goods.push(l), o[c.appid].quantity += c.quantity, 
                i.data.sortMap[c.item_code + c.sku_id] = c.appid;
            }
        } catch (e) {
            s = !0, n = e;
        } finally {
            try {
                !a && d.return && d.return();
            } finally {
                if (s) throw n;
            }
        }
        return t;
    },
    groupByShopDataServer: function(e, t, o) {
        var a = (o || []).map(function(e) {
            return e.item_code + e.sku_id;
        }), s = 0, n = 0, r = !1, d = !0, c = !0, u = a.length > 0, l = [];
        if (t && t.map(function(e) {
            return void 0 === e.goods_list;
        }).reduce(function(e, t) {
            return e && t;
        })) {
            var p = {};
            e && e.forEach(function(e) {
                var t = i.data.sortMap[e.item_code + e.sku_id];
                t ? (t in p || (p[t] = []), p[t].push(e)) : r = !0;
            }), t && t.forEach(function(e) {
                e.appid in p ? e.goods_list = p[e.appid] : r = !0;
            });
        }
        if (t && t.length) {
            var f = !0, h = !1, g = void 0;
            try {
                for (var _, m = t[Symbol.iterator](); !(f = (_ = m.next()).done); f = !0) {
                    var y, v;
                    if ("break" === function() {
                        var e = _.value;
                        if (!e.goods_list || e.goods_list.length <= 0) return r = !0, "break";
                        y = -1, v = -1, void 0 !== e.express_fee && void 0 !== e.goods_fee ? (v = e.express_fee + e.goods_fee, 
                        y = e.express_fee, s += v, n += y) : d = !1;
                        var t = e.appid, o = e.goods_list[0].mch_name, u = e.goods_list[0].mch_logo_url + "/0", p = e.goods_list.map(function(e) {
                            return e.quantity;
                        }).reduce(function(e, t) {
                            return e + t;
                        }), f = [];
                        l.push({
                            appid: t,
                            name: o,
                            icon: u,
                            quantity: p,
                            cost: v,
                            express: y,
                            goods: f
                        }), e.goods_list.forEach(function(e) {
                            e.desc = e.stock_attr_info.map(function(e) {
                                return e.attr_value.name;
                            }).join(" | ");
                            var t = i.formalizeGoods(e);
                            t.notShip = a.includes(e.item_code + e.sku_id), t.stock = e.stock_number, f.push(t), 
                            e.stock_number < e.quantity && (c = !1);
                        });
                    }()) break;
                }
            } catch (e) {
                h = !0, g = e;
            } finally {
                try {
                    !f && m.return && m.return();
                } finally {
                    if (h) throw g;
                }
            }
        } else r = !0;
        var x = d && !r;
        return x || (s = -1, n = -1), i.setData({
            goods_total_price: s,
            goods_total_express: n,
            exceedExpressRange: u,
            stockpileEnough: c,
            validOrder: x
        }), l;
    },
    getCgiGoodListParams: function(e) {
        var t = [];
        return e.forEach(function(e) {
            t = t.concat(e.goods.map(function(e) {
                return i.formalizeCgiGoodsParams(e);
            }));
        }), t;
    },
    formalizeGoods: function(e) {
        return {
            unique_id: e.item_code + e.sku_id,
            goods_item_code: e.item_code,
            goods_sku_id: e.sku_id,
            goods_name: e.name,
            goods_desc: e.desc,
            goods_img_url: e.goods_img_url || "",
            goods_unit_price: e.unit_price,
            goods_quantity: e.quantity
        };
    },
    formalizeCgiGoodsParams: function(e) {
        return {
            item_code: e.goods_item_code,
            sku_id: e.goods_sku_id,
            quantity: e.goods_quantity
        };
    }
});
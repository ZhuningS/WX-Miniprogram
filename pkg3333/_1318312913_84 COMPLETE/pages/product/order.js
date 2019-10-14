function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, c) {
                try {
                    var o = t[n](c), i = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
        });
    };
}

var r = e(require("../../libs/regenerator-runtime.js")), a = e(require("../../libs/underscore")), n = require("../../protocol/io"), c = e(require("../../utils/extend-page")), o = e(require("../../mixins/actions")), i = e(require("../../mixins/logger")), d = e(require("../../mixins/login")), u = e(require("../../mixins/pay")), s = e(require("../../mixins/hook"));

Page((0, c.default)({
    data: {
        appName: getApp().getConfig().name
    },
    docId: void 0,
    mid: void 0,
    productId: void 0,
    productCode: void 0,
    callback: void 0,
    callbackMsg: void 0,
    onLoad: function(e) {
        var a = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (console.log("pay for this", e), wx.setNavigationBarTitle({
                        title: "支付"
                    }), a.docId = e.docid, a.mid = e.mid, a.productCode = e.code, a.productId = e.id, 
                    a.callback = e.callback, a.callback && (a.callbackMsg = getApp().transfer().take(a.callback)), 
                    !a.productId) {
                        t.next = 12;
                        break;
                    }
                    a.prepareOrder(a.productCode), t.next = 15;
                    break;

                  case 12:
                    return t.next = 14, a.prepareProduct();

                  case 14:
                    1 === a.data.products.length && a.next();

                  case 15:
                    console.log("show products", a.data.products), a.initPay();

                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    next: function() {
        this.productId = this.data.selectedProduct.id, this.prepareOrder(this.productCode);
    },
    changeCoupons: function() {
        var e = this;
        this.showInputDialog("输入优惠码", "添加", "取消", function(t) {
            t && e.prepareOrder(t);
        }, "text");
    },
    changeSelectedProduct: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.productId, r = a.default.find(this.data.products, function(e) {
            return e.id === t;
        });
        this.setData({
            selectedProduct: r
        });
    },
    prepareProduct: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var c, o, i, d;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, wx.showLoading(), c = [], !e.docId) {
                        t.next = 10;
                        break;
                    }
                    return t.next = 6, n.api.get("v1/article.get", {
                        docid: e.docId,
                        mid: e.mid,
                        check_paid: !0
                    });

                  case 6:
                    o = t.sent, a.default.each(o.data.events, function(e) {
                        "product" !== e.type || e.product.paid || c.push(e.product);
                    }), t.next = 15;
                    break;

                  case 10:
                    if (!e.mid) {
                        t.next = 15;
                        break;
                    }
                    return t.next = 13, n.api.get("v1/magazine.info", {
                        mid: e.mid
                    });

                  case 13:
                    i = t.sent, a.default.each(i.data.events[0].magazineInfo.config.enterAction.products, function(e) {
                        e.paid || c.push(e);
                    });

                  case 15:
                    c && (a.default.each(c, function(e) {
                        e.description && e.description.startsWith("http://") && (e.image = e.description);
                    }), (d = a.default.find(c, function(e) {
                        return e.isRecommended;
                    })) || (d = c[0]), e.setData({
                        products: c,
                        selectedProduct: d
                    }), console.log("Need buy", c)), t.next = 22;
                    break;

                  case 18:
                    t.prev = 18, t.t0 = t.catch(0), console.log("prepare product error", t.t0), e.navigateBack();

                  case 22:
                    return t.prev = 22, wx.hideLoading(), t.finish(22);

                  case 25:
                  case "end":
                    return t.stop();
                }
            }, t, e, [ [ 0, 18, 22, 25 ] ]);
        }))();
    },
    prepareOrder: function(e) {
        var a = this;
        return t(r.default.mark(function t() {
            var c, o;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return c = {
                        product_id: a.productId
                    }, e && (c.coupon_code = e), t.prev = 2, t.next = 5, n.api.getV1("order.prepare", c);

                  case 5:
                    o = t.sent, a.setData({
                        order: o.data.order
                    }), t.next = 13;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(2), console.log("prepare order exception", t.t0), 200 === t.t0.statusCode && a.showModalDialog(void 0, "无法生成订单", t.t0.data.error.desc, "确定");

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, a, [ [ 2, 9 ] ]);
        }))();
    },
    preparePay: function(e) {
        var a = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, a.login(e);

                  case 2:
                    if (!t.sent) {
                        t.next = 7;
                        break;
                    }
                    a.initPay(), a.pay(e), t.next = 8;
                    break;

                  case 7:
                    wx.showToast({
                        title: "需要先完善信息"
                    });

                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t, a);
        }))();
    },
    paid: function() {
        this.callback ? (this.callbackMsg.paid = !0, getApp().transfer().callback(this.callback, this.callbackMsg), 
        wx.navigateBack()) : wx.reLaunch({
            url: getApp().getConfig().homePage
        });
    }
}, o.default, d.default, u.default, i.default, s.default));
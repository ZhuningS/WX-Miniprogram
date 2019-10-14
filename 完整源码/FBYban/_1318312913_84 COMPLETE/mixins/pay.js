function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, u) {
                try {
                    var o = t[a](u), i = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
        });
    };
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime")), r = require("../protocol/io"), n = require("../utils/dev"), a = function() {
    var a = e(t.default.mark(function e(a) {
        var u, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, r.api.getV1("order.create", {
                    product_id: a,
                    coupon_id: i,
                    app_id: getApp().getConfig().wxAppid,
                    token: getApp().getUserToken()
                });

              case 3:
                if (u = e.sent, "paid" === (o = u.data.order).state) {
                    e.next = 8;
                    break;
                }
                return e.next = 8, new Promise(function(e, t) {
                    wx.requestPayment({
                        timeStamp: o.timeStamp,
                        nonceStr: o.nonceStr,
                        package: o.package,
                        signType: o.signType,
                        paySign: o.paySign,
                        success: function(t) {
                            e(t);
                        },
                        fail: t
                    });
                });

              case 8:
                return e.abrupt("return", !0);

              case 11:
                return e.prev = 11, e.t0 = e.catch(0), (0, n.errorReporter)("create order failed", e.t0), 
                e.abrupt("return", !1);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 0, 11 ] ]);
    }));
    return function(e) {
        return a.apply(this, arguments);
    };
}();

module.exports = {
    data: {
        enablePay: getApp().getConfig().enablePay,
        supportPay: !1
    },
    initPay: function() {
        this.setData({
            supportPay: !(!getApp().globalData.userInfo || !getApp().globalData.userInfo.openid)
        });
    },
    pay: function(r) {
        var n = this;
        return e(t.default.mark(function e() {
            var u, o, i;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log("pay", r), n.data.supportPay) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    return u = r.currentTarget.dataset, o = u.productId, i = u.couponId, e.next = 6, 
                    a(o, i);

                  case 6:
                    if (!e.sent) {
                        e.next = 8;
                        break;
                    }
                    n.paid(o);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    }
};
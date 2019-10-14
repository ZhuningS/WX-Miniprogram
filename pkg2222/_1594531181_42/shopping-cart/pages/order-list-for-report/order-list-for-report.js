function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

var r = e(require("../../models/getOrderList")), a = e(require("../../utils/datetime")), o = require("../../utils/api");

Page({
    data: {
        hasMoreOrder: !1,
        orderList: []
    },
    onShow: function() {
        var e = o.getStorageSync("__ORDER_LIST__") || [], t = o.getStorageSync("__ORDER_LIST_HAS_MORE_ORDER__");
        e = this._formatDateTime(e), this.setData({
            orderList: e,
            hasMoreOrder: t
        });
    },
    loadMoreOrderList: function() {
        var e = this, _ = +new Date(), n = _ - 7776e6, i = o.getStorageSync("__ORDER_LIST_OFFSET__");
        (0, r.default)({
            data: {
                offset: i,
                count: 10,
                begin_time: parseInt(n / 1e3, 10),
                end_time: parseInt(_ / 1e3, 10)
            },
            success: function(r) {
                for (var _ = r.order_list, n = 0; n < _.length; n++) {
                    for (var s = _[n].ext_info.product_info.item_list, f = 0, d = 0, g = 0; g < s.length; g++) {
                        var u = s[g];
                        d += u.amount, f += u.total_fee;
                    }
                    _[n].totalQuantity = d, _[n].totalPrice = f + _[n].ext_info.express_info.price, 
                    _[n].formated_pay_finish_time = a.default.formatTime(_[n].pay_finish_time);
                }
                for (var c = 0; c < _.length; c++) {
                    var S = _[c], l = new Date(1e3 * S.pay_finish_time), h = l.getMonth() + 1;
                    h < 10 && (h = "0" + h);
                    var R = l.getDate();
                    R < 10 && (R = "0" + R), S.orderDate = h + "-" + R;
                }
                var O = !0;
                (_.length < 10 || 0 === _.length) && (O = !1), e.setData({
                    hasMoreOrder: O,
                    orderList: [].concat(t(e.data.orderList), t(_)),
                    orderListOffset: e.data.orderListOffset + _.length
                }), o.setStorageSync("__ORDER_LIST__", e.data.orderList), o.setStorageSync("__ORDER_LIST_HAS_MORE_ORDER__", O), 
                o.setStorageSync("__ORDER_LIST_OFFSET__", i + _.length);
            },
            fail: function() {
                o.setStorageSync("__ORDER_LIST__", []), o.setStorageSync("__ORDER_LIST_OFFSET__", 0);
            }
        });
    },
    goToReport: function(e) {
        var t = encodeURIComponent(e.currentTarget.dataset.orderInfo);
        o.navigateTo({
            url: "/shopping-cart/pages/order-report-form/order-report-form?orderInfo=" + t
        });
    },
    _formatDateTime: function(e) {
        return e.forEach(function(e) {
            var t = new Date(1e3 * e.pay_finish_time), r = t.getMonth() + 1;
            r < 10 && (r = "0" + r);
            var a = t.getDate();
            a < 10 && (a = "0" + a), e.orderDate = t.getFullYear() + "-" + r + "-" + a;
        }), e;
    }
});
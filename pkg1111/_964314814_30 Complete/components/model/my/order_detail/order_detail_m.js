Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getNewOrderDetailM = exports.getOrderDetailM = void 0;

var e = require("../../../function/showTime/showTime"), o = require("../../../template/show_dialog/show_dialog"), r = getApp();

exports.getOrderDetailM = function(t) {
    wx.request({
        url: r.globalData.shopMHost + "/xcx/user/order/info",
        method: "post",
        data: t.data,
        header: {
            "content-type": "application/json"
        },
        complete: function(e) {
            wx.hideLoading();
        },
        success: function(r) {
            if (r.data.data) {
                var i = r.data.data, a = 0, d = 0, c = 0;
                if (i.product) for (var s = 0; s < i.product.length; s++) i.product[s].productOriginalPrice >= i.product[s].productPrice ? (a += parseInt(parseInt(i.product[s].productOriginalPrice - i.product[s].productPrice) * i.product[s].productCount), 
                d += parseInt(i.product[s].productOriginalPrice * i.product[s].productCount), c = 1) : d += parseInt(i.product[s].productPrice * i.product[s].productCount), 
                i.product[s].toFixedproductPrice = i.product[s].productPrice / 100, i.product[s].toFixedproductOriginalPrice = i.product[s].productOriginalPrice / 100;
                t.ele.setData({
                    amount: (i.amount / 100).toFixed(2),
                    buyTime: (0, e.ShowTime)(i.buyTime, "Y-M-D hh:mm:ss", "-"),
                    goodsDesc: i.goodsDesc,
                    goodsId: i.goodsId,
                    goodsImage: i.goodsImage,
                    isDelete: i.isDelete,
                    orderNo: i.orderNo,
                    publishTime: (0, e.ShowTime)(i.publishTime, ""),
                    qrcode: i.qrcode,
                    productOriginalPrice: (0).toFixed(2),
                    freight: (i.freight / 100).toFixed(2),
                    favourable: "-￥" + (a / 100).toFixed(2),
                    name: i.name,
                    payMethod: i.payMethod,
                    product: i.product,
                    productType: i.productType,
                    address1: i.address,
                    customerRemark: i.customerRemark,
                    reserveTime: i.reserveTime,
                    mobilePhone: i.mobilePhone,
                    consigneeName: i.consigneeName,
                    productPrice: (i.productPrice / 100).toFixed(2),
                    totalPrice: (d / 100).toFixed(2),
                    isFa: c,
                    hasData: !0
                });
            } else t.ele.setData({
                pageLoading: !1,
                showTipData: {
                    show: !0,
                    content: r.data.msg
                }
            }), (0, o.ShowDialog)(t.ele);
        },
        fail: function() {
            (0, o.ShowDialog)(t.ele);
        }
    });
}, exports.getNewOrderDetailM = function(t, i) {
    wx.request({
        url: r.globalData.shopMHost + "xcx/org/order/orderInfo",
        method: "post",
        data: t.data,
        header: {
            "content-type": "application/json"
        },
        complete: function(e) {
            wx.hideLoading();
        },
        success: function(r) {
            if (r.data.data) {
                var a = r.data.data;
                t.ele.setData({
                    updateTime: r.data.data.updateTime
                });
                if (a.xcxOrderProductDtoList) for (var d = a.xcxOrderProductDtoList, c = 0; c < d.length; c++) d[c].productPrice || (d[c].productPrice = 0), 
                d[c].productOriginalPrice > d[c].productPrice ? (d[c].productOriginalPrice, d[c].productPrice, 
                d[c].productCount, parseInt(d[c].productOriginalPrice * d[c].productCount)) : parseInt(d[c].productPrice * d[c].productCount), 
                d[c].productPriceStr = (d[c].productPrice / 100).toFixed(2), d[c].productOriginalPriceStr = d[c].productOriginalPrice ? (d[c].productOriginalPrice / 100).toFixed(2) : "0.00";
                a.buyTime = a.buyTime ? (0, e.ShowTime)(a.buyTime, "Y-M-D hh:mm:ss", "-") : "", 
                a.createTime = a.createTime ? (0, e.ShowTime)(a.createTime, "Y-M-D hh:mm:ss", "-") : "", 
                a.updateTime = a.updateTime ? (0, e.ShowTime)(a.updateTime, "Y-M-D hh:mm:ss", "-") : "", 
                a.originalPriceStr = a.originalPrice ? (a.originalPrice / 100).toFixed(2) : "0.00", 
                a.priceStr = a.price ? (a.price / 100).toFixed(2) : "0.00", a.freight = a.freight ? a.freight : 0, 
                a.freightDiscount = a.freightDiscount ? a.freightDiscount : 0, 0 == a.freightDiscount ? a.freightDiscountStr = "0.00" : a.freightDiscountStr = (a.freightDiscount / 100).toFixed(2), 
                0 == a.freight ? a.freightStr = a.freightDiscountStr : a.freightStr = (a.freight / 100).toFixed(2), 
                a.amount = a.price + a.freight, a.amountStr = (a.amount / 100).toFixed(2), a.favourable = "0.00", 
                a.closureReason = a.closureReason ? a.closureReason : "其他原因", a.address = a.address ? a.address : "-", 
                a.expressName = a.expressName ? a.expressName : "-", a.favourable = ((a.originalPrice - a.price) / 100).toFixed(2), 
                a.goodsReserveInfoDto && a.goodsReserveInfoDto.reserveTime && (a.goodsReserveInfoDto.reserveTime = (0, 
                e.ShowTime)(a.goodsReserveInfoDto.reserveTime, "Y-M-D hh:mm", "-")), a.goodsReserveInfoDto && a.goodsReserveInfoDto.reserveEndTime && (a.goodsReserveInfoDto.reserveEndTime = "-" + (0, 
                e.ShowTime)(a.goodsReserveInfoDto.reserveEndTime, "hh:mm", "-")), t.ele.setData({
                    order: a
                }), i && i();
            } else t.ele.setData({
                pageLoading: !1,
                showTipData: {
                    show: !0,
                    content: r.data.msg
                }
            }), (0, o.ShowDialog)(t.ele);
        },
        fail: function() {
            (0, o.ShowDialog)(t.ele);
        }
    });
};
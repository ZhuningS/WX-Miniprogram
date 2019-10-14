var e = require("../../../utils/ajax.js"), a = (require("../../../utils/wxUtil.js"), 
require("../../../utils/util.js")), r = require("../../../utils/common.js"), t = require("../../../common/PageBase.js");

getApp();

Page(r.extendPage(t, {
    data: {},
    onLoad: function(e) {
        var a = e.deliveryname, r = e.deliveryno;
        this.setData({
            deliveryname: a,
            deliveryno: r
        }), this._getExpressInfo(a, r);
    },
    _getExpressInfo: function(r, t) {
        var s = this, i = {
            deliveryname: r,
            deliveryno: t
        };
        e.G({
            url: "/apis/home/order.deliver/get",
            data: i,
            success: function(e) {
                if (1 != e.code) {
                    var r = e.data;
                    s.setData({
                        logisticsDetails: r
                    });
                } else a.showWarn(e.msg);
            }
        });
    },
    _callPhone: function(e) {
        var a = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    }
}));
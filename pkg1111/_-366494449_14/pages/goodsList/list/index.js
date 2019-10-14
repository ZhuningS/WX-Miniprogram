var t = getApp(), a = (require("../../../utils/util.js"), require("../../../utils/common.js")), e = require("../../../common/PageBase.js"), o = (require("../../../utils/pagination.js"), 
require("../../../utils/ajax.js"));

Page(a.extendPage(e, {
    data: {
        dataLoaded: !1,
        goodsList: [],
        double: !0,
        toId: "",
        current: 0,
        fromCate: 0,
        fromCoupon: 0
    },
    onLoad: function(t) {
        var e = this, o = t.cid || "", i = t.title || "";
        "" != (t.type || "") && e.setData({
            type: t.type,
            value: t.value,
            fromCoupon: 1
        }), "" != o && e.setData({
            cid: o,
            fromCate: 1,
            title: i
        }), a.initApp({
            loginSuc: function() {
                e._getList(o);
            }
        });
    },
    onPullDownRefresh: function() {
        this._pagination && this._pagination.flush(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        console.log("开始");
    },
    _changeQueue: function() {
        this.data.double = !this.data.double, this.setData({
            double: this.data.double
        });
    },
    _getList: function(a) {
        var e = this, i = this, s = {};
        s = 1 == i.data.fromCoupon ? {
            page: 1,
            size: 999,
            card_id: t.getCardid(),
            card_coupon_type: i.data.type,
            card_coupon_value: i.data.value,
            type: "1"
        } : {
            page: 1,
            size: 999,
            cid: a || "",
            type: "1"
        }, o.G({
            url: "/apis/home/goods.category/index",
            data: s,
            success: function(t) {
                var a = t.data.item, o = t.data.catelist;
                e.setData({
                    dataLoaded: !0,
                    catelist: o,
                    goodsList: a
                });
            }
        });
    },
    _changeItem: function(t) {
        var a = this;
        console.log("index---" + t.target.dataset.index);
        var e = t.target.dataset.cid || "", i = t.target.dataset.index;
        a.setData({
            current: i,
            cid: e,
            toId: "s" + (t.target.dataset.index - 2)
        }), o.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: e,
                type: "1"
            },
            success: function(t) {
                var e = t.data.item;
                a.setData({
                    goodsList: e
                });
            }
        });
    }
}));
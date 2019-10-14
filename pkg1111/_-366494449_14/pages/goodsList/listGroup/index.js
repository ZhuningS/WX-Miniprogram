getApp(), require("../../../utils/util.js");

var t = require("../../../utils/common.js"), a = require("../../../common/PageBase.js"), e = (require("../../../utils/pagination.js"), 
require("../../../utils/ajax.js"));

Page(t.extendPage(a, {
    data: {
        dataLoaded: !1,
        goodsList: [],
        double: !0,
        toId: "",
        current: 0
    },
    onLoad: function(a) {
        var e = this;
        t.initApp({
            loginSuc: function() {
                e._getList();
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
    _getList: function() {
        var t = this;
        e.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: "",
                type: "3"
            },
            success: function(a) {
                var e = a.data.item, i = a.data.catelist;
                t.setData({
                    dataLoaded: !0,
                    catelist: i,
                    goodsList: e
                });
            }
        });
    },
    _changeItem: function(t) {
        var a = this;
        console.log("index---" + t.target.dataset.index);
        var i = t.target.dataset.cid || "", s = t.target.dataset.index;
        a.setData({
            current: s,
            cid: i,
            toId: "s" + (t.target.dataset.index - 2)
        }), e.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: i,
                type: "3"
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
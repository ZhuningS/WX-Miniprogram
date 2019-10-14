var e = getApp(), t = (require("../../../utils/util.js"), require("../../../utils/common.js")), a = require("../../../common/PageBase.js"), i = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(t.extendPage(a, {
    data: {
        dataLoaded: !1,
        serviceList: []
    },
    onLoad: function(e) {
        var a = this, i = e.id;
        t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                a._getFormDetail(i);
            }
        });
    },
    _jumpToCard: function(t) {
        var a = t.currentTarget.dataset.cardid;
        e.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    _getFormDetail: function(e) {
        var t = this;
        i.G({
            url: "/apis/home/card.form/get",
            data: {
                id: e
            },
            success: function(e) {
                var a = e.data;
                t.setData({
                    dataLoaded: !0,
                    formDetail: a
                }), wx.setNavigationBarTitle({
                    title: a.title
                });
            }
        });
    }
}));
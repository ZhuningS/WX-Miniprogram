var t = getApp(), a = (require("../../../utils/util.js"), require("../../../utils/common.js")), i = require("../../../common/PageBase.js"), e = require("../../../utils/ajax.js");

Page(a.extendPage(i, {
    data: {
        dataLoaded: !1,
        currentTab: 0,
        couponList: []
    },
    onLoad: function(t) {
        var i = this;
        a.initApp({
            loginSuc: function() {
                i._getList(0);
            }
        });
    },
    _tabSwitch: function(t) {
        t.detail.formId;
        var a = +t.currentTarget.dataset.current;
        this._toTab(a);
    },
    _toTab: function(t, a) {
        this.setData({
            currentTab: t,
            couponList: []
        }), this._getList(t);
    },
    _getList: function(a) {
        var i = this;
        e.G({
            url: "/apis/home/plugins.fissionpacket/index",
            data: {
                uid: t.getUid(),
                size: 999,
                used: a
            },
            success: function(t) {
                var a = t.data;
                i.setData({
                    dataLoaded: !0,
                    couponList: a
                });
            }
        });
    }
}));
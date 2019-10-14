getApp();

var a = require("../../../utils/util.js"), t = require("../../../utils/common.js"), e = require("../../../common/PageBase.js"), i = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(t.extendPage(e, {
    data: {
        dataLoaded: !1,
        money: "",
        bankid: "",
        index: 0
    },
    onLoad: function(a) {
        var t = this, e = a.money;
        t.setData({
            money: e
        });
    },
    onShow: function() {
        var a = this;
        t.initApp({
            extSuc: function() {},
            loginSuc: function() {
                a._getBank();
            }
        });
    },
    _getBank: function() {
        var a = this;
        i.G({
            url: "/apis/home/user.bankcard/fetch",
            data: {},
            success: function(t) {
                var e = t.data.item, i = "";
                e.length > 0 && (i = e[0].id), a.setData({
                    bankList: e,
                    bankid: i,
                    dataLoaded: !0
                });
            }
        });
    },
    _withDraw: function() {
        var t = this, e = t.data.bankid;
        i.P({
            url: "/apis/home/user.distribute/apply",
            data: {
                bankcard_id: e
            },
            success: function(e) {
                0 == e.code ? (a.showWarn("提现成功"), t.setData({
                    money: 0
                })) : a.showWarn(e.msg);
            }
        });
    },
    bindPickerChange: function(a) {
        var t = this, e = a.detail.value, i = t.data.bankList[e].id;
        t.setData({
            bankid: i,
            index: e
        });
    }
}));
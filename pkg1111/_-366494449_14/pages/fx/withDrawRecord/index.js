getApp();

var a = require("../../../utils/util.js"), e = require("../../../utils/common.js"), t = require("../../../common/PageBase.js"), r = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(e.extendPage(t, {
    data: {
        dataLoaded: !1
    },
    onLoad: function(a) {
        var t = this;
        e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                t._getRecord();
            }
        });
    },
    _getRecord: function() {
        var e = this;
        r.G({
            url: "/apis/home/user.distribute/withdraw",
            data: {},
            success: function(t) {
                var r = t.data.item;
                r.forEach(function(e) {
                    var t = a.formatBankNo(e.card_no);
                    e.newcard_no = t;
                }), e.setData({
                    recordList: r,
                    dataLoaded: !0
                });
            }
        });
    },
    _viewReason: function(e) {
        var t = e.currentTarget.dataset.reason;
        a.alert(t);
    }
}));
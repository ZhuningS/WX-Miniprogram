getApp(), require("../../../utils/util.js");

var e = require("../../../utils/common.js"), t = require("../../../common/PageBase.js"), a = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(e.extendPage(t, {
    data: {
        dataLoaded: !1
    },
    onLoad: function() {},
    onShow: function() {
        var t = this;
        e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                t._getFx();
            }
        });
    },
    _getFx: function() {
        var e = this;
        a.G({
            url: "/apis/home/user.distribute/index",
            data: {},
            success: function(t) {
                var a = t.data;
                e.setData({
                    fxInfo: a,
                    dataLoaded: !0
                });
            }
        });
    }
}));
var e = getApp(), a = (require("../../utils/util.js"), require("../../utils/ajax.js")), t = require("../../utils/common.js"), i = require("../../common/PageBase.js");

Page(t.extendPage(i, {
    data: {
        dataLoaded: !1
    },
    onLoad: function(e) {
        var a = this;
        t.initApp({
            loginSuc: function() {
                a.getMemberInfo();
            }
        });
    },
    getMemberInfo: function() {
        var t = this, i = e.getUid();
        a.G({
            url: "/apis/home/user.vip/get",
            data: {
                uid: i
            },
            success: function(e) {
                var a = e.data;
                t.setData({
                    vip: a,
                    dataLoaded: !0
                });
            }
        });
    }
}));
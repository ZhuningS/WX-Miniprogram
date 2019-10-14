var e = getApp(), t = (require("../../utils/util.js"), require("../../utils/ajax.js")), i = require("../../utils/common.js"), a = require("../../common/PageBase.js");

Page(i.extendPage(a, {
    data: {},
    onLoad: function(e) {
        var t = this;
        i.initApp({
            loginSuc: function() {
                t.getMemberInfo();
            }
        });
    },
    getMemberInfo: function() {
        var i = this, a = e.getUid();
        t.G({
            url: "/apis/home/user.vip/get",
            data: {
                uid: a
            },
            success: function(e) {
                var t = e.data;
                i.setData({
                    vip: t
                });
            }
        });
    }
}));
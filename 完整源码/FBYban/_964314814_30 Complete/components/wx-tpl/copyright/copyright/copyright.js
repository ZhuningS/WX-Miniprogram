var a = require("../common-js/copyright-fn.js"), e = getApp();

Component({
    behaviors: [ a.copyrightFn ],
    properties: {},
    data: {
        content: {},
        isShowEle: !1
    },
    ready: function() {
        for (var a = !1, o = e.globalData.specialXcxIds, s = 0; s < o.length; s++) if (o[s] == e.globalData.xcxId) {
            a = !0;
            break;
        }
        a || this.setData({
            isShowEle: !0
        });
    },
    methods: {
        wantProgram: function() {
            wx.navigateTo({
                url: "/subPackage/my/pages/business_make_program/business_mack_program"
            });
        }
    }
});
var t = require("../common-js/custom-page-fn"), e = getApp();

Component({
    behaviors: [ t.customPageFn ],
    properties: {
        onPullDownRefresh: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.onPullDownRefresh();
            }
        },
        onShow: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.onShow();
            }
        }
    },
    data: {
        thisIndexes: 99,
        status: 0,
        enablePublicNumber: 2,
        officalSceneState: e.globalData.officalSceneState
    },
    methods: {
        stopOther: function(t) {
            this.setData({
                thisIndexes: t.detail
            });
        },
        bindload: function(t) {
            console.log("555655555", t);
            var e = t.detail.status;
            this.setData({
                status: e
            });
        },
        binderror: function(t) {
            console.log("444444444", t);
            var e = t.detail.status;
            this.setData({
                status: e
            });
        },
        onShow: function() {
            var t = this;
            return new Promise(function(a, o) {
                wx.request({
                    url: e.globalData.shopMHost + "/xcx/shop/publicNumer/info",
                    method: "post",
                    data: {
                        orgId: e.globalData.orgId
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        t.setData({
                            enablePublicNumber: e.data.resultDto.data.enablePublicNumber
                        }), a(e.data.data);
                    },
                    fail: function(t) {
                        o("网络连接失败");
                    }
                });
            });
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});
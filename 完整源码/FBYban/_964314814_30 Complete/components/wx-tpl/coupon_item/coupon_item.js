var e = getApp();

Component({
    properties: {
        couponList: {
            type: Array,
            value: [],
            observer: function(e, o) {
                e && (console.log("~~~~~~~~~~~~~~~~~~~~~"), console.log(e));
            }
        },
        showShopInfo: {
            type: Boolean,
            value: !1,
            observer: function(e, o) {}
        },
        fromHome: {
            type: Boolean,
            value: !1,
            observer: function(e, o) {}
        }
    },
    data: {
        showShopInfo: !1,
        couponList: [],
        orgId: e.globalData.orgId,
        receiveId: ""
    },
    methods: {
        jumpDetail: function(e) {
            var o = e.currentTarget.dataset;
            wx.navigateTo({
                url: o.jumpUrl
            });
        },
        receiveCoupon: function(o) {
            var t = this, r = o.currentTarget.dataset, n = r.id, a = r.status;
            t.data.receiveId && t.data.receiveId == n || 2 == a || (t.setData({
                receiveId: n
            }), e.userInfoMiddleWare(!0).then(function(e) {
                e.isGetUserInfo ? t.triggerEvent("receivecoupon", o) : wx.eventBus.trigger("showOnAuthShow");
            }));
        },
        stopJump: function(e) {}
    }
});
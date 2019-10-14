Component({
    properties: {
        orderList: Array,
        hasMoreOrder: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        goToReportList: function() {
            wx.navigateTo({
                url: "/shopping-cart/pages/order-list-for-report/order-list-for-report"
            });
        },
        loadMoreOrderList: function() {
            this.triggerEvent("loadmoreorder");
        },
        onLongPressReport: function() {
            wx.navigateTo({
                url: "/portal/debug/debug"
            });
        }
    }
});
Component({
    properties: {
        order: Object
    },
    data: {},
    attached: function() {},
    methods: {
        goToOrderDetail: function() {
            this.triggerEvent("gotoorderdetail", {
                order: this.data.order
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        gotoShop: function() {
            wx.navigateTo({
                url: "/portal/index/index"
            });
        },
        addOrderDate: function() {
            var e = this.data.order, t = new Date(1e3 * e.pay_finish_time), r = t.getMonth() + 1;
            r < 10 && (r = "0" + r);
            var o = t.getDate();
            o < 10 && (o = "0" + o), e.orderDate = r + "-" + o, this.setData({
                order: e
            });
        },
        deleteOrder: function() {
            var e = this.data.order, t = this.data.order.order_id;
            this.triggerEvent("deleteorder", {
                order: e,
                order_id: t
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});
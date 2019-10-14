Component({
    properties: {
        section: {
            type: Object,
            value: {}
        },
        isLastOne: Boolean
    },
    data: {},
    methods: {
        gotoShop: function() {
            wx.navigateTo({
                url: "/portal/index/index"
            });
        },
        selectAllItems: function() {
            if (this.data.section.isAvailable) {
                var e = this.data.section.appid, t = !this.data.section.isCheck;
                this.triggerEvent("selectallitems", {
                    appid: e,
                    selected: t
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }
        }
    }
});
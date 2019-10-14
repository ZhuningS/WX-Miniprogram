var t = require("../../core/api.js");

Component({
    properties: {
        product: Object
    },
    attached: function() {
        console.log(this.properties.product);
    },
    methods: {
        onClickNewProductItem: function() {
            if ("OFFICIAL_JUMPTYPE_WXAPAGE_ITEM_DETAIL" === this.data.product.jump_type) {
                var e = this.data.product.item_code;
                if (!e) return;
                t.navigateTo({
                    url: "/portal/detail/detail?code=" + e
                }), this.triggerEvent("productclick", {
                    itemCode: e
                });
            } else "OFFICIAL_JUMPTYPE_CUSTOM" === this.data.product.jump_type && this.triggerEvent("productclick", {
                item: this.data.product
            });
        }
    }
});
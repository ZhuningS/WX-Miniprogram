Component({
    properties: {
        appid: String,
        item_code: String,
        sku_id: String,
        stock_number: Number,
        not_ship: Boolean,
        is_valid: Boolean,
        is_last_one: Boolean,
        quantity: {
            type: Number,
            value: 1
        },
        recipt_info: Object,
        goods_name: {
            type: String,
            value: "-"
        },
        goods_desc: {
            type: String,
            value: "-"
        },
        goods_img_url: {
            type: String,
            value: "/assets/icon-default-mch-logo.png"
        },
        goods_price: {
            type: Number,
            value: -1
        },
        express_fee: {
            type: Number,
            value: -1
        }
    },
    data: {},
    methods: {
        onMinusQuantity: function(t) {
            this.triggerEvent("minus", {
                id: this.data.item_code + this.data.sku_id
            });
        },
        onIncreaseQuantity: function(t) {
            this.triggerEvent("increase", {
                id: this.data.item_code + this.data.sku_id
            });
        },
        onInputFocus: function(t) {
            this.triggerEvent("focus", Object.assign({}, t.detail, {
                target: t.currentTarget,
                appid: this.data.appid
            }));
        },
        onInputBlur: function(t) {
            this.triggerEvent("blur", Object.assign({}, t.detail, {
                target: t.currentTarget,
                appid: this.data.appid
            }));
        }
    }
});
Component({
    properties: {
        styleObj: String,
        component: {
            type: Object,
            observer: function(t) {
                var e = [];
                t && t.comm_products && t.comm_products.forEach(function(t) {
                    t.shelf_info && t.shelf_info.item_code && e.push(t.shelf_info.item_code);
                }), this.setData({
                    exposureInfo: {
                        type: t.type || "",
                        codes: e
                    }
                });
            }
        }
    },
    data: {
        exposureInfo: Object
    },
    methods: {
        onItemClick: function(t) {
            var e = t.currentTarget.dataset.item, o = this.data.component.type || "";
            e && this.triggerEvent("onClickCb", {
                type: o,
                item: e
            });
        }
    }
});
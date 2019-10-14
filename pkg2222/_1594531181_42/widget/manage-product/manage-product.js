require("../../core/api.js"), require("../../utils/util.js");

Component({
    properties: {
        data: Object
    },
    data: {},
    attached: function() {},
    methods: {
        onClickBanner: function() {
            console.log("onClickBanner: ", this.properties.data), this.triggerEvent("tapbanner", {
                data: this.properties.data
            });
        },
        onClickProduct: function(t) {
            var e = parseInt(t.currentTarget.dataset.index);
            console.log("onClickProduct: ", this.properties.data.manage_products[e]), this.triggerEvent("tapproduct", {
                item: this.properties.data.manage_products[e],
                index: e
            });
        }
    }
});
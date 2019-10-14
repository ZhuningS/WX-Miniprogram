var e = require("../../core/sys.js"), t = require("../../foundation/base/page.js"), r = require("../../core/api.js");

t({
    pageActionConfig: require("./manage-product-list-slider.pageaction.js"),
    data: {
        iconUrl: "",
        products: [],
        currentProduct: null,
        swiperItemContentWidth: 335,
        swiperItemContentHeight: 362,
        phoneModel: e.phoneModel(),
        hasError: !1
    },
    onLoad: function(e) {
        if (e && e.data) {
            var t = JSON.parse(decodeURIComponent(e.data));
            this.setData({
                currentProduct: t.manage_products[0],
                products: t.manage_products,
                brandName: decodeURIComponent(e.brandName || ""),
                brandIcon: decodeURIComponent(e.brandIcon || ""),
                username: e.username,
                searchId: e.searchId || ""
            });
        }
    },
    onClickLogo: function(e) {},
    onChangeSwiper: function(e) {
        this.setData({
            currentProduct: this.data.products[parseInt(e.detail.current)]
        });
    },
    onClickProduct: function(e) {
        var t = encodeURIComponent(JSON.stringify(this.data.currentProduct));
        r.navigateTo({
            url: "/portal/manage-product/manage-product?item=" + t
        });
    }
});
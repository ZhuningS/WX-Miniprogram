require("../../core/sys.js");

var a = require("../../foundation/base/page.js"), e = (require("../../foundation/loader/image-loader.js"), 
require("../../utils/imageColor.js"), require("../../core/api.js"));

a({
    pageActionConfig: require("./manage-product-list.pageaction.js"),
    data: {
        headImgUrl: "",
        products: [],
        navigationbarColor: "transparent",
        navigationbarTitle: "",
        hasMall: !1,
        backgroundColor: "transparent",
        removeFakeCanvas: !1,
        removeFakeCanvas2: !1,
        headerHeight: 209,
        scope: ""
    },
    onLoad: function(a) {
        if (a && a.data) {
            var e = JSON.parse(decodeURIComponent(a.data)), o = decodeURIComponent(a.brandName || ""), t = decodeURIComponent(a.businessScope || "");
            this.setData({
                products: e.manage_products.map(function(a) {
                    return a.product_name = a.name, a.product_jump_type = a.jump_type, a.jump_type = "OFFICIAL_JUMPTYPE_CUSTOM", 
                    a.action = "查看", a;
                }),
                title: o + e.title,
                scope: t
            });
        }
    },
    onPageScroll: function(a) {
        var e = (this.imageColor && a.scrollTop > 10 ? "#F7F7F7" : this.imageColor) || "#F7F7F7", o = this.data.headerHeight;
        a.scrollTop >= o ? this.setData({
            navigationbarColor: "#F7F7F7",
            navigationbarTitle: this.data.title,
            backgroundColor: e
        }) : this.setData({
            navigationbarColor: "transparent",
            navigationbarTitle: "",
            backgroundColor: e
        });
    },
    onProductClick: function(a) {
        var o = parseInt(a.currentTarget.dataset.index), t = this.data.products[o], r = encodeURIComponent(JSON.stringify(t));
        e.navigateTo({
            url: "/portal/manage-product/manage-product?item=" + r
        });
    },
    onGotoBrandmall: function() {
        e.navigateTo({
            url: "/portal/index/index?from=new-product"
        });
    }
});
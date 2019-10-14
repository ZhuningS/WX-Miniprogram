require("../../core/sys.js");

var a = require("../../foundation/base/page.js"), e = (require("../../foundation/loader/image-loader.js"), 
require("../../utils/imageColor.js"), require("../../core/api.js"), require("../../foundation/base/model.js")), t = require("../../core/network.js");

a({
    pageActionConfig: require("./manage-product.pageaction.js"),
    data: {
        headImgUrl: "",
        infos: [],
        navigationbarColor: "transparent",
        navigationbarTitle: "",
        hasMall: !1,
        backgroundColor: "transparent",
        removeFakeCanvas: !1,
        removeFakeCanvas2: !1,
        headerHeight: 209,
        hasError: !1
    },
    onLoad: function(a) {
        var i = this;
        if (a.item) {
            var r = JSON.parse(decodeURIComponent(a.item));
            i.handleProductItemResp(r);
        } else a.material_id ? (i.model = e({
            cgi: t.cgiSet.mainProduct,
            useCache: !0
        }), i.model.load({
            loading: !0,
            params: {
                material_id: parseInt(a.material_id),
                audit_biz_uin: parseInt(a.audit_biz_uin || 0)
            },
            success: function(a) {
                i.model.data.product ? i.handleProductItemResp(i.model.data.product) : i.setData({
                    hasError: !0
                });
            }
        })) : i.setData({
            hasError: !0
        });
    },
    handleProductItemResp: function(a) {
        this.setData({
            headImgUrl: a.pic_url,
            details: a.details,
            params: a.params,
            custom: a.custom,
            name: a.name,
            itemCode: a.jump_item_code,
            itemWxa: a.jump_wxapp,
            desc: a.desc,
            jumpType: a.product_jump_type || a.jump_type,
            scope: a.scope
        }), this.item = a;
    },
    onPageScroll: function(a) {
        var e = (this.imageColor && a.scrollTop > 10 ? "#F7F7F7" : this.imageColor) || "#F7F7F7", t = this.data.headerHeight;
        a.scrollTop >= t ? this.setData({
            navigationbarColor: "#F7F7F7",
            navigationbarTitle: this.data.name,
            backgroundColor: e
        }) : this.setData({
            navigationbarColor: "transparent",
            navigationbarTitle: "",
            backgroundColor: e
        });
    },
    onGotoDetail: function(a) {},
    onShareAppMessage: function() {
        return this.item.meta && this.item.meta.material_id ? {
            path: "/portal/manage-product/manage-product?material_id=" + this.item.meta.material_id,
            title: this.data.name
        } : {
            path: "/portal/manage-product/manage-product?item=" + encodeURIComponent(JSON.stringify(this.item)),
            title: this.data.name
        };
    }
});
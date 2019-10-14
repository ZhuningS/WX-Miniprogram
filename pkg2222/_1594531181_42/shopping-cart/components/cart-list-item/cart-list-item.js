var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/toast")), e = (require("../../utils/api"), null);

Component({
    properties: {
        appid: String,
        name: String,
        item: Object,
        mch_logo_url: String,
        goods_list: {
            type: Array,
            value: []
        },
        isLastOne: {
            type: Boolean,
            value: !1
        },
        isFirstOne: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        longPressing: !1
    },
    methods: {
        touchStart: function() {
            var t = this;
            e = setTimeout(function() {
                t.setData({
                    longPressing: !0
                });
            }, 200);
        },
        touchMove: function() {
            this.setData({
                longPressing: !1
            }), e && clearTimeout(e);
        },
        touchEnd: function() {
            this.setData({
                longPressing: !1
            }), e && clearTimeout(e);
        },
        gotoItemDetail: function(e) {
            var r = e.currentTarget && e.currentTarget.dataset.itemCode, a = e.currentTarget && e.currentTarget.dataset.skuId, s = this.data.appid;
            if (!r || !s) return t.default.showErrTips("请稍后重试"), -1;
            var i = {
                appId: s,
                path: "/portal/detail/detail?code=" + r + "&from=shopping-cart-list&sku_id=" + a
            };
            this.triggerEvent("ongotogoodsdetail", i, {
                bubbles: !0,
                composed: !0
            });
        },
        gotoConfirmOrder: function(t) {
            var e = t.currentTarget && t.currentTarget.dataset.itemCode, r = t.currentTarget && t.currentTarget.dataset.skuid, a = t.currentTarget && t.currentTarget.dataset.name, s = t.currentTarget && t.currentTarget.dataset.desc, i = t.currentTarget && t.currentTarget.dataset.goodsImgUrl, o = t.currentTarget && t.currentTarget.dataset.unitPrice, n = t.currentTarget && t.currentTarget.dataset.stockNumber, u = t.currentTarget && t.currentTarget.dataset.status;
            if (n <= 0 || 1 !== u) return -1;
            var d = encodeURIComponent(JSON.stringify([ {
                item_code: e,
                sku_id: r,
                name: a,
                desc: s,
                goods_img_url: i,
                unit_price: o,
                quantity: 1
            } ])), c = {
                appId: this.data.appid,
                path: "/libs/shoppingcartcomm/portal/order/order?from=shoppingcart&goods_list=" + d + "&mch_name=" + this.data.name + "&mch_logo_url=" + encodeURIComponent(this.data.mch_logo_url)
            };
            this.triggerEvent("ongotoconfirmorder", c, {
                bubbles: !0,
                composed: !0
            });
        },
        deleteItem: function() {
            for (var t = [], e = 0; e < this.data.goods_list.length; e++) {
                var r = this.data.goods_list[e];
                t.push({
                    item_code: r.item_code,
                    sku_id: r.sku_id
                });
            }
            this.triggerEvent("deleteitem", {
                itemForDelete: t
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        selectItem: function(t) {
            if (!(this.data.is_pre_sale || this.data.item.stock_number <= 0 || 1 != this.data.item.status)) {
                var e = t.currentTarget && t.currentTarget.dataset.itemCode, r = t.currentTarget && t.currentTarget.dataset.skuId, a = t.currentTarget && t.currentTarget.dataset.item, s = !this.data.item.isCheck;
                this.triggerEvent("selectitem", {
                    item: a,
                    itemCode: e,
                    skuId: r,
                    selected: s
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }
        }
    }
});
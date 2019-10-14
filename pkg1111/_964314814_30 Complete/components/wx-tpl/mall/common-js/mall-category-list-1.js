Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mallCategorylist1 = void 0;

var t = require("../../../function/moveTab/move-tabs"), e = require("../../../model/buy_car/buy_car"), i = getApp(), r = Behavior({
    behaviors: [],
    properties: {
        params: {
            type: Object,
            value: "",
            observer: function(t, e) {
                console.log("44444444444444页面传参改变----------------", t, e);
            }
        },
        onPullDownRefresh: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.onPullDownRefresh();
            }
        },
        onShow: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.onShow(t);
            }
        }
    },
    data: {
        scrollLeft: 0,
        limitedType: 0,
        enablePublicNumber: 1,
        officalSceneState: i.globalData.officalSceneState
    },
    ready: function() {
        this.getLimitedType();
    },
    methods: {
        onShow: function() {
            this.getLimitedType();
        },
        onPullDownRefresh: function() {
            this.getLimitedType();
        },
        jumpToNext: function(t) {
            var e = {
                id: t.currentTarget.dataset.id
            }, i = {};
            this.triggerEvent("jumpnext", e, i);
        },
        btnActive: function(e) {
            var i = {
                e: e
            };
            (0, t.moveTabsX)({
                event: e,
                ele: this
            });
            var r = {};
            this.triggerEvent("btnactive", i, r);
        },
        selfAddBuyCar: function(t) {
            this.triggerEvent("addbuycar", t.detail, {});
        },
        onAddBuyCar: function(t) {
            this.triggerEvent("addbuycar", t.currentTarget.dataset, {});
        },
        addToBuyCar: function(t) {
            var r = this, a = [], n = t.attributeId ? t.attributeId : [], o = t.inventory, u = t.id;
            if (n.length > 0) for (var s = 0; s < n.length; s++) {
                var d = n[s];
                if (d.inventory > 0) {
                    a[0] = d.firstAttrId, o = d.inventory, d.secondAttrId && (a[1] = d.secondAttrId);
                    break;
                }
            }
            if (o < 1 && 2 != t.isInfiniteInventory) i.showDialog(this, "该商品已售罄"); else {
                var l = {
                    id: u,
                    attributeId: a,
                    count: 1,
                    inventory: o
                };
                (0, e.addBuyCar)(l, function() {
                    i.showDialog(r, "加入购物车成功"), i.setCarCountDot();
                });
                var c = {
                    id: u,
                    attributeId: a,
                    inventory: o
                };
                this.triggerEvent("addbuycar", c);
            }
        },
        getLimitedType: function() {
            var t = this;
            return new Promise(function(e, r) {
                wx.request({
                    url: i.globalData.shopMHost + "/xcx/shop/publicNumer/info",
                    method: "post",
                    data: {
                        orgId: i.globalData.orgId
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(i) {
                        t.setData({
                            limitedType: i.data.resultDto.data.type,
                            enablePublicNumber: i.data.resultDto.data.enablePublicNumber
                        }), e(i.data.data);
                    },
                    fail: function(t) {
                        r("网络连接失败");
                    }
                });
            });
        }
    }
});

exports.mallCategorylist1 = r;
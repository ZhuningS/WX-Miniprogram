function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
    return Array.from(t);
}

var r = t(require("../../models/deleteItem")), a = t(require("../../models/getCartList")), i = t(require("../../models/getOrderList")), o = t(require("../../models/getExpressInfo")), n = t(require("../../models/deleteOrderById")), s = require("../../utils/logger"), d = t(require("../../utils/datetime")), c = require("../../utils/api.js"), _ = require("../../../libs/mmuxwxappdevkit/foundation/base/page.js"), u = require("./index.pageaction"), l = require("../../models/Counter.js"), f = require("../../utils/eventcenter.js"), g = require("../../utils/sys.js"), m = void 0;

_({
    pageActionConfig: u,
    data: {
        merchantList: [],
        currentTab: "wish",
        hasMoreOrder: !0,
        orderList: [],
        orderListSummaryAll: [],
        orderListSummaryPreparing: [],
        orderListSummaryWaiting: [],
        orderListSummaryFinised: [],
        phoneModel: "",
        totalCost: 0,
        totalQuantity: 0,
        selectAll: !1
    },
    getExpressInfo: function(t) {
        var e = t.express_company_id, r = t.express_code.toString();
        (0, o.default)({
            data: {
                express_company_id: e,
                express_code: r
            },
            success: function(t) {}
        });
    },
    onLoad: function(t) {
        (m = this).setData({
            currentTab: t.tab || "wish"
        }), "wish" === m.data.currentTab || "order" === m.data.currentTab && (this.setData({
            orderList: []
        }), c.setStorageSync("__ORDER_LIST__", []), c.setStorageSync("__ORDER_LIST_OFFSET__", 0)), 
        f.register(f.Event.onPaySuccess, this, "onPaySuccess"), this.setData({
            phoneModel: g.phoneModel()
        });
    },
    onUnload: function() {
        f.unregister(f.Event.onPaySuccess, this);
    },
    onShow: function() {
        if (m.noReload) m.noReload = !1; else if ("wish" === m.data.currentTab) this.getCartList(); else if ("order" === m.data.currentTab) {
            var t = c.getStorageSync("__ORDER_LIST__"), e = c.getStorageSync("__ORDER_LIST_HAS_MORE_ORDER__");
            m.setData({
                orderList: t,
                hasMoreOrder: e
            });
        }
    },
    onPullDownRefresh: function() {
        "wish" === m.data.currentTab ? this.getCartList(c.stopPullDownRefresh) : "order" === m.data.currentTab && (this.setData({
            orderList: []
        }), c.setStorageSync("__ORDER_LIST_OFFSET__", 0), this.getOrderList(c.stopPullDownRefresh));
    },
    onDeleteItem: function(t) {
        var e = t.detail.itemForDelete;
        c.showActionSheet({
            itemList: [ "删除" ],
            itemColor: "#ed4d3d",
            success: function(t) {
                0 === t.tapIndex && (0, r.default)({
                    data: {
                        goods_info_list: e
                    },
                    success: function(t) {
                        m.getCartList();
                    }
                });
            }
        });
    },
    onDeleteOrder: function(t) {
        var e = this, r = t.detail.order, a = t.detail.order_id;
        c.showActionSheet({
            itemList: [ "删除订单" ],
            itemColor: "#ed4d3d",
            success: function(t) {
                0 === t.tapIndex && c.showModal({
                    title: "提示",
                    content: "删除后将无法恢复，确认删除此订单?",
                    success: function(t) {
                        t.cancel || (0, n.default)({
                            data: {
                                order_id: a,
                                appid: r.ext_info.brand_info.wxappid
                            },
                            success: function() {
                                for (var t = e.data.orderList, r = -1, i = 0; i < t.length; i++) if (t[i].order_id === a) {
                                    r = i;
                                    break;
                                }
                                -1 !== r && t.splice(r, 1), e.setData({
                                    orderList: t
                                });
                                var o = c.getStorageSync("__ORDER_LIST_OFFSET__");
                                c.setStorageSync("__ORDER_LIST_OFFSET__", o - 1);
                            }
                        });
                    }
                });
            }
        });
    },
    getCartList: function(t) {
        (0, a.default)({
            success: function(e, r) {
                var a = [];
                r && r.forEach(function(t) {
                    if (t && t.appid) {
                        var e = {
                            appid: t.appid,
                            logo: t.mch_logo_url,
                            name: t.mch_name,
                            list: t.goods_list
                        };
                        e.list && e.list.forEach(function(t) {
                            t.goods_list = [ {
                                create_time: t.create_time,
                                update_time: t.update_time,
                                item_code: t.item_code,
                                sku_id: t.sku_id,
                                name: t.name,
                                desc: (t.stock_attr_info || []).map(function(t) {
                                    return t.attr_value.name;
                                }).join(""),
                                goods_img_url: t.goods_img_url,
                                unit_price: t.unit_price,
                                quantity: t.quantity,
                                total_price: t.total_price,
                                goods_status: t.goods_status,
                                express_fee: t.express_fee,
                                stock_number: t.stock_number,
                                status: t.status,
                                mch_name: t.mch_name,
                                mch_logo_url: t.mch_logo_url,
                                appid: t.appid
                            } ];
                        }), a.push(e);
                    }
                }), a = l.merge(a);
                var i = Object.assign({
                    merchantList: a
                }, l.getStatus());
                console.log("sectionList ", a), m.setData(i), "function" == typeof t && t();
            },
            fail: function(e) {
                (0, s.Log)("获取商品列表失败: " + JSON.stringify(e)), "function" == typeof t && t();
            }
        });
    },
    getOrderList: function(t) {
        new Date();
        var r = c.getStorageSync("__ORDER_LIST_OFFSET__");
        (0, i.default)({
            data: {
                offset: r,
                count: 10
            },
            success: function(a) {
                for (var i = a.order_list, o = 0; o < i.length; o++) {
                    for (var n = i[o].ext_info.product_info.item_list, s = 0, _ = 0, u = 0; u < n.length; u++) {
                        var l = n[u];
                        _ += l.amount, s += l.total_fee;
                    }
                    i[o].totalQuantity = _, i[o].totalPrice = s + i[o].ext_info.express_info.price, 
                    i[o].formated_pay_finish_time = d.default.formatTime(i[o].pay_finish_time);
                }
                for (var f = 0; f < i.length; f++) {
                    var g = i[f], p = new Date(1e3 * g.pay_finish_time), h = p.getMonth() + 1;
                    h < 10 && (h = "0" + h);
                    var S = p.getDate();
                    S < 10 && (S = "0" + S), g.orderDate = h + "-" + S;
                }
                var L = !0;
                (i.length < 10 || 0 === i.length) && (L = !1);
                var O = [];
                O = r > 0 ? [].concat(e(m.data.orderList), e(i)) : i, m.setData({
                    hasMoreOrder: L,
                    orderList: O,
                    orderListOffset: m.data.orderListOffset + i.length
                }), c.setStorageSync("__ORDER_LIST__", m.data.orderList), c.setStorageSync("__ORDER_LIST_HAS_MORE_ORDER__", L), 
                c.setStorageSync("__ORDER_LIST_OFFSET__", r + i.length), "function" == typeof t && t();
            },
            fail: function() {
                "function" == typeof t && t(), c.setStorageSync("__ORDER_LIST__", []), c.setStorageSync("__ORDER_LIST_OFFSET__", 0);
            }
        });
    },
    switchTab: function(t) {
        var e = t.currentTarget.dataset.tab;
        e != m.data.currentTab && (m.setData({
            currentTab: e
        }), "wish" === e ? m.getCartList() : "order" === e && m.data.orderList.length <= 0 && (c.setStorageSync("__ORDER_LIST_OFFSET__", 0), 
        m.getOrderList()));
    },
    goToOrderList: function(t) {
        var e = t.currentTarget.dataset.filter || "all";
        encodeURIComponent(JSON.stringify(m.data.orderList));
        c.navigateTo({
            url: "/libs/shoppingcartcomm/portal/order/order?filter=" + e
        });
    },
    goToOrderDetail: function(t) {
        var e = encodeURIComponent(JSON.stringify(t.detail.order));
        c.navigateTo({
            url: "/libs/shoppingcartcomm/portal/order-detail/order-detail?from=orderList&info=" + e + "&orderId=" + t.detail.order.order_id + "&appId=" + t.detail.order.ext_info.brand_info.wxappid
        });
    },
    goToConfirmOrder: function(t) {
        c.navigateTo({
            url: t.detail.path
        });
    },
    goToGoodsDetail: function(t) {
        c.navigateTo({
            url: t.detail.path
        });
    },
    onSelectItem: function(t) {
        if (t.detail && t.detail.item) {
            var e = t.detail.item.appid, r = t.detail.item.item_code, a = t.detail.item.sku_id, i = t.detail.selected, o = l.changeItem(e, r, a, i), n = Object.assign({
                merchantList: o
            }, l.getStatus());
            m.setData(n);
        }
    },
    onSelectSectionItems: function(t) {
        if (t.detail && t.detail.appid) {
            var e = t.detail.appid, r = t.detail.selected, a = l.changeShop(e, r), i = Object.assign({
                merchantList: a
            }, l.getStatus());
            m.setData(i);
        }
    },
    onSelectAllItems: function() {
        var t = !this.data.selectAll, e = l.changeAll(t), r = Object.assign({
            merchantList: e
        }, l.getStatus());
        this.setData(r);
    },
    countAll: function() {
        var t = l.getBill();
        if (t && t.length) {
            var e = m.formalizeGoodsList(t);
            c.navigateTo({
                url: "/libs/shoppingcartcomm/portal/order/order?from=shoppingcart&goods_list=" + encodeURIComponent(JSON.stringify(e))
            });
        }
    },
    formalizeGoodsList: function(t) {
        var e = [];
        return t.forEach(function(t) {
            var r = t.item_code, a = t.sku_id, i = t.name, o = t.desc, n = t.goods_img_url + "/0", s = t.unit_price, d = t.stock_number, c = (t.status, 
            t.mch_logo_url + "/0"), _ = t.mch_name, u = t.appid;
            e.push({
                appid: u,
                item_code: r,
                sku_id: a,
                name: i,
                desc: o,
                goods_img_url: n,
                unit_price: s,
                mch_logo_url: c,
                mch_name: _,
                quantity: 1,
                stock_number: d
            });
        }), e;
    },
    onPaySuccess: function(t) {
        "order" != m.data.currentTab && m.setData({
            currentTab: "order"
        }), c.setStorageSync("__ORDER_LIST_OFFSET__", 0), m.getOrderList();
    },
    onClickTips: function(t) {
        this.noReload = !0, c.navigateTo({
            url: "/portal/shopping-list-tip/shopping-list-tip"
        });
    }
});
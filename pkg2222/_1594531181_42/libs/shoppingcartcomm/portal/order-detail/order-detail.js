function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}

var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, i = require("../../index.js"), a = e(require("../../utils/util.js")), r = e(require("../../utils/enum.js")), o = e(require("../../utils/toast")), n = e(require("order-detail.pageaction.js"));

(0, i.BMPage)({
    pageActionConfig: n.default,
    data: {
        order_id: "",
        orderList: [],
        goodsMap: {},
        phoneModel: i.Sys.phoneModel(),
        isWxaBinded: !0,
        actionSheetItems: [],
        showActionSheet: !1
    },
    onLoad: function(e) {
        var t = e.transId || void 0;
        if ("orderList" === e.from || "orderTab" === e.from) {
            var s = JSON.safeParse(decodeURIComponent(e.info)), i = s.ext_info.product_info.item_list;
            this._setItemDesc(i), this.onUpdateOrderList([ s ]), t = t || s.trans_id;
        }
        e.orderId && (this.setData({
            order_id: e.orderId
        }), this.getOrderDetail({
            appid: e.appId,
            order_id: e.orderId,
            trans_id: t
        }));
    },
    onUpdateOrderList: function(e) {
        var t = this.data.goodsMap;
        (e = e || []).forEach(function(e) {
            var s = {};
            (e.ext_info.product_info.item_list || []).forEach(function(e) {
                t[e.item_code + e.sku_id] = e, s[e.item_code + e.sku_id] = e;
            }), e.express_package_info_list = [], e.ext_info.express_info.express_package_info_list ? e.express_package_info_list = e.ext_info.express_info.express_package_info_list : e.ext_info.express_info.express_code && (e.express_package_info_list.push({
                express_code: e.ext_info.express_info.express_code,
                express_company_id: e.ext_info.express_info.express_company_id,
                express_company_name: e.ext_info.express_info.express_company_name
            }), s = {}), e.express_package_info_list.forEach(function(e) {
                (e.express_goods_info_list || []).forEach(function(e) {
                    delete s[e.item_code + e.sku_id];
                });
            }), e.unexpress_package_info_list = Object.values(s), e.isMultiExpressOrder = e.express_package_info_list.length > 1 || e.express_package_info_list.length > 0 && e.unexpress_package_info_list.length > 0;
        }), this.setData({
            orderList: e,
            goodsMap: t
        }), this.updateKfAppInfo();
    },
    getOrderDetail: function(e) {
        var t = this;
        i.Network.request({
            cgi: i.Network.cgiSet.getorderdetail,
            params: e,
            success: function(e) {
                t.getOrderDetailCallback(e);
            },
            fail: function(e) {
                console.log("fail", e);
            }
        });
    },
    getOrderDetailCallback: function(e) {
        if (!e.order_list || "object" !== s(e.order_list)) return o.default.showErrTips("请稍后重试"), 
        -1;
        for (var t = e.order_list, i = 0; i < t.length; i++) {
            for (var r = t[i].ext_info.product_info.item_list, n = 0, p = 0, _ = 0; _ < r.length; _++) {
                var d = r[_];
                p += d.amount, n += d.total_fee;
            }
            t[i].totalQuantity = p, t[i].totalPrice = n + t[i].ext_info.express_info.price, 
            t[i].formated_pay_finish_time = a.default.formatTime(t[i].pay_finish_time), this._setItemDesc(r);
        }
        var c = !1, f = JSON.safeParse(t[0].ext_info.brand_info.support_info_json);
        c = !!(f.is_link_shoppingcart_wxa && f.is_link_brandmall_wxa && f.kf_count > 0), 
        this.setData({
            isWxaBinded: c
        }), this.onUpdateOrderList(t), this.getAllExpressDetail();
    },
    getAllExpressDetail: function() {
        var e = this;
        (this.data.orderList || []).forEach(function(s, i) {
            s.express_package_info_list.forEach(function(a, r) {
                if (9999 == a.express_company_id) return a.status = 9999, void e.setData(t({}, "orderList[" + i + "].express_package_info_list[" + r + "]", a));
                var o = {
                    express_company_id: parseInt(a.express_company_id, 10),
                    express_code: a.express_code,
                    order_id: s.order_id,
                    appid: s.ext_info.brand_info.wxappid
                };
                e.getExpressDetailImpl(o, i, r);
            });
        });
    },
    getExpressDetailImpl: function(e, s, a) {
        var r = this, o = r.data.orderList[s].express_package_info_list[a];
        o.status = void 0, r.setData(t({}, "orderList[" + s + "].express_package_info_list[" + a + "]", o)), 
        i.Network.request({
            cgi: i.Network.cgiSet.getexpressdetail,
            params: e,
            success: function(e) {
                var i = e.content, o = {
                    express_company_logo: e.logo_url,
                    express_company_name: e.express_company_name,
                    status: i ? 0 : -1
                }, n = null;
                try {
                    n = JSON.safeParse(i.replace(/^WxOrderCb\(/, "").replace(/\)\s*$/, ""));
                } catch (e) {
                    n = {
                        traces: []
                    };
                }
                o.express_info_list = (n.traces || []).sort(function(e, t) {
                    return new Date(e.accept_time) < new Date(t.accept_time);
                });
                var p = r.data.orderList[s], _ = Object.assign(p.express_package_info_list[a], o);
                r.setData(t({}, "orderList[" + s + "].express_package_info_list[" + a + "]", _));
            },
            fail: function(e) {
                r.setData(t({}, "orderList[" + s + "].express_package_info_list[" + a + "].status", -1));
            }
        });
    },
    goToExpressDetail: function(e) {
        var t = this, s = e.currentTarget.dataset.status;
        if (void 0 !== s && 9999 != s) {
            var a = e.currentTarget.dataset.expressCode;
            if (-1 != s) {
                var o = this.data.orderList.map(function(e) {
                    return {
                        appid: e.ext_info.brand_info.wxappid,
                        order_id: e.order_id,
                        express_package_info_list: e.express_package_info_list
                    };
                });
                i.wx.navigateTo({
                    url: i.Path + "/portal/express-detail/express-detail?from_order_list=" + encodeURIComponent(JSON.stringify(o)) + "&express_code=" + encodeURIComponent(a) + "&scene=" + r.default.DetailPageScene.Order
                });
            } else this.data.orderList.forEach(function(e, s) {
                e.express_package_info_list.forEach(function(i, r) {
                    if (a == i.express_code) {
                        var o = {
                            express_company_id: parseInt(i.express_company_id, 10),
                            express_code: i.express_code,
                            order_id: e.order_id
                        };
                        t.getExpressDetailImpl(o, s, r);
                    }
                });
            });
        }
    },
    goToShop: function(e) {
        this.data.isWxaBinded && this.goToShopImpl(e);
    },
    goToShopImpl: function(e) {},
    contactBrand: function(e) {
        var t = [];
        "miniProgram" == this.data.kfApp.target ? t.push({
            type: "miniProgram",
            content: "在线客服",
            userInfo: {
                appid: this.data.kfApp.appId,
                path: this.data.kfApp.path
            }
        }) : t.push({
            type: "custom",
            content: "在线客服",
            userInfo: "seller-online"
        });
        var s = this.data.orderList[0].ext_info.brand_info.phone;
        s && t.push({
            type: "phone",
            content: "电话客服",
            desc: this.data.orderList[0].ext_info.brand_info.service_time || "",
            userInfo: s
        }), this.setData({
            showActionSheet: !0,
            actionSheetItems: t
        });
    },
    clickActionSheet: function(e) {
        var t = e.detail;
        t.index, t.type, t.content;
        "seller-online" == t.userinfo && i.wx.navigateTo({
            url: this.data.kfApp.url
        });
    },
    hideActionSheet: function() {
        this.setData({
            showActionSheet: !1
        });
    },
    updateKfAppInfo: function() {
        this.data.orderList.length > 1 || (i.SellerOnlinePath ? this.setData({
            kfApp: {
                target: "",
                url: i.SellerOnlinePath + "/portal/chat/chat?wxapp_appid=" + this.data.orderList[0].ext_info.brand_info.wxappid
            }
        }) : this.setData({
            kfApp: {
                target: "miniProgram",
                appId: i.Sys.selleronlineAppid(),
                path: "/portal/chat/chat?wxapp_appid=" + this.data.orderList[0].ext_info.brand_info.wxappid
            }
        }));
    },
    _setOrderStatusText: function(e) {
        switch (e) {
          case 3:
            (void 0).setData({
                statusDesc: "待发货",
                statusDescSubInfo: "订单已提交，等待商家发货",
                status: e
            });
            break;

          case 4:
            (void 0).setData({
                statusDesc: "待收货",
                statusDescSubInfo: "物流信息获取中...",
                status: e
            });
            break;

          case 5:
            (void 0).setData({
                statusDesc: "已完成",
                status: e
            });
        }
    },
    _setItemDesc: function(e) {
        e && e.forEach(function(e) {
            var t = [];
            e.stock_attr_info.forEach(function(e) {
                t.push(e.attr_value.name);
            }), e.desc = t.join(" | ");
        });
    }
});
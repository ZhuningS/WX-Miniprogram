function e(e, r, s) {
    return r in e ? Object.defineProperty(e, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = s, e;
}

var r = require("../../index.js"), s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/enum.js"));

Page({
    data: {
        phone: r.Sys.phoneModel(),
        scene: "",
        express_code: "",
        from_order_list: [],
        expressInfoList: []
    },
    onLoad: function(e) {
        var r = JSON.safeParse(decodeURIComponent(e.from_order_list)), s = decodeURIComponent(e.express_code || ""), t = e.scene || "";
        this.setData({
            scene: t,
            express_code: s,
            from_order_list: r
        }), this.getAllExpressDetail();
    },
    getAllExpressDetail: function() {
        var e = this, r = 0;
        (this.data.from_order_list || []).forEach(function(s) {
            s.express_package_info_list.forEach(function(t) {
                var o = {
                    express_company_id: parseInt(t.express_company_id, 10),
                    express_code: t.express_code,
                    order_id: s.order_id,
                    appid: s.appid,
                    source: s.source
                };
                e.data.express_code && e.data.express_code != t.express_code || e.getExpressDetailImpl(o, r++);
            });
        });
    },
    getExpressDetailImpl: function(s, t) {
        r.wx.showLoading({
            title: "加载中"
        });
        var o = this;
        r.Network.request({
            cgi: r.Network.cgiSet.getexpressdetail,
            params: s,
            success: function(r) {
                var a = r.content, i = {
                    express_code: s.express_code,
                    express_company_logo: r.logo_url,
                    express_company_name: r.express_company_name,
                    goods_list: r.goods_list,
                    status: a ? 0 : -1
                }, n = null;
                try {
                    n = JSON.safeParse(a.replace(/^WxOrderCb\(/, "").replace(/\)\s*$/, ""));
                } catch (e) {
                    n = {
                        traces: []
                    };
                }
                i.express_info_list = (n.traces || []).sort(function(e, r) {
                    return new Date(e.accept_time) < new Date(r.accept_time);
                }), o.setData(e({}, "expressInfoList[" + t + "]", i));
            },
            fail: function(e) {},
            complete: function(e) {
                r.wx.hideLoading();
            }
        });
    },
    onClickOrderDetail: function() {
        this.data.scene != s.default.DetailPageScene.Order ? r.wx.navigateTo({
            url: r.Path + "/portal/order-detail/order-detail?orderId=" + this.data.from_order_list[0].order_id + "&appId=" + this.data.from_order_list[0].appid
        }) : r.wx.navigateBack();
    }
});
function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../../utils/dg.js")), a = require("../../../../utils/data.js"), n = t(require("../../../../utils/requestUtil.js")), i = t(require("../../../../utils/util.js")), d = t(require("../../../../utils/underscore.js"));

Page({
    data: {
        isAli: e.default.os.isAlipay(),
        baseUrl: a.duoguan_host_api_url + "/index.php/addon",
        data: [],
        addon_name: ""
    },
    onLoad: function(t) {
        this.init(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    init: function(t) {
        t.addon_name && this.setData({
            addon_name: t.addon_name
        });
        var a = "领券中心";
        t.title && t.title.length && "" != t.title && (a = t.title + a), e.default.setNavigationBarTitle({
            title: a
        }), this.list(t);
    },
    list: function(t) {
        var e = this.data.baseUrl + "/Card/CardApi/getCoupons.html", a = {
            addon_name: this.data.addon_name
        };
        n.default.get(e, a, function(t) {
            (0, d.default)(t).map(function(t) {
                return t.use_start_date = i.default.format(1e3 * t.use_start_time, "yyyy-MM-dd"), 
                t.use_end_date = i.default.format(1e3 * t.use_end_time, "yyyy-MM-dd"), t;
            }), this.setData({
                data: t
            });
        }, this);
    },
    goCoupon: function(t) {
        var a = t.currentTarget.dataset.index, i = this.data.baseUrl + "/Card/CardApi/goCoupon.html", d = {
            id: a
        };
        n.default.get(i, d, function(t) {
            e.default.showToast({
                title: "领取成功！",
                icon: "success",
                duration: 3e3
            });
        }, this);
    }
});
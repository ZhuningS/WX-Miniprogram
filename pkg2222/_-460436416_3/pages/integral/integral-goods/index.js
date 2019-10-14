function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../page2.js")), t = require("../../../utils/data"), i = e(require("../../../utils/requestUtil")), n = e(require("../../../utils/util")), s = e(require("../../../utils/dg")), d = require("../../../wxParse/wxParse.js");

(0, a.default)({
    data: {
        id: 0,
        hasExchange: !1,
        receiving_info: {}
    },
    onLoad: function(e) {
        e.id ? (wx.hideShareMenu && wx.hideShareMenu(), this.data.id = e.id, this.startPullDownRefresh()) : wx.showModal({
            content: "参数错误！",
            showCancel: !1
        });
    },
    onPullDownRefresh: function() {
        var e = this, a = this;
        i.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/getGoodsDetail.html", {
            id: this.data.id
        }, function(s) {
            s.end_time_text = n.default.format(1e3 * s.end_time, "yyyy-MM-dd"), e.setData(s), 
            d.wxParse("content", "html", s.body, a), wx.showShareMenu && wx.showShareMenu(), 
            i.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/Card/CardApi/getMyCardInfo.html", {}, function(a) {
                var t = !s.is_end_time && parseFloat(a.score) >= parseFloat(s.sale_price);
                e.setData({
                    hasExchange: t
                });
            });
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onExchangeSubmit: function(e) {
        var a = this, n = "cancel" == e.detail.target.dataset.type;
        if (i.default.pushFormId(e.detail.formId), this.setData({
            isShowExchangeDialog: !1
        }), !n) {
            var d = {
                id: this.data.id
            };
            if (1 == this.data.user_delivery_info) {
                var o = this.data.receiving_info;
                if (!(o.mobile && o.address && o.name)) return s.default.alert("请先选择收货地址"), this.setData({
                    isShowExchangeDialog: !0
                }), !1;
                d.mobile = o.mobile, d.address = o.address, d.name = o.name;
            }
            i.default.get(t.duoguan_host_api_url + "/index.php?s=/addon/DuoguanIntegral/Api/exchangeGoods.html", d, function(e) {
                a.setData({
                    exchange: e
                }), wx.showModal({
                    title: "温馨提示",
                    content: "是否进入兑换记录页面？",
                    showCancel: !0,
                    success: function(e) {
                        e.cancel || wx.navigateTo({
                            url: "../integral-record/index"
                        });
                    }
                });
            });
        }
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "pages/integral/integral-goods/index?id=" + this.data.id
        };
    },
    chooseAddress: function(e) {
        var a = this;
        n.default.chooseAddress(function(e) {
            e.mobile && a.setData({
                receiving_info: {
                    mobile: e.mobile,
                    address: e.all_address,
                    name: e.name
                }
            });
        }, !0);
    }
});
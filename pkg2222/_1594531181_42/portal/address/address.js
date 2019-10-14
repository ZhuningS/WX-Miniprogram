var e = require("./model/address.js"), t = require("../../core/network.js"), o = require("../../core/api.js"), r = require("../../core/sys.js");

require("../../foundation/base/page.js")({
    pageActionConfig: require("./pageaction.js"),
    data: {
        brandWord: "",
        defaultBrandDesc: "每周一至周五的9点至18点提供服务。",
        brandDesc: "",
        iconUrl: "",
        addresses: [],
        warningText: "",
        errorTitle: "",
        errorSubTitle: "",
        hasError: !1,
        showHead: !1,
        showGotoSetting: !1,
        fromOrder: {
            imgUrl: "",
            title: "",
            path: "",
            order: ""
        },
        ctrlShowHead: !0,
        navigationTitle: "",
        showActionSheet: !1,
        actionSheetItems: []
    },
    onLoad: function(e) {
        this.reloadAddress({
            canvasCookie: decodeURIComponent(e.canvas_cookie || "")
        }), console.info("address onLoad:", e);
        var t = null;
        e.from_order_id && e.from_order_id.length > 0 && (t = {
            order: e.from_order_id
        }), e && "main" == e.from && this.setData({
            ctrlShowHead: !1,
            navigationTitle: "门店信息"
        }), e.from_order_img && e.from_order_img.length > 0 && e.from_order_title && e.from_order_title.length > 0 && e.from_order_item && e.from_order_item.length > 0 && Object.assign(t, {
            imgUrl: decodeURIComponent(e.from_order_img),
            title: e.from_order_title,
            path: "/portal/detail/detail?code=" + e.from_order_item + "&sku_id=" + e.from_order_sku
        }), t && this.setData({
            fromOrder: t
        });
    },
    onShow: function() {
        this.canvasCookie != t._canvasCookie ? this.reloadAddress({
            canvasCookie: t._canvasCookie
        }) : this.address && !this.data.hasError && this.setData({
            iconUrl: this.address.icon_url,
            brandWord: this.address.brand_word,
            addresses: this.address.address.shop_list
        });
    },
    reloadAddress: function(e) {
        this.setData({
            brandWord: "",
            iconUrl: "",
            addresses: [],
            hasError: !1,
            showGotoSetting: !1
        }), this.address = null, this.canvasCookie = e.canvasCookie, this.startGetWxLocation();
    },
    onShareAppMessage: function() {
        var e = {};
        return e.title = (this.data.brandWord || "") + "精品店地址", e.path = "portal/address/address?canvas_cookie=" + encodeURIComponent(this.canvasCookie || ""), 
        e;
    },
    onClickBrandLogo: function() {
        o.navigateTo({
            url: "/portal/card/card"
        });
    },
    onLongPressContact: function(e) {
        o.navigateTo({
            url: "/portal/debug/debug"
        });
    },
    onClickContact: function(e) {
        console.log("onClickContact"), this.setData({
            showActionSheet: !0
        });
    },
    hideActionSheet: function() {
        this.setData({
            showActionSheet: !1
        });
    },
    onClickActionSheet: function(e) {
        "在线客服" == e.detail.content && o.navigateTo({
            url: "/seller-online/portal/chat/chat?wxapp_appid=" + r.appid()
        });
    },
    onGotoSettingClick: function(e) {},
    onOpenSettingResp: function(e) {
        e && e.detail && e.detail.authSetting && e.detail.authSetting["scope.userLocation"] && this.reloadAddress({
            canvasCookie: t._canvasCookie
        });
    },
    startGetWxLocation: function() {
        var e = this;
        o.getLocation && o.getLocation({
            type: "wgs84",
            success: function(t) {
                t ? e.startFetchAddresses(t.latitude || 0, t.longitude || 0) : e.startFetchAddresses(0, 0);
            },
            fail: function(t) {
                e.setData({
                    showGotoSetting: !0
                }), e.startFetchAddresses(0, 0);
            }
        });
    },
    startFetchAddresses: function(t, o) {
        var r = this, s = new e();
        r.address = s, s.load({
            longitude: o,
            latitude: t,
            success: function() {
                var e = !(s.address && s.address.shop_list && s.address.shop_list.length > 0), t = s.icon_url && s.brand_word, o = s.business_time || r.data.defaultBrandDesc, a = [];
                a.push({
                    type: "custom",
                    content: "在线客服"
                }), s.phone_num && s.phone_num.length > 0 && a.push({
                    type: "phone",
                    content: "电话客服",
                    userInfo: s.phone_num
                }), r.setData({
                    hasError: e,
                    showHead: t,
                    iconUrl: s.icon_url || "",
                    brandWord: s.brand_word || "",
                    brandDesc: o,
                    addresses: (s.address.shop_list || []).slice(0, 1e3),
                    actionSheetItems: a
                }), e && r.onSomethingWrong(0, "暂无门店信息", t);
            },
            fail: function() {
                r.onSomethingWrong(s.errcode);
            }
        });
    },
    onSomethingWrong: function(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.setData({
            hasError: !0,
            showHead: o
        }), t && t.length > 0 ? this.setData({
            warningText: t
        }) : this.setData({
            errorTitle: "系统繁忙(" + e + ")",
            errorSubTitle: "请稍后再试!"
        });
    }
});
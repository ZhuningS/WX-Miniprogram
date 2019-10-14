var a = require("./model/mall.js"), o = require("../../core/sys.js"), e = require("../../core/api.js");

require("../../foundation/base/page.js")({
    pageActionConfig: require("./index.pageaction.js"),
    data: {
        pageData: {},
        phoneModel: o.phoneModel(),
        screenHeight: o.windowHeight,
        titleImg: ""
    },
    onLoad: function(e) {
        var n = this;
        console.debug("index get disable_cache,", a._disableCache), void 0 != e.disable_cache ? a._disableCache = 1 == parseInt(e.disable_cache) : a._disableCache = void 0, 
        n.reloadMallInfo({
            canvasId: decodeURIComponent(e.canvas_id || "") || o.testCanvasId(),
            canvasCookie: decodeURIComponent(e.canvas_cookie || "") || o.testCanvasCookie(),
            useCache: !0
        });
        var t = o.windowHeight;
        t -= "iPhoneX" == o.phoneModel() ? 88 : 64, n.setData({
            screenHeight: t
        });
    },
    onShow: function(o) {
        var n = this;
        a.canvas && (a._canvasId == this.canvasId ? this.setData({
            pageData: a.canvas
        }) : n.reloadMallInfo({
            canvasId: a._canvasId,
            canvasCookie: a._canvasCookie,
            useCache: !0
        })), e.setNavigationBarTitle({
            title: ""
        });
    },
    onReady: function() {
        this.shopInfoHeaderBottom();
    },
    shopInfoHeaderBottom: function() {
        var a = this;
        return a._shopInfoHeaderBottom || a._calcShopInfoHeaderBottom || (a._calcShopInfoHeaderBottom = !0, 
        e.createSelectorQuery().select("#shop-info-header").boundingClientRect(function(o) {
            a._shopInfoHeaderBottom = o && o.bottom ? o.bottom : void 0, a._calcShopInfoHeaderBottom = !1;
        }).exec()), a._shopInfoHeaderBottom;
    },
    onPullDownRefresh: function() {
        e.stopPullDownRefresh(), this.canvasId && this.canvasCookie && this.reloadMallInfo({
            canvasId: this.canvasId,
            canvasCookie: this.canvasCookie
        });
    },
    onPageScroll: function(a) {
        var o = this.shopInfoHeaderBottom();
        console.log("onPageScroll: ", o, a.scrollTop), a.scrollTop + 64 >= (o || 16777215) ? this.setData({
            titleImg: this.data.pageData.header.icon_url,
            hideTitleImg: !1
        }) : this.setData({
            hideTitleImg: !0
        });
    },
    reloadMallInfo: function(o) {
        var n = this;
        n.canvasId = o.canvasId, n.canvasCookie = o.canvasCookie, a._canvasId = o.canvasId, 
        a._canvasCookie = o.canvasCookie, e.showNavigationBarLoading(), a.load({
            canvasId: n.canvasId,
            canvasCookie: n.canvasCookie,
            useCache: o.useCache,
            success: function() {
                a.canvas && n.setData({
                    pageData: a.canvas,
                    goodsTotal: a.goods_total,
                    hasHomepage: a.has_homepage,
                    supportInfo: JSON.safeParse(a.support_info_json)
                });
            },
            fail: function() {
                e.showToast({
                    title: "拉取数据失败",
                    image: "/assets/load_fail.png",
                    duration: 1e3
                });
            },
            complete: function() {
                e.hideNavigationBarLoading();
            }
        });
    },
    onClickShoppingCar: function() {
        e.navigateTo({
            url: "/shopping-cart/pages/index/index"
        });
    },
    onShareAppMessage: function() {
        var a = {};
        return this.data.pageData && this.data.pageData.header && (a.title = this.data.pageData.header.brand_name || "", 
        a.path = "portal/index/index?canvas_id=" + encodeURIComponent(this.canvasId || "") + "&canvas_cookie=" + encodeURIComponent(this.canvasCookie || "")), 
        a;
    },
    onShowAllClick: function() {
        e.navigateTo({
            url: "/portal/category/category"
        });
    }
});
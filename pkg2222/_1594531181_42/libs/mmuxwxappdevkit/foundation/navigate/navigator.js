var i = require("../../core/sys.js"), e = require("../../utils/util.js"), r = require("../../core/storage.js"), t = require("../../core/eventcenter.js");

module.exports = {
    forceHideWeAppBack: !1,
    appStack: [],
    _fromAppid: null,
    fromAppid: function() {
        return null == this._fromAppid && (this._fromAppid = r.getData({
            key: "fromAppid",
            sync: !0
        })), this._fromAppid;
    },
    setup: function(i) {
        this.boutiqueApp = i.boutiqueApp, this.shoppingcartApp = i.shoppingcartApp, this.appStack.push({
            app: {
                onLaunch: function(i) {
                    this.boutiqueApp().onLaunch(i);
                },
                onShow: function(i) {
                    this.boutiqueApp().onShow(i);
                },
                onHide: function(i) {
                    this.boutiqueApp().onHide(i);
                }
            }
        });
    },
    navigateToMiniProgram: function(i) {
        return wx.navigateToMiniProgram(i);
    },
    navigateBackMiniProgram: function(e) {
        if (i.isDebugging() && i.isMixProject()) {
            var r = this.appStack.pop(), t = this.appStack[this.appStack.length - 1];
            wx.navigateBack({
                delta: getCurrentPages().length - r.page - 1,
                success: e.success,
                fail: e.fail,
                complete: e.complete
            }), t && t.app && t.app.onShow({
                query: {},
                referrerInfo: {
                    extraData: e.extraData
                }
            });
        } else wx.navigateBackMiniProgram(e);
    },
    navigateTo: function(e) {
        if (this.fromBackAppid = void 0, this.originPath = void 0, this.originOptions = void 0, 
        this.forceHideWeAppBack = !0, t.emit("onReloadNavigationBar"), i.isMixProject()) {
            var r = null;
            if (e.url.startsWith("/portal")) r = "/boutique"; else {
                if (!e.url.startsWith("/pages")) return void (e.fail && e.fail({
                    errcode: -1,
                    errmsg: "invalid app"
                }));
                r = "/shopping-cart/weapp-src";
            }
            wx.navigateTo({
                url: r + e.url,
                success: e.success,
                fail: e.fail,
                complete: e.complete
            });
        } else wx.navigateTo(e);
    },
    navigateBack: function(i) {
        this.fromBackAppid = void 0, this.originPath = void 0, this.originOptions = void 0, 
        this.forceHideWeAppBack = !0, t.emit("onReloadNavigationBar"), wx.navigateBack(i);
    },
    handleRouteApp: function(i) {
        var r = i.referrerInfo && i.referrerInfo.extraData ? i.referrerInfo.extraData : null;
        if (console.info("handleRouteApp: ", i, r), !i.query || r && "{}" != JSON.stringify(r) || 1037 != parseInt(i.scene) ? (r && (this.fromAppName = r.originWeAppName), 
        wx.removeStorageSync("fromAppid")) : (wx.setStorageSync("fromAppid", i.query.fromAppid), 
        this.fromAppName = i.query.fromWeAppName), this._fromAppid = null, r && r.path) {
            var t = r.path;
            t.startsWith("/") || (t = "/" + t), i.referrerInfo.appId && (console.error("set fromBackAppid"), 
            this.fromBackAppid = i.referrerInfo.appId, this.originPath = r.originPath, this.originOptions = r.originOptions);
            var o = e.getCurrentPage();
            t.includes(o.route) ? wx.redirectTo({
                url: t
            }) : wx.navigateTo({
                url: t
            });
        } else this.fromBackAppid = void 0, this.originOptions = void 0, this.originPath = void 0;
    },
    BrandMallImage: function(i) {
        return console.log("BrandMallImage: ", i), getApp().isMixProject() ? i = i.startsWith("/res") ? "shoppingcart/weapp-src" + i : "boutique" + i : i;
    }
};
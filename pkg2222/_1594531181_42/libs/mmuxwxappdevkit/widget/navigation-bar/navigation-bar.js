var e = require("../../core/sys.js"), a = require("../../foundation/navigate/navigator.js"), o = require("../../utils/util.js"), t = require("../../core/eventcenter.js"), i = require("../../core/api.js");

Component({
    properties: {
        title: {
            type: String,
            value: "",
            observer: function(e, a) {}
        },
        backgroundColor: {
            type: String,
            value: "#FFFFFF",
            observer: function(e, a) {}
        },
        placeholderColor: {
            type: String,
            value: ""
        },
        titleImg: {
            type: String,
            value: "none"
        },
        hideTitleImg: {
            type: Boolean,
            value: !0
        },
        type: {
            type: String,
            value: "webview"
        },
        hidePlaceholder: {
            type: Boolean,
            value: !1
        },
        forceShowBackButton: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        phoneModel: e.phoneModel(),
        hideBackButton: !0,
        hideWeAppBack: !0,
        supportCustomNavigation: "ios" == e.platform && e.wechatVersion() > parseInt("16060000", 16) || "android" == e.platform && e.wechatVersion() > parseInt("26060000", 16) || "devtools" == e.platform,
        platform: e.platform
    },
    attached: function() {
        console.log("navigation-bar : " + JSON.stringify(this.data)), console.log(e.platform + ", " + e.wechatVersion() + ", " + parseInt("26060000", 16));
        var a = getCurrentPages(), o = !1;
        a && 1 == a.length && (o = !0), this.reloadData({
            clearState: !0
        }), t.register("onReloadNavigationBar", this, "reloadData"), this.setData({
            hideBackButton: !this.properties.forceShowBackButton && 1 == getCurrentPages().length,
            phoneModel: e.phoneModel(),
            backAsExit: o
        });
    },
    moved: function() {
        console.log("[navigationbar]moved");
    },
    detached: function() {
        console.log("[navigationbar]detached"), t.unregister("onReloadNavigationBar", this);
    },
    methods: {
        reloadData: function(e) {
            var t = a.fromAppid() || "", i = 0 == t.length ? a.fromBackAppid || "" : t;
            console.log("[navigationbar]reload navigation-bar: " + t + ", " + a.fromBackAppid + ", " + a.forceHideWeAppBack), 
            this.navigateToAppid = 0 == t.length && 0 != i.length ? i : "", this.setData({
                hideWeAppBack: 0 == i.length || a.forceHideWeAppBack,
                weAppName: a.fromAppName || "",
                navigateToAppid: this.navigateToAppid,
                navigateToPath: o.appendQueryObject(a.originPath || "", a.originOptions)
            }), e && e.clearState && (a.forceHideWeAppBack = !1);
        },
        onClickNavigateBack: function() {
            i.navigateBack();
        },
        onClickWeAppBack: function() {
            console.log("onClickWeAppBack: ", this.navigateToAppid), 0 == this.navigateToAppid.length ? i.navigateBackMiniProgram() : (a.fromBackAppid = void 0, 
            a.originPath = void 0, a.originOptions = void 0);
        }
    }
});
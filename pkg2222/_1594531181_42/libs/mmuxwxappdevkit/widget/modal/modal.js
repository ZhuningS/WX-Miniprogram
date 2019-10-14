var t = require("../../core/sys.js"), n = (require("../../core/console.js")("modal"), 
require("../../utils/util.js"));

Component({
    properties: {
        userinfo: {
            type: String,
            value: "default-modal"
        },
        target: {
            type: String,
            value: ""
        },
        appId: {
            type: String,
            value: ""
        },
        path: {
            type: String,
            value: ""
        },
        version: {
            type: String,
            value: ""
        },
        showModal: {
            type: Boolean,
            value: !1,
            observer: function(t, n) {
                var e = this;
                1 == t ? (e.maskAnimation.opacity(.5).step(), e.contentAnimation.opacity(1).step(), 
                e.setData({
                    modalMaskAnimation: e.maskAnimation.export(),
                    modalAnimation: e.contentAnimation.export()
                })) : (e.maskAnimation.opacity(0).step(), e.contentAnimation.opacity(0).step(), 
                e.setData({
                    modalMaskAnimation: e.maskAnimation.export(),
                    modalAnimation: e.contentAnimation.export()
                }));
            }
        },
        title: {
            type: String,
            value: ""
        },
        content: {
            type: String,
            value: ""
        },
        showCancel: {
            type: Boolean,
            value: !0
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        cancelColor: {
            type: String,
            value: "#000000"
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmColor: {
            type: String,
            value: "#3CC51F"
        },
        openType: {
            type: String,
            value: ""
        }
    },
    data: {
        _showModal: !1
    },
    attached: function() {
        this.maskAnimation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease-in-out"
        }), this.contentAnimation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease-in-out"
        }), this.isSdkSupportOpenSettingBtn = -1 != n.compareSDKVersion(t.SDKVersion, "2.0.7");
    },
    methods: {
        onClickConfirm: function() {
            this.isSdkSupportOpenSettingBtn || "miniProgram" == this.data.target || "openSetting" != this.data.openType || wx.openSetting(), 
            this.triggerEvent("confirm", {
                openType: this.data.openType,
                userinfo: this.data.userinfo
            });
        },
        onClickCancel: function() {
            this.triggerEvent("cancel", {
                userinfo: this.data.userinfo
            });
        }
    }
});
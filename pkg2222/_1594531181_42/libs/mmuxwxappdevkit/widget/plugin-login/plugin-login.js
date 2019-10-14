var n = require("../../core/sys.js"), e = require("../../core/network.js"), i = require("../../core/eventcenter.js");

Component({
    properties: {
        disable: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        needLogin: !0
    },
    attached: function() {
        this.setData({
            needLogin: n.pluginNeedWxLogin
        }), i.register("onPluginNeedWxLogin", this), i.register("onPluginSessionTimeout", this);
    },
    detached: function() {
        i.unregisterAllEvents(this);
    },
    methods: {
        wxLoginSuccess: function(n) {
            console.log("wxLoginSuccess", n);
            var i = this;
            i.triggerEvent("loginbegin"), e.pluginWxLoginSuccess({
                code: n.detail.code,
                success: function() {
                    i.onLoginSuccess();
                },
                fail: function() {
                    i.onLoginFail();
                }
            });
        },
        wxLoginFail: function(n) {
            console.log("wxLoginFail", n), e.pluginWxLoginFail(n);
        },
        onPluginNeedWxLogin: function() {
            console.log("onPluginNeedWxLogin"), this.setData({
                needLogin: !0
            });
        },
        onLoginSuccess: function(n) {
            console.log("onLoginSuccess"), this.setData({
                needLogin: !1
            }), this.triggerEvent("loginsuccess");
        },
        onLoginFail: function() {
            console.log("onLoginFail"), this.setData({
                needLogin: !0
            }), this.triggerEvent("loginfail");
        },
        onPluginSessionTimeout: function() {
            this.setData({
                needLogin: !0
            }), this.triggerEvent("sessiontimeout");
        },
        onClickView: function() {
            this.triggerEvent("loginbegin"), this.triggerEvent("loginsuccess");
        }
    }
});
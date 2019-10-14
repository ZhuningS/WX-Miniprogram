module.exports = {
    _loaded: !1,
    _version: "2",
    _sessionId: "",
    _scene: 0,
    phoneModel: function() {
        return this._loaded ? this.screenHeight >= 812 && ("ios" == this.platform || "devtools" == this.platform) ? "iPhoneX" : this.screenWidth <= 320 ? "iPhone5" : this.screenWidth <= 375 ? "iPhone6" : this.screenWidth <= 414 ? "iPhone6 Plus" : "" : "";
    },
    shoppingcarAppid: function() {
        return "wx3fe7cf7850c61a2b";
    },
    selleronlineAppid: function() {
        return "wx09e221d492adeb7a";
    },
    appid: function() {
        return this.extInfo.appid;
    },
    appName: function() {
        return this.extInfo.mallName;
    },
    extStatBuffer: function() {
        return "";
    },
    reload: function() {
        this._loaded = !1, this.setup(this.setupOptions);
    },
    setup: function(t) {
        if (this._loaded) return !0;
        this.setupOptions = t;
        try {
            var e = wx.getSystemInfoSync(), n = wx.getExtConfigSync ? wx.getExtConfigSync() || {} : {};
            return Object.assign(this, e, {
                extInfo: n
            }, t), this._loaded = !0, console.log(this), this._loaded;
        } catch (t) {
            return console.error(t), !1;
        }
    },
    _wechatVersion: null,
    wechatVersion: function() {
        if (null == this._wechatVersion && this._loaded) {
            for (var t = this.platform, e = ("devtools" == this.platform ? "6.8" : this.version).split(".").concat("0"); e.length < 4; ) e.push("0");
            var n = "ios" == t ? "1" : "2";
            e.forEach(function(t) {
                var e = parseInt(t).toString(16);
                1 == e.length && 1 != n.length && (e = "0" + e), n += e;
            }), this._wechatVersion = parseInt(n, 16);
        }
        return this._wechatVersion;
    },
    wechatDevice: function() {
        return {
            devtools: -1,
            ios: 1,
            android: 2
        }[this.platform];
    },
    isMixProject: function() {
        return this.extInfo.isMixProject;
    },
    debugMode: function() {
        return this.extInfo.isDebugging ? 1 : this.extInfo.isExperience ? 2 : 0;
    },
    userVersion: function() {
        return this.extInfo.userVersion || 0;
    },
    isDebugging: function() {
        return this.extInfo.isDebugging;
    },
    weappSessionId: "",
    isPlugin: !1,
    pluginNeedWxLogin: !1,
    noNavigatorParams: function() {
        return !1;
    }
};
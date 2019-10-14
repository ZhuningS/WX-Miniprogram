function t(t, a, n) {
    return a in t ? Object.defineProperty(t, a, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = n, t;
}

var a;

App({
    onLaunch: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.globalData.winHei = a.windowHeight, t.globalData.winWid = a.windowWidth, t.globalData.brand = a.brand, 
                t.globalData.model = a.model, console.log("手机品牌：" + a.brand), console.log("手机型号：" + a.model), 
                console.log(a.pixelRatio), console.log(a.windowWidth), console.log(a.windowHeight), 
                console.log(a.language), console.log("微信版本号:" + a.version), console.log("客户端平台" + a.platform);
            }
        }), wx.getSetting({
            success: function(a) {
                var n = t;
                console.log("获取用户授权信息状态=====", a), a.authSetting["scope.userInfo"] ? n.globalData.isAuth = !0 : n.globalData.isAuth = !1, 
                a.authSetting["scope.record"] ? n.globalData.isAudioAuth = !0 : n.globalData.isAudioAuth = !1;
            }
        });
    },
    getUserInfo: function(t) {
        var a = this;
        wx.login({
            success: function(n) {
                a.globalData.userCode = n.code, wx.getUserInfo({
                    success: function(n) {
                        a.globalData.userInfo = n.userInfo, "function" == typeof t && t(a.globalData.userInfo);
                    },
                    fail: function(n) {
                        "function" == typeof t && t(a.globalData.userInfo);
                    }
                });
            }
        });
    },
    getAuth: function() {
        return this.globalData.isAuth;
    },
    setAuth: function(t) {
        this.globalData.isAuth = t;
    },
    getStoreInfo: function() {
        return this.globalData.storeInfo;
    },
    setStoreInfo: function(t) {
        this.globalData.storeInfo = t;
    },
    setUid: function(t) {
        this.globalData.uid = t;
    },
    getUid: function() {
        return this.globalData.uid;
    },
    getUInfo: function() {
        return this.globalData.userInfo;
    },
    setUInfo: function(t) {
        this.globalData.userInfo = t;
    },
    getHost: function() {
        return this.config.apiUrl;
    },
    setHost: function(t) {
        this.config.apiUrl = t;
    },
    getAlias: function() {
        return this.globalData.alias;
    },
    setAlias: function(t) {
        this.globalData.alias = t;
    },
    setLocation: function(t, a) {
        this.globalData.location = {
            lng: a,
            lat: t
        };
    },
    getLocation: function() {
        return this.globalData.location;
    },
    getWinHei: function() {
        return this.globalData.winHei;
    },
    setWinHei: function(t) {
        this.globalData.winHei = t;
    },
    getWinWid: function() {
        return this.globalData.winWid;
    },
    setWinWid: function(t) {
        this.globalData.winWid = t;
    },
    getEmployeeSid: function() {
        return wx.getStorageSync("eSid") || "";
    },
    setEmployeeSid: function(t) {
        wx.setStorageSync("eSid", t);
    },
    getEmployeeid: function() {
        return wx.getStorageSync("eid") || "";
    },
    setEmployeeid: function(t) {
        wx.setStorageSync("eid", t);
    },
    getLogoImg: function() {
        return this.globalData.logoImg;
    },
    setLogoImg: function(t) {
        this.globalData.logoImg = t;
    },
    getShareTitle: function() {
        return this.globalData.shareTit;
    },
    setShareTitle: function(t) {
        this.globalData.shareTitle = t;
    },
    getMarketTitle: function() {
        return this.globalData.marketTitle;
    },
    setMarketTitle: function(t) {
        this.globalData.marketTitle = t;
    },
    getBrand: function(t) {
        return this.globalData.brand;
    },
    getModel: function(t) {
        return this.globalData.model;
    },
    getRecuid: function() {
        return wx.getStorageSync("recuid") || "";
    },
    setRecuid: function(t) {
        wx.setStorageSync("recuid", t);
    },
    getMobile: function() {
        return this.globalData.userInfo.mobile;
    },
    setMobile: function(t) {
        this.globalData.userInfo.mobile = t;
    },
    setSerial: function(t) {
        this.globalData.serial = t;
    },
    getSerial: function() {
        return this.globalData.serial;
    },
    getSkey: function() {
        return this.globalData.sessionKey;
    },
    setSkey: function(t) {
        this.globalData.sessionKey = t;
    },
    getCardid: function(t) {
        return this.globalData.cardid;
    },
    setCardid: function(t) {
        this.globalData.cardid = t;
    },
    getPay: function() {
        return this.globalData.isPay;
    },
    setPay: function(t) {
        this.globalData.isPay = t;
    },
    getMsgNum: function() {
        return this.globalData.msgNum;
    },
    setMsgNum: function(t) {
        this.globalData.msgNum = t;
    },
    getCardInfo: function(t) {
        return wx.getStorageSync("cardInfo") || "";
    },
    setCardInfo: function(t) {
        wx.setStorageSync("cardInfo", t);
    },
    getSocketTask: function() {
        return this.globalData.socketTask;
    },
    setSocketTask: function(t) {
        this.globalData.socketTask = t;
    },
    getFxid: function() {
        return wx.getStorageSync("fxid") || "";
    },
    setFxid: function(t) {
        wx.setStorageSync("fxid", t);
    },
    getMarkAuth: function(t) {
        return this.globalData.mark_auth;
    },
    setMarkAuth: function(t) {
        this.globalData.mark_auth = t;
    },
    getAudioAuth: function() {
        return this.globalData.isAudioAuth;
    },
    setAudioAuth: function(t) {
        this.globalData.isAudioAuth = t;
    },
    getTabbar: function() {
        return wx.getStorageSync("tabbar") || "";
    },
    setTabbar: function(t) {
        wx.setStorageSync("tabbar", t);
    },
    getDefaultPage: function() {
        return wx.getStorageSync("defualtPage") || "";
    },
    setDefualtPage: function(t) {
        wx.setStorageSync("defualtPage", t);
    },
    getAccount: function() {
        return this.globalData.account;
    },
    setAccount: function(t) {
        this.globalData.account = t;
    },
    getCopyRight: function() {
        return this.globalData.copyright;
    },
    setCopyRight: function(t) {
        this.globalData.copyright = t;
    },
    globalData: (a = {
        copyright: "",
        tabbar: [],
        socketTask: null,
        msgNum: 0,
        isPay: 0,
        chatMsg: [],
        mark_auth: {},
        cardid: "",
        cardInfo: {},
        isAuth: 0,
        isAudioAuth: !1,
        brand: null,
        model: null,
        mobile: "",
        storeInfo: {},
        uid: null,
        userInfo: null,
        location: {
            lng: "",
            lat: ""
        }
    }, t(a, "isPay", !1), t(a, "winHei", 0), t(a, "winWid", 0), t(a, "eSid", null), 
    t(a, "eid", null), t(a, "logoImg", null), t(a, "marketTitle", null), t(a, "shareTitle", null), 
    t(a, "recuid", ""), a),
    config: {
        apiUrl: "https://yitui.jijiax.com"
    }
});
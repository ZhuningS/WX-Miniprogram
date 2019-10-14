function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t() {
    var e = new Date(), t = "" + e.getFullYear();
    return e.getMonth() >= 9 ? t += "" + (e.getMonth() + 1) : t += "0" + (e.getMonth() + 1), 
    e.getDate() > 9 ? t += "" + e.getDate() : t += "0" + e.getDate(), t;
}

function i(e) {
    return {
        product: e,
        platform: "wx_mina",
        appVersion: "2.0.0",
        sdkVersion: void 0,
        page: void 0,
        previousPage: void 0,
        content: void 0,
        pageViews: 0,
        scene: null,
        source: null,
        campaign: null,
        landing: null,
        visitNumber: 0,
        from: null,
        publication: null,
        setCurrentPage: function(e, t, i) {
            e && (this.page && e !== this.page && (this.previousPage = this.page), e.logPagePathCache = t, 
            e.logPageContentCache = i, this.page = t), this.logPageShow(t, i);
        },
        clearCurrentPage: function() {
            this.page = void 0;
        },
        resumePage: function(e) {
            this.page !== e.logPagePathCache && (this.previousPage = this.page), this.page = e.logPagePathCache, 
            this.content = e.logPageContentCache;
        },
        setCurrentPublication: function(e) {
            console.log("publication was changed", e), this.publication = e, null !== this.publication && (wx.getStorageSync("publication_" + this.publication + "_date") || (wx.setStorageSync("publication_" + this.publication + "_date", t()), 
            this.logAction("opened_publication")));
        },
        clearCurrentPublication: function() {
            console.log("clear publication"), this.publication = null;
        },
        logCardShow: function(e, t, i, n) {
            var s = {
                event: "page",
                magazine_id: e,
                item_type: t,
                item_id: i,
                content: n
            };
            this.logEvent(s);
        },
        logPageShow: function(e, t) {
            this.pageViews += 1;
            var i = {
                event: "screen",
                screen_name: e
            };
            t && (i.content = t), this.logEvent(i);
        },
        logAction: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.event = e, this.logEvent(t);
        },
        logEvent: function(e) {
            var i = getApp().globalData.userInfo;
            if (i && (e.uid = i.uid, e.userType = i.type), e.udid = getApp().globalData.udid, 
            e.app_id = getApp().getConfig().wxAppid, e.platform = this.platform, e.product = this.product, 
            e.app_version = this.appVersion, e.timestamp = new Date().getTime(), this.page && !e.screen_name && (e.screen_name = this.page), 
            e.screenviews = "" + this.pageViews, this.scene && (e.medium = this.scene), this.source && (e.source = this.source), 
            this.campaign && (e.campaign = this.campaign), !e.content && this.content && (e.content = this.content), 
            this.publication && (e.publication_id = this.publication), this.previousPage && (e.previous_screen = this.previousPage), 
            this.landing && (e.landing_screen_name = this.landing), this.sdkVersion && (e.sdk_version = this.sdkVersion), 
            this.visitNumber > 0 && (e.visit_number = this.visitNumber, e.new_visits = 1 === this.visitNumber ? 1 : 0), 
            this.from && (e.first_visit_date = this.from.date, this.from.scene && (e.first_visit_medium = this.from.scene), 
            this.from.source && (e.first_visit_source = this.from.source), this.from.campaign && (e.first_visit_campaign = this.from.campaign)), 
            e.first_visit_date) {
                var n = t();
                e.new_users = n === e.first_visit_date ? 1 : 0;
            }
            e.item_type && ("shortVideo" === e.item_type ? e.item_type = "clip" : "imageSet" === e.item_type && (e.item_type = "gallery")), 
            this.sendToWechat(e), this.sendToAliyun(e);
        },
        sendToAliyun: function(e) {
            console.log("send log to aliyun", e), n.default.post("https://api.qingmang.me/v1/log.send?from=life", {
                product: this.product,
                events: JSON.stringify([ e ])
            });
        },
        sendToWechat: function(e) {
            console.log("send log to wechat", e), wx.reportAnalytics(e.event, e);
        }
    };
}

e(require("../libs/regenerator-runtime.js"));

var n = e(require("./ajax")), s = i("magazine");

module.exports = {
    logger: s,
    createLogger: i,
    mapContentType: function(e) {
        return "shortVideo" === e ? "video" : e;
    },
    currentDate: t
};
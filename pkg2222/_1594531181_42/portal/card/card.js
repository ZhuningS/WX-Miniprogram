var e = require("../../core/network.js"), t = require("../../core/sys.js"), n = require("../../core/api.js"), a = require("../../foundation/base/model.js");

require("../../foundation/base/page.js")({
    pageActionConfig: require("./card.pageaction.js"),
    data: {
        screenWidth: t.screenWidth,
        screenHeight: t.screenHeight - ("iPhoneX" == t.phoneModel() ? 88 : 64),
        navigationbarType: "native",
        logo_url: ""
    },
    onShareAppMessage: function() {
        return this.data.brand_name ? {
            title: this.data.brand_name + "品牌名片",
            path: "portal/card/card"
        } : {};
    },
    onLoad: function(t) {
        var i = this, s = t.canvas_id, o = t.disable_cache;
        i.model = a({
            cgi: e.cgiSet.card,
            useCache: 1 != o
        }), i.model.load({
            params: {
                canvas_id: s && s.length > 0 ? decodeURIComponent(s) : void 0,
                disable_cache: "true" == o
            },
            success: function(e) {
                var t = i.model.data;
                if (console.log("load card: ", t), t) {
                    var a = t.card.business_scope;
                    t.card.business_scopes && t.card.business_scopes.length && (a = t.card.business_scopes.map(function(e) {
                        return e && e.items.length && e.items[e.items.length - 1] ? e.items[e.items.length - 1].name : "";
                    }).filter(function(e) {
                        return e && e.length;
                    }).join("/"));
                    var s = [ {
                        icon: "../../assets/time.png",
                        title: "成立时间",
                        content: t.card.established_time
                    }, {
                        icon: "../../assets/loctaion.png",
                        title: "成立地点",
                        content: t.card.established_location
                    }, {
                        icon: "../../assets/store.png",
                        title: "主营业务",
                        content: a,
                        multiLines: !0
                    } ];
                    t.card.phone_num && t.card.phone_num.length > 0 && s.push({
                        icon: "../../assets/phone.png",
                        title: "联系我们",
                        content: t.card.phone_num,
                        type: "phone"
                    }), t.card.scopes = s, i.handleCardData(t.card), i.setData(t.card);
                }
                n.hideLoading();
            },
            fail: function(e) {
                console.error("load card error: ", e), n.hideLoading();
            },
            complete: function() {
                i.requestDone = !0;
            }
        });
    },
    onShow: function() {
        var e = this;
        setTimeout(function() {
            e.requestDone || n.showLoading({
                title: "正在加载"
            });
        }, 300);
    },
    onClickVideoFullScreen: function(e) {
        var t = e.detail, n = t.fullScreen;
        t.direction;
        n ? this.setData({
            navigationbarType: "webview"
        }) : this.setData({
            navigationbarType: "native"
        });
    },
    handleCardData: function(e) {
        if (e && e.media) {
            var t = e.media.filter(function(e) {
                return e && "OFFICIAL_MEDIA_VIDEO" === e.media_type;
            });
            t.length > 0 ? e.media = t.slice(0, 1).map(function(e) {
                return e.muted = !0, e.voiceImg = "../../assets/voice_btn_muted.png", e;
            }) : e.media = e.media.slice(0, 1);
        }
    },
    onClickMuteBtn: function(e) {
        var t = e.currentTarget.dataset, n = t.media, a = t.muted;
        n[0].muted = !a, n[0].muted ? n[0].voiceImg = "../../assets/voice_btn_muted.png" : n[0].voiceImg = "../../assets/voice_btn_unmuted.png", 
        this.setData({
            media: n
        });
    }
});
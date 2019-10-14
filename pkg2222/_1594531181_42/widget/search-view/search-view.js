var t = require("../../core/sys.js"), e = require("../../portal/search/model/history.js"), i = require("../../core/eventcenter.js"), a = require("../../core/api.js");

Component({
    properties: {
        placeHolder: {
            type: String,
            value: "搜索全部商品"
        },
        query: {
            type: String,
            value: "",
            observer: function(t, e) {
                this.setData({
                    inputValue: t
                });
            }
        }
    },
    data: {
        phoneModel: t.phoneModel(),
        supportCustomNavigation: "ios" == t.platform && t.wechatVersion() > parseInt("16060000", 16) || "android" == t.platform && t.wechatVersion() > parseInt("26060000", 16) || "devtools" == t.platform,
        historys: [],
        bInputShow: !1,
        inputValue: "",
        platform: t.platform
    },
    attached: function() {
        var t = this;
        e.load({
            success: function() {
                t.setData({
                    historys: e.list
                });
            }
        }), this.setData({
            inputValue: this.properties.query
        }), this.maskAnimation = a.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), this.teachAnimation = a.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), i.register(i.Event.onSearchHistoryChange, this, "reloadHistoryList");
    },
    detached: function() {
        i.unregister(i.Event.onSearchHistoryChange, this);
    },
    methods: {
        onClickSearchInput: function() {
            this.maskAnimation.opacity(.2).step(), this.teachAnimation.opacity(1).step(), this.setData({
                maskAnimation: this.maskAnimation.export(),
                teachAnimation: this.teachAnimation.export(),
                bInputShow: !0
            });
        },
        onClickSearch: function(t) {
            var i = t.detail.value;
            e.add(i), this.triggerEvent("search", {
                query: i
            });
        },
        onInputBlur: function() {
            this.maskAnimation.opacity(0).step(), this.setData({
                maskAnimation: this.maskAnimation.export(),
                bInputShow: !1
            });
        },
        onInputChange: function(t) {
            this.setData({
                inputValue: t.detail.value
            }), 0 == t.detail.value.length && this.setData({
                bInputShow: !0
            });
        },
        onInputClear: function() {
            this.setData({
                inputValue: "",
                bInputShow: !0
            });
        },
        onClickHistoryItem: function(t) {
            var e = t.currentTarget.dataset.query;
            this.onClickSearch({
                detail: {
                    value: e
                }
            });
        },
        onDeleteHistoryItem: function(t) {
            var i = t.currentTarget.dataset.query;
            e.delete(i);
        },
        reloadHistoryList: function() {
            this.setData({
                historys: e.list
            });
        }
    }
});
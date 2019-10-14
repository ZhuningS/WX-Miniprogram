var e = require("../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../libs/classnames")), a = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../../services/redirector")), n = require("../../../config/index");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        dsSubscribeAction: {
            type: Boolean
        },
        dsManageSource: {
            type: Boolean
        },
        isSubscribed: {
            type: Boolean
        },
        isShowStatisticsMeta: {
            type: Boolean
        },
        cover: {
            type: Object
        }
    },
    data: {
        __: {
            markAction: n.config.actions.mark
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("magazine-header", "com-class");
        }
    },
    methods: {
        handleShareButtonTap: function() {
            this.triggerEvent("onShareButtonTap");
        },
        handleMoreButtonTap: function() {
            var e = this, t = this.data, n = t.isSubscribed, r = t.dsManageSource, o = t.cover.id, i = [ "查看贡献者" ];
            r && i.push("我要当主编", "管理内容来源"), n && i.push("取消订阅"), wx.showActionSheet({
                itemList: i,
                success: function(t) {
                    switch (t.tapIndex) {
                      case 0:
                        a.navigateToModifyPage(o, {
                            type: "curator"
                        });
                        break;

                      case 1:
                        r ? a.navigateToMagazineRecommendPage(o) : e.triggerEvent("onUnsubscribeTap", {
                            mid: o
                        });
                        break;

                      case 2:
                        a.navigateToModifyPage(o, {
                            type: "source"
                        });
                        break;

                      case 3:
                        e.triggerEvent("onUnsubscribeTap", {
                            mid: o
                        });
                    }
                }
            });
        }
    }
}));
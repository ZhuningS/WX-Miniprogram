var e = require("../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../libs/classnames")), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../../../services/redirector")), i = require("../../../services/ui-switch"), o = require("../../../utils/notification");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        cover: {
            type: Object,
            observer: function(e) {
                e.image || this.setData({
                    isCoverImageLoaded: !1
                });
            }
        }
    },
    data: {
        uiSwitchExplore: i.uiSwitch.getSwitches("$explore"),
        isCoverImageLoaded: !1
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.uiSwitchExplore;
            return (0, t.default)("explore-cover", {
                "is-snippet-cover": e.$snippetCover
            }, "com-class");
        }
    },
    methods: {
        collectNotificationFormId: o.collectNotificationFormId,
        handleRootTap: function() {
            var e = this.data.cover;
            e.redirect && r.navigateTo(e.redirect);
        },
        handleCoverImageload: function() {
            this.data.isCoverImageLoaded || this.setData({
                isCoverImageLoaded: !0
            });
        }
    }
}));
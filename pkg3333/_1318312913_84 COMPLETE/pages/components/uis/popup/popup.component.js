var e = require("../../../../libs/mp-enhancers/index"), s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        isVisible: {
            type: Boolean,
            observer: function(e) {
                e && this.show();
            }
        },
        isPanel: {
            type: Boolean
        },
        hasMask: {
            type: Boolean,
            value: !0
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, i = e.isVisible, t = e.isPanel;
            return (0, s.default)("popup", "com-class", {
                "is-panel": t
            }, [ i ? "is-show" : "is-hide" ]);
        }
    },
    methods: {
        handleMaskTap: function() {
            this.hide();
        },
        show: function() {
            this.setData({
                isVisible: !0
            }), this.triggerEvent("show");
        },
        hide: function() {
            this.setData({
                isVisible: !1
            }), this.triggerEvent("hide");
        }
    }
}));
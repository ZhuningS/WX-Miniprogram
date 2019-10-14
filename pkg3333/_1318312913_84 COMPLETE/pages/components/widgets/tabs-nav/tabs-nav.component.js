var t = require("../../../../libs/mp-enhancers/index"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../libs/classnames"));

Component((0, t.componentOptionsEnhancer)({
    properties: {
        tabs: {
            type: Array
        },
        currentTabId: {
            type: String
        },
        onNavItemTap: {
            type: Function
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, e.default)("tabs-nav", "com-class");
        }
    },
    methods: {
        handleNavItemTap: function(t) {
            var e = this.data.currentTabId, n = t.currentTarget.id;
            n !== e && (this.setData({
                currentTabId: n
            }), this.triggerEvent("onNavItemTap", {
                nextTabId: n
            }));
        }
    }
}));
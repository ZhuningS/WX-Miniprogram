var e = require("../../../../libs/mp-enhancers/index"), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        isLoading: {
            type: Boolean,
            value: !0
        },
        isInitial: {
            type: Boolean
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, n = e.isLoading, a = e.isInitial, t = n ? "loading" : "loaded", o = a ? "initial" : "loadMore";
            return (0, i.default)("loading", "with-tween", [ "status-" + t ], [ "type-" + o ], "com-class");
        }
    }
}));
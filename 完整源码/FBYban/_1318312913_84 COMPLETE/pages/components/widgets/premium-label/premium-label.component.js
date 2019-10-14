var e = require("../../../../libs/mp-enhancers/index"), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        isPremium: {
            type: Boolean
        },
        hasPaid: {
            type: Boolean
        },
        size: {
            type: String,
            value: "medium"
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.size;
            return (0, i.default)("premium-label", [ "size-" + e ], "com-class");
        },
        iconSize: function() {
            return "grande" === this.data.size ? "medium" : "small";
        }
    }
}));
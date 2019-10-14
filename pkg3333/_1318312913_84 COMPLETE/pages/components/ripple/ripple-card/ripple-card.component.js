var e = require("../../../../libs/mp-enhancers/index"), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        event: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, n.default)("card", "ripple-card");
        }
    }
}));
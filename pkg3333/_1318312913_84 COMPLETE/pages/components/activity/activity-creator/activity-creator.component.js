var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        isVisible: {
            type: Boolean,
            value: !0
        },
        type: {
            type: String
        },
        magazineId: {
            type: String
        }
    },
    data: {},
    computed: {
        rootClassNames: function() {
            return (0, t.default)("activity-creator", "com-class");
        }
    }
}));
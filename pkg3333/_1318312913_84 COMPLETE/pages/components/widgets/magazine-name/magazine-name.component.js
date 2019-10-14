var e = require("../../../../libs/mp-enhancers/index"), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        name: {
            type: String
        },
        size: {
            type: String,
            value: "medium"
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.size;
            return (0, n.default)("magazine-name", [ "size-" + e ], "com-class");
        }
    }
}));
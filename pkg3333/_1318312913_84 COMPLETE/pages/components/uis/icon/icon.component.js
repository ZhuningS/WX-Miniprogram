var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
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
        },
        theme: {
            type: String,
            value: "dark"
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, n = e.size, r = e.theme;
            return (0, t.default)("icon", [ "size-" + n ], [ "theme-" + r ], "com-class");
        }
    }
}));
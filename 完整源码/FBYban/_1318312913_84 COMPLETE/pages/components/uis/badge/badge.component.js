var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        theme: {
            type: String,
            value: "text"
        },
        count: {
            type: Number
        },
        maxCount: {
            type: Number,
            value: 99
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, n = e.count, u = e.theme, r = void 0;
            return r = n > 99 ? "hundred" : n > 9 ? "ten" : "unit", (0, t.default)("badge", [ "theme-" + u ], [ "number-" + r ], "com-class");
        },
        badgeInfo: function() {
            var e = this.data, t = e.count, n = e.maxCount, u = t;
            return t > n && (u = n + "+"), u;
        }
    }
}));
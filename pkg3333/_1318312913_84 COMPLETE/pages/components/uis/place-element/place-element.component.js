var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        maybe: {
            type: Boolean
        },
        type: {
            type: String,
            value: "bar"
        },
        width: {
            type: Number,
            value: 100
        },
        height: {
            type: Number,
            value: 24
        },
        marginBottom: {
            type: Number,
            value: 8
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, r = e.type, n = e.isCenter;
            return (0, t.default)("place-element", [ "type-" + r ], {
                "is-center": n
            }, "com-class");
        }
    }
}));
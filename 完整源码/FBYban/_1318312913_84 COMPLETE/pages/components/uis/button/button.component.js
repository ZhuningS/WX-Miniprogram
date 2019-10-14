var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        size: {
            type: String,
            value: "medium"
        },
        iconName: {
            type: String
        },
        theme: {
            type: String,
            value: "dark"
        },
        isDisabled: {
            type: Boolean
        },
        isFloat: {
            type: Boolean
        },
        isSubmit: {
            type: Boolean
        },
        isFixed: {
            type: Boolean
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, i = e.size, s = e.iconName, n = e.theme, a = e.isFloat, o = e.isFixed;
            return "dark" === n && s && (n = "text"), (0, t.default)("button", [ "size-" + i ], [ "theme-" + n ], {
                "is-float": a
            }, {
                "is-fixed": o
            }, "com-class");
        },
        formType: function() {
            return this.data.isSubmit ? "submit" : "";
        }
    }
}));
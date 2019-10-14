var e = require("../../../../libs/mp-enhancers/index"), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    options: {
        multipleSlots: !0
    },
    properties: {
        name: {
            type: String,
            value: "ripple"
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.name;
            return (0, n.default)("card", [ e + "-card" ]);
        }
    }
}));
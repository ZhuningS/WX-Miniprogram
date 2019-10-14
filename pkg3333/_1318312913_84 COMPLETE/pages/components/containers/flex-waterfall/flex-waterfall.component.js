var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), r = require("../../../../utils/list-transformer");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        events: {
            type: Array
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("flex-waterfall", "com-class");
        },
        mediaEvents: function() {
            var e = this.data.events;
            return (0, r.filterMediaEvents)(e);
        }
    }
}));
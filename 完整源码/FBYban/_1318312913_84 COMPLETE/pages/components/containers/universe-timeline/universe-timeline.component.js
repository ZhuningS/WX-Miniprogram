var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), i = require("../../../../utils/notification");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        events: {
            type: Array
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("universe-timeline", "com-class");
        }
    },
    methods: {
        collectNotificationFormId: i.collectNotificationFormId
    }
}));
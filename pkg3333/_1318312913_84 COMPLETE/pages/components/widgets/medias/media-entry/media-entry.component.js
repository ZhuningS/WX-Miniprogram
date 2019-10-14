var e = require("../../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        cardType: {
            type: String
        },
        cardSize: {
            type: String
        },
        route: {
            type: String
        },
        hideComponentPadding: {
            type: Boolean
        },
        mediaData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, n = e.cardType, r = e.cardSize;
            return (0, t.default)("media-entry", [ "in-" + n ], [ "size-" + r ], "com-class");
        }
    }
}));
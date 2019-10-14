var e = require("../../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        cardSize: {
            type: String
        },
        cardType: {
            type: String
        },
        mediaData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, a = e.cardType, n = e.cardSize;
            return (0, t.default)("media-quote", [ "in-" + a ], [ "size-" + n ], "com-class");
        },
        simulateQuoteMinHeight: function() {
            var e = this.data.mediaData;
            return 20 * Math.ceil(e.content.length / 10);
        }
    }
}));
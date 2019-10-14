var e = require("../../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        mediaData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("media-object-publication", "com-class");
        }
    }
}));
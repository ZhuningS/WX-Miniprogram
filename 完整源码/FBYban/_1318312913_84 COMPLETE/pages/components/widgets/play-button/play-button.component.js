var t = require("../../../../libs/mp-enhancers/index"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../../libs/classnames"));

Component((0, t.componentOptionsEnhancer)({
    properties: {
        duration: {
            type: String
        },
        size: {
            type: String,
            value: "medium"
        }
    },
    computed: {
        rootClassNames: function() {
            var t = this.data, r = t.duration, n = t.size;
            return (0, e.default)("play-button", [ "size-" + n ], {
                "with-duration": !!r
            }, "com-class");
        },
        formattedTime: function() {
            var t = this.data.duration, e = "";
            if (!t) return null;
            var r = Math.floor(t % 3600 / 60), n = Math.floor(t % 3600 % 60) || "00";
            return r && (e += r + "′"), e += n + "″", e;
        }
    }
}));
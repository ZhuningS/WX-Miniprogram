var e = require("../../../../libs/mp-enhancers/index"), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), t = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}(require("../../../../services/redirector"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        cardData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, r.default)("card", "banner-card", "com-class");
        }
    },
    methods: {
        handleCardRootTap: function() {
            var e = this.data.cardData;
            t.navigateByUrlSchema(e.targetPath);
        }
    }
}));
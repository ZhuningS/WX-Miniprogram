var e = require("../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../libs/classnames")), a = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../../services/redirector")), r = require("../../components/widgets/card-common/index");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        event: {
            type: Object
        }
    },
    computed: {
        cardData: function() {
            var e = this.data.event;
            return e.style = "tall", (0, r.parseEventDataToCardData)(e);
        },
        mediaData: function() {
            var e = this.data.cardData;
            return e ? e.mediaData : {};
        },
        rootClassNames: function() {
            return (0, t.default)("related-article-entry", "com-class");
        }
    },
    methods: {
        handleRootTap: function() {
            var e = this.data.cardData;
            a.redirectToArticlePage(e.magazineId, e.docId);
        }
    }
}));
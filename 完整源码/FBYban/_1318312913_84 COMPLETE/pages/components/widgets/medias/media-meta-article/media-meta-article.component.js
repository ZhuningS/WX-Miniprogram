function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = require("../../../../../libs/mp-enhancers/index"), a = e(require("../../../../../libs/classnames")), r = e(require("../../../../../services/redirector"));

Component((0, t.componentOptionsEnhancer)({
    properties: {
        cardType: {
            type: String
        },
        cardSize: {
            type: String
        },
        articleData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, t = e.cardSize, r = e.cardType;
            return (0, a.default)("meta-article", [ "in-" + r ], [ "size-" + t ], "com-class");
        }
    },
    methods: {
        handleArticleMetaTap: function() {
            var e = this.data.articleData, t = e.magazineId, a = e.docIdString;
            r.default.navigateToArticlePage(t, a);
        }
    }
}));
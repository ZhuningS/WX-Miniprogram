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
        noteData: {
            type: Object
        },
        route: {
            type: String
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, t = e.cardSize, r = e.cardType;
            return (0, a.default)("meta-note", [ "in-" + r ], [ "size-" + t ], "com-class");
        }
    },
    methods: {
        handleNoteMetaTap: function() {
            var e = this.data.noteData, t = e.magazineId, a = e.docIdString;
            r.default.navigateToArticlePage(t, a);
        }
    }
}));
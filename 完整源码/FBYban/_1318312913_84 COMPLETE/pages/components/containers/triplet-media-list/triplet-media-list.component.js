var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../../../../services/redirector")), a = require("../../../../utils/formatter");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        events: {
            type: Array
        },
        type: {
            type: String
        },
        gap: {
            type: Number,
            value: 0
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("triplet-media-list", "com-class");
        },
        mediaDataList: function() {
            return this.data.events.map(a.mediaDataFormatter);
        }
    },
    methods: {
        handleMediaItemTap: function(e) {
            var t = e.currentTarget.dataset, a = t.type, n = t.id;
            "magazine" === a && r.navigateToMagazinePage(n);
        }
    }
}));
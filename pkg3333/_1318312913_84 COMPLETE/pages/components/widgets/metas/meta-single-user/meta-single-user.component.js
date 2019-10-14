var e = require("../../../../../libs/mp-enhancers/index"), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/classnames")), t = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
}(require("../../../../../services/redirector"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        size: {
            type: String
        },
        user: {
            type: Object
        },
        metaSnippet: {
            type: String
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.properties.size;
            return (0, r.default)("meta-single-user", [ "size-" + e ], "com-class");
        }
    },
    methods: {
        handleUserInfoTap: function() {
            var e = this.data.user;
            t.navigateToProfileUserPage(e.uid);
        }
    }
}));
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = require("../../../../../../libs/mp-enhancers/index"), t = e(require("../../../../../../libs/classnames")), s = e(require("../../../../../../services/redirector"));

Component((0, r.componentOptionsEnhancer)({
    properties: {
        comment: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.properties.size;
            return (0, t.default)("meta-multi-users", [ "size-" + e ], "com-class");
        }
    },
    methods: {
        handleUserInfoTap: function(e) {
            var r = e.target.dataset.uid;
            s.default.navigateToProfileUserPage(r);
        }
    }
}));
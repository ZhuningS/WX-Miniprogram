var e = require("../../../../libs/mp-enhancers/index"), a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), n = function(e) {
    if (e && e.__esModule) return e;
    var a = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    return a.default = e, a;
}(require("../../../../services/redirector"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        enableCreate: {
            type: Boolean
        },
        events: {
            type: Array
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, a.default)("magazine-name-list", "com-class");
        }
    },
    methods: {
        handleCreateMagazineTap: function() {
            n.navigateToCreatePage();
        },
        handleMagazineNameTap: function(e) {
            var a = e.currentTarget.dataset.id;
            n.navigateToMagazinePage(a);
        }
    }
}));
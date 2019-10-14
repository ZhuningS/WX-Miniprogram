function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

t(require("../../../../../libs/regenerator-runtime.js"));

var r = require("../../../../../libs/mp-enhancers/index"), e = t(require("../../../../../libs/classnames")), n = function() {
    function t(t, r) {
        var e = [], n = !0, a = !1, i = void 0;
        try {
            for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done) && (e.push(o.value), 
            !r || e.length !== r); n = !0) ;
        } catch (t) {
            a = !0, i = t;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (a) throw i;
            }
        }
        return e;
    }
    return function(r, e) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

Component((0, r.componentOptionsEnhancer)({
    properties: {
        mediaData: {
            type: Object
        }
    },
    computed: {
        hopCard: function() {
            var t = this.data.mediaData.hopCard, r = t.targetPath.split("://")[0];
            if ("miniProgram" === r) {
                t.type = r;
                var e = t.targetPath.split("://")[1].split("?"), a = n(e, 2), i = a[0], o = a[1];
                t.appId = i, t.path = decodeURIComponent(o);
            }
            return t;
        },
        rootClassNames: function() {
            return (0, e.default)("meta-hop-card", "com-class");
        }
    },
    methods: {
        NOOP: function() {}
    }
}));
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function t(o, a) {
                try {
                    var u = n[o](a), i = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(i);
            }
            return t("next");
        });
    };
}

var r = require("../../../../../libs/mp-enhancers/index"), t = e(require("../../../../../libs/classnames")), o = e(require("../../../../../mixins/login")), a = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
};

Component((0, r.componentOptionsEnhancer)({
    properties: {
        isAuthed: {
            type: Boolean
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, t.default)("user-auth-wrapper", "com-class");
        }
    },
    methods: a({}, o.default, {
        handleRootTap: function() {
            console.log("root.tap");
        },
        handleUserInfoFetch: function(e) {
            var r = this;
            return n(regeneratorRuntime.mark(function n() {
                var t;
                return regeneratorRuntime.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t = r.data.isAuthed) {
                            n.next = 4;
                            break;
                        }
                        return n.next = 4, r.login(e);

                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n, r);
            }))();
        }
    })
}));
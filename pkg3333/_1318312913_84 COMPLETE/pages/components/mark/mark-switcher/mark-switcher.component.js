function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(o);
            }
            return n("next");
        });
    };
}

var r = e(require("../../../../libs/regenerator-runtime")), n = require("../../../../libs/mp-enhancers/index"), a = e(require("../../../../libs/classnames")), s = require("./mark-switcher.service");

Component((0, n.componentOptionsEnhancer)({
    properties: {
        isMarked: {
            type: Boolean
        },
        markArgsData: {
            type: Object
        },
        isFloat: {
            type: Boolean
        },
        theme: {
            type: String,
            value: "text"
        },
        type: {
            type: String,
            value: ""
        }
    },
    computed: {
        rootClassNames: function() {
            return (0, a.default)("mark-switcher", "com-class");
        }
    },
    attached: function() {
        this.isLocked = !1, this.service = s.markSwitcherService;
    },
    methods: {
        handleRootTap: function() {
            var e = this;
            return t(r.default.mark(function t() {
                var n, a, s;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n = e.data, a = n.markArgsData, s = n.isMarked, !e.isLocked) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return e.isLocked = !0, e.setData({
                            isMarked: !s
                        }), t.prev = 5, e.triggerEvent("markevent", {
                            isMarked: !s,
                            commentId: a.commentId,
                            type: a.type
                        }, {
                            bubbles: !0,
                            composed: !0
                        }), t.next = 9, e.service.setMark(a, !s);

                      case 9:
                        e.isLocked = !1, t.next = 16;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(5), e.setData({
                            isMarked: s
                        }), e.isLocked = !1;

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, e, [ [ 5, 12 ] ]);
            }))();
        }
    }
}));
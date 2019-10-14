function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/regenerator-runtime.js")), n = require("../../../../libs/mp-enhancers/index"), r = require("../../../../utils/dev"), o = require("../../../../services/warehouse/index"), a = require("../../../../protocol/io");

Component((0, n.componentOptionsEnhancer)({
    properties: {
        comments: {
            type: Object
        },
        commentCount: {
            type: Number
        },
        inPostPage: {
            type: Boolean
        },
        eventId: {
            type: String
        },
        postId: {
            type: Number
        },
        backgroundColor: {
            type: String
        }
    },
    data: {
        loading: !1
    },
    computed: {
        latestComments: function() {
            return this.data.comments.events.slice(-20);
        }
    },
    created: function() {},
    attached: function() {},
    methods: {
        NOOP: r.NOOP,
        handlePreReplyTap: function() {
            var n = this;
            return e(t.default.mark(function e() {
                var r, i, s;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, n.setData({
                            loading: !0
                        }), r = n.data.comments, e.next = 5, a.ajax.get(r.preUrl);

                      case 5:
                        i = e.sent, (s = i.data).events = s.events.concat(r.events), o.eventAPI.setEventEntity(n.data.eventId, {
                            comments: s
                        });

                      case 9:
                        return e.prev = 9, n.setData({
                            loading: !1
                        }), e.finish(9);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, n, [ [ 0, , 9, 12 ] ]);
            }))();
        }
    }
}));
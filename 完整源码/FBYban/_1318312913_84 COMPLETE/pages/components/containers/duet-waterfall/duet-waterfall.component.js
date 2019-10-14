function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

function n(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
    return Array.from(t);
}

function r(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function r(i, s) {
                try {
                    var a = e[i](s), u = a.value;
                } catch (t) {
                    return void n(t);
                }
                if (!a.done) return Promise.resolve(u).then(function(t) {
                    r("next", t);
                }, function(t) {
                    r("throw", t);
                });
                t(u);
            }
            return r("next");
        });
    };
}

var i = t(require("../../../../libs/regenerator-runtime")), s = require("../../../../libs/mp-enhancers/index"), a = t(require("../../../../libs/classnames")), u = require("../../../../utils/list-transformer"), o = require("../../../../utils/notification"), l = (0, 
require("../../../../utils/dev").debugCreator)("duet-waterfall");

Component((0, s.componentOptionsEnhancer)({
    properties: {
        events: {
            type: Array,
            value: []
        },
        isDisplayPin: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        columnLeftEvents: [],
        columnRightEvents: []
    },
    computed: {
        rootClassNames: function() {
            return (0, a.default)("duet-waterfall", "com-class");
        },
        mediaEvents: function() {
            var t = this, e = this.data, n = e.events, r = e.mediaEvents, i = e.isDisplayPin, s = (0, 
            u.filterMediaEvents)(n);
            if (!i) return [];
            l("events.length", s.length, n.length);
            var a = this.countColumnsEvents() && !s.length || this.countColumnsEvents() && s[0] && this.resetIdentity && s[0].id !== this.resetIdentity, o = !this.isResetting && r && r.length !== s.length && !this.canDrop;
            return a && this.resetColumnsEvents(), o && (this.canDrop = !0, setTimeout(function() {
                t.dropWaterfall();
            }, 0)), s;
        }
    },
    created: function() {
        this.canDrop = !1, this.isResetting = !1, this.resetIdentity = null;
    },
    methods: {
        collectNotificationFormId: o.collectNotificationFormId,
        dropWaterfall: function() {
            var t = this;
            return r(i.default.mark(function r() {
                var s, a, u, o, c, f, h;
                return i.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (s = t.data, a = s.events, u = s.mediaEvents, o = t.countColumnsEvents(), l("conds & length", t.isResetting, !t.canDrop, u.length <= o, a.length, u.length, o), 
                        !(t.isResetting || !t.canDrop || u.length <= o)) {
                            r.next = 6;
                            break;
                        }
                        return t.canDrop = !1, r.abrupt("return");

                      case 6:
                        return r.next = 8, t.getShorterColumn();

                      case 8:
                        c = r.sent, f = u[o], o || (t.resetIdentity = f.id), h = e({}, c, [].concat(n(t.data[c]), [ f ])), 
                        t.setData(h, t.dropWaterfall);

                      case 13:
                      case "end":
                        return r.stop();
                    }
                }, r, t);
            }))();
        },
        getShorterColumn: function() {
            var t = this;
            return r(i.default.mark(function e() {
                var n, r, s, a, u, o;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = t.data, r = n.columnLeftEvents, s = n.columnRightEvents, a = "columnLeftEvents", 
                        u = "columnRightEvents", o = wx.createSelectorQuery().in(t), r.length) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return", a);

                      case 6:
                        if (s.length) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return", u);

                      case 8:
                        return e.abrupt("return", new Promise(function(t) {
                            return o.selectAll(".waterfall-column").boundingClientRect(function(e) {
                                var n = e[0].height - e[1].height;
                                t(n <= 0 ? a : u);
                            }).exec();
                        }));

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, t);
            }))();
        },
        resetColumnsEvents: function() {
            var t = this;
            this.isResetting = !0;
            var e = function() {
                t.canDrop = !0, t.isResetting = !1, l(t), t.dropWaterfall();
            };
            setTimeout(function() {
                t.setData({
                    columnLeftEvents: [],
                    columnRightEvents: []
                }, e);
            }, 0);
        },
        countColumnsEvents: function() {
            var t = this.data, e = t.columnLeftEvents, n = t.columnRightEvents;
            return e.length + n.length;
        }
    }
}));
function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var u = t[a](i), o = u.value;
                } catch (e) {
                    return void r(e);
                }
                if (!u.done) return Promise.resolve(o).then(function(e) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.markSwitcherService = void 0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/regenerator-runtime")), n = require("../../../../protocol/io"), a = require("../../../../services/warehouse/index"), i = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), u = {
    setMark: function() {
        var e = t(r.default.mark(function e(t, a) {
            var i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = a ? "v1/note.mark" : "v1/note.unmark", e.abrupt("return", n.api.get(i, t));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        }));
        return function(t, r) {
            return e.apply(this, arguments);
        };
    }()
}, o = {
    setMark: function() {
        var e = t(r.default.mark(function e(t, a) {
            var i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = a ? "v1/action.mark" : "v1/action.unmark", e.abrupt("return", n.api.get(i, t));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        }));
        return function(t, r) {
            return e.apply(this, arguments);
        };
    }()
}, s = function() {
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getApp(), r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
        e(this, n), this.app = t, this.markApi = r, this.newMarkApi = a;
    }
    return i(n, [ {
        key: "setMark",
        value: function() {
            var e = t(r.default.mark(function e(t, n) {
                var i, u, o, s, c, p, d, m, f, k, v, l, h, b, g;
                return r.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        i = t.type, u = t.start, o = t.end, s = t.id, c = t.markId, p = t.eventId, d = t.mid, 
                        m = t.pid, f = t.docId, k = t.postId, v = t.commentId, l = void 0, h = void 0, e.t0 = i, 
                        e.next = "mark" === e.t0 ? 5 : "article" === e.t0 ? 10 : "video" === e.t0 ? 10 : "image" === e.t0 ? 15 : "imageSet" === e.t0 ? 20 : "post" === e.t0 ? 25 : "comment" === e.t0 ? 30 : 35;
                        break;

                      case 5:
                        return e.next = 7, this.markApi.setMark({
                            content_type: "mark",
                            mid: d,
                            docid: f,
                            pid: m,
                            start: u,
                            end: o,
                            mark_id: c
                        }, n);

                      case 7:
                        return l = e.sent, h = "selection", e.abrupt("break", 35);

                      case 10:
                        return e.next = 12, this.markApi.setMark({
                            content_type: i,
                            mid: d,
                            docid: f
                        }, n);

                      case 12:
                        return l = e.sent, h = "item", e.abrupt("break", 35);

                      case 15:
                        return e.next = 17, this.markApi.setMark({
                            content_type: "image",
                            mid: d,
                            pid: m,
                            url: s,
                            docid: f
                        }, n);

                      case 17:
                        return l = e.sent, h = "image", e.abrupt("break", 35);

                      case 20:
                        return e.next = 22, this.markApi.setMark({
                            content_type: "imageSet",
                            mid: d,
                            docid: f
                        }, n);

                      case 22:
                        return l = e.sent, h = "item", e.abrupt("break", 35);

                      case 25:
                        return e.next = 27, this.newMarkApi.setMark({
                            target_type: "post",
                            target_id: k,
                            mid: d
                        }, n);

                      case 27:
                        return l = e.sent, h = "post", e.abrupt("break", 35);

                      case 30:
                        return e.next = 32, this.newMarkApi.setMark({
                            target_type: "comment",
                            target_id: v,
                            mid: d
                        }, n);

                      case 32:
                        return l = e.sent, h = "comment", e.abrupt("break", 35);

                      case 35:
                        return a.eventAPI.setEventEntity(p, {
                            isMarked: n
                        }), h && (g = "" + (b = n ? "marked_" : "unmarked_") + h, this.app.getLogger().logAction(g, {
                            item: f,
                            item_type: i
                        })), e.abrupt("return", l);

                      case 38:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t, r) {
                return e.apply(this, arguments);
            };
        }()
    } ]), n;
}();

exports.markSwitcherService = new s();
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function r(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, u) {
                try {
                    var a = t[i](u), o = a.value;
                } catch (e) {
                    return void r(e);
                }
                if (!a.done) return Promise.resolve(o).then(function(e) {
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
}), exports.operationsBarService = void 0;

var n = e(require("../../../../../libs/regenerator-runtime")), i = require("../../../../../protocol/io"), u = require("../../../../../services/redirector"), a = require("../../../../../config/index"), o = e(require("../../../global-ui")), s = function() {
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
}(), c = {
    dislikeSpecContent: function() {
        var e = r(n.default.mark(function e(t, r, u) {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", i.api.get("v1/note.dislike", {
                        mid: t,
                        docid: r,
                        type: u
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        }));
        return function(t, r, n) {
            return e.apply(this, arguments);
        };
    }(),
    unsubscribeMagazine: function() {
        var e = r(n.default.mark(function e(t, r) {
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", i.api.get("v1/magazine.unsubscribe", {
                        mid: t,
                        content: r
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, void 0);
        }));
        return function(t, r) {
            return e.apply(this, arguments);
        };
    }()
}, p = function() {
    function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getApp(), n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default;
        t(this, e), this.app = r, this.logger = r.getLogger(), this.subscribeApi = n, this.uiStore = i;
    }
    return s(e, [ {
        key: "showShareCard",
        value: function(e) {
            this.uiStore.dispatchShareCardDataAction(e);
            var t = this.logger.page;
            t && this.logger.logPageShow(t + "share/", e.type);
        }
    }, {
        key: "generateActionSheetItems",
        value: function(e, t, r) {
            var n = this.app.getContextPage(), i = [ "内容过期了" ];
            return e && (i.push("内容和" + e + "不相关"), a.config.enableSubscribe && !~u.PAGE_PATH.MAGAZINE.indexOf(n.route) && i.push("不再显示来自" + e + "的内容")), 
            t && r && i.push("发表评论"), i;
        }
    }, {
        key: "dislikeSpecContent",
        value: function() {
            var e = r(n.default.mark(function e(t, r, i) {
                var u;
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.subscribeApi.dislikeSpecContent(t, r, i);

                      case 2:
                        return u = e.sent, this.logger.logAction("rejected_item", {
                            item: r
                        }), e.abrupt("return", u);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t, r, n) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "unsubscribeMagazine",
        value: function() {
            var e = r(n.default.mark(function e(t, r) {
                var i;
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.subscribeApi.unsubscribeMagazine(t, r);

                      case 2:
                        return i = e.sent, this.logger.logAction("blocked_magazine", {
                            magazine: t
                        }), this.logger.logAction("removed_magazine", {
                            magazine: t
                        }), e.abrupt("return", i);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t, r) {
                return e.apply(this, arguments);
            };
        }()
    } ]), e;
}();

exports.operationsBarService = new p();
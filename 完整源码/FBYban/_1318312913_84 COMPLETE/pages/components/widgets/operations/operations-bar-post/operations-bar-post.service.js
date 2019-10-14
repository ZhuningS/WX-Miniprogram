function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, u) {
                try {
                    var o = t[i](u), a = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(a).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(a);
            }
            return n("next");
        });
    };
}

function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.operationsBarService = void 0;

var n = e(require("../../../../../libs/regenerator-runtime")), i = require("../../../../../protocol/io"), u = e(require("../../../global-ui")), o = function() {
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
}(), a = function() {
    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getApp(), n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
        r(this, e), this.app = t, this.logger = t.getLogger(), this.uiStore = n;
    }
    return o(e, [ {
        key: "showShareCard",
        value: function(e) {
            this.uiStore.dispatchShareCardDataAction(e);
            var t = this.logger.page;
            t && this.logger.logPageShow(t + "share/", e.type);
        }
    }, {
        key: "generateActionSheetItems",
        value: function(e, t, r, n) {
            var i = [ "删除" ];
            return "reply" !== n.postType && n.isAdmin && (n.isPin ? i.push("取消置顶") : i.push("置顶"), 
            n.isPreview ? i.push("取消试读") : i.push("设置为试读")), i;
        }
    }, {
        key: "removePost",
        value: function() {
            var e = t(n.default.mark(function e(t) {
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.api.get("v1/post.delete", {
                            post_id: t
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "pinPost",
        value: function() {
            var e = t(n.default.mark(function e(t) {
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.api.get("v1/post.pin", {
                            post_id: t
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "unpinPost",
        value: function() {
            var e = t(n.default.mark(function e(t) {
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.api.get("v1/post.unpin", {
                            post_id: t
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "previewPost",
        value: function() {
            var e = t(n.default.mark(function e(t) {
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.api.get("v1/post.preview", {
                            post_id: t
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "unpreviewPost",
        value: function() {
            var e = t(n.default.mark(function e(t) {
                return n.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.api.get("v1/post.unPreview", {
                            post_id: t
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    } ]), e;
}();

exports.operationsBarService = new a();
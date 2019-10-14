function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(u, a) {
                try {
                    var c = t[u](a), i = c.value;
                } catch (e) {
                    return void r(e);
                }
                if (!c.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
        });
    };
}

var r = e(require("../libs/regenerator-runtime")), n = e(require("../libs/underscore")), u = function() {
    var e = t(r.default.mark(function e() {
        var n, u = this;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.getCardRects();

              case 2:
                (n = e.sent).map(function() {
                    var e = t(r.default.mark(function e(n) {
                        var a, i;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return a = n.id, e.next = 3, u.isInViewport(n);

                              case 3:
                                if (i = e.sent, !u.showedItem[a] && i) {
                                    e.next = 6;
                                    break;
                                }
                                return e.abrupt("return");

                              case 6:
                                setTimeout(t(r.default.mark(function e() {
                                    var t, n;
                                    return r.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.next = 2, u.getCardRects();

                                          case 2:
                                            if (t = e.sent, n = t.find(function(e) {
                                                return e.id === a;
                                            })) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt("return");

                                          case 6:
                                            u.cardShow(n);

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e, u);
                                })), c);

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, u);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());

              case 4:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), a = new RegExp("([^-]+)-(.+)-(.*)"), c = 300;

module.exports = {
    showedItem: {},
    isInViewport: function(e) {
        var n = this;
        return t(r.default.mark(function t() {
            var u, a, c, i, o;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, n.getViewport();

                  case 2:
                    if (u = t.sent, a = u.height, c = u.width, i = e.left + e.width, !((o = e.top + e.height) <= a && o > 0 && i <= c && i > 0)) {
                        t.next = 9;
                        break;
                    }
                    return t.abrupt("return", !0);

                  case 9:
                    return t.abrupt("return", !1);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    getCardRects: function() {
        var e = this;
        return t(r.default.mark(function t() {
            var n;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = wx.createSelectorQuery(), e.abrupt("return", new Promise(function(e) {
                        n.selectAll(".card, .magazine-cover, .card-container >>> .card").boundingClientRect(function(t) {
                            e(t);
                        }).exec();
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t, e);
        }))();
    },
    cardShow: function(e) {
        var n = this;
        return t(r.default.mark(function t() {
            var u, c, i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return u = e.id, t.next = 3, n.isInViewport(e);

                  case 3:
                    if (c = t.sent, !n.showedItem[u] && c) {
                        t.next = 6;
                        break;
                    }
                    return t.abrupt("return");

                  case 6:
                    n.showedItem[u] = !0, (i = a.exec(u)) && i.length >= 3 && getApp().getLogger().logCardShow(e.dataset.mid, i[1], i[2], i[3]);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, n);
        }))();
    },
    getViewport: function() {
        var e = this;
        return t(r.default.mark(function t() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e) {
                        wx.createSelectorQuery().selectViewport().boundingClientRect(function(t) {
                            e(t);
                        }).exec();
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t, e);
        }))();
    },
    onPageScroll: n.default.debounce(u, 100)
};
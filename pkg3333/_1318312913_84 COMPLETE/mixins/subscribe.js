function e(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var o = t[n](i), c = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
            }
            return r("next");
        });
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../libs/regenerator-runtime.js")), r = require("../protocol/io");

module.exports = {
    data: {
        subscribed: {}
    },
    onTapSubscribeNotification: function(e) {
        var a = e.currentTarget.dataset, n = a.mid, i = a.content;
        r.api.get("v1/magazine.push.subscribe", {
            mid: n
        }), this.setData(t({}, "subscribed." + n, "push")), getApp().getLogger().logAction("opened_magazine_push", {
            magazine: n,
            content: i
        });
    },
    onTapUnsubscribeNotification: function(e) {
        var a = e.currentTarget.dataset, n = a.mid, i = a.content;
        r.api.get("v1/magazine.push.unsubscribe", {
            mid: n
        }), this.setData(t({}, "subscribed." + n, !0)), getApp().getLogger().logAction("closed_magazine_push", {
            magazine: n,
            content: i
        });
    },
    onTapSubscribe: function(n) {
        var i = this;
        return e(a.default.mark(function e() {
            var o, c, s;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return console.log("evt", n), i.onTapReject(n), o = n.currentTarget.dataset, c = o.mid, 
                    s = o.content, e.next = 5, r.api.get("v1/magazine.subscribe", {
                        mid: c
                    });

                  case 5:
                    i.setData(t({}, "subscribed." + c, !0)), getApp().getLogger().logAction("added_magazine", {
                        magazine: c,
                        content: s
                    }), i.showModalDialog && i.showModalDialog("/images/icon-notification-black.svg", "杂志更新推送", "不要错过这本杂志的更新，打开推送每天第一时间看到好内容", "打开每日推送", "暂不", function() {
                        console.log("Push magazine", c), r.api.get("v1/magazine.push.subscribe", {
                            mid: c
                        }), i.setData(t({}, "subscribed." + c, "push")), getApp().getLogger().logAction("opened_magazine_push", {
                            magazine: c,
                            content: "dialog"
                        });
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, i);
        }))();
    },
    onTapUnsubscribe: function(n) {
        var i = this;
        return e(a.default.mark(function e() {
            var o, c, s;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i.onTapReject(n), o = n.currentTarget.dataset, c = o.mid, s = o.content, 
                    e.next = 4, r.api.get("v1/magazine.unsubscribe", {
                        mid: c,
                        content: s
                    });

                  case 4:
                    i.setData(t({}, "subscribed." + c, !1)), getApp().getLogger().logAction("removed_magazine", {
                        magazine: c
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, i);
        }))();
    },
    onTapDislike: function(t) {
        var n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "irrelative";
        return e(a.default.mark(function e() {
            var o, c;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n.onTapReject(t), o = t.currentTarget.dataset.mid, c = t.currentTarget.dataset.id, 
                    e.next = 5, r.api.get("v1/note.dislike", {
                        docid: c,
                        mid: o,
                        type: i
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    onTapReject: function(e) {
        getApp().getLogger().logAction("rejected_item", {
            item: e.currentTarget.dataset.id
        }), this.hideItem && this.hideItem(e);
    },
    onTapAccept: function(e) {
        this.mark(e), this.hideItem(e);
    },
    onTapBlock: function(t) {
        var r = this;
        console.log("block ", t);
        var n = [ "内容过期了" ];
        t.currentTarget.dataset.name && (n.unshift("内容和" + t.currentTarget.dataset.name + "不相关"), 
        getApp().getConfig().enableSubscribe && "pages/magazine/magazine" !== getCurrentPages().pop().route && n.push("不再显示来自" + t.currentTarget.dataset.name + "的内容")), 
        wx.showActionSheet({
            itemList: n,
            success: function() {
                var n = e(a.default.mark(function e(n) {
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            e.t0 = n.tapIndex, e.next = 0 === e.t0 ? 3 : 1 === e.t0 ? 6 : 2 === e.t0 ? 9 : 13;
                            break;

                          case 3:
                            return e.next = 5, r.onTapDislike(t, "irrelative");

                          case 5:
                            return e.abrupt("break", 13);

                          case 6:
                            return e.next = 8, r.onTapDislike(t, "expired");

                          case 8:
                            return e.abrupt("break", 13);

                          case 9:
                            return getApp().getLogger().logAction("blocked_magazine", {
                                magazine: t.currentTarget.dataset.mid
                            }), e.next = 12, r.onTapUnsubscribe(t);

                          case 12:
                            return e.abrupt("break", 13);

                          case 13:
                            wx.showToast({
                                title: "已提交"
                            });

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, r);
                }));
                return function(e) {
                    return n.apply(this, arguments);
                };
            }()
        });
    },
    onTapHideCategory: function(t) {
        var n = this;
        return e(a.default.mark(function e() {
            var i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return console.log("hide category ", t), i = t.currentTarget.dataset.cid, e.prev = 2, 
                    e.next = 5, r.api.get("v1/category.hide", {
                        cid: i
                    });

                  case 5:
                    n.log("hided_category", {
                        category: i
                    }), e.next = 10;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(2);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, n, [ [ 2, 8 ] ]);
        }))();
    },
    onTapShowCategory: function(t) {
        var n = this;
        return e(a.default.mark(function e() {
            var i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = t.currentTarget.dataset.cid, e.prev = 1, e.next = 4, r.api.get("v1/category.show", {
                        cid: i
                    });

                  case 4:
                    n.log("showed_category", {
                        category: i
                    }), e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(1);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, n, [ [ 1, 7 ] ]);
        }))();
    },
    onTapTopCategory: function(t) {
        var n = this;
        return e(a.default.mark(function e() {
            var i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = t.currentTarget.dataset.cid, e.prev = 1, e.next = 4, r.api.get("v1/category.top", {
                        cid: i
                    });

                  case 4:
                    n.log("pinned_category", {
                        category: i
                    }), e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(1);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, n, [ [ 1, 7 ] ]);
        }))();
    },
    onTapProcessCategory: function(t) {
        var r = this;
        if (console.log("process category ", t), getApp().getConfig().enableSubscribe) {
            var n = t.currentTarget.dataset.status, i = -1, o = [];
            "forbidden" !== n ? (o = [ "置顶", "隐藏" ], i = 0) : o = [ "显示" ], wx.showActionSheet({
                itemList: o,
                success: function() {
                    var o = e(a.default.mark(function e(o) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (o.tapIndex !== i) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 3, r.onTapTopCategory(t);

                              case 3:
                                e.next = 12;
                                break;

                              case 5:
                                if ("forbidden" === n) {
                                    e.next = 10;
                                    break;
                                }
                                return e.next = 8, r.onTapHideCategory(t);

                              case 8:
                                e.next = 12;
                                break;

                              case 10:
                                return e.next = 12, r.onTapShowCategory(t);

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, r);
                    }));
                    return function(e) {
                        return o.apply(this, arguments);
                    };
                }()
            });
        }
    }
};
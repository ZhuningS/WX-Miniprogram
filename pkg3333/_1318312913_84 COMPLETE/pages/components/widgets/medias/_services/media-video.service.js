function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function i(r, a) {
                try {
                    var o = t[r](a), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(u);
            }
            return i("next");
        });
    };
}

function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mediaVideoService = void 0;

var i = e(require("../../../../../libs/regenerator-runtime")), r = require("../../../../../protocol/io"), a = e(require("../../../global-ui")), o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
}, u = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), s = function() {
    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getApp(), i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ajax, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default;
        n(this, e), this.videoCache = {}, this.app = t, this.logger = t.getLogger(), this.request = i, 
        this.uiStore = o;
    }
    return u(e, [ {
        key: "mount",
        value: function(e) {
            this.subsUI = this.uiStore.mapUIStoreToData(e, function(t) {
                var n = e.playerId, i = e.data, r = t.currentPlaying;
                r && (r.playerId === n || i.isPlaying) && e.setData({
                    currentPlaying: r,
                    isPlaying: !r.loading
                });
            });
        }
    }, {
        key: "unmount",
        value: function() {
            this.subsUI && (this.subsUI.unsubscribe(), this.subsUI = null);
        }
    }, {
        key: "setCurrentPlaying",
        value: function() {
            var e = t(i.default.mark(function e(t, n, r) {
                var a, u, s, l, c = this;
                return i.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = this.videoCache[r], u = {
                            id: t,
                            playerId: n,
                            url: a ? a.mp4Url : r,
                            loading: !a
                        }, this.uiStore.dispatchCurrentPlayingAction(u), e.prev = 3, !a) {
                            e.next = 6;
                            break;
                        }
                        return e.abrupt("return");

                      case 6:
                        return s = r.replace(".redirect?", ".info?").replace("http://api.qingmang.me/", "https://api.qingmang.me/"), 
                        e.next = 9, this.request.get(s);

                      case 9:
                        l = e.sent, a = this.videoCache[r] = l.data, setTimeout(function() {
                            if (c.uiStore.getState().currentPlaying.id === t) {
                                var e = o({}, u, {
                                    url: a.mp4Url,
                                    loading: !1
                                });
                                c.uiStore.dispatchCurrentPlayingAction(e);
                            }
                        }, 0), e.next = 18;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(3), wx.showToast({
                            image: "/images/new_assets/icon_cancel.svg",
                            title: "播放失败"
                        }), this._resetCurrentPlaying();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 3, 14 ] ]);
            }));
            return function(t, n, i) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "_resetCurrentPlaying",
        value: function() {
            this.uiStore.dispatchCurrentPlayingAction({
                id: null,
                playerId: null,
                url: null,
                loading: !1
            });
        }
    }, {
        key: "onStartPlaying",
        value: function(e, t) {
            this.logger.logAction("started_item", {
                item: t,
                item_type: "video",
                mid: e
            });
        }
    }, {
        key: "onPausePlaying",
        value: function(e, t) {
            t && this.logger.logAction("closed_item", {
                item: t,
                item_type: "video",
                mid: e
            });
        }
    }, {
        key: "onEndPlaying",
        value: function(e, t) {
            this.logger.logAction("finished_item", {
                item: t,
                item_type: "video",
                mid: e
            }), this._resetCurrentPlaying();
        }
    } ]), e;
}();

exports.mediaVideoService = new s();
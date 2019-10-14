function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
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

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = require("../../libs/mp-enhancers/index"), i = require("../../libs/rxstream/index"), u = require("../../utils/dev"), c = require("../../utils/redux-pattern"), l = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), s = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
}, d = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : o(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t);
}, y = (0, u.debugCreator)("globalUI"), p = function(t) {
    var e = function(t) {
        return [ "type", "payload", "error", "meta" ].indexOf(t) > -1;
    };
    return [ function() {
        return t;
    }, function() {
        return "object" === (void 0 === t ? "undefined" : d(t));
    }, function() {
        return "string" == typeof t.type;
    }, function() {
        return Object.keys(t).every(e);
    } ].every(function(t) {
        return t();
    });
}, h = (0, c.createTypeAction)("UIComponent/set"), f = (0, c.createTypeAction)("UIComponent/reset"), b = (0, 
c.createTypeAction)("Toast/set"), v = (0, c.createTypeAction)("ShareCard/Display/Set"), g = (0, 
c.createTypeAction)("ShareCard/Data/set"), m = ((0, c.createTypeAction)("ModalDialog/set"), 
function(t, e) {
    var r = function(t, e, n) {
        return function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n, o = arguments[1], a = o.type;
            return a && t === a ? e(r, o) : r;
        };
    }, o = Object.keys(t).map(function(n) {
        return r(n, t[n], e);
    });
    return function() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t, n) {
            return e.reduce(function(t, e) {
                return e(t, n);
            }, t);
        };
    }.apply(void 0, n(o));
}((r = {}, e(r, "" + h, function(t, e) {
    return s({}, t, e.payload);
}), e(r, "" + f, function(t, e) {
    return s({}, t, {
        toast: s({}, e.payload.toast),
        showShareCard: e.payload.showShareCard,
        currentPlaying: e.payload.currentPlaying
    });
}), e(r, "" + b, function(t, e) {
    var n = e.payload.show, r = t.toast.ticket, o = n ? {
        intro: "",
        ticket: r + 1
    } : {};
    return s({}, t, {
        toast: s({}, t.toast, o, e.payload)
    });
}), e(r, "" + v, function(t, e) {
    return s({}, t, {
        showShareCard: e.payload
    });
}), e(r, "" + g, function(t, e) {
    return s({}, t, {
        shareData: e.payload,
        showShareCard: !0
    });
}), r), {
    needLogin: !1,
    toast: {
        ticket: 0,
        show: !1,
        title: "",
        intro: ""
    },
    showShareCard: !1,
    shareData: {
        id: null,
        mid: null,
        docId: null,
        type: "",
        content: "",
        image: "",
        poster: ""
    },
    modalDialog: {
        icon: null,
        title: "",
        intro: "",
        action: "",
        cancel: ""
    },
    currentPlaying: {
        id: "",
        playerId: "",
        url: "",
        loading: !1
    }
})), S = new i.BehaviorSubject({
    needLogin: !1,
    toast: {
        ticket: 0,
        show: !1,
        title: "",
        intro: ""
    },
    showShareCard: !1,
    shareData: {
        id: null,
        mid: null,
        docId: null,
        type: "",
        content: "",
        image: "",
        poster: ""
    },
    modalDialog: {
        icon: null,
        title: "",
        intro: "",
        action: "",
        cancel: ""
    },
    currentPlaying: {
        id: "",
        playerId: "",
        url: "",
        loading: !1
    }
}), w = function() {
    function e() {
        t(this, e), this.dispatch = this.dispatch.bind(this), this.lastContext = null;
    }
    return l(e, [ {
        key: "subscribe",
        value: function(t) {
            return S.subscribe(t);
        }
    }, {
        key: "mapUIStoreToData",
        value: function(t, e) {
            if (t && t.setData && !t.subsUI) return t.route && (this.lastContext = t, this.dispatchResetUIAction()), 
            S.subscribe(function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.data;
                if (!(0, a.isEmptyObject)(n) && e) return e(n);
                var o = (0, a.generateSetDataPatch)(r, n);
                (0, a.isEmptyObject)(o) || t.setData(o);
            });
        }
    }, {
        key: "getState",
        value: function() {
            return S.getValue();
        }
    }, {
        key: "dispatch",
        value: function(t) {
            if (!p(t)) throw new Error("Action: " + t + " 格式有误");
            if (void 0 !== t.payload || t.type.includes("reset")) {
                y("dispatch action '" + t.type + "'", "\n @payload:", t.payload);
                var e = this.getState(), n = m(e, t);
                return this.lastContext && this.lastContext.setData(n), S.next(n), this;
            }
        }
    }, {
        key: "dispatchResetUIAction",
        value: function() {
            this.dispatch(f({
                needLogin: !1,
                toast: {
                    ticket: 0,
                    show: !1,
                    title: "",
                    intro: ""
                },
                showShareCard: !1,
                shareData: {
                    id: null,
                    mid: null,
                    docId: null,
                    type: "",
                    content: "",
                    image: "",
                    poster: ""
                },
                modalDialog: {
                    icon: null,
                    title: "",
                    intro: "",
                    action: "",
                    cancel: ""
                },
                currentPlaying: {
                    id: "",
                    playerId: "",
                    url: "",
                    loading: !1
                }
            }));
        }
    }, {
        key: "dispatchShowToastAction",
        value: function(t) {
            return t.show = !0, this.dispatch(b(t));
        }
    }, {
        key: "dispatchHideToastAction",
        value: function() {
            var t = {
                show: !1
            };
            return this.dispatch(b(t));
        }
    }, {
        key: "dispatchShowShareCardAction",
        value: function() {
            return this.dispatch(v(!0));
        }
    }, {
        key: "dispatchHideShareCardAction",
        value: function() {
            return this.dispatch(v(!1));
        }
    }, {
        key: "dispatchShareCardDataAction",
        value: function(t) {
            return this.dispatch(g(t));
        }
    }, {
        key: "dispatchCurrentPlayingAction",
        value: function(t) {
            return this.dispatch(h({
                currentPlaying: t
            }));
        }
    }, {
        key: "dispatchNeedLoginAction",
        value: function(t) {
            return this.dispatch(h({
                needLogin: t
            }));
        }
    } ]), e;
}();

exports.default = new w();
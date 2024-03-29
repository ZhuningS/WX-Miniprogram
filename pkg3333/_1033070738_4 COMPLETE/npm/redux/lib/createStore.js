function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createStore(e, t, r) {
    function n() {
        p === l && (p = l.slice());
    }
    function o() {
        return b;
    }
    function i(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return n(), p.push(e), function() {
            if (t) {
                t = !1, n();
                var r = p.indexOf(e);
                p.splice(r, 1);
            }
        };
    }
    function c(e) {
        if (!(0, _isPlainObject2.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (d) throw new Error("Reducers may not dispatch actions.");
        try {
            d = !0, b = f(b, e);
        } finally {
            d = !1;
        }
        for (var t = l = p, r = 0; r < t.length; r++) {
            (0, t[r])();
        }
        return e;
    }
    function s(e) {
        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
        f = e, c({
            type: ActionTypes.INIT
        });
    }
    function u() {
        var e, t = i;
        return e = {
            subscribe: function(e) {
                function r() {
                    e.next && e.next(o());
                }
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                return r(), {
                    unsubscribe: t(r)
                };
            }
        }, e[_symbolObservable2.default] = function() {
            return this;
        }, e;
    }
    var a;
    if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
        if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
        return r(createStore)(e, t);
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var f = e, b = t, l = [], p = l, d = !1;
    return c({
        type: ActionTypes.INIT
    }), a = {
        dispatch: c,
        subscribe: i,
        getState: o,
        replaceReducer: s
    }, a[_symbolObservable2.default] = u, a;
}

exports.__esModule = !0, exports.ActionTypes = void 0, exports.default = createStore;

var _isPlainObject = require("./../../lodash/isPlainObject.js"), _isPlainObject2 = _interopRequireDefault(_isPlainObject), _symbolObservable = require("./../../symbol-observable/lib/index.js"), _symbolObservable2 = _interopRequireDefault(_symbolObservable), ActionTypes = exports.ActionTypes = {
    INIT: "@@redux/INIT"
};
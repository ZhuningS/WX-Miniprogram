function _defineProperty(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _handleActions, _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, _reduxActions = require("./../../npm/redux-actions/lib/index.js"), _counter = require("./../types/counter.js");

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _counter.INCREMENT, function(e) {
    return _extends({}, e, {
        num: e.num + 1
    });
}), _defineProperty(_handleActions, _counter.DECREMENT, function(e) {
    return _extends({}, e, {
        num: e.num - 1
    });
}), _defineProperty(_handleActions, _counter.ASYNC_INCREMENT, function(e, n) {
    return _extends({}, e, {
        asyncNum: e.asyncNum + n.payload
    });
}), _handleActions), {
    num: 0,
    asyncNum: 0
});
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _redux = require("./../../npm/redux/lib/index.js"), _counter = require("./counter.js"), _counter2 = _interopRequireDefault(_counter);

exports.default = (0, _redux.combineReducers)({
    counter: _counter2.default
});
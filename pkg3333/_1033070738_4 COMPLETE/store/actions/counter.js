Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.asyncInc = void 0;

var _counter = require("./../types/counter.js"), _reduxActions = require("./../../npm/redux-actions/lib/index.js"), asyncInc = exports.asyncInc = (0, 
_reduxActions.createAction)(_counter.ASYNC_INCREMENT, function() {
    return new Promise(function(e) {
        setTimeout(function() {
            e(1);
        }, 1e3);
    });
});
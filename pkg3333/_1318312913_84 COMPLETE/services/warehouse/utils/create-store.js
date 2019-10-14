Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createStore = void 0;

var e = require("../../../libs/redux"), r = require("../../../utils/dev"), o = require("../modules/index"), t = require("./redux-middlewares");

exports.createStore = function() {
    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = [ t.loggerMiddleware ], a = [], l = e.compose;
    if (r.__DEBUG__) {
        var u = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        "function" == typeof u && (l = u);
    }
    return (0, e.createStore)((0, o.makeRootReducer)(), i, l.apply(void 0, [ e.applyMiddleware.apply(void 0, d) ].concat(a)));
};
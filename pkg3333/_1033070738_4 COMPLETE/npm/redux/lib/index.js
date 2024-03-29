function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function isCrushed() {}

exports.__esModule = !0, exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;

var _createStore = require("./createStore.js"), _createStore2 = _interopRequireDefault(_createStore), _combineReducers = require("./combineReducers.js"), _combineReducers2 = _interopRequireDefault(_combineReducers), _bindActionCreators = require("./bindActionCreators.js"), _bindActionCreators2 = _interopRequireDefault(_bindActionCreators), _applyMiddleware = require("./applyMiddleware.js"), _applyMiddleware2 = _interopRequireDefault(_applyMiddleware), _compose = require("./compose.js"), _compose2 = _interopRequireDefault(_compose), _warning = require("./utils/warning.js"), _warning2 = _interopRequireDefault(_warning);

exports.createStore = _createStore2.default, exports.combineReducers = _combineReducers2.default, 
exports.bindActionCreators = _bindActionCreators2.default, exports.applyMiddleware = _applyMiddleware2.default, 
exports.compose = _compose2.default;
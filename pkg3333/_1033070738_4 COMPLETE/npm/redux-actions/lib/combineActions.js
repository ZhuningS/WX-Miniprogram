function _interopRequireDefault(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

function isValidActionType(i) {
    return (0, _isString2.default)(i) || (0, _isFunction2.default)(i) || (0, _isSymbol2.default)(i);
}

function isValidActionTypes(i) {
    return !(0, _isEmpty2.default)(i) && i.every(isValidActionType);
}

function combineActions() {
    for (var i = arguments.length, t = Array(i), e = 0; e < i; e++) t[e] = arguments[e];
    (0, _invariant2.default)(isValidActionTypes(t), "Expected action types to be strings, symbols, or action creators");
    var r = t.map(_toString2.default).join(ACTION_TYPE_DELIMITER);
    return {
        toString: function() {
            return r;
        }
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ACTION_TYPE_DELIMITER = void 0, exports.default = combineActions;

var _isString = require("./../../lodash/isString.js"), _isString2 = _interopRequireDefault(_isString), _isFunction = require("./../../lodash/isFunction.js"), _isFunction2 = _interopRequireDefault(_isFunction), _isEmpty = require("./../../lodash/isEmpty.js"), _isEmpty2 = _interopRequireDefault(_isEmpty), _toString = require("./../../lodash/toString.js"), _toString2 = _interopRequireDefault(_toString), _isSymbol = require("./../../lodash/isSymbol.js"), _isSymbol2 = _interopRequireDefault(_isSymbol), _invariant = require("./../../invariant/browser.js"), _invariant2 = _interopRequireDefault(_invariant), ACTION_TYPE_DELIMITER = exports.ACTION_TYPE_DELIMITER = "||";
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(e) {
    if ((0, _isMap2.default)(e)) return Array.from(e.keys());
    if ("undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys) return Reflect.ownKeys(e);
    var t = Object.getOwnPropertyNames(e);
    return "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e))), 
    t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = ownKeys;

var _isMap = require("./../../lodash/isMap.js"), _isMap2 = _interopRequireDefault(_isMap);
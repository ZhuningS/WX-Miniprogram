function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function hasGeneratorInterface(e) {
    var r = (0, _ownKeys2.default)(e), t = r.every(function(e) {
        return "next" === e || "throw" === e;
    });
    return r.length && r.length <= 2 && t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = hasGeneratorInterface;

var _ownKeys = require("./ownKeys.js"), _ownKeys2 = _interopRequireDefault(_ownKeys);
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _moment = require("./../npm/moment/moment.js"), _moment2 = _interopRequireDefault(_moment);

require("./../npm/moment/locale/zh-cn.js");

var diffForHumans = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYYMMDD H:mm:ss";
    return _moment2.default.locale("zh-cn"), (0, _moment2.default)(e, t).fromNow();
};

exports.default = {
    diffForHumans: diffForHumans
};
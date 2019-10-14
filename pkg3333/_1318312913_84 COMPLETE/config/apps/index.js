function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.currentAppConfig = void 0;

var r = e(require("./life"));

e(require("./magazine-office")), e(require("./partner")), require("../util"), exports.currentAppConfig = r.default;
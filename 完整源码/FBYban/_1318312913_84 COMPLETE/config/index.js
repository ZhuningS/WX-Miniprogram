Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.configUpdater = exports.config = void 0;

var e = require("./apps/index"), r = require("./util"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./default-config")), o = exports.config = Object.freeze((0, r.mergeDeep)(t.default, e.currentAppConfig));

exports.configUpdater = function(e) {
    exports.config = o = (0, r.mergeDeep)(o, e);
};
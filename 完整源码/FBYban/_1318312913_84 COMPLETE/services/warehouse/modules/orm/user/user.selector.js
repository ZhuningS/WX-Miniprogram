Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.userEntitySelector = void 0;

var e = require("../../shared/selector");

exports.userEntitySelector = function(r, t) {
    return (0, e.createEntitySelector)(function(e) {
        var r = e.User;
        return t ? r.get(t).value : {};
    })(r);
};
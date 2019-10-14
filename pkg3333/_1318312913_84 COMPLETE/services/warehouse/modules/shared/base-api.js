function i(i, e) {
    if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BaseAPI = void 0;

var e = require("../../../../protocol/io"), t = require("../../core/boardcast");

exports.BaseAPI = function s() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, s), this.request = r.request || e.api, this.dispatch = r.dispatch || t.dispatch, 
    this.initialize && this.initialize();
};
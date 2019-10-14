Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hexToRgbaString = void 0;

var r = (0, require("./dev").debugCreator)("color"), t = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i, e = function(r) {
    return "string" == typeof r && t.test(r);
}, n = function(r) {
    return "#" === r.charAt(0) && (r = r.substr(1)), 3 === r.length && (r = "" + r[0] + r[0] + r[1] + r[1] + r[2] + r[2]), 
    r;
}, o = function(r) {
    return [ parseInt(r.substring(0, 2), 16), parseInt(r.substring(2, 4), 16), parseInt(r.substring(4, 6), 16) ];
}, s = function(r, t) {
    return "rgba(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + t + ")";
};

exports.hexToRgbaString = function(t) {
    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = void 0;
    return e(t) || r("hex: " + t + " 不符合十六进制颜色的格式"), t = n(t), i = o(t), s(i, u);
};
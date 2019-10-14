Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : o(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t);
};

exports.isObject = function(o) {
    return o && "object" === (void 0 === o ? "undefined" : t(o)) && !Array.isArray(o) && null !== o;
}, exports.isEmptyObject = function(o) {
    for (var t in o) return !1;
    return !0;
};
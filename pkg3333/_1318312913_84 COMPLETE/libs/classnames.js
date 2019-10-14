var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, e = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : o(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : o(e);
};

!function() {
    function o() {
        for (var t = [], r = 0; r < arguments.length; r++) {
            var f = arguments[r];
            if (f) {
                var i = void 0 === f ? "undefined" : e(f);
                if ("string" === i || "number" === i) t.push(f); else if (Array.isArray(f) && f.length) {
                    var u = o.apply(null, f);
                    u && t.push(u);
                } else if ("object" === i) for (var l in f) n.call(f, l) && f[l] && t.push(l);
            }
        }
        return t.join(" ");
    }
    var n = {}.hasOwnProperty;
    "undefined" != typeof module && module.exports ? (o.default = o, module.exports = o) : "function" == typeof define && "object" === e(define.amd) && define.amd ? define("classnames", [], function() {
        return o;
    }) : window.classNames = o;
}();
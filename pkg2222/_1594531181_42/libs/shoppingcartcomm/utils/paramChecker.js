function t(t) {
    return "boolean" == typeof t;
}

function n(t) {
    return "string" == typeof t;
}

function o(t) {
    return Array.isArray(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

exports.default = {
    isNumer: function(t) {
        return "number" == typeof t && !Number.isNaN(t);
    },
    isBool: t,
    isBoolean: function(n) {
        return t(n);
    },
    isString: n,
    isStringAndNotEmpty: function(t) {
        return n(t) && t.length;
    },
    isArray: o,
    isArrayAndNotEmpty: function(t) {
        return o(t) && t.length;
    },
    isObject: function(t) {
        return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t;
    }
};
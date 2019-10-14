function r(r) {
    return "boolean" == typeof n;
}

function t(n) {
    return "string" == typeof n;
}

function e(n) {
    return Array.isArray(n);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    isNumer: function(n) {
        return "number" == typeof n && !Number.isNaN(n);
    },
    isBool: r,
    isBoolean: function(n) {
        return r(n);
    },
    isString: t,
    isStringAndNotEmpty: function(n) {
        return t(n) && n.length;
    },
    isArray: e,
    isArrayAndNotEmpty: function(n) {
        return e(n) && n.length;
    }
};
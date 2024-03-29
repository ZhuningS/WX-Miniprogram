function toNumber(e) {
    if ("number" == typeof e) return e;
    if (isSymbol(e)) return NAN;
    if (isObject(e)) {
        var r = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = isObject(r) ? r + "" : r;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(reTrim, "");
    var t = reIsBinary.test(e);
    return t || reIsOctal.test(e) ? freeParseInt(e.slice(2), t ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e;
}

var isObject = require("./isObject.js"), isSymbol = require("./isSymbol.js"), NAN = NaN, reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;

module.exports = toNumber;
function baseToString(r) {
    if ("string" == typeof r) return r;
    if (isArray(r)) return arrayMap(r, baseToString) + "";
    if (isSymbol(r)) return symbolToString ? symbolToString.call(r) : "";
    var o = r + "";
    return "0" == o && 1 / r == -INFINITY ? "-0" : o;
}

var Symbol = require("./_Symbol.js"), arrayMap = require("./_arrayMap.js"), isArray = require("./isArray.js"), isSymbol = require("./isSymbol.js"), INFINITY = 1 / 0, symbolProto = Symbol ? Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;

module.exports = baseToString;
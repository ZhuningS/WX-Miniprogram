function arrayLikeKeys(e, r) {
    var s = isArray(e), i = !s && isArguments(e), t = !s && !i && isBuffer(e), a = !s && !i && !t && isTypedArray(e), n = s || i || t || a, y = n ? baseTimes(e.length, String) : [], u = y.length;
    for (var o in e) !r && !hasOwnProperty.call(e, o) || n && ("length" == o || t && ("offset" == o || "parent" == o) || a && ("buffer" == o || "byteLength" == o || "byteOffset" == o) || isIndex(o, u)) || y.push(o);
    return y;
}

var baseTimes = require("./_baseTimes.js"), isArguments = require("./isArguments.js"), isArray = require("./isArray.js"), isBuffer = require("./isBuffer.js"), isIndex = require("./_isIndex.js"), isTypedArray = require("./isTypedArray.js"), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;

module.exports = arrayLikeKeys;
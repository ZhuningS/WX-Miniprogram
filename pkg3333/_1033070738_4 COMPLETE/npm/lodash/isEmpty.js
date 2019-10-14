function isEmpty(r) {
    if (null == r) return !0;
    if (isArrayLike(r) && (isArray(r) || "string" == typeof r || "function" == typeof r.splice || isBuffer(r) || isTypedArray(r) || isArguments(r))) return !r.length;
    var e = getTag(r);
    if (e == mapTag || e == setTag) return !r.size;
    if (isPrototype(r)) return !baseKeys(r).length;
    for (var s in r) if (hasOwnProperty.call(r, s)) return !1;
    return !0;
}

var baseKeys = require("./_baseKeys.js"), getTag = require("./_getTag.js"), isArguments = require("./isArguments.js"), isArray = require("./isArray.js"), isArrayLike = require("./isArrayLike.js"), isBuffer = require("./isBuffer.js"), isPrototype = require("./_isPrototype.js"), isTypedArray = require("./isTypedArray.js"), mapTag = "[object Map]", setTag = "[object Set]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;

module.exports = isEmpty;
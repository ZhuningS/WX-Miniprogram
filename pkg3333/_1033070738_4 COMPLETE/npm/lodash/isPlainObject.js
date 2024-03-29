function isPlainObject(t) {
    if (!isObjectLike(t) || baseGetTag(t) != objectTag) return !1;
    var e = getPrototype(t);
    if (null === e) return !0;
    var o = hasOwnProperty.call(e, "constructor") && e.constructor;
    return "function" == typeof o && o instanceof o && funcToString.call(o) == objectCtorString;
}

var baseGetTag = require("./_baseGetTag.js"), getPrototype = require("./_getPrototype.js"), isObjectLike = require("./isObjectLike.js"), objectTag = "[object Object]", funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectCtorString = funcToString.call(Object);

module.exports = isPlainObject;
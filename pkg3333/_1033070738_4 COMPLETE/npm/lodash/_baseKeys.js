function baseKeys(e) {
    if (!isPrototype(e)) return nativeKeys(e);
    var r = [];
    for (var t in Object(e)) hasOwnProperty.call(e, t) && "constructor" != t && r.push(t);
    return r;
}

var isPrototype = require("./_isPrototype.js"), nativeKeys = require("./_nativeKeys.js"), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;

module.exports = baseKeys;
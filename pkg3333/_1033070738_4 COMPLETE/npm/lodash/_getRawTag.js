function getRawTag(t) {
    var o = hasOwnProperty.call(t, symToStringTag), r = t[symToStringTag];
    try {
        t[symToStringTag] = void 0;
        var a = !0;
    } catch (t) {}
    var e = nativeObjectToString.call(t);
    return a && (o ? t[symToStringTag] = r : delete t[symToStringTag]), e;
}

var Symbol = require("./_Symbol.js"), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol ? Symbol.toStringTag : void 0;

module.exports = getRawTag;
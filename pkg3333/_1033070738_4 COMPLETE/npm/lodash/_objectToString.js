function objectToString(t) {
    return nativeObjectToString.call(t);
}

var objectProto = Object.prototype, nativeObjectToString = objectProto.toString;

module.exports = objectToString;
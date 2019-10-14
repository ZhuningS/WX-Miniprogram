function toSource(t) {
    if (null != t) {
        try {
            return funcToString.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
}

var funcProto = Function.prototype, funcToString = funcProto.toString;

module.exports = toSource;
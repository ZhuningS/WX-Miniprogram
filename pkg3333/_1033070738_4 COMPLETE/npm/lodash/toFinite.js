function toFinite(e) {
    if (!e) return 0 === e ? e : 0;
    if ((e = toNumber(e)) === INFINITY || e === -INFINITY) {
        return (e < 0 ? -1 : 1) * MAX_INTEGER;
    }
    return e === e ? e : 0;
}

var toNumber = require("./toNumber.js"), INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e308;

module.exports = toFinite;
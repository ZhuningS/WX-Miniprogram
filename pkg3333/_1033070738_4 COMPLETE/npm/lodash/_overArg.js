function overArg(r, e) {
    return function(n) {
        return r(e(n));
    };
}

module.exports = overArg;
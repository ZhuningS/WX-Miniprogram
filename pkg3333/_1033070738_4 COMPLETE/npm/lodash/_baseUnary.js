function baseUnary(n) {
    return function(r) {
        return n(r);
    };
}

module.exports = baseUnary;
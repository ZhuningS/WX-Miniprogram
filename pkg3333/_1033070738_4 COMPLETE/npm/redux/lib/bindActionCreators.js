function bindActionCreator(t, o) {
    return function() {
        return o(t.apply(void 0, arguments));
    };
}

function bindActionCreators(t, o) {
    if ("function" == typeof t) return bindActionCreator(t, o);
    if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    for (var r = Object.keys(t), n = {}, e = 0; e < r.length; e++) {
        var i = r[e], c = t[i];
        "function" == typeof c && (n[i] = bindActionCreator(c, o));
    }
    return n;
}

exports.__esModule = !0, exports.default = bindActionCreators;
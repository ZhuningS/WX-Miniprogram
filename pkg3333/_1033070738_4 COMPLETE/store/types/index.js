Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _counter = require("./counter.js");

Object.keys(_counter).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return _counter[e];
        }
    });
});
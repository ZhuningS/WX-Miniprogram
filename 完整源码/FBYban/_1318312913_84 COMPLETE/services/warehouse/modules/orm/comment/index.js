Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./comment.reducer");

Object.keys(e).forEach(function(r) {
    "default" !== r && "__esModule" !== r && Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    });
});
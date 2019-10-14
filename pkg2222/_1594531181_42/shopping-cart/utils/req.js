function e(e) {
    wx.showModal({
        title: "ERR:",
        content: e
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

require("../utils/logger");

var t = require("../../libs/mmuxwxappdevkit/core/network.js"), r = (require("../utils/sys.js"), 
t.request);

t.request = function(s) {
    s.data && !s.params && (e("no params!"), s.params = s.data), r.call(t, s);
}, exports.default = t;
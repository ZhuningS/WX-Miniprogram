var s = require("../../core/sys.js"), r = {
    isUser: !0,
    isUserEnd: function() {
        return this.isUser;
    },
    isKf: !1,
    isBizEnd: function() {
        return this.isKf;
    },
    userCgiPrefix: function() {
        return "kf_user/";
    }
};

Object.assign(s, r), module.exports = s;
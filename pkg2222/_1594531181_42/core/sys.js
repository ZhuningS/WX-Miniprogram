var e = require("../libs/mmuxwxappdevkit/core/sys.js");

e.setup({
    appName: function() {
        return this.extInfo.mallName;
    },
    appid: function() {
        return this.extInfo.appid;
    },
    testCanvasId: function() {
        return this.extInfo.canvasId;
    },
    disableCache: function() {
        return this.extInfo.disableCache;
    },
    alarmId: 59059,
    isExperience: function() {
        return this.extInfo.isExperience || !1;
    },
    userVersion: function() {
        return this.extInfo.userVersion || 0;
    },
    testCanvasCookie: function() {
        return "";
    }
}), module.exports = e;
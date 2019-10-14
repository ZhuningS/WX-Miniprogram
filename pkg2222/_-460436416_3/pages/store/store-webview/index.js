(function(e) {
    e && e.__esModule;
})(require("../../../utils/dg")), getApp();

Page({
    data: {
        weburl: null
    },
    onLoad: function(e) {
        this.setData({
            weburl: e.weburl
        });
    }
});
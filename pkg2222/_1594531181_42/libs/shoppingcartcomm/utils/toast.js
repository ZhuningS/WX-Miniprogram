Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../index.js");

exports.default = {
    showErrTips: function(o) {
        i.wx.hideLoading(), setTimeout(function() {
            i.wx.showToast({
                title: o.toString() || "发生错误",
                image: "/res/img/icon-error.png",
                duration: 1500
            });
        });
    },
    showSuccessTips: function(o) {
        i.wx.hideLoading(), setTimeout(function() {
            i.wx.showToast({
                title: o.toString() || "OK",
                icon: "success",
                duration: 1500
            });
        });
    },
    showLoading: function() {
        setTimeout(function() {
            i.wx.showLoading({
                title: "请稍后..."
            });
        });
    },
    hideLoading: function() {
        i.wx.hideLoading();
    }
};
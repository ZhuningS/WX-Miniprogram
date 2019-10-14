Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("api.js");

exports.default = {
    showErrTips: function(o) {
        i.hideLoading(), setTimeout(function() {
            i.showToast({
                title: o.toString() || "发生错误",
                image: "/shopping-cart/res/img/icon-error.png",
                duration: 1500
            });
        });
    },
    showSuccessTips: function(o) {
        i.hideLoading(), setTimeout(function() {
            i.showToast({
                title: o.toString() || "OK",
                icon: "success",
                duration: 1500
            });
        });
    },
    showLoading: function() {
        setTimeout(function() {
            i.showLoading({
                title: "请稍后..."
            });
        });
    },
    hideLoading: function() {
        i.hideLoading();
    }
};
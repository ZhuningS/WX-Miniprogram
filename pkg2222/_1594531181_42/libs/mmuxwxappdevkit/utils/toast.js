Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../core/api.js");

exports.default = {
    showErrTips: function(o) {
        i.hideLoading(), i.showToast({
            title: o || "发生错误",
            image: "/assets/icon-error.png",
            duration: 1500
        });
    },
    showSuccessTips: function(o) {
        i.hideLoading(), i.showToast({
            title: o || "OK",
            icon: "success",
            duration: 1500
        });
    },
    showLoading: function() {
        i.showLoading({
            title: "请稍后...",
            mask: !0
        });
    },
    hideLoading: function() {
        i.hideLoading();
    }
};
function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), u = t(require("../../../utils/data.js")), n = t(require("../../../utils/requestUtil.js")), i = (t(require("../../../utils/util.js")), 
t(require("../../../utils/underscore.js")), u.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper");

Page({
    data: {},
    onLoad: function(t) {
        var u = this, a = i + "/ActivityApi/getTempList.html";
        n.default.get(a, "", function(t) {
            u.setData({
                tempPicArray: t
            });
        }, this, {
            completeAfter: e.default.stopPullDownRefresh,
            isShowLoading: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onChoose: function(t) {
        var u = t.currentTarget.dataset.url;
        if ("" == u || null == u) return e.default.showToast({
            title: "请重新选择模版",
            icon: "success",
            duration: 1500
        }), !1;
        var n = getCurrentPages();
        n[n.length - 1];
        n[n.length - 2].setData({
            cover: u
        }), e.default.navigateBack();
    }
});
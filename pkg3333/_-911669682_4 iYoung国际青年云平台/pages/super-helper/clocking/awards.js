function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/dg.js")), n = e(require("../../../utils/data.js")), a = e(require("../../../utils/requestUtil.js")), i = e(require("../../../utils/util.js")), u = e(require("../../../utils/underscore.js")), o = n.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    signedId: 0,
    data: {
        index: 0
    },
    onLoad: function(e) {
        this.signedId = e.id;
        var n = this;
        i.default.trySyncWechatInfo(function(e) {
            n.setData({
                userInfo: e
            });
        }), t.default.showNavigationBarLoading();
        var d = o + "/SignedApi/info.html";
        a.default.get(d, {
            id: this.signedId
        }, function(e) {
            new Date().getTime();
            var t = e.achievement;
            t = u.default.map(t, function(e) {
                return e;
            }), e.data = t.splice(0, e.my_partake.count), "0" != e.my_partake.count && (e.index = parseInt(e.my_partake.count) - 1), 
            this.setData(e);
        }, this, {
            completeAfter: t.default.hideNavigationBarLoading,
            failAfter: t.default.navigateBack
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onChangeView: function(e) {}
});
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/dg.js")), i = e(require("../../../utils/data.js")), a = e(require("../../../utils/requestUtil.js")), n = e(require("../../../utils/underscore.js")), d = t.default.os.isAlipay(), o = i.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    signedId: 0,
    data: {},
    onLoad: function(e) {
        this.signedId = e.id;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onChooseImgTap: function(e) {
        var i = this;
        t.default.chooseImage({
            count: 1,
            success: function(e) {
                var t = d ? e.apFilePaths : e.tempFilePaths;
                i.setData({
                    image: t[0]
                });
            }
        });
    },
    onPushSubmit: function(e) {
        if (!a.default.isLoading(this.addRQId)) {
            var i = n.default.extend({
                id: this.signedId
            }, e.detail.value);
            i.content = encodeURIComponent(i.content);
            var d = function(e) {
                console.log(e), t.default.navigateBack();
            }, u = o + "/SignedApi/signed.html";
            this.data.image ? this.addRQId = a.default.upload(u, this.data.image, "file", i, d) : this.addRQId = a.default.post(u, i, d);
        }
    }
});
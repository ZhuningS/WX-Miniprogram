function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/dg.js")), a = e(require("../../../utils/data.js")), i = e(require("../../../utils/requestUtil.js")), u = e(require("../../../utils/underscore.js")), o = (e(require("../../../utils/util.js")), 
t.default.os.isAlipay()), n = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    data: {},
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onChooseCoverTap: function(e) {
        var a = this;
        t.default.chooseImage({
            count: 1,
            success: function(e) {
                var t = o ? e.apFilePaths : e.tempFilePaths;
                a.setData({
                    coverPath: t[0]
                }), a.isUpdateCover = !0;
            }
        });
    },
    onChooseImageTap: function(e) {
        var a = this, i = e.currentTarget.dataset.index;
        t.default.chooseImage({
            count: 1,
            success: function(e) {
                var t = o ? e.apFilePaths : e.tempFilePaths;
                a.data.imgRule[i].img = t[0], a.imageUpdate[i] = t[0], a.setData({
                    imgRule: a.data.imgRule
                });
            }
        });
    },
    onPushSubmit: function(e) {
        if (!i.default.isLoading(this.addRQId)) {
            console.log(e);
            var a = u.default.extend({}, e.detail.value), o = n + "/NoticeApi/edit.html";
            this.addRQId = i.default.post(o, a, function(e) {
                t.default.redirectTo({
                    url: "detail?id=" + e.id
                });
            }, this);
        }
    }
});
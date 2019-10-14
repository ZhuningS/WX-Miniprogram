function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../../utils/underscore")), i = e(require("../../../utils/requestUtil")), u = (e(require("../../../utils/util")), 
e(require("../../../utils/listener")), e(require("../base-list")), e(require("../urls")));

Page({
    docId: 0,
    data: {},
    onLoad: function(e) {
        this.docId = e.id;
    },
    onPushSubmit: function(e) {
        if (!i.default.isLoading(this.pushRQId)) {
            var d = t.default.extend({
                form_id: e.detail.formId,
                doc_id: this.docId
            }, e.detail.value);
            this.pushRQId = i.default.post(u.default.document.jubao, d, function() {
                wx.showModal({
                    title: "温馨提示",
                    content: "已举报，抵制不良信息还我一个干净的世界！",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack();
                    }
                });
            });
        }
    }
});
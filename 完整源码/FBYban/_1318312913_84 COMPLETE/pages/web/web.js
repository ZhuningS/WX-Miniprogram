function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("../../libs/regenerator-runtime"));

var t = e(require("../../utils/extend-page")), i = e(require("../../utils/util")), r = e(require("../../protocol/apis")), s = e(require("../../mixins/share")), o = e(require("../../mixins/hook")), d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
}, a = {
    onLoad: function(e) {
        this.setData({
            url: i.default.decodeParam(e.url)
        }), e.docId && (this.mid = e.mid, this.docId = e.docId);
    },
    shareOptions: function() {
        if (console.log("onShareAppMessage start"), this.mid && this.docId) {
            r.default.articleShare({
                id: this.docId,
                mid: this.mid,
                token: getApp().getUserToken()
            });
            var e = {
                id: this.docId,
                docId: this.docId,
                type: "article"
            };
            return this.mid && (e.mid = this.mid), d({
                title: "%u 叫你来一起读"
            }, e, this.shareConfig);
        }
        return {
            type: "web-view"
        };
    },
    processMessage: function(e) {
        console.log("web message", e);
    }
};

Page((0, t.default)(a, s.default, o.default));
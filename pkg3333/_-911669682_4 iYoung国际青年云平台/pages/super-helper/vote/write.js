function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), d = t(require("../../../utils/underscore.js")), l = t(require("../../../utils/util.js")), u = e.default.os.isAlipay(), n = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper", o = getApp();

Page({
    isUpdateCover: !1,
    imageUpdate: [],
    data: {
        tabTit: 1,
        textRule: [ "选项1（不超过16个字）", "选项2" ],
        imgRule: [ {
            img: "/images/default.png",
            title: "选项1"
        }, {
            img: "/images/default.png",
            title: "选项2"
        } ],
        is_private: 0
    },
    tabBind: function(t) {
        var e = this, a = t.target.id;
        e.setData({
            tabTit: a
        });
    },
    onLoad: function(t) {
        var e = new Date();
        this.setData({
            init_start_date: l.default.format(e, "yyyy-MM-dd"),
            start_date: l.default.format(e, "yyyy-MM-dd"),
            start_time: l.default.format(e, "hh:mm"),
            end_date: l.default.format(e.getTime() + 288e5, "yyyy-MM-dd"),
            end_time: l.default.format(e.getTime() + 288e5, "hh:mm")
        }), o.globalData.remind_time = 3600, o.globalData.remind_time_text = "提前1小时";
    },
    onShow: function() {
        this.setData({
            remind_time: o.globalData.remind_time,
            remind_time_text: o.globalData.remind_time_text
        });
    },
    onChooseCoverTap: function(t) {
        var a = this;
        e.default.chooseImage({
            count: 1,
            success: function(t) {
                var e = u ? t.apFilePaths : t.tempFilePaths;
                a.setData({
                    coverPath: e[0]
                }), a.isUpdateCover = !0;
            }
        });
    },
    bindDateChange: function(t) {
        var e = {};
        e[t.currentTarget.dataset.bind] = !0 === t.detail.value ? 1 : t.detail.value, this.setData(e);
    },
    onTextOptionChange: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.textRule[e] = t.detail.value;
    },
    onAddTextOptionTap: function() {
        var t = this.data.textRule;
        t.length >= 10 ? e.default.alert("最多只能添加10个选项！") : (t.push("选项" + (this.data.textRule.length + 1)), 
        this.setData({
            textRule: t
        }));
    },
    onDelTextOptionTap: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.textRule.splice(e, 1), this.setData({
            textRule: this.data.textRule
        });
    },
    onChooseImageTap: function(t) {
        var a = this, i = t.currentTarget.dataset.index;
        e.default.chooseImage({
            count: 1,
            success: function(t) {
                var e = u ? t.apFilePaths : t.tempFilePaths;
                a.data.imgRule[i].img = e[0], a.imageUpdate[i] = e[0], a.setData({
                    imgRule: a.data.imgRule
                });
            }
        });
    },
    onAddImgOptionTap: function() {
        this.data.imgRule = this.data.imgRule || [], this.data.imgRule.length >= 10 ? e.default.alert("最多只能添加10个选项！") : (this.data.imgRule.push({
            img: "/images/default.png",
            title: "选项" + (this.data.imgRule.length + 1)
        }), this.setData({
            imgRule: this.data.imgRule
        }));
    },
    onImgTextOptionBlur: function(t) {
        var e = t.detail.value, a = t.currentTarget.dataset.index;
        this.data.imgRule[a].title = e;
    },
    onPrivateChange: function(t) {
        this.setData({
            is_private: t.detail.value ? 1 : 0
        });
    },
    bindtapTime: function() {
        e.default.navigateTo({
            url: "tip-time"
        });
    },
    bindtapTem: function() {
        e.default.navigateTo({
            url: "template"
        });
    },
    onPushSubmit: function(t) {
        var a = this;
        if (!i.default.isLoading(this.addRQId)) {
            var d = t.detail.value;
            console.log(t.detail.value);
            var l = n + "/VoteApi/edit.html";
            this.addRQId = i.default.post(l, d, function(t) {
                a.isUpdateCover && a.uploadCoverImage(d.coverPath, t.id), e.default.redirectTo({
                    url: "detail?id=" + t.id
                });
            });
        }
    },
    onPushSubmit2: function(t) {
        var a = this;
        if (!i.default.isLoading(this.addRQId)) {
            var l = t.detail.value, u = n + "/VoteApi/edit.html";
            this.addRQId = i.default.post(u, l, function(t) {
                a.isUpdateCover && a.uploadCoverImage(l.coverPath, t.id), a.voteId = t.id, a.imageUpdate.length ? a.uploadImages((0, 
                d.default)(a.imageUpdate).keys()) : e.default.redirectTo({
                    url: "detail?id=" + t.id
                });
            });
        }
    },
    uploadImages: function(t) {
        var a = t.shift(), d = this.imageUpdate[a], l = n + "/VoteApi/imgUpload.html";
        i.default.upload(l, d, "file", {
            id: this.voteId,
            index: a
        }, function(t) {
            console.log(t);
        }, this, {
            completeAfter: function() {
                t.length ? this.uploadImages(t) : (this.imageUpdate = [], e.default.redirectTo({
                    url: "detail?id=" + this.voteId
                }));
            }
        });
    },
    uploadCoverImage: function(t, e) {
        var a = n + "/VoteApi/uploadCoverImage.html";
        i.default.upload(a, t, "file", {
            id: e
        }, function(t) {
            console.log(t);
        }, this);
    }
});
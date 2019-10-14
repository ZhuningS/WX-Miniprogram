function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), i = t(require("../../../utils/util")), s = t(require("../../../utils/listener")), o = t(require("../urls"));

Page({
    data: {
        id: 0,
        cid: 0,
        title: "",
        uploadFiles: [],
        isUpload: !1
    },
    onLoad: function(t) {
        var e = this, i = t.id, s = t.cid, n = t.title;
        if (!s || s < 0) wx.showModal({
            title: "错误提示",
            content: "非法打开页面，请退出后重试~",
            showCancel: !1,
            success: wx.navigateBack
        }); else {
            n && wx.setNavigationBarTitle({
                title: n + " - 编辑"
            }), a.default.get(o.default.document.detail, {
                id: i
            }, function(t) {
                for (var a = new Array(), i = 0; i < t.imgs.length; i++) a.push({
                    state: 2,
                    file: t.imgs[i]
                });
                e.setData({
                    id: t.id,
                    cid: t.cid,
                    tags: t.tags,
                    content: t.content,
                    uploadFiles: a,
                    address: t.address,
                    latitude: t.latitude,
                    longitude: t.longitude,
                    mobile: t.mobile
                }), e.loadConfig(t.tags);
            });
            var l = wx.getStorageSync("servers_mobile"), d = wx.getStorageSync("servers_is_agree_statement");
            this.setData({
                mobile: l,
                options: t,
                cid: s,
                title: n,
                isAgreeStatement: d
            });
        }
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            success: function(e) {
                i.default.getMapSdk().reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(e) {
                        e = e.result, t.setData({
                            address: e.address,
                            latitude: e.location.lat,
                            longitude: e.location.lng
                        });
                    }
                });
            }
        });
    },
    loadConfig: function(t) {
        var i = this, s = {
            name: "config,category,show_mcard",
            cid: this.data.cid
        };
        a.default.get(o.default.config.load, s, function(a) {
            var s = a.config, o = a.category, n = a.show_mcard;
            wx.setStorageSync("servers_config", s);
            var l = {};
            if (s.top_rule.length) {
                var d = s.top_rule[0];
                l.top_day = d.day, l.top_amount = d.amount;
            }
            "" == i.data.mobile && "" != a.mobile && (i.setData({
                mobile: a.mobile
            }), wx.setStorageSync("servers_mobile", a.mobile)), o.tags = e.default.map(o.tags, function(t) {
                return {
                    active: !1,
                    value: t
                };
            });
            for (var u = 0; u < o.tags.length; u++) -1 !== t.indexOf(o.tags[u].value) && (o.tags[u].active = !0);
            i.setData(e.default.extend({
                config: s,
                category: o,
                show_mcard: n,
                disableBtnPush: !1,
                isAgreeStatement: !!i.data.isAgreeStatement || !s.statement
            }, l));
        });
    },
    onChooseUploadImageTap: function(t) {
        var a = this, i = this.data.uploadFiles;
        wx.chooseImage({
            count: 6 - i.length,
            success: function(t) {
                e.default.each(t.tempFilePaths, function(t) {
                    return i.push({
                        file: t,
                        state: 0
                    });
                }), a.setData({
                    uploadFiles: i
                }), a.uploadImage();
            }
        });
    },
    uploadImage: function() {
        var t = this;
        if (!this.data.isUpload) {
            this.setData({
                isUpload: !0
            });
            var e = [].concat(this.data.uploadFiles);
            !function i(s) {
                var n = e[s];
                2 != n.state ? (n.state = 1, t.setData({
                    uploadFiles: e
                }), t.pushRQId = a.default.upload(o.default.document.upload, n.file, "file", {}, function(t) {
                    n.state = 2, n.url = t;
                }, t, {
                    completeAfter: function() {
                        var a = {
                            uploadFiles: e
                        };
                        ++s < e.length ? i(s) : a.isUpload = !1, t.setData(a);
                    },
                    error: function() {
                        return n.state = 3;
                    },
                    failAfter: function() {
                        return n.state = 3;
                    }
                })) : i(s + 1);
            }(0);
        }
    },
    onPreviewTap: function(t) {
        if (!this.isDeleteAction) {
            var a = t.target.dataset.index, i = [], s = this.data.uploadFiles;
            e.default.each(s, function(t) {
                return i.push(t.file);
            }), wx.previewImage({
                current: i[a],
                urls: i
            });
        }
    },
    onDeleteImgTap: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        wx.showModal({
            title: "温馨提示",
            content: "你确定要删除这个图片吗？",
            success: function(t) {
                if (!t.cancel) {
                    var i = e.data.uploadFiles;
                    i.splice(a, 1), e.setData({
                        uploadFiles: i
                    });
                }
            }
        });
    },
    onChooseTag: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.category.tags;
        a[e].active = !a[e].active, this.setData({
            category: this.data.category
        });
    },
    onGetMapLocationTap: function(t) {
        var e = this;
        wx.chooseLocation({
            success: function(t) {
                e.setData({
                    address: t.address,
                    latitude: t.latitude,
                    longitude: t.longitude
                });
            }
        });
    },
    onPushSubmit: function(t) {
        var n = this;
        a.default.isLoading(this.pushRQId) || this.data.isUpload || i.default.trySyncWechatInfo(function() {
            var i = [], l = 0;
            e.default.each(n.data.uploadFiles, function(t) {
                2 == t.state && (i["imgs[" + l + "]"] = t.url ? t.url : t.file, l++);
            });
            var d = {}, u = 0;
            e.default.each(n.data.category.tags, function(t) {
                t.active && (d["tags[" + u + "]"] = t.value, u++);
            });
            var r = e.default.extend({
                formId: t.detail.formId,
                cid: n.data.cid,
                id: n.data.id
            }, t.detail.value, i, d);
            a.default.post(o.default.document.add, r, function(t) {
                wx.setStorageSync("servers_mobile", r.mobile), 0 == t.status ? wx.redirectTo({
                    url: "../my-lists/my-lists"
                }) : (s.default.fireEventListener("severs.info.add", [ t ]), wx.switchTab({
                    url: "../index/index",
                    fail: function(t) {
                        wx.navigateTo({
                            url: "../index/index"
                        });
                    }
                }));
            });
        });
    },
    onNavigateTap: function(t) {
        var e = t.detail.target ? t.detail.target.dataset : t.currentTarget.dataset, i = e.url, s = e.type, o = {
            url: i
        };
        e.invalid || (t.detail.formId && a.default.pushFormId(t.detail.formId), "switch" == s ? (o.fail = function() {
            wx.navigateTo({
                url: i
            });
        }, wx.switchTab(o)) : wx.navigateTo(o));
    },
    editMobile: function() {
        var t = this;
        if ("" == this.data.mobile) e = "bind"; else var e = "edit";
        i.default.userMobile(e, function(e) {
            e.mobile && (t.setData({
                mobile: e.mobile
            }), wx.setStorageSync("servers_mobile", e.mobile));
        });
    }
});
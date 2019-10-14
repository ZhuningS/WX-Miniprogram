function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/underscore")), a = t(require("../../../utils/requestUtil")), i = t(require("../../../utils/util")), s = t(require("../../../utils/listener")), n = t(require("../urls"));

Page({
    data: {
        cid: 0,
        title: "",
        uploadFiles: [],
        isUpload: !1,
        disableBtnPush: !0,
        isShowStatement: 0,
        is_top: 0,
        is_wallet: 0,
        is_wallet_avg: 0,
        is_wallet_pwd: 0,
        isAgreeStatement: !1
    },
    onLoad: function(t) {
        var e = t.cid, a = t.title;
        if (!e || e < 0) wx.showModal({
            title: "错误提示",
            content: "非法打开页面，请退出后重试~",
            showCancel: !1,
            success: wx.navigateBack
        }); else {
            a && wx.setNavigationBarTitle({
                title: a + " - 发布"
            });
            var i = wx.getStorageSync("servers_mobile"), s = wx.getStorageSync("servers_is_agree_statement");
            this.setData({
                mobile: i,
                options: t,
                cid: e,
                title: a,
                isAgreeStatement: s
            }), this.getLocation(), this.loadConfig();
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
        a.default.get(n.default.config.load, s, function(t) {
            var a = t.config, s = t.category, n = t.show_mcard;
            wx.setStorageSync("servers_config", a);
            var o = {};
            if (a.top_rule.length) {
                var l = a.top_rule[0];
                o.top_day = l.day, o.top_amount = l.amount;
            }
            "" == i.data.mobile && "" != t.mobile && (i.setData({
                mobile: t.mobile
            }), wx.setStorageSync("servers_mobile", t.mobile)), s.tags = e.default.map(s.tags, function(t) {
                return {
                    active: !1,
                    value: t
                };
            }), i.setData(e.default.extend({
                config: a,
                category: s,
                show_mcard: n,
                disableBtnPush: !1,
                isAgreeStatement: !!i.data.isAgreeStatement || !a.statement
            }, o));
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
                var o = e[s];
                2 != o.state ? (o.state = 1, t.setData({
                    uploadFiles: e
                }), t.pushRQId = a.default.upload(n.default.document.upload, o.file, "file", {}, function(t) {
                    o.state = 2, o.url = t;
                }, t, {
                    completeAfter: function() {
                        var a = {
                            uploadFiles: e
                        };
                        ++s < e.length ? i(s) : a.isUpload = !1, t.setData(a);
                    },
                    error: function() {
                        return o.state = 3;
                    },
                    failAfter: function() {
                        return o.state = 3;
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
        console.log(t), wx.chooseLocation({
            success: function(t) {
                e.setData({
                    address: t.address,
                    latitude: t.latitude,
                    longitude: t.longitude
                });
            }
        });
    },
    onSetValueTap: function(t) {
        var e = t.currentTarget.dataset, a = e.name, i = e.value, s = {};
        s[a] = i, this.setData(s);
    },
    onTopDayChange: function(t) {
        var e = this.data.config.top_rule, a = parseInt(t.detail.value);
        0 != e.length && this.setData({
            top_day: e[a].day,
            top_amount: e[a].amount
        });
    },
    onToggleAgreeStatement: function(t) {
        var e = 0 != t.detail.value.length;
        this.setData({
            isAgreeStatement: e
        }), wx.setStorageSync("servers_is_agree_statement", e);
    },
    onPushSubmit: function(t) {
        var o = this;
        a.default.isLoading(this.pushRQId) || this.data.isUpload || i.default.trySyncWechatInfo(function() {
            var i = [], l = 0;
            e.default.each(o.data.uploadFiles, function(t) {
                2 == t.state && (i["imgs[" + l + "]"] = t.url, l++);
            });
            var u = {}, r = 0;
            e.default.each(o.data.category.tags, function(t) {
                t.active && (u["tags[" + r + "]"] = t.value, r++);
            });
            var d = e.default.extend({
                formId: t.detail.formId,
                cid: o.data.cid
            }, t.detail.value, i, u);
            o.pushRQId = a.default.post(n.default.document.add, d, function(t) {
                wx.setStorageSync("servers_mobile", d.mobile), 0 == t.status ? 1 == t.is_pay || t.is_top ? (t.wallet_amount = void 0 === d.wallet_amount ? 0 : d.wallet_amount + 0, 
                o.onPayment(t)) : wx.redirectTo({
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
    onPayment: function(t) {
        var e = this;
        this.data.show_mcard && 0 == this.data.is_wallet ? wx.showActionSheet({
            itemList: [ "余额", "微信支付" ],
            success: function(a) {
                if (0 == a.tapIndex) {
                    var o = e.data, l = parseFloat(o.category.amount) + (o.is_top ? parseFloat(o.top_amount) : 0) + parseFloat(t.wallet_amount);
                    i.default.payment({
                        id: t.id,
                        total_amount: l,
                        notify_url: n.default.document.imprestPay
                    }, function(e) {
                        1 != e.code ? wx.redirectTo({
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
                } else 1 == a.tapIndex && e.onWechatPayment(t);
            },
            fail: function() {
                wx.redirectTo({
                    url: "../my-lists/my-lists"
                });
            }
        }) : this.onWechatPayment(t);
    },
    onWechatPayment: function(t) {
        a.default.get(n.default.document.wechatPay, {
            id: t.id
        }, function(e) {
            var a = function() {
                t.is_pay = 2, t.status = 1, s.default.fireEventListener("severs.info.update", [ t ]), 
                wx.showToast({
                    title: "已审核通过...",
                    icon: "success"
                }), wx.switchTab({
                    url: "../index/index",
                    fail: function(t) {
                        wx.navigateTo({
                            url: "../index/index"
                        });
                    }
                });
            };
            1 === e ? a() : (e.success = a, e.fail = function() {
                wx.redirectTo({
                    url: "../my-lists/my-lists"
                });
            }, wx.requestPayment(e));
        }, this, {
            error: function() {
                wx.redirectTo({
                    url: "../my-lists/my-lists"
                });
            }
        });
    },
    onNavigateTap: function(t) {
        var e = t.detail.target ? t.detail.target.dataset : t.currentTarget.dataset, i = e.url, s = e.type, n = {
            url: i
        };
        e.invalid || (t.detail.formId && a.default.pushFormId(t.detail.formId), "switch" == s ? (n.fail = function() {
            wx.navigateTo({
                url: i
            });
        }, wx.switchTab(n)) : wx.navigateTo(n));
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
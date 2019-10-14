var e = require("../utils/util.js"), t = require("../utils/common.js"), a = require("../utils/ajax.js"), o = getApp();

module.exports = {
    onLoad: function(e) {
        var t = e.recommend;
        t && o.setRecommend(t);
    },
    $loginSuc: function() {},
    _callPhone: function(e) {
        var t = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    _scanCode: function() {
        wx.scanCode({
            success: function(e) {
                console.log(e), wx.navigateTo({
                    url: "/" + e.path
                });
            }
        });
    },
    _copyText: function(t) {
        var a = t.currentTarget.dataset, o = a.copyVal, n = a.copySuccess;
        wx.setClipboardData({
            data: o,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        n && e.showOK(n || "复制成功");
                    }
                });
            }
        });
    },
    _toMap: function(e) {
        var t = e.currentTarget.dataset, a = e.detail.formId;
        this.toMap(t, a);
    },
    toMap: function(e, o) {
        wx.showLoading({
            title: "地图打开中..."
        }), a.G("/openapi/CAddress/getLocation", {
            addr: e.address
        }, function(t) {
            var a;
            wx.hideLoading();
            try {
                a = JSON.parse(t.result).result;
            } catch (e) {}
            a && wx.openLocation({
                latitude: a.location.lat,
                longitude: a.location.lng,
                name: e.name,
                address: e.address
            });
        }), o && t.submitForm(o);
    },
    _formSubmit: function(t) {
        var o = this, n = (t.detail.formId, t.detail.value), r = {
            tableId: n.tableId,
            values: [],
            contents: [],
            types: [],
            keynames: []
        };
        Object.keys(n).forEach(function(e) {
            var t = n[e];
            /values\d+/.test(e) ? r.values.push(t) : /contents\d+/.test(e) ? r.contents.push(t) : /types\d+/.test(e) ? r.types.push(t) : /keynames\d+/.test(e) && r.keynames.push(t);
        }), a.P("/openapi/CUser/addTableContent", r, function(t) {
            e.alert("提交成功", function() {
                o.setData({
                    mFormFlush: !o.data.mFormFlush
                }), setTimeout(function() {
                    o.setData({
                        mFormFlush: !o.data.mFormFlush
                    });
                }, 0);
            });
        });
    },
    _jumpByLink: function(a) {
        var o = a.currentTarget.dataset, n = o.linkType, r = o.linkData, s = a.detail.formId;
        "goods" == n ? wx.navigateTo({
            url: "/pages/goods/goods?goodsId=" + r.id
        }) : "article" == n ? wx.navigateTo({
            url: "/pages/article/article?artId=" + r.id
        }) : "page" == n ? t.goToPage(r.id) : "act" == n ? e.alert("该功能暂未开放") : "goodsCate" == n ? wx.navigateTo({
            url: "/pages/goodsList/goodsList?ty=" + r.category_id
        }) : "phone" == n && wx.makePhoneCall({
            phoneNumber: r.phone
        }), t.submitForm(s);
    },
    _jumpByUrl: function(e) {
        var t = e.currentTarget.dataset, a = t.url;
        t.linkType;
        "tab" ? wx.switchTab({
            url: a
        }) : wx.navigateTo({
            url: a
        });
    },
    _jumpToTab: function(e) {
        var t = e.currentTarget.dataset.url, o = e.detail.formId;
        console.log("formIdtab====", o), wx.reLaunch({
            url: t
        }), a.P({
            url: "/apis/home/card.core/formid",
            data: {
                form_id: o
            },
            success: function(e) {}
        });
    },
    _jump: function(e) {
        t.jump(e);
    },
    _showMsg: function(t) {
        var a = t.target.dataset.msg;
        e.alert(a);
    },
    _previewImg: function(e) {
        var t = e.currentTarget.dataset, a = t.url, o = t.urls;
        console.log("urls====", o), console.log(a, o), wx.previewImage({
            current: a,
            urls: o
        });
    },
    previewOneImg: function(e) {
        var t = e.currentTarget.dataset.url;
        if ("" != t) {
            console.log("previewOneImg===", t);
            var a = [];
            a.push(t), console.log(a), wx.previewImage({
                current: t,
                urls: a,
                complete: function() {}
            });
        }
    }
};
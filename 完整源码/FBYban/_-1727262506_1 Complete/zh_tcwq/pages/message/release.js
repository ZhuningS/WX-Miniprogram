var t = getApp(), e = [], a = [], o = [];

Page({
    data: {
        add1: [ {
            id: "imgArray1"
        } ],
        length1: 540
    },
    onLoad: function(e) {
        var a = this, o = wx.getStorageSync("url2"), n = wx.getStorageSync("url");
        a.setData({
            url: o,
            img_url: n
        }), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagezxtype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(t) {
                console.log(t), a.setData({
                    zx: t.data
                });
            }
        });
    },
    imgArray1: function(t) {
        var a = this, o = (wx.getStorageSync("uniacid"), 9 - e.length);
        console.log(o), o > 0 && o <= 9 ? wx.chooseImage({
            count: o,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    icon: "loading",
                    title: "正在上传"
                });
                var e = t.tempFilePaths;
                a.uploadimg({
                    url: a.data.url + "/index.php?&c=apitc&a=up_qiniu&acid=" + getApp().globalData.version,
                    path: e
                });
            }
        }) : wx.showModal({
            title: "上传提示",
            content: "最多上传9张图片",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    uploadimg: function(t) {
        var a = this, o = t.i ? t.i : 0, n = t.success ? t.success : 0, i = t.fail ? t.fail : 0;
        wx.uploadFile({
            url: t.url,
            header: {
                token: getApp().globalData.token
            },
            filePath: t.path[o],
            name: "upfile",
            formData: null,
            success: function(t) {
                "" != t.data ? (console.log(t), n++, e.push(t.data), a.setData({
                    imgArray1: e
                }), console.log("上传商家轮播图时候提交的图片数组", e)) : wx.showToast({
                    icon: "loading",
                    title: "请重试"
                });
            },
            fail: function(t) {
                i++, console.log("fail:" + o + "fail:" + i);
            },
            complete: function() {
                console.log(o), ++o == t.path.length ? (a.setData({
                    images: t.path
                }), wx.hideToast(), console.log("执行完毕"), console.log("成功：" + n + " 失败：" + i)) : (console.log(o), 
                t.i = o, t.success = n, t.fail = i, a.uploadimg(t));
            }
        });
    },
    classifation: function(t) {
        var e = this;
        console.log(e.data);
        e.data.zx;
        var a = t.currentTarget.dataset.index, o = t.currentTarget.dataset.id;
        e.setData({
            activeIndex: a,
            index: a,
            type_id: o
        });
    },
    delete1: function(t) {
        var a = this;
        console.log(t), Array.prototype.indexOf = function(t) {
            for (var e = 0; e < this.length; e++) if (this[e] == t) return e;
            return -1;
        }, Array.prototype.remove = function(t) {
            var e = this.indexOf(t);
            e > -1 && this.splice(e, 1);
        };
        var o = t.currentTarget.dataset.inde;
        e.remove(e[o]), a.setData({
            imgArray1: e
        });
    },
    add: function(t) {
        wx.switchTab({
            url: "../index/index",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    formSubmit: function(a) {
        var o = wx.getStorageSync("System");
        console.log(a);
        var n = this, i = (wx.getStorageSync("city_type"), wx.getStorageSync("city")), c = n.data.add1, l = a.detail.value.text1, s = a.detail.value.details, u = wx.getStorageSync("users").id;
        console.log(u);
        var r = n.data.type_id, g = "", f = l + s;
        console.log(f), t.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: f,
                mode: "wx"
            },
            method: "POST",
            success: function(f) {
                if (console.log(f.data), "function" == typeof a && a(n), 0 !== f.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                if (null == r) g = "还没有选择分类哦"; else if ("" == s) g = "标题不能为空"; else if (1 == c.length) if ("" == l) g = "内容不能为空"; else if (0 == e.length) d = ""; else if (e.length > 0) var d = e.join(",");
                "" != g ? wx.showModal({
                    title: "提示",
                    content: g,
                    showCancel: !0,
                    cancelText: "取消",
                    confirmText: "确定",
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(t) {}
                }) : t.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagezx&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        type_id: r,
                        user_id: u,
                        title: s,
                        content: l,
                        imgs: d,
                        cityname: i
                    },
                    success: function(t) {
                        console.log(t), 1 == t.data && (2 == o.is_zx ? wx.showToast({
                            title: "发布成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(t) {},
                            fail: function(t) {},
                            complete: function(t) {}
                        }) : wx.showModal({
                            title: "提示",
                            icon: "",
                            image: "",
                            content: "发布成功,等待审核...",
                            duration: 2e3,
                            mask: !0,
                            success: function(t) {},
                            fail: function(t) {},
                            complete: function(t) {}
                        }), setTimeout(function() {
                            wx.reLaunch({
                                url: "message",
                                success: function(t) {},
                                fail: function(t) {},
                                complete: function(t) {}
                            });
                        }, 2e3));
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        e.splice(0, e.length), o.splice(0, o.length), a.splice(0, a.length);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
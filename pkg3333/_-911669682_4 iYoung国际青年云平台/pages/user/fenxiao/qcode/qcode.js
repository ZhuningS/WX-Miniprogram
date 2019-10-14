var e = require("../../../../wxParse/wxParse.js"), t = (getApp(), require("../../../../utils/requestUtil")), o = require("../../../../utils/data");

Page({
    data: {
        userInfo: {},
        data_list: [],
        shareopenid: "",
        posterUrl: ""
    },
    onLoad: function(e) {
        var s = this, a = this, n = decodeURIComponent(e.scene), i = e.shareopenid;
        void 0 != i ? a.setData({
            shareopenid: i
        }) : void 0 != n && a.setData({
            shareopenid: n
        }), t.get(o.duoguan_user_info_url, {}, function(e) {
            console.log(e), s.setData({
                userInfo: e
            }), a.getDataList(e.openId, a.data.shareopenid);
        });
    },
    getDataList: function(s, a) {
        var n = this, i = this;
        t.get(o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/fenxiaocode", {
            myopenid: s,
            shareopenid: a
        }, function(t) {
            console.log(t), i.setData({
                data_list: t
            }), e.wxParse("content", "html", t.fxrule, i);
        }), t.get(o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/fenxiaoPoster", {
            myopenid: s,
            shareopenid: a
        }, function(e) {
            n.setData({
                posterUrl: e.poster
            });
        });
    },
    saveimage: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] ? wx.getImageInfo({
                    src: e.data.posterUrl,
                    success: function(e) {
                        var t = e.path;
                        wx.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function(e) {
                                wx.showModal({
                                    title: "提示",
                                    content: "保存图片成功",
                                    showCancel: !1
                                });
                            },
                            fail: function(e) {
                                wx.showModal({
                                    title: "保存图片失败",
                                    content: e.errMsg,
                                    showCancel: !1
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        wx.showModal({
                            title: "获取图片信息失败",
                            content: e.errMsg,
                            showCancel: !1
                        });
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(t) {
                        wx.getImageInfo({
                            src: e.data.posterUrl,
                            success: function(e) {
                                var t = e.path;
                                console.log(t), wx.saveImageToPhotosAlbum({
                                    filePath: t,
                                    success: function(e) {
                                        wx.showModal({
                                            title: "提示",
                                            content: "保存图片成功",
                                            showCancel: !1
                                        });
                                    },
                                    fail: function(e) {
                                        wx.showModal({
                                            title: "保存图片失败",
                                            content: e.errMsg,
                                            showCancel: !1
                                        });
                                    }
                                });
                            },
                            fail: function(e) {
                                wx.showModal({
                                    title: "获取图片信息失败",
                                    content: e.errMsg,
                                    showCancel: !1
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onPullDownRefresh: function() {
        var e = this, s = this;
        t.get(o.duoguan_user_info_url, {}, function(t) {
            console.log(t), e.setData({
                userInfo: t
            }), s.getDataList(t.openId, s.data.shareopenid);
        }, this, {
            completeAfter: wx.stopPullDownRefresh
        });
    },
    onShareAppMessage: function() {
        return {
            title: "我要代言",
            desc: "",
            path: "/pages/user/fenxiao/qcode/qcode?shareopenid=" + this.data.data_list.shareopenid
        };
    }
});
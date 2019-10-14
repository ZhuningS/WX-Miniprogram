var e = require("../../../../wxParse/wxParse.js"), t = (getApp(), require("../../../../utils/requestUtil")), o = require("../../../../utils/data");

Page({
    data: {
        userInfo: {},
        data_list: [],
        shareopenid: ""
    },
    onLoad: function(e) {
        var a = this, s = this, n = decodeURIComponent(e.scene), i = e.shareopenid;
        void 0 != i ? s.setData({
            shareopenid: i
        }) : void 0 != n && s.setData({
            shareopenid: n
        }), t.get(o.duoguan_user_info_url, {}, function(e) {
            console.log(e), a.setData({
                userInfo: e
            }), s.getDataList(e.openId, s.data.shareopenid);
        });
    },
    getDataList: function(a, s) {
        var n = this;
        t.get(o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/fenxiaocode", {
            myopenid: a,
            shareopenid: s
        }, function(t) {
            console.log(t), n.setData({
                data_list: t
            }), e.wxParse("content", "html", t.fxrule, n);
        });
    },
    saveimage: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] ? wx.getImageInfo({
                    src: e.data.data_list.codeurl,
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
                            src: e.data.data_list.codeurl,
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
                        });
                    }
                });
            }
        });
    },
    onPullDownRefresh: function() {
        var e = this, a = this;
        t.get(o.duoguan_user_info_url, {}, function(t) {
            console.log(t), e.setData({
                userInfo: t
            }), a.getDataList(t.openId, a.data.shareopenid);
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
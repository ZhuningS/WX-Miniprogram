var e = getApp(), o = (require("../../utils/util.js"), require("../../utils/common.js")), s = require("../../common/PageBase.js"), t = (require("../../utils/wxParse/wxParse.js"), 
require("../../utils/ajax.js"));

Page(o.extendPage(s, {
    data: {
        dataLoaded: !1
    },
    onLoad: function() {
        this._getList();
    },
    _getList: function() {
        var o = e.getCardid(), s = this;
        t.G({
            url: "/apis/home/card.item/poster",
            data: {
                id: o
            },
            success: function(e) {
                var o = e.data;
                console.log(o), s.setData({
                    poster: o
                }), wx.getImageInfo({
                    src: o,
                    success: function(e) {
                        console.log(e.path), s.setData({
                            posterPath: e.path,
                            dataLoaded: !0
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    savePoster: function() {
        var e = this.data.posterPath;
        wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(e) {
                console.log(e), wx.showModal({
                    title: "保存海报成功",
                    showCancel: !1,
                    content: "名片海报已保存到手机相册，你可以分享到朋友圈了",
                    success: function(e) {}
                });
            },
            fail: function(e) {
                console.log(e), "saveImageToPhotosAlbum:fail auth deny" !== e.errMsg && "saveImageToPhotosAlbum:fail:auth denied" !== e.errMsg || (console.log("打开设置窗口"), 
                wx.openSetting({
                    success: function(e) {
                        console.log(e), e.authSetting["scope.writePhotosAlbum"] ? console.log("获取权限成功，再次点击图片保存到相册") : console.log("获取权限失败");
                    }
                }));
            }
        });
    }
}));
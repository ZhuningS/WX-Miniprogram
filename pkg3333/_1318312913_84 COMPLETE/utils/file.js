Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = getApp().getLogger();

exports.savePhotoToAlbum = function(o, t) {
    wx.showLoading(), wx.downloadFile({
        url: o,
        success: function(o) {
            wx.saveImageToPhotosAlbum({
                filePath: o.tempFilePath,
                success: function() {
                    t ? t() : (wx.showToast({
                        title: "保存成功"
                    }), e.logAction("saved_photo"));
                }
            });
        },
        fail: function() {
            wx.showToast({
                image: "/images/new_assets/icon_cancel.svg",
                title: "图片保存失败"
            });
        },
        complete: function() {
            wx.hideLoading();
        }
    });
};
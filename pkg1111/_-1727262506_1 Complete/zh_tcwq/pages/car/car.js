Page({
    data: {},
    onLoad: function(o) {
        console.log(o), this.setData({
            vr: o.vr
        });
    },
    canvas: function(o) {
        var n = this;
        console.log(o), wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 400,
            height: 200,
            destWidth: 400,
            destHeight: 600,
            canvasId: "firstCanvas",
            success: function(o) {
                console.log(o), wx.saveImageToPhotosAlbum({
                    filePath: o.tempFilePath,
                    success: function(o) {
                        console.log(o), wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                }), n.setData({
                    tempFilePath: o.tempFilePath
                });
            },
            fail: function(o) {
                console.log(o);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
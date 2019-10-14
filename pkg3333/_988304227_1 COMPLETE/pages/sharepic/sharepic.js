var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../config/index.js")), e = getApp(), a = t.default.domain;

Page({
    data: {
        top: 2 * e.globalData.statusBarHeight + 88,
        headerHeight: 2 * e.globalData.statusBarHeight,
        qrCode: ""
    },
    reportTee: function() {
        wx.reLaunch({
            url: "../forest/forest"
        });
    },
    save: function() {
        wx.canvasToTempFilePath({
            canvasId: "myCanvas",
            success: function(t) {
                console.log(t.tempFilePath), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        console.log(t), wx.showToast({
                            title: "保存成功",
                            duration: 1e3
                        });
                    }
                });
            }
        });
    },
    draw: function() {
        var t = wx.getStorageSync("nickName"), e = (wx.getStorageSync("userInfo").avatarUrl, 
        wx.getSystemInfoSync().windowWidth), a = wx.createCanvasContext("myCanvas", this);
        a.setFillStyle("#FFF5CC"), a.fillRect(0, 0, .84 * e, 1.22 * e), a.save(), a.beginPath(), 
        a.arc(.84 * e / 2, 110 / 750 * e, .08 * e, 0, 2 * Math.PI), a.fill(), a.clip(), 
        a.drawImage(this.data.avat, .84 * e / 2 - .08 * e, 50 / 750 * e, .16 * e, .16 * e), 
        a.restore(), a.setFontSize(.04 * e), a.setFillStyle("#333333"), a.setTextAlign("center"), 
        a.fillText(t, .84 * e / 2, 230 / 750 * e);
        var n = "我在专注学习和工作的同时种出了一片森林～跟我一起拒当低头族，放下手机，专注学习的同时种出一片森林～".split(""), o = "", s = [];
        a.setFontSize(26 / 750 * e), a.setFillStyle("#666666"), a.setTextAlign("left");
        for (var i = 0; i < n.length; i++) a.measureText(o).width < 518 / 750 * e ? o += n[i] : (s.push(o), 
        o = "");
        s.push(o);
        for (var r = 0; r < s.length; r++) a.fillText(s[r], 56 / 750 * e, 320 / 750 * e + 40 * r / 750 * e);
        console.log(this.data.qrCode), a.drawImage(this.data.qrCode, .84 * e / 2 - 140 / 750 * e, .688 * e, .36 * e, .36 * e), 
        a.draw(), wx.hideLoading();
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "生成图片中"
        });
        var n = this;
        new Promise(function(t, o) {
            var s = {
                createOpenId: e.globalData.openId
            };
            wx.request({
                url: a + "/focustree/getPoster",
                data: s,
                method: "GET",
                success: function(e) {
                    wx.getImageInfo({
                        src: e.data.qrcode,
                        success: function(e) {
                            n.setData({
                                qrCode: e.path
                            }), wx.getImageInfo({
                                src: wx.getStorageSync("userInfo").avatarUrl,
                                success: function(e) {
                                    n.setData({
                                        avat: e.path
                                    }), t();
                                }
                            });
                        }
                    });
                }
            });
        }).then(function() {
            n.draw();
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
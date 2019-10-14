function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return t.replace(/[\u0391-\uFFE5]/g, "aa").length;
}

t(require("../../../utils/util"));

var i = t(require("../../../utils/requestUtil")), s = (t(require("../../../utils/underscore")), 
require("../../../utils/data")), a = t(s);

t(require("../../../wxParse/wxParse.js")), getApp();

Page({
    data: {
        loadhide: !0,
        goods_pic: "",
        head_pic: "",
        qrcode: ""
    },
    onLoad: function(t) {
        var e = this, s = wx.getSystemInfoSync().windowWidth;
        i.default.get(a.default.duoguan_host_api_url + "/index.php?s=/addon/DuoguanTel/Api/share.html", {
            id: t.id,
            ph_width: s
        }, function(t) {
            var i = t;
            wx.getImageInfo({
                src: i.pic.show_pic,
                success: function(t) {
                    t.width <= 0 || t.height <= 0 ? i.show_pic_msg = {
                        width: s,
                        height: s
                    } : i.show_pic_msg = {
                        width: t.width,
                        height: t.height
                    };
                },
                fail: function(t) {
                    i.show_pic_msg = {
                        width: s,
                        height: s
                    };
                },
                complete: function() {
                    i.pic.show_pic = i.pic.show_pic + s, i.pic.qr_pic = a.default.duoguan_host_api_url + i.pic.qr_pic, 
                    e.setData({
                        info: i,
                        phone_width: s
                    }), e.getImg();
                }
            });
        }), this.setData({
            options: t
        });
    },
    getImg: function() {
        var t = this, e = t.data.info;
        wx.downloadFile({
            url: e.pic.show_pic,
            success: function(i) {
                200 == i.statusCode && t.setData({
                    show_pic: i.tempFilePath
                }), wx.downloadFile({
                    url: e.pic.qr_pic,
                    success: function(e) {
                        200 == e.statusCode && (t.setData({
                            qr_pic: e.tempFilePath
                        }), t.canvasposter());
                    }
                });
            }
        });
    },
    onReady: function() {},
    canvasposter: function() {
        var t = this, i = t.data, s = i.phone_width, a = s / 375, n = wx.createCanvasContext("myCanvas");
        n.beginPath();
        n.setFillStyle("#ffffff"), n.fillRect(0, 0, s, 4 * s), t.setData({
            c_w: s,
            c_h: 4 * s
        });
        var o = i.info.show_pic_msg.width / 2, l = i.info.show_pic_msg.height / 2;
        n.drawImage(i.show_pic, 16, 16, o, l), n.beginPath(), n.setFontSize(16 * a), n.setFillStyle("#F0F0F0"), 
        n.setGlobalAlpha(.5), n.fillRect(o + 16, 16, o - 32, l), n.setGlobalAlpha(1), n.setFillStyle("#22b597"), 
        n.setTextAlign("center"), n.fillText(i.info.text.cate, (o - 32) / 2 + 16 + o, l / 3 + 16), 
        n.setFillStyle("#22b597"), n.setTextAlign("center"), n.fillText(i.info.text.phone, (o - 32) / 2 + 16 + o, l * (2 / 3) + 16), 
        n.setFillStyle("#333333"), n.setFontSize(18 * a);
        for (var c = i.info.text.title_text, u = e(c), r = Math.ceil(u / 40), h = 1; h <= r; h++) {
            var f = 20 * (h - 1), d = 20 * h, p = c.substring(f, d), g = (s - e(p) / 2 * 16 * a) / 2, g = o;
            n.setTextAlign("center"), n.fillText(p, g, (32 + 20 * h) * a + l);
        }
        for (var w = i.info.text.address, _ = e(w), r = Math.ceil(_ / 40), h = 1; h <= r; h++) {
            var f = 20 * (h - 1), d = 20 * h, x = w.substring(f, d), g = (s - e(x) / 2 * 16 * a) / 2, g = o;
            n.setTextAlign("center"), n.setFillStyle("#999999"), n.setFontSize(14 * a), n.fillText(x, g, (50 + 20 * h) * a + l);
        }
        var m = s / 3, v = (20 * h + 50) * a + l + 16 * a;
        n.drawImage(i.qr_pic, m, v, m, m), n.setFillStyle("#333333");
        n.setFontSize(14 * a), n.setTextAlign("center"), n.fillText("长按识别小程序，查看更多商家详情", o, v + m + 30 * a), 
        n.setFillStyle("#999999"), n.setFontSize(13 * a), n.setTextAlign("center");
        var F = "分享来自 " + i.info.text.wechat_text;
        n.fillText(F, o, v + m + 56 * a), t.setData({
            c_h: v + m + 56 * a + 30
        }), n.save(), n.draw(), setTimeout(function() {
            wx.canvasToTempFilePath({
                canvasId: "myCanvas",
                fileType: "jpg",
                success: function(e) {
                    t.setData({
                        imgurl: e.tempFilePath,
                        cavhide: !0,
                        imghide: !1,
                        loadhide: !1
                    });
                }
            });
        }, 3e3);
    },
    savePic: function() {
        var t = this;
        wx.saveImageToPhotosAlbum({
            filePath: t.data.imgurl,
            success: function(t) {
                "saveImageToPhotosAlbum:ok" == t.errMsg && wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "请前往开启保存到相册权限!",
                    success: function(t) {
                        t.confirm ? wx.openSetting({
                            success: function(t) {
                                console.log(t);
                            }
                        }) : t.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    onShow: function(t) {},
    goHome: function() {
        var t = "/pages/tel-directory/index/index";
        wx.switchTab({
            url: t,
            fail: function(e) {
                1 == s.duoguan_app_is_superhome ? wx.switchTab({
                    url: s.duoguan_app_index_path,
                    fail: function(e) {
                        wx.navigateTo({
                            url: t
                        });
                    }
                }) : wx.navigateTo({
                    url: t
                });
            }
        });
    }
});
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return e.replace(/[\u0391-\uFFE5]/g, "aa").length;
}

function i(e) {
    var t = /[\u4E00-\u9FA5]/g, i = e.match(t);
    return null !== i ? i.length : 0;
}

e(require("../../../utils/util"));

var a = e(require("../../../utils/requestUtil")), n = (e(require("../../../utils/underscore")), 
require("../../../utils/data")), o = e(n);

e(require("../../../wxParse/wxParse")), getApp();

Page({
    data: {
        loadhide: !0,
        share_title: "",
        share_category: "",
        share_content: "",
        qrcode: ""
    },
    onLoad: function(e) {
        var t = this, i = e.id ? e.id : 513, n = wx.getSystemInfoSync(), s = n.windowWidth, l = n.windowHeight;
        a.default.get(o.default.duoguan_host_api_url + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/share_info.html", {
            id: i,
            ph_width: s
        }, function(e) {
            var i = e;
            wx.getImageInfo({
                src: i.wallet_pic,
                success: function(e) {
                    e.width <= 0 || e.height <= 0 ? i.show_pic_msg = {
                        width: s,
                        height: s
                    } : i.show_pic_msg = {
                        width: e.width,
                        height: e.height
                    };
                },
                fail: function(e) {
                    i.show_pic_msg = {
                        width: s,
                        height: s
                    };
                },
                complete: function() {
                    i.wallet_pic = i.wallet_pic + s, i.qr_pic = o.default.duoguan_host_api_url + i.qr_pic, 
                    t.setData({
                        info: i,
                        phone_width: s,
                        phone_height: l
                    }), t.getImg();
                }
            });
        }), this.setData({
            options: e
        });
    },
    getImg: function() {
        var e = this, t = e.data.info;
        wx.downloadFile({
            url: t.wallet_pic,
            success: function(i) {
                200 == i.statusCode && e.setData({
                    wallet_pic: i.tempFilePath
                }), wx.downloadFile({
                    url: t.qr_pic,
                    success: function(t) {
                        200 == t.statusCode && (e.setData({
                            qr_pic: t.tempFilePath
                        }), e.canvasposter());
                    }
                });
            }
        });
    },
    onReady: function() {},
    canvasposter: function() {
        var e = this, a = e.data, n = a.phone_width, o = a.phone_height, s = n / 375, l = wx.createCanvasContext("myCanvas");
        l.beginPath();
        e.setData({
            c_w: n,
            c_h: o
        }), l.setFillStyle("#27d099"), l.fillRect(0, 0, n, o / 2), l.setFillStyle("#ffffff"), 
        l.setFontSize(16 * s);
        var u = a.info.user.nickname, c = 0;
        void 0 != u && (c = parseInt(t(u)));
        c > 12 && (u = i(u) >= 4 ? u.substring(0, 6) + "..." : u.substring(0, 11) + "..."), 
        0 == c && (u = "");
        var r = a.info.wallet_id;
        if (0 == r) var f = "动态：", h = u + " 推荐给您了一条"; else var f = "红包：", h = u + " 推荐给您了一个";
        var d = n / 40 * 2, g = o / 2 / 5;
        l.fillText(h, d, g);
        var w = n / 42 * {
            12: 13,
            13: 14,
            14: 15,
            15: 16,
            16: 17,
            17: 18,
            18: 19,
            19: 20,
            20: 21,
            21: 22,
            22: 22.5,
            23: 23.5,
            24: 24.5,
            25: 25,
            26: 25,
            27: 27,
            28: 28,
            29: 28,
            30: 28,
            31: 30
        }[t(h)];
        l.setFontSize(20 * s), l.fillText(f, w, g);
        var p = a.info.category.title, _ = "#" + p + "#", v = t(p);
        if (1 == v) m = 50; else var m = 40 + 10 * v;
        if (l.setStrokeStyle("#ffffff"), l.setLineCap("round"), l.setLineWidth(n / 8), l.moveTo(n / 42 * 5, o / 5), 
        l.lineTo(m, o / 5), l.stroke(), l.setFillStyle("#27D099"), l.setFontSize(18 * s), 
        l.fillText(_, n / 42 * 2 + 10, o / 5 + 6), l.setFillStyle("#ffffff"), l.setFontSize(16 * s), 
        0 != r) {
            var x = a.wallet_pic;
            l.drawImage(x, n / 4 * 3, o / 13, n / 4.5, n / 4.5);
        }
        var F = a.info.content;
        if (t(F) > 40) {
            var T = F.substring(0, 20), S = F.substring(20, 38) + "...";
            l.fillText(T, n / 40 * 2, o / 2 / 9 * 6), l.fillText(S, n / 40 * 2, o / 2 / 9 * 7);
        } else l.fillText(F, n / 40 * 2, o / 2 / 9 * 6);
        l.setFillStyle("#ffffff"), l.fillRect(0, o / 2, n, o / 2), l.setFillStyle("black");
        l.setFontSize(15 * s), l.fillText("长按识别小程序，查看更多内容", n / 40 * 2, o / 2 + o / 9);
        var y = a.info.public_name;
        t(y) > 20 && (y = y.substring(0, 10)), l.setFillStyle("#808080");
        var q = "分享来自 " + y;
        l.setFontSize(14 * s), l.fillText(q, n / 40 * 2, o / 2 + o / 9 * 1.5), console.log(a.qr_pic);
        var I = n / 10 * 7, b = o / 2 + o / 14, P = n / 4;
        l.drawImage(a.qr_pic, I, b, P, P), l.save(), l.draw(), setTimeout(function() {
            wx.canvasToTempFilePath({
                canvasId: "myCanvas",
                fileType: "jpg",
                success: function(t) {
                    e.setData({
                        imgurl: t.tempFilePath,
                        cavhide: !0,
                        imghide: !1,
                        loadhide: !1
                    });
                }
            });
        }, 3e3);
    },
    savePic: function() {
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: e.data.imgurl,
            success: function(e) {
                "saveImageToPhotosAlbum:ok" == e.errMsg && wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.showModal({
                    title: "提示",
                    content: "请前往开启保存到相册权限!",
                    success: function(e) {
                        e.confirm ? wx.openSetting({
                            success: function(e) {
                                console.log(e);
                            }
                        }) : e.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    onShow: function(e) {},
    goHome: function() {
        var e = "../index/index";
        wx.switchTab({
            url: e,
            fail: function(t) {
                1 == n.duoguan_app_is_superhome ? wx.switchTab({
                    url: n.duoguan_app_index_path,
                    fail: function(t) {
                        wx.navigateTo({
                            url: e
                        });
                    }
                }) : wx.navigateTo({
                    url: e
                });
            }
        });
    }
});
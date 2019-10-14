function t(t) {
    return t.replace(/[\u0391-\uFFE5]/g, "aa").length;
}

getApp(), require("../../../utils/util");

var e = require("../../../utils/requestUtil"), a = (require("../../../utils/underscore"), 
require("../../../utils/data"));

require("../../../wxParse/wxParse.js");

Page({
    data: {
        loadhide: !0,
        tuan_info: "",
        goods_pic: "",
        head_pic: "",
        qrcode: ""
    },
    onLoad: function(t) {
        this.setData({
            options: t
        });
    },
    initplacard: function(t) {
        var n = this;
        wx.getStorageSync("user_info");
        e.get(a.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/shareInfo.html", {
            tid: t.tid
        }, function(t) {
            n.setData({
                tuan_info: t
            }), n.getImg();
        }, this, {
            isShowLoading: !1
        });
        n.data;
    },
    getImg: function() {
        var t = this;
        wx.getStorageSync("user_info");
        wx.downloadFile({
            url: t.data.tuan_info.g_img,
            success: function(e) {
                200 == e.statusCode && (t.setData({
                    goods_pic: e.tempFilePath
                }), wx.downloadFile({
                    url: a.duoguan_host_api_url + "/index.php/addon/DuoguanTuan/Api/qrcode.html?tid=" + t.data.options.tid + "&utoken=" + wx.getStorageSync("utoken") + "&token=" + a.duoguan_user_token,
                    success: function(e) {
                        t.setData({
                            qrcode: e.tempFilePath
                        }), wx.downloadFile({
                            url: t.data.tuan_info.headimgurl,
                            success: function(e) {
                                t.setData({
                                    head_pic: e.tempFilePath
                                }), t.canvasposter();
                            },
                            fail: function() {
                                t.canvasposter();
                            }
                        });
                    }
                }));
            }
        });
    },
    onReady: function() {},
    canvasposter: function() {
        var e = this, a = (wx.getStorageSync("user_info"), wx.getSystemInfoSync()), n = a.screenWidth, i = n / 375, o = wx.createCanvasContext("myCanvas");
        o.beginPath();
        var s = n / 2;
        o.setFillStyle("#ffffff"), o.fillRect(0, 0, n, 3 * s), e.setData({
            c_w: a.windowWidth,
            c_h: 3 * s
        }), wx.getImageInfo({
            src: e.data.goods_pic,
            success: function(a) {
                var l = n, u = a.height / (a.width / l);
                console.log(l, u), o.drawImage(e.data.goods_pic, 0, 0, l, u), u > .6 * l && (o.setFillStyle("#ffffff"), 
                o.fillRect(0, .6 * l, n, 3 * s - .6 * l), u = .6 * l);
                var c = 50 * i, r = 50 * i;
                o.arc(50 * i, u + 8 * i, 28 * i, 0, 2 * Math.PI), o.setFillStyle("#ffffff"), o.fill(), 
                o.drawImage(e.data.head_pic, 25 * i, u - 17 * i, c, r);
                var f = e.data.tuan_info.nickname + "邀您参与拼团!";
                t(f);
                o.setFontSize(16 * i), o.setFillStyle("#000000"), o.fillText(f, 76 * i, u + 20 * i);
                var d = e.data.tuan_info.g_description, g = d.length;
                o.setFillStyle("#999999"), o.setFontSize(14 * i);
                for (var h = Math.floor((n - 60 * i) / (14 * i)), p = 0, _ = "", w = 0; w < g; w++) {
                    if (_ += d.substring(w, w + 1), t(_) / 2 > h - 5 && p >= 1) {
                        _ += "...", o.fillText(_, 25 * i, u + 50 * i + 22 * p * i), p++;
                        break;
                    }
                    p < 2 && t(_) >= 2 * h && (console.log(t(_)), o.fillText(_, 25 * i, u + 50 * i + 22 * p * i), 
                    p++, _ = "");
                }
                p <= 0 && _.length > 0 && (console.log(t(_)), o.fillText(_ + "...", 25 * i, u + 50 * i + 22 * p * i)), 
                0 == p && (p = 1);
                var x = u + 50 * i + 22 * p * i, m = e.data.tuan_info.g_name, v = t(m);
                o.setFontSize(18 * i), o.setFillStyle("#333333");
                for (var S = Math.ceil(v / 20), w = 1; w <= S; w++) {
                    var F = 10 * (w - 1), T = 10 * w;
                    if (w < 2) {
                        y = m.substring(F, T);
                        o.fillText(y, 25 * i, x + w * (20 * i));
                    } else if (3 == w) {
                        var y = m.substring(F, F + 6);
                        o.fillText(y + "...", 25 * i, x + w * (16 * i));
                    }
                }
                S > 2 && (S = 2), x += w * (16 * i);
                var P = "￥ " + e.data.tuan_info.tuan_price;
                t(P);
                o.setFontSize(18 * i), o.setFillStyle("#ff0000"), o.fillText(P, 25 * i, x + 10 * i), 
                o.setFontSize(14 * i);
                var I = e.data.tuan_info.tuan_num + "人团";
                o.setFillStyle("#333333"), o.fillText(I, 110 * i, x + 10 * i);
                t("长按识别二维码");
                o.setFontSize(14 * i), o.setFillStyle("#333333"), o.fillText("长按识别二维码", 25 * i, x + 30 * i), 
                o.setFontSize(20 * i), o.fillText("→", 25 * i + 100 * i, x + 34 * i), x += 50 * i, 
                o.drawImage(e.data.qrcode, n - 10 * i - 140 * i, u + 50 * i + 22 * p * i, 115 * i, 115 * i);
                var q = u + 50 * i + 22 * p * i + 140 * i;
                o.save(), o.draw(), setTimeout(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "myCanvas",
                        height: q,
                        fileType: "jpg",
                        success: function(t) {
                            console.log(t.tempFilePath), e.setData({
                                imgurl: t.tempFilePath,
                                cavhide: !0,
                                imghide: !1,
                                loadhide: !1
                            });
                        }
                    });
                }, 3e3);
            }
        });
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
    onShow: function(t) {
        this.initplacard(this.data.options);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goHome: function() {
        var t = "";
        0 == a.duoguan_app_is_superhome ? t += "/pages/tuan/index/index" : t += a.duoguan_app_index_path, 
        wx.switchTab({
            url: t,
            fail: function() {
                wx.navigateTo({
                    url: t
                });
            }
        });
    }
});
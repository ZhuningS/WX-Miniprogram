var e = require("../../core/network.js"), a = require("../../core/api.js"), t = require("../../core/sys.js"), o = require("../../foundation/base/model.js"), i = require("../../foundation/base/page.js"), n = require("../../utils/imageColor.js"), r = require("../../foundation/loader/image-loader.js"), s = require("../../libs/pako/base64.js"), d = require("../../libs/jpeg-js/index.js"), l = {
    init: "init",
    invoke: "invoke",
    permit: "permit",
    deny: "deny"
};

i({
    pageActionConfig: require("./main.pageaction.js"),
    data: {
        phoneModel: t.phoneModel(),
        main: {},
        navigationbarColor: "transparent",
        screenHeight: t.screenHeight,
        scale: 1,
        scrollTop: 0,
        mode: "",
        scrollEnable: "",
        locationAuthStatus: l.init,
        showActionSheet: !1,
        actionSheetItems: [ {
            type: "share",
            content: "分享给朋友"
        }, {
            type: "custom",
            content: "保存品牌名片",
            userInfo: "save-brand-card"
        } ],
        fixBottomViewHeight: 0,
        phoneModelBottomHeight: 0,
        supportInfo: {},
        targetId: "",
        mainBgColor: "#F7F7F7",
        removeFakeCanvas: !1,
        showQrCodeCanvas: !0,
        showPostCanvas: !0,
        suspendedDrawAction: null
    },
    onLoad: function(i) {
        var s = this;
        s.setData({
            phoneModelBottomHeight: "iPhoneX" == t.phoneModel() ? 40 : 0
        }), s.model = o({
            cgi: e.cgiSet.main,
            useCache: !0
        }), s.wxaCodeModel = o({
            cgi: e.cgiSet.getwxacode,
            useCache: !0
        }), i.canvas_id && (s.model.data.canvasId = decodeURIComponent(i.canvas_id)), s.model.data.disableCache = 1 == parseInt(i.disable_cache), 
        s.model.data.searchId = i.searchId || "", s.model.load({
            params: {
                longitude: 0,
                latitude: 0,
                canvas_id: s.model.data.canvasId,
                disable_cache: s.model.data.disableCache
            },
            loading: !0,
            success: function(e) {
                if (e.isCache || !s.model.data.redirect_mall) {
                    if (s.model.data.homepage) {
                        var o = JSON.safeParse(s.model.data.support_info_json);
                        s.handleHomepageData(s.model.data.homepage);
                        var i = s.model.data.homepage.header.banner_url ? s.model.data.homepage.header.banner_url : s.model.data.homepage.header.logo_url;
                        s.hasProcessHeaderUrl == i && s.data.mainBgColor || (s.hasProcessHeaderUrl = i, 
                        s.headerImgFilePath = "", s.setData({
                            removeFakeCanvas: !1
                        }), s.model.data.homepage.header.banner_url ? r.loadImageForUrl({
                            url: i,
                            getImgaeInfo: !0,
                            success: function(e) {
                                s.loadHeaderImageFail = !1;
                                var t = e.savedFilePath || e.tempFilePath;
                                if (s.headerImgFilePath = t, s.headerImgWidth = e.width, s.headerImgHeight = e.height, 
                                !s.data.removeFakeCanvas) {
                                    var o = a.createCanvasContext("fake-canvas-id");
                                    o.drawImage(t, 0, 0, 4, 30), o.draw(!1, function() {
                                        console.log("context draw ok"), a.canvasGetImageData({
                                            canvasId: "fake-canvas-id",
                                            width: 4,
                                            height: 4,
                                            success: function(e) {
                                                console.log("context get image data ok");
                                                var a = n(e.data, 4, 4), t = a.r, o = a.g, i = a.b;
                                                a.a;
                                                t = Math.ceil(255 * t), o = Math.ceil(255 * o), i = Math.ceil(255 * i), s.imageColor = "rgba(" + t + ", " + o + ", " + i + ", 1)", 
                                                console.log("imageColor: ", s.imageColor), s.setData({
                                                    mainBgColor: s.imageColor,
                                                    mainBgGradient: "linear-gradient(to bottom, rgba(" + t + ", " + o + ", " + i + ", 1), rgba(" + t + ", " + o + ", " + i + ", 0))",
                                                    removeFakeCanvas: !0
                                                });
                                            }
                                        });
                                    });
                                }
                                s.checkSuspendedDrawAction(!0);
                            },
                            fail: function(e) {
                                s.loadHeaderImageFail = !0, s.checkSuspendedDrawAction(!1);
                            }
                        }) : (s.imageColor = "transparent", s.setData({
                            mainBgColor: s.imageColor,
                            mainBgGradient: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
                        }))), s.setData({
                            main: s.model.data.homepage,
                            actionSheetTitle: "",
                            supportInfo: o,
                            headerUrl: i,
                            hasError: !1
                        }, function() {
                            s.data.fixBottomViewHeight || a.createSelectorQuery().select("#fixBottomView").boundingClientRect(function(e) {
                                console.log("#fixBottomView: ", e), e.top < t.screenHeight ? s.setData({
                                    fixBottomViewHeight: t.screenHeight - e.top + s.data.phoneModelBottomHeight
                                }) : s.setData({
                                    fixBottomViewHeight: s.data.phoneModelBottomHeight
                                });
                            }).exec();
                        }), s.onScrollToTarget();
                    }
                    e.isCache || (s.loadQrCodeImage(), s.loadShareImage());
                } else a.redirectTo({
                    url: "/portal/index/index"
                });
            },
            fail: function(e) {
                s.setData({
                    hasError: !0
                });
            }
        }), s.pageScrollTop = 0, s.scaleAnimation = a.createAnimation({
            duration: 300,
            transformOrigin: NaN
        }), "order-detail" === i.from && s.setData({
            targetId: "section-TYPE_CONTACT"
        });
    },
    loadQrCodeImage: function() {
        var e = this;
        e.setData({
            showQrCodeCanvas: !0
        }, function() {
            e.wxaCodeModel.load({
                params: {
                    appid: t.appid(),
                    page: "portal/main/main",
                    scene: "0",
                    width: 280
                },
                success: function(o) {
                    if (console.log("load qrcode success"), e.loadQrCodeImageFail = !1, !e.hasHandledQrCode) {
                        e.hasHandledQrCode = !0;
                        for (var i = new s().decode(e.wxaCodeModel.data.wxa_code_base64), n = i.length, r = new Uint8Array(new ArrayBuffer(n)), l = 0; l < n; l++) r[l] = i.charCodeAt(l);
                        var c = d.decode(r, !0);
                        if ("ios" === t.platform && t.wechatVersion() < parseInt("16070300", 16)) for (var h = void 0, g = void 0, m = void 0, u = c.height, p = c.width, f = p / 2, v = 0; v < u; v++) for (var I = 0; I < f; I++) {
                            h = (v << 2) * p + (I << 2), g = (v + 1 << 2) * p - (I + 1 << 2);
                            for (var C = 0; C < 4; C++) m = c.data[h + C], c.data[h + C] = c.data[g + C], c.data[g + C] = m;
                        }
                        var w = new Uint8ClampedArray(c.data);
                        a.canvasPutImageData({
                            canvasId: "qrcode-canvas-id",
                            data: w,
                            width: c.width,
                            height: c.height,
                            success: function() {
                                console.log("draw qrcode success"), a.canvasToTempFilePath({
                                    canvasId: "qrcode-canvas-id",
                                    success: function(a) {
                                        e.qrCodeImgFilePath = a.tempFilePath, console.log("save qrcode to image success: ", e.qrCodeImgFilePath), 
                                        e.setData({
                                            showQrCodeCanvas: !1
                                        }), e.checkSuspendedDrawAction(!0);
                                    },
                                    fail: function() {
                                        e.loadQrCodeImageFail = !0, e.hasHandledQrCode = !1, e.checkSuspendedDrawAction(!1);
                                    }
                                });
                            },
                            fail: function() {
                                e.loadQrCodeImageFail = !0, e.hasHandledQrCode = !1, e.checkSuspendedDrawAction(!1);
                            }
                        });
                    }
                },
                fail: function(a) {
                    e.loadQrCodeImageFail = !0, e.checkSuspendedDrawAction(!1);
                }
            });
        });
    },
    loadLogoImage: function() {
        var e = this, a = e.model.data.homepage.header.logo_url;
        e.hasDownloadIconUrl !== a && r.loadImageForUrl({
            url: a,
            success: function(t) {
                e.loadLogoImageFail = !1, e.logoImgFilePath = t.savedFilePath || t.tempFilePath, 
                e.hasDownloadIconUrl = a, e.checkSuspendedDrawAction(!0);
            },
            fail: function() {
                e.loadLogoImageFail = !0, e.checkSuspendedDrawAction(!1);
            }
        });
    },
    loadShareImage: function() {
        var e = this, a = e.model.data.homepage.header.share_url;
        a && r.loadImageForUrl({
            url: a,
            getImageInfo: !0,
            success: function(a) {
                e.loadShareImageFail = !1, e.shareImageFilePath = a.savedFilePath || a.tempFilePath, 
                e.shareImageWidth = a.width, e.shareImageHeight = a.height, e.checkSuspendedDrawAction(!0);
            },
            fail: function(a) {
                e.loadShareImageFail = !0, e.checkSuspendedDrawAction(!1);
            }
        });
    },
    loadHeaderImage: function() {
        var e = a.model.data.homepage.header.banner_url, a = this;
        r.loadImageForUrl({
            url: e,
            getImageInfo: !0,
            success: function(e) {
                a.loadHeaderImageFail = !1, a.headerImgFilePath = e.savedFilePath || e.tempFilePath, 
                a.headerImgWidth = e.width, a.headerImgHeight = e.height, a.checkSuspendedDrawAction(!0);
            },
            fail: function(e) {
                a.loadHeaderImageFail = !0, a.checkSuspendedDrawAction(!1);
            }
        });
    },
    checkSuspendedDrawAction: function(e) {
        var t = this, o = t.data.suspendedDrawAction;
        o && o.action && (e ? o.action(o.options) : (a.hideLoading(), a.showToast({
            title: "保存失败",
            image: "/assets/load_fail.png"
        })), t.data.suspendedDrawAction = null);
    },
    onShow: function() {
        var e = this;
        e.checkAuthorization({
            complete: function() {
                console.log("授权检查成功"), e.data.locationAuthStatus == l.permit ? e.tryGetLocation() : e.data.hasError && e.reloadData({
                    longitude: 0,
                    latitude: 0,
                    loading: !0
                });
            }
        });
    },
    onClickHeader: function(e) {
        var t = e.currentTarget.dataset, o = (t.index, t.data);
        if (console.log("[main]onClickHeader: ", o), "TYPE_BRAND_CARD" === o.type) {
            var i = JSON.stringify(e.currentTarget.dataset.data);
            a.navigateTo({
                url: "/portal/card/card?data=" + encodeURIComponent(i) + "&canvas_id=" + encodeURIComponent(this.model.data.canvasId || "") + "&disable_cache=" + (this.model.data.disableCache || "false")
            });
        }
        if ("TYPE_NEW_PRODUCT" === o.type) {
            var n = JSON.stringify(e.currentTarget.dataset.data), r = "/portal/new-product/new-product?from=main&data=" + encodeURIComponent(n) + "&has_mall=" + (this.data.main.header.has_mall ? 1 : 0);
            a.navigateTo({
                url: r
            });
        }
        if ("TYPE_MP_ARTICLE" === o.type && a.navigateTo({
            url: "/portal/news/news"
        }), "TYPE_WXAPP" === o.type) {
            a.navigateTo({
                url: "/portal/weapp/weapp?from=main"
            });
        }
        if ("TYPE_ADDRESS" === o.type && a.navigateTo({
            url: "/portal/address/address?from=main"
        }), "TYPE_MANAGE_PRODUCT" === o.type) {
            var s = encodeURIComponent(JSON.stringify(o)), d = encodeURIComponent(this.data.main.header.nickname || ""), l = encodeURIComponent(this.data.main.header.logo_url || ""), c = this.model.data.searchId, h = this.model.data.biz_username, g = this.genScopes();
            a.navigateTo({
                url: "/portal/manage-product-list-slider/manage-product-list-slider?data=" + s + "&brandName=" + d + "&businessScope=" + g + "&brandIcon=" + l + "&searchId=" + c + "&username=" + h
            });
        }
    },
    getBrandCard: function() {
        var e = null;
        return this.data.main.data.forEach(function(a) {
            "TYPE_BRAND_CARD" === a.type && (e = a);
        }), e;
    },
    genScopes: function() {
        var e = this.getHomePageDataForType("TYPE_BRAND_CARD").brand_card[0], a = e.business_scope;
        return e.business_scopes && e.business_scopes.length && (a = e.business_scopes.map(function(e) {
            return e && e.items.length && e.items[e.items.length - 1] ? e.items[e.items.length - 1].name : "";
        }).filter(function(e) {
            return e && e.length;
        }).join("/")), a;
    },
    onClickBoutique: function() {
        a.navigateTo({
            url: "/portal/index/index"
        });
    },
    onClickContact: function() {
        this.setData({
            showActionSheet: !0
        });
    },
    onClickActionSheet: function(e) {
        var a = e.detail, t = (a.index, a.type, a.content, this);
        "save-brand-card" == a.userinfo && t.onClickSaveBrandCard();
    },
    onClickSaveBrandCard: function() {
        var e = this;
        a.showLoading({
            title: "生成中",
            mask: !0
        }), e.setData({
            showPostCanvas: !0
        }, function() {
            console.log("show postCanvas complete, try authorize"), a.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    console.log("authorize success, try drawPostImage"), e.drawPostImage({
                        complete: function(a) {
                            console.log("drawPostImage complete, try savePostImage"), e.savePostImage({
                                complete: function(a) {
                                    console.log("savePostImage complete, hide postCanvas"), e.setData({
                                        showPostCanvas: !1
                                    });
                                }
                            });
                        }
                    }), setTimeout(function(t) {
                        e.data.showPostCanvas && a.hideLoading();
                    }, 1e4);
                },
                fail: function() {
                    a.hideLoading();
                    var t = a.getStorageSync("firstTips");
                    void 0 === t && (t = 0), 1 & t ? e.setData({
                        modal: {
                            userinfo: "authSavePhotosModal",
                            content: "已拒绝授权，是否前往设置中修改",
                            show: !0,
                            showCancel: !0,
                            openType: "openSetting",
                            cancel: "cancelModal",
                            confirm: "confirmModal"
                        }
                    }) : (t |= 1, a.setStorage({
                        key: "firstTips",
                        data: t
                    }), a.showToast({
                        title: "保存失败",
                        image: "/assets/load_fail.png"
                    }));
                }
            });
        });
    },
    drawPostImage: function(e) {
        var o = this, i = o.model.data.homepage.header.banner_url, n = o.model.data.homepage.header.share_url;
        if (n && !o.shareImageFilePath || !n && i && !o.headerImgFilePath || !o.logoImgFilePath || !o.qrCodeImgFilePath) return console.log("resources not ready, suspendedDrawAction"), 
        o.data.suspendedDrawAction = {
            action: o.drawPostImage,
            options: e
        }, o.loadHeaderImageFail && (console.log("reloadHeaderImage"), o.loadHeaderImage()), 
        o.loadLogoImageFail && (console.log("reloadLogoImage"), o.loadLogoImage()), o.loadQrCodeImageFail && (console.log("reloadQrCode"), 
        o.loadQrCodeImage()), void (o.loadShareImageFail && (console.log("reloadShareImage"), 
        o.loadShareImage()));
        console.log("start");
        var r = a.createCanvasContext("post-canvas-id"), s = t.screenWidth / 375, d = o.getHomePageDataForType("TYPE_BRAND_CARD").brand_card[0].brand_desc;
        r.save(), r.setTextBaseline("middle"), r.setLineWidth(.3), r.setFillStyle("white"), 
        r.fillRect(0, 0, t.screenWidth, 625 * s), r.setFontSize(14);
        var l = o.testLineNumber(r, d, 311 * s), c = 0, h = 0;
        if (l <= 2 ? h = i ? 72 : 38 : i || (h = 18), h *= s, o.headerImgFilePath) if (o.shareImageFilePath) {
            var g = s * (l > 2 ? 312 : 375), m = t.screenWidth / g, u = o.shareImageWidth / m;
            r.drawImage(o.shareImageFilePath, 0, 0, o.shareImageWidth, u, 0, 0, t.screenWidth, g);
        } else {
            var p = s * (l > 2 ? 312 : 375), f = t.screenWidth / p, v = f * o.headerImgHeight, I = (o.headerImgWidth - v) / 2;
            if (I >= 0) r.drawImage(o.headerImgFilePath, I, 0, v, o.headerImgHeight, 0, 0, t.screenWidth, p); else {
                var C = o.headerImgWidth / f, w = (o.headerImgHeight - C) / 2;
                r.drawImage(o.headerImgFilePath, 0, w, o.headerImgWidth, C, 0, 0, t.screenWidth, p);
            }
        } else c -= 292 * s;
        var P = 32 * s, T = 330 * s + c + h, _ = 20 * s;
        r.drawImage(o.logoImgFilePath, P, T, _, _);
        var F = 60 * s, S = 340 * s + c + h;
        r.save(), r.setFontSize(15), r.font = "normal bold 15px sans-serif", r.setFillStyle("rgba(0, 0, 0, 0.9)"), 
        r.fillText(o.data.main.header.nickname, F, S), r.restore();
        var D = o.getHomePageDataForType("TYPE_BRAND_CARD").brand_card[0], b = P, A = 375 * s + c + h, y = 311 * s;
        r.save(), r.font = "14px sans-serif", r.setFontSize(14), r.setFillStyle("rgba(0, 0, 0, 0.9)");
        o.drawMultipleLine(r, D.brand_desc, b, A, y, 22.4);
        r.restore(), r.save(), r.setFillStyle("rgba(0, 0, 0, 0.3)");
        var k = P, x = 524 * s + c;
        r.setFontSize(12), r.fillText("成立时间", k, x);
        var H = 88 * s, E = x - 6;
        r.moveTo(H, E), r.lineTo(H, E + 12), r.setStrokeStyle("rgba(0, 0, 0, 0.3)"), r.closePath(), 
        r.stroke();
        var M = 97 * s, B = x;
        r.fillText(D.established_time, M, B), E += 28 * s, B = x += 28 * s, r.fillText("成立地点", k, x), 
        r.beginPath(), r.moveTo(H, E), r.lineTo(H, E + 12), r.closePath(), r.stroke(), r.fillText(D.established_location, M, B), 
        E += 28 * s, B = x += 28 * s, r.fillText("经营范围", k, x), r.beginPath(), r.moveTo(H, E), 
        r.lineTo(H, E + 12), r.closePath(), r.stroke();
        var R = this.genScopes();
        R.length > 13 && (R = R.slice(0, 12) + "..."), r.fillText(R, M, B), r.restore();
        var L = x + 37 * s, N = 259 * s, U = 508 * s + c;
        r.setFillStyle("white"), "ios" == t.platform && t.wechatVersion() < parseInt("16070300", 16) ? (r.translate(N, U), 
        r.rotate(Math.PI), r.translate(-84, -84), r.drawImage(o.qrCodeImgFilePath, 0, 0, 84, 84), 
        console.log("rotate Image")) : r.drawImage(o.qrCodeImgFilePath, N, U, 84, 84);
        var q = i ? L + 10 : 375 * s;
        o.setData({
            postCanvasHeight: q
        }, function() {
            console.log("set postCanvasHeight complete"), r.draw(!1, function() {
                console.log("draw postCanvas complete"), e.complete && e.complete();
            });
        }), r.restore();
    },
    savePostImage: function(e) {
        var o = this;
        a.canvasToTempFilePath({
            canvasId: "post-canvas-id",
            success: function(t) {
                a.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function() {
                        a.showToast({
                            title: "已保存至相册",
                            icon: "success",
                            duration: 500
                        });
                    },
                    fail: function() {
                        a.showToast({
                            title: "保存失败",
                            image: "/assets/load_fail.png"
                        });
                    },
                    complete: function() {
                        e.complete && e.complete();
                    }
                });
            },
            fail: function() {
                "android" != t.platform || e.haveFailed ? a.showToast({
                    title: "保存失败",
                    image: "/assets/load_fail.png"
                }) : (e.haveFailed = !0, o.savePostImage(e)), e.complete && e.complete();
            }
        });
    },
    drawMultipleLine: function(e, a, t, o, i, n) {
        for (var r = a.split(""), s = "", d = 0; d < r.length; d++) {
            var l = s + r[d], c = e.measureText(l);
            d > 0 && (c.width > i || "\n" == r[d - 1]) ? (e.fillText(s, t, o), s = r[d], o += n) : s = l;
        }
        return e.fillText(s, t, o), o;
    },
    testLineNumber: function(e, a, t) {
        for (var o = a.split(""), i = "", n = 0, r = 0; r < o.length; r++) {
            var s = i + o[r], d = e.measureText(s);
            r > 0 && (d.width > t || "\n" == o[r - 1]) ? (i = o[r], n++) : i = s;
        }
        return i.length > 0 && n++, n;
    },
    hideActionSheet: function() {
        this.setData({
            showActionSheet: !1
        });
    },
    cancelModal: function(e) {
        "authSavePhotosModal" == e.detail.userinfo && a.showToast({
            title: "保存失败",
            image: "/assets/load_fail.png"
        }), this.setData({
            modal: {
                show: !1
            }
        });
    },
    confirmModal: function(e) {
        this.setData({
            modal: {
                show: !1
            }
        });
    },
    onClickManageBanner: function(e) {
        var t = e.detail.data, o = encodeURIComponent(JSON.stringify(t));
        a.navigateTo({
            url: "/portal/manage-product-list/manage-product-list?data=" + o
        });
    },
    onClickManageProduct: function(e) {
        var t = e.detail, o = t.item, i = (t.jumpMall, encodeURIComponent(JSON.stringify(o)));
        a.navigateTo({
            url: "/portal/manage-product/manage-product?item=" + i
        });
    },
    onPageScroll: function(e) {
        var a = (this.imageColor && e.scrollTop > 10 ? "#F7F7F7" : this.imageColor) || "#F7F7F7", o = "iPhoneX" == t.phoneModel() ? 88 : 64, i = this.data.main, n = t.screenWidth / 375 * (i.header.disable_mall || !i.header.has_mall && !i.header.jump_wxapp.appid ? 209 : 261) - o;
        n < 0 && (n = o), e.scrollTop >= n ? this.setData({
            navigationbarColor: "#F7F7F7",
            titleImg: this.data.main.header.logo_url,
            hideTitleImg: !1,
            targetId: "",
            mainBgColor: a
        }) : this.setData({
            navigationbarColor: "transparent",
            hideTitleImg: !0,
            targetId: "",
            mainBgColor: a
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        e.request({
            cgi: e.cgiSet.main,
            params: {
                longitude: 0,
                latitude: 0
            },
            success: function(e) {
                e && e.homepage && a.setData({
                    main: e.homepage
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/portal/main/main",
            title: this.data.main.header.nickname + "微主页"
        };
    },
    onLongPressContact: function(e) {
        a.navigateTo({
            url: "/portal/debug/debug"
        });
    },
    checkAuthorization: function(e) {
        var t = this;
        a.getSetting({
            success: function(a) {
                if (a && a.authSetting) {
                    console.log("main check auth", a);
                    var o = l.init;
                    "scope.userLocation" in a.authSetting && (o = a.authSetting["scope.userLocation"] ? l.permit : l.deny), 
                    t.setData({
                        locationAuthStatus: o
                    }), e.complete && e.complete();
                }
            }
        });
    },
    tryGetLocation: function() {
        var e = this;
        a.getLocation && a.getLocation({
            type: "wgs84",
            success: function(a) {
                if (a) {
                    var t = a.latitude || 0, o = a.longitude || 0;
                    e.reloadData({
                        latitude: t,
                        longitude: o,
                        updateLocation: !0
                    });
                }
            },
            fail: function(a) {
                var t = a.errMsg || "";
                (t.includes("auth deny") || t.includes("auth denied")) && e.setData({
                    locationAuthStatus: l.deny
                });
            }
        });
    },
    reloadData: function(e) {
        var a = this, t = {
            latitude: e.latitude,
            longitude: e.longitude,
            disable_cache: a.model.data.disableCache,
            canvas_id: a.model.data.canvasId
        }, o = e.updateLocation;
        a.model && a.model.load({
            params: t,
            skipCache: !0,
            loading: e.loading,
            success: function(e) {
                a.model.data.homepage ? (a.handleHomepageData(a.model.data.homepage), a.setData({
                    main: a.model.data.homepage,
                    locationAuthStatus: o ? l.permit : a.data.locationAuthStatus,
                    hasError: !1
                })) : a.setData({
                    hasError: !0
                });
            },
            fail: function(e) {
                a.setData({
                    hasError: !0
                });
            }
        });
    },
    handleHomepageData: function(e) {
        var a = this;
        if (e && e.data) {
            e.header && ("disable_mall" in e.header || (e.header.disable_mall = !1), "jump_wxapp" in e.header || (e.header.jump_wxapp = {
                username: "",
                appid: "",
                path: ""
            }));
            var t = !0, o = !1, i = void 0;
            try {
                for (var n, r = e.data[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                    var s = n.value;
                    if ("TYPE_NEW_PRODUCT" === s.type && (s.product_items = this.filterInvalidNewProduct(s.product_items)), 
                    "TYPE_CONTACT" === s.type && (s.no_detail = !0), "TYPE_SERVICE" === s.type && (s.no_detail = !0), 
                    "TYPE_MANAGE_PRODUCT" === s.type && s.manage_products.forEach(function(e) {
                        e.releaseTimeTips = e.release_time + "上市";
                    }), "TYPE_CONTACT" === s.type) {
                        var d = s.contact_items[0];
                        !d || "has_kefu" in d || (d.has_kefu = !0);
                    }
                }
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !t && r.return && r.return();
                } finally {
                    if (o) throw i;
                }
            }
            a.loadLogoImage();
        }
    },
    getHomePageDataForType: function(e) {
        var a = this.data.main;
        if (!a) return null;
        var t = !0, o = !1, i = void 0;
        try {
            for (var n, r = a.data[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                var s = n.value;
                if (s.type == e) return s;
            }
        } catch (e) {
            o = !0, i = e;
        } finally {
            try {
                !t && r.return && r.return();
            } finally {
                if (o) throw i;
            }
        }
        return null;
    },
    filterInvalidNewProduct: function(e) {
        return e ? e.filter(function(e) {
            return e && "OFFICIAL_JUMPTYPE_WXAPAGE_ITEM_DETAIL" === e.jump_type && e.item_code;
        }).slice(0, 3) : [];
    },
    onScrollToTarget: function() {
        if (this.data.targetId) {
            var e = this;
            a.createSelectorQuery().select("#" + this.data.targetId).boundingClientRect().exec(function(t) {
                (t = t && t.filter(function(e) {
                    return null != e;
                })) && t.length > 0 && (a.pageScrollTo({
                    scrollTop: t[0].top,
                    duration: 250
                }), e.setData({
                    targetId: ""
                }));
            });
        }
    },
    onClickMpArticle: function() {}
});
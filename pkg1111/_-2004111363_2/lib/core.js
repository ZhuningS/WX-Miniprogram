function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
        });
    };
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _addr = require("./addr.js"), _addr2 = _interopRequireDefault(_addr), _lodash = require("./lodash.get.js"), _lodash2 = _interopRequireDefault(_lodash), _utils = require("./utils.js"), _wxParse = require("./wxParse/wxParse.js"), reConnectTimer = null, isConnecting = !1, isFirst = !0, _index = -1, compare = function(e, t) {
    return e.sort < t.sort ? 1 : e.sort > t.sort ? -1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}, pro = {
    choosePro: function(e, t, r, a, n) {
        var o = [], s = [], i = e.pickspecification, u = e.GASDetailList, c = [ i[t], i[t].items[r] ], d = c[0], p = c[1];
        d.items.length > 0 && d.items.forEach(function(e, t) {
            e.id != p.id ? e.sel = !1 : e.sel = !e.sel;
        });
        for (var l, f = 0; l = i[f++]; ) for (var g, h = 0; g = l.items[h++]; ) if (g.sel) {
            var m = [ l.name, g.name ], b = m[0], y = m[1], w = b + ":" + y;
            o.push(g.id), s.push(w);
        }
        e.specId = o.join("_"), e.specInfo = s.join(" "), e.totalCount = 1;
        var v = u.find(function(t) {
            return t.id == e.specId;
        });
        switch (a) {
          case "good":
            e = this.goodSel(v, e);
            break;

          case "miaosha":
            e = this.miaoShaSel(v, e);
            break;

          case "group":
            e = this.groupSel(v, e, n);
        }
        return e.pickspecification[t] = d, e;
    },
    goodSel: function(e, t) {
        return e ? (t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, t.itemPrice = parseFloat(e.price).toFixed(2), 
        t.danMaiPrice = parseFloat(e.price).toFixed(2), t.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2)) : (t.selImg = t.img, 
        t.itemPrice = t.priceStr, t.danMaiPrice = t.priceStr, t.yuanJiaPrice = parseFloat(t.originalPrice).toFixed(2)), 
        t;
    },
    miaoShaSel: function(e, t) {
        return e ? (t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, t.itemPrice = parseFloat(e.discountPrice).toFixed(2), 
        t.danMaiPrice = parseFloat(e.discountPrice).toFixed(2), t.yuanJiaPrice = parseFloat(e.price).toFixed(2)) : (t.itemPrice = t.discountPricestr, 
        t.danMaiPrice = t.discountPricestr, t.selImg = t.img, t.yuanJiaPrice = parseFloat(t.price).toFixed(2)), 
        t;
    },
    groupSel: function(e, t, r) {
        return e ? (t.stock = e.stock, t.selImg = e.imgUrl ? e.imgUrl : t.img, 1 == r ? t.groupPrice = parseFloat(e.groupPrice).toFixed(2) : t.danMaiPrice = parseFloat(e.price).toFixed(2), 
        t.itemPrice = 1 == r ? t.groupPrice : t.danMaiPrice, t.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2)) : (t.selImg = t.img, 
        t.danMaiPrice = t.priceStr, t.yuanJiaPrice = t.originalPrice, t.stock = t.GASDetailList[0].stock, 
        t.groupPrice = t.GASDetailList[0].groupPrice, t.itemPrice = 1 == r ? t.groupPrice : t.danMaiPrice), 
        t;
    },
    addPro: function(e, t, r, a) {
        var n = e.totalCount, o = 0;
        if (e.pickspecification.length) {
            var s = e.GASDetailList.find(function(t) {
                return t.id == e.specId;
            });
            if (void 0 == s) return void tools.ShowToast("请先选择规格", r);
            o = "good" == t ? s.price : "miaosha" == t ? s.discountPrice : 1 == a ? s.groupPrice : s.price, 
            e.stockLimit ? n < s.stock ? n++ : tools.ShowToast("库存不足", r) : n++;
        } else o = "good" == t ? e.price : "miaosha" == t ? e.discountPrice : 1 == Number(a) ? e.EntGroups.GroupPrice.div(100) : e.price, 
        e.stockLimit ? n < e.stock ? n++ : tools.ShowToast("库存不足", r) : n++;
        return {
            count: n,
            price: o
        };
    },
    lessPro: function(e) {
        var t = e.totalCount;
        return t > 1 && t--, t;
    },
    resetPro: function(e, t, r, a) {
        switch (r) {
          case "good":
            e.itemPrice = parseFloat(e.priceStr).toFixed(2), e.danMaiPrice = parseFloat(e.priceStr).toFixed(2), 
            e.yuanJiaPrice = parseFloat(e.originalPrice).toFixed(2);
            break;

          case "miaosha":
            e.itemPrice = parseFloat(e.discountPricestr).toFixed(2), e.danMaiPrice = parseFloat(e.discountPricestr).toFixed(2), 
            e.yuanJiaPrice = e.priceStr;
            break;

          case "group":
            e.isgroup = Number(a), e.danMaiPrice = e.priceStr, e.yuanJiaPrice = e.EntGroups.OriginalPriceStr, 
            e.groupPrice = e.GASDetailList.length ? e.GASDetailList[0].groupPrice : e.EntGroups.GroupPriceStr, 
            e.itemPrice = 1 == e.isgroup ? e.groupPrice : e.danMaiPrice;
        }
        e.stock = e.stockStr, e.specInfo = "", e.specId = "", e.totalCount = 1, e.display = t, 
        e.priceStr = parseFloat(e.price).toFixed(2);
        for (var n = 0, o = e.pickspecification.length; n < o; n++) for (var s = 0, i = e.pickspecification[n].items.length; s < i; s++) e.pickspecification[n].items[s].sel = !1;
        return e;
    },
    orderPro: function(e, t, r) {
        var a = {}, n = 0, o = 0;
        return a.list = [], "good" == t ? (n = e.itemPrice, o = e.originalPrice) : (n = e.itemPrice, 
        o = e.yuanJiaPrice), a.list.push({
            ImgUrl: e.selImg,
            oldPrice: o,
            SpecInfo: e.specInfo,
            Introduction: e.name,
            discount: e.discount,
            discountPrice: n,
            goodid: e.id,
            Count: e.totalCount,
            type: t
        }), a.goodid = e.id, a.totalCount = e.totalCount, a.totalPrice = e.discountPricestr, 
        a.totalPrice = "good" == t || "miaosha" == t ? e.danMaiPrice : 1 == r ? Number(Number(e.yuanJiaPrice).mul(Number(e.totalCount))).toFixed(2) : e.danMaiPrice, 
        a;
    },
    useCoupon: function(e, t, r) {
        var a = e[r];
        if ("" != a.GoodsIdStr) {
            var n = a.GoodsIdStr.split(","), o = t.filter(function(e, t) {
                return n.includes(e.goodid.toString());
            }), s = 0;
            if (o.length > 0 && o.forEach(function(e) {
                s += (Number(e.discountPrice) || 0).mul(Number(e.Count));
            }), 0 == o.length) return tools.showModal("订单中没有优惠券指定的商品！", !1), null;
            if (a.LimitMoney > 0 && 100 * s < a.LimitMoney) return tools.showModal("指定商品满" + a.Money_fmt + "元才能使用此优惠券！", !1), 
            null;
        }
        return a;
    }
}, tools = {
    updateMiniapp: function() {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(t) {
                    t.confirm && e.applyUpdate();
                }
            });
        }), e.onUpdateFailed(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本下载失败，请手动删除小程序",
                showCancel: !1
            });
        });
    },
    getSystem: function() {
        parseFloat(wx.getSystemInfoSync().SDKVersion) < 1.9 || void 0 == wx.getSystemInfoSync().SDKVersion ? tools.showModal("当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试", !1) : tools.updateMiniapp();
    },
    resetArray: function(e) {
        return Object.assign(e, {
            ispost: !1,
            loadall: !1,
            list: [],
            pageindex: 1
        }), e;
    },
    upload: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "img";
        return new Promise(function(t, r) {
            "img" == e && wx.chooseImage({
                success: function(r) {
                    function a() {
                        tools.showLoading(), wx.uploadFile({
                            url: _addr2.default.Upload,
                            filePath: s[n],
                            name: "file",
                            formData: {
                                filetype: e
                            },
                            success: function(e) {
                                var r = JSON.parse(e.data);
                                r.result ? (n += 1, o.push(r.msg)) : t(""), n < s.length ? a() : t(o);
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        }).onProgressUpdate(function(e) {
                            tools.loading("上传中" + e.progress + "%");
                        });
                    }
                    var n = 0, o = [], s = r.tempFilePaths;
                    a();
                }
            });
        });
    },
    uploadImg: function(e, t) {
        return new Promise(function(r, a) {
            wx.uploadFile({
                url: _addr2.default.Upload,
                filePath: e[t],
                name: "file",
                formData: {
                    filetype: "img"
                },
                success: function(e) {
                    r(e);
                },
                fail: function(e) {
                    r(e);
                },
                complete: function() {}
            }).onProgressUpdate(function(e) {
                tools.loading("上传中" + e.progress + "%");
            });
        });
    },
    pathNav: function() {
        function e(e, r, a, n) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a, n) {
            var o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = _wepy2.default.$instance, s = r.imgurl || r.img, i = n, u = (0, _lodash2.default)(r, "urltype", ""), 
                    e.t0 = (0, _lodash2.default)(o.globalData, "pages", ""), e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getPageSetting();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    if (c = e.t0, "" !== u) {
                        e.next = 14;
                        break;
                    }
                    tools.oldGo(t, r, s, a), e.next = 42;
                    break;

                  case 14:
                    e.t1 = Number(u), e.next = -1 === e.t1 ? 17 : 0 === e.t1 ? 19 : 1 === e.t1 ? 21 : 2 === e.t1 ? 23 : 3 === e.t1 ? 25 : 4 === e.t1 ? 30 : 5 === e.t1 ? 32 : 6 === e.t1 ? 34 : 7 === e.t1 ? 36 : 8 === e.t1 ? 38 : 9 === e.t1 ? 40 : 42;
                    break;

                  case 17:
                    return tools.pathMethod(t, s), e.abrupt("break", 42);

                  case 19:
                    return tools.pathPage(r, c, i, a), e.abrupt("break", 42);

                  case 21:
                    return tools.goNewMiniapp(r.appid, r.path), e.abrupt("break", 42);

                  case 23:
                    return tools.pathFunc(r, t, s), e.abrupt("break", 42);

                  case 25:
                    if (0 != r.items.length) {
                        e.next = 28;
                        break;
                    }
                    return tools.loading("未设置产品"), e.abrupt("return");

                  case 28:
                    return tools.pathGood(r.items[0].id, r.btnType, r.items[0].showprice), e.abrupt("break", 42);

                  case 30:
                    return tools.pathGoodCat(r, a), e.abrupt("break", 42);

                  case 32:
                    return tools.pathGo(r, "/pages/group2/group2?id="), e.abrupt("break", 42);

                  case 34:
                    return tools.pathGo(r, "/pages/bargain/bargain?id="), e.abrupt("break", 42);

                  case 36:
                    return tools.pathGo(r, "/pages/group/group?id="), e.abrupt("break", 42);

                  case 38:
                    return tools.pathGoodSmallCat(r, a), e.abrupt("break", 42);

                  case 40:
                    return tools.pathMiaoSha(r), e.abrupt("break", 42);

                  case 42:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    oldGo: function(e, t, r, a) {
        switch (e) {
          case "bottomnav":
            if (-1 == t.url) return void tools.loading("未设置跳转");
            tools.showLoading(), core.renderPage(a, Number(t.url)), tools.onPageScroll();
            break;

          case "img":
            tools.preViewShow(r);
        }
    },
    pathGo: function(e, t) {
        if (0 == e.itemstype.length) return void tools.loading("未设置跳转");
        tools.goNewPage(t + e.itemstype[0].id);
    },
    pathGood: function(e, t, r, a) {
        var n = {
            id: e,
            btn: t,
            showprice: r,
            sale: a
        };
        tools.goNewPage("/pages/good/good?para=" + JSON.stringify(n));
    },
    pathMethod: function(e, t) {
        "img" == e || "slider" == e || "magicCube" == e ? tools.preViewShow(t) : tools.loading("未设置跳转");
    },
    pathGoodCat: function(e, t) {
        var r = {}, a = _wepy2.default.$instance, n = a.globalData.switchInfo;
        r.typeid = e.itemstype[0].id, r.title = e.itemstype[0].name, r.isFirstType = n.SeondTypeOpen ? 0 : "", 
        r.goods = {
            showBig: !!n.SeondTypeOpen,
            goodShowType: "small",
            btnType: e.btnType || "buy",
            isShowPrice: !0
        }, t.$preload("vm", r), t.$navigate("/pages/good/goodProLst");
    },
    pathGoodSmallCat: function(e, t) {
        var r = {};
        r.typeid = e.itemstype[0].id, r.title = e.itemstype[0].name, r.isFirstType = "", 
        r.goods = {
            showBig: !1,
            goodShowType: "small",
            btnType: e.btnType,
            isShowPrice: !0
        }, t.$preload("vm", r), t.$navigate("/pages/good/goodProLst");
    },
    pathPage: function(e, t, r, a) {
        if (Number(_index) != Number(r)) return e.url >= t.pages.length ? void tools.loading("未设置跳转") : void (-1 == e.url ? tools.loading("未设置跳转") : "_blank" == e.target ? (_index = -1, 
        getCurrentPages().length >= 8 ? tools.goRedirecto("/pages/index/index?currentPageIndex=" + e.url) : tools.goNewPage("/pages/index/index?currentPageIndex=" + e.url)) : (tools.showLoading(), 
        _index = "" === r ? -1 : r, core.renderPage(a, Number(e.url)), tools.onPageScroll()));
    },
    pathFunc: function(e, t, r) {
        return -1 == e.furl ? void tools.pathMethod(t, r) : "" != e.furl && "string" == typeof e.furl ? void tools.goNewPage("/" + e.furl) : 4 == e.furl ? void tools.sceneQrcode(Number(e.url)) : void 0;
    },
    pathMiaoSha: function(e) {
        var t = e.itemstype[0].id;
        tools.goNewPage("/pages/miaoSha/more?id=" + t);
    },
    setPageSkin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = 0, a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "pages", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getPageSetting();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    n = e.t0, o = (0, _lodash2.default)(n, "pages", ""), o && (r = o[0].skin), wx.setNavigationBarColor({
                        frontColor: _utils.skin[r].color,
                        backgroundColor: _utils.skin[r].bgcolor
                    }), t.currentSkin = _utils.skin[r].type, t.$apply();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    TimeShow: function(e, t) {
        var r = t, a = e, n = [ "days", "hours", "min", "seconds" ], o = new Date(a) - new Date();
        if (o > 0) n = _utils.timeTools.getRemainTimeQueue(o).join(":"); else {
            var s = new Date(r) - new Date();
            n = s <= 0 ? "00:00:00" : _utils.timeTools.getRemainTimeQueue(s).join(":");
        }
        return n;
    },
    phoneFunc: function(e) {
        e ? wx.makePhoneCall({
            phoneNumber: e
        }) : tools.loading("未设置电话");
    },
    goNewMiniapp: function(e, t) {
        wx.navigateToMiniProgram({
            path: t,
            appId: e,
            success: function(e) {},
            fail: function(e) {
                tools.showModal(e, !1);
            }
        });
    },
    sceneQrcode: function(e) {
        var t = this, r = _wepy2.default.$instance.globalData;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function() {
                function a(e) {
                    return n.apply(this, arguments);
                }
                var n = _asyncToGenerator(regeneratorRuntime.mark(function a(n) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (void 0 != n.path) {
                                t.next = 4;
                                break;
                            }
                            tools.showModal("亲，该二维码有误", !1), t.next = 8;
                            break;

                          case 4:
                            return r.storecodeid = n.path.split("?scene=")[1], t.next = 7, tools.loading("扫码成功", "success");

                          case 7:
                            -1 != e && tools.goRedirecto("/pages/index/index?currentPageIndex=" + e);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, a, t);
                }));
                return a;
            }()
        });
    },
    onPageScroll: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    setPageTitle: function(e) {
        wx.setNavigationBarTitle({
            title: e
        });
    },
    preViewShow: function(e, t) {
        var r = [];
        t ? r = t : r.push(e), wx.previewImage({
            current: e,
            urls: r
        });
    },
    showLoading: function(e) {
        var t = e || "加载中...";
        wx.showLoading({
            title: t,
            mask: !0
        });
    },
    goNewPage: function(e) {
        wx.navigateTo({
            url: e
        });
    },
    goBack: function(e) {
        wx.navigateBack({
            delta: e
        });
    },
    goRedirecto: function(e) {
        wx.redirectTo({
            url: e
        });
    },
    goLaunch: function(e) {
        wx.reLaunch({
            url: e
        });
    },
    copy: function(e) {
        wx.setClipboardData({
            data: e,
            success: function(e) {
                wx.getClipboardData({
                    success: function(e) {
                        tools.loading("复制成功", "success");
                    }
                });
            }
        });
    },
    chooseAddress: function() {
        return new Promise(function(e, t) {
            wx.chooseAddress({
                success: function(t) {
                    e(t);
                },
                fail: function(t) {
                    e(t);
                }
            });
        });
    },
    showModal: function(e, t) {
        return void 0 == t && (t = !0), new Promise(function(r, a) {
            wx.showModal({
                title: "提示",
                content: e,
                showCancel: t,
                success: function(e) {
                    r(e);
                }
            });
        });
    },
    ShowToast: function(e, t) {
        t.toast.show = !0, t.toast.msg = e, t.$apply(), setTimeout(function() {
            t.toast.show = !1, t.$apply();
        }, 1e3);
    },
    loading: function(e, t) {
        wx.showToast({
            title: e,
            icon: t || "loading",
            duration: 1e3
        });
    },
    ChangeDateFormat: function(e) {
        if (null != e) {
            var t = new Date(parseInt(e.replace("/Date(", "").replace(")/", ""), 10)), r = _utils.timeTools.patchTime(t.getMonth() + 1), a = _utils.timeTools.patchTime(t.getDate()), n = _utils.timeTools.patchTime(t.getHours()), o = _utils.timeTools.patchTime(t.getMinutes()), s = _utils.timeTools.patchTime(t.getSeconds());
            return t.getFullYear() + "-" + r + "-" + a + " " + n + ":" + o + ":" + s;
        }
        return "";
    },
    chooseImg: function() {
        return new Promise(function(e, t) {
            wx.chooseImage({
                count: 8,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function() {
                    function t(e) {
                        return r.apply(this, arguments);
                    }
                    var r = _asyncToGenerator(regeneratorRuntime.mark(function t(r) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e(r);

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return t;
                }()
            });
        });
    },
    richChange: function(e, t) {
        return e ? (e = e.replace(/[<]br[\/][>]/g, '<div style="height:20px"></div>').replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>').replace(/[<][\/]p[>][<]p[>]/g, "<div></div>"), 
        (0, _wxParse.wxParse)("description", "html", e || "", t, 5)) : "";
    },
    getRnUser: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, n = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    !r || 1 !== r || !t.detail.errMsg.includes("getPhoneNumber:fail user deny")) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return", n);

                  case 4:
                    if (!t.detail.errMsg.includes("getUserInfo:fail auth deny")) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return", n);

                  case 6:
                    return o = {
                        iv: t.detail.iv,
                        data: t.detail.encryptedData
                    }, e.next = 9, core.loginUserInfo(o);

                  case 9:
                    return s = e.sent, e.abrupt("return", s);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    checkSession: function() {
        return new Promise(function(e, t) {
            wx.checkSession({
                success: function() {
                    console.log("有效", "检查登陆状态"), e(!0);
                },
                fail: function() {
                    console.log("失效", "检查登陆状态"), e(!1);
                }
            });
        });
    },
    getLocation: function() {
        return new Promise(function(e, t) {
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    e(t);
                },
                fail: function(t) {
                    tools.showModal("若要使用地位,请点击右上角‘关于小程序’进行相关设置", !1), e("");
                },
                complete: function() {}
            });
        });
    }
}, pay = {
    PayOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.next = 15, http.post(_addr2.default.PayOrder, {
                        aid: a,
                        openId: n.OpenId,
                        orderid: t.orderid,
                        type: t.type
                    });

                  case 15:
                    if (o = e.sent, !o.result) {
                        e.next = 24;
                        break;
                    }
                    return s = JSON.parse(o.obj), e.next = 20, pay.wxpay(s);

                  case 20:
                    return i = e.sent, e.abrupt("return", i);

                  case 24:
                    if (!o.obj) {
                        e.next = 33;
                        break;
                    }
                    if (u = o.obj.split('"'), !u[7].includes("mch_id参数格式错误") && !o.obj.includes("mch_id参数长度有误")) {
                        e.next = 31;
                        break;
                    }
                    return e.next = 29, tools.showModal("商户秘钥错误", !1);

                  case 29:
                    e.next = 33;
                    break;

                  case 31:
                    return e.next = 33, tools.showModal(o.msg, !1);

                  case 33:
                    return e.abrupt("return", "");

                  case 34:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    wxpay: function(e) {
        var t = _wepy2.default.$instance;
        return new Promise(function(r, a) {
            wx.requestPayment({
                appId: t.globalData.appid,
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                package: e.package,
                signType: e.signType,
                paySign: e.paySign,
                success: function(e) {
                    r(e);
                },
                fail: function(e) {
                    r(e);
                },
                complete: function(e) {
                    r(e);
                }
            });
        });
    },
    AddOrderNew: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.AddPayOrderNew, {
                        appId: a,
                        openid: n.OpenId,
                        userId: n.Id,
                        ordertype: t.order,
                        paytype: t.paytype,
                        jsondata: t.jsondata
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    deleteLastFormId: function() {
        var e = _wepy2.default.$instance;
        http.post(_addr2.default.deleteLastFormId, {
            appid: e.globalData.appid,
            openid: e.globalData.userInfo.OpenId
        });
    }
}, http = {
    postJson: function(e, t) {
        return new Promise(function(r, a) {
            wx.request(Object.assign({}, _utils.req.json, {
                url: e,
                data: t,
                method: "POST",
                fail: function(e) {
                    r("");
                },
                success: function(e) {
                    r(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    },
    post: function(e, t) {
        return new Promise(function(r, a) {
            wx.request(Object.assign({}, _utils.req.urlencoded, {
                url: e,
                data: t,
                method: "POST",
                fail: function(e) {
                    r("");
                },
                success: function(e) {
                    r(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    },
    get: function(e, t) {
        return new Promise(function(r, a) {
            wx.request(Object.assign({}, _utils.req.urlencoded, {
                url: e,
                data: t,
                fail: function(e) {
                    r("");
                },
                success: function(e) {
                    r(200 == e.statusCode ? e.data : "");
                }
            }));
        });
    }
}, core = {
    senduserauth: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.senduserauth, {
                        tel: t,
                        sendType: 8,
                        appid: a,
                        openId: n.OpenId
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    Submitauth: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.Submitauth, {
                        tel: t,
                        openId: n.OpenId,
                        authCode: r
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    loginUserInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, a = r.globalData.appid, e.next = 4, tools.checkSession();

                  case 4:
                    if (n = e.sent, "" != (o = (0, _lodash2.default)(r.globalData, "userInfo", "")) && n) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 9, core.login();

                  case 9:
                    return s = e.sent, e.next = 12, core.wxLogin(s);

                  case 12:
                    o = e.sent;

                  case 13:
                    return e.next = 15, http.post(_addr2.default.loginByThirdPlatform, {
                        appId: a,
                        iv: t.iv,
                        data: t.data,
                        userId: o.Id
                    });

                  case 15:
                    if (i = e.sent, !i.isok) {
                        e.next = 26;
                        break;
                    }
                    return u = (0, _lodash2.default)(i.dataObj, "HeadImgUrl", ""), c = (0, _lodash2.default)(i.dataObj, "NickName", ""), 
                    null == u && (u = ""), null == c && (c = ""), i.dataObj.newUser = "" == u || "" == c, 
                    r.globalData.userInfo = i.dataObj, e.abrupt("return", i.dataObj);

                  case 26:
                    tools.showModal(i.Msg, !1);

                  case 27:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    wxLogin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance.globalData.appid, console.log("全局", _wepy2.default.$instance.globalData), 
                    console.log("appid", r), e.next = 5, http.post(_addr2.default.WxLogin, {
                        code: t,
                        appId: r,
                        needAppsr: global.independentUpdate ? 1 : 0
                    });

                  case 5:
                    if (a = e.sent, !a.isok) {
                        e.next = 15;
                        break;
                    }
                    return n = (0, _lodash2.default)(a.dataObj, "HeadImgUrl", ""), o = (0, _lodash2.default)(a.dataObj, "NickName", ""), 
                    null == n && (n = ""), null == o && (o = ""), a.dataObj.newUser = "" == n || "" == o, 
                    e.abrupt("return", a.dataObj);

                  case 15:
                    tools.showModal(a.Msg, !1), wx.hideLoading();

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, !(r = (0, _lodash2.default)(t.globalData, "userInfo", ""))) {
                        e.next = 6;
                        break;
                    }
                    if (!(a = tools.checkSession())) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return", r);

                  case 6:
                    return e.next = 8, core.login();

                  case 8:
                    if (!(n = e.sent)) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 12, core.wxLogin(n);

                  case 12:
                    return o = e.sent, t.globalData.userInfo = o, e.abrupt("return", o);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    login: function() {
        return new Promise(function(e, t) {
            wx.login({
                success: function(t) {
                    e(t.code);
                }
            });
        });
    },
    getAid: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, r = (0, _lodash2.default)(t.globalData, "aid", ""), 
                    a = t.globalData.appid, e.next = 5, core.getVipInfo();

                  case 5:
                    if (core.appSwitch(), !r) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", r);

                  case 10:
                    return e.next = 12, http.post(_addr2.default.Getaid, {
                        appid: a
                    });

                  case 12:
                    if (n = e.sent, !n.isok) {
                        e.next = 16;
                        break;
                    }
                    return t.globalData.aid = n.msg, e.abrupt("return", n.msg);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getVipInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, "" == (a = (0, _lodash2.default)(t.globalData, "vipInfo", ""))) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", a);

                  case 10:
                    return e.next = 12, http.get(_addr2.default.GetVipInfo, {
                        appid: t.globalData.appid,
                        uid: r.Id
                    });

                  case 12:
                    if (n = e.sent, !n.isok) {
                        e.next = 22;
                        break;
                    }
                    return e.next = 16, core.valueMoney();

                  case 16:
                    return o = e.sent, n.model.valueMoney = o.saveMoneySetUser.AccountMoneyStr, t.globalData.vipInfo = n.model, 
                    e.abrupt("return", n.model);

                  case 22:
                    return e.abrupt("return", "");

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    formId: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, http.post(_addr2.default.commitFormId, {
                        appid: r.globalData.appid,
                        openid: a.OpenId,
                        formid: t
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    valueMoney: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, r = t.globalData.userInfo, e.abrupt("return", http.get(_addr2.default.getSaveMoneySetUser, {
                        appid: t.globalData.appid,
                        openid: r.OpenId
                    }));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodByids: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, http.post(_addr2.default.GetGoodsByids, {
                        ids: t,
                        levelid: r || "",
                        goodShowType: a || ""
                    });

                  case 2:
                    if (n = e.sent, !n.isok) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", n.msg);

                  case 7:
                    return e.abrupt("return", "");

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodList: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, "object" == _typeof(t.typeid) && (t.typeid = t.typeid.join(",")), 
                    n = a.globalData.aid, o = a.globalData.vipInfo, s = (0, _lodash2.default)(r, "goodShowType", ""), 
                    e.abrupt("return", http.get(_addr2.default.GetGoodsList, {
                        aid: n,
                        goodShowType: s,
                        typeid: t.typeid,
                        search: t.search || "",
                        exttypes: t.exttypes || "",
                        pagesize: t.pagesize,
                        pricesort: t.pricesort || "",
                        pageindex: t.pageindex,
                        levelid: o.levelid || "",
                        isFirstType: t.isFirstType,
                        saleCountSort: t.saleCountSort || ""
                    }));

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetGroupDetail, {
                        appId: r.globalData.appid,
                        groupId: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodType: function(e) {
        return http.post(_addr2.default.GetGoodTypeList, {
            appid: _wepy2.default.$instance.globalData.appid,
            ids: e
        });
    },
    getPageConfig: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetPageSetting, {
                        aid: r
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getPageSetting: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "pages", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getPageConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (r = e.t0, !r.isok) {
                        e.next = 15;
                        break;
                    }
                    "string" == typeof r.msg.pages && (r.msg.pages = JSON.parse(r.msg.pages));
                    try {
                        for (a = r.msg.pages.length; a--; ) r.msg.pages[a].def_name.includes("产品预约") && r.msg.pages.splice(a, 1);
                    } catch (e) {
                        console.log("循环pages", a);
                    }
                    return t.globalData.appConfig = r, t.globalData.pages = r.msg, e.abrupt("return", r.msg);

                  case 15:
                    return e.abrupt("return", r);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    iconStatus: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = {}, o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return s = e.t0, e.next = 10, _utils.un.icon(t, r);

                  case 10:
                    if (n = e.sent, n.userInfo = s, n.showState = !1, n.backUp = !1, 0 != r) {
                        e.next = 19;
                        break;
                    }
                    return e.next = 17, core.getReductionLst(0);

                  case 17:
                    i = e.sent, n.reduction = !!i.length;

                  case 19:
                    a.vm_com_icon = n, a.$apply();

                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    comPonents: function(e, t, r) {
        for (var a = 0, n = e.length; a < n; a++) {
            var o = e[a];
            switch (o.type) {
              case "form":
                o.items.forEach(function(e, t) {
                    if ("radio" == e.type) {
                        for (var r = [], a = 0, n = e.items.length; a < n; a++) r.push(e.items[a].name);
                        e.array = r;
                    }
                });
                break;

              case "goodlist":
                "6" == o.GoodCatNavStyle ? core.getGoodLstType(o, r) : core.getGoodLst(o, t, r);
                break;

              case "bgaudio":
                _wepy2.default.$instance.globalData.hasMusicComs = !0;
            }
        }
    },
    renderPage: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.GetPageSettingUpdateTime, {
                        aid: n
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                            var s, i, u, c, d, p;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("" != (s = (0, _lodash2.default)(a.globalData, "pages", "")) && n.msg == s.updatetime) {
                                        e.next = 6;
                                        break;
                                    }
                                    return a.globalData.pages = "", e.next = 5, core.getPageSetting();

                                  case 5:
                                    s = e.sent;

                                  case 6:
                                    if (!("string" == typeof s.msg && s.msg.includes("小程序没有设置页面") || 0 == s.pages.length)) {
                                        e.next = 10;
                                        break;
                                    }
                                    return tools.showModal("小程序未配置页面", !1), wx.hideLoading(), e.abrupt("return");

                                  case 10:
                                    if (!(r < 0 || r > s.pages.length)) {
                                        e.next = 14;
                                        break;
                                    }
                                    return tools.showModal("页面不存在", !1), wx.hideLoading(), e.abrupt("return");

                                  case 14:
                                    if (i = (0, _lodash2.default)(s, "MeConfig", ""), u = s.pages[r], i && (t.vm_com_bottom = i), 
                                    t.currentPage = u, t.currentPageIndex = r, t.$apply(), Promise.all([ tools.setPageTitle(u.name), tools.setPageSkin(t), core.comPonents(u.coms, r, t), core.iconStatus(u.coms, r, t), core.getCoupShow(r, t), core.logoSwitch(t) ]), 
                                    wx.hideLoading(), -1 == (c = (0, _lodash2.default)(t.vm_com_status, r.toString(), -1))) {
                                        e.next = 25;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 25:
                                    for (d = 0, p = u.coms.length; d < p; d++) core.renderCom(r, d, u.coms[d], t);
                                    _index = -1, c = (0, _lodash2.default)(t.vm_com_status, r.toString(), -1), -1 == c && (t.vm_com_status[r.toString()] = !0), 
                                    t.$apply();

                                  case 30:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    renderCom: function(e, t, r, a) {
        var n = [], o = e + "_" + t;
        switch (r.type) {
          case "slider":
            r.current = 0;
            break;

          case "good":
            n.push(core.goodRequest(o, r, a));
            break;

          case "news":
            "all" == r.listmode || "pick" == r.listmode && 0 == r.list.length ? n.push(core.allNews(o, r, a)) : n.push(core.chooseNews(o, r, a));
            break;

          case "live":
            var s = {
                list: r.items.slice(0, 3),
                num: r.items.length
            };
            a.vm_com_live[o] = s;
            break;

          case "cutprice":
            n.push(core.bargain(o, r, a));
            break;

          case "richtxt":
            a.vm_com_rich[o] = tools.richChange(r.content, a);
            break;

          case "joingroup":
            n.push(core.joingroupRequest(o, r, a));
            break;

          case "entjoingroup":
            n.push(core.getEngroupIds(o, r, a));
            break;

          case "bgaudio":
            if (r.src) {
                (0, _lodash2.default)(_wepy2.default.$instance.globalData, "musicPause", !0) && (r.playAudio = !0, 
                r.scrollShow = !1, wx.playBackgroundAudio({
                    dataUrl: r.src
                }));
            }
            break;

          case "flashdeal":
            n.push(core.getMiaoSha(o, r.flashDealId, a));
            break;

          case "newslist":
            var i = [];
            if (0 == r.newsCat.length) return;
            for (var u = 0, c = r.newsCat.length; u < c; u++) i.push(r.newsCat[u].id);
            i.length && (i = i.join(",")), a.vm_com_newlst.ids = i, a.vm_com_newlst.ids_array = i, 
            n.push(core.getNewsLst(a.vm_com_newlst, a));
        }
        Promise.all(n), a.$apply();
    },
    getGoodLstType: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = [], n = !0, t.goodCat.forEach(function(e, t) {
                        a.push(e.id);
                    }), o = a.join(","), e.next = 6, core.getGoodType(o);

                  case 6:
                    if (s = e.sent, s.isok) {
                        if (0 != t.goodCat[0].parentId) {
                            for (i = 0, u = s.dataObj.length; i < u; i++) s.dataObj[0].SecondGoodTypes.push(s.dataObj[i].FirstGoodType);
                            n = !1;
                        } else n = !0;
                        r.vm_com_classify.list = s.dataObj, r.vm_com_classify.showfirst = n, r.$apply();
                    }

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodLst: function(e, t, r) {
        var a = [], n = _wepy2.default.$instance, o = n.globalData.showBIG, s = n.globalData.goodCat[t], i = tools.resetArray(r.vm_com_goodLst), u = (0, 
        _lodash2.default)(e.goodCat[0], "parentId", "");
        i.goodCatArray[t] = e.goodCat, 0 === u ? (i.showMore = !0, s && 1 == s.length ? i.isFirstType = o ? 0 : "" : i.isFirstType = o ? 0 : s && s.length > 1 ? "" : 0, 
        i.goodCat[t] = s && s.length ? s : e.goodCat) : (i.isFirstType = "", i.showMore = !1, 
        i.goodCat[t] = e.goodCat), i.goodCat[t].length && (i.goodCat[t].forEach(function(e, t) {
            a.push(e.id);
        }), i.goodCat[t] = i.goodCat[t].sort(compare)), i.showgoodAll = 1 != i.goodCat[t].length, 
        i.typeid = a, i.alltypeid = a.join(","), core.getGoodsListRequest(i, e, r), n.globalData.goodCat = [];
    },
    getCoupShow: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, !(n = (0, _lodash2.default)(a.globalData, "coupHidden", ""))) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (!Number(t)) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return");

                  case 6:
                    return e.next = 8, core.getStoreCoup(1, 5);

                  case 8:
                    if (o = e.sent, o.postdata.length) {
                        for (s = 0, i = o.postdata.length; s < i; s++) o.postdata[s].isGet = !1, o.postdata[s].coupBtnText = "领取";
                        r.coupHidden = o.postdata.length > 0, r.vm_com_coupList = o.postdata, r.$apply(), 
                        a.globalData.coupHidden = r.coupHidden;
                    }
                    if (!(u = (0, _lodash2.default)(a.globalData, "showsigninFloat", ""))) {
                        e.next = 13;
                        break;
                    }
                    return e.abrupt("return");

                  case 13:
                    0 == r.coupHidden && core.showSignin(r);

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiaoSha: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = {}, o = _wepy2.default.$instance, http.post(_addr2.default.GetFlashDeal, {
                        appId: o.globalData.appid,
                        openId: o.globalData.userInfo.OpenId,
                        flashDealIds: r
                    }).then(function(e) {
                        if (e.isok) if (e.dataObj) {
                            if (n = e.dataObj[0], n.more = !0, 0 == n.State || 3 == n.State) return n.show = !1, 
                            a.vm_com_miaosha[t] = n, void a.$apply();
                            n.show = !0, n.Item.length > 4 && n.Item.splice(4, n.Item.length);
                            for (var r = 0, o = n.Item.length; r < o; r++) 0 != n.Item[r].Stock ? n.Item[r].saleRate = Number(n.Item[r].Stock).div(Number(n.Item[r].Sale).add(Number(n.Item[r].Stock))).mul(100).toFixed(0) : n.Item[r].saleRate = 0;
                            a.vm_com_miaosha[t] = n, a.$apply(), core.miaoShaCountDown(n, a);
                        } else n.show = !1, a.vm_com_miaosha[t] = n, a.$apply();
                    });

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiaoShaMore: function(e, t) {
        var r = _wepy2.default.$instance, a = {};
        http.post(_addr2.default.GetFlashDeal, {
            appId: r.globalData.appid,
            openId: r.globalData.userInfo.OpenId,
            flashDealIds: e
        }).then(function(e) {
            if (e.isok && e.dataObj) {
                a = e.dataObj[0], a.more = !1, a.description = a.description.split("\n");
                for (var r = 0, n = a.Item.length; r < n; r++) 0 != a.Item[r].Stock ? a.Item[r].saleRate = Number(a.Item[r].Stock).div(Number(a.Item[r].Sale).add(Number(a.Item[r].Stock))).mul(100).toFixed(0) : a.Item[r].saleRate = 0;
                t.vm = a, t.$apply(), core.miaoShaCountDown(a, t);
            }
        });
    },
    miaoShaTip: function(e, t, r, a, n) {
        var o = _wepy2.default.$instance;
        http.post(_addr2.default.AddFlashSubscribe, {
            appId: o.globalData.appid,
            openId: o.globalData.userInfo.OpenId,
            flashItemId: e
        }).then(function(e) {
            e.isok && (tools.ShowToast("已设模板消息请您留意微信消息", t), clearInterval(t.miaoShaCutDown), 
            1 == Number(r) ? core.getMiaoSha(n, a, t) : core.getMiaoShaMore(a, t));
        });
    },
    miaoShaCountDown: function(e, t) {
        t.miaoShaCutDown = setInterval(function(r) {
            var a = !1, n = [], o = _utils.timeTools.getTimeSpan(e.Begin), s = _utils.timeTools.getTimeSpan(e.End);
            o > 0 ? (a = !0, n = _utils.timeTools.formatMillisecond(o), n.push(a)) : (a = !1, 
            s <= 0 ? (n = [ "00", "00", "00", "00" ], clearInterval(t.miaoShaCutDown)) : n = _utils.timeTools.formatMillisecond(s)), 
            n.push(a), e.countDownArray = n, t.vm = e, t.$apply();
        }, 1e3);
    },
    goodRequest: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = [], r.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), !(n.length > 0)) {
                        e.next = 15;
                        break;
                    }
                    if (o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getVipInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    return s = e.t0, i = (0, _lodash2.default)(r, "goodShowType", ""), e.next = 13, 
                    core.getGoodByids(n.join(","), s.levelid, i);

                  case 13:
                    u = e.sent, u && (c = {
                        list: u
                    }, a.vm_com_good[t] = c, a.$apply());

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodsListRequest: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.ispost && !t.loadall) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (t.ispost || (t.ispost = !0), "object" == _typeof(t.typeid) && (t.typeid = t.typeid.join(",")), 
                    n = _wepy2.default.$instance, o = n.globalData.aid, e.t0 = (0, _lodash2.default)(n.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 10, core.getVipInfo();

                  case 10:
                    e.t0 = e.sent;

                  case 11:
                    s = e.t0, http.get(_addr2.default.GetGoodsList, {
                        aid: o,
                        typeid: t.typeid,
                        search: t.search,
                        exttypes: t.exttypes,
                        pagesize: t.pagesize,
                        pricesort: t.pricesort,
                        pageindex: t.pageindex,
                        isFirstType: t.isFirstType,
                        levelid: (0, _lodash2.default)(s, "levelid", ""),
                        goodShowType: (0, _lodash2.default)(r, "goodShowType", ""),
                        saleCountSort: t.saleCountSort
                    }).then(function(e) {
                        t.ispost = !1, 1 == e.isok && (t.list[t.pageindex] = e.postdata.goodslist, e.postdata.goodslist.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, 
                        a.vm_com_goodLst = t, a.$apply());
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    goodFifter: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance.globalData.aid, e.abrupt("return", http.post(_addr2.default.GetExtTypes, {
                        aid: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    joingroupRequest: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], o = _wepy2.default.$instance.globalData.aid, r.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), n.length > 0 && http.post(_addr2.default.GetGroupByIds, {
                        aid: o,
                        ids: n.join(",")
                    }).then(function(e) {
                        if (e) {
                            var r = {};
                            r.list = e.postdata, a.vm_com_group[t] = r, a.$apply();
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargain: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], o = _wepy2.default.$instance, s = o.globalData.userInfo, r.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), i = n.join(","), n.length > 0 && http.get(_addr2.default.GetBargainList, {
                        appid: o.globalData.appid,
                        ids: i
                    }).then(function(e) {
                        e.length > 0 && (e.forEach(function(e) {
                            e.startDateStr = e.startDateStr.replace(/-/g, "/"), e.endDateStr = e.endDateStr.replace(/-/g, "/");
                        }), a.vm_com_bargain[t] = e, a.vm_com_user = s, a.$apply(), core.bargainCount(e, a, t));
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargainCount: function(e, t, r) {
        var a = this;
        t.barCount = setInterval(_asyncToGenerator(regeneratorRuntime.mark(function n() {
            return regeneratorRuntime.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, core.barCountDown(e, t);

                  case 2:
                    t.vm_com_bargain[r] = a.sent, t.$apply();

                  case 4:
                  case "end":
                    return a.stop();
                }
            }, n, a);
        })), 1e3);
    },
    barCountDown: function(e) {
        if (e.length > 0) for (var t = e.length - 1; t >= 0; t--) {
            var r = e[t];
            if (0 == r.RemainNum) r.time = [ "00", "00", "00", "00" ]; else {
                var a = _utils.timeTools.getTimeSpan(r.startDateStr), n = _utils.timeTools.getTimeSpan(r.endDateStr);
                if (a > 0) {
                    var o = _utils.timeTools.formatMillisecond(a);
                    r.time = o;
                } else if (n <= 0) r.time = [ "00", "00", "00", "00" ]; else {
                    var o = _utils.timeTools.formatMillisecond(n);
                    r.time = o;
                }
            }
        }
        return e;
    },
    getEngroupIds: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = [], r.items.forEach(function(e, t) {
                        n.push(e.id);
                    }), o = _wepy2.default.$instance.globalData.aid, n.length > 0 && http.get(_addr2.default.GetEntGroupByIds, {
                        aid: o,
                        ids: n.join(",")
                    }).then(function(e) {
                        if (e.isok) {
                            var r = {
                                list: e.postdata
                            }, n = "vm_com_group2." + t;
                            a.setData(_defineProperty({}, n, r));
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    formRequest: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return o = e.t1, e.abrupt("return", http.post(_addr2.default.SaveUserForm, {
                        aid: n,
                        uid: o.Id,
                        formdatajson: t,
                        comename: r,
                        storecodeid: (0, _lodash2.default)(a.globalData, "storecodeid", 0)
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    submitForm: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (wx.showNavigationBarLoading(), a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getAid();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getUserInfo();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    o = e.t1, http.post(_addr2.default.SaveSubscribeForm, {
                        aid: n,
                        uid: o.Id,
                        remark: t.remark,
                        formId: t.formId,
                        buyMode: t.buyMode,
                        formdatajson: t.datajson
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                            var n, o, i;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!a.isok) {
                                        e.next = 27;
                                        break;
                                    }
                                    if (1 != t.buyMode) {
                                        e.next = 21;
                                        break;
                                    }
                                    if (0 != r.vm.goodInfo.price) {
                                        e.next = 6;
                                        break;
                                    }
                                    return tools.loading("预约成功", "success"), wx.hideNavigationBarLoading(), e.abrupt("return");

                                  case 6:
                                    return n = {
                                        orderid: a.obj.citymorderId,
                                        type: 1
                                    }, e.next = 9, pay.PayOrder(n);

                                  case 9:
                                    if ("" == (o = e.sent) || !o.errMsg.includes("requestPayment:ok")) {
                                        e.next = 15;
                                        break;
                                    }
                                    tools.loading("预约成功", "success"), setTimeout(function() {
                                        tools.goBack(1);
                                    }, 3e3), e.next = 18;
                                    break;

                                  case 15:
                                    return e.next = 17, pay.deleteLastFormId();

                                  case 17:
                                    tools.loading("取消支付");

                                  case 18:
                                    wx.hideNavigationBarLoading(), e.next = 25;
                                    break;

                                  case 21:
                                    return e.next = 23, tools.showModal("是否使用储值支付");

                                  case 23:
                                    i = e.sent, i.confirm && setTimeout(function() {
                                        tools.loading("预约成功", "success"), wx.hideNavigationBarLoading(), setTimeout(function() {
                                            tools.goBack(1);
                                        }, 3e3);
                                    }, 1500);

                                  case 25:
                                    e.next = 29;
                                    break;

                                  case 27:
                                    tools.showModal(a.msg, !1), wx.hideNavigationBarLoading();

                                  case 29:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, s);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    subMore: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.vm, !r.ispost && !r.loadall) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    if (r.ispost || (r.ispost = !0), a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getAid();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    if (n = e.t0, e.t1 = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t1) {
                        e.next = 16;
                        break;
                    }
                    return e.next = 15, core.getUserInfo();

                  case 15:
                    e.t1 = e.sent;

                  case 16:
                    o = e.t1, http.get(_addr2.default.GetSubscribeFormDetail, {
                        aid: n,
                        uid: o.Id,
                        pageindex: r.pageindex,
                        pagesize: r.pagesize
                    }).then(function(e) {
                        if (r.ispost = !1, e.isok) {
                            var a = e.list.length;
                            a >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, a > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(e.list)));
                            for (var n = 0; n < a; n++) {
                                var o = e.list[n];
                                o.formdatajson = (o.formdatajson || "").split(","), o.remark = JSON.parse(o.remark);
                                for (var s = 0, i = o.formdatajson.length; s < i; s++) {
                                    if (-1 == o.formdatajson[s].search(":")) {
                                        var u = o.formdatajson.find(function(e) {
                                            return "地址" == e[0];
                                        });
                                        u[1] = u[1] + o.formdatajson[s];
                                    }
                                    o.formdatajson[s] = o.formdatajson[s].split(":");
                                }
                            }
                            t.vm = r, t.$apply();
                        }
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getNewsLst: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance.globalData.aid, !t.ispost && !t.loadall) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    t.ispost || (t.ispost = !1), http.get(_addr2.default.GetNewsList, {
                        aid: a,
                        typeid: t.ids,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize,
                        keyMsg: t.search
                    }).then(function(e) {
                        t.ispost = !1, e.isok && (e.data.forEach(function(e, t) {
                            e.addtime = tools.ChangeDateFormat(e.addtime);
                        }), e.data.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, e.data.length > 0 && (t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(e.data))), 
                        r.vm_com_newlst = t, r.$apply());
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    allNews: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = {}, o = r.typeid, s = _wepy2.default.$instance.globalData.aid, http.get(_addr2.default.GetNewsList, {
                        aid: s,
                        typeid: o,
                        liststyle: r.liststyle
                    }).then(function(e) {
                        e && e.isok && (e.allcount > e.data.length ? n.showmore = !0 : n.showmore = !1, 
                        n.list = e.data, "pick" == r.listmode && 0 == r.list.length && r.num > 0 && (n.list = e.data.slice(0, r.num)), 
                        n.list.forEach(function(e, t) {
                            e.addtime = tools.ChangeDateFormat(e.addtime), e.content = [];
                        }), a.vm_com_news[t] = n, a.$apply());
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    chooseNews: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s, i, u, c, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (n = [], o = [], s = Number(r.num), i = r.list.length > s, u = 0, c = r.list.length; u < c; u++) i ? u < s && n.push(r.list[u].id) : n.push(r.list[u].id), 
                    o.push(r.list[u].id);
                    d = n.join(","), n.length > 0 && http.get(_addr2.default.GetNewsInfoByids, {
                        ids: d,
                        liststyle: r.liststyle
                    }).then(function(e) {
                        if (e && e.isok && e.msg.length > 0) {
                            var r = {
                                ids: o,
                                list: e.msg,
                                showmore: i
                            };
                            r.list.forEach(function(e, t) {
                                e.addtime = tools.ChangeDateFormat(e.addtime), e.content = [];
                            }), a.vm_com_news[t] = r, a.$apply();
                        }
                    });

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getNewInfo: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    a = _wepy2.default.$instance, http.get(_addr2.default.GetNewsInfo, {
                        id: t,
                        appid: (0, _lodash2.default)(a.globalData, "appid", ""),
                        openId: (0, _lodash2.default)(a.globalData.userInfo, "OpenId", ""),
                        version: 2
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                            var s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!o.isok) {
                                        e.next = 21;
                                        break;
                                    }
                                    s = o.msg, s.imgurl_fmt = s.img_fmt, s.slideimgs_fmt && "" != s.slideimgs && (s.slideimgs_fmt = s.slideimgs_fmt.split("|"), 
                                    s.slideimgs = s.slideimgs.split(",")), s.payinfo && (0 == Number(s.payinfo.PayAmount) && (s.ispaid = !0), 
                                    s.playContent = !(!s.ispay || 0 != s.ispaid), s.payinfo.PayAmount = s.payinfo.PayAmount.div(100).toFixed(2)), 
                                    s.playVideo = !1, s.playAudio = !1, s.isShowBtn = !1, s.payMask = !1, s.selIndex = 0, 
                                    s.userInfo = a.globalData.userInfo, s.valuemoney = a.globalData.vipInfo.valueMoney, 
                                    s.RecommendedItem && r.getHotList(s.RecommendedItem), s.addtime = tools.ChangeDateFormat(s.addtime), 
                                    s.content_fmt = tools.richChange(s.content, r), r.vm = s, r.$apply(), tools.setPageTitle(s.title), 
                                    core.UpdateNewsPV(t, r), e.next = 24;
                                    break;

                                  case 21:
                                    return e.next = 23, tools.showModal("页面不存在", !1);

                                  case 23:
                                    tools.goBack(1);

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, n);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addShopCar: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.addGoodsCarData, {
                        qty: t.count,
                        goodid: t.pid,
                        isgroup: t.isgroup,
                        SpecInfo: t.SpecInfo,
                        openid: a.OpenId,
                        attrSpacStr: t.specId,
                        newCartRecord: t.record,
                        appId: r.globalData.appid,
                        SpecImg: (0, _lodash2.default)(t, "img", "")
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    shopCarList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "vipInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getVipInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    n = e.t1, http.get(_addr2.default.getGoodsCarData_new, {
                        appId: r.globalData.appid,
                        openid: a.OpenId,
                        levelid: n.levelid || 0
                    }).then(function(e) {
                        if (1 == e.isok) {
                            var r = Object.keys(e.postdata).length, a = [];
                            if (r) for (var n = 0; n < r; n++) {
                                var o = e.postdata[n];
                                if (null != o.goodsMsg && -1 != o.State) {
                                    if (o.goodsMsg.pickspecification) {
                                        o.goodsMsg.pickspecification = JSON.parse(o.goodsMsg.pickspecification);
                                        for (var s = 0, i = o.goodsMsg.pickspecification.length; s < i; s++) for (var u = 0, c = o.goodsMsg.pickspecification[s].items.length; u < c; u++) o.goodsMsg.pickspecification[s].items[u].sel = !1;
                                    }
                                    a.push(o);
                                }
                            } else a = [];
                            t.vm.list = a, t.$apply();
                        } else tools.showModal(e.msg, !1);
                    });

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    update: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.postJson(_addr2.default.updateOrDeleteGoodsCarData, {
                        openid: a.OpenId,
                        appid: r.globalData.appid,
                        function: t.date,
                        goodsCarModel: t.model
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getStoreConfig: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, r = !1, e.t0 = (0, _lodash2.default)(t.globalData.pages, "pages", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getPageSetting();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    a = e.t0, n = 0, o = a.length;

                  case 9:
                    if (!(n < o)) {
                        e.next = 20;
                        break;
                    }
                    if (!(s = a[n].coms.find(function(e) {
                        return e.type.includes("contactShopkeeper");
                    }))) {
                        e.next = 16;
                        break;
                    }
                    return s.openService && (r = !!s.serverType.includes("wxServer")), e.abrupt("break", 20);

                  case 16:
                    r = !1;

                  case 17:
                    n++, e.next = 9;
                    break;

                  case 20:
                    if (!(i = (0, _lodash2.default)(t.globalData, "storeConfig", ""))) {
                        e.next = 25;
                        break;
                    }
                    return e.abrupt("return", i);

                  case 25:
                    return e.next = 27, http.get(_addr2.default.GetStoreInfo, {
                        appId: t.globalData.appid
                    });

                  case 27:
                    if (u = e.sent, !u.isok) {
                        e.next = 32;
                        break;
                    }
                    return u.postData.storeInfo.funJoinModel.wxServer = r, t.globalData.storeConfig = u.postData, 
                    e.abrupt("return", u.postData);

                  case 32:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addMinOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "aid", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getAid();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.abrupt("return", http.post(_addr2.default.addMiniappGoodsOrder, {
                        aid: a,
                        appId: r.globalData.appid,
                        openid: n.OpenId,
                        goodCarIdStr: t.carId,
                        wxaddressjson: t.address,
                        orderjson: t.order,
                        buyMode: t.buyMode,
                        getWay: t.getWay,
                        isgroup: t.isgroup,
                        groupid: t.groupid,
                        goodtype: t.goodtype,
                        couponlogid: t.couponlogid,
                        zqstoreName: (0, _lodash2.default)(t, "storename", ""),
                        salesManRecordId: (0, _lodash2.default)(t, "salesManRecordId", 0),
                        storecodeid: (0, _lodash2.default)(r.globalData, "storecodeid", 0),
                        discountType: (0, _lodash2.default)(t, "discountType", 0),
                        flashItemID: (0, _lodash2.default)(t, "flashDealId", ""),
                        zqStoreId: (0, _lodash2.default)(t, "zqStoreId", "")
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    orderDtl: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.get(_addr2.default.getMiniappGoodsOrderById, {
                        appid: a.globalData.appid,
                        openid: n.OpenId,
                        orderId: t
                    });

                  case 9:
                    if (o = e.sent, 1 == o.isok) {
                        for (s = o.postdata, i = 0, u = s.goodOrderDtl.length; i < u; i++) c = s.goodOrderDtl[i], 
                        c.ImgUrl = c.goodImgUrl, c.Introduction = c.goodname, c.SpecInfo = c.orderDtl.SpecInfo, 
                        c.discountPrice = c.orderDtl.priceStr, c.oldPrice = c.orderDtl.originalPriceStr, 
                        c.Count = c.orderDtl.Count, c.type = "good";
                        r.vm_order = s, r.$apply();
                    }

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    minOlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.vm, a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (n = e.t0, !r.ispost && !r.loadall) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    r.ispost || (r.ispost = !0), http.get(_addr2.default.getMiniappGoodsOrder, {
                        appId: a.globalData.appid,
                        openid: n.OpenId,
                        State: r.state,
                        pageindex: r.pageindex,
                        pagesize: r.pagesize
                    }).then(function(e) {
                        r.ispost = !1, e.isok && (e.postdata.length >= r.pagesize ? r.pageindex += 1 : r.loadall = !0, 
                        e.postdata.length > 0 && (r.list = [].concat(_toConsumableArray(r.list), _toConsumableArray(e.postdata))), 
                        t.vm = r, t.condition = r.state, t.$apply());
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    oltState: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.updateMiniappGoodsOrderState, {
                        appid: r.globalData.appid,
                        openid: a.OpenId,
                        orderId: t.orderId,
                        State: t.state
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bargainDlt: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s, i, u = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = {}, o = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(o.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (s = e.t0, e.t1 = (0, _lodash2.default)(o.globalData, "storeConfig", ""), e.t1) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 12, core.getStoreConfig();

                  case 12:
                    e.t1 = e.sent;

                  case 13:
                    i = e.t1, http.get(_addr2.default.GetBargain, {
                        UserId: s.Id,
                        appid: o.globalData.appid,
                        Id: t
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                            var i, c, d, p;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!o.isok) {
                                        e.next = 37;
                                        break;
                                    }
                                    if (n.obj = o.obj, !n.obj.stateStr.includes("已失效")) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.next = 5, tools.showModal("该砍价已失效", !1);

                                  case 5:
                                    return tools.goBack(1), e.abrupt("return");

                                  case 7:
                                    if (n.obj.startDateStr && n.obj.endDateStr && (n.obj.startDateStr = n.obj.startDateStr.replace(/-/g, "/"), 
                                    n.obj.startDateStr = n.obj.endDateStr.replace(/-/g, "/")), n.num = 4, n.userInfo = s, 
                                    n.haveCreatOrder = o.haveCreatOrder, r.vm = n, r.$apply(), !a.length) {
                                        e.next = 21;
                                        break;
                                    }
                                    n.buid = a[0], i = n.obj.BargainUserList.find(function(e) {
                                        return e.Id == n.buid;
                                    }), i && (n.bargainUImg = i.ShopLogoUrl, n.bargainUname = i.ShopName, 8 != i.State && (n.currentPrice = i.CurrentPriceStr)), 
                                    core.cutPrice(n.buid, r, 1, t, a), Number(n.currentPrice) == Number(n.obj.FloorPriceStr) ? n.precent = "100%" : n.precent = core.compBarPrice(n.obj.OriginalPriceStr, n.currentPrice), 
                                    e.next = 34;
                                    break;

                                  case 21:
                                    for (n.bargainUImg = s.HeadImgUrl, n.bargainUname = s.NickName, c = 0, d = n.obj.BargainUserList.length; c < d; c++) s.Id == n.obj.BargainUserList[c].UserId && 8 != n.obj.BargainUserList[c].State && (n.currentPrice = n.obj.BargainUserList[c].CurrentPriceStr);
                                    if (Number(n.currentPrice) == Number(n.obj.FloorPriceStr) ? n.precent = "100%" : n.precent = core.compBarPrice(n.obj.OriginalPriceStr, n.currentPrice), 
                                    !n.haveCreatOrder) {
                                        e.next = 33;
                                        break;
                                    }
                                    return n.isFriend = 0, e.next = 29, tools.showModal("您已经下过单了，请进入砍价单查看详情!");

                                  case 29:
                                    p = e.sent, p.confirm && r.$navigate("/pages/bargain/bargainList"), e.next = 34;
                                    break;

                                  case 33:
                                    core.addBargain(t, r, a);

                                  case 34:
                                    r.barCutDown = setInterval(_asyncToGenerator(regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, tools.TimeShow(n.obj.startDateStr, n.obj.startDateStr);

                                              case 2:
                                                r.vm.time = e.sent, r.vm.time = r.vm.time.split(":"), r.$apply();

                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, u);
                                    })), 1e3), e.next = 40;
                                    break;

                                  case 37:
                                    return e.next = 39, tools.showModal(o.msg, !1);

                                  case 39:
                                    tools.goBack(1);

                                  case 40:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, u);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addBargain: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    o = e.t0, http.post(_addr2.default.AddBargainUser, {
                        Id: t,
                        UserId: o.Id,
                        UserName: o.NickName
                    }).then(function(e) {
                        e.isok ? (core.cutPrice(e.buid, r, 0, t, a), r.vm.buid = e.buid, r.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    cutPrice: function() {
        function e(e, r, a, n, o) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a, n, o) {
            var s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (s = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(s.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    i = e.t0, u = r.vm, http.post(_addr2.default.cutprice, {
                        UserId: i.Id,
                        buid: t
                    }).then(function(e) {
                        var t = {};
                        switch (e.code) {
                          case -1:
                            u.isFriend = a, tools.showModal(e.msg, !1);
                            break;

                          case 0:
                            0 == e.obj ? t.content = "您已砍过,自砍倒计时1分钟！" : (t.timeArray = JSON.stringify(e.obj).split("."), 
                            1 == t.timeArray.length ? t.timeArray[1] = 0 : t.timeArray[1] = parseInt(.6 * parseInt(t.timeArray[1])), 
                            t.content = "您已砍过," + t.timeArray[0] + "小时" + t.timeArray[1] + "分钟之后才能继续自砍"), tools.showModal(t.content, !1), 
                            u.isFriend = 0, u.barShow = !1;
                            break;

                          case 1:
                            tools.showModal(e.msg, !1), u.isFriend = 1;
                            break;

                          case 2:
                            i.NickName == e.BargainedUserName ? u.isFriend = 0 : u.isFriend = 1, u.currentPrice = e.price, 
                            u.precent = core.compBarPrice(u.obj.OriginalPriceStr, e.price), u.BargainedUserName = e.BargainedUserName, 
                            u.barShow = !0, u.cutprice = e.cutprice, r.vm = u, r.bargainShow = !0;
                        }
                        r.vm = u, r.$apply();
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    compBarPrice: function(e, t) {
        var r = Number(e).sub(Number(t)), a = Number(e).sub(r), n = 100 - Number(a).div(Number(e)).mul(100);
        return parseFloat(n).toFixed(2);
    },
    bargainList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, n = t.vm, !n.ispost && !n.loadall) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return");

                  case 10:
                    n.ispost || (n.ispost = !0), http.post(_addr2.default.GetBargainUserList, {
                        appId: r.globalData.appid,
                        UserId: a.Id,
                        pageIndex: n.pageindex,
                        pageSize: n.pagesize,
                        State: n.state
                    }).then(function(e) {
                        if (n.ispost = !1, e.isok) {
                            for (var r = 0, a = e.obj.length; r < a; r++) "" == e.obj[r].GoodsFreightStr && (e.obj[r].GoodsFreightStr = "0.00"), 
                            e.obj[r].CreateDateStr = e.obj[r].CreateDateStr.split(" ");
                            e.obj.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, e.obj.length > 0 && (n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(e.obj))), 
                            t.vm = n, t.$apply();
                        }
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    barShare: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, http.post(_addr2.default.GetBargainRecordList, {
                        buid: t,
                        pageIndex: 1,
                        pageSize: 100
                    });

                  case 2:
                    if (a = e.sent, a.isok) {
                        for (n = a.obj, o = 0, s = n.length; o < s; o++) n[o].CreateDate = tools.ChangeDateFormat(n[o].CreateDate);
                        r.vm.HelpCut = n, r.$apply();
                    } else tools.showModal(a.msg, !1);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getAddress: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, http.get(_addr2.default.GetUserWxAddress, {
                        appid: t.globalData.appid,
                        userid: r.Id
                    });

                  case 9:
                    if (a = e.sent, !(n = a.obj.WxAddress.WxAddress)) {
                        e.next = 16;
                        break;
                    }
                    return n = JSON.parse(n), e.abrupt("return", n);

                  case 16:
                    return e.abrupt("return", "");

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addBarOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.AddBargainOrder, {
                        AppId: r.globalData.appid,
                        UserId: a.Id,
                        buid: t.buid,
                        address: t.address,
                        Remark: t.Remark,
                        PayType: t.PayType
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getBarPrice: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.GetBargainUser, {
                        buid: t,
                        userid: n.Id
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                            var n, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!a.isok) {
                                        e.next = 7;
                                        break;
                                    }
                                    n = {
                                        list: [],
                                        totalCount: 1,
                                        fee: a.obj.Freight,
                                        buid: t,
                                        totalPrice: a.obj.curPrcie,
                                        originalPrice: a.obj.curPrcie
                                    }, n.list.push({
                                        ImgUrl: a.obj.ImgUrl,
                                        oldPrice: "",
                                        SpecInfo: "",
                                        Introduction: a.obj.BName,
                                        discount: 100,
                                        discountPrice: a.obj.curPrcie,
                                        Count: 1
                                    }), r.$preload("vm_order", n), r.$navigate("/pages/bargain/bargainOrder"), e.next = 11;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.showModal("您已经下过单了，请进入砍价单查看详情!");

                                  case 9:
                                    s = e.sent, s.confirm && r.$navigate("/pages/bargain/bargainList");

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getShare: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, tools.showLoading(), http.post(_addr2.default.GetShareCutPrice, {
                        appId: a.globalData.appid,
                        UserId: n.Id,
                        buid: t.buid,
                        bId: t.bId
                    }).then(function(e) {
                        e.isok ? (r.vm.qrcode = e.qrcode, r.$apply(), canvas.barCanvas(e.qrcode, r)) : (tools.showModal(e.msg, !1), 
                        wx.hideLoading());
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getBarOlt: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.post(_addr2.default.GetOrderDetail, {
                        buid: t,
                        AppId: a.globalData.appid,
                        UserId: n.Id
                    });

                  case 9:
                    o = e.sent, s = o.obj.OrderDetail, e.t1 = s.State, e.next = 3 === e.t1 ? 14 : 5 === e.t1 ? 16 : 6 === e.t1 ? 18 : 7 === e.t1 ? 20 : 8 === e.t1 ? 22 : 24;
                    break;

                  case 14:
                    return s.State = -4, e.abrupt("break", 24);

                  case 16:
                    return s.State = 0, e.abrupt("break", 24);

                  case 18:
                    return s.State = 2, e.abrupt("break", 24);

                  case 20:
                    return s.State = 1, e.abrupt("break", 24);

                  case 22:
                    return s.State = 3, e.abrupt("break", 24);

                  case 24:
                    s.GetWay = 1, s.QtyCount = 1, s.BuyMode = s.PayType, s.OrderNum = s.OrderId, s.PayDateStr = s.BuyTimeStr, 
                    s.Address = s.AddressDetail, s.OrderId = s.CityMordersId, s.Message = s.Remark || null, 
                    s.AccepterTelePhone = s.TelNumber, s.AccepterName = s.AddressUserName, s.OnlyGoodsMoney = s.CurrentPriceStr, 
                    s.CreateDateStr = s.CreateOrderTimeStr, s.BuyPriceStr = s.PayAmount, s.DistributeDateStr = tools.ChangeDateFormat(s.SendGoodsTime), 
                    s.AcceptDateStr = tools.ChangeDateFormat(s.ConfirmReceiveGoodsTime), r.vm_order.freightPrice = parseFloat(Number(s.FreightFee).div(100)).toFixed(2), 
                    r.vm_order.goodOrder = s, r.vm_order.goodOrderDtl = [], r.vm_order.goodOrderDtl.push({
                        ImgUrl: s.ImgUrl,
                        Introduction: s.BName,
                        discountPrice: s.CurrentPriceStr,
                        discount: 100,
                        Count: 1
                    }), r.$apply();

                  case 44:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    confirmBar: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return o = e.t0, e.next = 9, http.post(_addr2.default.ConfirmReceive, {
                        buid: t,
                        userid: o.Id,
                        appId: n.globalData.appid
                    });

                  case 9:
                    if (s = e.sent, !s.isok) {
                        e.next = 22;
                        break;
                    }
                    if (0 != a) {
                        e.next = 17;
                        break;
                    }
                    return r.vm = tools.resetArray(r.vm), e.next = 15, core.bargainList(r);

                  case 15:
                    e.next = 19;
                    break;

                  case 17:
                    return e.next = 19, core.getBarOlt(t, r);

                  case 19:
                    tools.loading("收货成功", "success"), e.next = 23;
                    break;

                  case 22:
                    tools.showModal(s.msg, !1);

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    updateWxCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, http.post(_addr2.default.UpdateWxCard, {
                        appid: r.globalData.appid,
                        UserId: a.Id,
                        type: 2
                    }).then(function(e) {
                        e.msg.includes("还未生成会员卡(请到后台设置同步微信会员卡)") || core.getWxCard(a.Id, t);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getWxCard: function(e, t) {
        var r = _wepy2.default.$instance;
        http.get(_addr2.default.GetWxCardCode, {
            appid: r.globalData.appid,
            UserId: e,
            type: 2
        }).then(function(e) {
            var r = !1;
            r = !!e.isok && null == e.obj, t.vm.wxCard = r, t.$apply();
        });
    },
    getCardSign: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetCardSign, {
                        appid: t.globalData.appid,
                        UserId: r.Id,
                        type: 2,
                        cardType: a,
                        cardId: n,
                        fuwuHaoName: o
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    saveWxCard: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.SaveWxCardCode, {
                        appid: a.globalData.appid,
                        UserId: n.Id,
                        code: t,
                        type: 2
                    }).then(function(e) {
                        e.isok && core.updateWxCard(r);
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    UpdateCouponWxCode: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.UpdateCouponWxCode, {
                        appid: t.globalData.appid,
                        UserId: r.Id,
                        couponlogId: a,
                        code: n
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    SetWxCouponsUnavailable: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.SetWxCouponsUnavailable, {
                        appid: r.globalData.appid,
                        UserId: a.Id,
                        couponlogId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getPrice: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, e.next = 3, http.get(_addr2.default.getSaveMoneySetList, {
                        appid: t.globalData.appid
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 10;
                        break;
                    }
                    for (a = r.saveMoneySetList, n = 0, o = a.length; n < o; n++) a[n].sel = !1;
                    return e.abrupt("return", a);

                  case 10:
                    return e.abrupt("return", "");

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaveList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.next = 9, core.getPrice();

                  case 9:
                    n = e.sent, t.vm_save.price = n, t.vm_save.user = a, t.$apply();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addSavePrice: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.addSaveMoneySet, {
                        appid: r.globalData.appid,
                        openid: a.OpenId,
                        saveMoneySetId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMoneyRec: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = t.vm_record, !a.ispost && !a.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (a.ispost || (a.ispost = !0), e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    return n = e.t0, tools.showLoading(), e.next = 14, http.post(_addr2.default.GetPayLogList, {
                        appid: r.globalData.appid,
                        openid: n.OpenId,
                        pageindex: a.pageindex,
                        pagesize: a.pagesize
                    });

                  case 14:
                    o = e.sent, o.isok ? (a.ispost = !1, a.list[a.pageindex] = o.dataObj, t.vm_record = a, 
                    o.dataObj.length >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, t.$apply()) : tools.showModal(o.Msg, !1), 
                    wx.hideLoading();

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    initGroupInfo: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (n = e.t0, t) {
                        e.next = 13;
                        break;
                    }
                    return e.next = 10, tools.showModal("团购不存在！", !1);

                  case 10:
                    return e.next = 12, tools.goBack(1);

                  case 12:
                    return e.abrupt("return");

                  case 13:
                    return e.next = 15, core.groupInfo(t);

                  case 15:
                    if (o = e.sent, o.isok) {
                        e.next = 22;
                        break;
                    }
                    return e.next = 19, tools.showModal(o.msg, !1);

                  case 19:
                    return e.next = 21, tools.goBack(1);

                  case 21:
                    return e.abrupt("return");

                  case 22:
                    for (s = o.groupdetail, s.slideimgs = [], s.slideimgs_fmt = [], i = 0, u = s.ImgList.length; i < u; i++) s.slideimgs_fmt.push(s.ImgList[i].thumbnail), 
                    s.slideimgs.push(s.ImgList[i].filepath);
                    s.GroupUserList && s.GroupUserList.length > 0 && (s.GroupUserList = s.GroupUserList.slice(0, 5)), 
                    s.GroupSponsorList && s.GroupSponsorList.length > 0 && (s.GroupSponsorList = s.GroupSponsorList.slice(0, 2)), 
                    s.content_fmt = tools.richChange(s.Description, r), s.ValidDateStart = s.ValidDateStart.replace(/-/g, "/"), 
                    s.ValidDateEnd = s.ValidDateEnd.replace(/-/g, "/"), s.imswitch = n.storeInfo.funJoinModel.imSwitch, 
                    r.vm_group = s, r.$apply();

                  case 34:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupTime: function(e, t) {
        var r = 0, a = "00:00:00", n = t.replace(/-/g, "/"), o = e.replace(/-/g, "/"), s = [ "days", "hours", "min", "seconds" ], i = new Date(o) - new Date(), u = "";
        if (i > 0) s = _utils.timeTools.getRemainTimeQueue(i), u = "距离开始", r = -1; else {
            var c = new Date(n) - new Date();
            if (c <= 0) return u = "已结束", {
                timeInter: "00:00:00",
                fromTheEnd_txt: u,
                groupstate: 0
            };
            s = _utils.timeTools.getRemainTimeQueue(c), u = "距离结束", r = 1;
        }
        return a = s[0] + "天" + s[1] + "时" + s[2] + "分" + s[3] + "秒", {
            timeInter: a,
            groupstate: r,
            fromTheEnd_txt: u
        };
    },
    initCountDown: function(e) {
        if (null != e.GroupSponsorList) {
            var t = e.GroupSponsorList;
            if (t.length > 0) {
                for (var r = t.length - 1; r >= 0; r--) {
                    var a = _utils.timeTools.getTimeSpan(t[r].ShowEndTime);
                    if (a <= 0) t.splice(r, 1); else {
                        var n = _utils.timeTools.formatMillisecond(a), o = "";
                        o += n[0] + ":" + n[1] + ":" + n[2] + ":" + n[3], t[r].countdown = o;
                    }
                }
                return t;
            }
            return "";
        }
    },
    groupLstCountDowm: function(e) {
        var t = e, r = _utils.timeTools.getTimeSpan(t.ShowDate);
        if (r <= 0) t.splice(i, 1); else {
            var a = _utils.timeTools.formatMillisecond(r), n = "";
            n += a[1] + ":" + a[2] + ":" + a[3], t.countdown = n;
        }
        return t;
    },
    groupRece: function(e) {
        return http.post(_addr2.default.RecieveGoods, {
            guid: e
        });
    },
    addGroup: function(e) {
        return http.post(_addr2.default.AddGroup, {
            Jsondata: JSON.stringify(e)
        });
    },
    canPay: function(e) {
        var t = _wepy2.default.$instance;
        http.post(_addr2.default.CancelPay, {
            guid: e,
            appId: t.globalData.appid
        });
    },
    paySuccess: function(e) {
        var t = _wepy2.default.$instance;
        return http.post(_addr2.default.GetPaySuccessGroupDetail, {
            appId: t.globalData.appid,
            gsid: e.gsid,
            orderid: e.orderid,
            paytype: e.paytype
        });
    },
    getOlt: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetGroupOrderDetail, {
            appId: t.globalData.appid,
            guid: e
        });
    },
    groupShare: function(e) {
        var t = e, r = "/pages/group/groupInvite?id=" + t.GroupSponsorId;
        return {
            title: "￥" + t.DiscountPrice / 100 + "元就能购买" + t.GroupName + ",一起来拼团吧！",
            path: r,
            imageUrl: t.ImgUrl,
            success: function(e) {
                tools.loading("转发成功", "success");
            }
        };
    },
    getGroupList: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = t.vm, !a.ispost && !a.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (a.ispost || (a.ispost = !0), e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    return n = e.t0, e.next = 13, http.post(_addr2.default.GetMyGroupList, {
                        appId: r.globalData.appid,
                        userId: n.Id,
                        t: a.state,
                        pageIndex: a.pageindex,
                        pageSize: a.pagesize
                    });

                  case 13:
                    o = e.sent, o.isok ? (a.ispost = !1, t.vm.list[a.pageindex] = o.postdata, o.postdata.length < a.pagesize ? a.loadall = !0 : a.pageindex += 1, 
                    t.$apply()) : tools.showModal(o.msg, !1);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    myGroupDlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetMyGroupDetail, {
                        appId: r.globalData.appid,
                        userId: a.Id,
                        groupsponId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupInvite: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u, c, d = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.next = 9, http.post(_addr2.default.GetInvitePageData, {
                        appId: a.globalData.appid,
                        gsid: t
                    });

                  case 9:
                    o = e.sent, o.isok ? (s = !1, i = o.postdata, i.content_fmt = tools.richChange(i.Description, r), 
                    i.GroupUserList.length > 0 && (u = i.GroupUserList.find(function(e) {
                        return e.Id == n.Id;
                    }), s = void 0 != u), i.GroupUserList.length >= 4 ? (i.GroupUserList = i.GroupUserList.slice(0, 4), 
                    i.NeedNum_fmt = 0) : i.NeedNum + i.GroupUserList.length <= 4 ? i.NeedNum_fmt = i.NeedNum : i.NeedNum_fmt = 4 - i.GroupUserList.length, 
                    r.isingroup = s, r.vm_dlt = i, r.$apply(), c = r, c.cutDown = setInterval(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var r, a;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = i.ValidDateStart, a = i.ValidDateEnd, e.next = 4, core.groupTime(r, a);

                                  case 4:
                                    c.time = e.sent, c.$apply();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, d);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), 1e3)) : tools.showModal(o.msg, !1);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    groupIng: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = t.vm, !a.ispost && !a.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    return a.ispost || (a.ispost = !0), e.next = 7, http.post(_addr2.default.GetGroupList, {
                        appId: r.globalData.appid,
                        state: a.state,
                        pageIndex: a.pageindex
                    });

                  case 7:
                    n = e.sent, n.isok ? (a.ispost = !1, t.vm.list[a.pageindex] = n.postdata, n.postdata.length < a.pagesize ? a.loadall = !0 : a.pageindex += 1, 
                    t.$apply()) : tools.showModal(n.msg, !1);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMinOrderId: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.getMiniappGoodsOrderById, {
                        appid: r.globalData.appid,
                        openid: a.OpenId,
                        orderId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getEntGroup: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = t.vm, !a.ispost && !a.loadall) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return");

                  case 4:
                    if (a.ispost || (a.ispost = !0), e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 9, core.getUserInfo();

                  case 9:
                    e.t0 = e.sent;

                  case 10:
                    n = e.t0, http.post(_addr2.default.GetMyGroupList2, {
                        appId: r.globalData.appid,
                        userId: n.Id,
                        state: a.state,
                        pageIndex: a.pageindex
                    }).then(function(e) {
                        1 == e.isok ? (a.ispost = !1, e.postdata && (e = core.group2State(e), e.postdata.length >= a.pagesize ? a.pageindex += 1 : a.loadall = !0, 
                        e.postdata.length > 0 && (a.list = [].concat(_toConsumableArray(a.list), _toConsumableArray(e.postdata)))), 
                        t.vm = a, t.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    group2State: function(e) {
        for (var t = 0, r = e.postdata.length; t < r; t++) {
            var a = e.postdata[t];
            3 == a.state && (a.showMark = "已完成", a.state = 4), 0 == a.groupstate && 0 == a.state && (a.showMark = "待付款", 
            a.state = 0), 2 == a.groupstate && 1 == a.state && (a.showMark = "待发货", a.state = 5), 
            2 == a.groupstate && 8 == a.state && (a.showMark = "待发货", a.state = 5), -4 == a.groupstate && -4 == a.state && (a.showMark = "未成团", 
            a.state = 1), 0 == a.groupstate && -1 == a.state && (a.showMark = "订单失效", a.state = 6), 
            1 == a.groupstate && -1 == a.state && (a.showMark = "订单失效", a.state = 6), 2 == a.groupstate && -1 == a.state && (a.showMark = "订单失效", 
            a.state = 6), 1 == a.groupstate && 8 == a.state && (a.showMark = "未成团", a.state = 1), 
            1 == a.groupstate && 1 == a.state && (a.showMark = "未成团", a.state = 1), 2 == a.groupstate && 2 == a.state && (a.showMark = "待收货", 
            a.state = 9), 2 == a.groupstate && -4 == a.state && (a.showMark = "退款成功", a.state = 7), 
            -4 == a.groupstate && -1 == a.state && (a.showMark = "已过期", a.state = 8);
        }
        return e;
    },
    groupConfrim: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    n = e.t0, http.post(_addr2.default.updateMiniappGoodsOrderState, {
                        appid: a.globalData.appid,
                        openid: n.OpenId,
                        orderId: t.Id,
                        State: t.state
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (1 != a.isok) {
                                        e.next = 13;
                                        break;
                                    }
                                    if (r.vm = tools.resetArray(r.vm), 3 != t.state) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.next = 5, tools.loading("收货成功", "success");

                                  case 5:
                                    e.next = 9;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.loading("取消订单成功", "success");

                                  case 9:
                                    return e.next = 11, core.getEntGroup(r);

                                  case 11:
                                    e.next = 14;
                                    break;

                                  case 13:
                                    tools.showModal(a.msg, !1);

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    group2Share: function(e) {
        var t = "/pages/group2/group2Share?id=" + e.id;
        return {
            title: e.name,
            path: t,
            imageUrl: e.img,
            success: function(e) {
                tools.loading("转发成功", "success");
            }
        };
    },
    getAddresslt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getStoreConfig();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.next = 15, http.post(_addr2.default.GetUserAddress, {
                        userId: a.Id
                    });

                  case 15:
                    if (o = e.sent, !o.isok) {
                        e.next = 30;
                        break;
                    }
                    for (s = o.data, i = 0, u = s.length; i < u; i++) s[i].address = s[i].province + s[i].city + s[i].district + s[i].street;
                    if (0 != n.storeInfo.funJoinModel.openExpress || !n.storeInfo.funJoinModel.openInvite && !n.storeInfo.funJoinModel.openToStoreConsume) {
                        e.next = 25;
                        break;
                    }
                    return n.storeInfo.funJoinModel.openInvite ? t.selIndex = 1 : t.selIndex = 6, e.next = 23, 
                    tools.getLocation();

                  case 23:
                    c = e.sent, c ? (t.vm_more.lat = c.latitude, t.vm_more.lng = c.longitude, core.GetStorePickPlace(t.vm_more, t), 
                    t.$apply()) : core.GetStorePickPlace(t.vm_more, t);

                  case 25:
                    t.vm_addr.express = s, t.vm_addr.selflst = n, t.$apply(), e.next = 31;
                    break;

                  case 30:
                    tools.showModal(o.msg, !1);

                  case 31:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetStorePickPlace: function(e, t) {
        var r = _wepy2.default.$instance;
        e.ispost || e.loadall || (e.ispost || (e.ispost = !0), http.get(_addr2.default.GetStorePickPlace, {
            appId: r.globalData.appid,
            lng: (0, _lodash2.default)(e, "lng", ""),
            lat: (0, _lodash2.default)(e, "lat", ""),
            pageIndex: (0, _lodash2.default)(e, "pageIndex", ""),
            pageSize: (0, _lodash2.default)(e, "pageSize", "")
        }).then(function(r) {
            r.isok && (e.ispost = !1, r.dataObj.placeList.length < e.pageSize ? e.loadall = !0 : e.pageIndex += 1, 
            r.dataObj.placeList.length > 0 && (e.list = [].concat(_toConsumableArray(e.list), _toConsumableArray(r.dataObj.placeList))), 
            t.vm_more = e, t.$apply());
        }));
    },
    delAddress: function(e) {
        return http.post(_addr2.default.DeleteUserAddress, {
            id: e
        });
    },
    saveAddress: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.EditUserAddress, {
                        id: t.id,
                        userid: a.Id,
                        isdefault: t.isdefault,
                        contact: t.contact,
                        phone: t.phone,
                        province: t.province,
                        city: t.city,
                        district: t.district,
                        street: t.street
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getFreight: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetFreightFee, {
                        appId: r.globalData.appid,
                        openId: a.OpenId,
                        goodCartIds: t.cartid,
                        province: (0, _lodash2.default)(t, "province", ""),
                        city: (0, _lodash2.default)(t, "city", ""),
                        flashItemId: (0, _lodash2.default)(t, "flashId", ""),
                        isgroup: (0, _lodash2.default)(t, "isgroup", ""),
                        groupid: (0, _lodash2.default)(t, "groupid", ""),
                        discountType: (0, _lodash2.default)(t, "discountType", ""),
                        couponlogid: (0, _lodash2.default)(t, "couponlogid", "")
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getLive: function(e) {
        var t = /https?:\/\/vzan.com\/live\/tvchat-(\d+).*/gi.exec(e);
        if (!t) return void tools.showModal("播放地址不正确", !1);
        var r = t[1];
        return http.post(_addr2.default.live, {
            tpid: r
        });
    },
    getCoup: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, n = r.vmMycoupon, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    if (o = e.t0, "" != t && (n.goodsInfo = JSON.stringify(t.list.map(function(e, t) {
                        return {
                            goodid: e.goodid,
                            totalprice: Number(e.discountPrice) * e.Count * 100
                        };
                    }))), !n.ispost && !n.loadall) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    return n.ispost || (n.ispost = !0), n.goodsId = t.goodid, e.next = 15, http.post(_addr2.default.GetMyCouponList, {
                        state: n.state,
                        goodsId: (0, _lodash2.default)(n, "goodsId", ""),
                        goodsInfo: (0, _lodash2.default)(n, "goodsInfo", ""),
                        pageIndex: n.pageindex,
                        userId: o.Id,
                        appId: a.globalData.appid
                    });

                  case 15:
                    s = e.sent, s.isok && (n.ispost = !1, s.postdata.length >= n.pagesize ? n.pageindex += 1 : n.loadall = !0, 
                    n.list = [].concat(_toConsumableArray(n.list), _toConsumableArray(s.postdata)), 
                    r.vmMycoupon = n, r.$apply());

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getCoupon: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.next = 9, http.post(_addr2.default.GetCoupon, {
                        appId: r.globalData.appid,
                        userId: a.Id,
                        couponId: t
                    });

                  case 9:
                    if (n = e.sent, !(n.isok && n.WxCouponsCardId && n.FuwuHaoName)) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 13, core.getCardSign(1, n.WxCouponsCardId, n.FuwuHaoName);

                  case 13:
                    o = e.sent, null != o && o.isok && (s = {
                        signature: o.obj.signature,
                        timestamp: o.obj.timestamp
                    }, s = JSON.stringify(s), wx.addCard({
                        cardList: [ {
                            cardId: o.obj.cardId,
                            cardExt: s
                        } ],
                        success: function() {
                            function e(e) {
                                return t.apply(this, arguments);
                            }
                            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return console.log(t), e.next = 3, core.UpdateCouponWxCode(n.couponlogId, t.cardList[0].code);

                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this);
                            }));
                            return e;
                        }()
                    }));

                  case 15:
                    return e.abrupt("return", n);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getStoreCoup: function(e, t) {
        var r = _wepy2.default.$instance, a = r.globalData.userInfo, n = t;
        return http.post(_addr2.default.GetStoreCouponList, {
            appId: r.globalData.appid,
            goodstype: -1,
            userId: a.Id,
            IsShowTip: e || "",
            state: n
        });
    },
    getReduction: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetReductionCard, {
                        userId: a.Id,
                        openId: a.OpenId,
                        orderId: t.orderid,
                        couponsId: t.couponsid
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getReductionLst: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, n = (0, _lodash2.default)(a.globalData, "aid", ""), 
                    o = (0, _lodash2.default)(a.globalData, "userInfo", ""), e.t0 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getStoreConfig();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    return s = e.t0, e.next = 11, http.post(_addr2.default.GetReductionCardList, {
                        aid: n,
                        userId: o.Id,
                        openId: o.OpenId,
                        storeId: s.storeInfo.Id
                    });

                  case 11:
                    if (i = e.sent, !i.isok) {
                        e.next = 19;
                        break;
                    }
                    if (0 != Number(t)) {
                        e.next = 17;
                        break;
                    }
                    return e.abrupt("return", i.coupons);

                  case 17:
                    r.vm = i.coupons, r.$apply();

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getInterInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserIntegral, {
                        appId: t.globalData.appid,
                        userId: r.Id
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interPro: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetExchangeActivityList, {
                        appId: r.globalData.appid,
                        type: t.type,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interRule: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetStoreRules, {
                        appId: t.globalData.appid
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserIntegralLogs, {
                        appId: r.globalData.appid,
                        userId: a.Id,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interDlt: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, e.abrupt("return", http.post(_addr2.default.GetExchangeActivity, {
                        appId: r.globalData.appid,
                        id: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.AddExchangeActivityOrder, {
                        userId: a.Id,
                        appId: r.globalData.appid,
                        activityId: t.id,
                        address: t.address,
                        way: t.way
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interLst: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.GetExchangeActivityOrders, {
                        userId: a.Id,
                        appId: r.globalData.appid,
                        pageindex: t.pageindex,
                        pagesize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    interConfirm: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.ConfirmReciveGood, {
                        userId: a.Id,
                        appId: r.globalData.appid,
                        orderId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getMiniSale: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.GetMiniAppSaleManConfig, {
                        UserId: a.Id,
                        appId: r.globalData.appid,
                        parentSalesManId: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    postApply: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.ApplySalesman, {
                        UserId: n.Id,
                        appId: a.globalData.appid,
                        TelePhone: t,
                        parentSalesManId: r
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleInfo: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.abrupt("return", http.get(_addr2.default.GetSalesManUserInfo, {
                        UserId: r.Id,
                        appId: t.globalData.appid
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleLst: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetSalesmanGoodsList, {
            appId: t.globalData.appid,
            goodsName: e.search,
            sortType: e.state,
            pageIndex: e.pageindex,
            pageSize: e.pagesize
        });
    },
    getSaleRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, n = (0, _lodash2.default)(t, "pageindex", 1), o = (0, _lodash2.default)(t, "pagesize", 10), 
                    e.abrupt("return", http.get(_addr2.default.GetSalesManRecordOrder, {
                        appId: r.globalData.appid,
                        UserId: a.Id,
                        pageIndex: n,
                        pageSize: o
                    }));

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSaleManRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = (0, _lodash2.default)(t, "state", 0), n = (0, 
                    _lodash2.default)(t, "pageindex", 1), o = (0, _lodash2.default)(t, "pagesize", 10), 
                    e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getUserInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    return s = e.t0, e.abrupt("return", http.get(_addr2.default.GetSalesManRecordUser, {
                        appId: r.globalData.appid,
                        UserId: s.Id,
                        pageIndex: n,
                        pageSize: o,
                        state: a
                    }));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    bindSale: function(e) {
        var t = _wepy2.default.$instance;
        return http.get(_addr2.default.GetSalesManRecord, {
            appId: t.globalData.appid,
            goodsId: e || "",
            salesManId: t.globalData.saleId
        });
    },
    bindShip: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.BindRelationShip, {
                        appId: a.globalData.appid,
                        userId: n.Id,
                        goodsId: t,
                        salesManRecordId: r
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    updateRecordId: function(e) {
        var t = _wepy2.default.$instance;
        http.post(_addr2.default.UpdateSalesManRecord, {
            appId: t.globalData.appid,
            salesManRecordId: e,
            state: 1
        });
    },
    applyCash: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.DrawCashApply, {
                        appId: r.globalData.appid,
                        UserId: a.Id,
                        drawCashMoney: t
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetSaleManRelationList: function(e) {
        var t = _wepy2.default.$instance;
        return http.post(_addr2.default.GetSaleManRelationList, {
            appId: t.globalData.appid,
            saleManId: e.saleManId,
            pageSize: e.pagesize,
            pageIndex: e.pageindex
        });
    },
    cashRecordlst: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.GetDrawCashApplyList, {
                        appId: r.globalData.appid,
                        UserId: a.Id,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    payByStore: function() {
        function e(e, r, a, n, o, s, i) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a, n, o, s, i) {
            var u, c, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (u = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(u.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (c = e.t0, e.t1 = (0, _lodash2.default)(u.globalData, "vipInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getVipInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return d = e.t1, e.abrupt("return", http.post(_addr2.default.PayByStoredvalue, {
                        appid: u.globalData.appid,
                        userId: c.Id,
                        openId: c.OpenId,
                        levelid: d.levelid,
                        couponid: null == t ? 0 : t.Id,
                        money: 100 * r,
                        money_cal: a,
                        money_coupon: n,
                        money_vip: o,
                        payway: s,
                        discountType: i
                    }));

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    payByStoreSuccess: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.StoredvalueOrderInfo, {
                        orderid: t,
                        openId: a.OpenId
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    connectSocket: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, !t.globalData.wxState) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return");

                  case 3:
                    if (e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getUserInfo();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    if (r = e.t0, !t.globalData.ws && !isConnecting) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return");

                  case 11:
                    isConnecting = !0, wx.connectSocket({
                        url: _addr2.default.ws + "?appId=" + t.globalData.appid + "&userId=" + r.Id + "&isFirst=" + isFirst,
                        header: {
                            "content-type": "application/json"
                        },
                        method: "GET"
                    }), wx.onSocketOpen(function(e) {
                        if (t.globalData.ws = !0, isConnecting = !1, reConnectTimer && (clearTimeout(reConnectTimer), 
                        reConnectTimer = null), t.globalData.msgQueue.length > 0) {
                            for (var a = 0, n = t.globalData.msgQueue.length; a < n; a++) core.sendMessage(t.globalData.msgQueue[a]);
                            t.globalData.msgQueue = [], wx.hideLoading();
                        }
                        setInterval(function() {
                            var e = {
                                appId: (0, _lodash2.default)(t.globalData, "appid"),
                                fuserId: r.Id,
                                tuserId: "",
                                enterPage: "",
                                msgType: 2,
                                tuserType: 0,
                                msg: "",
                                ids: "",
                                tempid: r.Id + "_" + new Date().getTime(),
                                isChat: 2
                            };
                            core.sendMessage(e);
                        }, 12e4);
                    }), wx.onSocketError(function(e) {
                        t.globalData.ws = !1, isConnecting = !1;
                    }), wx.onSocketClose(function(e) {
                        isFirst = !1, t.globalData.ws = !1, isConnecting = !1, core.reConnect();
                    }), wx.onSocketMessage(function(e) {
                        var t = e.data, r = getCurrentPages(), a = r[r.length - 1], n = a.data.fuserInfo, o = a.data.tuserInfo;
                        if ("string" == typeof t && (t = JSON.parse(t)), "pages/im/chat" == a.route) {
                            var s = a.data.vm.list;
                            (t.fuserId == n.userid && t.tuserId == o.userid || t.fuserId == o.userid && t.tuserId == n.userid) && (s.push(t), 
                            a.setData({
                                "vm.list": s,
                                "vm.lastids": t.ids
                            }));
                        }
                    });

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    reConnect: function() {
        _wepy2.default.$instance.globalData.wxState || (reConnectTimer && (clearTimeout(reConnectTimer), 
        reConnectTimer = null), reConnectTimer = setTimeout(function() {
            core.connectSocket();
        }, 3e3));
    },
    sendMessage: function(e) {
        var t = _wepy2.default.$instance;
        "object" == (void 0 === e ? "undefined" : _typeof(e)) && (e = JSON.stringify(e)), 
        t.globalData.ws ? wx.sendSocketMessage({
            data: e
        }) : t.globalData.msgQueue.push(e);
    },
    getContactList: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.ispost && !t.loadall) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (t.ispost || (t.ispost = !0), a = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(a.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, core.getUserInfo();

                  case 8:
                    e.t0 = e.sent;

                  case 9:
                    n = e.t0, http.post(_addr2.default.GetContactList, {
                        appId: a.globalData.appid,
                        fuserId: n.Id,
                        pageIndex: t.pageindex,
                        pageSize: t.pagesize,
                        fuserType: 0,
                        ver: 1
                    }).then(function(e) {
                        e.isok ? (t.ispost = !1, e.data.length >= t.pagesize ? t.pageindex += 1 : t.loadall = !0, 
                        t.list = [].concat(_toConsumableArray(t.list), _toConsumableArray(e.data)), r.vm = t, 
                        r.$apply()) : tools.showModal(e.msg, !1);
                    });

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    AddContact: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, http.post(_addr2.default.AddContact, {
                        appId: r.globalData.appid,
                        fuserId: a.Id,
                        tuserId: t
                    });

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getHistory: function() {
        function e(e, r, a) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r, a) {
            var n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(n.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (o = e.t0, !r.ispost && !r.loadall) {
                        e.next = 9;
                        break;
                    }
                    return e.abrupt("return");

                  case 9:
                    return r.ispost = !0, e.next = 12, http.post(_addr2.default.GetHistory, {
                        appId: n.globalData.appid,
                        fuserId: o.Id,
                        tuserId: t,
                        id: r.lastid,
                        fuserType: 0,
                        ver: 1
                    });

                  case 12:
                    s = e.sent, s && s.isok ? (s.data.length < r.pagesize ? r.loadall = !0 : r.loadall = !1, 
                    s.data.length > 0 && (r.list = s.data.concat(r.list), 0 === r.lastid ? (r.lastid = r.list[0].Id, 
                    r.lastids = r.list[r.list.length - 1].ids) : (r.lastid = r.list[0].Id, r.lastids = r.list[0].ids))) : r.loadall = !0, 
                    r.ispost = !1, a.vm = r, a.$apply();

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    gochat: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    r = e.t0, r.storeInfo && r.storeInfo.funJoinModel && (r.storeInfo.kfInfo && r.storeInfo.funJoinModel.imSwitch ? (a = (0, 
                    _lodash2.default)(r.storeInfo.kfInfo, "uid", ""), n = (0, _lodash2.default)(r.storeInfo.kfInfo, "nickName", "").replace(/\s/gi, ""), 
                    o = (0, _lodash2.default)(r.storeInfo.kfInfo, "headImgUrl", ""), tools.goNewPage("/pages/im/chat?userid=" + a + "&nickname=" + n + "&headimg=" + o)) : tools.showModal("商家已关闭在线客服", !1));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    appSwitch: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance, r = t.globalData.appid, e.next = 4, http.get(_addr2.default.GetFunctionList, {
                        appid: r
                    });

                  case 4:
                    if (a = e.sent, !a.isok) {
                        e.next = 11;
                        break;
                    }
                    for (n = 0, o = a.dataObj.list.length; n < o; n++) a.dataObj.list[n].title.includes("我的预约单") && (a.dataObj.list[n].url = "/pages/good/goodSubLst");
                    return t.globalData.switchInfo = a.dataObj, e.abrupt("return", a.dataObj);

                  case 11:
                    return t.globalData.switchInfo = "", e.abrupt("return", "");

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getVerson: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = _wepy2.default.$instance.globalData.appid, e.next = 3, http.get(_addr2.default.GetVersonId, {
                        appid: t
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", r.dataObj);

                  case 8:
                    return e.abrupt("return", "");

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    logoSwitch: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, !(n = r.globalData.logo)) {
                        e.next = 8;
                        break;
                    }
                    t.vm_com_logo = n, t.$apply(), e.next = 23;
                    break;

                  case 8:
                    return e.next = 10, http.get(_addr2.default.GetAgentConfigInfo, {
                        appid: a
                    });

                  case 10:
                    if (o = e.sent, 1 != o.isok) {
                        e.next = 22;
                        break;
                    }
                    return s = o.AgentConfig, s.LogoText = 0 == s.isdefaul ? s.LogoText.split(" ") : s.LogoText, 
                    e.next = 16, core.getVerson();

                  case 16:
                    s.openPath = e.sent, r.globalData.logo = s, t.vm_com_logo = s, t.$apply(), e.next = 23;
                    break;

                  case 22:
                    tools.showModal(o.msg, !1);

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    sendUser: function(e, t) {
        return http.post(_addr2.default.SendUserAdvisory, {
            Phone: e,
            username: t,
            source: 1,
            type: 5
        });
    },
    getPhoneCode: function(e) {
        return http.post(_addr2.default.SendUserAuthCode, {
            phonenum: e,
            type: 1
        });
    },
    getUserRegi: function(e) {
        return http.post(_addr2.default.SaveUserInfo, {
            phone: e.phone,
            password: e.password,
            code: e.code,
            address: e.address,
            sourcefrom: "小程序",
            agentqrcodeid: 0
        });
    },
    postValue: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, n = a.globalData.appid, e.next = 4, core.getUserInfo();

                  case 4:
                    o = e.sent, http.post(_addr2.default.AddManyGoodsComment, {
                        appid: n,
                        userId: o.Id,
                        orderId: t.orderid,
                        goodsType: t.goodsType,
                        listJson: JSON.stringify(t.list),
                        sessionkey: (0, _lodash2.default)(o, "loginSessionKey", "")
                    }).then(function(e) {
                        e.isok ? (r.vm.showMask = !0, r.$apply()) : tools.showModal(e.Msg, !1);
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodsValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.GetUserGoodsCommentList, {
                        appid: a,
                        userid: n.Id,
                        pageIndex: (0, _lodash2.default)(t, "pageindex", 1),
                        pageSize: (0, _lodash2.default)(t, "pagesize", 10),
                        haveimg: (0, _lodash2.default)(t, "sel", -1)
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getShowGoodValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.GetGoodsCommentList, {
                        appid: a,
                        userid: n.Id,
                        goodsid: (0, _lodash2.default)(t, "goodsid", "") || t,
                        pageIndex: (0, _lodash2.default)(t, "pageindex", 1),
                        pageSize: (0, _lodash2.default)(t, "pagesize", 10),
                        haveimg: (0, _lodash2.default)(t, "sel", -1)
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    pointValue: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, a = r.globalData.appid, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, core.getUserInfo();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return n = e.t0, e.abrupt("return", http.post(_addr2.default.PointsGoodsComment, {
                        id: t,
                        appid: a,
                        userid: n.Id
                    }));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetVaildCode: function(e) {
        var t = {
            type: 1,
            phonenum: e.phone,
            agentqrcodeid: e.agentqrcodeid
        };
        return http.post(_addr2.default.GetVaildCode, t);
    },
    SaveUserInfo: function(e) {
        return http.post(_addr2.default.SaveUserInfo, e);
    },
    GetTableNoQrCode: function(e) {
        var t = _wepy2.default.$instance.globalData.appid;
        return http.post(_addr2.default.GetTableNoQrCode, {
            appid: t,
            orderid: e,
            bussinessAppid: "wxe569b2c80b845da7"
        });
    },
    payCtOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = _wepy2.default.$instance, e.next = 3, http.post(_addr2.default.addPayContentOrder, {
                        appId: r.globalData.appid,
                        openId: r.globalData.userInfo.OpenId,
                        contentId: t.id,
                        buyMode: t.mode
                    });

                  case 3:
                    if (a = e.sent, !a.isok) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", a.dataObj);

                  case 8:
                    return tools.showModal(a.Msg, !1), e.abrupt("return", !1);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    miaoShaDeail: function(e, t) {
        var r = this, a = _wepy2.default.$instance;
        http.post(_addr2.default.GetFlashItem, {
            appId: a.globalData.appid,
            openId: a.globalData.userInfo.OpenId,
            flashItemID: e
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                var o, s, i, u, c, d;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!n.isok) {
                            e.next = 30;
                            break;
                        }
                        if (o = n.dataObj, o.goodInfo.selImg = o.goodInfo.img, o.goodInfo.pickspecification) for (o.goodInfo.pickspecification = JSON.parse(o.goodInfo.pickspecification), 
                        s = 0, i = o.goodInfo.pickspecification.length; s < i; s++) for (u = 0, c = o.goodInfo.pickspecification[s].length; u < c; u++) o.goodInfo.pickspecification[s].items[u].sel = !1;
                        if (e.t0 = (0, _lodash2.default)(a.globalData, "storeConfig", ""), e.t0) {
                            e.next = 9;
                            break;
                        }
                        return e.next = 8, core.getStoreConfig();

                      case 8:
                        e.t0 = e.sent;

                      case 9:
                        d = e.t0, o.store = d.storeInfo.funJoinModel, o.content_fmt = o.goodInfo.description.replace(/[<]br[\/][>]/g, '<div style="height:20px"></div>'), 
                        o.content_fmt = o.goodInfo.description.replace(/&nbsp;/g, '<span style="margin-left:16rpx;"></span>'), 
                        o.content_fmt = o.goodInfo.description.replace(/[<][\/]p[>][<]p[>]/g, "<div></div>"), 
                        o.content_fmt = tools.richChange(o.goodInfo.description, t), o.goodInfo.danMaiPrice = o.goodInfo.discountPricestr, 
                        o.goodInfo.yuanJiaPrice = o.goodInfo.priceStr, o.goodInfo.itemPrice = o.goodInfo.discountPricestr, 
                        o.goodInfo.stockStr = o.goodInfo.stock, o.goodInfo.totalCount = 1, o.goodInfo.specId = "", 
                        o.goodInfo.type = "miaosha", o.type = "miaosha", o.userInfo = a.globalData.userInfo, 
                        tools.setPageTitle(o.goodInfo.name), t.vm = o, t.$apply(), t.miaoDeal = setInterval(function(e) {
                            var r = [], a = _utils.timeTools.getTimeSpan(o.flashPayInfo.end);
                            r = _utils.timeTools.formatMillisecond(a), t.vm.countDownArray = r, t.setData({
                                "vm.countDownArray": r
                            });
                        }, 1e3), e.next = 33;
                        break;

                      case 30:
                        return e.next = 32, tools.showModal(n.Msg, !1);

                      case 32:
                        tools.goBack(1);

                      case 33:
                      case "end":
                        return e.stop();
                    }
                }, e, r);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    },
    showSignin: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, n = a.storeInfo.funJoinModel.PlayCardConfigModel, n && (o = n.ShowPage, 
                    t.signinRules = n, t.showsigninFloat = 1 == o, t.signinRules = n, r.globalData.showsigninFloat = t.showsigninFloat, 
                    core.getUserPlayCard(t), t.$apply());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    storeInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "storeConfig", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getStoreConfig();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, t.signinRules = a.storeInfo.funJoinModel.PlayCardConfigModel, t.$apply();

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getUserPlayCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.get(_addr2.default.GetUserPlayCard, {
                        appId: r.globalData.appid,
                        userId: a.Id
                    }).then(function(e) {
                        e.isok ? e.dataObj && (e.dataObj.listPlayCardLog.forEach(function(e, r) {
                            e.dateStr = t.singinDate[r];
                        }), t.userSignin = e.dataObj, t.$apply()) : tools.showModal(e.Msg, !1);
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    playCard: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.PlayCard, {
                        appId: r.globalData.appid,
                        userId: a.Id
                    }).then(function(e) {
                        e.isok ? (e.dataObj.listPlayCardLog.forEach(function(e, r) {
                            e.dateStr = t.singinDate[r];
                        }), t.userSignin = e.dataObj, t.$apply()) : tools.showModal(e.Msg, !1);
                    }));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    addQrCodeScanRecord: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("" != t) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 7, core.getUserInfo();

                  case 7:
                    e.t0 = e.sent;

                  case 8:
                    return a = e.t0, e.abrupt("return", http.post(_addr2.default.AddQrCodeScanRecord, {
                        appId: r.globalData.appid,
                        openId: a.OpenId,
                        qrCodeId: t
                    }));

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    UpdateNewsPV: function(e, t) {
        http.post(_addr2.default.UpdateNewsPV, {
            id: e
        }).then(function(e) {
            e.isok && (t.vm.Pv = t.vm.Pv + 1, t.$apply());
        });
    },
    GetAllVipRights: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getVipInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    a = e.t0, http.post(_addr2.default.GetAllVipRights, {
                        appId: r.globalData.appid
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                            var o, s;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!r.isok) {
                                        e.next = 7;
                                        break;
                                    }
                                    for (o = 0, s = r.dataObj.length; o < s; o++) a.levelInfo.level == r.dataObj[o].level && (o + 1 == r.dataObj.length ? t.vm.index = r.dataObj.length : t.vm.index = o + 1);
                                    t.vm.list = r.dataObj, t.vm.info = a, t.$apply(), e.next = 10;
                                    break;

                                  case 7:
                                    return e.next = 9, tools.showModal(r.Msg, !1);

                                  case 9:
                                    tools.goBack(1);

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, n);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetFullReductionByAid: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = (0, _lodash2.default)(_wepy2.default.$instance.globalData, "aid", ""), 
                    e.next = 3, http.post(_addr2.default.GetFullReductionByAid, {
                        aid: t
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 10;
                        break;
                    }
                    if (!r.dataObj) {
                        e.next = 9;
                        break;
                    }
                    return e.abrupt("return", r.dataObj);

                  case 9:
                    return e.abrupt("return", null);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetBargainFreightFee: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return a = e.t0, e.next = 9, http.post(_addr2.default.GetBargainFreightFee, {
                        city: t.city,
                        buid: t.build,
                        province: t.province,
                        openId: a.OpenId,
                        appId: r.globalData.appid
                    });

                  case 9:
                    if (n = e.sent, !n.isok) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", n.dataObj);

                  case 14:
                    return e.abrupt("return", "");

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    GetOrderRecordCount: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(t.globalData, "userInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getUserInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return r = e.t0, e.next = 9, http.get(_addr2.default.GetOrderRecordCount, {
                        openid: r.OpenId,
                        appId: t.globalData.appid
                    });

                  case 9:
                    if (a = e.sent, !a.isok) {
                        e.next = 14;
                        break;
                    }
                    return e.abrupt("return", a.opostdata);

                  case 14:
                    return e.abrupt("return", "");

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getGoodInfo: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a, n, o, s, i, u, c, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = _wepy2.default.$instance, e.t0 = (0, _lodash2.default)(r.globalData, "vipInfo", ""), 
                    e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, core.getVipInfo();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    if (a = e.t0, e.t1 = (0, _lodash2.default)(r.globalData, "userInfo", ""), e.t1) {
                        e.next = 12;
                        break;
                    }
                    return e.next = 11, core.getUserInfo();

                  case 11:
                    e.t1 = e.sent;

                  case 12:
                    return n = e.t1, e.next = 15, http.get(_addr2.default.GetGoodInfo, {
                        pid: t,
                        version: 2,
                        levelid: a.levelid,
                        appid: r.globalData.appid
                    });

                  case 15:
                    if (o = e.sent, !o.isok) {
                        e.next = 30;
                        break;
                    }
                    if (s = o.msg, s.userInfo = n, s.hotGoods = o.hotGoods, s.imgurl = o.msg.img, s.selImg = o.msg.img, 
                    s.imgurl_fmt = o.msg.img_fmt, s.slideimgs && s.slideimgs_fmt && (s.slideimgs = s.slideimgs.split(","), 
                    s.slideimgs_fmt = s.slideimgs_fmt.split("|")), s.pickspecification) for (s.pickspecification = JSON.parse(s.pickspecification), 
                    i = 0, u = s.pickspecification.length; i < u; i++) for (c = 0, d = s.pickspecification[i].length; c < d; c++) s.pickspecification[i].items[c].sel = !1;
                    return s.content_fmt = tools.richChange(s.description, this), tools.setPageTitle(s.name), 
                    e.abrupt("return", s);

                  case 30:
                    return e.next = 32, tools.showModal(o.msg, !1);

                  case 32:
                    tools.goBack(1);

                  case 33:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    CancelOrder: function() {
        function e(e) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, core.getUserInfo();

                  case 2:
                    return r = e.sent, e.next = 5, http.post(_addr2.default.CancelOrder, {
                        orderId: t,
                        sessionkey: (0, _lodash2.default)(r, "loginSessionKey", ""),
                        State: 19
                    });

                  case 5:
                    if (a = e.sent, tools.showModal(a.Msg, !1), !a.isok) {
                        e.next = 11;
                        break;
                    }
                    return e.abrupt("return", !0);

                  case 11:
                    return e.abrupt("return", !1);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSub: function() {
        function e() {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = (0, _lodash2.default)(_wepy2.default.$instance.globalData, "aid", ""), 
                    e.next = 3, http.get(_addr2.default.GetSubscribePageSetting, {
                        aid: t
                    });

                  case 3:
                    if (r = e.sent, !r.isok) {
                        e.next = 12;
                        break;
                    }
                    return r.page = JSON.parse(r.page), r.page.coms[0].openpay = r.funJoinModel.OpenYuyuePay, 
                    r.page.coms[0].paycount = r.funJoinModel.YuyuePayCount, r.page.coms[0].paytype = r.funJoinModel.YuyuePayType, 
                    e.abrupt("return", r.page.coms[0]);

                  case 12:
                    return e.abrupt("return", "");

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }()
}, canvas = {
    getShare: function() {
        var e = this, t = _wepy2.default.$instance, r = .87 * wx.getSystemInfoSync().windowWidth, a = .75 * wx.getSystemInfoSync().windowHeight, n = wx.createCanvasContext("firstCanvas");
        http.get(_addr2.default.GetShare, {
            appId: t.globalData.appid
        }).then(function() {
            var o = _asyncToGenerator(regeneratorRuntime.mark(function o(s) {
                var i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!s.isok) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.pathStatus(s.obj, r, a);

                      case 3:
                        i = e.sent, t.globalData.adImg = s.obj.ADImg.length ? s.obj.ADImg[0].url : "", t.globalData.adTitle = s.obj.ADTitle, 
                        n.drawImage(i.bg.tempFilePath, 0, 0, r, a), 1 == i.status && n.drawImage(i.icon.tempFilePath, i.xicon, i.yicon, i.w_icon, i.hicon), 
                        n.drawImage(i.img.tempFilePath, i.xstore, i.ystore, i.wstore, i.hstore), n.drawImage(i.qrcode.tempFilePath, i.xqrcode, i.yqrcode, i.wqrcode, i.hqrcode), 
                        4 != i.status && (n.setFillStyle("rgba(0, 0, 0, 0.2)"), n.fillRect(i.xng, i.yng, i.wng, i.hng), 
                        n.setFontSize(16), n.setFillStyle("#ffffff"), n.fillText(i.name, i.xname, i.yname), 
                        n.setFontSize(13), n.fillText(i.content, i.xcon, i.ycon), n.setFontSize(10), 3 != i.status ? (n.setFillStyle("#DACACA"), 
                        n.fillText("长按进入店铺", i.xtxt, i.ytxt)) : n.setFillStyle("#ffffff"), n.fillText("长按二维码", i.xtxt1, i.ytxt1)), 
                        n.draw(), e.next = 15;
                        break;

                      case 14:
                        tools.showModal(s.msg, !1);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, o, e);
            }));
            return function(e) {
                return o.apply(this, arguments);
            };
        }());
    },
    getQrcode: function(e, t) {
        var r = this, a = _wepy2.default.$instance;
        http.get(_addr2.default.GetProductQrcode, {
            version: 2,
            pid: e.pid,
            showQrcode: 1,
            typeName: e.type,
            recordId: e.recordId,
            showprice: e.showprice,
            appId: a.globalData.appid,
            productType: e.protype || 0,
            flashItemId: e.flashId || ""
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                var n, o, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!a.isok) {
                            e.next = 32;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.pathCanvas(a.dataObj.qrCode, t);

                      case 3:
                        n = e.sent, o = .87 * wx.getSystemInfoSync().windowWidth, s = .75 * wx.getSystemInfoSync().windowHeight, 
                        i = wx.createCanvasContext("firstCanvas"), i.setFillStyle("white"), i.fillRect(0, 0, o, s), 
                        i.drawImage(n.img.tempFilePath, 0, 0, o, o), i.drawImage(n.qrcode.tempFilePath, .64 * o, .74 * s, .23 * o, .23 * o), 
                        i.setFontSize(12), i.setFillStyle("#FF6700"), i.fillText("长按查看商品", .65 * o, .96 * s), 
                        i.setFontSize(14), i.setFillStyle("#333333"), i.fillText(n.title.substr(0, 9), .1 * o, .77 * s), 
                        i.fillText(n.title.substr(9, 9), .1 * o, .81 * s), i.fillText(n.title.substr(18, 9), .1 * o, .85 * s), 
                        0 != n.price && (i.setFontSize(14), i.setFillStyle("#9C9C9C"), i.fillText("原价", .1 * o, .91 * s), 
                        i.fillText("￥" + n.price, .2 * o, .91 * s)), i.fillText("现价", .1 * o, .96 * s), 
                        i.setFontSize(20), i.setFillStyle("#FF6700"), i.fillText(n.disprice, .25 * o, .96 * s), 
                        i.setFontSize(14), i.setFillStyle("#FF6700"), i.fillText("￥", .2 * o, .96 * s), 
                        i.draw(), t.showCanvas = !0, t.$apply(), e.next = 33;
                        break;

                      case 32:
                        tools.showModal(a.Msg, !1);

                      case 33:
                        wx.hideLoading();

                      case 34:
                      case "end":
                        return e.stop();
                    }
                }, e, r);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    },
    barCanvas: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o, s, i, u, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _utils.canvasTools.downFile(t.replace(/^http:/, "https:"));

                  case 2:
                    return a = e.sent, e.next = 5, _utils.canvasTools.downFile("https://j.vzan.cc/miniapp/img/enterprise/bn-share.png");

                  case 5:
                    n = e.sent, o = wx.getSystemInfoSync().windowWidth, s = wx.getSystemInfoSync().windowHeight, 
                    i = wx.createCanvasContext("bargainCanvas"), u = "￥", c = r.vm.obj.FloorPriceStr, 
                    i.drawImage(n.tempFilePath, 0, 0, .8 * o, .74 * s), i.drawImage(a.tempFilePath, .25 * o, .25 * s, .3 * o, .3 * o), 
                    i.setFontSize(25), i.setFillStyle("white"), i.fillText(u, .23 * o, .17 * s), i.setFontSize(35), 
                    i.setFillStyle("white"), i.fillText(c, .29 * o, .17 * s), i.draw(), wx.hideLoading(), 
                    r.vm.barShow = !1, r.barCanvas = !0, r.$apply();

                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSellCanvas: function() {
        function e(e, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
            var a, n, o = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = _wepy2.default.$instance, e.next = 3, core.bindSale(t);

                  case 3:
                    n = e.sent, tools.showLoading(), http.get(_addr2.default.GetProductQrcode, {
                        saleManId: t,
                        storeSale: 1,
                        recordId: n.obj,
                        appId: a.globalData.appid
                    }).then(function() {
                        var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var a, s, i, u;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.isok) {
                                        e.next = 20;
                                        break;
                                    }
                                    return e.next = 3, _utils.canvasTools.downFile(t.dataObj.qrCode.replace(/^http:/, "https:"));

                                  case 3:
                                    a = e.sent, s = wx.getSystemInfoSync().windowWidth, i = wx.getSystemInfoSync().windowHeight, 
                                    u = wx.createCanvasContext("sellCanvas"), u.setFillStyle("white"), u.fillRect(0, 0, s, i), 
                                    u.setFontSize(16), u.setFillStyle("#333333"), u.setTextAlign("center"), u.fillText(r.vm.nickName, .38 * s, .07 * i), 
                                    u.drawImage(a.tempFilePath, .13 * s, .12 * i, .5 * s, .5 * s), u.draw(), r.record = n.obj, 
                                    r.showMask = !0, r.$apply(), e.next = 21;
                                    break;

                                  case 20:
                                    tools.showModal(t.Msg, !1);

                                  case 21:
                                    wx.hideLoading();

                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, o);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    getSellQrcode: function(e, t) {
        var r = this, a = _wepy2.default.$instance;
        tools.showLoading(), http.get(_addr2.default.GetProductQrcode, {
            saleManId: e,
            applySale: 1,
            appId: a.globalData.appid
        }).then(function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(a) {
                var n, o, s, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!a.isok) {
                            e.next = 19;
                            break;
                        }
                        return e.next = 3, _utils.canvasTools.downFile(a.dataObj.qrCode.replace(/^http:/, "https:"));

                      case 3:
                        n = e.sent, o = wx.getSystemInfoSync().windowWidth, s = wx.getSystemInfoSync().windowHeight, 
                        i = wx.createCanvasContext("sellCanvas"), i.setFillStyle("white"), i.fillRect(0, 0, o, s), 
                        i.setFontSize(16), i.setFillStyle("#333333"), i.setTextAlign("center"), i.fillText(t.vm.nickName, .38 * o, .07 * s), 
                        i.drawImage(n.tempFilePath, .13 * o, .12 * s, .5 * o, .5 * o), i.draw(), t.showMask = !0, 
                        t.$apply(), e.next = 20;
                        break;

                      case 19:
                        tools.showModal(a.Msg, !1);

                      case 20:
                        wx.hideLoading();

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, r);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }());
    }
};

module.exports = {
    http: http,
    core: core,
    pay: pay,
    canvas: canvas,
    tools: tools,
    pro: pro
};
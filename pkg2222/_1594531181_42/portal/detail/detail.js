var e = require("model/detail.js"), t = require("../../core/state.js"), i = require("../../core/sys.js"), n = require("../../portal/index/model/mall.js"), a = (require("../../utils/firstTips.js").flags.showShoppingCarTips, 
require("../../core/api.js")), o = require("../../utils/enum.js"), s = require("../../foundation/base/page.js"), r = require("./detail.pageaction.js"), d = require("../../utils/util.js");

s({
    pageActionConfig: r,
    data: {
        bInPreview: !1,
        detail: {},
        skuHidden: !0,
        skuConfirmable: !1,
        skuMaskAnimation: {},
        skuBoxAnimation: {},
        goodsCount: 0,
        skuImg: void 0,
        skuPrice: 0,
        skuMarketPrice: 0,
        skuCode: "需选择相关参数",
        skuNum: 268435455,
        phoneModel: i.phoneModel(),
        skuHeight: 0,
        skuScrollHeight: 0,
        bSkuScroll: !1,
        skuScrollTop: 0,
        bannerHeight: 0,
        priceY: 0,
        toastHidden: !0,
        toast: "添加成功",
        hasAddGoodsSucc: !1,
        lastIndexSet: {},
        bannerCurrent: 0,
        maxPrice: 0,
        minPrice: 0,
        screenHeight: i.screenHeight - 64,
        screenWidth: i.screenWidth,
        hasFriendChoice: !1,
        isPresell: !1,
        presellStatus: "enUnReserve"
    },
    model: {
        detail: {},
        bAddWishList: !1,
        stocks: {}
    },
    onShareAppMessage: function(e) {
        return this.model.detail ? {
            title: this.model.detail.item.base.item_name,
            path: "portal/detail/detail?code=" + this.model.detail.item.base.item_code
        } : {};
    },
    onLoad: function(t) {
        console.error("detail onLoad: ", t);
        var n = this;
        if (n.maskAnimation = a.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), n.boxAnimation = a.createAnimation({
            duration: 200,
            timingFunction: "ease-in-out"
        }), n.thumbShrinkAnimation = a.createAnimation({
            duration: 500,
            timingFunction: "ease"
        }), n.priceShrinkAnimation = a.createAnimation({
            duration: 500,
            timingFunction: "ease"
        }), n.skuBodyShrinkAnimation = a.createAnimation({
            duration: 500,
            timingFunction: "ease"
        }), t.code) n.model = new e({
            code: t.code,
            scene: t.scene || 0
        }); else {
            var o = "", s = decodeURIComponent(t.scene);
            switch (t.scene[0]) {
              case "0":
                o = s.substring(1);
            }
            n.model = new e({
                code: o,
                scene: 0
            });
        }
        n.drawDashLine("detail-summary__seperator", 5, 5, "#E5E5E5"), n.drawDashLine("detail-sku__seperator", 5, 5, "#E5E5E5"), 
        n.setData({
            hasCanvasId: !!i.experienceCanvasId,
            from: t.from || ""
        }), n.fromSkuId = t.sku_id;
    },
    onShow: function() {
        var e = this;
        e.forbidReload ? e.forbidReload = !1 : e.data.skuHidden && (setTimeout(function() {
            e.model.state == t.loading && a.showLoading({
                title: "正在加载"
            });
        }, 300), e.model.clear(), e.model.load({
            success: function() {
                e.model.detail.item.skus = e.genSkuViewData(e.model.detail.item.stocks, e.model.detail.item.stock_pics);
                var t = e.model.detail.item.skus.map(function(e) {
                    return e.items.map(function(e) {
                        return e.id;
                    });
                });
                e.model.stocks = e.genSkuMapData(e.model.detail.item.stocks), e.initSkuPath(t, e.model.stocks), 
                console.log("self.model.detail.item.skus", e.model.detail.item.skus), console.log("self.model.stocks", e.model.stocks), 
                console.log("self.skuPath", e.skuPathSet), e.model.detail.item.skus.forEach(function(t) {
                    t.items.forEach(function(t) {
                        e.skuPathSet[t.id] || (t.disable = !0);
                    });
                });
                var n = 0, o = 268435455, s = 0, r = 16777215;
                e.model.detail.item.stocks.forEach(function(e) {
                    e.stock_price > n && (n = e.stock_price), e.stock_price < o && (o = e.stock_price), 
                    e.market_price > s && (s = e.market_price), e.market_price < r && (r = e.market_price);
                }), e.model.areas = e.genAreaViewData(), 0 == e.data.bannerHeight && (e.data.bannerHeight = e.model.detail.item.pics.length > 0 && e.model.detail.item.pics[0].width ? i.screenWidth * (e.model.detail.item.pics[0].height / e.model.detail.item.pics[0].width) : i.screenWidth);
                var d = "", l = !1;
                try {
                    (l = e.model.detail.item.market.pre_sale) && (d = new Date(1e3 * e.model.detail.item.base.sales_time).format("MM月dd日 hh:mm开始发售"), 
                    console.info("isPresell, saleTime:", e.model.detail.item.base.sales_time, "saleTips:", d));
                } catch (e) {}
                if (e.setData({
                    detail: e.model.detail,
                    goodsCount: e.model.goods_total,
                    skuPrice: e.model.detail.item.stocks[0].stock_price,
                    areas: e.model.areas,
                    bannerImg: e.model.detail.item.pics,
                    bannerHeight: e.data.bannerHeight,
                    maxPrice: n,
                    minPrice: o,
                    maxMarketPrice: s,
                    minMarketPrice: r,
                    bInPreview: i.isExperience() && !e.model.is_experience_whitelist,
                    detailTips: d,
                    isPresell: l,
                    hasFriendChoice: e.model.has_friend_choice,
                    presellStatus: e.model.reserve_goods_status
                }), a.hideLoading(), e.fromSkuId) {
                    var c = null;
                    e.model.detail.item.stocks.forEach(function(t) {
                        t.sku_code == e.fromSkuId && (c = t);
                    }), c && c.stock_attr_info.forEach(function(t) {
                        var i = t.attr_name.id, n = t.attr_value.id;
                        e.model.detail.item.skus.forEach(function(t, a) {
                            t.id == i && t.items.forEach(function(t, i) {
                                t.id == n && (e.shouldShrinkSkuAreaWithoutAnimation = !0, e.onClickSkuItem({
                                    currentTarget: {
                                        dataset: {
                                            index: i,
                                            group: a,
                                            isfromskuarea: !0
                                        }
                                    }
                                }));
                            });
                        });
                    });
                } else e.model.detail.item.skus.forEach(function(t, i) {
                    1 == t.items.length && (e.shouldShrinkSkuAreaWithoutAnimation = !0, e.onClickSkuItem({
                        currentTarget: {
                            dataset: {
                                group: i,
                                index: 0,
                                isfromskuarea: !0
                            }
                        }
                    }));
                });
            },
            fail: function() {
                a.hideLoading(), a.showToast({
                    title: "拉取数据失败",
                    image: "/assets/load_fail.png",
                    duration: 1e3
                });
            }
        }));
    },
    onBannerImageLoad: function(e) {
        console.log("onBannerImageLoad", e.detail);
        var t = e.detail.height / e.detail.width * i.windowWidth;
        this.setData({
            bannerHeight: t > this.data.bannerHeight ? this.data.bannerHeight : t
        });
    },
    onBannerChange: function(e) {
        var t = e.detail.current;
        this.setData({
            bannerCurrent: t
        });
    },
    onClickExpandArea: function(e) {
        var t = parseInt(e.currentTarget.dataset.index);
        this.model.areas[t].hidden = !this.model.areas[t].hidden, this.setData({
            areas: this.model.areas
        });
    },
    onClickBannerImage: function(e) {
        var t = (this.data.skuImg || this.data.bannerImg).map(function(e) {
            return e.pic_url + "/0";
        }), i = e.currentTarget.dataset.bSkuThumb;
        a.previewImage({
            urls: t,
            current: t[i ? 0 : this.data.bannerCurrent]
        }), this.forbidReload = !0;
    },
    onClickShoppingCar: function() {
        a.navigateTo({
            url: "/shopping-cart/pages/index/index"
        });
    },
    onClickHome: function() {
        this.model.scene == o.DetailPageScene.Home ? a.navigateBack() : a.navigateTo({
            url: "/portal/index/index"
        });
    },
    onClickShareBtn: function(e) {
        var t = this, n = t.model.detail.item, o = d.appendQueryObject("/portal/share/share", {
            src_wxapp_id: i.appid(),
            src_wxapp_path: encodeURIComponent("/portal/detail/detail?code=" + n.base.item_code),
            src_wxapp_icon: encodeURIComponent(t.model.icon_url || ""),
            src_wxapp_name: encodeURIComponent(t.model.brand_name || ""),
            src_wxapp_product_img: encodeURIComponent(n.pics[0].pic_url || ""),
            src_wxapp_product_name: encodeURIComponent(n.base.item_name || ""),
            src_wxapp_product_price: n.stocks[0].stock_price,
            src_wxapp_product_code: encodeURIComponent(n.base.item_code || "")
        }), s = t.model.is_experience_whitelist ? "trial" : "release";
        a.navigateToMiniProgram({
            appId: "wxe51f5e3bc894610d",
            path: o,
            envVersion: s,
            forceEnvVersion: !0
        });
    },
    showSkuArea: function(e) {
        var t = this;
        e.currentTarget.dataset.unreserve ? this.model.unReserveGoods({
            code: this.model.detail.item.base.item_code,
            success: function(e) {
                a.showToast({
                    title: "取消成功",
                    toast: "success"
                }), t.setData({
                    presellStatus: e.reserve_goods_status
                });
            },
            fail: function(e) {
                10023 == e.errcode ? (a.showModal({
                    content: "取消失败，商品已开售",
                    showCancel: !1
                }), t.setData({
                    presellStatus: "enUnReserve",
                    isPresell: !1,
                    detailTips: ""
                })) : 10022 == e.errcode ? (a.showModal({
                    content: "取消失败，商品即将开售",
                    showCancel: !1
                }), t.setData({
                    presellStatus: "enReserveCanNotCancel"
                })) : a.showModal({
                    content: "取消失败，请稍后重试",
                    showCancel: !1
                });
            }
        }) : (0 == this.model.detail.item.skus.length && this.setData({
            skuConfirmable: !0,
            skuCode: this.getCurrentSkuCode() || this.getCurrentUnSelectTips(),
            skuNum: this.getCurrentSkuNum() || 0
        }), this.maskAnimation.opacity(.5).step(), this.boxAnimation.translateY(0).step(), 
        this.setData({
            skuHidden: !1,
            skuMaskAnimation: this.maskAnimation.export(),
            skuBoxAnimation: this.boxAnimation.export(),
            detail: this.model.detail,
            skuImg: this.data.skuImg || this.data.bannerImg
        }), this.updateSkuMargin(), 0 == t.data.skuHeight && setTimeout(function() {
            var e = a.createSelectorQuery();
            e.select(".detail-sku__box").boundingClientRect(), e.select(".detail-sku__body").boundingClientRect(), 
            e.select(".detail-sku__group").boundingClientRect(), e.exec(function(e) {
                var n = e[0], a = e[1], o = e[2];
                i.screenWidth;
                console.log("boxRes: ", n, "bodyRes: ", a, "groupRes: ", o);
                var s = .3 * i.screenHeight, r = a.height > s, d = .85 * i.screenHeight;
                r = n.height > d, t.thumbShrinkAnimation.translateX(0).scale(1).translateY(0).step(), 
                t.priceShrinkAnimation.translateY(0).translateX(0).step(), t.skuBodyShrinkAnimation.translateY(0).step(), 
                t.shouldShrinkSkuAreaWithoutAnimation && (t.hasManScroll = !0, t.shouldShrinkSkuAreaWithoutAnimation = !1, 
                t.shrinkSkuAreaWithoutAnimation()), t.setData({
                    skuBoxHeight: r ? d : n.height,
                    skuHeight: r ? s : 0,
                    bSkuScroll: r,
                    skuScrollHeight: o.height - 1,
                    thumbShrinkAnimation: t.thumbShrinkAnimation.export(),
                    priceShrinkAnimation: t.priceShrinkAnimation.export(),
                    skuBodyShrinkAnimation: t.skuBodyShrinkAnimation.export(),
                    bShrinkAnimation: !1
                });
            });
        }, 100));
    },
    updateSkuMargin: function() {
        var e = this, t = a.createSelectorQuery();
        t.selectAll(".detail-sku__item-attr").boundingClientRect();
        var n = 0;
        t.exec(function(t) {
            console.log(JSON.stringify(t)), t.length > 0 && t[0].every(function(a, o) {
                if (0 == a.dataset.index) n = a.left; else if (a.left == n) {
                    var s = a.dataset.group, r = a.dataset.index - 1, d = null;
                    t[0].every(function(e) {
                        return e.dataset.group != s || e.dataset.index != r || (d = e, !1);
                    });
                    var l = i.screenWidth / 375;
                    if (i.screenWidth - d.right - 31 * l >= d.width) {
                        var c = a.dataset.index;
                        return e.model.detail.item.skus[s].items[c].fixMargin = !0, e.setData({
                            detail: e.model.detail
                        }), setTimeout(e.updateSkuMargin, 100), !1;
                    }
                    return !0;
                }
                return !0;
            });
        });
    },
    onClickSkuItem: function(e) {
        var t = this, i = e.currentTarget.dataset, n = i.index, a = i.group, o = i.isfromskuarea, s = (i.imgsku, 
        t.model.detail.item.skus[a].items[n]);
        if (!s.disable) {
            s.selected = !s.selected, t.model.detail.item.skus[a].selected = s.selected;
            var r = !1;
            if (s.selected) t.model.detail.item.skus[a].selectedIndex = n, t.model.detail.item.skus[a].items.forEach(function(e) {
                e.selected = e == s && e.selected;
            }), r = !0, t.model.detail.item.skus.forEach(function(e) {
                r = e.selected && r;
            }), !t.data.bSkuScroll || t.data.bShrinkAnimation || t.hasManScroll || (t.hasManScroll = !0, 
            t.onSkuScroll({
                detail: {
                    scrollTop: 1
                }
            })); else if (t.model.detail.item.skus[a].selectedIndex = -1, t.data.bSkuScroll && t.hasManScroll) {
                var d = !1;
                t.model.detail.item.skus.forEach(function(e) {
                    e.selected && (d = !0);
                }), t.hasManScroll = d;
            }
            t.model.detail.item.skus.forEach(function(e, i) {
                i != a && e.items.forEach(function(i) {
                    var n = "";
                    -1 != e.selectedIndex ? e.items[e.selectedIndex].selected = !1 : n = n, i.selected = !0, 
                    t.model.detail.item.skus.forEach(function(e) {
                        e.items.forEach(function(e) {
                            e.selected && (n += (0 != n.length ? "|" : "") + e.id);
                        });
                    }), i.disable = !(t.skuPathSet[n] && t.skuPathSet[n] > 0), i.selected = !1, -1 != e.selectedIndex ? e.items[e.selectedIndex].selected = !0 : i.selected = i.selected;
                });
            });
            var l = {
                detail: t.model.detail,
                skuConfirmable: r,
                skuImg: t.getCurrentSkuImg() || t.model.detail.item.pics,
                skuPrice: t.getCurrentSkuPrice() || t.model.detail.item.stocks[0].stock_price,
                skuCode: t.getCurrentSkuCode() || t.getCurrentUnSelectTips(),
                skuNum: t.getCurrentSkuNum() || 0,
                skuMarketPrice: t.getCurrentSkuMarketPrice() || 0
            };
            o || (l.bannerImg = l.skuImg), l.bannerCurrent = 0, t.setData(l);
        }
    },
    getCurrentSkuImg: function() {
        var e, t, i, n = this;
        return n.model.detail.item.skus.forEach(function(a) {
            i || a.selected && (e = a.id, t = a.items[a.selectedIndex].id, n.model.detail.item.stock_pics.forEach(function(n) {
                i || n.attr_key_id == e && n.attr_val_id == t && 0 == (i = n.stock_pic).length && (i = n.stock_pic_info);
            }));
        }), i;
    },
    getCurrentSkuPrice: function() {
        var e = this, t = "";
        return e.model.detail.item.skus.forEach(function(e) {
            e.selected && (t += (t.length > 0 ? "|" : "") + e.items[e.selectedIndex].id);
        }), e.model.stocks[t] ? e.model.stocks[t].stock_price : void 0;
    },
    getCurrentSkuCode: function() {
        var e = this, t = "";
        return e.model.detail.item.skus.forEach(function(e) {
            e.selected && (t += (t.length > 0 ? "|" : "") + e.items[e.selectedIndex].id);
        }), e.model.stocks[t] ? e.model.stocks[t].merchant_code || "暂无" : void 0;
    },
    getCurrentSkuNum: function() {
        var e = this, t = "";
        return e.model.detail.item.skus.forEach(function(e) {
            e.selected && (t += (t.length > 0 ? "|" : "") + e.items[e.selectedIndex].id);
        }), e.model.stocks[t] ? e.model.stocks[t].stock_number || 0 : 268435455;
    },
    getCurrentSkuMarketPrice: function() {
        var e = this, t = "";
        return e.model.detail.item.skus.forEach(function(e) {
            e.selected && (t += (t.length > 0 ? "|" : "") + e.items[e.selectedIndex].id);
        }), e.model.stocks[t] ? e.model.stocks[t].market_price || 0 : void 0;
    },
    getCurrentUnSelectTips: function() {
        for (var e = 0; e < this.model.detail.item.skus.length; e++) {
            var t = this.model.detail.item.skus[e];
            if (!t.selected) return "请选择" + t.name;
        }
        return "";
    },
    addStock: function(e) {
        var o = this;
        if (e && e.sku_code) {
            if (this.model.bAddWishList) this.model.addGoods({
                skuid: e.sku_code,
                code: e.item_code,
                success: function(e) {
                    console.log(e), o.showAddGoodsSuccToast(), o.clearSkuSelectState(), e.add_before || o.setData({
                        goodsCount: o.data.goodsCount + 1
                    });
                },
                fail: function(e) {
                    a.showToast({
                        title: "添加失败",
                        image: "/assets/load_fail.png",
                        duration: 1e3
                    });
                }
            }); else if (this.model.bReserve) this.model.reserveGoods({
                code: e.item_code,
                skuid: e.sku_code,
                success: function(e) {
                    console.log(e), o.showAddGoodsSuccToast(), o.clearSkuSelectState(), o.setData({
                        presellStatus: e.reserve_goods_status
                    });
                },
                fail: function(e) {
                    10021 == e.errcode ? (a.showModal({
                        content: "订阅失败，商品已开售",
                        showCancel: !1
                    }), o.setData({
                        isPresell: !1,
                        detailTips: ""
                    })) : a.showModal({
                        content: "订阅失败，请稍后重试",
                        showCancel: !1
                    });
                }
            }); else {
                var s = [ {
                    item_code: e.item_code,
                    sku_id: e.sku_code,
                    desc: this.data.areas[0].desc,
                    unit_price: e.stock_price,
                    quantity: 1,
                    appid: i.appid()
                } ], r = "/libs/shoppingcartcomm/portal/order/order?goods_list=" + encodeURIComponent(JSON.stringify(s)) + "&from=directlybuy&mch_name=" + i.appName() + "&mch_logo_url=" + encodeURIComponent(n.state == t.loaded ? n.canvas.header.icon_url : "http://mmbiz.qpic.cn/mmbiz_png/24pu5Empr5xkZBhG9biaXRPspQnPGCIdaqfswX6rRyPYTNfKe1ohU3Neyicwvw5Ebg2YBhL7cBE5oZYXeic0pulDw/0?wx_fmt=png");
                a.navigateTo({
                    url: r
                });
            }
            this.hideSkuArea();
        }
    },
    onClickConfirm: function(e) {
        if (this.data.skuConfirmable) {
            var t = "";
            this.model.detail.item.skus.forEach(function(e) {
                e.items.forEach(function(e) {
                    e.selected && (t += (0 == t.length ? "" : "|") + e.id);
                });
            });
            var i = this.model.stocks[t];
            i && (this.model.bAddWishList = e.currentTarget.dataset.wishlist, this.model.bReserve = e.currentTarget.dataset.reserve, 
            this.addStock(i));
        } else a.showToast({
            title: this.getCurrentUnSelectTips(),
            image: "/assets/load_fail.png",
            duration: 1e3
        });
    },
    onSkuTouchMove: function(e) {
        console.log("onSkuTouchMove", e);
    },
    onSkuHeaderScrollBegin: function(e) {
        console.log("onSkuHeaderScrollBegin", e), e.touches.length > 0 && this.data.bSkuScroll && (this.skuHeaderScrollStartY = e.touches[0].clientY);
    },
    onSkuHeaderScroll: function(e) {
        if (console.log("onSkuHeaderScroll", e), e.touches.length > 0 && this.data.bSkuScroll) {
            var t = e.touches[0].clientY, i = this.skuHeaderScrollStartY - t;
            this.onSkuScroll({
                detail: {
                    scrollTop: i
                }
            });
        }
    },
    onSkuScroll: function(e) {
        console.log("onSkuScroll", e);
        var t = this;
        e.detail.scrollTop > 0 && !this.data.bShrinkAnimation && !this.bAnimating ? (this.bAnimating = !0, 
        a.createSelectorQuery().select(".detail-sku__thumb").boundingClientRect(function(e) {
            var n = i.screenWidth > 375 ? 1 : i.screenWidth / 375, a = e.width / e.height, o = 126 * n, s = e.width, r = s / a, d = o / a, l = 30 * n, c = -1 * ((i.screenWidth - o) / 2 - l), u = -1 * (r - d) / 2 * s / o, m = 24 * n, h = -1 * (r - d + .5 * d + 39.5);
            t.thumbShrinkAnimation.translateX(c).translateY(u).scale(o / s).step(), t.priceShrinkAnimation.translateX(l + o + m).step({
                duration: 10
            }), t.priceShrinkAnimation.translateY(h).step({
                duration: 490
            }), t.skuBodyShrinkAnimation.translateY(h).step({
                duration: 490,
                delay: 10
            }), t.setData({
                thumbShrinkAnimation: t.thumbShrinkAnimation.export(),
                priceShrinkAnimation: t.priceShrinkAnimation.export(),
                skuBodyShrinkAnimation: t.skuBodyShrinkAnimation.export(),
                bShrinkAnimation: !0,
                priceY: 2 * h
            }), t.skuHeaderScrollStartY = void 0, t.bAnimating = !1, t.setData({
                skuScrollTop: 1
            });
        }).exec()) : e.detail.scrollTop < -10 && this.data.bShrinkAnimation && !this.bAnimating && (console.log("resume"), 
        this.bAnimating = !0, this.thumbShrinkAnimation.translateX(0).scale(1).translateY(0).step({
            duration: 600
        }), this.priceShrinkAnimation.translateY(0).translateX(0).step({
            duration: 600
        }), this.skuBodyShrinkAnimation.translateY(0).step({
            duration: 600
        }), this.setData({
            thumbShrinkAnimation: this.thumbShrinkAnimation.export(),
            priceShrinkAnimation: this.priceShrinkAnimation.export(),
            skuBodyShrinkAnimation: t.skuBodyShrinkAnimation.export(),
            bShrinkAnimation: !1
        }), t.skuHeaderScrollStartY = void 0, setTimeout(function() {
            t.bAnimating = !1;
        }, 600));
    },
    shrinkSkuAreaWithoutAnimation: function() {
        var e = this;
        e.bAnimating = !0, a.createSelectorQuery().select(".detail-sku__thumb").boundingClientRect(function(t) {
            var n = i.screenWidth > 375 ? 1 : i.screenWidth / 375, a = t.width / t.height, o = 126 * n, s = t.width, r = s / a, d = o / a, l = 30 * n, c = -1 * ((i.screenWidth - o) / 2 - l), u = -1 * (r - d) / 2 * s / o, m = 24 * n, h = -1 * (r - d + .5 * d + 39.5);
            e.thumbShrinkAnimation.translateX(c).translateY(u).scale(o / s).step({
                duration: 0
            }), e.priceShrinkAnimation.translateX(l + o + m).step({
                duration: 10
            }), e.priceShrinkAnimation.translateY(h).step({
                duration: 0
            }), e.skuBodyShrinkAnimation.translateY(h).step({
                duration: 0,
                delay: 10
            }), e.setData({
                thumbShrinkAnimation: e.thumbShrinkAnimation.export(),
                priceShrinkAnimation: e.priceShrinkAnimation.export(),
                skuBodyShrinkAnimation: e.skuBodyShrinkAnimation.export(),
                bShrinkAnimation: !0,
                priceY: 2 * h
            }), e.skuHeaderScrollStartY = void 0, e.bAnimating = !1, e.setData({
                skuScrollTop: 1
            });
        }).exec();
    },
    hideSkuArea: function() {
        this.maskAnimation.opacity(0).step(), this.boxAnimation.translateY("100%").step(), 
        this.setData({
            skuMaskAnimation: this.maskAnimation.export(),
            skuBoxAnimation: this.boxAnimation.export(),
            skuHidden: !0,
            bannerImg: this.data.skuImg || this.data.bannerImg
        });
    },
    showAddGoodsSuccToast: function() {
        var e = this;
        e.setData({
            toastHidden: !1,
            toast: "添加成功"
        }), setTimeout(function() {
            var t = a.createAnimation({
                duration: 400,
                timingFunction: "ease"
            });
            t.bottom(0).scale(.466).translateX(-48).translateY(58).opacity(0).step(), e.setData({
                toastAnimation: t.export()
            }), setTimeout(function() {
                var n = i.screenWidth / 375;
                t.opacity(1).translateY(0).translateX(0).scale(1).bottom(i.screenHeight / 2 - 60 * n).step(), 
                e.setData({
                    toastHidden: !0,
                    toastAnimation: t.export(),
                    hasAddGoodsSucc: !0
                });
            }, 400);
        }, 400);
    },
    drawDashLine: function(e, t, i, n) {},
    genAreaViewData: function() {
        var e = this, t = "", i = "", n = 7, a = !1;
        try {
            n = e.model.detail.item.base.return_goods, a = e.model.detail.item.base.is_repair, 
            t = e.model.detail.item.descs, i = e.model.shipping_template.st.st.express_desc || "";
        } catch (e) {}
        var o = [ {
            type: 2,
            desc: t,
            hidden: !1,
            title: "产品描述"
        }, {
            type: 1,
            title: "商品参数",
            attrs: e.model.detail.item.attrs,
            hidden: !1
        }, {
            type: 2,
            title: "配送说明",
            desc: [ {
                type: 1,
                info: i
            } ],
            hidden: !0
        } ];
        return e.model.detail.item.services && e.model.detail.item.services.length > 0 ? o.push({
            type: 1,
            title: "售后服务",
            attrs: e.model.detail.item.services.filter(function(e) {
                return e.desc.length > 0;
            }).map(function(e) {
                return {
                    attr_name: {
                        name: e.name
                    },
                    attr_value: {
                        name: e.desc
                    }
                };
            }),
            hidden: !0
        }) : o.push({
            type: 1,
            title: "售后服务",
            attrs: [ {
                attr_name: {
                    name: "退换货"
                },
                attr_value: {
                    name: n + "天无理由退换"
                }
            }, {
                attr_name: {
                    name: "保修政策"
                },
                attr_value: {
                    name: a ? "全国联保" : "无"
                }
            } ],
            hidden: !0
        }), o;
    },
    clearSkuSelectState: function() {
        var e = this;
        e.model.detail.item.skus.forEach(function(e) {
            e.selected = !1, e.selectedIndex = -1, e.items.forEach(function(e) {
                e.selected = !1;
            });
        });
        var t = {
            detail: e.model.detail,
            skuConfirmable: !1,
            skuImg: e.getCurrentSkuImg() || e.model.detail.item.pics,
            skuPrice: e.getCurrentSkuPrice() || e.model.detail.item.stocks[0].stock_price,
            skuMarketPrice: e.getCurrentSkuMarketPrice() || 0,
            skuCode: e.getCurrentSkuCode() || e.getCurrentUnSelectTips(),
            skuNum: e.getCurrentSkuNum() || 0,
            bannerImg: e.model.detail.item.pics
        };
        this.setData(t), e.model.detail.item.skus.forEach(function(t, i) {
            1 == t.items.length && e.onClickSkuItem({
                currentTarget: {
                    dataset: {
                        group: i,
                        index: 0,
                        isfromskuarea: !0
                    }
                }
            });
        });
    },
    genSkuViewData: function(e, t) {
        var i = {}, n = [], a = {}, o = {};
        return e.forEach(function(e) {
            e.stock_attr_info.forEach(function(e) {
                i[e.attr_name.id] || (i[e.attr_name.id] = new Set(), n.push(e.attr_name.id)), i[e.attr_name.id].add(e.attr_value.id), 
                a[e.attr_name.id] = e, o[e.attr_value.id] = e;
            });
        }), n.map(function(e) {
            var n = !1;
            return t && t.length > 0 && a[e].attr_name.id == t[0].attr_key_id && (n = !0), {
                name: a[e].attr_name.name,
                selected: !1,
                selectedIndex: -1,
                id: a[e].attr_name.id,
                items: Array.from(i[e]).map(function(e) {
                    var i = [];
                    return n && t.forEach(function(t) {
                        t.attr_val_id == o[e].attr_value.id && 0 == (i = t.stock_pic).length && (i = t.stock_pic_info);
                    }), {
                        name: o[e].attr_value.name,
                        selected: !1,
                        disable: !1,
                        id: o[e].attr_value.id,
                        pics: i
                    };
                })
            };
        });
    },
    genSkuMapData: function(e) {
        var t = {};
        return e.forEach(function(e) {
            var i = "";
            e.stock_attr_info.forEach(function(e, t) {
                i += (0 == t ? "" : "|") + e.attr_value.id;
            }), t[i] = e;
        }), t;
    },
    skuPathSet: {},
    initSkuPath: function(e, t) {
        var i = this;
        Object.keys(t).forEach(function(n) {
            var a = n.split("|");
            i.genSkuCombination(a).forEach(function(n) {
                i.findSku(n, e, t);
            });
        });
    },
    findSku: function(e, t, i) {
        var n, a, o, s, r = 0, d = [];
        if (void 0 !== this.skuPathSet[e]) return this.skuPathSet[e];
        if ((s = e.split("|")).length == t.length) return r = i[e] ? i[e].stock_number : 0, 
        this.skuPathSet[e] = r, r;
        for (n = 0; n < t.length; n++) {
            for (a = 0; a < t[n].length && s.length > 0 && !(s.length > 0 && t[n][a] == s[0]); a++) ;
            if (!(a < t[n].length && s.length > 0)) {
                for (o = 0; o < t[n].length; o++) {
                    var l = d.concat(t[n][o], s).join("|");
                    r += this.findSku(l, t, i);
                }
                break;
            }
            d.push(s.shift());
        }
        return this.skuPathSet[e] = r, r;
    },
    skuCombination: [],
    genSkuCombination: function(e) {
        var t = 0;
        for (t = 0; t < e.length; t++) this.combine(e, t + 1);
        return this.skuCombination;
    },
    combine: function(e, t) {
        if (!(0 == e.length || t <= 0 || t > e.length)) {
            var i = Array(t);
            this.getCombination(e, t, 0, i, 0);
        }
    },
    getCombination: function(e, t, i, n, a) {
        var o = 0;
        if (0 != t) for (o = i; o < e.length; o++) n[a] = e[o], this.getCombination(e, t - 1, o + 1, n, a + 1); else this.skuCombination.push(n.join("|"));
    },
    getConfirmStock: function() {
        var e = "";
        return this.model.detail.item.skus.forEach(function(t) {
            t.items.forEach(function(t) {
                t.selected && (e += (0 == e.length ? "" : "|") + t.id);
            });
        }), this.model.stocks[e] || null;
    },
    onClickKf: function() {
        if (this.model.scene != o.DetailPageScene.Kf) {
            var e = this.getConfirmStock(), t = {
                appid: i.appid(),
                item_code: e ? e.item_code : this.data.detail.item.base.item_code,
                sku_id: e ? e.sku_code : "",
                title: this.data.detail.item.base.item_name,
                image_url: this.data.bannerImg[0].pic_url,
                stock_price: this.data.skuConfirmable ? this.data.skuPrice : this.data.minPrice,
                market_price: this.data.skuConfirmable ? this.data.skuMarketPrice : this.data.minMarketPrice
            };
            a.navigateTo({
                url: "/seller-online/portal/chat/chat?wxapp_appid=" + i.appid() + "&goods_image_url=" + encodeURIComponent(this.data.bannerImg[0].pic_url + "/750") + "&from_goods=" + encodeURIComponent(JSON.stringify(t))
            });
        } else a.navigateBack();
    }
});
var t = require("../../components/conf/conf"), e = (require("../../components/template/show_dialog/show_dialog"), 
require("../../components/model/discover/discover-list-m")), a = require("../../components/model/discover/praise-m"), o = (require("../../components/model/my/order_detail/order_state_change_m"), 
require("../../components/model/discover/category-m")), i = require("../../components/model/discover/get-template-m"), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../components/function/countdown/countdown")), d = (require("../../components/model/buy_car/buy_car"), 
require("../../components/model/discover/goods-detail/goods-detail-m")), s = (require("../../util/util.js"), 
getApp());

Page({
    data: {
        pageIndex: 1,
        name: "",
        shopList: [],
        showLoading: !1,
        hasNextPage: !1,
        showTipData: {
            show: !1,
            content: "网络连接失败"
        },
        noData: !1,
        haveData: !1,
        orgName: "",
        showBlank: !1,
        tabList: {
            index: 0,
            list: []
        },
        categoryId: null,
        loading_fail: !1,
        isClick: !0,
        buyCarCount: 0,
        index: 0,
        isSetViewRecord: !0,
        onPullDownRefresh: "",
        onReachBottom: "",
        onHide: "",
        onShow: "",
        pageParams: {
            types: "",
            goodInfos: {},
            commodityAttr: [],
            isShowInventory: !1
        },
        setOutBoxStyle: "",
        isShowCart: !1,
        inventory2: 0,
        buyCarDialogInfo: {
            checkGoodsTypeBg: "",
            showCheckGoodsTypeBg: !1,
            showCheckGoodsType: !1,
            index: 0,
            count: 1
        },
        hasSelectAttrText: "",
        hasSelectAttrCode: "",
        hasSelectAttrValue: [],
        showReturnIndexBtn: !1,
        xcxType: 3,
        copyRightShow: !1,
        memberCardInfo: "",
        limitedType: 0,
        enablePublicNumber: 1,
        officialAccountStatus: 0,
        officalSceneState: !1
    },
    onLoad: function(a) {
        var n = this;
        n.setData({
            officalSceneState: s.globalData.officalSceneState
        }), s.getNewOpenId(function(d) {
            wx.showLoading({
                title: "加载中"
            }), s.whichProduct({
                ele: n
            }), n.data.shopList = [], n.data.pageIndex = 1, n.setData(n.data), n.getShopInfo(), 
            1 == n.data.isClick && (n.setData({
                isClick: !1
            }), s.getNewOpenId(function(a) {
                (0, e.DiscoverListM)({
                    ele: n,
                    data: {
                        orgId: s.globalData.orgId,
                        pageIndex: n.data.pageIndex,
                        pageSize: t.Conf.pageSize,
                        openId: a
                    },
                    fn: function(t) {
                        console.log("shopList=", n.data.shopList), n.countdown(t);
                    },
                    isTab: !0
                });
            })), (0, o.categoryM)({
                ele: n,
                data: {
                    xcxId: s.globalData.xcxId
                },
                isTab: !0
            }), (0, i.getTemplateM)({
                ele: n,
                data: {
                    orgId: s.globalData.orgId,
                    type: 2
                },
                isTab: !0
            }), n.getBtnText(), s.getTabBarTitle(), a.action && "goHome" == a.action ? n.setData({
                showReturnIndexBtn: !0
            }) : n.setData({
                showReturnIndexBtn: !1
            });
        });
    },
    bindload: function(t) {
        var e = t.detail.status;
        s.globalData.officalScene;
        this.setData({
            officialAccountStatus: e
        }, function() {
            console.log("公众号bindload：" + e);
        });
    },
    binderror: function(t) {
        var e = t.detail.status;
        s.globalData.officalScene;
        this.setData({
            officialAccountStatus: e
        }, function() {
            console.log("公众号binderror：" + e);
        });
    },
    countdown: function(t, e) {
        var a = this, o = {
            key: "discover",
            timeData: t,
            isShowDay: !0,
            fn: function(t) {
                a.setData({
                    shopList: t
                });
            }
        };
        e && (o.hideTime = e), (0, n.default)(o);
    },
    btnActive: function(t) {
        var e = this;
        e.setData({
            copyRightShow: !1
        });
        var a = t.detail.e.currentTarget.dataset, o = [ a.index, a.id ], i = o[0], n = o[1];
        this.changeStoreType(i, n), e.getBtnText();
    },
    onBtnActiveTow: function(t) {
        var e = this, a = t.detail.index, o = t.detail.id;
        e.setData({
            noData: !1,
            copyRightShow: !1
        }), this.changeStoreType(a, o), e.getBtnText();
    },
    changeStoreType: function(a, o, i) {
        var n = this;
        if (1 == n.data.isClick) {
            wx.showLoading({
                title: "加载中"
            });
            for (var d = n.data.tabList.list, r = 0; r < d.length; r++) d[r].active && delete d[r].active, 
            a == r && (d[r].active = "active");
            var l = {
                ele: n,
                data: {
                    orgId: s.globalData.orgId,
                    pageIndex: 1,
                    pageSize: t.Conf.pageSize,
                    openId: s.globalData.openid,
                    categoryId: o || null
                },
                fn: function(t) {
                    console.log("切换门店类型之后的商品列表------"), n.countdown(t);
                },
                isTab: !0
            };
            n.data.showLoading = !1, n.data.loading_fail = !1, i ? n.data.hasNextPage = !0 : (n.data.hasNextPage = !1, 
            (0, e.DiscoverListM)(l)), n.data.tabList.list = d, n.data.categoryId = o, n.data.showBlank = !1, 
            n.data.pageIndex = 1, n.setData(n.data);
        }
    },
    getShopInfo: function() {
        var t = this;
        s.getOrgInfo(function(e, a) {
            if (a) {
                var o = a;
                o && (t.data.orgName = o.orgName ? o.orgName : "");
            }
        });
    },
    onShareAppMessage: function() {
        var t = this, e = getCurrentPages(), a = s.isHasTabByTitle({
            url: e[e.length - 1].route
        });
        console.log("tempJson=", a);
        var o = "/page/discover/discover?action=goHome&memberId=" + (wx.getStorageSync("memberCardInfo") && wx.getStorageSync("memberCardInfo").id) + "& orgId=" + s.globalData.orgId;
        return a.check && (o = "/page/discover/discover?memberId=" + (wx.getStorageSync("memberCardInfo") && wx.getStorageSync("memberCardInfo").id) + "& orgId=" + s.globalData.orgId), 
        {
            title: s.globalData.nickName + "给你推荐了「" + t.data.orgName + "」",
            path: o,
            imageUrl: t.data.img
        };
    },
    onShow: function() {
        console.log("onShowonshowonshow", s.globalData.officalScene);
        var t = this;
        s.setCarCountDot(), s.setMyCountDot(), this.setData({
            memberCardInfo: wx.getStorageSync("memberCardInfo")
        }, function() {}), wx.getStorage({
            key: "shoppingCarGoods",
            success: function(e) {
                t.data.buyCarCount = 0, e.data.map(function(e, a) {
                    t.data.buyCarCount += e.count;
                }), t.setData(t.data);
            }
        }), 1 == wx.getStorageSync("to-shopping-mall-category-list") && (this.changeStoreType(0, null), 
        wx.removeStorageSync("to-shopping-mall-category-list"));
        var e = new Date().getTime();
        return this.setData({
            onShow: e
        }), this.data.hideTime && t.countdown(this.data.shopList, this.data.hideTime), new Promise(function(e, a) {
            wx.request({
                url: s.globalData.shopMHost + "/xcx/shop/publicNumer/info",
                method: "post",
                data: {
                    orgId: s.globalData.orgId
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    t.setData({
                        limitedType: a.data.resultDto.data.type,
                        enablePublicNumber: a.data.resultDto.data.enablePublicNumber
                    }), e(a.data.data);
                },
                fail: function(t) {
                    a("网络连接失败");
                }
            });
        });
    },
    onHide: function() {
        this.setData({
            hideTime: new Date().getTime()
        }), s.globalData.timerObj && clearTimeout(s.globalData.timerObj.discover), console.log("onhideonhideonhide");
    },
    jumpToNext: function(t) {
        var e = t.detail.id;
        wx.navigateTo({
            url: "/subPackage/discover/pages/" + (3 == s.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + e
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.hasNextPage && 1 == a.data.isClick && (a.data.isClick = !1, a.data.showLoading = !0, 
        a.setData(a.data), (0, e.DiscoverListM)({
            ele: a,
            data: {
                orgId: s.globalData.orgId,
                pageIndex: a.data.pageIndex,
                pageSize: t.Conf.pageSize,
                openId: s.globalData.openid,
                categoryId: a.data.categoryId
            },
            ReachBottom: !0,
            fn: function(t) {
                console.log(t), console.log("data=", a.data), a.countdown(t);
            },
            isTab: !0
        }), a.getBtnText());
    },
    onPullDownRefresh: function() {
        var a = this, n = new Date().getTime();
        if (this.setData({
            onPullDownRefresh: n,
            copyRightShow: !1,
            hasNextPage: !0
        }), 1 == a.data.isClick) {
            a.data.pageIndex = 1, a.data.showBlank = !1, a.data.showLoading = !1, a.data.isClick = !1, 
            a.setData(a.data);
            var d = a.data, r = d.pageIndex, l = d.categoryId;
            (0, e.DiscoverListM)({
                ele: a,
                data: {
                    orgId: s.globalData.orgId,
                    pageIndex: r,
                    pageSize: t.Conf.pageSize,
                    openId: s.globalData.openid,
                    categoryId: l
                },
                PullDownRefresh: !0,
                fn: function(t) {
                    console.log("data=", a.data), a.countdown(t);
                },
                isTab: !0
            }), this.setData({
                hasNextPage: !0
            }), (0, o.categoryM)({
                ele: a,
                data: {
                    xcxId: s.globalData.xcxId
                },
                fn: function() {
                    var t = a.data.categoryId, e = 0;
                    a.data.tabList.list.map(function(a, o) {
                        a.id == t && (e = o);
                    }), a.setData({
                        isClick: !0,
                        hasNextPage: !0
                    }, function() {
                        a.changeStoreType(e, t, "PullDown");
                    });
                },
                isTab: !0
            }), (0, i.getTemplateM)({
                ele: a,
                data: {
                    orgId: s.globalData.orgId,
                    type: 2
                },
                isTab: !0
            }), a.getBtnText();
        }
    },
    onClickRetry: function() {
        var a = this;
        1 == a.data.isClick && (wx.showLoading({
            title: "加载中"
        }), a.setData({
            isClick: !1,
            loading_fail: !1
        }), (0, e.DiscoverListM)({
            ele: a,
            data: {
                orgId: s.globalData.orgId,
                pageIndex: 1,
                pageSize: t.Conf.pageSize,
                openId: s.globalData.openid,
                categoryId: a.data.categoryId
            },
            fn: function(t) {
                a.countdown(t);
            },
            isTab: !0
        }), 0 == a.data.tabList.list.length && (0, o.categoryM)({
            ele: a,
            data: {
                xcxId: s.globalData.xcxId
            },
            isTab: !0
        }), (0, i.getTemplateM)({
            ele: a,
            data: {
                orgId: s.globalData.orgId,
                type: 2
            },
            isTab: !0
        }), a.getBtnText());
    },
    onAddBuyCar: function(t) {
        var e = this;
        console.log("dicover:", t.detail);
        var a = 0;
        0 == t.detail.attributeId.length && 1 == t.detail.isInfiniteInventory ? a = t.detail.inventory : 0 == t.detail.attributeId.length && 1 != t.detail.isInfiniteInventory ? (a = t.detail.inventory, 
        e.data.isShowInventory = !1) : t.detail.attributeId.map(function(t, o) {
            2 == t.isInfiniteInventory ? e.data.isShowInventory = !1 : e.data.isShowInventory = !0, 
            t.inventory && (a += t.inventory);
        }), 0 == a && 2 != t.detail.infinite ? s.showDialog(e, "该商品已售罄") : (wx.showLoading({
            title: "加载中"
        }), (0, d.newGoodsDetailM)({
            ele: e,
            isLoadCountdown: !1,
            notSetShopList: !0,
            hideLoad: !0,
            data: {
                openId: s.globalData.openid,
                id: t.detail.id
            },
            callback: function() {
                var a = e.data, o = a.bargainActivityId, i = a.isBargain, n = "initCutPriceModal_" + o, d = wx.getStorageSync(n);
                2 != i || d ? e.setData({
                    showCutPriceModal: !1
                }) : e.setData({
                    showCutPriceModal: !0
                }, function() {
                    wx.setStorageSync(n, !0);
                }), e.showCartDialog({
                    type: 1,
                    id: t.detail.id,
                    superMemberPrice: t.detail.supermemberprice ? parseFloat(t.detail.supermemberprice) / 100 : 0,
                    enableSupperMemberPrice: t.detail.enablesuppermemberprice
                });
            }
        }));
    },
    onJumpToNextShare: function(t) {
        var e = t.detail.id;
        wx.navigateTo({
            url: "/subPackage/discover/pages/" + (3 == s.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + e + "&state=guide"
        });
    },
    onPraise: function(t) {
        var e = this;
        if (!e.data.prevent) {
            e.setData({
                prevent: !0
            }), setTimeout(function() {
                e.setData({
                    prevent: !1
                });
            }, 400);
            var o = t.detail.goodsId, i = t.detail.likeid, n = t.detail.index, d = t.detail.likeStatus;
            1 != d ? (0, a.praiseM)({
                ele: e,
                data: {
                    likeid: i,
                    goodsId: o,
                    openId: s.globalData.openid
                },
                likeStatus: d,
                index: n
            }) : wx.showToast({
                title: "你已点过赞了",
                icon: "none"
            });
        }
    },
    getBtnText: function(t) {
        var e = this;
        s.getBtnText(function(t) {
            t && e.setData({
                appointmentCopy: t.appointmentCopy ? t.appointmentCopy : "立即预约",
                appointmentZeroCopy: t.appointmentZeroCopy ? t.appointmentZeroCopy : "马上咨询",
                purchaseCopy: t.purchaseCopy ? t.purchaseCopy : "立即购买"
            });
        });
    },
    goSearch: function(t) {
        wx.navigateTo({
            url: "/subPackage/discover/pages/search/search"
        });
    },
    showCartDialog: function(t) {
        console.log("showCartDialog() ---------------+++++"), console.log(t);
        var e = new Date().getTime(), a = t.type, o = this.data.pageParams.commodityAttr, i = 2 === t.enableSupperMemberPrice ? t.superMemberPrice : 0, n = this.data.shopList.filter(function(e) {
            return e.id == t.id;
        }), d = {
            types: a,
            goodInfos: {
                previewImg: n ? n[0].mainImagesUrl[0] || n[0].imgUrls[0] : "",
                price: this.data.price,
                originalPrice: "" == this.data.originalPrice ? 0 : this.data.originalPrice,
                stock: this.data.inventory2,
                count: 1,
                id: t.id,
                attributeId: [],
                attributeValue: [],
                isInfiniteInventory: this.data.isInfiniteInventory,
                isSpecial: this.data.isSpecial,
                superMemberPrice: i
            },
            commodityAttr: o,
            isShowInventory: this.data.isShowInventory,
            isSetFirstUserSelect: !0
        };
        this.setData({
            pageParams: d,
            onShow: e
        }, function() {
            wx.hideLoading();
        });
    },
    setReadySelectAttr: function(t) {
        t.detail;
    },
    closeBuyCarDialog: function() {
        this.setData({
            isShowCart: !1,
            setOutBoxStyle: "",
            inventory2: 0
        });
    }
});
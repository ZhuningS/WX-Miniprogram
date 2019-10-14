var a = require("../../components/template/show_dialog/show_dialog"), e = require("../../components/model/getIsOpenPay/getIsOpenPay-m"), t = require("../../components/wx-tpl/custom-page-tpl/common-js/classLoop"), o = require("../../components/model/link_us/linkUsM.js"), n = (require("../../util/util.js"), 
getApp()), s = {
    onReady: function(a) {
        this.videoContext = wx.createVideoContext("myVideo");
    },
    data: {
        initLoad: !1,
        navList: [],
        orgId: null,
        address: "",
        orgName: "",
        logo: "",
        phone: "",
        lat: null,
        lng: null,
        enableCs: 1,
        orgFacilities: [],
        imgList: [],
        imgUrls: [],
        preImgUrls: [],
        showTipData: {
            show: !1,
            content: "网络连接失败"
        },
        bannerImgInfo: [],
        templateId: null,
        styleList: [],
        hideTime: null,
        showCouponModal: !1,
        refresh: !0,
        systomIcon: [ "/subPackage/business/pages/special_selling/special_selling?", "/subPackage/index/pages/shequn/shequn?", "/subPackage/index/pages/appointment/appointment?isApplyNewLogic=true", "/subPackage/business/pages/more_coupon/more_coupon?", "/subPackage/my/pages/link_us/link_us?", "/subPackage/my/pages/buy_car/buy_car?" ],
        activityIcon: [ "/subPackage/business/pages/limit_shopping/limit_shopping?", "/subPackage/index/pages/category-list/category-list?activityType=1", "/subPackage/index/pages/category-list/category-list?activityType=2" ],
        onShow: "",
        reShow: 0,
        onPullDownRefresh: "",
        copyRightShow: !1,
        classlist: [],
        showAddress: !1,
        shopInfo: {
            latitude: 0,
            longitude: 0,
            scale: 28,
            name: "",
            address: ""
        },
        imgUrlArry: [],
        showOpenUp: 1,
        superVip: 1,
        memberCardInfo: null
    },
    onLoad: function(a) {
        var e = this, t = this;
        wx.showLoading({
            title: "加载中"
        }), 0 != n.globalData.xcxType && t.setData({
            xcxType: n.globalData.xcxType
        }), n.getNewOpenId(function(o) {
            n.globalData.openid = o, t.setData({
                initLoad: !0,
                orgId: n.globalData.orgId
            }), n.whichProduct({
                ele: e
            }), e.setData({
                showCouponModal: !0
            }), t.getTemplate(function(e) {
                100 == e ? t.getIndexStyle(function() {
                    a.refresh && t.refreshComponentData();
                }) : a.refresh && t.refreshComponentData();
            }), t.indexNavListM(), t.getImgListData({
                orgId: t.data.orgId
            }), t.getBannerList({
                xcxId: n.globalData.xcxId,
                imgType: 1
            }), t.getClassList(), t.getBtnText(), e.queryHome(), n.getTabBarTitle(), t.onShowHandler(), 
            e.getSuperVipset();
        }, !1);
    },
    onShow: function() {
        var a = this, e = this;
        n.globalData.vipLogin ? this.setData({
            memberCardInfo: wx.getStorageSync("memberCardInfo")
        }) : wx.eventBus.on("newMemberCardInfo", function() {
            a.setData({
                memberCardInfo: wx.getStorageSync("memberCardInfo")
            });
        });
        var t = new Date().getTime();
        this.setData({
            reShow: t
        }), this.data.initLoad && n.globalData.openid && this.onShowHandler(), e.getImgListData({
            orgId: e.data.orgId
        }), console.log("-0-0-0-0-0"), e.getOpenPayInfo();
    },
    onShowHandler: function() {
        var a = this;
        n.setCarCountDot(), n.setMyCountDot();
        var e = "/subPackage/business/pages/find_detail/find_detail?orgId=" + this.data.orgId + "&orgName=" + this.data.orgName;
        n.saveRecordInfo(e, this.data.orgId), this.data.hideTime && this.setData({
            refreshCountdown: !0
        }, function() {
            a.setData({
                refreshCountdown: !1
            });
        });
        var t = new Date().getTime();
        this.setData({
            onShow: t
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        this.onLoad({
            refresh: !0
        }), this.getSuperVipset(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 2e3), a.getBtnText();
        var e = new Date().getTime();
        this.setData({
            onPullDownRefresh: e
        }), this.getImgListData({
            orgId: this.data.orgId
        });
    },
    refreshComponentData: function() {
        var a = this;
        this.setData({
            refresh: !1
        }, function() {
            a.setData({
                refresh: !0
            });
        });
    },
    onHide: function() {
        if (this.setData({
            hideTime: new Date().getTime()
        }), n.globalData.timerObj) {
            var a = n.globalData.timerObj, e = Object.keys(a);
            for (var t in e) e[t].indexOf("index_") > -1 && clearTimeout(a[e[t]]);
        }
    },
    getTemplate: function(e) {
        var t = this;
        wx.request({
            url: n.globalData.shopMHost + "xcx/pageTemplate/getTemplate",
            method: "post",
            data: {
                orgId: n.globalData.orgId,
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                "000000" == o.data.code && o.data.data.templateId ? t.setData({
                    templateId: o.data.data.templateId
                }, function() {
                    e && e(o.data.data.templateId);
                }) : n.globalData.showErrorAlert && (0, a.ShowDialog)(t);
            },
            fail: function(e) {
                n.globalData.showErrorAlert && (0, a.ShowDialog)(t), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    },
    listenerBtnGetLocation: function(a) {
        var e = this;
        e.data.shopInfo.latitude > 0 && e.data.shopInfo.longitude > 0 && wx.openLocation({
            latitude: e.data.shopInfo.latitude,
            longitude: e.data.shopInfo.longitude,
            scale: 28,
            name: e.data.orgName,
            address: e.data.address
        });
        var t = "/subPackage/business/pages/find_detail/find_detail?orgId=" + e.data.orgId + "&orgName=" + e.data.orgName;
        n.saveRecordInfo(t, e.data.orgId);
    },
    makePhone: function(a) {
        this.data.phone && wx.makePhoneCall({
            phoneNumber: this.data.phone
        });
    },
    getImgListData: function(a) {
        var e = this;
        (0, o.getNewShopInfo)(function(a, t) {
            t && e.setData({
                enableCs: 2,
                imgList: t.images ? t.images : [],
                shopTitle: t.shopTitle ? t.shopTitle : "店铺图片",
                orgName: t.orgName
            });
        });
    },
    getClassList: function() {
        var a = this;
        wx.request({
            url: n.globalData.shopMHost + "xcx/category/list",
            method: "post",
            data: {
                xcxId: n.globalData.xcxId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log("分类列表---------", e.data.data), a.setData({
                    classlist: e.data.data
                });
            },
            fail: function() {}
        });
    },
    getBannerList: function(e) {
        var t = this;
        wx.request({
            url: n.globalData.shopMHost + "/xcx/shop/image/list",
            method: "post",
            data: e,
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var e = a.data.data;
                t.data.imgUrlArry = [];
                for (var o = 0, n = e.length; o < n; o++) if (t.data.imgUrlArry.push(e[o].thumUrl), 
                5 == e[o].type) {
                    var s = "", i = "";
                    if (e[o].jumpUrl.indexOf("&&appInfo=")) {
                        var r = (d = e[o].jumpUrl.split("&&appInfo="))[0], l = (d[1], r.split("appPath="));
                        s = l[0], i = "undefined" != l[1] ? l[1] : "";
                    } else {
                        var d = e[o].jumpUrl.split("appPath=");
                        s = d[0], i = d[1];
                    }
                    e[o].appid = s, e[o].path = i;
                }
                e && t.setData({
                    bannerImgInfo: e,
                    imgUrlArry: t.data.imgUrlArry
                }, function() {
                    setTimeout(function() {
                        wx.hideLoading();
                    }, 2e3);
                });
            },
            fail: function(e) {
                n.globalData.showErrorAlert && (0, a.ShowDialog)(t), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    },
    showBannerImg: function(a) {
        var e = a.currentTarget.dataset.jumptype, o = a.currentTarget.dataset.jumpurl, s = a.currentTarget.dataset.productid, i = "";
        if (0 == e && (i = "/subPackage/discover/pages/" + (3 == n.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + (s || o)), 
        2 == e && (i = "/subPackage/discover/pages/" + (3 == n.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + (s || o)), 
        3 == e) {
            var r = (0, t.classLoop)(o, this.data.classlist);
            wx.navigateTo({
                url: "/subPackage/index/pages/category-list/category-list?tagType=&iconName=" + r + "&categoryId=" + o
            });
        }
        if (4 == e && (i = "/" + o), 2 == e || 4 == e || 0 == e && s) wx.navigateTo({
            url: i,
            success: function() {
                console.log(1111);
            },
            fail: function() {
                console.log(2222);
            }
        }); else if (1 == e || 0 == e && !s) {
            var l = a.currentTarget.dataset.index, d = this;
            wx.previewImage({
                current: d.data.imgUrlArry[l],
                urls: d.data.imgUrlArry
            });
        }
    },
    showImg: function(a) {
        var e = a.target.dataset.src;
        wx.previewImage({
            current: e,
            urls: this.data.imgList
        });
    },
    indexNavListM: function() {
        var e = this;
        wx.request({
            url: n.globalData.shopMHost + "xcx/icon/list",
            method: "post",
            data: {
                orgId: n.globalData.orgId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var t = a.data.data;
                "000000" == a.data.code && e.setData({
                    navList: t
                }, function() {
                    setTimeout(function() {
                        e.setData({
                            copyRightShow: !0
                        });
                    }, 3500);
                });
            },
            fail: function() {
                n.globalData.showErrorAlert && (0, a.ShowDialog)(e), wx.hideLoading();
            }
        });
    },
    getIndexStyle: function(e) {
        var t = this;
        wx.request({
            url: n.globalData.shopMHost + "xcx/pageTemplate/custom/list",
            method: "post",
            data: {
                xcxId: n.globalData.xcxId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                if (o.data && "000000" == o.data.code) {
                    var s = o.data.data;
                    s = (s = s.filter(function(a) {
                        return 1 == a.isDelete && 2 == a.isShow && "topBanner" != a.alias && "navIcon" != a.alias;
                    })).sort(function(a, e) {
                        return a.orderBy - e.orderBy;
                    }), t.setData({
                        styleList: s
                    }, function() {
                        setTimeout(function() {
                            wx.hideLoading();
                        }, 2e3), e && e();
                    });
                } else n.globalData.showErrorAlert && (0, a.ShowDialog)(t);
            },
            fail: function() {
                n.globalData.showErrorAlert && (0, a.ShowDialog)(t), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    },
    getBtnText: function(a) {
        var e = this;
        n.getBtnText(function(a) {
            a && e.setData({
                appointmentCopy: a.appointmentCopy ? a.appointmentCopy : "立即预约",
                appointmentZeroCopy: a.appointmentZeroCopy ? a.appointmentZeroCopy : "马上咨询",
                purchaseCopy: a.purchaseCopy ? a.purchaseCopy : "立即购买"
            });
        });
    },
    goVipCenter: function() {
        wx.getStorageSync("memberCardInfo") ? wx.navigateTo({
            url: "/subPackage/superVip/pages/index/index"
        }) : wx.navigateTo({
            url: "/subPackage/my/pages/login/login"
        });
    },
    openMap: function() {
        this.data.shopInfo.name = this.data.orgName, wx.openLocation(this.data.shopInfo);
    },
    queryHome: function() {
        var a = this;
        return new Promise(function(e, t) {
            n.ajaxSubmit({
                url: n.globalData.shopMHost + "xcx/superMember/queryHomePageSetting",
                method: "post",
                header: {
                    codeVersion: n.globalData.codeVersion
                },
                data: {
                    orgId: n.globalData.orgId
                }
            }).then(function(t) {
                if (console.log("首页设置-------", t), "000000" === t.data.code) {
                    var o = {
                        latitude: t.data.data.lat,
                        longitude: t.data.data.lng,
                        scale: 28,
                        name: a.data.orgName,
                        address: -1 != t.data.data.fullAddress.indexOf("null") ? "" : t.data.data.fullAddress
                    };
                    a.setData({
                        shopInfo: o,
                        address: -1 != t.data.data.fullAddress.indexOf("null") ? "" : t.data.data.fullAddress
                    });
                }
                e(t);
            });
        });
    },
    getSuperVipset: function() {
        var a = this;
        return new Promise(function(e, t) {
            n.ajaxSubmit({
                url: n.globalData.shopMHost + "xcx/superMember/setting",
                method: "post",
                header: {
                    codeVersion: n.globalData.codeVersion
                },
                data: {
                    orgId: n.globalData.orgId
                },
                isHideLoading: !0
            }).then(function(t) {
                console.log("超级会员配置信息-------", t), "000000" === t.data.code && a.setData({
                    showOpenUp: t.data.data.banner,
                    superVip: t.data.data.superVip
                }), e(t);
            });
        });
    },
    openUp: function() {
        console.log(wx.getStorageSync("memberCardInfo")), wx.navigateTo({
            url: "/subPackage/vipCenter/pages/superVip/superVip"
        });
    },
    onShareAppMessage: function(a) {
        var e = this, t = getCurrentPages(), o = n.isHasTabByTitle({
            url: t[t.length - 1].route
        });
        console.log("tempJson=", o);
        var s = "page/message/index?action=goHome&memberId=" + (wx.getStorageSync("memberCardInfo") && wx.getStorageSync("memberCardInfo").id);
        return o.check && (s = "page/message/index?memberId=" + (wx.getStorageSync("memberCardInfo") && wx.getStorageSync("memberCardInfo").id)), 
        console.log("tempShareUrl=", s), {
            title: n.globalData.nickName + "给你推荐了「" + e.data.orgName + "」",
            path: s,
            success: function(a) {
                var t = this.path;
                n.getNewOpenId(function(a) {
                    var o = {
                        actType: 2,
                        openId: a,
                        orgId: e.data.orgId,
                        page: t
                    };
                    console.log("转发地址为：", o), wx.request({
                        url: n.globalData.host + "/user/behavior/record",
                        method: "post",
                        data: o,
                        header: {
                            "content-type": "application/json"
                        },
                        complete: function() {},
                        success: function(a) {}
                    });
                });
            },
            fail: function(a) {}
        };
    },
    getOpenPayInfo: function() {
        var a = this;
        (0, e.getIsOpenPayM)({
            ele: a,
            data: {
                xcxId: n.globalData.xcxId
            }
        }, function(e) {
            a.setData({
                enableXcxOffLinePay: e.enableXcxOffLinePay
            });
        });
    }
};

Page(s);
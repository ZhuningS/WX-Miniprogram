Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DongTaiJs = void 0;

var t = require("../../../../components/conf/conf"), a = require("../../../../components/model/discover/shequn-list-m"), e = require("../../../../components/model/getIsOpenPay/getIsOpenPay-m"), o = require("../../../../components/model/message/QRCode-collection/shop-info-m"), s = require("../../../../components/template/show_dialog/show_dialog"), i = (require("../../../../components/model/my/order_detail/order_state_change_m"), 
require("../../../../components/template/discuss/discuss")), n = require("../../custom-page-tpl/common-js/classLoop"), d = require("../../../../components/model/discover/comment/discover-list-comment-publish-m"), r = require("../../../../components/model/discover/comment/discover-list-likes-on-m"), l = require("../../../../components/model/discover/comment/discover-list-likes-off-m"), p = require("../../../../components/model/discover/comment/discover-list-comment-del-m"), c = require("../../../../components/function/jsonMerge/jsonMerge"), g = getApp(), h = {
    previewImage: function(t) {
        var a = this, e = t.currentTarget.dataset.index;
        console.log(e), wx.previewImage({
            current: t.target.dataset.src,
            urls: a.data.shopList[e].imgUrls
        });
    },
    getBannerList: function(t) {
        var a = this;
        wx.request({
            url: g.globalData.shopMHost + "/xcx/shop/image/list",
            method: "post",
            data: t,
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var e = t.data.data;
                a.data.imgUrlArry = [];
                for (var o = 0, s = e.length; o < s; o++) if (a.data.imgUrlArry.push(e[o].thumUrl), 
                5 == e[o].type) {
                    var i = "", n = "";
                    if (e[o].jumpUrl.indexOf("&&appInfo=")) {
                        var d = (l = e[o].jumpUrl.split("&&appInfo="))[0], r = (l[1], d.split("appPath="));
                        i = r[0], n = "undefined" != r[1] ? r[1] : "";
                    } else {
                        var l = e[o].jumpUrl.split("appPath=");
                        i = l[0], n = l[1];
                    }
                    e[o].appid = i, e[o].path = n;
                }
                e && a.setData({
                    bannerImgInfo: e,
                    imgUrlArry: a.data.imgUrlArry
                }, function() {
                    setTimeout(function() {
                        wx.hideLoading();
                    }, 2e3);
                });
            },
            fail: function(t) {
                g.globalData.showErrorAlert && (0, s.ShowDialog)(a), setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    },
    getClassList: function() {
        var t = this;
        wx.request({
            url: g.globalData.shopMHost + "xcx/category/list",
            method: "post",
            data: {
                xcxId: g.globalData.xcxId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log("分类列表---------", a.data.data), t.setData({
                    classlist: a.data.data
                });
            },
            fail: function() {}
        });
    },
    showBannerImg: function(t) {
        var a = t.currentTarget.dataset.jumptype, e = t.currentTarget.dataset.jumpurl, o = t.currentTarget.dataset.productid, s = (t.currentTarget.dataset.src, 
        "");
        if (2 == a && (s = "/subPackage/discover/pages/" + (3 == g.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + (o || e)), 
        3 == a) {
            var i = (0, n.classLoop)(e, this.data.classlist);
            wx.navigateTo({
                url: "/subPackage/index/pages/category-list/category-list?tagType=&iconName=" + i + "&categoryId=" + e
            });
        }
        if (4 == a && (s = "/" + e), 2 == a || 4 == a) wx.navigateTo({
            url: s,
            success: function() {
                console.log(1111);
            },
            fail: function() {
                console.log(2222);
            }
        }); else if (1 == a) {
            var d = t.currentTarget.dataset.index;
            wx.previewImage({
                current: this.data.imgUrlArry[d],
                urls: this.data.imgUrlArry
            });
        }
    },
    jumpToNext: function(t) {
        this.startMovePage();
        var a = t.currentTarget.dataset.id;
        console.log(a), wx.navigateTo({
            url: "/subPackage/discover/pages/goods_detail/goods_detail?id=" + a
        });
    },
    onReachBottom: function() {
        var e = this;
        e.data.hasNextPage && (e.data.showLoading = !0, e.setData(e.data), (0, a.SheQunListM)({
            ele: e,
            data: {
                openId: g.globalData.openid,
                orgId: g.globalData.orgId,
                pageIndex: e.data.pageIndex,
                pageSize: t.Conf.pageSize,
                type: e.data.type
            }
        }));
    },
    onPullDownRefresh: function() {
        console.log("下拉刷新");
        var o = this;
        o.data.shopList = [], o.data.pageIndex = 1, o.data.showBlank = !1, o.data.hasNextPage = !1, 
        o.data.showLoading = !1, o.setData(o.data), (0, a.SheQunListM)({
            ele: o,
            data: {
                openId: g.globalData.openid,
                orgId: g.globalData.orgId,
                pageIndex: 1,
                pageSize: t.Conf.pageSize,
                type: o.data.type
            },
            PullDown: !0
        }), (0, e.getIsOpenPayM)({
            ele: o,
            data: {
                xcxId: g.globalData.xcxId
            }
        }), this.getBannerList({
            xcxId: g.globalData.xcxId,
            imgType: 2
        }), this.getClassList();
    },
    retry: function() {
        var e = this;
        e.data.shopList = [], e.data.pageIndex = 1, e.setData(e.data), wx.showLoading({
            title: "加载中"
        }), (0, a.SheQunListM)({
            ele: e,
            data: {
                openId: g.globalData.openid,
                orgId: g.globalData.orgId,
                pageIndex: 1,
                pageSize: t.Conf.pageSize,
                type: e.data.type
            }
        });
    },
    onHide: function() {
        var t = this, a = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        });
        if (t.animation = a, a.translateX(360).step(), t.data.shopList) for (var e = 0; e < t.data.shopList.length; e++) t.data.shopList[e].animationData = t.animation.export(), 
        t.data.shopList[e].animationDataShow = !1;
        this.data.visiable = "none", this.setData(this.data);
    },
    onShow: function() {
        var t = this;
        setTimeout(function() {
            g.setMyCountDot(), wx.getStorage({
                key: "ordering_type",
                success: function(a) {
                    "2" == a.data ? t.setData({
                        visiable: "flex"
                    }) : t.setData({
                        visiable: "none"
                    });
                }
            });
        }, 1e3);
    },
    startMovePage: function() {
        var t = parseInt(this.data.discussInfo.shopListIndex);
        if (!isNaN(t) && this.data.shopList[t].animationDataShow) {
            var a = wx.createAnimation({
                duration: 200,
                timingFunction: "linear"
            });
            this.animation = a, a.translateX(360).step(), this.data.shopList[t].animationData = this.animation.export(), 
            this.data.shopList[t].animationDataShow = !1, this.setData(this.data);
        }
    },
    setDiscussValue: function(t) {
        var a = this, e = t.detail, o = e.index, s = e.type;
        if (1 == s) {
            var i = wx.createAnimation({
                duration: 200,
                timingFunction: "ease-out"
            });
            a.animation = i, i.translateX(360).step(), this.data.shopList[o].animationData = a.animation.export(), 
            this.data.shopList[o].animationDataShow = !1, this.setData({
                shopList: this.data.shopList
            });
        } else 2 == s ? (0, d.DiscoverListCommentPublishM)({
            data: {
                comment: e.content,
                goodsId: this.data.shopList[o].id,
                openId: g.globalData.openid
            },
            ele: a,
            index: o
        }) : 3 == s ? (0, p.DiscoverListCommentDelM)({
            data: {
                id: e.commentId
            },
            ele: a,
            index: o,
            fn: function() {
                a.data.shopList[o].comments.splice(e.commentIndex, 1), a.setData({
                    shopList: a.data.shopList
                });
            }
        }) : 4 == s ? (0, r.DiscoverListLikesOnM)({
            data: {
                goodsId: this.data.shopList[o].id,
                openId: g.globalData.openid
            },
            ele: a,
            index: o
        }) : 5 == s && (0, l.DiscoverListLikesOffM)({
            data: {
                id: e.likeId
            },
            ele: a,
            index: o,
            fn: function() {
                a.triggerEvent("setDiscussValue", {
                    shopList: a.data.shopList
                });
            }
        });
    }
}, u = Behavior({
    data: {
        pageIndex: 1,
        shopList: [],
        autoplay: !0,
        interval: 3e3,
        duration: 500,
        circular: !0,
        bannerImgInfo: [],
        showLoading: !1,
        showBlank: !1,
        goodsName: "发现",
        isOpenPay: 0,
        showTipData: {
            show: !1,
            content: "网络连接失败"
        },
        orgName: "",
        visiable: "none",
        prevent: !1,
        noData: !1,
        haveData: !1,
        overtime: !1,
        discussInfo: {
            inputShow: !1,
            goodsId: 0,
            inputText: "",
            placeHolder: "请输入评论内容",
            shopListIndex: ""
        },
        oneClick: 1,
        hasNextPage: !1,
        type: 1,
        classlist: [],
        imgUrlArry: [],
        onAuthShow: "",
        onAuthHide: "",
        authParams: {
            isCallBackHandle: !1
        }
    },
    behaviors: [],
    properties: {
        type: {
            type: String,
            value: null,
            observer: function(t, a) {
                console.log("type====" + t), t && console.log("type====" + t);
            }
        },
        onPullDownRefresh: {
            type: String,
            value: "",
            observer: function(t, a) {
                t && this.onPullDownRefresh();
            }
        },
        onReachBottom: {
            type: String,
            value: "",
            observer: function(t, a) {
                console.log(t + "子组件上拉加载更多:" + this.data.hasNextPage), t && this.onReachBottom();
            }
        },
        onShow: {
            type: String,
            value: "",
            observer: function(t, a) {
                console.log(t + "子组件显示:" + this.data.hasNextPage), t && this.onShow();
            }
        },
        onHide: {
            type: String,
            value: "",
            observer: function(t, a) {
                console.log(t + "子组件隐藏:" + this.data.hasNextPage), t && this.onHide();
            }
        }
    },
    methods: (0, c.jsonMerge)(h, i.discuss),
    ready: function() {
        wx.showLoading({
            title: "加载中"
        });
        var s = this;
        g.getNewOpenId(function(i) {
            s.data.shopList = [], s.data.pageIndex = 1, s.setData(s.data), (0, a.SheQunListM)({
                ele: s,
                data: {
                    openId: g.globalData.openid,
                    orgId: g.globalData.orgId,
                    pageIndex: s.data.pageIndex,
                    pageSize: t.Conf.pageSize,
                    type: s.data.type
                }
            }), g.userInfoMiddleWare().then(function(t) {
                if (t.isGetUserInfo) console.log("openid=", g.globalData.openid); else {
                    var a = new Date().getTime();
                    s.setData({
                        onAuthShow: a
                    });
                }
            }), (0, e.getIsOpenPayM)({
                ele: s,
                data: {
                    xcxId: g.globalData.xcxId
                }
            }), (0, o.shopInfoM)({
                ele: s,
                data: {
                    xcxId: g.globalData.xcxId
                },
                wxml: "discover"
            }), s.getBannerList({
                xcxId: g.globalData.xcxId,
                imgType: 2
            }), s.getClassList();
        });
    }
});

exports.DongTaiJs = u;
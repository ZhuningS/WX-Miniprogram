var a = getApp().globalData;

Page({
    data: {
        pages: {
            page: 0,
            pageSize: 10,
            totalPage: 0
        },
        userId: 1,
        scrollHeight: 0,
        loading: !1,
        isLoading: !1,
        shop: {},
        shopShow: {},
        shopService: []
    },
    onLoad: function(a) {
        console.log("onLoad");
        var e = this;
        e.setData({
            userId: a.shopId
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    scrollHeight: a.windowHeight
                });
            }
        }), this.getShopDetail(), this.getShopService(), this.getShow();
    },
    getShopDetail: function() {
        var e = this;
        console.log(22222), console.log(e.data.userId), wx.request({
            url: a.zbjUrl + "/shop/base",
            data: {
                shopId: e.data.userId
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                e.setData({
                    shop: a.data.data
                });
            }
        });
    },
    getShow: function() {
        var e = this;
        wx.request({
            url: a.zbjUrl + "/shop/show",
            data: {
                shopId: e.data.userId
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                setTimeout(function() {
                    wx.hideToast();
                }, 1e3), e.setData({
                    shopShow: a.data.data
                });
            }
        });
    },
    loadMore: function() {
        var a = this;
        a.setData({
            hasRefesh: !0
        }), this.data.isLoading || (this.setData({
            isLoading: !0
        }), this.data.pages.page + 1 < this.data.pages.totalPage ? (this.data.pages.page++, 
        this.getShopService()) : (console.log("没有更多数据了！！"), a.setData({
            loading: !1
        })));
    },
    getShopService: function() {
        var e = this;
        wx.request({
            url: a.zbjUrl + "/shop/services",
            data: {
                shopId: e.data.userId,
                pageNo: e.data.pages.page,
                pageSize: e.data.pages.pageSize
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var t = e.data.shopService;
                t = t.concat(a.data.data.list), e.data.pages.totalPage = a.data.data.totalPage, 
                t.forEach(function(a) {
                    a.lessMoney = e.getDecimal(a.price - a.appPrice, 2), "" != a.appPrice && (a.appPrice = e.getDecimal(a.appPrice, 2)), 
                    "" != a.price && (a.price = e.getDecimal(a.price, 2));
                }), e.data.pages.page + 1 < e.data.pages.totalPage ? e.setData({
                    shopService: t,
                    loading: !0,
                    isLoading: !1
                }) : e.setData({
                    shopService: t,
                    loading: !1,
                    isLoading: !1
                });
            }
        });
    },
    callShop: function() {
        var a = this;
        a.data.shop.mobile ? wx.showActionSheet({
            itemList: a.data.shop.mobile,
            success: function(e) {
                wx.makePhoneCall({
                    phoneNumber: a.data.shop.mobile[e.tapIndex]
                });
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        }) : wx.showToast({
            title: "当前服务商没有预留电话",
            icon: "success",
            duration: 2e3
        });
    },
    getDecimal: function(a, e) {
        var t;
        return e = parseInt(e) || 2, t = Math.pow(10, e), parseFloat(a).toFixed(e) * t / t;
    },
    onShareAppMessage: function() {
        var a = this;
        return {
            title: a.data.shop.brandname,
            desc: a.data.shop.selfinfo,
            path: "/pages/detail/detail?shopId=" + a.data.userId
        };
    }
});
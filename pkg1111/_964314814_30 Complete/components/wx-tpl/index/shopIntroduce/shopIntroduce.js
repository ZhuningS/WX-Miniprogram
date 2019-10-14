var t = require("../../../template/show_dialog/show_dialog"), e = require("../../../../components/model/link_us/linkUsM.js"), a = require("../../../model/message/custom-page/custom-page-info-m"), o = getApp();

Component({
    properties: {
        xcxType: {
            type: Number
        },
        isContactPage: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                var a = this;
                t && (this.setData({
                    isContactPage: t
                }), wx.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        var e = {
                            lat: t.latitude,
                            lng: t.longitude,
                            xcxId: o.globalData.xcxId
                        };
                        a.getDistance(e);
                    }
                }));
            }
        },
        refresh: {
            type: Boolean,
            value: !1,
            observer: function(t, e) {
                t && (this.getIntroduceData(), this.getOrgInfo());
            }
        },
        onShow: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.onShow();
            }
        }
    },
    data: {
        troduce_list: [],
        serveArr: [ "Wi-Fi", "停车位", "支付宝支付", "微信支付" ],
        shopImages: [],
        imgList: [],
        curr_id: "",
        defaultPoster: "http://yamxcx.oss-cn-shenzhen.aliyuncs.com/xcx/dv2.png",
        picdatas: [ {
            picUrl: "url(https://xcximg.197.com/xcx/dingwei.png) no-repeat left 14rpx",
            picSize: "24rpx 28rpx",
            nextIco: !0,
            moreText: !1
        }, {
            picUrl: "url(https://xcximg.197.com/xcx/greytel.png) no-repeat left 15rpx",
            picSize: "24rpx 28rpx",
            nextIco: !0,
            moreText: !1
        } ],
        navigatorList: [ {
            picUrl: "url(https://xcximg.197.com/xcx/tupianb.png) no-repeat left center",
            picSize: "24rpx 24rpx",
            nextIco: !1,
            moreText: !0
        }, {
            picUrl: "url(https://xcximg.197.com/xcx/infob.png) no-repeat left center",
            picSize: "22rpx 26rpx",
            nextIco: !1,
            moreText: !1
        }, {
            picUrl: "url(http://yamxcx.oss-cn-shenzhen.aliyuncs.com/shop-multi/time.png) no-repeat left 13rpx",
            picSize: "24rpx 30rpx",
            nextIco: !1,
            moreText: !1
        } ],
        pageList: [],
        shopTitle: "店铺图片",
        title: "商户介绍"
    },
    methods: {
        onShow: function() {
            this.getOrgInfo();
        },
        getOrgInfo: function() {
            var t = this, a = this;
            o.getOrgInfo(function(e, a) {
                if (a) {
                    var o = [];
                    a.orgFacilities && a.orgFacilities.length > 0 && (o = a.orgFacilities.split(",")), 
                    a.orgFacilities = o, t.setData({
                        orgInfo: a,
                        logo: a.logo,
                        latitude: a.lat,
                        longitude: a.lng,
                        name: a.orgName,
                        address: a.address,
                        phone: a.phone,
                        orgName: a.orgName
                    }, function() {
                        var t = {
                            orgName: this.data.orgName
                        }, e = {};
                        this.triggerEvent("setparentdata", t, e), setTimeout(function() {
                            wx.hideLoading();
                        }, 1e3);
                    });
                }
            }), (0, e.getNewShopInfo)(function(t, e) {
                e && a.setData({
                    imgList: e.images ? e.images : [],
                    shopTitle: e.shopTitle ? e.shopTitle : "店铺图片",
                    title: e.title ? e.title : "商户介绍"
                });
            }, function() {
                console.log("222222222", a.data.shopTitle, "33333333", a.data.title);
            });
        },
        videoPlay: function(t) {
            this.setData({
                curr_id: t.currentTarget.dataset.index + 1
            }), wx.createVideoContext("video-" + t.currentTarget.dataset.index).play();
        },
        getIntroduceData: function() {
            var t = this;
            (0, a.customPageInfo)({
                ele: t,
                data: {
                    customPageId: 0,
                    orgId: o.globalData.orgId
                }
            }, function(e, a) {
                var o = a.data;
                console.log("tempPageList====", o), t.setData({
                    pageList: o
                });
            });
        },
        previewImage: function(t) {
            var e = t.currentTarget.dataset.src, a = this;
            wx.previewImage({
                current: e,
                urls: a.data.shopImages
            });
        },
        openMap: function() {
            var t = this;
            wx.openLocation({
                latitude: t.data.latitude,
                longitude: t.data.longitude,
                name: t.data.orgName,
                address: t.data.address,
                scale: 28
            });
        },
        makePhoneCall: function(t) {
            wx.makePhoneCall({
                phoneNumber: t.currentTarget.dataset.phone
            });
        },
        getDistance: function(e) {
            var a = this;
            wx.request({
                url: o.globalData.shopMHost + "/xcx/base/getDistance",
                method: "post",
                data: e,
                complete: function() {
                    wx.stopPullDownRefresh();
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    if (t.data.data) {
                        var e = t.data.data;
                        a.data.distance = e > 1e3 ? "距离我 " + (e / 1e3).toFixed(1) + "km" : "距离我 " + (e > 0 ? e : "-k") + "m";
                    } else a.data.distance = "";
                    a.setData(a.data);
                },
                fail: function() {
                    (0, t.ShowDialog)(a);
                }
            });
        },
        seeBigPic: function(t) {
            var e = t.currentTarget.dataset.src, a = this;
            console.log(e), wx.previewImage({
                current: e,
                urls: a.data.orgOnlyImages
            });
        },
        stopOther: function(t) {
            console.log(t.detail, "有执行这代码吗"), this.setData({
                thisIndexes: t.detail
            });
        }
    }
});
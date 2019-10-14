var e = require("../../utils/appRouters.js");

Page({
    data: {
        selectedCategoryId: 0,
        selectedCategoryName: "",
        selectErrorNeedMobile: !1,
        selectErrorNeedCate: !1,
        cateSelectorActive: !1,
        categoriesSelected1Id: !1,
        categoriesSelected1Name: !1,
        categoriesLevel2: !1,
        userInfo: !1,
        curCityId: null
    },
    cateSelect: function(e) {
        this.setData({
            selectedCategoryId: e.target.dataset.id,
            selectedCategoryName: e.target.dataset.name
        }), this.setData({
            selectErrorNeedCate: !1
        });
    },
    cateMore: function() {
        this.setData({
            cateSelectorActive: !0,
            selectErrorNeedCate: !1
        });
    },
    cateMoreClose: function() {
        this.categoriesSelectLevel1Cancel(), this.setData({
            cateSelectorActive: !1
        });
    },
    mobileCheck: function() {
        this.data.userInfo && !this.data.userInfo.mobile ? wx.navigateTo({
            url: "/pages/login/login?preUrl=/pages/request/request"
        }) : this.goLogin();
    },
    categoriesSelectLevel1Cancel: function() {
        this.setData({
            categoriesSelected1Id: !1,
            categoriesSelected1Name: !1,
            categoriesLevel2: !1
        });
    },
    categoriesSelectLevel1: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.categories[t];
        this.setData({
            categoriesSelected1Id: a.category1Id || a.ctgy1Id,
            categoriesSelected1Name: a.category1Name,
            categoriesLevel2: a.childCategorys
        });
    },
    categoriesSelectLevel2: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.categoriesLevel2[t];
        this.setData({
            selectedCategoryId: a.pubCategory2Id,
            selectedCategoryName: a.category2Name
        }), this.categoriesSelectLevel1Cancel(), this.cateMoreClose();
    },
    getCityInfo: function() {
        var t = this;
        e.cityInfo({
            method: "GET",
            success: function(e) {
                t.setData({
                    curCityId: e.data.data.currentCity.city_id
                });
            }
        });
    },
    requestStart: function() {
        var t = this;
        if (this.data.selectedCategoryId || this.setData({
            selectErrorNeedCate: !0
        }), this.data.userInfo && this.data.userInfo.mobile || this.setData({
            selectErrorNeedMobile: !0
        }), !this.data.selectErrorNeedMobile && !this.data.selectErrorNeedCate) {
            wx.showLoading({
                title: "发布中"
            });
            var a = wx.getSystemInfoSync().system.toLowerCase().indexOf("android") >= 0 ? "android" : "ios", s = {
                android: 1,
                ios: 2
            }, o = {
                content: this.data.selectedCategoryName,
                publishType: 1,
                phoneType: s[a],
                userkey: this.data.userInfo.userkey,
                userId: this.data.userInfo.userId,
                mobile: this.data.userInfo.mobile,
                cityId: this.data.curCityId
            };
            e.sendFastTask({
                data: o,
                header: "application/x-www-form-urlencoded",
                method: "POST",
                success: function(e) {
                    if (e.data.success) wx.hideLoading(), wx.showToast({
                        icon: "success",
                        title: "发布已成功！",
                        duration: 2e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/orderDetail/orderDetail?taskId=" + e.data.data.taskId,
                            complete: function(e) {
                                console.log(e);
                            }
                        });
                    }, 2e3), t.setData({
                        selectedCategoryId: 0,
                        selectedCategoryName: ""
                    }); else {
                        var a = e.data.errMsg;
                        a.match(/userid/i) && (t.goLogin(), a = "抱歉，请重试一次"), wx.hideLoading(), wx.showToast({
                            icon: "none",
                            title: a,
                            duration: 2e3
                        });
                    }
                },
                complete: function() {}
            });
        }
    },
    onLoad: function(t) {
        var a = this;
        e.requestHotCate({
            data: {},
            method: "GET",
            success: function(e) {
                var t = e.data.data.categories, s = [ [], [] ];
                for (var o in t) {
                    if (o > 7) break;
                    s[parseInt(o / 4)].push(t[o]);
                }
                s[1].push({
                    key: "more"
                }), a.setData({
                    hots: s
                });
            }
        }), e.requestCategories({
            data: {},
            method: "GET",
            success: function(e) {
                var t = e.data.data;
                a.setData({
                    categories: t
                });
            }
        }), this.getCityInfo();
    },
    onReady: function() {
        var e = this;
        this.setData({
            selectedCategoryId: 0,
            selectedCategoryName: ""
        }), e.goLogin();
    },
    goLogin: function() {
        var e = this;
        wx.login({
            success: function(t) {
                t.code ? (e.setData({
                    code: t.code
                }), wx.getStorage({
                    key: "isGetAuthor",
                    success: function(t) {
                        e.isBindZBJ(e.data.code, t.encryptedData, t.iv);
                    },
                    fail: function() {
                        e.setData({
                            noZBJ: !1
                        }), e.isBindZBJ(e.data.code);
                    }
                })) : console.log("获取用户登录态失败！" + t.errMsg);
            }
        });
    },
    isBindZBJ: function(t, a, s) {
        var o = this;
        e.isBindZBJ({
            data: {
                authCode: t,
                encryptedData: a || "",
                iv: s || ""
            },
            header: "application/x-www-form-urlencoded",
            method: "POST",
            success: function(e) {
                new Date();
                if (e.data.data.userId && e.data.data.userkey) {
                    o.setData({
                        userInfo: e.data.data,
                        isLogin: !0,
                        isClick: !1,
                        selectErrorNeedMobile: !1
                    });
                    try {
                        wx.setStorageSync("userInfo", o.data.userInfo);
                    } catch (e) {}
                } else o.data.noZBJ ? wx.navigateTo({
                    url: "/pages/login/login?preUrl=/pages/request/request"
                }) : wx.navigateTo({
                    url: "/pages/author/author?preUrl=/pages/request/request"
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {
        this.setData({
            selectedCategoryId: 0,
            selectedCategoryName: ""
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
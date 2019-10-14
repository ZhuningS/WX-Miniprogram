var t, a = require("../../utils/util.js"), e = require("../../utils/ajax.js"), i = require("../../utils/common.js"), o = require("../../utils/socket.js"), n = require("../../common/PageBase.js"), s = (require("../../utils/wxParse/wxParse.js"), 
getApp());

Page(i.extendPage(n, {
    data: {
        dataLoaded: !1,
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        current: 0,
        isFixed: 0,
        double: !0,
        toId: "",
        nowScrollTop: 0,
        backgroundColor: "#F2F2F7"
    },
    onLoad: function(t) {
        var a, e = this, o = "";
        if (void 0 !== t.scene && "" != t.scene) {
            var n = decodeURIComponent(t.scene).split(",");
            "C" == n[0] && (o = n[1]);
        }
        "" != t.id && void 0 !== t.id && (a = t.id, s.setCardid(a)), void 0 !== t.invite && "" != t.invite && (this.setData({
            invite: t.invite || ""
        }), i.setFx(t.invite)), i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var t = e, a = s.getMsgNum(), n = s.getTabbar(), r = s.getAccount(), c = i.isShowtab("mall"), d = s.getAuth(), u = s.getStoreInfo(), l = s.getCopyRight();
                console.log("isAuth====", d), "" != s.getUInfo().mobile && t.setData({
                    hasMobile: 1
                }), t.setData({
                    companyInfo: u,
                    isAuth: d,
                    channel: o,
                    msgNum: a,
                    tabbar: n,
                    account: r,
                    isShowTab: c,
                    copyright_logo: l
                }), t._getMall();
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.getIndexData(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    getUserInfo: function(t) {
        var e = t.detail.userInfo;
        e && void 0 != e && (a.showOK("登录成功"), i.updateUserInfo(e), s.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _getMall: function() {
        var t = this;
        t.data.id;
        e.G({
            url: "/apis/home/card.mall/info",
            data: {},
            success: function(a) {
                var e = a.data.setting;
                wx.setStorageSync("isPay", e.isPay), t.setData({
                    isPay: e.isPay
                }), t.getIndexData();
            }
        });
    },
    getIndexData: function(t) {
        var i = this, o = this.data.invite || "", n = this.data.channel || "";
        i._actTimer && clearTimeout(i._actTimer), i._cutTimer && clearTimeout(i._cutTimer), 
        e.G({
            url: "/apis/home/card.site/mall",
            data: {
                invite: o,
                channel: n
            },
            success: function(o) {
                if ("[]" == o.data.page_content) return a.showWarn("商城无展示内容"), void i.setData({
                    dataLoaded: !0
                });
                var n = o.data.page_content.pModules, r = o.data.page_content.page.dataset, c = o.data.page_content.page.style.backgroundColor;
                if (i.setData({
                    shareInfo: r,
                    backgroundColor: c
                }), n.length <= 0) return a.showWarn("商城无展示内容"), void i.setData({
                    dataLoaded: !0
                });
                var d = o.data.invite.id;
                "" != d && void 0 !== d && s.setCardid(d), n.forEach(function(t) {
                    if (5 == t.content.type) {
                        var a = t.content.dataset.url;
                        if (!a) return;
                        var o = decodeURIComponent(a);
                        e.G({
                            url: "/apis/home/index.index/parseTxVideoUrl",
                            data: {
                                video_url: o
                            },
                            success: function(a) {
                                t.content.dataset.url = a.data, t.content.dataset.img = a.img, i.setData({
                                    page_content: n
                                });
                            }
                        });
                    }
                    if ("Seckill" == t.name) {
                        var r = t.content.dataset.selectGoodsList;
                        if (console.log("秒杀商品====", r), r.length > 0) {
                            var c = [];
                            r.forEach(function(t, a) {
                                c.push({
                                    sec: t.lasttime
                                });
                            }), i.timeArr = c, i.setData({
                                timeArr: c
                            }), i._actTimerDown();
                        }
                    }
                    if ("CutList" == t.name) {
                        var d = t.content.dataset.selectGoodsList;
                        if (console.log("砍价商品====", d), d.length > 0) {
                            var u = [];
                            d.forEach(function(t, a) {
                                u.push({
                                    sec: t.lasttime
                                });
                            }), i.kantimeArr = u, i.setData({
                                kantimeArr: u
                            }), i._cutTimerDown();
                        }
                    }
                    "CateList" == t.name && e.G({
                        url: "/apis/home/goods.category/index",
                        data: {
                            page: 1,
                            size: 999
                        },
                        success: function(t) {
                            i.setData({
                                cateList: t.data
                            });
                        }
                    }), "HomeCardList" == t.name && e.G({
                        url: "/apis/home/card.mall/coupon",
                        data: {
                            card_id: s.getCardid() || this.data.card_id,
                            page: 1,
                            size: 999
                        },
                        success: function(t) {
                            i.setData({
                                couponList: t.data.coupon_list.list
                            });
                        }
                    }), i.setData({
                        page_content: n
                    }, function() {
                        setTimeout(function() {
                            i.setData({
                                dataLoaded: !0
                            });
                        }, 300);
                    });
                }), i.getMsg(), i._getCartAmount(), t && t();
            },
            fail: function() {
                t && t();
            }
        });
    },
    _acceptCoupon: function(t) {
        var i = this, o = t.currentTarget.dataset.id, n = t.currentTarget.dataset.index;
        e.G({
            url: "/apis/home/card.Coupon/collect",
            data: {
                coupon_id: o
            },
            success: function(t) {
                0 == t.code ? (a.showWarn(t.msg), i.data.couponList[n].has = 1, i.setData({
                    couponList: i.data.couponList
                })) : a.showWarn(t.msg);
            }
        });
    },
    _actTimerDown: function() {
        var t = this, e = t.data.timeArr || t.timeArr;
        e.forEach(function(i, o) {
            if (i.sec <= 0) return t.data.seckillList.splice(o, 1), e.splice(o, 1), clearTimeout(t._actTimer), 
            void t.setData({
                seckillList: t.data.seckillList
            });
            i.timeStr = a.getTimeBySec(i.sec), i.sec = i.sec - 1e3;
        }), e.length > 0 && (t.setData({
            timeArr: e
        }), t._actTimer = setTimeout(function() {
            t._actTimerDown();
        }, 1e3));
    },
    _cutTimerDown: function() {
        var t = this, e = t.data.kantimeArr || t.kantimeArr;
        e.forEach(function(i, o) {
            if (i.sec <= 0) return t.data.bargainList.splice(o, 1), e.splice(o, 1), clearTimeout(t._cutTimer), 
            void t.setData({
                bargainList: t.data.bargainList
            });
            i.timeStr = a.getTimeBySec(i.sec), i.sec = i.sec - 1e3;
        }), e.length > 0 && (t.setData({
            kantimeArr: e
        }), t._cutTimer = setTimeout(function() {
            t._cutTimerDown();
        }, 1e3));
    },
    _pullMobile: function() {
        e.G({
            url: "/apis/home/card.item/grant_phone",
            data: {
                id: s.getCardid()
            },
            success: function(t) {}
        });
    },
    getMsg: function() {
        var a = s.getCardInfo().cardAvatar;
        this.setData({
            cardAvatar: a
        });
        var e, i = this, n = "u" + s.getUid();
        o.pushMessage(n, function(a) {
            if (t && (console.log("清除定时器", t), clearInterval(t)), e = JSON.parse(a.data), console.log("msgInfo=======", e), 
            "open" != e.type) {
                var o = e.offline;
                o && o > 0 ? i.setData({
                    msgInfo: e,
                    msgStatus: 1,
                    msgNum: o
                }) : i.setData({
                    msgNum: 0
                }), t = setInterval(function() {
                    1 == i.data.msgStatus && (i.setData({
                        msgStatus: 2
                    }), clearInterval(t));
                }, 4e3), console.log("新的定时器====", t);
            }
        });
    },
    _getmobile: function(t) {
        var a = t.detail, i = a.errMsg, o = a.iv, n = a.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), e.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: o,
                code: n,
                uid: s.getUid(),
                card_id: s.getCardid()
            },
            success: function(t) {
                s.setMobile(t.data.mobile);
            },
            fail: function(t) {}
        })), this._jumpToChat(t);
    },
    _getCartAmount: function() {
        var t = this;
        e.G({
            url: "/apis/home/goods.cart/index",
            data: {
                uid: s.getUid(),
                card_id: s.getCardid()
            },
            success: function(a) {
                var e = 0;
                a.data.forEach(function(t) {
                    var a = t.goods;
                    e += a.length;
                }), console.log(e), t.setData({
                    cartAmount: e || 0
                });
            }
        });
    },
    _changeItem: function(t) {
        var a = this;
        console.log("index---" + t.target.dataset.index);
        var i = t.target.dataset.cid || "", o = t.target.dataset.index;
        a.setData({
            current: o,
            cid: i,
            toId: "s" + (t.target.dataset.index - 2)
        }), e.G({
            url: "/apis/home/goods.category/index",
            data: {
                page: 1,
                size: 999,
                cid: i
            },
            success: function(t) {
                a.setData({
                    cateList: t.data
                });
            }
        });
    },
    _jumpToChat: function(t) {
        var a = s.getCardid();
        if (t) {
            var e = t.detail.formId;
            i.submitForm(e);
        }
        wx.navigateTo({
            url: "/pages/im/chatroom/chatroom?card_id=" + a
        });
    },
    _jumpToVideo: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.setStorageSync("currentVideo", a), wx.navigateTo({
            url: "/pages/videoPage/index"
        });
    },
    onShareAppMessage: function(t) {
        var a = this, e = a.data.shareInfo.shareTitle || "", i = a.data.shareInfo.imageUrl || "", o = s.getUid(), n = s.getCardid(), r = "/pages/shop/index?id=" + n + "&invite=" + (o + "_" + n);
        return console.log(r), {
            title: e,
            path: r,
            imageUrl: i,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    onHide: function() {},
    onUnload: function() {
        wx.closeSocket(), clearInterval(t);
    },
    onShow: function() {
        var t = this;
        "im" == t.data.fromPage && t.setData({
            msgNum: 0
        });
    }
}));
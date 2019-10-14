var t, a = require("../../utils/util.js"), e = require("../../utils/ajax.js"), i = require("../../utils/common.js"), n = require("../../utils/socket.js"), s = require("../../common/PageBase.js"), o = (require("../../utils/wxParse/wxParse.js"), 
getApp());

Page(i.extendPage(s, {
    data: {
        dataLoaded: !1,
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        current: 0,
        isFixed: 0,
        double: !0,
        toId: "",
        nowScrollTop: 0
    },
    onLoad: function(t) {
        var a = this, e = "";
        "" != t.id && void 0 !== t.id && (e = t.id, o.setCardid(e)), void 0 !== t.invite && "" != t.invite && (this.setData({
            invite: t.invite || ""
        }), i.setFx(t.invite)), i.initApp({
            loginSuc: function() {
                var e = a, i = t.id, n = t.invite, s = t.title || "", r = o.getAuth(), c = o.getStoreInfo();
                e.setData({
                    page_title: s,
                    id: i || "",
                    invite: n || "",
                    companyInfo: c,
                    isAuth: r
                }), e._getMall();
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
        e && void 0 != e && (a.showOK("登录成功"), i.updateUserInfo(e), o.setAuth(!0), this.setData({
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
        var i = this, n = this, s = n.data.id, r = n.data.invite || "";
        n._actTimer && clearTimeout(n._actTimer), n._cutTimer && clearTimeout(n._cutTimer), 
        e.G({
            url: "/apis/home/card.site/mallget",
            data: {
                id: s,
                invite: r
            },
            success: function(s) {
                if ("[]" == s.data.page_content || "" == s.data.page_content) return a.showWarn("商城无展示内容"), 
                void n.setData({
                    dataLoaded: !0
                });
                var r = s.data.page_content.pModules;
                if (r.length <= 0) return a.showWarn("商城无展示内容"), void i.setData({
                    dataLoaded: !0
                });
                var c = s.data.invite.id;
                "" != c && void 0 !== c && o.setCardid(c), r.forEach(function(t) {
                    if (5 == t.content.type) {
                        var a = t.content.dataset.url;
                        if (!a) return;
                        var i = decodeURIComponent(a);
                        e.G({
                            url: "/apis/home/index.index/parseTxVideoUrl",
                            data: {
                                video_url: i
                            },
                            success: function(a) {
                                t.content.dataset.url = a.data, t.content.dataset.img = a.img, n.setData({
                                    page_content: r
                                });
                            }
                        });
                    }
                    if ("Seckill" == t.name) {
                        var s = t.content.dataset.selectGoodsList;
                        if (console.log("秒杀商品====", s), s.length > 0) {
                            var c = [];
                            s.forEach(function(t, a) {
                                c.push({
                                    sec: t.lasttime
                                });
                            }), n.timeArr = c, n.setData({
                                timeArr: c
                            }), n._actTimerDown();
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
                            }), n.kantimeArr = u, n.setData({
                                kantimeArr: u
                            }), n._cutTimerDown();
                        }
                    }
                    "CateList" == t.name && e.G({
                        url: "/apis/home/goods.category/index",
                        data: {
                            page: 1,
                            size: 999
                        },
                        success: function(t) {
                            n.setData({
                                cateList: t.data
                            });
                        }
                    }), "HomeCardList" == t.name && e.G({
                        url: "/apis/home/card.Coupon/getList",
                        data: {
                            card_id: o.getCardid() || this.data.card_id,
                            page: 1,
                            size: 4
                        },
                        success: function(t) {
                            n.setData({
                                couponList: t.data.item
                            });
                        }
                    }), n.setData({
                        page_content: r
                    }, function() {
                        setTimeout(function() {
                            n.setData({
                                dataLoaded: !0
                            });
                        }, 300);
                    });
                }), n.getMsg(), n._getCartAmount(), t && t();
            },
            fail: function() {
                t && t();
            }
        });
    },
    _acceptCoupon: function(t) {
        var i = this, n = t.currentTarget.dataset.id, s = t.currentTarget.dataset.index;
        e.G({
            url: "/apis/home/card.Coupon/collect",
            data: {
                coupon_id: n
            },
            success: function(t) {
                0 == t.code ? (a.showWarn(t.msg), i.data.couponList[s].has = 1, i.setData({
                    couponList: i.data.couponList
                })) : a.showWarn(t.msg);
            }
        });
    },
    _actTimerDown: function() {
        var t = this, e = t.data.timeArr || t.timeArr;
        e.forEach(function(i, n) {
            if (i.sec <= 0) return t.data.seckillList.splice(n, 1), e.splice(n, 1), clearTimeout(t._actTimer), 
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
        e.forEach(function(i, n) {
            if (i.sec <= 0) return t.data.bargainList.splice(n, 1), e.splice(n, 1), clearTimeout(t._cutTimer), 
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
                id: o.getCardid()
            },
            success: function(t) {}
        });
    },
    getMsg: function() {
        var a = o.getCardInfo().cardAvatar;
        this.setData({
            cardAvatar: a
        });
        var e, i = this, s = "u" + o.getUid();
        n.pushMessage(s, function(a) {
            if (t && (console.log("清除定时器", t), clearInterval(t)), e = JSON.parse(a.data), console.log("msgInfo=======", e), 
            "open" != e.type) {
                var n = e.offline;
                n && n > 0 ? i.setData({
                    msgInfo: e,
                    msgStatus: 1,
                    msgNum: n
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
        var a = t.detail, i = a.errMsg, n = a.iv, s = a.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), e.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: s,
                uid: o.getUid(),
                card_id: o.getCardid()
            },
            success: function(t) {
                o.setMobile(t.data.mobile);
            },
            fail: function(t) {}
        })), this._jumpToChat(t);
    },
    _getCartAmount: function() {
        var t = this;
        e.G({
            url: "/apis/home/goods.cart/index",
            data: {
                uid: o.getUid(),
                card_id: o.getCardid()
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
        var i = t.target.dataset.cid || "", n = t.target.dataset.index;
        a.setData({
            current: n,
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
        var a = o.getCardid();
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
        var a = this.data.companyInfo.name + "的商城", e = o.getUid(), i = o.getCardid(), n = "/pages/shop/index?id=" + i + "&invite=" + (e + "_" + i);
        return console.log(n), {
            title: a,
            path: n,
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
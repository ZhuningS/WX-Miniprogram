var a = require("../../components/template/show_dialog/show_dialog"), e = require("./which-product"), t = require("../../components/model/my/new-order-count-m"), o = require("../../components/wx-tpl/copyright/common-js/join-apply-config-m.js"), n = require("../../components/model/my/my_m"), i = require("../../components/model/getIsOpenPay/getIsOpenPay-m"), s = require("../../util/util.js"), r = getApp();

Page({
    data: {
        avatarUrl: "",
        nickName: "",
        visiable: "none",
        visiable02: "none",
        ordering_state: 1,
        list: [ {
            status: 3
        }, {
            status: 4
        } ],
        orderCount: {},
        showTipData: {
            show: !1,
            content: "网络连接失败"
        },
        detailInfo: "收货地址",
        xcxType: 3,
        buyCarCount: 0,
        isHistory: !1,
        time: s.formatTimeLayout(new Date()),
        orderSegment: [ {
            tabName: "待收货",
            img: "dshre_icon.png",
            status: 10
        }, {
            tabName: "待取货",
            img: "dqh_icon.png",
            status: 4
        }, {
            tabName: "已完成",
            img: "ywc_icon.png",
            status: 6
        }, {
            tabName: "已关闭",
            img: "ygbre_icon.png",
            status: 9
        } ],
        onAuthShow: "",
        onAuthHide: "",
        authParams: {},
        onShow: "",
        isHot: !0,
        content: {},
        balance: "",
        loginStatus: 1,
        rechargeValue: "",
        wx: !1,
        showMakeXcx: !1,
        touchStartTime: "",
        touchEndTime: "",
        lastTapTime: 0,
        tapTime: 0,
        showVersionDialog: !1
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "加载中"
        });
        var e = this;
        r.getTabBarTitle();
        for (var t = r.globalData.tabBarList, o = !1, n = 0; n < t.length; n++) if (t[n].pagePath.indexOf("/buy_car/buy_car") > -1) {
            o = !0;
            break;
        }
        e.setData({
            hasBuyCarTab: o
        }), e.payTheBill();
        for (var i = !1, s = r.globalData.specialXcxIds, c = 0; c < s.length; c++) if (s[c] == r.globalData.xcxId) {
            i = !0;
            break;
        }
        i || this.setData({
            showMakeXcx: !0
        });
    },
    onShow: function() {
        var a = this, t = this;
        t.data.hasBuyCarTab && 1 != t.data.xcxType || r.setCarCountDot(), t.getOrderCount(), 
        wx.setStorage({
            key: "currentTime",
            data: Date.parse(this.data.time)
        }), wx.getStorage({
            key: "currentTime",
            success: function(a) {}
        }), wx.getStorage({
            key: "isClickNum",
            success: function(a) {
                "1" == a.data && t.setData({
                    isHot: !1
                });
            }
        });
        var n = new Date().getTime();
        this.setData({
            onShow: n
        }), (0, o.joinApplyConfigM)({
            ele: t
        }), t.isBandCard(), r.userInfoMiddleWare().then(function(a) {
            if (a.isGetUserInfo) {
                var o = r.globalData.userInfo, n = new Date().getTime();
                t.setData({
                    avatarUrl: o.avatarUrl,
                    nickName: o.nickName,
                    onAuthHide: n
                });
            } else wx.eventBus.trigger("showOnAuthShow");
            (0, e.isHistoryOrder)({
                ele: t,
                data: {
                    openId: a.openId,
                    orgId: r.globalData.orgId
                }
            }), t.memberLoginInfo(), wx.hideLoading();
        }), t.orderTipM(), wx.getStorage({
            key: "ordering_state",
            success: function(a) {
                "2" == a.data ? t.setData({
                    visiable02: "block"
                }) : t.setData({
                    visiable02: "none"
                });
            }
        }), (0, e.whichProduct)({
            ele: t,
            data: {
                xcxId: r.globalData.xcxId
            }
        }), wx.getStorage({
            key: "shoppingCarGoods",
            success: function(e) {
                var t = 0;
                e.data.map(function(a) {
                    t += a.count;
                }), t > 99 && (t = "99+"), a.setData({
                    buyCarCount: t
                });
            }
        }), r.getUserActiviyNum(function(e) {
            a.setData({
                activiyNum: e
            });
        }), t.payTheBill();
    },
    getOrderCount: function() {
        var a = this, e = a.data.list;
        r.getNewOpenId(function(o) {
            (0, t.newOrderCount)({
                openId: o,
                list: e,
                orgId: r.globalData.orgId
            }, r, function(e, t) {
                if (e) ; else {
                    var o = {
                        collectGoods: "",
                        pickGoods: ""
                    }, n = 0;
                    t.map(function(a, e) {
                        n += a, a > 99 && (a = "99+"), 0 == e && (o.collectGoods = a), 1 == e && (o.pickGoods = a);
                    }), a.setData({
                        orderCount: o
                    });
                    var i = r.isHasTabByTitle({
                        url: "page/my/my"
                    });
                    n <= 0 ? wx.hideTabBarRedDot({
                        index: i.index
                    }) : 0 == i.index && wx.showTabBarRedDot({
                        index: i.index
                    });
                }
            });
        });
    },
    goMyOrder: function(a) {
        var e = a.currentTarget.dataset;
        wx.navigateTo({
            url: "/subPackage/my/pages/my_order/my_order?status=" + e.status + "&index=" + e.index
        });
    },
    changeOrderState: function() {
        var a = this;
        wx.navigateTo({
            url: "/subPackage/my/pages/my_order/my_order"
        }), a.setData({
            visiable: "none"
        }), wx.setStorage({
            key: "ordering_state",
            data: "1"
        });
    },
    clickHot: function() {
        wx.setStorage({
            key: "isClickNum",
            data: "1"
        });
    },
    getPermission: function() {
        var a = this;
        this.getWxAddr(function() {
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.address"] || wx.showModal({
                        title: "提示",
                        content: "您还未授权通讯地址，未授权您将无法体验完整功能，建议您授权通讯地址",
                        success: function(e) {
                            e.confirm && a.openSetting();
                        }
                    });
                }
            });
        });
    },
    setPower: function() {
        var e = this;
        wx.authorize({
            scope: "scope.address",
            success: function(a) {
                console.log("成功~" + JSON.stringify(a));
            },
            fail: function(t) {
                (0, a.ShowDialog)(e);
            }
        });
    },
    openSetting: function() {
        var a = this;
        wx.openSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] && a.getWxAddr(), console.log(JSON.stringify(e));
            },
            fail: function() {}
        });
    },
    getWxAddr: function(a) {
        var e = this;
        wx.chooseAddress({
            success: function(a) {
                e.data.userName = a.userName, e.data.telNumber = a.telNumber, e.setData(e.data);
            },
            fail: function(e) {
                a && a();
            }
        });
    },
    refreshUserInfo: function(a) {
        console.log("refreshUserInfo"), console.log(a.detail);
        var e = a.detail, t = this;
        if (e.userInfo) {
            r.globalData.isCouldAuth = 1, this.setData({
                avatarUrl: "http://yamxcx.oss-cn-shenzhen.aliyuncs.com/xcx/toux.png",
                nickName: "微信用户"
            });
            var o = r.globalData.userInfo ? r.globalData.userInfo : {};
            o = Object.assign({}, o, a.detail.userInfo), console.log("tempUserInfo=", o), setTimeout(function() {
                t.setData({
                    avatarUrl: e.userInfo.avatarUrl,
                    nickName: e.userInfo.nickName
                });
            }, 80), r.newSaveUserInfo(o, function(a) {
                console.log("&^^^^^^^^^^^^^^^^^^^^"), console.log(a);
            });
        } else r.globalData.isCouldAuth = 2, r.globalData.userInfo && (r.globalData.userInfo.avatarUrl = "http://yamxcx.oss-cn-shenzhen.aliyuncs.com/xcx/toux.png", 
        r.globalData.userInfo.nickName = "微信用户"), this.setData({
            avatarUrl: "http://yamxcx.oss-cn-shenzhen.aliyuncs.com/xcx/toux.png",
            nickName: "微信用户"
        });
    },
    backHandle: function(a) {
        console.log("backHandle() : "), console.log(a);
        var e = a.detail.userInfo;
        this.setData({
            avatarUrl: e.avatarUrl,
            nickName: e.nickName
        });
    },
    registerVip: function() {
        wx.navigateTo({
            url: "/subPackage/my/pages/login/login"
        });
    },
    addVipMoney: function() {
        if (2 != this.data.isSetPwd) wx.showModal({
            title: "请设置支付密码",
            content: "为了保证你的资金安全，请先设置支付密码。设置后才可进行充值、会员卡消费等操作。",
            cancelText: "取消",
            confirmColor: "#d3a95a",
            confirmText: "马上设置",
            success: function(a) {
                a.confirm && wx.navigateTo({
                    url: "/subPackage/my/pages/vip_security_center/set_password/set_password"
                });
            }
        }); else {
            if (2 == this.data.enableReturnGive) return void wx.navigateTo({
                url: "/subPackage/vipCenter/pages/recharge/index"
            });
            this.setData({
                isShowPayDialog: !0
            });
        }
    },
    goVipPage: function() {
        1 != this.data.loginStatus && wx.navigateTo({
            url: "/subPackage/superVip/pages/index/index"
        });
    },
    isBandCard: function() {
        var a = this;
        r.isBindMemberCard().then(function(e) {
            if ("000000" == e.data.code) {
                a.setData({
                    memberCardEnable: e.data.data.enableMemberCard,
                    memberCardRemark: e.data.data.remark,
                    enableReturnGive: e.data.data.enableReturnGive
                });
                var t = wx.getStorageSync("memberCardInfo");
                t && (0, n.isSetPayPwdM)({
                    ele: a,
                    data: {
                        memberId: t.id,
                        sessionId: t.sessionId
                    }
                });
            }
        });
    },
    memberLoginInfo: function() {
        var a = this, e = wx.getStorageSync("memberCardInfo");
        console.log("本地缓存的会员信息-------", e), a.setData({
            loginStatus: e ? 2 : 1
        }), e && (0, n.memberInfoM)({
            ele: a,
            data: {
                memberId: e.id,
                sessionId: e.sessionId
            }
        });
    },
    orderTipM: function() {
        var a = this;
        wx.setStorage({
            key: "ordering_type",
            data: "1"
        }), setTimeout(function() {
            a.data.visiable = "none", a.setData(a.data);
        }, 100);
    },
    closePayDialog: function() {
        this.setData({
            isShowPayDialog: !1
        });
    },
    setRechargeValue: function(a) {
        this.setData({
            rechargeValue: a.detail.value
        });
    },
    paySuccess: function(a) {
        var e = a.detail || {};
        if (e.timeStamp) {
            var t = {
                dealTime: +e.timeStamp,
                orderNo: e.orderNo,
                productName: e.productName,
                payAmount: e.amount,
                balance: e.balance,
                returnGiftAmount: e.returnGiftAmount,
                payType: 3
            };
            wx.navigateTo({
                url: "/subPackage/vipCenter/pages/rechargeSuccess/index?type=vip&config=" + JSON.stringify(t)
            });
        } else this.memberLoginInfo();
    },
    payTheBill: function() {
        var a = this;
        (0, i.getIsOpenPayM)({
            ele: this,
            data: {
                xcxId: r.globalData.xcxId
            }
        }, function(e) {
            a.setData({
                enableXcxOffLinePay: e.enableXcxOffLinePay
            });
        });
    },
    touchStart: function(a) {
        this.setData({
            touchStartTime: a.timeStamp
        });
    },
    touchEnd: function(a) {
        this.setData({
            touchEndTime: a.timeStamp
        });
    },
    manyTap: function(a) {
        var e = this;
        if (console.log(e.data.tapTime), e.data.touchEndTime - e.data.touchStartTime < 350) {
            var t = a.timeStamp, o = e.data.lastTapTime;
            e.data.lastTapTime = t, e.setData({
                lastTapTime: e.data.lastTapTime
            }), t - o < 500 ? (++e.data.tapTime, 2 == e.data.tapTime && (e.data.tapTime = 0, 
            e.setData({
                showVersionDialog: !0
            }))) : (console.log("大于500ms 500ms 500ms"), e.data.tapTime = 0);
        } else console.log("长按长按长按长按"), e.data.tapTime = 0;
        e.setData({
            tapTime: e.data.tapTime
        });
    },
    closeVersionDialog: function(a) {
        this.setData({
            showVersionDialog: a.detail.state
        });
    }
});
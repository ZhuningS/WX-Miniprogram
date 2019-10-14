var t, a = require("../../../utils/util.js"), e = require("../../../utils/ajax.js"), i = require("../../../utils/common.js"), n = require("../../../utils/socket.js"), o = require("../../../common/PageBase.js"), s = require("../../../utils/wxParse/wxParse.js"), r = getApp(), d = wx.createInnerAudioContext();

Page(i.extendPage(o, {
    data: {
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        isLogin: !1,
        id: null,
        isHasAttr: 0,
        actType: 0,
        dataLoaded: !1,
        winHei: 0,
        swiperHei: 0,
        curSwiperIndex: 0,
        shop: {},
        postage: 0,
        curSkuItem: {
            skuId: null,
            price: null,
            amount: null
        },
        skuList: [],
        skuJson: [],
        num: null,
        panel: {
            type: 1,
            isShow: !1,
            aimation: {},
            opacityAnimation: {},
            height: 0,
            phone: "",
            yzm: "",
            yzmTime: 0
        },
        counter: {
            number: 1,
            minusDisabled: !1,
            addDisabled: !1
        },
        canPay: !1,
        cartAmount: 0,
        sharetitle: "",
        buyTips: !1,
        showCardInfo: !1,
        hasVoice: 0,
        playStatus: 0,
        isNeedAddr: 0
    },
    onLoad: function(t) {
        var a = this;
        i.initApp({
            loginSuc: function() {
                var e, n, o, s = "", d = r.getUid();
                if (void 0 !== t.channel && "" != t.channel && a.setData({
                    channel: t.channel
                }), void 0 !== t.scene && "" != t.scene ? (console.log("来自海报"), "C" == (u = decodeURIComponent(t.scene).split(","))[0] ? (s = u[1], 
                e = u[2]) : (n = u[1], e = u[0], o = d + "_" + n, r.setCardid(n))) : "" != t.id && void 0 !== t.id && (console.log("来自跳转或者分享"), 
                e = t.id, n = r.getCardid(), o = t.invite), "" != t.invite && void 0 !== t.invite) {
                    var u = t.invite.split("_");
                    n = u[1], console.log("有invite====", n), r.setCardid(n), o = t.invite, i.setFx(t.invite);
                }
                "" != r.getUInfo().mobile && a.setData({
                    hasMobile: 1
                });
                var c = r.getMarkAuth(), l = r.getStoreInfo(), m = r.getPay(), h = r.getAuth();
                a.setData({
                    mark_auth: c,
                    companyInfo: l,
                    isLogin: !!r.getUid(),
                    isPay: m,
                    isAuth: h,
                    id: e,
                    card_id: n,
                    invite: o || "",
                    winHei: r.getWinHei(),
                    channel: s
                }), a._fetch();
            }
        });
    },
    _jumpToCard: function(t) {
        var a = t.currentTarget.dataset.cardid;
        r.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    _playRecord: function(t) {
        var a = this, e = a.data.playStatus, i = this.data.record.record_url;
        d.obeyMuteSwitch = !1, d.src = i, 1 == e ? (d.pause(), a.setData({
            playStatus: 2
        }), console.log("playStatus====2")) : 2 == e ? (d.play(), a.setData({
            playStatus: 1
        }), console.log("playStatus====1")) : 0 == e && (d.play(), a.setData({
            playStatus: 1
        }), console.log("playStatus====1"));
    },
    _fetch: function() {
        var t = this, a = this, i = a.data.id, n = r.getUid(), o = a.data.card_id || "", d = a.data.invite || "", u = a.data.channel || "";
        e.P({
            url: "/apis/home/card.product/get?id=" + i,
            data: {
                uid: n,
                card_id: o,
                invite: d,
                channel: u
            },
            success: function(e) {
                if (0 == e.code) {
                    var i = e.data.require_address, n = e.data.invite;
                    if (n && "" != n) {
                        r.setCardid(n.id);
                        var o = {
                            cardAvatar: n.avatar,
                            cardName: n.name,
                            weixin: n.weixin || "",
                            mobile: n.mobile || ""
                        };
                        r.setCardInfo(o), t.setData({
                            cardInfo: n,
                            showCardInfo: !0
                        });
                    }
                    var d = r.getCardInfo().cardAvatar, u = e.data.record;
                    u.record_url && "" != u.record_url && a.setData({
                        hasVoice: !0,
                        record: u,
                        cardAvatar: d
                    });
                    var c = e.data, l = c.discount / 10;
                    a.setData({
                        isNeedAddr: i,
                        shareTitle: c.intro || c.name,
                        discount_num: l,
                        distribute_money_out: c.distribute_money_out,
                        distribute_is_open: c.distribute_is_open,
                        distribute_goods_show: c.distribute_goods_show
                    }), c.shop.length <= 0 && a.setData({
                        isStore: 1,
                        storeInfo: r.getStoreInfo()
                    }), c.content && s.wxParse("article", "html", c.content, t, 0);
                    var m, h;
                    c.attr.length > 0 ? (console.log("有规格"), m = c.attr, h = c.attrprice, m[0] && (m[0].data[0].selected = !0), 
                    m[1] && (m[1].data[0].selected = !0), a.setData({
                        dataLoaded: !0,
                        isHasAttr: 1,
                        skuList: m,
                        skuJson: h,
                        num: c.num,
                        goodsInfo: c
                    }), a._setSkuItem()) : a.setData({
                        dataLoaded: !0,
                        num: c.num,
                        goodsInfo: c
                    }), a._getCartAmount(), a.getMsg();
                } else wx.redirectTo({
                    url: "/pages/goodsDetail/nogoods/index"
                });
            }
        });
    },
    getMsg: function() {
        var a = r.getCardInfo().cardAvatar;
        this.setData({
            cardAvatar: a
        });
        var e, i = this, o = "u" + r.getUid();
        n.pushMessage(o, function(a) {
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
    _addCart: function(t) {
        var a = t.detail.userInfo;
        a && void 0 != a && (i.updateUserInfo(a), this._showPanel(2)), this._showPanel(2);
    },
    _confirmAddCart: function(t) {
        var i = this;
        t.detail.formId;
        i._validSubmit() && (i.setData({
            dataLoaded: !1
        }), e.P({
            url: "/apis/home/goods.cart/add",
            data: {
                card_id: r.getCardid(),
                uid: r.getUid(),
                gid: i.data.id,
                gaid: i.data.curSkuItem.skuId || "",
                num: i.data.counter.number
            },
            success: function(t) {
                i._closePanel(), a.showOK("加入购物车成功"), i._getCartAmount();
            }
        }));
    },
    _getCartAmount: function() {
        var t = this;
        this.data.isLogin && e.G({
            url: "/apis/home/goods.cart/index",
            data: {
                card_id: r.getCardid(),
                uid: r.getUid()
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
    _validSubmit: function() {
        var t = this;
        if (1 == t.data.isHasAttr) if (null != t.data.curSkuItem.amount) {
            if (t.data.counter.number > t.data.curSkuItem.amount) return a.alert("库存不足"), !1;
            if (t.data.counter.number <= 0) return a.alert("请输入正确的购买数量哦~"), !1;
        } else {
            if (t.data.counter.number > t.data.num) return a.alert("库存不足"), !1;
            if (t.data.counter.number <= 0) return a.alert("请输入正确的购买数量哦~"), !1;
        }
        return !0;
    },
    _buy: function(t) {
        var a = t.detail.userInfo;
        a && void 0 != a && (i.updateUserInfo(a), this._showPanel(1)), this._showPanel(1);
    },
    _timerDown: function(t) {
        var a = this.data.panel;
        a.yzmTime = --t, this.setData({
            panel: a
        }), 0 != t && setTimeout(function() {
            this._timerDown(t);
        }.bind(this), 1e3);
    },
    _showPanel: function(t) {
        var a = this, e = this.data.panel;
        e.type = t, a.animation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        }), a.opacityAnimation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease-out"
        }), e.isShow = !0, a.setData({
            panel: e
        }), setTimeout(function() {
            a.animation.translateY(0).step(), a.opacityAnimation.opacity(1).step(), e.animation = a.animation.export(), 
            e.opacityAnimation = a.opacityAnimation.export(), a.setData({
                panel: e
            });
        }, 0);
    },
    _closePanel: function(t) {
        var a = this, e = this.data.panel;
        if (a.animation.translateY("100%").step(), a.opacityAnimation.opacity(0).step(), 
        e.animation = a.animation.export(), e.opacityAnimation = a.opacityAnimation.export(), 
        a.setData({
            panel: e,
            dataLoaded: !0
        }), setTimeout(function() {
            e.isShow = !1, a.setData({
                panel: e
            });
        }, 500), t) t.detail.formId;
    },
    _resetCounter: function() {
        var t = +this.data.curSkuItem.amount, a = this.data.counter;
        a.number > t && (a.number = t), a.minusDisabled = a.number <= 0, a.addDisabled = a.number >= t, 
        this.setData({
            counter: a
        });
    },
    _add: function(t) {
        var a = this.data.counter, e = (t.detail.formId, t.currentTarget.dataset.max);
        void 0 != e && ++a.number > e && (a.number = e), a.number == e && 0 == e ? a.addDisabled = !0 : a.number == e && 0 != e ? a.addDisabled = !0 : a.minusDisabled = !1, 
        this.setData({
            counter: a
        });
    },
    _minus: function(t) {
        var a = this.data.counter, e = (t.detail.formId, t.currentTarget.dataset.min);
        void 0 != e && --a.number < e && (a.number = e), a.number < 0 && (a.number = 0), 
        a.number == e ? a.minusDisabled = !0 : a.addDisabled = !1, this.setData({
            counter: a
        });
    },
    _changeNum: function(t) {
        var a = parseInt(t.detail.value) || 1, e = this.data.counter, i = t.currentTarget.dataset.max;
        a > i && (a = i), e.number = a, this.setData({
            counter: e
        });
    },
    _initSizeByWin: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    swiperHei: .53 * a.windowWidth
                });
            }
        });
    },
    _setSkuItem: function() {
        var t, a = this, e = this.data.skuList, i = this.data.skuJson, n = {};
        e.forEach(function(t) {
            t.data.some(function(a) {
                if (a.selected) return n[t.name] = a.name, !0;
            });
        }), i.some(function(e) {
            if (JSON.stringify(e.name) == JSON.stringify(n)) return t = {
                skuId: e.id,
                price: e.price,
                amount: a.data.num
            }, !0;
        }), this.setData({
            curSkuItem: t
        }), console.log(this.data.curSkuItem);
    },
    _swiperChange: function(t) {
        this.setData({
            curSwiperIndex: t.detail.current
        });
    },
    _selectSku: function(t) {
        var a = t.currentTarget.dataset, e = a.groupIndex, i = a.skuIndex, n = this.data.skuList;
        n[e].data.forEach(function(t, a) {
            t.selected = a == i;
        }), this.setData({
            skuList: n
        }), this._setSkuItem(), this._resetCounter();
    },
    _confirmBuy: function(t) {
        var a = r.getUid(), i = this;
        t.detail.formId;
        i._validSubmit() && function() {
            i.setData({
                dataLoaded: !1
            });
            var t = i.options, n = (t.actId, t.actType, t.groupBuyId, {
                card_id: r.getCardid(),
                uid: a,
                gids: i.data.id,
                aids: i.data.curSkuItem.skuId || "",
                nums: i.data.counter.number,
                isseckill: i.data.actType
            });
            e.P({
                url: "/apis/home/order.add/tmp",
                data: n,
                success: function(t) {
                    var a = t.data.id;
                    i.setData({
                        dataLoaded: !0
                    }), i._closePanel(), wx.navigateTo({
                        url: "/pages/order/confirmOrder/index?goodsId=" + i.data.id + "&skuId=" + i.data.curSkuItem.skuId + "&amount=" + i.data.counter.number + "&tmpOrderId=" + a
                    });
                }
            });
        }();
    },
    onShareAppMessage: function(t) {
        var a = this, i = r.getUid(), n = r.getCardid(), o = i + "_" + n, s = "/pages/goodsDetail/detail/index?id=" + a.data.id + "&invite=" + o;
        return console.log(s), e.P({
            url: "/apis/home/card.product/share",
            data: {
                card_id: n,
                id: a.data.id,
                uid: i
            },
            success: function(t) {}
        }), {
            title: a.data.shareTitle,
            path: s,
            success: function(t) {
                a.getMsg();
            },
            fail: function(t) {
                a.getMsg();
            }
        };
    },
    _openPop: function() {
        this.setData({
            buyTips: !0
        });
    },
    _closePop: function() {
        this.setData({
            buyTips: !1
        });
    },
    _rectUrl: function(t) {
        var a = t.currentTarget.dataset.link;
        wx.redirectTo({
            url: a
        });
    },
    onHide: function() {
        clearTimeout(this._actTimer), clearInterval(t), wx.closeSocket(), d.stop(), d.offEnded();
    },
    onUnload: function() {
        clearTimeout(this._actTimer), clearInterval(t), wx.closeSocket(), d.stop(), d.offEnded();
    },
    getUserInfo: function(t) {
        var e = t.detail.userInfo;
        e && void 0 != e && (a.showOK("登录成功"), i.updateUserInfo(e), r.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    _pullMobile: function() {
        e.G({
            url: "/apis/home/card.item/grant_phone",
            data: {
                id: r.getCardid()
            },
            success: function(t) {}
        });
    },
    _getmobile: function(t) {
        var a = t.detail, i = a.errMsg, n = a.iv, o = a.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), e.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: o,
                uid: r.getUid(),
                card_id: r.getCardid()
            },
            success: function(t) {
                r.setMobile(t.data.mobile);
            },
            fail: function(t) {}
        })), this._jumpToChat(t);
    },
    _jumpToChat: function(t) {
        var a = r.getCardid(), e = this.data.id;
        if (t) {
            var n = t.detail.formId;
            i.submitForm(n);
        }
        wx.navigateTo({
            url: "/pages/im/chatroom/chatroom?card_id=" + a + "&id=" + e
        });
    },
    onShow: function() {
        var t = this;
        "im" == t.data.fromPage && t.setData({
            msgNum: 0
        }), d.onPlay(function() {
            console.log("播放中");
        }), d.onEnded(function() {
            console.log("播放结束"), t.setData({
                playStatus: 0
            });
        }), d.onError(function(e) {
            a.showWarn(e.errMsg), t.setData({
                playStatus: 0
            });
        }), d.onCanplay(function() {}), d.onPause(function() {
            console.log("暂停中");
        }), t._getCartAmount();
    },
    _showActionSheet: function() {
        this.onShareAppMessage();
    }
}));
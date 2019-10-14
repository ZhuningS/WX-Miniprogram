var t, a = require("../../../utils/util.js"), e = require("../../../utils/ajax.js"), i = require("../../../utils/common.js"), n = require("../../../utils/socket.js"), s = require("../../../common/PageBase.js"), o = require("../../../utils/wxParse/wxParse.js"), r = getApp(), d = wx.createInnerAudioContext();

Page(i.extendPage(s, {
    data: {
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        isLogin: !1,
        noshow: !0,
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
                var e, n, s, o = "", d = r.getUid();
                if (void 0 !== t.channel && "" != t.channel && a.setData({
                    channel: t.channel
                }), void 0 !== t.scene && "" != t.scene ? (console.log("来自海报"), "C" == (u = decodeURIComponent(t.scene).split(","))[0] ? (o = u[1], 
                e = u[2]) : (n = u[1], e = u[0], s = d + "_" + n, r.setCardid(n))) : "" != t.id && void 0 !== t.id && (console.log("来自跳转或者分享"), 
                e = t.id, n = r.getCardid(), s = t.invite), "" != t.invite && void 0 !== t.invite) {
                    var u = t.invite.split("_");
                    n = u[1], console.log("有invite====", n), r.setCardid(n), s = t.invite, i.setFx(t.invite);
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
                    invite: s || "",
                    winHei: r.getWinHei(),
                    channel: o
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
        var t = this, i = this, n = i.data.id, s = r.getUid(), d = i.data.card_id || "", u = i.data.invite || "", c = i.data.channel || "";
        e.P({
            url: "/apis/home/card.product/get?id=" + n,
            data: {
                uid: s,
                card_id: d,
                invite: u,
                channel: c
            },
            success: function(e) {
                if (0 == e.code) {
                    var n = e.data.require_address, s = e.data.invite;
                    if (s && "" != s) {
                        r.setCardid(s.id);
                        var d = {
                            cardAvatar: s.avatar,
                            cardName: s.name,
                            weixin: s.weixin || "",
                            mobile: s.mobile || ""
                        };
                        r.setCardInfo(d), t.setData({
                            cardInfo: s,
                            showCardInfo: !0
                        });
                    }
                    var u = r.getCardInfo().cardAvatar, c = e.data.record;
                    c.record_url && "" != c.record_url && i.setData({
                        hasVoice: !0,
                        record: c,
                        cardAvatar: u
                    });
                    var l = e.data, m = l.discount / 10;
                    if (i.setData({
                        isNeedAddr: n,
                        shareTitle: l.intro || l.name,
                        discount_num: m,
                        distribute_money_out: l.distribute_money_out,
                        distribute_is_open: l.distribute_is_open,
                        distribute_goods_show: l.distribute_goods_show
                    }), l.shop.length <= 0 && i.setData({
                        isStore: 1,
                        storeInfo: r.getStoreInfo()
                    }), l.content && o.wxParse("article", "html", l.content, t, 0), "1" == l.isseckill) {
                        console.log("秒杀"), i._lastTime = l.lasttime;
                        var h = l.seckillstatus;
                        i._lastTime <= 0 && (h = 3), t.setData({
                            actType: 1,
                            seckillstatus: h,
                            lastTimeStr: a.getTimeBySec(t._lastTime || 0)
                        });
                    }
                    var f, g;
                    l.attr.length > 0 ? (console.log("有规格"), f = l.attr, g = l.attrprice, f[0] && f[0].data[0] && (f[0].data[0].selected = !0), 
                    f[1] && f[1].data[0] && (f[1].data[0].selected = !0), i.setData({
                        dataLoaded: !0,
                        isHasAttr: 1,
                        skuList: f,
                        skuJson: g,
                        num: "1" == l.isseckill ? l.seckill_num : l.num,
                        goodsInfo: l
                    }), i._setSkuItem()) : i.setData({
                        dataLoaded: !0,
                        num: "1" == l.isseckill ? l.seckill_num : l.num,
                        goodsInfo: l
                    }), i._actTimer && clearTimeout(i._actTimer), i._lastTime > 0 && i._actTimerDown(), 
                    i._getCartAmount(), i.getMsg();
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
        var e, i = this, s = "u" + r.getUid();
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
    _addCart: function(t) {
        var a = t.detail.userInfo;
        a && void 0 != a && (i.updateUserInfo(a), this._showPanel(2)), this._showPanel(2);
    },
    _actTimerDown: function() {
        var t = this, e = t._lastTime, i = a.getTimeBySec(e);
        if (t.setData({
            lastTimeStr: i
        }), e <= 0) return clearTimeout(t._actTimer), void t._initPage();
        t._lastTime = t._lastTime - 1e3, t._actTimer = setTimeout(function() {
            t._actTimerDown();
        }, 1e3);
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
        void 0 != e && ++a.number > e && (a.number = e), a.number == e && 0 == e ? a.addDisabled = !0 : a.number == e && 0 != e && (a.addDisabled = !0), 
        a.minusDisabled = !1, this.setData({
            counter: a
        });
    },
    _minus: function(t) {
        var a = this.data.counter, e = (t.detail.formId, t.currentTarget.dataset.min);
        void 0 != e && --a.number < e && (a.number = e), a.number < 0 && (a.number = 0), 
        a.number == e && (a.minusDisabled = !0), a.addDisabled = !1, this.setData({
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
        var a = this, i = r.getUid(), n = r.getCardid(), s = i + "_" + n, o = "/pages/goodsDetail/detailMs/index?id=" + a.data.id + "&invite=" + s;
        return console.log(o), {
            title: a.data.shareTitle,
            path: o,
            success: function(t) {
                a.getMsg();
            },
            fail: function(t) {
                a.getMsg();
            },
            complete: function(t) {
                console.log(t), e.P({
                    url: "/apis/home/card.product/share",
                    data: {
                        card_id: n,
                        id: a.data.id,
                        uid: i
                    },
                    success: function(t) {}
                });
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
        var a = t.detail, i = a.errMsg, n = a.iv, s = a.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), e.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: s,
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
        if ("im" == t.data.fromPage && t.setData({
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
        }), t._getCartAmount(), !this.data.noshow && "1" == this.data.goodsInfo.isseckill) {
            var i = t.data.id, n = r.getUid(), s = t.data.card_id || "", o = t.data.invite || "", u = t.data.channel || "";
            e.P({
                url: "/apis/home/card.product/get?id=" + i,
                data: {
                    uid: n,
                    card_id: s,
                    invite: o,
                    channel: u
                },
                success: function(e) {
                    var i = e.data;
                    t._lastTime = i.lasttime;
                    var n = i.seckillstatus;
                    t._lastTime <= 0 && (n = 3), t.setData({
                        actType: 1,
                        seckillstatus: n,
                        lastTimeStr: a.getTimeBySec(t._lastTime || 0)
                    }), t._actTimer && clearTimeout(t._actTimer), t._lastTime > 0 && t._actTimerDown();
                }
            });
        }
        this.data.noshow = !1;
    },
    _showActionSheet: function() {
        this.onShareAppMessage();
    }
}));
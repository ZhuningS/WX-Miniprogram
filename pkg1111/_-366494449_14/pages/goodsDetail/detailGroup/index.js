var t, a = require("../../../utils/util.js"), e = require("../../../utils/ajax.js"), i = require("../../../utils/socket.js"), s = require("../../../utils/common.js"), n = require("../../../common/PageBase.js"), o = require("../../../utils/wxParse/wxParse.js"), r = getApp(), d = wx.createInnerAudioContext();

Page(s.extendPage(n, {
    data: {
        isDoPullMsg: !1,
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        isLogin: !1,
        id: null,
        isHasAttr: 0,
        actType: 0,
        isgroups: 1,
        dataLoaded: !1,
        winHei: 0,
        swiperHei: 0,
        curSwiperIndex: 0,
        shop: {},
        curSkuItem: {
            skuId: "",
            price: "",
            amount: 0
        },
        skuList: [],
        skuJson: [],
        num: null,
        isMember: 0,
        isHead: 0,
        groupid: null,
        groupsAll: [],
        teamid: "",
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
        shareTitle: "",
        buyTips: !1,
        showCardInfo: !1,
        hasVoice: 0,
        playStatus: 0,
        isNeedAddr: 0
    },
    onLoad: function(t) {
        var a = this;
        s.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var e, i, n, o = "", d = r.getUid();
                if (void 0 !== t.scene && "" != t.scene ? (console.log("来自海报"), "C" == (u = decodeURIComponent(t.scene).split(","))[0] ? (o = u[1], 
                e = u[2]) : (i = u[1], e = u[0], n = d + "_" + i, r.setCardid(i))) : "" != t.id && void 0 !== t.id && (console.log("来自跳转或者分享"), 
                e = t.id, i = r.getCardid(), n = t.invite), "" != t.invite && void 0 !== t.invite) {
                    var u = t.invite.split("_");
                    i = u[1], console.log("有invite====", i), r.setCardid(i), n = t.invite, s.setFx(t.invite);
                }
                "" != r.getUInfo().mobile && a.setData({
                    hasMobile: 1
                });
                var c = r.getStoreInfo(), l = r.getPay(), m = r.getAuth();
                a.setData({
                    companyInfo: c,
                    isLogin: !!r.getUid(),
                    isPay: l,
                    isAuth: m,
                    id: e,
                    card_id: i,
                    invite: n || "",
                    winHei: r.getWinHei(),
                    channel: o
                }), a._fetch();
            }
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
        var t = this, i = this, s = i.data.id, n = r.getUid(), d = i.data.card_id, u = i.data.invite || "", c = i.data.channel || "";
        e.G({
            url: "/apis/home/card.product/get?id=" + s,
            data: {
                uid: n,
                card_id: d,
                invite: u,
                channel: c
            },
            success: function(e) {
                if (0 == e.code) if (0 != e.data.isgroups && 1 != e.data.groups.status) {
                    var s = e.data.require_address, n = e.data.invite;
                    if (n && "" != n) {
                        r.setCardid(n.id);
                        var d = {
                            cardAvatar: n.avatar,
                            cardName: n.name,
                            weixin: n.weixin || "",
                            mobile: n.mobile || ""
                        };
                        r.setCardInfo(d), i.setData({
                            cardInfo: n,
                            showCardInfo: !0
                        });
                    }
                    var u = r.getCardInfo().cardAvatar, c = e.data.record;
                    c.record_url && "" != c.record_url && i.setData({
                        hasVoice: !0,
                        record: c,
                        cardAvatar: u
                    }), e.data.groups.length <= 0 && (i.setData({
                        dataLoaded: !0
                    }), a.showWarn("商品已经下架"), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2500));
                    var l = e.data;
                    i.setData({
                        isNeedAddr: s,
                        shareTitle: l.intro || l.name,
                        distribute_money_out: l.distribute_money_out,
                        distribute_is_open: l.distribute_is_open,
                        distribute_goods_show: l.distribute_goods_show
                    }), l.content && o.wxParse("article", "html", l.content, t, 0), l.shop.length <= 0 && i.setData({
                        isStore: 1,
                        storeInfo: r.getStoreInfo()
                    });
                    var m = [], g = [];
                    void 0 !== l.usergroups && 1 == l.usergroups.ishead && i.setData({
                        isHead: 1,
                        isMember: 1,
                        teamid: l.usergroups.teamid
                    }), void 0 !== l.usergroups && 0 == l.usergroups.ishead && 1 == l.usergroups.isgroups && i.setData({
                        isMember: 1,
                        isHead: 0,
                        teamid: l.usergroups.teamid
                    }), l.attr.length > 0 ? (console.log("有规格"), m = l.attr, g = l.attrprice, m[0] && (m[0].data[0].selected = !0), 
                    m[1] && (m[1].data[0].selected = !0), i.setData({
                        dataLoaded: !0,
                        isHasAttr: 1,
                        skuList: m,
                        skuJson: g,
                        num: l.num,
                        goodsInfo: l
                    }), i._setSkuItem()) : i.setData({
                        dataLoaded: !0,
                        num: l.num,
                        goodsInfo: l
                    }), i.setData({
                        groupid: l.groups.id
                    }), i._getCartAmount(), i._getAllpt(), i.data.isDoPullMsg || i.getMsg();
                } else wx.redirectTo({
                    url: "/pages/goodsDetail/nogoods/index"
                }); else wx.redirectTo({
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
        var e, s = this, n = "u" + r.getUid();
        i.pushMessage(n, function(a) {
            if (t && (console.log("清除定时器", t), clearInterval(t)), e = JSON.parse(a.data), console.log("msgInfo=======", e), 
            "open" != e.type) {
                var i = e.offline;
                i && i > 0 ? s.setData({
                    msgInfo: e,
                    msgStatus: 1,
                    msgNum: i
                }) : s.setData({
                    msgNum: 0
                }), t = setInterval(function() {
                    1 == s.data.msgStatus && (s.setData({
                        msgStatus: 2
                    }), clearInterval(t));
                }, 4e3), console.log("新的定时器====", t);
            }
        });
    },
    _getAllpt: function() {
        var t = this, a = t.data.id, i = t.data.card_id;
        e.G({
            url: "/apis/home/plugins.groups/groupsall",
            data: {
                id: a,
                card_id: i
            },
            success: function(a) {
                var e = a.data;
                t.setData({
                    groupsAll: e
                });
            }
        });
    },
    _tobuy: function(t) {
        this.setData({
            teamid: t.currentTarget.dataset.teamid
        }), this._buy(t);
    },
    _getCartAmount: function() {
        var t = this, a = r.getCardid(), i = r.getUid();
        e.G({
            url: "/apis/home/goods.cart/index",
            data: {
                uid: i,
                card_id: a
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
        var a = t.detail.userInfo, e = t.currentTarget.dataset.buytype;
        a && void 0 != a && (s.updateUserInfo(a), this._showPanel(e)), this._showPanel(e);
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
        var t, a = this, e = this.data.skuList, i = this.data.skuJson, s = {};
        e.forEach(function(t) {
            t.data.some(function(a) {
                if (a.selected) return s[t.name] = a.name, !0;
            });
        }), i.some(function(e) {
            if (JSON.stringify(e.name) == JSON.stringify(s)) return t = {
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
        var a = t.currentTarget.dataset, e = a.groupIndex, i = a.skuIndex, s = this.data.skuList;
        s[e].data.forEach(function(t, a) {
            t.selected = a == i;
        }), this.setData({
            skuList: s
        });
    },
    _confirmBuy: function(t) {
        var a = r.getUid(), i = this;
        t.detail.formId;
        i._validSubmit() && function() {
            i.setData({
                dataLoaded: !1
            });
            var t = i.options, s = (t.actId, t.actType, t.groupBuyId, t.teamid, "");
            if (s = void 0 === i.data.curSkuItem ? "" : i.data.curSkuItem.skuId, "" != i.data.teamid && i.data.teamid) n = {
                uid: a,
                gids: i.data.id,
                aids: s,
                nums: i.data.counter.number,
                isgroups: i.data.panel.type,
                teamid: i.data.teamid
            }; else var n = {
                uid: a,
                gids: i.data.id,
                aids: s,
                nums: i.data.counter.number,
                isgroups: i.data.panel.type
            };
            e.P({
                url: "/apis/home/order.add/tmp",
                data: n,
                success: function(t) {
                    var a = t.data.id;
                    i.setData({
                        dataLoaded: !0
                    }), i._closePanel();
                    var e = "";
                    void 0 !== i.data.curSkuItem && (e = i.data.curSkuItem.skuId), wx.navigateTo({
                        url: "/pages/order/confirmOrder/index?goodsId=" + i.data.id + "&skuId=" + e + "&amount=" + i.data.counter.number + "&tmpOrderId=" + a + "&teamid=" + i.data.teamid
                    });
                }
            });
        }();
    },
    onShareAppMessage: function(t) {
        var a, i = this, s = "", n = r.getUid(), o = r.getCardid(), d = n + "_" + o, u = i.data.shareTitle;
        void 0 !== t.target && (a = t.target.dataset.mode);
        var c = i.data.id, l = i.data.teamid;
        return s = a && 2 == a ? "/pages/goodsDetail/groupDetail/index?id=" + l + "&invite=" + d : "/pages/goodsDetail/detailGroup/index?id=" + c + "&invite=" + d, 
        console.log(s), {
            title: u,
            path: s,
            success: function(t) {
                e.P({
                    url: "/apis/home/card.product/share",
                    data: {
                        card_id: o,
                        id: c,
                        uid: n
                    },
                    success: function(t) {}
                });
            },
            fail: function(t) {}
        };
    },
    _showActionSheet: function() {
        this.onShareAppMessage();
    },
    onHide: function() {
        clearTimeout(this._actTimer), wx.closeSocket(), d.stop(), d.offEnded();
    },
    onUnload: function() {
        clearTimeout(this._actTimer), wx.closeSocket(), d.stop(), d.offEnded();
    },
    getUserInfo: function(t) {
        var e = t.detail.userInfo;
        e && void 0 != e && (a.showOK("登录成功"), s.updateUserInfo(e), r.setAuth(!0), this.setData({
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
        var a = t.detail, i = a.errMsg, s = a.iv, n = a.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), e.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: s,
                code: n,
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
            var i = t.detail.formId;
            s.submitForm(i);
        }
        wx.navigateTo({
            url: "/pages/im/chatroom/chatroom?card_id=" + a + "&id=" + e
        });
    },
    _jumpToCard: function(t) {
        var a = t.currentTarget.dataset.cardid;
        r.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
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
        });
        var e = r.getUid();
        console.log("onShow====", e), void 0 !== e && "" != e && (t.setData({
            isDoPullMsg: !0
        }), setTimeout(function() {
            t.getMsg();
        }, 2e3));
    }
}));
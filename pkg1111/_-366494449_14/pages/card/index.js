var a, t = getApp(), e = require("../../utils/util.js"), o = require("../../utils/common.js"), s = require("../../utils/socket.js"), i = require("../../common/PageBase.js"), n = require("../../utils/ajax.js"), d = wx.createInnerAudioContext();

Page(o.extendPage(i, {
    data: {
        fromPage: "",
        shareLayer: !1,
        dataLoaded: !1,
        hits: "",
        shares: "",
        zanIcon: "/images/card/zan.png",
        hasMobile: 0,
        hasVoice: !1,
        msgInfo: {},
        msgNum: 0,
        msgStatus: 0,
        playStatus: 0,
        cardStatus: !1,
        isDoPullMsg: !1,
        isPopCard: !1,
        isPopDiscount: !0,
        disCountStatus: 0,
        labelList: [],
        video_thumb: "https://img.weixin.sundayer.cn/card/video-ruyi@2x.png",
        swiper: {
            number: 1,
            indicatorDots: !0,
            nextMargin: 0
        }
    },
    onLoad: function(a) {
        var e = this, s = t.getUInfo();
        console.log("userInfo========", s), console.log("onLoad"), console.log(a);
        var i = this, n = "", d = "", r = "", c = t.getCardid();
        if (void 0 !== a.scene && "" != a.scene) {
            var l = decodeURIComponent(a.scene).split(",");
            "C" == l[0] ? d = l[1] : n = l[0];
        } else n = "" != a.id && void 0 !== a.id ? a.id : c;
        void 0 !== a.invite && "" != a.invite && (r = a.invite || "", o.setFx(r)), t.setCardid(n), 
        i.setData({
            invite: r,
            id: n,
            channel: d
        });
        wx.createVideoContext("myvideo", this);
        o.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var a = t.getMsgNum(), o = t.getUInfo(), s = t.getTabbar(), d = t.getAccount(), c = t.getStoreInfo(), l = t.getAuth();
                "" != t.getUInfo().mobile && i.setData({
                    hasMobile: 1
                }), console.log("isAuth========", l), e.setData({
                    companyInfo: c,
                    isAuth: l,
                    userInfo: o,
                    tabbar: s,
                    account: d,
                    msgNum: a
                }), console.log("cardid====", n), e._getCardDetail(n, r);
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.getIndexData(function() {
            wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    _changeCardStatus: function() {
        this.data.cardStatus ? this.setData({
            cardStatus: !1
        }) : this.setData({
            cardStatus: !0
        });
    },
    _getCardDetail: function(a, o) {
        var s = this, i = s.data.channel || "";
        n.G({
            url: "/apis/home/card.item/get",
            data: {
                id: a,
                invite: o,
                channel: i
            },
            success: function(a) {
                if (0 != a.code) return e.showWarn(a.msg), void s.setData({
                    dataLoaded: !0
                });
                var o = a.data, i = o.hits;
                1 == o.hited && s.setData({
                    zanIcon: "/images/card/zan_hover.png"
                });
                var n = o.shares, d = o.record_url;
                d && "" != d && s.setData({
                    hasVoice: !0,
                    recordUrl: d
                }), t.setCardid(o.id);
                var r = {
                    cardAvatar: o.avatar,
                    cardName: o.name,
                    weixin: o.weixin,
                    mobile: o.mobile_open
                }, c = s.data.isAuth;
                o.dialog && o.dialog.show && c && s.setData({
                    isPopCard: !0
                }), t.setCardInfo(r);
                var l = 360 * o.product.length;
                s.setData({
                    cardAvatar: a.data.avatar,
                    cardDetail: o,
                    labelList: o.label,
                    hits: i,
                    shares: n,
                    share_text: o.share_text,
                    share_image: o.share_image,
                    cardid: a.data.id,
                    cardInfo: r,
                    width: l,
                    discount_num: a.data.card_discount,
                    dataLoaded: !0
                }), s.getMsg();
            }
        });
    },
    getMsg: function() {
        var e, o = this, i = "u" + t.getUid();
        s.pushMessage(i, function(t) {
            if (a && (console.log("清除定时器", a), clearInterval(a)), e = JSON.parse(t.data), console.log("msgInfo=======", e), 
            "open" != e.type) {
                var s = e.offline;
                s && s > 0 ? o.setData({
                    msgInfo: e,
                    msgStatus: 1,
                    msgNum: s
                }) : o.setData({
                    msgNum: 0
                }), a = setInterval(function() {
                    1 == o.data.msgStatus && (o.setData({
                        msgStatus: 2
                    }), clearInterval(a));
                }, 4e3), console.log("新的定时器====", a);
            }
        });
    },
    _getmobile: function(a) {
        var e = this, o = a.detail, s = o.errMsg, i = o.iv, d = o.encryptedData;
        /:ok$/.test(s) && (this.setData({
            hasMobile: 1
        }), n.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: i,
                code: d,
                uid: t.getUid(),
                card_id: e.data.cardid
            },
            success: function(a) {
                t.setMobile(a.data.mobile);
            },
            fail: function(a) {}
        })), this._jumpToChat(a);
    },
    _pullMobile: function() {
        n.G({
            url: "/apis/home/card.item/grant_phone",
            data: {
                id: t.getCardid()
            },
            success: function(a) {}
        });
    },
    _jumpToChat: function(a) {
        var e = t.getCardid();
        if (a) {
            var s = a.detail.formId;
            o.submitForm(s);
        }
        wx.navigateTo({
            url: "/pages/im/chatroom/chatroom?card_id=" + e
        });
    },
    getUserInfo: function(a) {
        var s = this, i = a.detail.userInfo;
        if (i && void 0 != i) {
            e.showOK("登录成功"), console.log("userInfo====", i);
            var n = {
                avatar: i.avatarUrl,
                nickname: i.nickName
            };
            s.setData({
                userInfo: n
            }), o.updateUserInfo(i), t.setAuth(!0), s.setData({
                isAuth: !0
            });
            s.data.isPopCard;
            var d = s.data.isAuth, r = s.data.cardDetail.dialog;
            r && r.show && d && s.setData({
                isPopCard: !0
            });
        }
    },
    _getDiscount: function() {
        this.setData({
            disCountStatus: 1
        });
    },
    _copyText: function(a, o) {
        var s = a.currentTarget.dataset, i = s.copyVal, d = s.copySuccess, o = s.type, r = a.detail.formId;
        wx.setClipboardData({
            data: i,
            success: function(a) {
                wx.getClipboardData({
                    success: function(a) {
                        var s;
                        d && e.showOK(d || "复制成功"), 2 == o ? s = "/apis/home/card.item/copy_email" : 1 == o ? s = "/apis/home/card.item/copy_wx" : 3 == o && (s = "/apis/home/card.item/copy_qq"), 
                        n.P({
                            url: s,
                            header: {
                                form_id: r
                            },
                            data: {
                                id: t.getCardid(),
                                uid: t.getUid()
                            },
                            success: function(a) {
                                1 == a.code && e.showOK(a.msg);
                            }
                        });
                    }
                });
            }
        });
    },
    _callPhone: function(a) {
        var o = a.currentTarget.dataset.phone, s = a.detail.formId;
        wx.makePhoneCall({
            phoneNumber: o,
            success: function(a) {
                n.P({
                    url: "/apis/home/card.item/call",
                    header: {
                        form_id: s
                    },
                    data: {
                        id: t.getCardid(),
                        uid: t.getUid()
                    },
                    success: function(a) {
                        1 == a.code && e.showOK(a.msg);
                    }
                });
            }
        });
    },
    _addPhonebook: function(a) {
        var o = this, s = a.detail.formId;
        console.log(o.data.cardDetail.mobile), console.log(o.data.cardDetail.company), console.log(o.data.cardDetail.position), 
        console.log(o.data.cardDetail.name), wx.addPhoneContact({
            mobilePhoneNumber: o.data.cardDetail.mobile,
            organization: o.data.cardDetail.company,
            title: o.data.cardDetail.position,
            firstName: o.data.cardDetail.name,
            success: function(a) {
                e.showOK("保存成功"), n.P({
                    url: "/apis/home/card.item/save",
                    header: {
                        form_id: s
                    },
                    data: {
                        id: t.getCardid(),
                        uid: t.getUid()
                    },
                    success: function(a) {
                        1 == a.code && e.showOK(a.msg);
                    }
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function(a) {}
        });
    },
    _pullVoice: function() {
        console.log("提交语音埋点"), n.G({
            url: "/apis/home/card.item/voice",
            data: {
                id: this.data.cardid
            },
            success: function(a) {}
        });
    },
    _playRecord: function(a) {
        var t = this, e = t.data.playStatus, o = this.data.recordUrl;
        d.obeyMuteSwitch = !1, d.src = o, 1 == e ? (d.pause(), t.setData({
            playStatus: 2
        }), console.log("playStatus====2")) : 2 == e ? (d.play(), t.setData({
            playStatus: 1
        }), console.log("playStatus====1")) : 0 == e && (d.play(), t.setData({
            playStatus: 1
        }), console.log("playStatus====1"));
    },
    _zan: function(a) {
        var o = this, s = a.detail.formId;
        this.data.zanNum;
        n.P({
            url: "/apis/home/card.item/hit",
            header: {
                form_id: s
            },
            data: {
                id: this.data.cardid,
                uid: t.getUid()
            },
            success: function(a) {
                if (0 == a.code) {
                    var t;
                    t = 1 == a.data.hited ? "/images/card/zan_hover.png" : "/images/card/zan.png", o.setData({
                        hits: a.data.hits,
                        zanIcon: t
                    });
                } else e.showOK(a.msg);
            }
        });
    },
    _openShareLayer: function() {
        this.setData({
            shareLayer: !0
        });
    },
    _closeShareLayer: function() {
        this.setData({
            shareLayer: !1
        });
    },
    _clickLabel: function(a) {
        var o = this, s = a.currentTarget.dataset, i = s.label, d = s.index, r = this.data.labelList;
        console.log(i, d), n.P({
            url: "/apis/home/card.item/label_hit",
            data: {
                id: t.getCardid(),
                label: i
            },
            success: function(a) {
                0 == a.code ? 0 != a.data ? (r.forEach(function(t) {
                    t.name == i && (t.hits = a.data);
                }), o.setData({
                    currentLabel: d,
                    currentHits: a.data,
                    labelList: r
                })) : e.showOK("1个标签每天只能点赞1次哦") : e.showOK(a.msg);
            }
        });
    },
    previewImg: function(a) {
        var t = a.currentTarget.dataset, e = t.url, o = t.urls;
        console.log("urls====", o), console.log(e, o), wx.previewImage({
            current: e,
            urls: o,
            complete: function() {}
        });
    },
    onShareAppMessage: function(a) {
        var o, s = this, i = s.data.share_image, d = s.data.share_text, r = "";
        o = "" != d ? d : "您好,我是" + s.data.cardDetail.company + "的" + s.data.cardDetail.name, 
        r = "" != i ? i : s.data.cardDetail.avatar;
        var c = t.getUid() + "_" + t.getCardid(), l = "/pages/card/index?id=" + s.data.cardid + "&invite=" + c;
        return console.log(l), {
            title: o,
            path: l,
            imageUrl: r,
            success: function(a) {
                console.log(s.data.cardid), e.showOK("感谢您分享我的名片"), n.P({
                    url: "/apis/home/card.item/share",
                    data: {
                        id: s.data.cardid
                    },
                    success: function(a) {
                        1 != a.code ? s.setData({
                            shares: a.data.shares
                        }) : e.showOK(a.msg);
                    }
                });
            },
            fail: function(a) {},
            complete: function() {
                s.setData({
                    shareLayer: !1
                });
            }
        };
    },
    _closePopCard: function() {
        this.setData({
            isPopCard: !1
        });
    },
    onHide: function() {
        console.log("onHide======"), d.stop(), d.offEnded(), this.setData({
            shareLayer: !1
        });
    },
    onUnload: function() {
        console.log("onUnload======"), wx.closeSocket(), clearInterval(a), d.stop(), d.offEnded(), 
        this.setData({
            shareLayer: !1
        });
    },
    onShow: function() {
        var a = this, t = this;
        d.onPlay(function() {
            console.log("播放中");
        }), d.onEnded(function() {
            console.log("播放结束"), t.setData({
                playStatus: 0
            }), a._pullVoice();
        }), d.onError(function(a) {
            e.showWarn(a.errMsg), t.setData({
                playStatus: 0
            });
        }), d.onCanplay(function() {}), d.onPause(function() {
            console.log("暂停中");
        }), "im" == t.data.fromPage && t.setData({
            msgNum: 0
        });
    }
}));
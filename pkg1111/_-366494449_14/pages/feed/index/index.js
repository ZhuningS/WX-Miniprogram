var t, a = getApp(), e = require("../../../utils/util.js"), i = require("../../../utils/common.js"), n = require("../../../utils/socket.js"), s = require("../../../common/PageBase.js"), r = require("../../../utils/ajax.js");

Page(i.extendPage(s, {
    data: {
        dataLoaded: !1,
        currentIndex: "",
        loadingShow: !1,
        actList: [],
        showKeyboard: 0,
        currentPage: 1,
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        content: "",
        showCardInfo: !1,
        isDoPullMsg: !1
    },
    onLoad: function(t) {
        wx.hideShareMenu();
        var e = this, n = t.id;
        void 0 !== t.invite && "" != t.invite && (e.setData({
            invite: t.invite
        }), i.setFx(t.invite)), e.setData({
            id: n || ""
        }), i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var t = a.getMsgNum(), n = a.getTabbar(), s = a.getAccount(), r = i.isShowtab("forum");
                "" != a.getUInfo().mobile && e.setData({
                    hasMobile: 1
                });
                var o = a.getAuth(), d = a.getStoreInfo();
                e.setData({
                    companyInfo: d,
                    isAuth: o,
                    msgNum: t,
                    tabbar: n,
                    account: s,
                    isShowTab: r
                }), e._getList(1), e.getMsg();
            }
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        this.setData({
            actList: []
        }), this._getList(1, function() {
            t.setData({
                currentPage: 1
            }), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        this.data.currentPage + 1 <= this.data.endpage && (this.setData({
            loadingShow: !0
        }), this._getList(this.data.currentPage + 1, function() {
            var a = t.data.currentPage;
            t.setData({
                currentPage: a + 1,
                loadingShow: !1
            });
        }));
    },
    _jumpToCard: function(t) {
        var e = t.currentTarget.dataset.cardid;
        a.setCardid(e), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    getUserInfo: function(t) {
        var n = t.detail.userInfo;
        n && void 0 != n && (e.showOK("登录成功"), i.updateUserInfo(n), a.setAuth(!0), this.setData({
            isAuth: !0
        }));
    },
    onShareAppMessage: function(t) {
        var e, i, n, s = t.target.dataset.type, o = this, d = t.target.dataset.id, c = t.target.dataset.name, u = t.target.dataset.img, g = a.getUid(), l = a.getCardid();
        return n = o.data.invite && "" != o.data.invite ? o.data.invite : g + "_" + l, "isAct" == s ? (e = "/pages/act/index/index?id=" + t.target.dataset.spreadid + "&invite=" + n, 
        i = t.target.dataset.title) : (i = c + "的动态", e = "/pages/feed/index/index?id=" + d + "&invite=" + n), 
        console.log(e), {
            title: i,
            path: e,
            imageUrl: u || "",
            success: function(t) {
                r.P({
                    url: "/apis/home/card.forum/share",
                    data: {
                        id: d
                    },
                    success: function(t) {}
                });
            },
            fail: function(t) {}
        };
    },
    _getList: function(t, a) {
        var e = this, i = e.data.id, n = e.data.invite;
        r.G({
            url: "/apis/home/card.forum/fetch",
            data: {
                page: t,
                id: i || "",
                invite: n || ""
            },
            success: function(i) {
                var n = 1 == t ? i.data.item : e.data.actList.concat(i.data.item), s = i.data.invite, r = Math.ceil(i.data.total / i.data.size);
                s && "" != s && e.setData({
                    cardInfo: s,
                    showCardInfo: !0
                }), e.setData({
                    dataLoaded: !0,
                    actList: n,
                    nickname: i.data.userInfo.uName,
                    endpage: r
                }), a && a();
            }
        });
    },
    getMsg: function() {
        var e = a.getCardInfo().cardAvatar;
        this.setData({
            cardAvatar: e
        });
        var i, s = this, r = "u" + a.getUid();
        n.pushMessage(r, function(a) {
            if (t && (console.log("清除定时器", t), clearInterval(t)), i = JSON.parse(a.data), console.log("msgInfo=======", i), 
            "open" != i.type) {
                var e = i.offline;
                e && e > 0 ? s.setData({
                    msgInfo: i,
                    msgStatus: 1,
                    msgNum: e
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
    _pullMobile: function() {
        r.G({
            url: "/apis/home/card.item/grant_phone",
            data: {
                id: a.getCardid()
            },
            success: function(t) {}
        });
    },
    _getmobile: function(t) {
        var e = t.detail, i = e.errMsg, n = e.iv, s = e.encryptedData;
        /:ok$/.test(i) && (this.setData({
            hasMobile: 1
        }), r.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: s,
                uid: a.getUid(),
                card_id: a.getCardid()
            },
            success: function(t) {
                a.setMobile(t.data.mobile);
            },
            fail: function(t) {}
        })), this._jumpToChat(t);
    },
    _jumpToChat: function(t) {
        var e = a.getCardid();
        if (t) {
            var n = t.detail.formId;
            i.submitForm(n);
        }
        wx.navigateTo({
            url: "/pages/im/chatroom/chatroom?card_id=" + e
        });
    },
    showComments: function(t) {
        var a = this.data.currentIndex, e = t.currentTarget.dataset.index;
        a === e && (e = ""), this.setData({
            currentIndex: e
        });
    },
    clickZan: function(t) {
        var e = this, i = t.currentTarget.dataset.id, n = t.currentTarget.dataset.i;
        r.P({
            url: "/apis/home/card.forum/hit",
            data: {
                id: i,
                uid: a.getUid()
            },
            success: function(t) {
                var a = e.data.actList[n].ups;
                1 == t.data.ups ? (a.push({
                    nickname: t.data.nickname
                }), e.data.actList[n].isup = 1) : (a.forEach(function(e, i) {
                    t.data.nickname == e.nickname && a.splice(i, 1);
                }), e.data.actList[n].isup = 0), e.setData({
                    currentIndex: "",
                    actList: e.data.actList
                });
            }
        });
    },
    _showKeyboard: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.i;
        this.setData({
            showKeyboard: 1,
            currentIndex: "",
            postid: a,
            postidx: e
        });
    },
    bindKeyBlur: function() {
        this.setData({
            showKeyboard: 0
        });
    },
    bindKeyInput: function(t) {
        this.setData({
            content: t.detail.value
        });
    },
    _send: function(t) {
        var i = this, n = this.data.content;
        "" != n ? (this.setData({
            showKeyboard: 0
        }), r.P({
            url: "/apis/home/card.forum/reply",
            data: {
                id: this.data.postid,
                uid: a.getUid(),
                nickname: this.data.nickname,
                content: n
            },
            success: function(t) {
                i.data.actList[i.data.postidx].replies.push({
                    nickname: t.data.nickname,
                    content: t.data.content
                }), i.setData({
                    currentIndex: "",
                    actList: i.data.actList
                });
            }
        })) : e.showWarn("说点什么吧");
    },
    _playVideo: function(t) {
        t.currentTarget.dataset.url;
    },
    previewImg: function(t) {
        var a = t.currentTarget.dataset, e = a.url, i = a.urls;
        console.log("urls====", i), console.log(e, i), wx.previewImage({
            current: e,
            urls: i,
            complete: function() {}
        });
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
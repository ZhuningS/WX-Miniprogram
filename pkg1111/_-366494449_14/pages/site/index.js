var t, a = require("../../utils/util.js"), e = require("../../utils/ajax.js"), i = require("../../utils/common.js"), n = require("../../utils/socket.js"), o = require("../../common/PageBase.js"), s = require("../../utils/wxParse/wxParse.js"), r = getApp();

Page(i.extendPage(o, {
    data: {
        dataLoaded: !1,
        msgInfo: {},
        msgNum: 0,
        hasMobile: 0,
        videoStatus: !1,
        isDoPullMsg: !1,
        form_info: "",
        form_info2: !1,
        date: "请选择日期",
        time: "请选择时间",
        region: [ "请选择地址" ]
    },
    onLoad: function(t) {
        var a = this;
        this.mapCtx = wx.createMapContext("myMap");
        var e, n = "";
        if (void 0 !== t.scene && "" != t.scene) {
            var o = decodeURIComponent(t.scene).split(",");
            "C" == o[0] && (n = o[1]);
        }
        "" != t.id && void 0 !== t.id && (e = t.id, r.setCardid(e)), void 0 !== t.invite && "" != t.invite && (this.setData({
            invite: t.invite || ""
        }), i.setFx(t.invite)), i.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var t = a, e = r.getCopyRight(), o = r.getMsgNum(), s = r.getTabbar(), d = r.getAccount(), c = i.isShowtab("website");
                "" != r.getUInfo().mobile && t.setData({
                    hasMobile: 1
                });
                var u = r.getAuth();
                console.log("isAuth====", u), 0 == u && t.setData({
                    videoStatus: !1
                });
                var l = r.getStoreInfo();
                t.setData({
                    companyInfo: l,
                    isAuth: u,
                    channel: n,
                    tabbar: s,
                    msgNum: o,
                    account: d,
                    isShowTab: c,
                    copyright_logo: e
                }), t.getIndexData();
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
        e && void 0 != e && (a.showOK("登录成功"), i.updateUserInfo(e), r.setAuth(!0), this.setData({
            isAuth: !0,
            videoStatus: !0
        }));
    },
    onShareAppMessage: function(t) {
        var a = this.data.companyInfo.name + "的官网", e = r.getUid(), i = r.getCardid(), n = "/pages/site/index?id=" + i + "&invite=" + (e + "_" + i);
        return console.log(n), {
            title: a,
            path: n,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    getIndexData: function(t) {
        var i = this, n = this.data.invite || "", o = this.data.channel || "";
        e.G({
            url: "/apis/home/card.site/index",
            data: {
                invite: n,
                channel: o
            },
            success: function(n) {
                if ("[]" == n.data.page_content) return a.showWarn("当前页面无内容"), void i.setData({
                    dataLoaded: !0
                });
                var o = n.data.page_content.pModules, d = i, c = n.data.invite.id;
                "" != c && void 0 !== c && r.setCardid(c), o.forEach(function(t) {
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
                                t.content.dataset.url = a.data, t.content.dataset.img = a.img, d.setData({
                                    page_content: o
                                });
                            }
                        });
                    }
                    if ("Mmap" == t.name) {
                        var n = [ {
                            iconPath: "/images/card/position.png",
                            id: 0,
                            callout: {
                                content: t.content.dataset.text,
                                fontSize: 12,
                                display: "ALWAYS",
                                padding: 5,
                                borderRadius: 3
                            },
                            latitude: t.content.dataset.address.lat,
                            longitude: t.content.dataset.address.lng,
                            width: 24,
                            height: 24
                        } ];
                        d.setData({
                            markers: n
                        });
                    }
                    if ("MForm" == t.name) {
                        t.content.dataset._fieldList.forEach(function(t) {
                            if ("radio" == t.type || "checkbox" == t.type) {
                                var a = t.tags.split(",");
                                t.tags = a;
                            }
                        });
                    }
                    if ("MUeditor" == t.name) {
                        var r = t.content.dataset.html;
                        s.wxParse("article", "html", r, d, 0);
                    }
                    d.setData({
                        page_content: o
                    }, function() {
                        setTimeout(function() {
                            d.setData({
                                dataLoaded: !0
                            });
                        }, 300);
                    });
                }), d.getMsg(), t && t();
            },
            fail: function() {
                t && t();
            }
        });
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
    _formSubmit: function(t) {
        var n = this, o = t.detail.formId, s = t.detail.value;
        console.log("obj====", s);
        var d = JSON.stringify(s);
        e.P({
            url: "/apis/home/card.form/save",
            data: {
                params: d,
                uid: r.getUid() || "",
                card_id: r.getCardid() || "",
                source: "官网"
            },
            success: function(t) {
                0 == t.code ? (a.showWarn("提交成功"), n.setData({
                    form_info: "",
                    form_info2: !1,
                    date: "请选择日期",
                    time: "请选择时间",
                    region: [ "请选择地址" ]
                })) : a.showWarn(t.msg);
            },
            fail: function(t) {}
        }), i.submitForm(o);
    },
    _jumpToChat: function(t) {
        var a = r.getCardid();
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
    bindRegionChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            region: t.detail.value
        });
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            time: t.detail.value
        });
    },
    _jumpToMiniProgram: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.path;
        wx.navigateToMiniProgram({
            appId: a || "",
            path: e || "",
            success: function(t) {
                console.log("打开成功");
            },
            fail: function(t) {
                console.log(t);
            }
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
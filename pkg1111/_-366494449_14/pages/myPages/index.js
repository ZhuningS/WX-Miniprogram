var t = require("../../utils/util.js"), a = require("../../utils/ajax.js"), e = require("../../utils/common.js"), i = require("../../common/PageBase.js"), n = getApp();

Page(e.extendPage(i, {
    data: {
        showCardInfo: !1,
        form_info: "",
        form_info2: !1,
        date: "请选择日期",
        time: "请选择时间",
        region: [ "请选择地址" ]
    },
    onLoad: function(t) {
        var a = this, i = t.id, o = t.invite, d = t.title || "";
        this.setData({
            page_title: d,
            id: i || "",
            invite: o || ""
        }), e.initApp({
            extSuc: function() {},
            loginSuc: function() {
                var t = n.getAuth();
                console.log("isAuth====", t);
                var e = n.getStoreInfo();
                a.setData({
                    companyInfo: e,
                    isAuth: t
                }), a.getIndexData();
            }
        });
    },
    onPullDownRefresh: function() {},
    getIndexData: function(e) {
        var i = this, n = this.data.invite, o = this.data.id;
        a.G({
            url: "/apis/home/card.site/get",
            data: {
                id: o,
                invite: n
            },
            success: function(n) {
                if ("[]" == n.data.page_content || !n.data.page_content) return t.showWarn("当前页面无内容"), 
                void i.setData({
                    dataLoaded: !0
                });
                var o = n.data.invite;
                o && "" != o && i.setData({
                    cardInfo: o,
                    showCardInfo: !0,
                    card_id: o.id || ""
                });
                var d = n.data.page_content.pModules, s = i;
                d.forEach(function(t) {
                    if (5 == t.content.type) {
                        var e = t.content.dataset.url;
                        if (!e) return;
                        var i = decodeURIComponent(e);
                        a.G({
                            url: "/apis/home/index.index/parseTxVideoUrl",
                            data: {
                                video_url: i
                            },
                            success: function(a) {
                                t.content.dataset.url = a.data, t.content.dataset.img = a.img, s.setData({
                                    page_content: d
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
                        s.setData({
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
                    s.setData({
                        dataLoaded: !0,
                        page_content: d
                    });
                }), wx.setNavigationBarTitle({
                    title: n.data.page_name
                }), e && e();
            },
            fail: function() {
                e && e();
            }
        });
    },
    _formSubmit: function(i) {
        var o, d = this, s = d.data.card_id, r = n.getCardid();
        console.log(r), o = void 0 === r || "" == r ? s : r;
        var c = i.detail.formId, u = i.detail.value;
        console.log("obj====", u);
        var l = JSON.stringify(u);
        a.P({
            url: "/apis/home/card.form/save",
            data: {
                params: l,
                uid: n.getUid() || "",
                card_id: o
            },
            success: function(a) {
                0 == a.code ? (t.showWarn("提交成功"), d.setData({
                    form_info: "",
                    form_info2: !1,
                    date: "请选择日期",
                    time: "请选择时间",
                    region: [ "请选择地址" ]
                })) : t.showWarn(a.msg);
            },
            fail: function(t) {}
        }), e.submitForm(c);
    },
    onShareAppMessage: function(t) {
        var a = this.data.page_title, e = "/pages/myPages/index?id=" + this.data.id + "&invite=" + (n.getUid() + "_" + n.getCardid());
        return console.log(e), {
            title: a,
            path: e,
            success: function(t) {},
            fail: function(t) {}
        };
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
    _jumpToVideo: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.setStorageSync("currentVideo", a), wx.navigateTo({
            url: "/pages/videoPage/index"
        });
    },
    _jumpToCard: function(t) {
        var a = t.currentTarget.dataset.cardid;
        n.setCardid(a), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    getUserInfo: function(a) {
        var i = a.detail.userInfo;
        i && void 0 != i && (t.showOK("登录成功"), e.updateUserInfo(i), n.setAuth(!0), this.setData({
            isAuth: !0
        }));
    }
}));
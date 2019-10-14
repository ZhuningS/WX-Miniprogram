var e = getApp(), i = require("../../utils/util.js"), a = require("../../utils/ajax.js"), t = require("../../utils/common.js"), o = require("../../common/PageBase.js");

Page(t.extendPage(o, {
    data: {
        form_info: "",
        form_info2: !1,
        date: "请选择日期",
        time: "请选择时间",
        region: [ "请选择地址" ],
        dataLoaded: !1
    },
    onLoad: function(e) {
        var i = this;
        t.initApp({
            loginSuc: function() {
                i.getMemberInfo();
            }
        });
    },
    getMemberInfo: function() {
        var i = this, t = e.getUid();
        a.G({
            url: "/apis/home/user.vip/get",
            data: {
                uid: t
            },
            success: function(e) {
                var a = e.data.vip_log;
                if (console.log("isVip", a), a) wx.redirectTo({
                    url: "/pages/memberCenter/memberCenter"
                }); else {
                    var t = e.data;
                    i.setData({
                        vip: t,
                        dataLoaded: !0
                    });
                }
            }
        });
    },
    _getmobile: function(i) {
        var t = i.detail, o = t.errMsg, r = t.iv, n = t.encryptedData;
        /:ok$/.test(o) && (this.setData({
            hasMobile: 1
        }), a.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: r,
                code: n,
                uid: e.getUid(),
                card_id: e.getCardid()
            },
            success: function(i) {
                e.setMobile(i.data.mobile);
            },
            fail: function(e) {}
        })), this._jumpToChat(i);
    },
    _formSubmit: function(o) {
        var r = this, n = o.detail.formId, s = o.detail.value, d = this.data.vip.activate_field, u = [];
        for (var l in s) {
            var c = l, m = s[l];
            d.forEach(function(e, i) {
                var a = e.name;
                if (c == a) {
                    var t = {
                        id: e.id,
                        name: e.name,
                        type: e.type,
                        value: m
                    };
                    u.push(t);
                }
            });
        }
        var f = JSON.stringify(u);
        console.log("params======", u), a.P({
            url: "/apis/home/user.vip/receive",
            data: {
                activate: f,
                uid: e.getUid() || "",
                card_id: e.getCardid() || ""
            },
            success: function(e) {
                0 == e.code ? (r.setData({
                    form_info: "",
                    form_info2: !1,
                    date: "请选择日期",
                    time: "请选择时间",
                    region: [ "请选择地址" ]
                }), i.showWarn("领取成功"), wx.redirectTo({
                    url: "/pages/memberCenter/memberCenter"
                })) : i.showWarn(e.msg);
            },
            fail: function(e) {}
        }), t.submitForm(n);
    },
    bindRegionChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            region: e.detail.value
        });
    },
    bindDateChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            date: e.detail.value
        });
    },
    bindTimeChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            time: e.detail.value
        });
    }
}));
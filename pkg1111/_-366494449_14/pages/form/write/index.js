var a = getApp(), e = require("../../../utils/util.js"), t = require("../../../utils/common.js"), i = require("../../../common/PageBase.js"), o = (require("../../../utils/wxParse/wxParse.js"), 
require("../../../utils/ajax.js"));

Page(t.extendPage(i, {
    data: {
        dataLoaded: !1,
        form_info: "",
        form_info2: !1,
        date: "请选择日期",
        time: "请选择时间",
        region: [ "请选择地址" ]
    },
    onLoad: function(a) {
        var e = this, i = a.id, o = a.source;
        e.setData({
            source: o || "",
            form_id: i
        }), t.initApp({
            loginSuc: function() {
                e._getFormDetail(i);
            }
        });
    },
    _getFormDetail: function(a) {
        var t = this;
        o.G({
            url: "/apis/home/card.form/get_form",
            data: {
                form_id: a
            },
            success: function(a) {
                0 != a.code && (e.showWarn(a.msg), t.setData({
                    dataLoaded: !0
                }));
                var i = a.data;
                i.options.forEach(function(a) {
                    if ("radio" == a.type || "checkbox" == a.type) {
                        var e = a.tags.split(",");
                        a.tags = e;
                    }
                }), t.setData({
                    dataLoaded: !0,
                    formDetail: i
                }), wx.setNavigationBarTitle({
                    title: i.title
                });
            }
        });
    },
    _formSubmit: function(i) {
        var r = this, s = r.data.source, n = i.detail.formId, d = i.detail.value;
        console.log("obj====", d);
        var u = JSON.stringify(d);
        o.P({
            url: "/apis/home/card.form/save",
            data: {
                params: u,
                uid: a.getUid() || "",
                card_id: a.getCardid() || "",
                source: s
            },
            success: function(a) {
                0 == a.code ? (e.showWarn("提交成功"), r.setData({
                    form_info: "",
                    form_info2: !1,
                    date: "请选择日期",
                    time: "请选择时间",
                    region: [ "请选择地址" ]
                })) : e.showWarn(a.msg);
            },
            fail: function(a) {}
        }), t.submitForm(n);
    },
    _bindRegionChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            region: a.detail.value
        });
    },
    _bindDateChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date: a.detail.value
        });
    },
    _bindTimeChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            time: a.detail.value
        });
    }
}));
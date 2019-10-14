getApp();

var e = require("../../../../utils/requestUtil"), a = require("../../../../utils/data");

Page({
    data: {
        data_list: [],
        crash_type: 0,
        index: 0
    },
    onLoad: function(e) {
        this.getDataList();
    },
    onPullDownRefresh: function() {
        this.getDataList(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    formSubmit: function(t) {
        var o = this;
        console.log("form发生了submit事件，携带数据为：", t.detail.value);
        var n = t.detail.value.money;
        if (void 0 != n && null != n && "" != n) if (parseFloat(n) < 1) wx.showModal({
            content: "提现金额必须大于等于1！",
            showCancel: !1
        }); else if (parseFloat(n) > parseFloat(o.data.data_list.usergold)) wx.showModal({
            content: "账户余额不足！",
            showCancel: !1
        }); else {
            var l = t.detail.value.telephone;
            if (void 0 != l && null != l && "" != l) if (-1 != l.search(/^([0-9]{11})?$/)) {
                if (1 == t.detail.value.cash_type) {
                    if (void 0 == t.detail.value.bank_no || null == t.detail.value.bank_no || "" == t.detail.value.bank_no) return void wx.showModal({
                        content: "请输入银行卡号！",
                        showCancel: !1
                    });
                    if (-1 == t.detail.value.bank_no.search(/^\d{16}|\d{19}$/)) return void wx.showModal({
                        content: "请输入正确的银行卡号！",
                        showCancel: !1
                    });
                    if (void 0 == t.detail.value.true_name || null == t.detail.value.true_name || "" == t.detail.value.true_name) return void wx.showModal({
                        content: "请输入开户行姓名！",
                        showCancel: !1
                    });
                }
                e.post(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/postcashapply", {
                    money: t.detail.value.money,
                    telephone: t.detail.value.telephone,
                    bank_no: t.detail.value.bank_no,
                    true_name: t.detail.value.true_name,
                    bank_code: o.data.data_list.bank_code[o.data.index].code,
                    bank_name: o.data.data_list.bank_code[o.data.index].name,
                    crash_type: t.detail.value.cash_type
                }, function(e) {
                    console.log(e), wx.redirectTo({
                        url: "../wrecord/wrecord"
                    });
                });
            } else wx.showModal({
                content: "请输入正确的手机号！",
                showCancel: !1
            }); else wx.showModal({
                content: "请输入手机号！",
                showCancel: !1
            });
        } else wx.showModal({
            content: "请输入提现金额！",
            showCancel: !1
        });
    },
    radioChange: function(e) {
        this.setData({
            crash_type: e.detail.value
        });
    },
    bindPickerChange: function(e) {
        console.log(e), this.setData({
            index: e.detail.value
        });
    },
    getDataList: function() {
        var t = this;
        e.get(a.duoguan_host_api_url + "/index.php?s=/addon/DuoguanShop/FenxiaoApi/getcashapply", {}, function(e) {
            console.log(e), t.setData({
                data_list: e
            });
        }, this, {
            isShowLoading: !0
        });
    }
});
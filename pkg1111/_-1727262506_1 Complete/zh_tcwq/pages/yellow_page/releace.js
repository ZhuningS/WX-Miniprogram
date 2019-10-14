var a = getApp();

Page({
    data: {
        items: [ {
            name: "USA",
            value: "一天  费用 0.2 元"
        }, {
            name: "CHN",
            value: "一月  费用 20 元",
            checked: "true"
        }, {
            name: "BRA",
            value: "一年  费用 200 元"
        } ],
        region: [ "广东省", "广州市", "海珠区" ],
        index: 0,
        index1: 0,
        multiIndex: [ 0, 0 ]
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), this.setData({
            radio: a.detail.value
        });
    },
    bindRegionChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            region: a.detail.value
        });
    },
    bindMultiPickerColumnChange: function(e) {
        var t = this, n = e.detail.value, o = (e.detail.column, t.data.nav);
        if (0 == e.detail.column) {
            var l = o[0][n], i = t.data.store, c = [];
            c[0] = e.detail.value, c[1] = 0;
            for (var s in i) if (i[s].type_name == l) {
                i[s].id;
                a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype2&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        type_id: i[s].id
                    },
                    success: function(a) {
                        var e = [];
                        a.data.map(function(a) {
                            var t = {};
                            t = a.name, e.push(t);
                        }), o[1] = e, t.setData({
                            nav: o,
                            multiIndex: c
                        });
                    }
                });
            }
        } else t.setData({
            multiIndex: [ t.data.multiIndex[0], e.detail.value ]
        });
    },
    onLoad: function(a) {
        this.refresh();
    },
    refresh: function(e) {
        var t = this;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype&acid=" + getApp().globalData.version,
            cachetime: "0",
            success: function(e) {
                console.log(e);
                var n = e.data, o = [];
                n.map(function(a) {
                    var e = {};
                    e = a.type_name, o.push(e);
                }), console.log(o), a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagestoretype2&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    data: {
                        type_id: n[0].id
                    },
                    success: function(a) {
                        console.log(a), n[0].classification = a.data;
                        var e = [];
                        n[0].classification.map(function(a) {
                            var t = {};
                            t = a.name, e.push(t);
                        }), console.log(e);
                        var o = [];
                        n.map(function(a) {
                            var e = {};
                            e = a.type_name, o.push(e);
                        });
                        var l = [];
                        l[0] = o, l[1] = e, console.log(l), t.setData({
                            nav: l,
                            store: n
                        });
                    }
                });
            }
        });
    },
    name: function(a) {
        console.log(a), this.setData({
            name: a.detail.value
        });
    },
    address: function(a) {
        console.log(a), this.setData({
            address: a.detail.value
        });
    },
    tel: function(a) {
        console.log(a), this.setData({
            tel: a.detail.value
        });
    },
    text: function(a) {
        console.log(a), this.setData({
            text: a.detail.value
        });
    },
    apply: function(a) {
        var e = this;
        console.log(e.data);
        e.data.region;
        var t = e.data.name, n = e.data.address, o = e.data.tel, l = e.data.text, i = "";
        null == t ? i = "请输入公司名称" : null == n ? i = "请输入公司地址" : null == o ? i = "请输入联系电话" : null == l && (i = "请输入关键字"), 
        "" != i && wx.showModal({
            title: "提示",
            content: i,
            showCancel: !0,
            cancelText: "取消",
            cancelColor: "",
            confirmText: "确定",
            confirmColor: "",
            success: function(a) {},
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
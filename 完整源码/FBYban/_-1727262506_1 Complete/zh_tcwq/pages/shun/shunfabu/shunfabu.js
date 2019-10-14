var a = getApp();

Page({
    data: {
        shunfabu: [ "人找车", "车找人", "车找货", "货找车" ],
        index: 0,
        arr_index: 0,
        array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        icon_hidden: !0,
        duty: !0,
        money: "0",
        time: "00:00"
    },
    onLoad: function(t) {
        console.log(t);
        var e = wx.getStorageSync("System");
        console.log(e);
        var n = this, o = function() {
            var a = new Date(), t = a.getMonth() + 1, e = a.getDate();
            return t >= 1 && t <= 9 && (t = "0" + t), e >= 0 && e <= 9 && (e = "0" + e), a.getFullYear() + "-" + t + "-" + e + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        }().slice(0, 11), c = "";
        0 == t.id ? c = "人找车" : 1 == t.id ? c = "车找人" : 2 == t.id ? c = "车找货" : 3 == t.id && (c = "货找车"), 
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopagecartag&acid=" + getApp().globalData.version,
            cachetime: "0",
            data: {
                typename: c
            },
            success: function(a) {
                console.log(a);
                for (var t in a.data) a.data[t].click_class = "select1";
                n.setData({
                    label: a.data
                });
            }
        }), n.setData({
            date: o,
            id: t.id,
            type_name: c,
            money: e.pc_money,
            pc_xuz: e.pc_xuz
        });
    },
    changeColor: function(a) {
        var t = this;
        console.log(a);
        var e = a.currentTarget.id, n = t.data.label;
        for (var o in n) ;
        "select1" == n[e].click_class ? n[e].click_class = "select2" : "select2" == n[e].click_class && (n[e].click_class = "select1"), 
        t.setData({
            label: n
        });
    },
    text: function(a) {
        console.log(a);
        var t = a.detail.value;
        this.setData({
            text: t
        });
    },
    add: function(a) {
        var t = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a);
                a.latitude, a.longitude, a.speed, a.accuracy;
                t.setData({
                    address: a.address,
                    start_lat: a.latitude,
                    start_lng: a.longitude
                });
            }
        });
    },
    add1: function(a) {
        var t = this;
        wx.chooseLocation({
            type: "wgs84",
            success: function(a) {
                console.log(a);
                a.latitude, a.longitude, a.speed, a.accuracy, a.latitude, a.longitude;
                t.setData({
                    address1: a.address,
                    end_lat: a.latitude,
                    end_lng: a.longitude
                });
            }
        });
    },
    bindPickerChange: function(a) {
        this.setData({
            arr_index: a.detail.value
        });
    },
    bindDateChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            date: a.detail.value
        });
    },
    bindTimeChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value), this.setData({
            time: a.detail.value
        });
    },
    icon_show: function(a) {
        0 == this.data.icon_hidden ? this.setData({
            icon_hidden: !0
        }) : this.setData({
            icon_hidden: !1
        });
    },
    cancel: function(a) {
        0 == this.data.duty ? this.setData({
            duty: !0
        }) : this.setData({
            duty: !1
        });
    },
    phoneInput: function(a) {
        console.log(a);
    },
    formSubmit: function(t) {
        console.log(t);
        var e = this, n = (wx.getStorageSync("city_type"), wx.getStorageSync("city"));
        console.log(n);
        var o = wx.getStorageSync("users").id, c = e.data.id, l = e.data.type_name, i = t.detail.value.address1, s = t.detail.value.address2, d = t.detail.value.path;
        null == d && (d = " ", console.log(d));
        var u = e.data.date + e.data.time, r = e.data.array[e.data.arr_index], g = t.detail.value.weight, p = t.detail.value.contacts, f = t.detail.value.contacts_tel, h = t.detail.value.other_demand, m = Number(e.data.money), l = e.data.type_name, _ = e.data.start_lat, v = e.data.start_lng, y = e.data.end_lat, w = e.data.end_lng;
        console.log(_), console.log(v), console.log(y), console.log(e.data.label);
        var b = e.data.label;
        console.log(b);
        var D = [];
        for (var x in b) "select2" == b[x].click_class && D.push(b[x]);
        console.log(D);
        var S = [];
        D.map(function(a) {
            var t = {};
            t.tag_id = a.id, S.push(t);
        }), console.log(S);
        var k = i + s + p + d + h;
        a.util.request({
            url: getApp().globalData.baseUrl + "c=apitc&a=dopageseccheck&acid=" + getApp().globalData.version,
            data: {
                content: k,
                mode: "wx"
            },
            method: "POST",
            success: function(t) {
                if (console.log(t.data), 0 !== t.data) return wx.showModal({
                    title: "提示",
                    content: "你的信息有违禁内容，请重新编辑"
                }), !1;
                var e = "";
                if ("" == i ? e = "还没有选择出发地址哦" : "" == s ? e = "还没有选择目的地哦" : 3 == c ? "" == g && (e = "还没有填写货物重量") : "" == p ? e = "还没有填写联系人" : "" == f && (e = "还没有填写联系人的电话"), 
                "" != e) wx.showModal({
                    title: "温馨提示",
                    content: e,
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "",
                    confirmText: "确定",
                    confirmColor: "",
                    success: function(a) {},
                    fail: function(a) {},
                    complete: function(a) {}
                }); else if (m <= 0) a.util.request({
                    url: getApp().globalData.baseUrl + "c=apitc&a=dopagecar&acid=" + getApp().globalData.version,
                    cachetime: "0",
                    method: "POST",
                    data: {
                        user_id: o,
                        start_place: i,
                        end_place: s,
                        start_time: u,
                        num: r,
                        link_name: p,
                        link_tel: f,
                        typename: l,
                        other: h,
                        tj_place: d,
                        sz: S,
                        hw_wet: g,
                        star_lat: _,
                        star_lng: v,
                        end_lat: y,
                        end_lng: w,
                        cityname: n
                    },
                    success: function(a) {
                        console.log(a), wx.showToast({
                            title: "发布成功",
                            icon: "",
                            image: "",
                            duration: 2e3,
                            mask: !0,
                            success: function(a) {},
                            fail: function(a) {},
                            complete: function(a) {}
                        }), setTimeout(function() {
                            wx.navigateBack({
                                url: "../shun",
                                success: function(a) {},
                                fail: function(a) {},
                                complete: function(a) {}
                            });
                        }, 2e3);
                    }
                }); else {
                    var b = wx.getStorageSync("openid");
                    a.util.request({
                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagepay&acid=" + getApp().globalData.version,
                        cachetime: "0",
                        data: {
                            openid: b,
                            money: m
                        },
                        success: function(t) {
                            console.log(t), wx.requestPayment({
                                timeStamp: t.data.timeStamp,
                                nonceStr: t.data.nonceStr,
                                package: t.data.package,
                                signType: t.data.signType,
                                paySign: t.data.paySign,
                                success: function(t) {
                                    console.log(t), a.util.request({
                                        url: getApp().globalData.baseUrl + "c=apitc&a=dopagecar&acid=" + getApp().globalData.version,
                                        cachetime: "0",
                                        method: "POST",
                                        data: {
                                            user_id: o,
                                            start_place: i,
                                            end_place: s,
                                            start_time: u,
                                            num: r,
                                            link_name: p,
                                            link_tel: f,
                                            typename: l,
                                            other: h,
                                            tj_place: d,
                                            sz: S,
                                            hw_wet: g,
                                            star_lat: _,
                                            star_lng: v,
                                            end_lat: y,
                                            end_lng: w,
                                            cityname: n
                                        },
                                        success: function(t) {
                                            console.log(t), a.util.request({
                                                url: getApp().globalData.baseUrl + "c=apitc&a=dopagesavecarpaylog&acid=" + getApp().globalData.version,
                                                cachetime: "0",
                                                data: {
                                                    car_id: t.data,
                                                    money: m
                                                },
                                                success: function(a) {
                                                    console.log(a);
                                                }
                                            }), wx.showToast({
                                                title: "发布成功",
                                                icon: "",
                                                image: "",
                                                duration: 2e3,
                                                mask: !0,
                                                success: function(a) {},
                                                fail: function(a) {},
                                                complete: function(a) {}
                                            }), setTimeout(function() {
                                                wx.navigateBack({
                                                    url: "../shun",
                                                    success: function(a) {},
                                                    fail: function(a) {},
                                                    complete: function(a) {}
                                                });
                                            }, 2e3);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
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
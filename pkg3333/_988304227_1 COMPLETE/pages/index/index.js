var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../config/index.js")), t = getApp(), a = e.default.domain;

Page({
    data: {
        time: "15:00",
        teeState: 1,
        id: "",
        top: 2 * t.globalData.statusBarHeight + 88,
        img: "../../assets/images/maple_one@3x.png",
        isTee: !0,
        isShow: "none",
        timer: "",
        opacity: 0,
        countTime: "",
        teeType: 1,
        swiperImg: [ {
            url: "../../assets/images/font_one@3x.png",
            hidden: !1
        }, {
            url: "../../assets/images/font1@2x.png",
            hidden: !0
        }, {
            url: "../../assets/images/font3@2x.png",
            hidden: !0
        }, {
            url: "../../assets/images/font2@2x.png",
            hidden: !0
        }, {
            url: "../../assets/images/font4@2x.png",
            hidden: !0
        }, {
            url: "../../assets/images/font5@2x.png",
            hidden: !0
        } ]
    },
    swiperLook: function() {
        var e = this, t = 0, a = this.data.swiperImg;
        setInterval(function() {
            a[t].hidden = !0, t = ++t == a.length ? 0 : t, a[t].hidden = !1, e.setData({
                swiperImg: a
            });
        }, 3e4);
    },
    slider: function(e) {
        var t = this, a = this.data.time, s = this.data.img;
        switch (e.detail.value) {
          case 0:
            a = "00:00", s = "../../assets/images/maple_one@3x.png", t.setData({
                teeState: 1
            });
            break;

          case 12:
            a = "15:00", s = "../../assets/images/maple_one@3x.png", t.setData({
                teeState: 1
            });
            break;

          case 24:
            a = "30:00", s = "../../assets/images/maple_one@3x.png", t.setData({
                teeState: 1
            });
            break;

          case 36:
            a = "45:00", s = "../../assets/images/maple_two@3x.png", t.setData({
                teeState: 2
            });
            break;

          case 48:
            a = "60:00", s = "../../assets/images/maple_two@3x.png", t.setData({
                teeState: 2
            });
            break;

          case 60:
            a = "75:00", s = "../../assets/images/maple_three@3x.png", t.setData({
                teeState: 3
            });
            break;

          case 72:
            a = "90:00", s = "../../assets/images/maple_three@3x.png", t.setData({
                teeState: 3
            });
            break;

          case 84:
            a = "105:00", s = "../../assets/images/maple_four@3x.png", t.setData({
                teeState: 4
            });
            break;

          case 96:
          case 100:
            a = "120:00", s = "../../assets/images/maple_four@3x.png", t.setData({
                teeState: 4
            });
        }
        this.setData({
            time: a,
            img: s
        });
    },
    sendId: function(e) {
        console.log(e);
        var s = this, n = {
            howLong: this.data.time.split(":")[0],
            createOpenId: t.globalData.openId
        };
        wx.setStorageSync("teeState", this.data.teeState), "00:00" == this.data.time ? wx.showToast({
            title: "请选择正确专注时间",
            icon: "none",
            duration: 1e3
        }) : wx.request({
            url: a + "/focustree/makeNewTree",
            data: n,
            method: "POST",
            success: function(n) {
                var o = {
                    formId: e.detail.formId,
                    focusLong: s.data.time.split(":")[0],
                    openId: t.globalData.openId,
                    treeId: n.data.id
                };
                wx.request({
                    url: a + "/focustree/saveForm",
                    data: o,
                    method: "POST",
                    success: function(e) {
                        console.log("success");
                    }
                }), wx.setStorageSync("teeType", 2), wx.setStorageSync("id", n.data.id);
                var i = new Date().getTime() + 60 * parseInt(s.data.time.split(":")[0]) * 1e3;
                wx.setStorageSync("countTime", i), wx.setStorageSync("startTime", new Date().getTime()), 
                s.setData({
                    isTee: !1,
                    id: n.data.id,
                    img: "../../assets/images/maple_one@3x.png"
                }), s.countDown(wx.getStorageSync("countTime")), s.swiperLook();
            }
        });
    },
    startfollow: function(e) {
        console.log(e);
    },
    cancel: function() {
        this.setData({
            isShow: "block",
            opacity: 1
        });
    },
    hiddenMask: function() {
        this.setData({
            isShow: "none",
            opacity: 0
        });
    },
    cancelTee: function() {
        var e = {
            id: wx.getStorageSync("id")
        };
        wx.request({
            url: a + "/focustree/killTree",
            data: e,
            method: "POST",
            success: function(e) {
                wx.reLaunch({
                    url: "../fail/fail"
                }), wx.setStorageSync("teeType", 1);
            }
        });
    },
    countDown: function(e) {
        var s = this, n = setInterval(function() {
            var o = new Date().getTime(), i = parseInt((e - o) / 1e3), r = wx.getStorageSync("teeState"), g = wx.getStorageSync("startTime");
            if (2 == r ? parseInt(o - g) / 1e3 >= 1800 && s.setData({
                img: "../../assets/images/maple_two@3x.png"
            }) : 3 == r ? parseInt(o - g) / 1e3 >= 1800 ? s.setData({
                img: "../../assets/images/maple_two@3x.png"
            }) : parseInt(o - g) / 1e3 >= 3600 && s.setData({
                img: "../../assets/images/maple_three@3x.png"
            }) : 4 == r && (parseInt(o - g) / 1e3 >= 1800 ? s.setData({
                img: "../../assets/images/maple_two@3x.png"
            }) : parseInt(o - g) / 1e3 >= 3600 ? s.setData({
                img: "../../assets/images/maple_three@3x.png"
            }) : parseInt(o - g) / 1e3 >= 5400 && s.setData({
                img: "../../assets/images/maple_four@3x.png"
            })), i <= 0) {
                clearInterval(n), wx.setStorageSync("teeType", 1);
                var c = new Date().getFullYear(), m = new Date().getMonth() + 1, u = new Date().getDate();
                m < 10 && (m = "0" + m), u < 10 && (u = "0" + u);
                var p = c + "-" + m + "-" + u, l = {
                    id: wx.getStorageSync("id"),
                    createOpenId: t.globalData.openId,
                    focusTime: p
                };
                console.log(l), wx.request({
                    url: a + "/focustree/focusSuccess",
                    data: l,
                    method: "POST",
                    success: function(e) {
                        wx.reLaunch({
                            url: "../success/success?teeState=" + wx.getStorageSync("teeState")
                        });
                    }
                });
            }
            var d = parseInt(i / 60), S = parseInt(i % 60);
            d < 10 && (d = "0" + d), S < 10 && (S = "0" + S), s.setData({
                time: d + ":" + S,
                timer: n
            });
        }, 1e3);
    },
    goPage: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.href;
        wx.reLaunch({
            url: t
        });
    },
    onLoad: function(e) {
        2 == wx.getStorageSync("teeType") ? this.setData({
            isTee: !1
        }) : this.setData({
            isTee: !0,
            time: "15:00",
            teeState: 1
        }), t.getOpenId();
    },
    onReady: function() {},
    onShow: function() {
        2 == wx.getStorageSync("teeType") && (this.countDown(wx.getStorageSync("countTime")), 
        this.swiperLook());
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
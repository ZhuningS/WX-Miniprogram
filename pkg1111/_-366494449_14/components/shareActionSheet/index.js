var a = require("../../utils/common.js"), t = require("../../utils/util.js"), s = (require("../../utils/ajax.js"), 
require("../base.js")), i = getApp(), e = function(a) {
    a.page, a.scope, a.cmpt;
    s.apply(this, arguments), this.init();
};

a.extend(e, s), Object.assign(e.prototype, {
    init: function() {
        this.curCmpt;
        this.setData({
            asShow: !1,
            asAniData: null,
            asMaskAniData: null,
            gening: !1
        }, !0);
    },
    show: function(a) {
        var t = this;
        this.asAni || (this.asAni = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        })), this.asMaskAni || (this.asMaskAni = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        })), this.asAni.translateY(0).step(), this.asMaskAni.opacity(1).step(), this.showParams = a || {}, 
        this.setData({
            asShow: !0
        }, !0), setTimeout(function() {
            t.setData({
                asAniData: t.asAni.export(),
                asMaskAniData: t.asMaskAni.export()
            }, !0);
        }, 100);
    },
    hide: function() {
        var a = this;
        this.asAni.translateY("100%").step(), this.asMaskAni.opacity(0).step(), this.setData({
            asAniData: this.asAni.export(),
            asMaskAniData: this.asMaskAni.export()
        }, !0), setTimeout(function() {
            a.setData({
                asShow: !1
            }, !0);
        }, 300);
    },
    genShareImg: function() {
        var a = this, s = this.showParams, e = "userSid=" + i.getUserSid() + "&alias=" + i.getAlias() + "&sid=" + i.globalData.sid;
        Object.keys(s).forEach(function(a) {
            var t = s[a];
            e += "&" + a + "=" + t;
        });
        var n = i.getHost() + "/openapi/CImage/getsharePic?" + e;
        this.setData({
            gening: !0
        }, !0), wx.downloadFile({
            url: n,
            success: function(s) {
                if (200 === s.statusCode) {
                    var i = s.tempFilePath;
                    a.setData({
                        gening: !1
                    }, !0), wx.navigateTo({
                        url: "/pages/shareImg/index?url=" + i
                    });
                } else a.setData({
                    gening: !1
                }, !0), t.showWarn("分享图片生成失败");
            },
            fail: function() {
                a.setData({
                    gening: !1
                }, !0), t.showWarn("分享图片生成失败");
            }
        });
    }
}), module.exports = e;
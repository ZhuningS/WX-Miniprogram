var t = require("../../common-js/classLoop"), o = getApp();

Component({
    behaviors: [],
    properties: {
        button: {
            type: Object,
            value: {
                buttonColor: 1,
                buttonStyle: 2,
                buttonWords: "大按钮",
                jumpType: 6,
                jumpUrl: "/page/index",
                buttonWidth: 270,
                buttonRaduis: 0
            },
            observer: function(t, o) {
                this.updata();
            }
        },
        classlist: {
            type: Array,
            value: [],
            observer: function(t, o) {
                console.log("分类列表触发更新-----------", t, o);
            }
        }
    },
    data: {
        buttonStyle: "background:#ff7800",
        colorMap: {
            0: "#222222",
            1: "#ed2308",
            2: "#ff7800",
            3: "#09bb07",
            4: "#638ee9"
        },
        appId: "",
        path: ""
    },
    methods: {
        clickButton: function(a) {
            console.log(this.data.button);
            var n = this.data.button.jumpType, u = this.data.button.jumpUrl, i = (this.data.button, 
            "");
            if (2 == n && (i = "/subPackage/discover/pages/" + (3 == o.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + (this.data.button.productId || u)), 
            3 == n) {
                var e = (0, t.classLoop)(u, this.data.classlist);
                wx.navigateTo({
                    url: "/subPackage/index/pages/category-list/category-list?tagType=&iconName=" + e + "&categoryId=" + u
                });
            }
            4 == n && (i = "/" + u), 2 == n && this.data.button.productId || 4 == n ? wx.navigateTo({
                url: i,
                success: function() {},
                fail: function() {}
            }) : 7 == n && wx.makePhoneCall({
                phoneNumber: u
            });
        },
        updata: function() {
            if (1 == this.data.button.buttonStyle ? this.setData({
                buttonStyle: "background: " + (this.data.colorMap[this.data.button.buttonColor] || this.data.button.buttonColor) + ";width:" + 2 * this.data.button.buttonWidth + "rpx;border-radius:" + 2 * this.data.button.buttonCircle + "rpx"
            }) : 2 == this.data.button.buttonStyle && this.setData({
                buttonStyle: "background: #ffffff;border: 2rpx solid " + (this.data.colorMap[this.data.button.buttonColor] || this.data.button.buttonColor) + ";color: " + (this.data.colorMap[this.data.button.buttonColor] || this.data.button.buttonColor) + ";width:" + 2 * this.data.button.buttonWidth + "rpx;border-radius:" + 2 * this.data.button.buttonCircle + "rpx"
            }), 5 == this.data.button.jumpType) {
                var t = "", o = "";
                if (this.data.button.jumpUrl.indexOf("&&appInfo=")) {
                    var a = (u = this.data.button.jumpUrl.split("&&appInfo="))[0], n = (u[1], a.split("appPath="));
                    t = n[0], o = "undefined" != n[1] ? n[1] : "";
                } else {
                    var u = this.data.button.jumpUrl.split("appPath=");
                    t = u[0], o = u[1];
                }
                console.log("跳转id", t), console.log("跳转路径", o), this.setData({
                    openId: t,
                    path: o
                });
            }
        }
    },
    created: function() {},
    attached: function() {
        this.updata();
    },
    ready: function() {},
    moved: function() {},
    detached: function() {}
});
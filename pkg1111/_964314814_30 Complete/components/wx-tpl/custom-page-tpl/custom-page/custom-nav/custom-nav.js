var t = require("../../common-js/classLoop"), a = getApp();

Component({
    behaviors: [],
    properties: {
        navList: {
            type: Array,
            value: [],
            observer: function(t, a) {
                this.updata();
            }
        },
        classlist: {
            type: Array,
            value: [],
            observer: function(t, a) {
                console.log("分类列表触发更新-----------", t, a);
            }
        }
    },
    data: {
        iconMap: {
            2: "equal",
            1: "width",
            3: "height"
        },
        numClass: {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five"
        }
    },
    methods: {
        clickButton: function(e) {
            var i = e.currentTarget.dataset.jumptype, s = e.currentTarget.dataset.jumpurl, n = e.currentTarget.dataset.productid, o = (e.currentTarget.dataset.item, 
            "");
            if (2 == i && (o = "/subPackage/discover/pages/" + (3 == a.globalData.xcxType ? "goods_detail_new" : "goods_detail") + "/goods_detail?id=" + (n || s)), 
            3 == i) {
                var r = (0, t.classLoop)(s, this.data.classlist);
                wx.navigateTo({
                    url: "/subPackage/index/pages/category-list/category-list?tagType=&iconName=" + r + "&categoryId=" + s
                });
            }
            4 == i && (o = "/" + s), (2 == i && n || 4 == i) && wx.navigateTo({
                url: o,
                success: function() {
                    console.log(1111);
                },
                fail: function() {
                    console.log(2222);
                }
            });
        },
        updata: function() {
            for (var t = 0, a = this.data.navList.length; t < a; t++) if (5 == this.data.navList[t].jumpType) {
                var e = "", i = "";
                if (this.data.navList[t].jumpUrl.indexOf("&&appInfo=")) {
                    var s = (o = this.data.navList[t].jumpUrl.split("&&appInfo="))[0], n = (o[1], s.split("appPath="));
                    e = n[0], i = "undefined" != n[1] ? n[1] : "";
                } else {
                    var o = this.data.navList[t].jumpUrl.split("appPath=");
                    e = o[0], i = o[1];
                }
                this.data.navList[t].appid = e, this.data.navList[t].path = i;
            }
            this.setData({
                navList: this.data.navList
            });
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});
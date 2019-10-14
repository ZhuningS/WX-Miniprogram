App({
    onLaunch: function() {},
    onShow: function() {},
    onHide: function() {
        console.log(getCurrentPages());
    },
    onError: function(e) {
        console.log(e);
    },
    ormatDate: function(e) {
        function o(e, o) {
            for (var n = "" + e, t = n.length, r = "", a = o; a-- > t; ) r += "0";
            return r + n;
        }
        var n = new Date(1e3 * e);
        return n.getFullYear() + "-" + o(n.getMonth() + 1, 2) + "-" + o(n.getDate(), 2) + " " + o(n.getHours(), 2) + ":" + o(n.getMinutes(), 2) + ":" + o(n.getSeconds(), 2);
    },
    ab: function(e) {},
    util: require("we7/resource/js/util.js"),
    siteInfo: require("siteinfo.js"),
    tabBar: {
        color: "#123",
        selectedColor: "#1ba9ba",
        borderStyle: "#1ba9ba",
        backgroundColor: "#fff",
        list: [ {
            pagePath: "/we7/pages/index/index",
            iconPath: "/we7/resource/icon/home.png",
            selectedIconPath: "/we7/resource/icon/homeselect.png",
            text: "首页"
        }, {
            pagePath: "/we7/pages/user/index/index",
            iconPath: "/we7/resource/icon/user.png",
            selectedIconPath: "/we7/resource/icon/userselect.png",
            text: "我的"
        } ]
    },
    globalData: {
        userInfo: null,
        baseUrl: "https://api.cnmmsc.org?",
        version: 29322,
        token: "4b42d9a36150b8dd73453f3a2f568062"
    }
});
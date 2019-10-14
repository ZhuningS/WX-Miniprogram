Page({
    data: {
        menus: [ {
            name: "my_address",
            text: "收货地址",
            link: "pages/user/address/index",
            icon: "icon-shouhuodizhi"
        }, {
            name: "wechat_setting",
            text: "授权设置",
            link: "wechat_setting",
            icon: "icon-xitongshezhi"
        }, {
            name: "wechat_clear",
            text: "清除缓存",
            link: "wechat_clear",
            icon: "icon-duoguan-qingchuhuancun"
        } ]
    },
    onLoad: function(e) {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onNavigateTap: function(e) {
        var n = e.currentTarget.dataset, t = n.url, a = n.name;
        "wechat_address" == a ? wx.chooseAddress({}) : "wechat_setting" == a ? wx.openSetting({}) : "wechat_clear" == a ? (wx.showToast({
            title: "正在清理中...",
            icon: "loading",
            duration: 10
        }), wx.clearStorageSync(), wx.showToast({
            title: "清理完成",
            icon: "success",
            duration: 1500
        })) : wx.navigateTo({
            url: t
        });
    }
});
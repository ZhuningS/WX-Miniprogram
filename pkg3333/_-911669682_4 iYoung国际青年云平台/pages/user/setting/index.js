var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/dg.js"));

Page({
    data: {
        isAli: e.default.os.isAlipay(),
        other_menus: [ {
            name: "wechat_setting",
            text: "授权设置",
            link: "wechat_setting",
            icon: "icon-xitongshezhi"
        } ],
        menus: [ {
            name: "my_address",
            text: "收货地址",
            link: "pages/user/address/index",
            icon: "icon-shouhuodizhi"
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
    onNavigateTap: function(t) {
        var n = t.currentTarget.dataset, o = n.url;
        "wechat_clear" == n.name ? (e.default.showToast({
            title: "正在清理中...",
            icon: "loading",
            duration: 10
        }), e.default.clearStorageSync(), e.default.showToast({
            title: "清理完成",
            icon: "success",
            duration: 1500
        })) : e.default.navigateTo({
            url: o
        });
    },
    openSetting: function(e) {
        console.log("手动调起授权");
    },
    openSettingCompatibleWith: function(t) {
        e.default.os.isAlipay() || e.default.canIUse("button.open-type.openSetting") || wx.openSetting({
            success: function(e) {
                console.log("授权成功!");
            }
        });
    }
});
var a = require("../libs/mmuxwxappdevkit/core/network.js"), e = require("./sys.js");

a.setup({
    host: "https://wxa.weixin.qq.com/",
    cgiSet: {
        brandmall: "brandmall/index",
        itemdetail: "brandmall/detail",
        address: "brandmall/address",
        market: "brandmall/marketing",
        login: "brandmall/login",
        reportdata: "brandmall/reportdata",
        pay: "brandmall/pay-order",
        addgoods: "brandmall/add-goods",
        reservegoods: "brandmall/reserve-goods",
        unreservegoods: "brandmall/cancel-reserve-goods",
        updategoods: "brandmall/update-goods",
        group: "brandmall/group",
        groupitems: "brandmall/group_items",
        allitems: "brandmall/all_items",
        reportclientlog: "brandmall/report-savelog",
        reportOss: "brandmall/report-oss",
        search: "brandmall/search",
        card: "brandmall/card",
        main: "brandmall/homepage",
        news: "brandmall/homepage_news",
        wxa: "brandmall/homepage_wxa",
        getwxacode: "brandmall/get-wxa-code",
        mainProduct: "brandmall/main-product",
        getFavor: "brandmall/get_favor",
        doFavor: "brandmall/do_favor",
        getgoods: "brandmall/shoppingcart/get-goods",
        getorderlist: "brandmall/shoppingcart/get-order-list",
        addfeedback: "brandmall/shoppingcart/add-feedback",
        deletegoods: "brandmall/shoppingcart/delete-goods",
        deleteorder: "brandmall/shoppingcart/delete-order",
        payorder: "brandmall/shoppingcart/pay-order",
        getorderdetail: "brandmall/shoppingcart/get-order-detail",
        getexpressdetail: "brandmall/shoppingcart/get-express-detail",
        getprepayinfo: "brandmall/shoppingcart/get-prepay-info",
        syncUserMsg: "brandmall/kf_user/msg/sync-user",
        sendUserMsg: "brandmall/kf_user/msg/send-user",
        getUserId: "brandmall/kf_user/userid/get-app"
    },
    cgiMock: {},
    appid: e.appid(),
    baseParams: function() {
        return {
            session_id: e._sessionId,
            scene: e._scene,
            is_experience: e.isExperience(),
            wxapp_version: e.userVersion()
        };
    }
}), module.exports = a;
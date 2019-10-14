var o = require("../../utils/data"), t = o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanInfo/";

module.exports = {
    base: o.duoguan_host_api_url,
    baseAddon: t,
    share: o.duoguan_get_share_data_url,
    version: "1.8.171121",
    config: {
        load: t + "DuoguanInfoApi/loadConfig.html"
    },
    category: {
        lists: t + "DuoguanInfoApi/categoryList.html"
    },
    document: {
        lists: t + "DuoguanInfoApi/documentList.html",
        myLists: t + "DuoguanInfoApi/myDocuments.html",
        add: t + "DuoguanInfoApi/documentWrite.html",
        userDocs: t + "DuoguanInfoApi/getUserDocs.html",
        detail: t + "DuoguanInfoApi/documentInfo.html",
        del: t + "DuoguanInfoApi/documentDel.html",
        pullWallet: t + "DuoguanInfoApi/documentPullWallet.html",
        wechatPay: t + "DuoguanInfoApi/documentWechatPay.html",
        imprestPay: t + "DuoguanInfoApi/documentImprestPay.html",
        payAmount: t + "DuoguanInfoApi/documentAmount.html",
        good: t + "DuoguanInfoApi/documentGood.html",
        checked: t + "DuoguanInfoApi/documentChecked.html",
        jubao: t + "DuoguanInfoApi/documentJubao.html",
        toggleTop: t + "DuoguanInfoApi/documentToggleTop.html",
        pullblack: t + "DuoguanInfoApi/pullBlack.html",
        upload: t + "DuoguanInfoApi/upload.html"
    },
    comment: {
        lists: t + "CommentApi/lists.html",
        add: t + "CommentApi/create.html",
        del: t + "CommentApi/delete.html",
        myLists: t + "CommentApi/myLists.html",
        replaysMe: t + "CommentApi/replysMe.html"
    },
    util: {
        getDistance: t + "DuoguanInfoApi/getDistance.html",
        shareStatistics: t + "DuoguanInfoApi/shareStatistics.html"
    }
};
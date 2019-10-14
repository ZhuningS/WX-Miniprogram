var e = getApp(), t = (require("../../utils/util.js"), require("../../utils/common.js")), i = require("../../common/PageBase.js");

require("../../utils/ajax.js");

Page(t.extendPage(i, {
    data: {
        dataLoaded: !1,
        width: "",
        height: ""
    },
    onLoad: function() {
        var t = e.getWinHei(), i = e.getWinWid(), a = wx.getStorageSync("currentVideo");
        this.setData({
            height: t,
            width: i,
            url: a
        }), console.log(t, i);
        var o = wx.createVideoContext("myvideo", this);
        console.log(o);
    }
}));
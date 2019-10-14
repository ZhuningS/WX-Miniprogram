var e = getApp(), t = (require("../../utils/util.js"), require("../../utils/common.js")), i = require("../../common/PageBase.js");

require("../../utils/ajax.js");

Page(t.extendPage(i, {
    data: {
        dataLoaded: !1,
        width: "",
        height: ""
    },
    onLoad: function(t) {
        var i = e.getWinHei(), a = e.getWinWid(), o = t.url;
        this.setData({
            height: i,
            width: a,
            url: o
        }), console.log(i, a);
        var r = wx.createVideoContext("myvideo", this);
        console.log(r);
    }
}));
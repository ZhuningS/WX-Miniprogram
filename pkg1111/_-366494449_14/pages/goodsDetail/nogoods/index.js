require("../../../utils/util.js"), require("../../../utils/ajax.js");

var e = require("../../../utils/common.js"), i = require("../../../common/PageBase.js");

getApp(), wx.createInnerAudioContext();

Page(e.extendPage(i, {
    data: {},
    onLoad: function(i) {
        e.initApp({
            loginSuc: function() {}
        });
    }
}));
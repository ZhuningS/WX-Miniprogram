getApp();

var e = require("../../utils/appRouters.js");

Page({
    data: {
        cityCode: 0
    },
    onLoad: function() {
        this.getSpace();
    },
    goSearch: function(e) {
        wx.navigateTo({
            url: "/pages/select/select"
        });
    },
    getSpace: function() {
        var t = this;
        e.spaceList({
            data: {
                adminCode: 0,
                spaceKey: 83
            },
            method: "GET",
            success: function(e) {
                t.setData({
                    space: e.data.data.moduleList
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "猪八戒网 - 找专业人 做专业事",
            desc: "找优质设计、开发、推广服务",
            path: "/pages/index/index"
        };
    }
});
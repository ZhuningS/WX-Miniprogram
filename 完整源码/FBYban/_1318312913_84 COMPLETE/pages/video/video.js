var e = require("../../utils/util.js");

Page({
    media: null,
    onLoad: function(o) {
        console.log("video player -> ", o), this.media = {
            source: e.decodeParam(o.source),
            cover: e.decodeParam(o.cover),
            articleId: o.articleId
        }, console.log("video player -> ", this.media.source), this.setData({
            media: this.media
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});
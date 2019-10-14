require("../../core/sys.js").isPlugin || Page({
    data: {
        jumpUrl: "",
        title: ""
    },
    onLoad: function(e) {
        e && e.url && this.setData({
            jumpUrl: decodeURIComponent(e.url),
            title: decodeURIComponent(e.title)
        });
    }
});
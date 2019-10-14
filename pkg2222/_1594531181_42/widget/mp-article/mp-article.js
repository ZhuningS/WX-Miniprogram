Component({
    properties: {
        title: String,
        thumbUrl: String,
        timestamp: {
            type: Number,
            value: "",
            observer: function(e, t) {
                this.setData({
                    date: new Date(1e3 * e).format("yyyy年MM月dd日")
                });
            }
        },
        seperator: Boolean,
        url: String,
        index: {
            type: Number,
            value: 0
        }
    },
    data: {
        date: ""
    },
    methods: {
        onClickArticle: function(e) {
            var t = e.currentTarget.dataset, i = t.url, a = t.title;
            wx.navigateTo({
                url: "../../libs/mmuxwxappdevkit/widget/webview-page/webview-page?url=" + encodeURIComponent(i) + "&title=" + encodeURIComponent(a)
            }), this.triggerEvent("click", {
                index: this.data.index,
                title: this.data.title
            });
        }
    }
});
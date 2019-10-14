var e = require("../../../../../libs/mp-enhancers/index"), a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../../libs/classnames"));

Component((0, e.componentOptionsEnhancer)({
    properties: {
        cardSize: {
            type: String
        },
        backgroundColor: {
            type: String
        },
        isHideTitle: {
            type: Boolean
        },
        isPremium: {
            type: Boolean
        },
        hasPaid: {
            type: Boolean
        },
        hasHeader: {
            type: Boolean
        },
        mediaData: {
            type: Object
        }
    },
    computed: {
        rootClassNames: function() {
            var e = this.data, t = e.mediaData, i = e.hasHeader;
            return (0, a.default)("image-wrap", {
                "without-header": !i
            }, {
                "without-image": !t.coverUrl
            }, {
                "is-long": t.isUnlimitedLong
            });
        },
        imageMode: function() {
            return this.data.mediaData.isUnlimitedLong, "widthFix";
        },
        imageRatio: function() {
            var e = this.data.mediaData.image || {};
            return e.width / e.height;
        },
        wrapPaddingTop: function() {
            var e = this.data.imageRatio;
            return Math.min(177.77, 100 / e) + "%";
        }
    },
    methods: {
        previewImage: function() {
            if ("post" !== this.data.mediaData.type && !this.data.mediaData.postType) return this.triggerEvent("tap", {}, {
                bubbles: !0,
                composed: !0
            });
            var e = this.data.mediaData.coverUrl;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        }
    }
}));
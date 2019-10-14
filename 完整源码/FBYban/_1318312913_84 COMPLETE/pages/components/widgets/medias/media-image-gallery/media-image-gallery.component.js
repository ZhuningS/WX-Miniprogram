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
        mediaData: {
            type: Object
        }
    },
    computed: {
        imageLength: function() {
            var e = this.data.mediaData;
            return Math.min(99, e.images.length);
        },
        rootClassNames: function() {
            var e = this.data, t = e.imageLength, r = e.cardSize, i = void 0;
            switch (t) {
              case 2:
                i = "duet";
                break;

              case 3:
                i = "triplet";
                break;

              case 4:
                i = "quartet";
                break;

              default:
                i = "chorus";
            }
            return (0, a.default)("media-image-gallery", [ "size-" + r ], [ "type-" + i ], "com-class");
        }
    },
    methods: {
        previewImage: function(e) {
            var a = e.currentTarget.dataset.url;
            console.log("url", a);
            var t = this.data.mediaData.images.map(function(e) {
                return e.url;
            });
            wx.previewImage({
                current: a,
                urls: t
            });
        }
    }
}));
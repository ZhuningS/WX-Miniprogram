Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.merchantPicturesM = void 0;

var e = require("../../../../../components/model/link_us/linkUsM.js"), t = (getApp(), 
Behavior({
    behaviors: [],
    properties: {
        refresh: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                e && this.getImgListData();
            }
        },
        reShow: {
            type: String,
            value: !1,
            observer: function(e, t) {
                var s = this;
                e && s.getImgListData();
            }
        }
    },
    data: {
        scrollLeft: 0,
        imgList: []
    },
    methods: {
        getImgListData: function(t) {
            var s = this;
            (0, e.getNewShopInfo)(function(e, t) {
                s.setData({
                    imgList: t.images ? t.images : []
                });
            });
        }
    }
}));

exports.merchantPicturesM = t;
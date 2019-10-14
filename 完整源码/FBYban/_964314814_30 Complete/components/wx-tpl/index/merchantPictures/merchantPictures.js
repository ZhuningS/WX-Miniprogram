require("../../../template/show_dialog/show_dialog");

var e = require("./common-js/merchant-pictures-m");

getApp();

Component({
    behaviors: [ e.merchantPicturesM ],
    properties: {},
    data: {
        imgList: []
    },
    methods: {
        showImg: function(e) {
            var t = e.target.dataset.src;
            wx.previewImage({
                current: t,
                urls: this.data.imgList
            });
        }
    }
});
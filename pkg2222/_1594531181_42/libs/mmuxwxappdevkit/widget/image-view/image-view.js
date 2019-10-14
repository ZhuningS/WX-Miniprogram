var e = require("../../core/sys.js"), i = require("../../foundation/oss/idkey.js"), a = (require("../../core/api.js"), 
require("../../utils/enum.js").IDKeyDefine), t = require("../../foundation/loader/image-loader.js"), r = require("../../core/console.js")("image-view"), s = require("../../utils/util.js");

Component({
    properties: {
        imgStyle: {
            type: String,
            value: ""
        },
        src: {
            type: String,
            value: "",
            observer: function(e, i) {
                this.fixImageSrc(e), this.reloadImageView();
            }
        },
        mode: {
            type: String,
            value: "scaleToFill"
        },
        lazyLoad: {
            type: Boolean,
            value: !1
        },
        imgClass: {
            type: String,
            value: ""
        },
        hidden: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    attached: function() {
        this.key = new Date().getTime(), this.reloadImageView();
    },
    detached: function() {
        t.cancelLoadImageForUrl(this.lastImageSrc, this.key);
    },
    methods: {
        reloadImageView: function() {
            var e = this;
            t.safeUrl(e.properties.src) ? e.lastImageSrc != this.properties.src ? (e.imageStartLoadTime = new Date().getTime(), 
            t.cancelLoadImageForUrl(e.lastImageSrc, e.key), e.lastImageSrc = e.properties.src, 
            t.loadImageForUrl({
                url: e.properties.src,
                key: e.key,
                success: function(i) {
                    var a = i.savedFilePath || i.tempFilePath;
                    0 == a.length && (r.error("imgFilePath empty"), a = e.properties.src), e.setData({
                        localFile: a
                    });
                },
                fail: function() {
                    e.setData({
                        localFile: e.properties.src
                    });
                }
            })) : r.log("reload same image in same image view") : e.setData({
                localFile: e.properties.src
            });
        },
        onImageLoadError: function(t) {
            var s = new Date().getTime();
            r.error("load image error:", t, " delta time:", s - this.imageStartLoadTime), this.imageStartLoadTime = 0, 
            i.report(e.alarmId, a.LoadImageGeneralError), t.detail.src = this.properties.src, 
            t.detail.localFile = this.data.localFile, this.triggerEvent("error", t.detail, {
                bubbles: !0,
                composed: !0
            });
        },
        onImageLoadFinish: function(e) {
            var i = new Date().getTime();
            r.info("load image finish, delta time: ", i - this.imageStartLoadTime), this.imageStartLoadTime = 0, 
            e.detail.src = this.properties.src, e.detail.localFile = this.data.localFile, this.triggerEvent("load", e.detail, {
                bubbles: !0,
                composed: !0
            });
        },
        fixImageSrc: function(e) {
            if (!s.isLocalResource(e) && (0 == e.indexOf("http://shp.qpic.cn") || 0 == e.indexOf("https://shp.qpic.cn"))) {
                var i = e.split("/");
                if (i.length < 2) return;
                var a = i[i.length - 1];
                "0" != i[i.length - 2] || isNaN(a) ? a.length > 0 && isNaN(a) && i.push("162") : i.splice(i.length - 2, 1), 
                this.properties.src = i.join("/");
            }
        }
    }
});
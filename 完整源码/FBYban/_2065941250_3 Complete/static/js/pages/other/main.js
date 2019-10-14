(function() {
    global.webpackJsonp([ 5 ], {
        125: function() {},
        140: function(a, b) {
            "use strict";
            var c = function() {
                var a = this, b = a.$createElement, c = a._self._c || b;
                return c("div", [ c("div", {
                    staticClass: "title"
                }, [ a._v("图片") ]), a._v(" "), c("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.imageApi
                    }
                }, [ a._v("选择相册图片上传并读取信息") ]), a._v(" "), a._l(a.imgs, function(b, d) {
                    return c("img", {
                        key: b,
                        staticClass: "image",
                        attrs: {
                            src: b,
                            mode: "aspectFit",
                            eventid: "1-" + d
                        },
                        on: {
                            click: function() {
                                a.getImageinfo(b);
                            }
                        }
                    });
                }), a._v(" "), a.imgs.length ? c("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: a.previewImg
                    }
                }, [ a._v("预览图片") ]) : a._e(), a._v(" "), c("div", {
                    staticClass: "title"
                }, [ a._v("录音") ]), a._v(" "), c("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: a.startRecord
                    }
                }, [ a._v(" 开始录音") ]) ], 2);
            };
            c._withStripped = !0;
            b.a = {
                render: c,
                staticRenderFns: []
            }, !1;
        },
        56: function(a, b, c) {
            "use strict";
            var d = c(77), e = c(140), f = c(1), g = f(d.a, e.a, function() {
                !1 || c(125);
            }, null, null);
            g.options.__file = "src/pages/other/Other.vue", g.esModule && Object.keys(g.esModule).some(function(a) {
                return "default" !== a && "__" !== a.substr(0, 2);
            }) && console.error("named exports are not supported in *.vue files."), g.options.functional && console.error("[vue-loader] Other.vue: functional components are not supported with templates, they should use render functions."), 
            !1, b.a = g.exports;
        },
        64: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(0), e = c.n(d), f = c(56), g = new e.a(f.a);
            g.$mount(), b["default"] = {
                config: {
                    navigationBarTitleText: "其他"
                }
            };
        },
        77: function(a, b, c) {
            "use strict";
            var d = c(7);
            b.a = {
                data: function() {
                    return {
                        record: wx.getRecorderManager(),
                        imgs: []
                    };
                },
                mounted: function() {
                    this.bindRecord();
                },
                methods: {
                    imageApi: function() {
                        var a = this;
                        wx.chooseImage({
                            count: 4,
                            success: function(b) {
                                var c = b.tempFilePaths, d = b.tempFiles;
                                a.imgs = c;
                            }
                        });
                    },
                    getImageinfo: function(a) {
                        console.log(a), wx.getImageInfo({
                            src: a,
                            success: function(a) {
                                var b = a.width, e = a.height;
                                c.i(d.a)("图片信息", "高度" + e + ",宽度" + b);
                            }
                        });
                    },
                    previewImg: function() {
                        wx.previewImage({
                            urls: this.imgs
                        });
                    },
                    bindRecord: function() {
                        this.record.onStart(function() {
                            wx.showToast({
                                icon: "loading",
                                duration: 0
                            });
                        }), this.record.onStop(function(a) {
                            wx.hideToast(), console.log("recorder stop", a);
                            a.tempFilePath;
                        }), this.record.onFrameRecorded(function(a) {
                            var b = a.frameBuffer;
                            console.log("frameBuffer.byteLength", b.byteLength);
                        });
                    },
                    startRecord: function() {
                        this.record.start({
                            duration: 1e4
                        });
                    },
                    stopRecord: function() {
                        this.record.stop();
                    }
                }
            };
        }
    }, [ 64 ]);
})();
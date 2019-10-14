var e = require("../../core/api.js"), a = require("../../core/file-manager.js"), s = require("../oss/idkey.js"), o = require("../../utils/enum.js").IDKeyDefine, r = require("../../core/sys.js"), t = require("../../utils/util.js");

module.exports = {
    setup: function(e) {
        if (e && e.host) {
            switch (Object.prototype.toString.call(e.host)) {
              case "[object Array]":
                this.safeHost = e.host;
                break;

              case "[object String]":
                this.safeHost = [ e.host ];
                break;

              default:
                console.error("unsupported options.host");
            }
            this.taskMap = {};
        } else console.error("invalid setup params");
    },
    loadImageForUrl: function(a) {
        var s = this;
        if (0 == a.url.length) return console.log("load empty url"), void (a.fail && a.fail());
        if (t.isLocalResource(a.url)) return console.log("load local url"), void (a.fail && a.fail());
        var o = s.safeUrl(a.url);
        if (!o || 0 == o.length) return console.error("url is not safe: ", a.url), void (a.fail && a.fail());
        void 0 === s.taskMap[o] && (s.taskMap[o] = []), s.taskMap[o].push(a), 1 == s.taskMap[o].length && s.getCachedImageForUrl({
            url: o,
            success: function(e) {
                (s.taskMap[o] || []).forEach(function(a) {
                    a.success && a.success(e);
                }), s.taskMap[o] = [];
            },
            fail: function(r) {
                s.downloadImageForUrl({
                    url: o,
                    success: function(r) {
                        if (a.getImgaeInfo) {
                            var t = r.savedFilePath || r.tempFilePath;
                            e.getImageInfo({
                                src: t,
                                success: function(e) {
                                    (s.taskMap[o] || []).forEach(function(a) {
                                        a.success && a.success({
                                            savedFilePath: r.savedFilePath,
                                            tempFilePath: r.tempFilePath,
                                            width: e.width,
                                            height: e.height
                                        });
                                    }), s.taskMap[o] = [];
                                },
                                fail: function() {
                                    (s.taskMap[o] || []).forEach(function(e) {
                                        e.success && e.success(r);
                                    }), s.taskMap[o] = [];
                                }
                            });
                        } else (s.taskMap[o] || []).forEach(function(e) {
                            e.success && e.success(r);
                        }), s.taskMap[o] = [];
                    },
                    fail: function(e) {
                        (s.taskMap[o] || []).forEach(function(a) {
                            a.fail && a.fail(e);
                        }), s.taskMap[o] = [];
                    }
                });
            }
        });
    },
    cancelLoadImageForUrl: function(e, a) {
        if (e && 0 != e.length) if (t.isLocalResource(e)) console.log("cancel local url"); else {
            var s = this, o = s.safeUrl(e);
            if (o && 0 != o.length) {
                var r = [];
                (s.taskMap[o] || []).forEach(function(e) {
                    e.key != a && r.push(e);
                }), s.taskMap[o] = r;
            } else console.error("url is not safe: ", e);
        } else console.log("cancel empty url");
    },
    safeUrl: function(e) {
        for (var a = e.replace("http://", "https://"), s = 0; s < this.safeHost.length; s++) if (0 === a.indexOf(this.safeHost[s])) return a;
        return "";
    },
    getCachedImageForUrl: function(a) {
        e.getStorage({
            key: a.url,
            success: function(t) {
                e.getImageInfo({
                    src: t.data,
                    success: function(e) {
                        a.success && a.success({
                            savedFilePath: t.data,
                            width: e.width,
                            height: e.height
                        });
                    },
                    fail: function() {
                        console.error("cachedImageForUrl: " + a.url + "localFilePath exist, but local file not exist or not a image!"), 
                        s.report(r.alarmId, o.LocalImagePathExitsButFileEmpty), a.fail && a.fail();
                    }
                });
            },
            fail: a.fail
        });
    },
    removeCachedImageForFile: function(a) {
        e.getStorage({
            key: a.filePath,
            success: function(s) {
                e.removeStorage({
                    key: a.filePath
                }), e.removeStorage({
                    key: s.data
                });
            }
        });
    },
    downloadImageForUrl: function(t) {
        var l = this;
        e.downloadFile({
            url: t.url,
            success: function(i) {
                200 == i.statusCode ? a.saveFile({
                    tempFilePath: i.tempFilePath,
                    handleExpireFile: function(e) {
                        l.removeCachedImageForFile(e);
                    },
                    success: function(a) {
                        console.info("downloadImageForUrl success, saveFile: " + a.savedFilePath), e.setStorage({
                            key: t.url,
                            data: a.savedFilePath
                        }), e.setStorage({
                            key: a.savedFilePath,
                            data: t.url
                        }), t.success && t.success({
                            savedFilePath: a.savedFilePath,
                            tempFilePath: i.tempFilePath
                        });
                    },
                    fail: function(e) {
                        console.error("downloadImageForUrl error, saveTempFileError"), t.success && t.success({
                            tempFilePath: i.tempFilePath
                        });
                    }
                }) : (console.error("downloadImageForUrl error, http error: ", i.statusCode), s.report(r.alarmId, o.LoadImageDownloadError), 
                t.fail && t.fail({
                    errcode: -1,
                    errmsg: "downloadImageForUrl error, http error: " + i.statusCode
                }));
            },
            fail: function(e) {
                console.error("downloadImageForUrl error, request error: ", e), s.report(r.alarmId, o.LoadImageDownloadError), 
                t.fail && t.fail(e);
            }
        });
    }
};
var e = require("../../core/logger.js"), t = require("../../core/api.js"), o = require("../../core/sys.js");

Page({
    onLoad: function() {
        var o = this;
        e.sync({
            complete: function() {
                o.setData({
                    logFiles: (t.getStorageSync("log_files") || []).sort(function(e, t) {
                        return e.expTime < t.expTime;
                    }),
                    logFilesIndex: 0,
                    debugItemList: [ {
                        name: "清理数据缓存",
                        onClick: o.clearStorage
                    }, {
                        name: "上报日志",
                        onClick: o.reportLogs
                    } ]
                });
            }
        });
    },
    onClickItem: function(e) {
        var t = e.currentTarget.dataset, o = parseInt(t.index);
        this.data.debugItemList[o].onClick();
    },
    onLongPressItem: function(e) {
        t.showToast({
            title: "TemplateId: " + o.userVersion(),
            duration: 3e3
        });
    },
    clearStorage: function() {
        var e = this;
        t.clearStorage({
            success: function() {
                t.showToast({
                    title: "清理成功",
                    duration: 500
                }), e.setData({
                    logFiles: (t.getStorageSync("log_files") || []).sort(function(e, t) {
                        return e.expTime < t.expTime;
                    }),
                    logFilesIndex: 0
                });
            }
        });
    },
    reportLogs: function() {
        e.sync();
    },
    logFileSelect: function(o) {
        var s = parseInt(o.detail.value || "0");
        t.showLoading({
            title: "上传中",
            mask: !0
        }), e.upload({
            date: this.data.logFiles[s].key.substring("_logger__logs__".length),
            success: function() {
                t.showToast({
                    title: "上传成功",
                    icon: "success"
                }), t.hideLoading();
            },
            fail: function() {
                t.showToast({
                    title: "上传失败",
                    image: "/assets/load_fail.png",
                    duration: 1e3
                });
            }
        });
    },
    showLogs: function() {
        var t = this, o = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
        t.setData({
            showLogs: !t.data.showLogs
        }), e.getLogs({
            date: o,
            complete: function(o) {
                t.setData({
                    logs: (o.data || []).concat(e.logs)
                });
            }
        });
    }
});
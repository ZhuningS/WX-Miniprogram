var e = require("console.js")("file-manager"), i = require("api.js"), r = require("../foundation/oss/idkey.js"), l = require("../utils/enum.js").IDKeyDefine, t = require("sys.js");

module.exports = {
    _queue: [],
    _isQueueWoring: !1,
    _reachFullCount: 0,
    _expiredFileCountArray: [ 1, 3, 5 ],
    saveFile: function(e) {
        this._queue.push(e), this.checkNext();
    },
    checkNext: function() {
        if (0 != this._queue.length && !this._isQueueWoring) {
            this._isQueueWoring = !0;
            var a = this._queue.shift(), s = this;
            i.saveFile({
                tempFilePath: a.tempFilePath,
                success: function(e) {
                    a.success && a.success(e), s.checkExpiredFiles({
                        handleExpireFile: a.handleExpireFile,
                        complete: function() {
                            s._isQueueWoring = !1, s.checkNext();
                        }
                    });
                },
                fail: function(i) {
                    e.error("saveFile error: ", i), r.report(t.alarmId, l.LoadImageSaveFileError), a.fail && a.fail(i), 
                    s._isQueueWoring = !1, s.checkNext(), -1 != i.errMsg.indexOf("the maximum size of the file storage limit") && r.report(t.alarmId, l.FileManagerSaveFileExceeded);
                }
            });
        }
    },
    checkExpiredFiles: function(a) {
        var s = this;
        i.getSavedFileList({
            success: function(u) {
                try {
                    var o = 0, c = (u.fileList || []).sort(function(e, i) {
                        return i.createTime - e.createTime;
                    });
                    for (c.forEach(function(e) {
                        o += e.size;
                    }), o > 8388608 && r.report(t.alarmId, l.LocalFileStorageWillFull); o > 8388608; ) {
                        s._reachFullCount < s._expiredFileCountArray.length && (s._reachFullCount += 1);
                        var n = s._expiredFileCountArray[s._reachFullCount - 1];
                        e.info("file storage will be full, checking " + n + " expired files.");
                        for (var h = 0; h < n; h++) if (c.length > 0) {
                            var f = c.pop();
                            a.handleExpireFile && a.handleExpireFile(f), i.removeSavedFile({
                                filePath: f.filePath
                            }), o -= f.size;
                        }
                    }
                } catch (i) {
                    e.error(i);
                }
                a.success && a.success(), a.complete && a.complete();
            },
            fail: function() {
                e.error("getSavedFileList error"), r.report(t.alarmId, l.FileManagerGetSavedFileError), 
                a.fail && a.fail(), a.complete && a.complete();
            }
        });
    }
};
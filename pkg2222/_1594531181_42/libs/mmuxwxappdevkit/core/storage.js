module.exports = {
    setData: function(e) {
        if (e.sync) {
            try {
                wx.setStorageSync(e.key, e.data), e.success && e.success();
            } catch (s) {
                return e.fail && e.fail(s), !1;
            }
            return !0;
        }
        wx.setStorage({
            key: e.key,
            data: e.data,
            success: e.success,
            fail: e.fail
        });
    },
    removeData: function(e) {
        if (e.sync) {
            try {
                wx.removeStorageSync(e.key), e.success && e.success();
            } catch (s) {
                return e.fail && e.fail(s), !1;
            }
            return !0;
        }
        wx.removeStorage({
            key: e.key,
            success: e.success,
            fail: e.fail
        });
    },
    getData: function(e) {
        if (e.sync) try {
            var s = wx.getStorageSync(e.key);
            return e.success && e.success(s), s;
        } catch (s) {
            return void (e.fail && e.fail(s));
        } else wx.getStorage({
            key: e.key,
            success: e.success,
            fail: e.fail
        });
    }
};
var t = getApp();

Page({
    data: {
        textValue: "",
        ifUse: !0,
        close: !1,
        inputText: "",
        history: !1,
        historyAttr: []
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "搜索"
        });
    },
    onReady: function() {},
    onShow: function() {
        try {
            var t = wx.getStorageSync("history");
            t.length > 0 && this.setData({
                history: !0,
                historyAttr: t
            });
        } catch (t) {}
    },
    onHide: function() {},
    onUnload: function() {},
    getValue: function(t) {
        var e = !0;
        e = "" == t.detail.value, this.setData({
            textValue: t.detail.value,
            ifUse: e,
            close: !e
        });
    },
    goTo: function() {
        t.addHistory(this.data.historyAttr, this.data.textValue), wx.navigateTo({
            url: "/pages/consult/consult?keyWord=" + this.data.textValue
        });
    },
    deleteValue: function() {
        this.setData({
            inputText: "",
            close: !1,
            ifUse: !0
        });
    }
});
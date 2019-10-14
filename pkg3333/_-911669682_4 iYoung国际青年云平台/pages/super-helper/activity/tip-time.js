var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/dg.js")), e = getApp();

Page({
    text: [],
    data: {},
    onLoad: function(t) {
        this.text[-1] = "不提醒", this.text[0] = "事件发生时", this.text[300] = "提前5分钟", this.text[900] = "提前15分钟", 
        this.text[1800] = "提前30分钟", this.text[3600] = "提前1小时", this.text[7200] = "提前2小时", 
        this.text[86400] = "提前1天", this.text[172800] = "提前2天", this.text[604800] = "提前1周", 
        this.setData({
            remind_time: e.globalData.remind_time
        });
    },
    onValueChange: function(i) {
        e.globalData.remind_time = i.detail.value, e.globalData.remind_time_text = this.text[e.globalData.remind_time], 
        t.default.navigateBack();
    }
});
function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/dg.js")), a = t(require("../../../utils/data.js")), i = t(require("../../../utils/requestUtil.js")), n = t(require("../../../utils/util.js")), u = t(require("../../../utils/underscore.js")), d = a.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper", r = getApp();

Page({
    data: {
        cycle: 7,
        dayArray: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]
    },
    onLoad: function(t) {
        var e = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
        e = u.default.map(e, function(t) {
            return t + "";
        });
        var a = new Date();
        this.setData({
            dayArray: e,
            init_begin_time: n.default.format(a, "yyyy-MM-dd"),
            begin_time: n.default.format(a, "yyyy-MM-dd")
        }), u.default.extend(r.globalData, {
            achievement: [ "初入江湖冒险家", "小试牛刀", "三顾茅庐", "书生意气", "好好学习", "天天向上", "打卡小能手", "莫笑少年太轻狂", "超越常人的坚持", "十天寒窗打卡", "终日沉迷学习", "今朝风流人物", "远离废材生活", "新秀之星", "优秀学习干部", "打卡届扛把子", "用尽洪荒之力", "人美就要多打卡", "打卡的逗逼", "深藏不漏", "打卡的流金岁月", "无时无刻不再进步", "打卡狂魔", "锋芒毕露", "拼命三郎", "永远第一佳", "打卡小公主", "匠人精神", "绝对强者", "华丽的逆袭" ]
        });
    },
    onReady: function() {},
    onShow: function() {
        console.log(r.globalData.achievement);
    },
    onHide: function() {},
    onUnload: function() {},
    onNavigateTap: function(t) {
        e.default.navigateTo({
            url: t.currentTarget.dataset.url + "?cycle=" + this.data.cycle
        });
    },
    bindDataChange: function(t) {
        var e = {};
        e[t.currentTarget.dataset.bind] = !0 === t.detail.value ? 1 : t.detail.value, this.setData(e);
    },
    bindPickerDataChange: function(t) {
        var e = {};
        e[t.currentTarget.dataset.bind] = parseInt(t.detail.value) + 1, this.setData(e);
    },
    onPushSubmit: function(t) {
        if (!i.default.isLoading(this.addRQId)) {
            var a = {};
            (0, u.default)(r.globalData.achievement).each(function(t, e) {
                return a["achievement[" + e + "]"] = t;
            });
            var n = u.default.extend({}, a, t.detail.value), l = d + "/SignedApi/edit.html";
            this.addRQId = i.default.post(l, n, function(t) {
                e.default.redirectTo({
                    url: "detail?id=" + t.id
                });
            }, this);
        }
    }
});
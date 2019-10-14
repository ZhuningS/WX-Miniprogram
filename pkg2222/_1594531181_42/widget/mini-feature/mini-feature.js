var e = require("../../core/api.js");

require("../../core/sys.js"), require("../../utils/util.js");

Component({
    properties: {
        items: Array
    },
    data: {
        rows: []
    },
    attached: function() {
        for (var e = [], t = [], r = 0; r < this.properties.items.length; r++) {
            var i = this.properties.items[r];
            console.log(i), t.push({
                img: i.pic_url,
                title: i.name,
                subTitle: i.desc,
                jumpUrl: i.jump_wxapp.path,
                index: r,
                appId: i.jump_wxapp.appid
            }), 2 == t.length && (e.push({
                cols: t.slice()
            }), t = []);
        }
        this.setData({
            rows: e
        });
    },
    methods: {
        onClickCol: function(t) {
            var r = t.currentTarget.dataset.col;
            console.log(r);
            var i = r.jumpUrl;
            0 == i.indexOf("http") && e.openUrl({
                url: i
            }), this.triggerEvent("tapcol", {
                index: r.index,
                title: r.title,
                appId: r.appId
            });
        }
    }
});
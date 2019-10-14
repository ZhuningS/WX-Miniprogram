Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        hasMore: {
            type: Boolean,
            value: !1
        },
        noResultTips: {
            type: String,
            value: "暂无结果"
        },
        noMoreTips: {
            type: String,
            value: "没有更多结果"
        },
        source: {
            type: Object,
            value: {
                pageColor: "#F7F7F7",
                numberOfRowsInSection: function(t) {
                    return 0;
                },
                numberOfSection: function() {
                    return 0;
                },
                heightForRowAtIndexPath: function(t, e) {
                    return 0;
                },
                sectionInsetOfSection: function(t) {
                    return 0;
                },
                sectionInsetColorOfSection: function(t) {
                    return "#F7F7F7";
                },
                cellForRowAtIndexPath: function(t, e) {
                    return {};
                }
            }
        },
        seperatorStyle: {
            type: String,
            value: "ListViewSeperatorStyleNone"
        },
        height: {
            type: String,
            value: "0"
        },
        loadMoreTips: {
            type: String,
            value: "正在加载"
        }
    },
    data: {
        sections: [],
        cellCount: 0,
        reloadingData: !1
    },
    attached: function() {
        var t = this, e = {
            reloadData: function() {
                t.reloadData();
            },
            setDataSource: function(e) {
                t.setData({
                    source: e
                });
            }
        };
        this.triggerEvent("init", {
            listView: e
        });
    },
    methods: {
        onScrollToLower: function() {
            this.data.hasMore && this.triggerEvent("loadmore");
        },
        reloadData: function() {
            var t = this;
            t.setData({
                reloadingData: !0
            });
            for (var e = 0, o = {}, n = t.data.source.numberOfSection(), r = t.data.sections.length, a = 0; a < n; a++) {
                var s = {}, i = !1;
                a < t.data.sections.length && (s = t.data.sections[a]);
                var c = "", l = t.data.source.numberOfRowsInSection(a), u = t.data.source.sectionInsetOfSection(a), d = t.data.source.sectionInsetColorOfSection(a);
                e += l, s.sectionInset == u && s.sectionInsetColor == d || (i = !0), s.rows || (i = !0, 
                s.rows = []), s.rows.length != l && (i = !0);
                for (var f = 0; f < l; f++) {
                    var g = {}, h = {}, S = t.data.source.cellForRowAtIndexPath(a, f);
                    f < s.rows.length && (h = s.rows[f]), g.cell = S, g.id = S.id, g.key = JSON.stringify(S), 
                    c += g.id, g.key != h.key && (o["sections[" + a + "].rows[" + f + "]"] = g, i = !0);
                }
                for (var v = l; v < s.rows.length; v++) o["sections[" + a + "].rows[" + v + "].deleted"] = !0;
                i && (o["sections[" + a + "].key"] = c, o["sections[" + a + "].sectionInset"] = u, 
                o["sections[" + a + "].sectionInsetColor"] = d);
            }
            for (var p = n; p < r; p++) o["sections[" + p + "].deleted"] = !0;
            o.cellCount = e, t.setData(o, function() {
                t.setData({
                    reloadingData: !1
                });
            });
        }
    }
});
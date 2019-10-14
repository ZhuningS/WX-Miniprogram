Component({
    properties: {
        hlColor: {
            type: String,
            value: "#1AAD19"
        },
        simpleColor: {
            type: String,
            value: "#000000"
        },
        oriText: {
            type: String,
            value: "",
            observer: function(t, i) {
                var e = this.hilight_word(this.data.query, t);
                this.setData({
                    key_item: e
                });
            }
        },
        query: {
            type: String,
            value: "",
            observer: function(t, i) {
                var e = this.hilight_word(t, this.data.oriText);
                this.setData({
                    key_item: e
                });
            }
        },
        fontSize: {
            type: Number,
            value: 16
        }
    },
    data: {
        key_item: []
    },
    attached: function() {
        var t = this.hilight_word(this.data.query, this.data.oriText);
        this.setData({
            key_item: t
        });
    },
    ready: function() {},
    methods: {
        hilight_word: function(t, i) {
            var e = i.indexOf(t), r = [];
            if (e > -1) {
                if (0 == e) return (r = this.hilight_word(t, i.substr(t.length))).unshift({
                    key: !0,
                    str: t
                }), r;
                if (e > 0) return (r = this.hilight_word(t, i.substr(e))).unshift({
                    key: !1,
                    str: i.substring(0, e)
                }), r;
            }
            return [ {
                key: !1,
                str: i
            } ];
        }
    }
});
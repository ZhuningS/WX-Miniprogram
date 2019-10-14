getApp();

Component({
    behaviors: [],
    properties: {
        text: {
            type: Object,
            value: {
                wordSize: 1,
                textColor: 1,
                textFormat: 2,
                textStyle: 3,
                textWords: "",
                oldData: !1
            },
            observer: function(t, e) {
                this.updata();
            }
        }
    },
    data: {
        sizeMap: {
            0: "40rpx",
            1: "36rpx",
            2: "30rpx",
            3: "26rpx",
            4: "24rpx",
            5: "22rpx",
            6: "64rpx",
            7: "56rpx",
            8: "48rpx"
        },
        styleMap: {
            0: "left",
            1: "center",
            2: "right"
        },
        formatMap: {
            0: "bold",
            1: "italic",
            2: "underline"
        },
        colorMap: {
            0: "#222222",
            1: "#888",
            2: "#ed2308",
            3: "#ff7800",
            4: "#1aad18",
            5: "#638ee9",
            6: "#b04fbb"
        },
        textStyle: "",
        textColor: ""
    },
    methods: {
        updata: function() {
            console.log(this.data);
            try {
                this.data.text.textWords = JSON.parse(this.data.text.textWords), this.data.text.textWords.content = ("" + this.data.text.textWords.content).replace(/\n/g, "@!!@!"), 
                this.data.text.textWords.content = ("" + this.data.text.textWords.content).replace(/\s/g, "&nbsp;"), 
                this.data.text.textWords.content = ("" + this.data.text.textWords.content).replace(/@!!@!/g, "\n"), 
                this.setData({
                    oldData: !0,
                    text: this.data.text
                });
            } catch (e) {
                var t = this.data.text.textColor;
                t && "#" == t.substring(0, 1) ? this.data.textColor = t : this.data.textColor = this.data.colorMap[t], 
                this.data.text.textWords && (this.data.text.textWords = ("" + this.data.text.textWords).replace(/\n/g, "@!!@!"), 
                this.data.text.textWords = ("" + this.data.text.textWords).replace(/\s/g, "&nbsp;"), 
                this.data.text.textWords = ("" + this.data.text.textWords).replace(/@!!@!/g, "\n")), 
                this.setData({
                    oldData: !1,
                    text: this.data.text,
                    textColor: this.data.textColor
                });
            }
            this.data.textStyle = "";
            for (var e = this.data.text.textFormat ? this.data.text.textFormat.split(",") : "", a = 0, s = e.length; a < s; a++) this.data.textStyle = this.data.textStyle + " " + this.data.formatMap[e[a]];
            this.setData({
                textStyle: this.data.textStyle
            });
        }
    },
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});
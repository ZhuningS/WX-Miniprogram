var t = getApp();

Component({
    properties: {
        seeNum: {
            type: Number,
            value: "",
            observer: function(t, e) {}
        },
        likeId: {
            type: Number,
            value: "",
            observer: function(t, e) {
                t && this.setData({
                    likeId: t
                });
            }
        },
        likeStatus: {
            type: Number,
            value: "",
            observer: function(t, e) {
                t && this.setData({
                    likeStatus: t
                });
            }
        },
        likes: {
            type: Array,
            value: "",
            observer: function(t, e) {
                t && this.setData({
                    likes: t
                });
            }
        },
        comments: {
            type: Array,
            value: "",
            observer: function(t, e) {
                t && this.setData({
                    comments: t
                });
            }
        },
        i: {
            type: Number,
            value: "",
            observer: function(t, e) {}
        },
        goodsId: {
            type: Number,
            value: "",
            observer: function(t, e) {}
        },
        animationData: {
            type: Array,
            value: "",
            observer: function(t, e) {}
        },
        showBlock: {
            type: String,
            value: "",
            observer: function(t, e) {}
        },
        discussInfo: {
            type: Object,
            value: {},
            observer: function(t, e) {
                t && this.setData({
                    discussInfo: t
                });
            }
        }
    },
    data: {
        discussInfo: {},
        oneClick: 1,
        onAuthShow: "",
        onAuthHide: "",
        authParams: {
            isCallBackHandle: !1
        }
    },
    methods: {
        showDiscussInput: function(e) {
            var s = this;
            t.userInfoMiddleWare().then(function(t) {
                if (console.log("data", t), t.isGetUserInfo) {
                    var a = e.currentTarget.dataset.nowid, n = e.currentTarget.dataset.goodsid;
                    clearTimeout(i);
                    var i = setTimeout(function() {
                        s.data.discussInfo.inputShow || (s.data.discussInfo.inputShow = !0, s.data.discussInfo.placeHolder = "请输入评论内容", 
                        s.data.discussInfo.goodsId = n, s.data.discussInfo.shopListIndex = a, s.setData(s.data), 
                        s.triggerEvent("setDiscussValue", {
                            index: a,
                            type: 1
                        }));
                    }, 300);
                } else {
                    var o = new Date().getTime();
                    s.setData({
                        onAuthShow: o
                    });
                }
            });
        },
        DiscussInputState: function(t) {
            console.log("开始聚焦或输入");
            var e = this, s = t.detail.value;
            e.data.discussInfo.inputText = s, e.setData(e.data);
        },
        sendDiscuss: function() {
            var t = this;
            "" != t.data.discussInfo.inputText.replace(/\s+/g, "") ? (t.triggerEvent("setDiscussValue", {
                index: t.data.i,
                type: 2,
                content: t.data.discussInfo.inputText.trim()
            }), setTimeout(function() {
                t.hideDiscussInput();
            }, 1e3)) : wx.showModal({
                title: "温馨提示",
                confirmColor: "#ff7800",
                showCancel: !1,
                content: "请输入评论内容"
            });
        },
        delDiscuss: function(t) {
            var e = this, s = t.currentTarget.dataset.belongto, a = (t.currentTarget.dataset.outindex, 
            t.currentTarget.dataset.selfindex), n = t.currentTarget.dataset.id;
            1 == s && wx.showModal({
                title: "删除提醒",
                content: "确定删除该评论？",
                confirmColor: "#ff7800",
                success: function(t) {
                    t.confirm ? (console.log("用户点击确定"), e.triggerEvent("setDiscussValue", {
                        index: e.data.i,
                        type: 3,
                        commentId: n,
                        commentIndex: a
                    })) : t.cancel && console.log("用户点击取消");
                }
            });
        },
        clickToLick: function(e) {
            e.currentTarget.dataset.goodsid, e.currentTarget.dataset.nowclickid;
            var s = this;
            t.userInfoMiddleWare().then(function(t) {
                if (console.log("data", t), t.isGetUserInfo) s.triggerEvent("setDiscussValue", {
                    index: s.data.i,
                    type: 4
                }); else {
                    var e = new Date().getTime();
                    s.setData({
                        onAuthShow: e
                    });
                }
            });
        },
        clickToCancelLick: function(t) {
            console.log("clickToCancelLick----");
            t.currentTarget.dataset.nowclickid;
            var e = t.currentTarget.dataset.likeid, s = (t.currentTarget.dataset.nowclickid, 
            this);
            s.triggerEvent("setDiscussValue", {
                index: s.data.i,
                type: 5,
                likeId: e
            });
        },
        hideDiscussInput: function() {
            console.log("隐藏评论输入框");
            var t = this;
            t.data.discussInfo.inputShow = !1, t.data.discussInfo.goodsId = 0, t.data.discussInfo.inputText = "", 
            t.data.discussInfo.shopListIndex = "", t.setData(t.data);
        },
        noMove: function() {}
    }
});
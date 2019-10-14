function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = require("../../core/sys.js"), i = require("../../utils/util.js"), a = require("model.chat.js"), s = require("../../model/model.service.js"), o = require("../../foundation/statemachine.js"), n = require("../../core/network.js"), r = require("../../core/api.js");

Page({
    listState: {},
    chatModel: {},
    data: {
        messages: [],
        backListMessages: [],
        lastMsg: {},
        attachments: [],
        targetMsgId: "",
        targetMsgTop: 0,
        inputValue: String,
        user_id: String,
        chat_user_id: String,
        userInfo: {},
        fromGoods: {},
        isInputFocus: !1,
        isToolsFocus: !1,
        isShortcutShown: !1,
        autoScroll: !0,
        hasMore: !0,
        isLoadingMore: !0,
        beforeAddLast: !1,
        lastScrollTop: 0,
        lastReachTopTime: 0,
        isTodo: !1,
        showHomeBtn: !1,
        screenHeight: Number,
        navigationBarHeight: Number,
        bottomBarHeight: Number,
        bottomBarExtraHeight: Number,
        bottomToolsHeight: Number,
        bottomInputHeight: Number,
        keyboardHeight: Number,
        bottomBarTop: Number,
        phoneModel: e.phoneModel(),
        platform: e.platform
    },
    onLoad: function(t) {
        this.initData(t), this.initUI();
    },
    onUnload: function() {
        this.chatModel.dealloc(), delete this.chatModel;
    },
    onShow: function() {
        this.chatModel.start();
    },
    onHide: function() {
        this.chatModel.stop();
    },
    initUI: function() {
        var t = this;
        t.setData({
            screenHeight: e.screenHeight,
            bottomBarHeight: 50,
            bottomBarExtraHeight: "iPhoneX" == e.phoneModel() ? 25 : 0,
            bottomBarTop: e.screenHeight - ("iPhoneX" == e.phoneModel() ? 75 : 50)
        }), i.boundingClientRectById("navigation-bar", function(e) {
            t.setData({
                navigationBarHeight: e.height
            });
        }), i.boundingClientRectById("bottom-tools", function(e) {
            t.setData({
                bottomToolsHeight: e.height
            });
        });
    },
    initData: function(t) {
        this.listState = new o({
            init: "idle",
            transitions: [ {
                name: "hold",
                from: "idle",
                to: "hold"
            }, {
                name: "unhold",
                from: "hold",
                to: "idle"
            }, {
                name: "scroll",
                from: "idle",
                to: "fling",
                nowait: !0
            }, {
                name: "stop",
                from: "fling",
                to: "idle"
            }, {
                name: "onIdle",
                from: "idle",
                to: "idle"
            } ]
        }), this.chatModel = a().init(Object.assign({}, t, {
            success: this.onMessagesUpdate()
        })), this.chatModel.isKf ? this.setAttachments([ "finish_service", "pic", "video" ]) : this.setAttachments([ "pic", "video" ]);
        var e = JSON.safeParse(decodeURIComponent(t.from_goods || "")), i = t.wxapp_appid || "";
        e.appid = i, this.setData({
            isShortcutShown: !!e.appid && !!e.image_url && !!e.item_code,
            fromGoods: e,
            isTodo: !!t.is_todo,
            showHomeBtn: getCurrentPages().length <= 1
        });
        var s = this;
        this.data.isShortcutShown && setTimeout(function() {
            s.setData({
                isShortcutShown: !1
            });
        }, 1e4);
    },
    onMessagesUpdate: function() {
        var t = this;
        return function(e) {
            t.listState.onIdle(function() {
                var a = e.messages, s = e.changes;
                if ("last" === e.type) {
                    var o = i.getMsgUniqueId(t.data.lastMsg);
                    t.setData(Object.assign({
                        beforeAddLast: !0,
                        lastMsg: a[0],
                        userInfo: e.userInfo,
                        user_id: e.user_id,
                        chat_user_id: e.chat_user_id
                    }, s)), t.locateTargetMsg(o, -40, function() {
                        t.listState.onStop(function() {
                            var i = new Date().getTime();
                            t.setData({
                                lastReachTopTime: i,
                                hasMore: e.hasMore,
                                isLoadingMore: !1,
                                beforeAddLast: !1
                            }, function() {
                                t.setData({
                                    backListMessages: a.slice(0, 20)
                                });
                            });
                        });
                    });
                } else {
                    var n = Object.assign({
                        lastMsg: a[0],
                        hasMore: e.hasMore,
                        userInfo: e.userInfo,
                        user_id: e.user_id,
                        chat_user_id: e.chat_user_id,
                        isLoadingMore: !1
                    }, s);
                    t.data.backListMessages.length <= 0 && (n.backListMessages = a), t.setData(n), "idle" === t.listState.state && Object.keys(s).length > 0 && t.locateTargetMsg(i.getMsgUniqueId(a[a.length - 1]));
                }
            });
        };
    },
    setAttachments: function(t) {
        var e = t.slice(0, 4);
        e.length = 4;
        var i = t.slice(4, 8);
        i.length = 4, this.setData({
            attachments0: e,
            attachments1: i
        });
    },
    setInputFocus: function(t) {
        var e = this.data.screenHeight - this.data.bottomBarHeight - (t ? this.data.keyboardHeight : this.data.bottomBarExtraHeight), a = "";
        t && this.data.messages.length && (a = i.getMsgUniqueId(this.data.messages[this.data.messages.length - 1])), 
        this.setData({
            bottomBarTop: e,
            isInputFocus: t,
            isToolsFocus: !1,
            isShortcutShown: !1
        }), this.locateTargetMsg(a);
    },
    setToolsFocus: function(t) {
        var e = this.data.screenHeight - this.data.bottomBarHeight - (t ? this.data.bottomToolsHeight : this.data.bottomBarExtraHeight), a = "";
        t && this.data.messages.length && (a = i.getMsgUniqueId(this.data.messages[this.data.messages.length - 1])), 
        this.setData({
            bottomBarTop: e,
            isToolsFocus: t,
            isInputFocus: !1,
            isShortcutShown: !1
        }), this.locateTargetMsg(a);
    },
    onToolsBtnClick: function() {
        var t = this, e = 0;
        t.data.isInputFocus && (e = 50), setTimeout(function() {
            t.data.isToolsFocus ? t.setData({
                isInputFocus: !0
            }) : t.setToolsFocus(!0);
        }, e);
    },
    onShortcutClick: function() {
        var t = this.data.fromGoods;
        if (t && t.appid && t.item_code) {
            this.setData({
                isShortcutShown: !1
            });
            var e = this.chatModel.insert({
                appid: t.appid,
                item_code: t.item_code,
                sku_id: t.sku_id,
                title: t.title,
                goods_image_url: t.image_url,
                stock_price: t.stock_price,
                market_price: t.market_price
            }, "GOODS");
            this.locateTargetMsg(i.getMsgUniqueId(e));
        }
    },
    onAcceptServiceClick: function() {
        var t = this;
        r.showLoading({
            title: "加载中"
        }), s.accept({
            cus_id: this.chatModel.cus_id,
            biz_id: this.chatModel.biz_id,
            success: function() {
                r.hideLoading(), t.setData({
                    isTodo: !1
                });
            },
            fail: function(t) {
                console.error(t), r.showToast({
                    title: "该用户已被接入",
                    icon: "none",
                    duration: 1e3
                });
            }
        });
    },
    onHomeBtnClick: function() {
        r.redirectTo({
            url: "/portal/index/index"
        });
    },
    onListTouchStart: function() {
        this.listState.hold();
    },
    onListTouchEnd: function() {
        this.listState.unhold();
    },
    onListClick: function() {
        this.setToolsFocus(!1);
    },
    onListScroll: function(t) {
        var e = this;
        this.data.lastScrollTop = t.detail.scrollTop, this.data.autoScroll = !1, this.listState.scroll(), 
        clearTimeout(this.listScrollTimer), this.listScrollTimer = setTimeout(function() {
            e.listState.stop();
        }, 100);
    },
    onListReachTop: function() {
        this.data.isLoadingMore || this.data.messages.length <= 0 || this.data.hasMore && (new Date().getTime() - this.data.lastReachTopTime <= 500 || (this.setData({
            isLoadingMore: !0
        }), this.chatModel.getLast()));
    },
    onListReachBottom: function() {
        this.data.autoScroll = !0;
    },
    onMsgStatusClick: function(t) {
        this.chatModel.resend(t.detail.unique_id);
    },
    onMsgImageClick: function(t) {
        var e = this.data.messages.filter(function(t) {
            return "IMAGE" === t.type;
        }).map(function(t) {
            var e = t.image.local_image_url || t.image.image_url;
            return e.indexOf("shp.qpic.cn") >= 0 && (e += "/0"), e;
        }), i = t.detail.image_url;
        r.previewImage({
            current: i,
            urls: e
        });
    },
    onMsgGoodsClick: function(t) {
        var i = t.detail.item_code, a = t.detail.sku_id, s = t.detail.appid;
        s && i && e.appid() == s ? r.navigateTo({
            url: "/portal/detail/detail?code=" + i + "&sku_id=" + (a || "") + "&scene=301"
        }) : console.error("missing or wrong goods data!");
    },
    onInputFocus: function(t) {
        this.setData({
            keyboardHeight: t.detail.height || 0
        }), this.setInputFocus(!0);
    },
    onInputBlur: function(t) {
        this.setInputFocus(!1);
    },
    onInputConfirm: function(t) {
        if (t.detail.value) {
            this.setData({
                inputValue: ""
            });
            var e = this.chatModel.insert({
                content: t.detail.value
            }, "TEXT");
            this.locateTargetMsg(i.getMsgUniqueId(e));
        }
    },
    onInputLineChange: function(t) {
        var e = Math.max(37, t.detail.height), i = e + 13, a = this.data.screenHeight - i - (this.data.isInputFocus ? this.data.keyboardHeight : this.data.bottomBarExtraHeight);
        this.setData({
            bottomInputHeight: e,
            bottomBarHeight: i,
            bottomBarTop: a
        });
    },
    onAttachmentSelect: function(t) {
        switch (t.detail.type) {
          case "finish_service":
            this.finishService();
            break;

          case "pic":
            this.chooseImageFrom("album");
            break;

          case "video":
            this.chooseImageFrom("camera");
        }
    },
    finishService: function() {
        var t = this.data.chat_user_id, e = this.data.user_id;
        this.chatModel.isKf && (r.showLoading({
            title: "加载中"
        }), s.finish({
            cus_id: t,
            biz_id: e,
            success: function() {
                r.hideLoading(), r.navigateBack();
            },
            fail: function() {
                console.error("yptest, finish fail");
            }
        }));
    },
    chooseImageFrom: function(t) {
        var e = this, i = t ? [ t ] : void 0;
        r.chooseImage({
            count: 9,
            sizeType: [ "compressed" ],
            sourceType: i,
            success: function(t) {
                var i = null;
                t.tempFilePaths && t.tempFilePaths.forEach(function(a, s) {
                    var o = t.tempFilePaths.length - 1 == s;
                    i ? i.then(function() {
                        e.uploadImageTask(a, o);
                    }) : i = e.uploadImageTask(a, o);
                });
            }
        });
    },
    uploadImageTask: function(t, e) {
        var a = this;
        return new Promise(function(s, o) {
            t ? r.getImageInfo({
                src: t,
                success: function(o) {
                    n.ensureServerSessionValid({
                        success: function() {
                            var n = a.uploadImageImpl(t, o);
                            e && a.locateTargetMsg(i.getMsgUniqueId(n)), s();
                        },
                        fail: function() {
                            i.showTips("网络连接失败，请稍后重试"), s();
                        }
                    });
                }
            }) : s();
        });
    },
    uploadImageImpl: function(e, a) {
        var s = this, o = s.chatModel.insertFake({
            image_url: e,
            image_width: a.width,
            image_height: a.height,
            image_format: a.type
        }, "IMAGE");
        return r.uploadFile({
            url: "https://wxa.weixin.qq.com/brandmall/brandmall/media/upload-image",
            filePath: e,
            name: i.getRandomString(),
            formData: {
                session_key: n._ticket.session_key
            },
            success: function(t) {
                var e = JSON.safeParse(t.data);
                200 === t.statusCode && 0 === e.errcode ? (console.error("upload image succ,", t), 
                s.chatModel.insert({
                    image_url: e.image_url,
                    image_width: a.width,
                    image_height: a.height,
                    image_format: a.type
                }, "IMAGE", o)) : (console.error("upload image fail,", t), i.showTips("图片上传失败，请稍后重试"));
            },
            fail: function(t) {
                console.error("upload image fail,", t), i.showTips("图片上传失败，请稍后重试");
            }
        }).onProgressUpdate(function(e) {
            if (e.progress - (o.upload_percentage || 0) >= 20) {
                o.upload_percentage = e.progress;
                for (var i in s.data.messages) if (s.data.messages[i] === o) return void s.setData(t({}, "messages[" + i + "]", o));
            }
        }), o;
    },
    locateTargetMsg: function(t, e, a) {
        var s = this;
        i.boundingClientRectById(t, function(t) {
            s.setData({
                targetMsgTop: t.top - s.data.navigationBarHeight + s.data.lastScrollTop + (e || 0)
            }, a);
        });
    }
});
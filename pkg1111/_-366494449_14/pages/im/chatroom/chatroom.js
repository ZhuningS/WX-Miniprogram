function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = getApp(), o = require("../../../utils/im/webim.js"), s = require("../../../utils/im/webim_handler.js"), n = require("../../../utils/im/tls.js"), i = require("../../../utils/util.js"), d = require("../../../utils/common.js"), r = require("../../../common/PageBase.js"), c = require("../../../utils/ajax.js"), u = wx.getRecorderManager(), l = wx.createInnerAudioContext(), g = null;

global.webim = o;

var m = {
    sdkappid: 1400136350,
    accountType: 37948,
    accountMode: 0
};

o.Emotions = (t = {
    "[呲牙]": "a_001_cy.png",
    "[调皮]": "a_002_tp.png",
    "[冷汗]": "a_003_lh.png",
    "[偷笑]": "a_004_tx.png",
    "[再见]": "a_005_zj.png",
    "[敲]": "a_006_qiao.png",
    "[出汗]": "a_007_ch.png",
    "[猪头]": "a_008_zt.png",
    "[玫瑰]": "a_009_mg.png",
    "[流泪]": "a_010_ll.png",
    "[大哭]": "a_011_dk.png",
    "[嘘]": "a_012_xu.png",
    "[酷]": "a_013_kuk.png",
    "[抓狂]": "a_014_zk.png",
    "[委屈]": "a_015_wq.png",
    "[便便]": "a_016_bb.png",
    "[炸弹]": "a_017_zhd.png",
    "[菜刀]": "a_018_cd.png",
    "[可爱]": "a_019_ka.png",
    "[色]": "a_020_se.png",
    "[害羞]": "a_021_hx.png",
    "[得意]": "a_022_dy.png",
    "[吐]": "a_023_tuu.png",
    "[微笑]": "a_024_wx.png",
    "[愤怒]": "a_025_fn.png",
    "[尴尬]": "a_026_gg.png",
    "[惊恐]": "a_027_jk.png"
}, e(t, "[冷汗]", "a_028_lengh.png"), e(t, "[心]", "a_029_xin.png"), e(t, "[嘴唇]", "a_030_sa.png"), 
e(t, "[白眼]", "a_031_baiy.png"), e(t, "[傲慢]", "a_032_am.png"), e(t, "[难过]", "a_033_ng.png"), 
e(t, "[惊讶]", "a_034_jy.png"), e(t, "[疑问]", "a_035_yiw.png"), e(t, "[睡]", "a_036_shui.png"), 
e(t, "[亲亲]", "a_037_qq.png"), e(t, "[奋斗]", "a_038_fendou.png"), e(t, "[抱抱]", "a_039_bb.png"), 
e(t, "[憨笑]", "a_040_hx.png"), e(t, "[强]", "a_041_qiang.png"), e(t, "[握手]", "a_042_ws.png"), 
e(t, "[胜利]", "a_043_shl.png"), e(t, "[抱拳]", "a_044_bq.png"), e(t, "[OK]", "a_045_ok.png"), 
t), n.init({
    sdkappid: m.sdkappid
});

var p = {
    SHOW: 0,
    HIDE: 1,
    HOLD: 2,
    SWIPE: 3,
    RELEASE: 4
}, h = {
    0: "长按开始录音",
    2: "向上滑动取消",
    3: "松开手取消"
};

Page(d.extendPage(r, {
    data: {
        dataLoaded: !1,
        userInfo: {},
        msgs: [],
        Identifier: "",
        UserSig: null,
        msgContent: "",
        loadnext: !0,
        isfromtpl: 0,
        copyStatus: 0,
        openCopyPop: !1,
        template: "",
        show: "emoji_list",
        view: "scroll_view",
        indicatorDots: !0,
        autoplay: !1,
        interval: 5e3,
        duration: 1e3,
        showPanel: "",
        emojiObj: o.Emotions,
        RecordStatus: p,
        RecordDesc: h,
        recordStatus: p.HIDE,
        showRecordHandler: !1,
        audioUrl: "",
        audioSec: null,
        playStatus: 0,
        isAudioAuth: !1,
        currentPage: 1,
        loadingShow: !1,
        isCancel: 0,
        hasMobile: 0
    },
    onLoad: function(e) {
        var t = this;
        console.log("im options=====", e);
        var o = this, s = getCurrentPages();
        s.length > 1 && s[s.length - 2].setData({
            fromPage: "im"
        }), d.initApp({
            loginSuc: function() {
                var s = a.getUInfo();
                "" != a.getUInfo().mobile && o.setData({
                    hasMobile: 1
                });
                var n = JSON.parse(e.card_id), i = a.getBrand(), d = a.getUid(), r = (e.from, e.id || "");
                console.log(i, r), "template" == e.from && (a.setCardid(e.card_id), t.setData({
                    template: "template"
                }));
                var c = a.getAudioAuth();
                o.setData({
                    userInfo: s,
                    brand: i,
                    card_id: n,
                    uid: d,
                    product_id: r,
                    isAudioAuth: c
                }), o.login(function() {
                    o.initIM(s);
                });
            }
        });
    },
    onHide: function() {
        clearInterval(g), 1 == this.data.isAudioAuth && u.stop();
    },
    onUnload: function() {
        clearInterval(g), 1 == this.data.isAudioAuth && u.stop(), s.logout();
    },
    login: function(e) {
        var t = this, a = t.data.card_id, o = t.data.uid;
        c.G({
            url: "/apis/home/card.tim/user",
            data: {
                card_id: a,
                uid: o
            },
            success: function(a) {
                t.setData({
                    card_avatar: a.data.to.card_avatar,
                    card_name: a.data.to.card_name,
                    card_weixin: a.data.to.card_weixin || "",
                    card_mobile: a.data.to.card_mobile || "",
                    user_avatar: a.data.from.user_logo,
                    user_name: a.data.from.user_nickname,
                    UserSig: a.data.from.sign,
                    selToID: a.data.to.serial,
                    Identifier: a.data.from.serial,
                    fromUser: a.data.from.username,
                    toUser: a.data.to.username
                }), wx.setNavigationBarTitle({
                    title: a.data.to.card_name
                }), t.getMsg(), e();
            }
        });
    },
    getMsg: function(e, t) {
        var a = this, o = this, s = o.data.card_id, n = o.data.uid, i = o.data.product_id || "";
        c.G({
            url: "/apis/home/card.tim/record",
            data: {
                card_id: s,
                uid: n,
                size: 20,
                page: e || 1,
                product_id: i
            },
            success: function(s) {
                var n = s.data.item, i = 1 == e ? n : n.concat(a.data.msgs), d = Math.ceil(s.data.total / s.data.size);
                if (e && 1 != e) {
                    a.data.msgs = i;
                    r = i[n.length];
                    setTimeout(function() {
                        o.setData({
                            toView: r.uuid,
                            lastmsgs: n
                        });
                    }, 100);
                } else {
                    var r = n[n.length - 1];
                    setTimeout(function() {
                        o.setData({
                            toView: r.uuid
                        });
                    }, 100), o.setData({
                        msgs: i,
                        endpage: d
                    });
                }
                t && t();
            }
        });
    },
    loadnext: function() {
        var e = this;
        console.log(this.data.currentPage + 1, this.data.endpage), this.data.loadnext && (this.data.loadnext = !1, 
        this.data.currentPage + 1 <= this.data.endpage && (this.setData({
            loadingShow: !0,
            msgs: this.data.msgs
        }), this.getMsg(this.data.currentPage + 1, function() {
            var t = e.data.currentPage;
            e.setData({
                currentPage: t + 1,
                loadingShow: !1
            }), setTimeout(function() {
                e.data.loadnext = !0;
            }, 1e3);
        })));
    },
    clearInput: function() {
        this.setData({
            msgContent: ""
        });
    },
    bindConfirm: function(e) {
        var t = this, a = e.detail.content;
        a.replace(/^\s*|\s*$/g, "") && s.onSendMsg(a, function() {
            t.clearInput();
        });
    },
    getTime: function() {
        var e = new Date(), t = e.getHours(), a = e.getMinutes(), o = e.getSeconds();
        return e.getMonth() + 1 + "-" + e.getDate() + " " + (t < 10 ? "0" + t : t) + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o);
    },
    _renderMsg: function(e) {
        var t, s, n = [], i = e.elems[0].type;
        if (void 0 !== e.elems[0].content.ext && "audio" != e.elems[0].content.ext && "mobile" != e.elems[0].content.ext && (t = JSON.parse(e.elems[0].content.ext).type || "", 
        s = JSON.parse(e.elems[0].content.ext) || {}), "TIMTextElem" == i || "TIMFaceElem" == i) for (var d = 0; d < e.elems.length; d++) {
            var r = {
                MsgType: e.elems[d].type,
                MsgContent: e.elems[d].content.text || e.elems[d].content.data
            };
            n.push(r);
        } else "TIMImageElem" == i ? n = [ {
            MsgContent: e.elems[0].content.ImageInfoArray[0].url,
            MsgType: "TIMImageElem"
        } ] : "TIMCustomElem" == i && "audio" == e.elems[0].content.ext ? n = [ {
            MsgContent: {
                type: 100,
                data: e.elems[0].content.data,
                sec: e.elems[0].content.desc
            },
            MsgType: "TIMCustomElem"
        } ] : "TIMCustomElem" == i && "mobile" == e.elems[0].content.ext ? n = [ {
            MsgContent: {
                type: 101,
                data: e.elems[0].content.data,
                sec: e.elems[0].content.desc
            },
            MsgType: "TIMCustomElem"
        } ] : "TIMCustomElem" == i && 2 == t && (n = [ {
            MsgContent: s,
            MsgType: "TIMCustomElem"
        } ]);
        console.log("msg====", e);
        var c = this, u = c.data.card_id, l = a.getUid(), g = c.data.msgs || [];
        e.getSession().type();
        var m = o.Tool.formatTimeStamp(e.getTime()), p = "im" + new Date().getTime();
        if (e) {
            var h = {
                MsgTime: m,
                MsgBody: n,
                from: u,
                to: l,
                style: "",
                uuid: p
            };
            g.push(h), console.log("消息为====", h), c.setData({
                msgs: c.data.msgs
            }), setTimeout(function() {
                c.setData({
                    toView: c.data.msgs[c.data.msgs.length - 1].uuid
                });
            }, 100);
        }
    },
    sendMessage: function() {
        var e = this, t = e.data.card_id, a = e.data.uid, o = e.data.fromUser, n = e.data.toUser, i = e.data.msgContent, d = e.data.msgs || [];
        if (i.replace(/^\s*|\s*$/g, "")) {
            var r = e.getTime(), u = "im" + new Date().getTime();
            s.onSendMsg(i, function(s) {
                console.log(s);
                var i = s.elems.map(function(e) {
                    return {
                        MsgContent: e.content.text || e.content.data,
                        MsgType: e.type
                    };
                }), l = {
                    MsgTime: r,
                    MsgBody: i,
                    style: "self",
                    from: o,
                    to: n,
                    uuid: u
                };
                d.push(l), console.log("消息为====", l), c.G({
                    url: "/apis/home/card.tim/msg",
                    data: {
                        card_id: t,
                        uid: a,
                        message: l
                    },
                    success: function(e) {}
                }), e.setData({
                    msgs: e.data.msgs,
                    msgContent: ""
                }), setTimeout(function() {
                    e.setData({
                        toView: e.data.msgs[e.data.msgs.length - 1].uuid
                    });
                }, 100), e.clearInput();
            });
        }
    },
    sendPic: function(e) {
        var t = this, a = t.data.card_id, s = t.data.uid, n = t.data.fromUser, i = t.data.toUser, d = e.URL_INFO[0].DownUrl, r = t.data.msgs || [], u = {
            MsgTime: t.getTime(),
            MsgBody: [ {
                MsgType: "TIMImageElem",
                MsgContent: d
            } ],
            style: "self",
            from: n,
            to: i,
            uuid: "im" + new Date().getTime()
        };
        r.push(u), console.log("图文消息为====", u), c.G({
            url: "/apis/home/card.tim/msg",
            data: {
                card_id: a,
                uid: s,
                message: u
            },
            success: function(e) {}
        }), t.setData({
            msgs: t.data.msgs,
            msgContent: ""
        }), setTimeout(function() {
            t.setData({
                toView: t.data.msgs[t.data.msgs.length - 1].uuid
            });
        }, 100);
        var l = t.data.selToID, g = new o.Session("image", l, l, "", Math.round(new Date().getTime() / 1e3)), m = new o.Msg(g, !0), p = new o.Msg.Elem.Images(e.File_UUID);
        for (var h in e.URL_INFO) {
            var _, f, w = e.URL_INFO[h];
            switch (w.PIC_TYPE) {
              case 1:
                f = 1;
                break;

              case 2:
                f = 3;
                break;

              case 4:
                f = 2;
            }
            _ = new o.Msg.Elem.Images.Image(f, w.PIC_Size, w.PIC_Width, w.PIC_Height, w.DownUrl), 
            p.addImage(_);
        }
        m.addImage(p), console.log("图片即时消息体", m), o.sendMsg(m, function(e) {
            console.log("图片即时消息发送成功===", e);
        }, function(e) {
            console.log("图片即时消息发送成功====", e);
        });
    },
    bindMessage: function(e) {
        this.setData({
            msgContent: e.detail.value
        });
    },
    _openWxPop: function() {
        this.data.openCopyPop ? this.setData({
            copyStatus: 0,
            openCopyPop: !1
        }) : this.setData({
            copyStatus: 0,
            openCopyPop: !0
        });
    },
    _closeWxPop: function() {
        this.setData({
            copyStatus: 0,
            openCopyPop: !1
        });
    },
    _copyText: function(e, t) {
        var o = this, s = e.currentTarget.dataset, n = s.copyVal, d = s.copySuccess;
        o.setData({
            copyStatus: 1
        }), wx.setClipboardData({
            data: n,
            success: function(e) {
                wx.getClipboardData({
                    success: function(e) {
                        var t;
                        d && i.showOK(d || "复制成功"), t = "/apis/home/card.item/copy_wx", c.P({
                            url: t,
                            data: {
                                id: a.getCardid(),
                                uid: a.getUid()
                            },
                            success: function(e) {
                                1 == e.code && i.showOK(e.msg);
                            }
                        });
                    }
                });
            }
        });
    },
    _callPhone: function(e) {
        var t = e.currentTarget.dataset.phone, o = this.data.card_mobile;
        wx.makePhoneCall({
            phoneNumber: t || o,
            success: function(e) {
                c.P({
                    url: "/apis/home/card.item/call",
                    data: {
                        id: a.getCardid(),
                        uid: a.getUid()
                    },
                    success: function(e) {
                        1 == e.code && i.showOK(e.msg);
                    }
                });
            }
        });
    },
    openEmoji: function() {
        var e = this;
        "emoji_list" == e.data.show ? e.setData({
            showRecordHandler: !1,
            show: "showEmoji",
            view: "scroll_view_change",
            showPanel: ""
        }) : e.setData({
            showRecordHandler: !1,
            show: "emoji_list",
            view: "scroll_view",
            showPanel: ""
        }), setTimeout(function() {
            e.setData({
                toView: e.data.msgs[e.data.msgs.length - 1].uuid
            });
        }, 100);
    },
    focus: function() {},
    cancelEmoji: function() {
        this.setData({
            show: "emoji_list",
            view: "scroll_view",
            showPanel: "",
            openCopyPop: !1,
            copyStatus: 0
        });
    },
    _showPanel: function() {
        var e = this;
        "" == e.data.showPanel ? e.setData({
            showPanel: "showPanel",
            show: "emoji_list",
            view: "scroll_view_change2",
            openCopyPop: !1,
            copyStatus: 0
        }) : e.setData({
            showPanel: "",
            view: "scroll_view"
        }), setTimeout(function() {
            e.setData({
                toView: e.data.msgs[e.data.msgs.length - 1].uuid
            });
        }, 100);
    },
    sendEmoji: function(e) {
        var t = this, a = e.target.dataset.emoji, o = t.data.msgContent + a;
        t.setData({
            msgContent: o
        });
    },
    previewImage: function(e) {
        var t = e.target.dataset.url;
        wx.previewImage({
            urls: [ t ]
        });
    },
    _jumpToCard: function(e) {
        var t = e.currentTarget.dataset.cardid;
        a.setCardid(t), wx.redirectTo({
            url: "/pages/card/index"
        });
    },
    _uploadPic: function(e) {
        var t, a = this;
        t = 1 == e.currentTarget.dataset.type ? [ "album" ] : [ "camera" ], wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: t,
            success: function(e) {
                var t = e.tempFilePaths[0];
                wx.uploadFile({
                    url: "https://yitui.jijiax.com/apis/home/card.core/upload",
                    filePath: t,
                    name: "file",
                    success: function(e) {
                        var t = {
                            File_UUID: "ssssdsd",
                            URL_INFO: [ {
                                PIC_TYPE: 1,
                                PIC_Size: 1e3,
                                PIC_Width: 100,
                                PIC_Height: 100,
                                DownUrl: JSON.parse(e.data).data
                            } ]
                        };
                        a.sendPic(t);
                    }
                });
            }
        });
    },
    changedTouches: null,
    showRecordHandler: function(e) {
        var t = this;
        t.data.showRecordHandler ? t.setData({
            showRecordHandler: !1
        }) : t.setData({
            showRecordHandler: !0,
            show: "emoji_list",
            view: "scroll_view",
            showPanel: ""
        });
    },
    toggleRecordModal: function(e) {
        this.setData({
            recordStatus: this.data.recordStatus == p.HIDE ? p.SHOW : p.HIDE
        });
    },
    toggleWithoutAction: function(e) {
        console.log("toggleWithoutModal 拦截请求不做处理");
    },
    handleRecordingMove: function(e) {
        var t = e.touches[0], a = this.changedTouches;
        this.changedTouches && (this.data.recordStatus == p.SWIPE && a.pageY - t.pageY < 20 && this.setData({
            recordStatus: p.HOLD
        }), this.data.recordStatus == p.HOLD && a.pageY - t.pageY > 20 && this.setData({
            recordStatus: p.SWIPE
        }));
    },
    handleRecording: function(e) {
        var t = this;
        if (console.log("_this.data.isAudioAuth", t.data.isAudioAuth), 0 == t.data.isAudioAuth) return u.stop(), 
        t.setData({
            isAudioAuth: !0
        }), void a.setAudioAuth(!0);
        var o = 0;
        t.changedTouches = e.touches[0], u.onStart(function() {
            console.log("onStart开始录音"), g = setInterval(function() {
                o++, console.log("录音秒数+++", o);
            }, 1e3), t.setData({
                recordStatus: p.HOLD
            });
        }), u.onPause(function() {
            console.log("录音暂停");
        }), u.onStop(function(e) {
            if (t.setData({
                audioSec: o
            }), console.log("录音停止"), clearInterval(g), o < 1) return t.handleRecordingCancel(), 
            void i.showWarn("语音时间太短啦");
            if (o > 59 && i.showWarn("语音时长不能超过1分钟"), t.data.recordStatus == p.RELEASE) return console.log("录音成功，但是用户取消不发送"), 
            i.showWarn("已取消发送"), void t.setData({
                recordStatus: p.HIDE
            });
            var a = e.tempFilePath;
            console.log("微信录音临时文件=====", e), t.uploadRecord(a), t.handleRecordingCancel();
        }), u.onError(function(e) {
            console.log("录音出错====", e.errMsg), "operateRecorder:fail auth deny" == e.errMsg && t.setData({
                isCancel: 1
            });
        }), u.onFrameRecorded(function(e) {
            var t = e.frameBuffer;
            console.log("frameBuffer.byteLength", t.byteLength);
        });
        var s = {
            duration: 6e4,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192e3,
            format: "mp3",
            frameSize: 50
        };
        u.start(s);
    },
    handleRecordingCancel: function() {
        clearInterval(g), this.data.recordStatus == p.SWIPE ? this.setData({
            recordStatus: p.RELEASE
        }) : this.setData({
            recordStatus: p.HIDE
        }), console.log("取消录音"), u.stop();
    },
    _playAudio: function(e) {
        var t = this, a = (t.data.playStatus, t.data.audioUrl), o = e.currentTarget.dataset.url;
        console.log(a, o), t.setData({
            audioUrl: o
        }), "" != a && a == o && (l.stop(), l.offEnded()), l.obeyMuteSwitch = !1, l.src = o, 
        l.play();
    },
    uploadRecord: function(e) {
        var t = this;
        wx.uploadFile({
            url: "https://yitui.jijiax.com/apis/home/card.core/upload",
            filePath: e,
            name: "file",
            success: function(e) {
                var a = JSON.parse(e.data).data;
                console.log("拿到录音真实文件地址===", a), t.sendAudio(a);
            }
        });
    },
    sendAudio: function(e) {
        var t = this, a = t.data.card_id, s = t.data.uid, n = t.data.fromUser, i = t.data.toUser, d = t.data.audioSec, r = {
            type: 100,
            data: e,
            sec: d
        }, u = t.data.msgs || [], l = {
            MsgTime: t.getTime(),
            MsgBody: [ {
                MsgType: "TIMCustomElem",
                MsgContent: r
            } ],
            style: "self",
            from: n,
            to: i,
            uuid: "im" + new Date().getTime()
        };
        u.push(l), console.log("语音消息为====", l), c.G({
            url: "/apis/home/card.tim/msg",
            data: {
                card_id: a,
                uid: s,
                message: l
            },
            success: function(e) {}
        }), t.setData({
            msgs: t.data.msgs,
            msgContent: ""
        }), setTimeout(function() {
            t.setData({
                toView: t.data.msgs[t.data.msgs.length - 1].uuid
            });
        }, 100);
        var g = t.data.selToID, m = t.data.Identifier, p = t.data.user_name, h = e, _ = d.toString(), f = new o.Session("audio", g, g, "", Math.round(new Date().getTime() / 1e3)), w = new o.Msg(f, !0, -1, -1, -1, m, 0, p), v = new o.Msg.Elem.Custom(h, _, "audio");
        w.addCustom(v), console.log("即时消息体=====", w), o.sendMsg(w, function(e) {}, function(e) {
            console.log(e.ErrorInfo);
        });
    },
    _getRecordAuth: function(e) {
        var t = this;
        e.detail.authSetting["scope.record"] ? t.setData({
            isAudioAuth: !0,
            isCancel: 0
        }) : (console.log("没授权"), t.setData({
            isAudioAuth: !1,
            isCancel: 1
        }));
    },
    _getmobile: function(e) {
        var t = this, o = e.detail, s = o.errMsg, n = o.iv, i = o.encryptedData;
        /:ok$/.test(s) && (t.setData({
            hasMobile: 1
        }), c.P({
            url: "/apis/home/user.index/mobile",
            data: {
                iv: n,
                code: i,
                uid: t.data.uid,
                card_id: t.data.card_id
            },
            success: function(e) {
                a.setMobile(e.data.mobile);
            },
            fail: function(e) {}
        }));
    },
    initIM: function(e) {
        var t = this;
        s.init({
            accountMode: m.accountMode,
            accountType: m.accountType,
            sdkAppID: m.sdkappid,
            selType: o.SESSION_TYPE.C2C,
            selToID: t.data.selToID,
            selSess: null
        });
        var a = {
            sdkAppID: m.sdkappid,
            appIDAt3rd: m.sdkappid,
            accountType: m.accountType,
            identifier: t.data.Identifier,
            identifierNick: e.nickName,
            userSig: t.data.UserSig
        }, n = {
            onConnNotify: function(e) {
                switch (e.ErrorCode) {
                  case o.CONNECTION_STATUS.ON:
                    console.log("连接状态正常...");
                    break;

                  case o.CONNECTION_STATUS.OFF:
                    console.log("连接已断开，无法收到新消息，请检查下你的网络是否正常");
                    break;

                  default:
                    console.log("未知连接状态,status=" + e.ErrorCode);
                }
            },
            onMsgNotify: function(e) {
                console.log("接收即时消息====", e);
                var a, s, n = t.data.selToID, i = o.MsgStore.sessMap();
                for (var d in e) (s = e[d]).getSession().id() == n && t._renderMsg(s);
                for (var r in i) n != (a = i[r]).id() && (dateStart || (dateStart = new Date()), 
                updateSessDiv(a.type(), a.id(), a.name(), a.unread()), console.debug(a.id(), a.unread()), 
                dateEnd = new Date());
            }
        }, i = {
            isAccessFormalEnv: !0,
            isLogOn: !1
        };
        s.sdkLogin(a, n, i);
    },
    onShow: function() {
        var e = this;
        l.onPlay(function() {
            console.log("播放中");
        }), l.onEnded(function() {
            console.log("播放结束"), e.setData({
                audioUrl: ""
            });
        }), l.onError(function(e) {
            i.showWarn(e.errMsg);
        }), l.onCanplay(function() {}), l.onPause(function() {
            console.log("暂停中");
        });
    }
}));
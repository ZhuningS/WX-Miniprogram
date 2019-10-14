function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, a) {
            function n(i, o) {
                try {
                    var s = e[i](o), r = s.value;
                } catch (t) {
                    return void a(t);
                }
                if (!s.done) return Promise.resolve(r).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(r);
            }
            return n("next");
        });
    };
}

var a = t(require("../../libs/regenerator-runtime.js")), n = require("../../protocol/io"), i = t(require("../../utils/extend-page")), o = t(require("../../mixins/actions")), s = t(require("../../mixins/logger")), r = t(require("../../mixins/hook")), c = require("./../../utils/util");

Page((0, i.default)({
    data: {
        step: "type",
        title: "",
        description: "",
        cover: "",
        option_type: "single",
        option_content_type: "",
        deadline: void 0,
        is_anonymous: !1,
        options: [ {
            id: 1,
            text: "",
            cover: ""
        }, {
            id: 2,
            text: "",
            cover: ""
        } ],
        moreOptions: !1,
        hasDeadline: !0,
        deadline_value: [ 0, 0, 0, 0, 0 ],
        deadline_display: void 0
    },
    previousPage: null,
    onLoad: function(t) {
        var n = this;
        return e(a.default.mark(function e() {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n.ticket = t.ticket, wx.setNavigationBarTitle({
                        title: "发起" + n.data.config.actions.vote
                    });

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, n);
        }))();
    },
    onShow: function() {
        this.initDeadlinePicker();
    },
    onTapTypeOption: function(t) {
        var e = t.currentTarget.dataset.contentType;
        this.setData({
            option_content_type: e,
            step: "detail"
        });
    },
    onInputTitle: function(t) {
        this.setData({
            title: t.detail.value
        });
    },
    onInputDescription: function(t) {
        this.setData({
            description: t.detail.value
        });
    },
    onTapAddOption: function() {
        var t = this.data.options;
        t.push({
            id: new Date().getTime(),
            text: "",
            cover: ""
        }), this.setData({
            options: t
        });
    },
    onTapDeleteOption: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.options;
        this.data.options.length < 3 ? (a.splice(e, 1), a.push({
            id: new Date().getTime(),
            text: "",
            cover: ""
        })) : a.splice(e, 1), this.setData({
            options: a
        });
    },
    onInputOption: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.id, a = t.detail.value, n = this.data.options;
        n.forEach(function(t) {
            t.id === e && (t.text = String(a));
        }), this.setData({
            options: n
        });
    },
    onTapAddImageOption: function() {
        var t = this, e = this.data.options;
        wx.chooseImage({
            count: 1,
            success: function(a) {
                console.log("choose image success", a.tempFilePaths[0]), e.push({
                    id: new Date().getTime(),
                    text: "",
                    cover: a.tempFilePaths[0]
                }), t.setData({
                    options: e
                });
            }
        });
    },
    onTapResetImageOption: function(t) {
        var e = this, a = t.currentTarget.dataset.id, n = this.data.options;
        wx.chooseImage({
            count: 1,
            success: function(t) {
                console.log("choose image success", t.tempFilePaths[0]), n.forEach(function(i) {
                    i.id === a && (i.cover = t.tempFilePaths[0]), e.setData({
                        options: n
                    });
                });
            }
        });
    },
    onTapMoreOptions: function() {
        this.setData({
            moreOptions: !this.data.moreOptions
        });
    },
    onTapMultiOptions: function() {
        console.log("tap multi options"), "single" === this.data.option_type ? (console.log("single"), 
        this.setData({
            option_type: "multi"
        })) : (console.log("multi"), this.setData({
            option_type: "single"
        }));
    },
    onTapAnonymous: function() {
        this.setData({
            is_anonymous: !this.data.is_anonymous
        });
    },
    initDeadlinePicker: function() {
        var t = this, e = new Date(), a = new Date(e.getTime() + 2592e5), n = e.getFullYear();
        this.years = [];
        for (var i = n; i <= n + 2; i++) this.years.push(i);
        this.months = [];
        for (var o = 1; o <= 12; o++) this.months.push(o);
        var s = a.getMonth() + 1;
        if (this.days = [], [ 1, 3, 5, 7, 8, 10, 12 ].indexOf(s) > -1) for (var r = 1; r <= 31; r++) this.days.push(r); else if ([ 4, 6, 9, 11 ].indexOf(s) > -1) for (var u = 1; u <= 30; u++) this.days.push(u); else if (2 === s) for (var d = 1; d <= 28; d++) this.days.push(d);
        this.hours = [];
        for (var l = 0; l <= 23; l++) this.hours.push(l);
        this.minutes = [ "00", "10", "20", "30", "40", "50" ], this.setData({
            calendar: [ this.years.map(function(t) {
                return t + "年";
            }), this.months.map(function(t) {
                return t + "月";
            }), this.days.map(function(t) {
                return t + "日";
            }), this.hours.map(function(t) {
                return t + "点";
            }), this.minutes.map(function(t) {
                return t + "分";
            }) ]
        }, function() {
            var e = [ a.getFullYear() - n, a.getMonth(), a.getDate() - 1, a.getHours(), Math.floor(a.getMinutes() / 10) ], i = t.years[e[0]], o = t.months[e[1]], s = t.days[e[2]], r = t.hours[e[3]], u = t.minutes[e[4]];
            a = new Date(i, o - 1, s, r, u), t.setData({
                deadline_value: e,
                deadline: a.getTime(),
                deadline_display: (0, c.formatDeadlineString)(a),
                multiIndex: e
            });
        });
    },
    onChangePicker: function(t) {
        console.log("on change picker", t);
        var e = t.detail.value, a = this.years[e[0]], n = this.months[e[1]], i = this.days[e[2]], o = this.hours[e[3]], s = this.minutes[e[4]], r = new Date(a, n - 1, i, o, s);
        r < new Date().getTime() ? this.showModalDialog(void 0, "", "不可设置早于现在的时间", "知道了", void 0) : this.setData({
            deadline_display: (0, c.formatDeadlineString)(r),
            deadline: r.getTime()
        });
    },
    onChangeColumn: function(t) {
        if (console.log("on change column", t), 1 === t.detail.column) {
            this.days = [];
            var e = t.detail.value + 1;
            if ([ 1, 3, 5, 7, 8, 10, 12 ].indexOf(e) > -1) for (var a = 1; a <= 31; a++) this.days.push(a); else if ([ 4, 6, 9, 11 ].indexOf(e) > -1) for (var n = 1; n <= 30; n++) this.days.push(n); else if (2 === e) for (var i = 1; i <= 28; i++) this.days.push(i);
            this.data.calendar[2].length !== this.days.length && (this.data.calendar.splice(2, 1, this.days.map(function(t) {
                return t + "日";
            })), this.setData({
                calendar: this.data.calendar
            }));
        }
    },
    onSubmitVote: function() {
        var t = this;
        return e(a.default.mark(function e() {
            var n, i, o, s;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = function() {
                        if (!t.data.title) throw "请输入标题";
                        if ("text" === t.data.option_content_type) {
                            for (var e = 0; e < t.data.options.length; e++) if (!t.data.options[e].text) throw "请补充选项 " + (e + 1) + " ";
                        } else for (var a = 0; a < t.data.options.length; a++) if (!t.data.options[a].cover) throw "请配置第" + (a + 1) + "个选项";
                    }, e.prev = 1, n(), i = void 0, "image" !== t.data.option_content_type) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 7, t.uploadImages();

                  case 7:
                    (i = e.sent).forEach(function(t) {
                        t.cover = t.url, delete t.url;
                    }), e.next = 12;
                    break;

                  case 11:
                    i = t.data.options;

                  case 12:
                    return t.voteOptions = i, e.next = 15, t.createVote();

                  case 15:
                    o = e.sent, console.log("vote 创建成功", o), getApp().transfer().callback(t.ticket, o.data.events[0].vote), 
                    t.ticket = void 0, wx.navigateBack(), e.next = 28;
                    break;

                  case 22:
                    e.prev = 22, e.t0 = e.catch(1), console.log("post failed", e.t0), s = "未知错误，请重试", 
                    "string" == typeof e.t0 ? s = e.t0 : e.t0.data && (s = e.t0.data.errorMessage), 
                    t.showModalDialog(void 0, "", s, "知道了", void 0);

                  case 28:
                    return e.prev = 28, wx.hideLoading(), e.finish(28);

                  case 31:
                  case "end":
                    return e.stop();
                }
            }, e, t, [ [ 1, 22, 28, 31 ] ]);
        }))();
    },
    selectImage: function() {
        var t = this, e = this.data.selectedImages.length;
        wx.chooseImage({
            count: 9 - e,
            success: function(e) {
                t.setData({
                    selectedImages: t.data.selectedImages.concat(e.tempFilePaths)
                }), console.log("choose image", e);
            }
        });
    },
    unselectImage: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.selectedImages.splice(e, 1), this.setData({
            selectedImages: this.data.selectedImages
        });
    },
    uploadImages: function() {
        var t = this;
        return e(a.default.mark(function e() {
            var n, i, o, s, r, c, u, d, l, p, h;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (n = [], i = [], o = [], (s = JSON.parse(JSON.stringify(t.data.options))).forEach(function(t) {
                        t.cover && o.push(t);
                    }), console.log("scan images", o), r = [], c = !0, u = !1, d = void 0, e.prev = 10, 
                    l = o[Symbol.iterator](); !(c = (p = l.next()).done); c = !0) h = p.value, r.push(t.uploadImage(h, n, i));
                    e.next = 18;
                    break;

                  case 14:
                    e.prev = 14, e.t0 = e.catch(10), u = !0, d = e.t0;

                  case 18:
                    e.prev = 18, e.prev = 19, !c && l.return && l.return();

                  case 21:
                    if (e.prev = 21, !u) {
                        e.next = 24;
                        break;
                    }
                    throw d;

                  case 24:
                    return e.finish(21);

                  case 25:
                    return e.finish(18);

                  case 26:
                    return e.next = 28, Promise.all(r);

                  case 28:
                    if (console.log("upload images", o, i), !(i.length > 0)) {
                        e.next = 31;
                        break;
                    }
                    throw "部分图片无法上传，请重试";

                  case 31:
                    return e.abrupt("return", o);

                  case 32:
                  case "end":
                    return e.stop();
                }
            }, e, t, [ [ 10, 14, 18, 26 ], [ 19, , 21, 25 ] ]);
        }))();
    },
    uploadImage: function(t, i, o) {
        var s = this;
        return e(a.default.mark(function e() {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e, a) {
                        var i = {
                            file: t.cover,
                            callback: function(n, i) {
                                console.log("upload image", n, i), "success" === n ? (t.url = "http://statics01.qingmang.mobi/" + i.key, 
                                e()) : (o.push(s.file), a(new Error("图片上传失败")));
                            }
                        };
                        i.task = n.upload.upload(t.cover, i.callback);
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, s);
        }))();
    },
    createVote: function() {
        var t = this;
        return e(a.default.mark(function e() {
            var i;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, wx.showLoading(), e.next = 4, n.api.post("v1/post.vote.create", {
                        title: t.data.title,
                        description: t.data.description,
                        cover: t.cover,
                        option_type: t.data.option_type,
                        option_content_type: t.data.option_content_type,
                        deadline: t.data.deadline,
                        is_anonymous: t.data.is_anonymous,
                        options: JSON.stringify(t.voteOptions)
                    });

                  case 4:
                    return i = e.sent, e.abrupt("return", i);

                  case 6:
                    return e.prev = 6, wx.hideLoading(), e.finish(6);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, t, [ [ 0, , 6, 9 ] ]);
        }))();
    }
}, o.default, s.default, r.default));
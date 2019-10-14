function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var o, e = t(require("../../../utils/plugUtil")), i = require("../../../utils/data"), n = t(require("../../../utils/util")), s = (require("../../../utils/functionData"), 
getApp(), require("../../../utils/requestUtil")), r = require("../../../utils/data"), u = require("../../../wxParse/wxParse.js"), c = [], d = "play_info";

Page((o = {
    timeId: 0,
    palyUrl: "",
    data: {
        src: "",
        continue_read: !1,
        single_read: "single",
        playStatus: 0,
        stepTime: "00:00",
        durationTime: "00:00",
        progress: "0",
        to_vip: "month",
        write_msg: !1,
        zanshang_show: !1,
        message: "",
        info_data: [],
        article_good_count: "",
        comment_list: [],
        id: "",
        typeid: "",
        title: "",
        page: 1,
        c_page_size: 1,
        c_page_num: 5,
        is_load_more: !0,
        readnum: "",
        is_avAutoPlay: 0,
        jindu: 0,
        isToplay: !1,
        isEnd: !1,
        iszan: 0,
        is_collection: !1,
        is_otherShang: !1,
        tabOffsetTop: "",
        isPackGoods: !1
    },
    onLoad: function(t) {
        var a = this, o = t.id;
        this.setData({
            id: o
        }), s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getReadnum.html", {
            id: o
        }, function(t) {
            a.setData({
                readnum: t
            });
        }, this, {}), c = t, this.setData({
            is_load_more: !0,
            c_page_size: 1,
            info_data: []
        }), this.getArticleInfo(), wx.onBackgroundAudioStop(this.onStop), wx.getBackgroundAudioPlayerState({
            success: function(o) {
                var e = wx.getStorageSync(d);
                o.dataUrl;
                e && 1 == o.status && t.id == e.id && a.startProgressListener();
            }
        }), this.isHaveLinkAddon();
    },
    onShow: function() {},
    onUnload: function() {
        this.stopProgressListener();
    },
    startProgressListener: function() {
        var t = this, a = function() {
            wx.getBackgroundAudioPlayerState({
                success: t.onProgressUpdate
            });
        };
        this.timeId = setInterval(a, 250), a();
    },
    stopProgressListener: function() {
        clearInterval(this.timeId);
    },
    onProgressUpdate: function(t) {
        if (1 == t.status) {
            this.playUrl = t.dataUrl;
            var a = t.currentPosition, o = t.duration, e = Math.floor(a / 60), i = Math.floor(a % 60), n = Math.floor(o / 60), s = Math.floor(o % 60), r = {
                stepTime: (e < 10 ? "0" + e : e) + ":" + (i < 10 ? "0" + i : i),
                durationTime: (n < 10 ? "0" + n : n) + ":" + (s < 10 ? "0" + s : s),
                progress: a / o * 100,
                downloadPercent: t.downloadPercent
            };
            0 != t.status && 1 != t.status || (r.playStatus = t.status), this.setData(r);
        }
    },
    onTogglePlayTap: function(t) {
        var a = this;
        if (a.data.playStatus) wx.pauseBackgroundAudio({
            success: a.onPause,
            fail: function(t) {
                wx.showModal({
                    content: "暂停失败：" + t.errMsg,
                    showCancel: !1
                });
            }
        }); else {
            var o = wx.getStorageSync(d);
            a.playUrl != o.path && wx.stopBackgroundAudio(), wx.playBackgroundAudio({
                dataUrl: a.data.info_data.c_info.upurl,
                complete: a.onPlay
            });
        }
    },
    onPlay: function() {
        this.setData({
            playStatus: 1
        }), wx.setStorageSync(d, {
            id: this.data.id,
            path: this.data.info_data.c_info.upurl
        }), this.startProgressListener();
    },
    onPause: function() {
        this.setData({
            playStatus: 0
        }), this.stopProgressListener();
    },
    onStop: function(t) {
        this.setData({
            playStatus: 0
        }), this.stopProgressListener(), wx.removeStorageSync(d), wx.getBackgroundAudioPlayerState({
            success: this.onProgressUpdate
        });
    },
    getArticleInfo: function(t) {
        var a = this, o = this;
        t = t || !1;
        var e = c.id, i = c.typeid, n = o.data.comment_list, l = {};
        l.id = e, l.typeid = i, l.pagesize = o.data.c_page_size, l.pagenum = o.data.c_page_num, 
        l.is_pay_edition = 1, l.free_is_fwb = 1, s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getArticleInfo.html", l, function(t) {
            if (o.setData({
                info_data: t,
                article_good_count: t.c_info.good_count,
                id: t.c_info.id,
                typeid: t.c_info.typeid,
                title: t.c_info.title,
                is_avAutoPlay: t.pddata.is_avAutoPlay,
                iszan: t.c_info.iszan,
                is_collection: t.c_info.is_collection
            }), null == t.comment || "" == t.comment ? o.setData({
                is_load_more: !1
            }) : (t.comment.length < o.data.c_page_num && o.setData({
                is_load_more: !1
            }), 1 == o.data.c_page_size ? o.setData({
                comment_list: t.comment
            }) : (n = n.concat(t.comment), o.setData({
                comment_list: n
            }))), u.wxParse("freeinfo", "html", t.c_info.free_info, o), u.wxParse("content", "html", t.c_info.content, o), 
            1 == o.data.is_avAutoPlay && 2 == o.data.typeid && 1 == o.data.info_data.pddata.is_userpay) {
                var e = wx.getStorageSync(d);
                o.data.info_data.c_info.upurl != e.path && (wx.stopBackgroundAudio(), wx.playBackgroundAudio({
                    dataUrl: o.data.info_data.c_info.upurl,
                    complete: o.onPlay
                }));
            } else 2 == o.data.typeid ? (wx.onBackgroundAudioStop(a.onStop), wx.getBackgroundAudioPlayerState({
                success: function(t) {
                    var o = wx.getStorageSync(d);
                    t.dataUrl;
                    o && 1 == t.status && c.id == o.id && a.startProgressListener();
                }
            })) : wx.stopBackgroundAudio();
        }, this, {
            completeAfter: wx.stopPullDownRefresh,
            isShowLoading: t
        });
    },
    onPullDownRefresh: function() {
        var t = this;
        t.setData({
            c_page_size: 1,
            is_load_more: !0
        }), t.getArticleInfo();
    },
    onReachBottom: function() {
        var t = this;
        if (0 == t.data.is_load_more) return wx.hideNavigationBarLoading(), !1;
        t.setData({
            c_page_size: ++t.data.c_page_size
        }), t.getArticleInfo(!0);
    },
    videoErrorCallback: function(t) {
        console.log("视频错误信息:" + t.detail.errMsg);
    },
    toPlay: function() {
        this.setData({
            isToplay: !0
        });
    },
    onTimejindu: function(t) {
        var a = t.detail.currentTime, o = t.detail.duration, e = parseInt(a / o * 100);
        this.setData({
            jindu: e,
            isToplay: !1
        });
    },
    toZan: function(t) {
        var a = this, o = t.currentTarget.id;
        s.post(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/toDianzanArticle.html", {
            cid: o
        }, function(t) {
            1 == t.status ? a.setData({
                article_good_count: ++a.data.article_good_count,
                iszan: 1
            }) : wx.showToast({
                title: t.infos,
                icon: "loading",
                duration: 2e3
            });
        }, this, {});
    },
    toCateList: function(t) {
        var a = t.currentTarget.dataset.url, o = t.currentTarget.dataset.param, e = "" == o ? a : a + "?" + o;
        1 == i.duoguan_app_is_superhome ? wx.navigateTo({
            url: e,
            fail: function(t) {
                wx.reLaunch({
                    url: e
                });
            }
        }) : wx.reLaunch({
            url: e
        });
    },
    toKeywordList: function(t) {
        var a = t.currentTarget.dataset.url, o = t.currentTarget.dataset.param, e = "" == o ? a : a + "?" + o;
        1 == i.duoguan_app_is_superhome ? wx.navigateTo({
            url: e,
            fail: function(t) {
                wx.reLaunch({
                    url: e
                });
            }
        }) : wx.reLaunch({
            url: e
        });
    },
    onNavigateTap: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.url
        });
    },
    updateTabOffsetTop: function() {
        var t = this, a = wx.createSelectorQuery();
        a.select("#comment").boundingClientRect(), a.selectViewport().scrollOffset(), a.exec(function(a) {
            console.log(a), a[0] && a[1] && (a[1].scrollTop > 0 ? a[0].top > 0 ? t.tabOffsetTop = a[1].scrollTop + a[0].top : t.tabOffsetTop = a[1].scrollTop - Math.abs(a[0].bottom) + 2 * a[0].height : t.tabOffsetTop = a[0].top, 
            t.setData({
                tabOffsetTop: t.tabOffsetTop
            }));
        });
    },
    write_msg: function() {
        this.setData({
            write_msg: !0
        });
    },
    toClose: function(t) {
        this.setData({
            write_msg: !1
        });
    },
    toSubmit: function(t) {
        var a = this, o = this, e = o.data.info_data.c_info.id, i = o.data.info_data.c_info.title, n = {
            content: t.detail.value,
            cid: e,
            ctitle: i
        };
        s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/getUserTBstatus.html", {}, function(t) {
            0 == t ? a.onSyncWechatInfo(n) : o.toComment(n);
        }, this, {});
    },
    toComment: function(t) {
        var a = this;
        s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/toComment.html", t, function(t) {
            wx.showToast({
                title: t,
                icon: "loading",
                duration: 2e3
            }), a.setData({
                write_msg: !1,
                is_load_more: !0,
                c_page_size: 1,
                c_page_num: 5
            }), a.getArticleInfo();
        }, this, {});
    },
    toDianzan: function(t) {
        var a = this, o = t.currentTarget.id;
        s.post(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/toDianzanComment.html", {
            pid: o
        }, function(t) {
            1 == t.status ? a.setData({
                comment_list: t.comment
            }) : wx.showToast({
                title: t.infos,
                icon: "loading",
                duration: 2e3
            });
        }, this, {});
    },
    toIndex: function(t) {
        var a = "/pages/bigcms/index/index";
        wx.switchTab({
            url: a,
            fail: function(t) {
                1 == i.duoguan_app_is_superhome ? wx.switchTab({
                    url: i.duoguan_app_index_path,
                    fail: function(t) {
                        wx.navigateTo({
                            url: a
                        });
                    }
                }) : wx.navigateTo({
                    url: a
                });
            }
        });
    },
    toCollection: function(t) {
        var a = this;
        console.log(t);
        var o = t.currentTarget.id;
        s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/toCollection.html", {
            cid: o
        }, function(t) {
            1 == t.status ? a.setData({
                is_collection: !0
            }) : a.setData({
                is_collection: !1
            }), wx.showToast({
                title: t.infos,
                icon: "loading",
                duration: 2e3
            });
        }, this, {});
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.title,
            desc: "",
            path: "/pages/bigcms/article/article?id=" + t.data.id + "&typeid=" + t.data.typeid,
            success: function() {
                e.default.share();
            }
        };
    },
    commentLocation: function(t) {
        this.data.write_msg ? (this.setData({
            write_msg: !1,
            is_show_linkgoods: !1
        }), wx.pageScrollTo({
            scrollTop: 0
        })) : (this.setData({
            write_msg: !0,
            is_show_linkgoods: !1
        }), this.updateTabOffsetTop());
    }
}, a(o, "updateTabOffsetTop", function() {
    var t = this, a = wx.createSelectorQuery();
    a.select("#comment").boundingClientRect(), a.selectViewport().scrollOffset(), a.exec(function(a) {
        a[0] && a[1] && (a[1].scrollTop > 0 ? a[0].top > 0 ? t.tabOffsetTop = a[1].scrollTop + a[0].top : t.tabOffsetTop = a[1].scrollTop - Math.abs(a[0].bottom) + 2 * a[0].height : t.tabOffsetTop = a[0].top, 
        t.setData({
            tabOffsetTop: t.tabOffsetTop
        }), wx.pageScrollTo({
            scrollTop: t.data.tabOffsetTop
        }));
    });
}), a(o, "getCode", function(t) {
    var a = this, o = a.data.id, e = a.data.typeid, i = r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/FXCode.html&id=" + o + "&typeid=" + e + "&token=" + r.duoguan_user_token + "&_r=" + new Date().getTime();
    wx.showToast({
        title: "正在努力加载中...",
        icon: "loading",
        duration: 1e4
    }), wx.getImageInfo({
        src: i,
        success: function(t) {
            console.log(t.path), wx.hideToast(), wx.previewImage({
                current: t.path,
                urls: [ t.path ]
            });
        },
        fail: function(t) {
            console.error(t), wx.showModal({
                content: "加载失败！",
                showCancel: !1
            }), wx.hideToast();
        },
        complete: function(t) {
            console.log(t);
        }
    });
}), a(o, "continue_read", function() {
    this.setData({
        continue_read: !this.data.continue_read
    });
}), a(o, "toCloseRead", function() {
    this.setData({
        continue_read: !1
    });
}), a(o, "single_read_change", function() {
    this.setData({
        single_read: "single"
    });
}), a(o, "to_vip_change", function() {
    this.setData({
        single_read: "to_vip"
    });
}), a(o, "to_vip_month", function() {
    this.setData({
        to_vip: "month"
    });
}), a(o, "to_vip_quarter", function() {
    this.setData({
        to_vip: "quarter"
    });
}), a(o, "to_vip_year", function() {
    this.setData({
        to_vip: "year"
    });
}), a(o, "formArticlePay", function(t) {
    var a = this, o = t.target.id, e = t.currentTarget.dataset.money;
    s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/PayTypeApi/makePay.html", {
        cid: o,
        money: e
    }, function(t) {
        wx.requestPayment({
            timeStamp: t.timeStamp,
            nonceStr: t.nonceStr,
            package: t.package,
            signType: "MD5",
            paySign: t.paySign,
            success: function(t) {
                console.log("支付成功"), a.setData({
                    continue_read: !1
                }), a.getArticleInfo();
            },
            fail: function(t) {
                console.log("支付失败");
            },
            complete: function(t) {}
        });
    }, this, {});
}), a(o, "zanshang_show", function() {
    this.setData({
        zanshang_show: !0
    });
}), a(o, "shangMoney", function(t) {
    var a = t.target.dataset.name;
    console.log(a);
}), a(o, "otherShangMoney", function() {
    this.setData({
        is_otherShang: !0
    });
}), a(o, "closeOther", function() {
    this.setData({
        is_otherShang: !1,
        zanshang_show: !1
    });
}), a(o, "toCloseShang", function() {
    this.setData({
        zanshang_show: !1
    });
}), a(o, "onSyncWechatInfo", function(t) {
    var a = this, o = this;
    n.default.getUserInfo(function(e) {
        a.syncWechatInfoId = s.post(i.duoguan_user_info_post_url, {
            nickname: e.nickName,
            headimgurl: e.avatarUrl,
            sex: e.gender,
            city: e.city,
            province: e.province,
            country: e.country,
            language: e.language
        }, function(a) {
            o.toComment(t);
        });
    });
}), a(o, "isHaveLinkAddon", function() {
    var t = this, a = this.data.id;
    s.get(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/isParkLinkAddon.html", {
        cmsid: a,
        park_version: i.duoguan_config_version,
        is_super: i.duoguan_app_is_superhome
    }, function(a) {
        1 == a ? t.setData({
            isPackGoods: !0
        }) : t.setData({
            isPackGoods: !1
        });
    }, this, {});
}), a(o, "toLookGoods", function(t) {
    var a = this, o = t.currentTarget.dataset.goodsid, e = a.data.id;
    s.post(r.duoguan_host_api_url + "/index.php?s=/addon/DuoguanBigCms/Api/toSeeLinkGoods.html", {
        cmsid: e,
        goodsid: o
    }, function(t) {
        wx.navigateTo({
            url: t.path,
            success: function(t) {},
            fail: function(t) {
                wx.showModal({
                    content: "抱歉！您的小程序未打包相关好物模块，无法去查看",
                    showCancel: !1
                });
            }
        });
    }, this, {});
}), a(o, "toShowLink", function() {
    this.setData({
        is_show_linkgoods: !0,
        write_msg: !1
    });
}), a(o, "toCloseShowLink", function() {
    this.setData({
        is_show_linkgoods: !1,
        write_msg: !1
    });
}), o));
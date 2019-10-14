var t = getApp(), e = (require("../../../../utils/functionData"), require("../../../../utils/requestUtil")), o = require("../../../../utils/data");

Page({
    data: {
        score_arr: [ {
            val: 1,
            ischeck: !0
        }, {
            val: 2,
            ischeck: !1
        }, {
            val: 3,
            ischeck: !1
        }, {
            val: 4,
            ischeck: !1
        }, {
            val: 5,
            ischeck: !1
        } ],
        this_order_id: 0,
        submitIsLoading: !1,
        buttonIsDisabled: !1,
        this_score_val: 1
    },
    onLoad: function(t) {
        var e = this, o = t.order_id;
        e.setData({
            this_order_id: o
        });
    },
    formSubmit: function(t) {
        var i = this, a = t.detail.value.content;
        if (i.setData({
            submitIsLoading: !0,
            buttonIsDisabled: !0
        }), "" == a) return wx.showModal({
            title: "提示",
            content: "对不起，请输入留言内容",
            showCancel: !1
        }), i.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        }), !1;
        var s = o.duoguan_host_api_url + "/index.php?s=/addon/DuoguanTuan/OrderApi/postComment", n = {
            token: o.duoguan_user_token,
            utoken: wx.getStorageSync("utoken"),
            oid: i.data.this_order_id,
            fval: i.data.this_score_val,
            fcon: a,
            _: Date.now()
        };
        e.get(s, n, function(t) {
            console.log(t), wx.showToast({
                title: t,
                icon: "success",
                duration: 1500,
                complete: function(t) {
                    wx.navigateTo({
                        url: "../../tuan/list/index"
                    });
                }
            });
        });
    },
    initpostCommentOrderData: function(e) {
        var o = this;
        if (o.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        }), 1 == e.code) wx.showModal({
            title: "提示",
            content: "订单评论成功",
            showCancel: !1,
            success: function(t) {
                wx.redirectTo({
                    url: "../list/index"
                });
            }
        }); else if (2 == e.code) wx.showToast({
            title: "登陆中",
            icon: "loading",
            duration: 1e4,
            success: function() {
                t.getNewToken(function(t) {
                    o.setData({
                        local_global_token: t
                    }), wx.redirectTo({
                        url: "../comment/index?order_id=" + o.data.this_order_id
                    });
                });
            }
        }); else if (5 == e.code) return wx.showModal({
            title: "提示",
            content: e.info,
            showCancel: !1
        }), !1;
    },
    set_score_bind: function(t) {
        for (var e = this, o = t.currentTarget.id, i = e.data.score_arr, a = 0; a < i.length; a++) i[a].ischeck = a < o;
        e.setData({
            score_arr: i,
            this_score_val: o
        });
    }
});
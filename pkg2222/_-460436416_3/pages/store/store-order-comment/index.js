var t = require("../../../utils/requestUtil"), i = require("../../../utils/data");

getApp();

Page({
    data: {
        score_arr: [ {
            val: 1,
            ischeck: !0
        }, {
            val: 2,
            ischeck: !0
        }, {
            val: 3,
            ischeck: !0
        }, {
            val: 4,
            ischeck: !0
        }, {
            val: 5,
            ischeck: !0
        } ],
        this_order_id: 0,
        oinfo: [],
        glo_is_load: !0,
        img_count_limit: 5,
        this_img_i: 0,
        this_img_max: 0,
        postimg: [],
        submitIsLoading: !1,
        buttonIsDisabled: !1,
        this_score_val: 5
    },
    onLoad: function(t) {
        var i = this, a = t.oid;
        i.setData({
            this_order_id: a
        }), i.getOrderInfo();
    },
    getOrderInfo: function() {
        var a = this;
        t.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/getOrderInfo.html", {
            oid: a.data.this_order_id
        }, function(t) {
            a.setData({
                oinfo: t,
                glo_is_load: !1
            }), wx.hideToast();
        });
    },
    set_score_bind: function(t) {
        for (var i = this, a = t.currentTarget.id, e = i.data.score_arr, o = 0; o < e.length; o++) e[o].ischeck = o < a;
        i.setData({
            score_arr: e,
            this_score_val: a
        });
    },
    del_pic_bind: function(t) {
        var i = this, a = t.currentTarget.id, e = i.data.postimg;
        e.splice(a, 1), i.setData({
            postimg: e
        });
    },
    chooseimg_bind: function() {
        var t = this, i = t.data.postimg.length, a = t.data.img_count_limit - i;
        if (a <= 0) return wx.showModal({
            title: "提示",
            content: "对不起，最多可上传五张图片",
            showCancel: !1
        }), !1;
        wx.chooseImage({
            count: a,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                t.setData({
                    postimg: t.data.postimg.concat(i.tempFilePaths)
                });
            }
        });
    },
    formSubmit: function(t) {
        var i = this;
        t.detail.value;
        i.setData({
            buttonIsDisabled: !0,
            submitIsLoading: !0
        }), i.makeComment(t);
    },
    makeComment: function(a) {
        var e = this;
        t.get(i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/postComment.html", {
            oid: e.data.this_order_id,
            fval: e.data.this_score_val,
            fcon: a.detail.value.post_content
        }, function(t) {
            var i = t, a = e.data.postimg;
            a.length > 0 ? (e.setData({
                this_img_max: a.length,
                this_comment_id: i
            }), wx.showToast({
                title: "图片上传中",
                icon: "loading",
                duration: 1e4
            }), e.imgUploadTime()) : (wx.hideToast(), wx.showModal({
                title: "提示",
                content: "评价成功",
                showCancel: !1,
                success: function(t) {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }));
        }, {
            complete: e.makeCommentComplete()
        });
    },
    makeCommentComplete: function() {
        this.setData({
            buttonIsDisabled: !1,
            submitIsLoading: !1
        });
    },
    imgUploadTime: function() {
        var t = this, a = t.data.this_img_i;
        a < t.data.this_img_max ? wx.uploadFile({
            url: i.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/imgUpload.html",
            filePath: t.data.postimg[a],
            name: "file",
            formData: {
                token: i.duoguan_user_token,
                utoken: wx.getStorageSync("utoken"),
                pid: t.data.this_comment_id
            },
            success: function(i) {
                console.log("上传成功"), t.initImgUploadData(i.data);
            },
            fail: function(t) {
                console.log("上传失败"), console.log(t);
            }
        }) : (wx.hideToast(), wx.showModal({
            title: "提示",
            content: "评价成功",
            showCancel: !1,
            success: function(t) {
                wx.navigateBack({
                    delta: 1
                });
            }
        }));
    },
    initImgUploadData: function(t) {
        var i = this;
        i.setData({
            this_img_i: i.data.this_img_i + 1
        }), i.imgUploadTime();
    },
    goods_zan_bind: function(t) {
        t.currentTarget.id;
    }
});
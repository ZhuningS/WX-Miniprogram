getApp();

var t = require("../../../utils/requestUtil"), e = require("../../../utils/data");

Page({
    data: {
        submitIsLoading: !1,
        buttonIsDisabled: !1,
        store_logo: [],
        store_imgs: [],
        zizhi_imgs: [],
        img_count_limit: 5,
        platform_data: [],
        cate_select: -1,
        store_cates: [],
        open_btime: "00:00",
        open_etime: "23:59",
        multiArray: [],
        multiIndex: [ -1, -1 ],
        regionData: [],
        regionArray: [],
        regionIndex: [ -1, -1, -1 ],
        is_checked: !1
    },
    onLoad: function() {
        var t = this;
        t.getStoreConfig(), t.getRegionInfo(), t.getStoreCate();
    },
    getStoreCate: function() {
        var a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getStoreCates.html", {}, function(t) {
            a.data.store_cates = t;
            var e = [];
            e.push(t), t[0] && e.push(t[0].c_cates), a.data.multiArray = e, null != t && t.length > 0 && (a.data.cate_select = 0, 
            a.setData({
                store_cates: t,
                multiArray: e,
                picker_index: a.data.cate_select
            }));
        });
    },
    getRegionInfo: function() {
        var a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/StoreApi/getRegionInfo.html", {}, function(t) {
            a.data.regionData = t;
            var e = t.provinces, i = t.citys, o = (t.districts, a.dealRegionInfo(e[0].REGION_ID, i[0].REGION_ID));
            a.setData({
                regionArray: o
            });
        });
    },
    dealRegionInfo: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = this.data.regionData, i = a.provinces, o = a.citys, n = a.districts;
        if (null == t && null == e) return [ [], [], [] ];
        if (null != t && null == e) {
            r = [];
            for (var s in o) (l = o[s]).PARENT_ID == t && r.push(l);
            d = [];
            for (var s in n) (l = n[s]).PARENT_ID == r[0].REGION_ID && d.push(l);
        } else if (null == t && null != e) {
            t = t;
            for (var s in o) (l = o[s]).REGION_ID == e && (t = l.PARENT_ID);
            r = [];
            for (var s in o) (l = o[s]).PARENT_ID == t && r.push(l);
            d = [];
            for (var s in n) (l = n[s]).PARENT_ID == e && d.push(l);
        } else {
            var r = [];
            for (var s in o) (l = o[s]).PARENT_ID == t && r.push(l);
            var d = [];
            for (var s in n) {
                var l = n[s];
                l.PARENT_ID == e && d.push(l);
            }
        }
        var u = [];
        return u.push(i, r, d), u;
    },
    formSubmit: function(a) {
        var i = this;
        i.setData({
            submitIsLoading: !0,
            buttonIsDisabled: !0
        });
        var o = a.detail.value, n = i.data.platform_data;
        if (parseFloat(n.enter_price) > 0 ? o.store_status = 4 : o.store_status = 0, !o.store_name) return i.showModel("请输入门店名称");
        if (!o.store_con_mobile) return i.showModel("请输入门店电话");
        if (i.data.store_logo.length <= 0) return i.showModel("请上传门店logo");
        if (!o.province_id) return i.showModel("请选择商家地址");
        if (!o.store_gps_lng) return i.showModel("请标注门店坐标");
        if (!o.store_address) return i.showModel("请输入详细地址");
        if (!o["store_open_btime[]"] || !o["store_open_etime[]"]) return i.showModel("请输入营业时间");
        if (!i.data.is_checked) return i.showModel("请阅读入驻协议");
        i.data.store_imgs, i.data.zizhi_imgs;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/storeEnter", o, function(t) {
            if ((i.data.store_logo.length > 0 || i.data.zizhi_imgs.length > 0 || i.data.store_imgs.length > 0) && wx.showToast({
                title: "图片上传中",
                icon: "loading",
                duration: 1e4
            }), i.data.store_logo.length > 0) {
                var e = [];
                e = e.concat(i.data.store_logo), i.syncUploadImgs(e, "store_logo", t.id);
            }
            if (i.data.zizhi_imgs.length > 0) {
                var a = [];
                a = a.concat(i.data.zizhi_imgs), i.syncUploadImgs(a, "store_zizhi", t.id);
            }
            if (i.data.store_imgs.length > 0) {
                var o = [];
                o = o.concat(i.data.store_imgs), i.syncUploadImgs(o, "store_shijing", t.id);
            }
            var n = i.data.platform_data;
            if (parseFloat(n.enter_price) > 0) {
                var s = {};
                s.id = t.id, s.enter_price = n.enter_price, i.makeOrder(s);
            } else wx.showModal({
                title: "提示",
                content: "申请提交成功，请等待审核",
                showCancel: !1,
                success: function(t) {
                    1 == t.confirm && wx.navigateBack(1);
                }
            });
        }, this, {
            isShowLoading: !1,
            completeAfter: function() {
                i.setData({
                    submitIsLoading: !1,
                    buttonIsDisabled: !1
                });
            }
        });
    },
    showModel: function(t) {
        this.setData({
            submitIsLoading: !1,
            buttonIsDisabled: !1
        }), wx.showToast({
            title: t,
            image: "/images/view_hint.png",
            duration: 1e3
        });
    },
    makeOrder: function(a) {
        var i = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/OrderApi/makeEnterOrder.html", {
            oinfo: a
        }, function(t) {
            wx.hideToast(), i.setData({
                btn_submit_disabled: !1,
                submitIsLoading: !1
            }), wx.requestPayment({
                timeStamp: t.timeStamp,
                nonceStr: t.nonceStr,
                package: t.package,
                signType: "MD5",
                paySign: t.paySign,
                success: function(t) {
                    wx.showModal({
                        title: "提示",
                        content: "申请提交成功，请等待审核",
                        showCancel: !1,
                        success: function(t) {
                            1 == t.confirm && wx.navigateBack(1);
                        }
                    });
                },
                fail: function(t) {}
            });
        }, {
            complete: i.makeOrderComplete()
        });
    },
    makeOrderComplete: function() {
        this.setData({
            btn_submit_disabled: !1,
            submitIsLoading: !1
        });
    },
    bindPickerChange: function(t) {
        var e = this, a = t.detail.value, i = a[0], o = a[1], n = e.data.store_cates, s = n[i].c_cates[o], r = e.data.multiIndex;
        if (r[0] = i, r[1] = o, s) d = s.id; else var d = n[i].id;
        e.setData({
            multiIndex: r,
            store_cate_id: d
        });
    },
    bindMultiPickerColumnChange: function(t) {
        var e = this, a = t.detail.column, i = t.detail.value;
        if (0 == a) {
            var o = e.data.multiArray, n = e.data.store_cates;
            o[1] = n[i].c_cates, e.setData({
                multiArray: o
            });
        }
    },
    bindRegionPickerColumnChange: function(t) {
        var e = this, a = t.detail.column, i = t.detail.value, o = (e.data.regionData, e.data.regionIndex), n = (r = e.data.regionArray)[0], s = r[1];
        r[2];
        if (0 == a) {
            o[0] = i, o[1] = 0, o[2] = 0;
            r = e.dealRegionInfo(n[i].REGION_ID);
        } else if (1 == a) {
            o[1] = i, o[2] = 0;
            var r = e.dealRegionInfo(null, s[i].REGION_ID);
        } else o[2] = i;
        e.setData({
            regionIndex: o,
            regionArray: r
        });
    },
    bindRegionChange: function(t) {
        var e = this, a = t.detail.value, i = a[0], o = a[1], n = a[2], s = e.data.regionArray, r = s[0], d = s[1], l = s[2], u = e.data.regionIndex;
        u[0] = i, u[1] = o, u[2] = n, e.setData({
            regionIndex: u,
            province_id: r[i].REGION_ID,
            city_id: d[o].REGION_ID,
            district_id: l[n].REGION_ID
        });
    },
    bindTimeChange: function(t) {
        1 == t.currentTarget.id ? this.setData({
            open_btime: t.detail.value
        }) : this.setData({
            open_etime: t.detail.value
        });
    },
    del_pic_bind: function(t) {
        var e = this, a = t.currentTarget.id;
        if (2 == t.currentTarget.dataset.index) (i = e.data.store_imgs).splice(a, 1), e.setData({
            store_imgs: i
        }); else if (3 == t.currentTarget.dataset.index) {
            var i = e.data.zizhi_imgs;
            i.splice(a, 1), e.setData({
                zizhi_imgs: i
            });
        }
    },
    chooseimg_bind: function(t) {
        var e = this, a = 5, i = t.currentTarget.id;
        if (2 == i ? a = e.data.img_count_limit - e.data.store_imgs.length : 3 == i && (a = e.data.img_count_limit - e.data.zizhi_imgs.length), 
        a <= 0) return wx.showModal({
            title: "提示",
            content: "对不起，最多可上传五张图片",
            showCancel: !1
        }), !1;
        wx.chooseImage({
            count: a,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                1 == i ? (e.data.store_logo.splice(0, e.data.store_logo.length), e.data.store_logo.push(t.tempFilePaths[0]), 
                e.setData({
                    store_logo: e.data.store_logo
                })) : 2 == i ? e.setData({
                    store_imgs: e.data.store_imgs.concat(t.tempFilePaths)
                }) : 3 == i && e.setData({
                    zizhi_imgs: e.data.zizhi_imgs.concat(t.tempFilePaths)
                });
            }
        });
    },
    syncUploadImgs: function(t, a, i) {
        var o = this, n = t.pop();
        wx.uploadFile({
            url: e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/imgUpload.html",
            filePath: n,
            name: "file",
            formData: {
                token: e.duoguan_user_token,
                utoken: wx.getStorageSync("utoken"),
                table_name: "dg_stores",
                parameter: a,
                id: i
            },
            success: function(e) {
                t.length > 0 ? o.syncUploadImgs(t, a, i) : wx.hideToast(), console.log("上传成功");
            },
            fail: function(t) {
                console.log("上传失败");
            }
        });
    },
    getStoreConfig: function() {
        var a = this;
        t.get(e.duoguan_host_api_url + "/index.php?s=/addon/DgStore/Api/getStoreConfig.html", {}, function(t) {
            a.data.platform_data = t, a.setData({
                data: t
            });
        });
    },
    onOpenMapTap: function(t) {
        var e = this;
        wx.chooseLocation({
            success: function(t) {
                e.setData({
                    store_address: t.address,
                    store_gps_lng: t.longitude,
                    store_gps_lat: t.latitude
                });
            }
        });
    },
    readPrototol: function() {
        wx.navigateTo({
            url: "../store-ruzhu-rule/index"
        });
    },
    changeChecked: function() {
        this.setData({
            is_checked: !this.data.is_checked
        });
    }
});
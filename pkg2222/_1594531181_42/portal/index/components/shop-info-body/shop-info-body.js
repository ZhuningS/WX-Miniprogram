var e = require("../../../../core/api.js"), t = require("../../../../utils/enum.js");

Component({
    properties: {
        pageData: {
            type: Object,
            observer: function(e, t) {
                this.onUpdatePageDataV2(e);
            }
        }
    },
    data: {
        promote: Object,
        components: Object
    },
    methods: {
        onUpdatePageData: function(e) {
            if (e) {
                var t = null;
                if (e.components && e.components.length > 0) {
                    t = [];
                    for (var o = 0, i = 0; i < e.components.length; i++) {
                        var a = e.components[i];
                        if (a.type) {
                            if ("OFFICIAL_MALL_SHELF" == a.type) for (var r = {
                                type: "OFFICIAL_MALL_SHELF"
                            }, n = [], p = 0; p < a.shelf_products.length; p++) {
                                var c = a.shelf_products[p];
                                n.push(c), n.length >= 2 && (r.shelf_products = n, t.push(r), r = {
                                    type: "OFFICIAL_MALL_SHELF"
                                }, n = []);
                            } else if ("OFFICIAL_MALL_SINGLE_PRODUCT" == a.type) for (p = 0; p < a.products.length; p++) {
                                var l = {
                                    type: "OFFICIAL_MALL_SINGLE_PRODUCT"
                                };
                                l.product = a.products[p], t.push(l);
                            } else if ("OFFICIAL_MALL_GROUP" == a.type) {
                                var d = [ "http://wxapp.tc.qq.com/204/20304/stodownload?filekey=30350201010421301f020200cc04025348041087b5bd1006f6391bb1311eedce71ee08020301c2b4040d00000004627466730000000131&hy=SH&storeid=32303138303131323033343932333030306163613637623962656361656630326638333230613030303030306363&bizid=1023", "http://wxapp.tc.qq.com/204/20304/stodownload?filekey=30350201010421301f020200cc0402534804103d809e6df89791fded22ab5aa9e6aa6202030249e1040d00000004627466730000000131&hy=SH&storeid=32303138303131323033353033323030306339373662386666616334333130336636333230613030303030306363&bizid=1023", "http://wxapp.tc.qq.com/204/20304/stodownload?filekey=30350201010421301f020200cc0402534804105b27aac39d41d55e9151d73802f0e30b02030255bf040d00000004627466730000000131&hy=SH&storeid=32303138303131323038323734363030303233656365383061336130646630336636333230613030303030306363&bizid=1023" ];
                                a.group_products = a.group_products.map(function(e, t) {
                                    return e.wording1 = e.name || "", e.imgurl = d[t % 3], e;
                                }), t.push(a);
                            } else t.push(a);
                            "OFFICIAL_MALL_MULTI_PRODUCT" == a.type || "OFFICIAL_MALL_GROUP" == a.type ? a.subIndex = o++ : o = 0;
                        }
                    }
                }
                this.setData({
                    promote: e.promote,
                    components: t
                });
            }
        },
        onUpdatePageDataV2: function(e) {
            e && e.components && this.setData({
                components: e.components
            });
        },
        onClickScrollCallback: function(t) {
            var o = t.detail.item;
            if (o && o.jump_type) switch (o.jump_type) {
              case "OFFICIAL_JUMPTYPE_H5":
                if (!o.url_info || !o.url_info.jump_url) return;
                var i = encodeURIComponent(o.url_info.jump_url);
                e.navigateTo && e.navigateTo({
                    url: "/portal/webview/webview?url=" + i
                });
                break;

              case "OFFICIAL_JUMPTYPE_WXAPAGE":
                if (!o.weapp_info || !o.weapp_info.appid) return;
                e.navigateToMiniProgram && e.navigateToMiniProgram({
                    appId: o.weapp_info.appid,
                    path: o.weapp_info.path
                });
                break;

              case "OFFICIAL_JUMPTYPE_WXAPAGE_GROUP":
                if (!o.group_info || !o.group_info.group_id) return;
                var a = o.group_info.group_id, r = encodeURIComponent(o.pic_url || "");
                e.navigateTo && e.navigateTo({
                    url: "/portal/category/category?groupId=" + a + "&groupImgUrl=" + r
                });
                break;

              case "OFFICIAL_JUMPTYPE_WXAPAGE_ITEM_DETAIL":
                if (!o.shelf_info || !o.shelf_info.item_code) return;
                var n = o.shelf_info.item_code;
                this.triggerClickEvent(t.detail.type, [ n ]), e.navigateTo && e.navigateTo({
                    url: "/portal/detail/detail?code=" + n
                });
                break;

              default:
                console.warning("unrecognized jump type, ", o.jump_type);
            }
        },
        onClickGoodsCallback: function(o) {
            var i = o.detail.item;
            if (i && i.shelf_info && i.shelf_info.item_code) {
                var a = i.shelf_info.item_code || "0";
                this.triggerClickEvent(o.detail.type, [ a ]), e.navigateTo({
                    url: "/portal/detail/detail?code=" + a + "&scene=" + t.DetailPageScene.Home
                });
            }
        },
        onClickCategoryCallback: function(t) {
            var o = t.detail.item;
            if (o && o.group_info) {
                var i = o.group_info.group_id || "", a = o.pic_url || "";
                this.triggerClickEvent(t.detail.type, [ i ]), e.navigateTo({
                    url: "/portal/category/category?groupId=" + i + "&groupImgUrl=" + encodeURIComponent(a)
                });
            }
        },
        triggerClickEvent: function(e, t) {
            this.triggerEvent("onclickevent", {
                type: e,
                codes: t
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});
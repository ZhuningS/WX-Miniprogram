function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var o = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function t(i, c) {
                try {
                    var r = o[i](c), m = r.value;
                } catch (e) {
                    return void n(e);
                }
                if (!r.done) return Promise.resolve(m).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(m);
            }
            return t("next");
        });
    };
}

function _classCallCheck(e, o) {
    if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, o) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" != typeof o && "function" != typeof o ? e : o;
}

function _inherits(e, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    e.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, o) {
        for (var n = 0; n < o.length; n++) {
            var t = o[n];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(o, n, t) {
        return n && e(o.prototype, n), t && e(o, t), o;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _core = require("./../../lib/core.js"), _lodashGet = require("./../../lib/lodash.get.js"), _lodashGet2 = _interopRequireDefault(_lodashGet), _com_img = require("./../../components/com_img.js"), _com_img2 = _interopRequireDefault(_com_img), _com_map = require("./../../components/com_map.js"), _com_map2 = _interopRequireDefault(_com_map), _com_form = require("./../../components/com_form.js"), _com_form2 = _interopRequireDefault(_com_form), _com_good = require("./../../components/com_good.js"), _com_good2 = _interopRequireDefault(_com_good), _com_news = require("./../../components/com_news.js"), _com_news2 = _interopRequireDefault(_com_news), _com_icon = require("./../../components/com_icon.js"), _com_icon2 = _interopRequireDefault(_com_icon), _com_logo = require("./../../components/com_logo.js"), _com_logo2 = _interopRequireDefault(_com_logo), _com_live = require("./../../components/com_live.js"), _com_live2 = _interopRequireDefault(_com_live), _com_video = require("./../../components/com_video.js"), _com_video2 = _interopRequireDefault(_com_video), _com_imgnav = require("./../../components/com_imgnav.js"), _com_imgnav2 = _interopRequireDefault(_com_imgnav), _com_slider = require("./../../components/com_slider.js"), _com_slider2 = _interopRequireDefault(_com_slider), _com_search = require("./../../components/com_search.js"), _com_search2 = _interopRequireDefault(_com_search), _com_canvas = require("./../../components/com_canvas.js"), _com_canvas2 = _interopRequireDefault(_com_canvas), _com_bargain = require("./../../components/com_bargain.js"), _com_bargain2 = _interopRequireDefault(_com_bargain), _com_coupons = require("./../../components/com_coupons.js"), _com_coupons2 = _interopRequireDefault(_com_coupons), _com_contact = require("./../../components/com_contact.js"), _com_contact2 = _interopRequireDefault(_com_contact), _com_spacing = require("./../../components/com_spacing.js"), _com_spacing2 = _interopRequireDefault(_com_spacing), _com_richtxt = require("./../../components/com_richtxt.js"), _com_richtxt2 = _interopRequireDefault(_com_richtxt), _com_newsLst = require("./../../components/com_newsLst.js"), _com_newsLst2 = _interopRequireDefault(_com_newsLst), _com_miaoSha = require("./../../components/com_miaoSha.js"), _com_miaoSha2 = _interopRequireDefault(_com_miaoSha), _com_goodList = require("./../../components/com_goodList.js"), _com_goodList2 = _interopRequireDefault(_com_goodList), _com_magicImg = require("./../../components/com_magicImg.js"), _com_magicImg2 = _interopRequireDefault(_com_magicImg), _com_joingroup = require("./../../components/com_joingroup.js"), _com_joingroup2 = _interopRequireDefault(_com_joingroup), _com_bottomnav = require("./../../components/com_bottomnav.js"), _com_bottomnav2 = _interopRequireDefault(_com_bottomnav), _com_joingroup3 = require("./../../components/com_joingroup2.js"), _com_joingroup4 = _interopRequireDefault(_com_joingroup3), _com_goodClassify = require("./../../components/com_goodClassify.js"), _com_goodClassify2 = _interopRequireDefault(_com_goodClassify), _com_signinFloat = require("./../../components/com_signinFloat.js"), _com_signinFloat2 = _interopRequireDefault(_com_signinFloat), _com_couponsFloat = require("./../../components/com_couponsFloat.js"), _com_couponsFloat2 = _interopRequireDefault(_com_couponsFloat), _com_music = require("./../../components/com_music.js"), _com_music2 = _interopRequireDefault(_com_music), Index = function(e) {
    function o() {
        var e, n, t, i;
        _classCallCheck(this, o);
        for (var c = arguments.length, r = Array(c), m = 0; m < c; m++) r[m] = arguments[m];
        return n = t = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(r))), 
        t.config = {
            navigationBarTitleText: "",
            enablePullDownRefresh: !0,
            usingComponents: {
                "wxc-toast": "../../packages/@minui/wxc-toast/dist/index",
                "wxc-price": "../../packages/@minui/wxc-price/dist/index",
                "wxc-abnor": "../../packages/@minui/wxc-abnor/dist/index"
            }
        }, t.$repeat = {
            currentPage: {
                com: "comNewsLst",
                props: "currentCom.sync"
            }
        }, t.$props = {
            comMusic: {
                "xmlns:v-bind": {
                    value: "",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:pageIndex.sync": {
                    value: "currentPageIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comMap: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comImg: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comGood: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_good[currentPageIndex+'_'+index].list",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comForm: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:toast.once": {
                    value: "toast",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comLive: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:pageIndex.sync": {
                    value: "currentPageIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:comIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_live",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comNews: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_news[currentPageIndex+'_'+index]",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comVideo: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:currentComIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comSlider: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comImgnav: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comSearch: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comSpace: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comMagic: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comiaoSha: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:pageIndex.sync": {
                    value: "currentPageIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:comIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:toast.once": {
                    value: "toast",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_miaosha[currentPageIndex+'_'+index]",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:false.sync": {
                    value: "false",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comRichtxt: {
                "v-bind:currentCom.sync": {
                    value: "vm_com_rich[currentPageIndex+'_'+index]",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comBargain: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:user.sync": {
                    value: "vm_com_user",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:false.sync": {
                    value: "false",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_bargain[currentPageIndex+'_'+index]",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comGroup: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_group[currentPageIndex+'_'+index].list",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comContact: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comCoupons: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comGoodList: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:pageIndex.sync": {
                    value: "currentPageIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:comIndex.sync": {
                    value: "index",
                    type: "index",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_goodLst",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:false.sync": {
                    value: "false",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comGroup2: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_group2[currentPageIndex+'_'+index].list",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comClassify: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_classify",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:false.sync": {
                    value: "false",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comBottomnav: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_bottom",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:pageIndex.sync": {
                    value: "currentPageIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comNewsLst: {
                "v-bind:currentCom.sync": {
                    value: "item",
                    type: "item",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:vm.sync": {
                    value: "vm_com_newlst",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:false.sync": {
                    value: "false",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:newsIndex.sync": {
                    value: "newsIndex",
                    for: "currentPage.coms",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            comLogo: {
                "v-bind:vm.sync": "vm_com_logo"
            },
            comIcon: {
                "v-bind:vm.once": "vm_com_icon"
            },
            comVas: {},
            comCouponsFloat: {
                "v-bind:couponsFloat.sync": "vm_com_coupList"
            },
            comSigninFloat: {
                "v-bind:comSigninRules.sync": "signinRules",
                "v-bind:comUserSignIn.sync": "userSignin"
            }
        }, t.$events = {
            comForm: {
                "v-on:ShowToast": "ShowToast"
            },
            comiaoSha: {
                "v-on:ShowToast": "ShowToast"
            },
            comGoodList: {
                "v-on:goodSearch": "goodSearch"
            },
            comNewsLst: {
                "v-on:newsSel": "newsSel",
                "v-on:setInput": "setInput"
            },
            comIcon: {
                "v-on:showCanvas": "showCanvas",
                "v-on:showIcon": "showIcon"
            },
            comVas: {
                "v-on:hideCanvas": "hideCanvas"
            },
            comCouponsFloat: {
                "v-on:closeMask": "closeCoupMask",
                "v-on:getCoup": "getIndexCoup"
            },
            comSigninFloat: {
                "v-on:closeMask": "closeSignin",
                "v-on:signin": "clickSingin"
            }
        }, t.components = {
            comMusic: _com_music2.default,
            comMap: _com_map2.default,
            comImg: _com_img2.default,
            comLogo: _com_logo2.default,
            comGood: _com_good2.default,
            comForm: _com_form2.default,
            comLive: _com_live2.default,
            comNews: _com_news2.default,
            comIcon: _com_icon2.default,
            comVas: _com_canvas2.default,
            comVideo: _com_video2.default,
            comSlider: _com_slider2.default,
            comImgnav: _com_imgnav2.default,
            comSearch: _com_search2.default,
            comSpace: _com_spacing2.default,
            comMagic: _com_magicImg2.default,
            comiaoSha: _com_miaoSha2.default,
            comRichtxt: _com_richtxt2.default,
            comBargain: _com_bargain2.default,
            comGroup: _com_joingroup2.default,
            comContact: _com_contact2.default,
            comCoupons: _com_coupons2.default,
            comGoodList: _com_goodList2.default,
            comGroup2: _com_joingroup4.default,
            comClassify: _com_goodClassify2.default,
            comBottomnav: _com_bottomnav2.default,
            comCouponsFloat: _com_couponsFloat2.default,
            comSigninFloat: _com_signinFloat2.default,
            comNewsLst: _com_newsLst2.default
        }, t.data = {
            currentPageIndex: 0,
            currentPage: {},
            currentSkin: {},
            vm_com_user: {},
            vm_com_news: {},
            vm_com_live: {},
            vm_com_good: {},
            vm_com_logo: {},
            vm_com_icon: {},
            vm_com_rich: {},
            vm_com_group: {},
            vm_com_group2: {},
            vm_com_status: {},
            vm_com_miaosha: {},
            vm_com_bargain: {},
            vm_com_classify: {},
            vm_com_coupList: [],
            vm_com_bottom: {},
            vm_com_goodLst: {
                pageindex: 1,
                pagesize: 10,
                list: [],
                typeid: [],
                goodCat: [],
                goodCatArray: [],
                pricesort: "",
                exttypes: "",
                search: "",
                alltypeid: "",
                isFirstType: "",
                ispost: !1,
                loadall: !1,
                showMore: !1,
                showgoodAll: !1,
                saleCountSort: ""
            },
            vm_com_newlst: {
                ispost: !1,
                loadall: !1,
                list: [],
                pageindex: 1,
                pagesize: 10,
                ids: "",
                search: ""
            },
            toast: {
                show: !1,
                msg: ""
            },
            signinRules: {},
            userSignin: {},
            singinDate: [ "第1天", "第2天", "第3天", "第4天", "第5天", "第6天", "第7天" ],
            showsigninFloat: !1,
            showCanvas: !1,
            homeStatus: !1,
            coupHidden: !1,
            newsIndex: 0
        }, t.computed = {
            hasMusic: function() {
                return _wepy2.default.$instance.globalData.hasMusicComs;
            }
        }, t.methods = {
            closeCoupMask: function() {
                this.coupHidden = !1, 0 == this.signinRules.ShowPage ? this.showsigninFloat = !1 : (this.showsigninFloat = !0, 
                _core.core.showSignin(this));
            },
            closeSignin: function() {
                this.showsigninFloat = !1;
            },
            clickSingin: function() {
                _core.core.playCard(this);
            },
            getIndexCoup: function() {
                function e(e, n) {
                    return o.apply(this, arguments);
                }
                var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o, n) {
                    var t, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this.vm_com_coupList, t[n].isGet) {
                                e.next = 9;
                                break;
                            }
                            return e.next = 4, _core.core.getCoupon(o);

                          case 4:
                            i = e.sent, i.isok && (this.vm_com_coupList[n].isGet = !0, this.vm_com_coupList[n].coupBtnText = "去查看"), 
                            _core.tools.showModal(i.msg, !1), e.next = 11;
                            break;

                          case 9:
                            _core.tools.goNewPage("/pages/discount/couponLst"), this.coupHidden = !1;

                          case 11:
                            this.$apply();

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            wxParseImgTap: function(e) {
                var o = e.currentTarget.dataset.src;
                _core.tools.preViewShow(o);
            },
            ShowToast: function(e) {
                _core.tools.ShowToast(e, this);
            },
            showCanvas: function() {
                this.showCanvas = !0;
            },
            hideCanvas: function() {
                this.showCanvas = !1;
            },
            newsSel: function(e, o) {
                var n = this.vm_com_newlst;
                this.newsIndex = "all" === o ? 0 : e, n = _core.tools.resetArray(n), n.ids = e, 
                _core.core.getNewsLst(n, this), this.vm_com_newlst = n, this.$apply();
            },
            goodSearch: function(e) {
                this.vm_com_goodLst.search = e.detail.value, this.$apply();
            },
            setInput: function(e) {
                this.vm_com_newlst.search = e.detail.value, this.$apply();
            },
            showIcon: function() {
                this.vm_com_icon.showState = !this.vm_com_icon.showState, this.$apply();
            }
        }, i = n, _possibleConstructorReturn(t, i);
    }
    return _inherits(o, e), _createClass(o, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e(o) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return _core.tools.showLoading(), e.next = 3, _core.core.renderPage(this, Number((0, 
                        _lodashGet2.default)(o, "currentPageIndex", 0)));

                      case 3:
                        Promise.all([ _core.core.connectSocket(), _core.core.addQrCodeScanRecord((0, _lodashGet2.default)(o, "scene", "")) ]);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            Object.assign(this);
            var e = _wepy2.default.$instance.globalData;
            this.vm_com_status = {}, e.goodCat.length && _core.core.renderPage(this, Number(this.currentPageIndex));
        }
    }, {
        key: "onPageScroll",
        value: function(e) {
            this.currentPage.coms.find(function(e) {
                return "bgaudio" == e.type;
            }) && (0 == e.scrollTop ? this.currentPage.coms[this.currentPageIndex].scrollShow = !1 : this.currentPage.coms[this.currentPageIndex].scrollShow = !0), 
            this.vm_com_icon.backUp = 0 != e.scrollTop, this.vm_com_icon.showState = !1, this.$apply();
        }
    }, {
        key: "onUnload",
        value: function() {
            var e = _wepy2.default.$instance.globalData;
            clearInterval(this.barCount), clearInterval(this.miaoShaCutDown);
            var o = getCurrentPages()[getCurrentPages().length - 2];
            o && (Object.assign([ e.pages = "", this.showCanvas = !1, this.vm_com_status = {}, this.currentPage.coms = [] ]), 
            _core.core.renderPage(this, Number(o.data.currentPageIndex)), this.currentPageIndex = o.data.currentPageIndex, 
            this.$apply());
        }
    }, {
        key: "onHide",
        value: function() {
            this.showCanvas = !1;
        }
    }, {
        key: "onReachBottom",
        value: function() {
            var e = this.currentPage.coms.find(function(e) {
                return "goodlist" == e.type && "6" != e.GoodCatNavStyle;
            }), o = this.currentPage.coms.find(function(e) {
                return "newslist" == e.type;
            });
            e && _core.core.getGoodsListRequest(this.vm_com_goodLst, e, this), o && _core.core.getNewsLst(this.vm_com_newlst, this);
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return o.apply(this, arguments);
            }
            var o = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.showCanvas) {
                            e.next = 3;
                            break;
                        }
                        return wx.stopPullDownRefresh(), e.abrupt("return");

                      case 3:
                        return o = _wepy2.default.$instance.globalData, clearInterval(this.barCount), clearInterval(this.miaoShaCutDown), 
                        wx.showNavigationBarLoading(), wx.clearStorageSync(), this.vm_com_newlst = _core.tools.resetArray(this.vm_com_newlst), 
                        Object.assign([ o.aid = "", o.logo = "", o.pages = "", o.vipInfo = "", o.storeConfig = "", this.newsIndex = 0, this.vm_com_user = {}, this.vm_com_status = {}, this.vm_com_goodLst.typeid = [] ]), 
                        _wepy2.default.$instance.globalData.hasMusicComs = !1, e.next = 13, _core.core.renderPage(this, Number(this.currentPageIndex));

                      case 13:
                        _core.core.logoSwitch(this), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = _wepy2.default.$instance.globalData, o = this.showCanvas ? e.adImg : "";
            return {
                title: this.showCanvas ? e.adTitle : "",
                path: "/pages/index/index?currentPageIndex=" + this.currentPageIndex,
                imageUrl: o,
                success: function(e) {
                    _core.tools.loading("转发成功", "success");
                }
            };
        }
    } ]), o;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index/index"));
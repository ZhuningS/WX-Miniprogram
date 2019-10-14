function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" != typeof a && "function" != typeof a ? e : a;
}

function _inherits(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, a) {
        for (var o = 0; o < a.length; o++) {
            var r = a[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(a, o, r) {
        return o && e(a.prototype, o), r && e(a, r), a;
    };
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _promisePolyfill = require("./npm/promise-polyfill/promise.js"), _promisePolyfill2 = _interopRequireDefault(_promisePolyfill), _core = require("./lib/core.js");

global.independentUpdate = !0;

var ALD_PATH = global.independentUpdate ? "./ald-stat/ald-stat.js" : "./ald-stat/san.js", aldstat = require(ALD_PATH), _default = function(e) {
    function a() {
        _classCallCheck(this, a);
        var e = _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
        return e.config = {
            pages: [ "pages/index/index", "pages/news/news", "pages/news/newsLst", "pages/good/good", "pages/good/goodOrder", "pages/good/goodOlt", "pages/good/goodList", "pages/good/goodSub", "pages/good/goodSubLst", "pages/good/goodProLst", "pages/good/goodShopCar", "pages/good/goodSearch", "pages/good/goodType", "pages/good/goodValue", "pages/good/goodValueLst", "pages/good/goodProItem", "pages/bargain/bargain", "pages/bargain/bargainOrder", "pages/bargain/barSuccess", "pages/bargain/bargainList", "pages/my/myaddress", "pages/my/mysavePrice", "pages/my/storeValue", "pages/my/storePay", "pages/my/storeSuccess", "pages/my/myLogistics", "pages/my/afterSale/serveType", "pages/my/afterSale/selectOrder", "pages/my/afterSale/appeal", "pages/my/afterSale/appealResult", "pages/my/afterSale/returnCargo", "pages/my/bindPhone", "pages/my/myInfo", "pages/my/myVipInfo", "pages/group/group", "pages/group/groupOrder", "pages/group/groupOtl", "pages/group/groupSuccess", "pages/group/groupList", "pages/group/groupMyShare", "pages/group/groupInvite", "pages/group/grouping", "pages/group2/group2", "pages/group2/group2Order", "pages/group2/group2Dlt", "pages/group2/group2Share", "pages/group2/group2List", "pages/live/live", "pages/live/video", "pages/discount/couponLst", "pages/discount/couponCenter", "pages/discount/reduction", "pages/discount/reductionLst", "pages/integral/integral", "pages/integral/interRecord", "pages/integral/interDlt", "pages/integral/interOrder", "pages/integral/interSuccess", "pages/integral/interLst", "pages/sellCenter/sell", "pages/sellCenter/sellIndivi", "pages/sellCenter/sellMain", "pages/sellCenter/sellPostCash", "pages/sellCenter/sellRecord", "pages/sellCenter/sellSuccess", "pages/sellCenter/sellShow", "pages/sellCenter/sellSecond", "pages/sellCenter/sellProLst", "pages/im/chat", "pages/im/contact", "pages/index/miniapp", "pages/miaoSha/more", "pages/miaoSha/detail", "pages/miaoSha/order" ],
            window: {
                backgroundTextStyle: "drak",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "",
                navigationBarTextStyle: "black"
            },
            navigateToMiniProgramAppIdList: [ "" ]
        }, e.globalData = {
            ws: !1,
            wxState: !1,
            msgQueue: [],
            goodCat: [],
            coupHidden: !1,
            aid: "",
            pages: "",
            userInfo: "",
            address: {},
            logo: "",
            hasMusicComs: !1
        }, e.use("promisify"), e;
    }
    return _inherits(a, e), _createClass(a, [ {
        key: "onLaunch",
        value: function() {
            if (wx.clearStorageSync(), _core.tools.getSystem(), global.independentUpdate) this.globalData.appid = "wx71b6077a922e386b"; else {
                var e = wx.getExtConfigSync();
                if (!e) return void wx.showModal({
                    title: "提示",
                    content: "小程序未绑定公众号，不能使用！",
                    showCancel: !1
                });
                this.globalData.appid = e.appid;
            }
        }
    }, {
        key: "onShow",
        value: function() {
            this.globalData.wxState = !1;
        }
    }, {
        key: "onHide",
        value: function() {
            this.globalData.wxState = !0, wx.pauseBackgroundAudio();
        }
    } ]), a;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
})), require("./_wepylogs.js");
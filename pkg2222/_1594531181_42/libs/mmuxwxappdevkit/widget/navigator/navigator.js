var a = require("../../core/sys.js"), t = require("../../core/console.js")("navigator"), e = require("../../utils/util.js");

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        display: {
            type: Boolean,
            value: !0
        },
        target: {
            type: String,
            value: "miniProgram"
        },
        innerStyle: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: "navigate"
        },
        url: {
            type: String,
            value: ""
        },
        appId: {
            type: String,
            value: ""
        },
        path: {
            type: String,
            value: "",
            observer: function() {
                this.reloadData();
            }
        },
        extraData: {
            type: Object,
            value: {},
            observer: function() {
                this.reloadData();
            }
        },
        showWeappBack: {
            type: Boolean,
            value: !0,
            observer: function() {
                this.reloadData();
            }
        },
        version: {
            type: String,
            value: "release"
        },
        hoverStopPropagation: {
            type: Boolean,
            value: !1
        },
        hoverStartTime: {
            type: Number,
            value: 50
        },
        hoverStayTime: {
            type: Number,
            value: 600
        },
        hidden: {
            type: Boolean,
            value: !1
        },
        extParams: {
            type: Object,
            value: {},
            observer: function() {
                this.reloadData();
            }
        }
    },
    externalClasses: [ "inner-class", "hover-class" ],
    data: {
        _path: "",
        _extraData: "",
        isCircleWeAppJump: !1
    },
    ready: function() {
        this.fromAppid = wx.getStorageSync("fromAppid"), this.isSdkSupport = -1 != e.compareSDKVersion(a.SDKVersion, "2.0.7"), 
        this.reloadData();
    },
    methods: {
        reloadData: function() {
            if ("miniProgram" == this.data.target) if (t.log("reloadData"), "exit" != this.data.openType) {
                this.data.path && !this.data.path.startsWith("/") && (this.data.path = "/" + this.data.path);
                var i = Object.assign({}, this.data.extParams);
                a.noNavigatorParams() || (i.fromAppid = a.appid(), this.data.showWeappBack && (i.fromWeAppName = a.appName()));
                var r = this.data.path.length > 0 ? e.appendQueryObject(this.data.path, i) : this.data.path;
                if (this.fromAppid && this.fromAppid == this.data.appId) {
                    var p = e.getCurrentPage();
                    this.setData({
                        isCircleWeAppJump: !0,
                        _extraData: Object.assign({}, this.data.extraData, {
                            path: r,
                            originPath: p.route,
                            originOptions: p.options,
                            originWeAppName: a.appName()
                        })
                    });
                } else this.setData({
                    isCircleWeAppJump: !1,
                    _path: r,
                    _extraData: this.data.extraData
                });
            } else this.setData({
                isCircleWeAppJump: !1,
                _extraData: this.data.extraData
            });
        },
        onClick: function(a) {
            this.data.isCircleWeAppJump ? wx.navigateBackMiniProgram({
                extraData: this.data._extraData
            }) : this.isSdkSupport || "miniProgram" != this.data.target || "navigate" != this.data.openType || wx.navigateToMiniProgram({
                appId: this.data.appId,
                path: this.data._path,
                extraData: this.data._extraData,
                envVersion: this.data.version
            });
        }
    }
});
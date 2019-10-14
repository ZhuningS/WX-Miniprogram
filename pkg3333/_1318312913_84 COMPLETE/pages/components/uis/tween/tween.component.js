var e = require("../../../../libs/mp-enhancers/index"), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../libs/classnames")), n = require("./tween.effects");

Component((0, e.componentOptionsEnhancer)({
    properties: {
        isVisible: {
            type: Boolean,
            observer: function(e, t) {
                var n = this.data.name;
                e !== t && this.runTween(n, e);
            }
        },
        needAppearTween: {
            type: Boolean,
            value: !0
        },
        name: {
            type: String,
            value: "fade"
        },
        origin: {
            type: String,
            value: "50% 50% 0"
        },
        easing: {
            type: String,
            value: "ease"
        },
        duration: {
            type: Number,
            value: 268
        },
        delay: {
            type: Number,
            value: 0
        }
    },
    data: {
        tweenData: {},
        isOutTweened: !0
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.needAppearTween;
            return (0, t.default)("tween", {
                "need-appear-tween": e
            }, "com-class");
        }
    },
    attached: function() {
        var e = this.data, t = e.origin, a = e.easing, i = e.duration, r = e.delay, s = this.data, o = s.name, u = s.isVisible, d = s.needAppearTween, l = {
            transformOrigin: t,
            timingFunction: a,
            duration: i,
            delay: r
        };
        this.tweenEffectsManager = (0, n.tweenEffectsManagerCreator)(l), d && u && this.runTween(o, u), 
        !d && u && this.handleRootTransitionend();
    },
    methods: {
        handleRootTransitionend: function() {
            var e = this.data.isVisible;
            this.setData({
                isOutTweened: !e
            });
        },
        runTween: function(e, t) {
            var n = this;
            if (this.tweenEffectsManager) {
                var a = this.tweenEffectsManager.export(e, t), i = function() {
                    n.setData({
                        tweenData: a
                    });
                };
                t ? setTimeout(i, 20) : i();
            }
        }
    }
}));
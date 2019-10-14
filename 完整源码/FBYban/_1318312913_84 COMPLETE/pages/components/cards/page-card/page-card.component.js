function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var n = require("../../../../libs/mp-enhancers/index"), a = (e(require("../../../../libs/classnames")), 
require("../../../../utils/notification"), require("../../../../utils/dev")), i = (require("../../../../config/index"), 
e(require("../../../../mixins/subscribe"))), r = e(require("../../../../mixins/actions")), s = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("../../../../services/redirector")), o = require("../../../../utils/formatter"), c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
};

Component((0, n.componentOptionsEnhancer)({
    options: {
        addGlobalClass: !0
    },
    data: c({}, i.default.data, {
        isFold: !0
    }),
    properties: {
        event: {
            type: Object
        }
    },
    computed: {
        type: function() {
            return this.data.event.type;
        },
        text: function() {
            return this.data.event.text || {};
        },
        richText: function() {
            return this.data.event.richText || {};
        },
        image: function() {
            return this.data.event.image || {};
        },
        swiper: function() {
            return this.data.event.swiper || {};
        },
        magazine: function() {
            try {
                return this.data.event.section.events.find(function(e) {
                    return "magazine" === e.type;
                }).magazine;
            } catch (e) {
                return {};
            }
        },
        events: function() {
            return "section" === this.data.event.type && "magazine" === this.data.event.section.type ? this.data.event.section && this.data.event.section.events.filter(function(e) {
                return "article" === e.type;
            }).map(function(e) {
                return (0, o.cardDataFormatter)(!1)(e);
            }) || [] : "section" === this.data.event.type && "magazines" === this.data.event.section.type ? this.data.event.section && this.data.event.section.events.filter(function(e) {
                return "magazine" === e.type;
            }) : void 0;
        }
    },
    ready: function() {
        this.magazine && this.setData(t({}, "subscribed." + this.magazine.mid, !0));
    },
    methods: c({}, i.default, r.default, {
        stopPropagation: a.NOOP,
        handleClickUnfoldMagazines: function() {
            console.log("handleClickUnfoldMagazines\n  :\n"), this.setData({
                isFold: !1
            });
        },
        handleMagazineNameTap: function(e) {
            var t = e.currentTarget.dataset.mid;
            s.navigateToMagazinePage(t, {
                content: "clip"
            });
        },
        handleArticleTap: function(e) {
            var t = e.currentTarget.dataset.item;
            s.navigateToArticlePage(t.magazineId, t.docId);
        },
        navigateTo: function(e) {
            var t = e.currentTarget.dataset.navigateObject;
            switch (t.type) {
              case "article":
                s.navigateToArticlePage(t.mid, t.docId);
                break;

              case "magazine":
                s.navigateToMagazinePage(t.mid);
            }
        }
    })
}));
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function i(r, a) {
                try {
                    var d = n[r](a), s = d.value;
                } catch (e) {
                    return void t(e);
                }
                if (!d.done) return Promise.resolve(s).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(s);
            }
            return i("next");
        });
    };
}

var t = e(require("../../../../../libs/regenerator-runtime")), i = e(require("../../../../../libs/underscore")), r = require("../../../../../libs/mp-enhancers/index"), a = e(require("../../../../../libs/classnames")), d = require("../../../../../utils/dev"), s = require("../_services/index");

Component((0, r.componentOptionsEnhancer)({
    properties: {
        cardSize: {
            type: String
        },
        magazineId: {
            type: String
        },
        docId: {
            type: String
        },
        mediaData: {
            type: Object
        },
        currentPlaying: {
            type: Object,
            value: {}
        }
    },
    ready: function() {
        this.playerId = i.default.uniqueId("player-"), this.service = s.mediaVideoService, 
        this.service.mount(this);
    },
    detached: function() {
        this.service && this.service.unmount();
    },
    computed: {
        rootClassNames: function() {
            var e = this.data.cardSize;
            return (0, a.default)("media-video-entry", [ "size-" + e ], "com-class");
        },
        isPlaying: function() {
            var e = this.data, n = e.docId, t = e.currentPlaying;
            return t.id === n && t.playerId === this.playerId;
        }
    },
    methods: {
        NOOP: d.NOOP,
        handleVideoThumbTap: function() {
            var e = this;
            return n(t.default.mark(function n() {
                var i, r, a;
                return t.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return i = e.data, r = i.docId, a = i.mediaData, n.next = 3, e.service.setCurrentPlaying(r, e.playerId, a.video.url);

                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n, e);
            }))();
        },
        handleVideoStartPlaying: function() {
            var e = this.data, n = e.magazineId, t = e.docId;
            this.service.onStartPlaying(n, t);
        },
        handleVideoPausePlaying: function() {
            var e = this.data, n = e.magazineId, t = e.docId;
            this.service.onPausePlaying(n, t);
        },
        handleVideoEndPlaying: function() {
            var e = this.data, n = e.magazineId, t = e.docId;
            this.service.onEndPlaying(n, t);
        }
    }
}));
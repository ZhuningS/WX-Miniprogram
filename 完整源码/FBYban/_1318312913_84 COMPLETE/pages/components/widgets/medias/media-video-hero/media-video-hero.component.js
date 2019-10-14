function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function i(r, a) {
                try {
                    var d = t[r](a), o = d.value;
                } catch (e) {
                    return void n(e);
                }
                if (!d.done) return Promise.resolve(o).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(o);
            }
            return i("next");
        });
    };
}

var n = e(require("../../../../../libs/regenerator-runtime")), i = e(require("../../../../../libs/underscore")), r = require("../../../../../libs/mp-enhancers/index"), a = require("../../../../../utils/dev"), d = require("../_services/index");

Component((0, r.componentOptionsEnhancer)({
    properties: {
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
        this.playerId = i.default.uniqueId("player-"), this.service = d.mediaVideoService, 
        this.service.mount(this);
    },
    detached: function() {
        this.service && this.service.unmount();
    },
    computed: {
        isPlaying: function() {
            var e = this.data, t = e.docId, n = e.currentPlaying;
            return n.id === t && n.playerId === this.playerId;
        },
        videoRatio: function() {
            var e = this.data.mediaData.video;
            return e.width / e.height;
        },
        wrapPaddingTop: function() {
            var e = this.data.videoRatio;
            return Math.min(100 / e, 177) + "%";
        }
    },
    methods: {
        stopPropagation: a.NOOP,
        handleVideoCoverTap: function() {
            var e = this;
            return t(n.default.mark(function t() {
                var i, r, a;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = e.data, r = i.docId, a = i.mediaData, t.next = 3, e.service.setCurrentPlaying(r, e.playerId, a.video.url);

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t, e);
            }))();
        },
        handleVideoStartPlaying: function() {
            var e = this.data, t = e.magazineId, n = e.docId;
            this.service.onStartPlaying(t, n);
        },
        handleVideoPausePlaying: function() {
            var e = this.data, t = e.magazineId, n = e.docId;
            this.service.onPausePlaying(t, n);
        },
        handleVideoEndPlaying: function() {
            var e = this.data, t = e.magazineId, n = e.docId;
            this.service.onEndPlaying(t, n);
        }
    }
}));
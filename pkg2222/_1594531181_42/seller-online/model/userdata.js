var i = require("../core/sys.js"), s = require("../core/network.js"), e = require("../foundation/statemachine.js"), t = require("../../libs/mmuxwxappdevkit/core/storage.js"), n = new e({
    init: "init",
    transitions: [ {
        name: "request",
        from: "init",
        to: "requesting"
    }, {
        name: "success",
        from: "requesting",
        to: "success"
    }, {
        name: "fail",
        from: "requesting",
        to: "fail"
    }, {
        name: "retry",
        from: "fail",
        to: "requesting"
    } ]
}), r = [], f = {
    kf_id: "",
    biz_id: "",
    biz_info_list: [],
    isKf: i.isKf,
    isUser: i.isUser,
    init: function() {
        var s = this;
        t.getData({
            key: "__IS_KF__",
            sync: !0,
            success: function(e) {
                s.firstTime = !e, s.isKf = i.isKf = "true" === e, s.isUser = i.isUser = !s.isKf;
            }
        });
    },
    ready: function() {
        return "success" === n.state;
    },
    get: function(i) {
        i && r.push(i), this.ready() ? this.onCallback(!0) : "requesting" !== n.state && this.request();
    },
    switch: function() {
        this.isUser = i.isUser = !i.isUser, this.isKf = i.isKf = !i.isKf, t.setData({
            key: "__IS_KF__",
            data: this.isKf ? "true" : "false",
            sync: !0
        }), this.firstTime = !1;
    },
    request: function() {
        var i = this;
        n.request(), s.request({
            cgi: s.cgiSet.getKfList,
            params: {},
            success: function(s) {
                n.success(), i.biz_info_list = s.biz_info_list || [], i.kf_id = s.kf_id || "", i.biz_id = i.biz_info_list.length ? i.biz_info_list[0].biz_id : "", 
                i.biz_id && i.firstTime && i.switch(), i.onCallback(!0);
            },
            fail: function() {
                n.fail();
            }
        });
    },
    onCallback: function(i) {
        var s = this;
        r.forEach(function(e) {
            i ? e && e.success && e.success(s) : e && e.fail && e.fail();
        }), r.splice(0, r.length);
    }
};

f.init(), module.exports = f;
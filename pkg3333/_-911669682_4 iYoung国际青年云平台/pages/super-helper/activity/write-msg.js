function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var i = e(require("../../../utils/dg.js")), t = e(require("../../../utils/data.js")), d = e(require("../../../utils/requestUtil.js")), a = e(require("../../../utils/util.js")), n = e(require("../../../utils/underscore.js")), r = e(require("../common/validator.js")), l = t.default.duoguan_host_api_url + "/index.php/addon/DuoguanWXGroupHelper";

Page({
    data: {
        checkboxItems: [ {
            hidden: !1,
            typeName: "text",
            placeholder: "请填写您的真实姓名",
            name: "true_name"
        }, {
            hidden: !1,
            typeName: "number",
            placeholder: "请填写您的手机号码",
            name: "mobile"
        }, {
            hidden: !1,
            typeName: "text",
            placeholder: "请填写您的公司名称",
            name: "company"
        }, {
            hidden: !1,
            typeName: "idcard",
            placeholder: "请填写您的身份证号",
            name: "idcard"
        }, {
            hidden: !1,
            typeName: "text",
            placeholder: "请填写您的房号",
            name: "room_number"
        } ]
    },
    onLoad: function(e) {
        this.activityId = e.id, this.is_signed = e.is_signed || 0;
        var i = e.enroll_info.split(","), t = this.data.checkboxItems;
        t.forEach(function(e, d, a) {
            t[d].hidden = -1 != (0, n.default)(i).indexOf(e.name);
        }), this.setData({
            checkboxItems: t,
            enroll_info: e.enroll_info,
            is_signed: e.is_signed || 0
        }), a.default.trySyncWechatInfo(function(e) {
            console.log("获取用户信息成功");
        });
    },
    onActionTap: function(e) {
        var t = this;
        if (!d.default.isLoading(this.enrollRQId)) {
            var a = e.detail.value, o = this.data.enroll_info;
            o = "" == o ? [] : o.split(",");
            for (var s = 0; s < o.length; s++) if ("mobile" == o[s]) {
                if (0 == r.default.isMobile(a.mobile)) return !1;
            } else if ("idcard" == o[s]) {
                if (0 == r.default.isIdCard(a.idcard)) return !1;
            } else if (0 == r.default.required(a[o[s]])) return !1;
            var u = n.default.extend({
                id: this.activityId,
                is_signed: this.is_signed,
                form_id: e.detail.formId
            }, e.detail.value), c = l + "/activityApi/enroll.html";
            d.default.get(c, u, function() {
                i.default.redirectTo({
                    url: "detail?id=" + t.activityId
                });
            });
        }
    }
});
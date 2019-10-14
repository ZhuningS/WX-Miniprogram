var t = require("../../core/sys.js"), e = require("../../core/api.js");

Component({
    properties: {
        contactInfo: {
            type: Object,
            observer: function() {
                this.updateContactViewData();
            }
        },
        messageInfo: {
            type: Object
        },
        onlineKfCount: {
            type: Number
        },
        showKf: {
            type: Boolean,
            observer: function() {
                this.updateContactViewData();
            }
        }
    },
    data: {
        showActionSheet: !1,
        actionSheetTitle: "",
        actionSheetItems: [],
        contactViewData: []
    },
    attached: function() {
        this.updateContactViewData();
    },
    methods: {
        updateContactViewData: function() {
            var t = this.data.contactInfo, e = this.data.showKf, a = (this.data.onlineKfCount, 
            t.phone_num), n = t.service_time, o = t.biz_username, i = this.data.messageInfo, s = [];
            e && s.push({
                title: "在线客服",
                subTitle: "",
                disable: !1,
                icon: "message",
                type: "",
                showMessage: i && i.path,
                messageInfo: i
            }), a && s.push({
                title: "客服电话",
                subTitle: n,
                icon: "phone_call",
                type: ""
            }), o && s.push({
                title: "公众号",
                subTitle: o,
                icon: "copy",
                type: ""
            }), this.setData({
                contactViewData: s
            });
        },
        onClickContactItem: function(t) {
            var e = parseInt(t.currentTarget.dataset.index), a = this.data.contactViewData[e];
            "客服电话" === a.title ? this.onClickPhoneCall() : "公众号" === a.title ? this.onClickCopyBizname() : "在线客服" === a.title && this.onClickOnlineKf();
        },
        onClickPhoneCall: function() {
            this.data.contactInfo.phone_num ? (e.makePhoneCall({
                phoneNumber: this.data.contactInfo.phone_num
            }), this.triggerEvent("phonecall")) : console.error("onClickPhoneCall phone_num empty");
        },
        onClickCopyBizname: function() {
            this.data.contactInfo.biz_username ? (e.setClipboardData && e.setClipboardData({
                data: this.data.contactInfo.biz_username,
                success: function() {
                    e.showToast && e.showToast({
                        title: "已复制",
                        duration: 500
                    });
                }
            }), this.triggerEvent("copybiz")) : console.error("onClickCopyBizname biz_username empty");
        },
        onClickOnlineKf: function() {
            e.navigateTo({
                url: "/seller-online/portal/chat/chat?wxapp_appid=" + t.appid()
            });
        }
    }
});
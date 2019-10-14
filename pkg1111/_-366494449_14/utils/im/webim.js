var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
        for (var t = 0; t < this.length; t++) e.apply(this, [ this[t], t, this ]);
    });
    var t = {}, n = {
        login: function(e, t, n) {},
        syncMsgs: function(e, t) {},
        getC2CHistoryMsgs: function(e, t, n) {},
        syncGroupMsgs: function(e, t, n) {},
        sendMsg: function(e, t, n) {},
        logout: function(e, t) {},
        setAutoRead: function(e, t, n) {},
        getProfilePortrait: function(e, t, n) {},
        setProfilePortrait: function(e, t, n) {},
        applyAddFriend: function(e, t, n) {},
        getPendency: function(e, t, n) {},
        deletePendency: function(e, t, n) {},
        responseFriend: function(e, t, n) {},
        getAllFriend: function(e, t, n) {},
        deleteFriend: function(e, t, n) {},
        addBlackList: function(e, t, n) {},
        getBlackList: function(e, t, n) {},
        deleteBlackList: function(e, t, n) {},
        uploadPic: function(e, t, n) {},
        createGroup: function(e, t, n) {},
        applyJoinGroup: function(e, t, n) {},
        handleApplyJoinGroup: function(e, t, n) {},
        deleteApplyJoinGroupPendency: function(e, t, n) {},
        quitGroup: function(e, t, n) {},
        getGroupPublicInfo: function(e, t, n) {},
        getGroupInfo: function(e, t, n) {},
        modifyGroupBaseInfo: function(e, t, n) {},
        destroyGroup: function(e, t, n) {},
        getJoinedGroupListHigh: function(e, t, n) {},
        getGroupMemberInfo: function(e, t, n) {},
        addGroupMember: function(e, t, n) {},
        modifyGroupMember: function(e, t, n) {},
        forbidSendMsg: function(e, t, n) {},
        deleteGroupMember: function(e, t, n) {},
        getPendencyGroup: function(e, t, n) {},
        getPendencyReport: function(e, t, n) {},
        getPendencyGroupRead: function(e, t, n) {},
        sendCustomGroupNotify: function(e, t, n) {},
        Msg: function(e, t, n, o, r, i, s, u) {},
        MsgStore: {
            sessMap: function() {
                return {};
            },
            sessCount: function() {
                return 0;
            },
            sessByTypeId: function(e, t) {
                return {};
            },
            delSessByTypeId: function(e, t) {
                return !0;
            },
            resetCookieAndSyncFlag: function() {},
            downloadMap: {}
        }
    };
    return function(n) {
        var o, r = {
            VERSION: "1.7.0",
            APPID: "1400127078",
            PLAATFORM: "10"
        }, i = !0, s = {
            FORMAL: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            }
        }, u = {}, a = {
            OPEN_IM: "openim",
            GROUP: "group_open_http_svc",
            FRIEND: "sns",
            PROFILE: "profile",
            RECENT_CONTACT: "recentcontact",
            PIC: "openpic",
            BIG_GROUP: "group_open_http_noauth_svc",
            BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_noauth_svc",
            IM_OPEN_STAT: "imopenstat",
            DEL_CHAT: "recentcontact"
        }, c = {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v1",
            group_open_long_polling_http_noauth_svc: "v1",
            imopenstat: "v4"
        }, l = {
            login: 1,
            pic_up: 3,
            apply_join_group: 9,
            create_group: 10,
            longpolling: 18,
            send_group_msg: 19,
            sendmsg: 20
        }, p = {
            C2C: "C2C",
            GROUP: "GROUP"
        }, f = {
            C2C: 1,
            GROUP: 2
        }, g = {
            C2C: 12e3,
            GROUP: 8898
        }, d = {
            OK: "OK",
            FAIL: "FAIL"
        }, m = {
            TEXT: "TIMTextElem",
            FACE: "TIMFaceElem",
            IMAGE: "TIMImageElem",
            CUSTOM: "TIMCustomElem",
            SOUND: "TIMSoundElem",
            FILE: "TIMFileElem",
            LOCATION: "TIMLocationElem",
            GROUP_TIP: "TIMGroupTipElem"
        }, I = {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        }, M = {
            JPG: 1,
            JPEG: 1,
            GIF: 2,
            PNG: 3,
            BMP: 4,
            UNKNOWN: 255
        }, E = {
            RAW_DATA: 0,
            BASE64_DATA: 1
        }, _ = {
            BUSSINESS_ID: "10001",
            AUTH_KEY: "617574686b6579",
            SERVER_IP: "182.140.186.147"
        }, y = {
            SOUND: 2106,
            FILE: 2107
        }, h = {
            IMAGE: 1,
            FILE: 2,
            SHORT_VIDEO: 3,
            SOUND: 4
        }, T = {
            APP_VERSION: "2.1",
            SERVER_VERSION: 1
        }, C = {
            C2C: 1,
            GROUP_COMMON: 3,
            GROUP_TIP: 4,
            GROUP_SYSTEM: 5,
            GROUP_TIP2: 6,
            FRIEND_NOTICE: 7,
            PROFILE_NOTICE: 8,
            C2C_COMMON: 9,
            C2C_EVENT: 10
        }, A = {
            COMMON: 0
        }, S = {
            READED: 92,
            KICKEDOUT: 96
        }, G = {
            COMMON: 0,
            LOVEMSG: 1,
            TIP: 2,
            REDPACKET: 3
        }, F = {
            REDPACKET: 1,
            COMMON: 2,
            LOVEMSG: 3
        }, O = {
            JOIN: 1,
            QUIT: 2,
            KICK: 3,
            SET_ADMIN: 4,
            CANCEL_ADMIN: 5,
            MODIFY_GROUP_INFO: 6,
            MODIFY_MEMBER_INFO: 7
        }, R = {
            FACE_URL: 1,
            NAME: 2,
            OWNER: 3,
            NOTIFICATION: 4,
            INTRODUCTION: 5
        }, N = {
            JOIN_GROUP_REQUEST: 1,
            JOIN_GROUP_ACCEPT: 2,
            JOIN_GROUP_REFUSE: 3,
            KICK: 4,
            DESTORY: 5,
            CREATE: 6,
            INVITED_JOIN_GROUP_REQUEST: 7,
            QUIT: 8,
            SET_ADMIN: 9,
            CANCEL_ADMIN: 10,
            REVOKE: 11,
            READED: 15,
            CUSTOM: 255,
            INVITED_JOIN_GROUP_REQUEST_AGREE: 12
        }, v = {
            FRIEND_ADD: 1,
            FRIEND_DELETE: 2,
            PENDENCY_ADD: 3,
            PENDENCY_DELETE: 4,
            BLACK_LIST_ADD: 5,
            BLACK_LIST_DELETE: 6,
            PENDENCY_REPORT: 7,
            FRIEND_UPDATE: 8
        }, P = {
            PROFILE_MODIFY: 1
        }, b = {
            OK: 0,
            SIGNATURE_EXPIRATION: 11
        }, U = {
            INIT: -1,
            ON: 0,
            RECONNECT: 1,
            OFF: 9999
        }, L = {
            GROUP_MSG: 1,
            C2C_MSG: 2,
            USER_HEAD: 3,
            GROUP_HEAD: 4
        }, D = {
            ING: 14,
            STOP: 15
        }, k = U.INIT, w = !1, q = 0, x = 6e4, B = null, K = 0, z = 0, H = [], J = null, V = null, Y = {
            sdkAppID: null,
            appIDAt3rd: null,
            accountType: null,
            identifier: null,
            tinyid: null,
            identifierNick: null,
            userSig: null,
            a2: null,
            contentType: "json",
            apn: 1
        }, X = {}, j = 0, Q = {}, W = 0, $ = [], Z = [], ee = [], te = {
            downloadMap: {}
        }, ne = {
            "[惊讶]": 0,
            "[撇嘴]": 1,
            "[色]": 2,
            "[发呆]": 3,
            "[得意]": 4,
            "[流泪]": 5,
            "[害羞]": 6,
            "[闭嘴]": 7,
            "[睡]": 8,
            "[大哭]": 9,
            "[尴尬]": 10,
            "[发怒]": 11,
            "[调皮]": 12,
            "[龇牙]": 13,
            "[微笑]": 14,
            "[难过]": 15,
            "[酷]": 16,
            "[冷汗]": 17,
            "[抓狂]": 18,
            "[吐]": 19,
            "[偷笑]": 20,
            "[可爱]": 21,
            "[白眼]": 22,
            "[傲慢]": 23,
            "[饿]": 24,
            "[困]": 25,
            "[惊恐]": 26,
            "[流汗]": 27,
            "[憨笑]": 28,
            "[大兵]": 29,
            "[奋斗]": 30,
            "[咒骂]": 31,
            "[疑问]": 32,
            "[嘘]": 33,
            "[晕]": 34
        }, oe = {}, re = new function() {
            this.formatTimeStamp = function(e, t) {
                if (!e) return 0;
                var n;
                t = t || "yyyy-MM-dd hh:mm:ss";
                var o = new Date(1e3 * e), r = {
                    "M+": o.getMonth() + 1,
                    "d+": o.getDate(),
                    "h+": o.getHours(),
                    "m+": o.getMinutes(),
                    "s+": o.getSeconds()
                };
                n = /(y+)/.test(t) ? t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)) : t;
                for (var i in r) new RegExp("(" + i + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
                return n;
            }, this.groupTypeEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Public":
                    t = "公开群";
                    break;

                  case "ChatRoom":
                    t = "聊天室";
                    break;

                  case "Private":
                    t = "私有群";
                    break;

                  case "AVChatRoom":
                    t = "直播聊天室";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupTypeCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "公开群":
                    t = "Public";
                    break;

                  case "聊天室":
                    t = "ChatRoom";
                    break;

                  case "私有群":
                    t = "Private";
                    break;

                  case "直播聊天室":
                    t = "AVChatRoom";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Member":
                    t = "成员";
                    break;

                  case "Admin":
                    t = "管理员";
                    break;

                  case "Owner":
                    t = "群主";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "成员":
                    t = "Member";
                    break;

                  case "管理员":
                    t = "Admin";
                    break;

                  case "群主":
                    t = "Owner";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "AcceptAndNotify":
                    t = "接收并提示";
                    break;

                  case "AcceptNotNotify":
                    t = "接收不提示";
                    break;

                  case "Discard":
                    t = "屏蔽";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "接收并提示":
                    t = "AcceptAndNotify";
                    break;

                  case "接收不提示":
                    t = "AcceptNotNotify";
                    break;

                  case "屏蔽":
                    t = "Discard";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.formatText2Html = function(e) {
                var t = e;
                return t && (t = (t = (t = this.xssFilter(t)).replace(/ /g, "&nbsp;")).replace(/\n/g, "<br/>")), 
                t;
            }, this.formatHtml2Text = function(e) {
                var t = e;
                return t && (t = (t = t.replace(/&nbsp;/g, " ")).replace(/<br\/>/g, "\n")), t;
            }, this.getStrBytes = function(e) {
                if (null == e || void 0 === e) return 0;
                if ("string" != typeof e) return 0;
                var t, n, o, r = 0;
                for (n = 0, o = e.length; n < o; n++) r += (t = e.charCodeAt(n)) <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
                return r;
            }, this.xssFilter = function(e) {
                return e = e.toString(), e = e.replace(/[<]/g, "&lt;"), e = e.replace(/[>]/g, "&gt;"), 
                e = e.replace(/"/g, "&quot;");
            }, this.trimStr = function(e) {
                return e ? (e = e.toString()).replace(/(^\s*)|(\s*$)/g, "") : "";
            }, this.validNumber = function(e) {
                return (e = e.toString()).match(/(^\d{1,8}$)/g);
            }, this.getReturnError = function(e, t) {
                return t || (t = -100), {
                    ActionStatus: d.FAIL,
                    ErrorCode: t,
                    ErrorInfo: e + "[" + t + "]"
                };
            }, this.replaceObject = function(t, n) {
                for (var o in n) if (t[o]) if (n[t[o]] = n[o], delete n[o], n[t[o]] instanceof Array) for (var r = n[t[o]].length, i = 0; i < r; i++) n[t[o]][i] = this.replaceObject(t, n[t[o]][i]); else "object" === e(n[t[o]]) && (n[t[o]] = this.replaceObject(t, n[t[o]]));
                return n;
            };
        }(), ie = new function() {
            var e = !0;
            this.setOn = function(t) {
                e = t;
            }, this.getOn = function() {
                return e;
            }, this.error = function(t) {
                try {
                    e && console.error(t);
                } catch (e) {}
            }, this.warn = function(t) {
                try {
                    e && console.warn(t);
                } catch (e) {}
            }, this.info = function(t) {
                try {
                    e && console.info(t);
                } catch (e) {}
            }, this.debug = function(t) {
                try {
                    e && console.debug(t);
                } catch (e) {}
            };
        }(), se = function(e) {
            return e || (e = new Date()), Math.round(e.getTime() / 1e3);
        }, ue = function() {
            return W ? W += 1 : W = Math.round(1e7 * Math.random()), W;
        }, ae = function() {
            return Math.round(4294967296 * Math.random());
        }, ce = function(e, t, n, o, r, i, s) {
            wx.request({
                url: t,
                data: n,
                dataType: "json",
                method: e,
                header: {
                    "Content-Type": "application/json"
                },
                success: function(e) {
                    q = K = 0, i && i(e.data);
                },
                fail: function(e) {
                    setTimeout(function() {
                        var e = re.getReturnError("请求服务器失败,请检查你的网络是否正常", -2);
                        s && s(e);
                    }, 16);
                }
            });
        }, le = function(e, t, n, o, r, i, s) {
            ce(e, t, JSON.stringify(n), 0, 0, function(e) {
                var t = null;
                e && (t = e), i && i(t);
            }, s);
        }, pe = function() {
            return Y.sdkAppID && Y.identifier;
        }, fe = function(e, t) {
            if (!pe()) {
                if (t) {
                    var n = re.getReturnError("请登录", -4);
                    e && e(n);
                }
                return !1;
            }
            return !0;
        }, ge = function() {
            return i;
        }, de = function(e, t, n, o) {
            var i = s;
            i = ge() ? s.FORMAL.COMMON : s.TEST.COMMON, e == a.PIC && (i = ge() ? s.FORMAL.PIC : s.TEST.PIC);
            var u = i + "/" + c[e] + "/" + e + "/" + t + "?websdkappid=" + r.APPID + "&v=" + r.VERSION;
            if (pe()) {
                if ("login" == t) u += "&identifier=" + encodeURIComponent(Y.identifier) + "&usersig=" + Y.userSig; else if (Y.tinyid && Y.a2) u += "&tinyid=" + Y.tinyid + "&a2=" + Y.a2; else if (o) return ie.error("tinyid或a2为空[" + e + "][" + t + "]"), 
                o(re.getReturnError("tinyid或a2为空[" + e + "][" + t + "]", -5)), !1;
                u += "&contenttype=" + Y.contentType;
            }
            return u += "&sdkappid=" + Y.sdkAppID + "&accounttype=" + Y.accountType + "&apn=" + Y.apn + "&reqtime=" + se();
        }, me = function(e, t) {
            var n = null;
            return J && H[0] ? n = "http://" + H[0] + "/asn.com/stddownload_common_file?authkey=" + J + "&bid=" + _.BUSSINESS_ID + "&subbid=" + Y.sdkAppID + "&fileid=" + e + "&filetype=" + y.SOUND + "&openid=" + t + "&ver=0" : ie.error("拼接语音下载url不报错：ip或者authkey为空"), 
            n;
        }, Ie = function(e, t, n) {
            var o = null;
            return J && H[0] ? o = "http://" + H[0] + "/asn.com/stddownload_common_file?authkey=" + J + "&bid=" + _.BUSSINESS_ID + "&subbid=" + Y.sdkAppID + "&fileid=" + e + "&filetype=" + y.FILE + "&openid=" + t + "&ver=0&filename=" + encodeURIComponent(n) : ie.error("拼接文件下载url不报错：ip或者authkey为空"), 
            te.downloadMap["uuid_" + e] = o, o;
        }, Me = function(e, t, n, o, r, i, s) {
            var u = {
                From_Account: t,
                To_Account: r,
                os_platform: 10,
                Timestamp: se().toString(),
                Random: ae().toString(),
                request_info: [ {
                    busi_id: i,
                    download_flag: o,
                    type: s,
                    uuid: e,
                    version: T.SERVER_VERSION,
                    auth_key: J,
                    ip: H[0]
                } ]
            };
            Tt(u, function(e) {
                0 == e.error_code && e.response_info && (te.downloadMap["uuid_" + u.uuid] = e.response_info.url), 
                onAppliedDownloadUrl && onAppliedDownloadUrl({
                    uuid: u.uuid,
                    url: e.response_info.url,
                    maps: te.downloadMap
                });
            }, function(e) {
                ie.error("获取下载地址失败", u.uuid);
            });
        }, Ee = function() {
            for (var e in Q) {
                var t = Q[e];
                t && (t.abort(), Q[j] = null);
            }
            j = 0, Q = {};
        }, _e = function() {
            Ee(), Y = {
                sdkAppID: null,
                appIDAt3rd: null,
                accountType: null,
                identifier: null,
                identifierNick: null,
                userSig: null,
                contentType: "json",
                apn: 1
            }, X = {}, W = 0, ee = [], Ot.clear(), Ft.clear(), B = null;
        }, ye = function(e, t, n, o, r) {
            _e(), n && (X = n), 0 == X.isAccessFormalEnv && (ie.error("请切换为正式环境！！！！"), i = X.isAccessFormalEnv), 
            0 == X.isLogOn && ie.setOn(X.isLogOn), e || !r ? e.sdkAppID || !r ? e.accountType || !r ? (e.identifier && (Y.identifier = e.identifier.toString()), 
            e.identifier && !e.userSig && r ? r(re.getReturnError("loginInfo.userSig is empty", -9)) : (e.userSig && (Y.userSig = e.userSig.toString()), 
            Y.sdkAppID = e.sdkAppID, Y.accountType = e.accountType, Y.identifier && Y.userSig ? Te(function(e, n) {
                Ot.init(t, function(t) {
                    o && (t.identifierNick = e, t.headurl = n, o(t));
                }, r);
            }, r) : Ot.init(t, o, r))) : r(re.getReturnError("loginInfo.accountType is empty", -8)) : r(re.getReturnError("loginInfo.sdkAppID is empty", -7)) : r(re.getReturnError("loginInfo is empty", -6));
        }, he = function(e, t, n) {
            if ("longpolling" != e || 60008 != t && 91101 != t) {
                var o = l[e];
                if (o) {
                    var i = se(), s = null, u = {
                        Code: t,
                        ErrMsg: n
                    };
                    if (Y.a2 ? s = Y.a2.substring(0, 10) + "_" + i + "_" + ae() : Y.userSig && (s = Y.userSig.substring(0, 10) + "_" + i + "_" + ae()), 
                    s) {
                        var a = {
                            UniqKey: s,
                            EventId: o,
                            ReportTime: i,
                            MsgCmdErrorCode: u
                        };
                        if ("login" == e) {
                            var c = [];
                            c.push(a), yt({
                                EvtItems: c,
                                MainVersion: r.VERSION,
                                Version: "0"
                            }, function(e) {
                                c = null;
                            }, function(e) {
                                c = null;
                            });
                        } else ee.push(a), ee.length >= 20 && yt({
                            EvtItems: ee,
                            MainVersion: r.VERSION,
                            Version: "0"
                        }, function(e) {
                            ee = [];
                        }, function(e) {
                            ee = [];
                        });
                    }
                }
            }
        }, Te = function(e, t) {
            Ct.apiCall(a.OPEN_IM, "login", {
                State: "Online"
            }, function(n) {
                if (n.TinyId) Y.tinyid = n.TinyId; else if (t) return void t(re.getReturnError("TinyId is empty", -10));
                if (n.A2Key) Y.a2 = n.A2Key; else if (t) return void t(re.getReturnError("A2Key is empty", -11));
                var o = [ "Tag_Profile_IM_Nick", "Tag_Profile_IM_Image" ], r = {
                    From_Account: Y.identifier,
                    To_Account: [ Y.identifier ],
                    LastStandardSequence: 0,
                    TagList: o
                };
                ft(r, function(t) {
                    var n, o;
                    if (t.UserProfileItem && t.UserProfileItem.length > 0) for (var r in t.UserProfileItem) for (var i in t.UserProfileItem[r].ProfileItem) switch (t.UserProfileItem[r].ProfileItem[i].Tag) {
                      case "Tag_Profile_IM_Nick":
                        (n = t.UserProfileItem[r].ProfileItem[i].Value) && (Y.identifierNick = n);
                        break;

                      case "Tag_Profile_IM_Image":
                        (o = t.UserProfileItem[r].ProfileItem[i].Value) && (Y.headurl = o);
                    }
                    e && e(Y.identifierNick, Y.headurl);
                }, t);
            }, t);
        }, Ce = function(e, t, n) {
            if (!fe(n, !1)) return _e(), void (t && t({
                ActionStatus: d.OK,
                ErrorCode: 0,
                ErrorInfo: "logout success"
            }));
            "all" == e ? Ct.apiCall(a.OPEN_IM, "logout", {}, function(e) {
                _e(), t && t(e);
            }, n) : Ct.apiCall(a.OPEN_IM, "longpollinglogout", {
                LongPollingId: B
            }, function(e) {
                _e(), t && t(e);
            }, n);
        }, Ae = function(e, t, n) {
            if (fe(n, !0)) {
                var o = null;
                switch (e.sess.type()) {
                  case p.C2C:
                    o = {
                        From_Account: Y.identifier,
                        To_Account: e.sess.id().toString(),
                        MsgTimeStamp: e.time,
                        MsgSeq: e.seq,
                        MsgRandom: e.random,
                        MsgBody: []
                    };
                    break;

                  case p.GROUP:
                    var r = e.getSubType();
                    switch (o = {
                        GroupId: e.sess.id().toString(),
                        From_Account: Y.identifier,
                        Random: e.random,
                        MsgBody: []
                    }, r) {
                      case G.COMMON:
                        o.MsgPriority = "COMMON";
                        break;

                      case G.REDPACKET:
                        o.MsgPriority = "REDPACKET";
                        break;

                      case G.LOVEMSG:
                        o.MsgPriority = "LOVEMSG";
                        break;

                      case G.TIP:
                        ie.error("不能主动发送群提示消息,subType=" + r);
                        break;

                      default:
                        return void ie.error("发送群消息时，出现未知子消息类型：subType=" + r);
                    }
                    break;

                  default:
                    o = {
                        From_Account: Y.identifier,
                        To_Account: e.sess.id().toString(),
                        MsgTimeStamp: e.time,
                        MsgSeq: e.seq,
                        MsgRandom: e.random,
                        MsgBody: []
                    };
                }
                for (var i in e.elems) {
                    var s = e.elems[i], u = null, c = s.type;
                    switch (c) {
                      case m.TEXT:
                        u = {
                            Text: s.content.text
                        };
                        break;

                      case m.FACE:
                        u = {
                            Index: s.content.index,
                            Data: s.content.data
                        };
                        break;

                      case m.IMAGE:
                        var l = [];
                        for (var f in s.content.ImageInfoArray) l.push({
                            Type: s.content.ImageInfoArray[f].type,
                            Size: s.content.ImageInfoArray[f].size,
                            Width: s.content.ImageInfoArray[f].width,
                            Height: s.content.ImageInfoArray[f].height,
                            URL: s.content.ImageInfoArray[f].url
                        });
                        u = {
                            ImageFormat: s.content.ImageFormat,
                            UUID: s.content.UUID,
                            ImageInfoArray: l
                        };
                        break;

                      case m.SOUND:
                        ie.warn("web端暂不支持发送语音消息");
                        continue;

                      case m.LOCATION:
                        ie.warn("web端暂不支持发送地理位置消息");
                        continue;

                      case m.FILE:
                        u = {
                            UUID: s.content.uuid,
                            FileName: s.content.name,
                            FileSize: s.content.size,
                            DownloadFlag: s.content.downFlag
                        };
                        break;

                      case m.CUSTOM:
                        u = {
                            Data: s.content.data,
                            Desc: s.content.desc,
                            Ext: s.content.ext
                        }, c = m.CUSTOM;
                        break;

                      default:
                        ie.warn("web端暂不支持发送" + s.type + "消息");
                        continue;
                    }
                    e.PushInfoBoolean && (o.OfflinePushInfo = e.PushInfo), o.MsgBody.push({
                        MsgType: c,
                        MsgContent: u
                    });
                }
                e.sess.type() == p.C2C ? Ct.apiCall(a.OPEN_IM, "sendmsg", o, t, n) : e.sess.type() == p.GROUP ? Ct.apiCall(a.GROUP, "send_group_msg", o, t, n) : Ct.apiCall(a.OPEN_IM, "sendmsg", o, t, n);
            }
        }, Se = function(e, t, n) {
            (i || "undefined" == typeof stopPolling || 1 != stopPolling) && fe(n, !0) && Ct.apiCall(a.OPEN_IM, "longpolling", e, t, n, x, !0);
        }, Ge = function(e, t, n, o) {
            Ct.apiCall(a.BIG_GROUP_LONG_POLLING, "get_msg", e, t, n, o);
        }, Fe = function e(t, n, o, r) {
            fe(r, !0) && Ct.apiCall(a.OPEN_IM, "getmsg", {
                Cookie: t,
                SyncFlag: n
            }, function(t) {
                if (t.MsgList && t.MsgList.length) for (var n in t.MsgList) $.push(t.MsgList[n]);
                1 == t.SyncFlag ? e(t.Cookie, t.SyncFlag, o, r) : (t.MsgList = $, $ = [], o && o(t));
            }, r);
        }, Oe = function(e, t, n, o) {
            if (fe(o, !0)) {
                var r = [];
                for (var i in t) {
                    var s = {
                        To_Account: t[i].toAccount,
                        LastedMsgTime: t[i].lastedMsgTime
                    };
                    r.push(s);
                }
                Ct.apiCall(a.OPEN_IM, "msgreaded", {
                    C2CMsgReaded: {
                        Cookie: e,
                        C2CMsgReadedItem: r
                    }
                }, n, o);
            }
        }, Re = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.OPEN_IM, "deletemsg", e, t, n);
        }, Ne = function e(t, n, o) {
            fe(o, !0) && Ct.apiCall(a.OPEN_IM, "getroammsg", t, function(r) {
                var i = t.MaxCnt, s = r.Complete, u = r.MaxCnt, a = r.MsgKey, c = r.LastMsgTime;
                if (r.MsgList && r.MsgList.length) for (var l in r.MsgList) Z.push(r.MsgList[l]);
                var p = null;
                0 == s && u < i && (p = {
                    Peer_Account: t.Peer_Account,
                    MaxCnt: i - u,
                    LastMsgTime: c,
                    MsgKey: a
                }), p ? e(p, n, o) : (r.MsgList = Z, Z = [], n && n(r));
            }, o);
        }, ve = function(e, t, n) {
            if (fe(n, !0)) {
                for (var o = {
                    Type: e.Type,
                    Name: e.Name
                }, r = [], i = 0; i < e.MemberList.length; i++) r.push({
                    Member_Account: e.MemberList[i]
                });
                o.MemberList = r, e.GroupId && (o.GroupId = e.GroupId), e.Owner_Account && (o.Owner_Account = e.Owner_Account), 
                e.Introduction && (o.Introduction = e.Introduction), e.Notification && (o.Notification = e.Notification), 
                e.MaxMemberCount && (o.MaxMemberCount = e.MaxMemberCount), e.ApplyJoinOption && (o.ApplyJoinOption = e.ApplyJoinOption), 
                e.AppDefinedData && (o.AppDefinedData = e.AppDefinedData), e.FaceUrl && (o.FaceUrl = e.FaceUrl), 
                Ct.apiCall(a.GROUP, "create_group", o, t, n);
            }
        }, Pe = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "create_group", e, t, n);
        }, be = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "modify_group_base_info", e, t, n);
        }, Ue = function(e, t, n) {
            fe(n, !0) && (e.GroupId = String(e.GroupId), Ct.apiCall(a.GROUP, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, t, n));
        }, Le = function(e, t, n) {
            e.GroupId = String(e.GroupId), o = e.GroupId;
            var r;
            r = fe(n, !1) ? a.GROUP : a.BIG_GROUP, Ct.apiCall(r, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, function(o) {
                if (o.JoinedStatus && "JoinedSuccess" == o.JoinedStatus) {
                    if (!o.LongPollingKey) return void (n && n(re.getReturnError("Join Group succeed; But the type of group is not AVChatRoom: groupid=" + e.GroupId, -12)));
                    Ot.setBigGroupLongPollingOn(!0), Ot.setBigGroupLongPollingKey(o.LongPollingKey), 
                    Ot.setBigGroupLongPollingMsgMap(e.GroupId, 0), Ot.bigGroupLongPolling();
                }
                t && t(o);
            }, function(e) {
                n && n(e);
            });
        }, De = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "handle_apply_join_group", {
                GroupId: e.GroupId,
                Applicant_Account: e.Applicant_Account,
                HandleMsg: e.HandleMsg,
                Authentication: e.Authentication,
                MsgKey: e.MsgKey,
                ApprovalMsg: e.ApprovalMsg,
                UserDefinedField: e.UserDefinedField
            }, t, function(e) {
                if (10024 == e.ErrorCode) {
                    if (t) {
                        var o = {
                            ActionStatus: d.OK,
                            ErrorCode: 0,
                            ErrorInfo: "该申请已经被处理过"
                        };
                        t(o);
                    }
                } else n && n(e);
            });
        }, ke = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "get_pendency", {
                StartTime: e.StartTime,
                Limit: e.Limit,
                Handle_Account: Y.identifier
            }, t, function(e) {});
        }, we = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "report_pendency", {
                ReportTime: e.ReportTime,
                From_Account: Y.identifier
            }, t, function(e) {});
        }, qe = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "handle_invite_join_group", {
                GroupId: e.GroupId,
                Inviter_Account: e.Inviter_Account,
                HandleMsg: e.HandleMsg,
                Authentication: e.Authentication,
                MsgKey: e.MsgKey,
                ApprovalMsg: e.ApprovalMsg,
                UserDefinedField: e.UserDefinedField
            }, t, function(e) {});
        }, xe = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "quit_group", {
                GroupId: e.GroupId
            }, t, n);
        }, Be = function(e, t, n) {
            var o;
            o = fe(n, !1) ? a.GROUP : a.BIG_GROUP, Ot.resetBigGroupLongPollingInfo(), Ct.apiCall(o, "quit_group", {
                GroupId: e.GroupId
            }, function(n) {
                Ft.delSessByTypeId(p.GROUP, e.GroupId), t && t(n);
            }, n);
        }, Ke = function(e, t, n) {
            Ct.apiCall(a.GROUP, "search_group", e, t, n);
        }, ze = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "get_group_public_info", {
                GroupIdList: e.GroupIdList,
                ResponseFilter: {
                    GroupBasePublicInfoFilter: e.GroupBasePublicInfoFilter
                }
            }, function(e) {
                if (e.ErrorInfo = "", e.GroupInfo) for (var o in e.GroupInfo) {
                    var r = e.GroupInfo[o].ErrorCode;
                    r > 0 && (e.ActionStatus = d.FAIL, e.GroupInfo[o].ErrorInfo = "[" + r + "]" + e.GroupInfo[o].ErrorInfo, 
                    e.ErrorInfo += e.GroupInfo[o].ErrorInfo + "\n");
                }
                e.ActionStatus == d.FAIL ? n && n(e) : t && t(e);
            }, n);
        }, He = function(e, t, n) {
            if (fe(n, !0)) {
                var o = {
                    GroupIdList: e.GroupIdList,
                    ResponseFilter: {
                        GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                        MemberInfoFilter: e.MemberInfoFilter
                    }
                };
                e.AppDefinedDataFilter_Group && (o.ResponseFilter.AppDefinedDataFilter_Group = e.AppDefinedDataFilter_Group), 
                e.AppDefinedDataFilter_GroupMember && (o.ResponseFilter.AppDefinedDataFilter_GroupMember = e.AppDefinedDataFilter_GroupMember), 
                Ct.apiCall(a.GROUP, "get_group_info", o, t, n);
            }
        }, Je = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "get_group_member_info", {
                GroupId: e.GroupId,
                Offset: e.Offset,
                Limit: e.Limit,
                MemberInfoFilter: e.MemberInfoFilter,
                MemberRoleFilter: e.MemberRoleFilter,
                AppDefinedDataFilter_GroupMember: e.AppDefinedDataFilter_GroupMember
            }, t, n);
        }, Ve = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "add_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberList: e.MemberList
            }, t, n);
        }, Ye = function(e, t, n) {
            if (fe(n, !0)) {
                var o = {};
                e.GroupId && (o.GroupId = e.GroupId), e.Member_Account && (o.Member_Account = e.Member_Account), 
                e.Role && (o.Role = e.Role), e.MsgFlag && (o.MsgFlag = e.MsgFlag), e.ShutUpTime && (o.ShutUpTime = e.ShutUpTime), 
                e.NameCard && (o.NameCard = e.NameCard), e.AppMemberDefinedData && (o.AppMemberDefinedData = e.AppMemberDefinedData), 
                Ct.apiCall(a.GROUP, "modify_group_member_info", o, t, n);
            }
        }, Xe = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "delete_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberToDel_Account: e.MemberToDel_Account,
                Reason: e.Reason
            }, t, n);
        }, je = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "destroy_group", {
                GroupId: e.GroupId
            }, t, n);
        }, Qe = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "change_group_owner", e, t, n);
        }, We = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "get_joined_group_list", {
                Member_Account: e.Member_Account,
                Limit: e.Limit,
                Offset: e.Offset,
                GroupType: e.GroupType,
                ResponseFilter: {
                    GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                    SelfInfoFilter: e.SelfInfoFilter
                }
            }, t, n);
        }, $e = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "get_role_in_group", {
                GroupId: e.GroupId,
                User_Account: e.User_Account
            }, t, n);
        }, Ze = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "forbid_send_msg", {
                GroupId: e.GroupId,
                Members_Account: e.Members_Account,
                ShutUpTime: e.ShutUpTime
            }, t, n);
        }, et = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "send_group_system_notification", e, t, n);
        }, tt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "group_msg_get", {
                GroupId: e.GroupId,
                ReqMsgSeq: e.ReqMsgSeq,
                ReqMsgNumber: e.ReqMsgNumber
            }, t, n);
        }, nt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.GROUP, "msg_read_report", {
                GroupId: e.GroupId,
                MsgReadedSeq: e.MsgReadedSeq
            }, t, n);
        }, ot = function(e) {
            var t = [];
            if (e.Fail_Account && e.Fail_Account.length && (t = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var n in e.Invalid_Account) t.push(e.Invalid_Account[n]);
            if (t.length) {
                e.ActionStatus = d.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "";
                for (var o in t) {
                    var r = t[o];
                    for (var i in e.ResultItem) if (e.ResultItem[i].To_Account == r) {
                        var s = e.ResultItem[i].ResultCode;
                        e.ResultItem[i].ResultInfo = "[" + s + "]" + e.ResultItem[i].ResultInfo, e.ErrorInfo += e.ResultItem[i].ResultInfo + "\n";
                        break;
                    }
                }
            }
            return e;
        }, rt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "friend_add", {
                From_Account: Y.identifier,
                AddFriendItem: e.AddFriendItem
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, it = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "friend_delete", {
                From_Account: Y.identifier,
                To_Account: e.To_Account,
                DeleteType: e.DeleteType
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, st = function(e, t, n) {
            fe(n, !0) && (1 == e.chatType ? Ct.apiCall(a.DEL_CHAT, "delete", {
                From_Account: Y.identifier,
                Type: e.chatType,
                To_Account: e.To_Account
            }, t, n) : Ct.apiCall(a.DEL_CHAT, "delete", {
                From_Account: Y.identifier,
                Type: e.chatType,
                ToGroupid: e.To_Account
            }, t, n));
        }, ut = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "pendency_get", {
                From_Account: Y.identifier,
                PendencyType: e.PendencyType,
                StartTime: e.StartTime,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n);
        }, at = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "PendencyReport", {
                From_Account: Y.identifier,
                LatestPendencyTimeStamp: e.LatestPendencyTimeStamp
            }, t, n);
        }, ct = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "pendency_delete", {
                From_Account: Y.identifier,
                PendencyType: e.PendencyType,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, lt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "friend_response", {
                From_Account: Y.identifier,
                ResponseFriendItem: e.ResponseFriendItem
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, pt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "friend_get_all", {
                From_Account: Y.identifier,
                TimeStamp: e.TimeStamp,
                StartIndex: e.StartIndex,
                GetCount: e.GetCount,
                LastStandardSequence: e.LastStandardSequence,
                TagList: e.TagList
            }, t, n);
        }, ft = function(e, t, n) {
            e.To_Account.length > 100 && (e.To_Account.length = 100, ie.error("获取用户资料人数不能超过100人")), 
            fe(n, !0) && Ct.apiCall(a.PROFILE, "portrait_get", {
                From_Account: Y.identifier,
                To_Account: e.To_Account,
                TagList: e.TagList
            }, function(e) {
                var o = [];
                if (e.Fail_Account && e.Fail_Account.length && (o = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var r in e.Invalid_Account) o.push(e.Invalid_Account[r]);
                if (o.length) {
                    e.ActionStatus = d.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "";
                    for (var i in o) {
                        var s = o[i];
                        for (var u in e.UserProfileItem) if (e.UserProfileItem[u].To_Account == s) {
                            var a = e.UserProfileItem[u].ResultCode;
                            e.UserProfileItem[u].ResultInfo = "[" + a + "]" + e.UserProfileItem[u].ResultInfo, 
                            e.ErrorInfo += "账号:" + s + "," + e.UserProfileItem[u].ResultInfo + "\n";
                            break;
                        }
                    }
                }
                e.ActionStatus == d.FAIL ? n && n(e) : t && t(e);
            }, n);
        }, gt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.PROFILE, "portrait_set", {
                From_Account: Y.identifier,
                ProfileItem: e.ProfileItem
            }, function(n) {
                for (var o in e.ProfileItem) {
                    var r = e.ProfileItem[o];
                    if ("Tag_Profile_IM_Nick" == r.Tag) {
                        Y.identifierNick = r.Value;
                        break;
                    }
                }
                t && t(n);
            }, n);
        }, dt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "black_list_add", {
                From_Account: Y.identifier,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, mt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "black_list_delete", {
                From_Account: Y.identifier,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, It = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.FRIEND, "black_list_get", {
                From_Account: Y.identifier,
                StartIndex: e.StartIndex,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n);
        }, Mt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.RECENT_CONTACT, "get", {
                From_Account: Y.identifier,
                Count: e.Count
            }, t, n);
        }, Et = function(e, t, n) {
            if (fe(n, !0)) {
                var o;
                o = ge() ? "pic_up" : "pic_up_test", Ct.apiCall(a.PIC, o, {
                    App_Version: T.APP_VERSION,
                    From_Account: Y.identifier,
                    To_Account: e.To_Account,
                    Seq: e.Seq,
                    Timestamp: e.Timestamp,
                    Random: e.Random,
                    File_Str_Md5: e.File_Str_Md5,
                    File_Size: e.File_Size,
                    File_Type: e.File_Type,
                    Server_Ver: T.SERVER_VERSION,
                    Auth_Key: J,
                    Busi_Id: e.Busi_Id,
                    PkgFlag: e.PkgFlag,
                    Slice_Offset: e.Slice_Offset,
                    Slice_Size: e.Slice_Size,
                    Slice_Data: e.Slice_Data
                }, t, n);
            }
        }, _t = function(e, t) {
            fe(t, !0) && Ct.apiCall(a.OPEN_IM, "authkey", {}, e, t);
        }, yt = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.IM_OPEN_STAT, "web_report", e, t, n);
        }, ht = function(e, t, n) {
            fe(n, !0) && Ct.apiCall(a.OPEN_IM, "getlongpollingid", {}, function(e) {
                t && t(e);
            }, n);
        }, Tt = function(e, t, n) {
            Ct.apiCall(a.PIC, "apply_download", e, t, n);
        };
        u = "wechat";
        var Ct = new function() {
            var e = null;
            this.init = function(t, n, o) {
                t && (e = t);
            }, this.callBack = function(t) {
                e && e(t);
            }, this.clear = function() {
                e = null;
            }, this.apiCall = function(e, t, n, o, r, i, s) {
                var u = de(e, t, 0, r);
                0 != u && le("POST", u, n, 0, 0, function(i) {
                    var s = null, a = "";
                    "pic_up" == t && (n.Slice_Data = "");
                    var c = "\n request url: \n" + u + "\n request body: \n" + JSON.stringify(n) + "\n response: \n" + JSON.stringify(i);
                    i.ActionStatus == d.OK ? (ie.info("[" + e + "][" + t + "]success: " + c), o && o(i), 
                    s = 0, a = "") : (s = i.ErrorCode, a = i.ErrorInfo, r && (i.SrcErrorInfo = i.ErrorInfo, 
                    i.ErrorInfo = "[" + e + "][" + t + "]failed: " + c, "longpolling" == t && 60008 == i.ErrorCode || ie.error(i.ErrorInfo), 
                    r(i))), he(t, s, a);
                }, function(e) {
                    r && r(e), he(t, e.ErrorCode, e.ErrorInfo);
                });
            };
        }(), At = function e(t, n, o, r, i, s) {
            this._impl = {
                skey: e.skey(t, n),
                type: t,
                id: n,
                name: o,
                icon: r,
                unread: 0,
                isAutoRead: !1,
                time: i >= 0 ? i : 0,
                curMaxMsgSeq: s >= 0 ? s : 0,
                msgs: [],
                isFinished: 1
            };
        };
        At.skey = function(e, t) {
            return e + t;
        }, At.prototype.type = function() {
            return this._impl.type;
        }, At.prototype.id = function() {
            return this._impl.id;
        }, At.prototype.name = function() {
            return this._impl.name;
        }, At.prototype.icon = function() {
            return this._impl.icon;
        }, At.prototype.unread = function(e) {
            if (void 0 === e) return this._impl.unread;
            this._impl.unread = e;
        }, At.prototype.isFinished = function(e) {
            if (void 0 === e) return this._impl.isFinished;
            this._impl.isFinished = e;
        }, At.prototype.time = function() {
            return this._impl.time;
        }, At.prototype.curMaxMsgSeq = function(e) {
            if (void 0 === e) return this._impl.curMaxMsgSeq;
            this._impl.curMaxMsgSeq = e;
        }, At.prototype.msgCount = function() {
            return this._impl.msgs.length;
        }, At.prototype.msg = function(e) {
            return this._impl.msgs[e];
        }, At.prototype.msgs = function() {
            return this._impl.msgs;
        }, At.prototype._impl_addMsg = function(e, t) {
            this._impl.msgs.push(e), e.time > this._impl.time && (this._impl.time = e.time), 
            e.seq > this._impl.curMaxMsgSeq && (this._impl.curMaxMsgSeq = e.seq), e.isSend || this._impl.isAutoRead || !t || this._impl.unread++;
        };
        var St = function(e, t) {
            this.toAccount = e, this.lastedMsgTime = t;
        }, Gt = function(e, t, n, o, r, i, s, u) {
            this.sess = e, this.subType = s >= 0 ? s : 0, this.fromAccount = i, this.fromAccountNick = u || i, 
            this.isSend = Boolean(t), this.seq = n >= 0 ? n : ue(), this.random = o >= 0 ? o : ae(), 
            this.time = r >= 0 ? r : se(), this.elems = [], e.type();
        };
        Gt.prototype.getSession = function() {
            return this.sess;
        }, Gt.prototype.getType = function() {
            return this.subType;
        }, Gt.prototype.getSubType = function() {
            return this.subType;
        }, Gt.prototype.getFromAccount = function() {
            return this.fromAccount;
        }, Gt.prototype.getFromAccountNick = function() {
            return this.fromAccountNick;
        }, Gt.prototype.getIsSend = function() {
            return this.isSend;
        }, Gt.prototype.getSeq = function() {
            return this.seq;
        }, Gt.prototype.getTime = function() {
            return this.time;
        }, Gt.prototype.getRandom = function() {
            return this.random;
        }, Gt.prototype.getElems = function() {
            return this.elems;
        }, Gt.prototype.getMsgUniqueId = function() {
            return this.uniqueId;
        }, Gt.prototype.addText = function(e) {
            this.addElem(new n.Msg.Elem(m.TEXT, e));
        }, Gt.prototype.addFace = function(e) {
            this.addElem(new n.Msg.Elem(m.FACE, e));
        }, Gt.prototype.addImage = function(e) {
            this.addElem(new n.Msg.Elem(m.IMAGE, e));
        }, Gt.prototype.addLocation = function(e) {
            this.addElem(new n.Msg.Elem(m.LOCATION, e));
        }, Gt.prototype.addFile = function(e) {
            this.addElem(new n.Msg.Elem(m.FILE, e));
        }, Gt.prototype.addCustom = function(e) {
            this.addElem(new n.Msg.Elem(m.CUSTOM, e));
        }, Gt.prototype.addElem = function(e) {
            this.elems.push(e);
        }, Gt.prototype.toHtml = function() {
            var e = "";
            for (var t in this.elems) e += this.elems[t].toHtml();
            return e;
        }, (Gt.Elem = function(e, t) {
            this.type = e, this.content = t;
        }).prototype.getType = function() {
            return this.type;
        }, Gt.Elem.prototype.getContent = function() {
            return this.content;
        }, Gt.Elem.prototype.toHtml = function() {
            return this.content.toHtml();
        }, Gt.Elem.Text = function(e) {
            this.text = re.xssFilter(e);
        }, Gt.Elem.Text.prototype.getText = function() {
            return this.text;
        }, Gt.Elem.Text.prototype.toHtml = function() {
            return this.text;
        }, Gt.Elem.Face = function(e, t) {
            this.index = e, this.data = t;
        }, Gt.Elem.Face.prototype.getIndex = function() {
            return this.index;
        }, Gt.Elem.Face.prototype.getData = function() {
            return this.data;
        }, Gt.Elem.Face.prototype.toHtml = function() {
            var e = null, t = ne[this.data], n = oe[t];
            return n && n[1] && (e = n[1]), e ? "<img src='" + e + "'/>" : this.data;
        }, Gt.Elem.Location = function(e, t, n) {
            this.latitude = t, this.longitude = e, this.desc = n;
        }, Gt.Elem.Location.prototype.getLatitude = function() {
            return this.latitude;
        }, Gt.Elem.Location.prototype.getLongitude = function() {
            return this.longitude;
        }, Gt.Elem.Location.prototype.getDesc = function() {
            return this.desc;
        }, Gt.Elem.Location.prototype.toHtml = function() {
            return "经度=" + this.longitude + ",纬度=" + this.latitude + ",描述=" + this.desc;
        }, Gt.Elem.Images = function(e, t) {
            this.UUID = e, "number" != typeof t && (t = parseInt(M[t] || M.UNKNOWN, 10)), this.ImageFormat = t, 
            this.ImageInfoArray = [];
        }, Gt.Elem.Images.prototype.addImage = function(e) {
            this.ImageInfoArray.push(e);
        }, Gt.Elem.Images.prototype.toHtml = function() {
            var e = this.getImage(I.SMALL), t = this.getImage(I.LARGE), n = this.getImage(I.ORIGIN);
            return t || (t = e), n || (n = e), "<img src='" + e.getUrl() + "#" + t.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + t.getUrl() + "' onclick='imageClick(this)' />";
        }, Gt.Elem.Images.prototype.getImageId = function() {
            return this.UUID;
        }, Gt.Elem.Images.prototype.getImageFormat = function() {
            return this.ImageFormat;
        }, Gt.Elem.Images.prototype.getImage = function(e) {
            for (var t in this.ImageInfoArray) if (this.ImageInfoArray[t].getType() == e) return this.ImageInfoArray[t];
            var n = null;
            return this.ImageInfoArray.forEach(function(t) {
                t.getType() == e && (n = t);
            }), n;
        }, Gt.Elem.Images.Image = function(e, t, n, o, r) {
            this.type = e, this.size = t, this.width = n, this.height = o, this.url = r;
        }, Gt.Elem.Images.Image.prototype.getType = function() {
            return this.type;
        }, Gt.Elem.Images.Image.prototype.getSize = function() {
            return this.size;
        }, Gt.Elem.Images.Image.prototype.getWidth = function() {
            return this.width;
        }, Gt.Elem.Images.Image.prototype.getHeight = function() {
            return this.height;
        }, Gt.Elem.Images.Image.prototype.getUrl = function() {
            return this.url;
        }, Gt.Elem.Sound = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.second = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == p.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? Me(e, o, 0, i, r, this.busiId, h.SOUND) : this.downUrl = me(e, o);
        }, Gt.Elem.Sound.prototype.getUUID = function() {
            return this.uuid;
        }, Gt.Elem.Sound.prototype.getSecond = function() {
            return this.second;
        }, Gt.Elem.Sound.prototype.getSize = function() {
            return this.size;
        }, Gt.Elem.Sound.prototype.getSenderId = function() {
            return this.senderId;
        }, Gt.Elem.Sound.prototype.getDownUrl = function() {
            return this.downUrl;
        }, Gt.Elem.Sound.prototype.toHtml = function() {
            return "ie" == u.type && parseInt(u.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + this.downUrl : '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
        }, Gt.Elem.File = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.name = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == p.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? Me(e, o, 0, i, r, this.busiId, h.FILE) : this.downUrl = Ie(e, o, t);
        }, Gt.Elem.File.prototype.getUUID = function() {
            return this.uuid;
        }, Gt.Elem.File.prototype.getName = function() {
            return this.name;
        }, Gt.Elem.File.prototype.getSize = function() {
            return this.size;
        }, Gt.Elem.File.prototype.getSenderId = function() {
            return this.senderId;
        }, Gt.Elem.File.prototype.getDownUrl = function() {
            return this.downUrl;
        }, Gt.Elem.File.prototype.getDownFlag = function() {
            return this.downFlag;
        }, Gt.Elem.File.prototype.toHtml = function() {
            var e, t;
            return e = this.size, t = "Byte", this.size >= 1024 && (e = Math.round(this.size / 1024), 
            t = "KB"), {
                uuid: this.uuid,
                name: this.name,
                size: e,
                unitStr: t
            };
        }, Gt.Elem.GroupTip = function(e, t, n, o, r, i) {
            this.opType = e, this.opUserId = t, this.groupId = n, this.groupName = o, this.userIdList = r || [], 
            this.groupInfoList = [], this.memberInfoList = [], this.groupMemberNum = null, this.userinfo = i || [];
        }, Gt.Elem.GroupTip.prototype.addGroupInfo = function(e) {
            this.groupInfoList.push(e);
        }, Gt.Elem.GroupTip.prototype.addMemberInfo = function(e) {
            this.memberInfoList.push(e);
        }, Gt.Elem.GroupTip.prototype.getOpType = function() {
            return this.opType;
        }, Gt.Elem.GroupTip.prototype.getOpUserId = function() {
            return this.opUserId;
        }, Gt.Elem.GroupTip.prototype.getGroupId = function() {
            return this.groupId;
        }, Gt.Elem.GroupTip.prototype.getGroupName = function() {
            return this.groupName;
        }, Gt.Elem.GroupTip.prototype.getUserIdList = function() {
            return this.userIdList;
        }, Gt.Elem.GroupTip.prototype.getUserInfo = function() {
            return this.userinfo;
        }, Gt.Elem.GroupTip.prototype.getGroupInfoList = function() {
            return this.groupInfoList;
        }, Gt.Elem.GroupTip.prototype.getMemberInfoList = function() {
            return this.memberInfoList;
        }, Gt.Elem.GroupTip.prototype.getGroupMemberNum = function() {
            return this.groupMemberNum;
        }, Gt.Elem.GroupTip.prototype.setGroupMemberNum = function(e) {
            return this.groupMemberNum = e;
        }, Gt.Elem.GroupTip.prototype.toHtml = function() {
            var e = "[群提示消息]";
            switch (this.opType) {
              case O.JOIN:
                e += this.opUserId + "邀请了";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "加入该群";
                break;

              case O.QUIT:
                e += this.opUserId + "主动退出该群";
                break;

              case O.KICK:
                e += this.opUserId + "将";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "踢出该群";
                break;

              case O.SET_ADMIN:
                e += this.opUserId + "将";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "设为管理员";
                break;

              case O.CANCEL_ADMIN:
                e += this.opUserId + "取消";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "的管理员资格";
                break;

              case O.MODIFY_GROUP_INFO:
                e += this.opUserId + "修改了群资料：";
                for (var t in this.groupInfoList) {
                    var n = this.groupInfoList[t].getType(), o = this.groupInfoList[t].getValue();
                    switch (n) {
                      case R.FACE_URL:
                        e += "群头像为" + o + "; ";
                        break;

                      case R.NAME:
                        e += "群名称为" + o + "; ";
                        break;

                      case R.OWNER:
                        e += "群主为" + o + "; ";
                        break;

                      case R.NOTIFICATION:
                        e += "群公告为" + o + "; ";
                        break;

                      case R.INTRODUCTION:
                        e += "群简介为" + o + "; ";
                        break;

                      default:
                        e += "未知信息为:type=" + n + ",value=" + o + "; ";
                    }
                }
                break;

              case O.MODIFY_MEMBER_INFO:
                e += this.opUserId + "修改了群成员资料:";
                for (var t in this.memberInfoList) {
                    var r = this.memberInfoList[t].getUserId(), i = this.memberInfoList[t].getShutupTime();
                    if (e += r + ": ", e += null != i && void 0 !== i ? 0 == i ? "取消禁言; " : "禁言" + i + "秒; " : " shutupTime为空", 
                    this.memberInfoList.length > 10 && 9 == t) {
                        e += "等" + this.memberInfoList.length + "人";
                        break;
                    }
                }
                break;

              case O.READED:
                Log.info("消息已读同步");
                break;

              default:
                e += "未知群提示消息类型：type=" + this.opType;
            }
            return e;
        }, Gt.Elem.GroupTip.GroupInfo = function(e, t) {
            this.type = e, this.value = t;
        }, Gt.Elem.GroupTip.GroupInfo.prototype.getType = function() {
            return this.type;
        }, Gt.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
            return this.value;
        }, Gt.Elem.GroupTip.MemberInfo = function(e, t) {
            this.userId = e, this.shutupTime = t;
        }, Gt.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
            return this.userId;
        }, Gt.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
            return this.shutupTime;
        }, Gt.Elem.Custom = function(e, t, n) {
            this.data = e, this.desc = t, this.ext = n;
        }, Gt.Elem.Custom.prototype.getData = function() {
            return this.data;
        }, Gt.Elem.Custom.prototype.getDesc = function() {
            return this.desc;
        }, Gt.Elem.Custom.prototype.getExt = function() {
            return this.ext;
        }, Gt.Elem.Custom.prototype.toHtml = function() {
            return this.data;
        };
        var Ft = new function() {
            var e = {}, n = [];
            t = {}, this.cookie = "", this.syncFlag = 0;
            var o = function(t) {
                for (var n in e) t(e[n]);
            }, r = function(e) {
                var n = !1, o = e.sess._impl.skey, r = e.isSend + e.seq + e.random;
                return t[o] && t[o][r] && (n = !0), t[o] ? t[o][r] = {
                    time: e.time
                } : (t[o] = {}, t[o][r] = {
                    time: e.time
                }), n;
            };
            this.sessMap = function() {
                return e;
            }, this.sessCount = function() {
                return n.length;
            }, this.sessByTypeId = function(t, n) {
                var o = At.skey(t, n);
                return void 0 === o || null == o ? null : e[o];
            }, this.delSessByTypeId = function(n, o) {
                var r = At.skey(n, o);
                return void 0 !== r && null != r && (e[r] && (delete e[r], delete t[r]), !0);
            }, this.resetCookieAndSyncFlag = function() {
                this.cookie = "", this.syncFlag = 0;
            }, this.setAutoRead = function(e, t, n) {
                if (n && o(function(e) {
                    e._impl.isAutoRead = !1;
                }), e && (e._impl.isAutoRead = t, t)) if (e._impl.unread = 0, e._impl.type == p.C2C) {
                    var r = [];
                    r.push(new St(e._impl.id, e._impl.time)), Oe(Ft.cookie, r, function(e) {
                        ie.info("[setAutoRead]: c2CMsgReaded success");
                    }, function(e) {
                        ie.error("[setAutoRead}: c2CMsgReaded failed:" + e.ErrorInfo);
                    });
                } else if (e._impl.type == p.GROUP) {
                    var i = {
                        GroupId: e._impl.id,
                        MsgReadedSeq: e._impl.curMaxMsgSeq
                    };
                    nt(i, function(e) {
                        ie.info("groupMsgReaded success");
                    }, function(e) {
                        ie.error("groupMsgReaded failed:" + e.ErrorInfo);
                    });
                }
            }, this.c2CMsgReaded = function(e, t, n) {
                var o = [];
                o.push(new St(e.To_Account, e.LastedMsgTime)), Oe(Ft.cookie, o, function(e) {
                    t && (ie.info("c2CMsgReaded success"), t(e));
                }, function(e) {
                    n && (ie.error("c2CMsgReaded failed:" + e.ErrorInfo), n(e));
                });
            }, this.addSession = function(t) {
                e[t._impl.skey] = t;
            }, this.delSession = function(t) {
                delete e[t._impl.skey];
            }, this.clear = function() {
                e = {}, n = [], t = {}, this.cookie = "", this.syncFlag = 0;
            }, this.addMsg = function(t, n) {
                if (r(t)) return !1;
                var o = t.sess;
                return e[o._impl.skey] || this.addSession(o), o._impl_addMsg(t, n), !0;
            }, this.updateTimeline = function() {
                var e = new Array();
                o(function(t) {
                    e.push(t);
                }), e.sort(function(e, t) {
                    return t.time - e.time;
                }), n = e;
            };
        }(), Ot = new function() {
            var e = null, t = null, n = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null,
                9: null,
                10: null,
                11: null,
                15: null,
                255: null,
                12: null
            }, r = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null
            }, i = {
                1: null
            }, s = null, u = !1, a = 0, c = 0, l = null, f = !1, g = 0, I = 90, M = null, E = {}, _ = {
                92: null,
                96: null
            }, y = null, h = 0, T = {}, A = {};
            this.setLongPollingOn = function(e) {
                u = e;
            }, this.getLongPollingOn = function() {
                return u;
            }, this.resetLongPollingInfo = function() {
                u = !1, a = 0, c = 0;
            }, this.setBigGroupLongPollingOn = function(e) {
                f = e;
            }, this.setBigGroupLongPollingKey = function(e) {
                M = e;
            }, this.resetBigGroupLongPollingInfo = function() {
                f = !1, g = 0, M = null, E = {};
            }, this.setBigGroupLongPollingMsgMap = function(e, t) {
                var n = E[e];
                n ? (n = parseInt(n) + t, E[e] = n) : E[e] = t;
            }, this.clear = function() {
                t = null, n = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null,
                    10: null,
                    11: null,
                    15: null,
                    255: null,
                    12: null
                }, r = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null
                }, i = {
                    1: null
                }, e = null, u = !1, a = 0, c = 0, l = null, f = !1, g = 0, M = null, E = {}, A = {}, 
                H = [], J = null, V = null;
            };
            var b = function(e, t) {
                _t(function(t) {
                    H = t.IpList, J = t.AuthKey, V = t.ExpireTime, e && e(t);
                }, function(e) {
                    ie.error("initIpAndAuthkey failed:" + e.ErrorInfo), t && t(e);
                });
            }, L = function(e, t) {
                var n = {
                    Member_Account: Y.identifier,
                    Limit: 1e3,
                    Offset: 0,
                    GroupBaseInfoFilter: [ "NextMsgSeq" ]
                };
                We(n, function(t) {
                    if (!t.GroupIdList || 0 == t.GroupIdList.length) return ie.info("initMyGroupMaxSeqs: 目前还没有加入任何群组"), 
                    void (e && e(t));
                    for (var n = 0; n < t.GroupIdList.length; n++) {
                        var o = t.GroupIdList[n].GroupId, r = t.GroupIdList[n].NextMsgSeq - 1;
                        T[o] = r;
                    }
                    e && e(t);
                }, function(e) {
                    ie.error("initMyGroupMaxSeqs failed:" + e.ErrorInfo), t && t(e);
                });
            }, z = function(e, t, n) {
                h++;
                var o = {
                    GroupId: e,
                    ReqMsgSeq: t,
                    ReqMsgNumber: n
                };
                ie.warn("第" + h + "次补齐群消息,参数=" + JSON.stringify(o)), Ot.syncGroupMsgs(o);
            }, X = function(e, t) {
                var n = T[e];
                n ? t > n && (T[e] = t) : T[e] = t;
            }, j = function(e, t) {
                for (var n in e) {
                    var o = e[n];
                    if (o.From_Account) {
                        var r = ce(o, !1, !0);
                        r && t.push(r), X(o.ToGroupId, o.MsgSeq);
                    }
                }
                return t;
            }, Q = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > c && (ie.warn("noticeSeq=" + c + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    c = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) {
                    var a = o[u].max - o[u].min + 1, l = T[u];
                    l ? o[u].min - l > 1 || o[u].msgs.length < a ? (ie.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + l + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), 
                    z(u, o[u].max, o[u].max - l), X(u, o[u].max)) : r = j(o[u].msgs, r) : (ie.warn("不存在该群的最大消息seq，群id=" + u), 
                    o[u].msgs.length < a ? (ie.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), 
                    z(u, o[u].max, a), X(u, o[u].max)) : r = j(o[u].msgs, r));
                }
                r.length && Ft.updateTimeline(), e && r.length && e(r);
            }, W = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > c && (ie.warn("noticeSeq=" + c + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    c = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) {
                    var a = o[u].max - o[u].min + 1, l = T[u];
                    l ? o[u].min - l > 1 || o[u].msgs.length < a ? (ie.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + l + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), 
                    z(u, o[u].max, o[u].max - l), X(u, o[u].max)) : r = j(o[u].msgs, r) : (ie.warn("不存在该群的最大消息seq，群id=" + u), 
                    o[u].msgs.length < a ? (ie.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + a), 
                    z(u, o[u].max, a), X(u, o[u].max)) : r = j(o[u].msgs, r));
                }
                r.length && Ft.updateTimeline(), e && r.length && e(r);
            }, $ = function(e, t) {
                for (var o in e) {
                    var r = e[o], i = r.MsgBody, s = i.ReportType;
                    0 == t && r.NoticeSeq && r.NoticeSeq > c && (c = r.NoticeSeq);
                    r.GroupInfo.To_Account;
                    if (t) {
                        var u = r.ToGroupId + "_" + s + "_" + i.Operator_Account;
                        if (A[u]) {
                            ie.warn("收到重复的群系统消息：key=" + u);
                            continue;
                        }
                        A[u] = !0;
                    }
                    var a = {
                        SrcFlag: 0,
                        ReportType: s,
                        GroupId: r.ToGroupId,
                        GroupName: r.GroupInfo.GroupName,
                        Operator_Account: i.Operator_Account,
                        MsgTime: r.MsgTimeStamp,
                        groupReportTypeMsg: i
                    };
                    switch (s) {
                      case N.JOIN_GROUP_REQUEST:
                        a.RemarkInfo = i.RemarkInfo, a.MsgKey = i.MsgKey, a.Authentication = i.Authentication, 
                        a.UserDefinedField = r.UserDefinedField, a.From_Account = r.From_Account, a.MsgSeq = r.ClientSeq, 
                        a.MsgRandom = r.MsgRandom;
                        break;

                      case N.JOIN_GROUP_ACCEPT:
                      case N.JOIN_GROUP_REFUSE:
                        a.RemarkInfo = i.RemarkInfo;
                        break;

                      case N.KICK:
                      case N.DESTORY:
                      case N.CREATE:
                      case N.INVITED_JOIN_GROUP_REQUEST:
                      case N.INVITED_JOIN_GROUP_REQUEST_AGREE:
                      case N.QUIT:
                      case N.SET_ADMIN:
                      case N.CANCEL_ADMIN:
                      case N.REVOKE:
                      case N.READED:
                        break;

                      case N.CUSTOM:
                        a.MsgSeq = r.MsgSeq, a.UserDefinedField = i.UserDefinedField;
                        break;

                      default:
                        ie.error("未知群系统消息类型：reportType=" + s);
                    }
                    if (t) n[s] ? n[s](a) : ie.error("未知群系统消息类型：reportType=" + s); else if (n[s]) if (s == N.READED) for (var l = a.groupReportTypeMsg.GroupReadInfoArray, p = 0, f = l.length; p < f; p++) {
                        var g = l[p];
                        n[s](g);
                    } else n[s](a);
                }
            }, Z = function(e, t) {
                var n, o, i;
                for (var s in e) {
                    switch (n = e[s], o = n.PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > c && (c = n.NoticeSeq), 
                    i = {
                        Type: o
                    }, o) {
                      case v.FRIEND_ADD:
                        i.Accounts = n.FriendAdd_Account;
                        break;

                      case v.FRIEND_DELETE:
                        i.Accounts = n.FriendDel_Account;
                        break;

                      case v.PENDENCY_ADD:
                        i.PendencyList = n.PendencyAdd;
                        break;

                      case v.PENDENCY_DELETE:
                        i.Accounts = n.FrienPencydDel_Account;
                        break;

                      case v.BLACK_LIST_ADD:
                        i.Accounts = n.BlackListAdd_Account;
                        break;

                      case v.BLACK_LIST_DELETE:
                        i.Accounts = n.BlackListDel_Account;
                        break;

                      default:
                        ie.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(n));
                    }
                    t ? o == v.PENDENCY_ADD && r[o] && r[o](i) : r[o] && r[o](i);
                }
            }, ee = function(e, t) {
                var n, o, r;
                for (var s in e) {
                    switch (n = e[s], o = n.PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > c && (c = n.NoticeSeq), 
                    r = {
                        Type: o
                    }, o) {
                      case P.PROFILE_MODIFY:
                        r.Profile_Account = n.Profile_Account, r.ProfileList = n.ProfileList;
                        break;

                      default:
                        ie.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(n));
                    }
                    t ? o == P.PROFILE_MODIFY && i[o] && i[o](r) : i[o] && i[o](r);
                }
            }, te = function(e) {
                var t = e.MsgBody, o = t.ReportType, r = (e.GroupInfo.To_Account, {
                    SrcFlag: 1,
                    ReportType: o,
                    GroupId: e.ToGroupId,
                    GroupName: e.GroupInfo.GroupName,
                    Operator_Account: t.Operator_Account,
                    MsgTime: e.MsgTimeStamp
                });
                switch (o) {
                  case N.JOIN_GROUP_REQUEST:
                    r.RemarkInfo = t.RemarkInfo, r.MsgKey = t.MsgKey, r.Authentication = t.Authentication, 
                    r.UserDefinedField = e.UserDefinedField, r.From_Account = e.From_Account, r.MsgSeq = e.ClientSeq, 
                    r.MsgRandom = e.MsgRandom;
                    break;

                  case N.JOIN_GROUP_ACCEPT:
                  case N.JOIN_GROUP_REFUSE:
                    r.RemarkInfo = t.RemarkInfo;
                    break;

                  case N.KICK:
                  case N.DESTORY:
                  case N.CREATE:
                  case N.INVITED_JOIN_GROUP_REQUEST:
                  case N.INVITED_JOIN_GROUP_REQUEST_AGREE:
                  case N.QUIT:
                  case N.SET_ADMIN:
                  case N.CANCEL_ADMIN:
                  case N.REVOKE:
                    break;

                  case N.CUSTOM:
                    r.MsgSeq = e.MsgSeq, r.UserDefinedField = t.UserDefinedField;
                    break;

                  default:
                    ie.error("未知群系统消息类型：reportType=" + o);
                }
                n[o] && n[o](r);
            }, ne = function(e) {
                for (var t = 0, n = e.length; t < n; t++) oe(e[t]);
            }, oe = function(e) {
                var t = e.SubMsgType;
                switch (t) {
                  case S.READED:
                    break;

                  case S.KICKEDOUT:
                    _[t] && _[t]();
                    break;

                  default:
                    ie.error("未知C2c系统消息：subType=" + t);
                }
                if (e.ReadC2cMsgNotify.UinPairReadArray && _[t]) for (var n = 0, o = e.ReadC2cMsgNotify.UinPairReadArray.length; n < o; n++) {
                    var r = e.ReadC2cMsgNotify.UinPairReadArray[n];
                    _[t](r);
                }
            };
            this.longPolling = function(e, t) {
                function n() {
                    Se(o, function(e) {
                        for (var t in e.EventArray) {
                            var n = e.EventArray[t];
                            switch (n.Event) {
                              case C.C2C:
                                a = n.NotifySeq, ie.warn("longpolling: received new c2c msg"), Ot.syncMsgs();
                                break;

                              case C.GROUP_COMMON:
                                ie.warn("longpolling: received new group msgs"), W(n.Event, n.GroupMsgArray);
                                break;

                              case C.GROUP_TIP:
                              case C.GROUP_TIP2:
                                ie.warn("longpolling: received new group tips"), W(n.Event, n.GroupTips);
                                break;

                              case C.GROUP_SYSTEM:
                                ie.warn("longpolling: received new group system msgs"), $(n.GroupTips, !1);
                                break;

                              case C.FRIEND_NOTICE:
                                ie.warn("longpolling: received new friend system notice"), Z(n.FriendListMod, !1);
                                break;

                              case C.PROFILE_NOTICE:
                                ie.warn("longpolling: received new profile system notice"), ee(n.ProfileDataMod, !1);
                                break;

                              case C.C2C_COMMON:
                                c = n.C2cMsgArray[0].NoticeSeq, ie.warn("longpolling: received new c2c_common msg", c), 
                                Q(n.Event, n.C2cMsgArray);
                                break;

                              case C.C2C_EVENT:
                                c = n.C2cNotifyMsgArray[0].NoticeSeq, ie.warn("longpolling: received new c2c_event msg"), 
                                ne(n.C2cNotifyMsgArray);
                                break;

                              default:
                                ie.error("longpolling收到未知新消息类型: Event=" + n.Event);
                            }
                        }
                        var o = {
                            ActionStatus: d.OK,
                            ErrorCode: 0
                        };
                        se(o);
                    }, function(e) {
                        se(e), t && t(e);
                    });
                }
                var o = {
                    Timeout: x / 1e3,
                    Cookie: {
                        NotifySeq: a,
                        NoticeSeq: c
                    }
                };
                B ? (o.Cookie.LongPollingId = B, n()) : ht(0, function(e) {
                    B = o.Cookie.LongPollingId = e.LongPollingId, x = e.Timeout > 60 ? x : 1e3 * e.Timeout, 
                    n();
                });
            }, this.bigGroupLongPolling = function(e, t) {
                var n = o;
                Ge({
                    USP: 1,
                    StartSeq: g,
                    HoldTime: I,
                    Key: M
                }, function(t) {
                    if (n == o) {
                        var r = [];
                        if (g = t.NextSeq, I = t.HoldTime, M = t.Key, t.RspMsgList && t.RspMsgList.length > 0) {
                            for (var i, s, u, a = 0, c = t.RspMsgList.length - 1; c >= 0; c--) {
                                i = t.RspMsgList[c];
                                var p = {
                                    F_Account: "From_Account",
                                    T_Account: "To_Account",
                                    FAType: "EnumFrom_AccountType",
                                    TAType: "EnumTo_AccountType",
                                    GCode: "GroupCode",
                                    GName: "GroupName",
                                    GId: "GroupId",
                                    MFlg: "MsgFlag",
                                    FAEInfo: "MsgFrom_AccountExtraInfo",
                                    Evt: "Event",
                                    GInfo: "GroupInfo",
                                    BPlc: "IsPlaceMsg",
                                    MBody: "MsgBody",
                                    Pri: "MsgPriority",
                                    Rdm: "MsgRandom",
                                    MSeq: "MsgSeq",
                                    TStp: "MsgTimeStamp",
                                    TGId: "ToGroupId",
                                    UEInfo: "UinExtInfo",
                                    UId: "UserId",
                                    BSys: "IsSystemMsg",
                                    FAHUrl: "From_AccountHeadurl",
                                    FANick: "From_AccountNick"
                                };
                                if (!(i = re.replaceObject(p, i)).IsPlaceMsg && i.From_Account && i.MsgBody && 0 != i.MsgBody.length) switch (s = i.Event) {
                                  case C.GROUP_COMMON:
                                    ie.info("bigGroupLongPolling: return new group msg"), (u = ce(i, !1, !1)) && r.push(u), 
                                    a += 1;
                                    break;

                                  case C.GROUP_TIP:
                                  case C.GROUP_TIP2:
                                    ie.info("bigGroupLongPolling: return new group tip"), (u = ce(i, !1, !1)) && r.push(u);
                                    break;

                                  case C.GROUP_SYSTEM:
                                    ie.info("bigGroupLongPolling: new group system msg"), te(i);
                                    break;

                                  default:
                                    ie.error("bigGroupLongPolling收到未知新消息类型: Event=" + s);
                                }
                            }
                            a > 0 && (Ot.setBigGroupLongPollingMsgMap(i.ToGroupId, a), ie.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(E)));
                        }
                        K = 0;
                        var m = {
                            ActionStatus: d.OK,
                            ErrorCode: U.ON,
                            ErrorInfo: "connection is ok..."
                        };
                        Ct.callBack(m), e ? e(r) : l && l(r), f && Ot.bigGroupLongPolling();
                    }
                }, function(e) {
                    if (60008 != e.ErrorCode && (ie.error(e.ErrorInfo), K++), 91101 == e.ErrorCode && (ie.error("多实例登录，被kick"), 
                    s && s()), K < 10) f && Ot.bigGroupLongPolling(); else {
                        var n = {
                            ActionStatus: d.FAIL,
                            ErrorCode: U.OFF,
                            ErrorInfo: "connection is off"
                        };
                        Ct.callBack(n);
                    }
                    t && t(e);
                }, 1e3 * I);
            };
            var se = function(e) {
                if (0 == e.ErrorCode || 60008 == e.ErrorCode) {
                    q = 0, w = !1;
                    var t, n = !1;
                    switch (k) {
                      case U.INIT:
                        n = !0, k = U.ON, t = "create connection successfully(INIT->ON)";
                        break;

                      case U.ON:
                        t = "connection is on...(ON->ON)";
                        break;

                      case U.RECONNECT:
                        k = U.ON, t = "connection is on...(RECONNECT->ON)";
                        break;

                      case U.OFF:
                        n = !0, k = U.RECONNECT, t = "reconnect successfully(OFF->RECONNECT)";
                    }
                    var o = {
                        ActionStatus: d.OK,
                        ErrorCode: k,
                        ErrorInfo: t
                    };
                    n && Ct.callBack(o), u && Ot.longPolling();
                } else if (91101 == e.ErrorCode) ie.error("多实例登录，被kick"), s && s(); else if (q++, 
                ie.warn("longPolling接口第" + q + "次报错: " + e.ErrorInfo), q <= 10) setTimeout(ue, 100); else {
                    k = U.OFF;
                    var r = {
                        ActionStatus: d.FAIL,
                        ErrorCode: U.OFF,
                        ErrorInfo: "connection is off"
                    };
                    0 == w && Ct.callBack(r), w = !0, ie.warn("5000毫秒之后,SDK会发起新的longPolling请求..."), 
                    setTimeout(ue, 5e3);
                }
            }, Q = function(t, n) {
                var o = [], r = [];
                r = n;
                for (var i in r) {
                    var s, u, a, c = r[i];
                    c.From_Account == Y.identifier ? (s = !0, u = c.To_Account, a = "") : (s = !1, u = c.From_Account, 
                    a = "");
                    var l = Ft.sessByTypeId(p.C2C, u);
                    l || (l = new At(p.C2C, u, u, a, 0, 0));
                    var f = new Gt(l, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account), g = null, d = null, I = null;
                    for (var M in c.MsgBody) {
                        switch (g = c.MsgBody[M], I = g.MsgType) {
                          case m.TEXT:
                            d = new Gt.Elem.Text(g.MsgContent.Text);
                            break;

                          case m.FACE:
                            d = new Gt.Elem.Face(g.MsgContent.Index, g.MsgContent.Data);
                            break;

                          case m.IMAGE:
                            d = new Gt.Elem.Images(g.MsgContent.UUID, g.MsgContent.ImageFormat || "");
                            for (var E in g.MsgContent.ImageInfoArray) {
                                var _ = g.MsgContent.ImageInfoArray[E];
                                d.addImage(new Gt.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                            }
                            break;

                          case m.SOUND:
                            g.MsgContent ? d = new Gt.Elem.Sound(g.MsgContent.UUID, g.MsgContent.Second, g.MsgContent.Size, c.From_Account, c.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                            d = new Gt.Elem.Text("[语音消息]下载地址解析出错"));
                            break;

                          case m.LOCATION:
                            d = new Gt.Elem.Location(g.MsgContent.Longitude, g.MsgContent.Latitude, g.MsgContent.Desc);
                            break;

                          case m.FILE:
                          case m.FILE + " ":
                            I = m.FILE, g.MsgContent ? d = new Gt.Elem.File(g.MsgContent.UUID, g.MsgContent.FileName, g.MsgContent.FileSize, c.From_Account, c.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                            d = new Gt.Elem.Text("[文件消息下载地址解析出错]"));
                            break;

                          case m.CUSTOM:
                            try {
                                var y = JSON.parse(g.MsgContent.Data);
                                if (y && y.userAction && y.userAction == D.ING) continue;
                            } catch (e) {}
                            I = m.CUSTOM, d = new Gt.Elem.Custom(g.MsgContent.Data, g.MsgContent.Desc, g.MsgContent.Ext);
                            break;

                          default:
                            I = m.TEXT, d = new Gt.Elem.Text("web端暂不支持" + g.MsgType + "消息");
                        }
                        f.elems.push(new Gt.Elem(I, d));
                    }
                    f.elems.length > 0 && Ft.addMsg(f, !0) && o.push(f);
                }
                o.length > 0 && Ft.updateTimeline(), o.length > 0 && e && e(o);
            }, ue = function() {
                u && Ot.longPolling();
            }, ae = function(e) {
                for (var t in e) {
                    var n = e[t];
                    switch ($(n.GroupTips, !0), n.Event) {
                      case C.GROUP_SYSTEM:
                        ie.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg"), $(n.GroupTips, !0);
                        break;

                      default:
                        ie.error("syncMsgs收到未知的群系统消息类型: Event=" + n.Event);
                    }
                }
            };
            this.syncMsgs = function(t, n) {
                var o = [], r = [];
                Fe(Ft.cookie, Ft.syncFlag, function(n) {
                    2 == n.SyncFlag && (Ft.syncFlag = 0), r = n.MsgList, Ft.cookie = n.Cookie;
                    for (var i in r) {
                        var s, u, a, c = r[i];
                        c.From_Account == Y.identifier ? (s = !0, u = c.To_Account, a = "") : (s = !1, u = c.From_Account, 
                        a = "");
                        var l = Ft.sessByTypeId(p.C2C, u);
                        l || (l = new At(p.C2C, u, u, a, 0, 0));
                        var f = new Gt(l, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account), g = null, d = null, I = null;
                        for (var M in c.MsgBody) {
                            switch (g = c.MsgBody[M], I = g.MsgType) {
                              case m.TEXT:
                                d = new Gt.Elem.Text(g.MsgContent.Text);
                                break;

                              case m.FACE:
                                d = new Gt.Elem.Face(g.MsgContent.Index, g.MsgContent.Data);
                                break;

                              case m.IMAGE:
                                d = new Gt.Elem.Images(g.MsgContent.UUID, g.MsgContent.ImageFormat);
                                for (var E in g.MsgContent.ImageInfoArray) {
                                    var _ = g.MsgContent.ImageInfoArray[E];
                                    d.addImage(new Gt.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                                }
                                break;

                              case m.SOUND:
                                g.MsgContent ? d = new Gt.Elem.Sound(g.MsgContent.UUID, g.MsgContent.Second, g.MsgContent.Size, c.From_Account, c.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                                d = new Gt.Elem.Text("[语音消息]下载地址解析出错"));
                                break;

                              case m.LOCATION:
                                d = new Gt.Elem.Location(g.MsgContent.Longitude, g.MsgContent.Latitude, g.MsgContent.Desc);
                                break;

                              case m.FILE:
                              case m.FILE + " ":
                                I = m.FILE, g.MsgContent ? d = new Gt.Elem.File(g.MsgContent.UUID, g.MsgContent.FileName, g.MsgContent.FileSize, c.From_Account, c.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                                d = new Gt.Elem.Text("[文件消息下载地址解析出错]"));
                                break;

                              case m.CUSTOM:
                                try {
                                    var y = JSON.parse(g.MsgContent.Data);
                                    if (y && y.userAction && y.userAction == D.ING) continue;
                                } catch (e) {}
                                I = m.CUSTOM, d = new Gt.Elem.Custom(g.MsgContent.Data, g.MsgContent.Desc, g.MsgContent.Ext);
                                break;

                              default:
                                I = m.TEXT, d = new Gt.Elem.Text("web端暂不支持" + g.MsgType + "消息");
                            }
                            f.elems.push(new Gt.Elem(I, d));
                        }
                        f.elems.length > 0 && Ft.addMsg(f, !0) && o.push(f);
                    }
                    ae(n.EventArray), o.length > 0 && Ft.updateTimeline(), t ? t(o) : o.length > 0 && e && e(o);
                }, function(e) {
                    ie.error("getMsgs failed:" + e.ErrorInfo), n && n(e);
                });
            }, this.getC2CHistoryMsgs = function(e, t, n) {
                if (e.Peer_Account || !n) if (e.MaxCnt || (e.MaxCnt = 15), e.MaxCnt <= 0 && n) n(re.getReturnError("MaxCnt should be greater than 0", -14)); else if (e.MaxCnt > 15) {
                    if (n) return void n(re.getReturnError("MaxCnt can not be greater than 15", -15));
                } else {
                    null != e.MsgKey && void 0 !== e.MsgKey || (e.MsgKey = "");
                    var o = {
                        Peer_Account: e.Peer_Account,
                        MaxCnt: e.MaxCnt,
                        LastMsgTime: e.LastMsgTime,
                        MsgKey: e.MsgKey
                    };
                    Ne(o, function(n) {
                        var o = [], r = [];
                        r = n.MsgList;
                        var i = Ft.sessByTypeId(p.C2C, e.Peer_Account);
                        i || (i = new At(p.C2C, e.Peer_Account, e.Peer_Account, "", 0, 0));
                        for (var s in r) {
                            var u, a = r[s];
                            a.From_Account == Y.identifier ? (u = !0, a.To_Account, "") : (u = !1, a.From_Account, 
                            "");
                            var c = new Gt(i, u, a.MsgSeq, a.MsgRandom, a.MsgTimeStamp, a.From_Account), l = null, f = null, g = null;
                            for (var d in a.MsgBody) {
                                switch (l = a.MsgBody[d], g = l.MsgType) {
                                  case m.TEXT:
                                    f = new Gt.Elem.Text(l.MsgContent.Text);
                                    break;

                                  case m.FACE:
                                    f = new Gt.Elem.Face(l.MsgContent.Index, l.MsgContent.Data);
                                    break;

                                  case m.IMAGE:
                                    f = new Gt.Elem.Images(l.MsgContent.UUID, l.MsgContent.ImageFormat);
                                    for (var I in l.MsgContent.ImageInfoArray) {
                                        var M = l.MsgContent.ImageInfoArray[I];
                                        f.addImage(new Gt.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL));
                                    }
                                    break;

                                  case m.SOUND:
                                    l.MsgContent ? f = new Gt.Elem.Sound(l.MsgContent.UUID, l.MsgContent.Second, l.MsgContent.Size, a.From_Account, a.To_Account, l.MsgContent.Download_Flag, p.C2C) : (g = m.TEXT, 
                                    f = new Gt.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;

                                  case m.LOCATION:
                                    f = new Gt.Elem.Location(l.MsgContent.Longitude, l.MsgContent.Latitude, l.MsgContent.Desc);
                                    break;

                                  case m.FILE:
                                  case m.FILE + " ":
                                    g = m.FILE, l.MsgContent ? f = new Gt.Elem.File(l.MsgContent.UUID, l.MsgContent.FileName, l.MsgContent.FileSize, a.From_Account, a.To_Account, l.MsgContent.Download_Flag, p.C2C) : (g = m.TEXT, 
                                    f = new Gt.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;

                                  case m.CUSTOM:
                                    g = m.CUSTOM, f = new Gt.Elem.Custom(l.MsgContent.Data, l.MsgContent.Desc, l.MsgContent.Ext);
                                    break;

                                  default:
                                    g = m.TEXT, f = new Gt.Elem.Text("web端暂不支持" + l.MsgType + "消息");
                                }
                                c.elems.push(new Gt.Elem(g, f));
                            }
                            Ft.addMsg(c), o.push(c);
                        }
                        if (Ft.updateTimeline(), t) {
                            var E = {
                                Complete: n.Complete,
                                MsgCount: o.length,
                                LastMsgTime: n.LastMsgTime,
                                MsgKey: n.MsgKey,
                                MsgList: o
                            };
                            i.isFinished(n.Complete), t(E);
                        }
                    }, function(e) {
                        ie.error("getC2CHistoryMsgs failed:" + e.ErrorInfo), n && n(e);
                    });
                } else n(re.getReturnError("Peer_Account is empty", -13));
            }, this.syncGroupMsgs = function(t, n, o) {
                if (t.ReqMsgSeq <= 0) {
                    if (o) {
                        var r = re.getReturnError("ReqMsgSeq must be greater than 0", -16);
                        o(r);
                    }
                } else {
                    var i = {
                        GroupId: t.GroupId,
                        ReqMsgSeq: t.ReqMsgSeq,
                        ReqMsgNumber: t.ReqMsgNumber
                    };
                    tt(i, function(t) {
                        var o = [], r = (t.GroupId, t.RspMsgList), i = t.IsFinished;
                        if (null != r && void 0 !== r) {
                            for (var s = r.length - 1; s >= 0; s--) {
                                var u = r[s];
                                if (!u.IsPlaceMsg && u.From_Account && u.MsgBody && 0 != u.MsgBody.length) {
                                    var a = ce(u, !0, !0, i);
                                    a && o.push(a);
                                }
                            }
                            o.length > 0 && Ft.updateTimeline(), n ? n(o) : o.length > 0 && e && e(o);
                        } else n && n([]);
                    }, function(e) {
                        ie.error("getGroupMsgs failed:" + e.ErrorInfo), o && o(e);
                    });
                }
            };
            var ce = function(e, n, o, r) {
                if (e.IsPlaceMsg || !e.From_Account || !e.MsgBody || 0 == e.MsgBody.length) return null;
                var i, s, u, a, c = e.ToGroupId, l = c;
                e.GroupInfo && e.GroupInfo.GroupName && (l = e.GroupInfo.GroupName), u = e.From_Account, 
                e.GroupInfo && (e.GroupInfo.From_AccountNick && (u = e.GroupInfo.From_AccountNick), 
                a = e.GroupInfo.From_AccountHeadurl ? e.GroupInfo.From_AccountHeadurl : null), e.From_Account == Y.identifier ? (i = !0, 
                e.From_Account, s = "") : (i = !1, e.From_Account, s = "");
                var f = Ft.sessByTypeId(p.GROUP, c);
                f || (f = new At(p.GROUP, c, l, s, 0, 0)), void 0 !== r && f.isFinished(r || 0);
                var g = G.COMMON;
                if (C.GROUP_TIP == e.Event || C.GROUP_TIP2 == e.Event) {
                    g = G.TIP;
                    var d = e.MsgBody;
                    e.MsgBody = [], e.MsgBody.push({
                        MsgType: m.GROUP_TIP,
                        MsgContent: d
                    });
                } else e.MsgPriority && (e.MsgPriority == F.REDPACKET ? g = G.REDPACKET : e.MsgPriority == F.LOVEMSG && (g = G.LOVEMSG));
                var I = new Gt(f, i, e.MsgSeq, e.MsgRandom, e.MsgTimeStamp, e.From_Account, g, u, a), M = null, E = null, _ = null;
                for (var y in e.MsgBody) {
                    switch (M = e.MsgBody[y], _ = M.MsgType) {
                      case m.TEXT:
                        E = new Gt.Elem.Text(M.MsgContent.Text);
                        break;

                      case m.FACE:
                        E = new Gt.Elem.Face(M.MsgContent.Index, M.MsgContent.Data);
                        break;

                      case m.IMAGE:
                        E = new Gt.Elem.Images(M.MsgContent.UUID, M.MsgContent.ImageFormat || "");
                        for (var h in M.MsgContent.ImageInfoArray) E.addImage(new Gt.Elem.Images.Image(M.MsgContent.ImageInfoArray[h].Type, M.MsgContent.ImageInfoArray[h].Size, M.MsgContent.ImageInfoArray[h].Width, M.MsgContent.ImageInfoArray[h].Height, M.MsgContent.ImageInfoArray[h].URL));
                        break;

                      case m.SOUND:
                        M.MsgContent ? E = new Gt.Elem.Sound(M.MsgContent.UUID, M.MsgContent.Second, M.MsgContent.Size, e.From_Account, e.To_Account, M.MsgContent.Download_Flag, p.GROUP) : (_ = m.TEXT, 
                        E = new Gt.Elem.Text("[语音消息]下载地址解析出错"));
                        break;

                      case m.LOCATION:
                        E = new Gt.Elem.Location(M.MsgContent.Longitude, M.MsgContent.Latitude, M.MsgContent.Desc);
                        break;

                      case m.FILE:
                      case m.FILE + " ":
                        _ = m.FILE;
                        Ie(M.MsgContent.UUID, e.From_Account, M.MsgContent.FileName);
                        M.MsgContent ? E = new Gt.Elem.File(M.MsgContent.UUID, M.MsgContent.FileName, M.MsgContent.FileSize, e.From_Account, e.To_Account, M.MsgContent.Download_Flag, p.GROUP) : (_ = m.TEXT, 
                        E = new Gt.Elem.Text("[文件消息]地址解析出错"));
                        break;

                      case m.GROUP_TIP:
                        var T = M.MsgContent.OpType;
                        if (E = new Gt.Elem.GroupTip(T, M.MsgContent.Operator_Account, c, e.GroupInfo.GroupName, M.MsgContent.List_Account, M.MsgContent.MsgMemberExtraInfo), 
                        O.JOIN == T || O.QUIT == T) E.setGroupMemberNum(M.MsgContent.MemberNum); else if (O.MODIFY_GROUP_INFO == T) {
                            var A = !1, S = {
                                GroupId: c,
                                GroupFaceUrl: null,
                                GroupName: null,
                                OwnerAccount: null,
                                GroupNotification: null,
                                GroupIntroduction: null
                            }, N = M.MsgContent.MsgGroupNewInfo;
                            if (N.GroupFaceUrl) {
                                var v = new Gt.Elem.GroupTip.GroupInfo(R.FACE_URL, N.GroupFaceUrl);
                                E.addGroupInfo(v), A = !0, S.GroupFaceUrl = N.GroupFaceUrl;
                            }
                            if (N.GroupName) {
                                var P = new Gt.Elem.GroupTip.GroupInfo(R.NAME, N.GroupName);
                                E.addGroupInfo(P), A = !0, S.GroupName = N.GroupName;
                            }
                            if (N.Owner_Account) {
                                var b = new Gt.Elem.GroupTip.GroupInfo(R.OWNER, N.Owner_Account);
                                E.addGroupInfo(b), A = !0, S.OwnerAccount = N.Owner_Account;
                            }
                            if (N.GroupNotification) {
                                var U = new Gt.Elem.GroupTip.GroupInfo(R.NOTIFICATION, N.GroupNotification);
                                E.addGroupInfo(U), A = !0, S.GroupNotification = N.GroupNotification;
                            }
                            if (N.GroupIntroduction) {
                                var L = new Gt.Elem.GroupTip.GroupInfo(R.INTRODUCTION, N.GroupIntroduction);
                                E.addGroupInfo(L), A = !0, S.GroupIntroduction = N.GroupIntroduction;
                            }
                            0 == n && A && t && t(S);
                        } else if (O.MODIFY_MEMBER_INFO == T) {
                            var D = M.MsgContent.MsgMemberInfo;
                            for (var k in D) {
                                var w = D[k];
                                E.addMemberInfo(new Gt.Elem.GroupTip.MemberInfo(w.User_Account, w.ShutupTime));
                            }
                        }
                        break;

                      case m.CUSTOM:
                        _ = m.CUSTOM, E = new Gt.Elem.Custom(M.MsgContent.Data, M.MsgContent.Desc, M.MsgContent.Ext);
                        break;

                      default:
                        _ = m.TEXT, E = new Gt.Elem.Text("web端暂不支持" + M.MsgType + "消息");
                    }
                    I.elems.push(new Gt.Elem(_, E));
                }
                return 0 == o ? I : Ft.addMsg(I, !0) ? I : null;
            };
            this.init = function(o, a, c) {
                if (o.onMsgNotify || ie.warn("listeners.onMsgNotify is empty"), e = o.onMsgNotify, 
                o.onBigGroupMsgNotify ? l = o.onBigGroupMsgNotify : ie.warn("listeners.onBigGroupMsgNotify is empty"), 
                o.onC2cEventNotifys ? _ = o.onC2cEventNotifys : ie.warn("listeners.onC2cEventNotifys is empty"), 
                o.onGroupSystemNotifys ? n = o.onGroupSystemNotifys : ie.warn("listeners.onGroupSystemNotifys is empty"), 
                o.onGroupInfoChangeNotify ? t = o.onGroupInfoChangeNotify : ie.warn("listeners.onGroupInfoChangeNotify is empty"), 
                o.onFriendSystemNotifys ? r = o.onFriendSystemNotifys : ie.warn("listeners.onFriendSystemNotifys is empty"), 
                o.onProfileSystemNotifys ? i = o.onProfileSystemNotifys : ie.warn("listeners.onProfileSystemNotifys is empty"), 
                o.onKickedEventCall ? s = o.onKickedEventCall : ie.warn("listeners.onKickedEventCall is empty"), 
                o.onAppliedDownloadUrl ? y = o.onAppliedDownloadUrl : ie.warn("listeners.onAppliedDownloadUrl is empty"), 
                Y.identifier && Y.userSig) L(function(e) {
                    ie.info("initMyGroupMaxSeqs success"), b(function(e) {
                        if (ie.info("initIpAndAuthkey success"), a) {
                            ie.info("login success(have login state))");
                            var t = {
                                ActionStatus: d.OK,
                                ErrorCode: 0,
                                ErrorInfo: "login success"
                            };
                            a(t);
                        }
                        Ot.setLongPollingOn(!0), u && Ot.longPolling(a);
                    }, c);
                }, c); else if (a) {
                    var p = {
                        ActionStatus: d.OK,
                        ErrorCode: 0,
                        ErrorInfo: "login success(no login state)"
                    };
                    a(p);
                }
            }, this.sendMsg = function(e, t, n) {
                Ae(e, function(o) {
                    if (e.sess.type() == p.C2C) {
                        if (!Ft.addMsg(e)) {
                            var r = "sendMsg: addMsg failed!", i = re.getReturnError(r, -17);
                            return ie.error(r), void (n && n(i));
                        }
                        Ft.updateTimeline();
                    }
                    t && t(o);
                }, function(e) {
                    n && n(e);
                });
            };
        }(), Rt = new function() {
            this.fileMd5 = null;
            var e = function(e, t, n) {
                function o() {
                    var t = a * s, n = t + s >= e.size ? e.size : t + s, o = i.call(e, t, n);
                    r.readAsArrayBuffer(o);
                }
                var r = null;
                try {
                    r = new FileReader();
                } catch (e) {
                    if (n) return void n(re.getReturnError("当前浏览器不支持FileReader", -18));
                }
                var i = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                if (i || !n) {
                    var s = 2097152, u = Math.ceil(e.size / s), a = 0, c = new SparkMD5();
                    r.onload = function(e) {
                        for (var n = "", r = new Uint8Array(e.target.result), i = r.byteLength, s = 0; s < i; s++) n += String.fromCharCode(r[s]);
                        c.appendBinary(n), ++a < u ? o() : (this.fileMd5 = c.end(), t && t(this.fileMd5));
                    }, o();
                } else n(re.getReturnError("当前浏览器不支持FileAPI", -19));
            };
            this.uploadFile = function(t, n, o) {
                var r = {
                    init: function(e, t, n) {
                        var o = this;
                        o.file = e.file, o.onProgressCallBack = e.onProgressCallBack, e.abortButton && (e.abortButton.onclick = o.abortHandler), 
                        o.total = o.file.size, o.loaded = 0, o.step = 1105920, o.sliceSize = 0, o.sliceOffset = 0, 
                        o.timestamp = se(), o.seq = ue(), o.random = ae(), o.fromAccount = Y.identifier, 
                        o.toAccount = e.To_Account, o.fileMd5 = e.fileMd5, o.businessType = e.businessType, 
                        o.fileType = e.fileType, o.cbOk = t, o.cbErr = n, o.reader = new FileReader(), o.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, 
                        o.reader.onloadstart = o.onLoadStart, o.reader.onprogress = o.onProgress, o.reader.onabort = o.onAbort, 
                        o.reader.onerror = o.onerror, o.reader.onload = o.onLoad, o.reader.onloadend = o.onLoadEnd;
                    },
                    upload: function() {
                        r.readBlob(0);
                    },
                    onLoadStart: function() {},
                    onProgress: function(e) {
                        var t = r;
                        t.loaded += e.loaded, t.onProgressCallBack && t.onProgressCallBack(t.loaded, t.total);
                    },
                    onAbort: function() {},
                    onError: function() {},
                    onLoad: function(e) {
                        var t = r;
                        if (e.target.readyState == FileReader.DONE) {
                            var n = e.target.result, o = n.indexOf(",");
                            -1 != o && (n = n.substr(o + 1));
                            var i = {
                                From_Account: t.fromAccount,
                                To_Account: t.toAccount,
                                Busi_Id: t.businessType,
                                File_Type: t.fileType,
                                File_Str_Md5: t.fileMd5,
                                PkgFlag: E.BASE64_DATA,
                                File_Size: t.total,
                                Slice_Offset: t.sliceOffset,
                                Slice_Size: t.sliceSize,
                                Slice_Data: n,
                                Seq: t.seq,
                                Timestamp: t.timestamp,
                                Random: t.random
                            }, s = function(e) {
                                if (0 == e.IsFinish) t.loaded = e.Next_Offset, t.loaded < t.total ? t.readBlob(t.loaded) : t.loaded = t.total; else if (t.cbOk) {
                                    var n = {
                                        ActionStatus: e.ActionStatus,
                                        ErrorCode: e.ErrorCode,
                                        ErrorInfo: e.ErrorInfo,
                                        File_UUID: e.File_UUID,
                                        File_Size: e.Next_Offset,
                                        URL_INFO: e.URL_INFO,
                                        Download_Flag: e.Download_Flag
                                    };
                                    t.fileType == h.FILE && (n.URL_INFO = Ie(e.File_UUID, Y.identifier, t.file.name)), 
                                    t.cbOk(n);
                                }
                                z = 0;
                            };
                            Et(i, s, function e(n) {
                                z < 20 ? (z++, setTimeout(function() {
                                    Et(i, s, e);
                                }, 1e3)) : t.cbErr(n);
                            });
                        }
                    },
                    onLoadEnd: function() {},
                    readBlob: function(e) {
                        var t, n = r, o = n.file, i = e + n.step;
                        i > n.total ? (i = n.total, n.sliceSize = i - e) : n.sliceSize = n.step, n.sliceOffset = e, 
                        t = n.blobSlice.call(o, e, i), n.reader.readAsDataURL(t);
                    },
                    abortHandler: function() {
                        var e = r;
                        e.reader && e.reader.abort();
                    }
                };
                e(t.file, function(e) {
                    ie.info("fileMd5: " + e), t.fileMd5 = e, r.init(t, n, o), r.upload();
                }, o);
            };
        }();
        n.SESSION_TYPE = p, n.MSG_MAX_LENGTH = g, n.C2C_MSG_SUB_TYPE = A, n.GROUP_MSG_SUB_TYPE = G, 
        n.MSG_ELEMENT_TYPE = m, n.GROUP_TIP_TYPE = O, n.IMAGE_TYPE = I, n.GROUP_SYSTEM_TYPE = N, 
        n.FRIEND_NOTICE_TYPE = v, n.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = R, n.BROWSER_INFO = u, 
        n.Emotions = n.EmotionPicData = oe, n.EmotionDataIndexs = n.EmotionPicDataIndex = ne, 
        n.TLS_ERROR_CODE = b, n.CONNECTION_STATUS = U, n.UPLOAD_PIC_BUSSINESS_TYPE = L, 
        n.RECENT_CONTACT_TYPE = f, n.UPLOAD_RES_TYPE = h, n.Tool = re, n.Log = ie, n.Msg = Gt, 
        n.Session = At, n.MsgStore = {
            sessMap: function() {
                return Ft.sessMap();
            },
            sessCount: function() {
                return Ft.sessCount();
            },
            sessByTypeId: function(e, t) {
                return Ft.sessByTypeId(e, t);
            },
            delSessByTypeId: function(e, t) {
                return Ft.delSessByTypeId(e, t);
            },
            resetCookieAndSyncFlag: function() {
                return Ft.resetCookieAndSyncFlag();
            }
        }, n.Resources = te, n.login = n.init = function(e, t, n, o, r) {
            Ct.init(t.onConnNotify, o, r), ye(e, t, n, o, r);
        }, n.logout = n.offline = function(e, t) {
            return Ce("instance", e, t);
        }, n.logoutAll = function(e, t) {
            return Ce("all", e, t);
        }, n.sendMsg = function(e, t, n) {
            return Ot.sendMsg(e, t, n);
        }, n.syncMsgs = function(e, t) {
            return Ot.syncMsgs(e, t);
        }, n.getC2CHistoryMsgs = function(e, t, n) {
            return Ot.getC2CHistoryMsgs(e, t, n);
        }, n.syncGroupMsgs = function(e, t, n) {
            return Ot.syncGroupMsgs(e, t, n);
        }, n.c2CMsgReaded = function(e, t, n) {
            return Ft.c2CMsgReaded(e, t, n);
        }, n.groupMsgReaded = function(e, t, n) {
            return nt(e, t, n);
        }, n.setAutoRead = function(e, t, n) {
            return Ft.setAutoRead(e, t, n);
        }, n.createGroup = function(e, t, n) {
            return ve(e, t, n);
        }, n.createGroupHigh = function(e, t, n) {
            return Pe(e, t, n);
        }, n.applyJoinGroup = function(e, t, n) {
            return Ue(e, t, n);
        }, n.handleApplyJoinGroupPendency = function(e, t, n) {
            return De(e, t, n);
        }, n.getPendencyGroup = function(e, t, n) {
            return ke(e, t, n);
        }, n.getPendencyGroupRead = function(e, t, n) {
            return we(e, t, n);
        }, n.handleInviteJoinGroupRequest = function(e, t, n) {
            return qe(e, t, n);
        }, n.deleteApplyJoinGroupPendency = function(e, t, n) {
            return Re(e, t, n);
        }, n.quitGroup = function(e, t, n) {
            return xe(e, t, n);
        }, n.searchGroupByName = function(e, t, n) {
            return Ke(e, t, n);
        }, n.getGroupPublicInfo = function(e, t, n) {
            return ze(e, t, n);
        }, n.getGroupInfo = function(e, t, n) {
            return He(e, t, n);
        }, n.modifyGroupBaseInfo = function(e, t, n) {
            return be(e, t, n);
        }, n.getGroupMemberInfo = function(e, t, n) {
            return Je(e, t, n);
        }, n.addGroupMember = function(e, t, n) {
            return Ve(e, t, n);
        }, n.modifyGroupMember = function(e, t, n) {
            return Ye(e, t, n);
        }, n.deleteGroupMember = function(e, t, n) {
            return Xe(e, t, n);
        }, n.destroyGroup = function(e, t, n) {
            return je(e, t, n);
        }, n.changeGroupOwner = function(e, t, n) {
            return Qe(e, t, n);
        }, n.getJoinedGroupListHigh = function(e, t, n) {
            return We(e, t, n);
        }, n.getRoleInGroup = function(e, t, n) {
            return $e(e, t, n);
        }, n.forbidSendMsg = function(e, t, n) {
            return Ze(e, t, n);
        }, n.sendCustomGroupNotify = function(e, t, n) {
            return et(e, t, n);
        }, n.applyJoinBigGroup = function(e, t, n) {
            return Le(e, t, n);
        }, n.quitBigGroup = function(e, t, n) {
            return Be(e, t, n);
        }, n.getProfilePortrait = function(e, t, n) {
            return ft(e, t, n);
        }, n.setProfilePortrait = function(e, t, n) {
            return gt(e, t, n);
        }, n.applyAddFriend = function(e, t, n) {
            return rt(e, t, n);
        }, n.getPendency = function(e, t, n) {
            return ut(e, t, n);
        }, n.getPendencyReport = function(e, t, n) {
            return at(e, t, n);
        }, n.deletePendency = function(e, t, n) {
            return ct(e, t, n);
        }, n.responseFriend = function(e, t, n) {
            return lt(e, t, n);
        }, n.getAllFriend = function(e, t, n) {
            return pt(e, t, n);
        }, n.deleteChat = function(e, t, n) {
            return st(e, t, n);
        }, n.deleteFriend = function(e, t, n) {
            return it(e, t, n);
        }, n.addBlackList = function(e, t, n) {
            return dt(e, t, n);
        }, n.deleteBlackList = function(e, t, n) {
            return mt(e, t, n);
        }, n.getBlackList = function(e, t, n) {
            return It(e, t, n);
        }, n.getRecentContactList = function(e, t, n) {
            return Mt(e, t, n);
        }, n.uploadFile = n.uploadPic = function(e, t, n) {
            return Rt.uploadFile(e, t, n);
        }, n.submitUploadFileForm = function(e, t, n) {
            return Rt.submitUploadFileForm(e, t, n);
        }, n.uploadFileByBase64 = n.uploadPicByBase64 = function(e, t, n) {
            var o = {
                To_Account: e.toAccount,
                Busi_Id: e.businessType,
                File_Type: e.File_Type,
                File_Str_Md5: e.fileMd5,
                PkgFlag: E.BASE64_DATA,
                File_Size: e.totalSize,
                Slice_Offset: 0,
                Slice_Size: e.totalSize,
                Slice_Data: e.base64Str,
                Seq: ue(),
                Timestamp: se(),
                Random: ae()
            };
            return Et(o, t, n);
        }, n.getLongPollingId = function(e, t, n) {
            return ht(0, t, n);
        }, n.applyDownload = function(e, t, n) {
            return Tt(e, t, n);
        }, n.checkLogin = function(e, t) {
            return fe(e, t);
        };
    }(n), n;
}();
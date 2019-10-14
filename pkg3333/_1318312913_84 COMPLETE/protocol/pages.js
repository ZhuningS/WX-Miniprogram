module.exports = {
    createPageList: function(e) {
        return {
            url: e.url,
            parameters: e.parameters,
            nextUrl: e.url,
            hasMore: !0,
            fetching: null,
            pages: [],
            process: e.process,
            callback: e.callback,
            setParameter: function(t, r) {
                void 0 === e.parameters && (e.parameters = {}), e.parameters[t] = r;
            },
            getParameter: function(t) {
                return void 0 === e.parameters ? null : e.parameters[t];
            },
            loadMore: function() {
                var e = this;
                if (this.hasMore && null == this.fetching) {
                    var t = this.nextUrl;
                    console.log("Ready to fetch via " + t);
                    var r = {}, s = this.url === this.nextUrl;
                    this.url === this.nextUrl && this.parameters ? (Object.keys(this.parameters).forEach(function(t) {
                        var s = e.parameters[t];
                        s && (r[t] = s);
                    }), console.log("The request data is:"), console.log(r)) : this.parameters && this.parameters.token && t.indexOf("token=") < 0 && (t.indexOf("?") > 0 ? t += "&" + this.parameters.token : r.token = this.parameters.token);
                    var a = new Date().getTime();
                    this.fetching = a, wx.request({
                        url: t,
                        data: r,
                        success: function(t) {
                            if (console.log("page list request finish: ", t), a === e.fetching) if (200 === t.statusCode) {
                                var r = t.data, l = r.ok;
                                if (void 0 === l || l) {
                                    var n = e.process(r);
                                    null != n ? (e.pages = e.pages.concat(n), e.callback(!0, {
                                        firstPage: s,
                                        response: r,
                                        currents: n
                                    }), e.hasMore = r.hasMore, e.nextUrl = r.nextUrl, void 0 === e.hasMore && (e.hasMore = r.has_more, 
                                    e.nextUrl = r.next_url), console.log("The next url is " + e.nextUrl), e.nextUrl && e.nextUrl.startsWith("http:") && (e.nextUrl = "https" + e.nextUrl.substr(4))) : e.callback(!1, "Data process error");
                                } else e.callback(!1, "Server Error");
                            } else e.callback(!1, "Http Error, " + t.statusCode);
                        },
                        fail: function() {
                            a === e.fetching && e.callback(!1, "Request fail");
                        },
                        complete: function() {
                            e.fetching = null;
                        }
                    });
                }
            },
            refresh: function() {
                this.nextUrl = this.url, this.hasMore = !0, this.pages = [], this.fetching = null, 
                this.loadMore();
            }
        };
    }
};
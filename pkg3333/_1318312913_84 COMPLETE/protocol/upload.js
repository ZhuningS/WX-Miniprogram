module.exports = {
    upload: function(o, l) {
        return wx.uploadFile({
            url: "https://upload-z2.qbox.me",
            filePath: o,
            name: "file",
            formData: {
                token: "ViCJLw1jpkMqKQ3t153-heSsibK0pOH8qNM_JBti:oloLdTg92tKgwS2EM3iGmo1KDNI=:eyJzY29wZSI6InJpcHBsZS1maWxlcyIsImRlYWRsaW5lIjoxNTk0OTE2NjYyfQ=="
            },
            success: function(o) {
                console.log("upload success ", o);
                var s = JSON.parse(o.data);
                l && l("success", s);
            },
            fail: function(o) {
                console.log("upload failed ", o), l && l("fail");
            }
        });
    }
};
Page({
    data: {},
    onLoad: function(n) {},
    onClickCancel: function() {
        this.changeAuth(!1);
    },
    onClickConfirm: function() {
        this.changeAuth(!0);
    },
    changeAuth: function(n) {},
    onClick: function() {
        wx.navigateBack();
    }
});
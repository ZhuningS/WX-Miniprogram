module.exports = {
    data: {
        images: {}
    },
    onImageLoad: function(t) {
        this.data.images[t.target.dataset.url] = {
            height: t.detail.height,
            width: t.detail.width
        };
    }
};
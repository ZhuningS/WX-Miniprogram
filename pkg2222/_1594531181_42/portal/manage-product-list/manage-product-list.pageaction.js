var t = require("../../utils/enum.js");

module.exports = {
    name: "boutique-manage-product-list",
    actionList: [ {
        type: t.PageActionType.ManageProductListClick,
        name: "onProductClick",
        ext: [ {
            key: "name",
            getter: function(t) {
                var e = parseInt(t.currentTarget.dataset.index);
                return this.data.products[e].name;
            }
        } ]
    } ]
};
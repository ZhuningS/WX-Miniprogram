getApp();

Component({
    behaviors: [],
    properties: {
        line: {
            type: Object,
            value: {
                value: 1,
                marginType: 1
            }
        }
    },
    data: {
        lineMap: {
            1: "solid",
            2: "dashed",
            3: "dotted",
            4: "colorBlock",
            5: "colorWhite"
        }
    },
    methods: {},
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {}
});
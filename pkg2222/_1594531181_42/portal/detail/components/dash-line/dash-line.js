Component({
    ready: function() {
        var e = wx.createCanvasContext("firstCanvas");
        e.setLineDash([ 10, 20 ], 5), e.beginPath(), e.moveTo(0, 100), e.lineTo(100, 100), 
        e.stroke(), e.draw();
    }
});
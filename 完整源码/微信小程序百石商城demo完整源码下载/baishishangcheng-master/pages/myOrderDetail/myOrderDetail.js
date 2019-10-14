// pages/myOrderDetail/myOrderDetail.js
var WxNotificationCenter = require("../../WxNotificationCenter/WxNotificationCenter.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyID: "",
    delID: 0,
    isfail: false,
    data: "",
    coll: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.data.keyID = options.id
    that.data.delID = options.delid
    console.log("keyID", that.data.keyID)
    console.log("delID", that.data.delID)
    that.request()
    WxNotificationCenter.addNotification(getApp().shuaXin.guanBiZhiFu, this.request, this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    if (getApp().shuaXin.order) {
      console.log("刷新")
      that.request()
      getApp().shuaXin.order = false;
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    WxNotificationCenter.removeNotification(getApp().shuaXin.guanBiZhiFu, this)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 评价
   */
  pingJiaTap: function() {
    var that = this
    wx.navigateTo({
      url: '/pages/myOrderRate/myOrderRate?id=' + that.data.data.keyID,
    })
  },
  // 网络请求
  request: function() {
    var that = this
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "UserGetOne", //仅为示例，并非真实的接口地址
      data: {
        "mod": "order",
        "parm": "keyID|" + that.data.keyID,
        "token": getApp().appData.userInfo.token
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log("订单详情", res.data)
        //请求成功
        if (res.data.state == 1) {
          var timeTamp = res.data.data.orderTime.substring(6, 19)
          var timeTamp = res.data.data.orderTime.substring(6, 19)
          res.data.data.orderTime = that.format(parseInt(timeTamp))
          if (res.data.data.logist) {
            var wuLiuArr = res.data.data.logist.split("@")
            res.data.data.wuLiu = wuLiuArr[0]
          }
          for (let i = 0; i < res.data.data.Item.length; i++) {
            res.data.data.Item[i].price = res.data.data.Item[i].price.toFixed(2)
            if (res.data.data.Item[i].PackItem) {
              for (let j = 0; j < res.data.data.Item[i].PackItem.length; j++) {
                res.data.data.Item[i].PackItem[j].price = res.data.data.Item[i].PackItem[j].price.toFixed(2)
              }
            }
          }
          res.data.data.ordercoin = res.data.data.ordercoin.toFixed(2)
          console.log(res.data.data.orderState)
          var coll = res.data.data.Coll
          if (coll) {
            coll.usemin = coll.usemin.toFixed(2)
            coll.coin = coll.coin.toFixed(2)
          } else {
            coll.ID = 0
          }
          that.setData({
            data: res.data.data,
            coll: coll
          })
          wx.hideLoading()
          that.setData({
            isfail: false,
          })
        } else { //请求失败
          that.setData({
            isfail: true,
          })
          wx.hideLoading()
        }
      },
      fail: function(res) {
        that.setData({
          isfail: true,
        })
        wx.hideLoading()
      },
      complete: function() {
        wx.stopPullDownRefresh();
      }
    })
  },
  format: function(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + m + '-' + d + ' ' + h + ':' + mm;
  },
  fuZhi: function(e) {
    var des = e.currentTarget.dataset.des;
    console.log("复制", des)
    wx.setClipboardData({
      data: des,
      success: function(res) {
        // self.setData({copyTip:true}),  
        wx.showToast({
          title: '复制成功',
        })
      }
    });
  },
  /**
   * 删除订单
   */
  delOrder: function(e) {
    var id = e.currentTarget.dataset.id
    var that = this
    wx.showModal({
      title: '提示',
      content: '确定删除该订单吗？',
      success: function(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中……',
            mask: true
          })
          wx.request({
            url: getApp().appData.host + "UserDel", //仅为示例，并非真实的接口地址
            data: {
              "delID": id,
              "mod": "order",
              "token": getApp().appData.userInfo.token
            },
            header: {
              'content-type': 'application/json', // 默认值
            },
            method: 'POST',
            success: function(res) {
              console.log("删除", res.data)
              //请求成功
              if (res.data.state == 1) {
                wx.hideLoading()
                wx.showToast({
                  title: '删除成功',
                })
                getApp().shuaXin.order = true
                wx.navigateBack({
                  delta: 1
                })
              } else { //请求失败
                wx.hideLoading()
                wx.showToast({
                  title: '删除失败',
                })
              }
            },
            fail: function(res) {
              wx.hideLoading()
              wx.showToast({
                title: '请求失败',
              })
            },

          })
        } else if (res.cancel) {

        }
      }
    })

  },
  /**
   * 去支付
   */
  pay: function() {
    wx.showToast({
      title: '去支付',
    })
  },
})
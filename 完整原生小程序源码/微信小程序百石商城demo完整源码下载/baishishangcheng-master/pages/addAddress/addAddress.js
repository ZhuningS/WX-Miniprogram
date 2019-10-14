// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bean: "",
    multiArray: [
      ['福建省', '广东省'],
      ['福州市', '厦门市', '莆田市', '泉州市', '漳州市'],
      ['鼓楼区', '闽侯县']
    ],
    multiIndex: [0, 0, 0],
    proList: [],
    cityList: [],
    townList: [],
    ios:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    if (options.bean) {
      that.setData({
        bean: JSON.parse(options.bean)
      })
    } else {
      that.data.bean = new Object()
      that.data.bean.ID = 0
      that.data.bean.uID = getApp().appData.userInfo.ID
      that.data.bean.uName = getApp().appData.userInfo.uName
      that.data.bean.provin = ""
      that.data.bean.city = ""
      that.data.bean.town = ""
      that.data.bean.street = ""
      that.data.bean.dress = ""
      that.data.bean.contact = ""
      that.data.bean.mobile = ""
      that.data.bean.token = getApp().appData.userInfo.token
      that.data.bean.zip = ""
      that.data.bean.isdefault = true
      that.setData({
        bean: that.data.bean
      })
      console.log("什么鬼")
    }
    that.requestSheng()
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.platform)
        if (res.platform == "devtools") {

        } else if (res.platform == "ios") {
          that.setData({
            ios:true
          })
        } else if (res.platform == "android") {

        }
      }
    })
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

  contactInput: function(e) {
    console.log(e.detail.value)
    this.data.bean.contact = e.detail.value
  },
  mobileInput: function(e) {
    console.log(e.detail.value)
    this.data.bean.mobile = e.detail.value
  },
  dressInput: function(e) {
    console.log(e.detail.value)
    this.data.bean.dress = e.detail.value
  },
  defultTap: function() {
    this.data.bean.isdefault = !this.data.bean.isdefault
    this.setData({
      bean: this.data.bean
    })
  },
  /**
   * 保存
   */
  baoCun: function() {
    var that = this
    if (!that.data.bean.contact) {
      wx.showToast({
        title: '请输入联系人',
        icon:"none"
      })
      return
    }
    if (!getApp().checkPhone(this.data.bean.mobile)) {
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码',
        showCancel:false
      })
      return
    }
    if (!that.data.bean.proName) {
      wx.showToast({
        title: '请输入选择区域',
        icon: "none"
      })
      return
    }
    if (!that.data.bean.dress) {
      wx.showToast({
        title: '请输入详细地址',
        icon: "none"
      })
      return
    }
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "DressSave", //仅为示例，并非真实的接口地址
      data: {
        "json": JSON.stringify(that.data.bean),
        "token": getApp().appData.userInfo.token
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log("修改默认", res.data)
        //请求成功
        if (res.data.state == 1) {
          wx.hideLoading()
          getApp().shuaXin.address = true
          wx.navigateBack({
            delta: 1
          })
        } else { //请求失败      
          wx.hideLoading()
          setTimeout(function() {
            wx.showToast({
              title: res.data.msg,
            })
          }, 300)
        }
      },
      fail: function(res) {
        wx.hideLoading()
      },
      complete: function() {
        wx.stopPullDownRefresh();
      }
    })
  },
  bindMultiPickerChange: function(e) {
    var that = this
    const val = e.detail.value
    console.log(val)
    that.data.bean.proName = that.data.proList[val[0]].proName
    that.data.bean.provin = that.data.proList[val[0]].proID
    that.data.bean.cityName = that.data.cityList[val[1]].cityName
    that.data.bean.city = that.data.cityList[val[1]].cityID
    that.data.bean.townName = that.data.townList[val[2]].townName
    that.data.bean.town = that.data.townList[val[2]].townID
    that.setData({
      bean: that.data.bean
    })
  },
  /**
   * 滚动监听
   */
  bindMultiPickerColumnChange: function(e) {
    var that = this
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;

    switch (e.detail.column) {
      case 0:
        wx.showLoading({
          title: '加载中……',
          mask: true
        })
        that.requestCity(e.detail.value);
        break
      case 1:
        wx.showLoading({
          title: '加载中……',
          mask: true
        })
        that.requestTown(e.detail.value);
        break
      case 2:
        // that.data.multiIndex[2] = e.detail.value
        // that.setData({
        //   multiIndex: that.data.multiIndex
        // })
        break
    }
  },
  // 网络请求
  requestSheng: function() {
    var that = this
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "GetList", //仅为示例，并非真实的接口地址
      data: {
        "parm": "",
        "mod": "provin",
        "token": getApp().md5("provin")
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log("获取省份", res.data)
        //请求成功
        if (res.data.state == 1) {
          that.data.multiArray[0] = []
          for (let i = 0; i < res.data.data.length; i++) {
            that.data.multiArray[0].push(res.data.data[i].proName)
          }
          that.setData({
            multiArray: that.data.multiArray,
            proList: res.data.data
          })
          that.requestCity(0);
          // wx.hideLoading()
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
  // 网络请求
  requestCity: function(index) {
    var that = this
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "GetList", //仅为示例，并非真实的接口地址
      data: {
        "parm": "vin|" + that.data.proList[index].proID,
        "mod": "city",
        "token": getApp().md5("vin|" + that.data.proList[index].proID + "city")
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log("获取城市", res.data)
        //请求成功
        if (res.data.state == 1) {
          that.data.multiArray[1] = []
          for (let i = 0; i < res.data.data.length; i++) {
            that.data.multiArray[1].push(res.data.data[i].cityName)
          }
          that.data.multiIndex[1] = 0
          that.setData({
            multiArray: that.data.multiArray,
            cityList: res.data.data,
            multiIndex: that.data.multiIndex
          })
          that.requestTown(0)
          // wx.hideLoading()
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
  // 网络请求
  requestTown: function(index) {
    var that = this
    wx.showLoading({
      title: '加载中……',
      mask: true
    })
    wx.request({
      url: getApp().appData.host + "GetList", //仅为示例，并非真实的接口地址
      data: {
        "parm": "city|" + that.data.cityList[index].cityID,
        "mod": "town",
        "token": getApp().md5("city|" + that.data.cityList[index].cityID + "town")
      },
      header: {
        'content-type': 'application/json', // 默认值
      },
      method: 'POST',
      success: function(res) {
        console.log("获取乡镇", res.data)
        //请求成功
        if (res.data.state == 1) {
          that.data.multiArray[2] = []
          for (let i = 0; i < res.data.data.length; i++) {
            that.data.multiArray[2].push(res.data.data[i].townName)
          }
          that.data.multiIndex[2] = 0
          that.setData({
            multiArray: that.data.multiArray,
            townList: res.data.data,
            multiIndex: that.data.multiIndex
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
})
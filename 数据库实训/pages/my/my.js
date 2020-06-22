var app = getApp()
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    admin:''
  },
  //获取openId
  getopenid:function() {
    // app.globalData.hasLogin = true
    let that = this;
    wx.cloud.callFunction({
      name: "getOpenId",
      success(res) {
        app.globalData.openid = res.result.openid
        let openId = res.result.openid
        that.setData({
          openid: openId
        })
  }
})
},
  goToMyRecord: function () {
    if (app.globalData.hasLogin) {
      wx.navigateTo({
        url: '/pages/myRecord/myRecord',
      })
    }
    else {
      wx.showModal({
        title: '请先进行登录',
        content: '请先登录',
      })
    }

  },
  logOff: function () {
    app.globalData.hasLogin = false;
    this.setData({
      isLogin: false,
      volunteerTime: 0
    })
    wx.showModal({
      title: "已退出登录 :)"
    })
  },
  goToWriteInfo: function () {
    console.log(app.globalData.hasLogin)
    if (app.globalData.hasLogin) {
      wx.navigateTo({
        url: '/pages/info/info',
      })
    }
    else {
      wx.showModal({
        title: '请先进行登录',
        content: '请先登录',
      })
    }
  },
  getMyInfo: function (e) {
    let that = this
    // console.log("beidiaoyongle")
    app.globalData.hasLogin = true
    let info = e.detail.userInfo
    app.globalData.nickName = info.nickName
    app.globalData.src = info.avatarUrl
    if (app.globalData.src != '') {
      this.setData({
        src: info.avatarUrl,
        nickName: info.nickName,
        isLogin: true,
      })
      app.globalData.hasLogin = true
      this.getUserRecord()
    }
  },



  goToback:function () {
    var that=this
    wx.request({
      url: 'http://localhost:8080/getUserInfo',
      data: {
        openid: this.data.openid
      },
      success(res) {
        console.log(res)
        that.setData({
          admin:res.data.admin
        })
        that.turnToBank() 
      }
    })
  },

turnToBank:function(){
  console.log(app.globalData.hasLogin)
  if (app.globalData.hasLogin && this.data.admin == 1) {
    wx.navigateTo({
      url: '/pages/back/back',
    })
  }
  else if (!app.globalData.hasLogin && this.data.admin - 0 == 1) {
    wx.showModal({
      title: '请先进行登录',
      content: '请先登录',
    })
  }
  else if (app.globalData.hasLogin && this.data.admin - 0 == 0) {
    wx.showModal({
      title: '你不是管理员',
      content: '权限不足噢',
    })
  }
},





  getUserRecord: function () {
    var that = this
    var userid = that.data.openid
    console.log('test',userid)
    //调用后台接口查询该openid是否存在数据库内
    //106.55.49.252
    wx.request({
      url: 'http://localhost:8080/getUserRecord',
      data: {
        openid: userid
      },
      success(res) {
        console.log("调用后端接口成功", res)
        if(res.data==null){
          wx.navigateTo({
            url: '../write_myInfo/write_myInfo',
          })
        }
      },
      fail(res) {
        console.log("调用后端接口失败", res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getopenid()
    console.log('onReady:',this.data.openid)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
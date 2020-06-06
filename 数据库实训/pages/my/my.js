var app = getApp()
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:''
  },
  //获取openId
  getopenid:function() {
    console.log("setlogin被调用了")
    app.globalData.hasLogin = true
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
  getUserRecord: function () {
    var that = this
    that.getopenid()
    var userid = that.data.openid
    //调用后台接口查询该openid是否存在数据库内
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
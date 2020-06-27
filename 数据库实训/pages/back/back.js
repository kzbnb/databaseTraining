// pages/back/back.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:''
  },
  //获取openId
  getopenid: function () {
    // app.globalData.hasLogin = true
    let that = this;
    wx.cloud.callFunction({
      name: "getOpenId",
      success(res) {
        let openId = res.result.openid
        that.setData({
          openid: openId
        })
      }
    })
  },
  Quit:function(){
    wx.request({
      url: 'http://localhost:8080/deleteAdmin',
      data:{
        openid:this.data.openid
      },success(res){
        console.log(res)
    
      }
    })
    wx.showToast({
      title: '提交成功',
    })
    
    
  },
  goToAddAdmin:function(){
    wx.navigateTo({
      url: '/pages/addAdmin/addAdmin',
    })
  },
  goTodeleteactivity: function () {
    wx.navigateTo({
      url: '/pages/deleteActivity/deleteActivity',
    })},
  goTodeleteTurn: function () {
    wx.navigateTo({
      url: '/pages/deleteTurn/deleteTurn',
    })
  },
  goToaddTurn: function () {
    wx.navigateTo({
      url: '/pages/addTurn/addTurn',
    })
  },
  goToaddactivity :function () {
    
      wx.navigateTo({
        url: '/pages/addactivity/addactivity',
      })
    },
    goToexcel :function () {
    
      wx.navigateTo({
        url: '/pages/excel/excel',
      })
    },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getopenid()
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
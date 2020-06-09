// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {src:"/images/8.jpg"},
      {src :"/images/shouye3.jpg"}
    ],
  name:'',
  id:'',
  openid:'',
  activityList:[]
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
    //查所有activity
    var that=this;
      wx.request({
        //106.55.49.252
        url: 'http://106.55.49.252:8080/showAllactivity',
        success:function(res)
        {
            console.log(res);
            that.setData({
              activityList:res.data
            })
            console.log(that.data.activityList)
        }
      })
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
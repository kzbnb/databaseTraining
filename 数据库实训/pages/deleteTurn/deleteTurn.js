// pages/deleteTurn/deleteTurn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    activityList: [],
    //turns:[] ,
    turns: [],
    takesNeedTurn: [],
    title: '',
    targetId: '',
    openId: [],
    info: [],
    targetOpenId: [],
    targetUserInfo: [],
    fileUrl: ''
  },
  getActivityListAndName: function (e) {
    var that = this;
    wx.request({
      //106.55.49.252
      url: 'http://localhost:8080/showAllactivity',
      success: function (res) {
        console.log(res);
        that.setData({
          activityList: res.data
        })
        console.log(that.data.activityList)
        for (var i = 0; i < that.data.activityList.length; i = i + 1) {
          if (that.data.activityList[i].activity_id == that.data.id) {
            that.setData({
              title: that.data.activityList[i].title
            })
          }
        }
        console.log(that.data.title)
        that.getTurnByActivityId();
      }
    })
  },
  getTurnByActivityId: function () {
    let that = this
    wx.request({
      url: 'http://localhost:8080/getTurnByActivityId',
      data: {
        activity_id: that.data.id
      },
      success(res) {
        console.log(res, '1')
        that.setData({
          turns: res.data
        }),

          console.log(that.data.turns, '2')
        //that.getTurnId()
      }
    })

  },

  getActivityId: function (e) {
    let input = e.detail.value
    this.setData({
      id: input
    })
  },
  delete:function(options){
    wx.request({
      url: 'http://localhost:8080/deleteTurn',
      data:{
        turn_id: options.currentTarget.dataset.id
      },
      success(res){
        console.log(res)
        wx.redirectTo({
          url: "../deleteTurn/deleteTurn"
        })
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
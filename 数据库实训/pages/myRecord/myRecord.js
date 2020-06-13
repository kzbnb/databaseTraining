// pages/myRecord/myRecord.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  openid:'',
  takes:[],
  myTurn:[],
  isOk:false,
  a:0
  },
  //获取openId
  getopenid: function () {
    // app.globalData.hasLogin = true
    let that = this;
    wx.cloud.callFunction({
      name: "getOpenId",
      success(res) {
        // app.globalData.openid = res.result.openid
        let openId = res.result.openid
        that.setData({
          openid: openId
        })
      }
    })
  },
  quit:function(options){

  },
  getTurnByTurnId: function () {
    //根据班次id去获取班次内容
    let that = this
    console.log("takes",this.data.takes)
    var idArray=JSON.stringify(this.data.takes)
    console.log(idArray)
      wx.request({
        url: 'http://localhost:8080/getTurnByTurnIdArray',
        data: {
          turn_id: idArray
        },
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log("后端调用失败", res)
        }
      })

  },
  getTurnId:function(){
    //先获取报名的班次id
    let that=this
    wx.request({
      url: 'http://localhost:8080/getTakesByOpenId',
      data: {
        openid: app.globalData.openid
      },
      success(res) {
        console.log(res)
        that.setData({
          takes: res.data
        })
        that.getTurnByTurnId()
      }
    })
   
  },
  
  getTurnByTurn:function(){this.onReady()},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getopenid()
    let that = this
    that.getTurnId()
    
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
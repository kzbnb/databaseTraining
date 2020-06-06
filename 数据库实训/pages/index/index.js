// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  name:'',
  id:'',
  openid:''
  },
  getopenid: function () {
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
  getName: function (e) {
    let input = e.detail.value
    this.setData({
      name: input
    })
  },
  getId: function (e) {
    let input = e.detail.value
    this.setData({
      id: input
    })
  },
add:function(){
this.getopenid()
wx.request({
  url: 'http://localhost:8080/login',
  data:{
    name: this.data.name,
    id:this.data.id-0
  },
  success(res){
    console.log(res);
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
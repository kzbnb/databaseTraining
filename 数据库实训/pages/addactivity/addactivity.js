
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    id:''
  },
  addName:function(e){
    this.setData({
      title:e.detail.value
    })
  },
  addId: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  uploadActivity:function(){
    wx.request({
      url: 'http://localhost:8080/addActivity',
      data: {
        title: this.data.title,
        activity_id: this.data.id,
      },
      success: function (res) {
        console.log(res);
        if(res.statusCode==500){
          wx.showToast({
            title: '该id已被使用',
          })
        }
        else{
        wx.showToast({
          title: '提交成功',
        })
        }
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
// pages/myInfo/myInfo.js
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    stuNum: '',
    tel: '',
    grade: '',
    classNum: '',
    openid:''
  },

  //添加姓名
  getName: function (e) {
    this.setData({
      name:e.detail.value
    })
    // console.log(e)
  }, 
  // 添加年级
  getGrade: function (e) {

    this.setData({
      grade: e.detail.value
    })
    // console.log(e)
  },

  getStuNum: function (e) {
    this.setData({
      stuNum: e.detail.value
    })
    // console.log(e)
  },

  //添加电话号码
  getTel: function (e) {
    this.setData({
      tel: e.detail.value
    })
    // console.log(e.detail.value)
  },

  // 添加班级
  getClass: function (e) {
    this.setData({
      classNum: e.detail.value
    })
  },

  getopenid: function () {
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

  addData() {
    console.log('test:',this.data.openid)
    console.log(this.data.name,this.data.stuNum,this.data.grade,this.data.tel,this.data.classNum)
    wx.request({
      url: 'http://106.55.49.252:8080/insertUserIntoDatabase',
      data:{
        openid:this.data.openid,
        name:this.data.name,
        tel:this.data.tel,
        grade:this.data.grade,
        classNum:this.data.classNum,
        stuNum:this.data.stuNum
      },
      success(res){
        wx.showToast({
          title: '注册成功',
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
    this.getopenid()
    console.log(this.data.openid)
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
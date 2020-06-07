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
    console.log(e)
  }, 
  // 添加年级
  getGrade: function (e) {

    this.setData({
      grade: e.detail.value
    })
    console.log(e)
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
    console.log('test:',this.data.name,this.data.stuNum,this.data.grade,this.data.tel,this.data.classNum)
    wx.request({
      url: 'http://localhost:8080/insertUserIntoDatabase',
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
        wx.navigateBack({
          
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onReady: function () {

    this.getopenid()
    console.log(this.data.openid)
  },
})

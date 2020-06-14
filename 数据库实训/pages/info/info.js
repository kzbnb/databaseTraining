// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    usernum: "",
    usertel: "",
    usergrade: "",
    userclass: "",
    usertime: "",
    openid: '',
    id: ''
  },
 /* changeMyInfo(e) {
    let that = this
    wx.cloud.callFunction({
       name: "getOpenId",
       success(res) {
         let openId = res.result.openid
         that.setData({
           openid: openId
         })
         var userid = that.data.openid
         DB.where({
            _openid: userid
          }).get({  
            success(res) {
              if (res.data[0] == null) {
                console.log("没在")
                that.goToWriteMyInfo()
              }
              else {
                var id1 = res.data[0]._id
                that.setData({
                  id: id1
                })
                console.log(id1)
                wx.navigateTo({
                  url: '/pages/changeInfo/changeInfo?id=' + id1,
                })
              }
            },
            fail(res) {
              console.log("fail", res)
            }
          })
         wx.request({
           url: 'http://localhost:8080/getUserRecord',
           data:{
             openid:userid
           },
           success(res) {
             console.log("调用后端接口成功", res)
             if (res.data == null) {
               wx.navigateTo({
                 url: '../write_myInfo/write_myInfo',
               })
             }
             else {
               var id1 = res.data[0]._id
               that.setData({
                 id: id1
               })
               console.log(id1)
               wx.navigateTo({
                 url: '/pages/changeInfo/changeInfo?id=' + id1,
               })
             }
           },
           fail(res) {
             console.log("调用后端接口失败", res)
           }
         })

   },*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.callFunction({
      name: "getOpenId",
      success(res) {
        let openId = res.result.openid
        console.log(res)
        that.setData({
          openid: openId
        })
        var userid = that.data.openid
        console.log(userid)
        // DB.where({
        //   _openid: userid
        // }).get({
        //   success(res) {
        //     if (res.data[0] == null) {
        //       console.log("没在")
        //     }
        //     else {
        //       console.log(res.data[0])
        //       that.setData({
        //         username: res.data[0].name,
        //         usernum: res.data[0].num,
        //         usertel: res.data[0].tel,
        //         usergrade: res.data[0].grade,
        //         userclass: res.data[0].class
        //       })
        //       console.log(that.data.username, that.data.usernum)


        //     }
        //   },
        //   fail(res) {
        //     console.log("fail", res)
        //   }
        // })
        wx.request({
          url: 'http://106.55.49.252:8080/getUserInfo',
          data: {
            openid: userid
          },
          success(res) {
            console.log(res)
            that.setData({
                username: res.data.name,
                usernum: res.data.stuNum,
                usertel: res.data.tel,
                usergrade: res.data.grade,
                userclass: res.data.classNum
              })
          }
        })
      }
    })  
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

  },

/*页面跳转*/ 
writeInfo:function(){
  wx.navigateTo({
    url: '../write_myInfo/write_myInfo',
  })
}
})
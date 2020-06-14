// pages/activity/activity.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    turn:[],
    id:'',
    openid:'',
    takes:[],
  },
  //大致流程，先通过函数调去takes表中该用户报名的记录，存在数组里，显示的时候根据匹配数组内容显示
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
  //根据openid去获取takes表里面的记录
  getTakes:function(){
    let that=this
    wx.request({
      url: 'http://localhost:8080/getTakesByOpenId',
      data:{
        openid:this.data.openid
      },
      success(res){
        // console.log(res)
        that.setData({
          takes:res.data
        })
      }
    })
  },

  participate:function(options){
    console.log(options)
    if(!app.globalData.hasLogin){
      wx.showModal({
        title: '你还未登录',
        content: '请先登录',
      })
    }else{
    this.getTakes()
    for(var i=0;i<this.data.takes.length;i++){
      if(options.currentTarget.dataset.id==this.data.takes[i]){
        wx.showModal({
          title: '你已报名该班次',
          content: '请勿重复报名',
        })
        return null
      }
    }
    let that = this
    let turn_id = options.currentTarget.dataset.id
    //检测attendNum<LIMIT?
    wx.request({
      url: 'http://localhost:8080/getTurnByTurnId',
      data:{
        turn_id:turn_id
      },success(res){
        console.log(res)
        let res1=res   
        if(res.data.attendNum<res.data.limitPeople){

          wx.request({
            url: 'http://localhost:8080/addTakes',
            data: {
              open_id: that.data.openid,
              turn_id: turn_id
            }, success(res) {
              console.log(res)
              if (res.data == "ok") {
                wx.showModal({
                  title: '报名成功',
                  content: '报名成功',
                })
                console.log("res:",res1)
                // 报名成功之后更新班次信息的attendNum
                wx.request({
                  url: 'http://localhost:8080/updateTurn',
                  data:{
                    turn_id:res1.data.turn_id,
                    attendNum:res1.data.attendNum+1,
                    begin_time:res1.data.begin_time,
                    end_time:res1.data.end_time,
                    limitPeople:res1.data.limitPeople,
                    earlyOrNoon:res1.data.earlyOrNoon,
                    placeName:res1.data.placeName,
                    date:res1.data.date
                  },
                  success(res){
                    console.log('success',res)
                  }
                })
              }
            }
          })
        }
      else{
        wx.showModal({
          title: '人数已超限制',
          content: '可在群内进行协商',
        })
      }
      }
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getopenid()
    var that=this
    that.setData({
      id: options.id
    })
    console.log('test',that.data.id)
    wx.request({
      url: 'http://localhost:8080/showTurnByPlaceName',
      data:{
        placeName:that.data.id
      },
      success(res){
        console.log(res)
        that.setData({
          turn:res.data
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

  }
})




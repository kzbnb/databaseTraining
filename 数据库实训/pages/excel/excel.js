// pages/excel/excel.js
const DB10 = wx.cloud.database().collection("participant")
const DBB10 = wx.cloud.database().collection("intro")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    activityList:[],
    //turns:[] ,
    turns:[
      {
        turn_id : 2,
        begin_time:'8:00',
        end_time:'12:00',
        placeName:'东北',
        earlyOrNoon:1
        },
        {
          turn_id : 4,
          begin_time:'7:00',
          end_time:'9:00',
          placeName:'西南',
          earlyOrNoon:0
          }
    ],
    takesNeedTurn:[],
    title:'',
    targetId:'',
    openId:[],
    info:[],
    targetOpenId:[],
    targetUserInfo:[],
    fileUrl:''
  },
  
  getActivityId: function (e) {
    let input = e.detail.value
    this.setData({
      id: input
    })
  },

getActivityListAndName:function(e)
{
  var that=this;
  wx.request({
    //106.55.49.252
    url: 'http://localhost:8080/showAllactivity',
    success:function(res)
    {
        console.log(res);
        that.setData({
          activityList:res.data
        })
        console.log(that.data.activityList)
        for (var i = 0; i < that.data.activityList.length; i=i+1) {  
          if(that.data.activityList[i].activity_id==that.data.id)
          {
            that.setData({
              title:that.data.activityList[i].title
            })
          }
      }  
      console.log(that.data.title)

      that.getTurnByActivityId();

    }
  })
},

getTurnByActivityId:function()
{
  let that=this
  wx.request({
    url: 'http://localhost:8080/getTurnByActivityId',
    data: {
      activity_id: that.data.id
    },
    success(res) {
      console.log(res,'1')
      that.setData({
        turns: res.data
      }),
      
      console.log(that.data.turns,'2')
      //that.getTurnId()

      
     
    }
  })

},



getID:function(){
    

  let that=this
  console.log(this.data.targetId)
  wx.request({
    url: 'http://localhost:8080/getOpenidByTurnId',
    data: {
      turn_id: that.data.targetId
    },
    success(res) {
      console.log(res,'2')
      that.setData({
        targetOpenId: res.data
      })

//取info
      for(var i=0;i<that.data.targetOpenId.length;i++)
      {


  wx.request({
    url: 'http://localhost:8080/getUserInfo',
    data: {
      openid: that.data.targetOpenId[i]
    },
    success(res) {
      console.log(res.data)
      that.data.targetUserInfo.push({
        
//单人版test

        name:res.data.name,
        num: res.data.stuNum,
        tel:res.data.tel,
        grade:res.data.grade,
        class:res.data.classNum

      })
      console.log(that.data.targetUserInfo)
      that.setData({
        targetUserInfo:that.data.targetUserInfo
      })
      console.log(that.data.targetUserInfo)
      that.make_to_cloud()


    }

  })
    }
  }

  })
  
  },

     
      /////
    make_to_cloud:function(){
  let that=this
  let array=that.data.targetUserInfo
 
  
  console.log(array)
  if(array.length>1)
  {
  
  for(var i=0;i<array.length;i=i+1)
  {
    for(var p=i+1;p<array.length;p=p+1)
    {
    if(array[i].num==array[p].num)
    {
      array.splice(p,p);
    }
    }
  }
}
  console.log(array)
  wx.cloud.callFunction({
    name:'dataToExcel',
   
    data: {
     info: array,
     
    
   },

    success(res){
      
      console.log('cloud success',res)
     // console.log('that.data.count',that.data.count)
      //console.log('that.data.count_final',that.data.count_final)
      //if(that.data.count==that.data.count_final)
      
      that.getUrl(res.result.fileID)
      
      
    
    },
    fail(res) {
      console.log(res)
    }
  })
},
//////


getUrl:function(fileID){
  let that = this;
  wx.cloud.getTempFileURL({
    fileList: [fileID],
    success: res => {
      // get temp file URL
      console.log("文件下载链接", res.fileList[0].tempFileURL)
      that.setData({
        fileUrl: res.fileList[0].tempFileURL
      })
    },
    fail: err => {
      // handle error
    }
  })
},

copy:function(){
  let that = this
  wx.setClipboardData({
    data: that.data.fileUrl,
    success(res) {
      wx.getClipboardData({
        success(res) {
          console.log("复制成功", res.data) // data
        }
      })
    }
  })

},
getturnId:function(e)
{
  this.setData({
    targetId: e.detail.value
  })
  console.log(e)
},


getinput:function (e) {
    this.getActivityListAndName();
    
},

getExcel:function (e) {
  
this.getID()

  
},

  getStuNum: function (e) {
    this.setData({
      stuNum: e.detail.value
    })
    console.log(e)
  },

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
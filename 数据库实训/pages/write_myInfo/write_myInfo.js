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
    openid:'',
    warnName:'',
    warnStu:'',
    warnTel:'',
    warnGrade:'',
    warnClass:''
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
    console.log(e)
  },

  //添加电话号码
  getTel: function (e) {
    this.setData({
      tel: e.detail.value
    })
    console.log(e.detail.value)
  },

  // 添加班级
  getClass: function (e) {
    this.setData({
      classNum: e.detail.value
    })
    console.log(e.detail.value)
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
      url: 'http://106.55.49.252:8080/insertUserIntoDatabase',
      header: {  
        "Content-Type": "application/x-www-form-urlencoded"  
      }, 
      method:"POST", 
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
          icon:"success",
          image:"../../images/success.jpg",
          duration:2000
        })
        /*wx.navigateBack({
          duration:2000,
          delta:1
        })*/
      },
      fail(){
        wx.showToast({
          title: '注册失败',
          icon:'loading',
          image:"../../images/fail.jpg",
          duration:2000
        })
        /*wx.navigateBack({
          duration:2000,
          delta:1
        })*/
     }
      

    })
  },

  noData1(){
    if (this.data.name == ''){     
      this.setData({
        warnName:"您还未输入姓名"
      })
       }
},
  noData5(){
   if (this.data.classNum == ''){     
      this.setData({
        warnClass:"您还未输入班级"
      })
    } 
  },
  noData2(){  
    if (this.data.stuNum == ''){     
      this.setData({
        warnStu:"您还未输入学号"
      })
    }
  },
  noData3(){
    var value = this.data.tel;
    if(value.length!=11)
    {
      this.setData({
        warnTel:"手机号必须是11位"
      })
    }
   /*if (this.data.tel == ''){     
      this.setData({
        warnTel:"您还未输入手机"
      })
    }*/
  },
  noData4(){
    var value = this.data.grade;
    if(value.length!=4)
    {
      this.setData({
        warnGrade:"年级必须是四位数"
      })
    }
    /*if (this.data.grade == ''){     
      this.setData({
        warnGrade:"您还未输入年级"
      })
    }*/
  },

  data1(){
    this.setData({
      warnName:''
    })
  },
  data2(){
    this.setData({
      warnStu:''
    })
  },
  data3(){
    this.setData({
      warnTel:''
    })
  },
  data4(){
    this.setData({
      warnGrade:''
    })
  },
  data5(){
    this.setData({
      warnClass:''
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



// pages/addactivity/addactivity.js

Page({

  clone: function () {
    var group_div = 1;
    function add_group() {
      var e = document.createElementById("group");
      var div = document.createElement("div");
      div.id = "group" + group_div;
      div.innerHTML = e.innerHTML;
      document.getElementById("form").appendChild(div);
      group_div++;
    }
  },



  /**
   * 选择日期后执行的事件
   * currentSelect 当前点击的日期
   * allSelectedDays 选择的所有日期（当multi为true时，allSelectedDays有值）
   */
  afterTapDay(e) {
    console.log('afterTapDay', e.detail); // => { currentSelect: {}, allSelectedDays: [] }
  },
  /**
   * 当日历滑动时触发(适用于周/月视图)
   * 可在滑动时按需在该方法内获取当前日历的一些数据
   */
  onSwipe(e) {
    console.log('onSwipe', e.detail);
    const dates = this.calendar.getCalendarDates();
  },
  /**
   * 当改变月份时触发
   * => current 当前年月 / next 切换后的年月
   */
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail);
    // => { current: { month: 3, ... }, next: { month: 4, ... }}
  },
  /**
   * 周视图下当改变周时触发
   * => current 当前周信息 / next 切换后周信息
   */
  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail);
    // {
    //    current: { currentYM: {year: 2019, month: 1 }, dates: [{}] },
    //    next: { currentYM: {year: 2019, month: 1}, dates: [{}] },
    //    directionType: 'next_week'
    // }
  },
  /**
   * 日期点击事件（此事件会完全接管点击事件），需自定义配置 takeoverTap 值为真才能生效
   * currentSelect 当前点击的日期
   */
  onTapDay(e) {
    console.log('onTapDay', e.detail); // => { year: 2019, month: 12, day: 3, ...}
    this.setData({
      ddlD: e.detail.day,
      ddlM: e.detail.month,
      ddlY: e.detail.year

    })


  },
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   */
  afterCalendarRender(e) {
    console.log('afterCalendarRender', e);
  },




  /**
   * 页面的初始数据
   */
  data: {
    calendarConfig: {
      multi: true, // 是否开启多选,
      theme: 'elegant', // 日历主题，目前共两款可选择，默认 default 及 elegant，自定义主题在 theme 文件夹扩展
      showLunar: true, // 是否显示农历，此配置会导致 setTodoLabels 中 showLabelAlways 配置失效
      inverse: true, // 单选模式下是否支持取消选中,
      chooseAreaMode: true, // 开启日期范围选择模式，该模式下只可选择时间段
      // markToday: '今', // 当天日期展示不使用默认数字，用特殊文字标记
      // 默认选中指定某天；当为 boolean 值 true 时则默认选中当天，非真值则在初始化时不自动选中日期，
      highlightToday: false, // 是否高亮显示当天，区别于选中样式（初始化时当天高亮并不代表已选中当天）
      takeoverTap: true, // 是否完全接管日期点击事件（日期不会选中），配合 onTapDay() 使用
      preventSwipe: true, // 是否禁用日历滑动切换月份
      firstDayOfWeek: 'Mon', // 每周第一天为周一还是周日，默认按周日开始
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
      showHandlerOnWeekMode: true, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
      /*   disableMode: {  // 禁用某一天之前/之后的所有日期
           type: 'after',  // [‘before’, 'after']
           date: '2020-03-24', // 无该属性或该属性值为假，则默认为当天
         },*/
    },
    imgUrl: '',
    text: '',
    id: '',
    title: "",
    volunteerTime: '',
    add_date: '',
    qqGroup: '',
    ddlY: '',
    ddlM: '',
    ddlD: '',
    place: [],
    limit: '',
    workTime: [],
    addMorningEndTime: '',
    addMorningStartTime: '',
    addNoonStartTime: '',
    addNoonEndTime: '',
    wu: false,
    zao: false,
    radioItems: [
      { name: '早班', value: '早班' },
      { name: '午班', value: '午班' },
      { name: '早班和午班', value: '早班和午班', checked: 'true' }
    ],
    hidden: false,
    checkbox1: [0],
    checkbox2: [0],
    activity:[],
    activityId:'',
  },
  getActivityId:function(e){
    this.setData({
      activityId:e.detail.value-0
    })
  },

  add_group() {
    var cb1 = this.data.checkbox1;
    cb1.push(this.data.checkbox1.length);
    this.setData({
      checkbox1: cb1
    });
  },

  delete_group() {
    var cb1 = this.data.checkbox1;
    if (cb1.length != 1) {
      cb1.pop(this.data.checkbox1.length);
      this.setData({
        checkbox1: cb1
      });
    }
  },

  add_date() {
    var cb2 = this.data.checkbox2;
    cb2.push(this.data.checkbox2.length);
    this.setData({
      checkbox2: cb2
    });
  },

  delete_date() {
    var cb2 = this.data.checkbox2;
    if (cb2.length != 1) {
      cb2.pop(this.data.checkbox2.length);
      this.setData({
        checkbox2: cb2
      });
    }
  },

  radioChange(e) {
    const checked = e.detail.value
    const changed = {}
    for (let i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },

  click() {
    if (this.data.radioItems[0].checked == true) {
      this.setData({
        zao: true
      })
    } else {
      this.setData({
        zao: false
      })
    }
    if (this.data.radioItems[1].checked == true) {
      this.setData({
        wu: true
      })
    } else {
      this.setData({
        wu: false
      })
    }
    if (this.data.radioItems[2].checked == true) {
      this.setData({
        zao: true,
        wu: true
      })
    }
  },
  tapEvent() {
    console.log('按钮被点击')
  },

  addMorningEndTime: function (event) {
    this.setData({ addMorningEndTime: event.detail.value })
  },
  addMorningStartTime: function (event) {
    this.setData({ addMorningStartTime: event.detail.value })
  },
  addNoonStartTime: function (event) {
    this.setData({ addNoonStartTime: event.detail.value })
  },
  addNoonEndTime: function (event) {
    this.setData({ addNoonEndTime: event.detail.value })
  },

  addTime: function (event) {
    var wt = this.data.workTime;
    var t = event.currentTarget.dataset.t;
    wt[t] = event.detail.value;
    /* if(event.detail.value.length <= 1){
       wt.push(event.detail.value);
     }
     else{
       wt.pop();
       wt.push(event.detail.value);
     }
     this.setData({
       workTime: wt
     })*/
    console.log(this.data.workTime)
  },

  addNumberLimit(event) {
    this.setData({ limit: event.detail.value - 0 })
  },

  addPlace(event) {
    var p = this.data.place;
    var g = event.currentTarget.dataset.g;
    p[g] = event.detail.value;
    /*if(event.detail.value.length <= 1){
      p.push(event.detail.value)
    }
    else{
      p.pop();
      p.push(event.detail.value)
    }
    this.setData({ 
      place: p
    })*/
    console.log(this.data.place)
  },

  addName(event) {
    this.setData({ title: event.detail.value })
  },
  addId(event) {
    this.setData({ id: event.detail.value })
  },


  addActivity: function (event) {
    console.log(this.data);
    wx.request({
      url: 'http://localhost:8080/addActivity',
      data: {
        title: this.data.title,
        activity_id: this.data.id,
      },
      success: function (res) {
        console.log(res);
      }


    })

  },

  addTurn: function (event) {
    for (let i = 0; i < this.data.workTime.length; i++) {
      for (let j = 0; j < this.data.place.length; j++) {
        if (this.data.zao == true) {
          wx.request({
            url: 'http://localhost:8080/addTurn',
            data: {
              turn_id: parseInt(this.data.id + Math.random() * 10000  + Math.random() * 10000  + "0"),
              limitPeople: this.data.limit,
              begin_time: this.data.addMorningStartTime,
              end_time: this.data.addMorningEndTime,
              // detailDate:this.data.ddlY+'.'+this.data.ddlM+'.'+this.data.ddlD, 
              detailDate: this.data.workTime[i],
              earlyOrNoon: 1-0,
              attendNum: 0-0,
              placeName: this.data.place[j],
              activity_id: this.data.activityId-0
            },
            success: function (res) {
              console.log(res);
              if (res.statusCode == 500 || res.statusCode == 400){
                wx.showToast({
                  title: '失败乃成功之母',
                })
              }
              else
              {
                wx.showToast({
                  title: '提交成功',
                })
                
              }
            }


          })
        }
        if (this.data.wu == true) {
          console.log(this.data.id + i + j + "1"),
            console.log(this.data);
          wx.request({
            url: 'http://localhost:8080/addTurn',

            data: {
              turn_id: parseInt(this.data.id + Math.random() * 10000  + Math.random() * 10000  + "1"),
              limitPeople: this.data.limit,
              begin_time: this.data.addNoonStartTime,
              end_time: this.data.addNoonEndTime,
              detailDate: this.data.workTime[i],
              earlyOrNoon: 0-0,
              attendNum: 0-0,
              placeName: this.data.place[j],
              activity_id: this.data.activityId-0
            },
            success: function (res) {
              console.log(res);
            }


          })

        }
      }
    }
  },


  uploadActivity: function (event) {
    console.log(this.data)
    this.addTurn();



  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this
   wx.request({
      //106.55.49.252
      url: 'http://localhost:8080/showAllactivity',
      success: function (res) {
        console.log(res);
        that.setData({
          activity: res.data
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
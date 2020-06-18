const cloud = require('wx-server-sdk')
//这里最好也初始化一下你的云开发环境
cloud.init()
//操作excel用的类库
const xlsx = require('node-xlsx');


// 云函数入口函数
exports.main = async (event, context) => {
  try {   
    var alldata = [];
    let userdata = event.info
    
    console.log(userdata,"userdata")

    //1,定义excel表格名
    let dataCVS = 'test.xlsx'
    //2，定义存储数据的
   
    let row = ['姓名', '学号', '手机号','年级','班级']; //表属性
    alldata.push(row);
    console.log(alldata)

    for (let key in userdata) {
      console.log("di",key)
      let arr = [];
      console.log(alldata,4)
      console.log(userdata,5)
      arr.push(userdata[key].name);
      console.log(arr,3)
      arr.push(userdata[key].num);
      arr.push(userdata[key].tel);
      arr.push(userdata[key].grade);
      arr.push(userdata[key].class);

      alldata.push(arr)
      console.log(arr,2)
      console.log(alldata,1)

    }
    //3，把数据保存到excel里
    var buffer = await xlsx.build([{
      name: "mySheetName",
      data: alldata
    }]);
    //4，把excel文件保存到云存储里
    return await cloud.uploadFile({
      cloudPath: dataCVS,
      fileContent: buffer, //excel二进制文件
    })

  } catch (e) {
    console.error(e)
    return e
  }
}


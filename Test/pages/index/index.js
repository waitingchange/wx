//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    src:"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg",
    motto: 'Hello World',
    userInfo: {},
    films:[1,1,1,1],
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

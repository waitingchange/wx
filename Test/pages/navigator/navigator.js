Page({
  data: {
    movies: [],
    loading: false
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    fetch('https://api.douban.com/v2/movie/top250').then(function(response) {
      if (response.status !== 200) {
        console.log("error：" + response.status)
        return
      }
      response.json().then(function(data) {
        that.setData({
          movies: data.subjects,
          loading: false
        });
      })
    })
  },
  onReady: function() {
    // 页面渲染完成

  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  onReachBottom() {
    console.log("fuck bottom");
  }
})
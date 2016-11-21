//index.js
//获取应用实例
var url = 'https://api.douban.com/v2/movie/in_theaters';
var pageSize = 20;
var app = getApp()
Page({
  data: {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },
  //事件处理函数
  onLoad: function() {
    console.log('onLoad')
    var that = this
      //调用应用实例的方法获取全局数据
    that.setData({
      showLoading: true
    })

    this.getCity(function(city) {
      that.fetchFilms(url, city, 0, pageSize, function(data) {
        console.log("fuck return data is " + data);
        that.setData({
          showLoading: false
        })
      })
    });


    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  getLocation: function(cb) {
    var location = null;
    if (location) {
      cb(location)
      return;
    }
    wx.getLocation({
      success: function(res) {
        var locationParam = res.latitude + ',' + res.longitude
        console.log("fuck locationParam is " + locationParam);
        fetch('https://api.map.baidu.com/geocoder/v2/?ak=' + '7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK' + '&location=' + locationParam + '1&output=json&pois=1').then(function(response) {
          response.json().then(function(data) {
            location = data.result
            cb(data.result)
          })
        })
      }
    })
  },
  getCity: function(cb) {
    this.getLocation(function(location) {
      cb(location.addressComponent.city.replace('市', ''))
      console.log("location.addressComponent.city.replace('市', '') " + location.addressComponent.city.replace('市', ''))
    })
  },
  fetchFilms: function(url, city, start, count, cb) {
    var that = this
    fetch(url + '?city=' + city + '&start=' + start + '&count=' + count).then(function(response) {
      response.json().then(function(data) {
        if (data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            films: that.data.films.concat(data.subjects),
            start: that.data.start + data.subjects.length
          })
        }
        cb(data)
      })
    })
  }
})
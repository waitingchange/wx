Page({
  data: {
    text: "Page canvas"
  },
  onLoad: function (options) {



    var drawBg = function () {
      var bg_img = {
        "src": "../../images/bg.jpg",
        "width": 375,
        "height": 666
      };

      var bg_img_width = bg_img.width;
      var bg_img_height = bg_img.height;


      var cxt = wx.createContext();
      cxt.drawImage(bg_img.src, 0, 0, bg_img_width, bg_img_height);
      wx.drawCanvas({
        canvasId: "canvas",
        actions: cxt.getActions()
      })
      requestAnimationFrame(drawBg);
    }
    drawBg();




  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
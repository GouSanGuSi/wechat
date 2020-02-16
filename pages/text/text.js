// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  getPhont () {
    // 内置方法调用打开相册的接口
    wx.chooseImage({
      success: (res) => {
        console.log(res.tempFiles[0].path)
        this.setData({
          imagePath: res.tempFiles[0].path
        })
      }
    })
  },
  changVal (event) {
    console.log(event)
  }

})
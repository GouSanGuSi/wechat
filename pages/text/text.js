// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  onLoad: function (query) {
    console.log(query)

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
  },
  // 这种方式可以拿到子组件,修改子组件的数据,但是不符合规范,谁的数据谁来修改 一般情况下是给子组件定义一个接口
  // 知识点:  selectComponent
  handchangeNum () {
    const data = this.selectComponent('#perSon')
    // data.setData({
    //   outdata: data.data.outdata + 10
    // })
    data.jianData(10)
    // console.log(data.data.outdata + 10)
  },
  handchangs () {
    wx.navigateTo({
      // 可以传递一个字符串,可以传多个参数中间中&符号链接,可以传递对象,但是要转换成字符串,
      // 接收到再转转回去
      url: '../../pages/wxml/wxml?name=' + JSON.stringify({ name: 'zhangs' }),
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(res)
      },
    })
  }

})
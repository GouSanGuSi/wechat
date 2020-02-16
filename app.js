//app.js
// 注册一个小程序的示例 个人理解相当于一个new Vue
App({
  onLaunch: function () {
    console.log('小程序初始化完成后执行')
    // 获取用户的信息
    wx.getUserInfo({
      success: function (info) {
        console.log(info)
      }
    })
  },
  // 判断小程序的进入场景,也就是通过什么方式打开的小程序
  onShow: function (option) {
    console.log(option)
  },
  onHide: function () {
    console.log('小程序退出了')
  },
  // 注册全局数据  用于其他页面
  globalData: {
    username: 'zhangs',
    age: 18
  }
})
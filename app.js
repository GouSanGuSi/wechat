//app.js
// 注册一个小程序的示例 个人理解相当于一个new Vue

// 登陆思路,首先先去本地存储里看有没有token,有两个分支:
// 1个是有token  2.是没有token ,没有token 的话呀要去那code 去换取token ,然后在保存到全局
// 如果是有token ,还要去验证token 有没有过期

App({
  globalData: {
    token: ''
  },
  onLaunch: function () {
    wx.login({
      success (res) {
        console.log(res)
        // 把请求回来的code 发送给本公司的服务器,换取token, 等token 回来后保存到全局,这样就能请求到所有的了.
      }
    })
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
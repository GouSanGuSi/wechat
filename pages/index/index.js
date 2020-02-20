//index.js
//获取应用实例
// 获取入口中的全局数据用于其他页面  通过 getApp() 来获取
// const app = getApp()
// console.log(app.globalData)
// 调用Page()方法称之为注册一个页面
import request from '../../tools/network'
Page({
  // 初始化一些数据
  data: {
    messages: 'hello wold',
    list: []
  },
  // 执行一些生命周期函数 和请求
  onLoad () {
    // console.log('onLoad  页面被加载出来了')
    // 自己封装了 请求函数 request 解决了回调地狱问题
    request({
      url: 'http://ttapi.research.itcast.cn/mp/v1_0/channels',

    }).then((res) => {
      // console.log(res.data.data)
      this.setData({
        list: res.data.data.channels
      })
    }).catch((err) => {

    })
  },
  onShow () {
    console.log('onShow 页面显示出来')
  },
  onHide () {
    console.log('onHide 页面隐藏起来是')
  },

  onReady () {
    console.log("onReady 页面首次渲染完成")
  },
  onUnload () {
    console.log('onUnlod 执行了')
  },

  // 监听wxml中定义的一些事件
  gethelp: function () {
    this.setData({
      messages: 'hehe'
    })
  },
  getHandUserinfo: function (event) {
    console.log(event.detail)
  },
  // 监听一些其他的事件比如:页面滚动/上拉刷新/下拉加载等等这些没有在wxml 中定义的事件
  // 页面滚动时触发
  // onPageScroll (res) {
  //   console.log(res.scrollTop)
  // }
  // 上拉加载更多  自己去查API
  // onReachBottom () {
  //   console.log('已经到底部了')
  // }
  // 下拉刷新
  // 需要配置"enablePullDownRefresh": true
  // onPullDownRefresh () {
  //   console.log('下拉刷新')
  // }

})

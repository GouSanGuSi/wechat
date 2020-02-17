// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: true,
    scorce: 50
  },
  handGetchange () {
    this.setData({
      messages: !this.data.messages
    })
  },
  handAdd () {
    this.setData({
      scorce: this.data.scorce + 8
    })

  }
})
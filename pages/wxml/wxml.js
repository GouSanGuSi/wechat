// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: true,
    scorce: 50,
    num: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10]
    ]
  },
  onLoad: function (query) {
    console.log(JSON.parse(query.name))

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
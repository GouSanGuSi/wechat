// pages/wxs/wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['苹果', '香蕉', '橘子']
  },
  handItem (event) {
    console.log(event.target.dataset.index)
    console.log(event.target.dataset.item)
  }

})
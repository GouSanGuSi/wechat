// components/pren-son/pren-son.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    outdata: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jianData (num) {
      // console.log(this.outdata)
      this.setData({
        outdata: this.data.outdata + num
      })
    }

  }
})

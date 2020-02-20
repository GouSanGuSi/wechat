// components/comp-event/comp-event.js
Component({
  /**
   * 组件的属性列表
   */
  // 刚才出的一个bug,解决了很久,原因是 titles 是个对象,没有加type 自己写成:titles:Array,value:[]
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex: "0"

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handadd () {
      // console.log('被点击了')
      this.triggerEvent('inadd', { name: 'zhangs', age: "12" })
    },
    handShow (event) {
      // console.log(event)
      const index = event.currentTarget.dataset.index
      this.setData({
        currentindex: index
      })
      // console.log(this.properties.titles[index])
      this.triggerEvent('useshow', { index, title: this.properties.titles[index] })
    }
  }
})

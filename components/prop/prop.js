// components/prop.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['my-class'],
  properties: {
    title: {
      type: String,
      value: '我是默认值',
      observer: function (n, l) {
        console.log(n, l)
      },

    },
    content: {
      type: String,
      value: '我是默认值内容',
    }
  },
  // externalClasses: ["titleclass"]

})

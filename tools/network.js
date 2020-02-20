export default function request (option) {
  // 利用了promise  里面是两个回调函数 所以可以直接赋值
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url,
      method: option.method || 'get',
      data: option.data || {},
      success: resolve,
      fail: reject
    })

  })


}
//app.js
App({
// 当小程序运行时
onLaunch(){
  var self = this;
  wx.getSystemInfo({
    success(res) {
      self.globalData.wh = res.windowHeight
    }
  }) 
},
globalData : {
  wh : 200
}
})
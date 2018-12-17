// pages/info/info.js
Page({
  data:{
    name : "",
    info : "",
    pic  : ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({id}) {
      var self = this;
      wx.request({
        url: 'http://127.0.0.1/xiangqing?id='+id,
        success({data}){
          var data = data.arr[0];
          self.setData({
            name : data.name,
            info : data.info,
            pic : data.pic
          })
        }
      })
  }
})
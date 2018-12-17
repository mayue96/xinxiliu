const app = getApp();

Page({
  data: {
    content : ""
  },
  changeContent(event){
    this.setData({
      content: event.detail.value
    })
  }
})
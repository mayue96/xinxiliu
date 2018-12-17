const app = getApp()

Page({
  data : {
    r : 100,
    g : 144,
    b : 188
  },
  setColor(event){
    var color = event.target.dataset.color
    this.setData({
      [color] : event.detail.value
    })
  }
})
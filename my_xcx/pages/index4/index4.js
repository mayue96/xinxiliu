// pages/index4/index4.js
const app = getApp();
function queryServer(page){
  var self = this;
  wx.request({
    url: 'http://127.0.0.1/hua?page=' + page,
    success({ data }) {
      console.log(data.arr)
      if(data.arr.length == 0){
        self.data.isMore = false;
      }
      self.setData({
        hua: [
          ...self.data.hua,
          ...data.arr
        ]
      })
    }
  })
}
Page({
  data:{
    page : 1,
    wh : 0,
    isMore : true,
    searchContent : "",
    hua:[
      
    ]
  },
  onLoad(){
    queryServer = queryServer.bind(this);
    this.setData({
      wh : app.globalData.wh
    });
    queryServer(1)
  },
  tolower(){
    if(this.data.isMore){
      this.setData({
        page: this.data.page + 1
      });
      queryServer(this.data.page)
    }
  },
  searchContent(event){
    var self = this;
    this.setData({
      searchContent: event.detail.value
    });
    wx.request({
      url: 'http://127.0.0.1/search?word=' + self.data.searchContent,
      success({data}){
        self.setData({
          hua : data.arr
        })
      }
    })
  },
  clear(){
    this.setData({
      searchContent : "",
      hua : []
    });
    queryServer(1)
  },
  toInfo(event){
    wx.navigateTo({
      url: '/pages/info/info?id='+event.currentTarget.dataset.id
    })
    console.log(event)
  }
})
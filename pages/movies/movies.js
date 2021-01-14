// pages/movies/movies.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult: false,
    searchData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        console.log("电影列表结果：", res.data);
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'coming_soon?start=0&count=3',
      success: (res) => {
        console.log("电影列表结果：", res.data);
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'top250?start=0&count=3',
      success: (res) => {
        console.log("电影列表结果：", res.data);
        this.setData({
          top250: res.data.subjects
        })
      }
    })
  },

  onConfirm(event) {
    this.setData({
      searchResult: true
    })
    // console.log(event.detail.value);
    const {value} = event.detail;
    wx.request({
      url: app.gBaseUrl + 'search',
      data: {
        q: value
      },
      success: (res) => {
        this.setData({
          searchData: res.data.subjects
        })
        console.log('搜索结果：', res)
      },fail: () => {

      }
    })
  },
  onSearchCancel() {
    this.setData({
      searchResult: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
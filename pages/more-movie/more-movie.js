// pages/more-movie/more-movie.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    _type: "",
    _total: 0,
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    console.log("配置：", options)
    const { type } = options
    this.setData({
      _type: type
    })
    wx.request({
      url: app.gBaseUrl + type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        wx.hideNavigationBarLoading()
        console.log("电影列表结果：", res.data);
        this.setData({
          movies: res.data.subjects,
          _total: res.data.total
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    const tutles = {
      'in_theaters': '正在热映',
      'coming_soon': '即将上映',
      'top250': 'Top250',
    }
    wx.setNavigationBarTitle({
      title: tutles[this.data._type],
    })
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
    console.log('下拉操作');
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: 0,
        count: 12
      },
      success: (res) => {
        console.log("电影列表结果：", res.data);
        // this.data.movies.push(res.data.subjects)
        this.setData({
          movies: res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
    if (this.data._total === this.data.movies.length) {
      return;
    }
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data: {
        start: this.data.movies.length,
        count: 12
      },
      success: (res) => {
        wx.hideNavigationBarLoading()
        console.log("电影列表结果：", res.data);
        // this.data.movies.push(res.data.subjects)
        this.setData({
          movies: this.data.movies.concat(res.data.subjects)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
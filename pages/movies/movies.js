// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    // coming
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',
      success: (res) => {
        console.log("电影列表结果：", res.data);
        this.setData({
          inTheaters: res.data.subjects
        })
      }
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
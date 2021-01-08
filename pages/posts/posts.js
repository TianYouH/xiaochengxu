var postsData = require('../../data/posts-data.js');

// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorageSync('flag', true)
    // wx.removeStorageSync('flag')
    // wx.clearStorageSync();
    // const flag = wx.getStorageSync('flag')
    this.setData({
      posts_key: postsData.postList
    })
    // console.log('onLoad:', this.data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */ 
  onPullDownRefresh: function () {
    // console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log('onShareAppMessage');
  },

  // onGotoPostDetailTap: function (event) {
  //   // console.log('event：', event);
  //   // console.log('id：', event.currentTarget.dataset.id);
  //   const pid = event.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: `../post-detail/post-detail?pid=${pid}`,
  //   })
  // }
})
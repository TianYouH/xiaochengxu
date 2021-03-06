var postsData = require('../../data/posts-data.js');
const API = require("../../apis/index.js");
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
    console.log('onLoad:', API);
    API.ItHomeApi.getItHomePageData()
  },
  /**
   * 顶部轮播点击跳转
   */
  onPostTap(event) {
    console.log('自定义组件事件测试', event);
    const pid = event.currentTarget.dataset.id;
    // const pid = this.properties.item.postId;
    wx.navigateTo({
      url: `../post-detail/post-detail?pid=${pid}`,
    })
  },
  /**
   * 自定义组件事件测试
   */
  onPostTap1(event) {
    console.log('自定义组件事件测试', event);
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
})
// pages/movie-detail/movie-detail.js
import { convertToCastString, convertToCastInfos } from "../../utils/util"

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const mid = options.mid;
    wx.request({
      url: app.gBaseUrl + 'subject/' + mid,
      success: (res) => {
        this.processMovieData(res.data);
      }
    })
  },

  processMovieData(movie) {
    movie.directors = convertToCastString(movie.directors);
    movie.castsStr = convertToCastString(movie.casts);
    movie.castsInfo = convertToCastInfos(movie.casts);
    console.log("处理后数据：", movie.castsInfo);
    this.setData({
      movie
    })
  },

  /**
   * 图片预览
   */
  onViewPost() {
    wx.previewImage({
      urls: [this.data.movie.images.large],
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
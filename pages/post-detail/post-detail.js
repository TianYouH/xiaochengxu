// pages/post-detail.js
import {
  postList
} from "../../data/posts-data"
const app = getApp();
console.log('app:', app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    isPlaying: false,
    _pid: null,
    _postsCollected: {},
    _mgr: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      pid
    } = options;
    const _postsCollected = wx.getStorageSync('posts_collected');
    const collected = _postsCollected[pid];
    const postData = postList.find(post => (post.postId === Number(pid)));
    const _mgr = wx.getBackgroundAudioManager();
    // console.log("文章数据：", postData);
    this.setData({
      postData,
      _pid: pid,
      collected,
      isPlaying: this.currentMusicIsPlaying(pid),
      _postsCollected,
      _mgr
    });
    _mgr.onPlay(this.musicStart);
    _mgr.onPause(this.musicEnd);
  },

  onCollect(event) {
    const posts_collected = this.data._postsCollected;
    posts_collected[this.data._pid] = !this.data.collected;
    wx.setStorageSync('posts_collected', posts_collected)
    // this.data.collected = !this.data.collected; // 不会触发数据绑定
    this.setData({
      collected: !this.data.collected
    })
    wx.showToast({
      title: this.data.collected ? '收藏成功' : '取消收藏',
      icon: 'success',
      duration: 2000
    })
  },
  currentMusicIsPlaying(pid) {
    if (app.gIsPlayingMuisc && app.gIsPlayingPostId === pid) {
      return true;
    }
    return false;
  },
  onMusicClick(event) {
    if (this.data.isPlaying) {
      this.musicEnd()
    } else {
      this.musicStart()
    }
  },
  musicStart() {
    // console.log('开始播放')
    const {
      music
    } = this.data.postData;
    this.data._mgr.src = music.url;
    this.data._mgr.title = music.title;
    this.data._mgr.coverImgUrl = music.coverImg
    app.gIsPlayingMuisc = true;
    app.gIsPlayingPostId = this.data._pid;
    this.setData({
      isPlaying: true
    })
  },
  musicEnd() {
    // console.log('暂停播放')
    this.data._mgr.pause();
    app.gIsPlayingMuisc = false;
    app.gIsPlayingPostId = -1;
    this.setData({
      isPlaying: false
    })
  },
  async onShare() {
    const result = await wx.showActionSheet({
      itemList: ['分享到空间', '你好世界', '666'],
    })
    console.log('点击结果：', result);
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
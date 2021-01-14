// components/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ["m-class"],
  properties: {
    type: String,
    title: String,
    movies: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreClick(event) {
      console.log("更多被点击", this.data.type);
      wx.navigateTo({
        url: `/pages/more-movie/more-movie?type=${this.data.type}`,
      })
    }
  }
})

// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
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
    onGoToDetail() {
      console.log(this.properties.item.id);
      const mid = this.properties.item.id;
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?mid=' + mid
      })
    }
  }
})

// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
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
    onGotoPostDetailTap: function (event) {
      // console.log('event：', event);
      // console.log('id：', event.currentTarget.dataset.id);
      const pid = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../post-detail/post-detail?pid=${pid}`,
      })
    }
  }
})
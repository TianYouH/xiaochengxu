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
      // console.log(this);
      const pid = event.currentTarget.dataset.id;
      // const pid = this.properties.item.postId;
      wx.navigateTo({
        url: `../post-detail/post-detail?pid=${pid}`,
      })
      // 自定义事件
      this.triggerEvent("posttap", { name: "4564" })
    }
  }
})
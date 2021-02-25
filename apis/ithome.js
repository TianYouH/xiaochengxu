const base = "https://www.ithome.com/"

function getItHomePageData() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base,
      success: (res) => {

        // console.log("电影列表结果：", res);
        // console.log("电影列表结果：", jsonObj);
        console.log("电影列表结果：", res.data);
      }
    })
  })
}

export {
  getItHomePageData
}
//index.js
const app = getApp()

Page({
  data: {
    radios: [
      { name: 'product', value: '功能建议', checked: 'true' },
      { name: 'bug', value: '程序错误' },
      { name: 'tease', value: '吐槽' },
    ]
  },
  //事件处理函数
  onLoad: function () {
    
  },

  /**
   * 意见反馈选择改变
   */
  radioChange: function (e) {
    var _this = this;
    var _index = e.target.dataset.index;
    _this.setData({

    })
    console.log(_this.data.radios[_index]);
  },

})

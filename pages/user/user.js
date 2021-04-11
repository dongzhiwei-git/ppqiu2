// pages/user/user.js
Page({
  data:{
    user_message:
      {
        name:"dzw",
        user_img:"../../images/user_head.png",
        user_geqian:"要带飞全场"
      }
  },

  onShow:function(){
    const userinfo=wx.getStorageSync('userInfo');
    const collect = wx.getStorageSync('collect')||[];
    this.setData({userinfo, collectNum:collect.length});
  }
  
})
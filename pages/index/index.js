// index.js
// 获取应用实例
const app = getApp()



Page({
  data: {
    swiperList:[
      {
        imgname : "../../images/banner1.png",
      },
      {
        imgname : "../../images/banner1.png",
      },
      {
        imgname : "../../images/banner1.png",
      }
    ],
    cateList:[
      {
        imgname:"../../images/icon_index_nav_4@2x.png"
      },
      {
        imgname:"../../images/icon_index_nav_4@2x.png"
      },
      {
        imgname:"../../images/icon_index_nav_4@2x.png"
      }
    ],
    data:[
      {
        title:"我是大标是各国使馆豆腐的敢死队风格士大夫敢死队风格题",
        contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
        user_head:"../../images/user_head.png",
        user_name:"用户名111",
        dznum:1000,
        plnum:9099
      },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"../../images/user_head.png",
      user_name:"用户名222",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"../../images/user_head.png",
      user_name:"用户名333",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"../../images/user_head.png",
      user_name:"用户名444",
      dznum:1000,
      plnum:9090
    },
      { title:"我是大标是各国使馆豆腐干山豆根山豆根第三个上的敢死队风格士大夫敢死队风格题",
      contents:"我是内容阿巴巴阿八八八八八说的是豆腐干豆腐十分根深蒂固山豆根是德国的公司的法国队甘特图八八",
      user_head:"../../images/user_head.png",
      user_name:"用户名66",
      dznum:1000,
      plnum:9090
    }
    ]
  },
  // 事件处理函数
  scanCode (){
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
    
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
      }
    })
  },
  onLoad: function (options) {
    wx.cloud.init()
    wx.cloud.callFunction({
      name: "userInfo" }).then(res =>{
      console.log(res)
    })
    
  }
  
  
})

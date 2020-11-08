import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
	sharelink:[
	    {
	      name:"QQ",img:require("../assets/icon/qq_b.png"),img_g:require("../assets/icon/qq_g.png"),img_r:require("../assets/icon/qq_r.png"),url:"http://connect.qq.com/widget/shareqq/index.html?url="+window.location.href+"&title="+document.title+"&summary=糖°的博客"
	    },
	    {
	      name:"空间",img:require("../assets/icon/zone_b.png"),img_g:require("../assets/icon/zone_g.png"),img_r:require("../assets/icon/zone_r.png"),url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&title="+document.title+"&site="+document.title+"&fromurl="+window.location.href
	    },
	    {
	      name:"微博",img:require("../assets/icon/wb_b.png"),img_g:require("../assets/icon/wb_g.png"),img_r:require("../assets/icon/wb_r.png"),url:"http://open.weibo.com/sharebutton"
	    },
	    {
	      name:"贴吧",img:require("../assets/icon/tie_b.png"),img_g:require("../assets/icon/tie_g.png"),img_r:require("../assets/icon/tie_r.png"),url:"http://tieba.baidu.com/f/commit/share/openShareApi?url="+window.location.href+"&title="+document.title
	    },
	  ],

}

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

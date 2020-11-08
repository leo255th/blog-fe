import Vue from 'vue'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI) ;
Vue.use(AntDesignVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

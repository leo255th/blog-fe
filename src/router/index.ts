import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import ReEdit from '../views/ReEdit.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleList from '../views/ArticleList.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:{name:'login'}  // 暂时这样做，之后要写个中转组件
  },
  {
    path: '/user/:userId',
    name: 'Home',
    component: Home
  },
  {
    path:'/article/:articleId',
    name:'Article',
    component:ArticleDetail
  },
  {
    path:'/list/:userId',
    name:'ArticleList',
    component:ArticleList
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/re-edit/:articleId',
    name: 're-edit',
    component: ReEdit
  },  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

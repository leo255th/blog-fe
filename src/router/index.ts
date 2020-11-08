import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EditList from '../views/EditList.vue'
import NewEdit from '../views/NewEdit.vue'
import Detials from '../views/Detials.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/login',
    name:  'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/editlist',
    name: 'editlist',
    component: EditList
  },
  {
    path: '/newedit',
    name: 'newedit',
    component: NewEdit
  },
  {
    path: '/detials',
    name: 'detials',
    component: Detials
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
